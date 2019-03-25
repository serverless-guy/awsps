import { assumableRolesPrompt } from "@prompts/assumableRolesPrompt"
import { inputMFAPrompt } from "@prompts/inputMFAPrompt"
import { assumeAwsRole } from "@utils/assumeAwsRole"
import { loadCredentials } from "@utils/loadCredentials"
import { matchProfile } from "@utils/matchProfile"
import { getMFASerial } from "@aws/configure/getMFASerial"
import { getRoleArn } from "@aws/configure/getRoleArn"
import { list } from "@aws/configure/list"
import { getSessionToken } from "@aws/sts/getSessionToken"
import { setTemporaryCredentials } from "@utils/setTemporaryCredentials"
import { setDefaultCredential } from "@utils/setDefaultCredential"
import * as chalk from "chalk"

export function switchRole() {
  const loaded = loadCredentials()

  return assumableRolesPrompt(loaded).then(async ({ assumedRole }) => {
    const profile = matchProfile(assumedRole)
    const mfa = await getMFASerial(profile)
    const roleArn = await getRoleArn(assumedRole)
    
    try {
      let assumedRoleSessionToken = await assumeAwsRole(assumedRole, roleArn)

      assumedRoleSessionToken = JSON.parse(assumedRoleSessionToken)

      await setDefaultCredential(assumedRoleSessionToken[0], assumedRoleSessionToken[1], assumedRoleSessionToken[2])

      const awsList = await list()

      console.log(awsList)

      console.log(chalk.green(`[${assumedRole}]: Assumed role associated with profile ${profile}`))
    } catch (error) {
      if (!error.match(/(InvalidClientTokenId)|(ExpiredToken)/)) {
        console.log("Something went wrong, contact developer.")

        return
      }

      let mfaToken, sessionTokenResponse

      if (mfa) {
        ({ mfaToken} = await inputMFAPrompt(profile))
  
        sessionTokenResponse = await getSessionToken(profile, mfa, mfaToken)
      } else {
        sessionTokenResponse = await getSessionToken(profile)
      }

      sessionTokenResponse = JSON.parse(sessionTokenResponse)

      await setTemporaryCredentials(sessionTokenResponse[0], sessionTokenResponse[1], sessionTokenResponse[2], profile)

      console.log(chalk.green(`Enabled temporary session for profile ${profile} as default and ${profile}-temp`))

      let assumedRoleSessionToken = await assumeAwsRole(assumedRole, roleArn)

      assumedRoleSessionToken = JSON.parse(assumedRoleSessionToken)
  
      await setDefaultCredential(assumedRoleSessionToken[0], assumedRoleSessionToken[1], assumedRoleSessionToken[2])

      const awsList = await list()

      console.log(awsList)

      console.log(chalk.green(`[${assumedRole}]: Assumed role associated with profile ${profile}`))
    }
  })
}

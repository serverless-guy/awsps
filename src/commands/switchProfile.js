import { profileListPrompt } from "@prompts/profileListPrompt"
import { inputMFAPrompt } from "@prompts/inputMFAPrompt"
import { loadCredentials } from "@utils/loadCredentials"
import { matchProfile } from "@utils/matchProfile"
import { getMFASerial } from "@aws/configure/getMFASerial"
import { getSessionToken } from "@aws/sts/getSessionToken"
import { setTemporaryCredentials } from "@utils/setTemporaryCredentials"
import { list } from "@aws/configure/list"

export function switchProfile() {
  const loaded = loadCredentials()

  return profileListPrompt(loaded).then(async ({ profile }) => {
    profile = matchProfile(profile)

    const mfa = await getMFASerial(profile)

    if (mfa) {
      const { mfaToken } = await inputMFAPrompt(profile)
  
      let sessionTokenResponse = await getSessionToken(profile, mfa, mfaToken)

      sessionTokenResponse = JSON.parse(sessionTokenResponse)

      await setTemporaryCredentials(sessionTokenResponse[0], sessionTokenResponse[1], sessionTokenResponse[2], profile)

      const awsList = await list()

      console.log(awsList)
    }
  })
}

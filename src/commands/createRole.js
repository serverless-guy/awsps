import { getRegion } from "@aws/configure/getRegion"
import { profileListPrompt } from "@prompts/profileListPrompt"
import { inputRoleNamePrompt } from "@prompts/inputRoleNamePrompt"
import { inputAwsRoleArnPrompt } from "@prompts/inputAwsRoleArnPrompt"
import { createRoleTransformer } from "@transformers/createRoleTransformer"
import { setCredentials } from "@utils/setCredentials"
import { loadCredentials } from "@utils/loadCredentials"
import { green } from "chalk"

/**
 * Add new profile to aws/credentials file
 * @param void
 * @return void
 */
export async function createRole() {
  const loaded = loadCredentials()

  let newRoleInfo = { ...(await inputRoleNamePrompt()) }

  newRoleInfo = { ...newRoleInfo, ...(await profileListPrompt(loaded)) }
  newRoleInfo = { ...newRoleInfo, ...(await inputAwsRoleArnPrompt(newRoleInfo.roleName)) }
  newRoleInfo = { ...newRoleInfo, region: await getRegion(`profile-${newRoleInfo.profile}`) }


  setCredentials(createRoleTransformer(newRoleInfo))

  console.log(green(`${newRoleInfo.roleName} for profile ${newRoleInfo.profile} has been added to credentials file`))
}

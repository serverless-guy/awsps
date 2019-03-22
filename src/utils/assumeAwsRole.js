import { getUser } from "@aws/iam/getUser"
import { getSourceProfile } from "@aws/configure/getSourceProfile"
import { assumeRole } from "@aws/sts/assumeRole"

export async function assumeAwsRole(assumedRole, assumeRoleArn) {
  const sourceProfile = await getSourceProfile(assumedRole)
  const roleUser = await getUser(sourceProfile)

  return assumeRole(assumeRoleArn, roleUser, `--profile ${sourceProfile.trim()}`)
}

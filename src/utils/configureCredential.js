import { getRoleArn } from "@aws/configure/getRoleArn"
import { getAccessKeyId } from "@aws/configure/getAccessKeyId"
import { getSecretAccessKey } from "@aws/configure/getSecretAccessKey"
import { getRegion } from "@aws/configure/getRegion"
import { setAccessKeyId } from "@aws/configure/setAccessKeyId"
import { setSecretAccessKey } from "@aws/configure/setSecretAccessKey"
import { setRegion } from "@aws/configure/setRegion"

/**
 * Configure active AWS credential
 * @param {string} profile profile name
 * @return void
 */
export async function configureCredential(profile) {
  const roleArn         = await getRoleArn(profile)
  const accessKey       = await getAccessKeyId(profile)

  if (!!accessKey) {
    const secretAccessKey = await getSecretAccessKey(profile)
    const region          = await getRegion(profile)

    await setAccessKeyId(accessKey)
    await setSecretAccessKey(secretAccessKey)
    await setRegion(region)
  }

  if (!!roleArn) {
    // assume role?
  }
}

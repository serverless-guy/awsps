import { get } from "@aws/configure/get"

/**
 * Get access key id using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getAccessKeyId(profile) {
  return get("aws_access_key_id", `--profile ${profile}`)
}

import { get } from "@aws/configure/get"

/**
 * Get role arn using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getRoleArn(profile) {
  return get("role_arn", `--profile ${profile}`)
}

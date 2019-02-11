import { set } from "@aws/configure/set"

/**
 * Set role arn using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function setRoleArn(value) {
  return set("role_arn", value)
}

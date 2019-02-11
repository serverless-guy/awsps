import { set } from "@aws/configure/set"

/**
 * Set access key id using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function setAccessKeyId(value) {
  return set("aws_access_key_id", value)
}

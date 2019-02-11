import { set } from "@aws/configure/set"

/**
 * Set secret access key using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function setSecretAccessKey(profile) {
  return set("aws_secret_access_key", profile)
}

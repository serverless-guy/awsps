import { set } from "@aws/configure/set"

/**
 * Set session token using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function setSessionToken(value) {
  return set("aws_session_token", value)
}

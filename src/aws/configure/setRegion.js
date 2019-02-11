import { set } from "@aws/configure/set"

/**
 * Set region using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function setRegion(value) {
  return set("region", value)
}

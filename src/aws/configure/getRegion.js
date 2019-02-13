import { get } from "@aws/configure/get"

/**
 * Get region using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getRegion(profile) {
  return get("region", `--profile ${profile}`)
}

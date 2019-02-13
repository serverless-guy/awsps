import { get } from "@aws/configure/get"

/**
 * Get MFA Serial using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getMFASerial(profile) {
  return get("mfa_serial", `--profile ${profile}`)
}

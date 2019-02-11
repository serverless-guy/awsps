import { executeCommand } from "@utils/executeCommand"

/**
 * Get MFA Serial using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getMFASerial(profile) {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get mfa_serial --profile ${profile}`, resolve, reject)
  })
}

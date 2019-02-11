import { executeCommand } from "@utils/executeCommand"

/**
 * Get source profile using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getSourceProfile(profile) {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get source_profile --profile ${profile}`, resolve, reject)
  })
}

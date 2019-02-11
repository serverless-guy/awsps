import { executeCommand } from "@utils/executeCommand"

/**
 * Get region using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getRegion(profile) {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get region --profile ${profile}`, resolve, reject)
  })
}

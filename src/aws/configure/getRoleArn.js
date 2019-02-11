import { executeCommand } from "@utils/executeCommand"

/**
 * Get role arn using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getRoleArn(profile) {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get role_arn --profile ${profile}`, resolve, reject)
  })
}

import { executeCommand } from "@utils/executeCommand"

/**
 * Get secret access key using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getSecretAccessKey(profile) {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get aws_secret_access_key --profile ${profile}`, resolve, reject)
  })
}

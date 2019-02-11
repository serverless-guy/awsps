import { executeCommand } from "@utils/executeCommand"

/**
 * Get access key id using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getAccessKeyId(profile) {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get aws_access_key_id --profile ${profile}`, resolve, reject)
  })
}

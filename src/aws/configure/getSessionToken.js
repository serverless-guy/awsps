import { executeCommand } from "@utils/executeCommand"

/**
 * Get session token using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function getSessionToken(profile) {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get aws_session_token --profile ${profile}`, resolve, reject)
  })
}

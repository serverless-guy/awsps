import { executeCommand } from "@utils/executeCommand"

/**
 * Get key using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function get(key, options = "") {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure get ${key} ${options}`, resolve, reject)
  })
}

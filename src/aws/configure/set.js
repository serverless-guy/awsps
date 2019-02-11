import { executeCommand } from "@utils/executeCommand"

/**
 * Set key using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function set(key, value, options = "") {
  return new Promise((resolve, reject) => {
    return executeCommand(`aws configure set ${key} ${value} ${options}`, resolve, reject)
  })
}

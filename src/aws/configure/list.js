import { executeCommand } from "@utils/executeCommand"

/**
 * List credential using aws configure command
 * @param {string} profile profile name
 * @return Promise
 */
export function list() {
  return new Promise((resolve, reject) => {
    return executeCommand("aws configure list", resolve, reject)
  })
}

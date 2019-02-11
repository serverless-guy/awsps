import { exec } from "child_process"

/**
 * Execute a system command
 * @param {string} cmd command to be executed
 * @param {function} success Promise.resolve function
 * @param {function} error Promise.reject function
 * @returns exec
 */
export function executeCommand(cmd, success, error) {
  return exec(cmd, (err, stdout, stderr) => {
    if (err && err.killed) {
      return error(err)
    }

    if (stderr) {
      return error(stderr)
    }

    return success(stdout)
  })
}

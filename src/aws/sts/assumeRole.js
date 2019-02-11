import { executeCommand } from "@utils/executeCommand"

/**
 * Assume a role using aws configure command
 * @param {string} roleArn role arn
 * @param {string} roleSessionName role session name
 * @return Promise
 */
export function assumeRole(roleArn, roleSessionName, options = "") {
  roleArn         = roleArn.trim()
  roleSessionName = roleSessionName.trim()

  return new Promise((resolve, reject) => {
    executeCommand(`aws sts assume-role --query 'Credentials.[AccessKeyId,SecretAccessKey,SessionToken]' --role-arn ${roleArn} --role-session-name cli-${roleSessionName} ${options} --output json`, resolve, reject)
  })
}

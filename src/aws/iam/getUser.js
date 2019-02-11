import { executeCommand } from "@utils/executeCommand"

/**
 * Get iam user using aws configure command
 * @param {string} profile 
 * @param {string} roleArn role arn
 * @param {string} roleSessionName role session name
 * @return Promise
 */
export function getUser(profile) {
  return new Promise((resolve, reject) => {
    executeCommand(`aws iam get-user --query User.UserName --output text --profile ${profile}`, resolve, reject)
  })
}

import { executeCommand } from "@utils/executeCommand"

/**
 * Get session token using aws configure command
 * @param {string} profile 
 * @param {string} roleArn role arn
 * @param {string} roleSessionName role session name
 * @return Promise
 */
export function getSessionToken(profile, mfaSerial, mfaToken) {
  profile   = profile.trim()
  mfaSerial = mfaSerial.trim()
  mfaToken  = mfaToken.trim()

  return new Promise((resolve, reject) => {
    executeCommand(`aws sts get-session-token --query 'Credentials.[AccessKeyId,SecretAccessKey,SessionToken]' --serial-number ${mfaSerial} --token-code ${mfaToken} --profile ${profile} --output json`, resolve, reject)
  })
}

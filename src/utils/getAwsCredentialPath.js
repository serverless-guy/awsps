import { homedir, platform } from "os"

/**
 * Get AWS' credentials
 * @param void
 * @return string
 */
export function getAwsCredentialPath() {
  if (platform() === "win32") {
    return homedir() + "/.aws/credentials"
  } else if (platform() === "linux") {
    return homedir() + "/.aws/credentials"
  }
}

import { inputPrompt } from "@utils/inputPrompt"

export function inputMFAPrompt(profile) {
  return inputPrompt(`Enter MFA token (6 digits) for profile ${profile}: `, "mfaToken")
}

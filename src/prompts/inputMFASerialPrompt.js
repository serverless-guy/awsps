import { inputPrompt } from "@utils/inputPrompt"

export function inputMFASerialPrompt(profile) {
  return inputPrompt(`Enter MFA serial for ${profile}: `, "mfaSerial")
}

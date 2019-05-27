import { inputPrompt } from "@utils/inputPrompt";

export function inputMFASerialPrompt(profile) {
  profile = profile ? profile.trim() : profile;

  return inputPrompt(`Enter MFA serial for ${profile}: `, "mfaSerial");
}

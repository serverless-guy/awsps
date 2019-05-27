import { inputPrompt } from "@utils/inputPrompt";

export function inputMFAPrompt(profile) {
  profile = profile ? profile.trim() : profile;

  return inputPrompt(`Enter MFA token (6 digits) for profile ${profile}: `, "mfaToken");
}

import { inputPrompt } from "@utils/inputPrompt";

export function inputAwsSecretPrompt(profile) {
  profile = profile ? profile.trim() : profile;

  return inputPrompt(`Input AWS secret access key for ${profile}: `, "secretAccessKey");
}

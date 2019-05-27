import { inputPrompt } from "@utils/inputPrompt";

export function inputAwsRegionPrompt(profile) {
  profile = profile ? profile.trim() : profile;

  return inputPrompt(`Enter region for ${profile}: `, "region");
}

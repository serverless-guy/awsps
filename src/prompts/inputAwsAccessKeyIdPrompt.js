import { inputPrompt } from "@utils/inputPrompt";

export function inputAwsAccessKeyIdPrompt(profile) {
  profile = profile ? profile.trim() : profile;

  return inputPrompt(`Enter AWS access key id for ${profile}: `, "accessKeyId");
}

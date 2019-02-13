import { inputPrompt } from "@utils/inputPrompt"

export function inputAwsAccessKeyIdPrompt(profile) {
  return inputPrompt(`Enter AWS access key id for ${profile}: `, "accessKeyId")
}

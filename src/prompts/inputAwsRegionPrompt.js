import { inputPrompt } from "@utils/inputPrompt"

export function inputAwsRegionPrompt(profile) {
  return inputPrompt(`Enter region for ${profile}: `, "region")
}

import { inputPrompt } from "@utils/inputPrompt"

export function inputProfileNamePrompt() {
  return inputPrompt(`Enter profile name: `, "profileName")
}

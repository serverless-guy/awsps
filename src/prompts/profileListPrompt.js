import { multipleChoicePrompt } from "@utils/multipleChoicePrompt"
import { listProfiles } from "@utils/listProfiles"

export function profileListPrompt(credentials) {
  return multipleChoicePrompt("Pick a profile: ", "profile", listProfiles(credentials, true))
}

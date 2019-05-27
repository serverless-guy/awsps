import { multipleChoicePrompt } from "@utils/multipleChoicePrompt";

export function menuPrompt(items) {
  return multipleChoicePrompt("Main menu: ", "menu", items);
}

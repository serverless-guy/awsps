import { prompt } from "inquirer"

export function inputPrompt(message, name) {
  return prompt([
    {
      type: "type",
      message,
      name
    }
  ])
}

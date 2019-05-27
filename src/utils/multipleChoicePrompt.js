import { prompt } from "inquirer";

export function multipleChoicePrompt(message, name, choices) {
  return prompt([
    {
      type: "list",
      message,
      name,
      choices: [
        ...choices
      ]
    }
  ]);
}

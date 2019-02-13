import { inputPrompt } from "@utils/inputPrompt"

export function inputAwsRoleArnPrompt(role) {
  return inputPrompt(`Enter role arn for ${role}: `, "roleArn")
}

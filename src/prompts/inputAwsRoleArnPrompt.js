import { inputPrompt } from "@utils/inputPrompt";

export function inputAwsRoleArnPrompt(role) {
  role = role ? role.trim() : role;

  return inputPrompt(`Enter role arn for ${role}: `, "roleArn");
}

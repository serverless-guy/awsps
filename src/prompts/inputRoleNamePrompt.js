import { inputPrompt } from "@utils/inputPrompt";

export function inputRoleNamePrompt() {
  return inputPrompt("Enter role name: ", "roleName");
}

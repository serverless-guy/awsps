import { multipleChoicePrompt } from "@utils/multipleChoicePrompt";
import { listAssumableRoles } from "@utils/listAssumableRoles";

export function assumableRolesPrompt(credentials) {
  return multipleChoicePrompt("Pick a role to assume: ", "assumedRole", listAssumableRoles(credentials));
}

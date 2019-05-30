import { createProfile } from "@commands/createProfile";
import { createRole } from "@commands/createRole";
import { switchProfile } from "@commands/switchProfile";
import { switchRole } from "@commands/switchRole";
import { menuPrompt } from "@prompts/menuPrompt";

const menuItems = [
  { name: "New profile", value: createProfile },
  { name: "New Role", value: createRole },
  { name: "Switch profile", value: switchProfile },
  { name: "Switch profile (No Token)", value: () => switchProfile(false) },
  { name: "Switch role", value: switchRole }
];

export async function menu(help) {
  menuItems.push({ name: "Show help", value: help });

  const selected = await menuPrompt(menuItems);

  return selected.menu();
}

import { switchProfile } from "@commands/switchProfile"
import { createProfile } from "@commands/createProfile"
import { createRole } from "@commands/createRole"
import { switchRole } from "@commands/switchRole"
import cmd from "commander"

const packageMeta = require("../package.json")

cmd
  .version(packageMeta.version, "-v, --version")
  .option("-R, --add-role", "Add new AWS Role", createRole)
  .option("-P, --add-profile", "Add new AWS Profile", createProfile)
  .option("-r, --switch-role", "Switch AWS Role", switchRole)
  .option("-p, --switch-profile", "Switch AWS Profile", switchProfile)
  .parse(process.argv)

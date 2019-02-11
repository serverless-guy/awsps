import { switchRole } from "@commands/switchRole"
import cmd from "commander"

const packageMeta = require("../package.json")

cmd
  .version(packageMeta.version, '-v, --version')
  .option("-s, --switch-role", "Switch AWS Role")
  .action((dir, cmd) => switchRole())
  .parse(process.argv)

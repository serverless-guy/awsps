import { switchProfile } from "@commands/switchProfile";
import { createProfile } from "@commands/createProfile";
import { createRole } from "@commands/createRole";
import { switchRole } from "@commands/switchRole";
import { menu } from "@commands/menu";
import cmd from "commander";

const packageMeta = require("../package.json");

cmd
  .version(packageMeta.version, "-v, --version")
  .option("-R, --add-role", "Add new AWS Role", createRole)
  .option("-P, --add-profile", "Add new AWS Profile", createProfile)
  .option("-r, --switch-role", "Switch AWS Role", switchRole)
  .option("-p, --switch-profile", "Switch AWS Profile", switchProfile);

if (!process.argv.slice(2).length) {
  menu(cmd.outputHelp);
}

// cmd.on("--help", function(){
//   console.log('')
//   console.log('Examples:');
//   console.log('  $ custom-help --help');
//   console.log('  $ custom-help -h');
// });

cmd.parse(process.argv);

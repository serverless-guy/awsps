import { getAwsCredentialPath } from "@utils/getAwsCredentialPath";
import * as ini from "ini";
import { readFileSync, writeFileSync } from "fs";

/**
 * Set aws credentials
 * @param void
 * @return Object
 */
export function setCredentials(credentials) {
  const iniFile = readFileSync(getAwsCredentialPath(), "utf-8");
  const config = { ...ini.parse(iniFile), ...credentials };

  return writeFileSync(getAwsCredentialPath(), ini.stringify(config));
}

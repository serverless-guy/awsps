import { getAwsCredentialPath } from "@utils/getAwsCredentialPath";
import * as ini from "ini";
import { readFileSync } from "fs";

/**
 * Load aws credentials from file
 * @param void
 * @return Object
 */
export function loadCredentials() {
  const iniFile = readFileSync(getAwsCredentialPath(), "utf-8");
  const config = ini.parse(iniFile);

  return config;
}

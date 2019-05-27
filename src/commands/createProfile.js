import { inputProfileNamePrompt } from "@prompts/inputProfileNamePrompt";
import { inputAwsAccessKeyIdPrompt } from "@prompts/inputAwsAccessKeyIdPrompt";
import { inputAwsRegionPrompt } from "@prompts/inputAwsRegionPrompt";
import { inputAwsSecretPrompt } from "@prompts/inputAwsSecretPrompt";
import { inputMFASerialPrompt } from "@prompts/inputMFASerialPrompt";
import { createProfileTransformer } from "@transformers/createProfileTransformer";
import { setCredentials } from "@utils/setCredentials";
import { createProfileValidation } from "@validations/createProfileValidation";
import { green } from "chalk";

/**
 * Add new profile to aws/credentials file
 * @param void
 * @return void
 */
export async function createProfile() {
  let newProfileInfo = {
    ...(await inputProfileNamePrompt())
  };

  newProfileInfo = {
    ...newProfileInfo,
    ...(await inputAwsAccessKeyIdPrompt(newProfileInfo.profileName)),
    ...(await inputAwsRegionPrompt(newProfileInfo.profileName)),
    ...(await inputAwsSecretPrompt(newProfileInfo.profileName)),
    ...(await inputMFASerialPrompt(newProfileInfo.profileName))
  };

  newProfileInfo = await createProfileValidation(newProfileInfo);

  setCredentials(createProfileTransformer(newProfileInfo));

  console.log(green(`${newProfileInfo.profileName} has been added to credentials file`));
}

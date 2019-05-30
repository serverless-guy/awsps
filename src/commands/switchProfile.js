import { profileListPrompt } from "@prompts/profileListPrompt";
import { inputMFAPrompt } from "@prompts/inputMFAPrompt";
import { loadCredentials } from "@utils/loadCredentials";
import { matchProfile } from "@utils/matchProfile";
import { getMFASerial } from "@aws/configure/getMFASerial";
import { getSessionToken } from "@aws/sts/getSessionToken";
import { clearDefaultCredential } from "@utils/clearDefaultCredential";
import { setTemporaryCredentials } from "@utils/setTemporaryCredentials";
import { list } from "@aws/configure/list";

export async function switchProfile(hasToken = true) {
  clearDefaultCredential();

  const loadedCredentials = loadCredentials();

  let { profile } = await profileListPrompt(loadedCredentials);

  profile = matchProfile(profile);

  const mfa = await getMFASerial(profile);

  if (!hasToken && !mfa) {
    const credential = loadedCredentials[profile];

    await setTemporaryCredentials(
      credential.aws_access_key_id,
      credential.aws_secret_access_key,
      undefined,
      profile
    );
    
    const awsList = await list();

    console.log(awsList);

    return;
  }

  if (mfa) {
    const { mfaToken } = await inputMFAPrompt(profile);

    let sessionTokenResponse = await getSessionToken(profile, mfa, mfaToken);

    sessionTokenResponse = JSON.parse(sessionTokenResponse);

    await setTemporaryCredentials(
      sessionTokenResponse[0],
      sessionTokenResponse[1],
      sessionTokenResponse[2],
      profile
    );

    const awsList = await list();

    console.log(awsList);

    return;
  }

  let sessionTokenResponse = await getSessionToken(profile);

  sessionTokenResponse = JSON.parse(sessionTokenResponse);

  await setTemporaryCredentials(
    sessionTokenResponse[0],
    sessionTokenResponse[1],
    sessionTokenResponse[2],
    profile
  );

  const awsList = await list();

  console.log(awsList);

  return;
}

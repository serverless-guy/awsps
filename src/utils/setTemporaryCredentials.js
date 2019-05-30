import { set } from "@aws/configure/set";

export async function setTemporaryCredentials(accessKeyId, secretAccessKey, sessionToken, profile) {
  await set("aws_access_key_id", accessKeyId);
  await set("aws_secret_access_key", secretAccessKey);
  await set("aws_access_key_id", accessKeyId, `--profile ${profile}-temp`);
  await set("aws_secret_access_key", secretAccessKey, `--profile ${profile}-temp`);

  if (sessionToken) {
    await set("aws_session_token", sessionToken);
    await set("aws_session_token", sessionToken, `--profile ${profile}-temp`);
  }
}

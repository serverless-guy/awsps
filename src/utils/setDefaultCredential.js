import { set } from "@aws/configure/set"

export async function setDefaultCredential(accessKeyId, secretAccessKey, sessionToken) {
  await set("aws_access_key_id", accessKeyId)
  await set("aws_secret_access_key", secretAccessKey)
  await set("aws_session_token", sessionToken)
}

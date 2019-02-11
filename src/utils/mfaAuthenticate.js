import { getSessionToken } from "@aws/sts/getSessionToken"

export async function mfaAuthenticate(profile, mfaSerial, mfaToken) {
  return getSessionToken(profile, mfaSerial, mfaToken)
}

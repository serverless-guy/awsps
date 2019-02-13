
export function createProfileTransformer(createProfileCommandParameters) {
  const { profileName, region, secretAccessKey, mfaSerial, accessKeyId } = createProfileCommandParameters
  const transformedProfile = {
    ["profile-" + profileName]: {
      region,
      aws_secret_access_key: secretAccessKey,
      aws_access_key_id: accessKeyId
    }
  }

  if (mfaSerial) {
    transformedProfile["profile-" + profileName].mfa_serial = mfaSerial
  }

  return transformedProfile
}

/**
 * Duh...
 * @param {Object} credentials AWS credentials
 * @return Array
 */
export function listProfiles(credentials, removePrefix = false) {
  let profiles = Object.keys(credentials).filter(removeFilteredKeyword)

  if (!!removePrefix) {
    profiles = profiles.map(removeProfilePrefix)
  }

  return profiles
}

/**
 * Remove credentials with profile as prefix, remove credentials that ends with temp as well
 * @param {string} credential credential name
 * @return string | undefined
 */
function removeFilteredKeyword(credential) {
  const filterProfilesOnly = /^(profile-)(.*)(?<!-temp)$/i

  return credential.match(filterProfilesOnly)
}

/**
 * Remove the profile- prefix from each profile
 * @param {string} profile profile name
 * @return string
 */
function removeProfilePrefix(profile) {
  return profile.replace(/^profile-/, "")
}

/**
 * Duh...
 * @param {Object} credentials AWS credentials
 * @return Array
 */
export function listProfiles(credentials) {
  return Object.keys(credentials).filter(removeFilteredKeyword)
}

function removeFilteredKeyword(item) {
  const filterProfilesOnly = /^profile/i

  return item.match(filterProfilesOnly)
}

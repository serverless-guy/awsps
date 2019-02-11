
/**
 * Remove "profile-" prefix from profile name
 * @param {Array} profiles profile name list
 * @return Array
 */
export function getAssumableRolePrefixes(profiles) {
  return profiles.map(profile => profile.replace("profile-", ""))
}

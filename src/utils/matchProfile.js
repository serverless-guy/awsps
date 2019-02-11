import { loadCredentials } from "@utils/loadCredentials"
import { listProfiles } from "@utils/listProfiles"
import { getAssumableRolePrefixes } from "@utils/getAssumableRolePrefixes"

/**
 * get AWS profile based on the assumed role name
 * @param {*} assumedRole assumed AWS role
 * @return string
 */
export function matchProfile(assumedRole) {
  const profiles      = listProfiles(loadCredentials())
  const rolePrefixes  = getAssumableRolePrefixes(profiles)

  const profilePrefixMatch = rolePrefixes.find((prefix) => {
    const pattern = new RegExp(`^${prefix}`)

    return assumedRole.match(pattern)
  })

  return "profile-" + profilePrefixMatch
}

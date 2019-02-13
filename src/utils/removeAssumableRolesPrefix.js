
export function removeAssumableRolesPrefix(assumableRoles, profileNames) {
  return assumableRoles.map((role) => {
    const profileNameList = profileNames.join("|")
    const pattern = new RegExp(`^((${profileNameList})-)`)
    return role.replace(pattern, "")
  })
}

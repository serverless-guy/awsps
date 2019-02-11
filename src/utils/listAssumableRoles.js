/**
 * Duh...
 * @param {Object} credentials AWS credentials
 * @return Array
 */
export function listAssumableRoles(credentials) {
  return Object.keys(credentials).filter(removeFilteredKeyword)
}

function removeFilteredKeyword(item) {
  const filterAssumableRolesOnly = /^(?!profile|default)/i

  return item.match(filterAssumableRolesOnly)
}

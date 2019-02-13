
export function createRoleTransformer(createRoleCommandParameters) {
  const { roleName, profile, roleArn, region } = createRoleCommandParameters
  const transformedRole = {
    [`${profile}-${roleName}`]: {
      source_profile: `profile-${profile}-temp`,
      output: "json",
      region: region.trim(),
      role_arn: roleArn.trim()
    }
  }

  return transformedRole
}

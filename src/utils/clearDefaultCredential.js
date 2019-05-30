import { setCredentials } from "@utils/setCredentials";

export function clearDefaultCredential() {
  const clear = {
    default: {}
  };

  return setCredentials(clear);
}

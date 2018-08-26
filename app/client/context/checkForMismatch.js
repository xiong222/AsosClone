export const shouldRedirect = ({ inRollback, cookieValue, manifestValue }) => {
  if (!manifestValue) {
    return false;
  }
  return inRollback && cookieValue !== manifestValue;
};

/* Note that we only set the cookie when not in rollback if the cookie doesn't exist.
This is so that we don't force the user on to a new experience during the same session. */
export const shouldSetCookie = ({ inRollback, cookieValue }) =>
  inRollback || !cookieValue;

export default function checkForMismatch(versionData, setCookie) {
  if (shouldSetCookie(versionData)) {
    setCookie();
  }

  return shouldRedirect(versionData);
}

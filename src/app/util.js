/**
 * Sets the given string as backend URL item in the browser storage. Returns it
 * afterwards. Returns `undefined` if no valid string is given.
 * @param {*} backendURL The backend URL as string.
 */
function setBackendURL (backendURL) {
  if (backendURL) {
    localStorage.setItem("backendURL", backendURL);
    return backendURL;
  }
  return undefined;
}

/**
 * Returns the saved backend URL. Returns empty string if no such item is
 * available.
 */
function getBackendURL () {
  const backendURL = localStorage.getItem("backendURL");
  
  return backendURL ? backendURL : "";
}


export { setBackendURL, getBackendURL };

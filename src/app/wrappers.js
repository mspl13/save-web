/**
 * A simple http get request wrapper. Enables usage of authentication.
 * http://stackoverflow.com/a/4033310/2952875
 * 
 * @param {url}
 * @param {username}
 * @param {password}
 * @param {cb}
 */
export function httpGetAsync(url, username, password, cb) {
  const xmlHttp = new XMLHttpRequest();

  // If the state of the request changes
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      cb(JSON.parse(xmlHttp.responseText));
    }
  };

  xmlHttp.open("GET", url, true);

  // Set authorization header with username and password
  xmlHttp.setRequestHeader(
    "Authorization",
    "Basic " + btoa(username + ":" + password)
  );

  xmlHttp.send(null);
}

/**
 * A simple http post request wrapper. Enables usage of authentication.
 * 
 * @param {url}
 * @param {username}
 * @param {password}
 * @param {linkObject}
 * @param {cb}
 */
export function httpPostAsync(url, username, password, linkObject, cb) {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      cb(JSON.parse(xmlHttp.responseText));
    }
  };

  xmlHttp.open("POST", url, true);

  //Send the proper header information along with the request
  xmlHttp.setRequestHeader("Content-type", "application/json");
  xmlHttp.setRequestHeader(
    "Authorization",
    "Basic " + btoa(username + ":" + password)
  );

  xmlHttp.send(linkObject);
}

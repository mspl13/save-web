/**
 * A simple http get request wrapper. Enables usage of authentication.
 * http://stackoverflow.com/a/4033310/2952875
 * 
 * @param {url}
 * @param {username}
 * @param {password}
 * @param {cb}
 */
export function httpGetAsync(url, token, cb) {
  const xmlHttp = new XMLHttpRequest();

  // If the state of the request changes
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      cb(JSON.parse(xmlHttp.responseText));
    }
  };

  // Error handling
  xmlHttp.onerror = error => {
    cb({ "error": error });
  };

  xmlHttp.open("GET", url, true);

  // Set authorization header with username and password
  xmlHttp.setRequestHeader(
    "Authorization",
    "Basic " + btoa(token + ":" + "")
  );

  xmlHttp.send(null);
}

/**
 * A simple http get request wrapper. Enables usage of authentication.
 * http://stackoverflow.com/a/4033310/2952875
 * 
 * @param {url}
 * @param {username}
 * @param {password}
 * @param {cb}
 */
export function httpLogin(url, username, password, cb) {
  const xmlHttp = new XMLHttpRequest();

  // If the state of the request changes
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      cb(JSON.parse(xmlHttp.responseText));
    }
  };

  // Error handling
  xmlHttp.onerror = error => {
    cb({ "error": error });
  };

  xmlHttp.open("GET", url, true);

  // Set authorization header with username and password
  xmlHttp.setRequestHeader(
    "Authorization",
    "Basic " + btoa(username + ":" + password)
  );

  xmlHttp.send(null);
}

export function httpLogout(url, token, cb) {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      cb(JSON.parse(xmlHttp.responseText));
    }
  };

  // Error handling
  xmlHttp.onerror = error => {
    cb({ "error": error });
  };

  xmlHttp.open("DELETE", url, true);

  // Set authorization header with username and password
  xmlHttp.setRequestHeader(
    "Authorization",
    "Basic " + btoa(token + ":" + "")
  );

  xmlHttp.send(null);
}

/**
 * A simple http post request wrapper. Enables usage of authentication.
 * 
 * @param {url}
 * @param {username}
 * @param {password}
 * @param {payload}
 * @param {cb}
 */
export function httpPostAsync(url, token, payload, cb) {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      cb(JSON.parse(xmlHttp.responseText));
    }
  };

  // Error handling
  xmlHttp.onerror = error => {
    cb({ "error": error });
  };

  xmlHttp.open("POST", url, true);

  // Send the proper header information along with the request
  xmlHttp.setRequestHeader("Content-type", "application/json");
  // Set authorization header with username and password
  xmlHttp.setRequestHeader(
    "Authorization",
    "Basic " + btoa(token + ":" + "")
  );

  xmlHttp.send(payload);
}

/**
 * A simple http delete request wrapper. Enables usage of authentication.
 * 
 * @param {url}
 * @param {linkId}
 * @param {cb}
 */
export function httpDeleteAsync(url, token, linkId, cb) {
  const xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      cb(JSON.parse(xmlHttp.responseText));
    }
  };

  // Error handling
  xmlHttp.onerror = error => {
    cb({ "error": error });
  };

  xmlHttp.open("DELETE", url + "/" + linkId, true);

  // Set authorization header with username and password
  xmlHttp.setRequestHeader(
    "Authorization",
    "Basic " + btoa(token + ":" + "")
  );

  xmlHttp.send(null);
}

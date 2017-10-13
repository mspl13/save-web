/**
 * A sperate file that contains all the configurations and options.
 */

import * as configLocal from "./config.local.js";

// Server variables
export const serverBaseURL = configLocal.serverBaseURL;
export const prefix = "/save/api";

export const serverURL = serverBaseURL + prefix;
export const getListLocation = "/links";
export const postLinkLocation = "/save";
export const deleteLinkLocation = "/links";
export const requestAuthTokenLocation = "/token";
export const authTokenValidationLocation = "/token/validate";
export const authTokenInvalidationLocation = "/token/invalidate";

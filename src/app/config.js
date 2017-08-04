/**
 * A sperate file that contains all the configurations and options.
 */

// Server variables
export const serverAddress = "http://127.0.0.1:1337/save/api";
export const getListAddress = serverAddress + "/links";
export const postLinkAddress = serverAddress + "/save";
export const deleteLinkAddress = serverAddress + "/links";
export const requestAuthTokenAddress = serverAddress + "/token";
export const authTokenValidationAddress = serverAddress + "/token/validate";
export const authTokenInvalidationAddress = serverAddress + "/token/invalidate";

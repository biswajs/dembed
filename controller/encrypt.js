/**
 * @package dembed
 * @author [Biswa#7373 (Reach me out via Discord)]
 * @copyright [(c) Dembed package - coded by Biswa]
 */
const deloker = require("crypto-js");
function isDembedNull(promise, promiseType) {
  if (promiseType === "!=n") return promise !== null || promise !== "";
  if (promiseType == "==n") return promise === null || promise === "";
}
const deauthkey = (data) => {
  return deloker.enc.Base64.parse(data).toString(deloker.enc.Utf8);
};
function dembedAuthor(authKey, options) {
  if (isDembedNull(authKey, "!=n")) return deauthkey(authKey);
}

module.exports = { dembedAuthor };
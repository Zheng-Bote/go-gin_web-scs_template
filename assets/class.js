import { z as a } from "/assets/custom-element.js";
function n(s, t, e) {
  var r = s == null ? "" : "" + s;
  return t && (r = r ? r + " " + t : t), r === "" ? null : r;
}
function p(s, t, e, r, f, c) {
  var l = s.__className;
  if (a || l !== e || l === void 0) {
    var i = n(e, r);
    (!a || i !== s.getAttribute("class")) &&
      (i == null ? s.removeAttribute("class") : (s.className = i)),
      (s.__className = e);
  }
  return c;
}
export { p as s };

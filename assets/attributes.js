import {
  am as i,
  an as d,
  ao as n,
  ap as v,
  z as c,
  aq as u,
  ar as h,
} from "/assets/custom-element.js";
const g = Symbol("is custom element"),
  p = Symbol("is html");
function M(r) {
  if (c) {
    var s = !1,
      a = () => {
        if (!s) {
          if (((s = !0), r.hasAttribute("value"))) {
            var e = r.value;
            t(r, "value", null), (r.value = e);
          }
          if (r.hasAttribute("checked")) {
            var o = r.checked;
            t(r, "checked", null), (r.checked = o);
          }
        }
      };
    (r.__on_r = a), u(a), h();
  }
}
function t(r, s, a, e) {
  var o = A(r);
  (c &&
    ((o[s] = r.getAttribute(s)),
    s === "src" ||
      s === "srcset" ||
      (s === "href" && r.nodeName === "LINK"))) ||
    (o[s] !== (o[s] = a) &&
      (s === "loading" && (r[i] = a),
      a == null
        ? r.removeAttribute(s)
        : typeof a != "string" && l(r).includes(s)
        ? (r[s] = a)
        : r.setAttribute(s, a)));
}
function A(r) {
  return (
    r.__attributes ??
    (r.__attributes = {
      [g]: r.nodeName.includes("-"),
      [p]: r.namespaceURI === d,
    })
  );
}
var f = new Map();
function l(r) {
  var s = f.get(r.nodeName);
  if (s) return s;
  f.set(r.nodeName, (s = []));
  for (var a, e = r, o = Element.prototype; o !== e; ) {
    a = v(e);
    for (var _ in a) a[_].set && s.push(_);
    e = n(e);
  }
  return s;
}
export { M as r, t as s };

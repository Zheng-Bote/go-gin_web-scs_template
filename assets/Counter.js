import {
  d as n,
  c as o,
  s as r,
  t as u,
  a as l,
  r as m,
  b as i,
  e as _,
  f,
  g as s,
  h as d,
} from "/assets/custom-element.js";
const p = (a, t) => {
  f(t, s(t) + 1);
};
var b = u("<button> </button>");
function g(a) {
  let t = r(0);
  var e = b();
  e.__click = [p, t];
  var c = l(e);
  m(e), i(() => d(c, `count is ${s(t) ?? ""}`)), _(a, e);
}
n(["click"]);
customElements.define("rz-counter", o(g, {}, [], [], !0));

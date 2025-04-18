import {
  J as u,
  c as d,
  p as _,
  t as h,
  i as v,
  a as g,
  b as r,
  e as p,
  k as x,
  l as b,
  K as w,
  r as k,
  f as y,
  m as z,
  h as E,
  g as m,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { i as J } from "/assets/if.js";
import { a as K } from "/assets/css.js";
import { s as L } from "/assets/class.js";
import { p as R } from "/assets/props.js";
function S(t) {
  u(window, ["online", "offline"], () => {
    t(navigator.onLine);
  });
}
var j = h('<span class="isonline"><span></span> <!></span>');
const q = {
  hash: "svelte-m97ao9",
  code: ".online-status.svelte-m97ao9 {height:8px;width:8px;border-radius:50%;display:inline-block;vertical-align:middle;}.online-true.svelte-m97ao9 {background-color:green;}.online-false.svelte-m97ao9 {background-color:red;}",
};
function A(t, o) {
  _(o, !1), K(t, q);
  let s = z(!0),
    a = R(o, "with_text", 12, "");
  var n = j(),
    i = g(n),
    c = v(i, 2);
  {
    var f = (e) => {
      var l = w();
      r(() => E(l, m(s) ? "online" : "offline")), p(e, l);
    };
    J(c, (e) => {
      a() === "yes" && e(f);
    });
  }
  return (
    k(n),
    r(() => L(i, 1, `online-status online-${m(s) ?? ""}`, "svelte-m97ao9")),
    S((e) => y(s, e)),
    p(t, n),
    x({
      get with_text() {
        return a();
      },
      set with_text(e) {
        a(e), b();
      },
    })
  );
}
customElements.define("rz-online", d(A, { with_text: {} }, [], [], !0));

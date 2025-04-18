import {
  d as f,
  c as _,
  p as v,
  t as h,
  a as k,
  b as w,
  j as I,
  e as T,
  k as x,
  f as l,
  m as y,
  r as E,
  g as z,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as B } from "/assets/css.js";
import { s as j } from "/assets/attributes.js";
import { i as A } from "/assets/lifecycle.js";
import { o as G } from "/assets/index-client.js";
function L() {
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
}
var M = h(
  '<p><button id="btn_gototop" class="svelte-1vwtdco">&uArr;&nbsp;top</button></p>'
);
const O = {
  hash: "svelte-1vwtdco",
  code: "button.svelte-1vwtdco {position:fixed;bottom:45px;right:0;width:50px;background-color:var( --background-color-footer);padding:2px;border:none;cursor:pointer;}",
};
function R(a, i) {
  v(i, !1), B(a, O);
  let n = "goto top",
    u = "nach oben",
    o = y(n);
  function r() {
    switch (localStorage.getItem("language") || "en") {
      case "de": {
        l(o, u);
        break;
      }
      default: {
        l(o, n);
        break;
      }
    }
  }
  G(() => {
    const s = document.getElementById("rz_button_top"),
      c = document.getElementById("top"),
      m = { threshold: 1 },
      g = (b) => {
        b.forEach((p) => {
          p.target.id === "top" &&
            s &&
            (s.style.display = p.isIntersecting ? "none" : "block");
        });
      },
      d = new IntersectionObserver(g, m);
    c && d.observe(c);
  }),
    A();
  var e = M(),
    t = k(e);
  (t.__click = [L]),
    (t.__mouseover = r),
    E(e),
    w(() => j(t, "title", z(o))),
    I("focus", t, r),
    T(a, e),
    x();
}
f(["click", "mouseover"]);
customElements.define("rz-button-top", _(R, {}, [], [], !0));

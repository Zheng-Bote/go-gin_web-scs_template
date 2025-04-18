import {
  d as q,
  c as B,
  p as C,
  t as D,
  a as o,
  i as c,
  b as F,
  j as S,
  e as G,
  k as J,
  l as b,
  f as u,
  m as T,
  r as i,
  g,
  h as K,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as N } from "/assets/css.js";
import { s as n } from "/assets/attributes.js";
import { i as O } from "/assets/lifecycle.js";
import { p as w } from "/assets/props.js";
import { o as P } from "/assets/index-client.js";
import { R as Q } from "/assets/rz-fontsize.js";
import { R as U } from "/assets/rz-theme.js";
import { R as V } from "/assets/rz-language.js";
function W() {
  window.location.href = "/";
}
function X(h, t) {
  window.location.href = t();
}
var Y = D(
  '<span class="rz-header"><header id="header" class="svelte-eo1c76"><nav id="nav" class="svelte-eo1c76"><span class="left brand svelte-eo1c76" aria-hidden="true"><img class="svelte-eo1c76"> </span> <span class="right svelte-eo1c76"><button class="svelte-eo1c76"><img src="/assets/img/icons/log-in-outline.svg" class="svelte-eo1c76"></button> <!> <!> <!></span></nav></header></span>'
);
const Z = {
  hash: "svelte-eo1c76",
  code: `
  @scope(.rz-header){header.svelte-eo1c76{position:sticky;top:0;z-index:1000;height:50px;background-color:var(--background-color-header);color:var(--font-color-header);nav:where(.svelte-eo1c76) {display:grid;grid-template-columns:repeat(2, 1fr);grid-template-areas:"left right";height:100%;.left:where(.svelte-eo1c76),
    .right:where(.svelte-eo1c76) {display:flex;align-items:center;padding:0 10px 0 10px;}.left:where(.svelte-eo1c76) {grid-area:left;
      /*opacity: 0.5;*/cursor:pointer;& img:where(.svelte-eo1c76) {vertical-align:middle;width:25px;height:auto;}}.right:where(.svelte-eo1c76) {grid-area:right;justify-content:end;opacity:0.5;& button:where(.svelte-eo1c76) {width:35px;height:35px;background-color:var(--transparency);border:none;}& button:where(.svelte-eo1c76):hover {border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);cursor:pointer;}& img:where(.svelte-eo1c76) {width:15px;height:auto;decoding:auto;vertical-align:middle;}}}}
  }`,
};
function $(h, t) {
  C(t, !1), N(h, Z);
  let v = w(t, "brand_img", 12, "/assets/img/icons/home-outline.svg"),
    p = w(t, "brand_title", 12, "Home"),
    _ = w(t, "login_url", 12, "login.html"),
    x = "Login",
    A = "Anmeldung",
    d = T(x),
    k = "goto mainpage",
    E = "zur Haupstseite",
    s = T(k);
  function l() {
    switch (localStorage.getItem("language") || "en") {
      case "de": {
        u(d, A), u(s, E);
        break;
      }
      default: {
        u(d, x), u(s, k);
        break;
      }
    }
  }
  P(() => {
    l();
  }),
    O();
  var f = Y(),
    y = o(f),
    z = o(y),
    e = o(z);
  (e.__click = [W]), (e.__mouseover = l);
  var m = o(e),
    I = c(m);
  i(e);
  var R = c(e, 2),
    a = o(R);
  (a.__click = [X, _]), (a.__mouseover = l);
  var H = o(a);
  i(a);
  var L = c(a, 2);
  V(L, {});
  var j = c(L, 2);
  U(j, {});
  var M = c(j, 2);
  return (
    Q(M, {}),
    i(R),
    i(z),
    i(y),
    i(f),
    F(() => {
      n(e, "title", g(s)),
        n(m, "src", v()),
        n(m, "alt", g(s)),
        n(m, "title", g(s)),
        K(I, `  ${p() ?? ""}`),
        n(H, "alt", g(d)),
        n(H, "title", g(d));
    }),
    S("focus", e, l),
    S("focus", a, l),
    G(h, f),
    J({
      get brand_img() {
        return v();
      },
      set brand_img(r) {
        v(r), b();
      },
      get brand_title() {
        return p();
      },
      set brand_title(r) {
        p(r), b();
      },
      get login_url() {
        return _();
      },
      set login_url(r) {
        _(r), b();
      },
    })
  );
}
q(["click", "mouseover"]);
customElements.define(
  "rz-header",
  B($, { brand_img: {}, brand_title: {}, login_url: {} }, [], [], !0)
);

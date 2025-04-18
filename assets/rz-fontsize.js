import {
  d as H,
  c as J,
  p as K,
  t as O,
  a as i,
  i as m,
  b as P,
  j as Q,
  e as U,
  k as V,
  f as e,
  m as n,
  r as c,
  g as o,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as W } from "/assets/css.js";
import { s } from "/assets/attributes.js";
import { i as Y } from "/assets/lifecycle.js";
import { o as Z } from "/assets/index-client.js";
var $ = O(
  '<span class="rz-fontsize"><div class="dropdown svelte-1xn1j66"><button class="dropbtn svelte-1xn1j66"><img src="/assets/img/icons/glasses-outline.svg" class="svelte-1xn1j66"></button> <div class="dropdown-content svelte-1xn1j66"><button class="fs_small svelte-1xn1j66">S</button> <button class="fs_medium svelte-1xn1j66">M</button> <button class="fs_large svelte-1xn1j66">L</button> <button class="fs_xlarge svelte-1xn1j66">XL</button></div></div></span>'
);
const ee = {
  hash: "svelte-1xn1j66",
  code: `
@scope(.rz-fontsize){.dropdown.svelte-1xn1j66 {position:relative;display:inline-block;& button:where(.svelte-1xn1j66) {width:35px;height:35px;background-color:var(--transparency);border:none;display:block;}& button:where(.svelte-1xn1j66):hover {border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);cursor:pointer;}& .dropbtn:where(.svelte-1xn1j66) {border:none;img:where(.svelte-1xn1j66){width:25px;}}}.dropdown.svelte-1xn1j66:hover .dropdown-content:where(.svelte-1xn1j66) {display:block;}.dropdown-content.svelte-1xn1j66 {display:none;position:absolute;background-color:var(--background-color-header);min-width:35px;z-index:1;& .fs_small:where(.svelte-1xn1j66) {font-size:13px;}& .fs_medium:where(.svelte-1xn1j66) {font-size:16px;}& .fs_large:where(.svelte-1xn1j66) {font-size:18px;}& .fs_xlarge:where(.svelte-1xn1j66) {font-size:24px;}}img.svelte-1xn1j66 {width:15px;height:auto;decoding:auto;vertical-align:middle;}
}`,
};
function te(x, B) {
  K(B, !1), W(x, ee);
  let L = "en",
    h = "",
    d = n(),
    u = n(),
    g = n(),
    f = n(""),
    z = "Fontsize",
    N = "Schriftgröße",
    a = n(z),
    T = "small font",
    M = "medium font",
    F = "large font",
    X = "x-large font",
    q = "kleine Schrift",
    A = "mittlere Schrift",
    C = "große Schrift",
    D = "sehr große Schrift";
  function r() {
    switch (((h = localStorage.getItem("language") || L), h)) {
      case "de": {
        e(d, q), e(u, A), e(g, C), e(f, D), e(a, N);
        break;
      }
      default: {
        e(d, T), e(u, M), e(g, F), e(f, X), e(a, z);
        break;
      }
    }
  }
  function G() {
    switch (localStorage.getItem("fontsize") || "medium") {
      case "small": {
        j();
        break;
      }
      case "large": {
        k();
        break;
      }
      case "x-large": {
        S();
        break;
      }
      default: {
        w();
        break;
      }
    }
  }
  function j() {
    let t = document.getElementsByTagName("html")[0];
    (t.style.fontSize = "small"), localStorage.setItem("fontsize", "small");
  }
  function w() {
    let t = document.getElementsByTagName("html")[0];
    (t.style.fontSize = "medium"), localStorage.setItem("fontsize", "medium");
  }
  function k() {
    let t = document.getElementsByTagName("html")[0];
    (t.style.fontSize = "large"), localStorage.setItem("fontsize", "large");
  }
  function S() {
    let t = document.getElementsByTagName("html")[0];
    (t.style.fontSize = "x-large"), localStorage.setItem("fontsize", "x-large");
  }
  Z(() => {
    G(), r();
  }),
    Y();
  var v = $(),
    y = i(v),
    l = i(y);
  (l.__click = r), (l.__mouseover = r);
  var I = i(l);
  c(l);
  var R = m(l, 2),
    p = i(R);
  p.__click = j;
  var b = m(p, 2);
  b.__click = w;
  var _ = m(b, 2);
  _.__click = k;
  var E = m(_, 2);
  (E.__click = S),
    c(R),
    c(y),
    c(v),
    P(() => {
      s(I, "alt", o(a)),
        s(I, "title", o(a)),
        s(p, "title", o(d)),
        s(b, "title", o(u)),
        s(_, "title", o(g)),
        s(E, "title", o(f));
    }),
    Q("focus", l, r),
    U(x, v),
    V();
}
H(["click", "mouseover"]);
customElements.define("rz-fontsize", J(te, {}, [], [], !0));
export { te as R };

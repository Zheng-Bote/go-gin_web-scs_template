import {
  c as q,
  p as C,
  t as G,
  i as f,
  o as H,
  a as o,
  b as U,
  n as Z,
  h as z,
  e as j,
  k as B,
  l,
  r as s,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as I } from "/assets/css.js";
import { s as r } from "/assets/attributes.js";
import { i as J } from "/assets/lifecycle.js";
import { p as i } from "/assets/props.js";
var K = G(
  '<div class="distance svelte-1cmsof2"></div> <footer id="footer" class="svelte-1cmsof2"><div class="footer-item-left svelte-1cmsof2" id="footer_item_left"><a class="svelte-1cmsof2"><img src="/assets/img/icons/mail-open-outline.svg" width="15px" class="svelte-1cmsof2"> </a></div> <div class="footer-item-middle svelte-1cmsof2" id="footer_item_middle"><a class="svelte-1cmsof2"> </a></div> <div class="footer-item-right svelte-1cmsof2" id="footer_item_right"><a class="svelte-1cmsof2"><img src="/assets/img/icons/information-outline.svg" width="15px" id="information" class="svelte-1cmsof2"> </a></div></footer>',
  1
);
const M = {
  hash: "svelte-1cmsof2",
  code: `.distance.svelte-1cmsof2 {margin-top:20px;padding-top:20px;}footer.svelte-1cmsof2{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-areas:"left middle right";width:100%;height:25px;background-color:var(--background-color-footer);border-top:var(--border-width) var(--border-style) var(--border-color-footer);color:var(--font-color-footer);

    /*padding: 5px;*/font-size:var(--font-size-small);position:fixed;bottom:0;& a:where(.svelte-1cmsof2):link,
    a:where(.svelte-1cmsof2):active,
    a:where(.svelte-1cmsof2):visited {color:var(--font-color);
      /*font-style: italic;*/text-decoration:none;}& a:where(.svelte-1cmsof2):hover {text-decoration:underline;text-decoration-style:solid;
      /* text-decoration-thickness: 0.1em; */text-decoration-color:light-dark(blue, lightblue);}& img:where(.svelte-1cmsof2) {vertical-align:middle;}& .footer-item-left:where(.svelte-1cmsof2),.footer-item-middle:where(.svelte-1cmsof2),.footer-item-right:where(.svelte-1cmsof2) {display:block;align-content:center;text-align:center;opacity:0.5;}& .footer-item-left:where(.svelte-1cmsof2) {grid-area:left;}& .footer-item-middle:where(.svelte-1cmsof2) {grid-area:middle;}& .footer-item-right:where(.svelte-1cmsof2) {grid-area:right;}}`,
};
function O(A, t) {
  C(t, !1), I(A, M);
  let _ = i(t, "url_left", 12, "/contact.html"),
    a = i(t, "url_left_title", 12, "Contact"),
    u = i(t, "url_middle", 12, "/about.html"),
    g = i(t, "url_middle_title", 12, "about"),
    h = i(t, "url_right", 12, "/legal.html"),
    m = i(t, "url_right_title", 12, "Legal Notice"),
    p = i(t, "name", 12, "ZHENG Robert"),
    d = i(t, "year", 12, "2023"),
    b = i(t, "version", 12, "0.2.0");
  function Y() {
    const R = new Date().getFullYear();
    let E = "";
    return Number(d()) == R ? (E = d()) : (E = d() + "-" + R), E;
  }
  J();
  var D = K(),
    L = f(H(D), 2),
    x = o(L),
    n = o(x),
    w = o(n),
    F = f(w);
  s(n), s(x);
  var y = f(x, 2),
    c = o(y),
    S = o(c);
  s(c), s(y);
  var N = f(y, 2),
    v = o(N),
    k = o(v),
    T = f(k);
  return (
    s(v),
    s(N),
    s(L),
    U(
      (e) => {
        r(n, "href", _()),
          r(n, "title", a()),
          r(w, "alt", a()),
          r(w, "title", a()),
          z(F, ` ${a() ?? ""}`),
          r(c, "href", u()),
          r(c, "title", g()),
          z(S, `© ${e ?? ""} ${p() ?? ""} v${b() ?? ""}`),
          r(v, "href", h()),
          r(v, "title", m()),
          r(k, "alt", m()),
          r(k, "title", m()),
          z(T, ` ${m() ?? ""}`);
      },
      [Y],
      Z
    ),
    j(A, D),
    B({
      get url_left() {
        return _();
      },
      set url_left(e) {
        _(e), l();
      },
      get url_left_title() {
        return a();
      },
      set url_left_title(e) {
        a(e), l();
      },
      get url_middle() {
        return u();
      },
      set url_middle(e) {
        u(e), l();
      },
      get url_middle_title() {
        return g();
      },
      set url_middle_title(e) {
        g(e), l();
      },
      get url_right() {
        return h();
      },
      set url_right(e) {
        h(e), l();
      },
      get url_right_title() {
        return m();
      },
      set url_right_title(e) {
        m(e), l();
      },
      get name() {
        return p();
      },
      set name(e) {
        p(e), l();
      },
      get year() {
        return d();
      },
      set year(e) {
        d(e), l();
      },
      get version() {
        return b();
      },
      set version(e) {
        b(e), l();
      },
    })
  );
}
customElements.define(
  "rz-footer",
  q(
    O,
    {
      url_left: {},
      url_left_title: {},
      url_middle: {},
      url_middle_title: {},
      url_right: {},
      url_right_title: {},
      name: {},
      year: {},
      version: {},
    },
    [],
    [],
    !0
  )
);

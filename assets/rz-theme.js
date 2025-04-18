import {
  d as z,
  c as A,
  p as I,
  t as P,
  i as S,
  a as b,
  b as $,
  n as R,
  h as j,
  g as r,
  m as u,
  j as q,
  e as L,
  k as T,
  f as t,
  r as k,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as B } from "/assets/css.js";
import { s as h } from "/assets/attributes.js";
import { i as C } from "/assets/lifecycle.js";
import { o as D } from "/assets/index-client.js";
var F = P(
  '<div class="rz_theme" id="rz_theme"> <button class="svelte-i1wf1a"><img id="darkM" class="svelte-i1wf1a"></button></div>'
);
const G = {
  hash: "svelte-i1wf1a",
  code: `
  @scope(.rz_theme){button.svelte-i1wf1a {width:35px;height:35px;background-color:var(--transparency);border:none;}button.svelte-i1wf1a:hover {border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);cursor:pointer;}img.svelte-i1wf1a {width:15px;height:auto;decoding:auto;vertical-align:middle;}
  }`,
};
function H(g, w) {
  I(w, !1), B(g, G);
  let e = "",
    m = "/assets/img/icons/moon-outline.svg",
    n = "/assets/img/icons/sunny-outline.svg",
    o = u(""),
    p = "dark",
    y = "dunkel",
    l = u(p),
    f = "light",
    x = "hell",
    s = u(f);
  function i() {
    switch (localStorage.getItem("language") || "en") {
      case "de": {
        t(l, y), t(s, x);
        break;
      }
      default: {
        t(l, p), t(s, f);
        break;
      }
    }
  }
  function E() {
    (e = localStorage.getItem("theme") || ""),
      e === "light" ? ((e = "dark"), t(o, n)) : ((e = "light"), t(o, m)),
      document.documentElement.setAttribute("data-theme", e),
      document.documentElement.style.setProperty("color-scheme", e),
      localStorage.setItem("theme", e);
  }
  function M() {
    if (((e = localStorage.getItem("theme") || ""), e === "light")) {
      (e = "light"),
        t(o, m),
        document.documentElement.setAttribute("data-theme", e),
        document.documentElement.style.setProperty("color-scheme", e);
      return;
    } else if (e === "dark") {
      (e = "dark"),
        t(o, n),
        document.documentElement.setAttribute("data-theme", e),
        document.documentElement.style.setProperty("color-scheme", e);
      return;
    }
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? (document.documentElement.setAttribute("data-theme", "dark"),
        document.documentElement.style.setProperty("color-scheme", "dark"),
        t(o, n),
        (e = "dark"))
      : (document.documentElement.setAttribute("data-theme", "light"),
        document.documentElement.style.setProperty("color-scheme", "light"),
        t(o, m),
        (e = "light")),
      localStorage.setItem("theme", e);
  }
  D(() => {
    i();
  }),
    C();
  var d = F(),
    v = b(d),
    a = S(v);
  (a.__click = E), (a.__mouseover = i);
  var c = b(a);
  k(a),
    k(d),
    $(
      (_) => {
        j(v, `${_ ?? ""} `),
          h(c, "src", r(o)),
          h(c, "alt", `${r(l) ?? ""}|${r(s) ?? ""}`),
          h(c, "title", `${r(l) ?? ""}|${r(s) ?? ""}`);
      },
      [M],
      R
    ),
    q("focus", a, i),
    L(g, d),
    T();
}
z(["click", "mouseover"]);
customElements.define("rz-theme", A(H, {}, [], [], !0));
export { H as R };

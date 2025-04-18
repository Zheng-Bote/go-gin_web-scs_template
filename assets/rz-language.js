import {
  d as _,
  c as x,
  p as j,
  m as w,
  t as C,
  a as u,
  i as E,
  b as L,
  n as $,
  g as o,
  h as k,
  e as I,
  k as S,
  f as r,
  r as m,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as y } from "/assets/css.js";
import { s as p } from "/assets/attributes.js";
import { i as B } from "/assets/lifecycle.js";
import { o as z } from "/assets/index-client.js";
function D(n, t, e, l) {
  r(t, localStorage.getItem("language") || o(t)),
    o(t) === e[0].code ? r(t, e[1].code) : r(t, e[0].code),
    localStorage.setItem("language", o(t)),
    document.documentElement.setAttribute("lang", o(t)),
    l(o(t));
}
var M = C(
  '<span class="language"><button class="svelte-1jdvbex"><img src="/assets/img/icons/language-outline.svg" class="svelte-1jdvbex"> </button></span>'
);
const R = {
  hash: "svelte-1jdvbex",
  code: `
  @scope (.language){button.svelte-1jdvbex {width:50px;height:35px;background-color:var(--transparency);border:none;}button.svelte-1jdvbex:hover {border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);cursor:pointer;}img.svelte-1jdvbex {width:15px;height:auto;decoding:auto;float:left;vertical-align:middle;}
  }`,
};
function q(n, t) {
  j(t, !1), y(n, R);
  const e = [
      { code: "en", name: "English", short: "EN" },
      { code: "de", name: "Deutsch", short: "DE" },
    ],
    l = e.map((a) => a.code);
  let s = w(e[0].code);
  function v(a) {
    new BroadcastChannel("language_channel").postMessage(a);
  }
  function b() {
    const a =
      navigator.languages === void 0
        ? [navigator.language]
        : navigator.languages;
    if (a) {
      const d = a[0].split(/-|_/)[0];
      return l.includes(d) ? d : e[0].code;
    }
    return e[0].code;
  }
  function h() {
    r(s, b()),
      r(s, localStorage.getItem("language") || o(s)),
      localStorage.setItem("language", o(s));
  }
  z(() => {
    h();
  }),
    B();
  var c = M(),
    i = u(c);
  i.__click = [D, s, e, v];
  var g = u(i),
    f = E(g);
  m(i),
    m(c),
    L(
      (a) => {
        p(g, "alt", `${e[1].short ?? ""}|${e[0].short ?? ""}`),
          p(g, "title", `${e[1].short ?? ""}|${e[0].short ?? ""}`),
          k(f, ` ${a ?? ""}`);
      },
      [() => o(s).toUpperCase()],
      $
    ),
    I(n, c),
    S();
}
_(["click"]);
customElements.define("rz-language", x(q, {}, [], [], !0));
export { q as R };

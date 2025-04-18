import {
  q as b,
  u as k,
  v as R,
  w as m,
  x as z,
  y as D,
  z as h,
  A as p,
  B as v,
  C as L,
  D as A,
  H as B,
  E as C,
  F as H,
  G as I,
  c as N,
  p as O,
  t as S,
  e as T,
  k as q,
  l as F,
  a as _,
  g as G,
  m as Y,
  r as y,
  f as $,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as j } from "/assets/css.js";
import { i as J } from "/assets/lifecycle.js";
import { p as K } from "/assets/props.js";
function M(o, i, e, t, g) {
  var d = o,
    c = "",
    l;
  b(() => {
    if (c === (c = i() ?? "")) {
      h && p();
      return;
    }
    l !== void 0 && (D(l), (l = void 0)),
      c !== "" &&
        (l = k(() => {
          if (h) {
            v.data;
            for (
              var a = p(), f = a;
              a !== null && (a.nodeType !== 8 || a.data !== "");

            )
              (f = a), (a = L(a));
            if (a === null) throw (A(), B);
            m(v, f), (d = C(a));
            return;
          }
          var u = c + "",
            n = R(u);
          m(z(n), n.lastChild), d.before(n);
        }));
  });
}
function P(o, i, e) {
  H(() => {
    var t = I(() => i(o, e == null ? void 0 : e()) || {});
    if (t != null && t.destroy) return () => t.destroy();
  });
}
var Q = S(
  '<div class="rz-imprint"><div class="rz-imprint-content"><!></div></div>'
);
const U = { hash: "svelte-3kpd", code: "" };
function V(o, i) {
  O(i, !1), j(o, U);
  let e = K(i, "language", 12, "de");
  const t = [
      { code: "en", name: "English", short: "EN" },
      { code: "de", name: "Deutsch", short: "DE" },
    ],
    g = t.map((r) => r.code);
  let d = Y("");
  function c() {
    const r =
      navigator.languages === void 0
        ? [navigator.language]
        : navigator.languages;
    if (r) {
      const s = r[0].split(/-|_/)[0];
      return g.includes(s) ? s : t[0].code;
    }
    return t[0].code;
  }
  function l() {
    e(c()),
      e(localStorage.getItem("language") || e()),
      g.includes(e()) || e(t[0].code);
  }
  function a(r) {
    l(), f();
  }
  async function f() {
    const r = "imprint_" + e() + ".htm";
    try {
      const s = await fetch(r);
      if (!s.ok) console.error(`Response status: ${s.status}`);
      else {
        const E = await s.text();
        $(d, E);
      }
    } catch (s) {
      console.error("Error fetching imprint:", s);
    }
  }
  J();
  var u = Q(),
    n = _(u),
    w = _(n);
  return (
    M(w, () => G(d)),
    y(n),
    P(n, (r) => (a == null ? void 0 : a())),
    y(u),
    T(o, u),
    q({
      get language() {
        return e();
      },
      set language(r) {
        e(r), F();
      },
    })
  );
}
customElements.define("rz-imprint", N(V, { language: {} }, [], [], !0));

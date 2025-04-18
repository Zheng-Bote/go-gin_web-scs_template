import {
  L as Ye,
  M as Pe,
  z as Re,
  G as Ue,
  N as Ve,
  c as He,
  p as Ie,
  t as k,
  g as a,
  m as d,
  j as Qe,
  e as _,
  k as We,
  l as Ge,
  f as t,
  a as v,
  i as u,
  r as m,
  b as w,
  o as ae,
  h as z,
  I as Ze,
  K as Fe,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { i as K } from "/assets/if.js";
import { a as Je } from "/assets/css.js";
import { r as oe, s as le } from "/assets/attributes.js";
import { i as Le } from "/assets/lifecycle.js";
import { p as De } from "/assets/props.js";
import { o as Ke } from "/assets/index-client.js";
function ne(e, i, g = i) {
  var y = Ye();
  Pe(e, "input", (s) => {
    var l = s ? e.defaultValue : e.value;
    if (((l = N(e) ? j(l) : l), g(l), y && l !== (l = i()))) {
      var A = e.selectionStart,
        p = e.selectionEnd;
      (e.value = l ?? ""),
        p !== null &&
          ((e.selectionStart = A),
          (e.selectionEnd = Math.min(p, e.value.length)));
    }
  }),
    ((Re && e.defaultValue !== e.value) || (Ue(i) == null && e.value)) &&
      g(N(e) ? j(e.value) : e.value),
    Ve(() => {
      var s = i();
      (N(e) && s === j(e.value)) ||
        (e.type === "date" && !s && !e.value) ||
        (s !== e.value && (e.value = s ?? ""));
    });
}
function N(e) {
  var i = e.type;
  return i === "number" || i === "range";
}
function j(e) {
  return e === "" ? null : +e;
}
function Ne(e) {
  return function (...i) {
    var g = i[0];
    return g.preventDefault(), e == null ? void 0 : e.apply(this, i);
  };
}
var je = k(
    '<div class="success svelte-1zsz92"><img src="/assets/img/icons/ok.svg" alt="ok" class="svelte-1zsz92"> </div>'
  ),
  Me = k(
    ' <div class="dots svelte-1zsz92"><div class="svelte-1zsz92"></div><div class="svelte-1zsz92"></div><div class="svelte-1zsz92"></div></div>',
    1
  ),
  Xe = k(
    '<div class="error svelte-1zsz92"><img src="/assets/img/icons/nok.svg" alt="not ok" class="svelte-1zsz92"> </div>'
  ),
  Oe = k(
    '<input type="hidden" name="csrf_cookie" id="csrf_cookie" value="" class="svelte-1zsz92"> <fieldset class="account_details svelte-1zsz92"><legend class="svelte-1zsz92"> </legend> <label for="username" class="svelte-1zsz92"> </label> <input type="email" name="username" id="username" autocomplete="username" required minlength="3" class="svelte-1zsz92"> <label for="password" class="svelte-1zsz92"> </label> <input type="password" name="password" id="password" autocomplete="current-password" required minlength="8" class="svelte-1zsz92"> <button type="submit" name="btn_submit" id="btn_submit" class="svelte-1zsz92"><!></button> <!></fieldset>',
    1
  ),
  qe = k(
    '<div class="rz-loginform"><form class="form svelte-1zsz92"><!></form></div>'
  );
const Te = {
  hash: "svelte-1zsz92",
  code: `
@scope (.rz-loginform){form.svelte-1zsz92 {width:300px;margin:50px auto;}fieldset.svelte-1zsz92 {display:flex;flex-direction:column;align-items:center;padding:10px;;
border: var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);}legend.svelte-1zsz92, label.svelte-1zsz92 {font-size:var(--font-size-small);opacity:var(--opacity-05);}legend.svelte-1zsz92 {padding:var(--base-padding);}label.svelte-1zsz92 {width:100%;}input.svelte-1zsz92 {font-size:var(--font-size);width:100%;border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);padding:2px;margin-bottom:10px;}input.svelte-1zsz92:required:valid {background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAepJREFUeNrEk79PFEEUx9/uDDd7v/AAQQnEQokmJCRGwc7/QeM/YGVxsZJQYI/EhCChICYmUJigNBSGzobQaI5SaYRw6imne0d2D/bYmZ3dGd+YQKEHYiyc5GUyb3Y+77vfeWNpreFfhvXfAWAAJtbKi7dff1rWK9vPHx3mThP2Iaipk5EzTg8Qmru38H7izmkFHAF4WH1R52654PR0Oamzj2dKxYt/Bbg1OPZuY3d9aU82VGem/5LtnJscLxWzfzRxaWNqWJP0XUadIbSzu5DuvUJpzq7sfYBKsP1GJeLB+PWpt8cCXm4+2+zLXx4guKiLXWA2Nc5ChOuacMEPv20FkT+dIawyenVi5VcAbcigWzXLeNiDRCdwId0LFm5IUMBIBgrp8wOEsFlfeCGm23/zoBZWn9a4C314A1nCoM1OAVccuGyCkPs/P+pIdVIOkG9pIh6YlyqCrwhRKD3GygK9PUBImIQQxRi4b2O+JcCLg8+e8NZiLVEygwCrWpYF0jQJziYU/ho2TUuCPTn8hHcQNuZy1/94sAMOzQHDeqaij7Cd8Dt8CatGhX3iWxgtFW/m29pnUjR7TSQcRCIAVW1FSr6KAVYdi+5Pj8yunviYHq7f72po3Y9dbi7CxzDO1+duzCXH9cEPAQYAhJELY/AqBtwAAAAASUVORK5CYII=);background-position:right top;background-repeat:no-repeat;}input.svelte-1zsz92:user-invalid {border:1px solid red;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeVJREFUeNqkU01oE1EQ/mazSTdRmqSxLVSJVKU9RYoHD8WfHr16kh5EFA8eSy6hXrwUPBSKZ6E9V1CU4tGf0DZWDEQrGkhprRDbCvlpavan3ezu+LLSUnADLZnHwHvzmJlvvpkhZkY7IqFNaTuAfPhhP/8Uo87SGSaDsP27hgYM/lUpy6lHdqsAtM+BPfvqKp3ufYKwcgmWCug6oKmrrG3PoaqngWjdd/922hOBs5C/jJA6x7AiUt8VYVUAVQXXShfIqCYRMZO8/N1N+B8H1sOUwivpSUSVCJ2MAjtVwBAIdv+AQkHQqbOgc+fBvorjyQENDcch16/BtkQdAlC4E6jrYHGgGU18Io3gmhzJuwub6/fQJYNi/YBpCifhbDaAPXFvCBVxXbvfbNGFeN8DkjogWAd8DljV3KRutcEAeHMN/HXZ4p9bhncJHCyhNx52R0Kv/XNuQvYBnM+CP7xddXL5KaJw0TMAF8qjnMvegeK/SLHubhpKDKIrJDlvXoMX3y9xcSMZyBQ+tpyk5hzsa2Ns7LGdfWdbL6fZvHn92d7dgROH/730YBLtiZmEdGPkFnhX4kxmjVe2xgPfCtrRd6GHRtEh9zsL8xVe+pwSzj+OtwvletZZ/wLeKD71L+ZeHHWZ/gowABkp7AwwnEjFAAAAAElFTkSuQmCC);background-position:right top;background-repeat:no-repeat;-moz-box-shadow:none;}button.svelte-1zsz92 {width:100%;margin:10px 0;padding:10px;border:none;outline:none;background-color:var(--secondary-color);color:var(--font-color);}button.svelte-1zsz92:hover {cursor:pointer;}.success.svelte-1zsz92, .error.svelte-1zsz92 {text-align:center;text-wrap:pretty;& img:where(.svelte-1zsz92) {width:15px;height:auto;vertical-align:middle;}}.success.svelte-1zsz92 {color:var(--green-color);}.error.svelte-1zsz92 {color:var(--red-color);}

  /* spinner */.dots.svelte-1zsz92 {width:3.5em;display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between;margin:auto;}.dots.svelte-1zsz92 div:where(.svelte-1zsz92) {width:0.5em;height:0.5em;border-radius:50%;background-color:#fc2f70;
        animation: svelte-1zsz92-fade 0.8s ease-in-out alternate infinite;}.dots.svelte-1zsz92 div:where(.svelte-1zsz92):nth-of-type(1) {background-color:oklch(0.97 0.211 109.77);animation-delay:-0.4s;}.dots.svelte-1zsz92 div:where(.svelte-1zsz92):nth-of-type(2) {background-color:oklch(0.52 0.176858 142.4953);animation-delay:-0.2s;}

      @keyframes svelte-1zsz92-fade {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
}`,
};
function $e(e, i) {
  Ie(i, !1), Je(e, Te);
  let g = De(i, "login_url", 12, "http://localhost:8080/login"),
    y = "csrf_cookie",
    s,
    l,
    A = d(""),
    p = d(""),
    Y = d(""),
    b = d(!1),
    M = d(!1),
    P = d(!1),
    X = "Username",
    ie = "Benutzername",
    R = d(X),
    O = "Please enter a valid email address",
    de = "Bitte tragen Sie eine gültige email Addresse ein",
    U = d(O),
    q = "Please contact your Support",
    ce = "Bitte wenden Sie sich an Ihren IT-Support",
    x = q,
    T = "Error",
    ve = "Fehler",
    C = T,
    $ = "You've been successfully logged in",
    ue = "Sie wurden erfolgreich angemeldet",
    V = d($),
    ee = "Login",
    me = "Anmeldung",
    S = d(ee),
    te = "log-in",
    ge = "anmelden",
    H = d(te),
    se = "Password",
    fe = "Passwort",
    I = d(se),
    re = "Please enter your password",
    pe = "Bitte tragen Sie Ihr Passwort ein",
    Q = d(re);
  function ze() {
    switch (localStorage.getItem("language") || "en") {
      case "de": {
        t(R, ie),
          t(U, de),
          (x = ce),
          (C = ve),
          t(V, ue),
          t(S, me),
          t(I, fe),
          t(Q, pe),
          t(H, ge);
        break;
      }
      default: {
        t(R, X),
          t(U, O),
          (x = q),
          (C = T),
          t(V, $),
          t(S, ee),
          t(I, se),
          t(Q, re),
          t(H, te);
        break;
      }
    }
  }
  const Ae = () => {
    if (((s = document.cookie.split("; ").find((r) => r.startsWith(y))), s)) {
      console.info("onMount csrfCookie");
      const r = s.split("=")[1];
      (s = r),
        console.info("onMount csrfCookie", s),
        (l = document.getElementById("csrf_cookie")),
        l && (l.value = r);
    }
    console.info(`username -${a(p)}- pwd -${a(A)}- cookie -${s}-`),
      t(b, !0),
      (s === "" || s === "undefined") &&
        ((s = "empty"), console.info("csrfCookie 0: ", s));
    const o = { user: a(p), pwd: a(A), token: s },
      f = JSON.stringify(o),
      h = new Headers();
    h.append("Content-Type", "application/json"),
      fetch(g(), { method: "POST", headers: h, body: f })
        .then((r) => {
          if (!r.ok)
            throw (
              (t(Y, `System ${C}: ${r.status}. ${x}.`),
              t(P, !0),
              t(b, !1),
              new Error(`HTTP ${C}! status: ${r.status}`))
            );
          return r.json();
        })
        .then((r) => (t(M, !0), t(b, !1), r))
        .catch((r) => {
          console.error("Error:", r),
            t(Y, `System ${r}: ${r}. ${x}.`),
            t(P, !0),
            t(b, !1);
        });
  };
  Ke(() => {
    if (
      (ze(), (s = document.cookie.split("; ").find((o) => o.startsWith(y))), s)
    ) {
      const o = s.split("=")[1];
      (s = o), (l = document.getElementById("csrf_cookie")), l && (l.value = o);
    }
  }),
    Le();
  var W = qe(),
    G = v(W),
    he = v(G);
  {
    var _e = (o) => {
        var f = je(),
          h = u(v(f));
        m(f),
          w(() =>
            z(
              h,
              `  
        ${a(V) ?? ""}.`
            )
          ),
          _(o, f);
      },
      be = (o) => {
        var f = Oe(),
          h = ae(f),
          r = u(h, 2),
          Z = v(r),
          we = v(Z, !0);
        m(Z);
        var F = u(Z, 2),
          ke = v(F);
        m(F);
        var B = u(F, 2);
        oe(B);
        var J = u(B, 2),
          ye = v(J);
        m(J);
        var E = u(J, 2);
        oe(E);
        var L = u(E, 2),
          xe = v(L);
        {
          var Ce = (n) => {
              var c = Me(),
                D = ae(c);
              Ze(), w(() => z(D, `${a(S) ?? ""}...`)), _(n, c);
            },
            Se = (n) => {
              var c = Fe();
              w(() => z(c, `${a(H) ?? ""} 🔒`)), _(n, c);
            };
          K(xe, (n) => {
            a(b) ? n(Ce) : n(Se, !1);
          });
        }
        m(L);
        var Be = u(L, 2);
        {
          var Ee = (n) => {
            var c = Xe(),
              D = u(v(c));
            m(c),
              w(() =>
                z(
                  D,
                  `  
            ${a(Y) ?? ""}`
                )
              ),
              _(n, c);
          };
          K(Be, (n) => {
            a(P) && n(Ee);
          });
        }
        m(r),
          w(() => {
            z(we, a(S)),
              z(ke, `${a(R) ?? ""}:`),
              le(B, "title", a(U)),
              z(ye, `${a(I) ?? ""}:`),
              le(E, "title", a(Q));
          }),
          ne(
            B,
            () => a(p),
            (n) => t(p, n)
          ),
          ne(
            E,
            () => a(A),
            (n) => t(A, n)
          ),
          _(o, f);
      };
    K(he, (o) => {
      a(M) ? o(_e) : o(be, !1);
    });
  }
  return (
    m(G),
    m(W),
    Qe("submit", G, Ne(Ae)),
    _(e, W),
    We({
      get login_url() {
        return g();
      },
      set login_url(o) {
        g(o), Ge();
      },
    })
  );
}
customElements.define("rz-loginform", He($e, { login_url: {} }, [], [], !0));

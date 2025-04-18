import {
  O as K,
  q as $,
  g,
  n as ee,
  P,
  u as Q,
  Q as re,
  R as C,
  S as W,
  T as S,
  U as ae,
  m as Z,
  V as O,
  z as E,
  W as ne,
  X as te,
  Y as se,
  Z as oe,
  _ as le,
  y as ie,
  C as ue,
  $ as ve,
  a0 as de,
  E as z,
  x as fe,
  A as ce,
  a1 as _e,
  a2 as V,
  a3 as M,
  B as w,
  a4 as he,
  d as pe,
  c as be,
  p as me,
  t as D,
  e as A,
  k as ge,
  l as Y,
  f as ke,
  r as N,
  a5 as ye,
  o as xe,
  a as q,
  b as B,
  h as L,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { i as Ee } from "/assets/if.js";
import { a as we } from "/assets/css.js";
import { s as U } from "/assets/attributes.js";
import { i as Te } from "/assets/lifecycle.js";
import { p as X } from "/assets/props.js";
import { o as Ae } from "/assets/index-client.js";
function Ie(o, e) {
  return e;
}
function Re(o, e, r, u) {
  for (var c = [], f = e.length, v = 0; v < f; v++) se(e[v].e, c, !0);
  var h = f > 0 && c.length === 0 && r !== null;
  if (h) {
    var s = r.parentNode;
    oe(s), s.append(r), u.clear(), y(o, e[0].prev, e[f - 1].next);
  }
  le(c, () => {
    for (var d = 0; d < f; d++) {
      var a = e[d];
      h || (u.delete(a.k), y(o, a.prev, a.next)), ie(a.e, !h);
    }
  });
}
function Ce(o, e, r, u, c, f = null) {
  var v = o,
    h = { flags: e, items: new Map(), first: null };
  {
    var s = o;
    v = E ? z(fe(s)) : s.appendChild(K());
  }
  E && ce();
  var d = null,
    a = !1,
    p = ee(() => {
      var n = r();
      return ne(n) ? n : n == null ? [] : W(n);
    });
  $(() => {
    var n = g(p),
      l = n.length;
    if (a && l === 0) return;
    a = l === 0;
    let t = !1;
    if (E) {
      var _ = v.data === _e;
      _ !== (l === 0) && ((v = V()), z(v), M(!1), (t = !0));
    }
    if (E) {
      for (var m = null, i, b = 0; b < l; b++) {
        if (w.nodeType === 8 && w.data === he) {
          (v = w), (t = !0), M(!1);
          break;
        }
        var T = n[b],
          x = u(T, b);
        (i = j(w, h, m, null, T, x, b, c, e, r)), h.items.set(x, i), (m = i);
      }
      l > 0 && z(V());
    }
    E || ze(n, h, v, c, e, u, r),
      f !== null &&
        (l === 0
          ? d
            ? P(d)
            : (d = Q(() => f(v)))
          : d !== null &&
            re(d, () => {
              d = null;
            })),
      t && M(!0),
      g(p);
  }),
    E && (v = w);
}
function ze(o, e, r, u, c, f, v) {
  var h = o.length,
    s = e.items,
    d = e.first,
    a = d,
    p,
    n = null,
    l = [],
    t = [],
    _,
    m,
    i,
    b;
  for (b = 0; b < h; b += 1) {
    if (((_ = o[b]), (m = f(_, b)), (i = s.get(m)), i === void 0)) {
      var T = a ? a.e.nodes_start : r;
      (n = j(T, e, n, n === null ? e.first : n.next, _, m, b, u, c, v)),
        s.set(m, n),
        (l = []),
        (t = []),
        (a = n.next);
      continue;
    }
    if ((Me(i, _, b), (i.e.f & C) !== 0 && P(i.e), i !== a)) {
      if (p !== void 0 && p.has(i)) {
        if (l.length < t.length) {
          var x = t[0],
            k;
          n = x.prev;
          var H = l[0],
            I = l[l.length - 1];
          for (k = 0; k < l.length; k += 1) J(l[k], x, r);
          for (k = 0; k < t.length; k += 1) p.delete(t[k]);
          y(e, H.prev, I.next),
            y(e, n, H),
            y(e, I, x),
            (a = x),
            (n = I),
            (b -= 1),
            (l = []),
            (t = []);
        } else
          p.delete(i),
            J(i, a, r),
            y(e, i.prev, i.next),
            y(e, i, n === null ? e.first : n.next),
            y(e, n, i),
            (n = i);
        continue;
      }
      for (l = [], t = []; a !== null && a.k !== m; )
        (a.e.f & C) === 0 && (p ?? (p = new Set())).add(a),
          t.push(a),
          (a = a.next);
      if (a === null) continue;
      i = a;
    }
    l.push(i), (n = i), (a = i.next);
  }
  if (a !== null || p !== void 0) {
    for (var R = p === void 0 ? [] : W(p); a !== null; )
      (a.e.f & C) === 0 && R.push(a), (a = a.next);
    var F = R.length;
    if (F > 0) {
      var G = h === 0 ? r : null;
      Re(e, R, G, s);
    }
  }
  (S.first = e.first && e.first.e), (S.last = n && n.e);
}
function Me(o, e, r, u) {
  ae(o.v, e), (o.i = r);
}
function j(o, e, r, u, c, f, v, h, s, d) {
  var a = (s & ve) !== 0,
    p = (s & de) === 0,
    n = a ? (p ? Z(c) : O(c)) : c,
    l = (s & te) === 0 ? v : O(v),
    t = { i: l, v: n, k: f, a: null, e: null, prev: r, next: u };
  try {
    return (
      (t.e = Q(() => h(o, n, l, d), E)),
      (t.e.prev = r && r.e),
      (t.e.next = u && u.e),
      r === null ? (e.first = t) : ((r.next = t), (r.e.next = t.e)),
      u !== null && ((u.prev = t), (u.e.prev = t.e)),
      t
    );
  } finally {
  }
}
function J(o, e, r) {
  for (
    var u = o.next ? o.next.e.nodes_start : r,
      c = e ? e.e.nodes_start : r,
      f = o.e.nodes_start;
    f !== u;

  ) {
    var v = ue(f);
    c.before(f), (f = v);
  }
}
function y(o, e, r) {
  e === null ? (o.first = r) : ((e.next = r), (e.e.next = r && r.e)),
    r !== null && ((r.prev = e), (r.e.prev = e && e.e));
}
var Ne = D('<button class="active svelte-r9r2ko"> </button>'),
  De = (o, e, r) => e(`${g(r).link}`),
  He = D('<button class="svelte-r9r2ko"> </button>'),
  Se = D('<div class="rz-navmenu"></div>');
const Oe = {
  hash: "svelte-r9r2ko",
  code: `

@scope (.rz-navmenu){button.svelte-r9r2ko {width:100px;height:35px;background-color:var(--transparency);border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);
    /*display: block;*/
    /*margin: var(--base-padding) 0 var(--base-padding) 0;*/margin:var(--base-padding);}button.svelte-r9r2ko:not(.active):hover {background-color:var(--secondary-color);border:var(--border-width) var(--border-style) var(--border-color);border-radius:var(--border-radius);box-shadow:2px 2px rgba(0, 0, 0, 0.3);cursor:pointer;}.active.svelte-r9r2ko {background-color:var(--secondary-color);
    /*text-shadow: 2px 2px rgba(0, 0, 0, 0.3); */font-weight:bold;}

  @media screen and (min-width: 1024px) {button.svelte-r9r2ko {display:block;margin:var(--base-padding) 0 var(--base-padding) 0;}
}

}`,
};
function Ve(o, e) {
  me(e, !1), we(o, Oe);
  let r = X(e, "json_url", 12, "/assets/rz-navmenu.json"),
    u = X(e, "current_id", 12, "main"),
    c = Z([]);
  async function f() {
    try {
      const s = await fetch(r());
      s.ok
        ? ke(c, await s.json())
        : console.error(`Response status: ${s.status}`);
    } catch (s) {
      console.error("Error fetching data:", s);
    }
  }
  function v(s = "") {
    console.info("link: ", s), (window.location.href = `${s}`);
  }
  Ae(() => {
    f();
  }),
    Te();
  var h = Se();
  return (
    Ce(
      h,
      5,
      () => g(c),
      Ie,
      (s, d) => {
        var a = ye(),
          p = xe(a);
        {
          var n = (t) => {
              var _ = Ne(),
                m = q(_, !0);
              N(_),
                B(() => {
                  U(_, "id", g(d).id), L(m, g(d).name);
                }),
                A(t, _);
            },
            l = (t) => {
              var _ = He();
              _.__click = [De, v, d];
              var m = q(_, !0);
              N(_),
                B(() => {
                  U(_, "id", g(d).id), L(m, g(d).name);
                }),
                A(t, _);
            };
          Ee(p, (t) => {
            u() === g(d).id ? t(n) : t(l, !1);
          });
        }
        A(s, a);
      }
    ),
    N(h),
    A(o, h),
    ge({
      get json_url() {
        return r();
      },
      set json_url(s) {
        r(s), Y();
      },
      get current_id() {
        return u();
      },
      set current_id(s) {
        u(s), Y();
      },
    })
  );
}
pe(["click"]);
customElements.define(
  "rz-navmenu",
  be(Ve, { json_url: {}, current_id: {} }, [], [], !0)
);

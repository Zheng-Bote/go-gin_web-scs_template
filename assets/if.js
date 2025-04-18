import {
  q as p,
  a6 as g,
  P as I,
  u as A,
  Q as b,
  a7 as S,
  z as r,
  A as h,
  a8 as D,
  a1 as k,
  a2 as q,
  E as F,
  a3 as v,
  B as H,
} from "/assets/custom-element.js";
function O(E, m, [t, a] = [0, 0]) {
  r && t === 0 && h();
  var s = E,
    f = null,
    e = null,
    i = S,
    N = t > 0 ? g : 0,
    c = !1;
  const R = (n, l = !0) => {
      (c = !0), o(l, n);
    },
    o = (n, l) => {
      if (i === (i = n)) return;
      let T = !1;
      if (r && a !== -1) {
        if (t === 0) {
          const u = s.data;
          u === D
            ? (a = 0)
            : u === k
            ? (a = 1 / 0)
            : ((a = parseInt(u.substring(1))), a !== a && (a = i ? 1 / 0 : -1));
        }
        const _ = a > t;
        !!i === _ && ((s = q()), F(s), v(!1), (T = !0), (a = -1));
      }
      i
        ? (f ? I(f) : l && (f = A(() => l(s))),
          e &&
            b(e, () => {
              e = null;
            }))
        : (e ? I(e) : l && (e = A(() => l(s, [t + 1, a]))),
          f &&
            b(f, () => {
              f = null;
            })),
        T && v(!0);
    };
  p(() => {
    (c = !1), m(R), c || o(null, null);
  }, N),
    r && (s = H);
}
export { O as i };

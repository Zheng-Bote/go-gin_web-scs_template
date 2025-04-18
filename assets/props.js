import {
  a9 as I,
  aa as L,
  ab as y,
  n as B,
  g as u,
  ac as D,
  ad as G,
  ae as Y,
  f as C,
  G as N,
  af as T,
  ag as $,
  ah as j,
  ai as p,
  m as w,
  aj as M,
} from "/assets/custom-element.js";
let d = !1;
function U(a) {
  var r = d;
  try {
    return (d = !1), [a(), d];
  } finally {
    d = r;
  }
}
function O(a) {
  var r;
  return ((r = a.ctx) == null ? void 0 : r.d) ?? !1;
}
function z(a, r, P, v) {
  var R;
  var l = !j || (P & p) !== 0,
    q = (P & M) !== 0,
    S = !1,
    f;
  [f, S] = U(() => a[r]);
  var x = T in a || $ in a,
    s =
      (((R = I(a, r)) == null ? void 0 : R.set) ??
        (x && r in a && ((e) => (a[r] = e)))) ||
      void 0,
    t = v,
    c = !0,
    o = !1,
    E = () => ((o = !0), c && ((c = !1), (t = v)), t);
  f === void 0 && v !== void 0 && (s && l && L(), (f = E()), s && s(f));
  var _;
  if (l)
    _ = () => {
      var e = a[r];
      return e === void 0 ? E() : ((c = !0), (o = !1), e);
    };
  else {
    var h = B(() => a[r]);
    (h.f |= y),
      (_ = () => {
        var e = u(h);
        return e !== void 0 && (t = void 0), e === void 0 ? t : e;
      });
  }
  if (s) {
    var A = a.$$legacy;
    return function (e, i) {
      return arguments.length > 0
        ? ((!l || !i || A || S) && s(i ? _() : e), e)
        : _();
    };
  }
  var g = !1,
    b = w(f),
    n = D(() => {
      var e = _(),
        i = u(b);
      return g ? ((g = !1), i) : (b.v = e);
    });
  return (
    u(n),
    (n.equals = G),
    function (e, i) {
      if (arguments.length > 0) {
        const m = i ? u(n) : l && q ? Y(e) : e;
        if (!n.equals(m)) {
          if (((g = !0), C(b, m), o && t !== void 0 && (t = m), O(n))) return e;
          N(() => u(n));
        }
        return e;
      }
      return O(n) ? n.v : u(n);
    }
  );
}
export { z as p };

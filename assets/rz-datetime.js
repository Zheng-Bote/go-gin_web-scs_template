import {
  c as S,
  p as A,
  t as d,
  i as D,
  a as i,
  b as l,
  n as C,
  h as c,
  e as f,
  k as G,
  l as s,
  r as m,
  o as H,
  I as J,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { i as x } from "/assets/if.js";
import { s as K } from "/assets/attributes.js";
import { i as L } from "/assets/lifecycle.js";
import { p as n } from "/assets/props.js";
var M = d('<span class="tz"> </span><br>', 1),
  N = d('<span class="tz"> </span>'),
  O = d('<span class="tz"> </span>'),
  P = d('<span class="rz-datetime"><!> <!> <time> </time> <!></span>');
function Q(E, r) {
  A(r, !1);
  let a = n(r, "tz", 12, "Europe/Berlin"),
    p = n(r, "show_tz_pre", 12, "no"),
    h = n(r, "show_tz_post", 12, "no"),
    z = n(r, "show_tz_top", 12, "no"),
    v = n(r, "format", 12, "de-DE"),
    w = n(r, "fulldatetime", 12, "yes"),
    y = n(r, "justdate", 12, "no"),
    g = n(r, "justtime", 12, "no"),
    u = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: !1,
      timeZone: a(),
    };
  function b() {
    w() === "yes" &&
      (u = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: !1,
        timeZone: a(),
      }),
      y() === "yes" &&
        (u = {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          timeZone: a(),
        }),
      g() === "yes" &&
        (u = {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: !1,
          timeZone: a(),
        });
    const t = new Date();
    return new Intl.DateTimeFormat(v(), u).format(t);
  }
  L();
  var j = P(),
    T = i(j);
  {
    var k = (t) => {
      var e = M(),
        o = H(e),
        R = i(o, !0);
      m(o), J(), l(() => c(R, a())), f(t, e);
    };
    x(T, (t) => {
      z() === "yes" && t(k);
    });
  }
  var Z = D(T, 2);
  {
    var I = (t) => {
      var e = N(),
        o = i(e);
      m(e), l(() => c(o, `${a() ?? ""} `)), f(t, e);
    };
    x(Z, (t) => {
      p() === "yes" && t(I);
    });
  }
  var _ = D(Z, 2),
    q = i(_, !0);
  m(_);
  var B = D(_, 2);
  {
    var F = (t) => {
      var e = O(),
        o = i(e);
      m(e), l(() => c(o, ` ${a() ?? ""}`)), f(t, e);
    };
    x(B, (t) => {
      h() === "yes" && t(F);
    });
  }
  return (
    m(j),
    l(
      (t, e) => {
        K(_, "datetime", t), c(q, e);
      },
      [b, b],
      C
    ),
    f(E, j),
    G({
      get tz() {
        return a();
      },
      set tz(t) {
        a(t), s();
      },
      get show_tz_pre() {
        return p();
      },
      set show_tz_pre(t) {
        p(t), s();
      },
      get show_tz_post() {
        return h();
      },
      set show_tz_post(t) {
        h(t), s();
      },
      get show_tz_top() {
        return z();
      },
      set show_tz_top(t) {
        z(t), s();
      },
      get format() {
        return v();
      },
      set format(t) {
        v(t), s();
      },
      get fulldatetime() {
        return w();
      },
      set fulldatetime(t) {
        w(t), s();
      },
      get justdate() {
        return y();
      },
      set justdate(t) {
        y(t), s();
      },
      get justtime() {
        return g();
      },
      set justtime(t) {
        g(t), s();
      },
    })
  );
}
customElements.define(
  "rz-datetime",
  S(
    Q,
    {
      tz: {},
      show_tz_pre: {},
      show_tz_post: {},
      show_tz_top: {},
      format: {},
      fulldatetime: {},
      justdate: {},
      justtime: {},
    },
    [],
    [],
    !0
  )
);

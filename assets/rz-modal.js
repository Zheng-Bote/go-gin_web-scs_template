import {
  d as R,
  c as W,
  p as q,
  t as B,
  a as o,
  i as g,
  b as D,
  e as I,
  k as j,
  l as a,
  r as d,
  h as f,
} from "/assets/custom-element.js";
import "/assets/legacy.js";
import { a as A } from "/assets/css.js";
import { s as C } from "/assets/attributes.js";
import { s as z } from "/assets/class.js";
import { i as F } from "/assets/lifecycle.js";
import { p as t } from "/assets/props.js";
import { o as G, a as J } from "/assets/index-client.js";
var K = B(
  '<span class="rz-modal" id="rz-modal"><dialog id="rz_modal" class="rz_modal svelte-dddlex"><div id="rz_modal_content" class="rz_modal_content svelte-dddlex"><div id="rz_modal_header"><span aria-hidden="true" id="rz_modal_close">&times;</span> <span class="svelte-dddlex"> </span></div> <div id="rz_modal_body" class="rz_modal_body svelte-dddlex"><p> </p></div> <div id="rz_modal_footer"><span class="svelte-dddlex"> </span></div></div></dialog></span>'
);
const L = {
  hash: "svelte-dddlex",
  code: `

@scope (.rz-modal){--border-color: oklch(86.69% 0 0);dialog.svelte-dddlex {
   /* border: 1px solid var(--border-color);
    border-radius: 10px; */border:none;background:none;min-width:200px;min-height:100px;max-width:400px;max-height:300px;margin:auto;overflow:auto;}dialog.svelte-dddlex:not([open]) {display:none;}dialog.svelte-dddlex::backdrop {
    /*background-color: oklch(100% 0 0 / 90%); */-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);}.rz_modal_close.svelte-dddlex {background:var(--background-color);color:black;float:right;
    /*font-size: 28px;*/font-weight:bold;padding-right:5px;border-radius:var(--border-radius);}.rz_modal_close.svelte-dddlex:hover,
  .rz_modal_close.svelte-dddlex:focus {color:black;text-decoration:none;cursor:pointer;}.rz_modal.svelte-dddlex {overflow:auto; /* Enable scroll if needed */}.rz_modal_content.svelte-dddlex {margin:auto;padding:0;border:1px solid var(--transparency);border-radius:10px;box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);display:flex;flex-direction:column;height:100%;}.rz_modal_header.svelte-dddlex, .rz_modal_footer.svelte-dddlex {height:fit-content;text-align:center;align-items:center;background-color:var(--background-color);color:black;border-radius:var(--border-radius) var(--border-radius) 0 0;padding:5px;}.rz_modal_body.svelte-dddlex {
    /*padding: 2px 16px;*/flex:1;align-items:center;height:100%;padding:5px;background-color:var(--background-color);text-wrap:pretty;}.rz_modal_footer.svelte-dddlex {background-color:var(--background-color);border-top:1px solid var(--transparency);border-radius:0 0 var(--border-radius) var(--border-radius);color:var(--color);font-size:0.8rem;}.rz_modal_footer.svelte-dddlex > span:where(.svelte-dddlex) {font-size:0.8rem;}.info.svelte-dddlex{background:var(--info-color);}.red.svelte-dddlex{background:var(--red-color);}.yellow.svelte-dddlex{background:var(--yellow-color);color:var(--color);}.green.svelte-dddlex {background:var(--green-color);}
}`,
};
function N(h, r) {
  q(r, !1), A(h, L);
  let n = t(r, "title", 12, "Salute"),
    i = t(
      r,
      "body",
      12,
      "Hello World 你好世界 Hola Mundo Привет мир Hallo Welt!"
    ),
    c = t(r, "footer", 12, ""),
    l = t(r, "color", 12, ""),
    v = t(r, "do_open", 12, "close");
  function p() {
    const e = document.getElementById("rzmodal");
    e && e.shadowRoot.querySelector("#rz_modal").close();
  }
  G(() => {
    p();
  }),
    J(() => {
      p();
    }),
    F();
  var _ = K(),
    m = o(_),
    k = o(m),
    s = o(k),
    x = o(s);
  x.__click = p;
  var y = g(x, 2),
    H = o(y, !0);
  d(y), d(s);
  var u = g(s, 2),
    w = o(u),
    M = o(w, !0);
  d(w), d(u);
  var b = g(u, 2),
    E = o(b),
    S = o(E, !0);
  return (
    d(E),
    d(b),
    d(k),
    d(m),
    d(_),
    D(() => {
      C(m, "do_open", v()),
        z(s, 1, `rz_modal_header ${l() ?? ""}`, "svelte-dddlex"),
        z(x, 1, `rz_modal_close ${l() ?? ""}`, "svelte-dddlex"),
        f(H, n()),
        f(M, i()),
        z(b, 1, `rz_modal_footer ${l() ?? ""}`, "svelte-dddlex"),
        f(S, c());
    }),
    I(h, _),
    j({
      get title() {
        return n();
      },
      set title(e) {
        n(e), a();
      },
      get body() {
        return i();
      },
      set body(e) {
        i(e), a();
      },
      get footer() {
        return c();
      },
      set footer(e) {
        c(e), a();
      },
      get color() {
        return l();
      },
      set color(e) {
        l(e), a();
      },
      get do_open() {
        return v();
      },
      set do_open(e) {
        v(e), a();
      },
    })
  );
}
R(["click"]);
customElements.define(
  "rz-modal",
  W(N, { title: {}, body: {}, footer: {}, color: {}, do_open: {} }, [], [], !0)
);

import { ak as t, ah as c, al as l, G as o } from "/assets/custom-element.js";
function a(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function u(e) {
  t === null && a(),
    c && t.l !== null
      ? i(t).m.push(e)
      : l(() => {
          const n = o(e);
          if (typeof n == "function") return n;
        });
}
function f(e) {
  t === null && a(), u(() => () => o(e));
}
function i(e) {
  var n = e.l;
  return n.u ?? (n.u = { a: [], b: [], m: [] });
}
export { f as a, u as o };

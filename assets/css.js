import { aw as n } from "/assets/custom-element.js";
function h(r, t) {
  n(() => {
    var e = r.getRootNode(),
      a = e.host ? e : e.head ?? e.ownerDocument.head;
    if (!a.querySelector("#" + t.hash)) {
      const o = document.createElement("style");
      (o.id = t.hash), (o.textContent = t.code), a.appendChild(o);
    }
  });
}
export { h as a };

var qe=Object.defineProperty;var Ut=t=>{throw TypeError(t)};var Be=(t,e,n)=>e in t?qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>Be(t,typeof e!="symbol"?e+"":e,n),Gt=(t,e,n)=>e.has(t)||Ut("Cannot "+n);var E=(t,e,n)=>(Gt(t,e,"read from private field"),n?n.call(t):e.get(t)),Dt=(t,e,n)=>e.has(t)?Ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Pt=(t,e,n,r)=>(Gt(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const He="5";var ee;typeof window<"u"&&((ee=window.__svelte??(window.__svelte={})).v??(ee.v=new Set)).add(He);const Zn=1,zn=2,Qn=16,tr=2,er=8,Ye=1,Ve=2,ne="[",Ue="[!",re="]",at={},b=Symbol(),nr="http://www.w3.org/1999/xhtml",Wt=!1,S=2,se=4,kt=8,qt=16,M=32,X=64,yt=128,N=256,gt=512,A=1024,F=2048,it=4096,rt=8192,Ot=16384,Ge=32768,ie=65536,rr=1<<17,We=1<<19,le=1<<20,It=1<<21,ut=Symbol("$state"),Ke=Symbol("legacy props"),sr=Symbol("");var ae=Array.isArray,Je=Array.prototype.indexOf,Xe=Array.from,Et=Object.keys,mt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,Ze=Object.getOwnPropertyDescriptors,ze=Object.prototype,Qe=Array.prototype,ue=Object.getPrototypeOf,Kt=Object.isExtensible;function ir(t){return t()}function fe(t){for(var e=0;e<t.length;e++)t[e]()}const tn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let ot=[],ct=[];function oe(){var t=ot;ot=[],fe(t)}function ce(){var t=ct;ct=[],fe(t)}function en(t){ot.length===0&&queueMicrotask(oe),ot.push(t)}function lr(t){ct.length===0&&tn(ce),ct.push(t)}function Jt(){ot.length>0&&oe(),ct.length>0&&ce()}function _e(t){return t===this.v}function nn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ve(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function un(){throw new Error("https://svelte.dev/e/hydration_failed")}function ar(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function fn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function on(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Nt=!1,_n=!1;function ur(){Nt=!0}function et(t,e){if(typeof t!="object"||t===null||ut in t)return t;const n=ue(t);if(n!==ze&&n!==Qe)return t;var r=new Map,s=ae(t),i=j(0),l=h,a=u=>{var f=h;D(l);var _;return _=u(),D(f),_};return s&&r.set("length",j(t.length)),new Proxy(t,{defineProperty(u,f,_){(!("value"in _)||_.configurable===!1||_.enumerable===!1||_.writable===!1)&&fn();var c=r.get(f);return c===void 0?(c=a(()=>j(_.value)),r.set(f,c)):I(c,a(()=>et(_.value))),!0},deleteProperty(u,f){var _=r.get(f);if(_===void 0)f in u&&r.set(f,a(()=>j(b)));else{if(s&&typeof f=="string"){var c=r.get("length"),o=Number(f);Number.isInteger(o)&&o<c.v&&I(c,o)}I(_,b),Xt(i)}return!0},get(u,f,_){var w;if(f===ut)return t;var c=r.get(f),o=f in u;if(c===void 0&&(!o||(w=nt(u,f))!=null&&w.writable)&&(c=a(()=>j(et(o?u[f]:b))),r.set(f,c)),c!==void 0){var v=W(c);return v===b?void 0:v}return Reflect.get(u,f,_)},getOwnPropertyDescriptor(u,f){var _=Reflect.getOwnPropertyDescriptor(u,f);if(_&&"value"in _){var c=r.get(f);c&&(_.value=W(c))}else if(_===void 0){var o=r.get(f),v=o==null?void 0:o.v;if(o!==void 0&&v!==b)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return _},has(u,f){var v;if(f===ut)return!0;var _=r.get(f),c=_!==void 0&&_.v!==b||Reflect.has(u,f);if(_!==void 0||d!==null&&(!c||(v=nt(u,f))!=null&&v.writable)){_===void 0&&(_=a(()=>j(c?et(u[f]):b)),r.set(f,_));var o=W(_);if(o===b)return!1}return c},set(u,f,_,c){var G;var o=r.get(f),v=f in u;if(s&&f==="length")for(var w=_;w<o.v;w+=1){var x=r.get(w+"");x!==void 0?I(x,b):w in u&&(x=a(()=>j(b)),r.set(w+"",x))}o===void 0?(!v||(G=nt(u,f))!=null&&G.writable)&&(o=a(()=>j(void 0)),I(o,a(()=>et(_))),r.set(f,o)):(v=o.v!==b,I(o,a(()=>et(_))));var z=Reflect.getOwnPropertyDescriptor(u,f);if(z!=null&&z.set&&z.set.call(c,_),!v){if(s&&typeof f=="string"){var dt=r.get("length"),Q=Number(f);Number.isInteger(Q)&&Q>=dt.v&&I(dt,Q+1)}Xt(i)}return!0},ownKeys(u){W(i);var f=Reflect.ownKeys(u).filter(o=>{var v=r.get(o);return v===void 0||v.v!==b});for(var[_,c]of r)c.v!==b&&!(_ in u)&&f.push(_);return f},setPrototypeOf(){on()}})}function Xt(t,e=1){I(t,t.v+e)}const _t=new Map;function Bt(t,e){var n={f:0,v:t,reactions:null,equals:_e,rv:0,wv:0};return n}function j(t,e){const n=Bt(t);return yn(n),n}function vn(t,e=!1){var r;const n=Bt(t);return e||(n.equals=ve),Nt&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function I(t,e,n=!1){h!==null&&!C&&St()&&(h.f&(S|qt))!==0&&!(g!=null&&g.includes(t))&&cn();let r=n?et(e):e;return hn(t,r)}function hn(t,e){if(!t.equals(e)){var n=t.v;vt?_t.set(t,e):_t.set(t,n),t.v=e,t.wv=be(),he(t,F),St()&&d!==null&&(d.f&A)!==0&&(d.f&(M|X))===0&&(k===null?gn([t]):k.push(t))}return e}function he(t,e){var n=t.reactions;if(n!==null)for(var r=St(),s=n.length,i=0;i<s;i++){var l=n[i],a=l.f;(a&F)===0&&(!r&&l===d||(P(l,e),(a&(A|N))!==0&&((a&S)!==0?he(l,it):Ct(l))))}}function de(t){var e=S|F,n=h!==null&&(h.f&S)!==0?h:null;return d===null||n!==null&&(n.f&N)!==0?e|=N:d.f|=le,{ctx:p,deps:null,effects:null,equals:_e,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??d}}function fr(t){const e=de(t);return e.equals=ve,e}function $e(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)V(e[n])}}function dn(t){for(var e=t.parent;e!==null;){if((e.f&S)===0)return e;e=e.parent}return null}function $n(t){var e,n=d;Y(dn(t));try{$e(t),e=Ae(t)}finally{Y(n)}return e}function pe(t){var e=$n(t),n=(q||(t.f&N)!==0)&&t.deps!==null?it:A;P(t,n),t.equals(e)||(t.v=e,t.wv=be())}function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let m=!1;function $t(t){m=t}let $;function H(t){if(t===null)throw Ht(),at;return $=t}function we(){return H(U($))}function or(t){if(m){if(U($)!==null)throw Ht(),at;$=t}}function cr(t=1){if(m){for(var e=t,n=$;e--;)n=U(n);$=n}}function _r(){for(var t=0,e=$;;){if(e.nodeType===8){var n=e.data;if(n===re){if(t===0)return e;t-=1}else(n===ne||n===Ue)&&(t+=1)}var r=U(e);e.remove(),e=r}}var Zt,ye,ge,Ee;function Lt(){if(Zt===void 0){Zt=window,ye=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;ge=nt(e,"firstChild").get,Ee=nt(e,"nextSibling").get,Kt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Kt(n)&&(n.__t=void 0)}}function J(t=""){return document.createTextNode(t)}function st(t){return ge.call(t)}function U(t){return Ee.call(t)}function vr(t,e){if(!m)return st(t);var n=st($);if(n===null)n=$.appendChild(J());else if(e&&n.nodeType!==3){var r=J();return n==null||n.before(r),H(r),r}return H(n),n}function hr(t,e){if(!m){var n=st(t);return n instanceof Comment&&n.data===""?U(n):n}return $}function dr(t,e=1,n=!1){let r=m?$:t;for(var s;e--;)s=r,r=U(r);if(!m)return r;var i=r==null?void 0:r.nodeType;if(n&&i!==3){var l=J();return r===null?s==null||s.after(l):r.before(l),H(l),l}return H(r),r}function pn(t){t.textContent=""}let pt=!1,bt=!1,Tt=null,K=!1,vt=!1;function zt(t){vt=t}let ft=[];let h=null,C=!1;function D(t){h=t}let d=null;function Y(t){d=t}let g=null;function wn(t){g=t}function yn(t){h!==null&&h.f&It&&(g===null?wn([t]):g.push(t))}let y=null,T=0,k=null;function gn(t){k=t}let me=1,At=0,q=!1;function be(){return++me}function ht(t){var c;var e=t.f;if((e&F)!==0)return!0;if((e&it)!==0){var n=t.deps,r=(e&N)!==0;if(n!==null){var s,i,l=(e&gt)!==0,a=r&&d!==null&&!q,u=n.length;if(l||a){var f=t,_=f.parent;for(s=0;s<u;s++)i=n[s],(l||!((c=i==null?void 0:i.reactions)!=null&&c.includes(f)))&&(i.reactions??(i.reactions=[])).push(f);l&&(f.f^=gt),a&&_!==null&&(_.f&N)===0&&(f.f^=N)}for(s=0;s<u;s++)if(i=n[s],ht(i)&&pe(i),i.wv>t.wv)return!0}(!r||d!==null&&!q)&&P(t,A)}return!1}function En(t,e){for(var n=e;n!==null;){if((n.f&yt)!==0)try{n.fn(t);return}catch{n.f^=yt}n=n.parent}throw pt=!1,t}function mn(t){return(t.f&Ot)===0&&(t.parent===null||(t.parent.f&yt)===0)}function Rt(t,e,n,r){if(pt){if(n===null&&(pt=!1),mn(e))throw t;return}n!==null&&(pt=!0);{En(t,e);return}}function Te(t,e,n=!0){var r=t.reactions;if(r!==null)for(var s=0;s<r.length;s++){var i=r[s];g!=null&&g.includes(t)||((i.f&S)!==0?Te(i,e,!1):e===i&&(n?P(i,F):(i.f&A)!==0&&P(i,it),Ct(i)))}}function Ae(t){var v;var e=y,n=T,r=k,s=h,i=q,l=g,a=p,u=C,f=t.f;y=null,T=0,k=null,q=(f&N)!==0&&(C||!K||h===null),h=(f&(M|X))===0?t:null,g=null,Qt(t.ctx),C=!1,At++,t.f|=It;try{var _=(0,t.fn)(),c=t.deps;if(y!==null){var o;if(xt(t,T),c!==null&&T>0)for(c.length=T+y.length,o=0;o<y.length;o++)c[T+o]=y[o];else t.deps=c=y;if(!q)for(o=T;o<c.length;o++)((v=c[o]).reactions??(v.reactions=[])).push(t)}else c!==null&&T<c.length&&(xt(t,T),c.length=T);if(St()&&k!==null&&!C&&c!==null&&(t.f&(S|it|F))===0)for(o=0;o<k.length;o++)Te(k[o],t);return s!==null&&(At++,k!==null&&(r===null?r=k:r.push(...k))),_}finally{y=e,T=n,k=r,h=s,q=i,g=l,Qt(a),C=u,t.f^=It}}function bn(t,e){let n=e.reactions;if(n!==null){var r=Je.call(n,t);if(r!==-1){var s=n.length-1;s===0?n=e.reactions=null:(n[r]=n[s],n.pop())}}n===null&&(e.f&S)!==0&&(y===null||!y.includes(e))&&(P(e,it),(e.f&(N|gt))===0&&(e.f^=gt),$e(e),xt(e,0))}function xt(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)bn(t,n[r])}function Yt(t){var e=t.f;if((e&Ot)===0){P(t,A);var n=d,r=p,s=K;d=t,K=!0;try{(e&qt)!==0?Pn(t):Ce(t),Re(t);var i=Ae(t);t.teardown=typeof i=="function"?i:null,t.wv=me;var l=t.deps,a;Wt&&_n&&t.f&F}catch(u){Rt(u,t,n,r||t.ctx)}finally{K=s,d=n}}}function Tn(){try{an()}catch(t){if(Tt!==null)Rt(t,Tt,null);else throw t}}function xe(){var t=K;try{var e=0;for(K=!0;ft.length>0;){e++>1e3&&Tn();var n=ft,r=n.length;ft=[];for(var s=0;s<r;s++){var i=xn(n[s]);An(i)}}}finally{bt=!1,K=t,Tt=null,_t.clear()}}function An(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(Ot|rt))===0)try{ht(r)&&(Yt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Se(r):r.fn=null))}catch(s){Rt(s,r,null,r.ctx)}}}function Ct(t){bt||(bt=!0,queueMicrotask(xe));for(var e=Tt=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(X|M))!==0){if((n&A)===0)return;e.f^=A}}ft.push(e)}function xn(t){for(var e=[],n=t;n!==null;){var r=n.f,s=(r&(M|X))!==0,i=s&&(r&A)!==0;if(!i&&(r&rt)===0){if((r&se)!==0)e.push(n);else if(s)n.f^=A;else{var l=h;try{h=n,ht(n)&&Yt(n)}catch(f){Rt(f,n,null,n.ctx)}finally{h=l}}var a=n.first;if(a!==null){n=a;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)n=u.next,u=u.parent}return e}function kn(t){var e;for(Jt();ft.length>0;)bt=!0,xe(),Jt();return e}function W(t){var e=t.f,n=(e&S)!==0;if(h!==null&&!C){if(!(g!=null&&g.includes(t))){var r=h.deps;t.rv<At&&(t.rv=At,y===null&&r!==null&&r[T]===t?T++:y===null?y=[t]:(!q||!y.includes(t))&&y.push(t))}}else if(n&&t.deps===null&&t.effects===null){var s=t,i=s.parent;i!==null&&(i.f&N)===0&&(s.f^=N)}return n&&(s=t,ht(s)&&pe(s)),vt&&_t.has(t)?_t.get(t):t.v}function $r(t){var e=C;try{return C=!0,t()}finally{C=e}}const On=-7169;function P(t,e){t.f=t.f&On|e}function pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)Mt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&ut in n&&Mt(n)}}}function Mt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{Mt(t[r],e)}catch{}const n=ue(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Ze(n);for(let s in r){const i=r[s].get;if(i)try{i.call(t)}catch{}}}}}function ke(t){d===null&&h===null&&ln(),h!==null&&(h.f&N)!==0&&d===null&&sn(),vt&&rn()}function Nn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Z(t,e,n,r=!0){var s=d,i={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|F,first:null,fn:e,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(n)try{Yt(i),i.f|=Ge}catch(u){throw V(i),u}else e!==null&&Ct(i);var l=n&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(le|yt))===0;if(!l&&r&&(s!==null&&Nn(i,s),h!==null&&(h.f&S)!==0)){var a=h;(a.effects??(a.effects=[])).push(i)}return i}function Vt(t){const e=Z(kt,null,!1);return P(e,A),e.teardown=t,e}function wr(t){ke();var e=d!==null&&(d.f&M)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:d,reaction:h})}else{var r=Oe(t);return r}}function yr(t){return ke(),Ne(t)}function Rn(t){const e=Z(X,t,!0);return()=>{V(e)}}function Cn(t){const e=Z(X,t,!0);return(n={})=>new Promise(r=>{n.outro?In(e,()=>{V(e),r(void 0)}):(V(e),r(void 0))})}function Oe(t){return Z(se,t,!1)}function Ne(t){return Z(kt,t,!0)}function gr(t,e=[],n=de){const r=e.map(n);return Sn(()=>t(...r.map(W)))}function Sn(t,e=0){return Z(kt|qt|e,t,!0)}function Dn(t,e=!0){return Z(kt|M,t,!0,e)}function Re(t){var e=t.teardown;if(e!==null){const n=vt,r=h;zt(!0),D(null);try{e.call(null)}finally{zt(n),D(r)}}}function Ce(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&X)!==0?n.parent=null:V(n,e),n=r}}function Pn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&M)===0&&V(e),e=n}}function V(t,e=!0){var n=!1;if((e||(t.f&We)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,s=t.nodes_end;r!==null;){var i=r===s?null:U(r);r.remove(),r=i}n=!0}Ce(t,e&&!n),xt(t,0),P(t,Ot);var l=t.transitions;if(l!==null)for(const u of l)u.stop();Re(t);var a=t.parent;a!==null&&a.first!==null&&Se(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Se(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function In(t,e){var n=[];De(t,n,!0),Ln(n,()=>{V(t),e&&e()})}function Ln(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var s of t)s.out(r)}else e()}function De(t,e,n){if((t.f&rt)===0){if(t.f^=rt,t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&e.push(l);for(var r=t.first;r!==null;){var s=r.next,i=(r.f&ie)!==0||(r.f&M)!==0;De(r,e,i?n:!1),r=s}}}function Er(t){Pe(t,!0)}function Pe(t,e){if((t.f&rt)!==0){t.f^=rt,(t.f&A)===0&&(t.f^=A),ht(t)&&(P(t,F),Ct(t));for(var n=t.first;n!==null;){var r=n.next,s=(n.f&ie)!==0||(n.f&M)!==0;Pe(n,s?e:!1),n=r}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let p=null;function Qt(t){p=t}function Mn(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};Nt&&!e&&(p.l={s:null,u:null,r1:[],r2:Bt(!1)}),Vt(()=>{r.d=!0})}function Fn(t){const e=p;if(e!==null){t!==void 0&&(e.x=t);const l=e.e;if(l!==null){var n=d,r=h;e.e=null;try{for(var s=0;s<l.length;s++){var i=l[s];Y(i.effect),D(i.reaction),Oe(i.fn)}}finally{Y(n),D(r)}}p=e.p,e.m=!0}return t||{}}function St(){return!Nt||p!==null&&p.l===null}const jn=["touchstart","touchmove"];function qn(t){return jn.includes(t)}let te=!1;function Bn(){te||(te=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n.__on_r)==null||e.call(n)})},{capture:!0}))}function mr(t,e,n,r=!0){r&&n();for(var s of e)t.addEventListener(s,n);Vt(()=>{for(var i of e)t.removeEventListener(i,n)})}function Ie(t){var e=h,n=d;D(null),Y(null);try{return t()}finally{D(e),Y(n)}}function br(t,e,n,r=n){t.addEventListener(e,()=>Ie(n));const s=t.__on_r;s?t.__on_r=()=>{s(),r(!0)}:t.__on_r=()=>r(!0),Bn()}const Le=new Set,Ft=new Set;function Hn(t,e,n,r={}){function s(i){if(r.capture||lt.call(e,i),!i.cancelBubble)return Ie(()=>n==null?void 0:n.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?en(()=>{e.addEventListener(t,s,r)}):e.addEventListener(t,s,r),s}function Tr(t,e,n,r,s){var i={capture:r,passive:s},l=Hn(t,e,n,i);(e===document.body||e===window||e===document)&&Vt(()=>{e.removeEventListener(t,l,i)})}function Ar(t){for(var e=0;e<t.length;e++)Le.add(t[e]);for(var n of Ft)n(t)}function lt(t){var Q;var e=this,n=e.ownerDocument,r=t.type,s=((Q=t.composedPath)==null?void 0:Q.call(t))||[],i=s[0]||t.target,l=0,a=t.__root;if(a){var u=s.indexOf(a);if(u!==-1&&(e===document||e===window)){t.__root=e;return}var f=s.indexOf(e);if(f===-1)return;u<=f&&(l=u)}if(i=s[l]||t.target,i!==e){mt(t,"currentTarget",{configurable:!0,get(){return i||n}});var _=h,c=d;D(null),Y(null);try{for(var o,v=[];i!==null;){var w=i.assignedSlot||i.parentNode||i.host||null;try{var x=i["__"+r];if(x!=null&&(!i.disabled||t.target===i))if(ae(x)){var[z,...dt]=x;z.apply(i,[t,...dt])}else x.call(i,t)}catch(G){o?v.push(G):o=G}if(t.cancelBubble||w===e||w===null)break;i=w}if(o){for(let G of v)queueMicrotask(()=>{throw G});throw o}}finally{t.__root=e,delete t.currentTarget,D(_),Y(c)}}}function Yn(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function B(t,e){var n=d;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function xr(t,e){var n=(e&Ye)!==0,r=(e&Ve)!==0,s,i=!t.startsWith("<!>");return()=>{if(m)return B($,null),$;s===void 0&&(s=Yn(i?t:"<!>"+t),n||(s=st(s)));var l=r||ye?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=st(l),u=l.lastChild;B(a,u)}else B(l,l);return l}}function kr(t=""){if(!m){var e=J(t+"");return B(e,e),e}var n=$;return n.nodeType!==3&&(n.before(n=J()),H(n)),B(n,n),n}function Or(){if(m)return B($,null),$;var t=document.createDocumentFragment(),e=document.createComment(""),n=J();return t.append(e,n),B(e,n),t}function Vn(t,e){if(m){d.nodes_end=$,we();return}t!==null&&t.before(e)}function Nr(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n+"")}function Me(t,e){return Fe(t,e)}function Un(t,e){Lt(),e.intro=e.intro??!1;const n=e.target,r=m,s=$;try{for(var i=st(n);i&&(i.nodeType!==8||i.data!==ne);)i=U(i);if(!i)throw at;$t(!0),H(i),we();const l=Fe(t,{...e,anchor:i});if($===null||$.nodeType!==8||$.data!==re)throw Ht(),at;return $t(!1),l}catch(l){if(l===at)return e.recover===!1&&un(),Lt(),pn(n),$t(!1),Me(t,e);throw l}finally{$t(r),H(s)}}const tt=new Map;function Fe(t,{target:e,anchor:n,props:r={},events:s,context:i,intro:l=!0}){Lt();var a=new Set,u=c=>{for(var o=0;o<c.length;o++){var v=c[o];if(!a.has(v)){a.add(v);var w=qn(v);e.addEventListener(v,lt,{passive:w});var x=tt.get(v);x===void 0?(document.addEventListener(v,lt,{passive:w}),tt.set(v,1)):tt.set(v,x+1)}}};u(Xe(Le)),Ft.add(u);var f=void 0,_=Cn(()=>{var c=n??e.appendChild(J());return Dn(()=>{if(i){Mn({});var o=p;o.c=i}s&&(r.$$events=s),m&&B(c,null),f=t(c,r)||{},m&&(d.nodes_end=$),i&&Fn()}),()=>{var w;for(var o of a){e.removeEventListener(o,lt);var v=tt.get(o);--v===0?(document.removeEventListener(o,lt),tt.delete(o)):tt.set(o,v)}Ft.delete(u),c!==n&&((w=c.parentNode)==null||w.removeChild(c))}});return jt.set(f,_),f}let jt=new WeakMap;function Gn(t,e){const n=jt.get(t);return n?(jt.delete(t),n(e)):Promise.resolve()}function Wn(t){return new Kn(t)}var L,O;class Kn{constructor(e){Dt(this,L);Dt(this,O);var i;var n=new Map,r=(l,a)=>{var u=vn(a);return n.set(l,u),u};const s=new Proxy({...e.props||{},$$events:{}},{get(l,a){return W(n.get(a)??r(a,Reflect.get(l,a)))},has(l,a){return a===Ke?!0:(W(n.get(a)??r(a,Reflect.get(l,a))),Reflect.has(l,a))},set(l,a,u){return I(n.get(a)??r(a,u),u),Reflect.set(l,a,u)}});Pt(this,O,(e.hydrate?Un:Me)(e.component,{target:e.target,anchor:e.anchor,props:s,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((i=e==null?void 0:e.props)!=null&&i.$$host)||e.sync===!1)&&kn(),Pt(this,L,s.$$events);for(const l of Object.keys(E(this,O)))l==="$set"||l==="$destroy"||l==="$on"||mt(this,l,{get(){return E(this,O)[l]},set(a){E(this,O)[l]=a},enumerable:!0});E(this,O).$set=l=>{Object.assign(s,l)},E(this,O).$destroy=()=>{Gn(E(this,O))}}$set(e){E(this,O).$set(e)}$on(e,n){E(this,L)[e]=E(this,L)[e]||[];const r=(...s)=>n.call(this,...s);return E(this,L)[e].push(r),()=>{E(this,L)[e]=E(this,L)[e].filter(s=>s!==r)}}$destroy(){E(this,O).$destroy()}}L=new WeakMap,O=new WeakMap;let je;typeof HTMLElement=="function"&&(je=class extends HTMLElement{constructor(e,n,r){super();R(this,"$$ctor");R(this,"$$s");R(this,"$$c");R(this,"$$cn",!1);R(this,"$$d",{});R(this,"$$r",!1);R(this,"$$p_d",{});R(this,"$$l",{});R(this,"$$l_u",new Map);R(this,"$$me");this.$$ctor=e,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(e,n,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const s=this.$$c.$on(e,n);this.$$l_u.set(n,s)}super.addEventListener(e,n,r)}removeEventListener(e,n,r){if(super.removeEventListener(e,n,r),this.$$c){const s=this.$$l_u.get(n);s&&(s(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return i=>{const l=document.createElement("slot");s!=="default"&&(l.name=s),Vn(i,l)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Jn(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),n.default=!0):n[s]=e(s));for(const s of this.attributes){const i=this.$$g_p(s.name);i in this.$$d||(this.$$d[i]=wt(i,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=Wn({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Rn(()=>{Ne(()=>{var s;this.$$r=!0;for(const i of Et(this.$$c)){if(!((s=this.$$p_d[i])!=null&&s.reflect))continue;this.$$d[i]=this.$$c[i];const l=wt(i,this.$$d[i],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,l)}this.$$r=!1})});for(const s in this.$$l)for(const i of this.$$l[s]){const l=this.$$c.$on(s,i);this.$$l_u.set(i,l)}this.$$l={}}}attributeChangedCallback(e,n,r){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=wt(e,r,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Et(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function wt(t,e,n,r){var i;const s=(i=n[t])==null?void 0:i.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Jn(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Rr(t,e,n,r,s,i){let l=class extends je{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return Et(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Et(e).forEach(a=>{mt(l.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(u){var c;u=wt(a,u,e),this.$$d[a]=u;var f=this.$$c;if(f){var _=(c=nt(f,a))==null?void 0:c.get;_?f[a]=u:f.$set({[a]:u})}}})}),r.forEach(a=>{mt(l.prototype,a,{get(){var u;return(u=this.$$c)==null?void 0:u[a]}})}),t.element=l,l}export{Zn as $,we as A,$ as B,U as C,Ht as D,H as E,Oe as F,$r as G,at as H,cr as I,mr as J,kr as K,St as L,br as M,Ne as N,J as O,Er as P,In as Q,rt as R,Xe as S,d as T,hn as U,Bt as V,ae as W,zn as X,De as Y,pn as Z,Ln as _,vr as a,Qn as a0,Ue as a1,_r as a2,$t as a3,re as a4,Or as a5,ie as a6,b as a7,ne as a8,nt as a9,ar as aa,rr as ab,de as ac,ve as ad,et as ae,ut as af,Ke as ag,Nt as ah,tr as ai,er as aj,p as ak,wr as al,sr as am,nr as an,ue as ao,Ze as ap,lr as aq,Bn as ar,yr as as,fe as at,ir as au,pr as av,en as aw,ur as ax,gr as b,Rr as c,Ar as d,Vn as e,I as f,W as g,Nr as h,dr as i,Tr as j,Fn as k,kn as l,vn as m,fr as n,hr as o,Mn as p,Sn as q,or as r,j as s,xr as t,Dn as u,Yn as v,B as w,st as x,V as y,m as z};

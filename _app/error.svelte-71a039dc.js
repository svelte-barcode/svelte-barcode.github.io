import{S as K,i as w,s as y,e as v,t as E,c as d,a as b,h as P,d as m,g as n,J as R,j,k as N,l as q,m as S,K as C}from"./chunks/vendor-cf2c59e6.js";function H(r){let f,t=r[1].frame+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].frame+"")&&j(a,t)},d(l){l&&m(f)}}}function J(r){let f,t=r[1].stack+"",a;return{c(){f=v("pre"),a=E(t)},l(l){f=d(l,"PRE",{});var s=b(f);a=P(s,t),s.forEach(m)},m(l,s){n(l,f,s),R(f,a)},p(l,s){s&2&&t!==(t=l[1].stack+"")&&j(a,t)},d(l){l&&m(f)}}}function z(r){let f,t,a,l,s=r[1].message+"",c,k,u,p,i=r[1].frame&&H(r),o=r[1].stack&&J(r);return{c(){f=v("h1"),t=E(r[0]),a=N(),l=v("pre"),c=E(s),k=N(),i&&i.c(),u=N(),o&&o.c(),p=q()},l(e){f=d(e,"H1",{});var _=b(f);t=P(_,r[0]),_.forEach(m),a=S(e),l=d(e,"PRE",{});var h=b(l);c=P(h,s),h.forEach(m),k=S(e),i&&i.l(e),u=S(e),o&&o.l(e),p=q()},m(e,_){n(e,f,_),R(f,t),n(e,a,_),n(e,l,_),R(l,c),n(e,k,_),i&&i.m(e,_),n(e,u,_),o&&o.m(e,_),n(e,p,_)},p(e,[_]){_&1&&j(t,e[0]),_&2&&s!==(s=e[1].message+"")&&j(c,s),e[1].frame?i?i.p(e,_):(i=H(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?o?o.p(e,_):(o=J(e),o.c(),o.m(p.parentNode,p)):o&&(o.d(1),o=null)},i:C,o:C,d(e){e&&m(f),e&&m(a),e&&m(l),e&&m(k),i&&i.d(e),e&&m(u),o&&o.d(e),e&&m(p)}}}function D({error:r,status:f}){return{props:{error:r,status:f}}}function A(r,f,t){let{status:a}=f,{error:l}=f;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,l=s.error)},[a,l]}class F extends K{constructor(f){super();w(this,f,A,z,y,{status:0,error:1})}}export{F as default,D as load};

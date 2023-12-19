(function(){"use strict";var e={3603:function(e,n,t){var o=t(9242),r=t(1076),i=t(6423),u=t(6216),c=t(3396);function a(e,n){const t=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(t)}var d=t(89);const f={},s=(0,d.Z)(f,[["render",a]]);var l=s,p=t(2483);const b=[{path:"/login",component:()=>Promise.all([t.e(746),t.e(537)]).then(t.bind(t,1537))},{path:"/forget_password",component:()=>t.e(842).then(t.bind(t,6842))},{path:"/create_account",component:()=>t.e(295).then(t.bind(t,2295))},{path:"/dashboard",component:()=>Promise.all([t.e(746),t.e(210)]).then(t.bind(t,2210)),children:[{path:"account",component:()=>t.e(314).then(t.bind(t,3314))},{path:"setting",component:()=>t.e(950).then(t.bind(t,950))},{path:"ledger",component:()=>Promise.all([t.e(746),t.e(737)]).then(t.bind(t,1737))}]}],h=(0,p.p7)({history:(0,p.r5)(),routes:b});var m=h,v=t(65),g=(0,v.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),y=t(3494),w=t(7749),O=t(8429),j=t(8539);y.vI.add(O.NCV,j.mRB);const k=(0,o.ri)(l);k.use(i.Z,r.Z),k.component("font-awesome-icon",w.GN),k.use(g),k.use(m),k.component("Loading",u.Z),k.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(c=!1,i<u&&(u=i));if(c){e.splice(f--,1);var d=r();void 0!==d&&(n=d)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{210:"73db05cb",295:"cf59981c",314:"46f0f6a5",537:"cf7ad464",737:"e7a0f6c5",746:"cd56c2fa",842:"01a7279c",950:"26032b02"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="budget-buddy:";t.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var c,a;if(void 0!==i)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var s=d[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+i){c=s;break}}c||(a=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),a&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/Budget-Buddy/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var u=t.p+t.u(n),c=new Error,a=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,r[1](c)}};t.l(u,a,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],c=o[1],a=o[2],d=0;if(u.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(a)var f=a(t)}for(n&&n(o);d<u.length;d++)i=u[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},o=self["webpackChunkbudget_buddy"]=self["webpackChunkbudget_buddy"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3603)}));o=t.O(o)})();
//# sourceMappingURL=app.235176fe.js.map
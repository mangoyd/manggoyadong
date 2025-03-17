(function(){"use strict";var e={7565:function(e,n,t){var o=t(5130),r=t(6768);function a(e,n,t,o,a,i){const u=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(u)}var i={name:"index",components:{},data(){},watch:{},computed:{},methods:{},mounted(){}},u=t(1241);const c=(0,u.A)(i,[["render",a],["__scopeId","data-v-35e1890a"]]);var s=c,f=t(782);const d={namespaced:!0,state:{pageLoading:!1,ads:[],menus:[],language:localStorage.getItem("language")?localStorage.getItem("language"):"ko-KR"},getters:{},mutations:{toggleLoading(e,n){e.pageLoading=n},setAds(e,n){e.ads=n},setMenus(e,n){e.menus=n},setLanguage(e,n){e.language=n,localStorage.setItem("language",n)}},actions:{toggleLoading({commit:e},n){e("toggleLoading",n)},setAds({commit:e},n){e("setAds",n)},setMenus({commit:e},n){e("setMenus",n)},setLanguage({commit:e},n){e("setLanguage",n)}}};var l=d,m=(0,f.y$)({modules:{common:l}}),p=t(1387);const g=[{path:"/",redirect:"index",component:()=>Promise.all([t.e(397),t.e(185)]).then(t.bind(t,8490)),children:[{path:"/index",name:"index",component:()=>Promise.all([t.e(397),t.e(207),t.e(790)]).then(t.bind(t,1530))},{path:"/category",name:"category",component:()=>Promise.all([t.e(397),t.e(207),t.e(672)]).then(t.bind(t,8708))},{path:"/info",name:"info",component:()=>Promise.all([t.e(397),t.e(207),t.e(215),t.e(491)]).then(t.bind(t,7959))},{path:"/look",name:"look",component:()=>Promise.all([t.e(397),t.e(215),t.e(93)]).then(t.bind(t,6093))},{path:"/policy",name:"policy",component:()=>t.e(906).then(t.bind(t,4906))},{path:"/friend",name:"friend",component:()=>Promise.all([t.e(397),t.e(772)]).then(t.bind(t,1772))},{path:"/search",name:"search",component:()=>t.e(861).then(t.bind(t,4861))},{path:"/advertising",name:"advertising",component:()=>Promise.all([t.e(397),t.e(207),t.e(667)]).then(t.bind(t,8407))}]}];var h=new p.aE({history:(0,p.LA)(),routes:g,scrollBehavior(e,n,t){return{top:0,left:0}}}),b=t(6259),v=t(1909),y=t(122),w=t(7877),k=t(907),A=t(3751),L=t(1399),O=t(8910),C=t(1443),E=t(7575),P=t(9265),S=t(1477),j=t(1189),x=t(8134),_=t(2094),T=t(5314),N=t(6235),I=(t(2241),t(2648));t(9935);b.hT.use("en-US",I.A),(0,o.Ef)(s).use(v.$x).use(y.$n).use(w.cG).use(k.Ei).use(A.xA).use(L.sG).use(O.zD).use(C.LC).use(E.vj).use(P.Hp).use(S.O).use(j.p).use(x._V).use(_.Rh).use(T.In).use(N.D0).use(m).use(h).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{93:"0819bdd5",185:"bb34a379",207:"2632fb2f",215:"5b4a0bbc",397:"121adf4d",491:"de38217e",667:"3de65f0b",672:"3eb659b3",772:"30006324",790:"fc18f26f",861:"fc1c91fe",906:"3fe252cb"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{93:"cae7fb62",185:"05de9ff6",215:"3a0e6c25",491:"420e9d1f",667:"8b066303",672:"1cd6569b",772:"1f99affd",790:"800f29fd",861:"b86da621",906:"fb1d225c"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="new-web:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var l=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",t.nc&&(i.nonce=t.nc);var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var o=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=u,i.href=n,o?o.parentNode.insertBefore(i,o.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={524:0};t.f.miniCss=function(e,n){var t={93:1,185:1,215:1,491:1,667:1,672:1,772:1,790:1,861:1,906:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){t.b=document.baseURI||self.location.href;var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var f=c(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(f)},o=self["webpackChunknew_web"]=self["webpackChunknew_web"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(7565)}));o=t.O(o)})();
//# sourceMappingURL=app.3e032985.js.map
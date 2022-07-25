(function(e){function n(n){for(var o,a,i=n[0],u=n[1],p=n[2],s=0,d=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(n);while(d.length)d.shift()();return c.push.apply(c,p||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,a=1;a<t.length;a++){var i=t[a];0!==r[i]&&(o=!1)}o&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},a={app:0},r={app:0},c=[];function i(e){return u.p+"js/"+({companies:"companies"}[e]||e)+"."+{companies:"87046605"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={companies:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({companies:"companies"}[e]||e)+"."+{companies:"e851b409"}[e]+".css",r=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var p=c[i],s=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(s===o||s===r))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){p=d[i],s=p.getAttribute("data-href");if(s===o||s===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var o=n&&n.target&&n.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],l.parentNode.removeChild(l),t(c)},l.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise((function(n,t){o=r[e]=[n,t]}));n.push(o[2]=c);var p,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;p=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}r[e]=void 0}};var l=setTimeout((function(){p({type:"timeout",target:s})}),12e4);s.onerror=s.onload=p,document.head.appendChild(s)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/vue-companies-crud-table-demo/",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],s=p.push.bind(p);p.push=n,p=p.slice();for(var d=0;d<p.length;d++)n(p[d]);var l=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=t("1dce"),r=t.n(a),c=t("2ef0"),i=t.n(c),u=(t("d3b7"),t("8c4f"));o["a"].use(u["a"]);var p=new u["a"]({mode:"history",base:"/vue-companies-crud-table-demo/",routes:[{path:"/",redirect:{name:"companies"}},{path:"/companies",name:"companies",component:function(){return t.e("companies").then(t.bind(null,"bfef"))},meta:{requiresAuth:!0}},{path:"*",redirect:{name:"companies"}}]}),s=p,d=t("f309");o["a"].use(d["a"]);var l=new d["a"]({}),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("router-view")],1)},f=[],y=o["a"].extend({name:"App"}),g=y,v=t("2877"),h=t("6544"),b=t.n(h),w=t("7496"),C=Object(v["a"])(g,m,f,!1,null,null,null),A=C.exports;b()(C,{VApp:w["a"]});var N=t("2f62"),j={companies:function(e){return e.companies},companyTableHeaders:function(e){return e.companyTableHeaders},companyForm:function(e){return e.companyForm}},O=j,k={companies:[{companyId:"id1",className:"company-item",companyName:"Company X",createdAt:"string",updatedAt:"string",language:"de",2020:"good"},{companyId:"id2",className:"company-item",companyName:"Company Y",createdAt:"string",updatedAt:"string",language:"de",2021:"bad"},{companyId:"id3",className:"company-item",companyName:"Company Z",createdAt:"string",updatedAt:"string",language:"en",2019:"good"}],companyTableHeaders:[{text:"Name",value:"companyName"}],companyForm:[{type:"textField",key:"companyName",label:"Company Name",placeholder:"Type name",required:!0},{type:"selectField",key:"2019",label:"Balance 2019",placeholder:"Type",required:!1,items:[{text:"Good",value:"good"},{text:"Bad",value:"bad"}]},{type:"radioGroup",key:"language",label:"Language",required:!1,items:[{text:"de",value:"de"},{text:"en",value:"en"}]}]},x=k,T=(t("4de4"),t("7db0"),t("25f0"),t("5530")),S={addCompany:function(e,n){var t,o=((new Date).getTime()*Math.random()*1e8).toString();null===(t=e.companies)||void 0===t||t.push(Object(T["a"])(Object(T["a"])({},n),{},{companyId:o}))},deleteCompany:function(e,n){var t;e.companies=(null===(t=e.companies)||void 0===t?void 0:t.filter((function(e){return e.companyId!=n.companyId})))||null},updateCompany:function(e,n){var t,o=null===(t=e.companies)||void 0===t?void 0:t.find((function(e){return e.companyId===n.companyId}));o&&Object.assign(o,n)}},_=S,E={addCompany:function(e,n){e.commit("addCompany",n)},deleteCompany:function(e,n){e.commit("deleteCompany",n)},updateCompany:function(e,n){e.commit("updateCompany",n)}},P=E,I={namespaced:!0,state:x,getters:O,mutations:_,actions:P},F=I;o["a"].use(N["a"]);var q={modules:{companies:F}},B=new N["a"].Store(q),L=t("9483");Object(L["a"])("".concat("/vue-companies-crud-table-demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,o["a"].use(r.a),o["a"].prototype.$_=i.a,new o["a"]({router:s,store:B,vuetify:l,render:function(e){return e(A)}}).$mount("#app")}});
//# sourceMappingURL=app.bb138a5f.js.map
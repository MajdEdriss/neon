(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["source","chunk-2d21a073","chunk-2d0d6ac7"],{"740d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.className&&e.template?a("neon-card",{staticClass:"source-page"},[a("neon-card-header",[a("h1",{staticClass:"neon-h3"},[e._v(e._s(e.className))])]),a("neon-card-body",[a("editor",{attrs:{language:"typescript",value:e.template,"read-only":!0,"gh-link":e.ghLink}})],1)],1):e._e()},c=[],o=(a("99af"),a("d3b7"),a("ac1f"),a("1276"),a("276c")),s=a("e954"),r=a("920b"),l=a("92a6"),u=a("9ab4"),i=a("60a3"),h=a("7994"),p=a("c9e5"),d=function(e){Object(r["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.className=null,e.ghLink=null,e.template=null,e}return Object(s["a"])(a,[{key:"onRoute",value:function(e){var t=this,a=e.path;this.className=a.split("/").pop()||null,this.className&&(fetch("".concat("/neon/","files/").concat(a,".ts")).then((function(e){e.text().then((function(e){t.template=e}))})),this.ghLink="https://github.com/aotearoan/neon/tree/master/src/common".concat(a,".ts"))}}]),a}(i["c"]);Object(u["a"])([Object(i["d"])("$route",{immediate:!0})],d.prototype,"onRoute",null),d=Object(u["a"])([Object(i["a"])({components:{NeonCard:h["g"],NeonCardBody:h["h"],NeonCardHeader:h["i"],Editor:p["a"]}})],d);var b=d,f=b,m=a("2877"),v=Object(m["a"])(f,n,c,!1,null,null,null);t["default"]=v.exports},ba86:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"not-found"},[a("h1",{staticClass:"neon-h0"},[e._v("404")]),a("h2",{staticClass:"neon-h1"},[e._v("Not Found")]),a("p",[e._v("They page you're looking for does not exist."),a("br"),e._v("Please check the URL or select another page from the menu.")])])}],o=a("276c"),s=a("920b"),r=a("92a6"),l=a("9ab4"),u=a("60a3"),i=function(e){Object(s["a"])(a,e);var t=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(u["c"]);i=Object(l["a"])([Object(u["a"])({})],i);var h=i,p=h,d=a("2877"),b=Object(d["a"])(p,n,c,!1,null,null,null);t["default"]=b.exports}}]);
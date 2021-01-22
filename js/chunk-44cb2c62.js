(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44cb2c62"],{"3fbc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.example.noCard?n("div",{staticClass:"example--no-card"},[e.example.title?n("h3",[e._v(e._s(e.example.title))]):e._e(),e.example.tip?n("neon-note",{attrs:{color:"info"}},[n("span",[n("strong",[e._v("Tip:")]),e._v(e._s(" "+e.example.tip))])]):e._e(),e.example.tip?n("br"):e._e(),n("div",{staticClass:"example__output"},[n("v-runtime-template",{attrs:{"template-props":e.example.data||{},template:e.example.template}})],1),n("div",{staticClass:"example__code"},[e.example.template?n("editor",{model:{value:e.example.template,callback:function(t){e.$set(e.example,"template",t)},expression:"example.template"}}):e._e()],1)],1):n("neon-card",[e.example.title?n("neon-card-header",{staticClass:"example__title"},[n("h3",[e._v(e._s(e.example.title))])]):e._e(),n("neon-card-body",{attrs:{"full-width":e.example.fixedContent}},[e.example.tip?n("neon-note",{attrs:{color:"info"}},[n("span",[n("strong",[e._v("Tip:")]),e._v(e._s(" "+e.example.tip))])]):e._e(),e.example.tip?n("br"):e._e(),n("div",{staticClass:"example__output",class:{"example__output--fixed-content":e.example.fixedContent}},[n("v-runtime-template",{attrs:{"template-props":e.example.data||{},template:e.example.template}})],1),n("div",{staticClass:"example__code",class:{"example__code--fixed-content":e.example.fixedContent}},[e.example.template?n("editor",{model:{value:e.example.template,callback:function(t){e.$set(e.example,"template",t)},expression:"example.template"}}):e._e()],1)],1)],1)},o=[],s=n("276c"),i=n("920b"),l=n("92a6"),p=n("9ab4"),c=n("60a3"),r=n("c9e5"),d=n("172f"),_=n("3806"),m=n("5735"),u=n("6c04"),v=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(c["c"]);Object(p["a"])([Object(c["b"])({required:!0})],v.prototype,"example",void 0),Object(p["a"])([Object(c["b"])({default:"html"})],v.prototype,"language",void 0),v=Object(p["a"])([Object(c["a"])({components:{Editor:r["a"],NeonCard:m["a"],NeonCardBody:_["a"],NeonCardHeader:d["a"],NeonNote:u["a"]}})],v);var b=v,h=b,f=n("2877"),y=Object(f["a"])(h,a,o,!1,null,null,null);t["a"]=y.exports},"60f5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.menuModel?n("component-documentation",{attrs:{examples:e.examples,model:e.menuModel,headline:e.headline}},[n("neon-card",[n("neon-card-body",[n("p",[e._v(" Use "),n("strong",[e._v("NeonTooltip")]),e._v(" to display tooltips or popovers. It is recommended that tooltip content should be kept to a single line. Use the popover style for larger content. ")]),n("p",[e._v("To use "),n("strong",[e._v("NeonTooltip")]),e._v(" provide the "),n("em",[e._v("target")]),e._v(" and "),n("em",[e._v("content")]),e._v(" slots.")])])],1)],1):e._e()},o=[],s=n("276c"),i=n("e954"),l=n("920b"),p=n("92a6"),c=n("9ab4"),r=n("60a3"),d=n("7994"),_=n("1b4e"),m=n("d43b"),u=function(e){Object(l["a"])(n,e);var t=Object(p["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.menuModel=null,e.headline="Contextual information popups",e.examples=[{title:"Tooltip styles",template:'<div>\n  <p>Hover over\n  <neon-tooltip>\n    <template #target>\n      <strong>me</strong>\n    </template>\n    <template #content>\n      <span>Tooltip content</span>\n    </template>\n  </neon-tooltip> to see the tooltip style.</p>\n  <p>Hover over\n  <neon-tooltip tooltip-style="popover">\n    <template #target>\n      <strong>me</strong>\n    </template>\n    <template #content>\n      <span class="neon-h6" role="heading" aria-level="6">Popover content</span>\n      <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,\n      kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>\n    </template>\n  </neon-tooltip> to see the popover style.</p>\n  <br />\n  <neon-tooltip tooltip-style="popover" outline-style="border" outline-color="low-contrast">\n    <template #target>\n      <neon-button size="s" label="Hover me" />\n    </template>\n    <template #content>\n      <span class="neon-h6" role="heading" aria-level="6">Popover content</span>\n      <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,\n      kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>\n    </template>\n  </neon-tooltip></p>\n</div>'},{title:"Tooltip placement",template:'<div>\n  \x3c!-- top --\x3e\n  <p>Tooltip placement\n  <neon-tooltip>\n    <template #target>\n      <strong>top</strong>\n    </template>\n    <template #content>\n      <span>Tooltip content</span>\n    </template>\n  </neon-tooltip>.</p>\n  \x3c!-- left --\x3e\n  <p>Tooltip placement\n  <neon-tooltip placement="left">\n    <template #target>\n      <strong>left</strong>\n    </template>\n    <template #content>\n      <span>Tooltip content</span>\n    </template>\n  </neon-tooltip>.</p>\n  \x3c!-- bottom --\x3e\n  <p>Tooltip placement\n  <neon-tooltip placement="bottom">\n    <template #target>\n      <strong>bottom</strong>\n    </template>\n    <template #content>\n      <span>Tooltip content</span>\n    </template>\n  </neon-tooltip>.</p>\n  \x3c!-- right --\x3e\n  <p>Tooltip placement\n  <neon-tooltip placement="right">\n    <template #target>\n      <strong>right</strong>\n    </template>\n    <template #content>\n      <span>Tooltip content</span>\n    </template>\n  </neon-tooltip>.</p>\n</div>'}],e}return Object(i["a"])(n,[{key:"mounted",value:function(){this.menuModel=_["a"].getComponentConfig("NeonTooltip")}}]),n}(r["c"]);u=Object(c["a"])([Object(r["a"])({components:{NeonTooltip:d["ab"],NeonCard:d["g"],NeonCardBody:d["h"],ComponentDocumentation:m["a"]}})],u);var v=u,b=v,h=n("2877"),f=Object(h["a"])(b,a,o,!1,null,null,null);t["default"]=f.exports},d43b:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selected&&e.tabs.length>0?n("div",{staticClass:"component-documentation"},[n("div",{staticClass:"component-documentation__header"},[n("div",{staticClass:"component-documentation__header-container"},[n("h1",{staticClass:"component-documentation__title neon-h2"},[e._v(e._s(e.componentTitle))]),e.headline?n("span",{staticClass:"component-documentation__headline neon-color-text-neutral"},[e._v(e._s(e.headline))]):e._e(),n("neon-tabs",{attrs:{tabs:e.tabs},on:{input:e.onChangeTab},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)]),e.examplesIndex>=0?n("neon-tab",{attrs:{tab:e.tabs[e.examplesIndex],selected:e.selected===e.tabs[e.examplesIndex].key,toggleOnIf:!0}},[-1===e.descriptionIndex?n("h2",{staticClass:"neon-h3 component-documentation__description-heading"},[e._v("Description")]):e._e(),-1===e.descriptionIndex?e._t("default"):e._e(),n("examples",{attrs:{examples:e.examples}})],2):e._e(),e.descriptionIndex>=0?n("neon-tab",{attrs:{tab:e.tabs[e.descriptionIndex],selected:e.selected===e.tabs[e.descriptionIndex].key,toggleOnIf:!0}},[e.$slots.default?n("h2",{staticClass:"neon-h3"},[e._v("Description")]):e._e(),e._t("default")],2):e._e(),e.apiIndex>=0?n("neon-tab",{attrs:{tab:e.tabs[e.apiIndex],selected:e.selected===e.tabs[e.apiIndex].key,toggleOnIf:!0}},[n("h3",{staticClass:"component-documentation__tab-title"},[e._v("API")]),e.apiModel?n("api-docs",{attrs:{"api-model":e.apiModel,"component-name":e.componentName}}):e._e(),e._l(e.subApiModels,(function(e){return n("api-docs",{key:e.name,attrs:{"api-model":e.api,"component-name":e.name}})}))],2):e._e()],1):e._e()},o=[],s=(n("99af"),n("4de4"),n("c740"),n("4160"),n("c975"),n("d81d"),n("b0c0"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("276c")),i=n("e954"),l=n("920b"),p=n("92a6"),c=n("9ab4"),r=n("60a3"),d=n("eb61"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"api-docs__wrapper"},[e.apiModel?n("neon-card",{staticClass:"api-docs"},[n("neon-card-header",[n("h2",{staticClass:"neon-h3"},[e._v(e._s(e.componentName)+" API")])]),n("neon-card-body",[e.apiModel.description?n("p",{domProps:{innerHTML:e._s(e.apiModel.description)}}):e._e(),e.hasDocs?e._e():n("neon-note",{attrs:{color:"info"}},[n("span",[n("strong",[e._v("Note:")]),e._v(" The Vue API for this component contains no properties, events or slots")])]),e.hasDocs?n("div",{staticClass:"api-docs__desktop"},[e.hasProps?n("section",{staticClass:"api-docs__section"},[n("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"props-label"}},[e._v("Properties")]),n("table",{attrs:{"aria-labelledby":"props-label"}},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Type")]),n("th",[e._v("Default")]),n("th",[e._v("Description")])])]),n("tbody",e._l(e.apiModel.props,(function(t){return n("tr",{key:t.name},[n("td",{staticClass:"api-docs__name"},[n("span",[e._v(e._s(t.name))]),t.required?n("neon-label",{attrs:{size:"xxs",color:"brand",label:"required"}}):e._e()],1),n("td",{staticClass:"api-docs__type"},[e.typeLink(t)?n("neon-link",{attrs:{href:e.typeLink(t)}},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))]):n("span",[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))])],1),n("td",{staticClass:"api-docs__default"},[t.defaultValue?n("span",[e._v(e._s(t.defaultValue.value))]):e._e()]),n("td",{staticClass:"api-docs__description"},[t.description?n("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e(),e.hasEvents?n("section",{staticClass:"api-docs__section"},[n("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"events-label"}},[e._v("Events")]),n("table",{attrs:{"aria-labelledby":"events-label"}},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th",[e._v("Type")]),n("th",[e._v("Description")])])]),n("tbody",e._l(e.apiModel.events,(function(t){return n("tr",{key:t.name},[n("td",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),n("td",{staticClass:"api-docs__type"},[e.eventTypeLink(t)?n("neon-link",{attrs:{href:e.eventTypeLink(t)}},[e._v(e._s(e.eventTypeName(t)))]):n("span",[e._v(e._s(e.eventTypeName(t)))])],1),n("td",{staticClass:"api-docs__description"},[t.description?n("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e(),e.hasSlots?n("section",{staticClass:"api-docs__section"},[n("h3",{staticClass:"neon-h4 api-docs__title",attrs:{id:"slots-label"}},[e._v("Slots")]),n("table",{attrs:{"aria-labelledby":"slots-label"}},[n("thead",[n("tr",[n("th",[e._v("Name")]),n("th"),n("th",[e._v("Description")])])]),n("tbody",e._l(e.apiModel.slots,(function(t){return n("tr",{key:t.name},[n("td",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),n("td"),n("td",{staticClass:"api-docs__description"},[t.description?n("span",{domProps:{innerHTML:e._s(t.description)}}):e._e()])])})),0)])]):e._e()]):e._e(),e.hasDocs?n("div",{staticClass:"api-docs__responsive"},[e.hasProps?n("section",{staticClass:"api-docs__section"},[n("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Properties")]),e._l(e.apiModel.props.filter((function(e){return void 0===e.tags.ignore})),(function(t){return n("div",{key:t.name,staticClass:"api-docs__property"},[n("div",{staticClass:"api-docs__attribute"},[n("span",{staticClass:"api-docs__name"},[e._v(e._s(t.name))]),t.required?n("neon-label",{attrs:{size:"xxs",color:"brand",label:"required"}}):e._e()],1),n("div",{staticClass:"api-docs__attribute"},[n("label",[e._v("Type")]),e.typeLink(t)?n("neon-link",{staticClass:"api-docs__type",attrs:{href:e.typeLink(t)}},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))]):n("span",{staticClass:"api-docs__type"},[e._v(e._s(e.typeName(t))+e._s(e.isArray(t)?"[]":""))])],1),t.defaultValue?n("div",{staticClass:"api-docs__attribute"},[n("label",[e._v("Default")]),n("span",{staticClass:"api-docs__default"},[e._v(e._s(t.defaultValue.value))])]):e._e(),n("div",{staticClass:"api-docs__attribute"},[t.description?n("span",{staticClass:"api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])])}))],2):e._e(),e.hasEvents?n("section",{staticClass:"api-docs__section"},[n("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Events")]),e._l(e.apiModel.events,(function(t){return n("div",{key:t.name,staticClass:"api-docs__event"},[n("div",{staticClass:"api-docs__attribute api-docs__name"},[e._v(e._s(t.name))]),n("div",{staticClass:"api-docs__attribute"},[n("label",[e._v("Type")]),e.eventTypeLink(t)?n("neon-link",{staticClass:"api-docs__type",attrs:{href:e.eventTypeLink(t)}},[e._v(e._s(e.eventTypeName(t)))]):n("span",{staticClass:"api-docs__type"},[e._v(e._s(e.eventTypeName(t)))])],1),t.description?n("div",{staticClass:"api-docs__attribute api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])}))],2):e._e(),e.hasSlots?n("section",{staticClass:"api-docs__section"},[n("h3",{staticClass:"neon-h4 api-docs__title"},[e._v("Slots")]),e._l(e.apiModel.slots,(function(t){return n("div",{key:t.name,staticClass:"api-docs__slot"},[n("div",{staticClass:"api-docs__attribute api-docs__name"},[n("span",[e._v(e._s(t.name))]),t.scoped?n("neon-label",{attrs:{size:"xs",color:"brand",label:"scoped"}}):e._e()],1),t.description?n("div",{staticClass:"api-docs__attribute api-docs__description",domProps:{innerHTML:e._s(t.description)}}):e._e()])}))],2):e._e()]):e._e()],1)],1):e._e()],1)},m=[],u=(n("a4d3"),n("e01a"),n("a15b"),n("7994")),v=n("3d79"),b=function(e){Object(l["a"])(n,e);var t=Object(p["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"isArray",value:function(e){var t;return"Array"===(null===(t=e.type)||void 0===t?void 0:t.name)}},{key:"typeName",value:function(e){var t;if(null===(t=e.tags)||void 0===t?void 0:t.type)return e.tags.type[0].description;if(e.type){var n,a=e.type;return this.isArray(e)||"union"===e.type.name?null===(n=a.elements)||void 0===n?void 0:n.map((function(e){if("Array"===e.name&&e.elements){var t=e.elements.length>1?"(".concat(e.elements.map((function(e){return e.name})).join(" | "),"})"):e.elements[0].name;return"".concat(t,"[]")}return e.name})).join(" | "):a.name}}},{key:"typeLink",value:function(e){return this.lookupLink(this.typeName(e))}},{key:"eventTypeName",value:function(e){var t;return(null===(t=e.type)||void 0===t?void 0:t.names[0])||void 0}},{key:"eventTypeLink",value:function(e){return this.lookupLink(this.eventTypeName(e))}},{key:"lookupLink",value:function(e){if(e){var t=v["a"].indexOf(e)>=0,n=v["b"].indexOf(e)>=0;return t?"/enums/".concat(e):n?"/models/".concat(e):void 0}}},{key:"hasDocs",get:function(){return this.hasProps||this.hasEvents||this.hasSlots}},{key:"hasProps",get:function(){var e;return(null===(e=this.apiModel.props)||void 0===e?void 0:e.length)>0}},{key:"hasEvents",get:function(){var e;return(null===(e=this.apiModel.events)||void 0===e?void 0:e.length)>0}},{key:"hasSlots",get:function(){return(this.apiModel.slots||[]).length>0}}]),n}(r["c"]);Object(c["a"])([Object(r["b"])({required:!0})],b.prototype,"apiModel",void 0),Object(c["a"])([Object(r["b"])({required:!0})],b.prototype,"componentName",void 0),b=Object(c["a"])([Object(r["a"])({components:{NeonNote:u["G"]}})],b);var h,f=b,y=f,x=n("2877"),k=Object(x["a"])(y,_,m,!1,null,null,null),C=k.exports,g=h=function(e){Object(l["a"])(n,e);var t=Object(p["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.apiModel=null,e.subApiModels=[],e.tabs=[],e.selected=null,e}return Object(i["a"])(n,[{key:"onRouteChange",value:function(e){e.hash?this.selected=e.hash.substring(1):this.selected=this.tabs[0].key}},{key:"mounted",value:function(){var e,t=this,n="".concat("/neon/","docs/").concat(this.path,"/").concat(this.componentName,".json");fetch(n).then((function(e){e.json().then((function(e){t.apiModel=e}),(function(){return console.info("no component JSON at ".concat(n))}))})),(this.model.subComponents||[]).forEach((function(e){fetch("".concat("/neon/","docs/").concat(t.path,"/").concat(e.path,"/").concat(e.name,".json")).then((function(n){n.json().then((function(n){t.subApiModels.push({api:n,name:e.name})}))}))}));var a=(this.model.anchors||[]).map((function(e){return e.toLowerCase()}));this.tabs=h.defaultTabs.filter((function(e){return a.indexOf(e.key)>=0})),this.selected=(null===(e=this.$route.hash)||void 0===e?void 0:e.substring(1))||this.tabs[0].key}},{key:"onChangeTab",value:function(e){var t="#".concat(e);this.$route.hash!==t&&this.$router.replace({path:t})}},{key:"path",get:function(){return this.model.path}},{key:"componentName",get:function(){return this.model.component}},{key:"componentTitle",get:function(){return this.model.name||this.model.page}},{key:"examplesIndex",get:function(){return this.tabs.findIndex((function(e){return"examples"===e.key}))}},{key:"descriptionIndex",get:function(){return this.tabs.findIndex((function(e){return"description"===e.key}))}},{key:"apiIndex",get:function(){return this.tabs.findIndex((function(e){return"api"===e.key}))}}]),n}(r["c"]);g.defaultTabs=[{key:"examples",label:"Examples"},{key:"description",label:"Description"},{key:"api",label:"API"}],Object(c["a"])([Object(r["b"])({required:!0})],g.prototype,"model",void 0),Object(c["a"])([Object(r["b"])({required:!0})],g.prototype,"headline",void 0),Object(c["a"])([Object(r["b"])()],g.prototype,"examples",void 0),Object(c["a"])([Object(r["d"])("$route")],g.prototype,"onRouteChange",null),g=h=Object(c["a"])([Object(r["a"])({components:{ApiDocs:C,Examples:d["a"],NeonTab:u["U"],NeonTabs:u["V"]}})],g);var j=g,O=j,T=Object(x["a"])(O,a,o,!1,null,null,null);t["a"]=T.exports},eb61:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.examples?n("div",{staticClass:"examples"},[e.examples[0].noCard?e._e():n("h2",{staticClass:"neon-h3"},[e._v(" "+e._s(e.examples.length>1?"Examples":"Example")+" ")]),e._l(e.examples,(function(e){return n("div",{key:e.title,staticClass:"example"},[n("example",{attrs:{example:e}})],1)}))],2):e._e()},o=[],s=n("276c"),i=n("920b"),l=n("92a6"),p=n("9ab4"),c=n("60a3"),r=n("3fbc"),d=function(e){Object(i["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(c["c"]);Object(p["a"])([Object(c["b"])({required:!0})],d.prototype,"examples",void 0),d=Object(p["a"])([Object(c["a"])({components:{Example:r["a"]}})],d);var _=d,m=_,u=n("2877"),v=Object(u["a"])(m,a,o,!1,null,null,null);t["a"]=v.exports}}]);
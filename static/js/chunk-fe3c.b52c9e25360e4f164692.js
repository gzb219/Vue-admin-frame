(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fe3c"],{UkmT:function(n,t,e){},Zmc7:function(n,t,e){"use strict";e.r(t);var i,o=e("FIf5"),c=e.n(o),s=(e("LEOp"),{bind:function(n){n.querySelectorAll("pre code").forEach(function(n){c.a.highlightBlock(n)})}}),a=e("okRf"),r=/\.\/(.*)\.svg/,l=(i=a,i.keys()).map(function(n){return n.match(r)[1]}),u=e("Ueoi"),d={name:"IconViewer",metaInfo:{title:"Icons"},directives:{Highlight:s},data:function(){return{icons:l}},methods:{generateIconCode:function(n){return'<va-icon icon="'+n+'"/>'},handleClipboard:function(n,t){Object(u.e)(n,t)}}},v=(e("smus"),e("KHd+")),h=Object(v.a)(d,function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"va-body-container icon-viewer"},[i("h4",{staticClass:"va-body-title"},[e._v(e._s(e.$t("icons.usage")))]),e._v(" "),i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",{staticClass:"html",domProps:{innerHTML:e._s(e.$t("icons.content"))}})]),e._v(" "),i("h4",{staticClass:"va-body-title",domProps:{innerHTML:e._s(e.$t("icons.list"))}}),e._v(" "),i("el-row",e._l(e.icons,function(t){return i("el-col",{key:t,attrs:{xl:3,lg:4,md:6,sm:6,xs:8}},[i("div",{staticClass:"grid-content",on:{click:function(n){e.handleClipboard(e.generateIconCode(t),n)}}},[i("div",{staticClass:"icon-item"},[i("va-icon",{attrs:{icon:t}}),e._v(" "),i("span",[e._v(e._s(t))])],1)])])}))],1)},[],!1,null,"c4d2b1f4",null);h.options.__file="IconViewer.vue";t.default=h.exports},smus:function(n,t,e){"use strict";var i=e("UkmT");e.n(i).a}}]);
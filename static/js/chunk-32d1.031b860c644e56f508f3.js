(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-32d1"],{Rle8:function(e,t,i){"use strict";var o=i("FIf5"),n=i.n(o),r=(i("LEOp"),{bind:function(e){e.querySelectorAll("pre code").forEach(function(e){n.a.highlightBlock(e)})}});i.d(t,"a",function(){return r})},fJD7:function(e,t,i){"use strict";i.r(t);var o=i("Rle8"),n=i("wkzA"),r=i.n(n),s=(i("Add6"),[{element:"#hamburger",popover:{title:"Hamburger",description:"Open or close the sidebar menus",position:"bottom"}},{element:".handle-refresh",popover:{title:"Refresh",description:"Refresh current route if necessary",position:"bottom"}},{element:"#screenFull",popover:{title:"Screen full",description:"Bring the page into fullscreen",position:"bottom"}},{element:"#themePicker",popover:{title:"Theme picker",description:"Switch your favorite beautiful theme colors",position:"left",offset:5}},{element:".va-lang-picker",popover:{title:"Language picker",description:"Switch the system language",position:"left",offset:5}},{element:".va-tabs-bar",popover:{title:"Tabs container",description:"The history of the page you visited, Right-click on a TAB that can be closed for more action",position:"bottom"}},{element:"#tabsRightOptions",popover:{title:"Tabs actions",description:"Close tabs actions, or right-click on a TAB that can be closed for more action",position:"left"}}]),a={name:"Guide",metaInfo:{title:"Guide"},directives:{Highlight:o.a},data:function(){return{driver:null}},mounted:function(){this.driver=new r.a({opacity:.4,padding:5,allowClose:!1,overlayClickNext:!0})},methods:{start:function(){this.driver.defineSteps(s),this.driver.start()}}},l=i("KHd+"),c=Object(l.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"va-body-container"},[i("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[i("code",{staticClass:"html",domProps:{innerHTML:t._s(t.$t("guide.hint"))}})]),t._v(" "),i("br"),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.start(e)}}},[t._v(t._s(t.$t("guide.start")))])],1)},[],!1,null,null,null);t.default=c.exports}}]);
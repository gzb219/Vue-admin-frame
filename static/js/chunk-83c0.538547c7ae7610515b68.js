(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-83c0"],{"8nhe":function(t,e,n){},R6lm:function(t,e,n){"use strict";var a=n("JrP0");e.a={list:function(t){var e={page:t.page,size:t.size,title:t.title,level:t.level,status:t.status};return a.a.post("/articles/list",e).then(function(t){return t.data})},detail:function(t){var e={id:t};return a.a.get("/articles/detail",{params:e}).then(function(t){return t.data})},update:function(t){return a.a.post("/articles/update",t).then(function(t){return t.data})},updates:function(t){return a.a.post("/articles/batch",t).then(function(t){return t.data})},auditors:function(){return a.a.post("/account/auditors").then(function(t){return t.data})}}},m4Z1:function(t,e,n){"use strict";n.r(e);var a=n("nTMx"),i=n("R6lm"),s={name:"InlineEdit",metaInfo:{title:"Editable Table"},mixins:[a.a],methods:{handleEdit:function(e){var n=this;e.submitting=!0,e.originalTitle=e.title,i.a.update({id:e.id,title:e.title}).then(function(t){t.success&&(e.editing=!1),n.$message({type:t.success?"success":"error",message:t.success?"Modify successfully":t.message,center:!0}),e.submitting=!1})},handleCancel:function(t){t.title=t.originalTitle,t.editing=!1}}},l=(n("vSsj"),n("KHd+")),o=Object(l.a)(s,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"va-body-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],attrs:{data:n.list,"tooltip-effect":"theme",fit:"","highlight-current-row":"","row-key":"id","empty-text":"Sorry! This category have nothing data."}},[a("el-table-column",{attrs:{label:"ID",prop:"id",width:"36",align:"right"}}),n._v(" "),a("el-table-column",{attrs:{label:"TITLE",prop:"title","show-overflow-tooltip":"","class-name":"has-actions actions-small"},scopedSlots:n._u([{key:"default",fn:function(e){return[a("transition-group",{attrs:{name:"transform-fade"}},[e.row.editing?a("span",{key:"edit",staticClass:"inline-edit-form"},[a("el-input",{attrs:{size:"small"},model:{value:e.row.title,callback:function(t){n.$set(e.row,"title",t)},expression:"scope.row.title"}}),n._v(" "),a("el-button",{attrs:{disabled:e.row.submitting,icon:"el-icon-close",type:"danger",plain:"",size:"small"},on:{click:function(t){return n.handleCancel(e.row)}}},[n._v("\n              Cancel\n            ")])],1):a("span",{key:"cancel",staticStyle:{"line-height":"27px"}},[n._v("\n            "+n._s(e.row.title)+"\n          ")])])]}}])}),n._v(" "),a("el-table-column",{attrs:{label:"CREATE",prop:"display",width:"116"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n        "+n._s(n._f("dateAgo")(t.row.display))+"\n      ")]}}])}),n._v(" "),a("el-table-column",{attrs:{label:"LEVEL",prop:"level",width:"60",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{label:"STATUS",prop:"status",width:"100",align:"center","class-name":"has-actions actions-small table-status"},scopedSlots:n._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:n._f("articleStatus")(t.row.status),size:"small"}},[n._v("\n          "+n._s(t.row.status)+"\n        ")])]}}])}),n._v(" "),a("el-table-column",{attrs:{label:"AUTHOR",prop:"author",width:"96","show-overflow-tooltip":""}}),n._v(" "),a("el-table-column",{attrs:{label:"AUDITOR",prop:"auditor",width:"96","show-overflow-tooltip":""}}),n._v(" "),a("el-table-column",{attrs:{label:"PV",prop:"pv",width:"60"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v("\n        "+n._s(n._f("pageview")(t.row.pv))+"\n      ")]}}])}),n._v(" "),a("el-table-column",{attrs:{label:"ACTIONS",width:"90",align:"center","class-name":"has-actions table-actions actions-small"},scopedSlots:n._u([{key:"default",fn:function(e){return[e.row.editing?a("el-button",{attrs:{loading:e.row.submitting,icon:"el-icon-check",type:"success",plain:"",size:"small"},on:{click:function(t){return n.handleEdit(e.row)}}},[n._v("\n          OK\n        ")]):a("el-button",{attrs:{icon:"el-icon-edit",type:"primary",plain:"",size:"small"},on:{click:function(t){e.row.editing=!0}}},[n._v("\n          Edit\n        ")])]}}])})],1),n._v(" "),n.list&&0<n.list.length?a("el-pagination",{staticClass:"excel-pagination",attrs:{"page-sizes":[10,30,50],"current-page":n.pages.page,"page-size":n.pages.size,total:n.pages.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":n.handleSizeChange,"current-change":n.handlePageChange}}):n._e()],1)},[],!1,null,"65ede14a",null);e.default=o.exports},nTMx:function(t,e,n){"use strict";var a=n("R6lm");e.a={data:function(){return{pages:{page:1,size:10,total:0},list:[],loading:!1}},methods:{getList:function(){var e=this;this.loading=!0,a.a.list(this.pages).then(function(t){e.list=t.list.map(function(t){return e.$set(t,"editing",!1),e.$set(t,"submitting",!1),e.$set(t,"originalTitle",t.title),t}),e.pages=t.pages,e.loading=!1})},handlePageChange:function(t){this.pages.page=t,this.getList()},handleSizeChange:function(t){this.pages.size=t,this.getList()}},mounted:function(){this.getList()}}},vSsj:function(t,e,n){"use strict";var a=n("8nhe");n.n(a).a}}]);
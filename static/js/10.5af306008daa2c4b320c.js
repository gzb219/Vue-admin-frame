(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DgMJ:function(t,e,a){},R6lm:function(t,e,a){"use strict";var n=a("JrP0");e.a={list:function(t){var e={page:t.page,size:t.size,title:t.title,level:t.level,status:t.status};return n.a.post("/articles/list",e).then(function(t){return t.data})},detail:function(t){var e={id:t};return n.a.get("/articles/detail",{params:e}).then(function(t){return t.data})},update:function(t){return n.a.post("/articles/update",t).then(function(t){return t.data})},updates:function(t){return n.a.post("/articles/batch",t).then(function(t){return t.data})},auditors:function(){return n.a.post("/account/auditors").then(function(t){return t.data})}}},nTMx:function(t,e,a){"use strict";var n=a("R6lm");e.a={data:function(){return{pages:{page:1,size:10,total:0},list:[],loading:!1}},methods:{getList:function(){var e=this;this.loading=!0,n.a.list(this.pages).then(function(t){e.list=t.list.map(function(t){return e.$set(t,"editing",!1),e.$set(t,"submitting",!1),e.$set(t,"originalTitle",t.title),t}),e.pages=t.pages,e.loading=!1})},handlePageChange:function(t){this.pages.page=t,this.getList()},handleSizeChange:function(t){this.pages.size=t,this.getList()}},mounted:function(){this.getList()}}},nYbd:function(t,e,a){"use strict";var n=a("DgMJ");a.n(n).a},"wp/0":function(t,e,a){"use strict";a.r(e);var n=a("nTMx"),i=a("R6lm"),l=a("U/5H"),s=a.n(l),o={name:"Draggable",metaInfo:{title:"Draggable Table"},mixins:[n.a],methods:{sortSetup:function(){var a=this,t=document.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];s.a.create(t,{handle:".handle-drag",ghostClass:"sortable-ghost",animation:70,setData:function(t){t.setData("Text","")},onEnd:function(t){var e=a.list.splice(t.oldIndex,1)[0];a.list.splice(t.newIndex,0,e)}})},getList:function(){var e=this;this.loading=!0,i.a.list(this.pages).then(function(t){e.list=t.list,e.pages=t.pages,e.$nextTick(function(){return e.sortSetup()}),e.loading=!1})}}},r=(a("nYbd"),a("KHd+")),u=Object(r.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"va-body-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"tooltip-effect":"theme",data:e.list,fit:"","highlight-current-row":"","row-key":"id","empty-text":"Sorry! This category have nothing data."}},[a("el-table-column",{attrs:{label:"ID",prop:"id",width:"40",align:"right"}}),e._v(" "),a("el-table-column",{attrs:{label:"TITLE",prop:"title","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"CREATE",prop:"display",width:"110"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("dateAgo")(t.row.display)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"AUTHOR",prop:"author",width:"96","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"LEVEL",prop:"level",width:"60",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"STATUS",prop:"status",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"small",type:e._f("articleStatus")(t.row.status)}},[e._v(e._s(t.row.status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"PV",prop:"pv",width:"66"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("articlePV")(t.row.pv)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"DRAG",width:"66",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"handle-drag"},[a("va-icon",{attrs:{icon:"action-drag"}})],1)]}}])})],1)],1)},[],!1,null,"4683f332",null);u.options.__file="Draggable.vue";e.default=u.exports}}]);
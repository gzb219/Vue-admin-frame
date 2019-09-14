(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d2e823e"],{"01f8":function(t,e,a){},"18a8":function(t,e,a){"use strict";var l=a("f46b");e["a"]={list:function(t){var e=t.page,a=t.size,i=t.title,n=t.level,s=t.status,o={page:e,size:a,title:i,level:n,status:s};return l["a"].post("/articles/list",o)},detail:function(t){var e={id:t};return l["a"].get("/articles/detail",{params:e})},update:function(t){return l["a"].post("/articles/update",t)},updates:function(t){return l["a"].post("/articles/batch",t)},auditors:function(){return l["a"].post("/account/auditors")}}},9223:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"va-body-container"},[a("el-form",{ref:"formFilter",staticClass:"filter-and-actions",attrs:{model:t.filterData,inline:""}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"Title",clearable:""},model:{value:t.filterData.title,callback:function(e){t.$set(t.filterData,"title",e)},expression:"filterData.title"}})],1),t._v(" "),a("el-form-item",[a("el-select",{staticStyle:{width:"120px"},attrs:{value:"",placeholder:"Status"},model:{value:t.filterData.status,callback:function(e){t.$set(t.filterData,"status",e)},expression:"filterData.status"}},t._l(t.statusMap,function(t,e){return a("el-option",{key:t,attrs:{label:t,value:0===e?null:t}})}),1)],1),t._v(" "),a("el-form-item",[a("el-select",{staticStyle:{width:"80px"},attrs:{value:"",placeholder:"Level"},model:{value:t.filterData.level,callback:function(e){t.$set(t.filterData,"level",e)},expression:"filterData.level"}},t._l(t.levelMap,function(t,e){return a("el-option",{key:t,attrs:{label:t,value:0===e?null:t}})}),1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.getList}},[t._v("\n        Search\n      ")])],1),t._v(" "),a("el-form-item",[a("el-button-group",{staticStyle:{"vertical-align":"top"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){return t.handleEdit()}}},[t._v("\n          Add\n        ")]),t._v(" "),a("el-button",{attrs:{disabled:!t.selected||t.selected.length<1,type:"primary",icon:"el-icon-check"},on:{click:function(e){return t.handleBatchUpdate(!0)}}},[t._v("\n          Audit\n        ")]),t._v(" "),a("el-button",{attrs:{disabled:!t.selected||t.selected.length<1,type:"primary",icon:"el-icon-delete"},on:{click:function(e){return t.handleBatchUpdate(!1)}}},[t._v("\n          Delete\n        ")])],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list,"default-sort":{prop:"id",order:"ascending"},fit:"","tooltip-effect":"theme","highlight-current-row":"","empty-text":"Sorry! This category have nothing data."},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"38"}}),t._v(" "),a("el-table-column",{attrs:{type:"index",width:"36",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"TITLE",prop:"title","show-overflow-tooltip":"",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"CREATE",prop:"display",width:"116",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("dateAgo")(e.row.display))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"AUTHOR",prop:"author",width:"104","show-overflow-tooltip":"",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"AUDITOR",prop:"auditor",width:"110","show-overflow-tooltip":"",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"LEVEL",prop:"level",width:"90",align:"center",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"STATUS",prop:"status",width:"100",align:"center",sortable:"","class-name":"has-actions actions-small"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("articleStatus")(e.row.status),size:"small"}},[t._v("\n          "+t._s(e.row.status)+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"PV",prop:"pv",width:"66",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("numberShort")(e.row.pv))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"ACTIONS",width:"165","class-name":"has-actions actions-small"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-check",disabled:"audited"===e.row.status},on:{click:function(a){return t.handleBatchUpdate(!0,e.row)}}}),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(a){return t.handleEdit(e.row)}}}),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-delete"},on:{click:function(a){return t.handleBatchUpdate(!1,e.row)}}})]}}])})],1),t._v(" "),t.list&&t.list.length>0?a("el-pagination",{staticClass:"excel-pagination",attrs:{"page-sizes":[10,30,50],"current-page":t.pages.page,"page-size":t.pages.size,total:t.pages.total,background:"",layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handlePageChange}}):t._e(),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible,title:"Article "+(t.editForm.isEdit?"Edit":"Add"),width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{staticStyle:{"margin-right":"60px"},attrs:{model:t.editForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"Title",prop:"title"}},[a("el-input",{attrs:{placeholder:"Article title"},model:{value:t.editForm.title,callback:function(e){t.$set(t.editForm,"title",e)},expression:"editForm.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Summery",prop:"summery"}},[a("el-input",{attrs:{placeholder:"Article summery"},model:{value:t.editForm.summery,callback:function(e){t.$set(t.editForm,"summery",e)},expression:"editForm.summery"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Content",prop:"content"}},[a("el-input",{attrs:{placeholder:"Article content"},model:{value:t.editForm.content,callback:function(e){t.$set(t.editForm,"content",e)},expression:"editForm.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Level",prop:"level"}},[a("el-select",{attrs:{value:"",placeholder:"Article level"},model:{value:t.editForm.level,callback:function(e){t.$set(t.editForm,"level",e)},expression:"editForm.level"}},[t._l(t.levelMap,function(e,l){return[0!==l?a("el-option",{key:e,attrs:{label:e,value:e}}):t._e()]})],2)],1),t._v(" "),a("el-form-item",{attrs:{label:"Auditor",prop:"auditor"}},[a("el-autocomplete",{attrs:{debounce:0,"fetch-suggestions":t.inputQuerySearch,placeholder:"Article auditor"},model:{value:t.editForm.auditor,callback:function(e){t.$set(t.editForm,"auditor",e)},expression:"editForm.auditor"}})],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:""},on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n        Cancel\n      ")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("\n        Submit\n      ")])],1)],1)],1)},i=[],n=(a("ac6a"),a("9d33")),s=a("18a8"),o={name:"FullFeature",metaInfo:{title:"Sortable table"},mixins:[n["a"]],data:function(){return{filterData:{title:"",status:"",level:""},statusMap:["all","draft","committed","failing","auditing","audited","deleted"],levelMap:["all",1,2,3,4,5],selected:[],dialogVisible:!1,auditors:[],editForm:null}},created:function(){this.rebuildEditData()},mounted:function(){var t=this;s["a"].auditors().then(function(e){t.auditors=e.data.map(function(e){return t.$set(e,"value",e.username),e})})},methods:{getList:function(){var t=this;this.loading=!0;var e=this.pages,a=e.page,l=e.size,i=this.filterData,n=i.title,o=i.level,r=i.status,c={page:a,size:l,title:n,level:o,status:r};s["a"].list(c).then(function(e){e.success&&(t.list=e.data.map(function(e){return t.$set(e,"editing",!1),t.$set(e,"submitting",!1),t.$set(e,"originalTitle",e.title),e}),t.pages=e.pages,t.loading=!1)})},handleSelectionChange:function(t){this.selected=t},rebuildEditData:function(){this.editForm={isEdit:!1,author:this.$store.getters.user.username,title:"",summery:"",content:"",level:"",auditor:""}},handleEdit:function(t){this.dialogVisible=!0,t?this.editForm=Object.assign({},t):this.rebuildEditData()},inputQueryFilter:function(t){return function(e){return 0===e.value.toLowerCase().indexOf(t.toLowerCase())}},inputQuerySearch:function(t,e){var a=t?this.auditors.filter(this.inputQueryFilter(t)):this.auditors;e(a)},handleBatchUpdate:function(t,e){var a=this,l={status:t?"audited":"deleted"},i=[];e?i=[Object.assign({},e,l)]:this.selected.forEach(function(t){i.push(Object.assign({},t,l))});var n={type:t?"info":"warning",confirmButtonText:"Sure, Go Ahead",cancelButtonText:"Cancel",callback:function(n){"confirm"===n&&s["a"].updates(i).then(function(i){a.$message({center:!0,type:i.success?"success":"error",message:"".concat(t?"Audit":"Delete"," executed ").concat(i.success?"successfully":"failed",".")}),i.success&&(e?e.status=l.status:a.selected.forEach(function(t,e){a.selected[e].status=l.status}))})}};this.$confirm("Are you sure you want to ".concat(t?"audit":"delete"," ").concat(i.length>1?"these":"this"," data?"),"Are you sure?",n)}}},r=o,c=(a("95fa"),a("2877")),u=Object(c["a"])(r,l,i,!1,null,"6de92537",null);e["default"]=u.exports},"95fa":function(t,e,a){"use strict";var l=a("01f8"),i=a.n(l);i.a},"9d33":function(t,e,a){"use strict";var l=a("18a8");e["a"]={data:function(){return{pages:{page:1,size:10,total:0},list:[],loading:!1}},filters:{articleStatus:function(t){var e={draft:"info",committed:"warning",failing:"danger",auditing:"primary",audited:"success",deleted:"info"};return e[t]}},methods:{getList:function(){var t=this;this.loading=!0,l["a"].list(this.pages).then(function(e){e.success&&(t.list=e.data.map(function(e){return t.$set(e,"editing",!1),t.$set(e,"submitting",!1),t.$set(e,"originalTitle",e.title),e}),t.pages=e.pages,t.loading=!1)})},handlePageChange:function(t){this.pages.page=t,this.getList()},handleSizeChange:function(t){this.pages.size=t,this.getList()}},mounted:function(){this.getList()}}}}]);
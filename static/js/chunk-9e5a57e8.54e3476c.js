(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e5a57e8"],{"19d3":function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"va-body-container"},[l("el-form",{attrs:{model:t.exportOpts,inline:"",size:"medium"}},[l("el-form-item",{attrs:{label:t.$t("excelExport.filename")}},[l("el-input",{attrs:{placeholder:t.filenameDefault,"prefix-icon":"el-icon-document",clearable:""},model:{value:t.exportOpts.filename,callback:function(e){t.$set(t.exportOpts,"filename",e)},expression:"exportOpts.filename"}})],1),t._v(" "),l("el-form-item",{attrs:{label:t.$t("excelExport.fileType")}},[l("el-select",{staticStyle:{width:"100px"},attrs:{value:""},model:{value:t.exportOpts.type,callback:function(e){t.$set(t.exportOpts,"type",e)},expression:"exportOpts.type"}},[l("el-option",{attrs:{label:"xlsx",value:"xlsx"}}),t._v(" "),l("el-option",{attrs:{label:"cvx",value:"cvx"}}),t._v(" "),l("el-option",{attrs:{label:"txt",value:"txt"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:t.$t("excelExport.autoWidth")}},[l("el-switch",{model:{value:t.exportOpts.cellAutoWidth,callback:function(e){t.$set(t.exportOpts,"cellAutoWidth",e)},expression:"exportOpts.cellAutoWidth"}})],1),t._v(" "),l("el-form-item",{attrs:{label:t.$t("excelExport.execute")}},[l("el-button-group",{staticStyle:{"vertical-align":"top"}},[l("el-button",{attrs:{disabled:t.exportOpts.exporting,type:"primary"},on:{click:function(e){return t.handleExport(t.list)}}},[t._v("\n          "+t._s(t.$t("excelExport.currentPage"))+"\n        ")]),t._v(" "),l("el-button",{attrs:{disabled:t.exportOpts.exporting,type:"primary"},on:{click:t.handleExportAll}},[t._v("\n          "+t._s(t.$t("excelExport.allPages"))+"\n        ")])],1),t._v(" "),l("i",{directives:[{name:"show",rawName:"v-show",value:t.exportOpts.exporting,expression:"exportOpts.exporting"}],staticClass:"el-icon-loading export-handler-loading"})],1)],1),t._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list,"tooltip-effect":"light"}},[l("el-table-column",{attrs:{prop:"name",label:"name",width:"120","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"card",label:"ID Card","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"city",label:"city",width:"70","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"postcode",label:"zip",width:"70"}}),t._v(" "),l("el-table-column",{attrs:{prop:"tel",label:"tel",width:"110"}}),t._v(" "),l("el-table-column",{attrs:{prop:"mobile",label:"mobile",width:"105"}}),t._v(" "),l("el-table-column",{attrs:{prop:"fax",label:"fax",width:"110"}}),t._v(" "),l("el-table-column",{attrs:{prop:"email",label:"email","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{prop:"qq",label:"QQ",width:"110"}}),t._v(" "),l("el-table-column",{attrs:{prop:"company",label:"company","show-overflow-tooltip":""}})],1),t._v(" "),t.list&&t.list.length>0?l("el-pagination",{staticClass:"excel-pagination",attrs:{"page-sizes":[10,30,50],"current-page":t.pages.page,"page-size":t.pages.size,total:t.pages.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handlePageChange}}):t._e()],1)},o=[],n=l("f46b"),i=function(t){return n["a"].post("/contacts/list",t)},r=function(){return n["a"].post("/contacts/all")},p={list:i,all:r},s=l("51ea"),c={name:"Export",data:function(){return{filenameDefault:"xlsx-".concat(s["a"].format(new Date,"yyyy.MM.dd hh:mm")),exportOpts:{filename:"",tHeader:["NAME","ID CARD","CITY","ZIP","TEL","MOBILE","FAX","EMAIL","QQ","COMPANY"],exportProps:["name","card","city","postcode","tel","mobile","fax","email","qq","company"],cellAutoWidth:!1,type:"xlsx",exporting:!1},list:null,loading:!1,pages:{page:1,size:10,total:0}}},created:function(){this.getContacts()},methods:{handlePageChange:function(t){this.pages.page=t,this.getContacts()},handleSizeChange:function(t){this.pages.size=t,this.getContacts()},getContacts:function(){var t=this;this.loading=!0,p.list(this.pages).then(function(e){t.loading=!1,t.pages=e.pages,t.list=e.data})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},handleExport:function(t){var e=this;this.exportOpts.exporting=!0;var a=this.formatJson(this.exportOpts.exportProps,t);setTimeout(function(){l.e("chunk-b28d6c1c").then(l.bind(null,"3bf9")).then(function(t){t.handleExport({header:e.exportOpts.tHeader,data:a,filename:e.exportOpts.filename||e.filenameDefault,autoWidth:e.exportOpts.cellAutoWidth,type:e.exportOpts.type}),e.exportOpts.exporting=!1})},500)},handleExportAll:function(){var t=this;this.exportOpts.exporting=!0,p.all().then(function(e){t.handleExport(e)})}}},u=c,x=(l("5ba6"),l("2877")),d=Object(x["a"])(u,a,o,!1,null,"221066bb",null);e["default"]=d.exports},5089:function(t,e,l){},"5ba6":function(t,e,l){"use strict";var a=l("5089"),o=l.n(a);o.a}}]);
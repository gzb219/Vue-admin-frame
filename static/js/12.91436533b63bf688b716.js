(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"8cwY":function(t,e,l){},GdO6:function(t,e,o){"use strict";o.r(e);var l=o("JrP0"),a=o("Ueoi"),n={name:"Export",data:function(){return{filenameDefault:"xlsx-"+a.a.format(new Date,"yyyy.MM.dd hh:mm"),exportOpts:{filename:"",cellAutoWidth:!1,type:"xlsx",exporting:!1},list:null,pages:{page:1,size:10,total:0}}},computed:{tableEmptyHint:function(){var t=this.list;return t?t.length<1?"Sorry! This category have nothing data.":"":"Loading..."}},methods:{handlePageChange:function(t){this.pages.page=t,this.getContacts()},handleSizeChange:function(t){this.pages.size=t,this.getContacts()},getContacts:function(){var t,e=this;(t=this.pages,l.a.post("/contacts/list",t).then(function(t){return t.data})).then(function(t){e.pages=t.pages,e.list=t.list})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},handleExport:function(){var e=this;this.exportOpts.exporting=!0;var l=["NAME","ID CARD","CITY","ZIP","TEL","MOBILE","FAX","EMAIL","QQ","COMPANY"],a=this.formatJson(["name","card","city","postcode","tel","mobile","fax","email","qq","company"],this.list);Promise.all([o.e(0),o.e(1),o.e(8)]).then(o.bind(null,"O/mB")).then(function(t){t.handleExport({header:l,data:a,filename:e.exportOpts.filename||e.filenameDefault,autoWidth:e.exportOpts.cellAutoWidth,type:e.exportOpts.type}),e.exportOpts.exporting=!1})}},created:function(){this.getContacts()}},i=(o("ukN9"),o("KHd+")),p=Object(i.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"va-body-container"},[l("el-form",{attrs:{inline:"",size:"medium",model:e.exportOpts}},[l("el-form-item",{attrs:{label:"Filename"}},[l("el-input",{attrs:{placeholder:"default "+e.filenameDefault,"prefix-icon":"el-icon-document",clearable:""},model:{value:e.exportOpts.filename,callback:function(t){e.$set(e.exportOpts,"filename",t)},expression:"exportOpts.filename"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"File Type"}},[l("el-select",{staticStyle:{width:"100px"},attrs:{value:""},model:{value:e.exportOpts.type,callback:function(t){e.$set(e.exportOpts,"type",t)},expression:"exportOpts.type"}},[l("el-option",{attrs:{label:"xlsx",value:"xlsx"}}),e._v(" "),l("el-option",{attrs:{label:"cvx",value:"cvx"}}),e._v(" "),l("el-option",{attrs:{label:"txt",value:"txt"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"Cell Auto-Width"}},[l("el-switch",{model:{value:e.exportOpts.cellAutoWidth,callback:function(t){e.$set(e.exportOpts,"cellAutoWidth",t)},expression:"exportOpts.cellAutoWidth"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",loading:e.exportOpts.exporting},on:{click:e.handleExport}},[e._v("Export Excel")])],1)],1),e._v(" "),l("el-table",{attrs:{data:e.list,"tooltip-effect":"light",height:"528px","empty-text":e.tableEmptyHint}},[l("el-table-column",{attrs:{prop:"name",label:"name",width:"120","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"card",label:"ID Card","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"city",label:"city",width:"70","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"postcode",label:"zip",width:"70"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tel",label:"tel",width:"110"}}),e._v(" "),l("el-table-column",{attrs:{prop:"mobile",label:"mobile",width:"105"}}),e._v(" "),l("el-table-column",{attrs:{prop:"fax",label:"fax",width:"110"}}),e._v(" "),l("el-table-column",{attrs:{prop:"email",label:"email","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{prop:"qq",label:"QQ",width:"110"}}),e._v(" "),l("el-table-column",{attrs:{prop:"company",label:"company","show-overflow-tooltip":""}})],1),e._v(" "),e.list&&0<e.list.length?l("el-pagination",{staticClass:"excel-pagination",attrs:{layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,30,50],"current-page":e.pages.page,"page-size":e.pages.size,total:e.pages.total},on:{"size-change":e.handleSizeChange,"current-change":e.handlePageChange}}):e._e()],1)},[],!1,null,"5d9c72f6",null);p.options.__file="Export.vue";e.default=p.exports},ukN9:function(t,e,l){"use strict";var a=l("8cwY");l.n(a).a}}]);
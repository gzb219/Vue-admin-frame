(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76e7c2bc"],{5074:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"va-body-container"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.user.avatar,alt:""}})]),e._v(" "),s("div",{staticClass:"attrs"},[s("div",{staticClass:"username"},[e._v("\n        "+e._s(e.user.username)+"\n        "),s("el-tooltip",{attrs:{content:e.$t("header.switchUser")}},[s("va-icon",{staticClass:"handle-user-change",attrs:{icon:"action-refresh"},nativeOn:{click:function(t){e.userPickerVisible=!0}}})],1)],1),e._v(" "),s("div",{staticClass:"text-muted"},[e._v("\n        "+e._s(e.$t("permissions.yours",{roles:e.roles}))+"\n      ")])])]),e._v(" "),s("user-picker",{attrs:{visible:e.userPickerVisible},on:{"update:visible":function(t){e.userPickerVisible=t},"on-change":e.onChooseUser}}),e._v(" "),s("br"),e._v(" "),s("h2",{domProps:{innerHTML:e._s(e.$t("permissions.title",{role:e.allowRoles}))}})],1)},n=[],i=(s("a481"),s("96cf"),s("3b8d")),a=s("75fc"),c=s("2af9"),o={name:"Admin",components:{UserPicker:c["k"]},data:function(){return{userPickerVisible:!1}},computed:{user:function(){return this.$store.state.user},roles:function(){var e=this,t=Object(a["a"])(this.user.roles);return t.map(function(t){return e.$t("roles.".concat(t))}).join("、")},allowRoles:function(){var e=this,t=Object(a["a"])(this.$route.meta.roles);return t.map(function(t){return e.$t("roles.".concat(t))}).join(" & ")}},methods:{onChooseUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("user_switch",t.token);case 2:this.userPickerVisible=!1,this.$nextTick(function(){s.$router.replace({path:"/redirect"+s.$route.fullPath})});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},u=o,l=(s("b28a"),s("2877")),h=Object(l["a"])(u,r,n,!1,null,"23bec8ec",null);t["default"]=h.exports},6769:function(e,t,s){},b28a:function(e,t,s){"use strict";var r=s("6769"),n=s.n(r);n.a}}]);
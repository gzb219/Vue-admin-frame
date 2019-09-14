(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e78db04e"],{4657:function(t,a,e){"use strict";e("ac6a");var i=e("1487"),s=e.n(i),n=(e("2c43"),{bind:function(t){var a=t.querySelectorAll("pre code");a.forEach(function(t){s.a.highlightBlock(t)})}}),r=n;e.d(a,"a",function(){return r})},"53cd":function(t,a,e){},d45f:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"va-body-container"},[e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[e("code",{staticClass:"html",domProps:{innerHTML:t._s(t.$t("countTo.intro"))}})]),t._v(" "),e("div",{staticClass:"text-center text-primary"},[e("i-count-to",{ref:"countToViewer",staticClass:"va-count-up",attrs:{"start-val":+t.params.start,"end-val":+t.params.end,duration:t.params.duration,decimals:t.params.decimals,separator:t.params.separator,prefix:t.params.prefix,suffix:t.params.suffix,autoplay:!0}})],1),t._v(" "),e("hr"),t._v(" "),e("dl",{staticClass:"dl-horizontal",staticStyle:{"line-height":"32px"}},[e("dt",[t._v(t._s(t.$t("countTo.params")))]),t._v(" "),e("dd",[e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:t.params.start,callback:function(a){t.$set(t.params,"start",a)},expression:"params.start"}}),t._v(" Start\n      ")],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"text",size:"small"},on:{click:t.handleSwap}},[e("i",{staticClass:"el-icon-sort",staticStyle:{transform:"rotate(90deg)"}})])],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:t.params.end,callback:function(a){t.$set(t.params,"end",a)},expression:"params.end"}}),t._v(" End\n      ")],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:t.params.decimals,callback:function(a){t.$set(t.params,"decimals",a)},expression:"params.decimals"}}),t._v(" Decimals\n      ")],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{type:"number",size:"small"},model:{value:t.params.duration,callback:function(a){t.$set(t.params,"duration",a)},expression:"params.duration"}}),t._v(" Duration\n      ")],1)]),t._v(" "),e("dd",[e("span",{staticClass:"form-params"},[e("el-checkbox",{model:{value:t.params.easing,callback:function(a){t.$set(t.params,"easing",a)},expression:"params.easing"}},[t._v("Use easing")])],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{size:"small"},model:{value:t.params.separator,callback:function(a){t.$set(t.params,"separator",a)},expression:"params.separator"}}),t._v(" Separator\n      ")],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{size:"small"},model:{value:t.params.prefix,callback:function(a){t.$set(t.params,"prefix",a)},expression:"params.prefix"}}),t._v(" Prefix\n      ")],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-input",{staticStyle:{width:"70px"},attrs:{size:"small"},model:{value:t.params.suffix,callback:function(a){t.$set(t.params,"suffix",a)},expression:"params.suffix"}}),t._v(" Suffix\n      ")],1)])]),t._v(" "),e("hr"),t._v(" "),e("dl",{staticClass:"dl-horizontal",staticStyle:{"line-height":"32px"}},[e("dt",[t._v(t._s(t.$t("countTo.methods")))]),t._v(" "),e("dd",[e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.handleStart}},[t._v("\n          "+t._s(t.$t("countTo.start"))+"\n        ")])],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.handlePauseResume}},[t._v("\n          "+t._s(t.$t("countTo.pauseResume"))+"\n        ")])],1),t._v(" "),e("span",{staticClass:"form-params"},[e("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.handleReset}},[t._v("\n          "+t._s(t.$t("countTo.reset"))+"\n        ")])],1)])])])},s=[],n=(e("8e6e"),e("ac6a"),e("456d"),e("bd86")),r=e("4657"),o=e("ec1b"),l=e.n(o);function u(t,a){var e=Object.keys(t);return Object.getOwnPropertySymbols&&e.push.apply(e,Object.getOwnPropertySymbols(t)),a&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?u(e,!0).forEach(function(a){Object(n["a"])(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(e).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var p={name:"CountTo",metaInfo:{title:"CountTo"},directives:{Highlight:r["a"]},components:{ICountTo:l.a},data:function(){return{params:{start:0,end:12580,duration:2e3,decimals:2,decimal:".",separator:",",prefix:"$",suffix:"",easing:!0},paramsOrigin:{}}},created:function(){this.paramsOrigin=c({},this.params)},methods:{handleSwap:function(){var t=this.params.end;this.params.end=this.params.start,this.params.start=t},handleStart:function(){this.$refs["countToViewer"].reset(),this.$refs["countToViewer"].start(function(){console.log("Clicked start button")})},handlePauseResume:function(){this.$refs["countToViewer"].pauseResume()},handleReset:function(){this.$refs["countToViewer"].reset()}}},m=p,d=(e("df34"),e("2877")),f=Object(d["a"])(m,i,s,!1,null,"b30b1bd0",null);a["default"]=f.exports},df34:function(t,a,e){"use strict";var i=e("53cd"),s=e.n(i);s.a},ec1b:function(t,a,e){!function(a,e){t.exports=e()}(0,function(){return function(t){function a(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var e={};return a.m=t,a.c=e,a.i=function(t){return t},a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,e){var i=e(4)(e(1),e(5),null,null);t.exports=i.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,e,i){return e*(1-Math.pow(2,-10*t/i))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var a=t.split("."),e=a[0],i=a.length>1?this.decimal+a[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;s.test(e);)e=e.replace(s,"$1"+this.separator+"$2");return this.prefix+e+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(0),s=function(t){return t&&t.__esModule?t:{default:t}}(i);a.default=s.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",s.default)},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=0,s="webkit moz ms o".split(" "),n=void 0,r=void 0;if("undefined"==typeof window)a.requestAnimationFrame=n=function(){},a.cancelAnimationFrame=r=function(){};else{a.requestAnimationFrame=n=window.requestAnimationFrame,a.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,l=0;l<s.length&&(!n||!r);l++)o=s[l],a.requestAnimationFrame=n=n||window[o+"RequestAnimationFrame"],a.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];n&&r||(a.requestAnimationFrame=n=function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-i)),s=window.setTimeout(function(){t(a+e)},e);return i=a+e,s},a.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=n,a.cancelAnimationFrame=r},function(t,a){t.exports=function(t,a,e,i){var s,n=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,n=t.default);var o="function"==typeof n?n.options:n;if(a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),e&&(o._scopeId=e),i){var l=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var a=i[t];l[t]=function(){return a}}),o.computed=l}return{esModule:s,exports:n,options:o}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])})}}]);
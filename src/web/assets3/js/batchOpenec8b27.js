(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(e,t,n){"use strict";function o(e){return e||""}function a(e){return e||!1}function r(e){for(var t in e)""===e[t]&&delete e[t];return e}function i(e){for(var t=String.fromCharCode(e.charCodeAt(0)+e.length),n=1;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)+e.charCodeAt(n-1));return escape(t)}function s(e){e=unescape(e);for(var t=String.fromCharCode(e.charCodeAt(0)-e.length),n=1;n<e.length;n++)t+=String.fromCharCode(e.charCodeAt(n)-t.charCodeAt(n-1));return t}function c(e){if(!t)var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function l(e){if(!t)var t=new Date(e);return t.getFullYear()+""+(t.getMonth()+1)}function u(e){var t=this,n=!1;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!=e.headers["content-type"]&&"application/vnd.ms-excel"!=e.headers["content-type"]||(n=!0),n){var o=new Blob([e.data],{type:"application/vnd.ms-excel"}),a=e.headers["content-disposition"].split(";")[1].split("=")[1];if("download"in document.createElement("a")){var r=document.createElement("a");r.style.display="none",r.href=window.URL.createObjectURL(o),r.download=decodeURIComponent(a),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href),document.body.removeChild(r)}else navigator.msSaveBlob(o,a)}else{var i=new FileReader;i.onload=function(e){return t.$message.error(JSON.parse(e.target.result).msg)},i.readAsText(e.data)}}function d(e,t,n){var o;return function(){for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var s=this;if(o&&clearTimeout(o),n){var c=!o;o=setTimeout((function(){o=null}),t),c&&e.apply(s,r)}else o=setTimeout((function(){e.apply(s,r)}),t)}}n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"h",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"g",(function(){return d})),n(27)},133:function(e,t,n){"use strict";n(55)},134:function(e,t,n){(t=n(3)(!1)).push([e.i,".batchOpen_page[data-v-6727385c]{padding:0 20px}.box[data-v-6727385c]{border:1px solid #efefef;border-radius:5px;padding:30px}.box .batch_t[data-v-6727385c]{display:flex;align-items:center}.box .batch_t .btnbox[data-v-6727385c]{align-self:flex-end;margin-left:12px}.box .batch_t .btnbox .add[data-v-6727385c]{color:#409EFF;cursor:pointer}.box .batch_t textarea[data-v-6727385c]{width:300px;height:160px !important;overflow-y:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.box .batch_t[data-v-6727385c] ::-webkit-scrollbar{width:5px;height:5px;background:rgba(144,147,153,0.3);cursor:pointer}.box .tip[data-v-6727385c]{color:#acacac;margin:20px 0}.box .input[data-v-6727385c]{display:flex;margin-bottom:5px}.box .input .item_input[data-v-6727385c]{display:flex;align-items:center;margin-right:12px}\n",""]),e.exports=t},209:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"batchOpen_page fillcontain"},[n("Toptitle",{attrs:{msg:e.msg}}),e._v(" "),n("div",{staticClass:"box"},[n("div",{staticClass:"batch_t"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm.content,expression:"ruleForm.content"}],staticClass:"el-textarea__inner",attrs:{name:"",id:"",autocomplete:"off",placeholder:"",cols:"30",rows:"10"},domProps:{value:e.ruleForm.content},on:{input:function(t){t.target.composing||e.$set(e.ruleForm,"content",t.target.value)}}}),e._v(" "),n("div",{staticClass:"btnbox"},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{limit:e.limit,"auto-upload":!1,accept:".txt","before-upload":e.beforeUpload,"on-exceed":e.handleExceed,action:"","on-change":e.handleChange,"file-list":e.fileList}},[n("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},on:{click:e.cancel},slot:"trigger"},[e._v("选取文件")]),e._v(" "),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("上传文件")])],1)],1)]),e._v(" "),n("div",{staticClass:"tip"},[e._v("*可批量添加，每行一个，也可以导入txt文件，文件中每行为一个用户id。")]),e._v(" "),n("div",{staticClass:"input"},[n("div",{staticClass:"item_input"},[n("span",[e._v("选择商品：")]),e._v(" "),n("el-select",{staticClass:"input",attrs:{placeholder:"请选择商品"},model:{value:e.ruleForm.goods,callback:function(t){e.$set(e.ruleForm,"goods",t)},expression:"ruleForm.goods"}},e._l(e.goodsOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),n("div",{staticClass:"item_input"},[n("span",[e._v("用户类型：")]),e._v(" "),n("el-select",{staticClass:"input",attrs:{placeholder:"用户类型"},model:{value:e.ruleForm.userType,callback:function(t){e.$set(e.ruleForm,"userType",t)},expression:"ruleForm.userType"}},e._l(e.userTypeOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),e._v(" "),n("div",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.submit}},[e._v("提交")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.log}},[e._v("批量操作记录")])],1)])],1)};o._withStripped=!0;var a=n(21),r=n(8),i=n(0),s=n(5),c={data:function(){return{msg:"1",limit:1,ruleForm:{goods:"",userType:"",content:""},disabled:!0,isPhone:!0,goodsOptions:[],userTypeOptions:[{value:1,label:"全价用户"},{value:2,label:"监管用户"},{value:3,label:"内部免费用户"},{value:4,label:"试用用户"}],fileList:[]}},methods:{init:function(){var e=this;Object(r.e)({limit:0,offset:0}).then((function(t){t.data.flag?t.data.data.rows.forEach((function(t,n){var o={value:t.code,label:t.name};e.goodsOptions.push(o)})):e.$message({message:t.data.msg,type:"error"})})).catch((function(t){e.$message({message:t,type:"error"})}))},submit:Object(i.g)((function(){var e=this,t=this.ruleForm.content.replace(/\n|\r\n/g,",");t=t.split(",");var n={activityCode:"",goodCode:this.ruleForm.goods,userType:this.ruleForm.userType,users:t};Object(a.a)(Object(i.h)(n)).then((function(t){t.data.flag?(e.$message({message:"批量开通成功",type:"success"}),e.$router.push("/batchRecord/batchOpenList")):e.$message({message:t.data.msg?t.data.msg:"检查手机号码是否重复、是否满足11位要求",type:"error"})})).catch((function(t){e.$message({message:t,type:"error"})}))}),500,!0),log:function(){this.$router.go(-1)},beforeUpload:function(e){return this.fileList=[e],this.read(e),!1},read:function(e){var t=this,n=new FileReader;n.onload=function(e){var o=n.reading({encode:"GBK"});t.ruleForm.content="",t.ruleForm.content=o,o=(o=o.replace(/\n|\r\n/g,",")).split(","),0==new RegExp(/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/).test(o[0])?(t.isPhone=!1,t.$message({message:"文件格式有误，请编辑后重新上传",type:"error"})):t.isPhone=!0;var a=t.textData;t.textData=a+"\n"+o},n.readAsBinaryString(e)},submitUpload:function(){this.$refs.upload.uploadFiles.length>0?this.$refs.upload.submit():this.$message({message:"暂无文件可上传",type:"error"})},cancel:function(){this.fileList=[]},handleChange:function(e,t){this.fileList=t.slice(-3)},handleExceed:function(e,t){}},created:function(){this.init()},beforeCreate:function(){FileReader.prototype.reading=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:pms).encode,t=new Uint8Array(this.result);return new TextDecoder(e||"UTF-8").decode(t)},FileReader.prototype.readAsBinaryString=function(e){var t=this;this.onload||(this.onload=function(e){t.reading()}),this.readAsArrayBuffer(e)}},computed:{judgeSubmit:function(){var e=this.ruleForm;return{goods:e.goods,userType:e.userType,content:e.content,phone:this.isPhone}}},watch:{judgeSubmit:{handler:function(e,t){var n=!0;for(var o in e)""==e[o]&&(n=!1);n&&this.isPhone?this.disabled=!1:this.disabled=!0},deep:!0}},components:{Toptitle:s.a}},l=(n(133),n(1)),u=Object(l.a)(c,o,[],!1,null,"6727385c",null);u.options.__file="src/page/batchOpen/batchOpen.vue",t.default=u.exports},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var o=n(2);function a(e){return Object(o.a)({url:"/api/batch/query/records",method:"post",data:e})}function r(e){return Object(o.a)({url:"/api/batch/query/record/users",method:"post",data:e})}function i(e){return Object(o.a)({url:"/api/batch/open",method:"post",data:e})}},27:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},31:function(e,t,n){var o=n(84);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n(4).default)("5207a714",o,!1,{})},5:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header_container"},["1"==e.msg?n("i",{staticClass:"el-icon-circle-plus-outline title"}):e._e(),e._v(" "),"2"==e.msg?n("i",{staticClass:"el-icon-edit-outline title"}):e._e(),e._v(" "),"3"==e.msg?n("i",{staticClass:"el-icon-user title"}):e._e(),e._v(" "),"4"==e.msg?n("i",{staticClass:"el-icon-setting title"}):e._e(),e._v(" "),"5"==e.msg?n("i",{staticClass:"el-icon-search title"}):e._e(),e._v(" "),"6"==e.msg?n("i",{staticClass:"el-icon-document-add title"}):e._e(),e._v(" "),e._l(e.$route.meta.title,(function(t,o){return n("span",{key:o,staticClass:"title"},[e._v(e._s(t))])}))],2)};o._withStripped=!0;var a=(n(83),n(1)),r=Object(a.a)({data:function(){return{showicon:!0}},props:["msg"],methods:{init:function(){}},created:function(){}},o,[],!1,null,"4af4cfe4",null);r.options.__file="src/component/toptitle.vue",t.a=r.exports},55:function(e,t,n){var o=n(134);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals),(0,n(4).default)("1aa3f627",o,!1,{})},8:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"h",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d}));var o=n(2);function a(e){return Object(o.a)({url:"/api/goods/get/goods",method:"post",data:e})}function r(e){return Object(o.a)({url:"/api/goods/add",method:"post",data:e})}function i(e){return Object(o.a)({url:"/api/goods/update",method:"post",data:e})}function s(e){return Object(o.a)({url:"/api/goods/delete",method:"get",params:e})}function c(e){return Object(o.a)({url:"/api/goods/upDown",method:"post",params:e})}function l(e){return Object(o.a)({url:"/api/goods/get/goodsLogs",method:"post",data:e})}function u(e){return Object(o.a)({url:"/api/goods/checkGoodsName",method:"get",params:e})}function d(e){return Object(o.a)({url:"/api/goods/getGoodsById",method:"get",params:e})}},83:function(e,t,n){"use strict";n(31)},84:function(e,t,n){(t=n(3)(!1)).push([e.i,".header_container[data-v-4af4cfe4]{width:100%;background-color:#fff;height:60px;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box}.header_container img[data-v-4af4cfe4]{height:60px;width:auto}.header_container .title[data-v-4af4cfe4]{color:#acacac;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header_container span.title[data-v-4af4cfe4]{margin-left:16px}\n",""]),e.exports=t}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{0:function(e,t,a){"use strict";function r(e){return e||""}function l(e){return e||!1}function o(e){for(var t in e)""===e[t]&&delete e[t];return e}function n(e){for(var t=String.fromCharCode(e.charCodeAt(0)+e.length),a=1;a<e.length;a++)t+=String.fromCharCode(e.charCodeAt(a)+e.charCodeAt(a-1));return escape(t)}function s(e){e=unescape(e);for(var t=String.fromCharCode(e.charCodeAt(0)-e.length),a=1;a<e.length;a++)t+=String.fromCharCode(e.charCodeAt(a)-t.charCodeAt(a-1));return t}function i(e){if(!t)var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function c(e){if(!t)var t=new Date(e);return t.getFullYear()+""+(t.getMonth()+1)}function u(e){var t=this,a=!1;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!=e.headers["content-type"]&&"application/vnd.ms-excel"!=e.headers["content-type"]||(a=!0),a){var r=new Blob([e.data],{type:"application/vnd.ms-excel"}),l=e.headers["content-disposition"].split(";")[1].split("=")[1];if("download"in document.createElement("a")){var o=document.createElement("a");o.style.display="none",o.href=window.URL.createObjectURL(r),o.download=decodeURIComponent(l),document.body.appendChild(o),o.click(),URL.revokeObjectURL(o.href),document.body.removeChild(o)}else navigator.msSaveBlob(r,l)}else{var n=new FileReader;n.onload=function(e){return t.$message.error(JSON.parse(e.target.result).msg)},n.readAsText(e.data)}}function p(e,t,a){var r;return function(){for(var l=arguments.length,o=new Array(l),n=0;n<l;n++)o[n]=arguments[n];var s=this;if(r&&clearTimeout(r),a){var i=!r;r=setTimeout((function(){r=null}),t),i&&e.apply(s,o)}else r=setTimeout((function(){e.apply(s,o)}),t)}}a.d(t,"f",(function(){return r})),a.d(t,"d",(function(){return l})),a.d(t,"h",(function(){return o})),a.d(t,"e",(function(){return n})),a.d(t,"i",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"g",(function(){return p})),a(27)},149:function(e,t){},150:function(e,t){},152:function(e,t,a){"use strict";a(63)},153:function(e,t,a){(t=a(3)(!1)).push([e.i,".feedbacklist_page .el-date-editor--daterange.el-input__inner{width:250px !important}\n",""]),e.exports=t},154:function(e,t,a){"use strict";a(64)},155:function(e,t,a){(t=a(3)(!1)).push([e.i,".feedbacklist_page[data-v-60b368a6]{padding:0 20px}.topmenu[data-v-60b368a6]{display:flex;justify-content:space-between;align-items:center;height:60px;padding:0 20px;margin:20px 0px 0px;border:1px solid #efefef}.topmenu .topmenu_r[data-v-60b368a6]{cursor:pointer}.topmenu .title[data-v-60b368a6]{color:#95b3ce;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.topmenu span.title[data-v-60b368a6]{margin-left:16px}.table[data-v-60b368a6]{font-size:9px;overflow-x:auto}.table img[data-v-60b368a6]{display:block;height:80px;width:auto;margin-top:3px}.table .imgbox[data-v-60b368a6]{display:flex;flex-direction:column;justify-content:center}.table thead[data-v-60b368a6]{border-bottom:1px solid #EBEEF5}.table[data-v-60b368a6] ::-webkit-scrollbar{width:7px;height:7px}.table .pointer[data-v-60b368a6]{cursor:pointer}.table .btn[data-v-60b368a6]{display:inline-block;margin-left:20px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.table .auth.btn[data-v-60b368a6]{margin-left:0}.Pagination[data-v-60b368a6]{display:flex;justify-content:space-between;margin-top:8px;margin-bottom:20px}.dialogMain[data-v-60b368a6]{height:100%}.dialogMain img[data-v-60b368a6]{height:100%;width:auto}\n",""]),e.exports=t},198:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"feedbacklist_page fillcontain"},[e._m(0),e._v(" "),a("el-row",[a("el-card",[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,inline:!0,rules:e.rules,"label-width":"auto"}},[a("el-row",[a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入手机号"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"处理状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择处理状态"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},[a("el-option",{attrs:{label:"全部",value:0}}),e._v(" "),a("el-option",{attrs:{label:"待处理",value:1}}),e._v(" "),a("el-option",{attrs:{label:"已处理",value:2}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"反馈类型",prop:"feedbackType"}},[a("el-select",{attrs:{filterable:"","allow-create":"",clearable:"",placeholder:"请选择反馈类型"},model:{value:e.ruleForm.feedbackType,callback:function(t){e.$set(e.ruleForm,"feedbackType",t)},expression:"ruleForm.feedbackType"}},[a("el-option",{attrs:{label:"功能建议",value:"功能建议"}}),e._v(" "),a("el-option",{attrs:{label:"功能异常",value:"功能异常"}}),e._v(" "),a("el-option",{attrs:{label:"问题求助",value:"问题求助"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"APP版本",prop:"appVersion"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入APP版本"},model:{value:e.ruleForm.appVersion,callback:function(t){e.$set(e.ruleForm,"appVersion",t)},expression:"ruleForm.appVersion"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"设备号",prop:"imei"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入设备号"},model:{value:e.ruleForm.imei,callback:function(t){e.$set(e.ruleForm,"imei",t)},expression:"ruleForm.imei"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"反馈编号",prop:"id"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入反馈编号"},model:{value:e.ruleForm.id,callback:function(t){e.$set(e.ruleForm,"id",t)},expression:"ruleForm.id"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"排序列",prop:"bootstrapSort"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择排序列"},model:{value:e.ruleForm.bootstrapSort,callback:function(t){e.$set(e.ruleForm,"bootstrapSort",t)},expression:"ruleForm.bootstrapSort"}},[a("el-option",{attrs:{label:"按手机号排序",value:"phone"}}),e._v(" "),a("el-option",{attrs:{label:"按反馈时间排序",value:"createTime"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"排序方式",prop:"bootstrapOrder"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择排序方式"},model:{value:e.ruleForm.bootstrapOrder,callback:function(t){e.$set(e.ruleForm,"bootstrapOrder",t)},expression:"ruleForm.bootstrapOrder"}},[a("el-option",{attrs:{label:"降序",value:"DESC"}}),e._v(" "),a("el-option",{attrs:{label:"升序",value:"ASC"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"操作系统版本",prop:"osv"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入操作系统版本"},model:{value:e.ruleForm.osv,callback:function(t){e.$set(e.ruleForm,"osv",t)},expression:"ruleForm.osv"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:8,md:12,sm:24}},[a("el-form-item",{attrs:{label:"反馈内容",prop:"content"}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入反馈内容"},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:14,md:18,sm:24}},[a("el-form-item",{attrs:{label:"反馈时间",prop:"timeline"}},[a("el-date-picker",{staticClass:"timeline",attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.ruleForm.timeline,callback:function(t){e.$set(e.ruleForm,"timeline",t)},expression:"ruleForm.timeline"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"success",loading:e.exportloading},on:{click:function(t){return e.submitForm("ruleForm","export")}}},[e._v("导出")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",attrs:{"element-loading-text":"拼命加载中",data:e.tableData,border:"",id:"table"}},[a("el-table-column",{attrs:{prop:"userId",label:"用户ID",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号","min-width":"100",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"appVersion",label:"APP版本",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"osv",label:"操作系统版本",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"imei",label:"设备号",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"反馈编号",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"feedbackType",label:"反馈类型",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"反馈状态",resizable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","min-width":"140",resizable:"",label:"反馈时间"}}),e._v(" "),a("el-table-column",{attrs:{resizable:"",label:"反馈图片","min-width":"140"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.photoList.length>0?e._l(t.row.photoList,(function(t){return a("div",{key:t.id,staticClass:"imgbox"},[a("el-image",{attrs:{size:"100",src:t.userFeedbackImageUrl,"preview-src-list":e.srcList}}),e._v(" "),a("span",[e._v(e._s(t.screenshotTime))])],1)})):void 0}}],null,!0)}),e._v(" "),a("el-table-column",{attrs:{resizable:"",label:"反馈内容","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:t.row.content.length>60?"pointer":"",on:{click:function(a){return e.showAll(t.row.content,a,t.row.judge,t.$index,"judge")}}},[e._v(e._s(t.row.content.length>60?t.row.content.substr(0,60)+"...":t.row.content))])]}}])}),e._v(" "),a("el-table-column",{attrs:{resizable:"",label:"回复内容","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:t.row.answer.length>60?"pointer":"",on:{click:function(a){return e.showAll(t.row.answer,a,t.row.showAnswer,t.$index,"showAnswer")}}},[e._v(e._s(t.row.answer.length>0?t.row.answer.length>60?t.row.answer.substr(0,60)+"...":t.row.answer:"暂无回复"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"handle",label:"操作","min-width":"110",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return["未处理"==t.row.status?a("div",{staticClass:"btn",on:{click:function(a){return e.toreplay(t.$index,t.row)}}},[a("i",{staticClass:"el-icon-edit"}),e._v(" "),a("span",[e._v("回复")])]):e._e()]}}])})],1)],1)],1),e._v(" "),a("div",{staticClass:"Pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,30,50,100,200],"page-size":e.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"回复",visible:e.centerDialogVisible,width:"50%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("el-form",{ref:"answerForm",staticClass:"demo-ruleForm",attrs:{model:e.answerForm,rules:e.answerrules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"回复内容",prop:"answer"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.answerForm.answer,callback:function(t){e.$set(e.answerForm,"answer",t)},expression:"answerForm.answer"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitAnswer("answerForm")}}},[e._v("确认回复")])],1)],1)],1)],1)};r._withStripped=!0;var l=a(7),o=a.n(l),n=a(2),s=a(0);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a(22),a(30),a(18),a(151);var u={data:function(){return{msg:"用户反馈",loading:!0,centerDialogVisible:!1,limit:10,offset:1,srcList:[],currentPage:1,pagesize:10,count:10,tableData:[],ruleForm:{beginTime:"",endTime:"",timeline:"",phone:"",feedbackType:"",status:0,appVersion:"",bootstrapSort:"",bootstrapOrder:"",imei:"",content:"",answer:"",osv:""},rules:{},answerForm:{id:"",status:"",answer:""},answerrules:{answer:[{required:!0,message:"请输入回复内容",trigger:"blur"}]},exportloading:!1}},methods:{initdata:function(){var e=this.setParams();this.getfeedbackList(e)},setParams:function(){var e=c({},this.ruleForm);return e.limit=this.limit,e.offset=this.offset,this.ruleForm.timeline&&(e.beginTime=this.ruleForm.timeline[0],e.endTime=this.ruleForm.timeline[1]),delete e.timeline,e},getfeedbackList:function(e){var t,a=this;(t=Object(s.h)(e),Object(n.a)({url:"/uf/query/user/feedback",method:"post",data:t})).then((function(e){0==e.data.code?(a.loading=!1,a.tableData=[],a.srcList=[],e.data.data.rows.forEach((function(e,t){var r={appVersion:e.appVersion,class:e.class,content:e.content,answer:e.answer?e.answer:"",createTime:e.createTime,feedbackType:e.feedbackType,id:e.id,imei:e.imei,phone:e.phone,photoList:e.photoList,status:1==e.status?"未处理":"已处理",updatedTime:e.updatedTime,userId:e.userId,osv:e.osv,judge:!0,showAnswer:!0};e.photoList.length>0&&e.photoList.forEach((function(e){a.srcList.push(e.userFeedbackImageUrl)})),a.tableData.push(r)})),a.count=e.data.data.total):(a.loading=!1,a.$message({message:e.data.msg?e.data.msg:"获取数据失败",type:"error"}))})).catch((function(e){a.loading=!1,a.$message({message:e,type:"error"})}))},exportExcel:function(e){var t,a=this;this.exportloading=!0,(t=Object(s.h)(e),Object(n.a)({url:"/api/user/feedback/export",method:"post",responseType:"blob",timeout:3e4,data:t})).then((function(e){a.exportloading=!1,e?(Object(s.b)(e),a.$message({message:"导出成功",type:"success"})):a.$message({message:"导出失败",type:"error"})})).catch((function(e){a.exportloading=!1,a.$message({message:"导出失败",type:"error"})}))},submitForm:function(e,t){var a=this;this.$refs[e].validate((function(e){if(!e)return!1;switch(t){case"export":a.exportExcel(a.setParams());break;default:a.getfeedbackList(a.setParams())}}))},toreplay:function(e,t){this.answerForm={id:t.id,status:2,answer:""},this.centerDialogVisible=!0},submitAnswer:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;var a,r=c({},t.answerForm);(a=Object(s.h)(r),Object(n.a)({url:"/uf/update/status",method:"post",data:a})).then((function(e){0==e.data.code?(t.$message({message:"回复成功",type:"success"}),t.getfeedbackList(t.setParams())):t.$message({message:e.data.msg?e.data.msg:"回复失败",type:"error"}),t.centerDialogVisible=!1})).catch((function(e){t.$message({message:e,type:"error"}),t.centerDialogVisible=!1}))}))},showAll:function(e,t,a,r,l){e.length>60&&(a?(t.target.innerHTML=e,this.tableData[r][l]=!1):(t.target.innerHTML=e.substr(0,60)+"...",this.tableData[r][l]=!0))},handleSizeChange:function(e){this.loading=!0,this.limit=e;var t=this.setParams();this.getfeedbackList(t)},handleCurrentChange:function(e){this.loading=!0,this.currentPage=e,this.offset=e;var t=this.setParams();this.getfeedbackList(t)}},created:function(){this.initdata()}},p=(a(152),a(154),a(1)),d=Object(p.a)(u,r,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"topmenu"},[t("div",{staticClass:"topmenu_l"},[t("i",{staticClass:"el-icon-document title"}),this._v(" "),t("span",{staticClass:"title"},[this._v("用户意见反馈")])])])}],!1,null,"60b368a6",null);d.options.__file="src/page/feedback/feedbackList.vue",t.default=d.exports},62:function(e,t){},63:function(e,t,a){var r=a(153);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,a(4).default)("6ecc375a",r,!1,{})},64:function(e,t,a){var r=a(155);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,a(4).default)("48d0418e",r,!1,{})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{0:function(t,e,o){"use strict";function a(t){return t||""}function s(t){return t||!1}function n(t){for(var e in t)""===t[e]&&delete t[e];return t}function i(t){for(var e=String.fromCharCode(t.charCodeAt(0)+t.length),o=1;o<t.length;o++)e+=String.fromCharCode(t.charCodeAt(o)+t.charCodeAt(o-1));return escape(e)}function r(t){t=unescape(t);for(var e=String.fromCharCode(t.charCodeAt(0)-t.length),o=1;o<t.length;o++)e+=String.fromCharCode(t.charCodeAt(o)-e.charCodeAt(o-1));return e}function c(t){if(!e)var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}function d(t){if(!e)var e=new Date(t);return e.getFullYear()+""+(e.getMonth()+1)}function u(t){var e=this,o=!1;if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"!=t.headers["content-type"]&&"application/vnd.ms-excel"!=t.headers["content-type"]||(o=!0),o){var a=new Blob([t.data],{type:"application/vnd.ms-excel"}),s=t.headers["content-disposition"].split(";")[1].split("=")[1];if("download"in document.createElement("a")){var n=document.createElement("a");n.style.display="none",n.href=window.URL.createObjectURL(a),n.download=decodeURIComponent(s),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n)}else navigator.msSaveBlob(a,s)}else{var i=new FileReader;i.onload=function(t){return e.$message.error(JSON.parse(t.target.result).msg)},i.readAsText(t.data)}}function l(t,e,o){var a;return function(){for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];var r=this;if(a&&clearTimeout(a),o){var c=!a;a=setTimeout((function(){a=null}),e),c&&t.apply(r,n)}else a=setTimeout((function(){t.apply(r,n)}),e)}}o.d(e,"f",(function(){return a})),o.d(e,"d",(function(){return s})),o.d(e,"h",(function(){return n})),o.d(e,"e",(function(){return i})),o.d(e,"i",(function(){return r})),o.d(e,"a",(function(){return c})),o.d(e,"c",(function(){return d})),o.d(e,"b",(function(){return u})),o.d(e,"g",(function(){return l})),o(27)},10:function(t,e,o){"use strict";o.d(e,"h",(function(){return s})),o.d(e,"g",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"i",(function(){return r})),o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return d})),o.d(e,"f",(function(){return u})),o.d(e,"d",(function(){return l})),o.d(e,"e",(function(){return p}));var a=o(2);function s(t){return Object(a.a)({url:"/api/order/query",method:"post",data:t})}function n(t){return Object(a.a)({url:"/api/act/get/acts",method:"post",data:t})}function i(t){return Object(a.a)({url:"/api/act/add",method:"post",data:t})}function r(t){return Object(a.a)({url:"/api/act/update",method:"post",data:t})}function c(t){return Object(a.a)({url:"/api/act/delete",method:"get",params:t})}function d(t){return Object(a.a)({url:"/api/act/upDown",method:"get",params:t})}function u(t){return Object(a.a)({url:"/api/act/getActById",method:"get",params:t})}function l(t){return Object(a.a)({url:"/api/act/checkActName",method:"post",params:t})}function p(t){return Object(a.a)({url:"/api/act/checkGoodsInAct",method:"post",data:t})}},125:function(t,e,o){"use strict";o(51)},126:function(t,e,o){(e=o(3)(!1)).push([t.i,".editActivity_page[data-v-58771c6d]{padding:20px 20px 0px}.box[data-v-58771c6d]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;border:1px solid #efefef;padding:0px 20px 20px}.box .tip[data-v-58771c6d]{color:#f00;font-size:12px;font-style:italic}.demo-ruleForm[data-v-58771c6d]{width:100%}.note[data-v-58771c6d]{width:240px}.time[data-v-58771c6d]{cursor:pointer}.btn[data-v-58771c6d]{display:flex;justify-content:flex-start}.actgoods[data-v-58771c6d]{display:flex;flex-direction:column;align-items:flex-start;margin-bottom:40px}.actgoods .actgoods_t[data-v-58771c6d]{cursor:pointer}.actgoods .actgoods_t .title[data-v-58771c6d]{font-size:20px;color:#85a7c7;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.actgoods .actgoods_t .titlezi[data-v-58771c6d]{color:#292929}.actgoods .actgoods_tip[data-v-58771c6d]{color:#f00;font-size:14px;padding:20px 0 20px 40px}.actgoods .actgoodsbox[data-v-58771c6d]{width:100%;overflow-x:scroll}.actgoods .actgoodsbox .actgoodsItem[data-v-58771c6d]{display:flex;justify-content:flex-start;padding:20px 0 10px 30px;border-bottom:1px solid #cbcaca;position:relative}.actgoods .actgoodsbox .actgoodsItem .remove[data-v-58771c6d]{display:flex;align-items:center;position:absolute;padding-top:20px;padding-bottom:10px;top:0;bottom:0;left:3px;margin:auto}.actgoods .actgoodsbox .actgoodsItem .remove i[data-v-58771c6d]{cursor:pointer;font-size:20px;color:#f00}.actgoods .actgoodsbox .actgoodsItem .actinput[data-v-58771c6d]{display:flex;align-items:center;margin-right:12px}.actgoods .actgoodsbox .actgoodsItem .actinput .label[data-v-58771c6d]{font-size:9px;margin-right:10px;white-space:nowrap}.actgoods .actgoodsbox .actgoodsItem .actinput .shopactname[data-v-58771c6d]{min-width:60px}.actgoods .actgoodsbox .actgoodsItem .actinput .actinput_minus[data-v-58771c6d]{min-width:143px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.actgoods .actgoodsbox .actgoodsItem .actinput .repertory[data-v-58771c6d]{font-size:9px;color:#f00;line-height:9px;white-space:nowrap}.actgoods .actgoodsbox .actgoodsItem .actinput .goodsprice[data-v-58771c6d]{font-size:9px;white-space:nowrap}.actgoods .actgoodsbox .actgoodsItem .actinput .actname[data-v-58771c6d]{min-width:260px}.actgoods .actgoodsbox .actgoodsItem .actinput .inputactname[data-v-58771c6d]{min-width:160px}.actgoods[data-v-58771c6d] ::-webkit-scrollbar{width:5px;height:5px}\n",""]),t.exports=e},214:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"editActivity_page fillcontain"},[o("div",{staticClass:"box"},[o("Toptitle",{attrs:{msg:t.msg}}),t._v(" "),o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,"label-position":t.labelPosition,rules:t.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"活动名称",prop:"actName"}},[o("el-input",{staticClass:"input",attrs:{placeholder:"请输入活动名称"},model:{value:t.ruleForm.actName,callback:function(e){t.$set(t.ruleForm,"actName",e)},expression:"ruleForm.actName"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"活动时间",prop:"activityTime"}},[o("el-date-picker",{staticClass:"timeline",attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.ruleForm.activityTime,callback:function(e){t.$set(t.ruleForm,"activityTime",e)},expression:"ruleForm.activityTime"}})],1),t._v(" "),o("div",{staticClass:"actgoods"},[o("div",{staticClass:"actgoods_t",on:{click:t.addactgoods}},[o("i",{staticClass:"el-icon-circle-plus-outline title"}),t._v(" "),o("span",{staticClass:"titlezi"},[t._v("活动商品添加")])]),t._v(" "),o("div",{staticClass:"actgoods_tip"},[t._v('\n                        注意：当数量填"-1"时代表活动商品数量不限制\n                    ')]),t._v(" "),o("div",{staticClass:"actgoodsbox"},t._l(t.actgoods,(function(e,a){return o("div",{key:a,staticClass:"actgoodsItem",on:{mouseover:function(e){return t.showremove(a)},mouseout:function(e){return t.hidremove(a)}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showremove,expression:"item.showremove"}],staticClass:"remove"},[o("i",{staticClass:"el-icon-remove-outline",on:{click:function(o){return t.cancleact(a,e.goodsname)}}})]),t._v(" "),o("div",{staticClass:"actinput"},[o("span",{staticClass:"label"},[t._v("商品")]),t._v(" "),o("el-select",{staticClass:"classify inputactname",attrs:{placeholder:"请选择商品",required:""},on:{change:function(o){return t.changegoods(e.goodsname,a)}},model:{value:e.goodsname,callback:function(o){t.$set(e,"goodsname",o)},expression:"item.goodsname"}},t._l(t.goodsOptions,(function(t){return o("el-option",{key:t.value,attrs:{disabled:t.disabled,label:t.label,value:t.value}})})),1)],1),t._v(" "),o("div",{staticClass:"actinput"},[o("span",{staticClass:"label"},[t._v("数量")]),t._v(" "),o("el-input-number",{staticClass:"actinput_minus",attrs:{min:e.countMin,max:e.countMax,precision:0,step:1},model:{value:e.goodscount,callback:function(o){t.$set(e,"goodscount",o)},expression:"item.goodscount"}})],1),t._v(" "),o("div",{staticClass:"actinput"},[o("span",{staticClass:"repertory"},[t._v("*库存:"+t._s(e.repertory))])]),t._v(" "),o("div",{staticClass:"actinput"},[o("span",{staticClass:"goodsprice"},[t._v("商品原价:"+t._s(e.goodsprice)+"元")])]),t._v(" "),o("div",{staticClass:"actinput"},[o("span",{staticClass:"label"},[t._v("活动价格")]),t._v(" "),o("el-input-number",{staticClass:"actinput_minus",attrs:{min:0,precision:2,step:.01},model:{value:e.actprice,callback:function(o){t.$set(e,"actprice",o)},expression:"item.actprice"}}),t._v(" "),o("span",{staticClass:"label"},[t._v("元")])],1),t._v(" "),o("div",{staticClass:"actinput"},[o("span",{staticClass:"label shopactname"},[t._v("商品活动名称")]),t._v(" "),o("el-input",{staticClass:"actname",attrs:{placeholder:"20个字符以内"},model:{value:e.actname,callback:function(o){t.$set(e,"actname",o)},expression:"item.actname"}})],1)])})),0)]),t._v(" "),o("el-form-item",{attrs:{label:"备注"}},[o("el-input",{staticClass:"note",attrs:{type:"textarea",maxlength:"2000",size:"medium","show-word-limit":"",placeholder:"2000个字符以内"},model:{value:t.ruleForm.note,callback:function(e){t.$set(t.ruleForm,"note",e)},expression:"ruleForm.note"}})],1),t._v(" "),o("div",{staticClass:"btn"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("修改")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)])};a._withStripped=!0;var s=o(10),n=o(0),i=o(8),r={data:function(){var t=this;return{msg:"2",labelPosition:"left",goodsOptions:[],actgoods:[{countMin:-1,countMax:100,showremove:!1,activityId:this.$route.query.id,id:"",goodsname:"",goodscount:-1,repertory:-1,goodsprice:0,actprice:"",actname:""}],ruleForm:{actName:"",note:"",activityTime:""},rules:{actName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:1,max:20,message:"长度在20个字符以内",trigger:"blur"},{validator:function(e,o,a){var n={actName:o};Object(s.d)(n).then((function(e){e.data.flag&&o!=t.oldactname?a(new Error("活动名称已存在")):a()})).catch((function(t){a(new Error("校验活动名称失败"))}))},trigger:"blur"}],activityTime:[{required:!0,message:"请选择活动时间",trigger:"blur"}]}}},methods:{initdata:function(){var t=this;this.getGoodsList();var e={actId:this.$route.query.id};Object(s.f)(e).then((function(e){if(e.data.flag){t.ruleForm.actName=e.data.data.name,t.oldactname=e.data.data.name,t.ruleForm.note=e.data.data.remark;var o=[];o[0]=new Date(e.data.data.startTime),o[1]=new Date(e.data.data.endTime),t.ruleForm.activityTime=o,t.actgoods=[],e.data.data.goodsList.forEach((function(e){var o={countMin:-1==e.goodsSurplusNum?-1:0,countMax:-1==e.goodsSurplusNum?1e4:e.goodsSurplusNum,showremove:!1,goodsname:e.goodsId,activityId:e.activityId,id:e.id?e.id:"",goodscount:e.surplusNum,repertory:e.goodsSurplusNum,goodsprice:e.goodsPrice,actprice:e.discountedPrice,actname:e.name};t.goodsOptions.forEach((function(o,a){o.value==e.goodsId&&(t.goodsOptions[a].disabled=!0)})),t.actgoods.push(o)}))}})).catch((function(e){t.$message({message:e,type:"error"})}))},getGoodsList:function(){var t=this;Object(i.e)({limit:0,offset:0}).then((function(e){e.data.flag?e.data.data.rows.forEach((function(e,o){var a={value:e.id,label:e.name,surplusNum:e.surplusNum,price:e.price,disabled:!1};t.goodsOptions.push(a)})):t.$message({message:e.data.msg,type:"error"})})).catch((function(e){t.$message({message:e,type:"error"})}))},changegoods:function(t,e){var o=this;if(this.goodsOptions.forEach((function(t,e){o.goodsOptions[e].disabled=!1})),this.actgoods.forEach((function(t,e){o.goodsOptions.forEach((function(a,s){a.value==t.goodsname&&(o.goodsOptions[s].disabled=!0,o.actgoods[e].repertory=a.surplusNum,o.actgoods[e].goodsprice=a.price,o.actgoods[e].countMin=-1==a.surplusNum?-1:0,o.actgoods[e].countMax=-1==a.surplusNum?1e4:a.surplusNum)}))})),this.ruleForm.activityTime){var a={endTime:"",goodsId:t,startTime:""};a.startTime=Object(n.a)(this.ruleForm.activityTime[0])+" 00:00:00",a.endTime=Object(n.a)(this.ruleForm.activityTime[1])+" 23:59:59",Object(s.e)(a).then((function(t){t.data.flag&&o.$message({message:t.data.msg?t.data.msg:"该商品活动时间与其他活动冲突，请修改活动时间",type:"error"})})).catch((function(t){o.$message({message:t,type:"error"})}))}},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;var o={startTime:"",endTime:"",id:e.$route.query.id,name:e.ruleForm.actName,remark:e.ruleForm.note,goodsList:[]};e.actgoods.forEach((function(t,e){var a={discountedPrice:t.actprice,activityId:t.activityId,id:t.id,goodsId:t.goodsname,name:t.actname,surplusNum:t.goodscount};a.discountedPrice=a.discountedPrice.toFixed(2),o.goodsList.push(a)})),e.ruleForm.activityTime&&(o.startTime=Object(n.a)(e.ruleForm.activityTime[0])+" 00:00:00",o.endTime=Object(n.a)(e.ruleForm.activityTime[1])+" 23:59:59"),Object(s.i)(o).then((function(t){t.data.flag?(e.$message({message:"修改成功",type:"success"}),e.$router.push("/activityManage/activityList")):e.$message({message:t.data.msg?t.data.msg:"修改失败",type:"error"})})).catch((function(t){e.$message({message:t,type:"error"})}))}))},cancel:function(){this.$router.go(-1)},addactgoods:function(){var t={countMin:-1,countMax:100,showremove:!1,activityId:this.$route.query.id,id:"",goodsname:"",goodscount:-1,repertory:-1,goodsprice:0,actprice:"",actname:""};this.actgoods.push(t)},cancleact:function(t,e){var o=this;this.goodsOptions.forEach((function(t,a){t.value==e&&(o.goodsOptions[a].disabled=!1)})),this.actgoods.splice(t,1)},showremove:function(t){this.actgoods[t].showremove=!0},hidremove:function(t){this.actgoods[t].showremove=!1}},created:function(){this.initdata()},components:{Toptitle:o(5).a}},c=(o(125),o(1)),d=Object(c.a)(r,a,[],!1,null,"58771c6d",null);d.options.__file="src/page/activityManage/editActivity.vue",e.default=d.exports},27:function(t,e){function o(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(t.exports=o=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=o=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),o(e)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},31:function(t,e,o){var a=o(84);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,o(4).default)("5207a714",a,!1,{})},5:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header_container"},["1"==t.msg?o("i",{staticClass:"el-icon-circle-plus-outline title"}):t._e(),t._v(" "),"2"==t.msg?o("i",{staticClass:"el-icon-edit-outline title"}):t._e(),t._v(" "),"3"==t.msg?o("i",{staticClass:"el-icon-user title"}):t._e(),t._v(" "),"4"==t.msg?o("i",{staticClass:"el-icon-setting title"}):t._e(),t._v(" "),"5"==t.msg?o("i",{staticClass:"el-icon-search title"}):t._e(),t._v(" "),"6"==t.msg?o("i",{staticClass:"el-icon-document-add title"}):t._e(),t._v(" "),t._l(t.$route.meta.title,(function(e,a){return o("span",{key:a,staticClass:"title"},[t._v(t._s(e))])}))],2)};a._withStripped=!0;var s=(o(83),o(1)),n=Object(s.a)({data:function(){return{showicon:!0}},props:["msg"],methods:{init:function(){}},created:function(){}},a,[],!1,null,"4af4cfe4",null);n.options.__file="src/component/toptitle.vue",e.a=n.exports},51:function(t,e,o){var a=o(126);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,o(4).default)("3490021f",a,!1,{})},8:function(t,e,o){"use strict";o.d(e,"e",(function(){return s})),o.d(e,"b",(function(){return n})),o.d(e,"h",(function(){return i})),o.d(e,"a",(function(){return r})),o.d(e,"g",(function(){return c})),o.d(e,"f",(function(){return d})),o.d(e,"c",(function(){return u})),o.d(e,"d",(function(){return l}));var a=o(2);function s(t){return Object(a.a)({url:"/api/goods/get/goods",method:"post",data:t})}function n(t){return Object(a.a)({url:"/api/goods/add",method:"post",data:t})}function i(t){return Object(a.a)({url:"/api/goods/update",method:"post",data:t})}function r(t){return Object(a.a)({url:"/api/goods/delete",method:"get",params:t})}function c(t){return Object(a.a)({url:"/api/goods/upDown",method:"post",params:t})}function d(t){return Object(a.a)({url:"/api/goods/get/goodsLogs",method:"post",data:t})}function u(t){return Object(a.a)({url:"/api/goods/checkGoodsName",method:"get",params:t})}function l(t){return Object(a.a)({url:"/api/goods/getGoodsById",method:"get",params:t})}},83:function(t,e,o){"use strict";o(31)},84:function(t,e,o){(e=o(3)(!1)).push([t.i,".header_container[data-v-4af4cfe4]{width:100%;background-color:#fff;height:60px;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box}.header_container img[data-v-4af4cfe4]{height:60px;width:auto}.header_container .title[data-v-4af4cfe4]{color:#acacac;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header_container span.title[data-v-4af4cfe4]{margin-left:16px}\n",""]),t.exports=e}}]);
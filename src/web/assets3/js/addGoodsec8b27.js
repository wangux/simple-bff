(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{115:function(e,t,r){"use strict";r(46)},116:function(e,t,r){(t=r(3)(!1)).push([e.i,".addGoods_page[data-v-40a423e0]{padding:0 20px}.box[data-v-40a423e0]{display:flex;justify-content:flex-start;align-items:flex-start;border:1px solid #efefef;padding:40px 0;padding-left:300px}.box .tip[data-v-40a423e0]{color:#f00;font-size:12px;font-style:italic}.input[data-v-40a423e0]{width:240px}.time[data-v-40a423e0]{cursor:pointer}.btn[data-v-40a423e0]{display:flex;justify-content:flex-start}\n",""]),e.exports=t},200:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"addGoods_page fillcontain"},[r("Toptitle",{attrs:{msg:e.msg}}),e._v(" "),r("div",{staticClass:"box"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"label-position":e.labelPosition,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[r("el-input",{staticClass:"input",attrs:{placeholder:"请输入商品名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}}),e._v(" "),r("span",{staticClass:"tip"},[e._v("*20个字符内")])],1),e._v(" "),r("el-form-item",{attrs:{label:"商品有效时长",prop:"goodsTime"}},[r("el-input-number",{staticClass:"input",attrs:{min:0,precision:0,step:1},model:{value:e.ruleForm.goodsTime,callback:function(t){e.$set(e.ruleForm,"goodsTime",t)},expression:"ruleForm.goodsTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"商品时长单位",prop:"timeUnit"}},[r("el-select",{staticClass:"input",attrs:{placeholder:"请选择商品时长单位"},model:{value:e.ruleForm.timeUnit,callback:function(t){e.$set(e.ruleForm,"timeUnit",t)},expression:"ruleForm.timeUnit"}},[r("el-option",{attrs:{label:"月",value:"MONTH"}}),e._v(" "),r("el-option",{attrs:{label:"年",value:"YEAR"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input-number",{staticClass:"input",attrs:{min:0,precision:2,step:.1},model:{value:e.ruleForm.price,callback:function(t){e.$set(e.ruleForm,"price",t)},expression:"ruleForm.price"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"商品库存数量",prop:"surplusNum"}},[r("el-input-number",{staticClass:"input",attrs:{min:-1,precision:0,step:1},model:{value:e.ruleForm.surplusNum,callback:function(t){e.$set(e.ruleForm,"surplusNum",t)},expression:"ruleForm.surplusNum"}}),e._v(" "),r("span",{staticClass:"tip"},[e._v('"-1"表示无限大')])],1),e._v(" "),r("el-form-item",{attrs:{label:"操作备注",prop:"operatRemark"}},[r("el-input",{staticClass:"input",attrs:{type:"textarea",placeholder:"2000个字符以内"},model:{value:e.ruleForm.operatRemark,callback:function(t){e.$set(e.ruleForm,"operatRemark",t)},expression:"ruleForm.operatRemark"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{staticClass:"input",attrs:{type:"textarea",placeholder:"2000个字符以内"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),e._v(" "),r("div",{staticClass:"btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("添加")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1)};a._withStripped=!0;var o=r(7),s=r.n(o),i=r(8);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var l={data:function(){var e=this,t=this;return{msg:"1",labelPosition:"left",ruleForm:{name:"",goodsTime:"",timeUnit:"MONTH",price:"",surplusNum:"",operatRemark:"",remark:""},rules:{name:[{required:!0,message:"请输入商品名",trigger:"blur"},{min:1,max:20,message:"长度在20个字符以内",trigger:"blur"},{validator:function(r,a,o){var s={goodsName:a};t.oldname!==a?Object(i.c)(s).then((function(t){t.data.flag?o(new Error("商品名称已存在")):(e.oldname=a,o())})).catch((function(t){e.$message({message:"网络异常或权限失效",type:"error"}),o()})):o()},trigger:"blur"}],goodsTime:[{required:!0,message:"请输入商品有效时长",trigger:"blur"},{type:"number",message:"商品有效时长必须为数字",trigger:"blur"}],timeUnit:[{required:!0,message:"请选择时长单位",trigger:"change"}],price:[{required:!0,message:"请输入价格",trigger:"blur"}],surplusNum:[{required:!0,message:"请输入库存数量",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$message({message:"核对数据后重新添加",type:"error"}),!1;var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t.ruleForm);r.price=r.price.toFixed(2),Object(i.b)(r).then((function(e){e.data.flag?(t.$message({message:"添加成功",type:"success"}),t.$router.push("/goodsManage/goodsList")):t.$message({message:"添加失败",type:"error"})})).catch((function(e){t.$message({message:e,type:"error"})}))}))},resetForm:function(e){this.$refs[e].resetFields()},cancel:function(){this.$router.go(-1)}},created:function(){},computed:{judgeCheck:function(){return this.ruleForm.name}},watch:{judgeCheck:{handler:function(e,t){this.oldname=t},deep:!0}},components:{Toptitle:r(5).a}},u=(r(115),r(1)),c=Object(u.a)(l,a,[],!1,null,"40a423e0",null);c.options.__file="src/page/goodsManage/addGoods.vue",t.default=c.exports},31:function(e,t,r){var a=r(84);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,r(4).default)("5207a714",a,!1,{})},46:function(e,t,r){var a=r(116);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),(0,r(4).default)("30f48612",a,!1,{})},5:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header_container"},["1"==e.msg?r("i",{staticClass:"el-icon-circle-plus-outline title"}):e._e(),e._v(" "),"2"==e.msg?r("i",{staticClass:"el-icon-edit-outline title"}):e._e(),e._v(" "),"3"==e.msg?r("i",{staticClass:"el-icon-user title"}):e._e(),e._v(" "),"4"==e.msg?r("i",{staticClass:"el-icon-setting title"}):e._e(),e._v(" "),"5"==e.msg?r("i",{staticClass:"el-icon-search title"}):e._e(),e._v(" "),"6"==e.msg?r("i",{staticClass:"el-icon-document-add title"}):e._e(),e._v(" "),e._l(e.$route.meta.title,(function(t,a){return r("span",{key:a,staticClass:"title"},[e._v(e._s(t))])}))],2)};a._withStripped=!0;var o=(r(83),r(1)),s=Object(o.a)({data:function(){return{showicon:!0}},props:["msg"],methods:{init:function(){}},created:function(){}},a,[],!1,null,"4af4cfe4",null);s.options.__file="src/component/toptitle.vue",t.a=s.exports},8:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"h",(function(){return i})),r.d(t,"a",(function(){return n})),r.d(t,"g",(function(){return l})),r.d(t,"f",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return p}));var a=r(2);function o(e){return Object(a.a)({url:"/api/goods/get/goods",method:"post",data:e})}function s(e){return Object(a.a)({url:"/api/goods/add",method:"post",data:e})}function i(e){return Object(a.a)({url:"/api/goods/update",method:"post",data:e})}function n(e){return Object(a.a)({url:"/api/goods/delete",method:"get",params:e})}function l(e){return Object(a.a)({url:"/api/goods/upDown",method:"post",params:e})}function u(e){return Object(a.a)({url:"/api/goods/get/goodsLogs",method:"post",data:e})}function c(e){return Object(a.a)({url:"/api/goods/checkGoodsName",method:"get",params:e})}function p(e){return Object(a.a)({url:"/api/goods/getGoodsById",method:"get",params:e})}},83:function(e,t,r){"use strict";r(31)},84:function(e,t,r){(t=r(3)(!1)).push([e.i,".header_container[data-v-4af4cfe4]{width:100%;background-color:#fff;height:60px;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box}.header_container img[data-v-4af4cfe4]{height:60px;width:auto}.header_container .title[data-v-4af4cfe4]{color:#acacac;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header_container span.title[data-v-4af4cfe4]{margin-left:16px}\n",""]),e.exports=t}}]);
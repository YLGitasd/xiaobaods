webpackJsonp([5,12],{204:function(e,r,t){e.exports=t.p+"static/img/Bao-blue.237c4c0.png"},205:function(e,r,t){e.exports=t.p+"static/img/login_background.b7d84de.jpg"},572:function(e,r,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(52),n=s(o);r.default={data:function(){var e=this,r=function(e,r,t){return r?void setTimeout(function(){void 0==r.length?t(new Error("首字母不能为数字")):r.length<2||r.length>5?t(new Error("要求2-5个字符")):t()},1e3):t(new Error("账号不能为空"))},t=function(r,t,s){""===t?s(new Error("请输入密码")):t.length<6||t.length>12?s(new Error("密码长度6-12")):(""!==e.User.checkPassword&&e.$refs.User.validateField("checkPassword"),s())},s=function(r,t,s){""===t?s(new Error("请再次输入密码")):t!==e.User.password?s(new Error("两次输入密码不一致!")):s()},o=function(e,r,t){""===r?t(new Error("如你还没有或者忘记邀请码！请与数据管理员联系。")):t()};return{User:{name:"",password:"",checkPassword:"",id:""},rules2:{name:[{validator:r,trigger:"blur"}],password:[{validator:t,trigger:"blur"}],checkPassword:[{validator:s,trigger:"blur"}],id:[{validator:o,trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return alert("无法提交!!"),!1;var t=(0,n.default)(r.User);r.$http.post("/user/register",{data:t},{emulateJSON:!0}).then(function(e){"success"==e.body.message?(r.$message("注册成功"),setTimeout(function(){window.router.push({path:"/login/"})},1e3)):"false"==e.body.message?r.$message("注册失败"):"idErr"==e.body.message&&r.$message("邀请码错误")})})}}}},599:function(e,r,t){r=e.exports=t(95)(),r.push([e.id,".el-row{position:relative}.el-card__body{background:#fff}.el-input__inner{border-radius:0;border:1px solid #ddd}.el-input__inner:focus{box-shadow:0 0 2px blue}","",{version:3,sources:["/./src/components/Auth/register.vue"],names:[],mappings:"AACA,QACI,iBAAkB,CACrB,AACD,eACI,eAAoB,CACvB,AACD,iBACI,gBAAmB,AACnB,qBAA0B,CAC7B,AACD,uBACK,uBAA4B,CAChC",file:"register.vue",sourcesContent:["\n.el-row{\n    position:relative;\n}\n.el-card__body{\n    background: #FFFFFF;\n}\n.el-input__inner{\n    border-radius: 0px;\n    border: 1px solid #DDDDDD;\n}\n.el-input__inner:focus{\n     box-shadow:0px 0px 2px blue;\n}\n"],sourceRoot:"webpack://"}])},624:function(e,r,t){var s=t(599);"string"==typeof s&&(s=[[e.id,s,""]]);t(116)(s,{});s.locals&&(e.exports=s.locals)},636:function(e,r,t){t(624);var s=t(35)(t(572),t(650),null,null);e.exports=s.exports},650:function(e,r,t){e.exports={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[s("el-row",[s("img",{staticStyle:{position:"fixed",left:"36vh"},attrs:{src:t(204),alt:""}})]),e._v(" "),s("img",{staticStyle:{position:"absolute",width:"100%",top:"10vh"},attrs:{src:t(205),alt:""}}),e._v(" "),s("el-row",{staticStyle:{"margin-top":"20vh"}},[s("el-col",{attrs:{span:4,push:15}},[s("el-card",[s("b",[e._v("用户注册")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("el-form",{ref:"User",staticClass:"demo-ruleForm",attrs:{model:e.User,rules:e.rules2}},[s("el-form-item",{attrs:{prop:"id"}},[s("el-input",{attrs:{type:"string",placeholder:"请输入邀请码","auto-complete":"off"},model:{value:e.User.id,callback:function(r){e.User.id=r},expression:"User.id"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"name"}},[s("el-input",{attrs:{type:"string",placeholder:"账号"},model:{value:e.User.name,callback:function(r){e.User.name=e._n(r)},expression:"User.name"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"密码","auto-complete":"off"},model:{value:e.User.password,callback:function(r){e.User.password=r},expression:"User.password"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"checkPassword"}},[s("el-input",{attrs:{type:"password",placeholder:"确认密码","auto-complete":"off"},nativeOn:{keyup:function(r){return"button"in r||!e._k(r.keyCode,"enter",13)?void e.submitForm("User"):null}},model:{value:e.User.checkPassword,callback:function(r){e.User.checkPassword=r},expression:"User.checkPassword"}})],1),e._v(" "),s("el-form-item",[s("el-button",{staticStyle:{width:"45%","margin-right":"5%"},attrs:{type:"danger"},on:{click:function(r){e.submitForm("User")}}},[e._v("提交")]),e._v(" "),s("a",{attrs:{href:"/#/login/"}},[s("el-button",{staticStyle:{width:"45%"},attrs:{type:"danger"}},[e._v("返回")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.d5e7ca1711e7907f1593.js.map
webpackJsonp([8],{jyJz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("rQBB"),s=a.n(l),n={data:function(){return{table:[],showAddModal:!1,showAuthModal:!1,authTable:[],mainChosen:[],authChosen:[],options:[{value:"01",label:"审核通过"},{value:"02",label:"未审核"},{value:"03",label:"已拒绝"}],value:""}},created:function(){document.title="用户管理",this.init()},methods:{init:function(){this.table=[{id:"01",username:"娜子",name:"马丽娜",phone:"13641077122",email:"kaycoding@126.com",status:1,startTime:s.a.transDate(new Date),authTime:s.a.transDate(new Date)}],this.authTable=[{id:"02",username:"娜子2",name:"马丽娜2",phone:"13641077122",email:"kaycoding@126.com"},{id:"03",username:"娜子3",name:"马丽娜3",phone:"13641077122",email:"kaycoding@126.com"}]},getChosen:function(t){console.log(t),this.mainChosen=t},toggleSelection:function(t){console.log(t),t?this.$refs.mainTable.toggleRowSelection(t):this.$refs.mainTable.clearSelection()},getAuthChosen:function(t){console.log(t),this.authChosen=t},toggleAuthSelection:function(t){t?this.$refs.authTable.toggleRowSelection(t):this.$refs.authTable.clearSelection()},addModal:function(){this.showAddModal=!0},authModal:function(){this.showAuthModal=!0},confirm:function(){var t=this;this.mainChosen.length>0?this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})}):this.$message({type:"warning",message:"您未选择数据"})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-comp"},[a("div",{staticClass:"user container"},[a("div",{staticClass:"query-box"},[a("span",{staticClass:"brand"},[t._v("用户查询")]),t._v(" "),a("div",{staticClass:"flex-s wrap"},[a("div",{staticClass:"input-box"},[a("p",{staticClass:"title"},[t._v("审核状态:")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("div",{staticClass:"input-box"},[a("p",{staticClass:"title"},[t._v("用户属性:")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"}})],1),t._v(" "),a("div",{staticClass:"input-box"},[a("p",{staticClass:"title"},[t._v("用户名:")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"}})],1),t._v(" "),a("div",{staticClass:"input-box"},[a("p",{staticClass:"title"},[t._v("姓名:")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"}})],1),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"primary"}},[t._v("查询")])],1)]),t._v(" "),a("div",{staticClass:"tool-box"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",round:""},on:{click:t.addModal}},[t._v("增加")]),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"warning",round:""},on:{click:t.authModal}},[t._v("审核")]),t._v(" "),a("el-button",{staticClass:"btn",attrs:{type:"danger",round:""},on:{click:t.confirm}},[t._v("删除")])],1),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{ref:"mainTable",attrs:{data:t.table,"tooltip-effect":"dark",stripe:"",border:"","highlight-current-row":"",height:"320"},on:{"row-click":t.toggleSelection,"selection-change":t.getChosen}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"用户名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.username))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"电话",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.phone))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"邮箱"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.email))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",{staticClass:"text-center",domProps:{textContent:t._s(0==e.row.status?"未审核":"审核通过")}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"注册时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.startTime))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"审核时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.authTime))]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"pagenation",attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)]),t._v(" "),a("el-dialog",{attrs:{title:"添加用户",visible:t.showAddModal,width:"600px"},on:{"update:visible":function(e){t.showAddModal=e}}},[a("div",{staticClass:"my-modal-container"},[a("div",{staticClass:"query-box"},[t._v("用户属性：团体用户")]),t._v(" "),a("div",{staticClass:"input-box flex-s"},[a("div",{staticClass:"title"},[t._v("姓名:")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"}})],1),t._v(" "),a("div",{staticClass:"input-box flex-s"},[a("div",{staticClass:"title"},[t._v("账号:")]),t._v(" "),a("el-input",{attrs:{placeholder:"请输入内容"}})],1),t._v(" "),a("div",{staticClass:"input-box flex-s"},[a("div",{staticClass:"title"},[t._v("密码:")]),t._v(" "),a("el-input",{attrs:{type:"password",placeholder:"请输入内容"}})],1),t._v(" "),a("div",{staticClass:"input-box flex-s"},[a("div",{staticClass:"title"},[t._v("邮箱:")]),t._v(" "),a("el-input",{attrs:{type:"text",placeholder:"请输入内容"}})],1),t._v(" "),a("div",{staticClass:"input-box flex-s"},[a("div",{staticClass:"title"},[t._v("手机:")]),t._v(" "),a("el-input",{attrs:{type:"tel",placeholder:"请输入内容"}})],1),t._v(" "),a("div",{staticClass:"text-center"},[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){t.showAddModal=!1}}},[t._v("注册")])],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"平台用户注册信息-待审核",visible:t.showAuthModal,width:"600px"},on:{"update:visible":function(e){t.showAuthModal=e}}},[a("div",{staticClass:"my-modal-container"},[a("div",{staticClass:"table-container"},[a("el-table",{ref:"authTable",attrs:{data:t.authTable,"tooltip-effect":"dark",stripe:"",border:"","highlight-current-row":"",height:"300"},on:{"row-click":t.toggleAuthSelection,"selection-change":t.getAuthChosen}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"用户名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.username))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"联系方式"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.phone))]}}])})],1)],1)]),t._v(" "),a("span",{staticClass:"dialog-footer text-center flex-c",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showAuthModal=!1}}},[t._v("通过")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.showAuthModal=!1}}},[t._v("拒绝")])],1)])],1)},staticRenderFns:[]};var i=a("C7Lr")(n,o,!1,function(t){a("pKRw")},null,null);e.default=i.exports},pKRw:function(t,e){}});
//# sourceMappingURL=8.559f8251a1758d044ec3.js.map
webpackJsonp([9,12],{581:function(a,e,l){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(e,"__esModule",{value:!0});var i=l(52),b=t(i);e.default={data:function(){return{value3:"",pickerOption:{disabledDate:function(a){var e=864e5,l=new Date("2016-12-12").getTime()-e,t=Date.now()-e;return a.getTime()>t||a.getTime()<l}},value0:"牛仔裤",options0:[{label:"类目：牛仔裤",value:"牛仔裤"},{label:"类目：休闲裤",value:"休闲裤"},{label:"类目：打底裤",value:"打底裤"}],value1:["飙升核心词","排名"],options1:[{value:"飙升核心词",label:"飙升核心词",children:[{value:"排名",label:"排名"},{value:"搜索人气",label:"搜索人气"},{value:"相关搜索词数",label:"相关搜索词数"},{value:"词均搜索增长幅度",label:"词均搜索增长幅度"},{value:"点击人气",label:"点击人气"},{value:"支付转化率",label:"支付转化率"},{value:"直通车参考价",label:"直通车参考价"}]},{value:"飙升修饰词",label:"飙升修饰词",children:[{value:"排名",label:"排名"},{value:"搜索人气",label:"搜索人气"},{value:"相关搜索词数",label:"相关搜索词数"},{value:"词均搜索增长幅度",label:"词均搜索增长幅度"},{value:"点击人气",label:"点击人气"},{value:"支付转化率",label:"支付转化率"},{value:"直通车参考价",label:"直通车参考价"}]},{value:"飙升品牌词",label:"飙升品牌词",children:[{value:"排名",label:"排名"},{value:"搜索人气",label:"搜索人气"},{value:"相关搜索词数",label:"相关搜索词数"},{value:"词均搜索增长幅度",label:"词均搜索增长幅度"},{value:"点击人气",label:"点击人气"},{value:"支付转化率",label:"支付转化率"},{value:"直通车参考价",label:"直通车参考价"}]},{value:"飙升搜索词",label:"飙升搜索词",children:[{value:"排名",label:"排名"},{value:"搜索人气",label:"搜索人气"},{value:"搜索增长幅度",label:"搜索增长幅度"},{value:"点击率",label:"点击率"},{value:"点击人气",label:"点击人气"},{value:"支付转化率",label:"支付转化率"},{value:"直通车参考价",label:"直通车参考价"}]},{value:"飙升长尾词",label:"飙升长尾词",children:[{value:"排名",label:"排名"},{value:"搜索人气",label:"搜索人气"},{value:"搜索增长幅度",label:"搜索增长幅度"},{value:"点击率",label:"点击率"},{value:"点击人气",label:"点击人气"},{value:"支付转化率",label:"支付转化率"},{value:"直通车参考价",label:"直通车参考价"}]}],value4:7,options4:[{value:7,label:"显示周期：近7天"},{value:14,label:"显示周期：近14天"}],Table:{tableData:[],tableData_title:[],tableData_prepag:[],prePageCount:20,PageIndex:1,height:840},filename:"",loading:!1}},created:function(){var a=this,e=(new Date).getTime()-864e5,l=new Date(e);this.value3=l.getFullYear()+"-"+(l.getMonth()+1)+"-"+l.getDate(),this.loading=!0,this.$http.get("keyWord/up").then(function(e){a.filename="./static/public/"+e.body.filename+".csv",a.objToArr(e.body.data)})},methods:{inputchange:function(){var a=this,e={data_time:this.value3,data_items:this.$data.value0,data_reorder:this.$data.value1,data_time_length:this.$data.value4},l=(0,b.default)(e);this.loading=!0,this.$http.post("keyWord/up",{data:l},{emulateJSON:!0}).then(function(e){a.filename="./static/public/"+e.body.filename+".csv",a.objToArr(e.body.data)})},objToArr:function(a){var e=[],l=[];if(a){for(var t in a[0])l.push(t);for(var i in a){for(var b in a[i])null==a[i][b]?a[i][b]="":"日期"==b.slice(0,2)?"支付转化率"==this.value1[1]||"点击率"==this.value1[1]||"词均搜索增长幅度"==this.value1[1]?a[i][b]=parseFloat(100*a[i][b]).toFixed(2)+"%":"相关搜索词数"==this.value1[1]||"搜索人气"==this.value1[1]||"点击人气"==this.value1[1]?a[i][b]=a[i][b].toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"):"string"!=typeof a[i][b]&&"直通车参考价"==this.value1[1]?a[i][b]="￥"+parseFloat(a[i][b]).toFixed(2):a[i][b]=a[i][b]:"相关搜索词数"==b||"搜索人气"==b||"点击人气"==b?a[i][b]=a[i][b].toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"):"支付转化率"==b||"点击率"==b||"词均搜索增长幅度"==b?a[i][b]=parseFloat(100*a[i][b]).toFixed(2)+"%":"string"!=typeof a[i][b]&&"直通车参考价"==b?a[i][b]="￥"+parseFloat(a[i][b]).toFixed(2):a[i][b]=a[i][b];e.push(a[i])}this.Table.tableData_title=l,this.loading=!1,this.Table.tableData=e,this.Table.tableData_prepag=this.Table.tableData.slice(0,20)}},handleSizeChange:function(a){var e=(this.Table.PageIndex-1)*a,l=this.Table.PageIndex*a;this.Table.tableData_prepag=this.Table.tableData.slice(e,l),this.Table.prePageCount=a},handleCurrentChange:function(a){var e=this.Table.prePageCount*(a-1),l=this.Table.prePageCount*a;this.Table.tableData_prepag=this.Table.tableData.slice(e,l),this.Table.PageIndex=a}}}},645:function(a,e,l){var t=l(35)(l(581),l(659),null,null);a.exports=t.exports},659:function(a,e){a.exports={render:function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",[l("el-row",{staticClass:"title",attrs:{type:"flex",justify:"space-between",align:"middle"}},[l("el-col",{staticClass:"title-left"},[l("h3",[a._v("飙升词分析")])]),a._v(" "),l("el-col",{staticClass:"title-right"},[l("p",[a._v("针对特定飙升词，对一定周期内飙升词，飙升词进行排名")])])],1),a._v(" "),l("el-row",{staticClass:"navlist",attrs:{type:"flex",justify:"space-around",align:"middle"}},[l("el-col",{staticClass:"list-left"},[l("el-date-picker",{attrs:{"picker-options":a.pickerOption,size:"small"},on:{change:a.inputchange},model:{value:a.value3,callback:function(e){a.value3=e},expression:"value3"}}),a._v(" "),l("el-select",{attrs:{size:"small"},on:{change:a.inputchange},model:{value:a.value0,callback:function(e){a.value0=e},expression:"value0"}},a._l(a.options0,function(a){return l("el-option",{attrs:{label:a.label,value:a.value}})})),a._v(" "),l("el-cascader",{attrs:{options:a.options1,size:"small"},on:{change:a.inputchange},model:{value:a.value1,callback:function(e){a.value1=e},expression:"value1"}}),a._v(" "),l("el-select",{attrs:{size:"small"},on:{change:a.inputchange},model:{value:a.value4,callback:function(e){a.value4=e},expression:"value4"}},a._l(a.options4,function(a){return l("el-option",{attrs:{label:a.label,value:a.value}})})),a._v(" "),l("span",{staticClass:"Embellish"},[l("a",{attrs:{href:a.filename}},[a._v("下载")])])],1),a._v(" "),l("el-col",{staticClass:"list-right"})],1),a._v(" "),l("el-row",[l("el-col",[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"tablelist",staticStyle:{width:"100%"},attrs:{data:a.Table.tableData_prepag,height:this.Table.height}},[l("el-table-column",{attrs:{prop:a.Table.tableData_title[0],label:a.Table.tableData_title[0],"header-align":"center",align:"center"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[1],label:a.Table.tableData_title[1],"header-align":"center",align:"center"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[2],label:a.Table.tableData_title[2],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[3],label:a.Table.tableData_title[3],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[4],label:a.Table.tableData_title[4],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[5],label:a.Table.tableData_title[5],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[6],label:a.Table.tableData_title[6],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[7],label:a.Table.tableData_title[7],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[8],label:a.Table.tableData_title[8],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[9],label:a.Table.tableData_title[9],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[10],label:a.Table.tableData_title[10],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[11],label:a.Table.tableData_title[11],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[12],label:a.Table.tableData_title[12],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[13],label:a.Table.tableData_title[13],"header-align":"right",align:"right"}}),a._v(" "),l("el-table-column",{attrs:{prop:a.Table.tableData_title[14],label:a.Table.tableData_title[14],"header-align":"right",align:"right"}}),a._v(" "),a.Table.tableData_title[15]?l("el-table-column",{attrs:{prop:a.Table.tableData_title[15],label:a.Table.tableData_title[15],"header-align":"right",align:"right"}}):a._e(),a._v(" "),a.Table.tableData_title[16]?l("el-table-column",{attrs:{prop:a.Table.tableData_title[16],label:a.Table.tableData_title[16],"header-align":"right",align:"right"}}):a._e(),a._v(" "),a.Table.tableData_title[17]?l("el-table-column",{attrs:{prop:a.Table.tableData_title[17],label:a.Table.tableData_title[17],"header-align":"right",align:"right"}}):a._e(),a._v(" "),a.Table.tableData_title[18]?l("el-table-column",{attrs:{prop:a.Table.tableData_title[18],label:a.Table.tableData_title[18],"header-align":"right",align:"right"}}):a._e(),a._v(" "),a.Table.tableData_title[19]?l("el-table-column",{attrs:{prop:a.Table.tableData_title[19],label:a.Table.tableData_title[19],"header-align":"right",align:"right"}}):a._e(),a._v(" "),a.Table.tableData_title[20]?l("el-table-column",{attrs:{prop:a.Table.tableData_title[20],label:a.Table.tableData_title[20],"header-align":"right",align:"right"}}):a._e(),a._v(" "),a.Table.tableData_title[21]?l("el-table-column",{attrs:{prop:a.Table.tableData_title[21],label:a.Table.tableData_title[21],"header-align":"right",align:"right"}}):a._e()],1),a._v(" "),l("div",{staticStyle:{position:"relative","text-align":"center"}},[l("el-pagination",{attrs:{"current-page":a.Table.PageIndex,"page-sizes":[15,20,50,100],"page-size":a.Table.prePageCount,layout:"total, sizes, prev, pager, next, jumper",total:a.Table.tableData.length},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.54923dd1e96d5fc178d9.js.map
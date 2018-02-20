webpackJsonp([37,86],{F82P:function(a,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("cSth");var s=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[i("p",{staticClass:"caption"},[i("span",{staticClass:"desktop-only"},[a._v("Click")]),a._v(" "),i("span",{staticClass:"mobile-only"},[a._v("Tap")]),a._v("\n      on Chips Textbox below to start adding or removing Chips.\n      "),i("br"),a._v("\n      The Backspace key removes previously entered Chip if textfield is empty.\n    ")]),a._v(" "),i("br"),a._v(" "),i("span",{staticClass:"chip-container"},[i("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n        Model: "+a._s(a.chips1)+"\n      ")])],1),a._v(" "),i("q-chips-input",{attrs:{placeholder:"Type some names"},model:{value:a.chips1,callback:function(e){a.chips1=e},expression:"chips1"}}),a._v(" "),i("q-chips-input",{attrs:{color:"secondary",placeholder:"Type some names","float-label":"Float label"},model:{value:a.chips2,callback:function(e){a.chips2=e},expression:"chips2"}}),a._v(" "),i("q-chips-input",{attrs:{color:"tertiary","add-icon":"done","float-label":"Custom add icon (type something)"},model:{value:a.chips2,callback:function(e){a.chips2=e},expression:"chips2"}}),a._v(" "),i("q-chips-input",{attrs:{"inverted-light":"",color:"amber",placeholder:"Type some names","stack-label":"Stack label & inverted"},model:{value:a.chips3,callback:function(e){a.chips3=e},expression:"chips3"}}),a._v(" "),i("q-chips-input",{attrs:{inverted:"",color:"brown","chips-color":"black","chips-bg-color":"amber","float-label":"Float Label",placeholder:"Some placeholder"},model:{value:a.chips4,callback:function(e){a.chips4=e},expression:"chips4"}}),a._v(" "),i("p",{staticClass:"caption"},[a._v("\n      Lazy input\n    ")]),a._v(" "),i("span",{staticClass:"chip-container"},[i("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n        Model: "+a._s(a.lazy)+"\n      ")])],1),a._v(" "),i("q-chips-input",{attrs:{value:a.lazy,placeholder:"Type some names"},on:{change:function(e){a.lazy=e}}}),a._v(" "),i("p",{staticClass:"caption"},[a._v("Hide underline")]),a._v(" "),i("q-chips-input",{attrs:{"hide-underline":""},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}}),a._v(" "),i("p",{staticClass:"caption"},[a._v("Read only")]),a._v(" "),i("q-chips-input",{attrs:{readonly:"",placeholder:"Read only"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}}),a._v(" "),i("q-chips-input",{attrs:{readonly:"",inverted:"",placeholder:"Read only"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}}),a._v(" "),i("p",{staticClass:"caption"},[a._v("Disabled")]),a._v(" "),i("q-chips-input",{attrs:{disable:"",placeholder:"Disabled"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}}),a._v(" "),i("q-chips-input",{attrs:{disable:"",inverted:"",placeholder:"Disabled"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}}),a._v(" "),i("p",{staticClass:"caption"},[a._v("Error/Warning states")]),a._v(" "),i("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:a.error,callback:function(e){a.error=e},expression:"error"}}),a._v(" "),i("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:a.warning,callback:function(e){a.warning=e},expression:"warning"}}),a._v(" "),i("q-chips-input",{attrs:{error:a.error,warning:a.warning,"float-label":"Float Label"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}}),a._v(" "),i("q-chips-input",{attrs:{error:a.error,warning:a.warning,inverted:"","float-label":"Float Label"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}}),a._v(" "),i("p",{staticClass:"caption"},[a._v("In a Field")]),a._v(" "),i("q-field",{attrs:{icon:"supervisor_account",label:"Employees",count:10,helper:"Type some names","label-width":3}},[i("q-chips-input",{attrs:{count:10},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}})],1),a._v(" "),i("p",{staticClass:"caption"},[a._v("In a List")]),a._v(" "),i("q-list",[i("q-item",{attrs:{multiline:""}},[i("q-item-side",{attrs:{icon:"edit"}}),a._v(" "),i("q-item-main",[i("q-chips-input",{staticClass:"no-margin",attrs:{placeholder:"Type names"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}})],1)],1)],1),a._v(" "),i("p",{staticClass:"caption"},[a._v("On dark background")]),a._v(" "),i("div",{staticClass:"dark-example"},[i("q-chips-input",{attrs:{dark:"",color:"amber","chips-color":"dark","chips-bg-color":"amber","float-label":"Float Label",placeholder:"Some placeholder"},model:{value:a.chips5,callback:function(e){a.chips5=e},expression:"chips5"}}),a._v(" "),i("q-field",{attrs:{dark:"",icon:"supervisor_account",label:"Employees",count:10,helper:"Type some names","label-width":3}},[i("q-chips-input",{attrs:{dark:"",color:"secondary"},model:{value:a.chips6,callback:function(e){a.chips6=e},expression:"chips6"}})],1)],1)],1)])},c=[];s._withStripped=!0;var t=i("XyMi"),n=Object(t.a)({data:function(){return{chips1:["Joe"],chips2:["Jack","Jim"],chips3:["Jim"],chips4:["Joe"],chips5:["Jim"],chips6:["Jack","Jim"],lazy:["Joe"],error:!0,warning:!1}},watch:{error:function(a){a&&(this.warning=!1)},warning:function(a){a&&(this.error=!1)}}},s,c,!1,null,null,null);n.options.__file="src/pages/showcase/forms/chips-input.vue";e.default=n.exports},cSth:function(a,e,i){var s=i("t3GF");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);(0,i("rjj0").default)("4674b73f",s,!1,{})},t3GF:function(a,e,i){(a.exports=i("FZ+f")(!1)).push([a.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])}});
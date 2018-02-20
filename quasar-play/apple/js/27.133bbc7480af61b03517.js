webpackJsonp([27,86],{"7U7X":function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});t("cSth");var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("q-page",{staticClass:"docs-input row justify-center",attrs:{padding:""}},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("p",{staticClass:"caption"},[e._v("Single selection")]),e._v(" "),t("q-select",{attrs:{options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{"stack-label":"Delimited options","inverted-light":"",color:"amber",separator:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{color:"secondary","float-label":"List with float label",options:e.listOptions},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{color:"amber","stack-label":"List with stack label",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{radio:"",color:"secondary","float-label":"With Radio",options:e.listOptions},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Multiple selection")]),e._v(" "),t("q-select",{attrs:{multiple:"",color:"indigo",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-select",{attrs:{multiple:"",inverted:"",color:"dark","stack-label":"Delimited options",separator:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-select",{attrs:{multiple:"",toggle:"","inverted-light":"",color:"orange","float-label":"List with float label & toggles",options:e.listOptions},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-select",{attrs:{multiple:"",chips:"",color:"purple","float-label":"With chips",options:e.listOptions},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("q-select",{attrs:{multiple:"","float-label":"With custom display value","display-value":e.multipleSelect.length+" companies selected",options:e.listOptions},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("\n      Lazy input\n    ")]),e._v(" "),t("span",{staticClass:"chip-container"},[t("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("\n        Model: "+e._s(e.lazy)+"\n      ")])],1),e._v(" "),t("q-select",{attrs:{value:e.lazy,multiple:"",inverted:"",color:"tertiary",options:e.options},on:{change:function(l){return e.lazy=l}}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("With filter / search")]),e._v(" "),t("q-select",{attrs:{filter:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{multiple:"",filter:"",inverted:"",color:"secondary",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Readonly state")]),e._v(" "),t("q-select",{attrs:{readonly:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{readonly:"",inverted:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disable state")]),e._v(" "),t("q-select",{attrs:{disable:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{disable:"",inverted:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Error/warning states")]),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"negative",label:"Toggle error state"},model:{value:e.error,callback:function(l){e.error=l},expression:"error"}}),e._v(" "),t("q-toggle",{staticClass:"q-ma-xs",attrs:{color:"warning",label:"Toggle warning state"},model:{value:e.warning,callback:function(l){e.warning=l},expression:"warning"}}),e._v(" "),t("q-select",{attrs:{error:e.error,warning:e.warning,"float-label":"Hey, an error!",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-select",{attrs:{error:e.error,warning:e.warning,inverted:"",multiple:"","float-label":"Select something",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Hide underline")]),e._v(" "),t("q-select",{attrs:{multiple:"","hide-underline":"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("In a Field")]),e._v(" "),t("q-field",{attrs:{icon:"public",label:"Pick employers",helper:"Pick company names"}},[t("q-select",{attrs:{multiple:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}})],1),e._v(" "),t("q-field",{attrs:{icon:"public",count:5,label:"Pick employers",helper:"Pick company names"}},[t("q-select",{attrs:{chips:"",color:"amber",multiple:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}})],1),e._v(" "),t("q-field",{attrs:{icon:"public",count:5,label:"Pick employers",helper:"Pick company names"}},[t("q-select",{attrs:{chips:"","inverted-light":"",color:"amber",multiple:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("On dark background")]),e._v(" "),t("div",{staticClass:"dark-example"},[t("q-select",{attrs:{dark:"","stack-label":"Delimited options",color:"amber",separator:"",options:e.options},model:{value:e.select,callback:function(l){e.select=l},expression:"select"}}),e._v(" "),t("q-field",{attrs:{dark:"",icon:"school",label:"Company"}},[t("q-select",{attrs:{dark:"","stack-label":"Stack label",color:"lime",multiple:"",options:e.options},model:{value:e.multipleSelect,callback:function(l){e.multipleSelect=l},expression:"multipleSelect"}})],1)],1)],1)])},i=[];o._withStripped=!0;var s=t("XyMi"),a=Object(s.a)({data:function(){return{lazy:[],select:"fb",multipleSelect:["goog","twtr"],error:!0,warning:!1,options:[{label:"Google",value:"goog"},{label:"Facebook",value:"fb"},{label:"Twitter",value:"twtr"},{label:"Apple Inc.",value:"appl"},{label:"Oracle",value:"ora"}],listOptions:[{label:"Google",icon:"email",value:"goog"},{label:"Facebook",icon:"chat",description:"Enables communication",value:"fb"},{label:"Twitter",inset:!0,rightIcon:"live_help",value:"twtr"},{label:"Apple Inc.",inset:!0,stamp:"10 min",value:"appl"},{label:"Oracle",description:"Some Java for today?",icon:"unarchive",rightIcon:"widgets",value:"ora"}]}},watch:{error:function(e){e&&(this.warning=!1)},warning:function(e){e&&(this.error=!1)}}},o,i,!1,null,null,null);a.options.__file="src/pages/showcase/forms/select.vue";l.default=a.exports},cSth:function(e,l,t){var o=t("t3GF");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("rjj0").default)("4674b73f",o,!1,{})},t3GF:function(e,l,t){(e.exports=t("FZ+f")(!1)).push([e.i,".docs-input .q-if,\n.docs-input .q-field,\n.docs-input .q-uploader {\n  margin: 16px 0;\n}\n.docs-input .q-field .q-if,\n.docs-input .q-uploader .q-if {\n  margin: 0;\n}\n.docs-input .q-field .q-uploader {\n  margin: 0;\n}\n.docs-input .caption:not(:first-child) {\n  margin-top: 40px;\n}\n.docs-input .dark-example {\n  padding: 5px 15px 15px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 2px;\n}\n",""])}});
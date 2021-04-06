;(function(){var baseUrl;var __factory=function(){var React=arguments[0];var ReactDOM=arguments[1];var ReactTransitionGroup=arguments[2];var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_koi_sidebar";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.engine.dom":dependencies[3],"prezi.geometry":dependencies[4],"prezi_ace_editor":dependencies[5],"prezi_app_utils":dependencies[6],"prezi_bacon":dependencies[7],"prezi_cet_model":dependencies[8],"prezi_cet_model_editor":dependencies[9],"prezi_contextmenu":dependencies[10],"prezi_dragon":dependencies[11],"prezi_editor_commander":dependencies[12],"prezi_editor_commander_common":dependencies[13],"prezi_editor_controller":dependencies[14],"prezi_externalserviceprovider":dependencies[15],"prezi_featureswitcher":dependencies[16],"prezi_i18n":dependencies[17],"prezi_koi_widgets":dependencies[18],"prezi_logger":dependencies[19],"prezi_thumbnail_render":dependencies[20],"prezi_utils":dependencies[21],"prezi_widgets":dependencies[22]}};})(),React,ReactDOM,ReactTransitionGroup);};})(arguments);var moduleImpl=(function(){return module(function(d,c,m,h){h=null;var n=d.dependencies.prezi_editor_commander_common,p=d.dependencies.prezi_ace_editor,g=d.dependencies.prezi_i18n,e=d.dependencies.prezi_koi_widgets,k={};Object.defineProperty(k,"__esModule",{value:!0});k.StyleEditorSidebar=class extends c.PureComponent{createInformation(){return c.createElement("div",{ref:"wrapper","data-prezi-input":"",style:{width:"95%",height:"95%"}},c.createElement("div",{className:"buttons"},c.createElement(e.KoiWidgets.Button,{text:g.I18n.ts("Apply"),
className:"normal regular",onClick:()=>this.props.callbacks.update(this.editor.getValue())}),c.createElement(e.KoiWidgets.Button,{text:g.I18n.ts("Reload style"),className:"normal regular",onClick:()=>this.props.callbacks.reload()})))}componentDidMount(){const a=document.createElement("DIV");a.style.height="100%";a.style.width="100%";a.style.backgroundColor="black";m.findDOMNode(this.refs.wrapper).appendChild(a);p.AceModule.create(a,(b)=>{b.setTheme("ace/theme/monokai");b.getSession().setMode("ace/mode/xml");
b.getSession().setValue(this.props.source);this.editor=b;b=a.getElementsByTagName("textarea");for(let a=0;a<b.length;++a)b[a].tabIndex=-1});this.props.callbacks.reload()}shouldComponentUpdate(a){return this.props.xmlVersion!==a.xmlVersion}componentDidUpdate(){null!=this.editor&&this.editor.getSession().setValue(this.props.source)}render(){return c.createElement(e.KoiWidgets.Sidebar,{title:g.I18n.ts("Style Editor"),className:f.Sidebar.STYLEEDITOR_ID,onClose:this.props.callbacks.close,information:[this.createInformation()]})}};
var l={};Object.defineProperty(l,"__esModule",{value:!0});l.XmlEditor=class extends c.Component{createInformation(){return c.createElement("div",{ref:"wrapper","data-prezi-input":"",style:{width:"95%",height:"95%"}},c.createElement("div",{className:"buttons"},c.createElement(e.KoiWidgets.Button,{text:g.I18n.ts("Apply"),className:"normal regular",onClick:()=>this.props.callbacks.update(this.editor.getValue())}),c.createElement(e.KoiWidgets.Button,{text:g.I18n.ts("Reload xml"),className:"normal regular",
onClick:()=>this.props.callbacks.reload()})))}componentDidMount(){const a=document.createElement("DIV");a.style.height="100%";a.style.width="100%";a.style.backgroundColor="black";m.findDOMNode(this.refs.wrapper).appendChild(a);p.AceModule.create(a,(b)=>{b.setTheme("ace/theme/monokai");b.getSession().setMode("ace/mode/xml");b.getSession().setValue(n.formatXml(this.props.xml));this.editor=b;b=a.getElementsByTagName("textarea");for(let a=0;a<b.length;++a)b[a].tabIndex=-1});this.props.callbacks.reload()}shouldComponentUpdate(a){return this.props.xmlVersion!==
a.xmlVersion}componentDidUpdate(){this.editor&&this.editor.getSession().setValue(n.formatXml(this.props.xml))}render(){return c.createElement(e.KoiWidgets.Sidebar,{title:"XML Editor",className:f.Sidebar.XMLEDITOR_ID,onClose:this.props.callbacks.close,information:[this.createInformation()]})}};var f={};Object.defineProperty(f,"__esModule",{value:!0});(function(a){a.XMLEDITOR_ID="koi-sidebar-xml-editor";a.STYLEEDITOR_ID="koi-sidebar-style-editor";a.width=function(b){if(null==b)return 0;switch(b){case a.XMLEDITOR_ID:case a.STYLEEDITOR_ID:return 1104;
default:return 276}};a.StyleEditor=k.StyleEditorSidebar;a.XmlEditor=l.XmlEditor})(f.Sidebar||(f.Sidebar={}));h=f;d=document.createElement("style");d.textContent='.koi-sidebar-style-editor .sidebar-information-block{top:50px}.koi-sidebar-style-editor .buttons{display:-ms-flexbox;display:flex;display:-webkit-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.koi-sidebar-xml-editor .sidebar-information-block{top:50px}.koi-sidebar-xml-editor .buttons{display:-ms-flexbox;display:flex;display:-webkit-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.sidebar-content-item:hover{box-shadow:0 1px 5px 0 rgba(20,33,52,0.4)}.sidebar-selected-item{outline:2px solid #3181ff;outline-offset:-2px}.sidebar-dragged-item{opacity:.5}.sidebar-information-block .help-wrapper{-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;padding-bottom:24px;margin-right:24px;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;box-sizing:border-box}.sidebar-information-block .help-wrapper .help{font-size:13px;letter-spacing:.5px;line-height:18px;color:#152235;pointer-events:none;text-align:center;font-family:"RalewayMedium"}.sidebar-information-block .help-wrapper .help i{font-size:100px;margin:24px 0;line-height:100px;display:block;color:#475262}.sidebar-information-block .help-wrapper .help .hint{width:74%;margin:0 13% 24px}.sidebar-information-block .help-wrapper .help a{pointer-events:auto;color:#3181ff;text-decoration:none}.sidebar-information-block .help-wrapper .help a:hover{text-decoration:underline}\n';
document.body.appendChild(d);return h});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_koi_sidebar",["require","react","react-dom","react-transition-group","prezi.engine.dom","prezi.geometry","prezi_ace_editor","prezi_app_utils","prezi_bacon","prezi_cet_model","prezi_cet_model_editor","prezi_contextmenu","prezi_dragon","prezi_editor_commander","prezi_editor_commander_common","prezi_editor_controller","prezi_externalserviceprovider","prezi_featureswitcher","prezi_i18n","prezi_koi_widgets","prezi_logger","prezi_thumbnail_render","prezi_utils","prezi_widgets"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_koi_sidebar.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("react"),require("react-dom"),require("react-transition-group"),require("prezi.engine.dom"),require("prezi.geometry"),require("prezi_ace_editor"),require("prezi_app_utils"),require("prezi_bacon"),require("prezi_cet_model"),require("prezi_cet_model_editor"),require("prezi_contextmenu"),require("prezi_dragon"),require("prezi_editor_commander"),require("prezi_editor_commander_common"),require("prezi_editor_controller"),require("prezi_externalserviceprovider"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_koi_widgets"),require("prezi_logger"),require("prezi_thumbnail_render"),require("prezi_utils"),require("prezi_widgets"));}else{this["prezi_koi_sidebar"]=__factory(React,ReactDOM,ReactTransitionGroup,this["prezi.engine.dom"],this["prezi.geometry"],this["prezi_ace_editor"],this["prezi_app_utils"],this["prezi_bacon"],this["prezi_cet_model"],this["prezi_cet_model_editor"],this["prezi_contextmenu"],this["prezi_dragon"],this["prezi_editor_commander"],this["prezi_editor_commander_common"],this["prezi_editor_controller"],this["prezi_externalserviceprovider"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_koi_widgets"],this["prezi_logger"],this["prezi_thumbnail_render"],this["prezi_utils"],this["prezi_widgets"]);}}).call(this);
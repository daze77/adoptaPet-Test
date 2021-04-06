;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_extended_selection";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_i18n":dependencies[1],"prezi_logger":dependencies[2],"prezi_plugin_api":dependencies[3],"prezi_plugin_meta":dependencies[4],"prezi_utils":dependencies[5]}};})());};})(arguments);var moduleImpl=(function(){return module(function(b){var f=b.dependencies.prezi_cet_model_editor,l=b.dependencies.prezi_i18n,e=b.dependencies.prezi_plugin_api,m=b.dependencies.prezi_plugin_meta,k=b.dependencies.prezi_utils,h={};Object.defineProperty(h,"__esModule",{value:!0});var c=f.base.ObjectKind;h.j=class{init(a){this.w=a.declareUI({f:!1},(a,c)=>{const d=c.createAction({shortcut:this.pluginDescription.shortcuts.multiselect,enabled:!0,onExecute:(a)=>{this.i(a);this.pluginAccess.send(m.classicToNextOnboarding,"multiSelectWasUsed")}});
c.createAction({shortcut:this.pluginDescription.shortcuts.multiselectAlt,enabled:!0,onExecute:(a)=>this.i(a)});a.f&&c.createMenuItem({id:"ctx-menu-extended-selection",kind:e.MenuItemKind.context,weight:64,action:d,title:l.I18n.ts("Multiselect",{context:"Text of the context menu item, should not be too long"})})});a.onSelectionChange((a)=>{const d=new Set(a.groups.map((a)=>a.id)),b=this.session.document.read((b)=>0===a.allObjects.length?!1:a.allObjects.map((a)=>b.lookup.resolve(a)).every((a)=>!a.is(c.simpleObject)||
null==a.group||d.has(a.group.id)));this.w.setState({f:b})})}i(a){this.session.document.executeApiCommand(a,{name:"extended-selection",run:(d)=>{var b=this.session.selection.getReadonlySelectionInfo(d).allObjects;const e=b[0].createLayoutGroupWith(b.slice(1)).layoutBox;var g=b[0].parent;d=this.session.coverEdit.getMode(d);g=this.o(g,d).filter((a)=>this.v(e,a.layoutBox));const f=new Set(g.map((a)=>a.id)),h=(a)=>!a.is(c.simpleObject)||null==a.group||a.group.members.every((a)=>f.has(a.id));g=g.filter((a)=>
h(a));b=new Set([...b,...g]);this.session.selection.addToSelection(a,[...b])}})}v(a,b){return a.contains(b.topLeft)&&a.contains(b.topRight)&&a.contains(b.bottomLeft)&&a.contains(b.bottomRight)}o(a,b){a=this.u(a);switch(b.kind){case e.CoverEditModeKind.Advanced:return a.simpleChildren(f.base.ChildVisibilityKind.outside);case e.CoverEditModeKind.InsideAdvanced:return a.is(c.planetTopic)?[...a.simpleChildren(f.base.ChildVisibilityKind.inside),...a.topicChildren]:a.simpleChildren(f.base.ChildVisibilityKind.inside);
case e.CoverEditModeKind.None:return a.is(c.planetTopic)||a.is(c.overview)?[...a.contentChildren,...a.topicChildren]:a.is(c.page)?a.contentChildren:[];case e.CoverEditModeKind.Title:return[];default:throw k.Utils.assertNever(b);}}u(a){switch(a.kind){case c.planetTopic:case c.page:case c.overview:return a;case c.cover:case c.visual:case c.surface:case c.master:return a.parent;default:throw k.Utils.assertNever(a);}}};b={};Object.defineProperty(b,"__esModule",{value:!0});b.lazyModule={createPlugin(){return new h.j}};
return b});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_extended_selection",["require","prezi_cet_model_editor","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_extended_selection.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_utils"));}else{this["prezi_extended_selection"]=__factory(this["prezi_cet_model_editor"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_utils"]);}}).call(this);
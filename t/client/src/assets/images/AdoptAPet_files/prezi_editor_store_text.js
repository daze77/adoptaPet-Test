;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_editor_store_text";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[0],"prezi.text.model":dependencies[1],"prezi_bacon":dependencies[2],"prezi_utils":dependencies[3]}};})());};})(arguments);var moduleImpl=(function(){return module(function(c){var e=c.dependencies.prezi_utils,d={};Object.defineProperty(d,"__esModule",{value:!0});d.j=class{constructor(a,b,c){this.f=a;this.i=b;this.sessionId=c;if(null==a)throw Error("entityIds should not be null");}static empty(){return new d.j([],!1,0)}getEditingSessionId(){return this.sessionId}clone(){return new d.j(this.f,this.i,this.sessionId)}getEntityIds(){return this.f}isSingleSelection(){return 1===this.f.length}getSingleEntityId(){if(!this.isSingleSelection())throw Error("not single");
return this.f[0]}equals(a){return null!=a&&this.i===a.isEditing()&&e.Utils.arrayEquals(this.f,a.getEntityIds())}setEntityIds(a){const b=this.clone();b.f=a;this.isEditing()&&!e.Utils.arrayEquals(this.f,a)&&(b.i=!1,b.sessionId++);return b}isEditing(){return this.i}setEditing(a){if(this.i===a)return this;const b=this.clone();b.i=a;b.sessionId++;return b}};c={createEmptyTextSelectionState:function(){return d.j.empty()}};Object.defineProperty(c,"__esModule",{value:!0});(c.TextStoreModule||(c.TextStoreModule=
{})).forceModuleGeneration="forceModuleGeneration";return c});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_editor_store_text",["require","prezi.geometry","prezi.text.model","prezi_bacon","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_editor_store_text.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.geometry"),require("prezi.text.model"),require("prezi_bacon"),require("prezi_utils"));}else{this["prezi_editor_store_text"]=__factory(this["prezi.geometry"],this["prezi.text.model"],this["prezi_bacon"],this["prezi_utils"]);}}).call(this);
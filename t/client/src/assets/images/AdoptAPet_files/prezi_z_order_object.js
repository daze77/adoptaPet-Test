;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_z_order_object";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_i18n":dependencies[1],"prezi_logger":dependencies[2],"prezi_plugin_api":dependencies[3],"prezi_plugin_meta":dependencies[4],"prezi_utils":dependencies[5]}};})());};})(arguments);var moduleImpl=(function(){return module(function(h){var n=h.dependencies.prezi_plugin_api,l=h.dependencies.prezi_utils,m=h.dependencies.prezi_i18n,e=h.dependencies.prezi_cet_model_editor,p=h.dependencies.prezi_logger,k={};Object.defineProperty(k,"__esModule",{value:!0});var g;(function(a){a[a.i=0]="behind";a[a.f=1]="above";a[a.bottom=2]="bottom";a[a.top=3]="top"})(g||(g={}));k.v=class{constructor(){this.w=p.avro.Avro.createDefaultLogger()}init(a){const b=a.declareUI({o:!1},(a,b)=>{a.o&&(this.createMenuItem(b,"context-menu-bring-to-front",
"BRING_TO_FRONT",50,m.I18n.ts("Bring to front"),g.top),this.createMenuItem(b,"context-menu-send-to-back","SEND_TO_BACK",51,m.I18n.ts("Send to back"),g.bottom))});a.onSelectionChange((a)=>{this.session.document.read((c)=>{c=this.da(c,a.allObjects.map((a)=>a.id));b.setState({o:0<c.length})})})}createMenuItem(a,b,d,c,f,q){a.createMenuItem({kind:n.MenuItemKind.context,id:b,weight:c,title:f,enabled:!0,onClick:(a)=>{this.session.document.executeApiCommand(a,{name:f,run:(a)=>{var b=this.session.selection.getSelectionInfo(a).allObjects.filter((a)=>
!a.is(e.base.ObjectKind.zoomArea));null!=b&&0!==b.length&&(b.forEach((a)=>{this.w.logArrangeObjectLayers({arrangement_type:d,object_type:a,object_id:a.id})}),b=this.fa(b,q),this.order(a,b))}})}})}order(a,b){let d=a.lookup.object(b.ia),c=b.ga.map((b)=>{b=a.lookup.base(b);return null!=b&&b.is(e.base.ObjectKind.transformedObject)?b:null}).filter((a)=>null!=a);const f=(a)=>a.is(e.base.ObjectKind.overview)?[]:[a.parent,...f(a.parent)];c=c.filter((a)=>f(a).every((a)=>-1===c.indexOf(a)));switch(b.type){case g.i:c[0].moveBehind(d);
for(b=1;b<c.length;b++)c[b].moveAbove(c[b-1]);break;case g.f:c[c.length-1].moveAbove(d);for(b=c.length-2;0<=b;b--)c[b].moveBehind(c[b+1]);break;case g.bottom:c[0].moveToBottom();for(b=1;b<c.length;b++)c[b].moveAbove(c[b-1]);break;case g.top:c[c.length-1].moveToTop();for(b=c.length-2;0<=b;b--)c[b].moveBehind(c[b+1]);break;default:throw l.Utils.assertNever(b.type);}}da(a,b){return b.map((b)=>a.lookup.object(b)).filter((a)=>null!=a&&a.is(e.base.ObjectKind.transformedObject)&&!a.is(e.base.ObjectKind.zoomArea))}fa(a,
b){const d=this.getParentOrOverview(a[0]);if(this.ea(a))throw Error("Changing Z-Index of different kind of objects (cover, visual, content) at the same time is not implemented yet");a=this.sortInZOrder(a);let c=null,f=null;switch(b){case g.f:c=this.$(a,d);f=g.f;break;case g.i:c=this.aa(a,d);f=g.i;break;case g.top:c=this.ba(a,d);f=g.f;break;case g.bottom:c=this.ca(a,d);f=g.i;break;default:throw l.Utils.assertNever(b);}return{type:f,ga:a.map((a)=>a.id),ia:null!=c?c.id:null}}getChildren(a){let b=[];
a.is(e.base.ObjectKind.overview)||a.is(e.base.ObjectKind.planetTopic)?(b.push(...a.topicChildren),b.push(...a.simpleChildren(e.base.ChildVisibilityKind.all))):a.is(e.base.ObjectKind.stackTopic)?(b.push(...a.pageChildren.reduce((a,b)=>{a.push(...b.simpleChildren(e.base.ChildVisibilityKind.all));return a},[])),b.push(...a.simpleChildren(e.base.ChildVisibilityKind.all))):a.is(e.base.ObjectKind.page)&&b.push(...a.simpleChildren(e.base.ChildVisibilityKind.all));return b}u(a){return a.reduce((a,d)=>{a.push(d);
a.push(...this.u(this.getChildren(d)));return a},[])}ha(a,b,d){return a.map((a)=>(a.is(e.base.ObjectKind.topic)||a.is(e.base.ObjectKind.page))&&-1===d.indexOf(a.id)?(a=this.sortInZOrder(this.u([a])),b?a[a.length-1]:a[0]):a)}j(a,b,d){b=this.getChildren(b);b=this.ha(b,d,a.map((a)=>a.id));return this.sortInZOrder(b)}getParentOrOverview(a){return a.parent.is(e.base.ObjectKind.overview)||a.parent.is(e.base.ObjectKind.topic)||a.parent.is(e.base.ObjectKind.page)?a.parent:this.getParentOrOverview(a.parent)}$(a,
b){const d=this.j(a,b,!0);b=null;let c=0;for(let f=0;f<d.length;f++)if(a.some((a)=>a.id===d[f].id)&&c++,c===a.length){f+1<d.length&&(b=d[f+1]);break}return b}ba(a,b){a=this.j(a,b,!0);return a[a.length-1]}aa(a,b){b=this.j(a,b,!1);let d=null;for(let c of b)if(a.every((a)=>a.id!==c.id))d=c;else break;return d}ca(a,b){return this.j(a,b,!1)[0]}ea(a){return a.some((b)=>b.parent.kind!==a[0].parent.kind)}sortInZOrder(a){return a.sort((a,d)=>a.isAbove(d)?1:-1)}};h={};Object.defineProperty(h,"__esModule",{value:!0});
h.lazyModule={createPlugin(){return new k.v}};return h});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_z_order_object",["require","prezi_cet_model_editor","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_z_order_object.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_utils"));}else{this["prezi_z_order_object"]=__factory(this["prezi_cet_model_editor"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_utils"]);}}).call(this);
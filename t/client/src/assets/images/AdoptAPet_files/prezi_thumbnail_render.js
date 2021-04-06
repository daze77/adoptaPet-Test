;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_thumbnail_render";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.engine.dom":dependencies[0],"prezi.geometry":dependencies[1],"prezi_bacon":dependencies[2],"prezi_cet":dependencies[3],"prezi_cet_model":dependencies[4],"prezi_cet_model_editor":dependencies[5],"prezi_cet_renderer":dependencies[6],"prezi_featureswitcher":dependencies[7],"prezi_logger":dependencies[8],"prezi_nativeapitypes":dependencies[9],"prezi_playback":dependencies[10],"prezi_utils":dependencies[11]}};})());};})(arguments);var moduleImpl=(function(){return module(function(p){function E(a,b){const c=a.priority-b.priority;return 0!==c?c:a.jobOrder-b.jobOrder}var z=p.dependencies.prezi_bacon,A=p.dependencies.prezi_cet,n=p.dependencies.prezi_cet_model,g=p.dependencies.prezi_cet_model_editor,H=p.dependencies.prezi_featureswitcher,v=p.dependencies.prezi_utils,w=p.dependencies.prezi_logger,x={},F=this&&x.__awaiter||function(a,b,c,d){function e(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,k){function h(a){try{f(d.next(a))}catch(q){k(q)}}
function g(a){try{f(d["throw"](a))}catch(q){k(q)}}function f(a){a.done?c(a.value):e(a.value).then(h,g)}f((d=d.apply(a,b||[])).next())})};Object.defineProperty(x,"__esModule",{value:!0});x.PreviewGeneratorImpl=class{constructor(a){this.thumbnailServicePromise=a;this.logger=w.LoggerModule.getLoggerManager().createLogger("prezi_thumbnail_render.PreviewGeneratorImpl");this.dataUrlMatcher=/data:image\/png;base64,(.*)$/}generatePreviewData(){return F(this,void 0,void 0,function*(){const a=yield Promise.all([this.renderPathPosition(m.ThumbnailSize._272,
!0),this.renderPathPosition(m.ThumbnailSize._480,!1),this.renderPathPosition(m.ThumbnailSize._192,!0),this.renderPathPosition(m.ThumbnailSize._704,!0)]);return{data:a[0],data_1:a[1],data_2:a[2],data_3:a[3]}})}renderPathPosition(a,b){return F(this,void 0,void 0,function*(){try{const c=yield this.thumbnailServicePromise,d=yield(b?c.renderStartPoint({size:a,needHighQuality:!0}):c.renderOverview({size:a,needHighQuality:!0})).getThumbnail();return null==d?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAFACAYAAABkyK97AAAM60lEQ\u2026KBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECBwypQFB5c7dcQAAAABJRU5ErkJggg==":
this.toDataUrl(d)}catch(c){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAFACAYAAABkyK97AAAM60lEQ\u2026KBgAAH6CYJECBAgIAA+wECBAgQIBAICHCAbpIAAQIECBwypQFB5c7dcQAAAABJRU5ErkJggg=="}})}toDataUrl(a){let b="";try{b=a.canvas.toDataURL("image/png")}catch(c){throw this.logger.error({action:"read_image_data_error",object:"preview_image",trigger:"preview_save"}),"Could not convert thumbnail to data url";}if(a=b.match(this.dataUrlMatcher))return a[1];throw"Found invalid data url";}};var B={};Object.defineProperty(B,
"__esModule",{value:!0});B.RenderState=class{constructor(){this.cacheByPathElementId=new Map;this.cacheByTargetId=new Map}getByTargetRef(a,b){var c;return{dirty:!0,canvas:null===(c=this.cacheByTargetId.get(a.id))||void 0===c?void 0:c.get(b),highQuality:!1}}get(a){var b,c;let d=null===(c=null===(b=this.cacheByPathElementId.get(a.ref.id))||void 0===b?void 0:b.sizeMap)||void 0===c?void 0:c.get(a.size);return null==d||d.dirty&&!a.includeDirty||!d.highQuality&&a.needHighQuality?null:d}has(a){return null!=
this.get(a)}set(a,b,c,d,e,h){if(h||!this.has({ref:a,size:d,includeDirty:!1,needHighQuality:!0})){let k=this.cacheByPathElementId.get(a.id);null==k&&(k={parentRef:c,sizeMap:new Map},this.cacheByPathElementId.set(a.id,k));k.sizeMap.set(d,{canvas:e,highQuality:h,dirty:!1});a=this.cacheByTargetId.get(b.id);null==a&&(a=new Map,this.cacheByTargetId.set(b.id,a));a.set(d,e)}}makeDirty(a){a=a.sizeMap;for(const [b,c]of a.entries())a.set(b,Object.assign(Object.assign({},c),{dirty:!0}))}onDocumentChange(a,b){for(const [c,
d]of this.cacheByPathElementId.entries())null==a.lookup.pathElement(c)?this.cacheByPathElementId.delete(c):b(d.parentRef)&&this.makeDirty(d);for(const b of this.cacheByTargetId.keys())null==a.lookup.base(b)&&this.cacheByTargetId.delete(b)}clear(){this.cacheByPathElementId.clear();this.cacheByTargetId.clear()}};var u={};Object.defineProperty(u,"__esModule",{value:!0});var r;(function(a){a.all="All";a.zObjects="ZObjects"})(r=u.SceneChangeKind||(u.SceneChangeKind={}));class C{constructor(a,b,c){this.onChange=
c;b.onValue((b)=>{b=C.getSceneChange(a,b);b=C.getDirtyCheckFromSceneChange(a,b);c(b)});this.init()}init(){this.onChange(()=>!0)}static getSceneChange(a,b){let c=b.map((a)=>({isRemove:a.type===n.ChangeType.RemoveEntity,entity:a.entity,componentKey:a.componentKey}));for(b=new Set;0<c.length;){let d=c.pop(),{entity:e,isRemove:h}=d;if(null==e||null==a.getEntityById(e.getId())&&!h)continue;if(h)return{kind:r.all};let k=e;for(;null!=k&&!k.isDef(n.CetModel.ID.Z_OBJECT);)k=k.getOwner();null!=k&&b.add(k);
if(e.isDef(n.CetModel.ID.BACKGROUND)||e.isDef(n.CetModel.ID.BACKGROUND_LAYER)||d.componentKey===n.CetModel.ID.PREZI.ASPECT_RATIO)return{kind:r.all};if(e.isDef(n.CetModel.ID.HAS_TARGET)){if(h)return{kind:r.all};c.push({isRemove:!1,entity:a.getEntityById(e.get(n.CetModel.ID.HAS_TARGET.TARGET)),componentKey:null})}if(e.isDef(n.CetModel.ID.HAS_TARGETS)){if(h)return{kind:r.all};e.forEachRef(n.CetModel.ID.HAS_TARGETS.TARGETS,(a)=>{c.push({isRemove:!1,entity:a,componentKey:null})})}}return{kind:r.zObjects,
zObjects:b}}static getDirtyCheckFromSceneChange(a,b){if(b.kind===r.all)return()=>!0;var c=b.zObjects;if(0===c.size)return()=>!1;b=g.CetModelEditor.createTopicQuery(a);const d=A.Cet.createHierarchyQuery(a),e=new Set;for(const h of c.values()){c=b.getTopicsWhereReachable(h,A.VisualBackgroundReachLevel.ALL_VISUALS_AND_BACKGROUND);for(const h of c)e.add(h),g.CetModelEditor.isPage(h,a)&&(c=d.getParentId(a.getEntityById(h)),0===b.getChildTopics(c).indexOf(h)&&e.add(c))}return(a)=>e.has(a.id)}reset(){this.init()}}
u.SceneEventMapper=C;var l={};Object.defineProperty(l,"__esModule",{value:!0});let I=0;class G{constructor(a,b,c){this.size=a;this.needHighQuality=b;this.priority=c;this.jobOrder=I++;this.logger=w.LoggerModule.getLoggerManager().createLogger("prezi_thumbnail_render.ThumbnailRenderingJobImpl")}getParentRef(a){return(a.is(g.base.ObjectKind.pathParent)?a.target:a.is(g.base.ObjectKind.pathChild)?a.parent.target:a.backTo.target).ref}}class y extends G{constructor(a,b){super(a,b,b?2:3);this.deferredPromise=
v.Utils.deferredPromise();this.finished=!1}onDocumentChange(a,b){a=this.getPathElement(a,b);this.target=null==a?null:{pathElementRef:a.ref,parentRef:this.getParentRef(a),playbackPathPosition:b.get(a.id)}}getNextStep(a){if(this.finished)return{kind:f.NextStepKind.finished};if(null==this.target)return this.deferredPromise.resolve(null),{kind:f.NextStepKind.finished};a=a.get({includeDirty:!1,needHighQuality:this.needHighQuality,ref:this.target.pathElementRef,size:this.size});return null!=a?(this.deferredPromise.resolve({parentRef:this.target.parentRef,
canvas:a.canvas,pathElementRef:this.target.pathElementRef,playbackPathPosition:this.target.playbackPathPosition}),{kind:f.NextStepKind.finished}):{kind:f.NextStepKind.render,renderRequest:{size:this.size,needHighQuality:this.needHighQuality,job:this,ref:this.target.pathElementRef,parentRef:this.target.parentRef,shouldContinue:!0}}}getThumbnail(){return this.deferredPromise.promise}cancel(){this.finished=!0}}l.OverviewThumbnailRenderingJob=class extends y{getPathElement(a){return a.structuredPath.editorPath}};
l.StartPointThumbnailRenderingJob=class extends y{getPathElement(a){var b;return null!==(b=a.structuredPath.customStartPoint)&&void 0!==b?b:a.structuredPath.editorPath}};l.PathElementIdThumbnailRenderingJob=class extends y{constructor(a,b,c){super(a,b);this.pathElementId=c}getPathElement(a){return a.lookup.pathElement(this.pathElementId)}};l.PathElementThumbnailRenderingJob=class extends y{constructor(a,b,c){super(a,b);this.pathElementRef=c}getPathElement(a){return a.lookup.resolve(this.pathElementRef)}};
l.ThumbnailListRenderingJobImpl=class extends G{constructor(a,b,c,d){super(a,b,1);this.isRecurring=c;this.includePathElement=d;this.targets=[];this.thumbnailStream=z.Bacon.newBus()}onDocumentChange(a,b,c){const d=this.targets.filter(({pathElementRef:b})=>null!=a.lookup.resolve(b)),e=new Set(d.map((a)=>a.pathElementRef.id));this.targets=[...a.structuredPath.pathElementsInOrder.filter((a)=>!e.has(a.id)).map((a)=>({parentRef:this.getParentRef(a),pathElementRef:a.ref,playbackPathPosition:b.get(a.id)})).filter(({parentRef:a,
pathElementRef:b})=>c(a)&&this.includePathElement(b)).reverse(),...d]}getNextStep(a){if(this.finished)return{kind:f.NextStepKind.finished};for(;;){if(0===this.targets.length)return{kind:this.isRecurring?f.NextStepKind.idle:f.NextStepKind.finished};const b=this.targets[this.targets.length-1],c=a.get({includeDirty:!1,needHighQuality:this.needHighQuality,ref:b.pathElementRef,size:this.size});if(null==c)return{kind:f.NextStepKind.render,renderRequest:{size:this.size,needHighQuality:this.needHighQuality,
job:this,ref:b.pathElementRef,parentRef:b.parentRef,shouldContinue:!0}};this.thumbnailStream.push({parentRef:b.parentRef,canvas:c.canvas,pathElementRef:b.pathElementRef,playbackPathPosition:b.playbackPathPosition});this.targets.pop()}}cancel(){this.finished=!0}getThumbnailStream(){return this.thumbnailStream}};var f={},D=this&&f.__awaiter||function(a,b,c,d){function e(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,f){function h(a){try{k(d.next(a))}catch(q){f(q)}}
function g(a){try{k(d["throw"](a))}catch(q){f(q)}}function k(a){a.done?c(a.value):e(a.value).then(h,g)}k((d=d.apply(a,b||[])).next())})};Object.defineProperty(f,"__esModule",{value:!0});f.ThumbnailServiceImpl=class{constructor(a,b){this.session=a;this.isDocumentChanged=!1;this.sequencer=v.Utils.createSequencer();for(a=b;null!=a.getParentScene();)a=a.getParentScene();a=a.getImmediateChangeStream(A.ChangeEventKind.Entity);this.jobs=[];this.renderState=new B.RenderState;this.sceneEventMapper=new u.SceneEventMapper(b,
a,(a)=>{this.isDocumentChanged=!0;this.sequencer.addNext(()=>{this.session.document.read((b)=>{this.renderState.onDocumentChange(b,a);if(0<this.jobs.length){const c=g.CetModelEditor.createPathElementIdToPlaybackPathPositionMap(b);for(const d of this.jobs)d.onDocumentChange(b,c,a)}});this.startNextRender()})})}renderPathElementById(a,b){return this.guard(()=>{const c=new l.PathElementIdThumbnailRenderingJob(b.size,b.needHighQuality,a);this.addRenderingJob(c);return c})}getCachedCanvasForPathElement(a,
b){const c=this.renderState.get({ref:a.ref,size:b,needHighQuality:!1,includeDirty:!0});if(null!=c)return c;a=this.getTargetRef(a);return null!=a?this.renderState.getByTargetRef(a,b):null}renderPathElement(a,b){return this.guard(()=>{const c=new l.PathElementThumbnailRenderingJob(b.size,b.needHighQuality,a);this.addRenderingJob(c);return c})}renderOverview(a){return this.guard(()=>{const b=new l.OverviewThumbnailRenderingJob(a.size,a.needHighQuality);this.addRenderingJob(b);return b})}renderStartPoint(a){return this.guard(()=>
{const b=new l.StartPointThumbnailRenderingJob(a.size,a.needHighQuality);this.addRenderingJob(b);return b})}renderPath(a){return this.guard(()=>{const b=new l.ThumbnailListRenderingJobImpl(a.size,a.needHighQuality,!1,a.includePathElement);Promise.resolve().then(()=>this.addRenderingJob(b));return b})}monitorPath(a){return this.guard(()=>{const b=new l.ThumbnailListRenderingJobImpl(a.size,a.needHighQuality,!0,a.includePathElement);Promise.resolve().then(()=>this.addRenderingJob(b));return b})}handleDocumentChange_KILLME(){this.reset()}isIdleForTest(){return null==
this.currentRenderRequest&&this.jobs.every((a)=>a.getNextStep(this.renderState).kind===t.idle)}guard(a){try{return a()}catch(b){return{getThumbnail:()=>Promise.reject({error:b}),getThumbnailStream:()=>z.Bacon.later(0,z.Bacon.Error({error:b})),cancel:()=>{}}}}startNextRender(){if(null==this.currentRenderRequest){var a=this.jobs.map((a)=>({job:a,nextStep:a.getNextStep(this.renderState)}));this.jobs=a.filter(({nextStep:a})=>a.kind!==t.finished).map(({job:a})=>a);this.currentRenderRequest=a.reduce((a,
{job:c,nextStep:d})=>d.kind!==t.render?a:null==a||0>E(a.job,c)?d.renderRequest:a,null);null!=this.currentRenderRequest&&(()=>D(this,void 0,void 0,function*(){const a=this.currentRenderRequest;try{this.isDocumentChanged=!1;const b=yield this.render(a);if(!this.isDocumentChanged&&null!=b&&a===this.currentRenderRequest){if(H.isActive("js-for-test-tint-thumbnails")){const a=b.snapshotResult.canvas,c=a.getContext("2d");c.fillStyle=`rgba(${Math.floor(256*Math.random())}, ${Math.floor(256*Math.random())}, ${Math.floor(256*
Math.random())}, 0.5)`;c.fillRect(0,0,a.width,a.height)}this.renderState.set(this.currentRenderRequest.ref,b.targetRef,this.currentRenderRequest.parentRef,this.currentRenderRequest.size,b.snapshotResult.canvas,this.currentRenderRequest.needHighQuality&&!b.snapshotResult.wasCancelled)}}finally{a===this.currentRenderRequest&&(this.currentRenderRequest=null,this.startNextRender())}}))().catch(()=>{})}}getTargetRef(a){switch(a.kind){case g.base.ObjectKind.backToParent:return a.backTo.target.ref;case g.base.ObjectKind.fadeIn:case g.base.ObjectKind.fadeOut:const b=
a.groupTargets;if(0<b.length)return b[0].parent.ref;a=a.targets;return 0<a.length?a[0].parent.ref:null;case g.base.ObjectKind.zoom:case g.base.ObjectKind.visitPage:case g.base.ObjectKind.visitPlanet:case g.base.ObjectKind.visitStack:case g.base.ObjectKind.visitOverview:return a.target.ref;default:v.Utils.assertNever(a)}}addRenderingJob(a){this.session.document.read((b)=>{const c=g.CetModelEditor.createPathElementIdToPlaybackPathPositionMap(b);a.onDocumentChange(b,c,()=>!0)});const b=a.getNextStep(this.renderState);
b.kind!==t.finished&&this.jobs.push(a);b.kind===t.render&&(null==this.currentRenderRequest?this.startNextRender():0>E(this.currentRenderRequest.job,a)&&(this.currentRenderRequest.shouldContinue=!1))}render(a){return D(this,void 0,void 0,function*(){try{return this.session.document.read((b)=>D(this,void 0,void 0,function*(){var c=b.lookup.resolve(a.ref);const d=a.size,e=a.size/(b.aspectRatio.width/b.aspectRatio.height);if(null==c)return null;const f=this.getTargetRef(c);c=yield this.session.snapshotPathElement(b,
c,{width:d,height:e},a.needHighQuality,()=>a.shouldContinue);return{targetRef:f,snapshotResult:c}}))}catch(b){throw w.LoggerModule.logException(w.LoggerModule.getLoggerManager().createLogger("prezi_thumbnail_render.ThumbnailRenderer"),"canvas","render",b),b;}})}reset(){this.sceneEventMapper.reset();this.renderState.clear();null!=this.currentRenderRequest&&(this.currentRenderRequest.shouldContinue=!1);this.currentRenderRequest=null}};var t;(function(a){a.render="render";a.finished="finished";a.idle=
"idle"})(t=f.NextStepKind||(f.NextStepKind={}));var m={};Object.defineProperty(m,"__esModule",{value:!0});(function(a){a[a._176=176]="_176";a[a._192=192]="_192";a[a._224=224]="_224";a[a._272=272]="_272";a[a._480=480]="_480";a[a._640=640]="_640";a[a._704=704]="_704";a[a._1920=1920]="_1920"})(m.ThumbnailSize||(m.ThumbnailSize={}));(function(a){function b(){return c.getValue()}const c=v.Utils.createSingletonAccess((a,b)=>new f.ThumbnailServiceImpl(a,b));a.createThumbnailService=function(a,b){return c.create(a,
b)};a.getThumbnailService=b;a.createPreviewGenerator=function(){return new x.PreviewGeneratorImpl(b())}})(m.ThumbnailRenderModule||(m.ThumbnailRenderModule={}));return m});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_thumbnail_render",["require","prezi.engine.dom","prezi.geometry","prezi_bacon","prezi_cet","prezi_cet_model","prezi_cet_model_editor","prezi_cet_renderer","prezi_featureswitcher","prezi_logger","prezi_nativeapitypes","prezi_playback","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_thumbnail_render.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.engine.dom"),require("prezi.geometry"),require("prezi_bacon"),require("prezi_cet"),require("prezi_cet_model"),require("prezi_cet_model_editor"),require("prezi_cet_renderer"),require("prezi_featureswitcher"),require("prezi_logger"),require("prezi_nativeapitypes"),require("prezi_playback"),require("prezi_utils"));}else{this["prezi_thumbnail_render"]=__factory(this["prezi.engine.dom"],this["prezi.geometry"],this["prezi_bacon"],this["prezi_cet"],this["prezi_cet_model"],this["prezi_cet_model_editor"],this["prezi_cet_renderer"],this["prezi_featureswitcher"],this["prezi_logger"],this["prezi_nativeapitypes"],this["prezi_playback"],this["prezi_utils"]);}}).call(this);
;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_path_audio";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet":dependencies[0],"prezi_cet_model":dependencies[1],"prezi_cet_model_editor":dependencies[2],"prezi_featureswitcher":dependencies[3],"prezi_i18n":dependencies[4],"prezi_logger":dependencies[5],"prezi_plugin_api":dependencies[6],"prezi_plugin_meta":dependencies[7],"prezi_sound_playback":dependencies[8],"prezi_utils":dependencies[9]}};})());};})(arguments);var moduleImpl=(function(){return module(function(g){var e=g.dependencies.prezi_plugin_api,f=g.dependencies.prezi_i18n,k=g.dependencies.prezi_cet_model_editor,t=g.dependencies.prezi_utils,u=g.dependencies.prezi_logger,v=g.dependencies.prezi_featureswitcher,l={},q=this&&l.__awaiter||function(c,b,d,a){function e(a){return a instanceof d?a:new d(function(b){b(a)})}return new (d||(d=Promise))(function(d,r){function f(b){try{m(a.next(b))}catch(p){r(p)}}function w(b){try{m(a["throw"](b))}catch(p){r(p)}}function m(a){a.done?d(a.value):e(a.value).then(f,
w)}m((a=a.apply(c,b||[])).next())})};Object.defineProperty(l,"__esModule",{value:!0});var h=k.base.ObjectKind;l.PathAudioPlugin=class{init(c){this.logger=u.LoggerModule.getLoggerManager().createLogger("PathAudioPlugin");this.uiRoot=c.declareUI({isSidebarOpen:!1,currentPosition:null,backgroundAudio:null,behindPaywall:!0},(b,d)=>{d.createSidebar((a)=>{let d=[],c=[],g=[];const n=b.behindPaywall||v.isActive("js-path-audio-force-paywall");n&&(d=[a.sectionHeader({content:f.I18n.ts("Ready to unlock more features?")}),
a.label(f.I18n.ts("Get access to audio upload and much more by upgrading your Prezi license.")),a.button(e.ButtonSize.Small,e.ButtonAlign.Start,(a)=>[a.button({id:"audio-upgrade-license",color:e.ButtonColor.Blue,content:{text:f.I18n.ts("Upgrade now")},onClick:()=>{this.uiRoot.dialog.showBuiltIn(e.BuiltinDialog.upgradeLicenseInsertAudio)}})]),a.separator()]);null!=b.currentPosition&&b.currentPosition.ref.kind===h.visitOverview&&(c=[a.sectionHeader({content:f.I18n.ts("Background Audio")}),a.label(f.I18n.ts("Play through entire presentation"))],
null!=b.backgroundAudio?(c.push(a.audio({id:"background-audio",audioBuffer:b.backgroundAudio})),c.push(a.button(e.ButtonSize.Small,e.ButtonAlign.Start,(a)=>[a.upload({color:e.ButtonColor.Gray,id:"replace-background-audio",content:{icon:e.IconSmallId.Replay,text:f.I18n.ts("Replace")},fileFilter:{allowAudio:!0},onFileSelected:(a,{file:b})=>{this.uploadAudio(a,b,null,!1)}}),a.button({id:"delete-background-audio",color:e.ButtonColor.Gray,content:{icon:e.IconSmallId.Trash},onClick:this.deleteAudio(b.currentPosition,
!0)})]))):c.push(a.button(e.ButtonSize.Large,e.ButtonAlign.Start,(a)=>[a.upload({color:e.ButtonColor.Blue,id:"upload-background-audio",content:{text:f.I18n.ts("Upload")},disabled:n,fileFilter:{allowAudio:!0},onFileSelected:(a,{file:b})=>{this.uploadAudio(a,b,null,!1)}})])),c.push(a.separator()));null!=b.currentPosition&&(g=[a.sectionHeader({content:null==b.currentPosition.title?f.I18n.ts("Step Audio"):f.I18n.tsFormatKeys("Step Audio - {pathStepName}",{pathStepName:b.currentPosition.title})}),a.label(f.I18n.ts("Play only when viewing this step"))],
null!=b.currentPosition.audio?(g.push(a.audio({id:"step-audio",audioBuffer:b.currentPosition.audio})),g.push(a.button(e.ButtonSize.Small,e.ButtonAlign.Start,(a)=>[a.upload({color:e.ButtonColor.Gray,id:"replace-step-audio",content:{icon:e.IconSmallId.Replay,text:f.I18n.ts("Replace")},fileFilter:{allowAudio:!0},onFileSelected:(a,{file:c})=>{this.uploadAudio(a,c,b.currentPosition,!0)}}),a.button({id:"delete-step-audio",color:e.ButtonColor.Gray,content:{icon:e.IconSmallId.Trash},onClick:this.deleteAudio(b.currentPosition,
!1)})]))):g.push(a.button(e.ButtonSize.Large,e.ButtonAlign.Start,(a)=>[a.upload({color:e.ButtonColor.Blue,id:"upload-step-audio",content:{text:f.I18n.ts("Upload")},disabled:n,fileFilter:{allowAudio:!0},onFileSelected:(a,{file:c})=>{this.uploadAudio(a,c,b.currentPosition,!0)}})])),g.push(a.separator()));a=[...d,...c,...g];return{id:"sidebar-path-audio",root:{title:f.I18n.ts("Path Audio"),content:a,footer:null},onOpen:()=>{this.uiRoot.setState({isSidebarOpen:!0})},onClose:()=>{this.uiRoot.setState({isSidebarOpen:!1})}}});
d.createMenuItem({kind:e.MenuItemKind.largeButton,enabled:!0,onClick:()=>q(this,void 0,void 0,function*(){const a=!b.isSidebarOpen;this.uiRoot.sidebar.toggle("sidebar-path-audio");a&&this.session.document.read((a)=>this.updateState(a))}),parent:e.TabMenuId.Insert,icon:e.IconSmallId.Audio,weight:53,id:"insert-path-audio-button",title:f.I18n.ts("Audio")})});c.onLicenseChange((b)=>{this.uiRoot.setState({behindPaywall:!b.pitchAudio})});c.onCurrentTopicChange(()=>{this.session.document.read((b)=>{const c=
this.session.insertTarget.getSimpleObjectParentReader(b);if(null!=c){var a=null;if(c.is(k.base.ObjectKind.overview))a=b.structuredPath.editorPath;else for(let d of b.structuredPath.pathElementsInOrder)if((d.is(k.base.ObjectKind.visitPlanet)||d.is(k.base.ObjectKind.visitPage))&&d.target.id===c.id){a=d;break}this.updateState(b,a)}})});c.onDocumentChange(()=>{null!=this.uiRoot.getState().currentPosition&&this.session.document.read((b)=>{this.updateState(b)})})}updateState(c,b){return q(this,void 0,void 0,
function*(){var d=null==b?c.lookup.resolve(this.uiRoot.getState().currentPosition.ref):b;if(null!=d){let b=this.calculateTitle(d);var a=d.kind===h.visitOverview?c.structuredPath.backgroundAudio:null,e=d.ref;d=yield this.getBufferFromAudioAsset(d.audio);a=yield this.getBufferFromAudioAsset(a);this.uiRoot.setState({currentPosition:{ref:e,audio:d,title:b},backgroundAudio:a})}})}calculateTitle(c){if(c.is(h.zoom))return f.I18n.ts("Zoom area");c=c.is(h.backToParent)?c.backTo.target:c.target;return c.is(h.overview)?
f.I18n.ts("Overview"):k.CetModelEditor.calculatePageOrTopicTitle(c)}getBufferFromAudioAsset(c){return q(this,void 0,void 0,function*(){if(null!=c)try{return yield this.session.document.progressiveAssetManager.downloadAudioAsset(c)}catch(b){return null}else return null})}deleteAudio(c,b){return(d)=>{this.session.document.executeApiCommand(d,{name:"delete-audio",run:(a)=>{if(b)a.structuredPath.backgroundAudio=null;else{const b=a.lookup.resolve(c.ref);null!=b&&(b.audio=null)}this.updateState(a)}})}}uploadAudio(c,
b,d,a){c.doAsync(this.session.document.progressiveAssetManager.uploadAudio(b).finished,(b,c)=>{b.isValid()&&this.session.document.executeApiCommand(b,{name:"upload-path-audio",run:(b)=>{if(a){const e=b.lookup.resolve(d.ref);null!=e&&a&&(e.audio=c)}else b.structuredPath.backgroundAudio=c;this.updateState(b)}})})}processMessage(c){switch(c.kind){case "openSidebarFromLeftSidebar":this.session.document.read((b)=>{const d=b.lookup.pathElement(c.pathElementId);d.is(h.zoom)||d.is(h.visitOverview)||d.is(h.visitPage)||
d.is(h.visitPlanet)||d.is(h.backToParent)?this.updateState(b,d).then(()=>{this.uiRoot.getState().isSidebarOpen||this.uiRoot.sidebar.open("sidebar-path-audio")}):this.logger.error({action:"path audio message processing",object:"PathAudioPlugin",trigger:"machine",payload:{error:`Invalid object kind ${d.kind}`}})});break;default:throw t.Utils.assertNever(c.kind,"Unknown PathAudioMessageKind: "+c.kind);}}};g={};Object.defineProperty(g,"__esModule",{value:!0});g.lazyModule={createPlugin(){return new l.PathAudioPlugin}};
return g});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_path_audio",["require","prezi_cet","prezi_cet_model","prezi_cet_model_editor","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_sound_playback","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_path_audio.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet"),require("prezi_cet_model"),require("prezi_cet_model_editor"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_sound_playback"),require("prezi_utils"));}else{this["prezi_path_audio"]=__factory(this["prezi_cet"],this["prezi_cet_model"],this["prezi_cet_model_editor"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_sound_playback"],this["prezi_utils"]);}}).call(this);
;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_service_data";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.engine.dom":dependencies[0],"prezi_bacon":dependencies[1],"prezi_editor_error":dependencies[2],"prezi_editor_store_ui":dependencies[3],"prezi_externalserviceprovider":dependencies[4],"prezi_featureswitcher":dependencies[5],"prezi_logger":dependencies[6],"prezi_nativeapitypes":dependencies[7]}};})());};})(arguments);var moduleImpl=(function(){return module(function(f){var k=f.dependencies["prezi.engine.dom"],d=f.dependencies.prezi_bacon,u=f.dependencies.prezi_editor_error,t=f.dependencies.prezi_externalserviceprovider,v=f.dependencies.prezi_featureswitcher,p=f.dependencies.prezi_logger,l=f.dependencies.prezi_nativeapitypes,h={};Object.defineProperty(h,"__esModule",{value:!0});h.u=class{constructor(a,b){this.m=a;this.ca=b;this.logger=p.LoggerModule.getLoggerManager().createLogger("PreziLoaderLogger");this.L=d.Bacon.newBus();this.f=null}getLoaderStream(){return this.L}j(a,
b){a(b);this.L.push(b)}M(a,b){this.f=b;b=this.f.getMetadata();h.u.$(b);this.j(a,{type:c.PreziLoaderEventType.MetaDataLoaded,payload:b})}K(a,b,e){this.j(a,{type:c.PreziLoaderEventType.StartLoading});this.m.loadPrezi(b,(b)=>{this.M(a,b);e()},(b)=>{this.j(a,{type:c.PreziLoaderEventType.MetaDataLoadError,payload:{errorCase:u.EditorErrorCase.METADATA_LOAD_ERROR,parameters:{message:b}}})})}loadPreziMetaData(a){let b=d.Bacon.newBus();this.K((a)=>{b.plug(d.Bacon.later(0,a))},a,()=>{});return b}loadPrezi(a){let b=
d.Bacon.newBus(),e=(a)=>{b.plug(d.Bacon.later(0,a))};this.K(e,a,()=>{this.f.loadPreziXml((a)=>{this.aa(e,a)},(a)=>{this.j(e,{type:c.PreziLoaderEventType.PreziXMLLoadError,payload:a})})});return b}savePreview(a){if(null==this.f)throw Error("prezi is not created yet");const b=d.Bacon.newBus();this.f.savePreviewImages(a,(a)=>{b.push(a)});return b}saveSession(a){if(null==this.f)throw Error("prezi is not created yet");const b=k.DOM.saveXml(a.getPrezi());a=a.getSessionState();const c=d.Bacon.newBus();this.f.savePreziXml(b,
a,(a)=>{c.push({saveResult:a,storageRevision:null})});return c}savePreviewToLocalStore(a){if(null==this.f)throw Error("prezi is not created yet");const b=d.Bacon.newBus();this.f.savePreviewImagesToLocalStore(a,(a)=>{b.push(a)});return b}saveSessionToLocalStore(a){if(null==this.f)throw Error("prezi is not created yet");const b=k.DOM.saveXml(a.getPrezi());a=a.getSessionState();const c=d.Bacon.newBus();this.f.savePreziXmlToLocalStore(b,a,(a)=>{c.push(a)});return c}savePreziTitle(a){if(null==this.f)throw Error("prezi is not created yet");
return this.f.savePreziTitle(a)}savePreziLogoType(a){if(null==this.f)throw Error("prezi is not created yet");return this.f.savePreziLogoType(a)}createPreziInLocalStore(a,b,c,g,d){return this.J(a,b,c,g,d,(a,b,c,e,g,d)=>{this.m.createPreziInLocalStore(a,b,c,e,g,d)},(a)=>this.saveSessionToLocalStore(a).map((a)=>({saveResult:a,storageRevision:null})))}createPrezi(a,b,c,g,d){return this.J(a,b,c,g,d,(a,b,c,e,d,g)=>{this.m.createPrezi(a,b,c,e,d,g)},(a)=>this.saveSession(a))}J(a,b,e,g,f,h,n){const m=d.Bacon.newBus();
h(a,b,g,f,(a)=>{this.M(()=>{},a);const b=k.DOM.createOfflineSession(e,()=>{},null);a=n(b);a.onError(()=>m.push({result:l.SaveResult.Error,session:null,metadata:null}));a.onValue((a)=>{const c=a.saveResult;switch(a.saveResult){case l.SaveResult.Error:case l.SaveResult.ErrorExternalEdit:m.push({result:c,session:null,metadata:null});this.logger.error({action:"create_error",object:"document",trigger:"machine"});break;case l.SaveResult.Success:m.push({result:c,session:b,metadata:this.f.getMetadata()});
let d;(a=e.getTemplateInfo())&&(d={template_name:a.getBaseId(),theme_name:a.getThemeId()});p.LoggerModule.getLoggerManager().setPreziId(this.f.getMetadata().oid);this.logger.info({action:"create_success",object:"document",trigger:"machine",payload:d});p.avro.Avro.createDefaultLogger().logCreatedFromTemplate({template_name:a?a.getBaseId():"unknown"})}})},(a)=>{this.j(()=>{},{type:c.PreziLoaderEventType.PreziCreationError,payload:a});this.ca.createPreziError(this.logger,"PreziLoader",a);m.push({result:l.SaveResult.Error,
session:null,metadata:null})});return m}static $(a){"privacy"in a||(a.privacy=t.PreziPrivacy.Public);"logo_type"in a||(a.logo_type=t.PreziLogoType.Watermark)}aa(a,b){var e=b.preziXml;const d=e.match(/<new-prezi( )?\/>/),f=e.match(/<zuiprezi>/);d?this.j(a,{type:c.PreziLoaderEventType.NewPrezi}):!f||v.isActive("js-allow-convert-core-prezi")?(e=k.DOM.loadXml(e),b=k.DOM.createOfflineSession(e,()=>{},b.locallyStoredSessionState),this.j(a,{type:c.PreziLoaderEventType.PdomSessionCreated,payload:b})):(this.logger.error({action:"illegal_conversion",
object:"prezi_loader",trigger:"machine"}),this.j(a,{type:c.PreziLoaderEventType.PreziConversionNotAllowedError}))}getPreziProvider(){return this.f}};var n={};Object.defineProperty(n,"__esModule",{value:!0});n.O=class{static createPreziLoader(a,b){return new h.u(a,b)}};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.U=class{constructor(a){this.da=a}loadLicense(){return new Promise((a)=>{this.da.loadUserLicense((b)=>a(this.getUserLicenseInformation(b)))})}getUserLicenseInformation(a){const b=
a.pitch.feature_set;return{analyticsEnabled:b.pitch_analytics,editChart:b.pitch_edit_charts,isDefaultLicense:!1,isTeam:!a.pitch.is_single_user,licenseTypeOid:a.pitch.license_type_oid,pitchAudio:b.pitch_audio,pitchBackgroundImageIntegration:b.pitch_background_image_integration,pitchComment:b.pitch_comment,pitchCreate:b.pitch_create,pitchCustomSchemes:b.pitch_custom_schemes,pitchExtraStoryblocks:b.pitch_extra_storyblocks,pitchIconIntegration:b.pitch_icon_integration,pitchImageIntegration:b.pitch_image_integration,
pitchPrivacyPrivate:b.pitch_privacy_private,presenterView:b.pitch_presenter_view,remotePresent:b.pitch_remote_present,unlimitedViewlinks:b.pitch_unlimited_viewlinks,videoUpload:b.pitch_video_upload,ownPreziLogo:b.own_prezi_logo,noWatermark:b.pitch_no_watermark,customLogo:b.pitch_custom_logo,hasCoreLicense:null!=a.core,isPaidLicense:b.pitch_privacy_private}}};var r={};Object.defineProperty(r,"__esModule",{value:!0});r.W=class{constructor(a){null!=a&&(this.N=a,this.o=d.Bacon.newBus(),this.i=this.ba(),
this.w=d.Bacon.newBus(),this.v=this.w.toProperty(this.i),this.v.onValue(()=>{}),this.reloadUserSettings())}ba(){const a={desktop_full:!1,registration_date:void 0,boolean_settings:{}};a.boolean_settings[c.UserSettingBooleanKeys.JS_PATH_STEP_ANIMATION_ONBOARDING_SHOWN]=!1;return a}reloadUserSettings(){this.N.loadUserSettings().then((a)=>{null!=a.desktop_full&&(this.i.desktop_full=a.desktop_full);null!=a.registration_date&&(this.i.registration_date=a.registration_date);if(null!=a.boolean_settings){this.i.boolean_settings=
a.boolean_settings;for(let a of Object.keys(this.i.boolean_settings))this.o.push({key:a,value:this.i.boolean_settings[a]})}this.w.push(this.i)})}getJSPathStepAnimationOnboardingShown(){return this.getBoolean(c.UserSettingBooleanKeys.JS_PATH_STEP_ANIMATION_ONBOARDING_SHOWN)}setJSPathStepAnimationOnboardingShown(){this.setBoolean(c.UserSettingBooleanKeys.JS_PATH_STEP_ANIMATION_ONBOARDING_SHOWN,!0)}getRemotePresentationOnboardingShown(){return this.getBoolean(c.UserSettingBooleanKeys.REMOTE_PRESENTATION_ONBOARDING_SHOWN)}setRemotePresentationOnboardingShown(){this.setBoolean(c.UserSettingBooleanKeys.REMOTE_PRESENTATION_ONBOARDING_SHOWN,
!0)}getConceptOnboardingShown(){return this.getBoolean(c.UserSettingBooleanKeys.CONCEPT_ONBOARDING_SHOWN)}setConceptOnboardingShown(){this.setBoolean(c.UserSettingBooleanKeys.CONCEPT_ONBOARDING_SHOWN,!0)}getMultiProductPitchOnboardingShown(){return this.getBoolean(c.UserSettingBooleanKeys.MULTI_PRODUCT_PITCH_ONBOARDING_SHOWN)}setMultiProductPitchOnboardingShown(){return this.setBoolean(c.UserSettingBooleanKeys.MULTI_PRODUCT_PITCH_ONBOARDING_SHOWN,!0)}getMultiProductForceShowPitchOnboarding(){return this.getBoolean(c.UserSettingBooleanKeys.MULTI_PRODUCT_FORCE_SHOW_PITCH_ONBOARDING)}setMultiProductForceShowPitchOnboarding(a=
!1){return this.setBoolean(c.UserSettingBooleanKeys.MULTI_PRODUCT_FORCE_SHOW_PITCH_ONBOARDING,a)}getAudioOnboardingUploadShown(){return this.getBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_UPLOAD_SHOWN)}setAudioOnboardingUploadShown(){this.setBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_UPLOAD_SHOWN,!0)}getAudioOnboardingPlayShown(){return this.getBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_PLAY_SHOWN)}setAudioOnboardingPlayShown(){this.setBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_PLAY_SHOWN,
!0)}getAudioOnboardingPresentShown(){return this.getBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_PRESENT_SHOWN)}setAudioOnboardingPresentShown(){this.setBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_PRESENT_SHOWN,!0)}getAudioOnboardingMuteShown(){return this.getBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_MUTE_SHOWN)}setAudioOnboardingMuteShown(){this.setBoolean(c.UserSettingBooleanKeys.AUDIO_ONBOARDING_MUTE_SHOWN,!0)}getUserSettingsStream(){return this.o}getAllUserSettingsStream(){return this.v}getBoolean(a){return this.containsKey(a)?
this.i.boolean_settings[a]:!1}setBoolean(a,b){const c=this.getBoolean(a);c!==b&&(this.i.boolean_settings[a]=b,this.N.setUserSetting(a,b).then((d)=>{d?this.o.push({key:a,value:b}):this.i.boolean_settings[a]=c}))}containsKey(a){return a in this.i.boolean_settings}};var c={};Object.defineProperty(c,"__esModule",{value:!0});(function(a){a[a.StartLoading=0]="StartLoading";a[a.MetaDataLoadError=1]="MetaDataLoadError";a[a.MetaDataLoaded=2]="MetaDataLoaded";a[a.PreziXMLLoadError=3]="PreziXMLLoadError";a[a.PreziLoaded=
4]="PreziLoaded";a[a.NewPrezi=5]="NewPrezi";a[a.AssetLoadError=6]="AssetLoadError";a[a.AllAssetsLoaded=7]="AllAssetsLoaded";a[a.MetaDataUpdated=8]="MetaDataUpdated";a[a.PreziCreationError=9]="PreziCreationError";a[a.TemplateChooserLoaded=10]="TemplateChooserLoaded";a[a.EditorStartEventForPrezipage=11]="EditorStartEventForPrezipage";a[a.PreziConversionNotAllowedError=15]="PreziConversionNotAllowedError";a[a.PdomSessionCreated=16]="PdomSessionCreated";a[a.PdomSessionCreationError=17]="PdomSessionCreationError";
a[a.EditorInit=18]="EditorInit";a[a.ConversionStarted=19]="ConversionStarted";a[a.CetSessionCreated=20]="CetSessionCreated";a[a.PreziConversionFailedError=21]="PreziConversionFailedError";a[a.FeaturePreviewModeWithSaveDisabled=22]="FeaturePreviewModeWithSaveDisabled"})(c.PreziLoaderEventType||(c.PreziLoaderEventType={}));(function(a){a.JS_PATH_STEP_ANIMATION_ONBOARDING_SHOWN="JS_PATH_STEP_ANIMATION_ONBOARDING_SHOWN";a.REMOTE_PRESENTATION_ONBOARDING_SHOWN="REMOTE_PRESENTATION_ONBOARDING_SHOWN";a.CONCEPT_ONBOARDING_SHOWN=
"CONCEPT_ONBOARDING_SHOWN";a.MULTI_PRODUCT_FORCE_SHOW_PITCH_ONBOARDING="MULTI_PRODUCT_FORCE_SHOW_PITCH_ONBOARDING";a.MULTI_PRODUCT_PITCH_ONBOARDING_SHOWN="MULTI_PRODUCT_PITCH_ONBOARDING_SHOWN";a.AUDIO_ONBOARDING_UPLOAD_SHOWN="AUDIO_ONBOARDING_UPLOAD_SHOWN";a.AUDIO_ONBOARDING_PLAY_SHOWN="AUDIO_ONBOARDING_PLAY_SHOWN";a.AUDIO_ONBOARDING_MUTE_SHOWN="AUDIO_ONBOARDING_MUTE_SHOWN";a.AUDIO_ONBOARDING_PRESENT_SHOWN="AUDIO_ONBOARDING_PRESENT_SHOWN";a.EDITOR_SEEN="EDITOR_SEEN";a.BROWSER_NOTIFICATION_PERMISSION_DENIED=
"BROWSER_NOTIFICATION_PERMISSION_DENIED";a.JS_EDITOR_PPT_ONBOARDING="JS_EDITOR_PPT_ONBOARDING";a.JS_EDITOR_CONTENT_LAYOUT_ONBOARDING="JS_EDITOR_CONTENT_LAYOUT_ONBOARDING";a.JS_EDITOR_VIDEO_ONBOARDING_SHOWN="JS_EDITOR_VIDEO_ONBOARDING_SHOWN";a.STORYBLOCKS_TOPIC_ONBOARDING_SHOWN="STORYBLOCKS_TOPIC_ONBOARDING_SHOWN";a.MY_LIBRARY_FAVORITES_ONBOARDING_SHOWN="MY_LIBRARY_FAVORITES_ONBOARDING_SHOWN";a.MY_LIBRARY_NON_NATIVE_ONBOARDING_SHOWN="MY_LIBRARY_NON_NATIVE_ONBOARDING_SHOWN";a.TOPIC_GROUPING_ONBOARDING_SHOWN=
"TOPIC_GROUPING_ONBOARDING_SHOWN";a.JS_EDITOR_PREZI_VIDEO_ONBOARDING="JS_EDITOR_PREZI_VIDEO_ONBOARDING";a.JS_EDITOR_CLASSIC_TO_NEXT_ONBOARDING_FOR_CLASSIC_SHOWN="JS_EDITOR_CLASSIC_TO_NEXT_ONBOARDING_FOR_CLASSIC_SHOWN";a.JS_EDITOR_CLASSIC_TO_NEXT_ONBOARDING_FOR_NEXT_SHOWN="JS_EDITOR_CLASSIC_TO_NEXT_ONBOARDING_FOR_NEXT_SHOWN"})(c.UserSettingBooleanKeys||(c.UserSettingBooleanKeys={}));(function(a){let b,c;a.createPreziLoader=function(a,b){return n.O.createPreziLoader(a,b)};a.createUserSettingsStore=
function(a){b||(b=new r.W(a));return b};a.createUserLicenseStore=function(a){c||(c=new q.U(a));return c}})(c.DataServiceModule||(c.DataServiceModule={}));return c});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_service_data",["require","prezi.engine.dom","prezi_bacon","prezi_editor_error","prezi_editor_store_ui","prezi_externalserviceprovider","prezi_featureswitcher","prezi_logger","prezi_nativeapitypes"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_service_data.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.engine.dom"),require("prezi_bacon"),require("prezi_editor_error"),require("prezi_editor_store_ui"),require("prezi_externalserviceprovider"),require("prezi_featureswitcher"),require("prezi_logger"),require("prezi_nativeapitypes"));}else{this["prezi_service_data"]=__factory(this["prezi.engine.dom"],this["prezi_bacon"],this["prezi_editor_error"],this["prezi_editor_store_ui"],this["prezi_externalserviceprovider"],this["prezi_featureswitcher"],this["prezi_logger"],this["prezi_nativeapitypes"]);}}).call(this);
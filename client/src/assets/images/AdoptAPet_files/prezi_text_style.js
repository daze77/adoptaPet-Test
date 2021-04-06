;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_text_style";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_cet_model_editor":dependencies[0],"prezi_editor_commander":dependencies[1],"prezi_featureswitcher":dependencies[2],"prezi_font_provider":dependencies[3],"prezi_i18n":dependencies[4],"prezi_logger":dependencies[5],"prezi_plugin_api":dependencies[6],"prezi_plugin_meta":dependencies[7],"prezi_service_fontcatalogue":dependencies[8],"prezi_textstyleprovider":dependencies[9],"prezi_utils":dependencies[10]}};})());};})(arguments);var moduleImpl=(function(){return module(function(m){function w(a){switch(a){case h.FontType.title:return"TITLE";case h.FontType.body:return"BODY_ONE";case h.FontType.body2:return"BODY_TWO";case h.FontType.subtitle:return"SUBTITLE_ONE";case h.FontType.subtitle2:return"SUBTITLE_TWO"}}var e=m.dependencies.prezi_i18n,l=m.dependencies.prezi_logger,f=m.dependencies.prezi_plugin_api,z=m.dependencies.prezi_plugin_meta,x=m.dependencies.prezi_featureswitcher,A=m.dependencies.prezi_cet_model_editor,y=m.dependencies.prezi_editor_commander,C=
m.dependencies.prezi_textstyleprovider,D=m.dependencies.prezi_font_provider,B=m.dependencies.prezi_service_fontcatalogue,h={},p=this&&h.__awaiter||function(a,b,c,d){function n(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,k){function f(a){try{e(d.next(a))}catch(t){k(t)}}function E(a){try{e(d["throw"](a))}catch(t){k(t)}}function e(a){a.done?c(a.value):n(a.value).then(f,E)}e((d=d.apply(a,b||[])).next())})};Object.defineProperty(h,"__esModule",{value:!0});
var F=A.base.ObjectKind,G=A.base.refIs;(function(a){a.title="title";a.subtitle="subtitle";a.subtitle2="subtitle2";a.body="body";a.body2="body2"})(h.FontType||(h.FontType={}));(function(a){a.finished="finished";a.loading="loading"})(h.LoadingState||(h.LoadingState={}));var r;(function(a){a.Add="Add";a.Edit="Edit";a.None="None"})(r=h.SchemeCustomizerMode||(h.SchemeCustomizerMode={}));class q{constructor(a,b,c){this.session=b;this.uiRoot=this.uiRoot=c;this.logger=l.LoggerModule.getLoggerManager().createLogger("prezi_textstyle.TextStyleStateManager");
this.textStyleProvider=C.TextStyleProviderModule.getTextStyleProvider(a);this.fontProvider=D.FontProviderModule.getFontProvider(a);this.fontProvider.onUserSelectedFontsChange(()=>{const {isSidebarOpen:a,isCustomizerOpen:b}=this.uiRoot.getState();a&&b&&this.updateFontFamiliesUserSelected()});this.updateCurrentPreziScheme();this.updateFontFamiliesBuiltIn();a.onStyleSheetChange(()=>{const {isSidebarOpen:a,isCustomizerOpen:b}=this.uiRoot.getState();a&&b&&this.session.document.read((a)=>{this.updateFontFamiliesInDocument(a)})});
a.onLicenseChange((a)=>{const {isSidebarOpen:b,hasPremium:c,shouldLoadSchemeOnOpen:d}=this.uiRoot.getState();a=a.pitchCustomSchemes&&!x.isActive("js-text-style-paywall");c!==a&&(this.uiRoot.setState({hasPremium:a}),b?this.loadSchemes():d||this.uiRoot.setState({shouldLoadSchemeOnOpen:!0}))});a.onDocumentChange(()=>p(this,void 0,void 0,function*(){yield this.updateCurrentPreziScheme();const {isSidebarOpen:a,isCustomizerOpen:b}=this.uiRoot.getState();a&&!b&&(yield this.updateSelectedScheme())}));a.onNetworkStatusChange((a)=>
{this.uiRoot.setState({isNetworkOffline:a===f.NetworkStatus.Offline});const {customSchemeSuccesfullyLoaded:b,isSidebarOpen:c,shouldLoadSchemeOnOpen:d,isCustomizerOpen:e}=this.uiRoot.getState();a!==f.NetworkStatus.Online||b||(c?this.loadSchemes():d||this.uiRoot.setState({shouldLoadSchemeOnOpen:!0}));c&&e&&this.updateFontFamiliesUserSelected()});a.onSelectionChange((a)=>{this.uiRoot.setState({allSelectedObjectIsText:0<a.allObjects.length&&a.allObjects.every(G(F.text))})})}static initState(){return{customSchemeDisplayProgress:f.ListProgress.working,
customSchemeSuccesfullyLoaded:!1,customTextStyleList:[],editedScheme:null,hasPremium:!1,isCustomizerOpen:!1,isNetworkOffline:!1,isSidebarOpen:!1,presetSchemeDisplayProgress:f.ListProgress.working,presetTextStyleList:[],savedEditedScheme:null,schemeCustomizerMode:r.None,selectedScheme:null,templateId:null,templateDisplayProgress:f.ListProgress.working,templateTextStyle:null,currentPreziScheme:null,shouldLoadSchemeOnOpen:!0,allSelectedObjectIsText:!1,fontFamiliesBuiltIn:new Map,fontFamiliesUserSelected:new Map,
fontFamiliesInDocument:new Map,fontFamiliesInScheme:new Map}}loadSchemes(){return p(this,void 0,void 0,function*(){const {hasPremium:a,isNetworkOffline:b}=this.uiRoot.getState();this.uiRoot.setState({presetSchemeDisplayProgress:f.ListProgress.working});var c=yield this.textStyleProvider.getPresetTextStyles(this.session);this.uiRoot.setState({presetTextStyleList:c,presetSchemeDisplayProgress:f.ListProgress.finished});if(c=this.getTemplateInfo())this.uiRoot.setState({templateId:c.templateId,templateDisplayProgress:f.ListProgress.working}),
c=yield this.getTemplateTextStyle(c),this.uiRoot.setState({templateTextStyle:c,templateDisplayProgress:f.ListProgress.finished});if(b)this.uiRoot.setState({customSchemeSuccesfullyLoaded:!1,customSchemeDisplayProgress:f.ListProgress.finished});else if(a){this.uiRoot.setState({customSchemeDisplayProgress:f.ListProgress.working});let a;try{a=yield this.textStyleProvider.getCustomTextStyles(this.session)}catch(n){a=[],this.showErrorLoadSchemes()}this.uiRoot.setState({customTextStyleList:a,customSchemeDisplayProgress:f.ListProgress.finished,
customSchemeSuccesfullyLoaded:!0})}this.updateSelectedScheme()})}deleteAllCustomTextStyles(){return p(this,void 0,void 0,function*(){try{yield this.textStyleProvider.deleteAllCustomTextStyles()}catch(a){this.showErrorDeleteScheme()}yield this.loadSchemes()})}openSidebar(){return p(this,void 0,void 0,function*(){const {isCustomizerOpen:a}=this.uiRoot.getState();l.avro.Avro.createDefaultLogger().logShowPresentationFontSchemeOptions({fontscheme_sidebar_mode:this.uiRoot.getState().isCustomizerOpen?"SCHEMECUSTOMIZER":
"SCHEMELIST"});a?this.uiRoot.sidebar.open(g.TextStylePlugin.SIDEBAR_ID,g.TextStylePlugin.CUSTOMIZER_PAGE_ID):this.uiRoot.sidebar.open(g.TextStylePlugin.SIDEBAR_ID);this.uiRoot.setState({isSidebarOpen:!0})})}closeSidebar(){return p(this,void 0,void 0,function*(){l.avro.Avro.createDefaultLogger().logClosePresentationFontSchemeSidebar({fontscheme_sidebar_mode:this.uiRoot.getState().isCustomizerOpen?"SCHEMECUSTOMIZER":"SCHEMELIST"});this.uiRoot.sidebar.close(g.TextStylePlugin.SIDEBAR_ID);this.uiRoot.setState({isSidebarOpen:!1})})}toggleSidebar(){return p(this,
void 0,void 0,function*(){const {isSidebarOpen:a}=this.uiRoot.getState();a?this.closeSidebar():this.openSidebar()})}updateFontFamiliesInScheme(){const {fontFamiliesBuiltIn:a,fontFamiliesUserSelected:b,fontFamiliesInDocument:c,fontFamiliesInScheme:d,editedScheme:n}=this.uiRoot.getState();if(n){const e=[];for(const g of Object.keys(n.fontScheme)){var f=n.fontScheme[g],k=f.fontFamily;if(k=a.get(k)||b.get(k)||c.get(k)||d.get(k))e.push(Promise.resolve(k));else{const a=this.convertCustomFontToFontDescription(f);
f=this.fontProvider.createFontPresetData(a,this.session.document.progressiveAssetManager).then((b)=>Object.assign(Object.assign({},a),{imageUri:b.imageUrl}));e.push(f)}}Promise.all(e).then((a)=>{a=new Map(a.map((a)=>[a.fontFamily,a]));this.uiRoot.setState({fontFamiliesInScheme:a})})}}updateFontFamiliesUserSelected(){var {isNetworkOffline:a}=this.uiRoot.getState();a=a?B.getBuiltinFontDescriptionsOrderedByName():this.fontProvider.getUserSelectedFonts();a=new Map(a.map((a)=>[a.fontFamily,a]));this.uiRoot.setState({fontFamiliesUserSelected:a})}updateFontFamiliesBuiltIn(){var a=
B.getBuiltinFontDescriptionsOrderedByName();a=new Map(a.map((a)=>[a.fontFamily,a]));this.uiRoot.setState({fontFamiliesBuiltIn:a})}updateFontFamiliesInDocument(a){var b=this.getFontFamiliesInDocument(a);const {fontFamiliesBuiltIn:c,fontFamiliesUserSelected:d,fontFamiliesInDocument:n,fontFamiliesInScheme:f}=this.uiRoot.getState();a=[];for(let [k,e]of b)(b=c.get(k)||d.get(k)||n.get(k)||f.get(k))?a.push(Promise.resolve(b)):(b=this.fontProvider.createFontPresetData(e,this.session.document.progressiveAssetManager).then((a)=>
Object.assign(Object.assign({},e),{imageUri:a.imageUrl})),a.push(b));Promise.all(a).then((a)=>{a=new Map(a.map((a)=>[a.fontFamily,a]));this.uiRoot.setState({fontFamiliesInDocument:a})})}getFontFamiliesInDocument(a){return new Map(a.styleSheet.fontDescriptions.filter((a)=>a.hasNormal).map((a)=>[a.fontFamily,a]))}getTemplateInfo(){return this.session.document.read((a)=>a.meta.templateInfo)}getTemplateTextStyle(a){return p(this,void 0,void 0,function*(){try{const b=yield this.session.document.progressiveAssetManager.getTemplateStyleSheetReader(a),
c=y.EditorCommander.createTextStyleCommander().getFontScheme(b);return yield this.textStyleProvider.convertFontSchemeToTextStyle(c,"template",this.session)}catch(b){return this.logger.warn({action:"get",object:"templateTextStyle",trigger:"error",payload:{error_message:b.message,trace:b.stack}}),null}})}selectAndApplyScheme(a,b){l.avro.Avro.createDefaultLogger().logSelectPresentationFontScheme({presentation_font_scheme_id:b.id});this.uiRoot.setState({selectedScheme:b});this.applySelectedScheme(a)}applySelectedScheme(a){const {selectedScheme:b}=
this.uiRoot.getState();null!=b&&this.session.document.executeApiCommand(a,this.applyScheme(b))}applyScheme(a){return y.EditorCommander.createTextStyleCommander().applyFontSchemeCmd(this.session.document.progressiveAssetManager,a.fontScheme)}switchToNextScheme(a,b){const c=(a)=>{var c=null;if(null==b)c=this.uiRoot.getState().presetTextStyleList[0];else{c=this.uiRoot.getState().presetTextStyleList;const a=(c.findIndex((a)=>a.id===b.id)+1)%c.length;c=c[a]}this.uiRoot.setState({selectedScheme:c});this.applySelectedScheme(a)};
0===this.uiRoot.getState().presetTextStyleList.length?a.doAsync(this.loadSchemes(),(a)=>{a.isValid()&&c(a)}):c(a)}handleBackFromEditing(){this.openRootPage();this.updateSelectedScheme()}saveScheme(a){return p(this,void 0,void 0,function*(){try{let b=a;a.title&&0!==a.title.length||(b=Object.assign(Object.assign({},a),{title:this.generateDefaultTitle()}));return yield this.textStyleProvider.saveCustomTextStyle(b,this.session)}catch(b){return l.avro.Avro.createDefaultLogger().logLoadedFontSchemeSaveErrorDialog(),
this.showErrorSaveScheme(),null}})}isBuiltinFont(a){return this.textStyleProvider.isBuiltinFont(a)}deleteScheme(a){return p(this,void 0,void 0,function*(){try{return yield this.textStyleProvider.deleteCustomTextStyle(a),!0}catch(b){return this.showErrorDeleteScheme(),!1}})}openSchemeCustomizer(a,b){var {selectedScheme:c}=this.uiRoot.getState();null!=c&&(a=b===r.Edit?Object.assign(Object.assign({},c),{id:c.isCustom?c.id:"",title:c.isCustom?c.title:""}):Object.assign(Object.assign({},c),{id:"",title:"",
isCustom:!0}),c=b===r.Edit?Object.assign({},c):null,this.uiRoot.setState({isCustomizerOpen:!0,isSidebarOpen:!0,schemeCustomizerMode:b,editedScheme:a,savedEditedScheme:c}),this.updateFontFamiliesUserSelected(),this.updateFontFamiliesInScheme(),this.session.document.read((a)=>{this.updateFontFamiliesInDocument(a)}),this.uiRoot.sidebar.open(g.TextStylePlugin.SIDEBAR_ID,g.TextStylePlugin.CUSTOMIZER_PAGE_ID))}generateDefaultTitle(){let a=g.TextStylePlugin.DEFAULT_SCHEME_TITLE,b=2;for(;!this.isSchemeTitleUnique(a);)a=
`${g.TextStylePlugin.DEFAULT_SCHEME_TITLE} ${b}`,b++;return a}openRootPage(){this.uiRoot.setState({schemeCustomizerMode:r.None,editedScheme:null,savedEditedScheme:null,isCustomizerOpen:!1,isSidebarOpen:!0});this.uiRoot.sidebar.open(g.TextStylePlugin.SIDEBAR_ID)}updateEditedSchemeTitle(a){this.uiRoot.setState({editedScheme:Object.assign(Object.assign({},this.uiRoot.getState().editedScheme),{title:a})})}updateEditedSchemeFontFamily(a,b,c){const {editedScheme:d,hasPremium:f}=this.uiRoot.getState(),e=
b.fontFamily;if(null!==d&&f){var k=!1;if(!this.isBuiltinFont(e)){k=!0;var g={normalKeg:b.normalKeg,italicKeg:b.italicKeg,boldKeg:b.boldKeg,boldItalicKeg:b.boldItalicKeg}}this.updateEditedSchemeAndApply(a,{fontScheme:Object.assign(Object.assign({},d.fontScheme),{[c]:Object.assign(Object.assign({},d.fontScheme[c]),{fontFamily:e,isCustom:k,customKegProperties:g,hasBold:!1,hasItalic:!1})})})}}updateEditedSchemeBold(a,b){const {editedScheme:c,hasPremium:d}=this.uiRoot.getState();null!==c&&d&&this.updateEditedSchemeAndApply(a,
{fontScheme:Object.assign(Object.assign({},c.fontScheme),{[b]:Object.assign(Object.assign({},c.fontScheme[b]),{hasBold:!c.fontScheme[b].hasBold})})})}updateEditedSchemeItalic(a,b){const {editedScheme:c,hasPremium:d}=this.uiRoot.getState();null!==c&&d&&this.updateEditedSchemeAndApply(a,{fontScheme:Object.assign(Object.assign({},c.fontScheme),{[b]:Object.assign(Object.assign({},c.fontScheme[b]),{hasItalic:!c.fontScheme[b].hasItalic})})})}saveEditedSchemeAndReloadList(){return p(this,void 0,void 0,function*(){const {editedScheme:a,
hasPremium:b}=this.uiRoot.getState();if(null!==a&&b){const b=yield this.saveScheme(a);b&&(this.openRootPage(),yield this.loadSchemes(),this.uiRoot.setState({selectedScheme:b}),yield this.updateSelectedScheme())}})}deleteEditedSchemeAndReturnToRoot(){return p(this,void 0,void 0,function*(){const {editedScheme:a,hasPremium:b}=this.uiRoot.getState();null!==a&&b&&(yield this.deleteScheme(a))&&(this.openRootPage(),yield this.loadSchemes(),this.uiRoot.setState({selectedScheme:null}),yield this.updateSelectedScheme())})}applyEditedScheme(a){const {editedScheme:b,
hasPremium:c}=this.uiRoot.getState();null!==b&&c&&this.session.document.executeApiCommand(a,this.applyScheme(b))}setStateAndApplyEditedScheme(a,b){this.uiRoot.setState(b);this.applyEditedScheme(a)}updateEditedSchemeAndApply(a,b){const {editedScheme:c,hasPremium:d}=this.uiRoot.getState();null!==c&&d&&(this.setStateAndApplyEditedScheme(a,{editedScheme:Object.assign(Object.assign({},c),b)}),this.updateFontFamiliesInScheme())}static serializeScheme(a){return JSON.stringify({fontScheme:q.serializeFontScheme(a.fontScheme)})}static serializeFontScheme(a){return JSON.stringify({title:{fontFamily:a.title.fontFamily,
hasBold:a.title.hasBold,hasItalic:a.title.hasItalic,hasBackground:a.title.hasBackground},subtitle:{fontFamily:a.subtitle.fontFamily,hasBold:a.subtitle.hasBold,hasItalic:a.subtitle.hasItalic,hasBackground:a.subtitle.hasBackground},subtitle2:{fontFamily:a.subtitle2.fontFamily,hasBold:a.subtitle2.hasBold,hasItalic:a.subtitle2.hasItalic,hasBackground:a.subtitle2.hasBackground},body:{fontFamily:a.body.fontFamily,hasBold:a.body.hasBold,hasItalic:a.body.hasItalic,hasBackground:a.body.hasBackground},body2:{fontFamily:a.body2.fontFamily,
hasBold:a.body2.hasBold,hasItalic:a.body2.hasItalic,hasBackground:a.body2.hasBackground}})}isSaveTextStyleButtonEnabled(){const {savedEditedScheme:a,editedScheme:b,isNetworkOffline:c,schemeCustomizerMode:d}=this.uiRoot.getState();if(c)return!1;switch(d){case r.Add:return!this.checkTitleError();case r.Edit:return!this.checkTitleError()&&(b.title!==a.title||!q.areSchemesEqual(a,b));default:return!1}}checkTitleError(){const {savedEditedScheme:a,editedScheme:b,schemeCustomizerMode:c}=this.uiRoot.getState();
return b.title&&0!==b.title.length?c===r.Add&&!this.isSchemeTitleUnique(b.title)||c===r.Edit&&b.title!==a.title&&!this.isSchemeTitleUnique(b.title)?e.I18n.ts("Name already used"):null:null}isDeleteTextStyleButtonEnabled(){const {schemeCustomizerMode:a,isNetworkOffline:b,selectedScheme:c}=this.uiRoot.getState();return!b&&a===r.Edit&&c.isCustom}isCopyButtonEnabled(){const {isNetworkOffline:a,schemeCustomizerMode:b}=this.uiRoot.getState();return!a&&b!==r.Add}static areSchemesEqual(a,b){return null==
a&&null==b?!0:null==a||null==b?!1:q.serializeScheme(a)===q.serializeScheme(b)}static areFontSchemesEqual(a,b){return null==a&&null==b?!0:null==a||null==b?!1:q.serializeFontScheme(a)===q.serializeFontScheme(b)}isSchemeTitleUnique(a){return!this.uiRoot.getState().customTextStyleList.map((a)=>a.title).some((b)=>b===a)}updateSelectedScheme(){return p(this,void 0,void 0,function*(){const {customSchemeDisplayProgress:a,customTextStyleList:b,isNetworkOffline:c,presetSchemeDisplayProgress:d,presetTextStyleList:e,
selectedScheme:g,templateDisplayProgress:k,templateTextStyle:h,currentPreziScheme:u}=this.uiRoot.getState();if(null!=u&&!(k!==f.ListProgress.finished||!c&&a!==f.ListProgress.finished||d!==f.ListProgress.finished||null!=g&&g.id!==q.UNSAVED_ID&&q.areFontSchemesEqual(g.fontScheme,u.fontScheme))){var l=[...b,h,...e].filter((a)=>null!=a).find((a)=>q.areFontSchemesEqual(a.fontScheme,u.fontScheme));this.uiRoot.setState({selectedScheme:l?l:u})}})}removeSchemeIdAndTitle(a){const {fontScheme:b,thumbnailUrl:c}=
a;return{id:"",title:"",isCustom:!0,fontScheme:b,thumbnailUrl:c}}saveCopyAndReloadList(){return p(this,void 0,void 0,function*(){const {editedScheme:a,selectedScheme:b}=this.uiRoot.getState();var c=Object.assign(Object.assign({},a||b),{id:null,title:this.generateCopyTitle(),isCustom:!0});if(c=yield this.saveScheme(c))l.avro.Avro.createDefaultLogger().logCopiedPresentationFontScheme({copied_presentation_font_scheme_id:c.id,original_presentation_font_scheme_id:b.id}),this.openRootPage(),yield this.loadSchemes(),
yield this.updateSelectedScheme()})}buildExtendedFontDescriptionMap(){const {fontFamiliesInDocument:a,fontFamiliesInScheme:b,fontFamiliesUserSelected:c}=this.uiRoot.getState();return new Map([...a,...b,...c])}convertCustomFontToFontDescription(a){if(!a.isCustom)throw Error("Impossible to convert none custom font");return{fontFamily:a.fontFamily,hasBold:!!a.customKegProperties.boldKeg,hasItalic:!!a.customKegProperties.italicKeg,hasBoldItalic:!!a.customKegProperties.boldItalicKeg,boldItalicKeg:a.customKegProperties.boldItalicKeg,
italicKeg:a.customKegProperties.italicKeg,boldKeg:a.customKegProperties.boldKeg,hasNormal:!!a.customKegProperties.normalKeg,normalKeg:a.customKegProperties.normalKeg}}updateCurrentPreziScheme(){return p(this,void 0,void 0,function*(){const a=this.session.document.read((a)=>y.EditorCommander.createTextStyleCommander().getFontScheme(a.styleSheet));try{const b=yield this.textStyleProvider.convertFontSchemeToTextStyle(a,q.UNSAVED_ID,this.session);this.uiRoot.setState({currentPreziScheme:b})}catch(b){this.logger.warn({action:"get",
object:"templateTextStyle",trigger:"error",payload:{error_message:b.message,trace:b.stack}})}})}generateCopyTitle(){const {editedScheme:a,selectedScheme:b}=this.uiRoot.getState();var {title:c}=a||b;c=c||g.TextStylePlugin.DEFAULT_SCHEME_TITLE;c=a&&a.title!==b.title?c:e.I18n.tsFormatKeys("Copy of {title}",{title:c});if(this.isSchemeTitleUnique(c))return c;{let a=2;for(;!this.isSchemeTitleUnique(`${c} ${a}`);)++a;return`${c} ${a}`}}showErrorSaveScheme(){this.uiRoot.dialog.showError(e.I18n.ts("Looks like there\u2019s an issue with saving your text styles."),
e.I18n.ts("We\u2019re unable to save your text styles at this time. Please try again."),"text_style_plugin_save_scheme_failed")}showErrorDeleteScheme(){this.uiRoot.dialog.showError(e.I18n.ts("Looks like there\u2019s an issue with deleting your text styles."),e.I18n.ts("We\u2019re unable to delete your text styles at this time. Please try again."),"text_style_plugin_delete_scheme_failed")}showErrorLoadSchemes(){this.uiRoot.dialog.showError(e.I18n.ts("Looks like there\u2019s an issue with loading your text styles."),
e.I18n.ts("We\u2019re unable to load your text styles at this time. Please try again."),"text_style_plugin_load_schemes_failed")}}h.TextStyleStateManager=q;q.SCHEME_TITLE_INPUT_MAX_LENGTH=26;q.UNSAVED_ID="unsaved_id";q.allLabel=e.I18n.ts("All");var g={},v=this&&g.__awaiter||function(a,b,c,d){function f(a){return a instanceof c?a:new c(function(b){b(a)})}return new (c||(c=Promise))(function(c,e){function n(a){try{k(d.next(a))}catch(t){e(t)}}function g(a){try{k(d["throw"](a))}catch(t){e(t)}}function k(a){a.done?
c(a.value):f(a.value).then(n,g)}k((d=d.apply(a,b||[])).next())})};Object.defineProperty(g,"__esModule",{value:!0});g.TextStylePlugin=class{constructor(){this.handleEdit=(a,b=null)=>{const {hasPremium:c}=this.uiRoot.getState();null!==b&&this.uiRoot.setState({selectedScheme:b});if(c){var {selectedScheme:b}=this.uiRoot.getState();l.avro.Avro.createDefaultLogger().logEditPresentationFontScheme({presentation_font_scheme_id:b?b.id:""});this.stateManager.openSchemeCustomizer(a,b&&b.id?h.SchemeCustomizerMode.Edit:
h.SchemeCustomizerMode.Add)}else this.openPaywallModal()};this.logger=l.LoggerModule.getLoggerManager().createLogger("prezi_textstyle.TextStylePlugin")}init(a){this.uiRoot=a.declareUI(h.TextStyleStateManager.initState(),(a,c)=>{c.createMenuItem(this.createMixerButton());this.uiRoot.getState().allSelectedObjectIsText&&c.createMenuItem(this.createContextMenuElem());c.createSidebar((a)=>this.createSidebarArgs(a));x.isActive("js-developer-features")&&this.createConfirmDeleteAllDialog(c)});this.stateManager=
new h.TextStyleStateManager(a,this.session,this.uiRoot)}processMessage(a){if("textStyleSidebar"===a)this.stateManager.openSidebar();else throw Error(`unexpected message: ${a}`);}createMixerButton(){const {currentPreziScheme:a,selectedScheme:b}=this.uiRoot.getState();return{kind:f.MenuItemKind.mixerButton,enabled:!0,onClick:(a)=>{this.stateManager.switchToNextScheme(a,b)},onClickSecondary:()=>{this.stateManager.toggleSidebar()},url:a?a.thumbnailUrl:null,parent:f.TabMenuId.Style,weight:4,id:"text-style-mixer-button",
title:e.I18n.ts("Text")}}createContextMenuElem(){return{kind:f.MenuItemKind.context,enabled:!0,onClick:()=>{this.stateManager.toggleSidebar()},weight:66,id:"text-style-context-menu",title:e.I18n.ts("Change text style")}}createConfirmDeleteAllDialog(a){a.dialog.large(()=>({id:g.TextStylePlugin.DELETE_ALL_CONFIRM_DIALOG_ID,title:"Delete all custom text styles?",content:[],footer:(a)=>[a.button({color:f.ButtonColor.Gray,content:{text:"No"},id:"delete-all-decline-button",onClick:()=>{this.uiRoot.dialog.hide(g.TextStylePlugin.DELETE_ALL_CONFIRM_DIALOG_ID)}}),
a.button({color:f.ButtonColor.Blue,content:{text:"Yes"},id:"delete-all-confirm-button",onClick:()=>{this.uiRoot.dialog.hide(g.TextStylePlugin.DELETE_ALL_CONFIRM_DIALOG_ID);this.stateManager.deleteAllCustomTextStyles()}})]}))}createSidebarArgs(a){var {editedScheme:b}=this.uiRoot.getState();b=null==b?{}:{[g.TextStylePlugin.CUSTOMIZER_PAGE_ID]:this.createSchemeCustomizerPage(a,b)};return{id:g.TextStylePlugin.SIDEBAR_ID,root:this.createRootPage(a),pages:b,onOpen:(a)=>{a=a.pageId===g.TextStylePlugin.CUSTOMIZER_PAGE_ID;
this.uiRoot.setState({isSidebarOpen:!0,isCustomizerOpen:a});if(!a){var {shouldLoadSchemeOnOpen:a}=this.uiRoot.getState();a&&(this.stateManager.loadSchemes(),this.uiRoot.setState({shouldLoadSchemeOnOpen:!1}));this.stateManager.updateSelectedScheme()}},onClose:()=>{const {isCustomizerOpen:a}=this.uiRoot.getState();l.avro.Avro.createDefaultLogger().logClosePresentationFontSchemeSidebar({fontscheme_sidebar_mode:a?"SCHEMECUSTOMIZER":"SCHEMELIST"});this.uiRoot.setState({isSidebarOpen:!1,isCustomizerOpen:!1})},
onPageBack:()=>{l.avro.Avro.createDefaultLogger().logBackFromFontSchemeEditing({fontscheme_sidebar_mode:"SCHEMECUSTOMIZER"});this.stateManager.handleBackFromEditing()}}}createRootPage(a){const b=this.createCustomSection(a),c=this.createPresetSection(a);let d=this.createOriginalTemplateSection(a);a=this.createDevSection(a);return{title:g.TextStylePlugin.SIDEBAR_TITLE,content:[...b,...c,...d,...a]}}createUnsavedItem(a){const {selectedScheme:b}=this.uiRoot.getState();return b&&b.id===h.TextStyleStateManager.UNSAVED_ID?
b.thumbnailUrl?a.image({id:h.TextStyleStateManager.UNSAVED_ID,title:e.I18n.ts("(Unsaved)"),src:{url:b.thumbnailUrl},onClick:(a)=>this.stateManager.selectAndApplyScheme(a,b),dataLookup:`${g.TextStylePlugin.SIDEBAR_ID}/unsaved-item`,primaryAction:{id:"editAction",onClick:(a)=>this.handleEdit(a),icon:f.IconSmallId.Edit,enabled:!0,title:e.I18n.ts("Edit")}}):a.error({title:e.I18n.ts("(Unsaved)"),dataLookup:`${g.TextStylePlugin.SIDEBAR_ID}/unsaved-item`}):null}createOriginalTemplateSection(a){const {isSidebarOpen:b,
templateTextStyle:c,selectedScheme:d,templateDisplayProgress:n,templateId:h}=this.uiRoot.getState();return!b||null==c&&n!==f.ListProgress.working?[]:[a.separator(),a.sectionHeader({content:e.I18n.ts("Template style")}),a.simpleList((a)=>{a=null!=c?[this.createOriginalTemplateItem(a,c,h)]:[];return{id:g.TextStylePlugin.ID_UNSAVED_SECTION,activeId:d?d.id:null,items:a,itemType:f.ListItemType.large,itemLayout:f.ListItemLayout.fixed,showTitle:!1,progress:n}})]}createDevSection(a){return x.isActive("js-developer-features")?
[a.separator(),a.sectionHeader({content:e.I18n.ts("Dev section")}),a.button(f.ButtonSize.Large,f.ButtonAlign.Center,(a)=>[a.button({color:f.ButtonColor.Gray,id:"text-style-delete-all-custom-button",content:{text:e.I18n.ts("Delete all custom text styles")},onClick:()=>v(this,void 0,void 0,function*(){this.uiRoot.dialog.show(g.TextStylePlugin.DELETE_ALL_CONFIRM_DIALOG_ID)})})])]:[]}createOriginalTemplateItem(a,b,c){return b.thumbnailUrl?a.image({id:b.id,src:{url:b.thumbnailUrl},onClick:(a)=>{l.avro.Avro.createDefaultLogger().logRevertToTemplateDefaultFonts({template_id:c});
this.stateManager.selectAndApplyScheme(a,b)},primaryAction:{id:"editAction",onClick:(a)=>this.handleEdit(a),icon:f.IconSmallId.Edit,enabled:!0,title:e.I18n.ts("Edit")},dataLookup:`${g.TextStylePlugin.SIDEBAR_ID}/template-text-style-item`}):a.error({dataLookup:`${g.TextStylePlugin.SIDEBAR_ID}/template-text-style-item`})}createCustomSection(a){return[a.sectionHeader({content:e.I18n.ts("My styles")}),this.getListItems(a),a.separator()]}getListItems(a){const {hasPremium:b,customTextStyleList:c,customSchemeDisplayProgress:d}=
this.uiRoot.getState();return b?this.createList(g.TextStylePlugin.ID_CUSTOM_SECTION,a,(a)=>{const b=this.createUnsavedItem(a);let d=(c||[]).map((b,c)=>this.createItem(a,b,`${g.TextStylePlugin.SIDEBAR_ID}/custom-item-${c}`,!0));d.sort(this.sortAlphabetically);null!=b&&(d=[b,...d]);return d=[this.createAddButtonItem(a),...d]},!0,d,!1):this.createList(g.TextStylePlugin.ID_CUSTOM_SECTION,a,(a)=>{const b=this.createUnsavedItem(a);let c=[];null!=b&&(c=[b,...c]);return c=[this.createAddButtonItem(a),...c]},
!0)}createAddButtonItem(a){const {hasPremium:b}=this.uiRoot.getState();return a.image({title:e.I18n.ts("Create new"),src:{url:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4IiBoZWlnaHQ9IjEwOCIgdmlld0JveD0iMCAwIDEwOCAxMDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjUgMTA3LjVWMC40OTk5NjlIMTA3LjVWMTA3LjVIMC41WiIgZmlsbD0iI0Y2RjdGOSIgc3Ryb2tlPSIjREZFMUU0Ii8+CjxjaXJjbGUgY3g9IjU0IiBjeT0iNTQiIHI9IjIwIiBmaWxsPSIjMzE4MUZGIi8+CjxwYXRoIGQ9Ik01NS4zMzMgNTIuNjY3SDYyQzYyLjM1MzUgNTIuNjY3IDYyLjY5MjYgNTIuODA3NCA2Mi45NDI2IDUzLjA1NzRDNjMuMTkyNiA1My4zMDc0IDYzLjMzMyA1My42NDY1IDYzLjMzMyA1NEM2My4zMzMgNTQuMzUzNSA2My4xOTI2IDU0LjY5MjYgNjIuOTQyNiA1NC45NDI2QzYyLjY5MjYgNTUuMTkyNiA2Mi4zNTM1IDU1LjMzMyA2MiA1NS4zMzNINTUuMzMzVjYyQzU1LjMzMyA2Mi4zNTM1IDU1LjE5MjYgNjIuNjkyNiA1NC45NDI2IDYyLjk0MjZDNTQuNjkyNiA2My4xOTI2IDU0LjM1MzUgNjMuMzMzIDU0IDYzLjMzM0M1My42NDY1IDYzLjMzMyA1My4zMDc0IDYzLjE5MjYgNTMuMDU3NCA2Mi45NDI2QzUyLjgwNzQgNjIuNjkyNiA1Mi42NjcgNjIuMzUzNSA1Mi42NjcgNjJWNTUuMzMzSDQ2QzQ1LjY0NjUgNTUuMzMzIDQ1LjMwNzQgNTUuMTkyNiA0NS4wNTc0IDU0Ljk0MjZDNDQuODA3NCA1NC42OTI2IDQ0LjY2NyA1NC4zNTM1IDQ0LjY2NyA1NEM0NC42NjcgNTMuNjQ2NSA0NC44MDc0IDUzLjMwNzQgNDUuMDU3NCA1My4wNTc0QzQ1LjMwNzQgNTIuODA3NCA0NS42NDY1IDUyLjY2NyA0NiA1Mi42NjdINTIuNjY3VjQ2QzUyLjY2NyA0NS42NDY1IDUyLjgwNzQgNDUuMzA3NCA1My4wNTc0IDQ1LjA1NzRDNTMuMzA3NCA0NC44MDc0IDUzLjY0NjUgNDQuNjY3IDU0IDQ0LjY2N0M1NC4zNTM1IDQ0LjY2NyA1NC42OTI2IDQ0LjgwNzQgNTQuOTQyNiA0NS4wNTc0QzU1LjE5MjYgNDUuMzA3NCA1NS4zMzMgNDUuNjQ2NSA1NS4zMzMgNDZWNTIuNjY3WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cgo="},
onClick:(a)=>{if(b){const {selectedScheme:b}=this.uiRoot.getState();l.avro.Avro.createDefaultLogger().logAddPresentationFontScheme({presentation_font_scheme_id:b?b.id:"new"});this.stateManager.openSchemeCustomizer(a,h.SchemeCustomizerMode.Add)}else this.openPaywallModal()},dataLookup:`${g.TextStylePlugin.SIDEBAR_ID}/add-scheme-button`})}createPresetSection(a){const {presetTextStyleList:b,presetSchemeDisplayProgress:c}=this.uiRoot.getState();return[a.sectionHeader({content:e.I18n.ts("Default styles")}),
this.createList(g.TextStylePlugin.ID_PRESET_SECTION,a,(a)=>b.map((b,c)=>this.createItem(a,b,`${g.TextStylePlugin.SIDEBAR_ID}/preset-item-${c}`,!1)),!1,c)]}sortAlphabetically(a,b){a=a.title.toLowerCase();b=b.title.toLowerCase();return a<b?-1:a>b?1:0}createList(a,b,c,d,e,g=!1){const {selectedScheme:n}=this.uiRoot.getState();return b.simpleList((b)=>{b=[...c(b)];g&&b.sort(this.sortAlphabetically);return{activeId:n?n.id:h.TextStyleStateManager.UNSAVED_ID,id:a,items:b,itemType:f.ListItemType.large,itemLayout:f.ListItemLayout.fixed,
showTitle:d,progress:e}})}createItem(a,b,c,d){return b.thumbnailUrl?a.image({id:b.id,title:d?b.title:null,src:{url:b.thumbnailUrl},onClick:(a)=>{this.stateManager.selectAndApplyScheme(a,b)},primaryAction:{id:"editAction",onClick:(a)=>this.handleEdit(a,b),icon:f.IconSmallId.Edit,enabled:!0,title:e.I18n.ts("Edit")},dataLookup:c}):a.error({title:d?b.title:null,dataLookup:c})}createSchemeCustomizerPage(a,b){var {hasPremium:c}=this.uiRoot.getState();const d=[];c||d.push(...[a.sectionHeader({content:e.I18n.ts("Ready to unlock more features?")}),
a.label(e.I18n.ts("Get access to advanced color editing and much more by upgrading your Prezi license.")),a.button(f.ButtonSize.Large,f.ButtonAlign.Start,(a)=>[a.button({color:f.ButtonColor.Blue,id:"text-style-customizer-upgrade-button",content:{text:e.I18n.ts("Upgrade now")},onClick:()=>{this.openPaywallModal()}})]),a.separator()]);c=this.stateManager.buildExtendedFontDescriptionMap();const n=c.get(b.fontScheme.title.fontFamily),l=c.get(b.fontScheme.subtitle.fontFamily),k=c.get(b.fontScheme.body.fontFamily),
m=c.get(b.fontScheme.subtitle2.fontFamily),u=c.get(b.fontScheme.body2.fontFamily);n&&l&&k&&m&&u?(d.push(...[a.sectionHeader({content:e.I18n.ts("Name")}),this.createTitleInput(a,b),a.separator(),a.sectionHeader({content:e.I18n.ts("Title")}),this.createFontDescriptionSelector(a,h.FontType.title,c),this.createTextStyleSelectors(a,h.FontType.title,n),a.separator(),a.sectionHeader({content:e.I18n.ts("Subtitle")}),this.createFontDescriptionSelector(a,h.FontType.subtitle,c),this.createTextStyleSelectors(a,
h.FontType.subtitle,l),a.separator(),a.sectionHeader({content:e.I18n.ts("Body")}),this.createFontDescriptionSelector(a,h.FontType.body,c),this.createTextStyleSelectors(a,h.FontType.body,k),a.separator(),a.collapseSection({id:"text-style-customizer-more-settings",title:e.I18n.ts("More settings"),items:[a.sectionHeader({content:e.I18n.ts("Subtitle 2")}),this.createFontDescriptionSelector(a,h.FontType.subtitle2,c),this.createTextStyleSelectors(a,h.FontType.subtitle2,m),a.separator(),a.sectionHeader({content:e.I18n.ts("Body 2")}),
this.createFontDescriptionSelector(a,h.FontType.body2,c),this.createTextStyleSelectors(a,h.FontType.body2,u)]})]),d.push(...this.createCrossLinkToSchemeSidebar(a))):d.push(a.illustration(e.I18n.ts("Something went wrong"),f.IllustrationLargeLightId.Error));return{title:g.TextStylePlugin.SIDEBAR_TITLE,content:d,footer:[this.createButtonSection(a)]}}createTitleInput(a,b){const {hasPremium:c}=this.uiRoot.getState();return a.inputField({id:"text-style-customizer-name-input",placeholderText:g.TextStylePlugin.DEFAULT_SCHEME_TITLE,
value:b.title,disabled:!1,maxLength:h.TextStyleStateManager.SCHEME_TITLE_INPUT_MAX_LENGTH,onValueChange:(a,b)=>{c?this.stateManager.updateEditedSchemeTitle(b):this.openPaywallModal()},errorText:this.stateManager.checkTitleError()})}createFontDescriptionSelector(a,b,c){const d=(a,b)=>a.fontFamily.localeCompare(b.fontFamily);return a.popupDropdown((a)=>{const {fontFamiliesInDocument:g,editedScheme:h,isNetworkOffline:n}=this.uiRoot.getState();var m=[...g.values()].sort(d).map((c)=>this.createFontSelector(a,
c,b)).filter((a)=>null!=a),p=[...c.values()].sort(d).map((c)=>this.createFontSelector(a,c,b)).filter((a)=>null!=a);m={id:`text-style-customizer-${b}-font`,text:h.fontScheme[b].fontFamily,popupHeight:f.PopupHeight.Short,popupHeader:[a.sectionHeader({content:e.I18n.ts("Font")})],popupContent:[a.sectionHeader({content:e.I18n.ts("Used in the document")}),...m,a.separator(),...p]};p=[a.button(f.ButtonSize.Large,f.ButtonAlign.Start,(a)=>[a.button({id:"showMoreFontsButton",color:f.ButtonColor.Gray,content:{text:e.I18n.ts("More fonts")},
onClick:()=>{l.avro.Avro.createDefaultLogger().logOpenMoreFontsDialog({font_dialog_source:"TEXT_STYLES_SIDEBAR"});this.pluginAccess.send(z.fontSelector,{kind:"openFontSelectorModal"})},disabled:n})])];return m=Object.assign(Object.assign({},m),{popupFooter:p})})}createFontSelector(a,b,c){const {editedScheme:d,hasPremium:e}=this.uiRoot.getState();return a.imageCheckbox({id:`image-checkbox-${b.fontFamily}`,imgUrl:b.imageUri,checked:d.fontScheme[c].fontFamily===b.fontFamily,onCheck:(a,f)=>{f&&(e?(l.avro.Avro.createDefaultLogger().logSetPresentationTextFont({presentation_font_scheme_id:d.id,
fontscheme_attrib_name:w(c),font_name:b.fontFamily}),this.stateManager.updateEditedSchemeFontFamily(a,b,c)):this.openPaywallModal())}})}createTextStyleSelectors(a,b,c){const {editedScheme:{fontScheme:{[b]:{hasBold:d,hasItalic:g}},id:h},hasPremium:k}=this.uiRoot.getState();return a.button(f.ButtonSize.Small,f.ButtonAlign.Start,(a)=>[a.toggle({pushed:d,id:`text-style-customizer-${b}-bold-button`,content:{icon:f.IconSmallId.Bold},disabled:!d&&!g&&!c.hasBold||!d&&g&&!c.hasBoldItalic||d&&g&&!c.hasItalic||
d&&!g&&!c.hasNormal,onClick:(a)=>{k?(l.avro.Avro.createDefaultLogger().logSetPresentationTextStyle({presentation_font_scheme_id:h,fontscheme_attrib_name:w(b),font_style:d?"BOLD_ON":"BOLD_OFF"}),this.stateManager.updateEditedSchemeBold(a,b)):this.openPaywallModal()},tooltipText:e.I18n.ts("Bold")}),a.toggle({pushed:g,id:`text-style-customizer-${b}-italic-button`,content:{icon:f.IconSmallId.Italic},disabled:!d&&!g&&!c.hasItalic||!d&&g&&!c.hasNormal||d&&g&&!c.hasBold||d&&!g&&!c.hasBoldItalic,onClick:(a)=>
{k?(l.avro.Avro.createDefaultLogger().logSetPresentationTextStyle({presentation_font_scheme_id:h,fontscheme_attrib_name:w(b),font_style:g?"ITALIC_ON":"ITALIC_OFF"}),this.stateManager.updateEditedSchemeItalic(a,b)):this.openPaywallModal()},tooltipText:e.I18n.ts("Italic")})])}createButtonSection(a){const {hasPremium:b,editedScheme:c}=this.uiRoot.getState();return a.button(f.ButtonSize.Large,f.ButtonAlign.Center,(a)=>[a.button({color:f.ButtonColor.Blue,id:"text-style-customizer-save-button",content:{text:e.I18n.ts("Save")},
disabled:!this.stateManager.isSaveTextStyleButtonEnabled(),onClick:()=>v(this,void 0,void 0,function*(){b?(l.avro.Avro.createDefaultLogger().logSavePresentationFontScheme({presentation_font_scheme_id:c.id}),yield this.stateManager.saveEditedSchemeAndReloadList()):this.openPaywallModal()})}),a.button({color:f.ButtonColor.Gray,id:"text-style-customizer-copy-button",content:{icon:f.IconSmallId.Copy},disabled:!this.stateManager.isCopyButtonEnabled(),onClick:()=>v(this,void 0,void 0,function*(){b?yield this.stateManager.saveCopyAndReloadList():
this.openPaywallModal()}),tooltipText:e.I18n.ts("Make a copy"),tooltipPosition:"top"}),a.button({color:f.ButtonColor.Gray,id:"text-style-customizer-delete-button",content:{icon:f.IconSmallId.Trash},disabled:!this.stateManager.isDeleteTextStyleButtonEnabled(),onClick:()=>v(this,void 0,void 0,function*(){b?(l.avro.Avro.createDefaultLogger().logDeletePresentationFontScheme({presentation_font_scheme_id:c.id}),yield this.stateManager.deleteEditedSchemeAndReturnToRoot()):this.openPaywallModal()}),tooltipText:e.I18n.ts("Delete"),
tooltipPosition:"top"})])}createCrossLinkToSchemeSidebar(a){return[a.infoMessage(e.I18n.ts("Did you know you can set a custom color scheme for text and other parts of your presentation?")),a.button(f.ButtonSize.Small,f.ButtonAlign.End,(a)=>[a.button({color:f.ButtonColor.Gray,id:"crosslink-to-scheme-sidebar",content:{text:e.I18n.ts("Customize colors")},onClick:()=>{l.avro.Avro.createDefaultLogger().logCustomizeColorsFromFontSchemeSidebar();this.pluginAccess.send(z.scheme,"schemeSidebar")}})])]}openPaywallModal(){this.uiRoot.dialog.showBuiltIn(f.BuiltinDialog.upgradeLicenseTextScheme)}};
g.TextStylePlugin.SIDEBAR_ID="text-sidebar";g.TextStylePlugin.CUSTOMIZER_PAGE_ID="scheme-customizer-page";g.TextStylePlugin.SIDEBAR_TITLE=e.I18n.ts("Text");g.TextStylePlugin.ID_CUSTOM_SECTION="schemes-custom";g.TextStylePlugin.ID_CUSTOM_PREVIEW_SECTION="schemes-custom-preview";g.TextStylePlugin.ID_PRESET_SECTION="schemes-preset";g.TextStylePlugin.ID_UNSAVED_SECTION="schemes-unsaved";g.TextStylePlugin.DEFAULT_SCHEME_TITLE=e.I18n.ts("Untitled style");g.TextStylePlugin.DELETE_ALL_CONFIRM_DIALOG_ID="delete-all-confirm-dialog-id";
m={};Object.defineProperty(m,"__esModule",{value:!0});m.lazyModule={createPlugin(){return new g.TextStylePlugin}};return m});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_text_style",["require","prezi_cet_model_editor","prezi_editor_commander","prezi_featureswitcher","prezi_font_provider","prezi_i18n","prezi_logger","prezi_plugin_api","prezi_plugin_meta","prezi_service_fontcatalogue","prezi_textstyleprovider","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_text_style.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_cet_model_editor"),require("prezi_editor_commander"),require("prezi_featureswitcher"),require("prezi_font_provider"),require("prezi_i18n"),require("prezi_logger"),require("prezi_plugin_api"),require("prezi_plugin_meta"),require("prezi_service_fontcatalogue"),require("prezi_textstyleprovider"),require("prezi_utils"));}else{this["prezi_text_style"]=__factory(this["prezi_cet_model_editor"],this["prezi_editor_commander"],this["prezi_featureswitcher"],this["prezi_font_provider"],this["prezi_i18n"],this["prezi_logger"],this["prezi_plugin_api"],this["prezi_plugin_meta"],this["prezi_service_fontcatalogue"],this["prezi_textstyleprovider"],this["prezi_utils"]);}}).call(this);
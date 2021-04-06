;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_contextmenu";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.engine.dom":dependencies[0],"prezi.geometry":dependencies[1],"prezi_app_utils":dependencies[2],"prezi_bacon":dependencies[3],"prezi_canvas_listener":dependencies[4],"prezi_cet":dependencies[5],"prezi_cet_model":dependencies[6],"prezi_cet_model_editor":dependencies[7],"prezi_commenting":dependencies[8],"prezi_editor_commander":dependencies[9],"prezi_editor_controller":dependencies[10],"prezi_editor_store_contextmenu":dependencies[11],"prezi_editor_store_mode":dependencies[12],"prezi_editor_store_object":dependencies[13],"prezi_editor_store_ui":dependencies[14],"prezi_featureswitcher":dependencies[15],"prezi_i18n":dependencies[16],"prezi_logger":dependencies[17],"prezi_select":dependencies[18],"prezi_spellcheck":dependencies[19],"prezi_styleschemeprovider":dependencies[20],"prezi_uaparser":dependencies[21],"prezi_utils":dependencies[22]}};})());};})(arguments);var moduleImpl=(function(){return module(function(f){var C=f.dependencies.prezi_app_utils,k=f.dependencies.prezi_bacon,D=f.dependencies.prezi_canvas_listener,q=f.dependencies.prezi_cet,m=f.dependencies.prezi_cet_model,v=f.dependencies.prezi_cet_model_editor,E=f.dependencies.prezi_editor_commander,w=f.dependencies.prezi_editor_controller,A=f.dependencies.prezi_editor_store_mode,B=f.dependencies.prezi_editor_store_object,x=f.dependencies.prezi_featureswitcher,l=f.dependencies.prezi_i18n,p=f.dependencies.prezi_logger,t=f.dependencies.prezi_select,
y=f.dependencies.prezi_styleschemeprovider,F=f.dependencies.prezi_uaparser,z={};Object.defineProperty(z,"__esModule",{value:!0});z.ta=class{constructor(a,b,e,c,h,d,g,G,f,l,m,n,p,q){this.Da=a;this.mainStage=b;this.scene=e;this.Ja=c;this.Ga=h;this.ka=d;this.ya=g;this.Ea=G;this.ia=f;this.wa=l;this.i=m;this.qa=n;this.Fa=p;this.openPopup=q;this.j=k.Bacon.newBus();this.j.onValue((a)=>this.openPopup(a));this.va=k.Bacon.newBus();this.fa=k.Bacon.newBus();this.v=k.Bacon.newBus();this.ga=k.Bacon.newBus();this.pa=
k.Bacon.newBus();this.o=k.Bacon.newBus();this.ha=k.Bacon.newBus();this.ba=k.Bacon.newBus();this.la=k.Bacon.newBus();this.Ca()}za(a){var b=this.scene.getEntityById(a);if(null==b)return null;var e=b.get(t.SelectionModule.getDecoratorKey());if(null==e)return null;b=null;e=e.ownerIds;1===e.length&&(b=this.scene.getEntityById(e[0]),b=b.isDef(m.CetModel.ID.Z_TOPIC_CONTAINER)?b.getId():null);return this.oa(a)?b:null}addPreviewMouseInteractionStream(a){this.ba.plug(a)}getEntityIdForContextMenuInPreviewStream(){return this.la}Ba(){k.Bacon.combineWith(({event:a},
b)=>{const e=this.na(a.stagePos);return{pagePos:a.pagePos,stagePos:a.stagePos,entityId:null==e?b:e.getId()}},this.ba,this.ka).sampledBy(this.ba).onValue(({pagePos:a,stagePos:b,entityId:e})=>{this.la.push(e);this.sa(a,b,[this.w(e,0)],[this.scene.getEntityById(e)])})}setTextEditorController(a){this.ca=a}Ha(a,b,e){return a&&v.CetModelEditor.isOverview(e,b)}oa(a){a=this.scene.getEntityById(a).get(t.SelectionModule.getDecoratorKey());return null!=a&&a.interactionType===t.InteractionType.clickable}Ca(){this.Ba();
var a=this.Da.filter((a)=>a.type===D.MouseInteractionType.ContextMenu);a=k.Bacon.combineWith5((a,e,c,h,d)=>({aa:a,selectionInfo:e,propertyBarProps:c,currentTopicId:h,coverEditMode:d}),a,this.Ga,this.Ea,this.ka,this.ya).sampledBy(a).map((a)=>{var b=this.na(a.aa.event.stagePos);let c=[];if(null!=b){c=[b.getId()];const e=-1!==a.selectionInfo.allEntityIds.indexOf(b.getId());this.oa(b.getId())||!e&&q.Cet.hasPdomComponent(b)||(c=a.selectionInfo.allEntityIds);if(!e){b=q.Cet.hasPdomComponent(b)?[b.getId()]:
[...b.get(t.SelectionModule.getDecoratorKey()).ownerIds];var {groupIds:h,entities:d}=t.SelectionModule.getGroupsWithEntities(this.scene,b);this.v.push({selectedGroupIds:h,selectedEntityIds:d.map((a)=>a.getId()),type:B.SelectActionType.replace})}}else b=a.selectionInfo,this.v.push({selectedGroupIds:b.groupIds,selectedEntityIds:b.allEntityIds,type:B.SelectActionType.remove});return Object.assign(Object.assign({},a),{selection:c})}).filter((a)=>!(0<a.selection.length&&v.CetModelEditor.isPlanetOrStack(a.currentTopicId,
this.scene)&&a.currentTopicId===a.selection[0]));this.xa=a.map((a)=>({entityIds:a.selection}));a.onValue((a)=>{let {pagePos:b,stagePos:r}=a.aa.event;const h=a.selection.map((a)=>this.scene.getEntityById(a));let d=[];if(0<a.selection.length){if(1===a.selection.length){const b=this.scene.getEntityById(a.selection[0]);if(b.getDef()===m.CetModel.ID.Z_TEXT&&null!=this.i&&this.i.isSpellcheckEnabled()){var g=this.mainStage.getCamera().screenPointToWorld(a.aa.event.stagePos);this.ca.selectRightClickedWord_forSpellCheck(g);
g=this.ca.getSelectedTextFromEntity_forSpellCheck(b,!0);if(!this.i.isWordCorrect(g,b)){g=this.i.getSuggestions(g,b);const a=this.ca.getSelection_forSpellCheck(b);0<g.length&&null!=a?(d.push(c.ContextMenuModule.createContextMenuHeader(l.I18n.ts("Did you mean?"),c.Lookup.CONTEXT_MENU_SPELLCHECK_DID_YOU_MEAN,10)),g.map((e,g)=>{d.push(c.ContextMenuModule.createContextMenuItemWithClass(e,()=>{this.Fa.executeApiCommand({name:"fix spelling",run:(d)=>{d=d.lookup.text(b.getId());null!=d&&d.setText(e,a.start,
a.end-a.start)}});p.avro.Avro.createDefaultLogger().logReplaceMisspelledWord({dictionary_language:this.i.getLanguage()})},`${c.Lookup.CONTEXT_MENU_SPELLCHECK_SUGGESTION}-${g}`,"context-menu-semibold",10))})):d.push(c.ContextMenuModule.createContextMenuHeader(l.I18n.ts("No suggestions"),c.Lookup.CONTEXT_MENU_SPELLCHECK_NO_SUGGESTIONS,10));0<d.length&&!d[d.length-1].isDivider()&&d.push(c.ContextMenuModule.createContextMenuDivider(15));p.avro.Avro.createDefaultLogger().logShowedSuggestionsForMisspelledWord({dictionary_language:this.i.getLanguage(),
spelling_suggestion:0<g.length})}}}const b=this.scene.getEntityById(a.selection[0]);g=1===a.selection.length&&null!=b&&b.getDef()===m.CetModel.ID.Z_ZOOM_AREA;!1===g&&(d.push(c.ContextMenuModule.createContextMenuItemWithShortcut(l.I18n.ts("Cut"),()=>{p.avro.Avro.createDefaultLogger().logCutObject({object_type:b,object_id:b.getId()});this.o.push(w.CopyPasteType.CUT)},c.Lookup.CONTEXT_MENU_CUT,{key:"X",osCmd:!0},18)),d.push(c.ContextMenuModule.createContextMenuItemWithShortcut(l.I18n.ts("Copy"),()=>
{p.avro.Avro.createDefaultLogger().logCopyObject({object_type:b,object_id:b.getId()});this.o.push(w.CopyPasteType.COPY)},c.Lookup.CONTEXT_MENU_COPY,{key:"C",osCmd:!0},19)),this.da(d,h));d.push(c.ContextMenuModule.createContextMenuItem(l.I18n.ts("Delete"),()=>{const b=a.selection.concat(q.Cet.createHierarchyQuery(this.scene).getDescendantEntities(a.selection));this.pa.push({entityIds:b,trigger:"CONTEXT_DELETE"})},c.Lookup.CONTEXT_MENU_DELETE,21));g||(d.push(c.ContextMenuModule.createContextMenuDivider(40)),
d.push(c.ContextMenuModule.createContextMenuDivider(60)));if(1===a.selection.length){let b=this.scene.getEntityById(a.selection[0]);q.Cet.createHierarchyQuery(this.scene).isZTopicContainer(a.selection[0])&&d.push(this.ma(b.getId(),A.CoverEditModeKind.advanced))}this.Ia(d,a);g||d.push(c.ContextMenuModule.createContextMenuDivider(119));1===a.selection.length&&(d.push(c.ContextMenuModule.createContextMenuDivider(148)),d.push(this.w(a.selection[0],150)))}else{this.da(d,h);d.push(c.ContextMenuModule.createContextMenuDivider(25));
d.push(c.ContextMenuModule.createContextMenuDivider(125));null==a.coverEditMode&&v.CetModelEditor.isPlanetOrStack(a.currentTopicId,this.scene)&&d.push(this.ma(a.currentTopicId,A.CoverEditModeKind.insideAdvanced));d.push(c.ContextMenuModule.createContextMenuDivider(135));g=q.Cet.createEditorPath(this.scene).hasCustomStartPoint();const b=this.Ha(g,this.scene,a.currentTopicId);g=c.Lookup.CONTEXT_MENU_START_PRESENTATION;d.push(c.ContextMenuModule.createContextMenuItemWithShortcut(l.I18n.ts("Start presentation"),
()=>{this.ga.push({newMode:C.EditorMode.playback,trigger:"contextmenu",shouldGoFullscreen:!0,shouldSeekPathToStart:b,showTopmenu:!0,linkClickedFlow:!1,presenterNotesFlow:!1});p.avro.Avro.createDefaultLogger().logOpenToPresent()},g,F.PreziUAParser.switchWinMac({key:"F5"},{key:"P",osCmd:!0}),140));d.push(c.ContextMenuModule.createContextMenuDivider(145));d.push(this.w(a.currentTopicId,150))}(x.isActive("js-developer-features")||x.isActive("js-lab-menu"))&&d.push(c.ContextMenuModule.createContextMenuDivider(899));
d=this.Ka(d);this.sa(b,r,d,h)})}Ia(a,b){if(x.isActive("js-bb-snippet-editing")&&1===b.selection.length){var e=q.Cet.createTopicChildrenQuery(this.scene),r=b.selection[0],h=(a,b)=>null==a?"[SNIPPET] Unset tint/color":b?`[SNIPPET] ${y.PaletteColorType[a]} (current)`:`[SNIPPET] Tint/color with ${y.PaletteColorType[a]}`;b=(a,b)=>c.ContextMenuModule.createContextMenuItem(h(b,a===b),()=>{this.qa&&this.qa.setPaletteColor(r,b)},c.Lookup.CONTEXT_MENU_CHANGE_LAYOUT_ROLE,75);if(e.isVisibleOutside(r)){e=this.scene.getEntityById(r);
let d=E.EditorCommander.createColorMixCommander().getPaletteColorForEntity(this.scene,r);if(e.isDef(m.CetModel.ID.Z_IMAGE)||e.isDef(m.CetModel.ID.Z_PDF)||e.isDef(m.CetModel.ID.Z_SHAPE)||e.isDef(m.CetModel.ID.Z_LINE)||e.isDef(m.CetModel.ID.Z_ARROW))a.push(...[b(d,y.PaletteColorType.TopicAColor)]),null!=d&&a.push(b(d,null))}}}sa(a,b,e,r){this.fa.push(c.ContextMenuModule.createContextMenuState(a,b,e));this.j.push("contextMenuPopup");r.forEach((a)=>{const b=this.za(a.getId());p.avro.Avro.createDefaultLogger().logOpenObjectContextMenu({object_type:null!=
b?"TOPIC_ZOOM_AREA":a,object_id:null!=b?b:a.getId()})})}Aa(a){this.ha.push(a)}ma(a,b){let e=l.I18n.ts("Advanced topic editing",{context:"Context menu option that enters advanced topic cover editing mode."});return c.ContextMenuModule.createContextMenuItemWithShortcut(e,()=>{this.ia&&this.ia.startCoverEditing(a,"CONTEXT-MENU",[],b)},c.Lookup.CONTEXT_MENU_ADVANCED_TOPIC_EDIT,{key:"E",osCmd:!0},70)}da(a,b){a.push(c.ContextMenuModule.createContextMenuItemWithShortcut(l.I18n.ts("Paste"),()=>{b.forEach((a)=>
{p.avro.Avro.createDefaultLogger().logPasteObject({object_type:a})});this.o.push(w.CopyPasteType.PASTE)},c.Lookup.CONTEXT_MENU_PASTE,{key:"V",osCmd:!0},20))}Ka(a){return a.map((a)=>{let b=a.getOnClick();return"function"===typeof b?a.setOnClick(()=>{this.j.push(null);b.call(this)}):a})}getOpenPopupActionStream(){return this.j}getOpenModalActionStream(){return this.va}getSelectActionStream(){return this.v}getContextMenuRequestStream(){return this.xa}getChangeContextMenuStateActionStream(){return this.fa}getChangeModeAction(){return this.ga}getObjectDeleteActionStream(){return this.pa}getCopyPasteActionStream(){return this.o}getCommentOnEntityStream(){return this.ha}na(a){a=
this.mainStage.getCamera().screenPointToWorld(a);a=this.Ja.getEntityIdUnderPoint(a);return this.scene.getEntityById(a)}w(a,b){return c.ContextMenuModule.createContextMenuItem(l.I18n.ts("Add comment"),()=>this.Aa(a),c.Lookup.CONTEXT_MENU_ADD_COMMENT,b).setDisabled(!this.wa.isCommentingEnabled())}};var n={};Object.defineProperty(n,"__esModule",{value:!0});n.f=class{constructor(a,b,e="",c=!1,h=null,d=!1,g="",f=null){this.text=a;this.onClick=b;this.lookupId=e;this.$=c;this.ra=h;this.disabled=d;this.ea=
g;this.weight=f}clone(){return new n.f(this.text,this.onClick,this.lookupId,this.$,this.ra,this.disabled,this.ea,this.weight)}equals(a){return this.toString()===a.toString()}toString(){return this.isDivider()?"-__-":this.text}getText(){return this.text}getOnClick(){return this.onClick}isDivider(){return this.$}getLookupId(){return this.lookupId}setText(a){const b=this.clone();b.text=a;return b}setOnClick(a){const b=this.clone();b.onClick=a;return b}setDivider(a){const b=this.clone();b.$=a;return b}setLookupId(a){const b=
this.clone();b.lookupId=a;return b}setDisabled(a){const b=this.clone();b.disabled=a;return b}getDisabled(){return this.disabled}getAdditionalClassName(){return this.ea}getShortcutDefinition(){return this.ra}setWeight(a){const b=this.clone();b.weight=a;return b}getWeight(){return this.weight}};var u={};Object.defineProperty(u,"__esModule",{value:!0});u.u=class{constructor(a,b,e=[]){this.pagePos=a;this.stagePos=b;this.items=e}equals(a){return null!=a&&this.pagePos.x===a.getPagePos().x&&this.pagePos.y===
a.getPagePos().y&&this.stagePos.x===a.getStagePos().x&&this.stagePos.y===a.getStagePos().y&&u.u.ua(this.items,a.getItems())}getPagePos(){return this.pagePos}getStagePos(){return this.stagePos}getItems(){return this.items}};u.u.ua=function(a,b){if(null===b||a.length!==b.length)return!1;for(let e=a.length,c=0;c<e;c++)if(!a[c].equals(b[c]))return!1;return!0};var c={};Object.defineProperty(c,"__esModule",{value:!0});(function(a){a.CONTEXT_MENU_START_PRESENTATION="context-menu-start-presentation";a.CONTEXT_MENU_BRING_TO_FRONT=
"context-menu-bring-to-front";a.CONTEXT_MENU_SEND_TO_BACK="context-menu-send-to-back";a.CONTEXT_MENU_DELETE="context-menu-delete";a.CONTEXT_MENU_COPY="context-menu-copy";a.CONTEXT_MENU_CUT="context-menu-cut";a.CONTEXT_MENU_PASTE="context-menu-paste";a.CONTEXT_CHANGE_BACKGROUND="background-image";a.CONTEXT_CHANGE_COLORS="color-mixer-context-menu-item";a.CONTEXT_INSERT_TEXT="ctx-text-editing-insert-text";a.CONTEXT_INSERT_IMAGE="context-menu-image-insert";a.CONTEXT_MENU_ADD_COMMENT="context-menu-add-comment";
a.CONTEXT_MENU_ADD_ANIMATION="context-menu-add-animation";a.CONTEXT_MENU_TOGGLE_IMAGE_AS_PLACEHOLDER="toggle-image-as-placeholder";a.CONTEXT_MENU_ADVANCED_TOPIC_EDIT="context-menu-cover-edit";a.CONTEXT_MENU_NEW_TOPIC="context-menu-new-topic";a.CONTEXT_MENU_CONVERT_TO_VISUAL="context-menu-convert-to-visual";a.CONTEXT_MENU_CONVERT_TO_COVER="context-menu-convert-to-cover";a.CONTEXT_MENU_CONVERT_TO_CONTENT="context-menu-convert-to-content";a.CONTEXT_MENU_CONVERT_TO_SURFACE="context-menu-convert-to-surface";
a.CONTEXT_MENU_CONVERT_TO_MASTER="context-menu-convert-to-master";a.CONTEXT_MENU_CHANGE_LAYOUT_ROLE="context-menu-change-layout-role";a.CONTEXT_MENU_SPELLCHECK_SUGGESTION="context-menu-spellcheck-suggestion";a.CONTEXT_MENU_SPELLCHECK_DID_YOU_MEAN="context-menu-spellcheck-did-you-mean";a.CONTEXT_MENU_SPELLCHECK_NO_SUGGESTIONS="context-menu-spellcheck-no-suggestions";a.CONTEXT_MENU_INLINE_STYLES="debug-clean-inline-styles-selection";a.CONTEXT_MENU_APPLY_SNIPPETS="debug-apply-snippets";a.CONTEXT_MENU_COPY_OBJECT_ID=
"debug-copy-object-id";a.CONTEXT_MENU_MULTISELECT="ctx-menu-extended-selection"})(c.Lookup||(c.Lookup={}));(function(a){a.createContextMenu=function(a,c,f,h,d,g,k,l,m,n,p,q,t,u,v,w){return new z.ta(a,c,f,h,d,g,k,l,m,n,t,u,v,w)};a.createContextMenuState=function(a,c,f){return new u.u(a,c,f)};a.createContextMenuItem=function(a,c,f,h){return new n.f(a,c,f,!1,null,!1,"",h)};a.createContextMenuItemWithShortcut=function(a,c,f,h,d){return new n.f(a,c,f,!1,h,!1,"",d)};a.createContextMenuDivider=function(a){return new n.f("",
()=>{},"",!0,null,!1,"",a)};a.createContextMenuHeader=function(a,c,f){return new n.f(a,()=>{},c,!1,null,!0,"context-menu-semibold",f)};a.createContextMenuItemWithClass=function(a,c,f,h,d){return new n.f(a,c,f,!1,null,!1,h,d)}})(c.ContextMenuModule||(c.ContextMenuModule={}));return c});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_contextmenu",["require","prezi.engine.dom","prezi.geometry","prezi_app_utils","prezi_bacon","prezi_canvas_listener","prezi_cet","prezi_cet_model","prezi_cet_model_editor","prezi_commenting","prezi_editor_commander","prezi_editor_controller","prezi_editor_store_contextmenu","prezi_editor_store_mode","prezi_editor_store_object","prezi_editor_store_ui","prezi_featureswitcher","prezi_i18n","prezi_logger","prezi_select","prezi_spellcheck","prezi_styleschemeprovider","prezi_uaparser","prezi_utils"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_contextmenu.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.engine.dom"),require("prezi.geometry"),require("prezi_app_utils"),require("prezi_bacon"),require("prezi_canvas_listener"),require("prezi_cet"),require("prezi_cet_model"),require("prezi_cet_model_editor"),require("prezi_commenting"),require("prezi_editor_commander"),require("prezi_editor_controller"),require("prezi_editor_store_contextmenu"),require("prezi_editor_store_mode"),require("prezi_editor_store_object"),require("prezi_editor_store_ui"),require("prezi_featureswitcher"),require("prezi_i18n"),require("prezi_logger"),require("prezi_select"),require("prezi_spellcheck"),require("prezi_styleschemeprovider"),require("prezi_uaparser"),require("prezi_utils"));}else{this["prezi_contextmenu"]=__factory(this["prezi.engine.dom"],this["prezi.geometry"],this["prezi_app_utils"],this["prezi_bacon"],this["prezi_canvas_listener"],this["prezi_cet"],this["prezi_cet_model"],this["prezi_cet_model_editor"],this["prezi_commenting"],this["prezi_editor_commander"],this["prezi_editor_controller"],this["prezi_editor_store_contextmenu"],this["prezi_editor_store_mode"],this["prezi_editor_store_object"],this["prezi_editor_store_ui"],this["prezi_featureswitcher"],this["prezi_i18n"],this["prezi_logger"],this["prezi_select"],this["prezi_spellcheck"],this["prezi_styleschemeprovider"],this["prezi_uaparser"],this["prezi_utils"]);}}).call(this);
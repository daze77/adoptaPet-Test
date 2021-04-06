;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_canvas_listener";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi.geometry":dependencies[0],"prezi_bacon":dependencies[1],"prezi_editor_store_focus":dependencies[2]}};})());};})(arguments);var moduleImpl=(function(){return module(function(m){var e=m.dependencies.prezi_bacon,l=m.dependencies.prezi_editor_store_focus,t=m.dependencies["prezi.geometry"],h={};Object.defineProperty(h,"__esModule",{value:!0});h.i=class{constructor(a){this.Da=a;this.m=e.Bacon.newBus();this.o=e.Bacon.newBus();this.za()}za(){const a=e.Bacon.newBus();this.Da.slidingWindow(2,1).onValue((c)=>{if(1===c.length)a.push(c[0]);else{var f=c[0];c=c[1];c.action!==b.MouseAction.MouseUp&&0!==(f.buttons&b.MouseButtons.LEFT)&&0===(c.buttons&b.MouseButtons.LEFT)?
a.push(Object.assign(Object.assign({},c),{action:b.MouseAction.MouseUp})):a.push(c)}});var c=a.filter(this.J(b.MouseAction.MouseMove)),f=a.filter(this.J(b.MouseAction.MouseDown)),k=a.filter(this.J(b.MouseAction.MouseUp));k=f.merge(k).skipDuplicates((a,c)=>a.action===c.action).filter((a)=>a.action===b.MouseAction.MouseUp);var d=this.fa(a,b.MouseAction.MouseDown,b.MouseAction.MouseUp),n=this.fa(a,b.MouseAction.MouseUp,b.MouseAction.MouseDown);d=this.ra(c.filterWithStream(d.toProperty(!1)));var g=this.sa(f,
d);d=g.filter(this.ia(h.i.K)).map(()=>!0).merge(f.map(()=>!1));const l=this.va(g.filter(this.ia(h.i.K)),k.filterWithStream(d.toProperty(!1)));c=this.ta(c.filterWithStream(n.toProperty(!0)));n=this.wa(a.filter(this.J(b.MouseAction.MouseScroll)));f=this.pa(k,f,g);g=this.qa(a.filter(this.J(b.MouseAction.ContextMenu)));this.m.plug(g);this.m.plug(f);this.m.plug(l);this.m.plug(c);this.m.plug(n);this.o.plug(d);this.o.plug(k.map(()=>!1))}fa(a,c,b){return a.filter(function(a){return a.action===c||a.action===
b}).map(function(a){return a.action===c})}getMouseInteractionStream(){return this.m}getFocusStream(){return this.o.skipDuplicates()}dispose(){this.m.end()}qa(a){return a.map((a)=>({type:b.MouseInteractionType.ContextMenu,event:a,baseEvent:null}))}ra(a){return a.map((a)=>({type:b.MouseInteractionType.DragMove,event:a,baseEvent:null,entities:null}))}ta(a){return a.map((a)=>({type:b.MouseInteractionType.HoverMove,event:a,baseEvent:null}))}wa(a){return a.map(function(a){return{type:b.MouseInteractionType.Zoom,
event:a,baseEvent:null}})}J(a){return function(c){return c.action===a}}sa(a,c){return e.Bacon.combineWith(function(a,c){return{type:b.MouseInteractionType.DragMove,event:c.event,baseEvent:a}},a,c).toEventStream().sampledBy(c)}oa(a){return(c)=>this.O(c.event,c.baseEvent)<a}ia(a){return(c)=>this.O(c.event,c.baseEvent)>=a}O(a,c){return t.Geometry.distance(a.stagePos,c.stagePos)}va(a,c){return a.sampledBy(c).map(function(a){return{type:b.MouseInteractionType.DragEnd,event:a.event,baseEvent:a.baseEvent}}).merge(a)}W(a,
c){return c.timestamp-a.timestamp>h.i.ma||this.O(a.event,c.event)>h.i.K?!1:a.event.shiftKey===c.event.shiftKey}u(a,c){return{type:[null,b.MouseInteractionType.Click,b.MouseInteractionType.DoubleClick,b.MouseInteractionType.TripleClick][c],event:a,baseEvent:null}}ua(a){return 1===a.length?this.u(a[0].event,1):2===a.length?this.W(a[0],a[1])?this.u(a[1].event,2):this.u(a[1].event,1):3===a.length?this.W(a[1],a[2])?this.W(a[0],a[1])?this.u(a[2].event,3):this.u(a[2].event,2):this.u(a[2].event,1):null}pa(a,
c,b){b=b.map(this.oa(h.i.K)).merge(c.map(()=>!0)).toProperty(!0).skipDuplicates();return c.toProperty(null).sampledBy(a).filter((a)=>null!=a).filterWithStream(b.toProperty()).map((a)=>({event:a,timestamp:(new Date).getTime()})).slidingWindow(3,1).map((a)=>this.ua(a))}};h.i.ma=500;h.i.K=2;var p={};Object.defineProperty(p,"__esModule",{value:!0});p.la=class{constructor(a){this.ga=e.Bacon.newBus();this.ba=a;this.canvas=a.getCanvas();this.j=a.getCanvasContainer();this.f=this.j.parentNode;this.ja();this.L=
(a)=>this.ya(a);this.w()}dispose(){this.removeListener(this.f,"touchstart");this.removeListener(this.f,"touchend");this.removeListener(this.f,"touchmove");this.removeListener(this.f,"mousedown");this.removeListener(this.f,"mousewheel");this.removeListener(this.f,"wheel");this.removeListener(this.j.ownerDocument,"mousemove",!0);this.removeListener(this.j.ownerDocument,"mouseup",!0);this.removeListener(this.j.ownerDocument,"gesturestart")}removeListener(a,c,b=!1){null!=a.removeEventListener?a.removeEventListener(c,
this.L,b):a.detachEvent("on"+c,this.L)}w(){this.addListener(this.f,"touchstart");this.addListener(this.f,"touchend");this.addListener(this.f,"touchmove");this.addListener(this.f,"mousedown");this.addListener(this.f,"mousewheel");this.addListener(this.f,"wheel");this.addListener(this.f,"contextmenu");this.addListener(this.j.ownerDocument,"mousemove",!0);this.addListener(this.j.ownerDocument,"mouseup",!0);this.addListener(this.j.ownerDocument,"gesturestart")}addListener(a,c,b=!1){null!=a.addEventListener?
a.addEventListener(c,this.L,b):a.attachEvent("on"+c,this.L)}ja(){this.ca={x:Math.floor(this.ba.getSize().width/2),y:Math.floor(this.ba.getSize().height/2)}}xa(a){let c;switch(a.type){case "mouseup":case "touchend":case "doubletap":c=0===a.button||1===a.which?b.MouseAction.MouseUp:b.MouseAction.MouseRightUp;break;case "mousedown":case "touchstart":c=0===a.button||1===a.which?b.MouseAction.MouseDown:b.MouseAction.MouseRightDown;break;case "mousemove":case "touchmove":c=b.MouseAction.MouseMove;break;
case "mousewheel":case "transform":case "wheel":c=b.MouseAction.MouseScroll;break;case "contextmenu":c=b.MouseAction.ContextMenu}this.ja();var f=$(this.canvas).offset(),k=f.left;f=f.top;var d=a.clientX,e=a.clientY;null===d&&null!=a.touches&&0<a.touches.length&&(d=a.touches[0].clientX,e=a.touches[0].clientY);k=Math.round(d-k-this.ca.x);f=Math.round(e-f-this.ca.y);e=(1===a.deltaMode?16:1)*a.deltaY*-30||a.wheelDeltaY/4||void 0===a.wheelDeltaY&&a.wheelDelta/4||-10*a.detail||0;d=a.target;d=!d||d===this.f||
d.parentNode===this.f||d.parentNode&&d.parentNode.parentNode===this.f||this.Ea(d);let g=a.buttons;if(null==g)switch(a.which){case 0:g=b.MouseButtons.NONE;break;case 1:g=b.MouseButtons.LEFT;break;case 2:g=b.MouseButtons.MIDDLE;break;case 3:g=b.MouseButtons.RIGHT}return{action:c,buttons:g,stagePos:{x:k,y:f},wheelDeltaY:e,altKey:a.altKey,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,metaKey:a.metaKey,pagePos:{x:a.pageX,y:a.pageY},onCanvas:d}}ya(a){const c=this.xa(a);switch(a.type){case "mousedown":a.preventDefault();
break;case "contextmenu":case "gesturestart":a.preventDefault();a.stopPropagation();break;case "wheel":if(a.ctrlKey){a.preventDefault();a.stopPropagation();return}}this.ga.push(c)}getMouseStream(){return this.ga}Ea(a){let c=!1;for(;;){if(null==a||!(a instanceof HTMLElement))return!1;const b=a.className;c=c||null!=b&&0<=b.indexOf("gadgetFadeOnHover");if(a===this.f)return c;a=a.parentNode}}};var q={};Object.defineProperty(q,"__esModule",{value:!0});q.na=class{constructor(a){this.v=e.Bacon.newBus();
a.onValue((a)=>{a?this.w():this.aa()})}w(){$(document).on("keydown.KeyboardListener",(a)=>{this.da(a)});$(document).on("keyup.KeyboardListener",(a)=>{this.da(a)})}aa(){$(document).off(".KeyboardListener")}da(a){a=a?a:window.event;a.keyCode!==b.Key.TAB&&a.keyCode!==b.Key.ALT||a.preventDefault();this.v.push(a)}getKeyboardEventStream(){return this.v}};var r={};Object.defineProperty(r,"__esModule",{value:!0});r.ka=class{constructor(a,b){this.v=e.Bacon.newBus();this.o=e.Bacon.newBus();this.ha=e.Bacon.newBus();
this.N=new p.la(a);this.M=new h.i(this.N.getMouseStream());this.Ca=new q.na(b);b.onValue((a)=>{a?this.w():this.aa()});this.ea=e.Bacon.combineWith3((a,b,c)=>b===l.ComponentFocusMode.none||b===l.ComponentFocusMode.canvas||this.Aa(a)||c&&b===l.ComponentFocusMode.textEditor&&this.Ba(a)?a:null,this.v,this.o.toProperty(l.ComponentFocusMode.none),this.ha.toProperty(!1)).sampledBy(this.v).toEventStream().filter((a)=>null!=a)}Aa(a){return void 0!==a.key?"Shift"===a.key||"Meta"===a.key||"Control"===a.key||
"Alt"===a.key:a.keyCode===b.Key.SHIFT||a.keyCode===b.Key.CTRL||a.keyCode===b.Key.ALT||a.keyCode===b.Key.MAC_META_LEFT||a.keyCode===b.Key.MAC_META_RIGHT||a.keyCode===b.Key.WIN_META_RIGHT}Ba(a){return a.keyCode===b.Key.UP_ARROW||a.keyCode===b.Key.DOWN_ARROW||a.keyCode===b.Key.LEFT_ARROW||a.keyCode===b.Key.RIGHT_ARROW}w(){$(document).on("keydown.CanvasListenerImpl",(a)=>{this.U(a)});$(document).on("keypress.CanvasListenerImpl",(a)=>{this.U(a)});$(document).on("keyup.CanvasListenerImpl",(a)=>{this.U(a)})}aa(){$(document).off(".CanvasListenerImpl")}U(a){this.v.push(a?
a:window.event)}addComponentFocusStream(a){this.o.plug(a)}addNonEditedTextInFocusStream(a){this.ha.plug(a)}getKeyboardUpStream(){return this.getKeyboardStream().filter((a)=>"keyup"===a.type)}getKeyboardStream(){return this.ea}getKeyboardEventStream(){return this.Ca.getKeyboardEventStream()}getMouseStream(){return this.N.getMouseStream()}getMouseInteractionStream(){return this.M.getMouseInteractionStream()}getFocusStream(){return this.M.getFocusStream()}dispose(){this.N.dispose();this.M.dispose()}getKeyStream(a){return this.ea.filter((b)=>
("keydown"===b.type||"keyup"===b.type)&&b.keyCode===a).map((a)=>"keydown"===a.type)}};var b={};Object.defineProperty(b,"__esModule",{value:!0});(function(a){a[a.MouseUp=0]="MouseUp";a[a.MouseRightUp=1]="MouseRightUp";a[a.MouseDown=2]="MouseDown";a[a.MouseRightDown=3]="MouseRightDown";a[a.MouseMove=4]="MouseMove";a[a.MouseScroll=5]="MouseScroll";a[a.ContextMenu=6]="ContextMenu"})(b.MouseAction||(b.MouseAction={}));(function(a){a.NONE=0;a.LEFT=1;a.RIGHT=2;a.MIDDLE=4})(b.MouseButtons||(b.MouseButtons=
{}));(function(a){a[a.DragMove=0]="DragMove";a[a.DragEnd=1]="DragEnd";a[a.HoverMove=2]="HoverMove";a[a.Click=3]="Click";a[a.Zoom=4]="Zoom";a[a.DoubleClick=5]="DoubleClick";a[a.TripleClick=6]="TripleClick";a[a.ContextMenu=7]="ContextMenu"})(b.MouseInteractionType||(b.MouseInteractionType={}));(function(a){a.BACKSPACE=8;a.TAB=9;a.ENTER=13;a.SHIFT=16;a.CTRL=17;a.ALT=18;a.ESC=27;a.MAC_META_LEFT=91;a.MAC_META_RIGHT=93;a.WIN_META_RIGHT=92;a.SPACE=32;a.PAGE_UP=33;a.PAGE_DOWN=34;a.END=35;a.HOME=36;a.LEFT_ARROW=
37;a.UP_ARROW=38;a.RIGHT_ARROW=39;a.DOWN_ARROW=40;a.DELETE=46;a.AT=64;a.A=65;a.B=66;a.C=67;a.D=68;a.E=69;a.F=70;a.G=71;a.H=72;a.I=73;a.P=80;a.R=82;a.S=83;a.T=84;a.V=86;a.X=88;a.Y=89;a.Z=90;a.a=97;a.b=98;a.F5=116})(b.Key||(b.Key={}));(function(a){a.KEYDOWN="keydown";a.KEYUP="keyup"})(b.KeyboardEventType||(b.KeyboardEventType={}));(function(a){a[a.SAVE=0]="SAVE";a[a.NEXT_TOPIC=1]="NEXT_TOPIC";a[a.PREVIOUS_TOPIC=2]="PREVIOUS_TOPIC";a[a.POPUP_CLOSE=3]="POPUP_CLOSE";a[a.GO_TO_EDIT_MODE=4]="GO_TO_EDIT_MODE";
a[a.SELECT_ALL=5]="SELECT_ALL";a[a.UNDO=6]="UNDO";a[a.REDO=7]="REDO";a[a.STOP_COVEREDITING=8]="STOP_COVEREDITING";a[a.START_COVEREDITING=9]="START_COVEREDITING";a[a.COPY=10]="COPY";a[a.CUT=11]="CUT";a[a.PASTE=12]="PASTE";a[a.CUSTOM=13]="CUSTOM"})(b.ShortcutAction||(b.ShortcutAction={}));(function(a){a.createCanvasListener=function(a,b){return new r.ka(a,b)}})(b.CanvasListenerModule||(b.CanvasListenerModule={}));return b});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_canvas_listener",["require","prezi.geometry","prezi_bacon","prezi_editor_store_focus"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_canvas_listener.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi.geometry"),require("prezi_bacon"),require("prezi_editor_store_focus"));}else{this["prezi_canvas_listener"]=__factory(this["prezi.geometry"],this["prezi_bacon"],this["prezi_editor_store_focus"]);}}).call(this);
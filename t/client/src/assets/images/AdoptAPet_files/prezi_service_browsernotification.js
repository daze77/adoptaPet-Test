;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_service_browsernotification";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{}};})());};})(arguments);var moduleImpl=(function(){return module(function(f){var a={},d=this&&a.__awaiter||function(a,l,b,e){function c(a){return a instanceof b?a:new b(function(c){c(a)})}return new (b||(b=Promise))(function(b,d){function f(a){try{g(e.next(a))}catch(h){d(h)}}function k(a){try{g(e["throw"](a))}catch(h){d(h)}}function g(a){a.done?b(a.value):c(a.value).then(f,k)}g((e=e.apply(a,l||[])).next())})};Object.defineProperty(a,"__esModule",{value:!0});a.PushJsServiceFactory=class{static getInstance(){return d(this,void 0,void 0,function*(){null===
a.PushJsServiceFactory.pushjsModule&&(a.PushJsServiceFactory.pushjsModule=yield a.PushJsServiceFactory.loadPushjsModule());null===a.PushJsServiceFactory.pushJsServiceImpl&&(a.PushJsServiceFactory.pushJsServiceImpl=new k(a.PushJsServiceFactory.pushjsModule));return a.PushJsServiceFactory.pushJsServiceImpl})}static loadPushjsModule(){return d(this,void 0,void 0,function*(){return new Promise((a)=>{require([f.getResourceUrl("push.min.js")],(c)=>{a(c)})})})}};a.PushJsServiceFactory.pushjsModule=null;
a.PushJsServiceFactory.pushJsServiceImpl=null;class k{constructor(a){this.PushJs=a;this.PushJs.config({serviceWorker:"//serviceWorker.min.js"})}requestPermission(a,b){this.PushJs.Permission.request(a,b)}showNotification(a,b){this.PushJs.create(a,b)}clearAllNotifications(){this.PushJs.clear()}hasPermission(){return this.PushJs.Permission.has()}getPermission(){return this.PushJs.Permission.get()}}var b={};Object.defineProperty(b,"__esModule",{value:!0});(function(b){b.getBrowserNotificationServiceInstance=
function(){return a.PushJsServiceFactory.getInstance()}})(b.BrowserNotificaionModule||(b.BrowserNotificaionModule={}));return b});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_service_browsernotification",["require"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_service_browsernotification.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)();}else{this["prezi_service_browsernotification"]=__factory();}}).call(this);
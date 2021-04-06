;(function(){var baseUrl;var __factory=function(){var module=(function(dependencies){return function(init){return init.call({},(function(){return{getSpaghettiVersion:function(){return "13.0-25-g6015dbc";},getModuleName:function(){return "prezi_service_rtc";},getModuleVersion:function(){return "release-2021w06-base-26-gaeb382e";},getResourceUrl:function(resource){if(resource.substr(0,1)!="/"){resource="/"+resource;}return baseUrl+resource;},"dependencies":{"prezi_bacon":dependencies[0]}};})());};})(arguments);var moduleImpl=(function(){return module(function(e){var f=e.dependencies.prezi_bacon,c={},g=this&&c.__awaiter||function(a,c,b,d){function l(a){return a instanceof b?a:new b(function(b){b(a)})}return new (b||(b=Promise))(function(b,e){function f(a){try{h(d.next(a))}catch(k){e(k)}}function g(a){try{h(d["throw"](a))}catch(k){e(k)}}function h(a){a.done?b(a.value):l(a.value).then(f,g)}h((d=d.apply(a,c||[])).next())})};Object.defineProperty(c,"__esModule",{value:!0});var d;(function(a){a.Initialized="initialized";a.Connecting="connecting";
a.Connected="connected";a.Unavailable="unavailable";a.Failed="failed";a.Disconnected="disconnected"})(d||(d={}));c.PusherServiceFactory=class{static create(a){return g(this,void 0,void 0,function*(){null===c.PusherServiceFactory.pusherModule&&(c.PusherServiceFactory.pusherModule=yield c.PusherServiceFactory.loadPusherModule());return new c.PusherServiceImpl(c.PusherServiceFactory.pusherModule,a)})}static loadPusherModule(){return g(this,void 0,void 0,function*(){return new Promise((a)=>{require([e.getResourceUrl("pusher.min.js")],
(b)=>{a(b)})})})}};c.PusherServiceFactory.pusherModule=null;c.PusherServiceImpl=class{constructor(a,b){this.pusherConstructor=a;this.connectionStatusStream=f.Bacon.newBus();this.overrideConfig=b}connect(a){this.pusherClient&&this.disconnect();const b=Object.assign(Object.assign(Object.assign({},c.PusherServiceImpl.DEFAULT_CONFIG),this.overrideConfig),{cluster:a.appCluster,authEndpoint:a.authEndpoint,auth:{params:a.authParams}});this.pusherClient=new this.pusherConstructor(a.appKey,b);this.bindToConnectionStateChanges();
this.channel=this.pusherClient.subscribe(a.channelName);this.bindToChannelSubscriptionEvents()}disconnect(){this.pusherClient&&this.pusherClient.disconnect();this.channel=this.pusherClient=null}broadcast(a,b){if(!this.channel)throw Error("Cannot broadcast messages without connecting to a channel first");this.channel.trigger(a,b)}listen(a){if(!this.channel)throw Error("Cannot listen to messages without connecting to a channel first");const b=f.Bacon.newBus();this.channel.bind(a,(a)=>{b.push(a)});return b}getCurrentMemberId(){if(!this.channel)throw Error("Cannot get member id without connecting to a channel first");
return this.channel.members.me.id.toString()}getConnectionStatusStream(){return this.connectionStatusStream}bindToConnectionStateChanges(){this.pusherClient.connection.bind("state_change",(a)=>{switch(a.current){case d.Connecting:case d.Unavailable:this.connectionStatusStream.push(b.RTCConnectionStatus.ConnectionLost);break;case d.Connected:this.connectionStatusStream.push(b.RTCConnectionStatus.Connected);break;case d.Failed:this.connectionStatusStream.push(b.RTCConnectionStatus.ConnectionFailed);
break;case d.Disconnected:this.connectionStatusStream.push(b.RTCConnectionStatus.ConnectionClosed)}})}bindToChannelSubscriptionEvents(){this.pusherClient.connection.bind("error",(a)=>{a.error.data.code===c.PusherServiceImpl.PUSHER_ERROR_CODE_OVER_CAPACITY&&this.connectionStatusStream.push(b.RTCConnectionStatus.ChannelIsFull)});this.channel.bind("pusher:subscription_succeeded",()=>{this.connectionStatusStream.push(b.RTCConnectionStatus.SubscribedToChannel)});this.channel.bind("pusher:subscription_error",
(a)=>{408===a||503===a?this.connectionStatusStream.push(b.RTCConnectionStatus.AuthenticationFailed):this.connectionStatusStream.push(b.RTCConnectionStatus.SubscriptionFailed)})}};c.PusherServiceImpl.PUSHER_ERROR_CODE_OVER_CAPACITY=4100;c.PusherServiceImpl.DEFAULT_CONFIG={encrypted:!0,authTransport:"ajax"};var b={};Object.defineProperty(b,"__esModule",{value:!0});(function(a){a.Connected="connected";a.SubscribedToChannel="subscribed-to-channel";a.AuthenticationFailed="authentication-failed";a.SubscriptionFailed=
"subscription-failed";a.ConnectionLost="connection-lost";a.ConnectionFailed="connection-failed";a.ConnectionClosed="connection-closed";a.ChannelIsFull="channel-is-full"})(b.RTCConnectionStatus||(b.RTCConnectionStatus={}));(function(a){a.createPusherService=function(a){return c.PusherServiceFactory.create(a)}})(b.RTCModule||(b.RTCModule={}));return b});

})() || {};
moduleImpl["module"]=moduleImpl;
return moduleImpl;};if(typeof define==="function"&&define.amd){define("prezi_service_rtc",["require","prezi_bacon"],function(){var moduleUrl=arguments[0]["toUrl"]("prezi_service_rtc.js");baseUrl=moduleUrl.substr(0,moduleUrl.lastIndexOf("/"));return(__factory).apply({},[].slice.call(arguments,1));});}else if(typeof exports==="object"&&typeof exports.nodeName!=="string"){baseUrl=__dirname;module.exports=(__factory)(require("prezi_bacon"));}else{this["prezi_service_rtc"]=__factory(this["prezi_bacon"]);}}).call(this);
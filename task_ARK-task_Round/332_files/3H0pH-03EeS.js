if (self.CavalryLogger) { CavalryLogger.start_js(["W0bpV"]); }

__d("RoyalBluebarTransitions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INDETERMINATE:"Indeterminate",PULSE:"Pulse",SHIMMER:"Shimmer",NONE:"none",OFF:"off"})}),null);
__d("RoyalBluebar",["cx","Arbiter","BigPipe","CSS","Event","QuicklingFetchStreamConfig","RoyalBluebarTransitions","Run","SubscriptionsHandler","clearTimeout","ge","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=!1,j=b("QuicklingFetchStreamConfig"),k=j.experimentName,l=k!==b("RoyalBluebarTransitions").OFF&&k!==b("RoyalBluebarTransitions").NONE;function m(){h&&h()}var n={_subscriptionHandler:null,_getSubscriptionHandler:function(){this._subscriptionHandler||(this._subscriptionHandler=new(b("SubscriptionsHandler"))(),b("Run").onUnload(function(){this._subscriptionHandler.release(),this._subscriptionHandler=null}.bind(this)));return this._subscriptionHandler},fixOnScroll:function(a){this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed",function(c,d){c="_50ti";var e="_33rf";a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,c,d);a.firstChild instanceof Element&&b("CSS").conditionClass(a.firstChild,e,!d);b("Arbiter").inform("reflow")}))},informOnClick:function(a){this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a,"click",function(event){b("Arbiter").inform("BlueBar/homeClick",event)===!1&&event.preventDefault()}))},stopAnimatingAfterDD:function(){var a=b("Arbiter").subscribeOnce(b("BigPipe").Events.init,function(a,c){c.arbiter.subscribeOnce(b("BigPipe").Events.displayed,m)}),c=b("Run").onAfterLoad(m);h=function(){h=null,b("Arbiter").unsubscribe(a),c.remove(),n.stopTransitionAnimation()}},startTransitionAnimation:function(){if(l){h&&h();var a=b("ge")(j.bluebarTransitionElement);a&&b("CSS").addClass(a,j.bluebarTransitionClass)}},stopTransitionAnimation:function(){__p&&__p();var a;if(l){var a=function(){__p&&__p();var a=j,c=b("ge")(a.bluebarTransitionElement);if(!c)return{v:void 0};k===b("RoyalBluebarTransitions").INDETERMINATE?i||(function(){i=!0;b("CSS").addClass(c,"finishing");var d=void 0;h=function(){h=null,i=!1,b("clearTimeout")(d),b("CSS").removeClass(c,"finishing"),b("CSS").removeClass(c,a.bluebarTransitionClass)};d=b("setTimeoutAcrossTransitions")(h,200)})():b("CSS").removeClass(c,a.bluebarTransitionClass)}();if(typeof a==="object")return a.v}}};e.exports=n}),null);
__d("FullScreen",["Event","Arbiter","CSS","UserAgent","UserAgent_DEPRECATED","throttle","Keys"],(function(a,b,c,d,e,f){__p&&__p();var g={},h=!1,i=function(a){b("Event").getKeyCode(a)===b("Keys").ESC&&a.stopPropagation()},j=function(){h||(document.addEventListener("keydown",i,!0),h=!0)},k=function(){h&&(document.removeEventListener("keydown",i,!0),h=!1)};a=Object.assign(new(b("Arbiter"))(),{listenForEvent:function(a){var c=b("throttle")(this.onChange,0,this);g[a.id]||(g[a.id]=!0,b("Event").listen(a,{webkitfullscreenchange:c,mozfullscreenchange:c,MSFullscreenChange:c,fullscreenchange:c}))},enableFullScreen:function(a){__p&&__p();this.listenForEvent(a);if(a.webkitRequestFullScreen)b("UserAgent_DEPRECATED").chrome()?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen();else if(a.mozRequestFullScreen)a.mozRequestFullScreen();else if(a.msRequestFullscreen)j(),a.msRequestFullscreen();else if(a.requestFullScreen)a.requestFullScreen();else return!1;return!0},disableFullScreen:function(){__p&&__p();if(document.webkitCancelFullScreen)document.webkitCancelFullScreen();else if(document.mozCancelFullScreen)document.mozCancelFullScreen();else if(document.msExitFullscreen)document.msExitFullscreen();else if(document.cancelFullScreen)document.cancelFullScreen();else if(document.exitFullScreen)document.exitFullScreen();else return!1;return!0},isFullScreen:function(){return document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement},toggleFullScreen:function(a){if(this.isFullScreen()){this.disableFullScreen();return!1}else return this.enableFullScreen(a)},onChange:function(){var a=this.isFullScreen();b("CSS").conditionClass(document.body,"fullScreen",a);this.inform("changed");a||k()},isSupportedWithKeyboardInput:function(){return this.isSupported()&&!b("UserAgent").isBrowser("Safari")},isSupported:function(){var a=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return a||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen}});c=b("throttle")(a.onChange,0,a);b("Event").listen(document,{webkitfullscreenchange:c,mozfullscreenchange:c,MSFullscreenChange:c,fullscreenchange:c});e.exports=a}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","BanzaiScuba","CSS","Event","getDocumentScrollElement","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o=!1,p={init:function(a){__p&&__p();a=b("queryThenMutateDOM").bind(null,function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){(h!==l||i!==m||j!==n)&&(b("CSS").conditionClass(g,"tinyViewport",h),b("CSS").conditionClass(g,"tinyWidth",i),b("CSS").conditionClass(g,"tinyHeight",j),b("CSS").conditionClass(g,"canHaveFixedElements",!h),p.inform("change",h),b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},b("Arbiter").BEHAVIOR_STATE),l=h,m=i,n=j);if(!o){var a=new(b("BanzaiScuba"))("www_tinyview_port",null,{addBrowserFields:!0});a.addInteger("clientWidth",g.clientWidth);a.addInteger("clientHeight",g.clientHeight);a.addNormal("view",h?"tiny":"normal");a.post();o=!0}},"TinyViewport");a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(p,b("ArbiterMixin"));e.exports=p}),null);
__d("AsyncData",[],(function(a,b,c,d,e,f){__p&&__p();var g=Object.create(null),h=Object.create(null),i=Object.create(null);a={resolve:function(a,b){var c=i[a]={result:b,status:"success"};g[a]&&(g[a].forEach(function(a){return a(c.result)}),delete g[a]);delete h[a]},reject:function(a,b){var c=i[a]={error:b,status:"error"};h[a]&&(h[a].forEach(function(a){return a(c.error)}),delete h[a]);delete g[a]},preload:function(a){var b={};b.onLoaded=j.bind(null,a,b);b.onError=k.bind(null,a,b);return b},blockDisplayUntilLoaded:function(a){var b=a.bigPipeContext;a=a.preloader;b=b?b.registerToBlockDisplayUntilDone_DONOTUSE():function(){};a.onLoaded(b).onError(b)}};function j(a,b,c){var d=i[a];d&&!d.error?c(d.result):(g[a]=g[a]||[],g[a].push(c));return b}function k(a,b,c){var d=i[a];d?d.status==="error"&&c(d.error):(h[a]=h[a]||[],h[a].push(c));return b}e.exports=a}),null);
__d("AsyncDataPreloader",["AsyncData"],(function(a,b,c,d,e,f){__p&&__p();function a(a){a=a.id;this.$1=a;this.$2=b("AsyncData").preload.call(null,this.$1)}a.prototype.onLoaded=function(a){"use strict";this.$2.onLoaded(a);return this};a.prototype.onError=function(a){"use strict";this.$2.onError(a);return this};a.prototype.getContextProvider=function(){"use strict";return null};e.exports=a}),null);
__d("enumerate",[],(function(a,b,c,d,e,f){"use strict";e.exports=function(b){return b.FB_enumerate}(a)}),null);
__d("promiseFinally",["Promise"],(function(a,b,c,d,e,f){function a(a,c){return a.then(function(a){return b("Promise").resolve(c()).then(function(){return a})},function(a){return b("Promise").resolve(c()).then(function(){throw a})})}e.exports=a}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["8hqOr"]); }

__d("MercuryJewelCountControl",["Arbiter","MercuryDispatcher","MercuryThreadInformer","MercuryUnseenState","UserActivity"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";__p&&__p();var c=b("MercuryDispatcher").get(),d=b("MercuryThreadInformer").get();this.$2=b("MercuryUnseenState").get();this.render();c.subscribe("model-update-completed",function(a,b){this.$3(!1)}.bind(this));d.subscribe("unseen-updated",function(){return this.render()}.bind(this));this.$1=a;this.$1.subscribe("marked-seen",function(){this.$3(!0)}.bind(this))}a.prototype.render=function(){"use strict";var a=this.$2.getUnseenCount();b("Arbiter").inform("jewel/count-updated",{jewel:"mercurymessages",count:a},b("Arbiter").BEHAVIOR_STATE)};a.prototype.$3=function(a){"use strict";(a||this.$1.isOpen()&&b("UserActivity").isActive())&&this.$2.markAsSeen()};a.constructStores=function(){"use strict";b("MercuryUnseenState").get()};e.exports=a}),null);
__d("WorkGalahadBadgingActions",["WorkGalahadDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){b("WorkGalahadDispatcher").dispatch({type:"galahad/update_badge_count",section:a,count:c})};e.exports={updateCount:a}}),null);
__d("WorkGalahadBadging",["MercuryDispatcher","MercuryJewelCountControl","MercuryServerPayloadPreprocessor","MercurySyncEnvironment","MercuryThreadInformer","MercuryUnseenState","NotificationConstants","NotificationSeenState","NotificationUpdates","SubscriptionsHandler","WorkGalahadAppTabID","WorkGalahadBadgingActions","createObjectFrom","GlobalNotificationSubscriptionsSubscription","GlobalNotificationSyncSubscription"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("NotificationConstants").PayloadSourceType,h=0,i=new(b("SubscriptionsHandler"))();a={initNotifications:function(a){b("GlobalNotificationSubscriptionsSubscription");b("GlobalNotificationSyncSubscription");b("NotificationUpdates").handleUpdate(g.INITIAL_LOAD,{seenState:b("createObjectFrom")(a,h)});a=function(){return b("WorkGalahadBadgingActions").updateCount(b("WorkGalahadAppTabID").NOTIFICATIONS,b("NotificationSeenState").getUnseenCount())};a();i.addSubscriptions(b("NotificationUpdates").subscribe("seen-state-updated",a))},initMessages:function(a){b("MercuryDispatcher").get();b("MercurySyncEnvironment").setUp();b("MercuryUnseenState").get();b("MercuryJewelCountControl").constructStores();b("MercuryServerPayloadPreprocessor").get().handleUpdate(a);a=function(){return b("WorkGalahadBadgingActions").updateCount(b("WorkGalahadAppTabID").CHATS,b("MercuryUnseenState").get().getUnseenCount())};a();i.addSubscriptions(b("MercuryThreadInformer").get().subscribe("unseen-updated",a))}};e.exports=a}),null);
__d("WorkGalahadBadgingStore",["FluxReduceStore","immutable","WorkGalahadDispatcher","WorkGalahadBadgeTitleUpdater"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;g=babelHelpers.inherits(i,b("immutable").Record({badgeCounts:b("immutable").Map()}));g&&g.prototype;function i(){g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new i()};a.prototype.reduce=function(a,c){switch(c.type){case"galahad/update_badge_count":c=a.set("badgeCounts",a.badgeCounts.set(c.section,c.count));var d=c.get("badgeCounts").reduce(function(a,b){return a+b},0);b("WorkGalahadBadgeTitleUpdater").updateBadge(d);return c;default:return a}};a.prototype.getBadgeCounts=function(){return this.getState().badgeCounts};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("WorkGalahadDispatcher"))}),null);
__d("WorkGalahadQuickPipeRequest",["QuickPipeRequest"],(function(a,b,c,d,e,f){"use strict";var g;g=babelHelpers.inherits(a,b("QuickPipeRequest"));g&&g.prototype;a.prototype._preBootloadFirstResponse=function(a){return!1};function a(){g.apply(this,arguments)}e.exports=a}),null);
__d("WorkGalahadRouting",["AjaxPipeRequest","Arbiter","ContextualComponent","PageHooks","PageEvents","PageTransitionsRegistrar","Quickling","QuicklingAugmenter","Run","TimerStorage","WorkGalahadQuickPipeRequest","cancelAnimationFrame","cancelIdleCallback","clearImmediate","clearInterval","clearTimeout","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1;a={init:function(){if(g)return;g=!0;b("Run").onAfterLoad(function(){b("PageTransitionsRegistrar").registerHandler(h,1)})}};function h(a){__p&&__p();b("AjaxPipeRequest").setCurrentRequest(null);a=b("QuicklingAugmenter").augmentURI(a);if(!b("Quickling").isPageActive(a))return!1;b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME,b("cancelAnimationFrame"));b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK,b("cancelIdleCallback"));b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE,b("clearImmediate"));b("TimerStorage").clearAll(b("TimerStorage").INTERVAL,b("clearInterval"));b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT,b("clearTimeout"));b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD,{transition_type:"quickling"});var c="content";i(c);new(b("WorkGalahadQuickPipeRequest"))(c,a).send();c=window.__bodyWrapper;c.getCodeUsage&&c.clearCodeUsage();return b("PageTransitionsRegistrar").DELAY_HISTORY}function i(a){var c=function(){var c=b("ge")(a);c=b("ContextualComponent").forNode(c);c&&c.cleanup();b("PageHooks").runHooks("onleavehooks")};c()}e.exports=a}),null);
__d("WorkGalahadAppTabContentHeader.react",["cx","LeftRight.react","React","WorkGalahadConfig","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.className;a=a.tabID;return b("React").createElement(b("LeftRight.react"),{className:b("joinClasses")("_3-96 _3-9a _2pi9 _66uk",c)},b("React").createElement(b("XUIText.react"),{className:"_1qte _13s8",display:"block",weight:"bold"},b("WorkGalahadConfig").tabs[a].title),h(a))}function h(a){a=b("WorkGalahadConfig").tabs[a].content.action;return!a?null:b("React").createElement(a,null)}e.exports=a}),null);
__d("WorkGalahadBookmark.react",["List.react","React","WorkGalahadLinkNavItem.react","WorkGalahadNavStateContainer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var c=null;a.nestedBookmarks&&a.isBookmarkExpanded&&(c=b("React").createElement(b("List.react"),{border:"none",direction:"vertical",spacing:"none"},a.nestedBookmarks.map(function(a,b){return g(a,b)})));return b("React").createElement(b("React").Fragment,null,g(a),c)}function g(a,c){return b("React").createElement(b("WorkGalahadLinkNavItem.react"),{ajaxify:a.ajaxify,entityKey:a.entityKey,href:a.href,icon:a.icon,key:c,rel:a.rel,title:a.title})}e.exports=b("WorkGalahadNavStateContainer").create(a,function(a){return a.entityKey})}),null);
__d("WorkGalahadNavCollapsibleList.react",["React","WorkGalahadNavList.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={collapsed:!0},b}a.prototype.render=function(){var a=this.props.children;this.state.collapsed&&(a=a.slice(0,this.props.maxShown));return b("React").createElement(b("WorkGalahadNavList.react"),{seeMore:{enabled:this.state.collapsed&&this.props.children.length>this.props.maxShown,onClick:function(){return this.setState({collapsed:!1})}.bind(this)},seeLess:{enabled:!this.state.collapsed,onClick:function(){return this.setState({collapsed:!0})}.bind(this)}},a)};e.exports=a}),null);
__d("WorkGalahadSearchBar.react",["React","UIPagelet"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="search_div_id";c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.state={pagelet:null},b}a.prototype.componentDidMount=function(){this.$1()};a.prototype.$1=function(){if(!this.state.pagelet){var a=b("UIPagelet").loadFromEndpoint("FacebarPagelet",h,{},{append:!1,displayCallback:function(a){a()},usePipe:!1});this.setState({pagelet:a})}};a.prototype.render=function(){return b("React").createElement("div",{className:this.props.className},b("React").createElement("div",{id:h}))};e.exports=a}),null);
__d("WorkGalahadAppTabContent.react",["cx","List.react","React","TrackingNodes","WorkGalahadAppTabContentHeader.react","WorkGalahadBookmark.react","WorkGalahadConfig","WorkGalahadNavCollapsibleList.react","WorkGalahadNavList.react","WorkGalahadSearchBar.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){a=a.selectedAppTabID;var c=b("WorkGalahadConfig").tabs[a];return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("WorkGalahadAppTabContentHeader.react"),{className:"_67jt",tabID:a}),b("React").createElement(b("WorkGalahadSearchBar.react"),{className:"_4jel _3-8x _2pi9 _5i94"+(c.hideSearchbar?" _31-e":"")}),b("React").createElement(b("List.react"),{border:"none",className:"_67ju","data-ft":b("TrackingNodes").getTrackingInfo(c.trackingNodeType),direction:"vertical",spacing:"none"},h(a)))}function h(a){a=b("WorkGalahadConfig").tabs[a].content;var c=a.bookmarks.map(function(a,c){var d=a.icon?{normal:a.icon.normal,selected:a.icon.selected}:undefined;return b("React").createElement(b("WorkGalahadBookmark.react"),{ajaxify:a.ajaxify,nestedBookmarks:a.nestedBookmarks,entityKey:a.entityKey,href:a.href,icon:d,key:"st"+c,rel:a.rel,title:a.title})}),d=null;c.length!==0&&(a.defaultBookmarkCount?d=b("React").createElement(b("WorkGalahadNavCollapsibleList.react"),{maxShown:a.defaultBookmarkCount},c):d=b("React").createElement(b("WorkGalahadNavList.react"),null,c));c=a.dynamicItems.map(function(a,c){return b("React").createElement(a,{key:"dy"+c})});return b("React").createElement(b("React").Fragment,null,d,c)}e.exports=a}),null);
__d("WorkGalahadChannel.react",["cx","FlexLayout.react","FluxContainer","React","WorkGalahadAppTabContent.react","WorkGalahadNavStore"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.getStores=function(){return[b("WorkGalahadNavStore")]};a.calculateState=function(){return{selectedAppTabID:b("WorkGalahadNavStore").getSelectedAppTabID()}};a.prototype.render=function(){return b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_21ra",direction:"vertical"},b("React").createElement(b("WorkGalahadAppTabContent.react"),{selectedAppTabID:this.state.selectedAppTabID}))};function a(){h.apply(this,arguments)}e.exports=b("FluxContainer").create(a)}),null);
__d("WorkGalahadAppTabSelector.react",["cx","AbstractBadge.react","FlexLayout.react","Image.react","Link.react","React","TrackingNodes","WorkGalahadNavActions","WorkGalahadAppTabID","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c=a.badgeCount,d=a.href,e=a.icon,f=a.id,g=a.title,i=a.selected;a=a.trackingNodeType;return b("React").createElement(b("Link.react"),{href:d,onClick:function(){return b("WorkGalahadNavActions").selectAppTabID(f)},className:"_3fau"+(f===b("WorkGalahadAppTabID").PROFILE?" _368s":"")+(i?" _3fb1":"")+" _3-95","data-ft":b("TrackingNodes").getTrackingInfo(a)},b("React").createElement(b("FlexLayout.react"),{justify:"center",align:"center",direction:"vertical"},b("React").createElement("div",{className:"_17pk"},b("React").createElement(b("Image.react"),{className:"_369h",src:e}),h(c)),b("React").createElement(b("XUIText.react"),{display:"block",size:"body3"},g)))}function h(a){return!a?null:b("React").createElement(b("AbstractBadge.react"),{allowZero:!1,className:"_3fb8",count:a,maxCount:20,type:"special"})}e.exports=a}),null);
__d("WorkGalahadAppTabSelectors.react",["cx","FlexLayout.react","FluxContainer","React","WorkGalahadAppTabSelector.react","WorkGalahadBadgingStore","WorkGalahadConfig","WorkGalahadNavStore"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(){return[b("WorkGalahadNavStore"),b("WorkGalahadBadgingStore")]}function c(){return{badgeCounts:b("WorkGalahadBadgingStore").getBadgeCounts(),selectedAppTabID:b("WorkGalahadNavStore").getSelectedAppTabID()}}function d(a){var c=a.badgeCounts,d=a.selectedAppTabID;a=Object.keys(b("WorkGalahadConfig").tabs).map(function(a){var e=b("WorkGalahadConfig").tabs[a],f=e.href,g=e.icon,h=e.title,i=e.selectedIcon;e=e.trackingNodeType;var j=a===d;return b("React").createElement(b("WorkGalahadAppTabSelector.react"),{badgeCount:c.get(a),href:f,icon:j?i||g:g,id:a,key:a,title:h,selected:j,trackingNodeType:e})});return b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_4p9z",direction:"vertical"},a)}e.exports=b("FluxContainer").createFunctional(d,a,c)}),null);
__d("WorkGalahadNub.react",["cx","React","Tooltip.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("React").createElement(b("Tooltip.react"),{alignH:"center",className:"_3-8n",display:"block",position:"left",tooltip:a.title},a.children)}e.exports=a}),null);
__d("WorkGalahadNubs.react",["cx","FlexLayout.react","React","WorkGalahadConfig","WorkGalahadNub.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=Object.keys(b("WorkGalahadConfig").nubs).map(function(a){var c=b("WorkGalahadConfig").nubs[a].title,d=b("WorkGalahadConfig").nubs[a].component;return b("React").createElement(b("WorkGalahadNub.react"),{key:a,title:c},b("React").createElement(d,null))});return b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_4pa9",direction:"vertical"},a)}e.exports=a}),null);
__d("WorkGalahadNavColumn.react",["cx","FlexLayout.react","React","WorkGalahadAppTabSelectors.react","WorkGalahadNubs.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("React").createElement(b("FlexLayout.react"),{align:"stretch",className:"_3-uq",direction:"vertical",justify:"all"},b("React").createElement(b("WorkGalahadAppTabSelectors.react"),null),b("React").createElement(b("WorkGalahadNubs.react"),null))}e.exports=a}),null);
__d("WorkGalahadSkeleton.react",["cx","Event","FlexLayout.react","React","SubscriptionsHandler","queryThenMutateDOM"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=h.constructor).call.apply(a,[this].concat(e)),this.$2=new(b("SubscriptionsHandler"))(),this.state={leftColumnWidth:undefined},this.$4=function(a){this.$1=a}.bind(this),this.$3=function(){if(!this.$1)return;var a=this.$1.parentElement;if(!(a instanceof HTMLElement))return;var c=void 0;b("queryThenMutateDOM")(function(){return c=a.offsetWidth},function(){return this.setState({leftColumnWidth:c})}.bind(this))}.bind(this),c}a.prototype.componentDidMount=function(){this.$3(),this.$2.addSubscriptions(b("Event").listen(window,"resize",this.$3))};a.prototype.render=function(){var a=this.props,c=a.channel,d=a.entity;a=a.nav;return b("React").createElement(b("FlexLayout.react"),{align:"stretch"},b("React").createElement("div",{className:"_2-42"},b("React").createElement(b("FlexLayout.react"),{align:"stretch",containerRef:this.$4,className:"_3i-r",style:{width:this.state.leftColumnWidth}},b("React").createElement("div",{className:"_29na"},a),b("React").createElement("div",{className:"_19o3"},c))),b("React").createElement("div",{className:"_29nb"},d))};e.exports=a}),null);
__d("WorkGalahad",["$","DOMContainer.react","React","ReactDOM","WorkGalahadChannel.react","WorkGalahadNavColumn.react","WorkGalahadSkeleton.react","WorkGalahadNavActions","WorkGalahadNavStore","WorkGalahadBadging","WorkGalahadBadgingStore","WorkGalahadDispatcher","WorkGalahadNotificationsFilterStore","WorkGalahadRouting","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){var c=a.container;a=a.initialData;h(a);a=b("$")("content");b("nullthrows")(a.parentNode).removeChild(a);b("ReactDOM").render(b("React").createElement(i,{entityContainer:a}),c)}function h(a){var c=a.defaultAppTabID,d=a.entityKey,e=a.mercuryJewelData;a=a.unseenNotifs;b("WorkGalahadRouting").init();b("WorkGalahadDispatcher").explicitlyRegisterStores([b("WorkGalahadBadgingStore"),b("WorkGalahadNavStore"),b("WorkGalahadNotificationsFilterStore")]);b("WorkGalahadNavActions").setActiveEntityKey(d);b("WorkGalahadNavActions").selectAppTabID(c);b("WorkGalahadBadging").initNotifications(a);b("WorkGalahadBadging").initMessages(e)}g=babelHelpers.inherits(i,b("React").Component);g&&g.prototype;i.prototype.render=function(){return b("React").createElement(b("WorkGalahadSkeleton.react"),{nav:b("React").createElement(b("WorkGalahadNavColumn.react"),null),channel:b("React").createElement(b("WorkGalahadChannel.react"),null),entity:b("React").createElement(b("DOMContainer.react"),{display:"block"},this.props.entityContainer)})};function i(){g.apply(this,arguments)}e.exports={render:a}}),null);
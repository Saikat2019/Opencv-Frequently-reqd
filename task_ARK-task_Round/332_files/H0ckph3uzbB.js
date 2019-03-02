if (self.CavalryLogger) { CavalryLogger.start_js(["WyZRK"]); }

__d("AvailableListConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({ON_AVAILABILITY_CHANGED:"buddylist/availability-changed",ON_UPDATE_ERROR:"buddylist/update-error",ON_UPDATED:"buddylist/updated",ON_CHAT_NOTIFICATION_CHANGED:"chat-notification-changed",OFFLINE:0,IDLE:1,ACTIVE:2,MOBILE:3,WEB_STATUS:"webStatus",FB_APP_STATUS:"fbAppStatus",MESSENGER_STATUS:"messengerStatus",OTHER_STATUS:"otherStatus",STATUS_ACTIVE:"active",STATUS_IDLE:"idle",STATUS_OFFLINE:"offline"});e.exports=a}),null);
__d("ChatConfig",["ChatConfigInitialData"],(function(a,b,c,d,e,f){__p&&__p();var g={};a={get:function(a,b){return a in g?g[a]:b},set:function(a){if(arguments.length>1){var b={};b[a]=arguments[1];a=b}Object.assign(g,a)},getDebugInfo:function(){return g}};a.set(b("ChatConfigInitialData"));e.exports=a}),null);
__d("ChatQuietLinks",["DataStore","DOM","Event","Parent","UserAgent_DEPRECATED","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();var g={};a={silenceLinks:function(a){h(a,this.removeEmptyHrefs.bind(this))},nukeLinks:function(a){h(a,this.removeAllHrefs.bind(this))},removeEmptyHrefs:function(a){i(a,function(a){return!a||a==="#"})},removeAllHrefs:function(a){i(a)}};function h(a,c){__p&&__p();var d=!!b("UserAgent_DEPRECATED").chrome(),e=!!b("UserAgent_DEPRECATED").chrome()||b("UserAgent_DEPRECATED").ie()>=9||b("UserAgent_DEPRECATED").firefox()>=4;if(g[b("getOrCreateDOMID")(a)])return;g[b("getOrCreateDOMID")(a)]=!0;if(!e)return;if(!d){c&&c(a);return}b("Event").listen(a,"mouseover",function(a){a=b("Parent").byTag(a.getTarget(),"a");if(a){var c=a.getAttribute("href");j(c)&&(b("DataStore").set(a,"stashedHref",a.getAttribute("href")),a.removeAttribute("href"))}});b("Event").listen(a,"mouseout",function(a){a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").remove(a,"stashedHref");j(c)&&a.setAttribute("href",c)});b("Event").listen(a,"mousedown",function(a){if(!a.isDefaultRequested())return!0;a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").get(a,"stashedHref");j(c)&&a.setAttribute("href",c)})}function i(a,c){a=b("DOM").scry(a,"a");c&&(a=a.filter(function(a){return c(a.getAttribute("href"))}));a.forEach(function(a){a.removeAttribute("href"),a.tabIndex||a.setAttribute("tabindex",0)})}function j(a){return a&&a!=="#"}e.exports=a}),null);
__d("PresenceUtil",["CurrentUser","randomInt"],(function(a,b,c,d,e,f){var g=b("randomInt")(0,4294967295)+1;function a(){return g}function c(){return b("CurrentUser").isLoggedInNow()}e.exports={getSessionID:a,hasUserCookie:c}}),null);
__d("PresencePrivacy",["Arbiter","AsyncRequest","ChannelConstants","CurrentUser","PresencePrivacyInitialData","JSLogger","PresenceUtil"],(function(a,b,c,d,e,f){__p&&__p();var g="/ajax/chat/privacy/settings.php",h="/ajax/chat/privacy/online_policy.php",i="/ajax/chat/privacy/visibility.php",j="friend_visibility",k="visibility",l="online_policy",m=babelHelpers["extends"]({},b("PresencePrivacyInitialData").privacyData),n=b("PresencePrivacyInitialData").visibility,o=babelHelpers["extends"]({},b("PresencePrivacyInitialData").privacyData),p=n,q=b("PresencePrivacyInitialData").onlinePolicy,r=q,s=[],t=!1;function u(){return b("JSLogger").create("blackbird")}var v=Object.assign(new(b("Arbiter"))(),{WHITELISTED:1,BLACKLISTED:-1,UNLISTED:0,ONLINE:1,OFFLINE:0,ONLINE_TO_WHITELIST:0,ONLINE_TO_BLACKLIST:1});function w(a){__p&&__p();var c;for(c in a){var d=a[c];if(c==b("CurrentUser").getID()){u().error("set_viewer_visibility");throw new Error("Invalid to set current user's visibility")}switch(d){case v.WHITELISTED:case v.BLACKLISTED:case v.UNLISTED:break;default:u().error("set_invalid_friend_visibility",{id:c,value:d});throw new Error("Invalid state: "+d)}}for(c in a)m[c]=a[c];v.inform("privacy-changed")}function x(a,b){var c={};c[a]=b;w(c)}function y(a){switch(a){case v.ONLINE:case v.OFFLINE:break;default:u().error("set_invalid_visibility",{value:a});throw new Error("Invalid visibility: "+a)}n=a;v.inform("privacy-changed");v.inform("privacy-user-presence-changed")}function z(a){switch(a){case v.ONLINE_TO_WHITELIST:case v.ONLINE_TO_BLACKLIST:break;default:throw new Error("Invalid default online policy: "+a)}q=a;v.inform("privacy-user-presence-changed");v.inform("privacy-changed")}function A(a,b){t=!0,a.send()}function B(a,b){s.push({request:a,data:b});if(!t){a=s.shift();A(a.request,a.data)}}function C(a,b){var c=a.type;if(c===j){v.inform("privacy-availability-changed");for(var d in a.settings)o[d]=a.settings[d]}else c===k?p=a.visibility:c===l&&(r=a.online_policy),v.inform("privacy-user-presence-response");u().log("set_update_response",{data:a,response:b})}function D(a,b){n!==p&&y(p),q!==r&&z(r),Object.assign(m,o),v.inform("privacy-changed"),s=[],u().log("set_error_response",{data:a,response:b})}function E(a){t=!1;if(s.length>0){a=s.shift();A(a.request,a.data)}}function F(a,c){if(b("PresenceUtil")!=null){var d=a.getData();d.window_id=b("PresenceUtil").getSessionID();a.setData(d)}a.setHandler(C.bind(this,c)).setErrorHandler(D.bind(this,c)).setTransportErrorHandler(D.bind(this,c)).setFinallyHandler(E.bind(this)).setAllowCrossPageTransition(!0);return a}function G(a,c,d){return F(new(b("AsyncRequest"))(a).setData(c),d)}function a(a,c){__p&&__p();var d=c.obj;if(d.viewer_id!=b("CurrentUser").getID()){u().error("invalid_viewer_for_channel_message",{type:a,data:c});throw new Error("Viewer got from the channel is not the real viewer")}if(d.window_id===b("PresenceUtil").getSessionID())return;var e=d.data;if(d.event=="access_control_entry")e.target_ids.forEach(function(a){x(a,e.setting),o[a]=e.setting});else{if(d.event=="visibility_update"){a=e.visibility?v.ONLINE:v.OFFLINE;y(a);p=a}else d.event=="online_policy_update"&&(z(e.online_policy),r=e.online_policy);v.inform("privacy-user-presence-response")}u().log("channel_message_received",{data:c.obj})}Object.assign(v,{WHITELISTED:1,BLACKLISTED:-1,UNLISTED:0,ONLINE:1,OFFLINE:0,ONLINE_TO_WHITELIST:0,ONLINE_TO_BLACKLIST:1,init:function(a,b,c){},setVisibility:function(a){p=n;y(a);var b={visibility:a},c={type:k,visibility:a},d=G(i,b,c);B(d,c);u().log("set_visibility",{data:b});return a},getVisibility:function(){return n},setOnlinePolicy:function(a){r=q;z(a);var b={online_policy:a},c={type:l,online_policy:a},d=G(h,b,c);B(d,c);u().log("set_online_policy",{data:b});return a},getOnlinePolicy:function(){return q},getFriendVisibility:function(a){return m[a]||v.UNLISTED},isUserOffline:function(){return this.getVisibility()===v.OFFLINE},allows:function(a){return this.isUserOffline()?!1:this.allowsIfViewerIsOnline(a)},allowsIfViewerIsOnline:function(a){var b=this.getOnlinePolicy();return b===v.ONLINE_TO_WHITELIST?m[a]==v.WHITELISTED:m[a]!=v.BLACKLISTED},getOnlinePolicyStr:function(){if(this.isUserOffline())return"offline";var a=this.getOnlinePolicy();if(a===v.ONLINE_TO_WHITELIST)return"online_to_whitelist";return a===v.ONLINE_TO_BLACKLIST?"online_to_blacklist":"unknown"},setFriendsVisibility:function(a,b){__p&&__p();if(a.length>0){var c={};for(var d=0;d<a.length;d++){var e=a[d];o[e]=m[e];c[e]=b}w(c);e=b;e==v.UNLISTED&&(e=o[a[0]]);d={users:a,setting:b,setting_type:e};a={type:j,settings:c};e=G(g,d,a);B(e,a);u().log("set_friend_visibility",{data:d})}return b},setFriendVisibilityMap:function(a,b){for(var c in a)o[c]=m[c];w(a);var d={type:j,settings:a};B(F(b,d),d);u().log("set_friend_visibility_from_map",{data:a})},allow:function(a){__p&&__p();if(this.allows(a)){u().error("allow_already_allowed");throw new Error("allow() should only be called for users that are not already allowed")}if(this.getVisibility()===v.OFFLINE){u().error("allow_called_while_offline");throw new Error("allow() should only be called when the user is already online")}var b=this.getOnlinePolicy()===v.ONLINE_TO_WHITELIST?v.WHITELISTED:v.UNLISTED;return this.setFriendsVisibility([a],b)},disallow:function(a){__p&&__p();if(!this.allows(a)){u().error("disallow_already_disallowed");throw new Error("disallow() should only be called for users that are not already disallowed")}if(this.getVisibility()===v.OFFLINE){u().error("disallow_called_while_offline");throw new Error("disallow() should only be called when the user is already online")}var b=this.getOnlinePolicy()===v.ONLINE_TO_BLACKLIST?v.BLACKLISTED:v.UNLISTED;return this.setFriendsVisibility([a],b)},getBlacklist:function(){var a=[];for(var b in m)m[b]===v.BLACKLISTED&&a.push(b);return a},getWhitelist:function(){var a=[];for(var b in m)m[b]===v.WHITELISTED&&a.push(b);return a},getMapForTest:function(){return m},setMapForTest:function(a){m=a}});v.inform("privacy-changed");v.inform("privacy-user-presence-changed",b("Arbiter").BEHAVIOR_STATE);u().log("initialized",{visibility:n,policy:q});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,c){c.presence_privacy={initial:b("PresencePrivacyInitialData").privacyData,current:m}});b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("privacy_changed"),a.bind(this));b("Arbiter").subscribe(b("ChannelConstants").ON_CONFIG,function(a,b){a=b.getConfig("visibility",null);if(a!==null&&typeof a!=="undefined"){b=a?v.ONLINE:v.OFFLINE;y(b);u().log("config_visibility",{vis:b})}}.bind(this));e.exports=v}),null);
__d("ChatVisibility",["Arbiter","JSLogger","PresencePrivacy"],(function(a,b,c,d,e,f){var g={isOnline:function(){return b("PresencePrivacy").getVisibility()===b("PresencePrivacy").ONLINE},hasBlackbirdEnabled:function(){return this.isVisibleToMostFriends()||this.isVisibleToSomeFriends()},isVisibleToMostFriends:function(){return b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_BLACKLIST&&b("PresencePrivacy").getBlacklist().length>0},isVisibleToSomeFriends:function(){return b("PresencePrivacy").getOnlinePolicy()===b("PresencePrivacy").ONLINE_TO_WHITELIST&&b("PresencePrivacy").getWhitelist().length>0},goOnline:function(a){b("PresencePrivacy").getVisibility()===b("PresencePrivacy").OFFLINE&&(b("JSLogger").create("blackbird").log("chat_go_online"),b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE),b("Arbiter").inform("chat-visibility/go-online")),a&&a()},goOffline:function(a){b("PresencePrivacy").getVisibility()===b("PresencePrivacy").ONLINE&&(b("JSLogger").create("blackbird").log("chat_go_offline"),b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE),b("Arbiter").inform("chat-visibility/go-offline")),a&&a()},toggleVisibility:function(){g.isOnline()?g.goOffline():g.goOnline()}};e.exports=g}),null);
__d("LastActiveTimes",["fbt","ServerTime"],(function(a,b,c,d,e,f,g){__p&&__p();var h={};function i(a){__p&&__p();if(!a||a<0)return null;a=b("ServerTime").get()/1e3-a;a=Math.floor(a/60);var c=Math.floor(a/60),d=Math.floor(c/24);if(a<=1)return g._({"*":"{count}m"},[g._param("count",1,[0])]);else if(a<60)return g._({"*":"{count}m"},[g._param("count",a,[0])]);else if(c<24)return g._({"*":"{count}h"},[g._param("count",c,[0])]);else if(d<3)return g._({"*":"{count}d"},[g._param("count",d,[0])]);else return null}function j(a,b){(!(a in h)||h[a]<b)&&(h[a]=b)}function k(a){if(a in h)return h[a];else return 0}a={update:function(a){for(var b in a)j(b,a[b])},getShortDisplay:function(a){return i(k(a))},get:function(a){return k(a)},getDebugData:function(){return h}};e.exports=a}),null);
__d("PresenceStatus",["ArbiterMixin","AvailableListConstants","BanzaiODS","Bootloader","ChatConfig","ChatVisibility","CurrentUser","FBIDCheck","FBLogger","LastActiveTimes","PresencePrivacy","ServerTime","createObjectFrom","debounceAcrossTransitions","gkx"],(function(a,b,c,d,e,f){__p&&__p();b("BanzaiODS").setEntitySample("presence",1e-4);var g={},h={},i={},j={},k=null,l=Object.assign({},b("ArbiterMixin")),m=b("debounceAcrossTransitions")(function(){return l.inform("change")},0);function n(a){var c,d=parseInt(a.topic.match(/\d+$/),10);a=parseInt(JSON.parse(a.payload).lat,10);var e=Date.now()-a*1e3;e=b("ChatConfig").get("active_cutoff")*1e3-e;b("LastActiveTimes").update((c={},c[d]=a,c));l.checkPresence(d);l.get(d)===b("AvailableListConstants").ACTIVE&&(clearTimeout(j[d].timeout),j[d].timeout=setTimeout(function(){l.checkPresence(d)},e))}function o(a){try{a=JSON.parse(a.payload);k=a.capabilityBitMask}catch(a){}}function p(a){return/^\d+$/.test(a)}Object.assign(l,{resetPresenceData:function(){g={},h={}},reset:function(){l.resetPresenceData(),i={}},get:function(a){!p(a)&&b("ChatConfig").get("presence_throw_for_malformed_id")&&b("FBLogger")("presence").warn("received malformed id '%s'",a);if(a==b("CurrentUser").getID())return b("ChatVisibility").isOnline()?b("AvailableListConstants").ACTIVE:b("AvailableListConstants").OFFLINE;p(a)&&!b("FBIDCheck").isUser_deprecated(a)&&!j[a]&&(b("BanzaiODS").bumpEntityKey("presence","page_subscribe"),j[a]={},b("ChatConfig").get("presence_page_green_dot_sub")&&b("Bootloader").loadModules(["RTISubscriptionManager"],function(b){b.subscribe("presence_push/fb/"+a,n)},"PresenceStatus"));var c=b("AvailableListConstants").OFFLINE;a in g&&(c=g[a]);b("PresencePrivacy").allows(a)||(c=b("AvailableListConstants").OFFLINE);return c},getCapabilities:function(a){a=h[a];return a?a:0},getViewerCapabilities:function(){if(k!==null)return k;b("Bootloader").loadModules(["RTISubscriptionManager"],function(a){a.subscribe("presence/fb/"+b("CurrentUser").getID(),o)},"PresenceStatus");k=b("ChatConfig").get("viewer_presence_capabilities");return k},isPlayingCanvasGameUser:function(a){return!!i[a]},getGroup:function(a){return a.some(function(a){return a==b("CurrentUser").getID()?!1:l.get(a)===b("AvailableListConstants").ACTIVE})?b("AvailableListConstants").ACTIVE:b("AvailableListConstants").OFFLINE},set:function(a,c,d,e,f,i){__p&&__p();if(a==b("CurrentUser").getID())return!1;var j;if(c!==null&&c!==undefined){c=c==b("AvailableListConstants").ACTIVE?b("AvailableListConstants").ACTIVE:b("AvailableListConstants").OFFLINE;d=l.get(a);j=d!=c;if((j||c==b("AvailableListConstants").ACTIVE)&&b("FBIDCheck").isUser_deprecated(a)){b("LastActiveTimes").update((e={},e[a]=b("ServerTime").get()/1e3,e))}g[a]=c}d=!1;f!==undefined&&f!==null&&(d=l.getCapabilities(a)!=f,h[a]=f);e=j||d;e&&!i&&m();return e},setPlayingCanvasGameFriends:function(a){if(!b("gkx")("AT63aD2C9-fv79urP7EIQBv3xq1MHcxwP1I6FtWmRNMg4KbjP2Am2oU4XyjW-B79fHuBlyNprN6_RmaeE-t7Y3Fw"))return;i=b("createObjectFrom")(a)},getOnlineIDs:function(){var a,c=[];for(a in g)l.get(a)===b("AvailableListConstants").ACTIVE&&c.push(a);return c},getAllIDs:function(){return Object.keys(g)},getOnlineCount:function(){return l.getOnlineIDs().length},getPresenceStats:function(){__p&&__p();var a=0,c=0,d=0;for(var e in g){a+=1;switch(l.get(e)){case b("AvailableListConstants").OFFLINE:c+=1;break;case b("AvailableListConstants").ACTIVE:d+=1;break;default:break}}return{total:a,offline:c,active:d}},getAllDebugInfo:function(){var a={};for(var b in g)a[b]={p:g[b],vc:h[b]};return a},setMultiChatproxy:function(a){var c={};for(var d in a){a[d].lat&&(c[d]=a[d].lat);var e=a[d].p;l.set(d,e,!1,"chatproxy",a[d].vc,!0)}b("LastActiveTimes").update(c);m()},setMultiActive:function(a,c){var d=!1;a.forEach(function(a){l.set(a,b("AvailableListConstants").ACTIVE,!1,c,null,!0)&&(d=!0)});d&&m()},checkPresence:function(a){var c=!1,d=Math.ceil(Date.now()/1e3)-b("LastActiveTimes").get(a);l.set(a,d<b("ChatConfig").get("active_cutoff")?b("AvailableListConstants").ACTIVE:b("AvailableListConstants").OFFLINE,!1,"pylon",null,!0)&&(c=!0);c&&m()}});e.exports=l}),null);
__d("PresenceStatusActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({AVAILABILITY_CHANGED:null})}),null);
__d("ChatDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;g=babelHelpers.inherits(a,b("ExplicitRegistrationDispatcher"));g&&g.prototype;function a(){g.apply(this,arguments)}e.exports=new a({strict:!1})}),null);
__d("ChatReliabilityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setEventData=function(a){this.$1.event_data=a;return this};c={event:!0,event_data:!0};e.exports=a}),null);
__d("ChatReliabilityEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ERROR:"error",CHANNEL_DISCONNECT:"channel_disconnect",CHANNEL_CONNECT:"channel_connect",CHANNEL_INIT:"channel_init",CHANNEL_NOCONFIG:"channel_noconfig",CHANNEL_HISTORY_INVALID:"channel_history_invalid",CHANNEL_STALLED:"channel_stalled",MESSAGE_RECEIVED:"msg_received",MESSAGE_SEND_START:"msg_send_start",THREAD_INFO_ENDPOINT_FATAL:"thread_info_fatal",DFF_ENDPOINT_FATAL:"invalidate_global_state_fatal",DFF_DELTA_INIT:"dff_initiated_by_delta",DFF_HOLE_INIT:"dff_initiated_by_hole"})}),null);
__d("ChatReliabilityInstrumentation",["ChatReliabilityEvents","ChatReliabilityTypedLogger","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(event,a){if(!b("gkx")("AT5ZjV8HMgIrvWAdtan2dRootzXgNDn_gwV31adDo4tXzlNarwl6mRO_oeBdt0f9htexVFvjQxI0k_n8DA4dQ67qv29jXbtX1X-VERmy6nzotA"))return;new(b("ChatReliabilityTypedLogger"))().setEvent(event).setEventData(a).log()};a={logERROR:function(a){g(b("ChatReliabilityEvents").ERROR,a)},logCHANNEL_DISCONNECT:function(a){g(b("ChatReliabilityEvents").CHANNEL_DISCONNECT,a)},logCHANNEL_CONNECT:function(a){g(b("ChatReliabilityEvents").CHANNEL_CONNECT,a)},logCHANNEL_HISTORY_INVALID:function(a){g(b("ChatReliabilityEvents").CHANNEL_HISTORY_INVALID,a)},logMESSAGE_RECEIVED:function(a){g(b("ChatReliabilityEvents").MESSAGE_RECEIVED,a)},logMESSAGE_SEND_START:function(a){g(b("ChatReliabilityEvents").MESSAGE_SEND_START,a)},logCHANNEL_STALLED:function(a){g(b("ChatReliabilityEvents").CHANNEL_STALLED,a)},logCHANNEL_INIT:function(a){g(b("ChatReliabilityEvents").CHANNEL_INIT,a)},logCHANNEL_NOCONFIG:function(a){g(b("ChatReliabilityEvents").CHANNEL_NOCONFIG,a)},logDFF_DELTA_INIT:function(a){g(b("ChatReliabilityEvents").DFF_DELTA_INIT,a)},logDFF_HOLE_INIT:function(a){g(b("ChatReliabilityEvents").DFF_HOLE_INIT,a)}};e.exports=a}),null);
__d("FantaConst",[],(function(a,b,c,d,e,f){"use strict";var g={DEFAULT_ALLOWED_RAISED_TABS:2,DEFAULT_MESSAGE_COUNT:10,cookieIDs:{PERSONAL_COOKIE_ID:"t3",PERSONAL_FOCUS_COOKIE_ID:"lm3",PERSONAL_TIME_COOKIE_ID:"utc3",WORK_COOKIE_ID:"t3w",WORK_FOCUS_COOKIE_ID:"lm3w",WORK_TIME_COOKIE_ID:"utc3w"},getCookieIDs:function(){return[g.cookieIDs.PERSONAL_COOKIE_ID,g.cookieIDs.PERSONAL_FOCUS_COOKIE_ID,g.cookieIDs.PERSONAL_TIME_COOKIE_ID,g.cookieIDs.WORK_COOKIE_ID,g.cookieIDs.WORK_FOCUS_COOKIE_ID,g.cookieIDs.WORK_TIME_COOKIE_ID]}};e.exports=g}),null);
__d("WebMessengerThreadPermalinks",["MercuryIDs","MessagingTag","MessengerURIConstants","URI","WWWBase","requireWeak"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={getThreadURI:function(a,c,d){var e="";b("MercuryIDs").isCanonical(a)?e=b("MercuryIDs").tokenize(a).value:b("requireWeak")("MercuryThreadIDMap",function(b){e=b.get().getServerIDFromClientIDNow(a)});d=g.getThreadURIFromServerID(e||"",d);c&&c(d)},getThreadURIFromServerID:function(a,c){__p&&__p();var d=new(b("URI"))(b("WWWBase").uri),e=b("MessengerURIConstants").FACEBOOK_PREFIX;if(c)switch(c){case b("MessagingTag").OTHER:e+="/filtered";break;case b("MessagingTag").PENDING:e+="/requests";break;case b("MessagingTag").INBOX:break;default:e+="/"+c;break}d.setPath(e+b("MessengerURIConstants").THREAD_PREFIX+a);return d.toString()},getThreadURIFromUserID:function(a,c){var d=new(b("URI"))(b("WWWBase").uri),e=b("MessengerURIConstants").FACEBOOK_PREFIX;d.setPath(h(e,c)+"/t/"+a);return d.toString()}};function h(a,c){c&&c!=b("MessagingTag").INBOX&&(a+="/"+c);return a}e.exports=g}),null);
__d("Dcode",[],(function(a,b,c,d,e,f){__p&&__p();var g,h={},i={_:"%",A:"%2",B:"000",C:"%7d",D:"%7b%22",E:"%2c%22",F:"%22%3a",G:"%2c%22ut%22%3a1",H:"%2c%22bls%22%3a",I:"%2c%22n%22%3a%22%",J:"%22%3a%7b%22i%22%3a0%7d",K:"%2c%22pt%22%3a0%2c%22vis%22%3a",L:"%2c%22ch%22%3a%7b%22h%22%3a%22",M:"%7b%22v%22%3a2%2c%22time%22%3a1",N:".channel%22%2c%22sub%22%3a%5b",O:"%2c%22sb%22%3a1%2c%22t%22%3a%5b",P:"%2c%22ud%22%3a100%2c%22lc%22%3a0",Q:"%5d%2c%22f%22%3anull%2c%22uct%22%3a",R:".channel%22%2c%22sub%22%3a%5b1%5d",S:"%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a",T:"%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a",U:"%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",V:"%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a",W:"%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a",X:"%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1",Y:"%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",Z:"%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a"};(function(){var a=[];for(var b in i)h[i[b]]=b,a.push(i[b]);a.reverse();g=new RegExp(a.join("|"),"g")})();a={encode:function(a){return encodeURIComponent(a).replace(/([_A-Z])|%../g,function(a,b){return b?"%"+b.charCodeAt(0).toString(16):a}).toLowerCase().replace(g,function(a){return h[a]})},decode:function(a){return decodeURIComponent(a.replace(/[_A-Z]/g,function(a){return i[a]}))}};e.exports=a}),null);
__d("goOrReplace",[],(function(a,b,c,d,e,f){function a(a,b,c){c?a.replace(b):a.href==b?a.reload():a.href=b}e.exports=a}),null);
__d("PresenceCookieManager",["Cookie","CurrentUser","Dcode","ErrorUtils","JSLogger","PresenceInitialData","PresenceUtil","WebStorage","WorkModeConfig"],(function(a,b,c,d,e,f){__p&&__p();var g=b("PresenceInitialData").cookieVersion,h="presence",i={},j=null,k=null,l=b("JSLogger").create("presence_cookie");function m(a){var c=b("Cookie").get(h)||"";if(c.length===0)return null;return c[0]!==a?null:c.substring(1)}function n(a,c){b("Cookie").set(h,a+c)}function o(){return!(b("PresenceInitialData").useWebStorage||!1)?null:b("WebStorage").getSessionStorage()}function p(){var a=o();a=a!=null?a.getItem(h):null;return a!=null?a.substring(1):null}function q(a){var b=o();if(b==null)return!1;b.setItem(h,"E"+a);return!0}function r(){var a=p();return a!=null?a:m("E")}function s(a){__p&&__p();a=a.state;if(a==null)return"";var c=m("S")||"",d=b("WorkModeConfig").is_work_user?"w":"f";a=b("WorkModeConfig").is_work_user?a.t3w:a.t3;a=a!=null?a.length>0:!1;var e=c.indexOf(d)!==-1;e&&!a&&(c=c.replace(d,""));!e&&a&&(c+=d);return c}function t(a,b){var c=q(a);c?n("S",b):(a.length>1024&&l.warn("big_cookie",a.length),n("E",a))}function u(){__p&&__p();try{var a=r();j!==a&&(j=a,k=null,a&&(a=b("Dcode").decode(a),k=JSON.parse(a)));if(k){if(k.user&&k.user!==b("CurrentUser").getID())return null;return k.v!==g?null:k}}catch(a){l.warn("getcookie_error",a)}return null}function v(){return parseInt(Date.now()/1e3,10)}a={register:function(a,b){i[a]=b},store:function(){__p&&__p();var a=u();if(a&&a.v&&g<a.v){l.debug("stale_cookie",g);return}var c={v:g,time:v(),user:b("CurrentUser").getID()};for(var d in i)c[d]=b("ErrorUtils").applyWithGuard(i[d],i,[a&&a[d]],function(a){a.presence_subcookie=d});a=b("Dcode").encode(JSON.stringify(c));b("PresenceUtil").hasUserCookie()&&t(a,s(c))},clear:function(){b("Cookie").clear(h);var a=b("WebStorage").getSessionStorage();a!=null&&a.removeItem(h)},getSubCookie:function(a){var b=u();return!b?null:b[a]}};e.exports=a}),null);
__d("PresenceState",["Arbiter","ErrorUtils","FantaConst","JSLogger","PresenceCookieManager","debounceAcrossTransitions","setIntervalAcrossTransitions","PresenceInitialData"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PresenceInitialData").cookiePollInterval||2e3,h=b("PresenceInitialData").shouldSuppress||!1,i=[],j=[],k=null,l=null,m=0,n=null,o=0,p=["sb2","tr","tw","at","wml"].concat(b("FantaConst").getCookieIDs()),q=b("JSLogger").create("presence_state");function r(){return b("PresenceCookieManager").getSubCookie("state")}function s(){m=Date.now(),b("PresenceCookieManager").store(),w(l)}var t=b("debounceAcrossTransitions")(s,0);function u(a){(a==undefined||isNaN(a)||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)&&(a=0);return a}function v(a){var c={};a&&(p.forEach(function(b){a&&a[b]&&(c[b]=a[b])}),m<a.ut&&q.error("new_cookie",{cookie_time:a.ut,local_time:m}));c.ut=m;for(var d=0,e=i.length;d<e;d++)b("ErrorUtils").applyWithGuard(i[d],null,[c]);l=c;return l}function w(a){o++;m=u(a&&a.ut);k||(k=b("setIntervalAcrossTransitions")(z,g));l=a;n===null&&(n=a);for(var c=0,d=j.length;c<d;c++)b("ErrorUtils").applyWithGuard(j[c],null,[a]);o--}function x(a){if(a&&a.ut)if(m<a.ut)return!0;else a.ut<m&&q.error("old_cookie",{cookie_time:a.ut,local_time:m});return!1}function y(){var a=r();x(a)&&(l=a);return l}function z(){var a=r();x(a)&&w(a)}b("PresenceCookieManager").register("state",v);b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.presence_state={initial:babelHelpers["extends"]({},n),state:babelHelpers["extends"]({},l),update_time:m,sync_paused:o,poll_time:g}});(function(){var a=y();if(a)w(a);else{q.debug("no_cookie_initial");w(v());return}})();a={doSync:function(a){if(o)return;a?s():t()},registerStateStorer:function(a){i.push(a)},registerStateLoader:function(a){j.push(a)},get:function(){return y()},getInitial:function(){return n},shouldSuppress:function(){return h},verifyNumber:u};e.exports=a}),null);
__d("everyObject",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.prototype.hasOwnProperty;function a(a,b,c){for(var d in a){var e=d;if(g.call(a,e)&&!b.call(c,a[e],e,a))return!1}return!0}e.exports=a}),null);
__d("MercuryParticipantTypes",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({USER:"user",THREAD:"thread",EVENT:"event",PAGE:"page",FRIEND:"friend",FB4C:"fb4c",NON_FRIEND:"non_friend",SERVICE:"service"})}),null);
__d("xuiglyph",[],(function(a,b,c,d,e,f){e.exports=function(a){throw new Error("xuiglyph: Unexpected xuiglyph call.")}}),null);
__d("formatNumber",["fbt","intlNumUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,c){return b("intlNumUtils").formatNumber(a,c)}function h(a,c){c=g._({"*":"{number}+"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function i(a,c){c=g._({"*":"\u003C{number}"},[g._param("number",b("intlNumUtils").formatNumberWithThousandDelimiters(a,c),[0,a])]);return c.toString()}function c(a,c,d){return a>c?h(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}function d(a,c,d){return a<c?i(c,d):b("intlNumUtils").formatNumberWithThousandDelimiters(a,d)}a.withThousandDelimiters=b("intlNumUtils").formatNumberWithThousandDelimiters;a.withMaxLimit=c;a.withMinLimit=d;e.exports=a}),null);
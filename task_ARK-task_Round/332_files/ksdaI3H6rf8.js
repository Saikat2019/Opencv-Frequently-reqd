if (self.CavalryLogger) { CavalryLogger.start_js(["fSrrE"]); }

__d("FantaReducersGetMessages",["AsyncRequest","FantaGetMessageActions","FantaTabActions","FantaTypeJoinableThread","MessengerParticipants.bs","immutable","ImmutableObject","MercuryIDs","MercuryLogMessageType","MercuryMessageStore","MercuryThreadActions","MercuryThreads","TimeSlice","UserActivity","XMNCommercePageNullStateCTAController","getPageIDFromThreadID","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MercuryThreadActions").get(),h=b("MercuryThreads").get(),i=b("FantaTabActions").Types,j=b("FantaGetMessageActions").Types,k={},l={};function a(a,b){switch(b.type){case i.OPEN_TAB:case j.CLEAR_PARTICIPANTS:a=t(a,b.tabID);break}return a}function c(a,b){switch(b.type){case i.OPEN_TAB_WITH_INTERSTITIAL_DATA:a=u(a,b.interstitialData);break}return a}function d(a,b){switch(b.type){case i.REPLACE_TAB:a=t(a,b.newTabID);break}return a}function f(a,c){__p&&__p();switch(c.type){case j.CLEAR_PREVIEW:var d=c.tabID;c=c.tokens;var e=a.mercury.tabContents.get(d);if(!e)return a;c=c.map(function(a){a=a.info.uid;return b("MercuryIDs").isValid(a)?a:b("MercuryIDs").getParticipantIDFromUserID(a)});e.messageStore&&e.messageStore.destroy();e=e.merge({messages:b("immutable").List(),hasFetchedAll:!1,messageStore:null,threadPreviewID:null,threadPreviewRecipients:b("immutable").List(c)});a=a.setIn(["mercury","tabContents",d],e);h.getThreadMeta(d,function(a){b("setImmediate")(function(){return b("FantaGetMessageActions").onGetThreadPreviewResponse(d,a)})});break}return a}function m(a,b){switch(b.type){case j.ADD_PARTICIPANTS:a=p(a,b.tabID,b.previewTabID);break}return a}function n(a,c){__p&&__p();switch(c.type){case i.LOAD_FROM_DATA:var d=a.tabGroup;c=c.tabData;var e=c.interstitialData;if(d.updatedTime>=c.updatedTime||c.updatedTime===undefined){for(var d=a.tabGroup.tabs.keys(),c=Array.isArray(d),f=0,d=c?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(c){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;var h=a.mercury.tabContents.get(g).messageStore;if(!h){h=b("MercuryIDs").getThreadFBIDFromThreadID(g);e&&e[h]?(e[h].threadID=g,a=u(a,e[h])):a=t(a,g)}}return a}else for(var h=a.tabGroup.tabs.keys(),g=Array.isArray(h),f=0,h=g?h:h[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(g){if(f>=h.length)break;c=h[f++]}else{f=h.next();if(f.done)break;c=f.value}d=c;c=b("MercuryIDs").getThreadFBIDFromThreadID(d);e&&e[c]?(e[c].threadID=d,a=u(a,e[c])):a=t(a,d)}break}return a}function o(a,b){switch(b.type){case j.FETCH_MORE_MESSAGES:b=b.threadID;var c=a.mercury.tabContents.get(b).messageStore;c&&!l[b]&&(l[b]=!0,c.fetchMoreMessages());break}return a}function p(a,c,d){h.getThreadMeta(d,function(a){b("setImmediate")(function(){return b("FantaGetMessageActions").onGetThreadPreviewResponse(c,a)})});return a}function q(a,b){switch(b.type){case j.ON_GET_THREAD_PREVIEW_RESPONSE:var c=b.tabID;b=b.thread;return r(a,c,b)}return a}function r(a,c,d){__p&&__p();var e=d.thread_id,f=new(b("MercuryMessageStore"))(e),g=a.mercury.tabContents.get(c);if(l[e]||!g)return a;l[e]=!0;g&&g.messageStore&&g.messageStore.destroy();g=g.merge({thread:d,messageStore:f});a=a.setIn(["mercury","tabContents",c],g);var h=setTimeout(function(){l[e]=!1,b("FantaGetMessageActions").onShowContextBannerTimer(c)},6e3);f.subscribe(function(a){l[e]=!1;var d=a.messages&&a.messages[0];d&&d.log_message_type&&d.log_message_type===b("MercuryLogMessageType").SERVER_ERROR&&g.messages.size===0?f.fetchMoreMessages():(clearTimeout(h),b("setImmediate")(function(){b("FantaGetMessageActions").onMessageStoreResponse(a.messages,c)}))});return a}function s(a,b){switch(b.type){case j.REFRESH_THREAD:return t(a,b.threadID)}return a}function t(a,c){__p&&__p();if(!k[c]){var d=b("getPageIDFromThreadID")(c);if(d){var e=b("XMNCommercePageNullStateCTAController").getURIBuilder();new(b("AsyncRequest"))().setURI(e.getURI()).setMethod("POST").setData({page_id:d}).setHandler(function(a){a&&a.payload&&b("FantaGetMessageActions").onPageNullResponse(c,a.payload)}).send()}k[c]=!0;h.getThreadMeta(c,function(a){b("setImmediate")(function(){return b("FantaGetMessageActions").onGetThreadResponse(a)})})}return a}function u(a,c){var d=new(b("FantaTypeJoinableThread"))(c);c=c.threadID;var e=c&&a.mercury.tabContents.get(c);e&&(e=e.merge({joinableInterstitialData:d}),a=a.setIn(["mercury","tabContents",c],e));return a}function v(a,c){switch(c.type){case j.ON_PAGE_NULL_RESPONSE:var d=c.threadID;c=c.nullStateCTA;var e=a.mercury.tabContents.get(d);e&&(e=e.merge({nullStateCTA:new(b("ImmutableObject"))(c)}),a=a.setIn(["mercury","tabContents",d],e));break}return a}function w(a,b){switch(b.type){case j.ON_GET_THREAD_RESPONSE:b=b.thread;a=x(a,b);break}return a}function x(a,b){var c=b.thread_id;k[c]=!1;var d=a.mercury.tabContents.get(c);if(!d)return a;var e=d.messageStore;!e?a=r(a,c,b):(d=d.merge({thread:b}),a=a.setIn(["mercury","tabContents",c],d));b.group_approval_queue&&b.group_approval_queue.length>0&&y(c,b.group_approval_queue);return a}function y(a,c){c=c.reduce(function(a,c){var d=c.requester;c=c.inviter;return a.concat([b("MercuryIDs").getParticipantIDFromUserID(d.id),b("MercuryIDs").getParticipantIDFromUserID(c.id)])},[]);b("MessengerParticipants.bs").getMulti(c,function(c){b("setImmediate")(function(){return b("FantaGetMessageActions").onApprovalQueueResponse(a,c)})})}function z(a,b){switch(b.type){case j.ON_GET_APPROVAL_QUEUE_RESPONSE:var c=b.tabID;b=b.membershipParticipants;var d=a.mercury.tabContents.get(c);if(!d)return a;d=d.merge({membershipParticipants:b});a=a.setIn(["mercury","tabContents",c],d)}return a}function A(a,c){switch(c.type){case j.THREADS_UPDATED:c.threads.forEach(function(c){a=x(a,new(b("ImmutableObject"))(c))})}return a}function B(a,c){__p&&__p();switch(c.type){case j.ON_MESSAGE_STORE_RESPONSE:var d=c.messages;c=c.tabID;var e=a.mercury.tabContents.get(c),f=e&&e.messageStore;if(f){f=f.hasFetchedAll();e=e.merge({hasFetchedAll:f,messages:b("immutable").List(d)});a=a.setIn(["mercury","tabContents",c],e)}break}return a}function C(a,b){switch(b.type){case j.ON_SHOW_CONTEXT_BANNER_TIMER:var c=a.mercury.tabContents.get(b.threadID);if(!c)return a;c=c.merge({showContextBanner:!0});a=a.setIn(["mercury","tabContents",b.threadID],c);break}return a}function D(a,c){__p&&__p();switch(c.type){case i.CLOSE_AND_TAB_NEXT:case i.FOCUS_NEXT_TAB:case i.FOCUS_PREVIOUS_TAB:case i.FOCUS_TAB:case i.SCROLL_BOTTOM_CHANGED:case i.UNMINIMIZE_TAB:case j.ON_GET_THREAD_RESPONSE:case j.ON_MESSAGE_STORE_RESPONSE:case j.REFRESH_THREAD:case j.THREADS_UPDATED:c=a.tabGroup.focusedTabID;if(c){var d=a.tabGroup.tabs.get(c);if(d&&!d.isMinimized&&b("UserActivity").isOnTab()&&b("UserActivity").isActive()){d=a.mercury.tabContents.get(c);d&&d.isScrolledToBottom&&E(c)}}break}return a}function E(a){var c=function(){g.markSeen(a),g.markRead(a)};b("TimeSlice").guard(c,"superfluous request to first open DD",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()}e.exports={addParticipants:m,clearPreview:f,fetchMoreMessages:o,loadFromData:n,onApprovalQueueResponse:z,onFocusChange:D,onGetThreadPreviewResponse:q,onGetThreadResponse:w,onMessageStoreResponse:B,onPageNullResponse:v,onShowContextBannerTimer:C,openInterstitialTab:c,openTab:a,refreshThread:s,replaceTab:d,threadsUpdated:A}}),null);
__d("MessengerThreadsWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLQueryBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1738318992916165"};c.getQueryID=function(){"use strict";return"2046995178955401"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("MessengerGraphQLThreadFetcher.bs",["Promise","bs_array","BanzaiODS","bs_caml_array","bs_pervasives","WebGraphQL","bs_js_null_undefined","MessengerThreadsWebGraphQLQuery","MessengerServerPayloadTransformer.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c,d,e,f){__p&&__p();if(a==null)if(e)return{actions:null,thread:undefined,end_of_history:{type:"user",fbid:c},roger:null};else return{actions:null,thread:undefined,end_of_history:undefined,roger:null};else{e=b("MessengerServerPayloadTransformer.bs").getThreadFBID(a);var g=b("MessengerServerPayloadTransformer.bs").getOtherUserID(a);e=g==null?e==null?b("bs_pervasives").failwith("No thread ID"):e:g;e!==c&&b("bs_pervasives").failwith("Thread ID mismatch");g=b("MessengerServerPayloadTransformer.bs").transformThread(d,a,f);e=b("bs_js_null_undefined").fromOption(b("MessengerServerPayloadTransformer.bs").transformMessages(d,a,f));f=b("MessengerServerPayloadTransformer.bs").transformReadReceipts(d,a);if(f){d={};d[c]=f[0];f=d}else f=null;d=b("MessengerServerPayloadTransformer.bs").getMessagePageInfo(a);if(d)if(d[0].has_previous_page)return{actions:e,thread:g,end_of_history:undefined,roger:f};else return{actions:e,thread:g,end_of_history:{type:"thread",fbid:c},roger:f};else return{actions:e,thread:g,end_of_history:undefined,roger:f}}}function h(a){return new(b("MessengerThreadsWebGraphQLQuery"))({id:a.id,message_limit:a.limit,load_messages:a.limit>0,load_read_receipts:a.loadReadReceipts,before:a.timestamp})}function a(a,c,d){var e=b("bs_array").map(h,c);return b("Promise").all(b("WebGraphQL").execAll(e,{actorID:d?a:null,batchName:"MessengerGraphQLThreadFetcher"}))["catch"](function(a){b("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.failure");return b("Promise").reject(a)}).then(function(e){b("BanzaiODS").bumpEntityKey("messenger_webgraphql","fetch_thread.success");return b("bs_array").mapi(function(e,f){f=f.message_thread;e=b("bs_caml_array").caml_array_get(c,e);return g(f,e.id,a,e.isCanonical,d)},e)})}f._transformPayload=g;f._getQuery=h;f.fetchAll=a}),null);
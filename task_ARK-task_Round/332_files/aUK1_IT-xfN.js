if (self.CavalryLogger) { CavalryLogger.start_js(["1E68d"]); }

__d("XGamesQuicksilverSpotlightPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/quicksilver/spotlight/",{app_id:{type:"String"},context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},analytics_info:{type:"TypeAssert"},source:{type:"String"},entry_point_data:{type:"String"},previous_app_id:{type:"String"}})}),null);
__d("InstantGameContainerHelper",["AsyncRequest","XGamesQuicksilverSpotlightPlayerController"],(function(a,b,c,d,e,f){"use strict";a={launchGameOnPageLoad:function(a,c,d,e){a=b("XGamesQuicksilverSpotlightPlayerController").getURIBuilder().setString("app_id",a).setString("source",c).setString("context_source_id",d).setEnum("context_type",e).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=a}),null);
__d("InstantGamesShareSurface",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CANVAS_TYPEAHEAD:"canvas_typeahead",FB_MOBILE_BOOKMARK:"fb_mobile_bookmark",GAMEROOM:"gameroom",WWW_AFTER_SHARE:"www_after_share",WWW_CONTEXT_CHOOSE:"www_context_choose",WWW_GAMES_HUB:"www_games_hub",WWW_HOVER_CARD:"www_hover_card"})}),null);
__d("XPlayWithFriendsShareController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/instantgames/playwithfriends/",{game_id:{type:"Int"},always_show_share_dialog:{type:"Bool",defaultValue:!1},source:{type:"Enum",enumType:1},__asyncDialog:{type:"Int"}})}),null);
__d("InstantGamesShareTypeahead.react",["cx","AsyncRequest","GamesTypeahead.react","InstantGamesShareSurface","React","XPlayWithFriendsShareController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").PureComponent);h&&h.prototype;a.prototype.$1=function(a){a=b("XPlayWithFriendsShareController").getURIBuilder().setInt("game_id",a.getUniqueID()).setBool("always_show_share_dialog",!0).setEnum("source",b("InstantGamesShareSurface").CANVAS_TYPEAHEAD).getURI();new(b("AsyncRequest"))().setURI(a).send()};a.prototype.render=function(){return b("React").createElement(b("GamesTypeahead.react"),{className:"_21t1",clearOnSelect:!1,filterVideoTags:!1,includeSeries:!1,onGameSelect:this.$1,queryInstantGames:!0,showEntriesOnFocus:!0})};function a(){h.apply(this,arguments)}e.exports=a}),null);
__d("MessengerTypeaheadUtils",["fbt","ix","immutable","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","WorkModeConfig","gkx","mapObject"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").OrderedMap,j=500,k=100,l=b("WorkModeConfig").is_work_user||b("gkx")("AT62Bmuf0c-b-qsSo41XTNJvFn7VwRrjwsI0onsrzyJ35XDxvhLHgPbXt3hZorqUAYplG7jtkngT9YqyGngqDfMq")?[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]:[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE],m=(a={},a[b("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},a[b("MercuryTypeaheadConstants").FRIEND_TYPE]={header:g._("Contacts")},a[b("MercuryTypeaheadConstants").FB4C_TYPE]={header:g._("Coworkers")},a[b("MercuryTypeaheadConstants").THREAD_TYPE]={header:g._("Group Conversations")},a[b("MercuryTypeaheadConstants").PAGE_TYPE]={header:g._("Businesses")},a[b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:g._("Meeting Rooms")},a[b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:g._("Bots")},a[b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:g._("More People")},a.game={header:g._("Games")},a);c={sortEntries:function(a,c){__p&&__p();var d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[];a.forEach(function(a){__p&&__p();switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:f.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:g.push(a);break;case b("MercuryTypeaheadConstants").PAGE_TYPE:case b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:i.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:h.push(a);break;case b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:j.push(a);break;case b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:k.push(a);break;case b("MercuryTypeaheadConstants").SEARCH_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").GAME_TYPE:l.push(a);break}});return d.concat(e,f,g,j,k,i,l,h)},sortEntriesWithoutPages:function(a){__p&&__p();var c=[],d=[],e=[],f=[];a.forEach(function(a){switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:c.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return c.concat(d,e,f)},sortEntriesWithoutGroupsOrViewer:function(a,c){__p&&__p();var d=[],e=[],f=[];a.forEach(function(a){if(a.getUniqueID()===c)return;switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return d.concat(e,f)},getEntryOrder:function(a){var b=arguments.length<=1||arguments[1]===undefined?l:arguments[1];return b},orderEntries:function(a,c){var d=[];this.getEntryOrder(c).filter(function(a){return a!==b("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(b("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(b){return d.push.apply(d,a.filter(function(a){return this.areSectionsEqual(a.getType(),b)}.bind(this)))}.bind(this));return d},buildSingleSection:function(a){return i([["",a]])},buildListSections:function(a,c,d){__p&&__p();if(!a.length)return i();d=this.getEntryOrder(c,d);var e=b("mapObject")(m,function(a){return babelHelpers["extends"]({},a,{entries:[]})});e[b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=e[b("MercuryTypeaheadConstants").PAGE_TYPE];a.forEach(function(a){var b=a.getType();e[b]&&e[b].entries.push(a)});return i(d.filter(function(a){return e[a].entries.length}).map(function(a){return[e[a].header,e[a].entries]}))},buildCustomSection:function(a,b){var c;return c={},c[a]=b,c},areSectionsEqual:function(a,c){return a===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE?c===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||c===b("MercuryTypeaheadConstants").PAGE_TYPE:a===c},scrollEntryIntoView:function(a,c){var d=b("ReactDOM").findDOMNode(c),e=c.getScrollTop(),f=a.offsetTop-e;d=d.offsetHeight-a.offsetHeight;a=Math.abs(d-f);f>=d&&a<=k?c.scrollToPosition(e+f-d,!0,{duration:j}):f<0&&a<=d+k&&c.scrollToPosition(e+f,!0,{duration:j})},getMessageSearchEntry:function(a){return!b("MessengerEnvironment").messengerui||a.length<2?null:new(b("SearchableEntry"))({uniqueID:"__special_search_entry__",title:g._("Search Messages for \"{queryString}\"",[g._param("queryString",a)]),photo:h("86924"),type:b("MercuryTypeaheadConstants").SEARCH_TYPE})}};e.exports=c}),null);
__d("MessengerMenu.react",["cx","Keys","MenuSeparator.react","ReactXUIMenu","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;function a(a){a.isReactLegacyFactory={},a.type=a}d=babelHelpers.inherits(c,b("ReactXUIMenu"));h=d&&d.prototype;function c(a){var c=a.className;a=babelHelpers.objectWithoutProperties(a,["className"]);h.constructor.call(this,babelHelpers["extends"]({className:b("joinClasses")(c,"_2i-c _150g")},a))}c.prototype.handleKeydown=function(a,c){return a===b("Keys").DOWN||a===b("Keys").UP||a===b("Keys").SPACE?h.handleKeydown.call(this,a,c):!0};a(c);c.Item=b("ReactXUIMenu").Item;c.Separator=b("MenuSeparator.react");e.exports=c}),null);
__d("MessengerSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={NAME:"WWW_MESSENGER_SEARCH_SESSION_FUNNEL",FETCHED_STATE_IMPRESSION_LIST:"fetched_state_impression_list",LOADING_STATE_IMPRESSION_LIST:"loading_state_impression_list",SEND_SERVER_REQUEST:"send_server_request",WWW_SIDEBAR_TAG:"www",MESSENGER_DOT_COM:"messenger_dot_com",UNIVERSAL_SEARCH:"universal_search",USER_CONTACT:"user_contact",USER_NON_CONTACT:"user_non_contact",GROUP:"group",PAGE:"page",GAME:"game",TINCAN:"tincan",SMS:"sms",SMS_GROUP:"sms_group",COWORKER:"coworker",OTHER:"other"}}),null);
__d("QuicksilverSources",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CUSTOM_SHARE:"in_game_custom_share",EMBEDDED_PLAYER:"embedded_player",FB_CANVAS:"fb_canvas",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_RATING:"fb_feed_rating",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_IGYFAP_QP:"fb_qp_igyfap",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAY_WITH_FRIENDS:"fb_feed_play_with_friends",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_LEADERBOARD_HIGH_SCORE:"fb_feed_leaderboard_high_score",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_FEED_QUICK_PROMOTION:"fb_feed_quick_promotion",FB_AD:"fb_ad",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",FB_GROUP_POST_ACTION_LINK:"fb_group_post_action_link",FB_GROUP_POST_CONTEXT_UPDATE:"fb_group_post_context_update",FB_HOMESCREEN_SHORTCUT:"fb_homescreen_shortcut",FB_MESSENGER_AD:"fb_messenger_ad",FB_PAGE_PLAY_GAME_BUTTON:"fb_page_play_game_button",GAMEROOM_FEED_POST:"gameroom_feed_post",GAMEROOM_HOME:"gameroom_home",GAME_CTA:"game_cta",GAME_SWITCH:"game_switch",HOME_SCREEN_SHORTCUT:"home_screen_shortcut",INTERNAL:"internal",LIVE_VIDEO_CTA:"live_video_cta",M_ME_LINK:"m_me_link",MESSENGER_AD:"messenger_ad",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_COMPOSER:"composer",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MESSENGER_RTC:"rtc",MESSENGER_SEARCH:"messenger_search",MARKETPLACE:"marketplace",MOBILE_BOOKMARK:"mobile_bookmark",MSITE_BOOKMARK:"msite_bookmark",MOBILE_APP_BOOKMARK:"mobile_app_bookmark",MOBILE_BOOKMARK_PRESENCE:"mobile_bookmark_presence",MSITE:"msite",THREAD_ACTIVITY_BANNER:"thread_activity_banner",THREAD_SETTINGS:"thread_settings",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_GAMES_HUB:"www_games_hub",WWW_GAMES_HUB_SEARCH:"www_games_hub_search",WWW_GAMES_DIVEBAR_PAGELET:"www_games_divebar_pagelet",WWW_GAMES_RHC_PAGELET:"www_games_rhc_pagelet",WWW_GAMES_UNIFIED_RHC:"www_games_unified_rhc",WWW_LINK_SHARE:"www_link_share",WWW_MESSENGER_UPSELL:"www_messenger_upsell",WWW_PLAY_URL:"www_play_url",WWW_REQUEST_HOVERCARD:"www_request_hovercard",WWW_SPOTLIGHT_RHC:"www_spotlight_rhc",WWW_CHAT_SIDEBAR_PRESENCE:"www_chat_sidebar_presence",WWW_GAME_THREAD_ROW_CTA:"www_game_thread_row_cta",WWW_APP_BOOKMARK:"www_app_bookmark",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_GAME_MODAL:"canvas_game_modal",UNKNOWN:"unknown"})}),null);
__d("XGameroomLandingPageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/gameroom/download/",{at:{type:"String"},fbsource:{type:"Int"},video_id:{type:"FBID"},canvas_url:{type:"String"},app_id:{type:"FBID"}})}),null);
__d("XGamesDesktopAppDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/desktopapp/download/",{app_id:{type:"Int"},fbsource:{type:"Int"},ref:{type:"String"},canvas_url:{type:"String"}})}),null);
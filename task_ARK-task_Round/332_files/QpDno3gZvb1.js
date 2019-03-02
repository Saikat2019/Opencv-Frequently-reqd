if (self.CavalryLogger) { CavalryLogger.start_js(["vVacX"]); }

__d("MessengerMessageRequestsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAction=function(a){this.$1.action=a;return this};a.prototype.setAppID=function(a){this.$1.appid=a;return this};a.prototype.setAppversion=function(a){this.$1.appversion=a;return this};a.prototype.setClienttime=function(a){this.$1.clienttime=a;return this};a.prototype.setContainermodule=function(a){this.$1.containermodule=a;return this};a.prototype.setCountry=function(a){this.$1.country=a;return this};a.prototype.setEntryPoint=function(a){this.$1.entry_point=a;return this};a.prototype.setExtraClientData=function(a){this.$1.extra_client_data=a;return this};a.prototype.setFolderType=function(a){this.$1.folder_type=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setThreadID=function(a){this.$1.thread_id=a;return this};a.prototype.setThreadKey=function(a){this.$1.thread_key=a;return this};a.prototype.setThreadKeyList=function(a){this.$1.thread_key_list=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={action:!0,appid:!0,appversion:!0,clienttime:!0,containermodule:!0,country:!0,entry_point:!0,extra_client_data:!0,folder_type:!0,name:!0,surface:!0,thread_id:!0,thread_key:!0,thread_key_list:!0,vc:!0};e.exports=a}),null);
__d("MNPlatformAttributionTags",[],(function(a,b,c,d,e,f){e.exports={ATTRIBUTION_TAGS_PREFIX:"bnp:trigger:",CUSTOMER_CHAT_PLUGIN:"customer_chat_plugin",MESSENGERDOTCOM:"messengerdotcom",MESSENGER_WEB:"messenger_web",MESSENGER_WEB_SEARCH:"messenger_web_search",M_DOT_ME:"m_dot_me"}}),null);
__d("MessengerStore",["MessengerDispatcher","mixInEventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1=b("MessengerDispatcher").register(this.__onDispatch.bind(this))}a.prototype.getDispatchToken=function(){return this.$1};a.prototype.emitChange=function(){this.emit("change")};a.prototype.destroy=function(){b("MessengerDispatcher").unregister(this.$1)};b("mixInEventEmitter")(a,{change:!0});e.exports=a}),null);
__d("MessengerAttributionTagsStore",["MessengerActions","MessengerStore"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("MessengerStore"));g=c&&c.prototype;function a(){"use strict";g.constructor.call(this),this.$MessengerAttributionTagsStore1={messagingTags:null,threadID:null}}a.prototype.getState=function(){"use strict";return this.$MessengerAttributionTagsStore1};a.prototype.__onDispatch=function(a){"use strict";__p&&__p();switch(a.type){case b("MessengerActions").Types.UPDATE_THREAD_TAG:this.$MessengerAttributionTagsStore1.messagingTags=a.messagingTags;this.$MessengerAttributionTagsStore1.threadID=a.threadID;this.emitChange();break;case b("MessengerActions").Types.SELECT_THREAD:this.$MessengerAttributionTagsStore1.messagingTags=null;this.$MessengerAttributionTagsStore1.threadID=null;this.emitChange();break}};e.exports=new a()}),null);
__d("MessengerDiscoveryLoggingEnums",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT_PREFIX:"entrypoint:"})}),null);
__d("MessengerDiscoveryEntryPointsLoggingHelper",["MessengerDiscoveryEntryPoint","MessengerDiscoveryLoggingEnums"],(function(a,b,c,d,e,f){"use strict";a={getEntryPointsLoggingTagStr:function(a){if(a.length==0||Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(a[0])==-1)throw new Error("Please use enums in MessengerDiscoveryEntryPoints class");return b("MessengerDiscoveryLoggingEnums").ENTRYPOINT_PREFIX+a.join(":")}};e.exports=a}),null);
__d("MNPlatformTagsDataManager",["MessagingSourceEnum","MessengerActions","MessengerAttributionTagsStore","MessengerDiscoveryEntryPoint","MessengerDiscoveryEntryPointsLoggingHelper","MNPlatformAttributionTags"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={getTags:function(){__p&&__p();var a=arguments.length<=0||arguments[0]===undefined?null:arguments[0],c=null,d=null;switch(a){case b("MessagingSourceEnum").PAGES_MESSAGE_SHORTLINK:c=b("MNPlatformAttributionTags").M_DOT_ME;break;case b("MessagingSourceEnum").MESSENGER_WEB:c=b("MNPlatformAttributionTags").MESSENGER_WEB;break;case b("MessagingSourceEnum").MESSENGER_WEB_SEARCH:c=b("MNPlatformAttributionTags").MESSENGER_WEB_SEARCH;d=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_WEB_SEARCH]);break;case b("MessagingSourceEnum").CUSTOMER_CHAT_PLUGIN:c=b("MNPlatformAttributionTags").CUSTOMER_CHAT_PLUGIN;break;case b("MessagingSourceEnum").PAGE_PLUGIN_MESSAGE:c=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_PAGES_PLUGIN]);break;default:c="";break}var e=[c];d!==null&&e.push(d);return e},updateThreadTabAfterSelectThread:function(){var a=arguments.length<=0||arguments[0]===undefined?null:arguments[0],c=arguments.length<=1||arguments[1]===undefined?null:arguments[1],d=this.getTags(a);b("MessengerActions").changeThreadTag(d,c)},hasThreadTags:function(a){var c=b("MessengerAttributionTagsStore").getState();return!!(c.messagingTags&&a&&c.threadID&&c.threadID.toString()===a)},getThreadTags:function(){var a=b("MessengerAttributionTagsStore").getState();return a.messagingTags}}}),null);
__d("MessengerHotlikeEmoji.bs",[],(function(a,b,c,d,e,f){"use strict";var g="f0000";function a(a){return a===g}f.hotlike_key=g;f.isMessengerHotlike=a}),null);
__d("MessengerReadReceipt.bs",["bs_array","Utils.bs","immutable","MercuryActionStatus"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};function h(a,c,d,e){__p&&__p();c=c>=a.timestamp;var f=a.status;e=!e||d!==a.author;if(c)if(f==null)if(e)return!0;else return!1;else if(e&&f===b("MercuryActionStatus").SUCCESS)return!0;else return!1;else return!1}function a(a,c,d){__p&&__p();if(c==null)return[];else{a=a[c.thread_id];if(a!==undefined)return a.reduce(function(a,e,f,g){if(h(c,e.watermark,f,b("Utils.bs").isTruthy(d)))return b("bs_array").append(a,[f]);else return a},[]);else return[]}}function c(a,b){a=a[b.thread_id];if(a!==undefined)return a.reduce(function(a,c,d,e){if(a)return h(b,c.watermark,d,!1);else return!1},!0);else return!1}function d(a,c){a=a[c];if(a!==undefined)return a;else return b("immutable").OrderedMap()}function e(a,b,c){a=a[b];if(a!==undefined){b=a.get(c);if(b==null)return null;else return b}else return null}f.emptyReadReceipts=g;f.wasSeen=h;f.getSeenBy=a;f.wasSeenByAll=c;f.getSeenTimestamps=d;f.getSeenTimestamp=e}),null);
__d("EmoticonEmojiList",[],(function(a,b,c,d,e,f){e.exports={names:{":)":"slightsmile",":-)":"slightsmile",":]":"slightsmile","=)":"smile","(:":"slightsmile","(=":"smile",":(":"frown",":-(":"frown",":[":"frown","=(":"frown",")=":"frown",";-P":"winktongue",";P":"winktongue",";-p":"winktongue",";p":"winktongue",":poop:":"poop",":P":"tongue",":-P":"tongue",":-p":"tongue",":p":"tongue","=P":"tongue","=p":"tongue","=D":"grin",":-D":"slightgrin",":D":"slightgrin",":o":"gasp",":-O":"gasp",":O":"gasp",":-o":"gasp",";)":"wink",";-)":"wink","8-)":"glasses","8)":"glasses","B-)":"glasses","B)":"glasses",">:(":"grumpy",">:-(":"grumpy",":/":"unsure",":-/":"unsure",":\\":"unsure",":-\\":"unsure","=/":"unsure","=\\":"unsure",":'(":"cry",":'-(":"cry",":\u2019(":"cry",":\u2019-(":"cry","3:)":"devil","3:-)":"devil","O:)":"angel","O:-)":"angel","0:)":"angel","0:-)":"angel",":*":"kiss",":-*":"kiss",";-*":"winkkiss",";*":"winkkiss","<3":"heart","&lt;3":"heart","\u2665":"heart","^_^":"kiki","^~^":"kiki","-_-":"expressionless",":-|":"squint",":|":"squint",">:o":"upset",">:O":"upset",">:-O":"upset",">:-o":"upset",">_<":"persevere",">.<":"persevere",'<(")':"penguin",O_O:"flushface",o_o:"flushface","0_0":"flushface",T_T:"crying","T-T":"crying",ToT:"crying","T.T":"crying","-3-":"flushkiss","'-_-":"sweating","\u2019-_-":"sweating","(y)":"like",":like:":"like","(Y)":"like","(n)":"dislike","(N)":"dislike"},emote2emojis:{slightsmile:"1f642",smile:"1f60a",frown:"1f61e",winktongue:"1f61c",poop:"1f4a9",tongue:"1f61b",slightgrin:"1f600",grin:"1f603",gasp:"1f62e",wink:"1f609",glasses:"1f60e",grumpy:"1f620",unsure:"1f615",cry:"1f622",devil:"1f608",angel:"1f607",kiss:"1f617",winkkiss:"1f618",heart:"2764",kiki:"1f60a",expressionless:"1f611",squint:"1f610",upset:"1f620",persevere:"1f623",penguin:"1f427",flushface:"1f633",crying:"1f62d",flushkiss:"1f61a",sweating:"1f613",like:"f0000",dislike:"1f44e"},symbols:{slightsmile:":)",smile:"=)",frown:":(",winktongue:";-P",poop:":poop:",tongue:":P",slightgrin:":D",grin:"=D",gasp:":o",wink:";)",glasses:"8-)",grumpy:">:(",unsure:":/",cry:":'(",devil:"3:)",angel:"O:)",kiss:":*",winkkiss:";*",heart:"<3",kiki:"^_^",expressionless:"-_-",squint:":-|",upset:">:o",persevere:">_<",penguin:'<(")',flushface:"O_O",crying:"T_T",flushkiss:"-3-",sweating:"'-_-",like:"(y)",dislike:"(n)"},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/}}),null);
__d("Utf16",[],(function(a,b,c,d,e,f){a={decode:function(a){switch(a.length){case 1:return a.charCodeAt(0);case 2:return 65536|(a.charCodeAt(0)-55296)*1024|a.charCodeAt(1)-56320;default:return null}},encode:function(a){if(a<65536)return String.fromCharCode(a);else return String.fromCharCode(55296+(a-65536>>10))+String.fromCharCode(56320+a%1024)}};e.exports=a}),null);
__d("messengerIterateEmoji",["MessengerSupportedEmoji","ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){__p&&__p();var f=String(a);while(f){a=b("ifRequired")("MessengerSupportedEmojiUtils",function(a){return a.getEmojiMatchObj(f)},function(){return b("MessengerSupportedEmoji").getEmojiMatchObj(f)});if(a){var g=a.offset+a.length,h=f.substr(0,a.is_supported?a.offset:g);d(h);a.is_supported&&c(a.emoji_str,a.emoji_key,e);h=f.substr(g);f=h}else break}d(f)}e.exports=a}),null);
__d("messengerIterateEmoticons",["EmoticonEmojiList"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e){var f,g,h;a=String(a);while(a){var i=b("EmoticonEmojiList").regexp.exec(a);if(i)f=i.index+i[1].length,g=a.substr(0,f),i=i[2],f=a.substr(f+i.length),h=b("EmoticonEmojiList").names[i],d(g),c(i,h,e),a=f;else break}d(a)}e.exports=a}),null);
__d("MessengerTextWithEmoticons.react",["cx","fbt","BaseTextWithDecoration.react","EmojiImageURL","EmoticonEmojiList","MessengerHotlikeEmoji.bs","Image.react","React","gkx","messengerIterateEmoji","messengerIterateEmoticons"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;function j(a,c,d,e){var f=e?128:16;a=b("gkx")("AT7ffoM8gf91Fer7cUMkwGH62Vum20vkKo_AIqUOx27bu9y21PoFYcSzgDJj_KAeh5RgHmHKzv6c5n2RlIxDAfXE")&&!a&&!b("MessengerHotlikeEmoji.bs").isMessengerHotlike(d)?b("EmojiImageURL").getFBEmojiURL(d,f):b("EmojiImageURL").getMessengerURL(d,f);d=e?"_1ift _5m3a":"_1ift _2560";return b("React").createElement(b("Image.react"),{alt:c,className:d,src:a})}function k(a,c,d){var e=d?128:16,f=b("EmoticonEmojiList").emote2emojis[c],g=f?b("gkx")("AT7ffoM8gf91Fer7cUMkwGH62Vum20vkKo_AIqUOx27bu9y21PoFYcSzgDJj_KAeh5RgHmHKzv6c5n2RlIxDAfXE")&&!b("MessengerHotlikeEmoji.bs").isMessengerHotlike(f)?b("EmojiImageURL").getFBEmojiURL(f,e):b("EmojiImageURL").getMessengerURL(f,e):null;if(g){f=String.fromCodePoint(parseInt(f,e));e=d?"_1ift _5m3a":"_1ift _2560";return b("React").createElement(b("Image.react"),{alt:f,className:e,src:g})}d=h._("{emoticonName} emoticon",[h._param("emoticonName",c)]);return b("React").createElement("span",{"aria-label":d},a)}function l(a,b,c){return function(d,e,f){var g=function(c,d,a){e(b(c,d,a))};a(String(d),g,f,c)}}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.shouldComponentUpdate=function(a){return a.text!==this.props.text};a.prototype.render=function(){var a=[l(b("messengerIterateEmoji"),j.bind(null,!!this.props.forceMessengerEmoji),this.props.customSize),l(b("messengerIterateEmoticons"),k,this.props.customSize)];return b("React").createElement(b("BaseTextWithDecoration.react"),babelHelpers["extends"]({},this.props,{text:this.props.text,decorators:a}))};function a(){i.apply(this,arguments)}a.propTypes={text:c.string,customSize:c.bool,forceMessengerEmoji:c.bool};e.exports=a}),null);
__d("MercuryThreadTitle.react",["fbt","MercuryIDs","MessengerTextWithEmoticons.react","MercuryParticipantListRenderer","MessengerParticipants.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"MercuryThreadTitle",propTypes:{className:a.string,isNewThread:a.bool,maxTitle:a.number,showUnreadCount:a.bool,thread:a.object.isRequired,useAndSeparator:a.bool,useShortName:a.bool,viewer:a.string.isRequired},getDefaultProps:function(){return{isNewThread:!1,showUnreadCount:!1,useShortName:!1,useAndSeparator:!1}},getInitialState:function(){return{participantNames:""}},componentDidMount:function(){this._renderParticipantsList(this.props)},UNSAFE_componentWillReceiveProps:function(a){this._renderParticipantsList(a)},render:function(){return b("React").createElement("span",{className:this.props.className},this.props.thread.name?this._renderThreadTitle():this.state.participantNames,this.props.children)},getTitle:function(){return this.state.participantNames},_renderThreadTitle:function(){var a=this.props.thread,c=this.props.maxTitle?this.props.maxTitle<a.name.length?a.name.slice(0,this.props.maxTitle)+"...":a.name:a.name;c=b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:c});return!a.unread_count||!this.props.showUnreadCount?c:this._renderTitleWithUnreadCount(c,a.unread_count)},_renderParticipantsList:function(a){__p&&__p();if(a.thread.name)return;this.setState({participantNames:""});var c=b("MercuryIDs").getParticipantIDFromUserID(a.viewer),d=a.thread.participants||[];d.length>1&&(d=d.filter(function(a){return a!=c}));b("MessengerParticipants.bs").getMulti(d,function(c){__p&&__p();if(!this.isMounted())return;var e=d.map(function(a){return c[a]}),f=a.thread.custom_nickname?{}:null,g=b("MessengerTextWithEmoticons.react");if(f)for(var h in a.thread.custom_nickname)f[h]=b("React").createElement(g,{renderEmoticons:!0,renderEmoji:!0,text:a.thread.custom_nickname[h]});g=new(b("MercuryParticipantListRenderer"))().setUseShortName(a.useShortName).setUseAndSeparator(a.useAndSeparator).setIsNewThread(a.isNewThread).setNickname(f).renderParticipantList(e);f=a.showUnreadCount&&a.thread.unread_count?this._renderTitleWithUnreadCount(g,a.thread.unread_count):g;this.setState({participantNames:f})}.bind(this))},_renderTitleWithUnreadCount:function(a,b){return g._("{conversation-title} ({unread-count})",[g._param("conversation-title",a),g._param("unread-count",b)])}});e.exports=c}),null);
__d("MercuryTimePassed",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TODAY:0,WEEK_AGO:1,MONTH_AGO:2,CURRENT_YEAR:3,OTHER_YEAR:4})}),null);
__d("MessengerLightweightActionUtils",["MercuryAttachmentType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return!!(a&&a.attach_type===b("MercuryAttachmentType").SHARE&&a.share&&a.share.target&&a.share.target.lwa_type)}function a(a){a=a.attachments;return!!(a&&a.length===1&&g(a[0]))}function c(a){return a.attachments[0].share.title}function d(a){return a[0].share.title}e.exports={isLWAMessage:a,isLWAAttachment:g,getCollapsedLWAText:c,getLWASnippetText:d}}),null);
__d("MercuryTimestamp",["fbt","MercuryTimePassed","formatDate"],(function(a,b,c,d,e,f,g){__p&&__p();a=864e5;var h=6*a,i={getFormatedTimestamp:function(a){var b=a/1e3;return i.getFormattedTimestampByBucket(b,this.getTimeBucket(a))},getAbsoluteTimestamp:function(a){if(a==null)return null;else{a=i.getFormatedTimestamp(a);return a.absolute}},getRelativeTimestamp:function(a){a=i.getFormatedTimestamp(a);return a.relative},getFormattedTimestampByBucket:function(a,c){switch(c){case b("MercuryTimePassed").TODAY:return{absolute:g._("Today"),relative:b("formatDate")(a,"g:ia")};case b("MercuryTimePassed").WEEK_AGO:return{absolute:b("formatDate")(a,"l"),relative:b("formatDate")(a,"D")};case b("MercuryTimePassed").CURRENT_YEAR:return{absolute:b("formatDate")(a,"F j"),relative:b("formatDate")(a,"M j")};default:return{absolute:b("formatDate")(a,"F j, Y"),relative:b("formatDate")(a,"n/j/y")}}},getTimeBucket:function(a){__p&&__p();a=new Date(a);var c=new Date();c=new Date(c.getFullYear(),c.getMonth(),c.getDate());if(c<a)return b("MercuryTimePassed").TODAY;else if(c-h<a)return b("MercuryTimePassed").WEEK_AGO;else if(c.getFullYear()===a.getFullYear())return b("MercuryTimePassed").CURRENT_YEAR;else return b("MercuryTimePassed").OTHER_YEAR},getPreciseTimestamp:function(a){return b("formatDate")(new Date(a),i.getPreciseFormat(a))},getPreciseFormat:function(a){a=i.getTimeBucket(a);switch(a){case b("MercuryTimePassed").TODAY:return"g:ia";case b("MercuryTimePassed").WEEK_AGO:return"l g:ia";case b("MercuryTimePassed").CURRENT_YEAR:return"F jS, g:ia";case b("MercuryTimePassed").OTHER_YEAR:default:return"F j, Y g:i a"}}};e.exports=i}),null);
/**
 * License: https://www.facebook.com/legal/license/R04CB68zcxK/
 */
__d("react-0.0.0",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return a&&typeof a==="object"&&"default"in a?a["default"]:a}var g=a(b("React"));c={};var h={exports:c};function i(){h.exports=g}var j=!1,k=function(){j||(j=!0,i());return h.exports};d=function(a){switch(a){case undefined:return k()}};e.exports=d}),null);
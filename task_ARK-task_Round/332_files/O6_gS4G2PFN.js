if (self.CavalryLogger) { CavalryLogger.start_js(["vxivo"]); }

__d("MenuStaticItem.react",["MenuStaticItem"],(function(a,b,c,d,e,f){function a(a){a.isReactLegacyFactory={},a.type=a}c=b("MenuStaticItem");a(c);e.exports=c}),null);
__d("XUIMenuStaticItem.react",["MenuStaticItem.react"],(function(a,b,c,d,e,f){a=b("MenuStaticItem.react");e.exports=a}),null);
__d("DOMClone",[],(function(a,b,c,d,e,f){a={shallowClone:function(a){return g(a,!1)},deepClone:function(a){return g(a,!0)}};function g(a,b){a=a.cloneNode(b);typeof a.__FB_TOKEN!=="undefined"&&delete a.__FB_TOKEN;typeof a.__FB_STORE!=="undefined"&&delete a.__FB_STORE;return a}e.exports=a}),null);
__d("FileInput",["cx","ArbiterMixin","DOM","DOMClone","Event","Focus","Keys","UserAgent_DEPRECATED","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("UserAgent_DEPRECATED").ie();c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));h=c&&c.prototype;function a(a,c,d){"use strict";__p&&__p();h.constructor.call(this);this.container=a;this.control=c;a=b("DOM").scry(this.container,"a")[0];a&&a.removeAttribute("href");c=b("DOM").create("div",{className:"_3jk"},d);b("DOM").appendContent(this.control,c);this._boundHandleChange=this._handleChange.bind(this);i&&(this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this));this._setInputElement(d)}a.prototype.getValue=function(){"use strict";return this.input.value};a.prototype.getInput=function(){"use strict";return this.input};a.prototype.getContainer=function(){"use strict";return this.container};a.prototype.getControl=function(){"use strict";return this.control};a.prototype.clear=function(){"use strict";this.input.value="";if(this.input.value!==""){var a=b("DOMClone").deepClone(this.input);b("DOM").replace(this.input,a);this._setInputElement(a)}};a.prototype.destroy=function(){"use strict";this._focus.remove(),this._focus=null,this._listener.remove(),this._listener=null,i&&(this._IEKeyDownListener.remove(),this._IEKeyDownListener=null),this.container=null,this.control=null,this.input=null};a.prototype._setInputElement=function(a){"use strict";this.input=a,this._focus&&this._focus.remove(),this._focus=b("Focus").relocate(a,this.control),this._listener&&this._listener.remove(),this._listener=b("Event").listen(a,"change",this._boundHandleChange),i&&(this._IEKeyDownListener&&this._IEKeyDownListener.remove(),this._IEKeyDownListener=b("Event").listen(a,"keydown",this._boundHandleIEKeyDown))};a.prototype._handleChange=function(event){"use strict";this.inform("change",event);if(this.input){var a=this.input.form;a&&i<9&&b("Event").fire(a,"change",event)}};a.prototype._handleIEKeyDown=function(event){"use strict";if(event.keyCode===b("Keys").RETURN){event.preventDefault();var a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0);this.input.dispatchEvent(a)}};e.exports=a}),null);
__d("XPhotosWaterfallBatchLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/photos/logging/waterfall/batch/",{})}),null);
__d("PhotosUploadWaterfall",["AsyncRequest","AsyncSignal","Banzai","PhotosUploadWaterfallXConfig","XPhotosWaterfallBatchLoggingController","emptyFunction","randomInt","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g=[];a={APP_SIMPLE:"simple",APP_ARCHIVE:"archive",APP_COMPOSER:"composer",APP_MESSENGER:"messenger",APP_HTML5:"html5",APP_CHAT:"chat",INSTALL_CANCEL:1,INSTALL_INSTALL:2,INSTALL_UPDATE:3,INSTALL_REINSTALL:4,INSTALL_PERMA_CANCEL:5,INSTALL_SILENT_SKIP:6,INSTALL_DOWNLOAD:7,CERROR_RESIZING_FAILED:6,CERROR_MARKER_EXTRACTION_FAILED:9,BEGIN:1,UPLOAD_START:4,ALL_UPLOADS_DONE:6,CLIENT_ERROR:7,RECOVERABLE_CLIENT_ERROR:12,IMAGES_SELECTED:9,UPGRADE_REQUIRED:11,VERSION:15,SELECT_START:18,SELECT_CANCELED:19,CANCEL:22,CANCEL_DURING_UPLOAD:83,ONE_RESIZING_START:2,ONE_UPLOAD_START:10,ONE_UPLOAD_DONE:29,ONE_RESIZING_DONE:34,PROGRESS_BAR_STOPPED:44,MISSED_BEAT:45,HEART_ATTACK:46,PUBLISH_SENT:99,PUBLISH_START:100,PUBLISH_SUCCESS:101,PUBLISH_FAILURE:102,CLUSTERING_START:103,CLUSTERING_SUCCESS:104,CLUSTERING_FAILURE:105,POST_BUTTON_CLICKED:110,POST_BUTTON_ERROR:111,PHOTO_DELETED:114,PUBLISH_CLIENT_SUCCESS:115,PHOTO_ROTATED:117,SAVE_DRAFT_BUTTON_CLICKED:123,RECOVERY_START_ON_CLIENT:124,CHANGE_PHOTO_QUALITY_SETTING:126,TAG_ADDED:127,TAG_REMOVED:128,TAB_BUTTON_CLICKED:129,DONE_SPHERICAL_CHECK:131,FAIL_SPHERICAL_CHECK:133,EDITABLE_PHOTO_FETCH_START:106,EDITABLE_PHOTO_FETCH_SUCCESS:107,EDITABLE_PHOTO_FETCH_FAILURE:108,EDITABLE_PHOTO_FETCH_DELAY:116,CANCEL_INDIVIDUAL_UPLOAD:109,MISSING_OVERLAY_NODE:118,PUBLISH_RETRY_FAILURE:119,MISSING_UPLOAD_STATE:120,SESSION_POSTED:72,POST_PUBLISHED:80,ONE_UPLOAD_CANCELED:81,ONE_UPLOAD_CANCELED_DURING_UPLOAD:82,RESIZER_AVAILABLE:20,OVERLAY_FIRST:61,ASYNC_AVAILABLE:63,FALLBACK_TO_HTML5:130,RETRY_UPLOAD:17,TAGGED_ALL_FACES:14,VAULT_IMAGES_SELECTED:62,VAULT_CREATE_POST_CANCEL:65,VAULT_SEND_IN_MESSAGE_CLICKED:66,VAULT_DELETE_CANCEL:68,VAULT_ADD_TO_ALBUM_CANCEL:74,VAULT_SHARE_IN_AN_ALBUM_CLICKED:76,VAULT_SHARE_OWN_TIMELINE_CLICKED:77,VAULT_SHARE_FRIENDS_TIMELINE_CLICKED:78,VAULT_SHARE_IN_A_GROUP_CLICKED:79,VAULT_SYNCED_PAGED_LINK_CLICKED:84,VAULTBOX:"vaultbox",GRID:"grid",SPOTLIGHT_VAULT_VIEWER:"spotlight_vault_viewer",REF_VAULT_NOTIFICATION:"vault_notification",_checkRequiredFields:function(a){},sendBanzai:function(a,c){this._checkRequiredFields(a);var d={};a.scuba_ints=a.scuba_ints||{};a.scuba_ints.client_time=Math.round(Date.now()/1e3);b("PhotosUploadWaterfallXConfig").retryBanzai&&(d.retry=!0,a.scuba_ints.nonce=b("randomInt")(4294967296));b("Banzai").post(b("PhotosUploadWaterfallXConfig").deprecatedBanzaiRoute,a,d);c&&setTimeout(c,0)},sendSignal:function(a,c){this._checkRequiredFields(a);if(b("PhotosUploadWaterfallXConfig").useBanzai)this.sendBanzai(a,c);else{a=new(b("AsyncSignal"))("/ajax/photos/waterfall.php",{data:JSON.stringify(a)}).setHandler(c);b("PhotosUploadWaterfallXConfig").timeout&&a.setTimeout(10*1e3);a.send()}},queueLog:function(a,b){g.push(a),b?this.flushQueue(b):h()},flushQueue:function(a){var c=JSON.stringify(g);g=[];var d=b("XPhotosWaterfallBatchLoggingController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({logs:c}).setFinallyHandler(a||b("emptyFunction")).setTimeoutHandler(10*1e3,a||b("emptyFunction")).send()}};var h=b("throttle")(a.flushQueue,b("PhotosUploadWaterfallXConfig").batchInterval*1e3);e.exports=a}),null);
__d("PhotosUploadWaterfallMixin",["PhotosUploadWaterfall","emptyFunction"],(function(a,b,c,d,e,f){a=b("emptyFunction");c={getUploaderApp:a,getWaterfallID:a,getAdditionalData:function(){return{}},logWaterfallStep:function(a,c,d){b("PhotosUploadWaterfall").sendSignal(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)},logWaterfallStepUsingBanzai:function(a,c,d){b("PhotosUploadWaterfall").sendBanzai(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)}};e.exports=c}),null);
__d("PhotoSourceTypes",["keyMirror"],(function(a,b,c,d,e,f){e.exports=b("keyMirror")({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null})}),null);
__d("BaseSelectionContainer",[],(function(a,b,c,d,e,f){__p&&__p();var g=0;function a(){"use strict";this.$1=(g++).toString()}a.prototype.getSelectionContainerID=function(){"use strict";return this.$1};a.prototype.getSource=function(){"use strict";throw new Error("This must be implemented by the child class")};a.prototype.getName=function(){"use strict";return null};a.prototype.getSize=function(){"use strict";return null};a.prototype.hasPlaceholderUI=function(){"use strict";throw new Error("This must be implemented by the child class")};e.exports=a}),null);
__d("SelectionSource",["PhotoSourceTypes"],(function(a,b,c,d,e,f){var g={FILE:"file",FLASH:"flash",VAULT:"vault",SUGGESTIONS:"suggestions",POSTED_PHOTOS:"posted_photos",PAGES_POSTED_PHOTOS:"pages_posted_photos",toPhotoSourceType:function(a){switch(a){case g.FILE:case g.FLASH:return b("PhotoSourceTypes").COMPUTER;case g.VAULT:return b("PhotoSourceTypes").SYNCED_PHOTOS;case g.SUGGESTIONS:return b("PhotoSourceTypes").SUGGESTIONS;case g.POSTED_PHOTOS:return b("PhotoSourceTypes").POSTED_PHOTOS;case g.PAGES_POSTED_PHOTOS:return b("PhotoSourceTypes").PAGES_POSTED_PHOTOS;default:throw new Error("No mapping for SelectionSource: "+a)}}};e.exports=g}),null);
__d("FileSelectionContainer",["BaseSelectionContainer","SelectionSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("BaseSelectionContainer"));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this),this.$FileSelectionContainer1=a}a.prototype.getFile=function(){"use strict";return this.$FileSelectionContainer1};a.prototype.getSource=function(){"use strict";return b("SelectionSource").FILE};a.prototype.getName=function(){"use strict";return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name};a.prototype.getSize=function(){"use strict";return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size};a.prototype.hasPlaceholderUI=function(){"use strict";return!1};e.exports=a}),null);
__d("FilePickerEvent",[],(function(a,b,c,d,e,f){e.exports={BEGIN:"FilePickerEvent/BEGIN",SELECT_START:"FilePickerEvent/SELECT_START",SELECTED:"FilePickerEvent/SELECTED_FILES",ALBUM_LIMIT_EXCEEDED:"FilePickerEvent/ALBUM_LIMIT_EXCEEDED",SESSION_LIMIT_EXCEEDED:"FilePickerEvent/SESSION_LIMIT_EXCEEDED",SELECT_CANCELED:"FilePickerEvent/SELECT_CANCELED",FALLBACK:"FilePickerEvent/FALLBACK"}}),null);
__d("PUWApplications",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({WEB_SIMPLE:"web_simple",WEB_FLASH:"web_flash",WEB_HTML5:"web_html5",WEB_COMPOSER:"web_composer",WEB_ARCHIVE:"web_archive",WEB_MESSENGER:"web_messenger",WEB_OMNIPICKER:"web_omnipicker",WEB_MUSE_OMNIPICKER:"web_muse_omnipicker",WEB_SAY_THANKS:"web_say_thanks",WEB_GOODWILL_CAMPAIGN_OMNIPICKER:"web_goodwill_campaign_omnipicker",WEB_PRODUCT_PHOTO_OMNIPICKER:"web_product_photo_omnipicker",WEB_PAGES_MESSENGER:"web_pages_messenger",WEB_M_ZERO:"web_m_zero",WEB_M_BASIC:"web_m_basic",WEB_M_TOUCH:"web_m_touch",WEB_REACT_COMPOSER:"web_react_composer",MOBILE_FB4IOS:"mobile_fb4ios",MOBILE_FB4IOS_SNAP:"mobile_fb4ios_snap",MOBILE_FB4A:"mobile_fb4a",MOBILE_PMA_ANDROID:"mobile_pma_android",MOBILE_PMA_IOS:"mobile_pma_ios",THIRD_PARTY:"third_party"})}),null);
__d("PUWSteps",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLIENT_FLOW_BEGIN:"client_flow_begin",CLIENT_SELECT_BEGIN:"client_select_begin",CLIENT_SELECT_SUCCESS:"client_select_success",CLIENT_SELECT_CANCEL:"client_select_cancel",CLIENT_SELECT_FAIL:"client_select_fail",CLIENT_FLOW_POST:"client_flow_post",CLIENT_TRANSFER_BATCH_BEGIN:"client_transfer_batch_begin",CLIENT_UPLOAD_BEGIN:"client_upload_begin",CLIENT_ATTACH_PHOTO:"client_attach_photo",CLIENT_PROCESS_BEGIN:"client_process_begin",CLIENT_PROCESS_SUCCESS:"client_process_success",CLIENT_PROCESS_CANCEL:"client_process_cancel",CLIENT_PROCESS_SKIP:"client_process_skip",CLIENT_PROCESS_FAIL:"client_process_fail",CLIENT_PROCESS_UNAVAILABLE:"client_process_unavailable",CLIENT_SPHERICAL_CHECK_SUCCESS:"client_spherical_check_success",CLIENT_SPHERICAL_CHECK_FAIL:"client_spherical_check_fail",CLIENT_TRANSFER_ENQUEUE:"client_transfer_enqueue",CLIENT_TRANSFER_BEGIN:"client_transfer_begin",CLIENT_TRANSFER_SUCCESS:"client_transfer_success",CLIENT_TRANSFER_CANCEL:"client_transfer_cancel",CLIENT_TRANSFER_FAIL:"client_transfer_fail",CLIENT_TRANSFER_MANUAL_RETRY:"client_transfer_manual_retry",CLIENT_UPLOAD_SUCCESS:"client_upload_success",CLIENT_UPLOAD_FAIL:"client_upload_fail",CLIENT_UPLOAD_CANCEL:"client_upload_cancel",CLIENT_UPLOAD_REMOVE:"client_upload_remove",CLIENT_FACEREC_BEGIN:"client_facerec_begin",CLIENT_FACEREC_SUCCESS:"client_facerec_success",CLIENT_FACEREC_FAIL:"client_facerec_fail",CLIENT_PHOTO_PREVIEW_OPEN:"client_photo_preview_open",CLIENT_PHOTO_PREVIEW_CLOSE:"client_photo_preview_close",CLIENT_TRANSFER_BATCH_SUCCESS:"client_transfer_batch_success",CLIENT_TRANSFER_BATCH_CANCEL:"client_transfer_batch_cancel",CLIENT_TRANSFER_BATCH_FAIL:"client_transfer_batch_fail",CLIENT_PUBLISH_ENQUEUE:"client_publish_enqueue",CLIENT_PUBLISH_BEGIN:"client_publish_begin",CLIENT_PUBLISH_SUCCESS:"client_publish_success",CLIENT_PUBLISH_FAIL:"client_publish_fail",CLIENT_ATTEMPT_FAIL:"client_attempt_fail",CLIENT_FLOW_SUCCESS:"client_flow_success",CLIENT_FLOW_FATAL:"client_flow_fatal",CLIENT_FLOW_GIVEUP:"client_flow_giveup",CLIENT_FLOW_CANCEL:"client_flow_cancel",CLIENT_FLOW_FAIL:"client_flow_fail",CLIENT_FLOW_INCOMPLETE:"client_flow_incomplete",CLIENT_ATTEMPT_INCOMPLETE:"client_attempt_incomplete",CLIENT_FLOW_RETRY:"client_flow_retry",CLIENT_ATTEMPT_RETRY:"client_attempt_retry",CLIENT_DIAGNOSTIC:"client_diagnostic",CLIENT_QUALITY_SWITCH:"client_quality_switch",CLIENT_CANCEL_SURVEY:"client_cancel_survey",CLIENT_PHOTO_EDIT_BEGIN:"client_photo_edit_begin",CLIENT_PHOTO_EDIT_SUCCESS:"client_photo_edit_success",SERVER_UPLOAD_BEGIN:"server_upload_begin",SERVER_UPLOAD_SUCCESS:"server_upload_success",SERVER_UPLOAD_FAIL:"server_upload_fail",SERVER_PUBLISH_BEGIN:"server_publish_begin",SERVER_PUBLISH_SUCCESS:"server_publish_success",SERVER_PUBLISH_FAIL:"server_publish_fail",SERVER_RECEIVER_BEGIN:"server_receiver_begin",SERVER_RECEIVER_PUBLISH_BEGIN:"server_receiver_publish_begin",SERVER_SENTRY_RESTRICTION:"server_sentry_restriction"})}),null);
__d("PhotosUploadWaterfallXMixin",["invariant","AsyncSignal","Banzai","PhotosUploadWaterfallXConfig","randomInt"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new Map();function i(a,c){var d={};a.client_time=Math.round(Date.now()/1e3);b("PhotosUploadWaterfallXConfig").retryBanzai&&(d.retry=!0,a.nonce=b("randomInt")(4294967296));b("Banzai").post(b("PhotosUploadWaterfallXConfig").banzaiRoute,a,d);c&&setTimeout(c,0)}function j(a,c){if(b("PhotosUploadWaterfallXConfig").useBanzai)i(a,c);else{a=new(b("AsyncSignal"))(b("PhotosUploadWaterfallXConfig").loggingEndpoint,{data:JSON.stringify(a)}).setHandler(c);b("PhotosUploadWaterfallXConfig").timeout&&a.setTimeout(10*1e3);a.send()}}e.exports={logStep:function(a,b,c){var d=this.getWaterfallID&&this.getWaterfallID(),e=this.getWaterfallAppName&&this.getWaterfallAppName();if(!d||!e)return;j(babelHelpers["extends"]({step:a,qn:d,uploader:e,ref:this.getWaterfallSource&&this.getWaterfallSource()},b),c)},logPUWStep:function(a,b,c,d,e,f,g){if(f&&f.logOncePerSession){h.has(b)||h.set(b,new Set());if(h.get(b).has(a))return;h.get(b).add(a)}j(Object.assign({step:a,qn:b,uploader:c,ref:d},e),g)}}}),null);
__d("HTML5FilePicker",["cx","ArbiterMixin","BrowserSupport","CSS","DOM","FilePickerEvent","FileSelectionContainer","Keys","Parent","PhotosUploadID","PhotosUploadWaterfall","PhotosUploadWaterfallMixin","PhotosUploadWaterfallXMixin","PUWApplications","PUWSteps","URI","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c){__p&&__p();this._config=babelHelpers["extends"]({accept:undefined,multiple:undefined},c);this._button=a;this._beginInformed=!1;if(!b("BrowserSupport").hasFileAPI()){this.logStep(b("PUWSteps").CLIENT_PROCESS_UNAVAILABLE,{error:"no_file_api"});if(Object.prototype.hasOwnProperty.call(this._config,"fallbackFunction")){this._config.fallbackFunction.call(this);return}return}this._subscriptions=[];c=this._config.input||b("DOM").create("input",{type:"file",className:"_n",tabindex:"-1"});Object.prototype.hasOwnProperty.call(this._config,"accept")&&(c.accept=this._config.accept);Object.prototype.hasOwnProperty.call(this._config,"multiple")&&(c.multiple=this._config.multiple);Object.prototype.hasOwnProperty.call(this._config,"title")&&(c.title=this._config.title);a=b("DOM").create("label",{className:"accessible_elem","for":b("getOrCreateDOMID")(c)},c.title);a=b("DOM").create("div",{className:"_3jk"},[a,c]);b("CSS").addClass(this._button,"_m");b("DOM").appendContent(this._button,a);this._button.setAttribute("rel","ignore");this._bindInput(c);this._button.onkeydown=function(event){event.keyCode===b("Keys").RETURN&&(this._input.click(),event&&event.stopPropagation&&event.stopPropagation())}.bind(this);a=b("Parent").byClass(this._button,"addPhotosDisabled");a&&(b("CSS").removeClass(a,"addPhotosDisabled"),b("CSS").addClass(a,"addPhotosEnabled"))}Object.assign(a.prototype,b("ArbiterMixin"),b("PhotosUploadWaterfallMixin"),b("PhotosUploadWaterfallXMixin"),{getUploaderApp:function(){return b("PhotosUploadWaterfall").APP_HTML5},getWaterfallID:function(){return this._config.qn},getWaterfallAppName:function(){return b("PUWApplications").WEB_HTML5},getWaterfallSource:function(){return this._config.ref},getSwfID:function(){return null},_constructFileList:function(){var a=Array.from(this._input.files);a.forEach(function(a){a.uploadID=b("PhotosUploadID").getNewID()});return a},_constructFileSelectionContainerList:function(){var a=Array.from(this._input.files);return a.map(function(a){return new(b("FileSelectionContainer"))(a)})},cleanup:function(){this._input&&(this._input.onclick=null,this._input.onchange=null),this._button&&(this._button.onkeydown=null)},_bindInput:function(a){this.cleanup(),a.onclick=function(){this.logWaterfallStep(b("PhotosUploadWaterfall").SELECT_START),this._beginInformed||(this._beginInformed=!0,this.inform(b("FilePickerEvent").BEGIN||"FilePickerEvent/BEGIN")),this.inform(b("FilePickerEvent").SELECT_START)}.bind(this),a.onchange=function(){this.inform(b("FilePickerEvent").SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()}),this._bindInput(this._input.cloneNode(!1))}.bind(this),this._input&&b("DOM").replace(this._input,a),this._input=a}});e.exports=a}),null);
__d("PrivacySelectorNewDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();var g,h="selector";g=babelHelpers.inherits(a,b("Dispatcher_DEPRECATED"));g&&g.prototype;a.prototype.handleUpdateFromSelector=function(a){"use strict";this.dispatch(babelHelpers["extends"]({payloadSource:h},a))};function a(){"use strict";g.apply(this,arguments)}c=new a();e.exports=c}),null);
__d("ReactComposerActions",["ReactComposerActionTypes","ReactComposerDispatcher","ReactComposerStore"],(function(a,b,c,d,e,f){__p&&__p();b("ReactComposerStore");var g=void 0;a={initConfig:function(a,c,d,e,f,g,h){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").INIT_CONFIG,loggingConfig:c,lazySproutsExpand:d,activateOnInit:e===!0,sproutsConfig:f,promotedSprout:g,triggeredFrom:h})},schedule:function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").SCHEDULE,scheduleDate:c})},postError:function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").POST_ERROR,response:c})},postIntended:function(a,c){setTimeout(function(){(!g||g(a,c.actorID,c.config,c.targetID))&&b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").POST_INTENDED,actorID:c.actorID,config:c.config,targetID:c.targetID})},0)},registerPostIntendedHandler:function(a){g=a},postStarted:function(a,c){var d=c.actorID,e=c.composerType,f=c.config,g=c.onPostSuccess,h=c.targetID,i=babelHelpers.objectWithoutProperties(c,["actorID","composerType","config","onPostSuccess","targetID"]);setTimeout(function(){return b("ReactComposerDispatcher").dispatch({composerID:a,composerType:e,type:b("ReactComposerActionTypes").POST_STARTED,actorID:d,config:f,targetID:h,onPostSuccess:g,otherData:i})},0)},createJobsOpeningFormatPostStarted:function(a){setTimeout(function(){return b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").POST_STARTED})},0)},postSucceeded:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").POST_SUCCEEDED})},postFinally:function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").POST_FINALLY,response:c})},publishStarted:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").PUBLISH_STARTED})},postPreprocessing:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").POST_PREPROCESSING})},reset:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").COMPOSER_RESET})},expandSprouts:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").EXPAND_SPROUTS})},collapseSprouts:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").COLLAPSE_SPROUTS})},setLoggedSproutPromotionView:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").SET_LOGGED_SPROUT_PROMOTION_VIEW})},setFinishedSproutPromotion:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").SET_FINISHED_SPROUT_PROMOTION})},setQueueFinishedSproutPromotion:function(a){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").SET_QUEUE_FINISHED_SPROUT_PROMOTION})},setShouldShowVoiceSwitcherNux:function(a,c){b("ReactComposerDispatcher").dispatch({composerID:a,type:b("ReactComposerActionTypes").SET_SHOULD_SHOW_VOICE_SWITCHER_NUX,value:c})}};e.exports=a}),null);
__d("XSproutPromotionUpdateController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/react_composer/sprouts/promotions/update/",{promotion_id:{type:"Int"},increment_view:{type:"Exists",defaultValue:!1},end_promotion:{type:"Exists",defaultValue:!1},current_promotion:{type:"Exists",defaultValue:!1}})}),null);
__d("ReactComposerSproutBadgePromotionUtils",["AsyncRequest","XSproutPromotionUpdateController","ReactComposerActions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={initWWWPromotion:function(a){a=b("XSproutPromotionUpdateController").getURIBuilder().setInt("promotion_id",a).setExists("current_promotion",!0).getURI();new(b("AsyncRequest"))().setURI(a).send()},addView:function(a,c){a=b("XSproutPromotionUpdateController").getURIBuilder().setInt("promotion_id",a).setExists("increment_view",!0).getURI();new(b("AsyncRequest"))().setURI(a).setHandler(function(a){a.payload&&a.payload.clear_badge_on_next_composer&&b("ReactComposerActions").setQueueFinishedSproutPromotion(c)}).send();b("ReactComposerActions").setLoggedSproutPromotionView(c)},endPromotion:function(a,c){a=b("XSproutPromotionUpdateController").getURIBuilder().setInt("promotion_id",a).setExists("end_promotion",!0).getURI();new(b("AsyncRequest"))().setURI(a).send();b("ReactComposerActions").setFinishedSproutPromotion(c)}};e.exports=a}),null);
__d("hasAdblock",["Promise","AdsAdBlockConfig","URI","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=void 0;function h(){__p&&__p();var a=document.createElement("div");a.className="AdBox Ad advert";document.body.appendChild(a);return new(b("Promise"))(function(b){__p&&__p();var c=window.getComputedStyle&&window.getComputedStyle(a);if(!c){b(!1);return}if(c.display==="none"){b(!0);return}if(c.MozBinding&&c.MozBinding.indexOf("url")===0){setTimeout(function(){return b(a.clientWidth===0)},5e3);return}b(!1)})}function i(){__p&&__p();var a=document.createElement("img");document.body.appendChild(a);return new(b("Promise"))(function(c){a.onload=function(){var b=window.getComputedStyle&&window.getComputedStyle(a);b=b&&b.display==="none";a.parentNode&&a.parentNode.removeChild(a);c(b)};a.onerror=function(){a.parentNode&&a.parentNode.removeChild(a),c(!0)};var d=new(b("URI"))("https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png");a.src=d.toString()})}function a(a){g===undefined?b("promiseDone")(b("Promise").all([h()].concat(b("AdsAdBlockConfig").shouldCheckImage?[i()]:[])),function(b){g=b.some(function(a){return a}),a(g)}):a(g)}e.exports=a}),null);
__d("getVendorPrefixedEventName",["fbjs/lib/ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}var g={animationend:a("Animation","AnimationEnd"),animationiteration:a("Animation","AnimationIteration"),animationstart:a("Animation","AnimationStart"),transitionend:a("Transition","TransitionEnd")},h={},i={};b("fbjs/lib/ExecutionEnvironment").canUseDOM&&(i=document.createElement("div").style,"AnimationEvent"in window||(delete g.animationend.animation,delete g.animationiteration.animation,delete g.animationstart.animation),"TransitionEvent"in window||delete g.transitionend.transition);function c(a){if(h[a])return h[a];else if(!g[a])return a;var b=g[a];for(var c in b)if(Object.prototype.hasOwnProperty.call(b,c)&&c in i)return h[a]=b[c];return""}e.exports=c}),null);
__d("ReactTransitionEvents",["fbjs/lib/ExecutionEnvironment","getVendorPrefixedEventName"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[];function a(){var a=b("getVendorPrefixedEventName")("animationend"),c=b("getVendorPrefixedEventName")("transitionend");a&&g.push(a);c&&g.push(c)}b("fbjs/lib/ExecutionEnvironment").canUseDOM&&a();function h(a,b,c){a.addEventListener(b,c,!1)}function i(a,b,c){a.removeEventListener(b,c,!1)}c={addEndEventListener:function(a,b){if(g.length===0){window.setTimeout(b,0);return}g.forEach(function(c){h(a,c,b)})},removeEndEventListener:function(a,b){if(g.length===0)return;g.forEach(function(c){i(a,c,b)})}};e.exports=c}),null);
__d("ReactCSSTransitionGroupChild",["React","ReactDOM","ReactTransitionEvents","fbjs/lib/CSSCore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=17;a=b("React").createClass({displayName:"ReactCSSTransitionGroupChild",propTypes:{name:b("React").PropTypes.oneOfType([b("React").PropTypes.string,b("React").PropTypes.shape({enter:b("React").PropTypes.string,leave:b("React").PropTypes.string,active:b("React").PropTypes.string}),b("React").PropTypes.shape({enter:b("React").PropTypes.string,enterActive:b("React").PropTypes.string,leave:b("React").PropTypes.string,leaveActive:b("React").PropTypes.string,appear:b("React").PropTypes.string,appearActive:b("React").PropTypes.string})]).isRequired,appear:b("React").PropTypes.bool,enter:b("React").PropTypes.bool,leave:b("React").PropTypes.bool,appearTimeout:b("React").PropTypes.number,enterTimeout:b("React").PropTypes.number,leaveTimeout:b("React").PropTypes.number},transition:function(a,c,d){__p&&__p();var e=b("ReactDOM").findDOMNode(this);if(!e){c&&c();return}var f=this.props.name[a]||this.props.name+"-"+a,g=this.props.name[a+"Active"]||f+"-active",h=null;a=function a(d){if(d&&d.target!==e)return;clearTimeout(h);b("fbjs/lib/CSSCore").removeClass(e,f);b("fbjs/lib/CSSCore").removeClass(e,g);b("ReactTransitionEvents").removeEndEventListener(e,a);c&&c()};b("fbjs/lib/CSSCore").addClass(e,f);this.queueClassAndNode(g,e);d?(h=setTimeout(a,d),this.transitionTimeouts.push(h)):b("ReactTransitionEvents").addEndEventListener(e,a)},queueClassAndNode:function(a,b){this.classNameAndNodeQueue.push({className:a,node:b}),this.timeout||(this.timeout=setTimeout(this.flushClassNameAndNodeQueue,g))},flushClassNameAndNodeQueue:function(){this.isMounted()&&this.classNameAndNodeQueue.forEach(function(a){b("fbjs/lib/CSSCore").addClass(a.node,a.className)}),this.classNameAndNodeQueue.length=0,this.timeout=null},UNSAFE_componentWillMount:function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(a){clearTimeout(a)}),this.classNameAndNodeQueue.length=0},componentWillAppear:function(a){this.props.appear?this.transition("appear",a,this.props.appearTimeout):a()},componentWillEnter:function(a){this.props.enter?this.transition("enter",a,this.props.enterTimeout):a()},componentWillLeave:function(a){this.props.leave?this.transition("leave",a,this.props.leaveTimeout):a()},render:function(){return b("React").Children.only(this.props.children)}});e.exports=a}),null);
__d("ReactTransitionChildMapping",["React","emptyFunction","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("emptyFunction");c={getChildMapping:function(a){if(!a)return a;var c={};b("React").Children.toArray(a).forEach(function(a){var b=a.key,d=c[b]===undefined;d&&(c[b]=a)});return c},mergeChildMappings:function(a,b){__p&&__p();a=a||{};b=b||{};function c(c){if(Object.prototype.hasOwnProperty.call(b,c))return b[c];else return a[c]}var d={},e=[];for(var f in a)Object.prototype.hasOwnProperty.call(b,f)?e.length&&(d[f]=e,e=[]):e.push(f);var g,h={};for(var i in b){if(Object.prototype.hasOwnProperty.call(d,i))for(g=0;g<d[i].length;g++){var j=d[i][g];h[d[i][g]]=c(j)}h[i]=c(i)}for(g=0;g<e.length;g++)h[e[g]]=c(e[g]);return h}};e.exports=c}),null);
__d("ReactTransitionGroup",["React","ReactTransitionChildMapping","fbjs/lib/emptyFunction"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.state={children:b("ReactTransitionChildMapping").getChildMapping(this.props.children)},this.performAppear=function(a){this.currentlyTransitioningKeys[a]=!0;var b=this.refs[a];b.componentWillAppear?b.componentWillAppear(this.$1.bind(this,a)):this.$1(a)}.bind(this),this.$1=function(a){var c=this.refs[a];c.componentDidAppear&&c.componentDidAppear();delete this.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(this.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&this.performLeave(a)}.bind(this),this.performEnter=function(a){this.currentlyTransitioningKeys[a]=!0;var b=this.refs[a];b.componentWillEnter?b.componentWillEnter(this.$2.bind(this,a)):this.$2(a)}.bind(this),this.$2=function(a){var c=this.refs[a];c.componentDidEnter&&c.componentDidEnter();delete this.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(this.props.children);(!c||!Object.prototype.hasOwnProperty.call(c,a))&&this.performLeave(a)}.bind(this),this.performLeave=function(a){this.currentlyTransitioningKeys[a]=!0;var b=this.refs[a];b.componentWillLeave?b.componentWillLeave(this.$3.bind(this,a)):this.$3(a)}.bind(this),this.$3=function(a){var c=this.refs[a];c.componentDidLeave&&c.componentDidLeave();delete this.currentlyTransitioningKeys[a];c=b("ReactTransitionChildMapping").getChildMapping(this.props.children);c&&Object.prototype.hasOwnProperty.call(c,a)?this.performEnter(a):this.setState(function(b){b=Object.assign({},b.children);delete b[a];return{children:b}})}.bind(this),c}a.prototype.UNSAFE_componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]};a.prototype.componentDidMount=function(){var a=this.state.children;for(var b in a)a[b]&&this.performAppear(b)};a.prototype.UNSAFE_componentWillReceiveProps=function(a){__p&&__p();a=b("ReactTransitionChildMapping").getChildMapping(a.children);var c=this.state.children;this.setState({children:b("ReactTransitionChildMapping").mergeChildMappings(c,a)});var d;for(d in a){var e=c&&Object.prototype.hasOwnProperty.call(c,d);a[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToEnter.push(d)}for(d in c){e=a&&Object.prototype.hasOwnProperty.call(a,d);c[d]&&!e&&!this.currentlyTransitioningKeys[d]&&this.keysToLeave.push(d)}};a.prototype.componentDidUpdate=function(){var a=this.keysToEnter;this.keysToEnter=[];a.forEach(this.performEnter);a=this.keysToLeave;this.keysToLeave=[];a.forEach(this.performLeave)};a.prototype.render=function(){__p&&__p();var a=[];for(var c in this.state.children){var d=this.state.children[c];d&&a.push(b("React").cloneElement(this.props.childFactory(d),{ref:c,key:c}))}d=Object.assign({},this.props);delete d.transitionLeave;delete d.transitionName;delete d.transitionAppear;delete d.transitionEnter;delete d.childFactory;delete d.transitionLeaveTimeout;delete d.transitionEnterTimeout;delete d.transitionAppearTimeout;delete d.component;return b("React").createElement(this.props.component,d,a)};a.displayName="ReactTransitionGroup";a.propTypes={component:b("React").PropTypes.any,childFactory:b("React").PropTypes.func};a.defaultProps={component:"span",childFactory:b("fbjs/lib/emptyFunction").thatReturnsArgument};e.exports=a}),null);
__d("ReactCSSTransitionGroup",["React","ReactCSSTransitionGroupChild","ReactTransitionGroup"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a){var b="transition"+a+"Timeout",c="transition"+a;return function(a){if(a[c])if(a[b]==null)return new Error(b+" wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");else if(typeof a[b]!=="number")return new Error(b+" must be a number (in milliseconds)")}}d=babelHelpers.inherits(c,b("React").Component);g=d&&d.prototype;function c(){var a,c;for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=g.constructor).call.apply(a,[this].concat(e)),this.$1=function(a){return b("React").createElement(b("ReactCSSTransitionGroupChild"),{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},a)}.bind(this),c}c.prototype.render=function(){return b("React").createElement(b("ReactTransitionGroup"),Object.assign({},this.props,{childFactory:this.$1}))};c.displayName="ReactCSSTransitionGroup";c.propTypes={transitionName:b("ReactCSSTransitionGroupChild").propTypes.name,transitionAppear:b("React").PropTypes.bool,transitionEnter:b("React").PropTypes.bool,transitionLeave:b("React").PropTypes.bool,transitionAppearTimeout:a("Appear"),transitionEnterTimeout:a("Enter"),transitionLeaveTimeout:a("Leave")};c.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0};e.exports=c}),null);
__d("XPrivacyCustomDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/privacy/custom_dialog/",{id:{type:"String",required:!0},option_id:{type:"String",required:!0},autosave:{type:"Bool",defaultValue:!1},explain_tags:{type:"Bool",defaultValue:!1},limit_community:{type:"Bool",defaultValue:!1},limit_facebook:{type:"Bool",defaultValue:!1},limit_fof:{type:"Bool",defaultValue:!1},limit_tagexpand:{type:"Bool",defaultValue:!1},is_new_privacy_selector:{type:"Bool",defaultValue:!1},render_location_enum:{type:"Enum",enumType:1},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},saved_custom_opt_in:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);
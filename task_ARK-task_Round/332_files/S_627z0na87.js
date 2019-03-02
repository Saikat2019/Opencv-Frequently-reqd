if (self.CavalryLogger) { CavalryLogger.start_js(["pUQ4Y"]); }

__d("CustomColorHighlightingReact.bs",["ReasonReact.bs","bs_js_null_undefined","CustomColorHighlighting.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("ReasonReact.bs").wrapJsForReason(b("CustomColorHighlighting.react"),{customColor:b("bs_js_null_undefined").fromOption(a)},c)}f.make=a}),null);
__d("MessengerScrollableAreaReact.bs",["ReasonReact.bs","bs_js_null_undefined","MessengerScrollableArea.react"],(function(a,b,c,d,e,f){"use strict";function a(a,c){return b("ReasonReact.bs").wrapJsForReason(b("MessengerScrollableArea.react"),{height:b("bs_js_null_undefined").fromOption(a)},c)}f.make=a}),null);
__d("PhotoUtils",["Event","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getImagesFromData:function(a){var b=[];for(var c in a)c.indexOf("image")===0&&b.push(a[c]);return b},getFBIDFromData:function(a){return a&&a.id},getOriginalImageFromData:function(a){return a.original||a.download_image},getDownloadURLFromData:function(a){a=this.getOriginalImageFromData(a);if(!a)return null;a=new(b("URI"))(a.uri);a.addQueryData({dl:1});return a},getPermalinkFromData:function(a){return a.permalink},canViewerMakeCoverPhoto:function(a){return!!a.can_viewer_make_cover_photo},getCoverPhotoURLFromData:function(a){return new(b("URI"))("/profile.php").addQueryData({preview_cover:g.getFBIDFromData(a)})},preload:function(a,c,d){var e=a.getDimensions();for(var f=0;f<c.length;++f){var g=e.getBestFitImageFromPhoto(c[f],e.getMaxStageDimensions()),h=new Image();d&&b("Event").listen(h,"load",d.bind(null,c[f]));a.getLogger().log(g.uri);h.src=g.uri}}};e.exports=g}),null);
__d("SpotlightViewer",["cx","React","Spotlight.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";if(!this.props.open)return null;var a="_n3";this.props.className&&(a+=" "+this.props.className);return b("React").createElement(b("Spotlight.react"),{onBeforeHide:this.props.onBeforeHide,onHide:this.props.onHide,rootClassName:this.props.rootClassName,shown:this.props.open,key:"photoLayer"},b("React").createElement("div",{className:a,onClick:this.props.onClick,role:"presentation"},this.props.children))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("SpotlightViewerImage",["cx","Image.react","React","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$3=function(){this.setState({loading:!1})}.bind(this),this.state={loading:!0}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.src!==this.props.src&&this.setState({loading:!0})};a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_4-od"},this.$1(),this.$2())};a.prototype.$1=function(){"use strict";return!this.state.loading?null:b("React").createElement(b("XUISpinner.react"),{className:"_enh",size:"large"})};a.prototype.$2=function(){"use strict";return b("React").createElement("div",{className:this.state.loading?"_eni":""},b("React").createElement(b("Image.react"),{onLoad:this.$3,src:this.props.src,style:{width:this.props.dimensions.x||"",height:this.props.dimensions.y||""}}))};e.exports=a}),null);
__d("SpotlightViewport",["csx","cx","Locale","Parent","React","ReactDOM","Vector","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"SpotlightViewport",propTypes:{stageDimensions:a.object.isRequired,useWidth:a.bool},PAGE_TO_PREV_PERCENTAGE:.2,sections:{NONE:null,FORWARD:1,BACKWARD:2},timer:null,getInitialState:function(){return{currentActiveSection:this.sections.NONE,active:!0}},componentDidMount:function(){this._onMouseEnter()},componentWillUnmount:function(){this.props.fadeInNOut&&clearTimeout(this.timer)},_onMouseMove:function(event){var a=b("ReactDOM").findDOMNode(this),c=b("Vector").getEventPosition(event.nativeEvent),d=b("Vector").getElementPosition(a);a=this.props.useWidth?this.props.stageDimensions.x:b("Vector").getElementDimensions(a).x;this.props.fadeInNOut&&(this._isMouseOverActionBars(c)?clearTimeout(this.timer):this._onMouseEnter());c=c.x-d.x;d=c/a;b("Locale").isRTL()?c=d>1-this.PAGE_TO_PREV_PERCENTAGE:c=d<this.PAGE_TO_PREV_PERCENTAGE;c?this.setState({currentActiveSection:this.sections.BACKWARD}):this.setState({currentActiveSection:this.sections.FORWARD})},_onClick:function(event){var a=this.state.currentActiveSection==this.sections.FORWARD,c=event.target;b("Parent").bySelector(c,"._51an")||this.props.onClick&&this.props.onClick(a,event)},_isMouseOverActionBars:function(a){return a.y<70||a.y>this.props.stageDimensions.y-70},_onMouseEnter:function(){this.setState({active:!0}),this.props.fadeInNOut&&(clearTimeout(this.timer),this.timer=setTimeout(this._onMouseLeave,1e3))},_onMouseLeave:function(){this.setState({active:!1})},makeActive:function(){this._onMouseEnter()},render:function(){var a="_4-of"+(!this.state.active&&!this.props.active?" _50-l":"")+(this.state.currentActiveSection===this.sections.BACKWARD?" _516a":"")+(this.state.currentActiveSection===this.sections.FORWARD?" _516b":"")+(this.props.showLoadingIndicator?" _51jp":"");this.props.className&&(a=b("joinClasses")(a,this.props.className));var c={};this.props.stageDimensions&&(c={height:this.props.stageDimensions.y},this.props.useWidth&&(c.width=this.props.stageDimensions.x));return b("React").createElement("div",{className:a,onClick:this._onClick,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave,onMouseMove:this._onMouseMove,role:"presentation",style:c},this.props.children,b("React").createElement("div",{className:"_4-og"},b("React").createElement("span",{className:"_4-oh"}),this.props.media,b("React").createElement("div",{className:"_4-oi"})))}});e.exports=c}),null);
__d("AddCommentFlyoutSizeType",[],(function(a,b,c,d,e,f){a={LARGE:"large",SMALL:"small"};e.exports=a}),null);
__d("StickersStateStore",["FluxReduceStore","immutable","StickersActions","StickersConfig","StickersDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return b("immutable").Map({recentStickers:[],recentStickersLoaded:!1,showFlyout:!1,storePackID:null,threadID:null,trayLoaded:!1,trayPackID:null})};a.prototype.reduce=function(a,c){__p&&__p();var d=c;c=b("StickersActions").Types;switch(d.type){case c.ADD_RECENT_STICKER:var e=[d.sticker];a.get("recentStickers").forEach(function(a){if(a.id===d.sticker.id)return;e.push(a)});return a.set("recentStickers",e.splice(0,b("StickersConfig").max_mru_stickers));case c.HIDE_FLYOUT:return a.set("showFlyout",!1);case c.LOAD_RECENT_STICKERS:return a.set("recentStickersLoaded",!0).set("recentStickers",d.stickers);case c.SELECT_STORE_PACK:return a.set("storePackID",d.packID);case c.SELECT_TRAY_PACK:return a.set("trayPackID",d.packID).set("trayLoaded",!0);case c.SHOW_FLYOUT:return a.set("showFlyout",!0).set("threadID",d.threadID);case c.TRAY_LOADED:return a.set("trayLoaded",!0);default:return a}};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("StickersDispatcher"))}),null);
__d("StickersStoreController",["cx","Bootloader","DialogFitHeight","DOM","LayerAutoFocus","LayerFadeOnHide","LayerHideOnEscape","PureStoreBasedStateMixin","React","ReactDOM","StickersActions","StickersDispatcher","StickersStateStore","XUIDialog.react","XUIDialogBody.react","XUISpinner.react","isSocialPlugin","requestAnimationFrame"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=688,i=320,j=null,k=b("React").createClass({displayName:"StoreLayer",mixins:[b("PureStoreBasedStateMixin")(b("StickersStateStore"))],propTypes:{isComposer:a.bool,onToggle:a.func.isRequired,shown:a.bool.isRequired},getDefaultProps:function(){return{isComposer:!1}},statics:{calculateState:function(){return{packID:b("StickersStateStore").getState().get("storePackID")}}},getInitialState:function(){return{renderStore:function(){return b("React").createElement("div",{className:"_5r5e"},b("React").createElement(b("XUISpinner.react"),{background:"light",size:"large"}))}}},UNSAFE_componentWillMount:function(){b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])},shouldComponentUpdate:function(a){return!!a.shown},componentDidMount:function(){b("Bootloader").loadModules(["StickersStore.react","react-relay/classic/container/RelayRootContainer","StickersStorePackListRoute","StickersStorePackDetailRoute"],function(a,c,d,e){this.setState({renderStore:function(){var f=this.state.packID?new e({packID:this.state.packID}):new d();return b("React").createElement(c,{Component:a,route:f,renderFetched:function(c){return b("React").createElement(a,babelHelpers["extends"]({},c,{isComposer:this.props.isComposer,packID:this.state.packID,shown:this.props.shown}))}.bind(this)})}.bind(this)})}.bind(this),"StickersStoreController")},_onToggle:function(a){b("requestAnimationFrame")(function(){return this.props.onToggle(a)}.bind(this))},render:function(){var a=b("isSocialPlugin")()&&document.body.offsetWidth<h?i:h;return b("React").createElement(b("XUIDialog.react"),{behaviors:{DialogFitHeight:b("DialogFitHeight"),LayerAutoFocus:b("LayerAutoFocus"),LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},onToggle:this._onToggle,shown:this.props.shown,width:a},b("React").createElement(b("XUIDialogBody.react"),{className:"_5rq- autofocus"},this.state.renderStore()))}}),l=function(a){j||(j=b("DOM").create("div"),b("DOM").appendContent(document.body,j)),b("ReactDOM").render(b("React").createElement(k,{isComposer:a,onToggle:n,shown:!0}),j)},m=function(){if(!j)return;b("ReactDOM").render(b("React").createElement(k,{shown:!1,onToggle:n}),j)},n=function(a){a?l():m()};c={showStore:function(a,c){b("StickersActions").selectStorePack(a),l(!!c)}};e.exports=c}),null);
__d("PhotoProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EQUIRECTANGULAR:"equirectangular",CUBESTRIP:"cubestrip",CYLINDRICAL:"cylindrical",TILED_CUBEMAP:"tiled_cubemap",PERSPECTIVE:"perspective",TRANSVERSE_CYLINDRICAL:"transverse-cylindrical"})}),null);
__d("PhotoRendererProjection",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSPECTIVE:"perspective",STEREOGRAPHIC:"stereographic",CYLINDRICAL:"cylindrical",EQUIRECTANGULAR:"equirectangular"})}),null);
__d("react",["react-0.0.0"],(function(a,b,c,d,e,f){e.exports=b("react-0.0.0")()}),null);
__d("create-react-class",["react","create-react-class/factory"],(function(a,b,c,d,e,f){"use strict";if(typeof b("react")==="undefined")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");a=new(b("react").Component)().updater;e.exports=b("create-react-class/factory")(b("react").Component,b("react").isValidElement,a)}),null);
__d("bs_marshal",["bs_caml_string","bs_caml_missing_polyfill","bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c,d,e,f){if(c<0||d<0||c>(a.length-d|0))throw[b("bs_caml_builtin_exceptions").invalid_argument,"Marshal.to_buffer: substring out of bounds"];else return b("bs_caml_missing_polyfill").not_implemented("caml_output_value_to_buffer")}function g(a,c){if(c<0||c>(a.length-20|0))throw[b("bs_caml_builtin_exceptions").invalid_argument,"Marshal.data_size"];else return b("bs_caml_missing_polyfill").not_implemented("caml_marshal_data_size")}function c(a,b){return 20+g(a,b)|0}function h(a,c){if(c<0||c>(a.length-20|0))throw[b("bs_caml_builtin_exceptions").invalid_argument,"Marshal.from_bytes"];else{var d=b("bs_caml_missing_polyfill").not_implemented("caml_marshal_data_size");if(c>(a.length-(20+d|0)|0))throw[b("bs_caml_builtin_exceptions").invalid_argument,"Marshal.from_bytes"];else return b("bs_caml_missing_polyfill").not_implemented("caml_input_value_from_string")}}function d(a,c){return h(b("bs_caml_string").bytes_of_string(a),c)}function e(a,c,d){return b("bs_caml_missing_polyfill").not_implemented("caml_output_value")}function i(){return b("bs_caml_missing_polyfill").not_implemented("caml_input_value")}var j=20;f.to_channel=e;f.to_buffer=a;f.from_channel=i;f.from_bytes=h;f.from_string=d;f.header_size=j;f.data_size=g;f.total_size=c}),null);
__d("bs_obj",["bs_marshal","bs_caml_array","bs_caml_missing_polyfill","bs_caml_builtin_exceptions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("bs_caml_array").caml_array_get,h=b("bs_caml_array").caml_array_set;function a(){return b("bs_caml_missing_polyfill").not_implemented("caml_output_value_to_string")}function c(a,c){return[b("bs_marshal").from_bytes(a,c),c+b("bs_marshal").total_size(a,c)|0]}function i(a){a=a.length!==undefined&&(a.tag|0)!==248&&a.length>=1?a[0]:a;var c;if(a.length!==undefined&&a.tag===248)c=a[0];else throw b("bs_caml_builtin_exceptions").not_found;if(c.tag===252)return a;else throw b("bs_caml_builtin_exceptions").not_found}function d(a){try{a=i(a);return a[0]}catch(a){if(a===b("bs_caml_builtin_exceptions").not_found)throw[b("bs_caml_builtin_exceptions").invalid_argument,"Obj.extension_name"];else throw a}}function e(a){try{a=i(a);return a[1]}catch(a){if(a===b("bs_caml_builtin_exceptions").not_found)throw[b("bs_caml_builtin_exceptions").invalid_argument,"Obj.extension_id"];else throw a}}function j(a){try{return i(a)}catch(a){if(a===b("bs_caml_builtin_exceptions").not_found)throw[b("bs_caml_builtin_exceptions").invalid_argument,"Obj.extension_slot"];else throw a}}var k=0,l=245,m=246,n=247,o=248,p=249,q=250,r=251,s=251,t=252,u=253,v=254,w=255,x=255,y=1e3,z=1001,A=1002;f.double_field=g;f.set_double_field=h;f.first_non_constant_constructor_tag=k;f.last_non_constant_constructor_tag=l;f.lazy_tag=m;f.closure_tag=n;f.object_tag=o;f.infix_tag=p;f.forward_tag=q;f.no_scan_tag=r;f.abstract_tag=s;f.string_tag=t;f.double_tag=u;f.double_array_tag=v;f.custom_tag=w;f.final_tag=x;f.int_tag=y;f.out_of_heap_tag=z;f.unaligned_tag=A;f.extension_name=d;f.extension_id=e;f.extension_slot=j;f.marshal=a;f.unmarshal=c}),null);
__d("bs_camlinternalLazy",["bs_obj","bs_curry","bs_caml_exceptions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("bs_caml_exceptions").create("CamlinternalLazy.Undefined");function h(){throw g}function i(a){__p&&__p();var c=a[0];a[0]=h;try{c=b("bs_curry")._1(c,0);a[0]=c;a.tag=b("bs_obj").forward_tag;return c}catch(b){a[0]=function(){throw b};throw b}}function j(a){var c=a[0];a[0]=h;c=b("bs_curry")._1(c,0);a[0]=c;a.tag=b("bs_obj").forward_tag;return c}function a(a){var c=a.tag|0;if(c===b("bs_obj").forward_tag)return a[0];else if(c!==b("bs_obj").lazy_tag)return a;else return i(a)}function c(a){var c=a.tag|0;if(c===b("bs_obj").forward_tag)return a[0];else if(c!==b("bs_obj").lazy_tag)return a;else return j(a)}f.Undefined=g;f.force_lazy_block=i;f.force_val_lazy_block=j;f.force=a;f.force_val=c}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function(a,b,c,d,e,f){"use strict";e.exports=b("create-react-class")}),null);
__d("PhotosphereMetadata",["ImmutableRecordWithV4Types"],(function(a,b,c,d,e,f){"use strict";a=b("ImmutableRecordWithV4Types").Record;c=a({CroppedAreaImageHeightPixels:0,CroppedAreaImageWidthPixels:0,CroppedAreaLeftPixels:0,CroppedAreaTopPixels:0,FullPanoHeightPixels:0,FullPanoWidthPixels:0,InitialViewHeadingDegrees:0,InitialViewPitchDegrees:0,InitialViewRollDegrees:0,InitialViewVerticalFOVDegrees:0,PoseHeadingDegrees:0,PosePitchDegrees:0,PoseRollDegrees:0,PreProcessCropLeftPixels:0,PreProcessCropRightPixels:0,ProjectionType:"equirectangular",RendererProjectionType:"equirectangular"});e.exports={makePhotosphereMetadata:c}}),null);
__d("SphericalPhotoUtils",["PhotoRendererProjection","PhotosphereMetadata","SphericalPhotoPartialLimits"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("PhotoRendererProjection").PERSPECTIVE,h=b("PhotosphereMetadata").makePhotosphereMetadata,i=b("SphericalPhotoPartialLimits").makePartialLimits,j={getMetadataFromGraphQLResult:function(a){return{CroppedAreaImageHeightPixels:a.cropped_area_image_height_pixels!=null?a.cropped_area_image_height_pixels.toString():null,CroppedAreaImageWidthPixels:a.cropped_area_image_width_pixels!=null?a.cropped_area_image_width_pixels.toString():null,CroppedAreaLeftPixels:a.cropped_area_left_pixels!=null?a.cropped_area_left_pixels.toString():null,CroppedAreaTopPixels:a.cropped_area_top_pixels!=null?a.cropped_area_top_pixels.toString():null,FullPanoHeightPixels:a.full_pano_height_pixels!=null?a.full_pano_height_pixels.toString():null,FullPanoWidthPixels:a.full_pano_width_pixels!=null?a.full_pano_width_pixels.toString():null,InitialViewHeadingDegrees:a.initial_view_heading_degrees!=null?a.initial_view_heading_degrees.toString():null,InitialViewPitchDegrees:a.initial_view_pitch_degrees!=null?a.initial_view_pitch_degrees.toString():null,InitialViewRollDegrees:a.initial_view_roll_degrees!=null?a.initial_view_roll_degrees.toString():null,InitialViewVerticalFOVDegrees:a.initial_view_vertical_fov_degrees!=null?a.initial_view_vertical_fov_degrees.toString():null,PoseHeadingDegrees:a.pose_heading_degrees!=null?a.pose_heading_degrees.toString():null,PosePitchDegrees:a.pose_pitch_degrees!=null?a.pose_pitch_degrees.toString():null,PoseRollDegrees:a.pose_roll_degrees!=null?a.pose_roll_degrees.toString():null,PreProcessCropLeftPixels:null,PreProcessCropRightPixels:null,ProjectionType:a.projection_type,RendererProjectionType:g}},calculatePartialLimits:function(a){__p&&__p();var b=a.FullPanoHeightPixels,c=a.FullPanoWidthPixels,d=a.CroppedAreaImageWidthPixels,e=a.CroppedAreaImageHeightPixels,f=a.CroppedAreaLeftPixels;a=a.CroppedAreaTopPixels;b=j.parseNumber(b);c=j.parseNumber(c);d=j.parseNumber(d);e=j.parseNumber(e);f=j.parseNumber(f);a=j.parseNumber(a);var g=void 0,h=void 0,k=void 0,l=void 0;if(d!==0&&d!==c){d=360*d/c;d<350&&(g=180*(1-2*f/c),h=d-g)}e!==0&&e!==b&&(a!==0&&(k=90*(1-2*a/b)),a+e!==b&&(l=180*(a+e-b/2)/b));f=null;c=null;d=null;a=null;k&&k<87.5&&(c=k);l&&l<87.5&&(f=l);g&&(d=g);h&&(a=h);return i({partialTopDegrees:c,partialBottomDegrees:f,partialLeftDegrees:d,partialRightDegrees:a})},parseNumber:function(a){return a?Number(a):0},getThumbnailsFromPhotoEncodings:function(a){a=a.find(function(a){return a.projection_type===g});var b=null,c=null;if(a&&a.thumbnails&&a.thumbnails.length>0){a=a.thumbnails;b=a[0]?a[0].uri:null;c=a[1]?a[1].uri:null}return{smallThumbnail:b,largeThumbnail:c}},photosphereMetadataStringToNumber:function(a){var b={};Object.keys(a).forEach(function(c){switch(c){case"ProjectionType":b.ProjectionType=a.ProjectionType;break;case"RendererProjectionType":b.RendererProjectionType=a.RendererProjectionType;break;default:b[c]=parseInt(a[c],10)}});return h(b)}};e.exports=j}),null);
__d("getErrorNameFromWebGLErrorCode",[],(function(a,b,c,d,e,f){var g={0:"NO_ERROR",1280:"INVALID_ENUM",1281:"INVALID_VALUE",1282:"INVALID_OPERATION",1285:"OUT_OF_MEMORY",1286:"INVALID_FRAMEBUFFER_OPERATION",37442:"CONTEXT_LOST_WEBGL"};function a(a){return!(a in g)?"UNKNOWN_ERROR":g[a]}e.exports=a}),null);
__d("XWorkplaceDesktopDownloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/desktop/download/{?file}/",{file:{type:"String"},ref:{type:"String"}})}),null);
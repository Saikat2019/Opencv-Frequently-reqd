if (self.CavalryLogger) { CavalryLogger.start_js(["d25Q1"]); }

__d("AsyncDOM",["CSS","DOM","ErrorUtils"],(function(a,b,c,d,e,f){__p&&__p();a={invoke:function(a,c){__p&&__p();for(var d=0;d<a.length;++d){var e=a[d],f=e[0],g=e[1],h=e[2];e=e[3];h=h&&c||null;g&&(h=b("DOM").scry(h||document.documentElement,g)[0]);switch(f){case"eval":new Function(e).apply(h);break;case"hide":b("CSS").hide(h);break;case"show":b("CSS").show(h);break;case"setContent":b("DOM").setContent(h,e);break;case"appendContent":b("DOM").appendContent(h,e);break;case"prependContent":b("DOM").prependContent(h,e);break;case"insertAfter":b("DOM").insertAfter(h,e);break;case"insertBefore":b("DOM").insertBefore(h,e);break;case"remove":b("DOM").remove(h);break;case"replace":b("DOM").replace(h,e);break;default:}}}};e.exports=a}),null);
__d("Live",["Arbiter","AsyncDOM","AsyncSignal","ChannelConstants","DataStore","DOM","ServerJS","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){c=JSON.parse(JSON.stringify(c)),new(b("ServerJS"))().setRelativeTo(a).handle(c)}var h={logAll:!1,startup:function(a){h.logAll=a,h.startup=b("emptyFunction"),b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("live"),h.handleMessage.bind(h))},lookupLiveNode:function(a,c){a=b("DOM").scry(document.body,".live_"+a+"_"+c);a.forEach(function(a){if(b("DataStore").get(a,"seqnum")===undefined){var c=JSON.parse(a.getAttribute("data-live"));b("DataStore").set(a,"seqnum",c.seq)}});return a},handleMessage:function(a,c){var d=c.obj;a=d.fbid;c=d.assoc;a=this.lookupLiveNode(a,c);if(!a)return!1;a.forEach(function(a){b("AsyncDOM").invoke(d.updates,a),d.js&&g(a,d.js)})},log:function(){if(h.logAll){var a=Array.from(arguments).join(":");new(b("AsyncSignal"))("/common/scribe_endpoint.php",{c:"live_sequence",m:a}).send()}}};e.exports=h}),null);
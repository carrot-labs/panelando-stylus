/*! 1.6.12 */
!function(){var a=function(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(void 0!=navigator.mimeTypes["application/x-shockwave-flash"])return!0}return!1},b=function(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])};if(window.XMLHttpRequest){if(!window.FormData||window.FileAPI&&FileAPI.forceLoad){var c=function(a){if(!a.__listeners){a.upload||(a.upload={}),a.__listeners=[];var b=a.upload.addEventListener;a.upload.addEventListener=function(c,d){a.__listeners[c]=d,b&&b.apply(this,arguments)}}};b("open",function(a){return function(b,d,e){c(this),this.__url=d;try{a.apply(this,[b,d,e])}catch(f){f.message.indexOf("Access is denied")>-1&&a.apply(this,[b,"_fix_for_ie_crossdomain__",e])}}}),b("getResponseHeader",function(a){return function(b){return this.__fileApiXHR&&this.__fileApiXHR.getResponseHeader?this.__fileApiXHR.getResponseHeader(b):null==a?null:a.apply(this,[b])}}),b("getAllResponseHeaders",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.getAllResponseHeaders?this.__fileApiXHR.getAllResponseHeaders():null==a?null:a.apply(this)}}),b("abort",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.abort?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),b("setRequestHeader",function(a){return function(b,d){if("__setXHR_"===b){c(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[b]=d,a.apply(this,arguments)}}),b("send",function(b){return function(){var c=this;if(arguments[0]&&arguments[0].__isShim){var d=arguments[0],e={url:c.__url,jsonp:!1,cache:!0,complete:function(a,b){c.__completed=!0,!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"loadend",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),void 0!==b.status&&Object.defineProperty(c,"status",{get:function(){return 0==b.status&&a&&"abort"!==a?500:b.status}}),void 0!==b.statusText&&Object.defineProperty(c,"statusText",{get:function(){return b.statusText}}),Object.defineProperty(c,"readyState",{get:function(){return 4}}),void 0!==b.response&&Object.defineProperty(c,"response",{get:function(){return b.response}});var d=b.responseText||(a&&0==b.status&&"abort"!==a?a:void 0);Object.defineProperty(c,"responseText",{get:function(){return d}}),Object.defineProperty(c,"response",{get:function(){return d}}),a&&Object.defineProperty(c,"err",{get:function(){return a}}),c.__fileApiXHR=b,c.onreadystatechange&&c.onreadystatechange()},fileprogress:function(a){if(a.target=c,c.__listeners.progress&&c.__listeners.progress(a),c.__total=a.total,c.__loaded=a.loaded,a.total===a.loaded){var b=this;setTimeout(function(){c.__completed||(c.getAllResponseHeaders=function(){},b.complete(null,{status:204,statusText:"No Content"}))},1e4)}},headers:c.__requestHeaders};e.data={},e.files={};for(var f=0;f<d.data.length;f++){var g=d.data[f];null!=g.val&&null!=g.val.name&&null!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!a())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR=FileAPI.upload(e)},1)}else b.apply(c,arguments)}})}else b("setRequestHeader",function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}});window.XMLHttpRequest.__isShim=!0}if(!window.FormData||window.FileAPI&&FileAPI.forceLoad){var d=function(b){if(!a())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';var c=angular.element(b);if(!(c.attr("disabled")||c.hasClass("js-fileapi-wrapper")||null==b.getAttribute("ng-file-select")&&null==b.getAttribute("data-ng-file-select")))if(FileAPI.wrapInsideDiv){var d=document.createElement("div");d.innerHTML='<div class="js-fileapi-wrapper" style="position:relative; overflow:hidden"></div>',d=d.firstChild;var e=b.parentNode;e.insertBefore(d,b),e.removeChild(b),d.appendChild(b)}else c.addClass("js-fileapi-wrapper"),c.parent()[0].__file_click_fn_delegate_&&((""===c.parent().css("position")||"static"===c.parent().css("position"))&&c.parent().css("position","relative"),c.css("top",0).css("bottom",0).css("left",0).css("right",0).css("width","100%").css("height","100%").css("padding",0).css("margin",0),c.parent().unbind("click",c.parent()[0].__file_click_fn_delegate_))},e=function(a){return function(b){for(var c=FileAPI.getFiles(b),d=0;d<c.length;d++)void 0===c[d].size&&(c[d].size=0),void 0===c[d].name&&(c[d].name="file"),void 0===c[d].type&&(c[d].type="undefined");b.target||(b.target={}),b.target.files=c,b.target.files!=c&&(b.__files_=c),(b.__files_||b.target.files).item=function(a){return(b.__files_||b.target.files)[a]||null},a&&a.apply(this,[b])}},f=function(a,b){return("change"===b.toLowerCase()||"onchange"===b.toLowerCase())&&"file"==a.getAttribute("type")};HTMLInputElement.prototype.addEventListener&&(HTMLInputElement.prototype.addEventListener=function(a){return function(b,c,g,h){f(this,b)?(d(this),a.apply(this,[b,e(c),g,h])):a.apply(this,[b,c,g,h])}}(HTMLInputElement.prototype.addEventListener)),HTMLInputElement.prototype.attachEvent&&(HTMLInputElement.prototype.attachEvent=function(a){return function(b,c){f(this,b)?(d(this),window.jQuery?angular.element(this).bind("change",e(null)):a.apply(this,[b,e(c)])):a.apply(this,[b,c])}}(HTMLInputElement.prototype.attachEvent)),window.FormData=FormData=function(){return{append:function(a,b,c){this.data.push({key:a,val:b,name:c})},data:[],__isShim:!0}},function(){if(window.FileAPI||(window.FileAPI={}),FileAPI.forceLoad&&(FileAPI.html5=!1),!FileAPI.upload){var b,c,d,e,f,g=document.createElement("script"),h=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)b=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)c=window.FileAPI.jsPath;else for(d=0;d<h.length;d++)if(f=h[d].src,e=f.indexOf("angular-file-upload-shim.js"),-1==e&&(e=f.indexOf("angular-file-upload-shim.min.js")),e>-1){c=f.substring(0,e);break}null==FileAPI.staticPath&&(FileAPI.staticPath=c),g.setAttribute("src",b||c+"FileAPI.min.js"),document.getElementsByTagName("head")[0].appendChild(g),FileAPI.hasFlash=a()}}(),FileAPI.disableFileInput=function(a,b){b?a.removeClass("js-fileapi-wrapper"):a.addClass("js-fileapi-wrapper")}}window.FileReader||(window.FileReader=function(){var a=this,b=!1;this.listeners={},this.addEventListener=function(b,c){a.listeners[b]=a.listeners[b]||[],a.listeners[b].push(c)},this.removeEventListener=function(b,c){a.listeners[b]&&a.listeners[b].splice(a.listeners[b].indexOf(c),1)},this.dispatchEvent=function(b){var c=a.listeners[b.type];if(c)for(var d=0;d<c.length;d++)c[d].call(a,b)},this.onabort=this.onerror=this.onload=this.onloadstart=this.onloadend=this.onprogress=null;var c=function(b,c){var d={type:b,target:a,loaded:c.loaded,total:c.total,error:c.error};return null!=c.result&&(d.target.result=c.result),d},d=function(d){if(b||(b=!0,a.onloadstart&&this.onloadstart(c("loadstart",d))),"load"===d.type){a.onloadend&&a.onloadend(c("loadend",d));var e=c("load",d);a.onload&&a.onload(e),a.dispatchEvent(e)}else if("progress"===d.type){var e=c("progress",d);a.onprogress&&a.onprogress(e),a.dispatchEvent(e)}else{var e=c("error",d);a.onerror&&a.onerror(e),a.dispatchEvent(e)}};this.readAsArrayBuffer=function(a){FileAPI.readAsBinaryString(a,d)},this.readAsBinaryString=function(a){FileAPI.readAsBinaryString(a,d)},this.readAsDataURL=function(a){FileAPI.readAsDataURL(a,d)},this.readAsText=function(a){FileAPI.readAsText(a,d)}})}();;/*! 1.6.12 */
!function(){var a=angular.module("ngFileUpload",[]);a.service("$upload",["$http","$q","$timeout",function(a,b,c){function d(d){d.method=d.method||"POST",d.headers=d.headers||{},d.transformRequest=d.transformRequest||function(b,c){return window.ArrayBuffer&&b instanceof window.ArrayBuffer?b:a.defaults.transformRequest[0](b,c)};var e=b.defer();window.XMLHttpRequest.__isShim&&(d.headers.__setXHR_=function(){return function(a){a&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){e.notify(a)},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&e.notify(a)},!1))}}),a(d).then(function(a){e.resolve(a)},function(a){e.reject(a)},function(a){e.notify(a)});var f=e.promise;return f.success=function(a){return f.then(function(b){a(b.data,b.status,b.headers,d)}),f},f.error=function(a){return f.then(null,function(b){a(b.data,b.status,b.headers,d)}),f},f.progress=function(a){return f.then(null,null,function(b){a(b)}),f},f.abort=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),f},f.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(f,arguments),a.apply(f,arguments)}}(d.xhrFn),f},f}this.upload=function(b){b.headers=b.headers||{},b.headers["Content-Type"]=void 0,b.transformRequest=b.transformRequest||a.defaults.transformRequest;var c=new FormData,e=b.transformRequest,f=b.data;return b.transformRequest=function(a,c){if(f)if(b.formDataAppender)for(var d in f){var g=f[d];b.formDataAppender(a,d,g)}else for(var d in f){var g=f[d];if("function"==typeof e)g=e(g,c);else for(var h=0;h<e.length;h++){var i=e[h];"function"==typeof i&&(g=i(g,c))}a.append(d,g)}if(null!=b.file){var j=b.fileFormDataName||"file";if("[object Array]"===Object.prototype.toString.call(b.file))for(var k="[object String]"===Object.prototype.toString.call(j),h=0;h<b.file.length;h++)a.append(k?j:j[h],b.file[h],b.fileName&&b.fileName[h]||b.file[h].name);else a.append(j,b.file,b.fileName||b.file.name)}return a},b.data=c,d(b)},this.http=function(a){return d(a)}}]),a.directive("ngFileSelect",["$parse","$timeout",function(a,b){return function(c,d,e){var f=a(e.ngFileSelect);if("input"!==d[0].tagName.toLowerCase()||"file"!==(d.attr("type")&&d.attr("type").toLowerCase())){for(var g=angular.element('<input type="file">'),h=d[0].attributes,i=0;i<h.length;i++)"type"!==h[i].name.toLowerCase()&&g.attr(h[i].name,h[i].value);e.multiple&&g.attr("multiple","true"),g.css("width","1px").css("height","1px").css("opacity",0).css("position","absolute").css("filter","alpha(opacity=0)").css("padding",0).css("margin",0).css("overflow","hidden"),g.attr("__wrapper_for_parent_",!0),d.append(g),d[0].__file_click_fn_delegate_=function(){g[0].click()},d.bind("click",d[0].__file_click_fn_delegate_),d.css("overflow","hidden"),d=g}d.bind("change",function(a){var d,e,g=[];if(d=a.__files_||a.target.files,null!=d)for(e=0;e<d.length;e++)g.push(d.item(e));b(function(){f(c,{$files:g,$event:a})})})}}]),a.directive("ngFileDropAvailable",["$parse","$timeout",function(a,b){return function(c,d,e){if("draggable"in document.createElement("span")){var f=a(e.ngFileDropAvailable);b(function(){f(c)})}}}]),a.directive("ngFileDrop",["$parse","$timeout","$location",function(a,b,c){return function(d,e,f){function g(a){return/^[\000-\177]*$/.test(a)}function h(a,d){var e=[],f=a.dataTransfer.items;if(f&&f.length>0&&f[0].webkitGetAsEntry&&"file"!=c.protocol()&&f[0].webkitGetAsEntry().isDirectory)for(var h=0;h<f.length;h++){var j=f[h].webkitGetAsEntry();null!=j&&(g(j.name)?i(e,j):f[h].webkitGetAsEntry().isDirectory||e.push(f[h].getAsFile()))}else{var k=a.dataTransfer.files;if(null!=k)for(var h=0;h<k.length;h++)e.push(k.item(h))}!function m(a){b(function(){l?m(10):d(e)},a||0)}()}function i(a,b,c){if(null!=b)if(b.isDirectory){var d=b.createReader();l++,d.readEntries(function(d){for(var e=0;e<d.length;e++)i(a,d[e],(c?c:"")+b.name+"/");l--})}else l++,b.file(function(b){l--,b._relativePath=(c?c:"")+b.name,a.push(b)})}if("draggable"in document.createElement("span")){var j=null;e[0].addEventListener("dragover",function(c){if(c.preventDefault(),b.cancel(j),!e[0].__drag_over_class_)if(f.ngFileDragOverClass&&f.ngFileDragOverClass.search(/\) *$/)>-1){var g=a(f.ngFileDragOverClass)(d,{$event:c});e[0].__drag_over_class_=g}else e[0].__drag_over_class_=f.ngFileDragOverClass||"dragover";e.addClass(e[0].__drag_over_class_)},!1),e[0].addEventListener("dragenter",function(a){a.preventDefault()},!1),e[0].addEventListener("dragleave",function(){j=b(function(){e.removeClass(e[0].__drag_over_class_),e[0].__drag_over_class_=null},f.ngFileDragOverDelay||1)},!1);var k=a(f.ngFileDrop);e[0].addEventListener("drop",function(a){a.preventDefault(),e.removeClass(e[0].__drag_over_class_),e[0].__drag_over_class_=null,h(a,function(b){k(d,{$files:b,$event:a})})},!1);var l=0}}}])}();;/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus","focus"==b.type)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.TRANSITION_DURATION=350,c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var d=a.Event("show.bs.collapse");if(this.$element.trigger(d),!d.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(e&&e.length){var f=e.data("bs.collapse");if(f&&f.transitioning)return;b.call(e,"hide"),f||e.data("bs.collapse",null)}var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(c.TRANSITION_DURATION)[g](this.$element[0][i])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var d=this.dimension();this.$element[d](this.$element[d]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[d](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(c.TRANSITION_DURATION):e.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);if(!h||!h.transitioning){k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed").attr("aria-expanded",!1);var l=g.hasClass("in");e.toggleClass("collapsed",l).attr("aria-expanded",!l)}b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.checkScrollbar=function(){this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return 0;var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.top+k.height+m-p.scroll>p.height?"top":"top"==h&&k.top-p.scroll-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){e.$element.trigger("shown.bs."+e.type),e.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&d.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();
"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;/*!
 * Jasny Bootstrap v3.1.3 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Jasny Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.1.3
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  if ($.support.transition !== undefined) return  // Prevent conflict with Twitter Bootstrap

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: offcanvas.js v3.1.3
 * http://jasny.github.io/bootstrap/javascript/#offcanvas
 * ========================================================================
 * Copyright 2013-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */

+function ($) { "use strict";

  // OFFCANVAS PUBLIC CLASS DEFINITION
  // =================================

  var OffCanvas = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, OffCanvas.DEFAULTS, options)
    this.state    = null
    this.placement = null
    
    if (this.options.recalc) {
      this.calcClone()
      $(window).on('resize', $.proxy(this.recalc, this))
    }
    
    if (this.options.autohide)
      $(document).on('click', $.proxy(this.autohide, this))

    if (this.options.toggle) this.toggle()
    
    if (this.options.disablescrolling) {
        this.options.disableScrolling = this.options.disablescrolling
        delete this.options.disablescrolling
    }
  }

  OffCanvas.DEFAULTS = {
    toggle: true,
    placement: 'auto',
    autohide: true,
    recalc: true,
    disableScrolling: true
  }

  OffCanvas.prototype.offset = function () {
    switch (this.placement) {
      case 'left':
      case 'right':  return this.$element.outerWidth()
      case 'top':
      case 'bottom': return this.$element.outerHeight()
    }
  }
  
  OffCanvas.prototype.calcPlacement = function () {
    if (this.options.placement !== 'auto') {
        this.placement = this.options.placement
        return
    }
    
    if (!this.$element.hasClass('in')) {
      this.$element.css('visiblity', 'hidden !important').addClass('in')
    } 
    
    var horizontal = $(window).width() / this.$element.width()
    var vertical = $(window).height() / this.$element.height()
        
    var element = this.$element
    function ab(a, b) {
      if (element.css(b) === 'auto') return a
      if (element.css(a) === 'auto') return b
      
      var size_a = parseInt(element.css(a), 10)
      var size_b = parseInt(element.css(b), 10)
  
      return size_a > size_b ? b : a
    }
    
    this.placement = horizontal >= vertical ? ab('left', 'right') : ab('top', 'bottom')
      
    if (this.$element.css('visibility') === 'hidden !important') {
      this.$element.removeClass('in').css('visiblity', '')
    }
  }
  
  OffCanvas.prototype.opposite = function (placement) {
    switch (placement) {
      case 'top':    return 'bottom'
      case 'left':   return 'right'
      case 'bottom': return 'top'
      case 'right':  return 'left'
    }
  }
  
  OffCanvas.prototype.getCanvasElements = function() {
    // Return a set containing the canvas plus all fixed elements
    var canvas = this.options.canvas ? $(this.options.canvas) : this.$element
    
    var fixed_elements = canvas.find('*').filter(function() {
      return $(this).css('position') === 'fixed'
    }).not(this.options.exclude)
    
    return canvas.add(fixed_elements)
  }
  
  OffCanvas.prototype.slide = function (elements, offset, callback) {
    // Use jQuery animation if CSS transitions aren't supported
    if (!$.support.transition) {
      var anim = {}
      anim[this.placement] = "+=" + offset
      return elements.animate(anim, 350, callback)
    }

    var placement = this.placement
    var opposite = this.opposite(placement)
    
    elements.each(function() {
      if ($(this).css(placement) !== 'auto')
        $(this).css(placement, (parseInt($(this).css(placement), 10) || 0) + offset)
      
      if ($(this).css(opposite) !== 'auto')
        $(this).css(opposite, (parseInt($(this).css(opposite), 10) || 0) - offset)
    })
    
    this.$element
      .one($.support.transition.end, callback)
      .emulateTransitionEnd(350)
  }

  OffCanvas.prototype.disableScrolling = function() {
    var bodyWidth = $('body').width()
    var prop = 'padding-' + this.opposite(this.placement)

    if ($('body').data('offcanvas-style') === undefined) {
      $('body').data('offcanvas-style', $('body').attr('style') || '')
    }
      
    $('body').css('overflow', 'hidden')

    if ($('body').width() > bodyWidth) {
      var padding = parseInt($('body').css(prop), 10) + $('body').width() - bodyWidth
      
      setTimeout(function() {
        $('body').css(prop, padding)
      }, 1)
    }
  }

  OffCanvas.prototype.show = function () {
    if (this.state) return
    
    var startEvent = $.Event('show.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-in'
    this.calcPlacement();
    
    var elements = this.getCanvasElements()
    var placement = this.placement
    var opposite = this.opposite(placement)
    var offset = this.offset()

    if (elements.index(this.$element) !== -1) {
      $(this.$element).data('offcanvas-style', $(this.$element).attr('style') || '')
      this.$element.css(placement, -1 * offset)
      this.$element.css(placement); // Workaround: Need to get the CSS property for it to be applied before the next line of code
    }

    elements.addClass('canvas-sliding').each(function() {
      if ($(this).data('offcanvas-style') === undefined) $(this).data('offcanvas-style', $(this).attr('style') || '')
      if ($(this).css('position') === 'static') $(this).css('position', 'relative')
      if (($(this).css(placement) === 'auto' || $(this).css(placement) === '0px') &&
          ($(this).css(opposite) === 'auto' || $(this).css(opposite) === '0px')) {
        $(this).css(placement, 0)
      }
    })
    
    if (this.options.disableScrolling) this.disableScrolling()
    
    var complete = function () {
      if (this.state != 'slide-in') return
      
      this.state = 'slid'

      elements.removeClass('canvas-sliding').addClass('canvas-slid')
      this.$element.trigger('shown.bs.offcanvas')
    }

    setTimeout($.proxy(function() {
      this.$element.addClass('in')
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.hide = function (fast) {
    if (this.state !== 'slid') return

    var startEvent = $.Event('hide.bs.offcanvas')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    this.state = 'slide-out'

    var elements = $('.canvas-slid')
    var placement = this.placement
    var offset = -1 * this.offset()

    var complete = function () {
      if (this.state != 'slide-out') return
      
      this.state = null
      this.placement = null
      
      this.$element.removeClass('in')
      
      elements.removeClass('canvas-sliding')
      elements.add(this.$element).add('body').each(function() {
        $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
      })

      this.$element.trigger('hidden.bs.offcanvas')
    }

    elements.removeClass('canvas-slid').addClass('canvas-sliding')
    
    setTimeout($.proxy(function() {
      this.slide(elements, offset, $.proxy(complete, this))
    }, this), 1)
  }

  OffCanvas.prototype.toggle = function () {
    if (this.state === 'slide-in' || this.state === 'slide-out') return
    this[this.state === 'slid' ? 'hide' : 'show']()
  }

  OffCanvas.prototype.calcClone = function() {
    this.$calcClone = this.$element.clone()
      .html('')
      .addClass('offcanvas-clone').removeClass('in')
      .appendTo($('body'))
  }

  OffCanvas.prototype.recalc = function () {
    if (this.$calcClone.css('display') === 'none' || (this.state !== 'slid' && this.state !== 'slide-in')) return
    
    this.state = null
    this.placement = null
    var elements = this.getCanvasElements()
    
    this.$element.removeClass('in')
    
    elements.removeClass('canvas-slid')
    elements.add(this.$element).add('body').each(function() {
      $(this).attr('style', $(this).data('offcanvas-style')).removeData('offcanvas-style')
    })
  }
  
  OffCanvas.prototype.autohide = function (e) {
    if ($(e.target).closest(this.$element).length === 0) this.hide()
  }

  // OFFCANVAS PLUGIN DEFINITION
  // ==========================

  var old = $.fn.offcanvas

  $.fn.offcanvas = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.offcanvas')
      var options = $.extend({}, OffCanvas.DEFAULTS, $this.data(), typeof option === 'object' && option)

      if (!data) $this.data('bs.offcanvas', (data = new OffCanvas(this, options)))
      if (typeof option === 'string') data[option]()
    })
  }

  $.fn.offcanvas.Constructor = OffCanvas


  // OFFCANVAS NO CONFLICT
  // ====================

  $.fn.offcanvas.noConflict = function () {
    $.fn.offcanvas = old
    return this
  }


  // OFFCANVAS DATA-API
  // =================

  $(document).on('click.bs.offcanvas.data-api', '[data-toggle=offcanvas]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $canvas = $(target)
    var data    = $canvas.data('bs.offcanvas')
    var option  = data ? 'toggle' : $this.data()

    e.stopPropagation()

    if (data) data.toggle()
      else $canvas.offcanvas(option)
  })

}(window.jQuery);

/* ============================================================
 * Bootstrap: rowlink.js v3.1.3
 * http://jasny.github.io/bootstrap/javascript/#rowlink
 * ============================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

+function ($) { "use strict";

  var Rowlink = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, Rowlink.DEFAULTS, options)
    
    this.$element.on('click.bs.rowlink', 'td:not(.rowlink-skip)', $.proxy(this.click, this))
  }

  Rowlink.DEFAULTS = {
    target: "a"
  }

  Rowlink.prototype.click = function(e) {
    var target = $(e.currentTarget).closest('tr').find(this.options.target)[0]
    if ($(e.target)[0] === target) return
    
    e.preventDefault();
    
    if (target.click) {
      target.click()
    } else if (document.createEvent) {
      var evt = document.createEvent("MouseEvents"); 
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null); 
      target.dispatchEvent(evt);
    }
  }

  
  // ROWLINK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.rowlink

  $.fn.rowlink = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.rowlink')
      if (!data) $this.data('bs.rowlink', (data = new Rowlink(this, options)))
    })
  }

  $.fn.rowlink.Constructor = Rowlink


  // ROWLINK NO CONFLICT
  // ====================

  $.fn.rowlink.noConflict = function () {
    $.fn.rowlink = old
    return this
  }


  // ROWLINK DATA-API
  // ==================

  $(document).on('click.bs.rowlink.data-api', '[data-link="row"]', function (e) {
    if ($(e.target).closest('.rowlink-skip').length !== 0) return
    
    var $this = $(this)
    if ($this.data('bs.rowlink')) return
    $this.rowlink($this.data())
    $(e.target).trigger('click.bs.rowlink')
  })
  
}(window.jQuery);

/* ===========================================================
 * Bootstrap: inputmask.js v3.1.0
 * http://jasny.github.io/bootstrap/javascript/#inputmask
 * 
 * Based on Masked Input plugin by Josh Bush (digitalbush.com)
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIphone = (window.orientation !== undefined)
  var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1
  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // INPUTMASK PUBLIC CLASS DEFINITION
  // =================================

  var Inputmask = function (element, options) {
    if (isAndroid) return // No support because caret positioning doesn't work on Android
    
    this.$element = $(element)
    this.options = $.extend({}, Inputmask.DEFAULTS, options)
    this.mask = String(this.options.mask)
    
    this.init()
    this.listen()
        
    this.checkVal() //Perform initial check for existing values
  }

  Inputmask.DEFAULTS = {
    mask: "",
    placeholder: "_",
    definitions: {
      '9': "[0-9]",
      'a': "[A-Za-z]",
      'w': "[A-Za-z0-9]",
      '*': "."
    }
  }

  Inputmask.prototype.init = function() {
    var defs = this.options.definitions
    var len = this.mask.length

    this.tests = [] 
    this.partialPosition = this.mask.length
    this.firstNonMaskPos = null

    $.each(this.mask.split(""), $.proxy(function(i, c) {
      if (c == '?') {
        len--
        this.partialPosition = i
      } else if (defs[c]) {
        this.tests.push(new RegExp(defs[c]))
        if (this.firstNonMaskPos === null)
          this.firstNonMaskPos =  this.tests.length - 1
      } else {
        this.tests.push(null)
      }
    }, this))

    this.buffer = $.map(this.mask.split(""), $.proxy(function(c, i) {
      if (c != '?') return defs[c] ? this.options.placeholder : c
    }, this))

    this.focusText = this.$element.val()

    this.$element.data("rawMaskFn", $.proxy(function() {
      return $.map(this.buffer, function(c, i) {
        return this.tests[i] && c != this.options.placeholder ? c : null
      }).join('')
    }, this))
  }
    
  Inputmask.prototype.listen = function() {
    if (this.$element.attr("readonly")) return

    var pasteEventName = (isIE ? 'paste' : 'input') + ".mask"

    this.$element
      .on("unmask.bs.inputmask", $.proxy(this.unmask, this))

      .on("focus.bs.inputmask", $.proxy(this.focusEvent, this))
      .on("blur.bs.inputmask", $.proxy(this.blurEvent, this))

      .on("keydown.bs.inputmask", $.proxy(this.keydownEvent, this))
      .on("keypress.bs.inputmask", $.proxy(this.keypressEvent, this))

      .on(pasteEventName, $.proxy(this.pasteEvent, this))
  }

  //Helper Function for Caret positioning
  Inputmask.prototype.caret = function(begin, end) {
    if (this.$element.length === 0) return
    if (typeof begin == 'number') {
      end = (typeof end == 'number') ? end : begin
      return this.$element.each(function() {
        if (this.setSelectionRange) {
          this.setSelectionRange(begin, end)
        } else if (this.createTextRange) {
          var range = this.createTextRange()
          range.collapse(true)
          range.moveEnd('character', end)
          range.moveStart('character', begin)
          range.select()
        }
      })
    } else {
      if (this.$element[0].setSelectionRange) {
        begin = this.$element[0].selectionStart
        end = this.$element[0].selectionEnd
      } else if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange()
        begin = 0 - range.duplicate().moveStart('character', -100000)
        end = begin + range.text.length
      }
      return {
        begin: begin, 
        end: end
      }
    }
  }
  
  Inputmask.prototype.seekNext = function(pos) {
    var len = this.mask.length
    while (++pos <= len && !this.tests[pos]);

    return pos
  }
  
  Inputmask.prototype.seekPrev = function(pos) {
    while (--pos >= 0 && !this.tests[pos]);

    return pos
  }

  Inputmask.prototype.shiftL = function(begin,end) {
    var len = this.mask.length

    if (begin < 0) return

    for (var i = begin, j = this.seekNext(end); i < len; i++) {
      if (this.tests[i]) {
        if (j < len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j]
          this.buffer[j] = this.options.placeholder
        } else
          break
        j = this.seekNext(j)
      }
    }
    this.writeBuffer()
    this.caret(Math.max(this.firstNonMaskPos, begin))
  }

  Inputmask.prototype.shiftR = function(pos) {
    var len = this.mask.length

    for (var i = pos, c = this.options.placeholder; i < len; i++) {
      if (this.tests[i]) {
        var j = this.seekNext(i)
        var t = this.buffer[i]
        this.buffer[i] = c
        if (j < len && this.tests[j].test(t))
          c = t
        else
          break
      }
    }
  },

  Inputmask.prototype.unmask = function() {
    this.$element
      .unbind(".mask")
      .removeData("inputmask")
  }

  Inputmask.prototype.focusEvent = function() {
    this.focusText = this.$element.val()
    var len = this.mask.length 
    var pos = this.checkVal()
    this.writeBuffer()

    var that = this
    var moveCaret = function() {
      if (pos == len)
        that.caret(0, pos)
      else
        that.caret(pos)
    }

    moveCaret()
    setTimeout(moveCaret, 50)
  }

  Inputmask.prototype.blurEvent = function() {
    this.checkVal()
    if (this.$element.val() !== this.focusText)
      this.$element.trigger('change')
  }

  Inputmask.prototype.keydownEvent = function(e) {
    var k = e.which

    //backspace, delete, and escape get special treatment
    if (k == 8 || k == 46 || (isIphone && k == 127)) {
      var pos = this.caret(),
      begin = pos.begin,
      end = pos.end

      if (end - begin === 0) {
        begin = k != 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1))
        end = k == 46 ? this.seekNext(end) : end
      }
      this.clearBuffer(begin, end)
      this.shiftL(begin, end - 1)

      return false
    } else if (k == 27) {//escape
      this.$element.val(this.focusText)
      this.caret(0, this.checkVal())
      return false
    }
  }

  Inputmask.prototype.keypressEvent = function(e) {
    var len = this.mask.length

    var k = e.which,
    pos = this.caret()

    if (e.ctrlKey || e.altKey || e.metaKey || k < 32)  {//Ignore
      return true
    } else if (k) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end)
        this.shiftL(pos.begin, pos.end - 1)
      }

      var p = this.seekNext(pos.begin - 1)
      if (p < len) {
        var c = String.fromCharCode(k)
        if (this.tests[p].test(c)) {
          this.shiftR(p)
          this.buffer[p] = c
          this.writeBuffer()
          var next = this.seekNext(p)
          this.caret(next)
        }
      }
      return false
    }
  }

  Inputmask.prototype.pasteEvent = function() {
    var that = this

    setTimeout(function() {
      that.caret(that.checkVal(true))
    }, 0)
  }

  Inputmask.prototype.clearBuffer = function(start, end) {
    var len = this.mask.length

    for (var i = start; i < end && i < len; i++) {
      if (this.tests[i])
        this.buffer[i] = this.options.placeholder
    }
  }

  Inputmask.prototype.writeBuffer = function() {
    return this.$element.val(this.buffer.join('')).val()
  }

  Inputmask.prototype.checkVal = function(allow) {
    var len = this.mask.length
    //try to place characters where they belong
    var test = this.$element.val()
    var lastMatch = -1

    for (var i = 0, pos = 0; i < len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.options.placeholder
        while (pos++ < test.length) {
          var c = test.charAt(pos - 1)
          if (this.tests[i].test(c)) {
            this.buffer[i] = c
            lastMatch = i
            break
          }
        }
        if (pos > test.length)
          break
      } else if (this.buffer[i] == test.charAt(pos) && i != this.partialPosition) {
        pos++
        lastMatch = i
      }
    }
    if (!allow && lastMatch + 1 < this.partialPosition) {
      this.$element.val("")
      this.clearBuffer(0, len)
    } else if (allow || lastMatch + 1 >= this.partialPosition) {
      this.writeBuffer()
      if (!allow) this.$element.val(this.$element.val().substring(0, lastMatch + 1))
    }
    return (this.partialPosition ? i : this.firstNonMaskPos)
  }

  
  // INPUTMASK PLUGIN DEFINITION
  // ===========================

  var old = $.fn.inputmask
  
  $.fn.inputmask = function (options) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.inputmask')
      
      if (!data) $this.data('bs.inputmask', (data = new Inputmask(this, options)))
    })
  }

  $.fn.inputmask.Constructor = Inputmask


  // INPUTMASK NO CONFLICT
  // ====================

  $.fn.inputmask.noConflict = function () {
    $.fn.inputmask = old
    return this
  }


  // INPUTMASK DATA-API
  // ==================

  $(document).on('focus.bs.inputmask.data-api', '[data-mask]', function (e) {
    var $this = $(this)
    if ($this.data('bs.inputmask')) return
    $this.inputmask($this.data())
  })

}(window.jQuery);

/* ===========================================================
 * Bootstrap: fileinput.js v3.1.3
 * http://jasny.github.com/bootstrap/javascript/#fileinput
 * ===========================================================
 * Copyright 2012-2014 Arnold Daniels
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileinput = function (element, options) {
    this.$element = $(element)
    
    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.name = this.$input.attr('name') || options.name

    this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]')
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden">').insertBefore(this.$input)
    }

    this.$preview = this.$element.find('.fileinput-preview')
    var height = this.$preview.css('height')
    if (this.$preview.css('display') !== 'inline' && height !== '0px' && height !== 'none') {
      this.$preview.css('line-height', height)
    }
        
    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }
    
    this.listen()
  }
  
  Fileinput.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))
    
    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
  },

  Fileinput.prototype.change = function(e) {
    var files = e.target.files === undefined ? (e.target && e.target.value ? [{ name: e.target.value.replace(/^.+\\/, '')}] : []) : e.target.files
    
    e.stopPropagation()

    if (files.length === 0) {
      this.clear()
      return
    }

    this.$hidden.val('')
    this.$hidden.attr('name', '')
    this.$input.attr('name', this.name)

    var file = files[0]

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match(/^image\/(gif|png|jpeg)$/) : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader()
      var preview = this.$preview
      var element = this.$element

      reader.onload = function(re) {
        var $img = $('<img>')
        $img[0].src = re.target.result
        files[0].result = re.target.result
        
        element.find('.fileinput-filename').text(file.name)
        
        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))
        
        preview.html($img)
        element.addClass('fileinput-exists').removeClass('fileinput-new')

        element.trigger('change.bs.fileinput', files)
      }

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name)
      this.$preview.text(file.name)
      
      this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
      
      this.$element.trigger('change.bs.fileinput')
    }
  },

  Fileinput.prototype.clear = function(e) {
    if (e) e.preventDefault()
    
    this.$hidden.val('')
    this.$hidden.attr('name', this.name)
    this.$input.attr('name', '')

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) { 
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('')
    this.$element.find('.fileinput-filename').text('')
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    if (e !== undefined) {
      this.$input.trigger('change')
      this.$element.trigger('clear.bs.fileinput')
    }
  },

  Fileinput.prototype.reset = function() {
    this.clear()

    this.$hidden.val(this.original.hiddenVal)
    this.$preview.html(this.original.preview)
    this.$element.find('.fileinput-filename').text('')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    this.$element.trigger('reset.bs.fileinput')
  },

  Fileinput.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }

  
  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  var old = $.fn.fileinput
  
  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this),
          data = $this.data('bs.fileinput')
      if (!data) $this.data('bs.fileinput', (data = new Fileinput(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileinput


  // FILEINPUT NO CONFLICT
  // ====================

  $.fn.fileinput.noConflict = function () {
    $.fn.fileinput = old
    return this
  }


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this)
    if ($this.data('bs.fileinput')) return
    $this.fileinput($this.data())
      
    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      $target.trigger('click.bs.fileinput')
    }
  })

}(window.jQuery);

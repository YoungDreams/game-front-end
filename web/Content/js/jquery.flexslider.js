(function(a){var b=true;a.flexslider=function(g,q){var d=a(g);d.vars=a.extend({},a.flexslider.defaults,q);var k=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=(("ontouchstart" in window)||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,e="click touchend MSPointerUp keyup",c="",p,j=d.vars.direction==="vertical",m=d.vars.reverse,o=(d.vars.itemWidth>0),i=d.vars.animation==="fade",n=d.vars.asNavFor!=="",h={};a.data(g,"flexslider",d);h={init:function(){d.animating=false;d.currentSlide=parseInt((d.vars.startAt?d.vars.startAt:0),10);if(isNaN(d.currentSlide)){d.currentSlide=0}d.animatingTo=d.currentSlide;d.atEnd=(d.currentSlide===0||d.currentSlide===d.last);d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" "));d.slides=a(d.vars.selector,d);d.container=a(d.containerSelector,d);d.count=d.slides.length;d.syncExists=a(d.vars.sync).length>0;if(d.vars.animation==="slide"){d.vars.animation="swing"}d.prop=(j)?"top":"marginLeft";d.args={};d.manualPause=false;d.stopped=false;d.started=false;d.startTimeout=null;d.transitions=!d.vars.video&&!i&&d.vars.useCSS&&(function(){var t=document.createElement("div"),s=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var r in s){if(t.style[s[r]]!==undefined){d.pfx=s[r].replace("Perspective","").toLowerCase();d.prop="-"+d.pfx+"-transform";return true}}return false}());d.ensureAnimationEnd="";if(d.vars.controlsContainer!==""){d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)}if(d.vars.manualControls!==""){d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)}if(d.vars.customDirectionNav!==""){d.customDirectionNav=a(d.vars.customDirectionNav).length===2&&a(d.vars.customDirectionNav)}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}d.doMath();d.setup("init");if(d.vars.controlNav){h.controlNav.setup()}if(d.vars.directionNav){h.directionNav.setup()}if(d.vars.keyboard&&(a(d.containerSelector).length===1||d.vars.multipleKeyboard)){a(document).bind("keyup",function(s){var r=s.keyCode;if(!d.animating&&(r===39||r===37)){var t=(r===39)?d.getTarget("next"):(r===37)?d.getTarget("prev"):false;d.flexAnimate(t,d.vars.pauseOnAction)}})}if(d.vars.mousewheel){d.bind("mousewheel",function(t,v,s,r){t.preventDefault();var u=(v<0)?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(u,d.vars.pauseOnAction)})}if(d.vars.pausePlay){h.pausePlay.setup()}if(d.vars.slideshow&&d.vars.pauseInvisible){h.pauseInvisible.init()}if(d.vars.slideshow){if(d.vars.pauseOnHover){d.hover(function(){if(!d.manualPlay&&!d.manualPause){d.pause()}},function(){if(!d.manualPause&&!d.manualPlay&&!d.stopped){d.play()}})}if(!d.vars.pauseInvisible||!h.pauseInvisible.isHidden()){(d.vars.initDelay>0)?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play()}}if(n){h.asNav.setup()}if(l&&d.vars.touch){h.touch()}if(!i||(i&&d.vars.smoothHeight)){a(window).bind("resize orientationchange focus",h.resize)}d.find("img").attr("draggable","false");setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=true;d.animatingTo=Math.floor(d.currentSlide/d.move);d.currentItem=d.currentSlide;d.slides.removeClass(k+"active-slide").eq(d.currentItem).addClass(k+"active-slide");if(!f){d.slides.on(e,function(t){t.preventDefault();var s=a(this),r=s.index();var u=s.offset().left-a(d).scrollLeft();if(u<=0&&s.hasClass(k+"active-slide")){d.flexAnimate(d.getTarget("prev"),true)}else{if(!a(d.vars.asNavFor).data("flexslider").animating&&!s.hasClass(k+"active-slide")){d.direction=(d.currentItem<r)?"next":"prev";d.flexAnimate(r,d.vars.pauseOnAction,false,true,true)}}})}else{g._slider=d;d.slides.each(function(){var r=this;r._gesture=new MSGesture();r._gesture.target=r;r.addEventListener("MSPointerDown",function(s){s.preventDefault();if(s.currentTarget._gesture){s.currentTarget._gesture.addPointer(s.pointerId)}},false);r.addEventListener("MSGestureTap",function(u){u.preventDefault();var t=a(this),s=t.index();if(!a(d.vars.asNavFor).data("flexslider").animating&&!t.hasClass("active")){d.direction=(d.currentItem<s)?"next":"prev";d.flexAnimate(s,d.vars.pauseOnAction,false,true,true)}})})}}},controlNav:{setup:function(){if(!d.manualControls){h.controlNav.setupPaging()}else{h.controlNav.setupManual()}},setupPaging:function(){var v=(d.vars.controlNav==="thumbnails")?"control-thumbs":"control-paging",t=1,w,r;d.controlNavScaffold=a('<ol class="'+k+"control-nav "+k+v+'"></ol>');if(d.pagingCount>1){for(var u=0;u<d.pagingCount;u++){r=d.slides.eq(u);if(undefined===r.attr("data-thumb-alt")){r.attr("data-thumb-alt","")}var s=(""!==r.attr("data-thumb-alt"))?s=' alt="'+r.attr("data-thumb-alt")+'"':"";w=(d.vars.controlNav==="thumbnails")?'<img src="'+r.attr("data-thumb")+'"'+s+"/>":'<a href="#">'+t+"</a>";if("thumbnails"===d.vars.controlNav&&true===d.vars.thumbCaptions){var x=r.attr("data-thumbcaption");if(""!==x&&undefined!==x){w+='<span class="'+k+'caption">'+x+"</span>"}}d.controlNavScaffold.append("<li>"+w+"</li>");t++}}(d.controlsContainer)?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold);h.controlNav.set();h.controlNav.active();d.controlNavScaffold.delegate("a, img",e,function(y){y.preventDefault();if(c===""||c===y.type){var A=a(this),z=d.controlNav.index(A);if(!A.hasClass(k+"active")){d.direction=(z>d.currentSlide)?"next":"prev";d.flexAnimate(z,d.vars.pauseOnAction)}}if(c===""){c=y.type}h.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls;h.controlNav.active();d.controlNav.bind(e,function(r){r.preventDefault();if(c===""||c===r.type){var t=a(this),s=d.controlNav.index(t);if(!t.hasClass(k+"active")){(s>d.currentSlide)?d.direction="next":d.direction="prev";d.flexAnimate(s,d.vars.pauseOnAction)}}if(c===""){c=r.type}h.setToClearWatchedEvent()})},set:function(){var r=(d.vars.controlNav==="thumbnails")?"img":"a";d.controlNav=a("."+k+"control-nav li "+r,(d.controlsContainer)?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(k+"active").eq(d.animatingTo).addClass(k+"active")},update:function(r,s){if(d.pagingCount>1&&r==="add"){d.controlNavScaffold.append(a('<li><a href="#">'+d.count+"</a></li>"))}else{if(d.pagingCount===1){d.controlNavScaffold.find("li").remove()}else{d.controlNav.eq(s).closest("li").remove()}}h.controlNav.set();(d.pagingCount>1&&d.pagingCount!==d.controlNav.length)?d.update(s,r):h.controlNav.active()}},directionNav:{setup:function(){var r=a('<ul class="'+k+'direction-nav"><li class="'+k+'nav-prev"><a class="'+k+'prev" href="#">'+d.vars.prevText+'</a></li><li class="'+k+'nav-next"><a class="'+k+'next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.customDirectionNav){d.directionNav=d.customDirectionNav}else{if(d.controlsContainer){a(d.controlsContainer).append(r);d.directionNav=a("."+k+"direction-nav li a",d.controlsContainer)}else{d.append(r);d.directionNav=a("."+k+"direction-nav li a",d)}}h.directionNav.update();d.directionNav.bind(e,function(s){s.preventDefault();var t;if(c===""||c===s.type){t=(a(this).hasClass(k+"next"))?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(t,d.vars.pauseOnAction)}if(c===""){c=s.type}h.setToClearWatchedEvent()})},update:function(){var r=k+"disabled";if(d.pagingCount===1){d.directionNav.addClass(r).attr("tabindex","-1")}else{if(!d.vars.animationLoop){if(d.animatingTo===0){d.directionNav.removeClass(r).filter("."+k+"prev").addClass(r).attr("tabindex","-1")}else{if(d.animatingTo===d.last){d.directionNav.removeClass(r).filter("."+k+"next").addClass(r).attr("tabindex","-1")}else{d.directionNav.removeClass(r).removeAttr("tabindex")}}}else{d.directionNav.removeClass(r).removeAttr("tabindex")}}}},pausePlay:{setup:function(){var r=a('<div class="'+k+'pauseplay"><a href="#"></a></div>');if(d.controlsContainer){d.controlsContainer.append(r);d.pausePlay=a("."+k+"pauseplay a",d.controlsContainer)}else{d.append(r);d.pausePlay=a("."+k+"pauseplay a",d)}h.pausePlay.update((d.vars.slideshow)?k+"pause":k+"play");d.pausePlay.bind(e,function(s){s.preventDefault();if(c===""||c===s.type){if(a(this).hasClass(k+"pause")){d.manualPause=true;d.manualPlay=false;d.pause()}else{d.manualPause=false;d.manualPlay=true;d.play()}}if(c===""){c=s.type}h.setToClearWatchedEvent()})},update:function(r){(r==="play")?d.pausePlay.removeClass(k+"pause").addClass(k+"play").html(d.vars.playText):d.pausePlay.removeClass(k+"play").addClass(k+"pause").html(d.vars.pauseText)}},touch:function(){var C,z,x,D,G,E,y,s,F,B=false,u=0,t=0,w=0;if(!f){y=function(H){if(d.animating){H.preventDefault()}else{if((window.navigator.msPointerEnabled)||H.touches.length===1){d.pause();D=(j)?d.h:d.w;E=Number(new Date());u=H.touches[0].pageX;t=H.touches[0].pageY;x=(o&&m&&d.animatingTo===d.last)?0:(o&&m)?d.limit-(((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo):(o&&d.currentSlide===d.last)?d.limit:(o)?((d.itemW+d.vars.itemMargin)*d.move)*d.currentSlide:(m)?(d.last-d.currentSlide+d.cloneOffset)*D:(d.currentSlide+d.cloneOffset)*D;C=(j)?t:u;z=(j)?u:t;g.addEventListener("touchmove",s,false);g.addEventListener("touchend",F,false)}}};s=function(H){u=H.touches[0].pageX;t=H.touches[0].pageY;G=(j)?C-t:C-u;B=(j)?(Math.abs(G)<Math.abs(u-z)):(Math.abs(G)<Math.abs(t-z));var I=500;if(!B||Number(new Date())-E>I){H.preventDefault();if(!i&&d.transitions){if(!d.vars.animationLoop){G=G/((d.currentSlide===0&&G<0||d.currentSlide===d.last&&G>0)?(Math.abs(G)/D+2):1)}d.setProps(x+G,"setTouch")}}};F=function(J){g.removeEventListener("touchmove",s,false);if(d.animatingTo===d.currentSlide&&!B&&!(G===null)){var I=(m)?-G:G,H=(I>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(H)&&(Number(new Date())-E<550&&Math.abs(I)>50||Math.abs(I)>D/2)){d.flexAnimate(H,d.vars.pauseOnAction)}else{if(!i){d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,true)}}}g.removeEventListener("touchend",F,false);C=null;z=null;G=null;x=null};g.addEventListener("touchstart",y,false)}else{g.style.msTouchAction="none";g._gesture=new MSGesture();g._gesture.target=g;g.addEventListener("MSPointerDown",r,false);g._slider=d;g.addEventListener("MSGestureChange",A,false);g.addEventListener("MSGestureEnd",v,false);function r(H){H.stopPropagation();if(d.animating){H.preventDefault()}else{d.pause();g._gesture.addPointer(H.pointerId);w=0;D=(j)?d.h:d.w;E=Number(new Date());x=(o&&m&&d.animatingTo===d.last)?0:(o&&m)?d.limit-(((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo):(o&&d.currentSlide===d.last)?d.limit:(o)?((d.itemW+d.vars.itemMargin)*d.move)*d.currentSlide:(m)?(d.last-d.currentSlide+d.cloneOffset)*D:(d.currentSlide+d.cloneOffset)*D}}function A(K){K.stopPropagation();var J=K.target._slider;if(!J){return}var I=-K.translationX,H=-K.translationY;w=w+((j)?H:I);G=w;B=(j)?(Math.abs(w)<Math.abs(-I)):(Math.abs(w)<Math.abs(-H));if(K.detail===K.MSGESTURE_FLAG_INERTIA){setImmediate(function(){g._gesture.stop()});return}if(!B||Number(new Date())-E>500){K.preventDefault();if(!i&&J.transitions){if(!J.vars.animationLoop){G=w/((J.currentSlide===0&&w<0||J.currentSlide===J.last&&w>0)?(Math.abs(w)/D+2):1)}J.setProps(x+G,"setTouch")}}}function v(K){K.stopPropagation();var H=K.target._slider;if(!H){return}if(H.animatingTo===H.currentSlide&&!B&&!(G===null)){var J=(m)?-G:G,I=(J>0)?H.getTarget("next"):H.getTarget("prev");if(H.canAdvance(I)&&(Number(new Date())-E<550&&Math.abs(J)>50||Math.abs(J)>D/2)){H.flexAnimate(I,H.vars.pauseOnAction)}else{if(!i){H.flexAnimate(H.currentSlide,H.vars.pauseOnAction,true)}}}C=null;z=null;G=null;x=null;w=0}}},resize:function(){if(!d.animating&&d.is(":visible")){if(!o){d.doMath()}if(i){h.smoothHeight()}else{if(o){d.slides.width(d.computedW);d.update(d.pagingCount);d.setProps()}else{if(j){d.viewport.height(d.h);d.setProps(d.h,"setTotal")}else{if(d.vars.smoothHeight){h.smoothHeight()}d.newSlides.width(d.computedW);d.setProps(d.computedW,"setTotal")}}}}},smoothHeight:function(r){if(!j||i){var s=(i)?d:d.viewport;(r)?s.animate({"height":d.slides.eq(d.animatingTo).innerHeight()},r):s.innerHeight(d.slides.eq(d.animatingTo).innerHeight())}},sync:function(r){var t=a(d.vars.sync).data("flexslider"),s=d.animatingTo;switch(r){case"animate":t.flexAnimate(s,d.vars.pauseOnAction,false,true);break;case"play":if(!t.playing&&!t.asNav){t.play()}break;case"pause":t.pause();break}},uniqueID:function(r){r.filter("[id]").add(r.find("[id]")).each(function(){var s=a(this);s.attr("id",s.attr("id")+"_clone")});return r},pauseInvisible:{visProp:null,init:function(){var s=h.pauseInvisible.getHiddenProp();if(s){var r=s.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(r,function(){if(h.pauseInvisible.isHidden()){if(d.startTimeout){clearTimeout(d.startTimeout)}else{d.pause()}}else{if(d.started){d.play()}else{if(d.vars.initDelay>0){setTimeout(d.play,d.vars.initDelay)}else{d.play()}}}})}},isHidden:function(){var r=h.pauseInvisible.getHiddenProp();if(!r){return false}return document[r]},getHiddenProp:function(){var s=["webkit","moz","ms","o"];if("hidden" in document){return"hidden"}for(var r=0;r<s.length;r++){if((s[r]+"Hidden") in document){return s[r]+"Hidden"}}return null}},setToClearWatchedEvent:function(){clearTimeout(p);p=setTimeout(function(){c=""},3000)}};d.flexAnimate=function(z,A,t,v,w){if(!d.vars.animationLoop&&z!==d.currentSlide){d.direction=(z>d.currentSlide)?"next":"prev"}if(n&&d.pagingCount===1){d.direction=(d.currentItem<z)?"next":"prev"}if(!d.animating&&(d.canAdvance(z,w)||t)&&d.is(":visible")){if(n&&v){var s=a(d.vars.asNavFor).data("flexslider");d.atEnd=z===0||z===d.count-1;s.flexAnimate(z,true,false,true,w);d.direction=(d.currentItem<z)?"next":"prev";s.direction=d.direction;if(Math.ceil((z+1)/d.visible)-1!==d.currentSlide&&z!==0){d.currentItem=z;d.slides.removeClass(k+"active-slide").eq(z).addClass(k+"active-slide");z=Math.floor(z/d.visible)}else{d.currentItem=z;d.slides.removeClass(k+"active-slide").eq(z).addClass(k+"active-slide");return false}}d.animating=true;d.animatingTo=z;if(A){d.pause()}d.vars.before(d);if(d.syncExists&&!w){h.sync("animate")}if(d.vars.controlNav){h.controlNav.active()}if(!o){d.slides.removeClass(k+"active-slide").eq(z).addClass(k+"active-slide")}d.atEnd=z===0||z===d.last;if(d.vars.directionNav){h.directionNav.update()}if(z===d.last){d.vars.end(d);if(!d.vars.animationLoop){d.pause()}}if(!i){var y=(j)?d.slides.filter(":first").height():d.computedW,x,u,r;if(o){x=d.vars.itemMargin;r=((d.itemW+x)*d.move)*d.animatingTo;u=(r>d.limit&&d.visible!==1)?d.limit:r}else{if(d.currentSlide===0&&z===d.count-1&&d.vars.animationLoop&&d.direction!=="next"){u=(m)?(d.count+d.cloneOffset)*y:0}else{if(d.currentSlide===d.last&&z===0&&d.vars.animationLoop&&d.direction!=="prev"){u=(m)?0:(d.count+1)*y}else{u=(m)?((d.count-1)-z+d.cloneOffset)*y:(z+d.cloneOffset)*y}}}d.setProps(u,"",d.vars.animationSpeed);if(d.transitions){if(!d.vars.animationLoop||!d.atEnd){d.animating=false;d.currentSlide=d.animatingTo}d.container.unbind("webkitTransitionEnd transitionend");d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd);d.wrapup(y)});clearTimeout(d.ensureAnimationEnd);d.ensureAnimationEnd=setTimeout(function(){d.wrapup(y)},d.vars.animationSpeed+100)}else{d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(y)})}}else{if(!l){d.slides.eq(d.currentSlide).css({"zIndex":1}).animate({"opacity":0},d.vars.animationSpeed,d.vars.easing);d.slides.eq(z).css({"zIndex":2}).animate({"opacity":1},d.vars.animationSpeed,d.vars.easing,d.wrapup)}else{d.slides.eq(d.currentSlide).css({"opacity":0,"zIndex":1});d.slides.eq(z).css({"opacity":1,"zIndex":2});d.wrapup(y)}}if(d.vars.smoothHeight){h.smoothHeight(d.vars.animationSpeed)}}};d.wrapup=function(r){if(!i&&!o){if(d.currentSlide===0&&d.animatingTo===d.last&&d.vars.animationLoop){d.setProps(r,"jumpEnd")}else{if(d.currentSlide===d.last&&d.animatingTo===0&&d.vars.animationLoop){d.setProps(r,"jumpStart")}}}d.animating=false;d.currentSlide=d.animatingTo;d.vars.after(d)};d.animateSlides=function(){if(!d.animating&&b){d.flexAnimate(d.getTarget("next"))}};d.pause=function(){clearInterval(d.animatedSlides);d.animatedSlides=null;d.playing=false;if(d.vars.pausePlay){h.pausePlay.update("play")}if(d.syncExists){h.sync("pause")}};d.play=function(){if(d.playing){clearInterval(d.animatedSlides)}d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed);d.started=d.playing=true;if(d.vars.pausePlay){h.pausePlay.update("pause")}if(d.syncExists){h.sync("play")}};d.stop=function(){d.pause();d.stopped=true};d.canAdvance=function(t,r){var s=(n)?d.pagingCount-1:d.last;return(r)?true:(n&&d.currentItem===d.count-1&&t===0&&d.direction==="prev")?true:(n&&d.currentItem===0&&t===d.pagingCount-1&&d.direction!=="next")?false:(t===d.currentSlide&&!n)?false:(d.vars.animationLoop)?true:(d.atEnd&&d.currentSlide===0&&t===s&&d.direction!=="next")?false:(d.atEnd&&d.currentSlide===s&&t===0&&d.direction==="next")?false:true};d.getTarget=function(r){d.direction=r;if(r==="next"){return(d.currentSlide===d.last)?0:d.currentSlide+1}else{return(d.currentSlide===0)?d.last:d.currentSlide-1}};d.setProps=function(u,r,s){var t=(function(){var v=(u)?u:((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo,w=(function(){if(o){return(r==="setTouch")?u:(m&&d.animatingTo===d.last)?0:(m)?d.limit-(((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo):(d.animatingTo===d.last)?d.limit:v}else{switch(r){case"setTotal":return(m)?((d.count-1)-d.currentSlide+d.cloneOffset)*u:(d.currentSlide+d.cloneOffset)*u;case"setTouch":return(m)?u:u;case"jumpEnd":return(m)?u:d.count*u;case"jumpStart":return(m)?d.count*u:u;default:return u}}}());return(w*-1)+"px"}());if(d.transitions){t=(j)?"translate3d(0,"+t+",0)":"translate3d("+t+",0,0)";s=(s!==undefined)?(s/1000)+"s":"0s";d.container.css("-"+d.pfx+"-transition-duration",s);d.container.css("transition-duration",s)}d.args[d.prop]=t;if(d.transitions||s===undefined){d.container.css(d.args)}d.container.css("transform",t)};d.setup=function(s){if(!i){var t,r;if(s==="init"){d.viewport=a('<div class="'+k+'viewport"></div>').css({"overflow":"hidden","position":"relative"}).appendTo(d).append(d.container);d.cloneCount=0;d.cloneOffset=0;if(m){r=a.makeArray(d.slides).reverse();d.slides=a(r);d.container.empty().append(d.slides)}}if(d.vars.animationLoop&&!o){d.cloneCount=2;d.cloneOffset=1;if(s!=="init"){d.container.find(".clone").remove()}d.container.append(h.uniqueID(d.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(h.uniqueID(d.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))}d.newSlides=a(d.vars.selector,d);t=(m)?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset;if(j&&!o){d.container.height((d.count+d.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){d.newSlides.css({"display":"block"});d.doMath();d.viewport.height(d.h);d.setProps(t*d.h,"init")},(s==="init")?100:0)}else{d.container.width((d.count+d.cloneCount)*200+"%");d.setProps(t*d.computedW,"init");setTimeout(function(){d.doMath();d.newSlides.css({"width":d.computedW,"marginRight":d.computedM,"float":"left","display":"block"});if(d.vars.smoothHeight){h.smoothHeight()}},(s==="init")?100:0)}}else{d.slides.css({"width":"100%","float":"left","marginRight":"-100%","position":"relative"});if(s==="init"){if(!l){if(d.vars.fadeFirstSlide==false){d.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(d.currentSlide).css({"zIndex":2}).css({"opacity":1})}else{d.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(d.currentSlide).css({"zIndex":2}).animate({"opacity":1},d.vars.animationSpeed,d.vars.easing)}}else{d.slides.css({"opacity":0,"display":"block","webkitTransition":"opacity "+d.vars.animationSpeed/1000+"s ease","zIndex":1}).eq(d.currentSlide).css({"opacity":1,"zIndex":2})}}if(d.vars.smoothHeight){h.smoothHeight()}}if(!o){d.slides.removeClass(k+"active-slide").eq(d.currentSlide).addClass(k+"active-slide")}d.vars.init(d)};d.doMath=function(){var r=d.slides.first(),u=d.vars.itemMargin,s=d.vars.minItems,t=d.vars.maxItems;d.w=(d.viewport===undefined)?d.width():d.viewport.width();d.h=r.height();d.boxPadding=r.outerWidth()-r.width();if(o){d.itemT=d.vars.itemWidth+u;d.itemM=u;d.minW=(s)?s*d.itemT:d.w;d.maxW=(t)?(t*d.itemT)-u:d.w;d.itemW=(d.minW>d.w)?(d.w-(u*(s-1)))/s:(d.maxW<d.w)?(d.w-(u*(t-1)))/t:(d.vars.itemWidth>d.w)?d.w:d.vars.itemWidth;d.visible=Math.floor(d.w/(d.itemW));d.move=(d.vars.move>0&&d.vars.move<d.visible)?d.vars.move:d.visible;d.pagingCount=Math.ceil(((d.count-d.visible)/d.move)+1);d.last=d.pagingCount-1;d.limit=(d.pagingCount===1)?0:(d.vars.itemWidth>d.w)?(d.itemW*(d.count-1))+(u*(d.count-1)):((d.itemW+u)*d.count)-d.w-u}else{d.itemW=d.w;d.itemM=u;d.pagingCount=d.count;d.last=d.count-1}d.computedW=d.itemW-d.boxPadding;d.computedM=d.itemM};d.update=function(s,r){d.doMath();if(!o){if(s<d.currentSlide){d.currentSlide+=1}else{if(s<=d.currentSlide&&s!==0){d.currentSlide-=1}}d.animatingTo=d.currentSlide}if(d.vars.controlNav&&!d.manualControls){if((r==="add"&&!o)||d.pagingCount>d.controlNav.length){h.controlNav.update("add")}else{if((r==="remove"&&!o)||d.pagingCount<d.controlNav.length){if(o&&d.currentSlide>d.last){d.currentSlide-=1;d.animatingTo-=1}h.controlNav.update("remove",d.last)}}}if(d.vars.directionNav){h.directionNav.update()}};d.addSlide=function(r,t){var s=a(r);d.count+=1;d.last=d.count-1;if(j&&m){(t!==undefined)?d.slides.eq(d.count-t).after(s):d.container.prepend(s)}else{(t!==undefined)?d.slides.eq(t).before(s):d.container.append(s)}d.update(t,"add");d.slides=a(d.vars.selector+":not(.clone)",d);d.setup();d.vars.added(d)};d.removeSlide=function(r){var s=(isNaN(r))?d.slides.index(a(r)):r;d.count-=1;d.last=d.count-1;if(isNaN(r)){a(r,d.slides).remove()}else{(j&&m)?d.slides.eq(d.last).remove():d.slides.eq(r).remove()}d.doMath();d.update(s,"remove");d.slides=a(d.vars.selector+":not(.clone)",d);d.setup();d.vars.removed(d)};h.init()};a(window).blur(function(c){b=false}).focus(function(c){b=true});a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,fadeFirstSlide:true,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};a.fn.flexslider=function(c){if(c===undefined){c={}}if(typeof c==="object"){return this.each(function(){var g=a(this),e=(c.selector)?c.selector:".slides > li",f=g.find(e);if((f.length===1&&c.allowOneSlide===false)||f.length===0){f.fadeIn(400);if(c.start){c.start(g)}}else{if(g.data("flexslider")===undefined){new a.flexslider(this,c)}}})}else{var d=a(this).data("flexslider");switch(c){case"play":d.play();break;case"pause":d.pause();break;case"stop":d.stop();break;case"next":d.flexAnimate(d.getTarget("next"),true);break;case"prev":case"previous":d.flexAnimate(d.getTarget("prev"),true);break;default:if(typeof c==="number"){d.flexAnimate(c,true)}}}}})(jQuery);
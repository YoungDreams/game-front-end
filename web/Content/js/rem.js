!function(i,m){var d,o=i.document,e=o.documentElement,n=o.querySelector('meta[name="viewport"]'),b=o.querySelector('meta[name="flexible"]'),p=0,f=0,l=m.flexible||(m.flexible={});if(n){var j=n.getAttribute("content").match(/initial\-scale=([\d\.]+)/);if(j){f=parseFloat(j[1]);p=parseInt(1/f)}}else{if(b){var k=b.getAttribute("content");if(k){var j=k.match(/initial\-dpr=([\d\.]+)/),h=k.match(/maximum\-dpr=([\d\.]+)/);if(j){p=parseFloat(j[1]);f=parseFloat((1/p).toFixed(2))}if(h){p=parseFloat(h[1]);f=parseFloat((1/p).toFixed(2))}}}}if(!p&&!f){var q=(i.navigator.appVersion.match(/android/gi),i.navigator.appVersion.match(/iphone/gi)),a=i.devicePixelRatio;p=q?((a>=3&&(!p||p>=3))?3:(a>=2&&(!p||p>=2))?2:1):1;f=1/p}e.setAttribute("data-dpr",p);if(!n){n=o.createElement("meta");n.setAttribute("name","viewport");n.setAttribute("content","initial-scale="+f+", maximum-scale="+f+", minimum-scale="+f+", user-scalable=no");if(e.firstElementChild){e.firstElementChild.appendChild(n)}else{var c=o.createElement("div");c.appendChild(n);o.write(c.innerHTML)}}function g(){var r=e.getBoundingClientRect().width;if(r/p>540){(r=540*p)}var s=r/10;e.style.fontSize=s+"px";l.rem=i.rem=s}i.addEventListener("resize",function(){clearTimeout(d);d=setTimeout(g,300)},false);i.addEventListener("orientationchange",function(){clearTimeout(d);d=setTimeout(g,300)},false);i.addEventListener("pageshow",function(r){if(r.persisted){clearTimeout(d);d=setTimeout(g,300)}},false);if("complete"===o.readyState){o.body.style.fontSize=12*p+"px"}else{o.addEventListener("DOMContentLoaded",function(){o.body.style.fontSize=12*p+"px"},false)}g();l.dpr=i.dpr=p;l.refreshRem=g;l.rem2px=function(r){var s=parseFloat(r)*this.rem;if("string"==typeof r&&r.match(/rem$/)){s+="px"}return s};l.px2rem=function(r){var s=parseFloat(r)/this.rem;if("string"==typeof r&&r.match(/px$/)){s+="rem"}return s}}(window,window.lib||(window.lib={}));
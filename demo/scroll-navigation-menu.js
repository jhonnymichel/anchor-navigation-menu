!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function i(){return window.scrollY||window.pageYOffset}t.isHidden=function(e){var t=e.getBoundingClientRect(),n=t.x,o=t.y,i=t.width,r=t.height;return!(n+o+i+r)},t.isScrollInRange=function(e){var t=o(e,2),n=t[0],r=t[1];return n<=i()&&r>i()},t.getScrollPosition=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={animationDuration:233,activeClass:"active",linksSelector:".scroll",offset:0}},function(e,t,n){"use strict";(function(){function n(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(e instanceof HTMLElement)if(t.element&&t.element instanceof HTMLElement)e=e.getBoundingClientRect().top+t.element.scrollTop-t.element.getBoundingClientRect().top;else{var n=window.scrollY||document.documentElement.scrollTop;e=n+e.getBoundingClientRect().top}for(var o={speed:500,minDuration:250,maxDuration:1500,cancelOnUserAction:!0,element:window,onComplete:void 0},i=Object.keys(o),r=0;r<i.length;r++){var s=i[r];void 0!==t[s]&&(o[s]=t[s])}o.isWindow=o.element===window;var a=null,l=null;o.isWindow?(a=window.scrollY||document.documentElement.scrollTop,l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight):(a=o.element.scrollTop,l=o.element.scrollHeight-o.element.clientHeight),e>l&&(e=l);var c=e-a;if(0!==c){var u=Math.abs(Math.round(c/1e3*o.speed));u<o.minDuration?u=o.minDuration:u>o.maxDuration&&(u=o.maxDuration);var d=Date.now(),h=null,f=null;o.cancelOnUserAction?(f=function(){v(),cancelAnimationFrame(h)},window.addEventListener("keydown",f),window.addEventListener("mousedown",f)):(f=function(e){e.preventDefault()},window.addEventListener("scroll",f)),window.addEventListener("wheel",f),window.addEventListener("touchstart",f);var v=function(){window.removeEventListener("wheel",f),window.removeEventListener("touchstart",f),o.cancelOnUserAction?(window.removeEventListener("keydown",f),window.removeEventListener("mousedown",f)):window.removeEventListener("scroll",f)};h=requestAnimationFrame(function t(){var n=Date.now()-d,i=n/u-1,r=i*i*i+1,s=Math.round(a+c*r);n<u&&s!==e?(o.isWindow?o.element.scrollTo(0,s):o.element.scrollTop=s,h=requestAnimationFrame(t)):(o.isWindow?o.element.scrollTo(0,e):o.element.scrollTop=e,cancelAnimationFrame(h),v(),o.onComplete&&"function"==typeof o.onComplete&&o.onComplete())})}else o.onComplete&&"function"==typeof o.onComplete&&o.onComplete()}void 0!==e&&e.exports&&(e.exports=n,t=e.exports),t.default=n}).call(void 0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=l(n(2)),s=l(n(1)),a=n(0);function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=o({},s.default,n),this._targetsRanges=new WeakMap,this._anchors=[],this.onAnchorClick=this.onAnchorClick.bind(this),this._mapAnchorToSectionPosition=this._mapAnchorToSectionPosition.bind(this),this._setCurrentHighlight=this._setCurrentHighlight.bind(this),window.addEventListener("resize",function(){t._targetsRanges=new WeakMap,t._anchors.forEach(t._mapAnchorToSectionPosition),t._setCurrentHighlight()})}return i(e,[{key:"_updateAnchorActiveState",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e&&(0,a.isHidden)(e)||e&&e.classList&&(t?e.classList.add(this.settings.activeClass):e.classList.remove(this.settings.activeClass))}},{key:"onAnchorClick",value:function(e){e.preventDefault();var t=e.currentTarget,n=t.getAttribute("href").split("#")[1],o=document.getElementById(n);if(o){var i=o.getBoundingClientRect().top+(0,a.getScrollPosition)();(0,r.default)(i+this.settings.offset,{minDuration:this.settings.animationDuration,maxDuration:this.settings.animationDuration,onComplete:function(){t.blur()}})}}},{key:"_mapAnchorToSectionPosition",value:function(e){var t=e.getAttribute("href").split("#")[1],n=document.getElementById(t).getBoundingClientRect(),o=n.y+this.settings.offset+(0,a.getScrollPosition)(),i=o+n.height;this._targetsRanges.set(e,[o,i])}},{key:"_setCurrentHighlight",value:function(){var e=this;this._anchors.forEach(function(t){var n=e._targetsRanges.get(t);(0,a.isScrollInRange)(n)?e._updateAnchorActiveState(t):e._updateAnchorActiveState(t,!1)})}},{key:"_setupHighlights",value:function(){this._targetsRanges=new WeakMap,this._anchors.forEach(this._mapAnchorToSectionPosition),window.addEventListener("scroll",this._setCurrentHighlight,{passive:!0})}},{key:"start",value:function(){var e=this;this._anchors=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(document.querySelectorAll(this.settings.linksSelector))),this._anchors.forEach(function(t){return t.addEventListener("click",e.onAnchorClick)}),this._setupHighlights(),this._setCurrentHighlight()}},{key:"stop",value:function(){var e=this;this._anchors&&this._anchors.length&&this._anchors.forEach(function(t){t.removeEventListener("click",e.onAnchorClick),e._updateAnchorActiveState(t,!1)}),window.removeEventListener("scroll",this._setCurrentHighlight,{passive:!0}),this._targetsRanges=null,this._anchors=null}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(3),r=(o=i)&&o.__esModule?o:{default:o};window.ScrollNavigation=r.default,t.default=r.default}]);
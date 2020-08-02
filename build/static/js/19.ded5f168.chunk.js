/*! For license information please see 19.ded5f168.chunk.js.LICENSE.txt */
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[19],{156:function(e,i,n){"use strict";n.d(i,"a",(function(){return w}));var t=n(97),r=n(7),o=n(95),s=n(16),a=n(0),l=n.n(a),c=n(13),u=n.n(c),d=n(124),m=n(93),p=["defaultOpen"],w=function(e){function i(i){var n;return(n=e.call(this,i)||this).state={isOpen:i.defaultOpen||!1},n.toggle=n.toggle.bind(Object(o.a)(n)),n}Object(s.a)(i,e);var n=i.prototype;return n.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},n.render=function(){return l.a.createElement(d.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(m.omit)(this.props,p)))},i}(a.Component);w.propTypes=Object(t.a)({defaultOpen:u.a.bool,onToggle:u.a.func},d.a.propTypes)},253:function(e,i,n){"use strict";var t=n(0),r=n.n(t),o=n(13),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(t.forwardRef)((function(e,i){var n=e.color,t=void 0===n?"currentColor":n,o=e.size,s=void 0===o?24:o,c=l(e,["color","size"]);return r.a.createElement("svg",a({ref:i,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),r.a.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="Lock",i.a=c},269:function(e,i,n){e.exports=function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var i,n=1,t=arguments.length;n<t;n++)for(var r in i=arguments[n])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e}).apply(this,arguments)},i={parentTrigger:"li",subMenu:"ul",toggle:!0,triggerElement:"a"},n="mm-active",t="mm-collapse",r="mm-collapsed",o="mm-collapsing",s="metismenu",a="mm-show";function l(e,i){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,i)}function c(e,i){if(e.closest)return e.closest(i);for(var n=e;n;){if(l(n,i))return n;n=n.parentElement}return null}return function(){function l(n,t){this.element=l.isElement(n)?n:document.querySelector(n),this.config=e(e({},i),t),this.disposed=!1,this.triggerArr=[],this.init()}return l.attach=function(e,i){return new l(e,i)},l.prototype.init=function(){var e=this,i=s,r=n,o=t;this.element.classList.add(i),[].slice.call(this.element.querySelectorAll(this.config.subMenu)).forEach((function(i){i.classList.add(o);var n=c(i,e.config.parentTrigger);(null===n||void 0===n?void 0:n.classList.contains(r))?e.show(i):e.hide(i);var t=null===n||void 0===n?void 0:n.querySelector(e.config.triggerElement);"true"!==(null===t||void 0===t?void 0:t.getAttribute("aria-disabled"))&&(null===t||void 0===t||t.setAttribute("aria-expanded","false"),null===t||void 0===t||t.addEventListener("click",e.clickEvent.bind(e)),e.triggerArr.push(t))}))},l.prototype.clickEvent=function(e){if(!this.disposed){var i=null===e||void 0===e?void 0:e.currentTarget;i&&"A"===i.tagName&&e.preventDefault();var n=c(i,this.config.parentTrigger),t=null===n||void 0===n?void 0:n.querySelector(this.config.subMenu);this.toggle(t)}},l.prototype.update=function(){this.disposed=!1,this.init()},l.prototype.dispose=function(){var e=this;this.triggerArr.forEach((function(i){i.removeEventListener("click",e.clickEvent.bind(e))})),this.disposed=!0},l.prototype.on=function(e,i,n){return this.element.addEventListener(e,i,n),this},l.prototype.off=function(e,i,n){return this.element.removeEventListener(e,i,n),this},l.prototype.emit=function(e,i,n){var t;return void 0===n&&(n=!1),"function"===typeof CustomEvent?t=new CustomEvent(e,{bubbles:n,detail:i}):(t=document.createEvent("CustomEvent")).initCustomEvent(e,n,!1,i),this.element.dispatchEvent(t),this},l.prototype.toggle=function(e){var i=c(e,this.config.parentTrigger);(null===i||void 0===i?void 0:i.classList.contains(n))?this.hide(e):this.show(e)},l.prototype.show=function(e){var i,s=this,l=e,u=n,d=t,m=r,p=o,w=a;if(!this.isTransitioning&&!l.classList.contains(p)){var f=c(l,this.config.parentTrigger);null===f||void 0===f||f.classList.add(u);var v=null===f||void 0===f?void 0:f.querySelector(this.config.triggerElement);null===v||void 0===v||v.setAttribute("aria-expanded","true"),null===v||void 0===v||v.classList.remove(m),l.style.height="0px",l.classList.remove(d),l.classList.remove(w),l.classList.add(p);var h=[].slice.call(null===(i=null===f||void 0===f?void 0:f.parentNode)||void 0===i?void 0:i.children).filter((function(e){return e!==f}));this.config.toggle&&h.length>0&&h.forEach((function(e){var i=e.querySelector(s.config.subMenu);i&&s.hide(i)})),this.setTransitioning(!0),l.classList.add(d),l.classList.add(w),l.style.height=l.scrollHeight+"px",this.emit("show.metisMenu",{showElement:l}),l.addEventListener("transitionend",(function e(){l.classList.remove(p),l.style.height="",l.removeEventListener("transitionend",e),s.setTransitioning(!1),s.emit("shown.metisMenu",{shownElement:l})}))}},l.prototype.hide=function(e){var i=this,s=n,l=t,u=r,d=o,m=a,p=e;if(!this.isTransitioning&&p.classList.contains(m)){this.emit("hide.metisMenu",{hideElement:p});var w=c(p,this.config.parentTrigger);null===w||void 0===w||w.classList.remove(s),p.style.height=p.getBoundingClientRect().height+"px",p.style.height=p.offsetHeight+"px",p.classList.add(d),p.classList.remove(l),p.classList.remove(m),this.setTransitioning(!0),p.addEventListener("transitionend",(function e(){p.classList.remove(d),p.classList.add(l),p.style.height="",p.removeEventListener("transitionend",e),i.setTransitioning(!1),i.emit("hidden.metisMenu",{hiddenElement:p})})),p.style.height="0px";var f=null===w||void 0===w?void 0:w.querySelector(this.config.triggerElement);null===f||void 0===f||f.setAttribute("aria-expanded","false"),null===f||void 0===f||f.classList.add(u)}},l.prototype.setTransitioning=function(e){this.isTransitioning=e},l.isElement=function(e){return Boolean(e.classList)},l}()}()},336:function(e,i,n){"use strict";var t=n(0),r=n.n(t),o=n(13),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(t.forwardRef)((function(e,i){var n=e.color,t=void 0===n?"currentColor":n,o=e.size,s=void 0===o?24:o,c=l(e,["color","size"]);return r.a.createElement("svg",a({ref:i,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.a.createElement("circle",{cx:"12",cy:"7",r:"4"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="User",i.a=c},656:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t,r=n(0),o=(t=r)&&"object"===typeof t&&"default"in t?t.default:t,s=new(n(657)),a=s.getBrowser(),l=(s.getCPU(),s.getDevice()),c=s.getEngine(),u=s.getOS(),d=s.getUA(),m=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},p=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},w=function(e){var i=p();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function h(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function g(){return(g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function b(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,i){return(O=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x="mobile",k="tablet",j="smarttv",S="console",T="wearable",L=void 0,N="Chrome",C="Firefox",P="Opera",A="Yandex",M="Safari",V="Internet Explorer",z="Edge",B="Chromium",F="IE",W="Mobile Safari",_="iOS",R="Android",I="Windows Phone",D="Windows",q="Mac OS",U={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},H=function(e,i,n,t){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?b(n,!0).forEach((function(i){h(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:m(i.vendor),model:m(i.model),os:m(n.name),osVersion:m(n.version),ua:m(t)})},G=function(e){switch(e){case x:return{isMobile:!0};case k:return{isTablet:!0};case j:return{isSmartTV:!0};case S:return{isConsole:!0};case T:return{isWearable:!0};case L:return{isBrowser:!0};default:return U}}(l.type);var X=function(){return u.name===D&&"10"===u.version&&("string"===typeof d&&-1!==d.indexOf("Edg/"))},Q=function(){return a.name===z},Y=function(){return w("iPad")},$=l.type===j,K=l.type===S,Z=l.type===T,J=a.name===W||Y(),ee=a.name===B,ie=function(){switch(l.type){case x:case k:return!0;default:return!1}}()||Y(),ne=l.type===x,te=l.type===k||Y(),re=l.type===L,oe=u.name===R,se=u.name===I,ae=u.name===_||Y(),le=a.name===N,ce=a.name===C,ue=a.name===M||a.name===W,de=a.name===P,me=a.name===V||a.name===F,pe=m(u.version),we=m(u.name),fe=m(a.version),ve=m(a.major),he=m(a.name),ge=m(l.vendor),be=m(l.model),ye=m(c.name),Oe=m(c.version),Ee=m(d),xe=Q()||X(),ke=a.name===A,je=m(l.type,"browser"),Se=function(){var e=p();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),Te=Y(),Le=w("iPhone"),Ne=w("iPod"),Ce=function(){var e=p(),i=e&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),Pe=X(),Ae=Q(),Me=u.name===D,Ve=u.name===q;i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return oe?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return re?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return K?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return e.condition?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return me?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return ae?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return ne?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return ie?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return $?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return te?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return Z?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,t=e.viewClassName,s=e.style;return se?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:t,style:s},n):null},i.browserName=he,i.browserVersion=ve,i.deviceDetect=function(){var e=G.isBrowser,i=G.isMobile,n=G.isTablet,t=G.isSmartTV,r=G.isConsole,o=G.isWearable;return e?function(e,i,n,t,r){return{isBrowser:e,browserMajorVersion:m(i.major),browserFullVersion:m(i.version),browserName:m(i.name),engineName:m(n.name),engineVersion:m(n.version),osName:m(t.name),osVersion:m(t.version),userAgent:m(r)}}(e,a,c,u,d):t?function(e,i,n,t){return{isSmartTV:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(t)}}(t,c,u,d):r?function(e,i,n,t){return{isConsole:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(t)}}(r,c,u,d):i||n?H(G,l,u,d):o?function(e,i,n,t){return{isWearable:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(t)}}(o,c,u,d):void 0},i.deviceType=je,i.engineName=ye,i.engineVersion=Oe,i.fullBrowserVersion=fe,i.getUA=Ee,i.isAndroid=oe,i.isBrowser=re,i.isChrome=le,i.isChromium=ee,i.isConsole=K,i.isEdge=xe,i.isEdgeChromium=Pe,i.isElectron=Ce,i.isFirefox=ce,i.isIE=me,i.isIOS=ae,i.isIOS13=Se,i.isIPad13=Te,i.isIPhone13=Le,i.isIPod13=Ne,i.isLegacyEdge=Ae,i.isMacOs=Ve,i.isMobile=ie,i.isMobileOnly=ne,i.isMobileSafari=J,i.isOpera=de,i.isSafari=ue,i.isSmartTV=$,i.isTablet=te,i.isWearable=Z,i.isWinPhone=se,i.isWindows=Me,i.isYandex=ke,i.mobileModel=be,i.mobileVendor=ge,i.osName=we,i.osVersion=pe,i.withOrientationChange=function(e){return function(i){function n(e){var i,t,r;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),t=this,(i=!(r=y(n).call(this,e))||"object"!==typeof r&&"function"!==typeof r?E(t):r).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(E(i)),i.onOrientationChange=i.onOrientationChange.bind(E(i)),i.onPageLoad=i.onPageLoad.bind(E(i)),i.state={isLandscape:!1,isPortrait:!1},i}var t,r,s;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&O(e,i)}(n,i),t=n,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":f(window))&&ie&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,g({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&v(t.prototype,r),s&&v(t,s),n}(o.Component)}},657:function(e,i,n){var t;!function(r,o){"use strict";var s="model",a="name",l="type",c="vendor",u="version",d="mobile",m="tablet",p="smarttv",w={extend:function(e,i){var n={};for(var t in e)i[t]&&i[t].length%2===0?n[t]=i[t].concat(e[t]):n[t]=e[t];return n},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},f={rgx:function(e,i){for(var n,t,r,o,s,a,l=0;l<i.length&&!s;){var c=i[l],u=i[l+1];for(n=t=0;n<c.length&&!s;)if(s=c[n++].exec(e))for(r=0;r<u.length;r++)a=s[++t],"object"===typeof(o=u[r])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!==typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;l+=2}},str:function(e,i){for(var n in i)if("object"===typeof i[n]&&i[n].length>0){for(var t=0;t<i[n].length;t++)if(w.has(i[n][t],e))return"?"===n?void 0:n}else if(w.has(i[n],e))return"?"===n?void 0:n;return e}},v={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},h={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,u],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],u],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,f.str,v.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,c,[l,m]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[c,"Apple"],[l,m]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[c,"Apple"],[l,p]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,s,[l,m]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[c,"Amazon"],[l,m]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,f.str,v.device.amazon.model],[c,"Amazon"],[l,d]],[/android.+aft([bms])\sbuild/i],[s,[c,"Amazon"],[l,p]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,c,[l,d]],[/\((ip[honed|\s\w*]+);/i],[s,[c,"Apple"],[l,d]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,s,[l,d]],[/\(bb10;\s(\w+)/i],[s,[c,"BlackBerry"],[l,d]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[c,"Asus"],[l,m]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[s,"Xperia Tablet"],[l,m]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[c,"Sony"],[l,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,s,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[c,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[c,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[c,f.str,v.device.sprint.vendor],[s,f.str,v.device.sprint.model],[l,d]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[s,/_/g," "],[l,d]],[/(nexus\s9)/i],[s,[c,"HTC"],[l,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[s,[c,"Huawei"],[l,d]],[/android.+(bah2?-a?[lw]\d{2})/i],[s,[c,"Huawei"],[l,m]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,s,[l,d]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[c,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[c,"Microsoft"],[l,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[c,"Motorola"],[l,d]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[c,"Motorola"],[l,m]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,w.trim],[s,w.trim],[l,p]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[c,"Samsung"],[l,p]],[/\(dtv[\);].+(aquos)/i],[s,[c,"Sharp"],[l,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],s,[l,m]],[/smart-tv.+(samsung)/i],[c,[l,p],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],s,[l,d]],[/sie-(\w*)/i],[s,[c,"Siemens"],[l,d]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],s,[l,d]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[c,"Acer"],[l,m]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[c,"LG"],[l,m]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],s,[l,m]],[/(lg) netcast\.tv/i],[c,s,[l,p]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[c,"LG"],[l,d]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[c,s,[l,m]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[c,"Lenovo"],[l,m]],[/(lenovo)[_\s-]?([\w-]+)/i],[c,s,[l,d]],[/linux;.+((jolla));/i],[c,s,[l,d]],[/((pebble))app\/[\d\.]+\s/i],[c,s,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,s,[l,d]],[/crkey/i],[[s,"Chromecast"],[c,"Google"],[l,p]],[/android.+;\s(glass)\s\d/i],[s,[c,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[c,"Google"],[l,m]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[c,"Google"],[l,d]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[l,d]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[l,m]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[c,"Meizu"],[l,d]],[/(mz)-([\w-]{2,})/i],[[c,"Meizu"],s,[l,d]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[s,[c,"OnePlus"],[l,d]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[c,"RCA"],[l,m]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[c,"Dell"],[l,m]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[c,"Verizon"],[l,m]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],s,[l,m]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[c,"NuVision"],[l,m]],[/android.+;\s(k88)\sbuild/i],[s,[c,"ZTE"],[l,m]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[c,"Swiss"],[l,d]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[c,"Swiss"],[l,m]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[c,"Zeki"],[l,m]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],s,[l,m]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[c,"Insignia"],[l,m]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[c,"NextBook"],[l,m]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],s,[l,d]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],s,[l,d]],[/android.+;\s(PH-1)\s/i],[s,[c,"Essential"],[l,d]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[c,"Envizen"],[l,m]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,s,[l,m]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[c,"MachSpeed"],[l,m]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,s,[l,m]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[c,"Rotor"],[l,m]],[/android.+(KS(.+))\s+build/i],[s,[c,"Amazon"],[l,m]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,s,[l,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,w.lowerize],c,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,p]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,f.str,v.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,f.str,v.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},g=function e(i,n){if("object"===typeof i&&(n=i,i=void 0),!(this instanceof e))return new e(i,n).getResult();var t=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=n?w.extend(h,n):h;return this.getBrowser=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,t,o.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return f.rgx.call(e,t,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return f.rgx.call(e,t,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,t,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return f.rgx.call(e,t,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};g.VERSION="0.7.21",g.BROWSER={NAME:a,MAJOR:"major",VERSION:u},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:s,VENDOR:c,TYPE:l,CONSOLE:"console",MOBILE:d,SMARTTV:p,TABLET:m,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:a,VERSION:u},g.OS={NAME:a,VERSION:u},"undefined"!==typeof i?("undefined"!==typeof e&&e.exports&&(i=e.exports=g),i.UAParser=g):void 0===(t=function(){return g}.call(i,n,i,e))||(e.exports=t);var b=r&&(r.jQuery||r.Zepto);if(b&&!b.ua){var y=new g;b.ua=y.getResult(),b.ua.get=function(){return y.getUA()},b.ua.set=function(e){y.setUA(e);var i=y.getResult();for(var n in i)b.ua[n]=i[n]}}}("object"===typeof window?window:this)},658:function(e,i,n){"use strict";var t=n(0),r=n.n(t),o=n(13),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(t.forwardRef)((function(e,i){var n=e.color,t=void 0===n?"currentColor":n,o=e.size,s=void 0===o?24:o,c=l(e,["color","size"]);return r.a.createElement("svg",a({ref:i,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="ChevronDown",i.a=c},659:function(e,i,n){"use strict";var t=n(0),r=n.n(t),o=n(13),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(t.forwardRef)((function(e,i){var n=e.color,t=void 0===n?"currentColor":n,o=e.size,s=void 0===o?24:o,c=l(e,["color","size"]);return r.a.createElement("svg",a({ref:i,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("circle",{cx:"12",cy:"12",r:"3"}),r.a.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="Settings",i.a=c},660:function(e,i,n){"use strict";var t=n(0),r=n.n(t),o=n(13),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(t.forwardRef)((function(e,i){var n=e.color,t=void 0===n?"currentColor":n,o=e.size,s=void 0===o?24:o,c=l(e,["color","size"]);return r.a.createElement("svg",a({ref:i,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),r.a.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="HelpCircle",i.a=c},661:function(e,i,n){"use strict";var t=n(0),r=n.n(t),o=n(13),s=n.n(o);function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function l(e,i){if(null==e)return{};var n,t,r=function(e,i){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(t.forwardRef)((function(e,i){var n=e.color,t=void 0===n?"currentColor":n,o=e.size,s=void 0===o?24:o,c=l(e,["color","size"]);return r.a.createElement("svg",a({ref:i,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.a.createElement("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),r.a.createElement("polyline",{points:"16 17 21 12 16 7"}),r.a.createElement("line",{x1:"21",y1:"12",x2:"9",y2:"12"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="LogOut",i.a=c},95:function(e,i,n){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(i,"a",(function(){return t}))}}]);
//# sourceMappingURL=19.ded5f168.chunk.js.map
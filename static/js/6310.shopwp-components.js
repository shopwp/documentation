(self.webpackChunkshopwpComponents=self.webpackChunkshopwpComponents||[]).push([[6310],{9996:function(e){"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===n}(e)}(e)},n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function o(e,t,n){return e.concat(t).map((function(e){return r(e,n)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function i(e,t){try{return t in e}catch(e){return!1}}function l(e,n,u){(u=u||{}).arrayMerge=u.arrayMerge||o,u.isMergeableObject=u.isMergeableObject||t,u.cloneUnlessOtherwiseSpecified=r;var c=Array.isArray(n);return c===Array.isArray(e)?c?u.arrayMerge(e,n,u):function(e,t,n){var o={};return n.isMergeableObject(e)&&a(e).forEach((function(t){o[t]=r(e[t],n)})),a(t).forEach((function(a){(function(e,t){return i(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(i(e,a)&&n.isMergeableObject(t[a])?o[a]=function(e,t){if(!t.customMerge)return l;var n=t.customMerge(e);return"function"==typeof n?n:l}(a,n)(e[a],t[a],n):o[a]=r(t[a],n))})),o}(e,n,u):r(n,u)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return l(e,n,t)}),{})};var u=l;e.exports=u},9090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof r&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,o),i.onload||t(i,o),a.appendChild(i)}},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,u,c,s;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(u=l;0!=u--;)if(!a(e[u],i[u]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],i.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(u=l;0!=u--;)if(e[u]!==i[u])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(u=l;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=l;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!a(e[c[u]],i[c[u]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},9605:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}(n(4639)),i=(o=n(9590))&&o.__esModule?o:{default:o},l=n(9448),u=n(6281);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,r,o,l=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function c(){var e;f(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(h(e=l.call.apply(l,[this].concat(n))),"mounted",!1),b(h(e),"isReady",!1),b(h(e),"isPlaying",!1),b(h(e),"isLoading",!0),b(h(e),"loadOnReady",null),b(h(e),"startOnPlay",!0),b(h(e),"seekOnPlay",null),b(h(e),"onDurationCalled",!1),b(h(e),"handlePlayerMount",(function(t){e.player=t,e.player.load(e.props.url),e.progress()})),b(h(e),"getInternalPlayer",(function(t){return e.player?e.player[t]:null})),b(h(e),"progress",(function(){if(e.props.url&&e.player&&e.isReady){var t=e.getCurrentTime()||0,n=e.getSecondsLoaded(),r=e.getDuration();if(r){var o={playedSeconds:t,played:t/r};null!==n&&(o.loadedSeconds=n,o.loaded=n/r),o.playedSeconds===e.prevPlayed&&o.loadedSeconds===e.prevLoaded||e.props.onProgress(o),e.prevPlayed=o.playedSeconds,e.prevLoaded=o.loadedSeconds}}e.progressTimeout=setTimeout(e.progress,e.props.progressFrequency||e.props.progressInterval)})),b(h(e),"handleReady",(function(){if(e.mounted){e.isReady=!0,e.isLoading=!1;var t=e.props,n=t.onReady,r=t.playing,o=t.volume,a=t.muted;n(),a||null===o||e.player.setVolume(o),e.loadOnReady?(e.player.load(e.loadOnReady,!0),e.loadOnReady=null):r&&e.player.play(),e.handleDurationCheck()}})),b(h(e),"handlePlay",(function(){e.isPlaying=!0,e.isLoading=!1;var t=e.props,n=t.onStart,r=t.onPlay,o=t.playbackRate;e.startOnPlay&&(e.player.setPlaybackRate&&1!==o&&e.player.setPlaybackRate(o),n(),e.startOnPlay=!1),r(),e.seekOnPlay&&(e.seekTo(e.seekOnPlay),e.seekOnPlay=null),e.handleDurationCheck()})),b(h(e),"handlePause",(function(t){e.isPlaying=!1,e.isLoading||e.props.onPause(t)})),b(h(e),"handleEnded",(function(){var t=e.props,n=t.activePlayer,r=t.loop,o=t.onEnded;n.loopOnEnded&&r&&e.seekTo(0),r||(e.isPlaying=!1,o())})),b(h(e),"handleError",(function(){var t;e.isLoading=!1,(t=e.props).onError.apply(t,arguments)})),b(h(e),"handleDurationCheck",(function(){clearTimeout(e.durationCheckTimeout);var t=e.getDuration();t?e.onDurationCalled||(e.props.onDuration(t),e.onDurationCalled=!0):e.durationCheckTimeout=setTimeout(e.handleDurationCheck,100)})),b(h(e),"handleLoaded",(function(){e.isLoading=!1})),e}return t=c,n=[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.player){var n=this.props,r=n.url,o=n.playing,a=n.volume,l=n.muted,c=n.playbackRate,s=n.pip,f=n.loop,y=n.activePlayer,p=n.disableDeferredLoading;if(!(0,i.default)(e.url,r)){if(this.isLoading&&!y.forceLoad&&!p&&!(0,u.isMediaStream)(r))return console.warn("ReactPlayer: the attempt to load ".concat(r," is being deferred until the player has loaded")),void(this.loadOnReady=r);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}e.playing||!o||this.isPlaying||this.player.play(),e.playing&&!o&&this.isPlaying&&this.player.pause(),!e.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==a&&null!==a&&this.player.setVolume(a),e.muted!==l&&(l?this.player.mute():(this.player.unmute(),null!==a&&setTimeout((function(){return t.player.setVolume(a)})))),e.playbackRate!==c&&this.player.setPlaybackRate&&this.player.setPlaybackRate(c),e.loop!==f&&this.player.setLoop&&this.player.setLoop(f)}}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(e,t){var n=this;if(this.isReady){if(t?"fraction"===t:e>0&&e<1){var r=this.player.getDuration();return r?void this.player.seekTo(r*e):void console.warn("ReactPlayer: could not seek using fraction – duration not yet available")}this.player.seekTo(e)}else 0!==e&&(this.seekOnPlay=e,setTimeout((function(){n.seekOnPlay=null}),5e3))}},{key:"render",value:function(){var e=this.props.activePlayer;return e?a.default.createElement(e,s({},this.props,{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}],n&&y(t.prototype,n),c}(a.Component);t.default=m,b(m,"displayName","Player"),b(m,"propTypes",l.propTypes),b(m,"defaultProps",l.defaultProps)},1276:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createReactPlayer=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}(n(4639)),a=f(n(9996)),i=f(n(845)),l=f(n(9590)),u=n(9448),c=n(6281),s=f(n(9605));function f(e){return e&&e.__esModule?e:{default:e}}function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function v(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function w(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=(0,o.lazy)((function(){return n.e(7664).then(n.bind(n,7284))})),T="undefined"!=typeof window&&window.document,k=void 0!==n.g&&n.g.window&&n.g.window.document,E=Object.keys(u.propTypes),j=T||k?o.Suspense:function(){return null},R=[];t.createReactPlayer=function(e,t){var n,r;return r=n=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(T,n);var r,f,y,p,b=(y=T,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(y);if(p){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function T(){var n;m(this,T);for(var r=arguments.length,l=new Array(r),f=0;f<r;f++)l[f]=arguments[f];return S(O(n=b.call.apply(b,[this].concat(l))),"state",{showPreview:!!n.props.light}),S(O(n),"references",{wrapper:function(e){n.wrapper=e},player:function(e){n.player=e}}),S(O(n),"handleClickPreview",(function(e){n.setState({showPreview:!1}),n.props.onClickPreview(e)})),S(O(n),"showPreview",(function(){n.setState({showPreview:!0})})),S(O(n),"getDuration",(function(){return n.player?n.player.getDuration():null})),S(O(n),"getCurrentTime",(function(){return n.player?n.player.getCurrentTime():null})),S(O(n),"getSecondsLoaded",(function(){return n.player?n.player.getSecondsLoaded():null})),S(O(n),"getInternalPlayer",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"player";return n.player?n.player.getInternalPlayer(e):null})),S(O(n),"seekTo",(function(e,t){if(!n.player)return null;n.player.seekTo(e,t)})),S(O(n),"handleReady",(function(){n.props.onReady(O(n))})),S(O(n),"getActivePlayer",(0,i.default)((function(n){for(var r=0,o=[].concat(R,v(e));r<o.length;r++){var a=o[r];if(a.canPlay(n))return a}return t||null}))),S(O(n),"getConfig",(0,i.default)((function(e,t){var r=n.props.config;return a.default.all([u.defaultProps.config,u.defaultProps.config[t]||{},r,r[t]||{}])}))),S(O(n),"getAttributes",(0,i.default)((function(e){return(0,c.omit)(n.props,E)}))),S(O(n),"renderActivePlayer",(function(e){if(!e)return null;var t=n.getActivePlayer(e);if(!t)return null;var r=n.getConfig(e,t.key);return o.default.createElement(s.default,h({},n.props,{key:t.key,ref:n.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:n.handleReady}))})),n}return r=T,f=[{key:"shouldComponentUpdate",value:function(e,t){return!(0,l.default)(this.props,e)||!(0,l.default)(this.state,t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.light;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}},{key:"renderPreview",value:function(e){if(!e)return null;var t=this.props,n=t.light,r=t.playIcon,a=t.previewTabIndex,i=t.oEmbedUrl;return o.default.createElement(A,{url:e,light:n,playIcon:r,previewTabIndex:a,oEmbedUrl:i,onClick:this.handleClickPreview})}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.style,r=e.width,a=e.height,i=e.fallback,l=e.wrapper,u=this.state.showPreview,c=this.getAttributes(t);return o.default.createElement(l,h({ref:this.references.wrapper,style:d(d({},n),{},{width:r,height:a})},c),o.default.createElement(j,{fallback:i},u?this.renderPreview(t):this.renderActivePlayer(t)))}}],f&&g(r.prototype,f),T}(o.Component),S(n,"displayName","ReactPlayer"),S(n,"propTypes",u.propTypes),S(n,"defaultProps",u.defaultProps),S(n,"addCustomPlayer",(function(e){R.push(e)})),S(n,"removeCustomPlayers",(function(){R.length=0})),S(n,"canPlay",(function(t){for(var n=0,r=[].concat(R,v(e));n<r.length;n++)if(r[n].canPlay(t))return!0;return!1})),S(n,"canEnablePIP",(function(t){for(var n=0,r=[].concat(R,v(e));n<r.length;n++){var o=r[n];if(o.canEnablePIP&&o.canEnablePIP(t))return!0}return!1})),r}},6310:function(e,t,n){"use strict";t.Z=void 0;var r,o=(r=n(9760))&&r.__esModule?r:{default:r},a=n(1276),i=o.default[o.default.length-1],l=(0,a.createReactPlayer)(o.default,i);t.Z=l},9790:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canPlay=t.FLV_EXTENSIONS=t.DASH_EXTENSIONS=t.HLS_EXTENSIONS=t.VIDEO_EXTENSIONS=t.AUDIO_EXTENSIONS=t.MATCH_URL_KALTURA=t.MATCH_URL_VIDYARD=t.MATCH_URL_MIXCLOUD=t.MATCH_URL_DAILYMOTION=t.MATCH_URL_TWITCH_CHANNEL=t.MATCH_URL_TWITCH_VIDEO=t.MATCH_URL_WISTIA=t.MATCH_URL_STREAMABLE=t.MATCH_URL_FACEBOOK_WATCH=t.MATCH_URL_FACEBOOK=t.MATCH_URL_VIMEO=t.MATCH_URL_SOUNDCLOUD=t.MATCH_URL_YOUTUBE=void 0;var r=n(6281);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;t.MATCH_URL_YOUTUBE=a;var i=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/;t.MATCH_URL_SOUNDCLOUD=i;var l=/vimeo\.com\/(?!progressive_redirect).+/;t.MATCH_URL_VIMEO=l;var u=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;t.MATCH_URL_FACEBOOK=u;var c=/^https?:\/\/fb\.watch\/.+$/;t.MATCH_URL_FACEBOOK_WATCH=c;var s=/streamable\.com\/([a-z0-9]+)$/;t.MATCH_URL_STREAMABLE=s;var f=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;t.MATCH_URL_WISTIA=f;var y=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;t.MATCH_URL_TWITCH_VIDEO=y;var p=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;t.MATCH_URL_TWITCH_CHANNEL=p;var d=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;t.MATCH_URL_DAILYMOTION=d;var h=/mixcloud\.com\/([^/]+\/[^/]+)/;t.MATCH_URL_MIXCLOUD=h;var v=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;t.MATCH_URL_VIDYARD=v;var b=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;t.MATCH_URL_KALTURA=b;var m=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;t.AUDIO_EXTENSIONS=m;var g=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;t.VIDEO_EXTENSIONS=g;var P=/\.(m3u8)($|\?)/i;t.HLS_EXTENSIONS=P;var w=/\.(mpd)($|\?)/i;t.DASH_EXTENSIONS=w;var O=/\.(flv)($|\?)/i;t.FLV_EXTENSIONS=O;var _={youtube:function(e){return e instanceof Array?e.every((function(e){return a.test(e)})):a.test(e)},soundcloud:function(e){return i.test(e)&&!m.test(e)},vimeo:function(e){return l.test(e)&&!g.test(e)&&!P.test(e)},facebook:function(e){return u.test(e)||c.test(e)},streamable:function(e){return s.test(e)},wistia:function(e){return f.test(e)},twitch:function(e){return y.test(e)||p.test(e)},dailymotion:function(e){return d.test(e)},mixcloud:function(e){return h.test(e)},vidyard:function(e){return v.test(e)},kaltura:function(e){return b.test(e)},file:function e(t){if(t instanceof Array){var n,a=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;if("string"==typeof i&&e(i))return!0;if(e(i.src))return!0}}catch(e){a.e(e)}finally{a.f()}return!1}return!(!(0,r.isMediaStream)(t)&&!(0,r.isBlobUrl)(t))||m.test(t)||g.test(t)||P.test(t)||w.test(t)||O.test(t)}};t.canPlay=_},9760:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4639),o=n(6281),a=n(9790),i=[{key:"youtube",name:"YouTube",canPlay:a.canPlay.youtube,lazyPlayer:(0,r.lazy)((function(){return n.e(4439).then(n.bind(n,5034))}))},{key:"soundcloud",name:"SoundCloud",canPlay:a.canPlay.soundcloud,lazyPlayer:(0,r.lazy)((function(){return n.e(6125).then(n.bind(n,6655))}))},{key:"vimeo",name:"Vimeo",canPlay:a.canPlay.vimeo,lazyPlayer:(0,r.lazy)((function(){return n.e(3743).then(n.bind(n,6746))}))},{key:"facebook",name:"Facebook",canPlay:a.canPlay.facebook,lazyPlayer:(0,r.lazy)((function(){return n.e(2121).then(n.bind(n,6429))}))},{key:"streamable",name:"Streamable",canPlay:a.canPlay.streamable,lazyPlayer:(0,r.lazy)((function(){return n.e(2546).then(n.bind(n,6479))}))},{key:"wistia",name:"Wistia",canPlay:a.canPlay.wistia,lazyPlayer:(0,r.lazy)((function(){return n.e(8055).then(n.bind(n,3134))}))},{key:"twitch",name:"Twitch",canPlay:a.canPlay.twitch,lazyPlayer:(0,r.lazy)((function(){return n.e(6216).then(n.bind(n,9743))}))},{key:"dailymotion",name:"DailyMotion",canPlay:a.canPlay.dailymotion,lazyPlayer:(0,r.lazy)((function(){return n.e(7596).then(n.bind(n,5134))}))},{key:"mixcloud",name:"Mixcloud",canPlay:a.canPlay.mixcloud,lazyPlayer:(0,r.lazy)((function(){return n.e(4667).then(n.bind(n,9734))}))},{key:"vidyard",name:"Vidyard",canPlay:a.canPlay.vidyard,lazyPlayer:(0,r.lazy)((function(){return n.e(8888).then(n.bind(n,7287))}))},{key:"kaltura",name:"Kaltura",canPlay:a.canPlay.kaltura,lazyPlayer:(0,r.lazy)((function(){return n.e(261).then(n.bind(n,9289))}))},{key:"file",name:"FilePlayer",canPlay:a.canPlay.file,canEnablePIP:function(e){return a.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,o.supportsWebKitPresentationMode)())&&!a.AUDIO_EXTENSIONS.test(e)},lazyPlayer:(0,r.lazy)((function(){return n.e(6011).then(n.bind(n,3364))}))}];t.default=i},9448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultProps=t.propTypes=void 0;var r,o=(r=n(5697))&&r.__esModule?r:{default:r},a=o.default.string,i=o.default.bool,l=o.default.number,u=o.default.array,c=o.default.oneOfType,s=o.default.shape,f=o.default.object,y=o.default.func,p=o.default.node,d={url:c([a,u,f]),playing:i,loop:i,controls:i,volume:l,muted:i,playbackRate:l,width:c([a,l]),height:c([a,l]),style:f,progressInterval:l,playsinline:i,pip:i,stopOnUnmount:i,light:c([i,a]),playIcon:p,previewTabIndex:l,fallback:p,oEmbedUrl:a,wrapper:c([a,y,s({render:y.isRequired})]),config:s({soundcloud:s({options:f}),youtube:s({playerVars:f,embedOptions:f,onUnstarted:y}),facebook:s({appId:a,version:a,playerId:a,attributes:f}),dailymotion:s({params:f}),vimeo:s({playerOptions:f,title:a}),file:s({attributes:f,tracks:u,forceVideo:i,forceAudio:i,forceHLS:i,forceDASH:i,forceFLV:i,hlsOptions:f,hlsVersion:a,dashVersion:a,flvVersion:a}),wistia:s({options:f,playerId:a,customControls:u}),mixcloud:s({options:f}),twitch:s({options:f,playerId:a}),vidyard:s({options:f})}),onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y};t.propTypes=d;var h=function(){},v={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:h},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0"},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:h,onStart:h,onPlay:h,onPause:h,onBuffer:h,onBufferEnd:h,onEnded:h,onError:h,onDuration:h,onSeek:h,onPlaybackRateChange:h,onProgress:h,onClickPreview:h,onEnablePIP:h,onDisablePIP:h};t.defaultProps=v},6281:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseStartTime=function(e){return f(e,l)},t.parseEndTime=function(e){return f(e,u)},t.randomString=function(){return Math.random().toString(36).substr(2,5)},t.queryString=function(e){return Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&")},t.getSDK=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.default,i=y(t);return i&&o(i)?Promise.resolve(i):new Promise((function(r,o){if(p[e])p[e].push({resolve:r,reject:o});else{p[e]=[{resolve:r,reject:o}];var i=function(t){p[e].forEach((function(e){return e.resolve(t)}))};if(n){var l=window[n];window[n]=function(){l&&l(),i(y(t))}}a(e,(function(r){r?(p[e].forEach((function(e){return e.reject(r)})),p[e]=null):n||i(y(t))}))}}))},t.getConfig=function(e,t){return(0,o.default)(t.config,e.config)},t.omit=function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=(t=[]).concat.apply(t,r),i={},l=Object.keys(e),u=0,c=l;u<c.length;u++){var s=c[u];-1===a.indexOf(s)&&(i[s]=e[s])}return i},t.callPlayer=function(e){var t;if(!this.player||!this.player[e]){var n="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c – ");return this.player?this.player[e]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return(t=this.player)[e].apply(t,o)},t.isMediaStream=function(e){return"undefined"!=typeof window&&void 0!==window.MediaStream&&e instanceof window.MediaStream},t.isBlobUrl=function(e){return/^blob:/.test(e)},t.supportsWebKitPresentationMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("video"),t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"==typeof e.webkitSetPresentationMode&&t};var r=a(n(9090)),o=a(n(9996));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=/[?&#](?:start|t)=([0-9hms]+)/,u=/[?&#]end=([0-9hms]+)/,c=/(\d+)(h|m|s)/g,s=/^\d+$/;function f(e,t){if(!(e instanceof Array)){var n=e.match(t);if(n){var r=n[1];if(r.match(c))return function(e){for(var t,n,r=0,o=c.exec(e);null!==o;){var a=(n=3,function(e){if(Array.isArray(e))return e}(t=o)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[1],u=a[2];"h"===u&&(r+=60*parseInt(l,10)*60),"m"===u&&(r+=60*parseInt(l,10)),"s"===u&&(r+=parseInt(l,10)),o=c.exec(e)}return r}(r);if(s.test(r))return parseInt(r)}}}function y(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}var p={}}}]);
//# sourceMappingURL=6310.shopwp-components.js.map
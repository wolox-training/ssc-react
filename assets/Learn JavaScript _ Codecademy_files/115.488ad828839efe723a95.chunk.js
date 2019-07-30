(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[115],{"+mBx":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("D5Om"),i=r("U3J5"),s=r("8/Hw"),l=r("y1jB"),c=r("oNLn"),f=r("Gtit"),y=r("TVOw"),u=r("IHSv"),p=r.n(u),d=r("N9nL"),_=r.n(d),b=r("jdWZ"),m=r("AZw8"),T=r.n(m);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function BannerBody(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BannerBody);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(BannerBody)).call.apply(e,[this].concat(n)))).sourceTrackingData=function(){return"learningEnvironment"===t.props.trackingSource?{target:"le_trialexpirationcard_upgrade"}:{target:null}},t.getBannerText=function(){var e=t.props,r=e.daysLeft,n=e.isExpired,a=e.showPaidTrialCTA,o={title:"Trial Notification",message:n?"Your trial has ended. Upgrade to unlock all the Pro features.":"Enjoy unlimited learning, practice materials and other premium features for ".concat(r," ").concat(r>1?"days":"day","."),ctaText:"Upgrade To Pro"};return a?{title:"Try Codecademy Pro",message:"Enjoy unlimited learning, practice materials and other premium features.",ctaText:"Try it for free"}:o},t.handleUpgradeClick=function(){var e=t.sourceTrackingData();Object(b.b)("user","click",e)},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(BannerBody,n["Component"]),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(BannerBody,[{key:"render",value:function render(){var e=this.getBannerText(),t=e.title,r=e.message,n=e.ctaText;return a.a.createElement("div",{className:T.a.bannerBodyContainer},a.a.createElement("div",{className:T.a.bannerProContainer},a.a.createElement("div",{className:T.a.bannerPro},a.a.createElement("img",{src:_.a,className:T.a.bannerProImage,alt:"pro-logo"})),a.a.createElement("h4",{className:T.a.bannerBodyTitle},t)),a.a.createElement("div",{className:T.a.bannerBodySubtext},a.a.createElement("p",{className:T.a.bannerBodyMain},r),a.a.createElement(l.a,{className:T.a.bannerUpgradeText,onClick:this.handleUpgradeClick},n)))}}]),BannerBody}(),B=r("TSYQ"),P=r.n(B),O=r("y1zx"),C=r.n(O);function DaysLeft_typeof(e){return(DaysLeft_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function DaysLeft_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function DaysLeft_possibleConstructorReturn(e,t){return!t||"object"!==DaysLeft_typeof(t)&&"function"!=typeof t?function DaysLeft_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function DaysLeft_getPrototypeOf(e){return(DaysLeft_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function DaysLeft_setPrototypeOf(e,t){return(DaysLeft_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function DaysLeft(){return function DaysLeft_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DaysLeft),DaysLeft_possibleConstructorReturn(this,DaysLeft_getPrototypeOf(DaysLeft).apply(this,arguments))}return function DaysLeft_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&DaysLeft_setPrototypeOf(e,t)}(DaysLeft,n["Component"]),function DaysLeft_createClass(e,t,r){return t&&DaysLeft_defineProperties(e.prototype,t),r&&DaysLeft_defineProperties(e,r),e}(DaysLeft,[{key:"render",value:function render(){var e=this.props,t=e.daysLeft,r=e.isExpired;return a.a.createElement("div",null,a.a.createElement("div",{className:C.a.daysLeftTriangle}),a.a.createElement("div",{className:P()(C.a.daysLeftCircle,{[C.a.isExpiredCircle]:r,[C.a.daysLeftCirclePurple]:t>3,[C.a.daysLeftCircleRed]:t<=3&&!r})},r?a.a.createElement("div",null,a.a.createElement("div",null,"ProTrial ",a.a.createElement("span",{className:C.a.endedText},"ended"))):a.a.createElement("div",{className:C.a.daysLeftContent},a.a.createElement("span",{className:C.a.daysLeftNumber},t),a.a.createElement("span",{className:C.a.daysLeftText},1===t?"day":"days"))))}}]),DaysLeft}();function TrialBanner_typeof(e){return(TrialBanner_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function TrialBanner_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function TrialBanner_possibleConstructorReturn(e,t){return!t||"object"!==TrialBanner_typeof(t)&&"function"!=typeof t?function TrialBanner_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function TrialBanner_getPrototypeOf(e){return(TrialBanner_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function TrialBanner_setPrototypeOf(e,t){return(TrialBanner_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function TrialBanner(){var e,t;!function TrialBanner_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TrialBanner);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=TrialBanner_possibleConstructorReturn(this,(e=TrialBanner_getPrototypeOf(TrialBanner)).call.apply(e,[this].concat(n)))).sourceTrackingData=function(){return"dashboard"===t.props.trackingSource?{target:"dashboard_trialexpirationcard_upgrade"}:{target:null}},t}return function TrialBanner_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&TrialBanner_setPrototypeOf(e,t)}(TrialBanner,n["Component"]),function TrialBanner_createClass(e,t,r){return t&&TrialBanner_defineProperties(e.prototype,t),r&&TrialBanner_defineProperties(e,r),e}(TrialBanner,[{key:"render",value:function render(){var e=this.props,t=e.daysLeft,r=e.isExpired,n=e.location,u=e.showCloseButton,d=e.expiryBannerClosed,_=e.closeExpiryBanner,b=e.trackingSource,m=e.showPaidTrialCTA;if(d)return null;var T=m?Object(y.J)({redirectUrl:Object(f.d)(n)}):Object(y.I)({redirectUrl:Object(f.d)(n)});return a.a.createElement(s.a,{data:this.sourceTrackingData(),href:T,"data-testid":"pro-trial-banner-notification"},a.a.createElement(o.a,{className:p.a.trialBannerCardShell,hoverShadow:!0},a.a.createElement(i.a,{className:p.a.trialBannerContainer},u&&a.a.createElement(l.a,{className:p.a.trialBannerClose,onClick:_},a.a.createElement(c.a,{name:"close",className:p.a.closeIcon,"data-testid":"pro-trial-banner-notification-close",size:18})),a.a.createElement(h,{daysLeft:t,isExpired:r,trackingSource:b,showPaidTrialCTA:m}),!m&&a.a.createElement(g,{daysLeft:t,isExpired:r}))))}}]),TrialBanner}();t.a=L},AZw8:function(e,t,r){e.exports={bannerProContainer:"bannerProContainer__1g3NOfe3bs7ZPt1wA5i-0z",bannerPro:"bannerPro__3usjVgiipXw5V-SnKdhoN4",bannerProImage:"bannerProImage__2HCRozbbFGizFzIKIw6uAV",bannerBodyTitle:"bannerBodyTitle__27iV9gl9TaO5YjU2JVTDG1",bannerBodyMain:"bannerBodyMain__3eNZq3FB3CVik4mpWEAFyw",bannerBodyContainer:"bannerBodyContainer__3oq8W9WXy21mNcUKWtUNUB",bannerBodySubtext:"bannerBodySubtext__HyyLflnAFajk_h8T5MUR_",bannerUpgradeText:"bannerUpgradeText__3yN_F8pHqqJpe1_pZGpLLU"}},IHSv:function(e,t,r){e.exports={trialBannerCardShell:"trialBannerCardShell__1OyWEdaBCjxPzUXrzfLeRS",trialBannerContainer:"trialBannerContainer__1KqMO2s1Jf3CamhulVbzi-",trialBannerClose:"trialBannerClose__2kHBKu6teKLJv4mF0dOaht",closeIcon:"closeIcon__1qwDm5yvt5NNJ9sphYMolB"}},y1zx:function(e,t,r){e.exports={daysLeftCircle:"daysLeftCircle__22yPaDkv1x8QIKeidfVffv",daysLeftCirclePurple:"daysLeftCirclePurple__1kHLD4ZDh9XUh0XzAQsABp",daysLeftCircleRed:"daysLeftCircleRed__3h8WTODv_IxWHUw-B0tqA-",isExpiredCircle:"isExpiredCircle__32h4NJklTT96_KTc0EOm_t",endedText:"endedText__2L99qqCiL1B3XS0RL3PZvb",isExpiredContainer:"isExpiredContainer__2PYzpuWWbIhHOTVD2aPTTA",daysLeftContent:"daysLeftContent__2N0kjxhIsid958qPZRm4nT",daysLeftNumber:"daysLeftNumber__2yienwnWsnvv2Zi7MHWE3i",daysLeftText:"daysLeftText__22wTE5z-i8e8_2Fkd-oH6q",daysLeftTriangle:"daysLeftTriangle__2lU1MoKpb9wiQu_j0oXcZc"}}}]);
//# sourceMappingURL=115.488ad828839efe723a95.chunk.js.map
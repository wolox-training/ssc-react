(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[144],{B4lf:function(e,t,n){e.exports={container:"container__2oEE2kqdx7ORGph1zS342t",title:"title__1hai3wGCs926bKdpOJJiLO",list:"list__BollKvuLfqFmhdUHJQfeB",listItem:"listItem__3dbbZ_BuRMdrKEyCITm2bt",status:"status__PyEC-Ng27K_Z36c-B0DIl",reviewTitle:"reviewTitle__rAANJ1iez6zLBv6WUyDtH",primaryButton:"primaryButton__1-HjNveRdUipYL_Q7ea4c8",shrugIcon:"shrugIcon__3gxDNMthkaD030Wt6S1gao"}},DcZj:function(e,t,n){"use strict";var r=n("jdWZ"),o=n("q1tI"),a=n.n(o),c=n("/MKj"),i=n("tKnm"),s=n("CBRV"),l=n("+mBx"),u=n("UCeZ"),p=n.n(u);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function LeTrialBanner(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,LeTrialBanner);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(LeTrialBanner)).call.apply(e,[this].concat(o)))).state={hidden:!0},t.closeExpiryBanner=function(e){e.stopPropagation(),e.preventDefault();var n="".concat((new Date).getTime());localStorage.setItem("leTrialExpiryBannerClosedTime",n),t.setState({leTrialExpiryBannerClosedTime:n}),t.trackLeExpiryBannerClosed()},t.trackLeExpiryBannerClosed=function(){Object(r.b)("user","click",{target:"le_trialexpirationcard_close"})},t.isExpiryBannerClosed=function(){return!!t.state.leTrialExpiryBannerClosedTime},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(LeTrialBanner,o["Component"]),function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(LeTrialBanner,[{key:"componentDidMount",value:function componentDidMount(){this.setState({leTrialExpiryBannerClosedTime:localStorage.getItem("leTrialExpiryBannerClosedTime"),hidden:!1})}},{key:"render",value:function render(){var e=this.props,t=e.isExpired,n=e.daysLeft,r=e.location,o=e.showPaidTrialCTA,c=!t,i=this.isExpiryBannerClosed();return this.state.hidden?null:a.a.createElement("div",{className:p.a.leTrialBanner},a.a.createElement("div",{className:p.a.leTrialBannerRelative},a.a.createElement(l.a,{location:r,isExpired:t,daysLeft:n,showCloseButton:c,expiryBannerClosed:i,closeExpiryBanner:this.closeExpiryBanner,trackingSource:"learningEnvironment",showPaidTrialCTA:o})))}}]),LeTrialBanner}();t.a=Object(c.connect)(function mapStateToProps(e){var t=Object(i.u)(e),n=Object(i.h)(e),r=Object(i.y)(e);return{isExpired:t,daysLeft:n,location:Object(s.d)(e),showPaidTrialCTA:r}})(f)},EMAT:function(e,t,n){"use strict";var r=n("o0o1"),o=n.n(r),a=n("q1tI"),c=n.n(a),i=n("/MKj"),s=n("FNm2"),l=n("T2dD"),u=n("TSYQ"),p=n.n(u),f=n("rIqd"),m=n("Zmyp"),_=n("nGyu"),d=n("Jg3q"),y=n.n(d);var b=function TOCButton(e){var t=e.review,n=void 0===t?{title:""}:t,r=e.title,o=e.className,a=e.index,i=e.onClick;return c.a.createElement("button",{className:y.a.button,onClick:function onClick(){return i(a)},type:"button",title:r||n.title},c.a.createElement(_.a,{text:r||n.title,className:p()(y.a.title,o),darkTheme:!0}))},h=n("y1Qn"),v=n("iTHK"),w=n.n(v);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var k=function ReviewCard(e){var t=e.review,n=e.className,r=e.props;return c.a.createElement("div",_extends({className:p()(w.a.reviewCard,n),key:t.id},r),c.a.createElement(_.a,{text:t.title,className:p()(w.a.contentContainer,w.a.title)}),(t&&t.code_snippets||[]).length>0&&t.code_snippets.map(function(e){return c.a.createElement("div",{key:e.text,className:w.a.codeBlockContainer},c.a.createElement(h.default,{language:e.language},e.text))}),c.a.createElement(_.a,{text:t.body,className:w.a.contentContainer}))},g=n("bBk9"),C=n.n(g),P=n("d02M"),O=n.n(P);function CompleteCard_extends(){return(CompleteCard_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=function CompleteCard(e){var t=e.className,n=e.imageClassName,r=e.onComplete,o=e.props;return c.a.createElement("div",CompleteCard_extends({className:p()(C.a.completeCard,t)},o),c.a.createElement("img",{src:O.a,className:p()(C.a.image,n),alt:"review complete"}),c.a.createElement("h2",{className:C.a.title},"Review Complete!"),c.a.createElement("p",{className:C.a.description},"Great job! Make sure you practice these concepts"),c.a.createElement(f.a,{theme:"brand-purple",block:!0,className:C.a.button,onClick:r},"Continue"))},S=n("Ne82"),x=n.n(S);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_defineProperty(e,t,n[t])})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var A=function(e){function ReviewDeck(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ReviewDeck);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(ReviewDeck)).call.apply(e,[this].concat(r)))).state={highlightedIndex:0},t.cardElements={},t.getCardPositions=function(){return Object.values(t.cardElements).map(function(e){return e.current.getBoundingClientRect().top-.3*window.innerHeight})},t.scrollListener=function(){var e=t.getCardPositions(),n=e.reverse().findIndex(function(e){return-1===Math.sign(e)}),r=e.length-(n+1);t.state.highlightedIndex!==r&&t.setState({highlightedIndex:r})},t.onTocClick=function(e){var n=t.cardElements[e].current.getBoundingClientRect();window.scrollBy({top:n.top-.15*window.innerHeight,behavior:"smooth"})},t.withActiveClass=function(e,n){return e===t.state.highlightedIndex?n:""},t.onLogoClick=function(){t.props.track("click",{page_name:"web_review",target:"web_review_dashboard"})},t.onSkipReviewClicked=function(){t.props.track("click",{page_name:"web_review",target:"web_review_skip_to_practice"}),t.props.onComplete()},t.onCompleteCardClick=function(){t.props.track("click",{page_name:"web_review",target:"web_review_complete"}),t.props.track("complete",{page_name:"web_review"}),t.props.onComplete()},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(ReviewDeck,a["Component"]),function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(ReviewDeck,[{key:"componentWillMount",value:function componentWillMount(){var e=this.props.reviews,t=e.reduce(function(e,t,n){return _objectSpread({},e,{[n]:Object(a.createRef)()})},{});this.cardElements=_objectSpread({},t,{[e.length]:Object(a.createRef)()})}},{key:"componentDidMount",value:function componentDidMount(){window.addEventListener("scroll",this.scrollListener),this.props.track("visit",{page_name:"web_review"})}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("scroll",this.scrollListener)}},{key:"render",value:function render(){var e=this,t=this.props.reviews;return t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{logoTracking:this.onLogoClick,center:c.a.createElement("p",{className:x.a.title},"Review"),right:c.a.createElement(f.a,{flat:!0,theme:"white",className:x.a.skipButton,onClick:this.onSkipReviewClicked},"Skip"),className:x.a.header}),c.a.createElement("div",{className:x.a.container},c.a.createElement("div",{className:x.a.tocContainer},t.map(function(t,n){return c.a.createElement(b,{review:t,index:n,className:e.withActiveClass(n,x.a.activeTocTitle),key:t.id,onClick:e.onTocClick})}),c.a.createElement(b,{title:"Review Complete",index:t.length,className:p()(this.withActiveClass(t.length,x.a.activeTocTitle),x.a.tocCompleteButton),onClick:this.onTocClick})),c.a.createElement("div",{className:x.a.reviewCardsContainer},t.map(function(t,n){return c.a.createElement(k,{review:t,props:{ref:e.cardElements[n]},key:t.id,className:e.withActiveClass(n,x.a.activeReviewCard)})}),c.a.createElement(E,{props:{ref:this.cardElements[t.length]},className:this.withActiveClass(t.length,x.a.activeReviewCard),imageClassName:this.withActiveClass(t.length,x.a.reviewCompleteImageActive),onComplete:this.onCompleteCardClick})))):null}}]),ReviewDeck}(),j=n("rsr4"),T=n("SiG5"),D=n("b26m"),R=n("xHEs"),B=n("u6zU"),I=n("kMZu"),N=n("kKbT"),L=n.n(N),M=n("B4lf"),K=n.n(M);var q=function Summary(e){return e.track("visit",{page_name:"web_practice_summary"}),c.a.createElement(I.a,null,c.a.createElement("div",{className:K.a.container},c.a.createElement("h2",{className:K.a.title},"Your practice summary"),c.a.createElement("ul",{className:K.a.list},e.reviews.map(function(t){return c.a.createElement("li",{className:K.a.listItem,key:t.id},c.a.createElement(_.a,{text:t.title,darkTheme:!0}),c.a.createElement("div",{className:K.a.status},e.incorrectReviewCardIds.includes(t.id)?c.a.createElement("img",{src:L.a,className:K.a.shrugIcon,alt:"challenging concept status"}):c.a.createElement(R.a,{color:B.a.green[400],height:24,width:24})))})),c.a.createElement(f.a,{block:!0,theme:"brand-purple",className:K.a.primaryButton,onClick:function onClick(){e.nextContentItemRequested(),e.track("click",{target:"web_practice_summary_move_forward",page_name:"web_practice_summary"})}},"Keep Moving Forward"),c.a.createElement(f.a,{block:!0,theme:"white",outline:!0,onClick:function onClick(){e.track("click",{target:"web_practice_summary_practice",page_name:"web_practice_summary"}),window.location.reload()}},"Practice More")))};function AssessmentDeck_typeof(e){return(AssessmentDeck_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,r,o,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,r,o,_next,_throw,"throw",e)}_next(void 0)})}}function AssessmentDeck_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){AssessmentDeck_defineProperty(e,t,n[t])})}return e}function AssessmentDeck_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function AssessmentDeck_defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function AssessmentDeck_possibleConstructorReturn(e,t){return!t||"object"!==AssessmentDeck_typeof(t)&&"function"!=typeof t?function AssessmentDeck_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function AssessmentDeck_getPrototypeOf(e){return(AssessmentDeck_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function AssessmentDeck_setPrototypeOf(e,t){return(AssessmentDeck_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var U={isCorrect:!1,feedback:void 0,canCheckAnswer:!1,answered:!1},Z=function(e){function AssessmentDeck(){var e,t;!function AssessmentDeck_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AssessmentDeck);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=AssessmentDeck_possibleConstructorReturn(this,(e=AssessmentDeck_getPrototypeOf(AssessmentDeck)).call.apply(e,[this].concat(r)))).state=AssessmentDeck_objectSpread({currentIndex:0,assessments:t.props.assessments,incorrectReviewCardIds:[],isSummaryVisible:!1},U),t.onChange=function(e){return t.setState(e)},t.onAnswered=function(){var e=t.getCurrentAssessment()||{};t.setState({answered:!0}),t.props.track("click",{target:"web_practice_check_answer",assessment_id:e.id,page_name:"web_practice"}),t.props.track("submit",{type:"assessment",correct:t.state.isCorrect,assessment_id:e.id,page_name:"web_practice"})},t.getStateAfterAnswerEvaluation=_asyncToGenerator(o.a.mark(function _callee(){var e;return o.a.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(t.state.isCorrect){n.next=5;break}return e=t.getCurrentAssessment(),n.next=5,t.setState(function(t){var n=e&&e.review&&e.review.id;return{assessments:_toConsumableArray(t.assessments).concat([e]),incorrectReviewCardIds:Array.from(new Set(_toConsumableArray(t.incorrectReviewCardIds).concat([n||""]))).filter(Boolean)}},function(){return t.state});case 5:return n.abrupt("return",t.state);case 6:case"end":return n.stop()}},_callee,this)})),t.currentIndexIncreased=_asyncToGenerator(o.a.mark(function _callee2(){var e,n,r,a;return o.a.wrap(function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.getStateAfterAnswerEvaluation();case 2:if(e=o.sent,n=e.currentIndex,r=e.assessments,a=n+1>=r.length,t.props.track("click",{target:"web_practice_next",page_name:"web_practice"}),!a){o.next=11;break}return t.setState({isSummaryVisible:!0}),t.props.track("complete",{type:"practice_pack",page_name:"web_practice"}),o.abrupt("return");case 11:t.setState(function(e){return AssessmentDeck_objectSpread({currentIndex:e.currentIndex+1},U)});case 12:case"end":return o.stop()}},_callee2,this)})),t.getCurrentAssessment=function(){var e=t.state;return e.assessments[e.currentIndex]},t.onLogoClick=function(){t.props.track("click",{page_name:"web_practice",target:"web_practice_dashboard"})},t}return function AssessmentDeck_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&AssessmentDeck_setPrototypeOf(e,t)}(AssessmentDeck,a["Component"]),function AssessmentDeck_createClass(e,t,n){return t&&AssessmentDeck_defineProperties(e.prototype,t),n&&AssessmentDeck_defineProperties(e,n),e}(AssessmentDeck,[{key:"componentDidMount",value:function componentDidMount(){this.props.track("visit",{page_name:"web_practice"})}},{key:"render",value:function render(){var e=this.props,t=e.track,n=e.nextContentItemRequested,r=this.state,o=r.currentIndex,a=r.canCheckAnswer,i=r.isCorrect,s=r.feedback,l=r.answered,u=r.assessments,p=r.isSummaryVisible,f=r.incorrectReviewCardIds;if(p){var _=this.props.assessments.map(function(e){return e.review});return c.a.createElement(q,{incorrectReviewCardIds:f,reviews:_,track:t,nextContentItemRequested:n})}return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{center:c.a.createElement(T.a,{percent:o/(u.length-1)}),right:c.a.createElement(j.a,{bugReportData:{assessmentId:this.getCurrentAssessment().id}}),onLogoClick:this.onLogoClick}),c.a.createElement(D.a,{index:o,assessment:this.getCurrentAssessment(),canCheckAnswer:a,isCorrect:i,feedback:s,onCheckAnswer:this.onAnswered,answered:l,onNext:this.currentIndexIncreased,onChange:this.onChange}))}}]),AssessmentDeck}(),G=n("fMno"),z=n.n(G);function practicePack_typeof(e){return(practicePack_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function practicePack_asyncGeneratorStep(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function practicePack_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){practicePack_defineProperty(e,t,n[t])})}return e}function practicePack_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function practicePack_defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function practicePack_possibleConstructorReturn(e,t){return!t||"object"!==practicePack_typeof(t)&&"function"!=typeof t?function practicePack_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function practicePack_getPrototypeOf(e){return(practicePack_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function practicePack_setPrototypeOf(e,t){return(practicePack_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var V={userVisit:l.h,userClick:l.f,practiceCompleted:l.e,userSubmit:l.g},W=function(e){function PracticePack(){var e,t;!function practicePack_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PracticePack);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=practicePack_possibleConstructorReturn(this,(e=practicePack_getPrototypeOf(PracticePack)).call.apply(e,[this].concat(r)))).state={isReviewCompleted:!1,practicePack:void 0},t.completeReview=function(){return t.setState({isReviewCompleted:!0})},t.track=function(e,n,r){({click:t.props.userClick,visit:t.props.userVisit,complete:t.props.practiceCompleted,submit:t.props.userSubmit})[e](practicePack_objectSpread({},"complete"===e?practicePack_objectSpread({},n):{data:n},{ids:r}))},t.getReviews=function(e){return e.items.map(function(e){return e.review})},t.getAssessments=function(e){return e.items.map(function(e){return practicePack_objectSpread({},e.assessment,{review:e.review})})},t}return function practicePack_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&practicePack_setPrototypeOf(e,t)}(PracticePack,a["Component"]),function practicePack_createClass(e,t,n){return t&&practicePack_defineProperties(e.prototype,t),n&&practicePack_defineProperties(e,n),e}(PracticePack,[{key:"componentDidMount",value:function(){var e=function practicePack_asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function _next(e){practicePack_asyncGeneratorStep(a,r,o,_next,_throw,"next",e)}function _throw(e){practicePack_asyncGeneratorStep(a,r,o,_next,_throw,"throw",e)}_next(void 0)})}}(o.a.mark(function _callee(){var e=this;return o.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)({endpoint:"/recommendations/v1/practice",query:{id:this.props.currentContentItem.id,container_type:"lesson",include_ecas:!0}}).then(Object(s.b)({errorMessage:"practice pack fetch failed for ".concat(this.props.currentContentItem.id),logAndSwallowErrors:!0})).then(function(t){return e.setState({practicePack:t})});case 2:case"end":return t.stop()}},_callee,this)}));return function componentDidMount(){return e.apply(this,arguments)}}()},{key:"render",value:function render(){var e=this.props.nextContentItemRequested,t=this.state,n=t.isReviewCompleted,r=t.practicePack;if(!r)return null;var o=this.getAssessments(r),a=this.getReviews(r);return c.a.createElement("div",{className:z.a.container},n?c.a.createElement(Z,{assessments:o,track:this.track,nextContentItemRequested:e}):c.a.createElement(A,{reviews:a,onComplete:this.completeReview,track:this.track}))}}]),PracticePack}();t.a=Object(i.connect)(null,V)(W)},Jg3q:function(e,t,n){e.exports={button:"button__3iFlGlOfV8_9-4lk_MKmVE",title:"title__21Pwg19HZU_72bYfQLOrII"}},Ne82:function(e,t,n){e.exports={header:"header__2v9_bK_rcKnBrRbwCOIi2Z",skipButton:"skipButton__3XMM2_Gyzt9NzrmAzi7zhP",title:"title__1lw5wpZ33kCqMPcpfbDoIS",container:"container__2B2mnZp-6si2ELLqE3sXDL",reviewCardsContainer:"reviewCardsContainer__3B4BriM5wSfFBnPXqWvCfN",tocContainer:"tocContainer__2C_XTaC1m1CxmtXY5NoelK",activeReviewCard:"activeReviewCard__39cY6t87zqxERHqQtvsqG2",activeTocTitle:"activeTocTitle__2JjYZ5C3f6SSh_oVSaMrYw",tocCompleteButton:"tocCompleteButton__StUtUJZN61jfcLf7pWwwN",reviewCompleteImageActive:"reviewCompleteImageActive__2CbWsvVkbEgUYbFg5TMbIb",swell:"swell__3dWzgP7EESfLQxUwFctckm"}},UCeZ:function(e,t,n){e.exports={leTrialBanner:"leTrialBanner__3VOkodnhfWeF-L5t7tA6KV",leTrialBannerRelative:"leTrialBannerRelative__3mIq5_XeADd_mE-8hSnMet"}},bBk9:function(e,t,n){e.exports={completeCard:"completeCard__lUPJYEXZOu_aoY9HyQkm4",image:"image__3g8L-SsRSmaUVUfI4li0Qs",button:"button__34X6LTv9Ro_L4afzwl0tcc",title:"title__1SqhsVujoDB-EDW0_PKvD1",description:"description__39X8g4hxhgZyzvax2VlaAS"}},d02M:function(e,t,n){e.exports=n.p+"2bb7b919d5034cba1449693d1d384c3e.png"},fMno:function(e,t,n){e.exports={container:"container__3LTWRVA2gKPRy_dJqaKghx"}},iTHK:function(e,t,n){e.exports={reviewCard:"reviewCard__3gXGIPZ8tJOOEjMv1R-1B8",contentContainer:"contentContainer__2hEj4x_mUkp45eKtQZ6Qz_",title:"title__1UrLWR1mLVquTK5MQ3KQ6S",codeBlockContainer:"codeBlockContainer__18UM7gf5ag683hZZSNi29R"}},kKbT:function(e,t,n){e.exports=n.p+"5603bfb9dc5161bcb339d058e4084506.svg"}}]);
//# sourceMappingURL=144.4dc7044d4e8c23ade7e0.chunk.js.map
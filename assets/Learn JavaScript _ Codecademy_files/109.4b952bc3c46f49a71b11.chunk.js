(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[109],{"3MAA":function(e,t,r){e.exports={dragAnswer:"dragAnswer__155EHBADnIZVNNnbZnVXiE",dragAnswerList:"dragAnswerList__21R3bL8OzQkVWDkzS-SQPt",dragAnswerSurroundingListItem:"dragAnswerSurroundingListItem__1ZW6IqhiV1qQIodDOQ2u7b",dragAnswerDragging:"dragAnswerDragging__3uCECMm0Nf4Kbsf9snODqg",explanation:"explanation__8VFmAG2p-gKT6Bt6w4AAI",dragAnswerDropped:"dragAnswerDropped__2chxcjpcJqIbiqz9dl2IyF"}},Jq0N:function(e,t,r){e.exports={container:"container__2-8VOPaA031ycPslzGbMCq",assessmentContainer:"assessmentContainer__2c-hykrF8Z4rZtvaI_Rpfr"}},KK8Z:function(e,t,r){e.exports={codeBlock:"codeBlock__3BmC2Ep4l-IJw14DpH9DAF",mathBlock:"mathBlock__3gVlKI9Ikv2QRBJlPkp1sq",imageContainer:"imageContainer__1mF2fyABfjDFtr4S1cdzKD",image:"image__1aoKBh2LPZxZiB4QXzcfMr"}},L4JP:function(e,t,r){e.exports={dragTarget:"dragTarget__3kKBwpuetUyQ0Z0ejZegb9",isError:"isError__3EyG5RLkNWsGmRmbwQ__Lb",isCorrect:"isCorrect__3aMtDPBSpom-3JvGRUr1k4",isHighlightedHint:"isHighlightedHint__2rpLYL8edpGBWqnI5aPMkP",dragTargetActive:"dragTargetActive__3TmgToBE2pSqEU5IOhFZ9y"}},ODd9:function(e,t,r){e.exports={container:"container__2ZkNUvVpS2bqFetXuLBHoA"}},OJqt:function(e,t,r){e.exports={answerFeedback:"answerFeedback__f1Y4hvKmOc4yK7pc4BPIX",markdownContainer:"markdownContainer__1wQOy7lHeAaUv9IXHzOlfc"}},QbXM:function(e,t,r){e.exports={container:"container__3M91uhwpGTJe92wMn8jAZq",label:"label__2xFo_wajxXeT2VlZraCjJC",barContainer:"barContainer__2UtncDC_qTsINg7-8uZ4HF",over:"over__1Z--GbqpV9Vo7ozJC5xI0X",under:"under__3KC2mcSalFKogCqsO-Mk9U",overWithBorderRadius:"overWithBorderRadius__1Dex2-SwqQ2ILmSImtROiH"}},SiG5:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("TSYQ"),i=r.n(a),s=r("QbXM"),c=r.n(s);t.a=function ProgressBar(e){return o.a.createElement("div",{className:c.a.container},e.label&&o.a.createElement("div",{className:c.a.label},e.label),o.a.createElement("div",{className:c.a.barContainer},o.a.createElement("div",{className:c.a.under}),o.a.createElement("div",{className:i()(c.a.over,{["".concat(c.a.overWithBorderRadius)]:e.percent>=1}),style:{width:"".concat(100*e.percent,"%")}})))}},ZEKG:function(e,t,r){e.exports=r.p+"4903cc51ea64da193dde23f6afbf6471.png"},Zmyp:function(e,t,r){"use strict";var n=r("/MKj"),o=r("tKnm"),a=r("q1tI"),i=r.n(a),s=r("TSYQ"),c=r.n(s),l=r("xJk8"),u=r("TVOw"),p=r("FD1T"),f=r("/MNd"),d=r("wbo1"),g=r.n(d);var y=function Header(e){return i.a.createElement(p.b,{className:c()(g.a.container,e.className)},i.a.createElement(f.a,{position:"left"},i.a.createElement("a",{href:u.p,className:g.a.logo,onClick:e.logoTracking},i.a.createElement(l.a,{type:e.isPro?"pro":"default",color:"white"}))),i.a.createElement(f.a,{position:"center",className:g.a.centerSection},e.center),i.a.createElement(f.a,{position:"right"},e.right))};t.a=Object(n.connect)(function mapStateToProps(e){return{isPro:Object(o.r)(e)}})(y)},b26m:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("kMZu"),i=r("Efxr"),s=r("rIqd"),c=r("nGyu"),l=r("OJqt"),u=r.n(l);var p=function Feedback(e){return o.a.createElement("div",{className:u.a.answerFeedback,"data-testid":"check-answer-incorrect"},o.a.createElement(c.a,{text:e.text||"",className:u.a.markdownContainer}))},f=r("ZEKG"),d=r.n(f),g=r("uMYt"),y=r.n(g),b=i.b.div({enter:{y:"0%",transition:{duration:900,ease:[.19,1,.22,1]}},exit:{y:"calc(3.25rem + 100%)",transition:{duration:250}}}),_=i.b.div({enter:{y:"0%",opacity:1,transition:{duration:650,ease:[.19,1,.22,1]}},exit:{y:"60%",opacity:0,transition:{duration:500}}}),h=i.b.div({enter:{opacity:1,transition:{duration:500}},exit:{opacity:0,transition:{duration:250}}});var m=function CheckAnswer(e){var t=e.isVisible,r=e.isCorrect,n=e.canContinue,c=e.feedback,l=e.onCheckAnswer,u=e.onNext;return o.a.createElement("div",{className:y.a.container},o.a.createElement(i.a,null,o.a.createElement(h,{key:"gradient",className:y.a.gradient,pose:t?"enter":"exit"})),o.a.createElement(a.a,null,o.a.createElement(i.a,null,o.a.createElement(_,{key:"reason",pose:t&&n?"enter":"exit"},r?o.a.createElement("div",{className:y.a.youGotItContainer,"data-testid":"check-answer-correct"},o.a.createElement("img",{src:d.a,className:y.a.youGotItImage,alt:"you got it"})):Boolean(c)&&o.a.createElement(p,{text:c})),o.a.createElement(b,{key:"check-answer",pose:t?"enter":"exit",className:y.a.checkAnswer},o.a.createElement(s.a,{block:!0,theme:"blue",onClick:n?u:l,"data-testid":"check-answer-cta"},n?"Continue":"Check Answer")))))},w=r("yZBc"),C=r("UsXb"),v=function ensureEnterKeypress(e){return function(t){return t.key&&"enter"===t.key.toLowerCase()&&e(t)}},O="fitb-locator",A=r("i8i4"),P=r("TSYQ"),D=r.n(P),k=function onMouseDown(e){return function(t){var r=e||{},n=r.onDragStart,o=void 0===n?function(){}:n,a=r.onEnterDroppable,i=void 0===a?function(){}:a,s=r.onLeaveDroppable,c=void 0===s?function(){}:s,l=r.onDrop,u=void 0===l?function(e){}:l,p=t.currentTarget;p.ondragstart=function(){return!1};var f=t.clientX,d=t.clientY,g=p.getBoundingClientRect(),y=g.width,b=g.height,_=g.left,h=g.top,m=f-_,w=d-h,C=p.cloneNode(!0);C.style.position="absolute",C.style.zIndex=1e3,C.style.width="".concat(y,"px"),C.style.height="".concat(b,"px");var v,O=function moveElement(e){var t=e.pageX,r=e.pageY;C.style.left="".concat(t-m,"px"),C.style.top="".concat(r-w,"px")};O({pageX:t.pageX,pageY:t.pageY});var A=function mouseMoveListener(e){O({pageX:e.pageX,pageY:e.pageY}),C.hidden=!0;var t=document.elementFromPoint(e.clientX,e.clientY);if(C.hidden=!1,t){var r=t.closest("[data-droppable]");r&&v!==r&&(v&&c(),(v=r)&&i(v.dataset&&v.dataset.droppable))}},P=function convertToDragEvent(e){var t=e.pageX,r=e.pageY;Math.abs(t-f)+Math.abs(r-d)>5&&(o(),document.body.append(C),document.removeEventListener("mousemove",convertToDragEvent),document.addEventListener("mousemove",A),C.onmouseup=function(){v&&v.dataset&&v.dataset.droppable?u(v.dataset.droppable):u(),document.removeEventListener("mousemove",A),document.body.removeChild(C)},document.removeEventListener("mousemove",convertToDragEvent))};document.addEventListener("mousemove",P),document.addEventListener("mouseup",function onMouseUp(){document.removeEventListener("mousemove",P),document.body.contains(C)&&document.body.removeChild(C),document.removeEventListener("mouseup",onMouseUp)})}},T=r("3MAA"),S=r.n(T);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function Answer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Answer),_possibleConstructorReturn(this,_getPrototypeOf(Answer).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Answer,n["Component"]),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Answer,[{key:"render",value:function render(){var e=this.props,t=e.id,r=e.onEnterDroppable,n=e.onLeaveDroppable,a=e.onDrop,i=e.onDragStart,s=e.onClick,c=e.text,l=e.dragging,u=e.isDroppedInDragTarget,p=e.preventDrag,f=l===t,d=D()({[S.a.dragAnswerDragging]:f,[S.a.dragAnswerDropped]:u},S.a.dragAnswer);return o.a.createElement(w.a,{flipId:f?void 0:t,translate:!0},o.a.createElement("button",{onClick:function onClick(){return s(t)},className:d,onMouseDown:p?void 0:k({onDragStart:function onDragStart(){return i&&i(t)},onEnterDroppable:r,onLeaveDroppable:n,onDrop:a})},c))}}]),Answer}(),I=r("L4JP"),x=r.n(I);function DragTarget_typeof(e){return(DragTarget_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function DragTarget_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function DragTarget_possibleConstructorReturn(e,t){return!t||"object"!==DragTarget_typeof(t)&&"function"!=typeof t?function DragTarget_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function DragTarget_getPrototypeOf(e){return(DragTarget_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function DragTarget_setPrototypeOf(e,t){return(DragTarget_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function DragTarget(){return function DragTarget_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DragTarget),DragTarget_possibleConstructorReturn(this,DragTarget_getPrototypeOf(DragTarget).apply(this,arguments))}return function DragTarget_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&DragTarget_setPrototypeOf(e,t)}(DragTarget,n["Component"]),function DragTarget_createClass(e,t,r){return t&&DragTarget_defineProperties(e.prototype,t),r&&DragTarget_defineProperties(e,r),e}(DragTarget,[{key:"render",value:function render(){var e=this.props,t=e.contents,r=e.onClick,n=e.contentsId,a=e.isHighlightedHint,i=e.isCorrect,s=e.showAnswers,c=e.index,l=e.onDrop,u=e.onDragStart,p=e.onEnterDroppable,f=e.onLeaveDroppable,d=D()({[x.a.dragTargetActive]:this.props.isHovered,[x.a.isCorrect]:s&&i,[x.a.isError]:s&&!1===i,[x.a.isHighlightedHint]:a},[x.a.dragTarget]);return o.a.createElement("span",{className:d,"data-droppable":c},t&&o.a.createElement(E,{preventDrag:Boolean(s),text:t,onClick:r,onDragStart:u,onEnterDroppable:p,onLeaveDroppable:f,onDrop:l,id:n,isDroppedInDragTarget:!0},t))}}]),DragTarget}();function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var M=function DragTargetPortal(e){var t=e.containerEl,r=_objectWithoutProperties(e,["containerEl"]);return Object(A.createPortal)(o.a.createElement(j,r),t)};function DragTargets_typeof(e){return(DragTargets_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function DragTargets_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function DragTargets_possibleConstructorReturn(e,t){return!t||"object"!==DragTargets_typeof(t)&&"function"!=typeof t?function DragTargets_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function DragTargets_getPrototypeOf(e){return(DragTargets_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function DragTargets_setPrototypeOf(e,t){return(DragTargets_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var B=function(e){function DragTargets(){var e,t;!function DragTargets_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DragTargets);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=DragTargets_possibleConstructorReturn(this,(e=DragTargets_getPrototypeOf(DragTargets)).call.apply(e,[this].concat(n)))).getBlankContents=function(e){if(!e)return"";var r=e.split("-")[0],n=parseInt(e.split("-")[1],10);return"decoy"===r?t.props.decoyAnswers[n]:"correct"===r?t.props.answers[n].text:void 0},t}return function DragTargets_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&DragTargets_setPrototypeOf(e,t)}(DragTargets,n["Component"]),function DragTargets_createClass(e,t,r){return t&&DragTargets_defineProperties(e.prototype,t),r&&DragTargets_defineProperties(e,r),e}(DragTargets,[{key:"render",value:function render(){var e=this,t=this.props,r=t.blankContainers,n=t.userAnswers,a=t.onDragTargetClick,i=t.onDrop,s=t.isAnswerCorrect,c=t.showAnswers,l=t.highlightedHintIndex,u=t.hoveredTargetIndex,p=t.onDragStart,f=t.onEnterDroppable,d=t.onLeaveDroppable;return r.map(function(t,r){var g=n[r],y=e.getBlankContents(g);return o.a.createElement(M,{key:"".concat(g,"-").concat(r),index:r,isHovered:u===r,isCorrect:s(r),contentsId:g,containerEl:t,contents:y,isHighlightedHint:l===r,onClick:function onClick(){c&&s(r)||a(r)},onKeyPress:v(function(){return a(r)}),showAnswers:c,onDrop:i,onDragStart:p,onEnterDroppable:f,onLeaveDroppable:d})})}}]),DragTargets}();function DraggableAnswers_typeof(e){return(DraggableAnswers_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function DraggableAnswers_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function DraggableAnswers_possibleConstructorReturn(e,t){return!t||"object"!==DraggableAnswers_typeof(t)&&"function"!=typeof t?function DraggableAnswers_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function DraggableAnswers_getPrototypeOf(e){return(DraggableAnswers_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function DraggableAnswers_setPrototypeOf(e,t){return(DraggableAnswers_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){function DraggableAnswers(){var e,t;!function DraggableAnswers_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DraggableAnswers);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=DraggableAnswers_possibleConstructorReturn(this,(e=DraggableAnswers_getPrototypeOf(DraggableAnswers)).call.apply(e,[this].concat(n)))).getAvailableAnswers=function(e){var t=e.decoyAnswers,r=e.answers,n=e.userAnswers,o=Object.values(n);return t.filter(function(e){return e}).map(function(e,t){return{id:"decoy-".concat(t),text:e}}).concat(r.map(function(e,t){var r=e.text;return{id:"correct-".concat(t),text:r}})).filter(function(e){var t=e.id;return!o.includes(t)})},t}return function DraggableAnswers_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&DraggableAnswers_setPrototypeOf(e,t)}(DraggableAnswers,n["Component"]),function DraggableAnswers_createClass(e,t,r){return t&&DraggableAnswers_defineProperties(e.prototype,t),r&&DraggableAnswers_defineProperties(e,r),e}(DraggableAnswers,[{key:"render",value:function render(){var e=this.props,t=e.dragging,r=e.onAnswerClick,n=e.onDragStart,a=e.decoyAnswers,i=e.answers,s=e.userAnswers,c=e.onDrop,l=e.onEnterDroppable,u=e.onLeaveDroppable,p=this.getAvailableAnswers({decoyAnswers:a,answers:i,userAnswers:s});return o.a.createElement("div",null,o.a.createElement("ul",{className:S.a.dragAnswerList,"data-testid":"answer-list"},p.map(function(e){var a=e.text,i=e.id;return o.a.createElement("li",{className:S.a.dragAnswerSurroundingListItem,key:i},o.a.createElement(E,{text:a,id:i,dragging:t,onClick:r,onDragStart:n,onDrop:c,onEnterDroppable:l,onLeaveDroppable:u}))})),o.a.createElement("p",{className:S.a.explanation},"Click or drag and drop to fill in the blank"))}}]),DraggableAnswers}(),F=r("KAy6"),L=r.n(F),R=r("y1Qn"),H=r("q6Ja"),K=r.n(H);function ModifiedCodeBlock_typeof(e){return(ModifiedCodeBlock_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ModifiedCodeBlock_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ModifiedCodeBlock_possibleConstructorReturn(e,t){return!t||"object"!==ModifiedCodeBlock_typeof(t)&&"function"!=typeof t?function ModifiedCodeBlock_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ModifiedCodeBlock_getPrototypeOf(e){return(ModifiedCodeBlock_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ModifiedCodeBlock_setPrototypeOf(e,t){return(ModifiedCodeBlock_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var q="fitbblankgoeshere",Z=function(e){function ModifiedCodeBlock(){var e,t;!function ModifiedCodeBlock_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ModifiedCodeBlock);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=ModifiedCodeBlock_possibleConstructorReturn(this,(e=ModifiedCodeBlock_getPrototypeOf(ModifiedCodeBlock)).call.apply(e,[this].concat(a)))).state={codeBlockContent:""},t.codeBlockRef=Object(n.createRef)(),t.getBlankContainers=function(){var e=_toConsumableArray(t.codeBlockRef.current.querySelectorAll(".".concat(O))).map(function(e){return e.innerHTML="",e});t.props.setBlankContainers(e)},t.generateCodeBlock=function(){var e=t.props,r=e.snippetTemplate,n=e.codeLanguage,a=r&&r.replace(/__~BLANK~__/g,q),i=o.a.createElement(R.default,{language:n,overflowVisible:!0},a),s=L.a.renderToString(i).replace(new RegExp(q,"g"),"<span class=".concat(O,"></span>"));t.setState({codeBlockContent:s},t.getBlankContainers)},t}return function ModifiedCodeBlock_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ModifiedCodeBlock_setPrototypeOf(e,t)}(ModifiedCodeBlock,n["Component"]),function ModifiedCodeBlock_createClass(e,t,r){return t&&ModifiedCodeBlock_defineProperties(e.prototype,t),r&&ModifiedCodeBlock_defineProperties(e,r),e}(ModifiedCodeBlock,[{key:"componentDidMount",value:function componentDidMount(){this.generateCodeBlock()}},{key:"render",value:function render(){return o.a.createElement("div",{ref:this.codeBlockRef,className:K.a.codeContainer,dangerouslySetInnerHTML:{__html:this.state.codeBlockContent}})}}]),ModifiedCodeBlock}();function FillInTheCode_typeof(e){return(FillInTheCode_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function FillInTheCode_objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function FillInTheCode_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _toPropertyKey(e){var t=function _toPrimitive(e,t){if("object"!==FillInTheCode_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==FillInTheCode_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===FillInTheCode_typeof(t)?t:String(t)}function FillInTheCode_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function FillInTheCode_possibleConstructorReturn(e,t){return!t||"object"!==FillInTheCode_typeof(t)&&"function"!=typeof t?function FillInTheCode_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function FillInTheCode_getPrototypeOf(e){return(FillInTheCode_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function FillInTheCode_setPrototypeOf(e,t){return(FillInTheCode_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function FillInTheCode(){var e,t;!function FillInTheCode_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FillInTheCode);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=FillInTheCode_possibleConstructorReturn(this,(e=FillInTheCode_getPrototypeOf(FillInTheCode)).call.apply(e,[this].concat(n)))).state={userAnswers:{},blankContainers:[],highlightedHintIndex:void 0,dragging:void 0,hoveredTargetIndex:void 0,feedback:void 0},t.canSubmit=function(){return Object.keys(t.state.userAnswers).length===t.props.assessment.answers.length},t.isAnswerCorrect=function(e){var r=t.state.userAnswers,n=t.props.assessment.answers;if(!r[e]||r[e].includes("decoy"))return!1;var o=r[e].split("-")[1];return(n[o]&&n[o].text)===n[e].text},t.allAnswersAreCorrect=function(){var e=t.props.assessment,r=Object.keys(t.state.userAnswers);return!(r.length<e.answers.length)&&r.map(function(e,r){return t.isAnswerCorrect(r)}).every(Boolean)},t.setCurrentHintIndex=function(){return Object.keys(t.state.userAnswers).find(function(e){return!t.isAnswerCorrect(Number(e))})},t.getAnswerHint=function(e){var r=t.props.assessment;return r.answers[e]&&r.answers[e].hint},t.onChange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.setState(e,function(){t.props.onChange({canCheckAnswer:t.canSubmit(),feedback:t.state.feedback,isCorrect:t.allAnswersAreCorrect()})})},t.setBlankContainers=function(e){return t.setState({blankContainers:e})},t.onDragTargetClick=function(e){t.props.answered?t.onChange({highlightedHintIndex:e,feedback:t.getAnswerHint(e)}):t.onChange(function(t){var r=t.userAnswers;r[e];return{userAnswers:FillInTheCode_objectWithoutProperties(r,[e].map(_toPropertyKey))}})},t.onDrop=function(e){t.onChange(function(t){return{dragging:null,hoveredTargetIndex:null,userAnswers:e?_objectSpread({},t.userAnswers,{[e]:t.dragging}):t.userAnswers}})},t.onDragStart=function(e){var r=Object.keys(t.state.userAnswers).map(function(r){return t.state.userAnswers[r]===e?[r,null]:[r,t.state.userAnswers[r]]}).reduce(function(e,t){return e[t[0]]=t[1],e},{});t.setState({userAnswers:r,dragging:e})},t.onEnterDroppable=function(e){t.setState({hoveredTargetIndex:Number(e)})},t.onLeaveDroppable=function(){t.setState({hoveredTargetIndex:void 0})},t.onAnswerClick=function(e){var r=t.props.assessment,n=r.answers.map(function(e,r){return t.state.userAnswers[r]}).findIndex(function(e){return!e});n>-1?t.onChange(function(t){return{userAnswers:_objectSpread({},t.userAnswers,{[n]:e})}}):1===r.answers.length&&t.onChange({userAnswers:{0:e}})},t}return function FillInTheCode_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&FillInTheCode_setPrototypeOf(e,t)}(FillInTheCode,n["Component"]),function FillInTheCode_createClass(e,t,r){return t&&FillInTheCode_defineProperties(e.prototype,t),r&&FillInTheCode_defineProperties(e,r),e}(FillInTheCode,[{key:"componentDidUpdate",value:function componentDidUpdate(e){if(e.answered!==this.props.answered){var t=this.setCurrentHintIndex();this.onChange(_objectSpread({isCorrect:this.allAnswersAreCorrect(),feedback:this.getAnswerHint(Number(t)),canCheckAnswer:this.canSubmit()},void 0!==t&&{highlightedHintIndex:Number(t)}))}}},{key:"render",value:function render(){var e=this.props,t=e.assessment,r=e.answered,a=this.state,i=a.userAnswers,s=a.blankContainers,c=a.dragging,l=a.hoveredTargetIndex,u=a.highlightedHintIndex,p=o.a.createElement(Z,{snippetTemplate:t.snippet_template,codeLanguage:t.code_language,setBlankContainers:this.setBlankContainers});if(!s)return p;var f={answers:t.answers,decoyAnswers:t.decoy_answers||[],userAnswers:i,dragging:c,onEnterDroppable:this.onEnterDroppable,onLeaveDroppable:this.onLeaveDroppable,onDrop:this.onDrop,onDragStart:this.onDragStart,onAnswerClick:this.onAnswerClick},d=o.a.createElement(n.Fragment,null,o.a.createElement(C.a,{title:t.prompt}),p,!r&&o.a.createElement(N,f),o.a.createElement(B,_extends({},f,{blankContainers:s,onDragTargetClick:this.onDragTargetClick,showAnswers:r,isAnswerCorrect:this.isAnswerCorrect,highlightedHintIndex:r&&Number(u),hoveredTargetIndex:l})));return s.length?o.a.createElement(w.b,{portalKey:"dragndrop",flipKey:JSON.stringify({userAnswers:i,blankContainers:s,dragging:c}),spring:{stiffness:175,damping:19}},d):d}}]),FillInTheCode}(),X=r("mwIZ"),Q=r.n(X),G=r("QDco"),W=r("f+rm"),z=r("ms5n"),J=r.n(z);function Answer_typeof(e){return(Answer_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Answer_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Answer_possibleConstructorReturn(e,t){return!t||"object"!==Answer_typeof(t)&&"function"!=typeof t?function Answer_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Answer_getPrototypeOf(e){return(Answer_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Answer_setPrototypeOf(e,t){return(Answer_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function Answer(){var e,t;!function Answer_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Answer);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Answer_possibleConstructorReturn(this,(e=Answer_getPrototypeOf(Answer)).call.apply(e,[this].concat(n)))).onAnswerSelected=function(){var e=t.props,r=e.answerIndex;(0,e.onAnswerSelected)({answerIndex:r})},t}return function Answer_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Answer_setPrototypeOf(e,t)}(Answer,n["Component"]),function Answer_createClass(e,t,r){return t&&Answer_defineProperties(e.prototype,t),r&&Answer_defineProperties(e,r),e}(Answer,[{key:"render",value:function render(){var e=this.props,t=e.answer,r=e.correctAnswerIndex,n=e.answered,a=e.answerIndex,i=e.selectedIndex,s=e.highlightCorrectAnswer,l=i===a,u=r===t.originalIndex,p=D()(J.a.answer,{[J.a.answerSelected]:!n&&l,[J.a.correct]:n&&l&&u,[J.a.incorrect]:n&&l&&!u,[J.a.notSelected]:n&&!l,[J.a.correctNotSelected]:s&&n&&!l&&u});return o.a.createElement("button",{className:D()(J.a.answer,p),onClick:n?function(){}:this.onAnswerSelected,"data-testid":"multiple-choice-answer-".concat(t.originalIndex),type:"button"},o.a.createElement(c.a,{darkTheme:!0,text:t.text}))}}]),Answer}();V.defaultProps={answer:{}};var Y=V,$=r("KK8Z"),ee=r.n($);function MultipleChoice_typeof(e){return(MultipleChoice_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function MultipleChoice_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){MultipleChoice_defineProperty(e,t,r[t])})}return e}function MultipleChoice_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function MultipleChoice_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function MultipleChoice_possibleConstructorReturn(e,t){return!t||"object"!==MultipleChoice_typeof(t)&&"function"!=typeof t?function MultipleChoice_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function MultipleChoice_getPrototypeOf(e){return(MultipleChoice_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function MultipleChoice_setPrototypeOf(e,t){return(MultipleChoice_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var te=function(e){function MultipleChoice(){var e,t;!function MultipleChoice_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MultipleChoice);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=MultipleChoice_possibleConstructorReturn(this,(e=MultipleChoice_getPrototypeOf(MultipleChoice)).call.apply(e,[this].concat(n)))).state={assessment:{},selectedIndex:void 0},t.onAnswerSelected=function(e){var r=e.answerIndex,n=t.state.assessment,o=n.correct_answer,a=Q()(n,["answers",r],{}),i=a.originalIndex===o;t.setState({selectedIndex:r}),t.props.onChange({isCorrect:i,feedback:a.reason,canCheckAnswer:!0})},t}return function MultipleChoice_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&MultipleChoice_setPrototypeOf(e,t)}(MultipleChoice,n["Component"]),function MultipleChoice_createClass(e,t,r){return t&&MultipleChoice_defineProperties(e.prototype,t),r&&MultipleChoice_defineProperties(e,r),e}(MultipleChoice,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props.assessment,t=function shuffle(e){for(var t=e.length-1;t>0;t-=1){var r=Math.floor(Math.random()*(t+1)),n=[e[r],e[t]];e[t]=n[0],e[r]=n[1]}return e}(e&&e.answers.map(function(e,t){return MultipleChoice_objectSpread({},e,{originalIndex:t})}));this.setState({assessment:MultipleChoice_objectSpread({},e,{answers:t})})}},{key:"render",value:function render(){var e=this,t=this.props,r=t.answered,n=t.highlightCorrectAnswer,a=this.state.selectedIndex,i=this.state.assessment,s=i.prompt,c=i.answers,l=void 0===c?[]:c,u=i.code_snippet,p=i.correct_answer,f=i.image,d=i.latex_block;return o.a.createElement("div",null,o.a.createElement(C.a,{title:s}),u&&o.a.createElement(G.a,{language:u.language,className:ee.a.codeBlock},u.text),d&&o.a.createElement(W.a,{language:"tex",className:ee.a.mathBlock},d.text),f&&o.a.createElement("div",{className:ee.a.imageContainer},o.a.createElement("img",{src:f.url,alt:f.alt,className:ee.a.image})),l.map(function(t,i){return o.a.createElement(Y,{key:t.originalIndex,answer:t,correctAnswerIndex:p,answered:r,selectedIndex:a,answerIndex:i,onAnswerSelected:e.onAnswerSelected,highlightCorrectAnswer:n})}))}}]),MultipleChoice}();te.defaultProps={onChange:function onChange(){},answered:!1};var re=te,ne=r("Jq0N"),oe=r.n(ne);t.a=function AssessmentContainer(e){var t=e.assessment,r=e.canCheckAnswer,n=e.isCorrect,i=e.feedback,s=e.onCheckAnswer,c=e.onNext,l=e.answered,u=e.index,p=e.onChange,f=e.highlightCorrectAnswer,d={fill_in_code:o.a.createElement(U,{key:t.id+u,assessment:t,onChange:p,answered:l}),multiple_choice:o.a.createElement(re,{key:t.id+u,assessment:t,onChange:p,answered:l,highlightCorrectAnswer:f})};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:oe.a.container},o.a.createElement(a.a,{className:oe.a.assessmentContainer},d[t.type])),o.a.createElement(m,{isVisible:r,isCorrect:n,feedback:i,onCheckAnswer:s,canContinue:l,onNext:c}))}},kMZu:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("TSYQ"),i=r.n(a),s=r("ODd9"),c=r.n(s);t.a=function Container(e){return o.a.createElement("div",{className:i()(c.a.container,e.className)},e.children)}},ms5n:function(e,t,r){e.exports={answer:"answer__10-7SUQvwpIXkWp66wqf_S",correct:"correct__31olAPDSEUokD9R7dsahWi",incorrect:"incorrect__2l8o8zx18QQoWtVEyhnKuM",notSelected:"notSelected__1PKYlqf2Juib5FNSeUiqjf",answerSelected:"answerSelected__1OCPaURJB2HRb-MRTzg_Uj",correctNotSelected:"correctNotSelected__29UjEBVd1V9GKHPIdld45v"}},q6Ja:function(e,t,r){e.exports={codeContainer:"codeContainer__1pIbUcp4-AVvC4U5f3mEzg"}},uMYt:function(e,t,r){e.exports={container:"container__36jSDfZIHaBt6OZ7dpxSd8",checkAnswer:"checkAnswer__3C7xBIy14T7r2Ayg-nFIAJ",gradient:"gradient__2bgdYmOM4_blAOC2ImA1lW",youGotItContainer:"youGotItContainer__2Xp8XstvIMAIyAlI32WBwe",youGotItImage:"youGotItImage__1KFUGqLGx1i_s7XE_Kn9bS"}},wbo1:function(e,t,r){e.exports={container:"container__xxmPAuPFUsKguF73jKO3Q",logo:"logo__1-a_TiXBS6TEV02nagx3gR",centerSection:"centerSection__1R92W4oxyC1LUfW_4FNc67"}}}]);
//# sourceMappingURL=109.4b952bc3c46f49a71b11.chunk.js.map
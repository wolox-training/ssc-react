(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[17],{Eryo:function(t,e,n){"use strict";var o=n("q1tI"),i=n("i8i4"),r=n.n(i);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function Portal(){return function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Portal),_possibleConstructorReturn(this,_getPrototypeOf(Portal).apply(this,arguments))}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Portal,o["Component"]),function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(Portal,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount()}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.props.onUnmount()}},{key:"render",value:function render(){return r.a.createPortal(this.props.children,document.body)}}]),Portal}();s.defaultProps={onMount:function onMount(){},onUnmount:function onUnmount(){}},e.a=s},ItIL:function(t,e,n){"use strict";var o=n("Puqe"),i=n.n(o),r=n("uM7l"),s=n.n(r),a=n("mwIZ"),c=n.n(a),l=n("gLAU"),p=n.n(l),u=n("6vz9"),f=n.n(u),y=n("q1tI"),v=n.n(y),h=n("0ALx"),d=n("TSYQ"),_=n.n(d),m=n("Eryo"),E=n("LbRP"),g=n.n(E);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var P=["transparent","screen","screen--light"],O={fade:{enter:{animation:{opacity:[1,0]},duration:250},leave:{animation:{opacity:[0,1]},duration:250}}},b=function(t){function Modal(){var t,e;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Modal);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=_possibleConstructorReturn(this,(t=_getPrototypeOf(Modal)).call.apply(t,[this].concat(o)))).layerDidMount=function(){document.body.classList.add("modal-overlay-active"),e.props.viewportLocked&&(document.body.style.position="fixed")},e.layerWillUnmount=function(){document.body.classList.remove("modal-overlay-active"),e.props.viewportLocked&&(document.body.style.position="")},e._initialOpen=function(){return e.props.isOpen},e._close=function(){e.setState({open:!1})},e._open=function(){e.setState({open:!0})},e.onContentClick=function(t){t.stopPropagation()},e.onOverlayClick=function(){e.props.onOutsideClick()},e.getTransition=function(){var t=s()(e.props.transition);for(var n in t)t[n].duration||(t[n].duration=e.props.transitionDuration);return t},e.state={open:e._initialOpen()},e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Modal,v.a.Component),function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(Modal,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(t){var e=this;t.isOpen!==this.props.isOpen&&(t.isOpen?p()(this._open):f()(function(){p()(e._close)},c()(this.props,"transition.leave.duration")||this.props.transitionDuration))}},{key:"render",value:function render(){if(!this.state.open&&!this.props.isOpen)return null;var t=i()(this.props,"isOpen","onOutsideClick","fixed","transitionDuration","transition","overlayType","contentProps"),e=_()({[g.a.overlay]:!0,[g.a.fixed]:this.props.fixed,[g.a["type-".concat(this.props.overlayType)]]:P.indexOf(this.props.overlayType)>=0,["".concat(this.props.className)]:!!this.props.className}),n=_()({[g.a.content]:!0,["".concat(this.props.contentProps.className)]:!!this.props.contentProps.className}),o=this.getTransition(),r=this.props.isOpen?v.a.Children.map(this.props.children,function(t){return t}):null;return v.a.createElement(m.a,{onMount:this.layerDidMount,onUnmount:this.layerWillUnmount},v.a.createElement("div",_extends({},t,{className:e,onClick:this.onOverlayClick}),v.a.createElement("div",_extends({},this.props.contentProps,{className:n,onClick:this.onContentClick}),v.a.createElement(h.VelocityTransitionGroup,_extends({},o,{runOnMount:!0}),r))))}}]),Modal}();b.defaultProps={isOpen:!1,fixed:!0,onOutsideClick:function onOutsideClick(){},transitionDuration:250,transition:O.fade,overlayType:"screen",contentProps:{}},e.a=b},LbRP:function(t,e,n){t.exports={overlay:"overlay__3LeDG7tuQrrJdjPm8agkmx",fixed:"fixed__1dVANA0vWS60mCGpsRBU8T",content:"content__fQv0JV6LGGkYLrzWHtg7t","type-transparent":"type-transparent__19iohvkXZv5eOsVMRAvvLQ","type-screen":"type-screen__3oDb8zX4D4UGw4Zr3v1ufw"}},zfST:function(t,e,n){"use strict";e.a={componentDidMount:function componentDidMount(){window.addEventListener("keydown",this.onKeyDown)},componentWillUnmount:function componentWillUnmount(){window.removeEventListener("keydown",this.onKeyDown)},isEditInContentStudioEvent:function isEditInContentStudioEvent(t){return 32===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isToggleAuthoringModeEvent:function isToggleAuthoringModeEvent(t){return 77===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isSetProgressToThisExerciseEvent:function isSetProgressToThisExerciseEvent(t){return 83===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isAllowAllNavigationEvent:function isAllowAllNavigationEvent(t){return 187===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isDeleteWorkspaceEvent:function isDeleteWorkspaceEvent(t){return 87===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isGetInitialSavepointEvent:function isGetInitialSavepointEvent(t){return 71===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)},isGetFinalSavepointEvent:function isGetFinalSavepointEvent(t){return 71===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey:t.altKey)&&t.shiftKey},isEvaluateExerciseEvent:function isEvaluateExerciseEvent(t){return 13===t.keyCode&&(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)},isPreviousEvent:function isPreviousEvent(t){return 188===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey&&!t.altKey:t.altKey&&!t.crtlKey)},isNextEvent:function isNextEvent(t){return 190===t.keyCode&&(navigator.platform.match("Mac")?t.ctrlKey&&!t.altKey:t.altKey&&!t.crtlKey)},isEscapeEvent:function isEscapeEvent(t){return 27===t.keyCode},onKeyDown:function onKeyDown(t){return this.editInContentStudio&&this.isEditInContentStudioEvent(t)?this.editInContentStudio():this.toggleAuthoringMode&&this.isToggleAuthoringModeEvent(t)?this.toggleAuthoringMode():this.handleSetProgressClick&&this.isSetProgressToThisExerciseEvent(t)?this.handleSetProgressClick():this.toggleNoLock&&this.isAllowAllNavigationEvent(t)?this.toggleNoLock():this.deleteWorkspace&&this.isDeleteWorkspaceEvent(t)?this.deleteWorkspace():this.getFinalSavepoint&&this.isGetFinalSavepointEvent(t)?this.getFinalSavepoint():this.getInitialSavepoint&&this.isGetInitialSavepointEvent(t)?this.getInitialSavepoint():this.evaluateExercise&&this.isEvaluateExerciseEvent(t)?this.evaluateExercise():this.onNextEvent&&this.isNextEvent(t)?this.onNextEvent():this.onPreviousEvent&&this.isPreviousEvent(t)?this.onPreviousEvent():this.onEscapeKey&&this.isEscapeEvent(t)&&this.onEscapeKey(t),!1}}}}]);
//# sourceMappingURL=17.66e42add0dc957e8916a.chunk.js.map
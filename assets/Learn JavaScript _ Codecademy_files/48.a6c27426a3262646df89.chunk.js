(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[48],{NjwN:function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),a=n("17x9"),o=n.n(a),s=n("TSYQ"),c=n.n(s);function degreesToRads(t){return t/(180*Math.PI)}function randomRange(t,e){return t+Math.random()*(e-t)}function randomInt(t,e){return Math.floor(t+Math.random()*(e-t+1))}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function Particle(t,e,n){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Particle),this.radius=randomRange(.1,1),this.x=t,this.y=e,this.vx=randomRange(-4,4),this.vy=randomRange(-10,-0),this.type=randomInt(0,1),this.w=randomRange(5,15),this.h=randomRange(5,15),this.r=randomRange(5,7),this.angle=degreesToRads(randomRange(0,360)),this.anglespin=randomRange(-.2,.2),this.color=n,this.rotateY=randomRange(0,1)}return function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(Particle,[{key:"reset",value:function reset(t,e){this.radius=randomRange(.1,1),this.x=t,this.y=e,this.vx=randomRange(-4,4),this.vy=randomRange(-10,-0),this.type=randomInt(0,1),this.w=randomRange(5,15),this.h=randomRange(5,15),this.r=randomRange(5,7),this.angle=degreesToRads(randomRange(0,360)),this.anglespin=randomRange(-.2,.2),this.rotateY=randomRange(0,1)}},{key:"update",value:function update(t){var e=t.context,n=t.gravity,r=t.wind,i=t.friction,a=t.opacity;if(this.x+=this.vx,this.y+=this.vy,this.vy+=n,this.vx+=r,this.vx*=i,this.vy*=i,this.radius-=.02,this.rotateY<1?this.rotateY+=.1:this.rotateY=-1,this.angle+=this.anglespin,e.save(),e.translate(this.x,this.y),e.rotate(this.angle),e.scale(1,this.rotateY),e.rotate(this.angle),e.beginPath(),e.fillStyle=this.color,e.strokeStyle=this.color,e.globalAlpha=a,e.lineCap="round",e.lineWidth=2,0===this.type)e.beginPath(),e.arc(0,0,this.r,0,2*Math.PI),e.fill();else if(2===this.type){e.beginPath();for(var o=0;o<22;o+=1){var s=.5*o,c=(.2+1.5*s)*Math.cos(s),h=(.2+1.5*s)*Math.sin(s);e.lineTo(c,h)}e.stroke()}else 1===this.type&&e.fillRect(-this.w/2,-this.h/2,this.w,this.h);e.closePath(),e.restore()}}]),Particle}();function ParticleGenerator_defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function ParticleGenerator(t){var e=t.source,n=t.number,r=t.recycle,i=t.canvas,a=t.colors;!function ParticleGenerator_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ParticleGenerator),this.x=e.x,this.y=e.y,this.w=e.w,this.h=e.h,this.number=n,this.particles=[],this.particlesGenerated=0,this.recycle=r,this.canvas=i,this.colors=a}return function ParticleGenerator_createClass(t,e,n){return e&&ParticleGenerator_defineProperties(t.prototype,e),n&&ParticleGenerator_defineProperties(t,n),t}(ParticleGenerator,[{key:"removeParticleAt",value:function removeParticleAt(t){this.particles.splice(t,1)}},{key:"generateParticle",value:function generateParticle(){var t=randomRange(this.x,this.w+this.x),e=randomRange(this.y,this.h+this.y),n=this.colors[Math.floor(Math.random()*this.colors.length)];return new h(t,e,n)}},{key:"recycleParticle",value:function recycleParticle(t){var e=randomRange(this.x,this.w+this.x),n=randomRange(this.y,this.h+this.y);t.reset(e,n)}},{key:"animateParticles",value:function animateParticles(t){var e=this,n=t.context,r=t.gravity,i=t.wind,a=t.friction,o=t.opacity,s=this.particles.length,c=this.recycle?s:this.particlesGenerated;return c<this.number&&(this.particles.push(this.generateParticle()),this.particlesGenerated+=1),this.particles.forEach(function(t,s){t.update({context:n,gravity:r,wind:i,friction:a,opacity:o}),(t.y>e.canvas.height||t.y<-100||t.x>e.canvas.width+100||t.x<-100)&&(e.recycle&&c<=e.number?e.recycleParticle(e.particles[s]):e.removeParticleAt(s))}),s>0||c<this.number}}]),ParticleGenerator}();function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ConfettiGenerator_defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function ConfettiGenerator(t,e){var n=this;!function ConfettiGenerator_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ConfettiGenerator),this.pause=function(){n.run=!1},this.update=function(){n.run&&(n.particleGenerator.number=n.settings.numberOfPieces,n.context.fillStyle="white",n.context.clearRect(0,0,n.canvas.width,n.canvas.height),n.particleGenerator.animateParticles(_objectSpread({context:n.context},n.settings))?requestAnimationFrame(n.update):n.run=!1)},this.canvas=t,this.settings=_objectSpread({},e),e.confettiSource||(this.settings.confettiSource={x:0,y:0,w:t.width,h:0}),this.run=!1,this.context=t.getContext("2d"),this.particleGenerator=new f({source:this.settings.confettiSource,number:this.settings.numberOfPieces,colors:this.settings.colors,recycle:this.settings.recycle,context:this.context,canvas:this.canvas})}return function ConfettiGenerator_createClass(t,e,n){return e&&ConfettiGenerator_defineProperties(t.prototype,e),n&&ConfettiGenerator_defineProperties(t,n),t}(ConfettiGenerator,[{key:"updateSettings",value:function updateSettings(t){this.settings=_objectSpread({},this.settings,{settings:t}),t.numberOfPieces&&this.particleGenerator&&(this.particleGenerator.number=this.settings.numberOfPieces),t.recycle&&this.particleGenerator&&(this.particleGenerator.recycle=this.settings.recycle)}},{key:"start",value:function start(){var t=this.run;this.run=!0,!t&&this.run&&this.update()}}]),ConfettiGenerator}(),u=n("cSlT"),p=n.n(u);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Confetti_objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){Confetti_defineProperty(t,e,n[e])})}return t}function Confetti_defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Confetti_defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function Confetti(){var t,e;!function Confetti_classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Confetti);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=_possibleConstructorReturn(this,(t=_getPrototypeOf(Confetti)).call.apply(t,[this].concat(r)))).state={width:void 0,height:void 0},e.initialPauseHappened=!1,e.initConfettiIfNecessary=function(){return!(!e.canvas||e.confetti)&&(e.adjustCanvasPixelDensity(),e.confetti=new l(e.canvas,Confetti_objectSpread({},e.props)),e.confetti.start(),!0)},e.measureContainer=function(){if(e.props.width&&e.props.height)e.setState({width:e.props.width,height:e.props.height});else if(e.el){var t=e.el.parentNode.getBoundingClientRect(),n=t.width,r=t.height;e.setState({width:n,height:r})}},e.startAnimating=function(){e.confetti.start()},e.stopAnimating=function(){e.confetti.pause()},e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(Confetti,r["Component"]),function Confetti_createClass(t,e,n){return e&&Confetti_defineProperties(t.prototype,e),n&&Confetti_defineProperties(t,n),t}(Confetti,[{key:"adjustCanvasPixelDensity",value:function adjustCanvasPixelDensity(){if(this.canvas){var t=!1;this.confetti&&this.confetti.run&&(this.confetti.pause(),t=!0);var e=this.canvas.getContext("2d"),n=window.devicePixelRatio;this.canvas.style.width="".concat(this.canvas.width,"px"),this.canvas.style.height="".concat(this.canvas.height,"px"),this.canvas.width*=n,this.canvas.height*=n,e.scale(n,n),t&&this.confetti.start()}}},{key:"componentDidUpdate",value:function componentDidUpdate(t){this.props.forceAnimate&&!t.forceAnimate&&this.confetti?(this.confetti=new l(this.canvas,Confetti_objectSpread({},this.props)),this.confetti.start()):!this.initConfettiIfNecessary()&&this.confetti&&this.confetti.updateSettings(this.props)}},{key:"componentDidMount",value:function componentDidMount(){setTimeout(this.measureContainer,1),this.initConfettiIfNecessary()}},{key:"render",value:function render(){var t=this,e=this.props,n=e.fullScreen,r=e.className,a=e.fadeOut,o=this.state,s=o.height,h=o.width,f=c()(p.a.confettiContainer,r&&r,{[p.a.fadeOut]:a});return n&&(s=window.innerWidth,h=window.innerWidth),i.a.createElement("div",{ref:function ref(e){return t.el=e},className:f},s&&h?i.a.createElement("canvas",{className:p.a.canvas,width:h,height:s,ref:function ref(e){t.canvas=e}}):null)}}]),Confetti}();y.defaultProps={numberOfPieces:200,colors:["#F87B7C","#FFC107","#FA9C9D","#39D1B4","#F288E9","#7C5CE6"],gravity:.25,friction:.99,wind:0,opacity:1,recycle:!0},y.propTypes={numberOfPieces:o.a.number,gravity:o.a.number,duration:o.a.number,className:o.a.string,fadeOut:o.a.bool,style:o.a.object,width:o.a.number,height:o.a.number,confettiSource:o.a.shape({x:o.a.number,y:o.a.number,w:o.a.number,h:o.a.number}),friction:o.a.number,wind:o.a.number,colors:o.a.arrayOf(o.a.string),opacity:o.a.number,recycle:o.a.bool,forceAnimate:o.a.bool,fullScreen:o.a.bool};e.a=y},cSlT:function(t,e,n){t.exports={canvas:"canvas__3lTf-Zo9Jdc-ZioDWxuU4b",confettiContainer:"confettiContainer__3UzV228MbI4tLQQSEG7-SO",fadeOut:"fadeOut__3gU4cfVidMNVnG3I6Fi3FL"}}}]);
//# sourceMappingURL=48.a6c27426a3262646df89.chunk.js.map
(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{"6vz9":function(i,e,t){var n=t("SmhD"),o=t("EA7m"),r=t("tLB3"),d=o(function(i,e,t){return n(i,r(e)||0,t)});i.exports=d},G9Ht:function(i,e,t){var n,o,r;
/**
 * isMobile.js v0.4.0
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
/**
 * isMobile.js v0.4.0
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
!function(t){var d=/iPhone/i,s=/iPod/i,a=/iPad/i,p=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,c=/Android/i,u=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,b=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,h=/IEMobile/i,f=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,w=/BlackBerry/i,l=/BB10/i,v=/Opera Mini/i,A=/(CriOS|Chrome)(?=.*\bMobile\b)/i,F=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,K=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),m=function(i,e){return i.test(e)},x=function(i){var e=i||navigator.userAgent,t=e.split("[FBAN");if(void 0!==t[1]&&(e=t[0]),void 0!==(t=e.split("Twitter"))[1]&&(e=t[0]),this.apple={phone:m(d,e),ipod:m(s,e),tablet:!m(d,e)&&m(a,e),device:m(d,e)||m(s,e)||m(a,e)},this.amazon={phone:m(u,e),tablet:!m(u,e)&&m(b,e),device:m(u,e)||m(b,e)},this.android={phone:m(u,e)||m(p,e),tablet:!m(u,e)&&!m(p,e)&&(m(b,e)||m(c,e)),device:m(u,e)||m(b,e)||m(p,e)||m(c,e)},this.windows={phone:m(h,e),tablet:m(f,e),device:m(h,e)||m(f,e)},this.other={blackberry:m(w,e),blackberry10:m(l,e),opera:m(v,e),firefox:m(F,e),chrome:m(A,e),device:m(w,e)||m(l,e)||m(v,e)||m(F,e)||m(A,e)},this.seven_inch=m(K,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},E=function(){var i=new x;return i.Class=x,i};i.exports&&"undefined"==typeof window?i.exports=x:i.exports&&"undefined"!=typeof window?i.exports=E():(o=[],n=t.isMobile=E(),void 0===(r="function"==typeof n?n.apply(e,o):n)||(i.exports=r))}(this)},SmhD:function(i,e){var t="Expected a function";i.exports=function baseDelay(i,e,n){if("function"!=typeof i)throw new TypeError(t);return setTimeout(function(){i.apply(void 0,n)},e)}},gLAU:function(i,e,t){var n=t("SmhD"),o=t("EA7m")(function(i,e){return n(i,1,e)});i.exports=o},ncDI:function(i,e,t){"use strict";var n=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(i){window.setTimeout(i,1e3/60)}).bind(window);i.exports=function decouple(i,e,t){var o,r=!1;function captureEvent(i){o=i,function track(){r||(n(update),r=!0)}()}function update(){t.call(i,o),r=!1}return i.addEventListener(e,captureEvent,!1),captureEvent}}}]);
//# sourceMappingURL=16.ca701a41ec93cf777809.chunk.js.map
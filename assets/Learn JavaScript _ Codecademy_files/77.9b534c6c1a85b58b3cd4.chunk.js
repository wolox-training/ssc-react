(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[77],{aT2u:function(e,t,n){"use strict";n.d(t,"j",function(){return r}),n.d(t,"i",function(){return p}),n.d(t,"f",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return f});var r=function isValidRedirect(e){return!!e&&(e.includes("courses")||e.includes("paths")||e.includes("learn")||e.includes("catalog"))},i=new Set(["web-development","data-science","code-foundations","computer-science"]),c=function isPathPageRedirect(e){var t=e.split("/");return r(e)&&"learn"===t[1]&&"paths"===t[2]&&i.has(t[3])},u=function isCoursePageRedirect(e){var t=e.split("/");return r(e)&&"learn"===t[1]},o=function isLeRedirect(e){var t=e.split("/");return r(e)&&"courses"===t[1]},a=function isAltEntryPointRedirect(e){return c(e)||u(e)||o(e)},s=function isProMembershipRedirect(e){var t=e.split("/");return"pro"===t[1]&&"membership"===t[2].split("?")[0]},l=function isSkillPathPageRedirect(e){var t=e.split("/");return r(e)&&"learn"===t[1]&&"paths"===t[2]&&!i.has(t[3])},p=function isValidRecommendationLocation(e){return!!e&&(c(e)||u(e)||o(e))},d=function getRedirectSlug(e){var t=!!e&&e.split("/"),n=o(e)?e.split("/")[2]:t[t.length-1];return p(e)&&n},f=function getEntryPoint(e){return function isHomePageRedirect(e){var t=e.split("?")[0].split("/");return""===e||""===e[1]||"register"===t[1]||"login"===t[1]}(e)?"home_page":c(e)?"careerpath_page":l(e)?"skillpath_page":u(e)?"course_page":o(e)?"learning_environment":function isCatalogPageRedirect(e){var t=e.split("/");return r(e)&&"catalog"===t[1]}(e)?"catalog":function isJobsPageRedict(e){var t=e.split("/");return"about"===t[1]&&"careers"===t[2]}(e)?"jobs_page":function isPrivacyPolicyRedirect(e){return"policy"===e.split("/")[1]}(e)?"privacy_policy_page":function isTermsOfServiceRedirect(e){return"terms"===e.split("/")[1]}(e)?"terms_of_service_page":s(e)?"pro_membership_page":null}}}]);
//# sourceMappingURL=77.9b534c6c1a85b58b3cd4.chunk.js.map
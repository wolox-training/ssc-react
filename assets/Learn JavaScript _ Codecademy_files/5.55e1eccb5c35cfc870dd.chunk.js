(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[5],{dVwu:function(e){e.exports={accountSettings:"Account Settings",admin:"Admin",customerService:"Customer Support",giveProGetProForFree:"Give Pro, Get Pro for Free",help:"Help",logOut:"Log out",myProfile:"My Profile",new:"New"}},zbmg:function(e,i,r){"use strict";var o=r("dVwu");i.a=function getUserOptions(e){var i=e.isAdmin,r=e.isCustomerService,t=e.isPro;return[{href:"/profiles/me",children:o.myProfile,visible:!0},{href:"/account",id:"edit-account-link",children:o.accountSettings,visible:!0},{badge:"New",children:o.giveProGetProForFree,href:"/referrals",id:"referrals-link",visible:!i&&t},{href:"/admin",children:"Admin",visible:i},{href:"/customer_support/concessions",children:o.customerService,visible:r},{href:"https://codecademy.atlassian.net/servicedesk/customer/portal/9",children:"Report a bug [ADMIN]",visible:i},{href:"/help",id:"help-link",children:o.help,visible:!0},{href:"/sign_out",id:"sign-out-link",children:o.logOut,visible:!0}]}}}]);
//# sourceMappingURL=5.55e1eccb5c35cfc870dd.chunk.js.map
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"+7fd":function(e,t,s){"use strict";var n=s("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("jelL")),i=s("nKUr"),c=(0,r.default)([(0,i.jsx)("path",{d:"M17 11c.34 0 .67.04 1 .09V6.27L10.5 3 3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82.55-.13 1.08-.32 1.6-.55-.69-.98-1.1-2.17-1.1-3.45 0-3.31 2.69-6 6-6z"},"0"),(0,i.jsx)("path",{d:"M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12-1.12-.51-1.12-1.12.5-1.12 1.12-1.12zm0 5.37c-.93 0-1.74-.46-2.24-1.17.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17z"},"1")],"AdminPanelSettings");t.default=c},"8oxB":function(e,t){var s,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(s===setTimeout)return setTimeout(e,0);if((s===i||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:i}catch(e){s=i}try{n="function"===typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var o,l=[],d=!1,_=-1;function u(){d&&o&&(d=!1,o.length?l=o.concat(l):_=-1,l.length&&j())}function j(){if(!d){var e=a(u);d=!0;for(var t=l.length;t;){for(o=l,l=[];++_<t;)o&&o[_].run();_=-1,t=l.length}o=null,d=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];l.push(new p(e,t)),1!==l.length||d||a(j)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9uw5":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var n={login:"LOGIN",logout:"LOGOUT",reset:"RESET",set_is_authenticated:"SET_IS_AUTHENTICATED",show_drawer:"SHOW_DRAWER",hide_drawer:"HIDE_DRAWER",clear_historial_pages:"CLEAR_HISTORIAL_PAGES",set_historial_pages:"SET_HISTORIAL_PAGES",set_package_price_selected:"SET_PACKAGE_PRICE_SELECTED",set_option_menu:"SET_OPTION_MENU",set_search_form:"SET_SEARCH_FORM",add_company:"ADD_COMPANY",add_companies:"ADD_COMPANIES",change_modal_login_status:"CHANGE_MODAL_LOGIN_STATUS",set_user_wallet:"SET_USER_WALLET",reload_user_wallet:"RELOAD_USER_WALLET",set_reservation_id:"SET_RESERVATION_ID",set_reservation_token:"SET_RESERVATION_TOKEN",set_hotels_data:"SET_HOTELS_DATA",set_search_info:"SET_SEARCH_INFO",set_current_hotel_selected:"SER_CURRENT_HOTEL_SELECTED",select_membership:"SELECT_MEMBERSHIP",select_membership_package:"SELECT_MEMBERSHIP_PACKAGE",add_user:"ADD_USER",add_rol:"ADD_ROL",set_membership_balance:"SET_MEMBERSHIP_BALANCE",set_membership_of_company:"SET_MEMBERSHIP_OF_COMPANY",get_membership:"GET_MEMBERSHIP",set_detail_hotel:"SET_DETAIL_HOTEL",get_reservations:"GET_RESERVATIONS",hide_loader:"HIDE_LOADER",show_loader:"SHOW_LOADER",get_cost_centers:"GET_COST_CENTERS",get_cost_centers_by_user_id_and_company_id:"GET_COST_CENTERS_BY_USER_ID_AND_COMPANY_ID",set_update_cost_centers:"SET_UPDATE_COST_CENTERS",set_companies_in_guest:"SET_COMPANIES_IN_GUEST",update_cost_centers:"UPDATE_COST_CENTERS",save_cost_center:"SAVE_COST_CENTER",update_cost_center:"UPDATE_COST_CENTER",get_travellers:"GET_TRAVELLERS",create_traveller:"CREATE_TRAVELLER",create_guest:"CREATE_GUEST",update_traveller:"UPDATE_TRAVELLER",update_guest:"UPDATE_GUEST",update_center_cost:"UPDATE_CENTER_COST",get_guests:"GET_GUESTS",get_permissions:"GET_PERMISSIONS",get_previous_balance:"GET_PREVIOUS_BALANCE",get_movements:"GET_MOVEMENTS",get_movements_history:"GET_MOVEMENTS_HISTORY",get_companie:"GET_COMPANIE",get_company_by_id:"GET_COMPANY_BY_ID",set_address_info:"SET_ADDRESS_INFO",get_company_structure:"GET_COMPANY_STRUCTURE",set_main_traveller:"SET_MAIN_TRAVELLER",set_noktos_politic:"SET_NOKTOS_POLITIC",set_noktos_packages:"SET_NOKTOS_PACKAGES",set_user_membership:"SET_USER_MEMBERSHIP",set_selected_package:"SET_SELECTED_PACKAGE",set_package_payment_method:"SET_PACKAGE_PAYMENT_METHOD",set_stripe_cards_info:"SET_STRIPE_CARDS_INFO",set_selected_card:"SET_SELECTED_CARD",show_saved_cards:"SHOW_SAVED_CARDS",hide_saved_cards:"HIDE_SAVED_CARDS",show_selected_card:"SHOW_SELECTED_CARD",hide_selected_card:"HIDE_SELECTED_CARD",show_stripe_form_card:"SHOW_STRIPE_FORM_CARD",hide_stripe_form_card:"HIDE_STRIPE_FORM_CARD",set_stripe_error:"SET_STRIPE_ERROR",show_alert_stripe_error:"SHOW_ALERT_STRIPE_ERROR",hide_alert_stripe_error:"HIDE_ALERT_STRIPE_ERROR",show_progress_save_stripe_card:"SHOW_PROGRESS_SAVE_STRIPE_CARD",hide_progress_save_stripe_card:"HIDE_PROGRESS_SAVE_STRIPE_CARD",set_generate_invoice:"SET_GENERATE_INVOICE",set_cost_center_id:"SET_COST_CENTER_ID",set_CDFI_id:"SET_CDFI_ID",get_reload_user_cards:"GET_RELOAD_USER_CARDS",set_promotion_data:"SET_PROMOTION_DATA",update_selected_packages:"UPDATE_SELECTED_PACKAGES",delete_selected_packages:"DELETE_SELECTED_PACKAGES"}},BbLH:function(e,t,s){"use strict";var n=s("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("jelL")),i=s("nKUr"),c=(0,r.default)((0,i.jsx)("path",{d:"M14.06 9.94 12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5 1.09-2.41L12 5.5 9.59 4.41 8.5 2 7.41 4.41 5 5.5l2.41 1.09L8.5 9zm-4 11.5 6-6.01 4 4L23 8.93l-1.41-1.41-7.09 7.97-4-4L3 19l1.5 1.5z"}),"AutoGraph");t.default=c},FeWu:function(e,t,s){e.exports={OurPartners:"styles_OurPartners__1hICW",OurPartners__brands:"styles_OurPartners__brands__24hsk",circleOne:"styles_circleOne__2MMAb",circleTwo:"styles_circleTwo__2gmjQ",circleThree:"styles_circleThree__2xCGc"}},G4Jp:function(e,t,s){"use strict";(function(e){s.d(t,"a",(function(){return r}));var n=s("XEfq"),r=function(t){var s=localStorage.getItem("version_app"),r=e.env.NEXT_PUBLIC_CURRENT_VERSION_APP,c=e.env.NEXT_PUBLIC_BASE_URL;console.log("version",s),console.log("currentVersion",r),console.log("url",c),console.log("timeout",e.env.NEXT_PUBLIC_GET_HOTELS_TIMEOUT),console.log("process.env",e.env),s?(console.log("VALIDATE"),parseInt(s)<parseInt(r)&&(t(Object(n.b)()),localStorage.setItem("version_app",r),i())):(console.log("RESET"),t(Object(n.b)()),localStorage.setItem("version_app",r),i())},i=function(){"caches"in window&&(caches.keys().then((function(e){e.forEach((function(e){caches.delete(e)}))})),window.location.reload(!0))}}).call(this,s("8oxB"))},GKtp:function(e,t,s){e.exports={Stepper:"styles_Stepper__1mI12"}},GiYV:function(e,t,s){"use strict";var n=s("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("jelL")),i=s("nKUr"),c=(0,r.default)((0,i.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"ReportProblem");t.default=c},Go6l:function(e,t,s){e.exports={SecondPage:"styles_SecondPage__35bvC",SecondPage__info:"styles_SecondPage__info__1QoDI",SecondPage__image:"styles_SecondPage__image__3y9BF",SecondPage__items:"styles_SecondPage__items__anmMh"}},GwDH:function(e,t,s){e.exports={FirstPage:"styles_FirstPage__1eu-f",FirstPage__info:"styles_FirstPage__info__3r5p2",FirstPage__info__video:"styles_FirstPage__info__video__Wv4Bw",FirstPage__items:"styles_FirstPage__items__pTEgZ"}},H0SL:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("cMU6")}])},KKcC:function(e,t,s){"use strict";var n=s("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("jelL")),i=s("nKUr"),c=(0,r.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2.17-1.5 2.14-1.53 2.14 1.53-.83-2.46 2.15-1.5h-2.62L9.47 6l-.84 2.54H6l2.14 1.49z"}),"SavedSearch");t.default=c},LOK9:function(e,t,s){"use strict";var n=s("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("jelL")),i=s("nKUr"),c=(0,r.default)((0,i.jsx)("path",{d:"m22 12-4-4v3H3v2h15v3z"}),"TrendingFlat");t.default=c},MMwF:function(e,t,s){e.exports={InfoItem:"styles_InfoItem__1ydxU"}},OGDC:function(e,t,s){"use strict";var n=s("EiBv"),r=s("NFhf"),i=s("q1tI"),c=(s("17x9"),s("iuhU")),a=s("+NmR"),o=s("2Qr1"),l=s("Vn7y"),d=s("tCRK"),_=s("nLn5"),u=s("xeev"),j=s("PDDv"),p=s("HltC");function f(e){return Object(j.a)("MuiIconButton",e)}var O=Object(p.a)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),b=s("nKUr");const h=["edge","children","className","color","disabled","disableFocusRipple","size"],m=Object(l.a)(_.a,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,"default"!==s.color&&t[`color${Object(u.a)(s.color)}`],s.edge&&t[`edge${Object(u.a)(s.edge)}`],t[`size${Object(u.a)(s.size)}`]]}})((({theme:e,ownerState:t})=>Object(r.a)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(o.a)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>Object(r.a)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&{color:e.palette[t.color].main,"&:hover":{backgroundColor:Object(o.a)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${O.disabled}`]:{backgroundColor:"transparent",color:e.palette.action.disabled}}))),E=i.forwardRef((function(e,t){const s=Object(d.a)({props:e,name:"MuiIconButton"}),{edge:i=!1,children:o,className:l,color:_="default",disabled:j=!1,disableFocusRipple:p=!1,size:O="medium"}=s,E=Object(n.a)(s,h),g=Object(r.a)({},s,{edge:i,color:_,disabled:j,disableFocusRipple:p,size:O}),v=(e=>{const{classes:t,disabled:s,color:n,edge:r,size:i}=e,c={root:["root",s&&"disabled","default"!==n&&`color${Object(u.a)(n)}`,r&&`edge${Object(u.a)(r)}`,`size${Object(u.a)(i)}`]};return Object(a.a)(c,f,t)})(g);return Object(b.jsx)(m,Object(r.a)({className:Object(c.a)(v.root,l),centerRipple:!0,focusRipple:!p,disabled:j,ref:t,ownerState:g},E,{children:o}))}));t.a=E},PJCe:function(e,t,s){e.exports={Pagination:"styles_Pagination__MeqxH",Pagination__item:"styles_Pagination__item__9uscq"}},QH0F:function(e,t,s){"use strict";var n=s("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("jelL")),i=s("nKUr"),c=(0,r.default)((0,i.jsx)("path",{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17c-.16-.16-.42-.16-.58 0l-.88.88L20 12.75l.88-.88c.16-.16.16-.42 0-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"}),"AppRegistration");t.default=c},Tpda:function(e,t,s){e.exports={FourthPage:"styles_FourthPage__1oV01"}},XEfq:function(e,t,s){"use strict";s.d(t,"c",(function(){return r})),s.d(t,"d",(function(){return i})),s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return a}));var n=s("9uw5"),r=function(e){return{type:n.a.set_is_authenticated,payload:{isAuth:e}}},i=function(e){return{type:n.a.set_user_wallet,payload:e}},c=function(){return function(e){e({type:n.a.logout})}},a=function(){return function(e){e({type:n.a.reset})}}},cMU6:function(e,t,s){"use strict";s.r(t);var n=s("nKUr"),r=s("hHXb"),i=s("ODXe"),c=s("q1tI"),a=s("20a2"),o=[{title:"Finanzas",description:"Te ayudamos en el \xe1rea financiera de tu Pyme"},{title:"Ahorro",description:"Haz rendir tu dinero sin la fluctuaci\xf3n de precios"},{title:"Cr\xe9dito",description:"Cr\xe9ditos financieros desde Noktos para tu empresa"},{title:"Gastos",description:"Administra tus gastos empresariales f\xe1cilmente"}],l=s("GwDH"),d=s.n(l),_=s("Z3vd"),u=s("indl"),j=s.n(u),p=function(e){var t=e.title,s=e.description;return Object(n.jsxs)("div",{className:j.a.InfoItem,children:[Object(n.jsx)("h4",{children:t}),Object(n.jsx)("p",{children:s})]})},f=s("ywIp"),O=s("7vsU"),b=s("4sEA"),h={width:220,padding:"12px 14px",fontSize:17,fontWeight:600,color:"#fff",backgroundColor:"#00c2ff",borderRadius:30,textTransform:"none",fontFamily:"DM Sans Regular"},m=function(){Object(a.useRouter)();var e=Object(O.a)(),t=Object(i.a)(e,1)[0],s=Object(c.useRef)(),r=Object(c.useRef)(),l=Object(c.useRef)(),u=Object(c.useRef)(),j=[{ref:s,classes:["left"]},{ref:r,classes:["right"]},{ref:l,classes:["up"]}];Object(b.a)(u,j);return Object(n.jsxs)("section",{className:d.a.FirstPage,ref:u,children:[Object(n.jsxs)("div",{className:d.a.FirstPage__info,children:[Object(n.jsxs)("div",{ref:s,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Noktos,"}),Object(n.jsx)("p",{children:"proporciona herramientas a las empresas para hacerles la vida m\xe1s f\xe1cil optimizando la gesti\xf3n y los presupuestos de viajes."}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Tu aliado financiero en viajes de negocio."})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(_.a,{variant:"contained",style:h,onClick:function(){window.open("https://www.app.noktos.com/register/","_blank")},children:"\xdanete Ahora"})})]}),Object(n.jsxs)("div",{ref:r,className:d.a.FirstPage__info__video,children:[Object(n.jsx)("div",{children:Object(n.jsx)("video",{muted:!0,controls:!0,autoPlay:!0,"aria-label":"Noktos video explicativo",children:Object(n.jsx)("source",{type:"video/mp4",src:"/videos/landing_video.mp4"})})}),t&&Object(n.jsx)("p",{children:"*Hoy en d\xeda nos enfocamos en el hospedaje en M\xe9xico*"})]})]}),Object(n.jsx)("div",{ref:l,className:d.a.FirstPage__items,children:t?o.map((function(e){var t=e.title,s=e.description;return Object(n.jsx)(p,{title:t,description:s},t)})):Object(n.jsx)(f.a,{itemsToShow:1,itemsToScroll:1,pagination:!1,children:o.map((function(e){var t=e.title,s=e.description;return Object(n.jsx)(p,{title:t,description:s},t)}))})})]})},E=[{idItem:1,showStepper:!0,src:"stepOne.png",title:"\xa1Reg\xedstrate!",redirect:"/register",description:"Reg\xedstrate en nuestra plataforma y descubre los planes de Noktos que tenemos para tu empresa."},{idItem:2,src:"stepTwo.png",title:"\xa1Selecciona tu membres\xeda!",description:"Dentro de nuestra plataforma encuentra qu\xe9 tipo de necesidad presenta tu empresa y el\xedgela."},{idItem:3,showStepper:!0,src:"stepThree.png",title:"\xa1Adquiere tus Noktos!",description:"\xa1Ya no te estreses! Ahorra y paga los gastos de tu empresa a trav\xe9s de Noktos."},{idItem:4,src:"stepFour.png",title:"\xa1Disfruta!",description:"\xa1Dentro de nuestra plataforma Noktos, todos los incre\xedbles beneficios!"}],g=s("tNib"),v=s.n(g),S=s("Bim0"),T=s("GKtp"),x=s.n(T),R=function(){return Object(n.jsxs)("div",{className:x.a.Stepper,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})},P=s("MMwF"),I=s.n(P),C=function(e){var t=e.src,s=e.title,r=e.idItem,c=e.isActive,o=e.redirect,l=e.description,d=e.showStepper,_=e.setItemSelected,u=Object(a.useRouter)(),j=Object(S.a)(1265),p=Object(i.a)(j,1)[0];return Object(n.jsxs)("div",{className:I.a.InfoItem,onClick:function(){_(r),o&&u.push(o)},style:{border:c?"2px solid #00c2ff":"2px solid #fff"},children:[Object(n.jsx)("div",{children:Object(n.jsx)("span",{children:r})}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{alt:"",src:"/img/LandingPage/ThirdPage/".concat(t),"aria-labelledby":s})}),Object(n.jsx)("h3",{id:s,children:s}),Object(n.jsx)("p",{children:l}),p&&d&&Object(n.jsx)(R,{})]})};C.defaultProps={redirect:null,isActive:!0,showStepper:!1};var y=C,A=s("PJCe"),N=s.n(A),L=function(e){var t=e.isActive,s=e.label;return Object(n.jsx)("div",{className:N.a.Pagination__item,style:{backgroundColor:"".concat(t?"#00c2ff":"rgba(0, 194, 255, 0.23)"),boxShadow:"".concat(t?"0 12px 24px 0 rgba(0, 194, 255, 0.36)":"none")},children:Object(n.jsx)("span",{children:s})})},w=function(e){var t=e.stepSelected,s=e.itemsLength,r=new Array(s).fill(0);return Object(n.jsx)("div",{className:N.a.Pagination,children:r.map((function(e,s){return Object(n.jsx)(L,{label:s+1,isActive:t===s})}))})};w.defaultProps={itemsLength:4};var D=w,M=function(){var e=Object(S.a)(1265),t=Object(i.a)(e,1)[0],s=Object(c.useState)(1),r=s[0],a=s[1],o=Object(c.useState)(1),l=o[0],d=o[1],_=Object(c.useRef)(),u=Object(c.useRef)(),j=Object(c.useRef)(),p=Object(c.useRef)(),O=[{ref:_,classes:["down"]},{ref:j,classes:["left"]},{ref:u,classes:["fadeIn"]}];return Object(b.a)(p,O),Object(n.jsxs)("section",{ref:p,id:"howDoesItWork",className:v.a.ThirdPage,children:[Object(n.jsxs)("div",{ref:_,children:[Object(n.jsx)("h2",{children:"\xbfC\xf3mo funciona?"}),Object(n.jsx)("span",{children:"F\xe1cil, sencillo y pr\xe1ctico"})]}),Object(n.jsx)("div",{ref:u,children:t?Object(n.jsx)("div",{children:E.map((function(e){var t=e.idItem,s=e.showStepper,r=e.redirect;return Object(n.jsx)(y,{src:e.src,idItem:t,title:e.title,redirect:r,showStepper:s,description:e.description,setItemSelected:d,isActive:l===t},t)}))}):Object(n.jsxs)("div",{children:[Object(n.jsx)(f.a,{itemsToShow:1,itemsToScroll:1,pagination:!1,onChange:function(e){var t=e.index;return a(t)},children:E.map((function(e){var t=e.idItem,s=e.description;return Object(n.jsx)(y,{src:e.src,idItem:t,title:e.title,description:s},t)}))}),Object(n.jsx)(D,{stepSelected:r})]})}),Object(n.jsx)("div",{ref:j,children:t&&Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsx)("img",{alt:"",src:"/img/LandingPage/ThirdPage/main.png"})})})})]})},z=s("KKcC"),G=s.n(z),k=s("QH0F"),H=s.n(k),U=s("+7fd"),B=s.n(U),F=[{Icon:G.a,title:"Encuentra y reserva",description:"Tarifa fija controlando los gastos de tu empresa."},{Icon:H.a,title:"Configura tu empresa",description:"Personaliza las pol\xedticas de viaje y viaja sin exceder los l\xedmites de tu empresa."},{Icon:B.a,title:"Control y visibilidad",description:"Revisa tus reservaciones, por viajero, proyecto, fecha, ubicaci\xf3n y dem\xe1s."}],K=s("Go6l"),V=s.n(K),W=s("eJTh"),q=s.n(W),Y=s("OGDC"),J={width:60,height:60,color:"#fff",backgroundColor:"#00c2ff",borderRadius:"100%"},Q={fontSize:32},X=function(e){var t=e.Icon,s=e.title,r=e.description;return Object(n.jsxs)("div",{className:q.a.InfoItem,children:[Object(n.jsx)(Y.a,{"aria-label":s,style:J,children:Object(n.jsx)(t,{style:Q})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:s}),Object(n.jsx)("p",{children:r})]})]})},$=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),s=Object(c.useRef)(),r=Object(c.useRef)(),i=[{ref:e,classes:["left"]},{ref:t,classes:["right"]},{ref:s,classes:["up"]}];return Object(b.a)(r,i),Object(n.jsxs)("section",{className:V.a.SecondPage,ref:r,children:[Object(n.jsx)("div",{className:V.a.SecondPage__info,children:Object(n.jsxs)("div",{ref:e,children:[Object(n.jsx)("h2",{children:"\xbfQU\xc9 HACEMOS?"}),Object(n.jsx)("p",{children:"Somos tu aliado financiero en viajes de negocios, manteniendo tarifas fijas en tu hospedaje todo el a\xf1o."})]})}),Object(n.jsx)("div",{className:V.a.SecondPage__image,ref:t,children:Object(n.jsx)("div",{children:Object(n.jsx)("img",{alt:"","aria-labelledby":"whatDoWeDo",src:"/img/LandingPage/SecondPage/person.png"})})}),Object(n.jsx)("div",{ref:s,className:V.a.SecondPage__items,children:Object(n.jsx)("div",{children:F.map((function(e){var t=e.Icon,s=e.title,r=e.description;return Object(n.jsx)(X,{Icon:t,title:s,description:r},s)}))})})]})},Z=s("BbLH"),ee=s.n(Z),te=s("plP9"),se=s.n(te),ne=s("LOK9"),re=s.n(ne),ie=s("GiYV"),ce=s.n(ie),ae=[{title:"Tarifas \xfanicas",description:"Disfruta de tarifas fijas para tus viajes.",Icon:re.a},{title:"Eficiencia",description:"Todo en un solo lugar; reserva, gestiona y controla.",Icon:ee.a},{title:"Personalizaci\xf3n",description:"Personaliza tu membres\xeda seg\xfan tu empresa.",Icon:H.a},{title:"Pagos",Icon:se.a,description:"Paga tus viajes con Noktos y congela la mejor tarifa todo el a\xf1o."},{title:"Visibilidad y control.",description:"Factura en un solo lugar para tu negocio.",Icon:B.a},{title:"Atenci\xf3n personalizada.",description:"Contamos con atenci\xf3n personalizada 24/7.",Icon:ce.a}],oe=s("Tpda"),le=s.n(oe),de=s("xGRY"),_e=s.n(de),ue=function(e){var t=e.Icon,s=e.title,r=e.description;return Object(n.jsxs)("div",{className:_e.a.InfoItem,children:[Object(n.jsx)("div",{children:Object(n.jsx)(t,{fontSize:"large",style:{color:"#fff"}})}),Object(n.jsx)("h3",{children:s}),Object(n.jsx)("p",{children:r})]})},je=function(){var e=Object(O.a)(),t=Object(i.a)(e,1)[0],s=Object(c.useState)(0),r=s[0],a=s[1],o=Object(c.useRef)(),l=Object(c.useRef)(),d=Object(c.useRef)(),_=[{ref:o,classes:["down"]},{ref:l,classes:["up"]}];return Object(b.a)(d,_),Object(n.jsxs)("section",{ref:d,className:le.a.FourthPage,children:[Object(n.jsxs)("div",{ref:o,children:[Object(n.jsx)("h2",{children:"BENEFICIOS"}),Object(n.jsx)("h3",{children:"De usar Noktos"}),Object(n.jsx)("p",{children:"\xa1Disfruta de los beneficios exclusivos que te ofrece nuestra herramienta financiera!"})]}),Object(n.jsx)("div",{ref:l,children:t?Object(n.jsx)("div",{children:ae.map((function(e){var t=e.title,s=e.description,r=e.Icon;return Object(n.jsx)(ue,{title:t,description:s,Icon:r})}))}):Object(n.jsxs)("div",{children:[Object(n.jsx)(f.a,{itemsToShow:1,itemsToScroll:1,pagination:!1,onChange:function(e){var t=e.index;return a(t)},children:ae.map((function(e){var t=e.title,s=e.description,r=e.Icon;return Object(n.jsx)(ue,{title:t,description:s,Icon:r})}))}),Object(n.jsx)(D,{itemsLength:6,stepSelected:r})]})})]})},pe=s("5I82"),fe=s("jpIG"),Oe=s.n(fe),be={padding:"12px 32px",backgroundColor:"#00c2ff",fontFamily:"DM Sans Regular",textTransform:"none",fontWeight:600,borderRadius:10,letterSpacing:1},he=function(){var e=Object(a.useRouter)(),t=Object(c.useRef)(),s=Object(c.useRef)(),r=Object(c.useRef)(),i=[{ref:t,classes:["leftIn"]},{ref:s,classes:["fadeIn"]}];return Object(b.a)(r,i),Object(n.jsxs)("section",{ref:r,className:Oe.a.BannerPage,children:[Object(n.jsx)("div",{ref:s,className:Oe.a.BannerPage__banner,children:Object(n.jsx)("img",{alt:"",src:"/img/LandingPage/BannerPage/background.png"})}),Object(n.jsx)("div",{className:Oe.a.BannerPage__info,children:Object(n.jsx)("p",{children:"\xbfNecesitas cr\xe9dito financiero para tu PyMe?"})}),Object(n.jsx)("div",{ref:t,className:Oe.a.BannerPage__button,children:Object(n.jsx)(pe.a,{variant:"contained",style:be,onClick:function(){return e.push("/")},children:"Solicita el tuyo"})})]})},me=s("PQzt"),Ee=s("w8EB"),ge=s.n(Ee),ve=function(e){var t=e.initials,s=e.name,r=e.alias,i=e.description;return Object(n.jsxs)("div",{className:ge.a.Comment,children:[Object(n.jsx)("p",{children:i}),Object(n.jsxs)("div",{children:[Object(n.jsx)(me.a,{children:t}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:s}),Object(n.jsx)("label",{children:r})]})]})]})},Se=s("kR0d"),Te=s.n(Se),xe="/img/LandingPage/OurClients",Re=[{alt:"Saint Gobain",src:"".concat(xe,"/one.svg")},{alt:"Waldo's",src:"".concat(xe,"/two.svg")},{alt:"Merza",src:"".concat(xe,"/three.svg")},{alt:"Bachoco",src:"".concat(xe,"/four.svg")},{alt:"Aggreko",src:"".concat(xe,"/five.svg")}],Pe=[{initials:"EC",alias:"GANESH",name:"Ernesto Cruz",description:"Noktos ha revolucionado la forma en la que reservamos viajes, elegir vuelos y hoteles para satisfacer nuestras necesidades es muy simple."},{initials:"PL",alias:"EFECTO",name:"Patricia L\xf3pez",description:"A nuestro equipo le encanta usar Noktos. Es una experiencia mucho m\xe1s f\xe1cil e intuitiva. No tienen que estar intercambiando correos con la agencia o con el departamento de operaciones."},{initials:"PM",alias:"BRISTONE",name:"Pedro Mercado",description:"El mayor beneficio que aporta Noktos es la velocidad, simplemente es, mucho m\xe1s r\xe1pido!"}],Ie=function(){var e=Object(O.a)(),t=Object(i.a)(e,1)[0],s=Object(S.a)(1390),r=Object(i.a)(s,1)[0],a=Object(c.useState)(1),o=a[0],l=a[1],d=Object(c.useRef)(),_=Object(c.useRef)(),u=Object(c.useRef)(),j=Object(c.useRef)(),p=[{ref:d,classes:["down"]},{ref:_,classes:["left"]},{ref:u,classes:["right"]}];return Object(b.a)(j,p),Object(c.useEffect)((function(){l(r?3:t?2:1)}),[t,r]),Object(n.jsxs)("section",{className:Te.a.OurClients,ref:j,children:[Object(n.jsxs)("div",{className:Te.a.OurClients__brands,children:[Object(n.jsxs)("div",{ref:d,children:[Object(n.jsx)("h2",{children:"Nuestros Clientes"}),Object(n.jsx)("span",{children:"\xa1Te ayudamos a ahorrar tiempo y dinero!"})]}),Object(n.jsx)("div",{ref:_,children:Re.map((function(e){var t=e.src,s=e.alt;return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t,alt:s})})}))})]}),Object(n.jsxs)("div",{ref:u,className:Te.a.OurClients__comments,children:[Object(n.jsx)("div",{className:Te.a.OurClients__comments__title,children:Object(n.jsx)("div",{children:Object(n.jsx)("h5",{children:"Lo que dicen nuestros clientes"})})}),Object(n.jsxs)("div",{className:Te.a.OurClients__comments__clients,children:[Object(n.jsx)("div",{children:Object(n.jsx)(f.a,{enableAutoPlay:!0,itemsToShow:o,itemsToScroll:o,pagination:!1,autoPlaySpeed:8e3,children:Pe.map((function(e){var t=e.name,s=e.alias,r=e.initials,i=e.description;return Object(n.jsx)(ve,{name:t,alias:s,initials:r,description:i},i)}))})}),Object(n.jsx)("div",{className:Te.a.circleOne}),Object(n.jsx)("div",{className:Te.a.circleTwo}),Object(n.jsx)("div",{className:Te.a.circleThree})]})]})]})},Ce=(s("FeWu"),"/img/LandingPage/OurPartners"),ye=("".concat(Ce,"/hyatt.jpg"),"".concat(Ce,"/western.jpg"),"".concat(Ce,"/posadas.jpg"),"".concat(Ce,"/wyndham.png"),"".concat(Ce,"/choice.jpg"),"".concat(Ce,"/extended.jpg"),"".concat(Ce,"/city.jpg"),"".concat(Ce,"/mision.jpg"),s("W/aC")),Ae=s("/MKj"),Ne=s("G4Jp"),Le=function(){var e=Object(O.a)(),t=Object(i.a)(e,1)[0],s=Object(S.a)(1390),r=Object(i.a)(s,1)[0],a=Object(c.useState)(1),o=(a[0],a[1]),l=Object(c.useRef)(),d=Object(c.useRef)(),_=[{ref:l,classes:["down"]}];return Object(b.a)(d,_),Object(c.useEffect)((function(){o(r?3:t?2:1)}),[t,r]),Object(n.jsx)("section",{ref:d,children:Object(n.jsxs)("div",{className:"bg-dark d-flex flex-column align-items-center p-3",ref:l,children:[Object(n.jsx)("img",{className:"w-25",src:"/icons/techstars_logo.png",alt:"Techstars"}),Object(n.jsx)("p",{className:"text-center text-white mt-1",children:"Noktos, a Techstars Anywhere Accelerator portfolio company"})]})})},we=function(){var e=Object(Ae.c)();return Object(c.useEffect)((function(){Object(Ne.a)(e)}),[]),Object(n.jsx)(ye.a,{title:"Inicio | Noktos",children:Object(n.jsxs)("div",{style:{overflow:"hidden"},children:[Object(n.jsx)(m,{}),Object(n.jsx)($,{}),Object(n.jsx)(M,{}),Object(n.jsx)(je,{}),Object(n.jsx)(he,{}),Object(n.jsx)(Ie,{}),Object(n.jsx)(r.a,{}),Object(n.jsx)(Le,{})]})})};t.default=function(){return Object(n.jsx)(we,{})}},eJTh:function(e,t,s){e.exports={InfoItem:"styles_InfoItem__ZyRv5"}},indl:function(e,t,s){e.exports={InfoItem:"styles_InfoItem__2Xor6"}},jpIG:function(e,t,s){e.exports={BannerPage:"styles_BannerPage__2JEaV",BannerPage__banner:"styles_BannerPage__banner__3CsQg",BannerPage__info:"styles_BannerPage__info__8rTh3",BannerPage__button:"styles_BannerPage__button__1hkAd"}},kR0d:function(e,t,s){e.exports={OurClients:"styles_OurClients__2Ln70",OurClients__brands:"styles_OurClients__brands__3pdTm",OurClients__comments:"styles_OurClients__comments__1EgFR",OurClients__comments__title:"styles_OurClients__comments__title__1QqSk",OurClients__comments__clients:"styles_OurClients__comments__clients__-Qa6g",circleOne:"styles_circleOne__1OhRq",circleTwo:"styles_circleTwo__2kApl",circleThree:"styles_circleThree__1lJ4U"}},plP9:function(e,t,s){"use strict";var n=s("NoS8");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("jelL")),i=s("nKUr"),c=(0,r.default)((0,i.jsx)("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");t.default=c},tNib:function(e,t,s){e.exports={ThirdPage:"styles_ThirdPage__2LSm-"}},w8EB:function(e,t,s){e.exports={Comment:"styles_Comment__1LBCK"}},xGRY:function(e,t,s){e.exports={InfoItem:"styles_InfoItem__33Kek"}}},[["H0SL",1,2,6,0,3,4,5,8,12]]]);
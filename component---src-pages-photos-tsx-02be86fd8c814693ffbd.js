(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(255),c=n(37),i=n(60),s=(n(22),n(1),n(48)),u=n.n(s),l=(n(87),n(27),n(21)),p=function(e){var t=e.offset,n=e.previousLength,a=e.length,r=e.totalCount;return Object(l.f)(t)&&Object(l.f)(n)&&Object(l.d)(a)&&Object(l.d)(r)?a>0&&a<r-1:!(!Object(l.d)(a)||!Object(l.d)(r)||!Object(l.d)(t)&&!Object(l.d)(n))&&(a>0&&(t||(n||0))+a<r-1)},d=function(e){var t=e.countPerPage,n=e.previousTotalCount,a=e.offset,r=e.page;return a||r?e:Object(l.d)(n)&&Object(l.f)(a)&&Object(l.f)(r)?(e.page=Math.floor(n/t),e):Object.assign({},e,{page:0})},f=(n(88),n(15),n(269)),m=n(271),h=n(278),v=n(34);function g(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(a,r)}var b=function(){var e,t=(e=u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FileReader,e.abrupt("return",new Promise(function(e){n.addEventListener("load",function t(){n.removeEventListener("load",t),e(n.result)},!1),n.readAsDataURL(t)}));case 2:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){g(o,a,r,c,i,"next",e)}function i(e){g(o,a,r,c,i,"throw",e)}c(void 0)})});return function(e){return t.apply(this,arguments)}}();function E(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(a,r)}function y(e,t){void 0===t&&(t={});var n=e.status,a=e.headers;return{get statusCode(){return n},get headers(){return a},get body(){return t}}}function w(){var e;return e=u.a.mark(function e(t){var n,a,r,o,c,i,s,l,p,d,g,E,w,O,N,j,k,_,P,x,C,M;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(O in n=t.parameters,a=t.authorization,r=t.method,o=void 0===r?v.e.GET:r,c=t.contentType,i=void 0===c?v.d.JSON:c,s=t.protocol,l=t.host,p=t.api,d=t.urlPath,g=t.variables,E=void 0===g?{}:g,t.noCache&&(n=Object.assign({},n,{_:Math.random()})),w=function(){var e=p?f.join(p,d):d;return l?m.format(Object.assign({},{slashes:!0,host:l,pathname:e},{},s?{protocol:s}:{})):e}(),E)E.hasOwnProperty(O)&&(w=w.replace("{"+O+"}",E[O]));if(!n){e.next=21;break}e.t0=o,e.next=e.t0===v.e.GET?10:12;break;case 10:return w+="?"+h.stringify(n),e.abrupt("break",21);case 12:e.t1=i,e.next=e.t1===v.d.JSON?15:e.t1===v.d.FORM?17:20;break;case 15:return N=JSON.stringify(n),e.abrupt("break",20);case 17:for(j in N=new FormData,n)n.hasOwnProperty(j)&&N.append(j,n[j]);return e.abrupt("break",20);case 20:return e.abrupt("break",21);case 21:return k={Accept:i,"Content-Type":i},a&&(k.Authorization=a),e.prev=23,e.next=26,fetch(w,{method:o,headers:k,body:N});case 26:if((_=e.sent).ok){e.next=29;break}throw _;case 29:if(P={},i!==v.d.IMAGE){e.next=40;break}return e.next=33,_.blob();case 33:return x=e.sent,e.next=36,b(x);case 36:C=e.sent,P=C,e.next=48;break;case 40:return e.prev=40,e.next=43,_.json();case 43:P=e.sent,e.next=48;break;case 46:e.prev=46,e.t2=e.catch(40);case 48:return e.abrupt("return",y(_,P));case 51:return e.prev=51,e.t3=e.catch(23),e.prev=53,e.next=56,e.t3.json();case 56:M=e.sent,e.next=62;break;case 59:e.prev=59,e.t4=e.catch(53),M=e.t3;case 62:throw y(e.t3,M);case 63:case"end":return e.stop()}},e,null,[[23,51],[40,46],[53,59]])}),(w=function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){E(o,a,r,c,i,"next",e)}function i(e){E(o,a,r,c,i,"throw",e)}c(void 0)})}).apply(this,arguments)}var O=function(e){return w.apply(this,arguments)};n(281);function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var j=function(){function e(e){this.props=e}var t,n,a;return e.prototype.toJSON=function(){return{id:this.id,title:this.title,url:this.url}},t=e,(n=[{key:"__innerprops__",get:function(){return this.props}},{key:"id",get:function(){return this.props.id}},{key:"title",get:function(){return this.props.title}},{key:"url",get:function(){return"http://lorempixel.com/600/400/?_="+this.props.id+"}"}}])&&N(t.prototype,n),a&&N(t,a),e}();function k(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(a,r)}var _=function(){var e,t=(e=u.a.mark(function e(t){var n,a,r,o,c,i,s,p,d,f,m,h,g,b,E,y,w;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(a=t.offset,r=t.page,o=void 0===r?0:r,c=t.countPerPage,i=void 0===c?v.b:c,s=Object(l.d)(a)?a:o*i,n={_start:s,_limit:i}),e.prev=1,e.next=4,O({host:"jsonplaceholder.typicode.com",urlPath:"photos",parameters:n});case 4:return p=e.sent,d=p.statusCode,f=p.headers,m=p.body,h=f.get("x-total-count")||0,g=Number(h),b=m.map(function(e){return new j(e)}),e.abrupt("return",{status:v.a.SUCCESS,statusCode:d,data:b,totalCount:g});case 12:throw e.prev=12,e.t0=e.catch(1),E=e.t0,y=E.statusCode,w=E.body,{status:v.a.ERROR,statusCode:y,body:w};case 17:case"end":return e.stop()}},e,null,[[1,12]])}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function c(e){k(o,a,r,c,i,"next",e)}function i(e){k(o,a,r,c,i,"throw",e)}c(void 0)})});return function(e){return t.apply(this,arguments)}}(),P=n(68);function x(e,t,n,a,r,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(a,r)}var C=function(e){return function(){var t,n=(t=u.a.mark(function t(n){var a,r,o,c,i,s,l,f,m,h;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=d(e||{countPerPage:50}),r=a.offset,o=a.page,c=a.countPerPage,n({type:P.a.FETCHING}),t.prev=2,t.next=5,_({offset:r,page:o,countPerPage:c});case 5:i=t.sent,s=i.data,l=i.totalCount,f=void 0===l?0:l,m=s.length,h=p({length:m,totalCount:f}),n((u={list:s,hasMore:h,isFetching:!1},{type:P.a.LOADED,payload:u})),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),n({type:P.a.FETCH_ERROR}),console.log(t.t0);case 16:case"end":return t.stop()}var u},t,null,[[2,12]])}),function(){var e=this,n=arguments;return new Promise(function(a,r){var o=t.apply(e,n);function c(e){x(o,a,r,c,i,"next",e)}function i(e){x(o,a,r,c,i,"throw",e)}c(void 0)})});return function(e){return n.apply(this,arguments)}}()},M=function(){return{type:P.a.RESET}},R=n(70),S=n(248),T=(n(160),function(e){return e.photos}),F=function(e){return T(e).list},A=function(e){return T(e).hasMore},G=function(e){return T(e).isFetching},L=n(251),J=n(250),D=n.n(J);n(14),n(13),n(29);var I,U=function(e){var t=e.children,n=e.colSpan,r=e.rowSpan,o=e.className,c=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","colSpan","rowSpan","className"]),i={};return n&&(i.gridColumn="span "+n+" / auto"),r&&(i.gridRow="span "+r+" / auto"),a.createElement("div",Object.assign({className:D()("tile",o),style:i},c),t)},q=(n(241),function(e){var t=e.gutter,n=e.className,r=e.children,o=a.useRef(null);return a.useEffect(function(){var e=o.current;e&&!n&&t&&e.style.setProperty("--tiles-gutter",t)},[t,n]),a.createElement("div",{ref:o,className:D()("tiles",n)},r)});n(242);!function(e){e.SQUARE="square",e.RECTANGLE="rectangle"}(I||(I={}));var z=function(e){var t=e.url,n=e.type,r=void 0===n?I.RECTANGLE:n,o=e.className,c={className:D()(o,"imagecard","imagecard--"+r),style:{backgroundImage:"url('"+t+"')"}};return a.createElement("div",c)},H=(n(243),function(e){var t=e.data,n=t.url,r=t.title;return a.createElement("div",{className:"photocard"},a.createElement(z,{url:n}),a.createElement("div",{className:"photocard__title"},r))}),B=(n(244),a.memo(function(){var e=Object(i.b)(),t=Object(i.c)(F),n=Object(i.c)(A),r=Object(i.c)(G);a.useEffect(function(){e(C({page:0,countPerPage:18,previousTotalCount:t.length}))},[]);return a.createElement(a.Fragment,null,a.createElement(R.a,{id:"photos.pagetitle",defaultMessage:"Photos"},function(e){return a.createElement(L.a,{title:e})}),a.createElement("div",{className:"photos"},a.createElement(q,{className:"photos__tiles"},t.map(function(e,t){return a.createElement(U,{key:t,onClick:(n=e.id,function(){return Object(S.b)("photos/"+n)})},a.createElement(H,{data:e}));var n})),!r&&n&&a.createElement("div",{className:"photos__hasmore"},a.createElement("button",{onClick:function(){e(C({countPerPage:18,previousTotalCount:t.length}))}},a.createElement(R.a,{id:"photos.loadmore",defaultMessage:"Load more"}))),r&&a.createElement("div",{className:"photos__hasmore"},a.createElement(R.a,{id:"photos.loading",defaultMessage:"Loading..."}))))})),K=(n(245),a.memo(function(e){var t=e.id,n=Object(i.c)(function(e){return function(t){return F(t).find(function(t){return t.id===e})}}(Number(t))),r=n?n.id:"Not Found";return a.createElement(a.Fragment,null,a.createElement(R.a,{id:"photo.pagetitle",defaultMessage:"Photo {id}",values:{id:r}},function(e){return a.createElement(L.a,{title:e})}),a.createElement("div",{className:"photo"},n?a.createElement(H,{data:n}):a.createElement(R.a,{id:"photo.not-found",defaultMessage:"Photo: {id} - Not Found",values:{id:t}}),a.createElement(S.a,{to:"photos",className:"photo__link"},a.createElement(R.a,{id:"photo.return-to-photos",defaultMessage:"Return to photos"}))))})),Q=function(){var e=Object(i.b)();return a.useEffect(function(){return function(){e(M())}},[]),a.createElement(c.Router,{basepath:"gatsby-typescript-app-starter/photos"},a.createElement(B,{path:"/"}),a.createElement(K,{path:":id"}))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(Q,null))}},248:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(86),c=n.n(o);n.d(t,"a",function(){return c.a}),n.d(t,"b",function(){return o.navigateTo});n(249),n(20).default.enqueue,r.a.createContext({})},249:function(e,t,n){var a;e.exports=(a=n(253))&&a.default||a},251:function(e,t,n){"use strict";var a=n(254),r=n(0),o=n(256),c=n.n(o),i=function(e){var t=e.description,n=e.lang,o=e.meta,i=e.title,s=a.data.site,u=t||s.siteMetadata.description,l=[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}];return r.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:l.concat(o)})};i.defaultProps={lang:"en",meta:[],description:""},t.a=i},252:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter"}}}}},253:function(e,t,n){"use strict";n.r(t);n(27);var a=n(0),r=n.n(a),o=n(116);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},254:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter",description:"Kick off your next, great Gatsby typescript application project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@erkobridee"}}}}},255:function(e,t,n){"use strict";var a=n(252),r=n(0),o=n(248),c=(n(229),function(e){var t=e.siteTitle,n=void 0===t?"":t;return r.createElement("div",{className:"layoutheader"},r.createElement("div",{className:"layoutheader__content"},r.createElement("div",{className:"layoutheader__title"},r.createElement(o.a,{to:"/",className:"layoutheader__link"},n))))}),i=n(70),s=(n(14),n(13),n(1),n(29),n(27),n(17),n(250)),u=n.n(s);var l=function(e){var t=e.name,n=e.className,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["name","className"]),o=u()("icon icon-"+t+"_icon",n);return r.createElement("i",Object.assign({className:o},a))},p=n(60),d=n(117),f=n(115),m=(n(230),Object(i.d)({en:{id:"language.selector.option.english",defaultMessage:"English"},es:{id:"language.selector.option.spanish",defaultMessage:"Spanish"},pt:{id:"language.selector.option.portuguese",defaultMessage:"Portuguese"}})),h=Object(i.e)(function(e){var t=e.intl,n=e.className,a=e.label,o=void 0===a?r.createElement(i.a,{id:"language.selector.label",defaultMessage:"Select another available language"}):a,c=Object(p.b)(),s=Object(p.c)(f.b);return r.createElement("div",{className:u()("languageselector",n)},o&&r.createElement("div",{className:"languageselector__label"},o),r.createElement("div",{className:"languageselector__selectcontainer"},r.createElement("select",{value:s,onChange:function(e){c(Object(d.a)(e.target.value))},className:"languageselector__select"},Object.keys(m).map(function(e,n){return r.createElement("option",{key:n,value:e},t.formatMessage(m[e]))}),"}")))}),v=(n(231),function(){return r.createElement("div",{className:"layoutfooter"},r.createElement("div",{className:"layoutfooter__content"},r.createElement("div",null,"© ",(new Date).getFullYear(),", ",r.createElement(i.a,{id:"layout.build-with",defaultMessage:"Built with"})," ",r.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby ",r.createElement(l,{name:"heart"}))),r.createElement(h,null)))});n(232),t.a=function(e){var t=e.children,n=e.displayFooter,o=void 0===n||n,i=a.data;return r.createElement("div",{className:"layout"},r.createElement(c,{siteTitle:i.site.siteMetadata.title}),r.createElement("div",{className:"layout__content"},t),o&&r.createElement(v,null))}}}]);
//# sourceMappingURL=component---src-pages-photos-tsx-02be86fd8c814693ffbd.js.map
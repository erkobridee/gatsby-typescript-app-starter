(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{240:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(67),l=a(256),s=a(252);t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(r.a,{id:"404.title",defaultMessage:"404: Not found"},function(e){return i.a.createElement(s.a,{title:e})}),i.a.createElement("h1",null,i.a.createElement(r.a,{id:"404.title",defaultMessage:"404: Not found"})),i.a.createElement("p",null,i.a.createElement(r.a,{id:"404.message",defaultMessage:"You just hit a route that doesn't exist... the sadness."})))}},249:function(e,t,a){var n;e.exports=(n=a(254))&&n.default||n},251:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),l=a.n(r),s=a(86),c=a.n(s);a.d(t,"a",function(){return c.a});a(249),i.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},252:function(e,t,a){"use strict";var n=a(255),i=a(0),r=a(257),l=a.n(r),s=function(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,c=n.data.site,o=t||c.siteMetadata.description,u=[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}];return i.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:u.concat(r)})};s.defaultProps={lang:"en",meta:[],description:""},t.a=s},253:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter"}}}}},254:function(e,t,a){"use strict";a.r(t);a(17);var n=a(0),i=a.n(n),r=a(1),l=a.n(r),s=a(118),c=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},255:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter",description:"Kick off your next, great Gatsby typescript application project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@erkobridee"}}}}},256:function(e,t,a){"use strict";var n=a(253),i=a(0),r=a(251),l=(a(229),function(e){var t=e.siteTitle,a=void 0===t?"":t;return i.createElement("div",{className:"layoutheader"},i.createElement("div",{className:"layoutheader__content"},i.createElement("div",{className:"layoutheader__title"},i.createElement(r.a,{to:"/",className:"layoutheader__link"},a))))}),s=a(67),c=(a(17),a(18),a(88)),o=a.n(c),u=a(250),d=a.n(u),m=function(e){var t=e.name,a=e.className,n=o()(e,["name","className"]),r=d()("icon icon-"+t+"_icon",a);return i.createElement("i",Object.assign({className:r},n))},p=(a(16),a(9),a(2),a(26),a(59)),g=a(119),f=a(117),h=(a(230),Object(s.d)({en:{id:"language.selector.option.english",defaultMessage:"English"},es:{id:"language.selector.option.spanish",defaultMessage:"Spanish"},pt:{id:"language.selector.option.portuguese",defaultMessage:"Portuguese"}})),E=Object(s.e)(function(e){var t=e.intl,a=e.className,n=e.label,r=void 0===n?i.createElement(s.a,{id:"language.selector.label",defaultMessage:"Select another available language"}):n,l=Object(p.b)(),c=Object(p.c)(f.b);return i.createElement("div",{className:d()("languageselector",a)},r&&i.createElement("div",{className:"languageselector__label"},r),i.createElement("div",{className:"languageselector__selectcontainer"},i.createElement("select",{value:c,onChange:function(e){l(Object(g.a)(e.target.value))},className:"languageselector__select"},Object.keys(h).map(function(e,a){return i.createElement("option",{key:a,value:e},t.formatMessage(h[e]))}),"}")))}),v=(a(231),function(){return i.createElement("div",{className:"layoutfooter"},i.createElement("div",{className:"layoutfooter__content"},i.createElement("div",null,"© ",(new Date).getFullYear(),", ",i.createElement(s.a,{id:"layout.build-with",defaultMessage:"Built with"})," ",i.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby ",i.createElement(m,{name:"heart"}))),i.createElement(E,null)))});a(232),t.a=function(e){var t=e.children,a=e.displayFooter,r=void 0===a||a,s=n.data;return i.createElement("div",{className:"layout"},i.createElement(l,{siteTitle:s.site.siteMetadata.title}),i.createElement("div",{className:"layout__content"},t),r&&i.createElement(v,null))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-907ab006b9e89c5acbd7.js.map
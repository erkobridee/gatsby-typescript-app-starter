(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{247:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(248),s=a(70),l=a(255),o=a(265),c=a(266),d=a.n(c),u=function(){var e=o.data;return n.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},f=a(251);t.default=function(){return n.a.createElement(l.a,null,n.a.createElement(s.a,{id:"home.pagetitle",defaultMessage:"Home"},function(e){return n.a.createElement(f.a,{title:e})}),n.a.createElement("h1",null,n.a.createElement(s.a,{id:"home.greeting",defaultMessage:"Hi people"})),n.a.createElement("p",null,n.a.createElement(s.a,{id:"home.welcome",defaultMessage:"Welcome to your new Gatsby site."})),n.a.createElement("p",null,n.a.createElement(s.a,{id:"home.gobuild",defaultMessage:"Now go build something great."})),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(u,null)),n.a.createElement("div",null,n.a.createElement(i.a,{to:"/page-2"},n.a.createElement(s.a,{id:"home.link-page2",defaultMessage:"Go to page 2"}))," "," | ",n.a.createElement(i.a,{to:"/photos"},n.a.createElement(s.a,{id:"home.link-photos",defaultMessage:"Go to photos"}))))}},248:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(86),s=a.n(i);a.d(t,"a",function(){return s.a}),a.d(t,"b",function(){return i.navigate});a(249),a(20).default.enqueue,n.a.createContext({})},249:function(e,t,a){var r;e.exports=(r=a(253))&&r.default||r},251:function(e,t,a){"use strict";var r=a(254),n=a(0),i=a(256),s=a.n(i),l=function(e){var t=e.description,a=e.lang,i=e.meta,l=e.title,o=r.data.site,c=t||o.siteMetadata.description,d=[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}];return n.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:d.concat(i)})};l.defaultProps={lang:"en",meta:[],description:""},t.a=l},252:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter"}}}}},253:function(e,t,a){"use strict";a.r(t);a(27);var r=a(0),n=a.n(r),i=a(116);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},254:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby TypeScript Application Starter",description:"Kick off your next, great Gatsby typescript application project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@erkobridee"}}}}},255:function(e,t,a){"use strict";var r=a(252),n=a(0),i=a(248),s=(a(229),function(e){var t=e.siteTitle,a=void 0===t?"":t;return n.createElement("div",{className:"layoutheader"},n.createElement("div",{className:"layoutheader__content"},n.createElement("div",{className:"layoutheader__title"},n.createElement(i.a,{to:"/",className:"layoutheader__link"},a))))}),l=a(70),o=(a(14),a(13),a(1),a(29),a(27),a(17),a(250)),c=a.n(o);var d=function(e){var t=e.name,a=e.className,r=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["name","className"]),i=c()("icon icon-"+t+"_icon",a);return n.createElement("i",Object.assign({className:i},r))},u=a(60),f=a(117),g=a(115),p=(a(230),Object(l.d)({en:{id:"language.selector.option.english",defaultMessage:"English"},es:{id:"language.selector.option.spanish",defaultMessage:"Spanish"},pt:{id:"language.selector.option.portuguese",defaultMessage:"Portuguese"}})),m=Object(l.e)(function(e){var t=e.intl,a=e.className,r=e.label,i=void 0===r?n.createElement(l.a,{id:"language.selector.label",defaultMessage:"Select another available language"}):r,s=Object(u.b)(),o=Object(u.c)(g.b);return n.createElement("div",{className:c()("languageselector",a)},i&&n.createElement("div",{className:"languageselector__label"},i),n.createElement("div",{className:"languageselector__selectcontainer"},n.createElement("select",{value:o,onChange:function(e){s(Object(f.a)(e.target.value))},className:"languageselector__select"},Object.keys(p).map(function(e,a){return n.createElement("option",{key:a,value:e},t.formatMessage(p[e]))}),"}")))}),h=(a(231),function(){return n.createElement("div",{className:"layoutfooter"},n.createElement("div",{className:"layoutfooter__content"},n.createElement("div",null,"© ",(new Date).getFullYear(),", ",n.createElement(l.a,{id:"layout.build-with",defaultMessage:"Built with"})," ",n.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby ",n.createElement(d,{name:"heart"}))),n.createElement(m,null)))});a(232),t.a=function(e){var t=e.children,a=e.displayFooter,i=void 0===a||a,l=r.data;return n.createElement("div",{className:"layout"},n.createElement(s,{siteTitle:l.site.siteMetadata.title}),n.createElement("div",{className:"layout__content"},t),i&&n.createElement(h,null))}},265:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/gatsby-typescript-app-starter/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/gatsby-typescript-app-starter/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/gatsby-typescript-app-starter/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/gatsby-typescript-app-starter/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/gatsby-typescript-app-starter/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/gatsby-typescript-app-starter/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/gatsby-typescript-app-starter/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},266:function(e,t,a){"use strict";a(14),a(13),a(1),a(62),a(159),a(267);var r=a(32);t.__esModule=!0,t.default=void 0;var n,i=r(a(92)),s=r(a(93)),l=r(a(161)),o=r(a(162)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)}).join("")+"<img "+c+s+l+a+r+t+i+n+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(R,(0,o.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},R=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,O=e.loading,N=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,o.default)({opacity:A?1:0,transition:z?"opacity "+b+"ms":"none"},l),V="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&x,l,f),j={title:t,alt:this.state.isVisible?"":a,style:T,className:g};if(p){var C=p,W=C[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),V&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&x)}),W.base64&&c.default.createElement(L,{src:W.base64,spreadProps:j,imageVariants:C,generateSources:w}),W.tracedSVG&&c.default.createElement(L,{src:W.tracedSVG,spreadProps:j,imageVariants:C,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(C),c.default.createElement(R,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:O},W,{imageVariants:C}))}}))}if(m){var k=m,q=k[0],P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete P.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&x)}),q.base64&&c.default.createElement(L,{src:q.base64,spreadProps:j,imageVariants:k,generateSources:w}),q.tracedSVG&&c.default.createElement(L,{src:q.tracedSVG,spreadProps:j,imageVariants:k,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(k),c.default.createElement(R,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:O},q,{imageVariants:k}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),M=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});A.propTypes={resolutions:z,sizes:M,fixed:d.default.oneOfType([z,d.default.arrayOf(z)]),fluid:d.default.oneOfType([M,d.default.arrayOf(M)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=A;t.default=V},267:function(e,t,a){"use strict";a(268)("fixed",function(e){return function(){return e(this,"tt","","")}})},268:function(e,t,a){var r=a(7),n=a(8),i=a(47),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c2e15fb5a226892286d3.js.map
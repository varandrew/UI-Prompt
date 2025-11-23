// Preview 4: Vision Launch Narrative
// 视觉启航叙事 - 四阶段滚动驱动的叙事体验

export const previewConfig = {
  id: 'vision-launch-narrative',
  name: {
    'zh-CN': '视觉启航叙事',
    'en-US': 'Vision Launch Narrative'
  },
  type: 'full',
  description: {
    'zh-CN': '通过滚动驱动的四阶段视觉叙事，展示从混沌到秩序的演化过程。包含实时进度追踪、3D视差效果、粒子动画系统和色彩分离特效。',
    'en-US': 'A four-stage scroll-driven visual narrative showcasing evolution from chaos to order. Features real-time progress tracking, 3D parallax effects, particle animation system, and chromatic aberration effects.'
  },
  features: [
    'four-stage-scroll-narrative',
    'real-time-progress-tracking',
    '3d-parallax-effects',
    'particle-chaos-system',
    'glassmorphic-3d-cards',
    'chromatic-aberration-warp'
  ],
  colorScheme: {
    'zh-CN': '主色橙色 (#f97316)、背景深黑 (#050505)、文字浅灰 (#eaeaea)、强调白色 (#ffffff)',
    'en-US': 'Primary orange (#f97316), background near-black (#050505), text light gray (#eaeaea), accent white (#ffffff)'
  }
};

export const previewHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vision Launch Narrative</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com/3.4.0"></script>

  <!-- ✅ 内联 Preact UMD (压缩后) -->
  <script>
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).preact={})}(this,function(e){var n,t,_,o,l,r,u,i,s,f,c,p,a=65536,d=1<<17,h={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,m=Array.isArray;function g(e,n){for(var t in n)e[t]=n[t];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function k(e,t,_){var o,l,r,u={};for(r in t)"key"==r?o=t[r]:"ref"==r?l=t[r]:u[r]=t[r];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):_),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return w(e,u,o,l,null)}function w(e,n,o,l,r){var u={type:e,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++_:r,__i:-1,__u:0};return null==r&&null!=t.vnode&&t.vnode(u),u}function x(e){return e.children}function C(e,n){this.props=e,this.context=n}function P(e,n){if(null==n)return e.__?P(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?P(e):null}function S(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return S(e)}}function U(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!T.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||u)(T)}function T(){var e,n,_,o,r,u,s,f;for(l.sort(i);e=l.shift();)e.__d&&(n=l.length,o=void 0,u=(r=(_=e).__v).__e,s=[],f=[],_.__P&&((o=g({},r)).__v=r.__v+1,t.vnode&&t.vnode(o),A(_.__P,o,r,_.__n,_.__P.namespaceURI,32&r.__u?[u]:null,s,null==u?P(r):u,!!(32&r.__u),f),o.__v=r.__v,o.__.__k[o.__i]=o,R(s,o,f),o.__e!=u&&S(o)),l.length>n&&l.sort(i));T.__r=0}function D(e,n,t,_,o,l,r,u,i,s,f){var c,p,d,y,m,g=_&&_.__k||v,b=n.length;for(t.__d=i,M(t,n,g),i=t.__d,c=0;c<b;c++)null!=(d=t.__k[c])&&(p=-1===d.__i?h:g[d.__i]||h,d.__i=c,A(e,d,p,o,l,r,u,i,s,f),y=d.__e,d.ref&&p.ref!=d.ref&&(p.ref&&I(p.ref,null,d),f.push(d.ref,d.__c||y,d)),null==m&&null!=y&&(m=y),d.__u&a||p.__k===d.__k?i=E(d,i,e):"function"==typeof d.type&&void 0!==d.__d?i=d.__d:y&&(i=y.nextSibling),d.__d=void 0,d.__u&=-196609);t.__d=i,t.__e=m}function M(e,n,t){var _,o,l,r,u,i=n.length,s=t.length,f=s,c=0;for(e.__k=[],_=0;_<i;_++)null!=(o=n[_])&&"boolean"!=typeof o&&"function"!=typeof o?(r=_+c,(o=e.__k[_]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?w(null,o,null,null,null):m(o)?w(x,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?w(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,l=null,-1!==(u=o.__i=W(o,t,r,f))&&(f--,(l=t[u])&&(l.__u|=d)),null==l||null===l.__v?(-1==u&&c--,"function"!=typeof o.type&&(o.__u|=a)):u!==r&&(u==r-1?c--:u==r+1?c++:(u>r?c--:c++,o.__u|=a))):o=e.__k[_]=null;if(f)for(_=0;_<s;_++)null!=(l=t[_])&&0==(l.__u&d)&&(l.__e==e.__d&&(e.__d=P(l)),$(l,l))}function E(e,n,t){var _,o;if("function"==typeof e.type){for(_=e.__k,o=0;_&&o<_.length;o++)_[o]&&(_[o].__=e,n=E(_[o],n,t));return n}e.__e!=n&&(n&&e.type&&!t.contains(n)&&(n=P(e)),t.insertBefore(e.__e,n||null),n=e.__e);do{n=n&&n.nextSibling}while(null!=n&&8===n.nodeType);return n}function W(e,n,t,_){var o=e.key,l=e.type,r=t-1,u=t+1,i=n[t];if(null===i||i&&o==i.key&&l===i.type&&0==(i.__u&d))return t;if(_>(null!=i&&0==(i.__u&d)?1:0))for(;r>=0||u<n.length;){if(r>=0){if((i=n[r])&&0==(i.__u&d)&&o==i.key&&l===i.type)return r;r--}if(u<n.length){if((i=n[u])&&0==(i.__u&d)&&o==i.key&&l===i.type)return u;u++}}return-1}function L(e,n,t){"-"===n[0]?e.setProperty(n,null==t?"":t):e[n]=null==t?"":"number"!=typeof t||y.test(n)?t:t+"px"}function F(e,n,t,_,o){var l;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||L(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||L(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])l=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e||"onFocusOut"===n||"onFocusIn"===n?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+l]=t,t?_?t.t=_.t:(t.t=s,e.addEventListener(n,l?c:f,l)):e.removeEventListener(n,l?c:f,l);else{if("http://www.w3.org/2000/svg"==o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=n&&"height"!=n&&"href"!=n&&"list"!=n&&"form"!=n&&"tabIndex"!=n&&"download"!=n&&"rowSpan"!=n&&"colSpan"!=n&&"role"!=n&&"popover"!=n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null==t||!1===t&&"-"!==n[4]?e.removeAttribute(n):e.setAttribute(n,"popover"==n&&1==t?"":t))}}function N(e){return function(n){if(this.l){var _=this.l[n.type+e];if(null==n.u)n.u=s++;else if(n.u<_.t)return;return _(t.event?t.event(n):n)}}}function A(e,n,_,o,l,r,u,i,s,f){var c,p,a,d,h,v,y,b,k,w,P,S,U,T,M,E,W=n.type;if(void 0!==n.constructor)return null;128&_.__u&&(s=!!(32&_.__u),r=[i=n.__e=_.__e]),(c=t.__b)&&c(n);e:if("function"==typeof W)try{if(b=n.props,k="prototype"in W&&W.prototype.render,w=(c=W.contextType)&&o[c.__c],P=c?w?w.props.value:c.__:o,_.__c?y=(p=n.__c=_.__c).__=p.__E:(k?n.__c=p=new W(b,P):(n.__c=p=new C(b,P),p.constructor=W,p.render=O),w&&w.sub(p),p.props=b,p.state||(p.state={}),p.context=P,p.__n=o,a=p.__d=!0,p.__h=[],p._sb=[]),k&&null==p.__s&&(p.__s=p.state),k&&null!=W.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=g({},p.__s)),g(p.__s,W.getDerivedStateFromProps(b,p.__s))),d=p.props,h=p.state,p.__v=n,a)k&&null==W.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),k&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(k&&null==W.getDerivedStateFromProps&&b!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,P)||n.__v===_.__v)){for(n.__v!==_.__v&&(p.props=b,p.state=p.__s,p.__d=!1),n.__e=_.__e,n.__k=_.__k,n.__k.some(function(e){e&&(e.__=n)}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,P),k&&null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,h,v)})}if(p.context=P,p.props=b,p.__P=e,p.__e=!1,U=t.__r,T=0,k){for(p.state=p.__s,p.__d=!1,U&&U(n),c=p.render(p.props,p.state,p.context),M=0;M<p._sb.length;M++)p.__h.push(p._sb[M]);p._sb=[]}else do{p.__d=!1,U&&U(n),c=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++T<25);p.state=p.__s,null!=p.getChildContext&&(o=g(g({},o),p.getChildContext())),k&&!a&&null!=p.getSnapshotBeforeUpdate&&(v=p.getSnapshotBeforeUpdate(d,h)),D(e,m(E=null!=c&&c.type===x&&null==c.key?c.props.children:c)?E:[E],n,_,o,l,r,u,i,s,f),p.base=n.__e,n.__u&=-161,p.__h.length&&u.push(p),y&&(p.__E=p.__=null)}catch(e){if(n.__v=null,s||null!=r){for(n.__u|=s?160:32;i&&8===i.nodeType&&i.nextSibling;)i=i.nextSibling;r[r.indexOf(i)]=null,n.__e=i}else n.__e=_.__e,n.__k=_.__k;t.__e(e,n,_)}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=H(_.__e,n,_,o,l,r,u,s,f);(c=t.diffed)&&c(n)}function R(e,n,_){n.__d=void 0;for(var o=0;o<_.length;o++)I(_[o],_[++o],_[++o]);t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function H(e,_,o,l,r,u,i,s,f){var c,p,a,d,v,y,g,k=o.props,w=_.props,x=_.type;if("svg"===x?r="http://www.w3.org/2000/svg":"math"===x?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),null!=u)for(c=0;c<u.length;c++)if((v=u[c])&&"setAttribute"in v==!!x&&(x?v.localName===x:3===v.nodeType)){e=v,u[c]=null;break}if(null==e){if(null===x)return document.createTextNode(w);e=document.createElementNS(r,x,w.is&&w),s&&(t.__m&&t.__m(_,u),s=!1),u=null}if(null===x)k===w||s&&e.data===w||(e.data=w);else{if(u=u&&n.call(e.childNodes),k=o.props||h,!s&&null!=u)for(k={},c=0;c<e.attributes.length;c++)k[(v=e.attributes[c]).name]=v.value;for(c in k)if(v=k[c],"children"==c);else if("dangerouslySetInnerHTML"==c)a=v;else if(!(c in w)){if("value"==c&&"defaultValue"in w||"checked"==c&&"defaultChecked"in w)continue;F(e,c,null,v,r)}for(c in w)v=w[c],"children"==c?d=v:"dangerouslySetInnerHTML"==c?p=v:"value"==c?y=v:"checked"==c?g=v:s&&"function"!=typeof v||k[c]===v||F(e,c,v,k[c],r);if(p)s||a&&(p.__html===a.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(a&&(e.innerHTML=""),D(e,m(d)?d:[d],_,o,l,"foreignObject"===x?"http://www.w3.org/1999/xhtml":r,u,i,u?u[0]:o.__k&&P(o,0),s,f),null!=u)for(c=u.length;c--;)b(u[c]);s||(c="value","progress"===x&&null==y?e.removeAttribute("value"):void 0!==y&&(y!==e[c]||"progress"===x&&!y||"option"===x&&y!==k[c])&&F(e,c,y,k[c],r),c="checked",void 0!==g&&g!==e[c]&&F(e,c,g,k[c],r))}return e}function I(e,n,_){try{if("function"==typeof e){var o="function"==typeof e.__u;o&&e.__u(),o&&null==n||(e.__u=e(n))}else e.current=n}catch(e){t.__e(e,_)}}function $(e,n,_){var o,l;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||I(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&$(o[l],n,_||"function"!=typeof e.type);_||b(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function O(e,n,t){return this.constructor(e,t)}function B(e,_,o){var l,r,u,i;t.__&&t.__(e,_),r=(l="function"==typeof o)?null:o&&o.__k||_.__k,u=[],i=[],A(_,e=(!l&&o||_).__k=k(x,null,[e]),r||h,h,_.namespaceURI,!l&&o?[o]:r?null:_.firstChild?n.call(_.childNodes):null,u,!l&&o?o:r?r.__e:_.firstChild,l,i),R(u,e,i)}n=v.slice,t={__e:function(e,n,t,_){for(var o,l,r;n=n.__;)if((o=n.__c)&&!o.__)try{if((l=o.constructor)&&null!=l.getDerivedStateFromError&&(o.setState(l.getDerivedStateFromError(e)),r=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),r=o.__d),r)return o.__E=o}catch(n){e=n}throw e}},_=0,o=function(e){return null!=e&&null==e.constructor},C.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=g({},this.state),"function"==typeof e&&(e=e(g({},t),this.props)),e&&g(t,e),null!=e&&this.__v&&(n&&this._sb.push(n),U(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),U(this))},C.prototype.render=x,l=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=function(e,n){return e.__v.__b-n.__v.__b},T.__r=0,s=0,f=N(!1),c=N(!0),p=0,e.Component=C,e.Fragment=x,e.cloneElement=function(e,t,_){var o,l,r,u,i=g({},e.props);for(r in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)"key"==r?o=t[r]:"ref"==r?l=t[r]:i[r]=void 0===t[r]&&void 0!==u?u[r]:t[r];return arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):_),w(e.type,i,o||e.key,l||e.ref,null)},e.createContext=function(e,n){var t={__c:n="__cC"+p++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.componentWillUnmount=function(){t=null},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(function(e){e.__e=!0,U(e)})},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t&&t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t},e.createElement=k,e.createRef=function(){return{current:null}},e.h=k,e.hydrate=function e(n,t){B(n,t,e)},e.isValidElement=o,e.options=t,e.render=B,e.toChildArray=function e(n,t){return t=t||[],null==n||"boolean"==typeof n||(m(n)?n.some(function(n){e(n,t)}):t.push(n)),t}});
  </script>

  <!-- ✅ 内联 Preact Hooks UMD (压缩后) -->
  <script>
!function(_,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("preact")):"function"==typeof define&&define.amd?define(["exports","preact"],n):n((_||self).preactHooks={},_.preact)}(this,function(_,n){var t,e,u,o,r=0,c=[],i=n.options,f=i.__b,a=i.__r,h=i.diffed,s=i.__c,l=i.unmount,v=i.__;function m(_,n){i.__h&&i.__h(e,_,r||n),r=0;var t=e.__H||(e.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({}),t.__[_]}function p(_){return r=1,d(q,_)}function d(_,n,u){var o=m(t++,2);if(o.t=_,!o.__c&&(o.__=[u?u(n):q(void 0,n),function(_){var n=o.__N?o.__N[0]:o.__[0],t=o.t(n,_);n!==t&&(o.__N=[t,o.__[1]],o.__c.setState({}))}],o.__c=e,!e.u)){var r=function(_,n,t){if(!o.__c.__H)return!0;var e=o.__c.__H.__.filter(function(_){return!!_.__c});if(e.every(function(_){return!_.__N}))return!c||c.call(this,_,n,t);var u=!1;return e.forEach(function(_){if(_.__N){var n=_.__[0];_.__=_.__N,_.__N=void 0,n!==_.__[0]&&(u=!0)}}),!(!u&&o.__c.props===_)&&(!c||c.call(this,_,n,t))};e.u=!0;var c=e.shouldComponentUpdate,i=e.componentWillUpdate;e.componentWillUpdate=function(_,n,t){if(this.__e){var e=c;c=void 0,r(_,n,t),c=e}i&&i.call(this,_,n,t)},e.shouldComponentUpdate=r}return o.__N||o.__}function H(_,n){var u=m(t++,4);!i.__s&&k(u.__H,n)&&(u.__=_,u.i=n,e.__h.push(u))}function y(_,n){var e=m(t++,7);return k(e.__H,n)&&(e.__=_(),e.__H=n,e.__h=_),e.__}function E(){for(var _;_=c.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(g),_.__H.__h.forEach(C),_.__H.__h=[]}catch(n){_.__H.__h=[],i.__e(n,_.__v)}}i.__b=function(_){e=null,f&&f(_)},i.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),v&&v(_,n)},i.__r=function(_){a&&a(_),t=0;var n=(e=_.__c).__H;n&&(u===e?(n.__h=[],e.__h=[],n.__.forEach(function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0})):(n.__h.forEach(g),n.__h.forEach(C),n.__h=[],t=0)),u=e},i.diffed=function(_){h&&h(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(1!==c.push(n)&&o===i.requestAnimationFrame||((o=i.requestAnimationFrame)||b)(E)),n.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.i=void 0})),u=e=null},i.__c=function(_,n){n.some(function(_){try{_.__h.forEach(g),_.__h=_.__h.filter(function(_){return!_.__||C(_)})}catch(t){n.some(function(_){_.__h&&(_.__h=[])}),n=[],i.__e(t,_.__v)}}),s&&s(_,n)},i.unmount=function(_){l&&l(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(_){try{g(_)}catch(_){n=_}}),t.__H=void 0,n&&i.__e(n,t.__v))};var N="function"==typeof requestAnimationFrame;function b(_){var n,t=function(){clearTimeout(e),N&&cancelAnimationFrame(n),setTimeout(_)},e=setTimeout(t,100);N&&(n=requestAnimationFrame(t))}function g(_){var n=e,t=_.__c;"function"==typeof t&&(_.__c=void 0,t()),e=n}function C(_){var n=e;_.__c=_.__(),e=n}function k(_,n){return!_||_.length!==n.length||n.some(function(n,t){return n!==_[t]})}function q(_,n){return"function"==typeof n?n(_):n}_.useCallback=function(_,n){return r=8,y(function(){return _},n)},_.useContext=function(_){var n=e.context[_.__c],u=m(t++,9);return u.c=_,n?(null==u.__&&(u.__=!0,n.sub(e)),n.props.value):_.__},_.useDebugValue=function(_,n){i.useDebugValue&&i.useDebugValue(n?n(_):_)},_.useEffect=function(_,n){var u=m(t++,3);!i.__s&&k(u.__H,n)&&(u.__=_,u.i=n,e.__H.__h.push(u))},_.useErrorBoundary=function(_){var n=m(t++,10),u=p();return n.__=_,e.componentDidCatch||(e.componentDidCatch=function(_,t){n.__&&n.__(_,t),u[1](_)}),[u[0],function(){u[1](void 0)}]},_.useId=function(){var _=m(t++,11);if(!_.__){for(var n=e.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var u=n.__m||(n.__m=[0,0]);_.__="P"+u[0]+"-"+u[1]++}return _.__},_.useImperativeHandle=function(_,n,t){r=6,H(function(){return"function"==typeof _?(_(n()),function(){return _(null)}):_?(_.current=n(),function(){return _.current=null}):void 0},null==t?t:t.concat(_))},_.useLayoutEffect=H,_.useMemo=y,_.useReducer=d,_.useRef=function(_){return r=5,y(function(){return{current:_}},[])},_.useState=p});
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;900&family=Space+Grotesk:wght@300;700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="root"></div>

  <script>
    // ✅ 等待 DOM 加载完成
    document.addEventListener('DOMContentLoaded', function() {
      // 从全局 UMD 模块获取 Preact
      const { h, render, Fragment, Component } = window.preact;
      const { useState, useEffect, useRef, useMemo } = window.preactHooks;

      // ========================================
      // 🛡️ 错误边界组件
      // ========================================
      class ErrorBoundary extends Component {
        constructor(props) {
          super(props);
          this.state = { hasError: false, error: null, errorInfo: null };
        }

        static getDerivedStateFromError(error) {
          return { hasError: true, error };
        }

        componentDidCatch(error, errorInfo) {
          console.error('🚨 Vision Launch Narrative Error:', error, errorInfo);
          this.setState({ errorInfo });
        }

        render() {
          if (this.state.hasError) {
            const errorMessage = this.state.error ? this.state.error.toString() : 'Unknown error';
            const errorStack = this.state.error && this.state.error.stack 
              ? this.state.error.stack 
              : 'No stack trace available';

            return h('div', {
              className: 'fixed inset-0 flex items-center justify-center bg-black text-white'
            },
              h('div', { className: 'max-w-2xl p-8 text-center' },
                // 警告图标
                h('div', { 
                  className: 'text-6xl mb-4',
                  style: { filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.5))' }
                }, '⚠️'),
                
                // 错误标题
                h('h1', { 
                  className: 'text-4xl font-black mb-4 tracking-tight text-orange-500' 
                }, 'Rendering Error'),
                
                // 错误描述
                h('p', { 
                  className: 'text-gray-400 mb-6 leading-relaxed' 
                }, 
                  'The Vision Launch Narrative encountered an error during rendering. ',
                  'This is likely due to a code issue or incompatibility.'
                ),
                
                // 错误信息盒子
                h('div', { 
                  className: 'text-left bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6' 
                },
                  h('div', { className: 'font-mono text-sm text-red-400 mb-2' }, 
                    errorMessage
                  ),
                  h('pre', { 
                    className: 'font-mono text-xs text-gray-500 overflow-auto max-h-32',
                    style: { whiteSpace: 'pre-wrap', wordBreak: 'break-word' }
                  }, errorStack)
                ),
                
                // 重载按钮
                h('button', {
                  onClick: () => window.location.reload(),
                  className: 'group relative px-8 py-3 bg-orange-500 text-black font-bold tracking-widest hover:bg-orange-600 transition-all duration-300 overflow-hidden'
                },
                  h('span', { className: 'relative z-10 flex items-center gap-2' },
                    '↻ Reload Page'
                  )
                ),
                
                // 帮助提示
                h('p', { className: 'text-xs text-gray-600 mt-6' },
                  'Tip: Check the browser console for more details'
                )
              )
            );
          }

          return this.props.children;
        }
      }

      // ========================================
      // 📐 数学工具函数
      // ========================================
      const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

      const mapRange = (value, inputMin, inputMax, outputMin, outputMax, clampOutput = true) => {
        if (Math.abs(inputMin - inputMax) < Number.EPSILON) return outputMin;
        let outVal = ((value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin);
        return clampOutput ? clamp(outVal, Math.min(outputMin, outputMax), Math.max(outputMin, outputMax)) : outVal;
      };

      // ========================================
      // 🎨 主组件
      // ========================================
      function DemoComponent() {
        const [scrollProgress, setScrollProgress] = useState(0);
        const [vh, setVh] = useState(0);
        const containerRef = useRef(null);

        // 优化滚动循环使用 RequestAnimationFrame
        useEffect(() => {
          const handleResize = () => setVh(window.innerHeight);
          handleResize();
          window.addEventListener('resize', handleResize);

          let rafId;
          const handleScroll = () => {
            rafId = requestAnimationFrame(() => {
              setScrollProgress(window.scrollY);
            });
          };

          window.addEventListener('scroll', handleScroll, { passive: true });
          return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(rafId);
          };
        }, []);

        // 配置
        const TOTAL_HEIGHT_VH = 900;

        // 章节进度计算辅助函数
        const getSectionProgress = (startVh, durationVh) => {
          const start = startVh * vh;
          const end = start + (durationVh * vh);
          return mapRange(scrollProgress, start, end, 0, 1);
        };

        // 章节进度
        const p1 = getSectionProgress(0, 2);   // 创世 (0-200vh)
        const p2 = getSectionProgress(2, 3);   // 混沌 (200-500vh)
        const p3 = getSectionProgress(5, 2);   // 结构 (500-700vh)
        const p4 = getSectionProgress(7, 2);   // 升华 (700-900vh)

        // 混沌元素数据
        const chaosElements = useMemo(() => [
          { emoji: '⚡', x: -20, y: -30, r: 45, delay: 0 },
          { emoji: '⬡', x: 30, y: -20, r: -15, delay: 0.1 },
          { emoji: '✦', x: -40, y: 20, r: 90, delay: 0.2 },
          { emoji: '◯', x: 25, y: 40, r: -60, delay: 0.3 },
          { emoji: '▲', x: 0, y: -50, r: 180, delay: 0.4 },
          { emoji: '■', x: 45, y: 10, r: 30, delay: 0.15 },
        ], []);

        return h('div', {
          ref: containerRef,
          className: 'relative w-full bg-[#050505] text-[#eaeaea] font-sans selection:bg-orange-500 selection:text-black',
          style: { fontFamily: "'Space Grotesk', sans-serif" }
        },
          // 全局叠加层
          // 1. 噪声纹理
          h('div', {
            className: 'fixed inset-0 z-50 pointer-events-none opacity-[0.07] mix-blend-overlay',
            style: {
              backgroundImage: "url(\\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\\")"
            }
          }),

          // 2. 晕影
          h('div', {
            className: 'fixed inset-0 z-40 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]'
          }),

          // 3. 进度条
          h('div', {
            className: 'fixed top-0 left-0 h-1 bg-orange-500 z-50 transition-all duration-75',
            style: { width: ((scrollProgress / ((TOTAL_HEIGHT_VH / 100) * vh)) * 100) + '%' }
          }),

          // 4. 状态指示器
          h('div', {
            className: 'fixed bottom-8 right-8 z-50 font-mono text-xs tracking-widest opacity-60 mix-blend-difference flex flex-col items-end gap-1'
          },
            h('span', null, 'Y: ' + Math.floor(scrollProgress)),
            h('span', null, 'SECTOR: ' + (p1 > 0 && p1 < 1 ? '01' : p2 > 0 && p2 < 1 ? '02' : p3 > 0 && p3 < 1 ? '03' : '04'))
          ),

          // 章节 1: 创世
          h('div', {
            style: { height: '200vh' },
            className: 'relative z-10'
          },
            h('div', { className: 'sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden' },
              // 背景渐变移位
              h('div', {
                className: 'absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50',
                style: { opacity: mapRange(p1, 0.5, 1, 1, 0) }
              }),

              h('div', { className: 'relative z-10 text-center mix-blend-color-dodge' },
                h('h1', {
                  className: 'text-[12vw] font-black leading-none tracking-tighter will-change-transform',
                  style: {
                    transform: 'scale(' + mapRange(p1, 0, 0.8, 0.5, 25) + ')',
                    opacity: mapRange(p1, 0.6, 0.8, 1, 0),
                    filter: 'blur(' + mapRange(p1, 0, 0.2, 10, 0) + 'px)'
                  }
                }, 'VISION'),
                h('p', {
                  className: 'font-mono text-orange-500 tracking-[1em] text-sm mt-4 uppercase',
                  style: {
                    opacity: mapRange(p1, 0, 0.3, 1, 0),
                    transform: 'translateY(' + mapRange(p1, 0, 0.3, 0, -50) + 'px)'
                  }
                }, 'System Online')
              ),

              // 过渡文本
              h('div', { className: 'absolute inset-0 flex items-center justify-center pointer-events-none' },
                h('p', {
                  className: 'text-4xl md:text-6xl font-light tracking-tighter text-center max-w-4xl leading-tight',
                  style: {
                    opacity: mapRange(p1, 0.7, 0.9, 0, 1),
                    transform: 'scale(' + mapRange(p1, 0.7, 1, 0.9, 1.1) + ')'
                  }
                },
                  'It begins with a ',
                  h('span', { className: 'font-serif italic text-orange-400' }, 'fragment'),
                  '. ',
                  h('br'),
                  'A single, unstructured thought.'
                )
              )
            )
          ),

          // 章节 2: 混沌
          h('div', {
            style: { height: '300vh' },
            className: 'relative z-10 bg-[#eaeaea] text-black'
          },
            h('div', { className: 'sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000' },
              h('div', { className: 'absolute top-10 w-full flex justify-between px-10 uppercase text-xs font-bold tracking-widest border-b border-black/10 pb-4' },
                h('span', null, 'Phase II'),
                h('span', null, 'Entropy / Deconstruction'),
                h('span', null, 'Status: Active')
              ),

              h('div', { className: 'relative w-full h-full flex items-center justify-center' },
                // 中心锚点
                h('div', {
                  className: 'z-20 w-px h-32 bg-black/20',
                  style: { transform: 'scaleY(' + mapRange(p2, 0, 0.2, 0, 1) + ')' }
                }),

                // 混沌粒子系统
                ...chaosElements.map((item, i) => {
                  const randomX = item.x * 10;
                  const randomY = item.y * 10;
                  const randomR = item.r * 2;

                  const gridCol = (i % 3) - 1;
                  const gridRow = Math.floor(i / 3) - 0.5;
                  const snapX = gridCol * 150;
                  const snapY = gridRow * 150;

                  const currentX = mapRange(p2, 0, 0.8, randomX, snapX);
                  const currentY = mapRange(p2, 0, 0.8, randomY, snapY);
                  const currentR = mapRange(p2, 0, 0.8, randomR + (p2 * 360), 0);
                  const currentScale = mapRange(p2, 0, 0.8, 1.5, 1);

                  return h('div', {
                    key: i,
                    className: 'absolute flex items-center justify-center w-24 h-24 border border-black/80 bg-white/50 backdrop-blur-sm',
                    style: {
                      transform: 'translate(' + currentX + 'px, ' + currentY + 'px) rotate(' + currentR + 'deg) scale(' + currentScale + ')',
                      opacity: mapRange(p2, 0, 0.1, 0, 1)
                    }
                  }, h('span', { className: 'text-4xl' }, item.emoji));
                }),

                // 对齐文本叠加
                h('h2', {
                  className: 'absolute z-30 text-9xl font-black tracking-tighter opacity-0 mix-blend-difference text-white',
                  style: {
                    opacity: mapRange(p2, 0.85, 0.95, 0, 1),
                    transform: 'scale(' + mapRange(p2, 0.8, 1, 0.8, 1) + ')'
                  }
                }, 'ALIGN')
              )
            )
          ),

          // 章节 3: 结构
          h('div', {
            style: { height: '200vh' },
            className: 'relative z-10 bg-[#0a0a0a] text-white perspective-1000'
          },
            h('div', { className: 'sticky top-0 h-screen flex items-center justify-center overflow-hidden' },
              // 背景网格
              h('div', {
                className: 'absolute inset-0 opacity-20 pointer-events-none',
                style: {
                  backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                  transform: 'translateY(' + mapRange(p3, 0, 1, 0, 100) + 'px) rotateX(60deg)',
                  transformOrigin: 'center top'
                }
              }),

              // 3D 卡片
              h('div', { className: 'relative group' },
                h('div', {
                  className: 'relative w-[600px] h-[400px] rounded-2xl bg-gradient-to-br from-gray-800/40 to-black/40 border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl',
                  style: {
                    transform: 'perspective(1000px) rotateX(' + mapRange(p3, 0, 1, 20, 0) + 'deg) rotateY(' + mapRange(p3, 0, 1, -20, 0) + 'deg) scale(' + mapRange(p3, 0, 1, 0.8, 1) + ')'
                  }
                },
                  // 动态闪光效果
                  h('div', {
                    className: 'absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-20',
                    style: {
                      transform: 'translateX(' + mapRange(p3, 0, 1, -100, 100) + '%) skewX(-20deg)'
                    }
                  }),

                  // 卡片内容
                  h('div', { className: 'absolute inset-0 flex flex-col items-center justify-center p-10 text-center z-10' },
                    h('div', { className: 'w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.4)]' },
                      h('span', { className: 'text-4xl' }, '🌐')
                    ),
                    h('h3', { className: 'text-4xl font-bold mb-2 tracking-tight' }, 'Global Synthesis'),
                    h('p', { className: 'text-gray-400 text-sm leading-relaxed max-w-xs' },
                      'The chaotic fragments unite to form a coherent, scalable architecture ready for deployment.'
                    ),
                    h('div', { className: 'mt-8 flex gap-2' },
                      h('div', { className: 'h-1 w-2 bg-orange-500 rounded-full animate-pulse' }),
                      h('div', { className: 'h-1 w-8 bg-gray-700 rounded-full' }),
                      h('div', { className: 'h-1 w-2 bg-gray-700 rounded-full' })
                    )
                  )
                ),

                // 背面光晕
                h('div', {
                  className: 'absolute -inset-10 bg-orange-500/20 blur-3xl -z-10 rounded-full',
                  style: { opacity: mapRange(p3, 0.5, 1, 0, 0.5) }
                })
              )
            )
          ),

          // 章节 4: 升华
          h('div', {
            style: { height: '200vh' },
            className: 'relative z-10 bg-black overflow-hidden'
          },
            h('div', { className: 'sticky top-0 h-screen flex flex-col items-center justify-center' },
              // 曲速星空
              h('div', { className: 'absolute inset-0 overflow-hidden' },
                ...[...Array(20)].map((_, i) =>
                  h('div', {
                    key: i,
                    className: 'absolute w-0.5 bg-white rounded-full',
                    style: {
                      left: (Math.random() * 100) + '%',
                      top: '50%',
                      height: '100px',
                      transformOrigin: 'center',
                      transform: 'rotate(' + (Math.random() * 360) + 'deg) translateY(' + mapRange(p4, 0, 1, 200, 1000) + 'px)',
                      opacity: mapRange(p4, 0, 0.5, 0, 0.8)
                    }
                  })
                )
              ),

              // 文字分离效果（色彩分离）
              h('div', { className: 'relative z-10' },
                // 红色通道
                h('h1', {
                  className: 'absolute inset-0 text-[15vw] font-black text-red-500 mix-blend-screen leading-none text-center',
                  style: { transform: 'translateX(' + mapRange(p4, 0, 1, -10, 0) + 'px) scale(' + mapRange(p4, 0, 1, 0.9, 1) + ')' }
                }, 'LAUNCH'),

                // 青色通道
                h('h1', {
                  className: 'absolute inset-0 text-[15vw] font-black text-cyan-500 mix-blend-screen leading-none text-center',
                  style: { transform: 'translateX(' + mapRange(p4, 0, 1, 10, 0) + 'px) scale(' + mapRange(p4, 0, 1, 1.1, 1) + ')' }
                }, 'LAUNCH'),

                // 主白色
                h('h1', { className: 'relative text-[15vw] font-black text-white leading-none text-center mix-blend-overlay' }, 'LAUNCH')
              ),

              // 最终按钮
              h('div', {
                className: 'mt-12 z-50',
                style: {
                  opacity: mapRange(p4, 0.8, 1, 0, 1),
                  transform: 'translateY(' + mapRange(p4, 0.8, 1, 50, 0) + 'px)'
                }
              },
                h('button', {
                  onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
                  className: 'group relative px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-orange-500 transition-colors duration-300 overflow-hidden'
                },
                  h('span', { className: 'relative z-10' }, 'RE-INITIALIZE'),
                  h('div', { className: 'absolute inset-0 bg-orange-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out' })
                )
              )
            )
          ),

          // 结束部分
          h('div', { className: 'h-[50vh] bg-black flex items-center justify-center' },
            h('p', { className: 'text-gray-700 font-mono text-xs' }, 'END OF STREAM')
          )
        );
      }

      // ========================================
      // 🚀 渲染应用（用错误边界包裹）
      // ========================================
      render(
        h(ErrorBoundary, null,
          h(DemoComponent)
        ),
        document.getElementById('root')
      );
    });
  </script>

  <style>
    .perspective-1000 {
      perspective: 1000px;
    }
    .will-change-transform {
      will-change: transform, opacity;
    }
  </style>
</body>
</html>
`;

export const previewStyles = '';

export const previewCustomPrompt = {
  'zh-CN': '',
  'en-US': ''
};

var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function T(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return T(e.type,t,e.props)}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!w.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return T(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)w.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return T(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ne());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var ee=!1,S=-1,C=5,w=-1;function T(){return g?!0:!(e.unstable_now()-w<C)}function te(){if(g=!1,ee){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ne():ee=!1}}}var ne;if(typeof y==`function`)ne=function(){y(te)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=te,ne=function(){ie.postMessage(null)}}else ne=function(){_(te,0)};function ae(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ne()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),w=Symbol.for(`react.suspense`),T=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),ne=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case w:return`Suspense`;case T:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case ne:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function me(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function O(e,t){fe++,de[fe]=e.current,e.current=t}var he=pe(null),ge=pe(null),_e=pe(null),ve=pe(null);function ye(e,t){switch(O(_e,t),O(ge,e),O(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}me(he),O(he,e)}function be(){me(he),me(ge),me(_e)}function xe(e){e.memoizedState!==null&&O(ve,e);var t=he.current,n=Hd(t,e.type);t!==n&&(O(ge,e),O(he,n))}function Se(e){ge.current===e&&(me(he),me(ge)),ve.current===e&&(me(ve),Qf._currentValue=ue)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function mt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht;function wt(e){delete e[gt],delete e[_t],delete e[yt],delete e[bt],delete e[xt]}function Tt(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[gt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function kt(e){e[Ct]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,k=null;yn&&`documentMode`in document&&(k=document.documentMode);var rr=yn&&`TextEvent`in window&&!k,ir=yn&&(!nr||k&&8<k&&11>=k),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!nr&&sr(e,t)?(e=Tn(),wn=Cn=Sn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function A(e){if(Gt(Dt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(yn){var br;if(yn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){hr&&(hr.detachEvent(`onpropertychange`,wr),gr=hr=null)}function wr(e){if(e.propertyName===`value`&&A(gr)){var t=[];mr(t,gr,e,fn(e)),_n(_r,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return A(gr)}function Dr(e,t){if(e===`click`)return A(t)}function Or(e,t){if(e===`input`||e===`change`)return A(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=yn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Kt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};yn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Mt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},j=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=j[t];j[t++]=null;var r=j[t];j[t++]=null;var i=j[t];j[t++]=null;var a=j[t];if(j[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){j[ai++]=e,j[ai++]=t,j[ai++]=n,j[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function M(e,t,n,r){return new mi(e,t,n,r)}function hi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gi(e,t){var n=e.alternate;return n===null?(n=M(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _i(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function vi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)hi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=M(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return yi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=M(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case w:return e=M(13,n,t,a),e.elementType=w,e.lanes=o,e;case T:return e=M(19,n,t,a),e.elementType=T,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case te:s=14;break a;case ne:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=M(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=M(7,e,r,t),e.lanes=n,e}function bi(e,t,n){return e=M(6,e,null,t),e.lanes=n,e}function xi(e){var t=M(18,null,null,0);return t.stateNode=e,t}function Si(e,t,n){return t=M(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ci=new WeakMap;function wi(e,t){if(typeof e==`object`&&e){var n=Ci.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},Ci.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ti=[],Ei=0,Di=null,Oi=0,ki=[],Ai=0,ji=null,Mi=1,Ni=``;function Pi(e,t){Ti[Ei++]=Oi,Ti[Ei++]=Di,Di=e,Oi=t}function Fi(e,t,n){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,ji=e;var r=Mi;e=Ni;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mi=1<<32-qe(t)+i|n<<i|r,Ni=a+e}else Mi=1<<a|n<<i|r,Ni=e}function Ii(e){e.return!==null&&(Pi(e,1),Fi(e,1,0))}function Li(e){for(;e===Di;)Di=Ti[--Ei],Ti[Ei]=null,Oi=Ti[--Ei],Ti[Ei]=null;for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Ni=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null}function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=Ni,ki[Ai++]=ji,Mi=t.id,Ni=t.overflow,ji=e}var N=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(wi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(N=e.return;N;)switch(N.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:N=N.return}}function Gi(e){if(e!==N)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=N?cf(e.stateNode.nextSibling):null;return!0}function Ki(){P=N=null,F=!1}function qi(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=pe(null),Xi=null,Zi=null;function Qi(e,t,n){O(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,me(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,I={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new ca,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=E.S;E.S=function(e,t){eu=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=pe(null);function Sa(){var e=xa.current;return e===null?K.pooledCache:e}function Ca(e,t){t===null?O(xa,xa.current):O(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:I._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=gi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ne&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=vi(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=bi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=vi(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=Si(t,e.mode,n),t.return=e,t;case ne:return t=ja(t),f(e,t,n)}if(le(t)||oe(t))return t=yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===S)return f(e,oa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ne:return n=ja(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===S)return p(e,t,oa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ne:return r=ja(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===S)return m(e,t,n,oa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Pi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Pi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Pi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Pi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Pi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Pi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ne&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=yi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=vi(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Si(o,e.mode,c),c.return=e,e=c}return s(e);case ne:return o=ja(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===S)return b(e,r,oa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=bi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=M(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=pe(null),no=pe(0);function ro(e,t){e=Wl,O(no,e),O(to,t),Wl=e|t.baseLanes}function io(){O(no,Wl),O(to,to.current)}function ao(){Wl=no.current,me(to),me(no)}var oo=pe(null),so=null;function co(e){var t=e.alternate;O(L,L.current&1),O(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){O(L,L.current),O(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(O(L,L.current),O(oo,e),so===null&&(so=e)):fo(e)}function fo(){O(L,L.current),O(oo,oo.current)}function po(e){me(oo),so===e&&(so=null),me(L)}var L=pe(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ho=0,R=null,z=null,B=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return ho=a,R=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){E.H=zs;var t=z!==null&&z.next!==null;if(ho=0,B=z=R=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&ra(e)&&(ic=!0))}function Eo(e,t,n,r){R=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,B=z=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(z===null?null:z.memoizedState)!==e&&(R.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}ho=0,B=z=R=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return B===null?R.memoizedState=B=e:B=B.next=e,B}function H(){if(z===null){var e=R.alternate;e=e===null?null:e.memoizedState}else e=z.next;var t=B===null?R.memoizedState:B.next;if(t!==null)B=t,z=e;else{if(e===null)throw R.alternate===null?Error(i(467)):Error(i(310));z=e,e={memoizedState:z.memoizedState,baseState:z.baseState,baseQueue:z.baseQueue,queue:z.queue,next:null},B===null?R.memoizedState=B=e:B=B.next=e}return B}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Aa(xo,e,t),t=R,(B===null?t.memoizedState:B.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===S)return aa(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=R.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=R.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),R.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),z,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(ho&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((ho&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,R.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,R.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(ic=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=R,a=H(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((z||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||B!==null&&B.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||ho&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=R.updateQueue,t===null?(t=Mo(),R.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Go(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,z,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(F){var n=K.formState;if(n!==null){a:{var r=R;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,R,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,R,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,R,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),z,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===Ta?Da:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(R.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=z;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=R.updateQueue,t===null&&(t=Mo(),R.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();R.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;z!==null&&r!==null&&Co(r,z.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(R.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){R.flags|=4;var t=R.updateQueue;if(t===null)t=Mo(),R.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||ho&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),R.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Ar(n,t)?n:to.current===null?!(ho&42)||ho&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),R.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Ar(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,Fs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ya(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,ue,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return aa(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===R||t!==null&&t===R}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var zs={readContext:aa,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:aa,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,R,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,R,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,R,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=R,a=jo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(F){var n=Ni,r=Mi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,R,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,R)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:aa,use:Po,useCallback:ys,useContext:aa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),z.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:aa,use:Po,useCallback:ys,useContext:aa,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return z===null?xs(n,e,t):Ss(n,z.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return z===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,z,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ii(e)}function Ys(e){console.error(e)}function Xs(e){ii(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ka(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=oo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(wi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=wi(r,n),a=$s(e.stateNode,r,a),Ya(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(wi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=wi(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=wi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(F&&s&&Ii(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!hi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=gi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),fo(t)):(Ca(t,a.cachePool),ro(t,a),fo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:I._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Va(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,po(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(lo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,N=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a)if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(ic||na(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),N=t,F=!0,zi=null,Bi=!1,e!==null&&Ri(t,e),t=fc(t,r),t.flags|=4096;return t}return e=gi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ia(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(F&&r&&Ii(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(F&&r&&Ii(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ua||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ua||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Ki(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:wa()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(L.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?co(t):fo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ji===null?null:{id:Mi,overflow:Ni},retryLane:536870912,hydrationErrors:null},n=xi(e),n.return=t,t.child=n,N=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(fo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=yi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(co(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(fo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=yi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(fo(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||na(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=ut(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),N=t,F=!0,zi=null,Bi=!1,e!==null&&Ri(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(fo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=gi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=yi(c,a,n,null),c.flags|=2):c=gi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=wa():(l=I._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=gi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=M(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Va(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=L.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,O(L,o),ac(e,t,r,n),r=F?Oi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function Mc(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Qi(t,I,e.memoizedState.cache),Ki();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(L,L.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Qi(t,I,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}else ic=!1,F&&t.flags&1048576&&Fi(t,Oi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)hi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=oc(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,I,r),r!==o.cache&&ta(t,[I],n,!0),Za(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}else if(r!==a){a=wi(Error(i(424)),t),Ji(a),t=yc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),N=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(_e.current).createElement(n),r[gt]=t,r[_t]=e,Pd(r,n,e),kt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,_e.current),N=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,N=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,N=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Cc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(I),e===null?(a=Sa(),a===null&&(a=K,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Qi(t,I,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,I,r),r!==a.cache&&ta(t,[I],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,I,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ma=Oa,Ea}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Li(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(I),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=he.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=he.current,Gi(t))Ui(t,o);else{var s=Bd(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=N,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[gt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(po(t),t):(po(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(po(t),t):(po(t),null)}return po(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return be(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return $i(t.type),U(t),null;case 19:if(me(L),r=t.memoizedState,r===null)return U(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=mo(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_i(n,e),n=n.sibling;return O(L,L.current&1|2),F&&Pi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return U(t),null}else 2*Fe()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,n=L.current,O(L,a?n&1|2:n&1),F&&Pi(t,r.treeForkCount),e);case 22:case 23:return po(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&me(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(I),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Li(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(I),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(po(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(po(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(L),null;case 4:return be(),null;case 10:return $i(t.type),null;case 22:case 23:return po(t),ao(),e!==null&&me(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(I),null;case 25:return null;default:return null}}function Vc(e,t){switch(Li(t),t.tag){case 3:$i(I),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&po(t);break;case 13:po(t);break;case 19:me(L);break;case 10:$i(t.type);break;case 22:case 23:po(t),ao(),e!==null&&me(xa);break;case 24:$i(I)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[_t]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[gt]=e,t[_t]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null)if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[Ct]||o[gt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[gt]=e,kt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[gt]=e,kt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=aa(I),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(I).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:E.T===null?pt():dd()}function mu(){if(Jl===0)if(!(J&536870912)||F){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),Jl=e}else Jl=536870912;return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),ot(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||nt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Fe(),10<a)){if(yu(r,t,Jl,!Vl),tt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Ml(t,a,d);var m=(a&62914560)===a?$l-Fe():(a&4194048)===a?eu-Fe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Zi=Xi=null,Ao(e),Fa=null,Ia=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=gi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=nt(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-qe(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){R=null,E.H=zs,t===Ta||t===Da?(t=Na(),Y=3):t===Ea?(t=Na(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,wi(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(J&4194048)===J?so===null:(J&62914560)===J||J&536870912?e===so:!1}function Tu(){var e=E.H;return E.H=zs,e===null?zs:e}function Eu(){var e=E.A;return E.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&oo.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,G=r,E.H=i,E.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Fe()+500,Su(e,t)):Hl=nt(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ka(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=Xi=null,E.H=r,E.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Ne();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=_i(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Zi=Xi=null,Ao(t),Fa=null,Ia=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,wi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,wi(n,e.current)),q=null;return}t.flags&32768?(F||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,st(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(ze,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,D.p=a,E.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,D.p=r,E.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,D.p=r,E.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ft(n),t=t.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ft(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=wi(n,t),t=$s(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(ot(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=wi(n,e),n=ec(2),r=qa(t,n,2),r!==null&&(tc(n,r,t,e),ot(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Fe()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=it()),e=ui(e,t),e!==null&&(ot(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return je(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=tt(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||nt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Fe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=tt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=cd.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=tt(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?je(Le,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Zn;break;case Jr:case Yr:case Xr:l=Vn;break;case ei:l=Qn;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=$n;break;case`copy`:case`cut`:case`paste`:l=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`toggle`:case`beforetoggle`:l=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[vt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Tt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Dt(l),h=u==null?c:Dt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(pr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Dt(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Un(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[_t]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),kt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),kt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ot(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);kt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ot(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),kt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=_e.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ot(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ot(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),kt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,kt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),kt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,kt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),kt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,kt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),kt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,kt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),kt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=M(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=dt(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Fe()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Et(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[vt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{We=zp.inject(Rp),Ge=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[vt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=`modulepreload`,v=function(e){return`/IIS-Lab-webpage/`+e},y={},b=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=v(t,n),t in y)return;y[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:_,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x=c(u(),1),ee=`popstate`;function S(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function C(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return re(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ie(t)}return oe(t,n,null,e)}function w(e,t){if(e===!1||e==null)throw Error(t)}function T(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||te(),mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=S(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=S(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return se(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(ee,d),c=e,()=>{i.removeEventListener(ee,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function se(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),w(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ce(e,t,n=`/`){return le(e,t,n,!1)}function le(e,t,n,r,i){let a=Te((typeof t==`string`?ae(t):t).pathname||`/`,n);if(a==null)return null;let o=i??D(e),s=null,c=we(a);for(let e=0;s==null&&e<o.length;++e)s=xe(o[e],c,r);return s}function E(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function D(e){let t=ue(e);return fe(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;w(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(w(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,me=3,O=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=O),n.filter(e=>!ve(e)).reduce((e,t)=>e+(pe.test(t)?me:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Pe([a,u.pathname]),pathnameBase:Ie(Pe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Pe([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){T(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return T(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},w(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),w(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),w(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/\/\/+/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{T(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=x.createContext(null);Ke.displayName=`DataRouter`;var qe=x.createContext(null);qe.displayName=`DataRouterState`;var Je=x.createContext(!1);function Ye(){return x.useContext(Je)}var Xe=x.createContext({isTransitioning:!1});Xe.displayName=`ViewTransition`;var Ze=x.createContext(new Map);Ze.displayName=`Fetchers`;var Qe=x.createContext(null);Qe.displayName=`Await`;var $e=x.createContext(null);$e.displayName=`Navigation`;var et=x.createContext(null);et.displayName=`Location`;var tt=x.createContext({outlet:null,matches:[],isDataRoute:!1});tt.displayName=`Route`;var nt=x.createContext(null);nt.displayName=`RouteError`;var rt=`REACT_ROUTER_ERROR`,it=`REDIRECT`,at=`ROUTE_ERROR_RESPONSE`;function ot(e){if(e.startsWith(`${rt}:${it}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function st(e){if(e.startsWith(`${rt}:${at}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function ct(e,{relative:t}={}){w(lt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=x.useContext($e),{hash:i,pathname:a,search:o}=vt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function lt(){return x.useContext(et)!=null}function ut(){return w(lt(),`useLocation() may be used only in the context of a <Router> component.`),x.useContext(et).location}var dt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ft(e){x.useContext($e).static||x.useLayoutEffect(e)}function pt(){let{isDataRoute:e}=x.useContext(tt);return e?Lt():mt()}function mt(){w(lt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=x.useContext(Ke),{basename:t,navigator:n}=x.useContext($e),{matches:r}=x.useContext(tt),{pathname:i}=ut(),a=JSON.stringify(je(r)),o=x.useRef(!1);return ft(()=>{o.current=!0}),x.useCallback((r,s={})=>{if(T(o.current,dt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var ht=x.createContext(null);function gt(e){let t=x.useContext(tt).outlet;return x.useMemo(()=>t&&x.createElement(ht.Provider,{value:e},t),[t,e])}function _t(){let{matches:e}=x.useContext(tt);return e[e.length-1]?.params??{}}function vt(e,{relative:t}={}){let{matches:n}=x.useContext(tt),{pathname:r}=ut(),i=JSON.stringify(je(n));return x.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function yt(e,t){return bt(e,t)}function bt(e,t,n){w(lt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=x.useContext($e),{matches:i}=x.useContext(tt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;zt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=ut(),d;if(t){let e=typeof t==`string`?ae(t):t;w(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):ce(e,{pathname:p});T(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),T(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Dt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?x.createElement(et.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function xt(){let e=It(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=x.createElement(x.Fragment,null,x.createElement(`p`,null,`💿 Hey developer 👋`),x.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,x.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,x.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),x.createElement(x.Fragment,null,x.createElement(`h2`,null,`Unexpected Application Error!`),x.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?x.createElement(`pre`,{style:i},n):null,o)}var St=x.createElement(xt,null),Ct=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=st(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:x.createElement(tt.Provider,{value:this.props.routeContext},x.createElement(nt.Provider,{value:e,children:this.props.component}));return this.context?x.createElement(Tt,{error:e},t):t}};Ct.contextType=Je;var wt=new WeakMap;function Tt({children:e,error:t}){let{basename:n}=x.useContext($e);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=ot(t.digest);if(e){let r=wt.get(t);if(r)throw r;let i=Ue(e.location,n);if(He&&!wt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw wt.set(t,n),n}return x.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Et({routeContext:e,match:t,children:n}){let r=x.useContext(Ke);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(tt.Provider,{value:e},n)}function Dt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);w(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||St,o&&(s<0&&c===0?(zt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?x.createElement(n.route.Component,null):n.route.element?n.route.element:e,x.createElement(Et,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?x.createElement(Ct,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ot(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kt(e){let t=x.useContext(Ke);return w(t,Ot(e)),t}function At(e){let t=x.useContext(qe);return w(t,Ot(e)),t}function jt(e){let t=x.useContext(tt);return w(t,Ot(e)),t}function Mt(e){let t=jt(e),n=t.matches[t.matches.length-1];return w(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Nt(){return Mt(`useRouteId`)}function Pt(){let e=At(`useNavigation`);return x.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function Ft(){let{matches:e,loaderData:t}=At(`useMatches`);return x.useMemo(()=>e.map(e=>E(e,t)),[e,t])}function It(){let e=x.useContext(nt),t=At(`useRouteError`),n=Mt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Lt(){let{router:e}=kt(`useNavigate`),t=Mt(`useNavigate`),n=x.useRef(!1);return ft(()=>{n.current=!0}),x.useCallback(async(r,i={})=>{T(n.current,dt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Rt={};function zt(e,t,n){!t&&!Rt[e]&&(Rt[e]=!0,T(!1,n))}x.memo(Bt);function Bt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return bt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Vt({to:e,replace:t,state:n,relative:r}){w(lt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=x.useContext($e);T(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=x.useContext(tt),{pathname:o}=ut(),s=pt(),c=Me(e,je(a),o,r===`path`),l=JSON.stringify(c);return x.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Ht(e){return gt(e.context)}function Ut(e){w(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Wt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){w(!lt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=x.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ae(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=x.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return T(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:x.createElement($e.Provider,{value:c},x.createElement(et.Provider,{children:t,value:h}))}function Gt({children:e,location:t}){return yt(Kt(e),t)}x.Component;function Kt(e,t=[]){let n=[];return x.Children.forEach(e,(e,r)=>{if(!x.isValidElement(e))return;let i=[...t,r];if(e.type===x.Fragment){n.push.apply(n,Kt(e.props.children,i));return}w(e.type===Ut,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),w(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Kt(e.props.children,i)),n.push(a)}),n}var qt=`get`,Jt=`application/x-www-form-urlencoded`;function Yt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xt(e){return Yt(e)&&e.tagName.toLowerCase()===`button`}function Zt(e){return Yt(e)&&e.tagName.toLowerCase()===`form`}function Qt(e){return Yt(e)&&e.tagName.toLowerCase()===`input`}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function en(e,t){return e.button===0&&(!t||t===`_self`)&&!$t(e)}var tn=null;function nn(){if(tn===null)try{new FormData(document.createElement(`form`),0),tn=!1}catch{tn=!0}return tn}var rn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function an(e){return e!=null&&!rn.has(e)?(T(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`),null):e}function on(e,t){let n,r,i,a,o;if(Zt(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||qt,i=an(e.getAttribute(`enctype`))||Jt,a=new FormData(e)}else if(Xt(e)||Qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||qt,i=an(e.getAttribute(`formenctype`))||an(o.getAttribute(`enctype`))||Jt,a=new FormData(o,e),!nn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=qt,r=null,i=Jt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var sn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},cn=/[&><\u2028\u2029]/g;function ln(e){return e.replace(cn,e=>sn[e])}function un(e,t){if(e===!1||e==null)throw Error(t)}function dn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${Fe(t)}/_root.${r}`:i.pathname=`${Fe(i.pathname)}.${r}`,i}async function fn(e,t){if(e.id in t)return t[e.id];try{let n=await b(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pn(e){return e!=null&&typeof e.page==`string`}function mn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function hn(e,t,n){return bn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await fn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(mn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function gn(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function _n(e,t,{includeHydrateFallback:n}={}){return vn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function vn(e){return[...new Set(e)]}function yn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function bn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!pn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(yn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function xn(){let e=x.useContext(Ke);return un(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Sn(){let e=x.useContext(qe);return un(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Cn=x.createContext(void 0);Cn.displayName=`FrameworkContext`;function wn(){let e=x.useContext(Cn);return un(e,`You must render this element inside a <HydratedRouter> element`),e}function Tn(e,t){let n=x.useContext(Cn),[r,i]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=x.useRef(null);x.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),x.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:En(s,p),onBlur:En(c,m),onMouseEnter:En(l,p),onMouseLeave:En(u,m),onTouchStart:En(d,p)}]:[a,f,{}]:[!1,f,{}]}function En(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Dn({page:e,...t}){let n=Ye(),{router:r}=xn(),i=x.useMemo(()=>ce(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(kn,{page:e,matches:i,...t}):x.createElement(An,{page:e,matches:i,...t}):null}function On(e){let{manifest:t,routeModules:n}=wn(),[r,i]=x.useState([]);return x.useEffect(()=>{let r=!1;return hn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function kn({page:e,matches:t,...n}){let r=ut(),{future:i}=wn(),{basename:a}=xn(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=dn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function An({page:e,matches:t,...n}){let r=ut(),{future:i,manifest:a,routeModules:o}=wn(),{basename:s}=xn(),{loaderData:c,matches:l}=Sn(),u=x.useMemo(()=>gn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=x.useMemo(()=>gn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=dn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=x.useMemo(()=>_n(d,a),[d,a]),m=On(d);return x.createElement(x.Fragment,null,f.map(e=>x.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>x.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>x.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function jn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}x.Component;var Mn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Mn&&(window.__reactRouterVersion=`7.15.1`)}catch{}function Nn({basename:e,children:t,useTransitions:n,window:r}){let i=x.useRef();i.current??=C({window:r,v5Compat:!0});let a=i.current,[o,s]=x.useState({action:a.action,location:a.location}),c=x.useCallback(e=>{n===!1?s(e):x.startTransition(()=>s(e))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(Wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Pn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=x.useState({action:n.action,location:n.location}),o=x.useCallback(e=>{r===!1?a(e):x.startTransition(()=>a(e))},[r]);return x.useLayoutEffect(()=>n.listen(o),[n,o]),x.createElement(Wt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Pn.displayName=`unstable_HistoryRouter`;var Fn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,In=x.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=x.useContext($e),v=typeof l==`string`&&Fn.test(l),y=Ue(l,h);l=y.to;let b=ct(l,{relative:r}),ee=ut(),S=null;if(o){let e=Me(o,[],ee.mask?ee.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),S=g.createHref(e)}let[C,w,T]=Tn(n,p),te=Un(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ne(t){e&&e(t),t.defaultPrevented||te(t)}let re=!(y.isExternal||i),ie=x.createElement(`a`,{...p,...T,href:(re?S:void 0)||y.absoluteURL||b,onClick:re?ne:e,ref:jn(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?x.createElement(x.Fragment,null,ie,x.createElement(Dn,{page:b})):ie});In.displayName=`Link`;var Ln=x.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=vt(a,{relative:c.relative}),d=ut(),f=x.useContext(qe),{navigator:p,basename:m}=x.useContext($e),h=f!=null&&$n(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Te(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,b=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:b,isPending:ee,isTransitioning:h},C=b?e:void 0,w;w=typeof n==`function`?n(S):[n,b?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let T=typeof i==`function`?i(S):i;return x.createElement(In,{...c,"aria-current":C,className:w,ref:l,style:T,to:a,viewTransition:o},typeof s==`function`?s(S):s)});Ln.displayName=`NavLink`;var Rn=x.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=x.useContext($e),g=Kn(),_=qn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Fn.test(s);return x.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?x.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Rn.displayName=`Form`;function zn({getKey:e,storageKey:t,...n}){let r=x.useContext(Cn),{basename:i}=x.useContext($e),a=ut(),o=Ft();Zn({getKey:e,storageKey:t});let s=x.useMemo(()=>{if(!r||!e)return null;let t=Xn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return x.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${ln(JSON.stringify(t||Jn))}, ${ln(JSON.stringify(s))})`}})}zn.displayName=`ScrollRestoration`;function Bn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vn(e){let t=x.useContext(Ke);return w(t,Bn(e)),t}function Hn(e){let t=x.useContext(qe);return w(t,Bn(e)),t}function Un(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=pt(),d=ut(),f=vt(e,{relative:o});return x.useCallback(p=>{if(en(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?x.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Wn=0,Gn=()=>`__${String(++Wn)}__`;function Kn(){let{router:e}=Vn(`useSubmit`),{basename:t}=x.useContext($e),n=Nt(),r=e.fetch,i=e.navigate;return x.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=on(e,t);a.navigate===!1?await r(a.fetcherKey||Gn(),n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function qn(e,{relative:t}={}){let{basename:n}=x.useContext($e),r=x.useContext(tt);w(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...vt(e||`.`,{relative:t})},o=ut();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),ie(a)}var Jn=`react-router-scroll-positions`,Yn={};function Xn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Zn({getKey:e,storageKey:t}={}){let{router:n}=Vn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Hn(`useScrollRestoration`),{basename:a}=x.useContext($e),o=ut(),s=Ft(),c=Pt();x.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Qn(x.useCallback(()=>{if(c.state===`idle`){let t=Xn(o,s,a,e);Yn[t]=window.scrollY}try{sessionStorage.setItem(t||Jn,JSON.stringify(Yn))}catch(e){T(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(x.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Jn);e&&(Yn=JSON.parse(e))}catch{}},[t]),x.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Yn,()=>window.scrollY,e?(t,n)=>Xn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),x.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{T(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Qn(e,t){let{capture:n}=t||{};x.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function $n(e,{relative:t}={}){let n=x.useContext(Xe);w(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Vn(`useViewTransitionState`),i=vt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var er=g(),tr={footer:`_footer_cif18_1`,siteInfo:`_siteInfo_cif18_7`,copyright:`_copyright_cif18_15`},nr=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),k=o(((e,t)=>{t.exports=nr()}))();function rr(){let e=new Date().getFullYear();return(0,k.jsx)(`footer`,{className:tr.footer,id:`colophon`,children:(0,k.jsx)(`div`,{className:tr.siteInfo,children:(0,k.jsxs)(`p`,{className:tr.copyright,children:[`© `,e,` Interactive Intelligent Systems Laboratory`]})})})}function ir(e){return/^https?:\/\//.test(e)?e:`/IIS-Lab-webpage/${e.startsWith(`/`)?e.slice(1):e}`}var ar=[ir(`/images/header/banner-01.jpg`),ir(`/images/header/banner-02.jpg`),ir(`/images/header/banner-03.jpg`),ir(`/images/header/banner-04.jpeg`),ir(`/images/header/banner-local.png`)],or=[{label:`IIS Lab`,path:`/`},{label:`Research`,path:`/research`},{label:`Publications`,path:`/publications`},{label:`Members`,path:`/members`},{label:`DLS`,path:`/dls`},{label:`What's up?`,path:`/whats-up`},{label:`Contact Us`,path:`/contact`},{label:`Join Us!`,path:`/join`}],sr={header:`_header_cd4c6_1`,banner:`_banner_cd4c6_5`,bannerFadeIn:`_bannerFadeIn_cd4c6_1`,topHeader:`_topHeader_cd4c6_26`,siteTitle:`_siteTitle_cd4c6_32`,siteDescription:`_siteDescription_cd4c6_50`,stickyBar:`_stickyBar_cd4c6_61`,stickyInner:`_stickyInner_cd4c6_70`,navSiteTitle:`_navSiteTitle_cd4c6_82`,menu:`_menu_cd4c6_95`,navActive:`_navActive_cd4c6_125`,menuBtn:`_menuBtn_cd4c6_129`,menuBtnOpen:`_menuBtnOpen_cd4c6_151`,nav:`_nav_cd4c6_82`,navOpen:`_navOpen_cd4c6_188`};function cr(e){if(ar.length===0)return``;if(ar.length===1)return ar[0];let t=ar.filter(t=>t!==e);return t[Math.floor(Math.random()*t.length)]}function lr(){return ar.length===0?``:ar[Math.floor(Math.random()*ar.length)]}function ur(){let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(lr),i=ut(),a=(0,x.useRef)(i.pathname);(0,x.useEffect)(()=>{a.current!==i.pathname&&(a.current=i.pathname,r(e=>cr(e)))},[i.pathname]);let o=e=>e===`/`?i.pathname===`/`:i.pathname.startsWith(e);return(0,k.jsxs)(`header`,{className:sr.header,role:`banner`,children:[n?(0,k.jsx)(`img`,{src:n,alt:`Interactive Intelligent Systems Laboratory`,className:sr.banner},n):null,(0,k.jsxs)(`div`,{className:sr.topHeader,children:[(0,k.jsx)(In,{to:`/`,className:sr.siteTitle,onClick:()=>t(!1),children:(0,k.jsxs)(`h1`,{children:[`Interactive Intelligent Systems`,(0,k.jsx)(`br`,{}),`Laboratory`]})}),(0,k.jsx)(`p`,{className:sr.siteDescription,children:`The University of Tokyo`})]}),(0,k.jsx)(`div`,{className:sr.stickyBar,children:(0,k.jsxs)(`div`,{className:sr.stickyInner,children:[(0,k.jsx)(In,{to:`/`,className:sr.navSiteTitle,onClick:()=>t(!1),children:`IIS Lab`}),(0,k.jsxs)(`button`,{type:`button`,className:`${sr.menuBtn} ${e?sr.menuBtnOpen:``}`,"aria-label":e?`Close menu`:`Open menu`,"aria-expanded":e,onClick:()=>t(e=>!e),children:[(0,k.jsx)(`span`,{}),(0,k.jsx)(`span`,{}),(0,k.jsx)(`span`,{})]}),(0,k.jsx)(`nav`,{className:`${sr.nav} ${e?sr.navOpen:``}`,"aria-label":`Main navigation`,children:(0,k.jsx)(`ul`,{className:sr.menu,children:or.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(In,{to:e.path,className:o(e.path)?sr.navActive:void 0,onClick:()=>t(!1),children:e.label})},e.path))})})]})})]})}var dr={layout:`_layout_1i2kd_1`,main:`_main_1i2kd_8`};function fr(){return(0,k.jsxs)(`div`,{className:dr.layout,children:[(0,k.jsx)(`a`,{href:`#main-content`,className:`skip-link`,children:`Skip to content`}),(0,k.jsx)(ur,{}),(0,k.jsx)(`main`,{id:`main-content`,className:dr.main,children:(0,k.jsx)(Ht,{})}),(0,k.jsx)(rr,{})]})}var pr={resourceLink:`_resourceLink_uzd15_1`};function mr(e){return e.endsWith(`.pdf`)||e.startsWith(`/wp-content/`)||e.startsWith(`/paper/`)}function hr(e){let t=e.replace(/^\(|\)$/g,``).toLowerCase();return t===`paper`||t===`video`||t===`poster`}function gr(e){let t=e.replace(/^\(|\)$/g,``).toLowerCase();return t===`paper`||t===`video`||t===`poster`?`(${t===`poster`?`paper`:t})`:e}function _r({href:e,children:t}){let n=gr(t);return mr(e)||hr(t)?(0,k.jsx)(`a`,{href:mr(e)?ir(e):e,target:`_blank`,rel:`noopener noreferrer`,className:pr.resourceLink,children:n}):n!==t&&(e.startsWith(`http://`)||e.startsWith(`https://`))?(0,k.jsx)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,className:pr.resourceLink,children:n}):e.startsWith(`/`)&&!e.startsWith(`//`)?(0,k.jsx)(In,{to:e,children:t}):(0,k.jsx)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:t})}function A({text:e}){let t=[],n=/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g,r=0,i,a=0;for(;(i=n.exec(e))!==null;){i.index>r&&t.push(e.slice(r,i.index));let n=i[0];if(n.startsWith(`**`))t.push((0,k.jsx)(`strong`,{children:(0,k.jsx)(A,{text:n.slice(2,-2)})},a++));else{let e=n.match(/\[([^\]]+)\]\(([^)]+)\)/);e&&t.push((0,k.jsx)(_r,{href:e[2],children:e[1]},a++))}r=i.index+n.length}return r<e.length&&t.push(e.slice(r)),(0,k.jsx)(k.Fragment,{children:t})}var vr={content:`_content_11nm9_1`,contentCompact:`_contentCompact_11nm9_5`,anchorHeading:`_anchorHeading_11nm9_32`,divider:`_divider_11nm9_36`,list:`_list_11nm9_42`,nav:`_nav_11nm9_43`,figure:`_figure_11nm9_68`,image:`_image_11nm9_73`};function yr({href:e,children:t}){return e.startsWith(`/`)&&!e.startsWith(`//`)?(0,k.jsx)(In,{to:e,children:t}):e.startsWith(`#`)?(0,k.jsx)(`a`,{href:e,children:t}):(0,k.jsx)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:t})}function br({item:e}){return(0,k.jsxs)(`li`,{children:[(0,k.jsx)(A,{text:e.text}),e.children&&e.children.length>0&&(0,k.jsx)(`ul`,{children:e.children.map((e,t)=>(0,k.jsx)(br,{item:e},t))})]})}function xr({text:e}){let t=e.replace(/\n{2,}/g,`
`).split(`
`).filter(e=>e.length>0);if(t.length<=1)return(0,k.jsx)(A,{text:t[0]??e});let n=[];return t.forEach((e,t)=>{t>0&&n.push((0,k.jsx)(`br`,{},`br-${t}`)),n.push((0,k.jsx)(A,{text:e},t))}),(0,k.jsx)(k.Fragment,{children:n})}function Sr({blocks:e,variant:t=`default`}){return(0,k.jsx)(`div`,{className:t===`compact`?`${vr.content} ${vr.contentCompact}`:vr.content,children:e.map((e,t)=>{switch(e.type){case`p`:return(0,k.jsx)(`p`,{children:(0,k.jsx)(xr,{text:e.text})},t);case`heading`:return(0,k.jsx)(e.level===3?`h3`:`h2`,{id:e.id,className:e.id?vr.anchorHeading:void 0,children:e.text},t);case`hr`:return(0,k.jsx)(`hr`,{className:vr.divider},t);case`list`:return(0,k.jsx)(`ul`,{className:vr.list,children:e.items.map((e,t)=>(0,k.jsx)(br,{item:typeof e==`string`?{text:e}:e},t))},t);case`nav`:return(0,k.jsx)(`ul`,{className:vr.nav,children:e.items.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(yr,{href:e.href,children:e.label})},e.href))},t);case`img`:return(0,k.jsx)(`figure`,{className:vr.figure,children:(0,k.jsx)(`img`,{src:ir(e.src),alt:e.alt??``,className:vr.image,width:e.width,height:e.height,loading:`lazy`})},t);default:return null}})})}var Cr=`---
slug: koji-yatani
title: Koji Yatani / 矢谷浩司
---

![](/images/members/me_202010-1024x423.jpg)

Professor

Department Chief, Department of Information and Communication Engineering, Graduate School of Information Science and Technology

Emerging Design and Informatics Course, Interfaculty Initiative in Information Studies

Department of Electrical Engineering and Information Systems (EEIS), School of Engineering

Department of Information and Communication Engineering, Faculty of Engineering

The University of Tokyo

ACM Distinguished Member

東京大学

大学院情報理工学系研究科 電子情報学専攻（同専攻主任）

大学院学際情報学府 先端表現情報学コース 兼担

大学院工学系研究科 電気系工学専攻 兼担

工学部電子情報工学科

教授

ACM Distinguished Member

My full CV is available upon request.

***

<!-- nav -->
- [For prospective members / IIS Labにご興味のある方へ](/join)
- [Statistical methods for HCI research / HCI研究向けの統計手法](https://yatani.jp/teaching/doku.php?id=hcistats:start)
- [My teaching / 私が担当している授業](https://yatani.jp/teaching/doku.php)
- [Koji's paper reading method / 矢谷流論文の読み方](https://iis-lab.org/misc/paperreading/)
- [Koji's Research Reality Check / 矢谷流研究アイデアチェックリスト](/misc/realitycheck)
- [If you want me to write a letter for you / 推薦状依頼に関して](https://iis-lab.org/misc/letters/)
- [Google Scholar](https://scholar.google.com/citations?user=2ltL6YkAAAAJ)
- [IIS Lab Instagram](https://www.instagram.com/iislab/)
<!-- /nav -->

***

## Who is Koji? / 自己紹介

I am a researcher in Human-Computer Interaction (HCI) and ubiquitous computing. More specifically, my current research focuses on Human-AI Interaction and human well-being support. In particular, my research includes digital healthcare applications, usable security, AI design and applications for enlarging users' cognitive capabilities. I was the recipient of RIEC Award (2019), IPSJ/ACM Award for Early Career Contributions to Global Research (2020), Japan ACM SIGCHI Local Chapter Distinguished Young Researcher Award (2021), Funai Academic Award (2021), IPSJ Microsoft Faculty Award (2022), and UTokyo Graduate School of Engineering Dean's Award on Research (2024). For academic services, I was an ACM UbiComp Steering Committee Chair (2019 – 2021) and a Program/Papers co-chair for UbiComp 2015 and CHI 2022. I was inducted into an ACM Distinguished Member in 2022. He is serving as a Technical Program Chair for CHI 2025. On my personal side, I learn Chanoyu (Japanese tea ceremony, Urasenke) as my hobby and have a chamei (a name bestowed by the Urasenke grand master), Soko Yatani, and am also an associate professor for it since 2024. I also enjoy wearing kimono. 🙂

私の研究分野は，ヒューマン・コンピュータ・インタラクション(Human-Computer Interaction; HCI)とユビキタスコンピューティングです．現在は人間とAIとの連携（Human-AI Interaction）と人間のウェルビーイング支援を研究の重点領域としています．具体的には，デジタルヘルスケア，使いやすい・わかりやすいセキュリティ技術（ユーザブルセキュリティ），ユーザの認知能力を高めるAI設計と応用の研究しています．これらの研究成果によりRIEC Award（2019年），IPSJ/ACM Award for Early Career Contributions to Global Research（2020年），Japan ACM SIGCHI Local Chapter優秀若手研究者賞（2021年），船井学術賞（2021年），マイクロソフト情報学研究賞（2022年），東京大学工学系研究科長表彰（研究部門，2024年）を受賞しています．学術的な活動ではACM UbiCompの運営委員会委員長（2019 – 2021年）や，UbiComp 2015とCHI 2022にて論文査読委員会委員長を務めました．また2022年にACMからDistinguished Memberに選出されました．また，CHI 2025においてはTechnical Program Chair（全プログラムの統括）を務めています．個人の趣味では裏千家茶道を学んでおり，矢谷宗浩という茶名を頂戴し（2024年準教授拝受），着物を着ることも愉しみとしています．

## Contact / 連絡先

Office: Faculty of Engineering Building 2, 7-3-1, Hongo, Bunkyo-ku, Tokyo, JAPAN.

E-mail: [my_given_name (starting from K)] "at" iis-lab.org

オフィス: 東京都文京区本郷7-3-1 工学部2号館

メールアドレス: [私の下の名前] "at" iis-lab.org

## Biography / 略歴

Dr. Koji Yatani (https://yatani.jp) is a Professor in Department of Information and Communication Engineering, Graduate School of Information Science and Technology at The University of Tokyo (Department of Information and Communication Engineering for undergrads), where he leads Interactive Intelligent Systems Laboratory (https://iis-lab.org). He is also affiliated with Interfaculty Initiative in Information Studies and Graduate School of Engineering. His research emphasizes on improving and redesigning people's well-being through advanced information technology. The examples of his research include digital healthcare applications, usable security, AI design and applications for enlarging users' cognitive capabilities.

Dr. Koji Yatani received his B.Eng. and M.Sci. from University of Tokyo in 2003 and 2005, respectively, and his Ph.D. in Computer Science from University of Toronto in 2011. He was under the supervision by Prof. Khai N. Truong at Dynamic Graphics Project. On November 2011, he joined HCI group at Microsoft Research Asia in Beijing, China. On October 2013, he had an appointment of a Visiting Associate Professor in Graduate School of Information Science and Technology, at The University of Tokyo. He then was an Associate Professor at Graduate School of Engineering, The University of Tokyo between August 2014 and March 2026.

Dr. Koji Yatani has received multiple major research fundings as well as important awards. He receives JST PRESTO (2023 – 2027), and JST ASPIRE for Top Scientists (2024 – 2030, the main PI). He is an ACM Distinguished Member for outstanding scientific contributions to computing (Class of 2022). He was the winner of RIEC Award (2019); IPSJ/ACM Award for Early Career Contributions to Global Research (2020); Japan ACM SIGCHI Local Chapter Distinguished Young Researcher Award (2021); Funai Academic Award (2021); IPSJ Microsoft Faculty Award (2022); and UTokyo Graduate School of Engineering Dean's Award on Research (2024). He was a recipient of 2 Best Paper Awards at CHI (2011 and 2016), 3 Honorable Mention Awards at CHI (2014, 2020), a Distinguished Paper Award at PACM IMWUT (2022), and 2 Honorable Mention Awards at MobileHCI (2014). He was also a winner of School of Engineering Best Teaching Award at University of Tokyo (2022).

Dr. Koji Yatani served as a founding editor for Proceedings of ACM Interactive, Mobile, Wearable and Ubiquitous Technology (2016–2020), a Papers co-chair for CHI 2022, a Program co-Chair for UbiComp 2015. He was also an Steering Committee chair for UbiComp (2019 – 2021). He also served as a program committee and/or conference committee on major international conferences in the field of HCI, Ubiquitous computing and Haptics, including CHI, UbiComp, UIST, and MobiSys. He currently serves as a Technical Program Chair for CHI 2025, an Associate Editor for ACM Transactions on Computer-Human Interaction (TOCHI), an Editor for Foundations and Trends in Human-Computer Interaction, and a Chair for Japan ACM SIGCHI Chapter.

2026年4月より東京大学大学院情報理工学系研究科電子情報学専攻(工学部電子情報工学科)教授．同大学大学院学際情報学府先端表現情報学コース，工学系研究科電気系工学専攻兼担．同大学にてインタラクティブ・インテリジェント・システム ラボ(https://iis-lab.org)を率いる．先進的情報技術を活用した人々のウェルビーイングの向上と再設計を目指した研究を行っており，デジタルヘルスケア，ユーザブルセキュリティ，ユーザの認知能力を高めるAI設計と応用の研究を行っている．

2003年，2005年に東京大学よりそれぞれ学士号(工学)，修士号(科学)を取得．2011年にカナダ，トロント大学より博士号(コンピュータ科学)を取得．2011年11月から2014年7月までMicrosoft Research Asia，HCI groupに勤務．また，2013年10月から2014年7月まで東京大学大学院情報理工学系研究科にて，客員准教授も務めた．2014年8月から2025年3月まで東京大学大学院工学系研究科電気系工学専攻准教授．

主な研究予算においては，2023年から2027年までJSTさきがけ研究代表者，2024年から2023年までJST トップのためのASPIREにて研究代表者を務める．情報科学分野における卓越した研究成果により2022年にはACM Distinguished Memberに選出．電気情報通信，情報学，およびヒューマンコンピュータインタラクション分野における学術研究で国際的に顕著な貢献があり，当該分野の発展にさらに寄与することが期待される若手研究者に与えられる賞として，RIEC Award（2019年），IPSJ/ACM Award for Early Career Contributions to Global Research（2020年），Japan ACM SIGCHI Local Chapter優秀若手研究者賞（2021年），船井学術賞（2021年），マイクロソフト情報学研究賞（2022年），東京大学工学系研究科長表彰（研究部門，2024年）を受賞．国際会議・論文誌においては，ACM CHIにてBest Paper Award 2件（2011，2016年），Honorable Mention Award 3件（2014，2020年），ACM IMWUTにてDistinguished Paper Award 1件（2022年），ACM MobileHCIにおいてHonorable Mention Award 2件（2014年）を受賞．東京大学においては2017年に東京大学卓越研究員に選出．2022年に工学部Best Teaching Awardを受賞．

ヒューマン・コンピュータ・インタラクション分野の学術界に幅広く貢献し， ACM CHI (2022)とACM UbiComp (2015)では共同プログラム委員長，Proceedings of ACM Interactive, Mobile, Wearable and Ubiquitous Technologyにおいて創設時からのエディター (2016–2020)，UbiCompの運営委員会委員長(2019–2021)を務めた他，ACM CHI，ACM UbiComp，ACM UIST，ACM MobiSysなど，HCIやユビキタス・コンピューティングにおける主要な国際会議にてプログラム委員や会議運営委員を務めた．現在は，CHI 2025においてはTechnical Program Chair（全プログラムの統括），ACM Transactions on Computer-Human Interaction (TOCHI)において編集委員，Foundations and Trends in Human-Computer Interactionにおいてエディタ，Japan ACM SIGCHI ChapterにおいてChairも務める．

## Award & Recognition / 表彰・受賞

- 2024/1: 工学系研究科長表彰（研究部門） / Graduate School of Engineering Dean's Award on Research
- 2022/12: [ACM Distinguished Member](https://www.acm.org/media-center/2022/december/distinguished-members-2022)
- 2022/9: PACM IMWUT Distinguished Paper Award 1件
- 2022/3: [マイクロソフト情報学研究賞](https://www.ipsj.or.jp/award/microsoft-award.html) ([IPSJ Microsoft Faculty Award](https://www.ipsj.or.jp/english/organization/aboutipsj/award/microsoft.html))
- 2022/3: [工学部Best Teaching Award (School of Engineering Best Teaching Award)](https://www.t.u-tokyo.ac.jp/about/best-teaching-award2021)
- 2021/3: [船井学術賞](https://funaifoundation.jp/grantees/awardees_up_to_now.html) (Funai Academic Award)
- 2021/1: [Japan ACM SIGCHI Local Chapter Distinguished Young Researcher Award](https://sigchi.jp/award/2020/result.en.html#KojiYatani) [(優秀若手研究者賞)](https://www.u-tokyo.ac.jp/ex-researchers/)
- 2020/4: CHI Honorable Mention Award 1件
- 2020/3: [IPSJ/ACM Award for Early Career Contributions to Global Research](https://www.ipsj.or.jp/award/ACM-Joint-Award2020.html) ([People of ACM article](https://www.acm.org/articles/people-of-acm/2020/koji-yatani) on this award)
- 2019/11: [RIEC Award](http://www.riec.tohoku.ac.jp/ja/info/riec-award/r1/)
- 2017/12: 東京大学卓越研究員 / UTokyo Excellent Young Researcher
- 2016/5: CHI Best Paper Award 1件
- 2014/9: MobileHCI Honorable Mention Award 2件
- 2014/4: CHI Honorable Mention Award 2件
- 2011/5: CHI Best Paper Award 1件

## Funding received / 研究予算

- 2024/12 – 2030/3: JST TopのためのASPIRE 研究代表者 / JST ASPIRE FOR TOP SCIENTISTS, main PI
- 2023/10 – 2027/3: JST さきがけ 研究代表者 / JST PRESTO, main PI
- 2020/4 – 2023/3: NII LINE CRIS 共同研究 研究代表者 / NII LINE CRIS Collaboration Research, main PI

## Professional activities / 学会活動

- Journal editor / 論文誌エディタ

Proceedings of ACM Interactive, Mobile, Wearable and Ubiquitous Technology (IMWUT; 2016 – 2020, one of the founding editors)
- Foundations and Trends in Human-Computer Interaction (FnT HCI, 2020 –)
- IEEE Pervasive Computing, Special Issue on Growing Up with Pervasive Computing (2019, as a Guest co-Editor)
- Journal associate editor / 論文誌編集委員

ACM Transaction of Computer-Human Interaction (TOCHI; 2017 –)
- 情報処理学会論文誌(特集号)
- Program/Papers co-chair / プログラム委員長等

CHI (2025) as a Technical Program Chair
- CHI (2022) as a Papers Chair
- UbiComp (2015) as a Program Chair
- CHI subcommittee co-chair / CHIサブコミッティ委員長

Engineering Interactive Systems and Technology (2019, 2020)
- Program committee / プログラム委員

AH (2013)
- ASSETS (2017, 2018, 2019, 2021)
- CHI (2013, 2017)
- Mobiquitous (2015)
- MobiSys (2014)
- MUM (2020, 2025)
- PX (2020)
- Ubicomp (2012 – 2014)
- UIST (2013, 2015, 2017, 2018)
- World Haptics Conference (2013)
- WWW (2018)
- インタラクション(2018)
- Conference steering committee / 運営委員

Japan ACM SIGCHI Chapter (Vice chair; 2016 –)
- ACM UbiComp conference (2015 – 2021, as the steering committee chair 2019 – 2021)
- 情報処理学会UBI研究会 (2015 – 2018)
- 情報処理学会HCI研究会 (2020 –)
- Conference committee / 会議運営委員

Award Chair: UbiComp (2023)
- Sponsorship Chair: CHI (2021), UIST (2016), UbiComp (2017, 2018)
- Doctoral Consortium Chair: CHI (2019, 2020), ISS (2018)
- Journals Chair: CHI (2021)
- Video Chair: Ubicomp (2013)
- Student Innovation Contest Chair: UIST (2020)
- Mentoring Chair: ITS (2012)
- Award Selection Committee / 賞選考委員会

PACM IMWUT Distinguished Paper Award (2021 – 2023)
- UbiComp 10-years Impact Award (2018, 2021)
- UbiComp Gaetano Outstanding Student Award (2019, 2020, 2021)
- UIST Best Paper Award (2015)
- Journal reviewer / 論文誌査読者

ACM Transactions on Interactive Intelligent Systems
- ACM Transactions on Computer-Human Interaction
- Applied Ergonomics
- Human–Computer Interaction (Taylor & Francis)
- IEEE Sensors Journal
- IEEE Transactions on Haptics
- IEEE Transactions on Mobile Computing
- IEEE Transactions on Multimedia
- IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences
- IEICE Transactions on Information and Systems
- International Journal of Human-Computer Studies (Elsevier)
- Pervasive and Mobile Computing (Elsevier)
- Proceedings of ACM Interactive, Mobile, Wearable, and Ubiquitous Technology (IMWUT)
- 情報処理学会論文誌
- ヒューマンインターフェース論文誌
- Conference reviewer / 会議査読者

ACE, APCHI, APSIPA Annual Summit and Conference, CHI, CSCW, DIS, GI, Internet of Things Conference, ITS (formally TableTop), IUI, MobileHCI, NordiCHI, Pervasive, TEI, UbiComp, UIST, SIGGRAPH Asia, 3DUI
- Funding reviewer / 研究提案査読者

Fostering Responsible Research Practices by The Netherlands Organisation for Health Research and Development
- JST PRESO / JSTさきがけ「人とAIの共生・協働社会を構成する要素研究と基盤技術の創出」領域アドバイザー
- Ontario Research Fund
- Philippine-California Advanced Research Institutes Project
- Veni grant program (Netherlands Organization for Scientific Research)
- Content judge / コンテスト審査委員

JSEC (Japan Science & Engineering Challenge，高校生・高専生科学技術チャレンジ）

本審査委員（2025，2026）
- 予備審査委員（2024）
- 孫正義育英財団 審査委員（2026）

## Roles at my university / 学内委員等

- 情報理工学系研究科電子情報学専攻 専攻主任（2026年4月〜）
- 工学部教育問題検討委員会 委員（2026年4月〜）
- 工学部研究倫理委員会 委員（2024年4月〜）
- 工学部男女共同参画委員会（2020年4月〜2024年3月）

副委員長（2022年4月〜2024年3月）
- 工学部広報室 室員（2017年4月〜2018年3月）

## Keynote talks / 基調講演

- Beyond Performance: Designing AI for Human Reflection, Resilience, and Well-being. Closing Keynote at ICHEC 2025, November 2025.
- Interactive Technology for Personal Healthcare Applications. Keynote talk at WristSense 2019 workshop. March 2019.

## Invited talks & panels / 招待講演・パネリスト

- AIといっしょに何をする？ダヴィンチマスターズ 春の探究フェスタ（小学生向け講義）．2026年3月．
- Human-AI Interaction：人と協調するAIのデザイン．「東大の研究室をのぞいてみよう！」における模擬講義．2026年3月．
- Human-Computer Interaction & Human-AI Interaction．相模原中等教育学校．2026年3月．
- 人の内省・レジリエンス・\vウェルビーイングのためのAI．富山大学臨床研究DX講演会．2026年3月．
- Human-AI Interaction：人と協調するAIのデザイン，およびAIチャットボットを使用したワークショップ．JAIMA 中堅・若手人財育成ワークショップ．2026年2月．
- Beyond Performance: Designing AI for Human Reflection, Resilience, and Well-being. AI x Health at Georgia Institute of Technology, February 2026.
- Human-AI Interaction：人と協調するAIのデザイン．TiiFa英語学院．2026年2月．
- Human-Computer Interaction & Human-AI Interaction．竹園高等学校．2026年1月．
- Human-AI Interaction：人と協調するAIのデザイン．清水東高等学校．2025年10月．
- What do people feel when using gen-AI for intellectual activities? —Through the lens of human-AI interaction research— （生成AIと共に知的作業を行う際に人は何を感じるか？ 〜Human-AI Interaction研究の視点から〜） ．「生成AIと教育について考える」シンポジウム＋東大教職員ワークショップでの特別講演，2024年12月．
- Human-AI Interaction：人と協調するAIのデザイン．伊勢崎市四ツ葉学園中等教育学校．2024年9月．
- Human-Computer Interaction & Human-AI Interaction．宮崎大宮高等学校・高雄高級中學校．2024年8月．
- HCI：人と一緒に歩む情報科学研究．茨城県立並木中等教育学校．2024年6月．
- 人とAIの共創社会を実現するための文理融合（招待パネリスト）．人工知能学会全国大会．2024年5月．
- ユーザの健康的な生活を促進するモバイル\vアプリケーション研究の実践と課題．アルコール・薬物依存関連学会 合同学術総会．2023年10月．
- HCI：人と一緒に歩む情報科学研究．東京都立立川高等学校．2023年10月．
- 「アルゴリズム」の授業の裏側と効果を高めるための仕組み．ギブリー社主催AgileHR day．2023年10月．
- 人と一緒に創り出す情報技術の新たな応用. 東京大学オープンキャンパス. 2023年8月．
- ユーザの生活に融合するデジタルヘルスケア．日本口腔ケア協会学術大会並びに日本口腔ケア学会春季大会．2023年2月．
- Dual-purpose Interaction: Designing interactive systems interwoven with what people already do. Invited talk at Boston University Metropolitan College, November 2022.
- 学術集会がビジネスに与える新たなインパクト（本セッションの企画，およびモデレーターを担当）．東北大学 電気通信研究所 共同プロジェクト研究 公開シンポジウム 「これからの学術集会を考える」．2022年10月．
- 東京大学矢谷浩司准教授に学ぶオンラインでの効果的なアルゴリズム能力の育成手法と心得．Track IT人材育成戦略会議．2022年8月．
- 東京大学矢谷浩司准教授に学ぶ オンラインでの効果的なアルゴリズム能力の育成手法と心得．ギブリー社主催AgileHR day．2022年3月．
- Driving Application-oriented Research through Sensing Technology. COMSNETS 2022, January 2022.
- "Enabler" is my middle name: Creating enabling technology and systems. Invited talk at MSRA Alumni Association Live+, September 2021.
- 公開討論～誹謗中傷を防ぐには～（パネリスト）．第94回五月祭，2021年9月．
- "Enabler" is my middle name: Creating enabling technology and contributing to enabling communities. Award talk at RIEC International Symposium on Human-Computer Interaction, January 2021.
- Career development talk and panel. CSCW Asia Winter School 2020, December 2020.
- Helping adolescent SNS users overcome privacy and security threats. Invited talk at the RIEC International Symposium on Human-Computer Interaction. January 2020.
- Career development talk and panel. CSCW Asia Winter School 2019, December 2019.
- 知的作業の生産性を飛躍させるヒューマンコンピュータインタラクション技術の設計と評価．RIEC Award授賞式．2019年12月．
- なぜ研究するのか？ ～大学で学んでほしいこと～．西大和学園中学校．2019年7月．
- Sensing Technology and Interface for Personal Healthcare. Invited talk at the third ACM SIGCHI Asian Symposium. December 2018.
- 次の「当たり前」をデザインする 〜HCI研究がお手伝いできること〜. 日本放射光学会第10回若手研究会. 2018年9月．
- AIに触れてみよう. 文京区教育センター 第6回子ども科学カレッジ. 2018年7月．
- Reshaping Security Experience. Invited talk at University of British Columbia, Designing for People project. June 2018.
- なぜ研究するのか？ ～大学で学んでほしいこと～．東京都立井草高等学校．2018年2月．
- A Ph.D. – What does it take? Invited lecture at Kochi Institute of Technology, December 2016.
- Interactive technology for creative, productive and healthy life. Invited talk at the first ACM SIGCHI Asian Symposium. December 2016.
- Interactive technology for creative, productive and healthy life. Invited talk at NTU-UTokyo joint conference, National Taiwan University. November 2016.
- HCI for productivity and creativity. Invited talk at Post-CHI 2015 Workshop, KAIST. April 2015.
- Why, What and How to Evaluate?: Another IR Evaluation Direction with Qualitative Approaches. Invited panelist at International Workshop on Evaluating Information Access, Graduate School of Information Science and Technology, December 2014.
- Interactive Productivity Support: For the Better Get Things Done. Invited lecture at Advanced Topics in HCI (taught by Prof. Jun Rekimoto), Graduate School of Interdisciplinary Information Studies, University of Tokyo. October 2014.
- Productivity, Creativity, Diversity. Invited lecture at Media Informatics (taught by Prof. Takeo Igarashi), Graduate School of Information Science and Technology, University of Tokyo. June 2013.
- How Research can Change the World: the Impact of Kinect. Invited lecture at Department of Electrical Engineering and Information Systems, University of Tokyo. June 2013.
- Social Computing: New Relationship and Interaction between Human and Computers. Invited talk at Social Computing Symposium (a Japanese domestic conference). June 2013.
- My Lessons Learned from Research: Things You should Know and Do before Getting Ph.D. Invited lecture at Department of Electrical Engineering and Information Systems, University of Tokyo. December 2012.
- A Ph.D. – What Does It Take? Invited talk at Department of Computer Science and Information Engineering, National Taiwan University. November 2012.
- Sensing Technologies and Interaction. Invited seminar at Nikkei Electronics seminar. November 2012.
- Kinect @ MSR. Talk in the Kinect4Windows workshop at Interaction 2012 (a Japanese domestic conference). March 2012.
- The Fun of Failure: Lessons Learned from Designing Interactive Systems. Invited talk at the VRSJ Annual Conference (a Japanese domestic conference). September 2011.
- Review Spotlight: A User Interface for Summarizing Online Reviews. Invite talk at CS4HS Summer Program for HS Teachers, University of Toronto. July 2011.
- Cutting Edge Research: Input Devices. Participated as a speaker and panelist at the INplay conference. May 2011.
- Interactive Systems with User-generated Data and Content. Invited talk at DCS Symposium on Trends in Computing, University of Toronto. May 2010.

## Invited articles / 寄稿

- 先生，質問です！ 情報処理学会学会誌2019年8月号．[[pdf](https://iis-lab.org/paper/IPSJ-201908.pdf)]
- AI研究が拓く新しい産学連携 〜非AI研究者の視点から〜 化学工業，2018年8月．[[pdf](https://iis-lab.org/paper/kagakukogyo201808.pdf)]
- 選択する自由，選択する責任 -大学教員になって感じたこと- 情報処理学会誌，2017年5月．[[pdf](https://iis-lab.org/paper/IPSJ2017.pdf)]
- SIGGRAPH Asia 参加報告，VR学会論文誌，2016年3月 (ウェブ掲載版は[こちら](https://vrsj.org/report/7515/))．
- A Ph.D. – What does it take? 人工知能学会誌，2014年7月．[[pdf](https://iis-lab.org/paper/JSAI2014.pdf)]

## Media Exposure / メディア・記事

- 東大、「拡散モデルを用いた写真内の情報秘匿技術」について発表．2024/5/14．[[link](https://www.nikkei.com/article/DGXZRSP671215_U4A510C2000000/)]
- World’s Largest Computing Society Honors 2022 Distinguished Members for Ground-Breaking Achievements and Longstanding Participation. ACM. 2022/12/07．[[link](https://www.acm.org/media-center/2022/december/distinguished-members-2022)]
- 東大、対話型AIモデル構築システムLookHereを構築．日本経済新聞，2022/11/01．[[link](https://www.nikkei.com/article/DGXZRSP643091_Y2A021C2000000/)]
- 東大、ボット判定に情報セキュリティ・倫理に関する学習を織り込んだシステム「DualCheck」を構築．日本経済新聞，2022/8/5．[[link](https://www.nikkei.com/article/DGXZRSP637855_V00C22A8000000/)]
- テレワーク時の雑談に参加したい条件とは？　東大がインタビュー調査．ITmedia，2022/1/14．[[link](https://www.itmedia.co.jp/news/articles/2201/14/news056.html)]
- 東京大学がシンクロダンスの練習支援システムSyncUp発表、コンピュータービジョン技術でポーズ・動きのズレ可視化．TechCrunch，2021/9/29．[[link](https://jp.techcrunch.com/2021/09/29/tokyo-univ-syncup/)]
- People of ACM, 2020/11/5．[[link](https://www.acm.org/articles/people-of-acm/2020/koji-yatani)]
- 「瞳に映るモニター画面」でドライアイ検出　東大が深層学習で開発．ITmedia，2020/10/28．[[link](https://www.itmedia.co.jp/news/articles/2010/28/news067.html)]
- 一番最初に失敗する集団!?人間とテクノロジーの新しい関係を追求する研究とは．Hey! Labo，2020/4/2．[[link](https://hey-labo.com/labo/iis-lab/blog/29)]
- 東大の矢谷研究室とAI連携。調査・記事作成など共同研究。次世代メディア追求．日本海事新聞社，2019/9/6 デイリー版1面．[[link](https://www.jmd.co.jp/article.php?no=249744)]
- 情報を用いて指紋認証を拡張するシステムの研究．セコム科学技術振興財団 挑戦的研究助成 研究者インタビュー．2019/9/6 [[link](https://www.secomzaidan.jp/challenge/interview/cyber/07yatani/index.html)]
- 東京大学・矢谷浩司氏が展望。手軽に“自分だけのハイライト”を作れる時代へ．パ・リーグ インサイト．2019/8/21．[[link](https://insight.official-pacificleague.com/news/18077)]
- 最新テクノロジーと実社会をつなぐ「応用科学」の専門家 –技術アドバイザー・矢谷 浩司，2019年6月． [[link](https://www.wantedly.com/companies/stockmark/post_articles/171937)]
- 人間はもう超えた！　ファッション向けＡＩの進化．論座 2019/5/27．[[link](https://webronza.asahi.com/science/articles/2019052200009.html)]
- びっくり新技術　価格や色を音声に，アプリ開発．東京新聞(2019/4/22朝刊)，中日新聞(2019/4/23夕刊)．
- 人間とコンピュータの最適な関係を実現する〜矢谷浩司・東京大学准教授，Top Researchers，2019年4月．[[link](https://top-researchers.com/?p=189)]
- 百貨店で買い物、声や振動で案内 視覚障害者向けアプリ，朝日新聞デジタル2019年3月7日．[[link](https://www.asahi.com/articles/ASM2W3W7BM2WULBJ008.html)]
- やり方が分かっていたらそれは研究ではない―工学部・矢谷浩司准教授，キミの東大，2019年3月．[[link](https://kimino.ct.u-tokyo.ac.jp/lab-visit/2021)]
- 経営ひと言「失敗こそ仕事」，日刊工業新聞2019年2月15日版． [[link](https://www.nikkan.co.jp/articles/view/00506399)]
- 衝動買いにつながるしぐさ、東大などがデータ収集，日刊工業新聞2019年1月31日版．[[link](https://www.nikkan.co.jp/articles/view/00504428)]
- 視覚障がい者の買い物、ＲＦＩＤで支援 東大がスマホアプリ開発，日刊工業新聞2019年1月28日版．[[link](https://www.nikkan.co.jp/articles/view/00503965)]
- 東京大学卓越研究員，2018年12月． [[link](https://www.u-tokyo.ac.jp/ex-researchers/)]
- Stockmark社との共同事業，2018年2月．([AI Alchemist](https://www.ai-alchemist.com/))

TechCrunch [[link](https://jp.techcrunch.com/2018/02/19/stockmark-ai-alchemist/)]
- PR times [[link](https://prtimes.jp/main/html/rd/p/000000004.000024407.html)]
- AI Now [[link](http://ainow.ai/2018/02/19/133426/)]
- NISSEN Digital Hub [[link](https://nissenad-digitalhub.com/articles/ai-research-university-japan/)]
- SAKIGAKE，2017年7月．[[link](https://web.archive.org/web/20170722121201/http://sakigake.tokyo/archives/4119)]
`;function wr(e){let t=e.match(/^###\s+(.+?)(?:\s+\{#([^}]+)\})?$/);if(t)return{type:`heading`,text:t[1].trim(),id:t[2],level:3};let n=e.match(/^##\s+(.+?)(?:\s+\{#([^}]+)\})?$/);return n?{type:`heading`,text:n[1].trim(),id:n[2],level:2}:null}function Tr(e){let t=e.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);return t?{alt:t[1],src:t[2]}:null}function Er(e){let t=e.match(/^<!--\s*width:\s*(\d+)(?:\s+height:\s*(\d+))?(?:\s+alt:\s*(.*?))?\s*-->$/);if(!t)return{};let n={};return t[1]&&(n.width=Number(t[1])),t[2]&&(n.height=Number(t[2])),t[3]&&(n.alt=t[3]),n}function Dr(e){let t=e.match(/^(\s*)-\s+(.+)$/);return t?{depth:Math.floor(t[1].length/2),text:t[2].trim()}:null}function Or(e){let t=e.match(/^-\s+\[([^\]]+)\]\(([^)]+)\)$/);return t?{label:t[1],href:t[2]}:null}function kr(e,t,n){let r={text:n};if(t===0){e.push(r);return}let i=e[e.length-1];for(let e=1;e<t;e+=1)i.children??=[],i.children.length||i.children.push({text:``}),i=i.children[i.children.length-1];i.children??=[],i.children.push(r)}function Ar(e){let t=e.replace(/\r\n/g,`
`).split(`
`),n=[],r=[],i=null,a=null,o=null,s=()=>{r.length&&(n.push({type:`p`,text:r.join(`
`)}),r=[])},c=()=>{if(!i?.length){i=null;return}n.push({type:`list`,items:i}),i=null},l=()=>{if(!a?.length){a=null;return}n.push({type:`nav`,items:a}),a=null},u=()=>{o?.src&&(n.push({type:`img`,src:o.src,alt:o.alt??``,width:o.width,height:o.height}),o=null)};for(let e=0;e<t.length;e+=1){let d=t[e],f=d.trim();if(a){if(f===`<!-- /nav -->`){l();continue}let e=Or(f);if(e){a.push(e);continue}}if(f===`<!-- nav -->`){s(),c(),u(),a=[];continue}if(o&&o.src){let e=Er(f);if(Object.keys(e).length>0){o={src:o.src,alt:o.alt,...e},u();continue}u()}if(f===`***`){s(),c(),u(),n.push({type:`hr`});continue}let p=wr(f);if(p){s(),c(),u(),n.push(p);continue}let m=Tr(f);if(m){s(),c(),o={src:m.src,alt:m.alt};continue}let h=Dr(d);if(h){s(),u(),i??=[],kr(i,h.depth,h.text);continue}if(!f){s(),c();continue}c(),r.push(f)}return s(),c(),l(),u(),n}function jr(e){let t=e.trim();return t.startsWith(`"`)&&t.endsWith(`"`)||t.startsWith(`'`)&&t.endsWith(`'`)?t.slice(1,-1):t}function Mr(e){if(!e.startsWith(`---
`))return{meta:{},body:e};let t=e.indexOf(`
---
`,4);if(t<0)return{meta:{},body:e};let n=e.slice(4,t),r={},i=n.split(`
`),a=0;for(;a<i.length;){let e=i[a],t=e.match(/^([\w-]+):\s*\|\s*$/),n=e.match(/^([\w-]+):\s*(.*)$/);if(t){let e=t[1],n=[];for(a+=1;a<i.length;){let e=i[a];if(/^[\w-]+:\s/.test(e))break;n.push(e),a+=1}r[e]=n.join(`
`).replace(/\n$/,``);continue}n&&(r[n[1]]=jr(n[2])),a+=1}return{meta:r,body:e.slice(t+5).replace(/^\n/,``)}}function Nr(e,t){return e.match(RegExp(`<!-- ${t} -->\\n([\\s\\S]*?)(?=\\n<!-- |$)`))?.[1]?.trim()??``}function Pr(e,t){let n=Nr(e,t);return n?n.split(`
`).map(e=>e.replace(/^-\s+/,``).trim()).filter(Boolean):[]}var{meta:Fr,body:Ir}=Mr(Cr),Lr={slug:Fr.slug??``,title:Fr.title??``,blocks:Ar(Ir)},Rr={[Lr.slug]:Lr};function zr(e){return Rr[e]}var Br={header:`_header_1uy6m_1`,back:`_back_1uy6m_5`,pageTitle:`_pageTitle_1uy6m_18`};function Vr(){let{slug:e}=_t(),t=e?zr(e):void 0;return t?(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsxs)(`header`,{className:Br.header,children:[(0,k.jsx)(`p`,{className:Br.back,children:(0,k.jsx)(In,{to:`/members`,children:`← Members`})}),(0,k.jsx)(`h1`,{className:Br.pageTitle,children:t.title})]}),(0,k.jsx)(Sr,{blocks:t.blocks,variant:`compact`})]}):(0,k.jsx)(Vt,{to:`/members`,replace:!0})}var Hr={en:`We are located in Faculty of Engineering Building 2, Hongo Campus. The closest subway stations for Hongo Campus are: Todai-mae (Namboku-line, 10 mins walk), Nezu (Chiyoda-line, 10 mins walk), and Hongo-sanchome (Marunouchi-line and Oedo-line, 15 mins walk). If you plan to visit us, please send an email to Koji Yatani (koji "at" iis-lab.org) to get more details to come to our lab.`,jaBeforeMapLink:`私たちのラボは本郷キャンパス工学部2号館にあります．最寄りの地下鉄の駅は東大前(南北線，徒歩10分)，根津(千代田線，徒歩10分)，本郷三丁目(丸ノ内線，大江戸線，徒歩15分)です．ラボに来られる方はお手数ですが事前に矢谷(koji "at" iis-lab.org)に連絡の上，お越し下さる場所を確認してください．日本語のマップは`,jaMapLinkLabel:`こちら`,jaAfterMapLink:`です．`,mapImage:`/images/contact-map.png`,mapFull:`/images/contact-map.png`,hongoCampusMapEn:{label:`Hongo Campus Map`,href:`http://www.u-tokyo.ac.jp/en/about/access.html`},hongoCampusMapJa:{label:`本郷キャンパス マップ`,href:`http://www.u-tokyo.ac.jp/campusmap/map01_02_j.html`},jaDetailedMap:{href:`http://www.u-tokyo.ac.jp/campusmap/cam01_04_03_j.html`}},Ur={pageTitle:`_pageTitle_h6dez_1`,body:`_body_h6dez_11`,map:`_map_h6dez_19`,mapLink:`_mapLink_h6dez_24`,mapImage:`_mapImage_h6dez_36`};function Wr(){let{en:e,jaBeforeMapLink:t,jaMapLinkLabel:n,jaAfterMapLink:r,mapImage:i,mapFull:a,hongoCampusMapEn:o,hongoCampusMapJa:s,jaDetailedMap:c}=Hr;return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:Ur.pageTitle,children:`Contact Us`}),(0,k.jsxs)(`div`,{className:Ur.body,children:[(0,k.jsx)(`p`,{children:(0,k.jsx)(A,{text:e})}),(0,k.jsxs)(`p`,{children:[(0,k.jsx)(A,{text:t}),(0,k.jsx)(`a`,{href:c.href,target:`_blank`,rel:`noopener noreferrer`,children:n}),r]}),(0,k.jsx)(`figure`,{className:Ur.map,children:(0,k.jsx)(`a`,{href:ir(a),className:Ur.mapLink,target:`_blank`,rel:`noopener noreferrer`,children:(0,k.jsx)(`img`,{src:ir(i),alt:`map`,className:Ur.mapImage,width:900,height:470})})}),(0,k.jsxs)(`p`,{children:[`For Hongo Campus, please use the following link:`,` `,(0,k.jsx)(`a`,{href:o.href,target:`_blank`,rel:`noopener noreferrer`,children:o.label}),`.`]}),(0,k.jsxs)(`p`,{children:[`本郷キャンパス全体の地図はこちらにあります:`,` `,(0,k.jsx)(`a`,{href:s.href,target:`_blank`,rel:`noopener noreferrer`,children:s.label}),`.`]})]})]})}var{meta:Gr,body:Kr}=Mr(`---
intro_ja: |
IIS Lab (東京大学矢谷研究室)では国内外でご活躍されている多彩なゲストをお呼びして，ヒューマンコンピュータインタラクション(HCI)，ユビキタスコンピューティング，モバイルシステム・アプリケーションに関係する研究，ビジネス，教育，政策に関する特別講演を不定期に主催し，Distinguished Lecture Seriesとして学内外の方に公開しています．今までに開催したDistinguished Lecture Seriesは以下のとおりです．
intro_en: |
IIS Lab at University of Tokyo organizes distinguished lectures by international and interdisciplinary guests about research, business, education, and political strategies enabled by HCI, Ubiquitous computing, and mobile systems and applications. Our Distinguished Lecture Series are open to people at and outside the university. The following is the list of the past Distinguished Lecture Series.
---

- 2021年7月14日 SOMPOホールディングス株式会社 CDO 楢󠄀﨑浩一様
- 2020年12月23日 大阪大学 栄藤稔先生
- 2019年10月16日 合同会社 DMM.com CTO 松本勇気様
`),qr={ja:Gr.intro_ja??``,en:Gr.intro_en??``},Jr=Kr.split(`
`).map(e=>e.replace(/^-\s+/,``).trim()).filter(Boolean),Yr={pageTitle:`_pageTitle_lc6kq_1`,intro:`_intro_lc6kq_11`,divider:`_divider_lc6kq_23`,lectureList:`_lectureList_lc6kq_29`};function Xr(){return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:Yr.pageTitle,children:`DLS`}),(0,k.jsxs)(`div`,{className:Yr.intro,children:[(0,k.jsx)(`p`,{children:qr.ja}),(0,k.jsx)(`p`,{children:qr.en})]}),(0,k.jsx)(`hr`,{className:Yr.divider}),(0,k.jsx)(`ul`,{className:Yr.lectureList,children:Jr.map(e=>(0,k.jsx)(`li`,{children:e},e))})]})}var Zr=`## 2026/4

### Welcome, new members!

We have new members, 1 Ph.D. student, 5 Master students, and 3 undergraduates. Welcome!

博士課程1名，修士課程5名，学部生3名が新たにラボに加わりました！

### Koji is now a full professor!

Koji got promoted to a full professor, and has also moved to Department of Information and Communication Engineering, Graduate School of Information Science and Technology.

矢谷が4/1付で大学院情報理工学系研究科電子情報学専攻に異動となり，教授に昇任いたしました．

## 2026/3

### Big graduation batch!

4 Ph.D.s, 6 Masters, and 4 undergradudates successfully graduated! Congratulations!

博士課程4名，修士課程6名，学部生4名が卒業いたしました．おめでとうございます！

### We receive a CHI 2026 Honorable Mention Award!

CHI 2026において以下の論文がHonorable Mention Awardを受賞いたしました！

> Dániel Szabó, Chi-Lan Yang, Aku Visuri, Jonas Oppenlaender, Bharathi Sekar, Koji Yatani, and Simo Hosio.  Conversational Inoculation to Enhance Resistance to Misinformation.

### We have one CHI 2026 poster accepted!

CHI 2026において以下のポスター論文が採録されました！

> Ya-Fang Lin, Shunpei Norihama, Oluwaseni Johnson, Koji Yatani, and John M. Carroll.  Not a baby app: Designing for coproduction of parenting.

## 2026/2

### We have 3 papers accepted at CHI 2026!

CHI 2026において3件の論文が採録となりました！

> Dániel Szabó, Chi-Lan Yang, Aku Visuri, Jonas Oppenlaender, Bharathi Sekar, Koji Yatani, and Simo Hosio.  Conversational Inoculation to Enhance Resistance to Misinformation.

> Shitao Fang, Koji Yatani, and Kasper Hornbæk.  What We Talk About When We Talk About Frameworks in HCI.

> Chi-Lan Yang, Jing Li, Xuhui Chang, Jingshu Li, Koji Yatani, and Yi-Chieh Lee.  Can AI be a Social Buffer? Investigating the Effect of AI-assisted Cognitive Reappraisal and Narrative Perspectives on Managing Difficult Workplace Conversations over Email.

## 2026/1

### U情報処理学会全国大会にて以下の発表を行います．

3月に開催される情報処理学会全国大会において，以下の3件の発表を行います．

> 混合言語を用いたテキストコミュニケーション体験の調査  梅田悠哉，Jiayi Yang，Hui Guan，Lin Ya-Fang，山下直美，矢谷浩司

> 職場での潜在的バイアスに関する研修のためのインタラクティブなシステムの設計に向けた質的研究  劉　遠歌，周　飛揚，風澤宥吾，矢谷浩司

> AIチャットボットが高校生の思考変容に与える影響の考察  那須　航（市川学園市川高等学校3年，第８回中高生情報学研究コンテストにて発表，UTokyo-GSCの研究成果として）

## 2025/12

### UBI研究会にて2件受賞いたしました！

11月に開催された情報処理学会UBI研究会にて，以下の2件がそれぞれ優秀論文賞，学生奨励賞を受賞しました．

> **優秀論文賞**  篠田 和宏, マラクリヤ シルバン, 亀﨑 允啓, 矢谷 浩司．「刺繍の縫い方の違いによる触覚特性の変化」

> **学生奨励賞**  乘濵 駿平, 岩根 由佳, 竹澤 譲, ホシオ シモ, 平野 真理, 山下 直美, 矢谷 浩司．「家族内ケアストレスの内省記述における時間・空間・社会的距離の影響の調査」

### Our IJHCS paper has been accepted!

以下の論文がInternational Journals on Humam-Computer Studiesに採録となりました．

> Shitao Fang, Xingyu Liu, Takeo Igarashi, and Koji Yatani.  Unraveling Multiparty Conversations: From Human Interaction Mechanisms to Conversational Agent Challenges and Persona Design

### We got 2 IUI 2026 submissions accepted!

以下の2件の論文がIUI 2026に採録となりました．

> Hiroki Nakano, Jo Takezawa, Fabrice Matulic, Chi-Lan Yang, and Koji Yatani.  Understanding Reader Perception Shifts upon Disclosure of AI Authorship.

> Xinrui Fang, Anran Xu, Chi-Lan Yang, Ya-Fang Lin, Sylvain Malacria, and Koji Yatani.  LLM-based In-situ Thought Exchanges for Critical Paper Reading.

### Our TOCHI paper has been accepted!

以下の論文がACM Transactions on Computer-Human Interactionに採録となりました．

> Andy Alorwu, Niels van Berkel, Joonas Moilanen, Parsa Sharmila, Niloofar Meftahi, Koji Yatani, Aku Visuri, and Simo Hosio.  Crowd-Powered Discovery of Mental Health Self-Care Techniques in Higher Education.

## 2025/11

### HCI,UBI研究会にて4件発表いたします．

11月に開催される情報処理学会HCI，UBI研究会にて，以下の4件の発表を行います．

山中 駿, 中野 博貴, 矢谷 浩司．
AIセルフクローンを用いた面接時の回答改善支援手法の検討

中野 博貴, 竹澤 譲, 楊 期蘭, 矢谷 浩司．
AIによる執筆を開示することで読み手の認識に及ぶ影響の理解に向けて

乘濵 駿平, 岩根 由佳, 竹澤 譲, ホシオ シモ, 平野 真理, 山下 直美, 矢谷 浩司．
家族内ケアストレスの内省記述における時間・空間・社会的距離の影響の調査

篠田 和宏, マラクリヤ シルバン, 亀﨑 允啓, 矢谷 浩司．
刺繍の縫い方の違いによる触覚特性の変化

## 2025/10

### Koji is giving a closing keynote at ICHEC 2025!

Koji is giving a closing keynote at [ICHEC 2025](https://ichec.icachi.org/25/).

Title: Beyond Performance: Designing AI for Human Reflection, Resilience, and Well-being

Abstract:
Over the past decade, much of the discourse around artificial intelligence has been dominated by performance metrics—accuracy, speed, and scalability. While these dimensions have undoubtedly advanced the field, they risk constraining our collective imagination about what AI can and should do for human lives. In this keynote, I argue that the HCI community must move beyond performance-centric paradigms to re-envision Human-AI interaction as a means of fostering human reflection, resilience, and well-being. Drawing on my group’s research on extraheric AI and interactive multi-agent systems, I will show how AI systems can be designed not to provide the fastest answer or the most efficient solution, but rather to scaffold deeper thinking, stimulate self-reflection, and support diverse forms of human flourishing. This requires an integration of insights from psychology, medicine, and the social sciences into HCI design, leading to what I call Well-being Intelligence: an emerging paradigm where AI contributes to mental and social health as much as it does to cognitive productivity. I will also discuss the leadership HCI scholars can take in shaping this transition; they must examine not only usability and adoption but also the ethical, social, and cultural implications of AI design choices. By reframing Human-AI interaction around reflection, resilience, and well-being, I aim to stimulate a broader conversation within the HCI community—and society at large—on how we can design AI that sustains and enriches human life.

矢谷が[ICHEC 2025](https://ichec.icachi.org/25/)において基調講演（closing keynote）を行います．

### We have new members!

We have Avon Lin as a post-doc researcher and Nasi Wang as a new Ph.D. student. Welcome!

アボン リンさん，王 納恩さんが，それぞれポスドク研究者，博士課程学生として研究室に加わりました．

### Our Discover Mental Health paper has been accepted!

以下の論文がDiscover Mental Healthに採録となりました．

> Mahmoud Ali, Niels van Berkel, Benjamin Tag, Ville Paananen, Jonas Oppenlaender, Koji Yatani, and Simo Hosio.  Investigating Mental Wellbeing Self-care in Higher Education Using BERTopic Modeling.

## 2025/9

### We got our IMWUT paper accepted!

以下の論文が，PACM IMWUTに採録となりました．

> Zefan Sramek, Sachinthya Lokuge, Tia Sternat, Martin A. Katzman, and Koji Yatani.  Beyond the Feature Level: A Cluster Analysis of Feature-Level Social Media Behaviour Patterns, Maladaptive Use, and Psychological Well-Being.

### We have a full-paper presentation at MobileHCI!

MobileHCI 2025において，以下の論文を発表をします．

> Shunpei Norihama, Shixian Geng, Kakeru Miyazaki, Arissa J. Sato, Mari Hirano, Simo Hosio, and Koji Yatani.  Examining Input Modalities and Visual Feedback Designs in Mobile Expressive Writing.

## 2025/8

### We got our OzCHI paper accepted!

以下の論文が，OzCHIに採録となりました．

> Dániel Szabó, Aku Visuri, Ville Paananen, Achira Handelage, Kavindu Ravishan, Emma Kirjavainen, Koji Yatani, and Simo Hosio.  Factors of Trust for Successfully Adopting Social Robots on the Campus.

### We got our SCF paper accepted!

以下の論文が，SCFに採録となりました．

> Zekun Chang, Yixuan Gao, Yuta Noma, Shuo Feng, Xinyi Yang, Kazuhiro Shinoda, Tung Ta, Koji Yatani, Tomoyuki Yokota, Takao Someya, Tomohiro Tachi, Yoshihiro Kawahara, Koya Narumi, Francois Guimbretiere, and Thijs Roumen.  OriStitch: A Machine Embroidery Workflow to Turn Existing Fabrics into Self-Folding 3D Textiles.

### Our position paper has been accepted at HAIPS (a workshop at ACM CCS)!

以下の論文が，ACM CCSのワークショップHAIPSに採録となりました．

> Anran Xu, Hiromi Arai, and Koji Yatani.  Privacy Perception and Protection in Continuous Vision-Language Models Interaction (Position Paper)

## 2025/7

### We got our ISWC Note accepted!

以下の論文が，ISWC Noteに採録となりました．

> Kazuhiro Shinoda, Sylvain Malacria, Fabrice Matulic, and Koji Yatani.  An Equivalent Circuit Model for 2D Embroidery Using Conductive Threads.

## 2025/6

### Our ISS 2025 paper has been accepted!

以下の論文が，ISS 2025に採録となりました(PACM HCIに掲載)．

> Minghui Chen, Simo Hosio, and Koji Yatani.  Investigating Design Considerations for Supporting Remote Teaching and Learning of Physical Drawing

## 2025/4

### We have a paper presentation, a workshop, a work-in-progress (poster), and an interactivity at CHI 2025.

CHI 2025において以下の発表，ワークショップを行います．

> **Paper**  Shixian Geng, Remi Inayoshi, Chi-Lan Yang, Zefan Sramek, Yuya Umeda, Chiaki Kasahara, Arissa J. Sato, Simo Hosio, and Koji Yatani.  Beyond the Dialogue: Multi-chatbot Group Motivational Interviewing for Premenstrual Syndrome (PMS) Management.

> **Workshop**  Jonas Oppenlaender, Sylvain Malacria, Xinrui Fang, Niels van Berkel, Fanny Chevalier, Koji Yatani,  and Simo Hosio.  Meta-HCI: First Workshop on Meta-Research in HCI.

> **Work-in-progress**  Xinrui Fang, Anran Xu, Sylvain Malacria, and Koji Yatani.  Exploring Practices, Challenges, and Design Implications for Citation Foraging, Management, and Synthesis.

> **Interactivity**  Kazuhiro Shinoda, Sylvain Malacria, Mitsuhiro Kamezaki, and Koji Yatani.  Appearance-Independent Tactile Design Using Different Embroidery Stitches.

### We have new members!

We have new members of 2 Ph.D. students, 3 master students, and 2 undergraduates. Welcome!

博士課程2名，修士課程1名，学部生4名が新たに研究室に加わりました．

## 2025/3

### Anran won a Department Excellent Dissertation Award!

然さんが工学系研究科電気系工学専攻の優秀博士論文賞を受賞しました．おめでとうございます！

### We have 2 Ph.D.s, 3 masters, and 2 bachelors! Congratulations!

博士課程2名，修士課程3名，学部生2名が卒業しました！おめでとうございます！

## 2025/1

### 事務補佐員を募集しております．

矢谷研究室では事務補佐員を募集しております．ご興味のある方は，以下のファイルをご覧いただき，ご応募くださいませ．

[https://www.t.u-tokyo.ac.jp/hubfs/Careers/2025/0109/cr2024-193-0109-003.pdf](https://www.t.u-tokyo.ac.jp/hubfs/Careers/2025/0109/cr2024-193-0109-003.pdf)

## 2024/12

### Koji gives a keynote speech at a UTokyo symposium on generative AI and education.

Koji gives a keynote speech at a UTokyo symposium on generative AI and education.

What do people feel when using gen-AI for intellectual activities? —through the lens of Human-AI interaction research—

矢谷が東大学内の生成AIと教育に関するシンポジウムで特別講演を行いました．

「生成AIと共に知的作業を行う際に人は何を感じるか？ 〜Human-AI Interaction研究の視点から〜」
[[スライド / slides]](https://drive.google.com/file/d/13J1SLT3mzKdbYnuLmTLhNbCxeRhZ9_8Y/view?usp=drive_link)

### We launch the MWI project!

We launch a new international collaboration project entitled Mental Well-being Intelligence: A Community for Data-driven Mental Well-being Research through JST ASPIRE FOR TOP SCIENTISTS. Koji is serving as the main principal investigator.

JST TopのためのASPIREにより「Mental Well-being Intelligence：人の心理的健康に関するデータ駆動的研究コミュニティ」研究プロジェクトを始動しました！矢谷が研究代表者を務めています．

[https://aspire-mwi.org/](https://aspire-mwi.org/)

## 2024/10

### We have three new members!

We have Xuhui Chang (an international exchange student), Xinyu He (a graduate research student), and Jiayi Yang (a master student) as new members. Welcome!

### We won a PACM IMWUT Distinguished Paper Award!

We have received a PACM IMWUT Distinguished Paper Award on the following paper!

以下の論文に対してPACM IMWUT Distinguished Paper Awardを受賞しました！

> Anran Xu, Zhongyi Zhou, Kakeru Miyazaki, Ryo Yoshikawa, Simo Hosio, and Koji Yatani. 2024. DIPA2: An Image Dataset with Cross-cultural Privacy Perception Annotations. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 7, 4, Article 192 (December 2023), 30 pages.

## 2024/7

### Sylvain Malacria has joined IIS Lab!

Sylvain Malacria (INRIA) has joined IIS Lab as a JSPS Invitational Fellow! Welcome!

Sylvain Malacria（INRIA）さんがJSPS外国人招へい研究者としてIIS Labに加わりました！

## 2024/5

### 矢谷が人工知能学会全国大会で招待パネリストとして登壇します．

矢谷が人工知能学会で以下のセッションにおいて招待パネリストとして登壇します．

5月30日(木) 9:00～10:40 H会場
「KS-2 人とAIの共創社会を実現するための文理融合」

### 乘濵（M1）が学生奨励賞を受賞しました！

UBI研究会で発表した以下の論文に対して，乘濵が学生奨励賞を受賞しました！

乘濵 駿平, 耿 世嫻, 宮崎 翔, 佐藤 安理紗 ジエンジエラ, 下島 銀士, 平野 真理, ホシオ シモ, 矢谷 浩司．
「筆記開示チャットボットにおけるストレス解消感を高める視覚フィードバックデザインの比較評価」

## 2024/4

### Welcome new members!

We have 1 Ph.D., 5 masters, and 3 undergraduates as new lab members. Welcome!

博士課程学生1名，修士課程学生5名，学部生3名が新しくラボに加わりました！

## 2024/3

### Zhongyi won an Excellent Dissertation Award!

Zhongyi won an Excellent Dissertation Award for his Ph.D. dissertation!

Zhongyiが優秀博士論文賞を受賞しました！

### 7 students successfully graduated!

1 Ph.D.(Zhongyi), 3 masters (Ginshi, Kosuke, Ryo), and 3 undergraduates (Yuya, Haruma, Hiroki) graduated successfully! Congratulations!

博士課程学生1名（Zhongyi），修士課程学生3名（下島，山下，吉川），学部生3名（梅田，中野，平林）が卒業しました！おめでとうございます！

### HCI研究会にて1件の発表を行います．

HCI研究会にて以下の発表を行います．

> 吉川 諒，方 詩涛，徐 安然，矢谷 浩司．  生成AIに関する知識と認識に関する多国間調査．

### Koji won a Dean's Award on Research!

Koji won a Graduate School of Engineering Dean's Award for his outstanding research achievements!

矢谷が工学系研究科長表彰（研究部門）を受賞しました！

### 情報処理学会論文誌に論文が採録されました！

The following article has been accepted in an IPSJ Journal!

以下の論文が情報処理学会論文誌に採録されました！

> 耿 世嫻，平井 雄太，下島 銀士，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．  スマートフォンを用いた画像認識による嚥下機能の定量的評価手法．情報処理学会論文誌（6月掲載予定）．

## 2024/1

### One paper has been conditionally accepted at CHI 2024!

The following submission has been conditionally accepted at CHI 2024!

以下の論文がCHI 2024に条件付採録されました．

> Anran Xu, Shitao Fang, Huan Yang, Simo Hosio, Koji Yatani.  Examining Human Perception of Generative Content Replacement in Image Privacy Protection.

## 2023/12

### We got a PACM IMWUT paper!

The following article has been accepted in PACM IMWUT!

以下の論文がPACM IMWUTに採録されました．

> Anran Xu, Zhongyi Zhou, Kakeru Miyazaki, Ryo Yoshikawa, Simo Hosio, and Koji Yatani. 2024.  DIPA2: An Image Dataset with Cross-cultural Privacy Perception Annotations.  Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 7, 4, Article 192 (December 2023), 30 pages.

## 2023/11

### HCI研究会にて1件の発表を行います．

HCI研究会にて以下の発表を行います．

> 下島 銀士，耿 世嫻，楊 期蘭，乘濵 駿平，シュラーメク ゼファン，高野 歩，ホシオ シモ，矢谷 浩司．  薬物依存症治療におけるデジタル支援に向けた治療経験者への質的調査．

## 2023/10

### Koji won an JST PRESTO funding!

Koji won an JST PRESTO funding on Designing Motivational Interviewing Chat Environments with Multiple Chatbots (from October 2023 to March 2027).

矢谷の「複数のチャットボットで構成する動機づけ面接環境」がJSTさきがけに採択されました（研究機関：2023年10月〜2027年3月）

### Running a symposium for Human-AI Interaction at University of Tokyo!

Simo Hosio at University of Oulu (also at Tokyo College at University of Tokyo) and Koji are organizing a symposium for Human-AI Interaction, called TOHAI, on 24th and 25th October. Please take a look at our website and register!

オウル大学のホシオ・シモ先生（東京カレッジ兼担）と共同でTOHAIというHuman-AI Interactionに関する国際シンポジウムを東大にて10/24，25に開催いたします．ホームページをご覧いただき，ぜひご登録ください！

[https://crowdcomputing.net/tohai/](https://crowdcomputing.net/tohai/)

### 矢谷がアルコール・薬物依存関連学会 合同学術総会のシンポジウムにて招待講演を行います．

10月に開催されるアルコール・薬物依存関連学会 合同学術総会のシンポジウム14「医工連携・産学連携による新しい治療技術の開発：アディクション分野における最新の知見」において，以下の招待講演を行います．

「ユーザの健康的な生活を促進するモバイル\vアプリケーション研究の実践と課題」

[https://kwcs.jp/alcohol2023/prog.html](https://kwcs.jp/alcohol2023/prog.html)

## 2023/9

### DICOMO 2023において優秀論文賞を2件受賞しました！

DICOMO 2023において，以下の3件の発表が優秀論文賞を2件受賞しました．

### 日本学術会議「未来の学術振興構想（2023年版）」への提案が採択されました．

日本学術会議「未来の学術振興構想（2023年版）」における学術の中長期研究戦略について，はこだて未来大学の中小路先生を中心として矢谷が取りまとめとをおこなった提案「情報環境との相互作用で生ずる行為や感情の正負・強弱原理の解明に基づいた人の内在的強靭性を高める機構の実現」が採択され，公開されました．

[https://www.scj.go.jp/ja/info/kohyo/pdf/kohyo-25-t353-3-55.pdf](https://www.scj.go.jp/ja/info/kohyo/pdf/kohyo-25-t353-3-55.pdf)

## 2023/7

### Zefan won a Best Demo Award at DIS 2023!

Zefan won a Best Demo Award at DIS 2023 for his demo presentation (accompanying his full-paper presentation). Congrats!

> Zefan Sramek, Arissa J. Sato, Zhongyi Zhou, Simo Hosio, and Koji Yatani. SoundTraveller: Exploring Abstraction and Entanglement in Timbre Creation Interfaces for Synthesizers.

### 山本がポスター輪講においてBest Poster Awardを受賞しました！

山本が融合情報ポスター輪講において，Best Poster Awardを受賞しました．

### DICOMO 2023において優秀プレゼンテーション賞を3件受賞しました！

DICOMO 2023において，以下の3件の発表が優秀プレゼンテーション賞を3件受賞しました．

## 2023/6

### Koji will be serving as a TPC for CHI 2025.

Koji will be serving as a Technical Program Chair for CHI 2025.

矢谷がCHI 2025においてTechnical Program Chair（全プログラムの統括）を務めます．

### 卒業生の嶋田さんによる「卒業生のリアル」が公開されました！

工学部・工学系研究科を卒業した先輩たちが，中高生の時や学部生，院生の時，どんなことで悩んで，どんなことを感じていたのか．他の企画では追えなかった，東大生のよりリアルな姿をとらえた新しい試みである「卒業生のリアル」に，IIS Lab卒業生の嶋田さんがご協力くださり，インタビューに応えてくれました．大変心動かされる彼女のストーリーをご覧いただければと思います．

## 2023/5

### DICOMO2023にて10件の発表を行います．

7月に開催されるDICOMO2023にて，以下の10件の発表を行います．

### Our DIS paper has been accepted!

We have one paper accepted at DIS 2023!

> Zefan Sramek, Arissa J. Sato, Zhongyi Zhou, Simo Hosio, and Koji Yatani. SoundTraveller: Exploring Abstraction and Entanglement in Timbre Creation Interfaces for Synthesizers. To appear in Proceedings of the ACM SIGCHI Conference on Designing Interactive Systems (DIS 2023).

### Our IEEE Sensors Letters article has been accepted!

> We have one paper accepted in IEEE Sensors Letters!

> Kazuhiro Shinoda, D. Antony Chacon, and Koji Yatani. An Embroidery Touch Sensor with Layered Structure of Conductive and Non-Conductive Threads. IEEE Sensors Letters, 2023.

### 電子情報通信学会論文誌に論文が採録されました！

電子情報通信学会論文誌に以下の論文が掲載予定となりました．

吉川 諒，落合 秀也，矢谷 浩司．2023．ボット判定の機会を活用した情報セキュリティ・倫理の学習手法の知識習得と知識持続効果の検証．電子情報通信学会論文誌（7月掲載予定)，

### 大学院志望者向けのOpen Labを行います！

[https://forms.gle/hyRiBZ7VoQfrg2rX6](https://forms.gle/hyRiBZ7VoQfrg2rX6)

[工学系研究科電気系工学専攻](http://www.eeis.t.u-tokyo.ac.jp/)と[学際情報学府先端表現情報学コース](http://www.iii.u-tokyo.ac.jp/education/courses/emergingdi)の入試説明会に合わせて，Open Labを行います．大学院受験を検討し，IIS Labで研究を志望される方はぜひお越しください！

日時：2023年5月21日（日）　14:20頃〜16:00

詳細は以下のフォームよりご登録をお願いします．

## 2023/4

### 矢谷がメタバース工学部ジュニア講座にてHCIの授業を行います．

矢谷がメタバース工学部ジュニア工学教育プログラムにおいて，「情報技術の体験をデザインしよう」というHCIの講座を提供させていただきます．

[情報技術の体験をデザインしよう](https://www.meta-school.t.u-tokyo.ac.jp/junior/23sie/)

### 博士課程1名，修士課程4名，学部生4名がラボに加わりました！

計9名の学生さんがラボに加わりました．ようこそ！
`;function Qr(e){return/[\u3040-\u30ff\u4e00-\u9fff]/.test(e)}function $r(e){let t=e.trim().match(/^\[([^\]]+)\]\(([^)]+)\)$/);return t?{label:t[1],href:t[2]}:null}function ei(e){return!!(e.startsWith(`> `)||e.startsWith(`**`)||/^\[(Full paper|WiP poster|paper)\]/i.test(e)||/and Koji Yatani|矢谷浩司|矢谷 浩司/.test(e)&&/，|．|,/.test(e)||/To appear in Proceedings|IEEE Sensors Letters/.test(e))}function ti(e,t){let n={title:{en:e,ja:e}},r=[],i=[],a=[],o=[];for(let e of t.split(`
`)){let t=e.trim();if(!t)continue;let n=$r(t);if(n){i.push(n);continue}let s=t.startsWith(`> `)?t.slice(2).trim():t;if(ei(t)){r.push(s);continue}Qr(t)?o.push(t):a.push(t)}return(a.length||o.length)&&(n.body={en:a.join(`

`),ja:o.join(`

`)||a.join(`

`)}),r.length&&(n.papers=r),i.length&&(n.links=i),n}function ni(e){let t=[],n=e.replace(/\r\n/g,`
`).split(/\n(?=## \d{4}\/\d{1,2}\n)/);for(let e of n){let n=e.match(/^## (\d{4}\/\d{1,2})\n([\s\S]*)$/);if(!n)continue;let r=n[1],i=n[2],a=[],o=i.split(/\n(?=### )/);for(let e of o){let t=e.match(/^### (.+?)(?:\n([\s\S]*))?$/);if(!t)continue;let n=t[1].trim(),r=t[2]?.trim()??``;n&&a.push(ti(n,r))}a.length&&t.push({date:r,items:a})}return t}function ri(e){let{meta:t,body:n}=(()=>{if(!e.startsWith(`---
`))return{meta:{},body:e};let t=e.indexOf(`
---
`,4);if(t<0)return{meta:{},body:e};let n=e.slice(4,t),r={};for(let e of n.split(`
`)){let t=e.match(/^([\w-]+):\s*(.*)$/);t&&(r[t[1]]=t[2].trim())}return{meta:r,body:e.slice(t+5).replace(/^\n/,``)}})();return{intro:t.intro??``,months:ni(n)}}var ii=ni(Zr),j={newsSection:`_newsSection_xeykp_1`,monthGroup:`_monthGroup_xeykp_11`,monthLabel:`_monthLabel_xeykp_15`,newsItem:`_newsItem_xeykp_25`,paperLine:`_paperLine_xeykp_46`,olderNews:`_olderNews_xeykp_50`,backLink:`_backLink_xeykp_62`,divider:`_divider_xeykp_71`};function ai({items:e}){return(0,k.jsx)(k.Fragment,{children:e.map(e=>(0,k.jsxs)(`div`,{className:j.monthGroup,children:[(0,k.jsx)(`h2`,{className:j.monthLabel,children:e.date}),e.items.map((t,n)=>(0,k.jsxs)(`article`,{className:j.newsItem,children:[(0,k.jsx)(`h3`,{children:t.title.en}),t.body?.en&&(0,k.jsx)(`p`,{children:t.body.en}),!t.body?.en&&t.body?.ja&&(0,k.jsx)(`p`,{children:t.body.ja}),t.body?.en&&t.body?.ja&&t.body.ja!==t.body.en&&(0,k.jsx)(`p`,{children:t.body.ja}),t.papers?.map(e=>(0,k.jsx)(`p`,{className:j.paperLine,children:(0,k.jsx)(A,{text:e})},e)),t.links?.map(e=>(0,k.jsx)(`p`,{children:(0,k.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,children:e.label})},e.href))]},`${e.date}-${n}`))]},e.date))})}function oi(){return(0,k.jsxs)(`section`,{className:j.newsSection,id:`news`,children:[(0,k.jsx)(`h1`,{children:`News`}),(0,k.jsx)(ai,{items:ii}),(0,k.jsxs)(`p`,{className:j.olderNews,children:[`以前のニュースはこちらにあります． Older news is available`,` `,(0,k.jsx)(In,{to:`/news/old`,children:`here`}),`.`]})]})}var si=`---
welcome_en: |
Welcome to the webpage of Interactive Intelligent Systems Laboratory (IIS Lab, pronounced like "ease lab") at The University of Tokyo. We are a group led by [Koji Yatani](mailto:koji@iis-lab.org), conducting a broad range of research on Human-Computer Interaction, Human-AI Interaction, and Ubiquitous Computing. We are in [Department of Information and Communication Engineering (ICE)](https://www.i.u-tokyo.ac.jp/edu/course/ice/index_e.shtml), [School of Engineering,](https://www.t.u-tokyo.ac.jp/foee/index.html) [Emerging Design and Informatics Course, Interfaculty Initiative in Information Studies](http://www.iii.u-tokyo.ac.jp/education/courses/emergingdi), and [Department of Electrical Engineering and Information Systems (EEIS, no admission for our lab).](http://www.eeis.t.u-tokyo.ac.jp/)
welcome_ja: |
インタラクティブ・インテリジェント・システム ラボ(Interactive Intelligent Systems Laboratory; IIS Lab; イーズラボ)のホームページへようこそ！このラボは[矢谷浩司](mailto:koji@iis-lab.org)をはじめとした研究者・学生が集まり，ヒューマン・コンピュータ・インタラクション，人間・AI協調，ユビキタス・コンピューティングに関する様々な研究を行っています．IIS Labは大学院では[情報理工学系研究科電子情報学専攻](https://www.i.u-tokyo.ac.jp/edu/course/ice/index.shtml)，[学際情報学府先端表現情報学コース](http://www.iii.u-tokyo.ac.jp/education/courses/emergingdi)，[工学系研究科電気系工学専攻](http://www.eeis.t.u-tokyo.ac.jp/)（学生配属はなし），学部では[工学部電子情報工学科(EEIC)](http://www.ee.t.u-tokyo.ac.jp/j/)に所属しています．
mission_en: |
The mission of Interactive Intelligent Systems Laboratory (IIS Lab) is to improve people's well-being through intellectual activities and healthy lifestyles by interactive systems with intelligence behind we design, implement, and evaluate. Complexity of data, information, and contexts surrounding people are well beyond human cognitive capabilities. Advanced computing infrastructure, including artificial intelligence, big data, and Internet of Thing (IoT), becomes available, and can offer strong power of data collection and computation. However, it is still people who decide how to utilize such infrastructure and data. As a group of experts in information technology and user experience, we strive to explore novel applications exploiting artificial computer technologies and information sources and uncover their new values. In particular, our applications aim to support people to commit more to higher-level intellectual activities and healthy life, leading to encouraging grass-root effort for making the world better.
mission_ja: |
インタラクティブ・インテリジェント・システム ラボラトリー(IIS Lab)では，私たちが設計，実装，評価する知的なインタラクティブシステムによって，人々の知的活動・健康的生活を支援し，人々のウェルビーイングを向上させることをミッションとしています．人々を取り巻くデータや情報，状況は複雑になり，人間の情報処理能力を大きく超えています．さらに近年では，人工知能，ビッグデータ，IoTなどといった情報基盤が利用できるようになり，強力なデータ収集と計算能力を提供しています．しかし，それらをどのように活用するかは，利用者である人間が決めなければなりません．情報技術とユーザエクスペリエンスのエキスパート集団として，そのような新しい技術を活用した新たなアプリケーションを生み出し，技術の新たな価値を創生していくことが私たちの目標です．私たちが開発するアプリケーションを通して，人々がより高いレベルの知的活動やより健康的な生活を実現することに貢献し，さらに個人個人が世界をよくすることに貢献していける未来を目指しています．
research_intro_en: |
We are looking for highly-motivated, energetic researchers and students who want to work with us. If you are interested in the following topics or just want to visit us, please feel free to ping Koji at [his_first_name] "at" iis-lab.org. If you are considering to work with us, please check [this page](/join).
research_intro_ja: |
進学や研究室配属を決める前であっても，IIS Labに興味のある人はラボの活動や雰囲気を見に是非遊びに来てください．以下のトピックに興味のある方やラボにお越しになりたい方は，遠慮なく矢谷までメールにてご連絡ください．(メールアドレスは[矢谷の下の名前] "at" iis-lab.org)． IIS Labでの研究を志望する方は詳細は[こちらのページ](/join)をご覧ください．
philosophy_quote_en: |
"Think radically, Execute logically."
philosophy_quote_ja: |
「大胆に考え，緻密に実行する．」
philosophy_en: |
Research needs breakthroughs. As a researcher, it is important to keep demonstrating intellectual curiosity and casting questions. Uncovering "why" from something obvious or well-known is the first step to be radical. But radical ideas are not sufficient conditions for great research. You need to execute your project and demonstrate a proof of your idea in a way nobody sees a hole. This execution requires your logical thinking and careful project management skills. We believe that both radical thinking and logical execution are universal advantages for our life beyond research. In IIS Lab, each member challenges themselves to build both skills as a project leader of technology-oriented and application-focused HCI research.
philosophy_ja: |
研究には新しい発見が必要です．研究者として知的好奇心を保ち続け，疑問を投げかけていくことは重要であり，当たり前だと思われている物事から「なぜ」を引き出すことこそ，大胆な発想への第一歩です．しかし，大胆なアイデアだけでは良い研究に繋がりません．他人から見て隙きがないようにプロジェクトを実行し，アイデアの実現可能性を示すことも必要です．この遂行には論理的思考能力と綿密なプロジェクト管理能力が求められます．大胆な発想力と緻密な遂行能力は研究に限らず，人生の様々な場面で有益となる能力だと私達は信じています．個々のラボメンバーが，新しい技術とアプリケーションに重点を置いたHCI研究のプロジェクトリーダーとして，この2つの能力を高めていく，そのような場所がIIS Labです．
---

<!-- research-topics-en -->
- [Extraheric AI](/research/extraherics) design; human-AI interaction to foster people's higher-order thinking skills
- Human-AI interaction for boosting people's well-being, productivity, and creativity, in particular, interactive environments incorporating multiple AI agents,
- Novel healthcare applications using sensing methods and intelligence,
- Usable security interface design,
- Anything else about interfaces or interactive systems which you strongly believe that could change the game. 🙂

<!-- research-topics-ja -->
- [促考するAI](/research/extraherics) (extraheric AI)：ユーザの思考，特に高次思考（クリティカルシンキング，クリエイティブシンキングなど，分析，評価，創造などの認知プロセスで使用する思考）を促す人間・AIインタラクション
- 人々のウェルビーイング，知的生産性，創造性を高める人間・AI協調（human-AI interaction），特に複数のAIエージェントを統合したインタラクティブ環境，
- センシング技術や人工知能技術を活用した新しいデジタルヘルスケアアプリケーション，
- ユーザブルセキュリティ（使いやすいセキュリティシステム・インタフェースデザイン），
- そのほか，世界を変えられると強く思うインタフェースやインタラクティブシステムなんでも 🙂
`;function ci(e){let{meta:t,body:n}=Mr(e);return{welcome:{en:t.welcome_en??Nr(n,`welcome-en`),ja:t.welcome_ja??Nr(n,`welcome-ja`)},mission:{en:t.mission_en??Nr(n,`mission-en`),ja:t.mission_ja??Nr(n,`mission-ja`)},researchIntro:{en:t.research_intro_en??Nr(n,`research-intro-en`),ja:t.research_intro_ja??Nr(n,`research-intro-ja`)},researchTopics:{en:Pr(n,`research-topics-en`),ja:Pr(n,`research-topics-ja`)},philosophy:{quote:{en:t.philosophy_quote_en??Nr(n,`philosophy-quote-en`),ja:t.philosophy_quote_ja??Nr(n,`philosophy-quote-ja`)},en:t.philosophy_en??Nr(n,`philosophy-en`),ja:t.philosophy_ja??Nr(n,`philosophy-ja`)}}}var li=ci(si),ui=li.welcome,di=li.mission,fi=li.researchIntro,pi=li.researchTopics,mi=li.philosophy,M={pageHeader:`_pageHeader_lywrm_1`,pageTitle:`_pageTitle_lywrm_5`,sectionTitle:`_sectionTitle_lywrm_15`,divider:`_divider_lywrm_25`,topicList:`_topicList_lywrm_31`};function hi(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`header`,{className:M.pageHeader,children:(0,k.jsx)(`h2`,{className:M.pageTitle,children:`IIS Lab`})}),(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`p`,{children:(0,k.jsx)(A,{text:ui.en})}),(0,k.jsx)(`p`,{children:(0,k.jsx)(A,{text:ui.ja})}),(0,k.jsx)(`h2`,{className:M.sectionTitle,children:`Mission Statement / IIS Labのミッション`}),(0,k.jsx)(`p`,{children:di.en}),(0,k.jsx)(`p`,{children:di.ja}),(0,k.jsx)(`h2`,{className:M.sectionTitle,children:`Research domains / 研究領域`}),(0,k.jsx)(`p`,{children:(0,k.jsx)(A,{text:fi.en})}),(0,k.jsx)(`ul`,{className:M.topicList,children:pi.en.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(A,{text:e})},e))}),(0,k.jsx)(`p`,{children:(0,k.jsx)(A,{text:fi.ja})}),(0,k.jsx)(`ul`,{className:M.topicList,children:pi.ja.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(A,{text:e})},e))}),(0,k.jsx)(`h2`,{className:M.sectionTitle,children:`IIS Lab Philosophy`}),(0,k.jsx)(`blockquote`,{children:(0,k.jsx)(`p`,{children:(0,k.jsx)(`em`,{children:mi.quote.en})})}),(0,k.jsx)(`p`,{children:mi.en}),(0,k.jsx)(`blockquote`,{children:(0,k.jsx)(`p`,{children:mi.quote.ja})}),(0,k.jsx)(`p`,{children:mi.ja}),(0,k.jsx)(`hr`,{className:M.divider}),(0,k.jsx)(oi,{})]})]})}var gi={content:`_content_1m572_1`,anchorHeading:`_anchorHeading_1m572_49`,divider:`_divider_1m572_53`,list:`_list_1m572_59`,nav:`_nav_1m572_60`,itemize:`_itemize_1m572_80`};function _i({href:e,children:t}){return e.startsWith(`/`)&&!e.startsWith(`//`)?(0,k.jsx)(In,{to:e,children:t}):e.startsWith(`#`)?(0,k.jsx)(`a`,{href:e,children:t}):(0,k.jsx)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:t})}function vi({text:e}){let t=e.replace(/\n{2,}/g,`
`).split(`
`).filter(e=>e.length>0);return t.length<=1?(0,k.jsx)(A,{text:t[0]??e}):(0,k.jsx)(k.Fragment,{children:t.map((e,t)=>(0,k.jsxs)(x.Fragment,{children:[t>0&&(0,k.jsx)(`br`,{}),(0,k.jsx)(A,{text:e})]},t))})}function yi({item:e}){return(0,k.jsxs)(`li`,{children:[(0,k.jsx)(A,{text:e.text}),e.children&&e.children.length>0&&(0,k.jsx)(`ul`,{className:gi.itemize,children:e.children.map((e,t)=>(0,k.jsx)(yi,{item:e},t))})]})}function bi({blocks:e}){return(0,k.jsx)(`div`,{className:gi.content,children:e.map((e,t)=>{switch(e.type){case`p`:return(0,k.jsx)(`p`,{children:(0,k.jsx)(vi,{text:e.text})},t);case`heading`:return(0,k.jsx)(e.level===2?`h2`:`h3`,{id:e.id,className:e.id?gi.anchorHeading:void 0,children:e.text},t);case`hr`:return(0,k.jsx)(`hr`,{className:gi.divider},t);case`list`:return(0,k.jsx)(`ul`,{className:`${gi.list} ${gi.itemize}`,children:e.items.map((e,t)=>(0,k.jsx)(yi,{item:e},t))},t);case`nav`:return(0,k.jsx)(`ul`,{className:`${gi.nav} ${gi.itemize}`,children:e.items.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(_i,{href:e.href,children:e.label})},e.href))},t);default:return null}})})}var{meta:xi,body:Si}=Mr(`---
title: 矢谷流研究アイデアチェックリスト / Research Reality Check
---

このページでは，IIS Labで研究プロジェクトを始める段階で利用しているチェックリストを公開しています．このReality Checkは矢谷が学生さんと一緒に仕事する中で，まとめたものになります．特に，「Think radically. Execute logically.」というコンセプトを言語化するために作ったチェックリストです．チェックリストの項目がHCIの研究に偏っている部分もありますが，他の研究分野でも役に立つことがあるかもしれない，と思い，公開するに至りました．皆さんなりにぜひ色々と改良していただければと存じます．またその際にはぜひ矢谷に改良版を教えてください！

This page presents a check list which we use when we start a new project. This Reality Check was produced through collaboration and interaction with students. This checklist demonstrates our way of thinking: "Think radically. Execute logically." It may be a little biased toward HCI research, but I hope it could be useful for other fields. Please feel free to revise, and let me know when you build you own!

## Reality Checkを始める前に

Reality Checkを始める前に気をつけてほしいことがいくつかあります．

- **ご自身の答えを必ず書き下すようにする．**頭の中で「大丈夫」と思っても，書いてみると意外と怪しいことはいっぱいあります．このチェックリストは書くことのエクササイズでもあります．書くのは大変ですが，必ず書き記してください．
- **できる限り具体的に記述するようにする．**他の人にこのチェックリストの答えだけを見てもらっても，研究の中身がわかるように書きましょう．
- **周りの人に意見をもらう．**チェックが終わったら，周りの人からフィードバックをもらいましょう．記述が甘いところ，見通しが悪いところ，論理的でないところはどこでしょうか？今の時点でそれを見つけることがこのReality Checkの意図です．

There are a couple of things you need to keep in your mind for this Reality Check.

- **Write down your answers in a paper. **It\xA0is quite common that you may think it works but you notice it doesn't when you write down. This check list also serves as an exercise for writing. I know it's a tough exercise, but that's something I want you to learn.
- **Write your answers in as much detail as you can.** Make sure that you include sufficient information so that other people can understand your idea without you.
- Ask people around you for double-check. Once you are done, get someone to go through your answers and ask feedback. Any answer where your description is vague, your plan is unclear, or your explanation is not logical? Uncovering such weak points is the whole purpose of this Reality Check.

## Think radically: Idea Overview {#idea_overview}

まず今のアイデアについて整理をしましょう．特に，どんな新しい発想があるかを明確にします．
Let's start sorting out your current idea. We are going to clarify what new ideas or thoughts your idea contains.

- **What is your goal?**
  - この研究を通して達成したいこと，明らかにしたいことは何か？
    - What do you want to achieve or uncover through this research?
  - 何を作るのか？何を改良するのか？何を調査するのか？
    - What will you build? What will you improve? What will you survey?
  - 他の人が聞いてこれから作るシステムが理解できる程度の具体性があるか？
    - Do you describe enough details about your system so that others can also understand what you are going to do?
  - どのようにして「達成した」，「明らかにした」と客観的に示すのか？
    - How do you objectively demonstrate that you have achieved or uncovered?
- **How radical?**
  - 「そんなことできるの！？」，「そんな考え方あり！？」と他の人に思わせる点は何か？
    - What in your idea makes people say like "Can you really do it!?" or "That's pretty crazy!"?
  - 他と決定的に違うところを一言で述べるとすれば何か？
    - How can you describe what makes your idea so unique in one sentence?
- **How unique?**
  - (システム等を作る場合，)今から作るシステム，技術にしかできないことは何か？
    - What is the thing only your system or technology can do and others cannot?
  - (調査を行う場合，)過去の調査が全くカバーせず，この調査のみがカバーしようとしている点はどこか？
    - What is the area which only your investigation will cover but others have not?
- **Who cares?**
  - そのアイデアで誰が得をするのか？
    - Who gets benefits from your idea?
  - ユーザは誰でどんな状況下にあるのか？
    - Who are the target users and under what contexts/scenarios?
  - そのようなユーザは世の中に何人いるのか？あるいはどのくらいの頻度でそのような状況下に置かれるのか？ユーザ層は狭すぎたりしないか？
    - How many are such users? How often or likely are the target users under the context/scenario you are thinking of? Isn't your target user population too narrow?
- **How passionate?**
  - そのアイデアに対してどのくらい強くやりたいと思っているか？
    - How strongly are you passionate about your idea?
  - もし上手くいかなかったとしても粘り強く続けていけると思える根拠は何か？
    - What makes your believe that you would keep your passion even if the idea didn't fly.

以上の質問に全て答えられたら次のExecution Strategyに移ってください．

When you have answered all questions, please move on to Execution Strategy.

***

## Execute Logically: Execution Strategy {#execution_strategy}

次にこのアイデアを具体的に実現する方法について検討をしていきます．
Now you are asked to think about how you can turn your idea into reality.

- **How will you implement your system and/or run your study?**
  - どうやってそのアイデアを実現するのか？
    - How will you turn your idea into reality?
  - どんな既存技術を使えるのか？
    - What existing technology can you utilize?
  - どんな新しい技術を開発しなければならないか？
    - What novel technology will you have to develop?
  - どんな手法を用いて調査を行うのか？その手法を正当化する理由は何か？
    - What methods will you use for your survey? And why?
- **What will you need to build your system and/or run your study?**
  - システムを作るためにどんな機材や設備がいるのか？
    - What equipment and facilities will you need to build your system?
  - 調査を行うためにどんなサービスを使う必要があるのか？どこからデータを収集するのか？
    - What services will you use for your survey? How will you collect data?
- **What are the classics?**
  - よくある解決法や一般的な解決手法は何か？
    - What are typical or common solutions?
  - それらにはどんなメリットとデメリットがあるのか？
    - What pros and cons do they have?
- **Who are competitors?**
  - どんな競合する技術があるか？
    - What are competitors' technologies?
  - 最新の関連技術は何か？
    - What are latest related technologies?
  - 特に関連する研究は何か？
    - What is strongly relevant research?
  - それらにはどんなメリットとデメリットがあるのか？
    - What pros and cons do they have?
- **What are your advantages?**
  - 既存技術と比べてこのアイデアにどんなメリットがあるのか？
    - What merits do your idea have compared to existing technologies?
  - 「効率」という言葉が出てくる場合は、何の効率を言っているのか？それは計測できるものなのか？
    - If you say “efficient/efficiency,” what efficiency do you mean? Can you really measure?
  - 「最適(optimal, optimized)」という言葉が出てくる場合は、何を最適にし、どんな指標で最適と言えるのか？本当に最適(これ以上がない)なのか？
    - If you say “optimal or optimized,” what exactly will you optimize and with what metrics can you confirm? Can you show that what you get is really “optimal” (i.e., nothing else is better).
  - 「最高・最良(best)」という言葉が出てくる場合は、何を持って最高・最良であると言えるのか？本当に最高・最良(上限に達している)なのか？
    - If you say “best”, with what metrics can you confirm that what you get is best? Can you show that what you get is really “best” (i.e., nothing else is better).
  - 「直感的に(intuitive)」という言葉が出てくる場合は、どのように(定性的ではなく)定量的に直感的であることを示せるのか？
    - If you say “intuitive”, how quantitatively can you show such intuitiveness?
- **How will you confirm your advantages?**
  - どのような実験をすればこのアイデアの優位性を示せるのか？
    - Through what experiments can you show advantages of your idea?
  - 何がどのように良くなると仮定できるか？
    - What can you hypothesize that would be improved and how?
  - その実験において計測するものは何か？それは客観的に計測できるものか？
    - What will you measure? Can you measure them objectively?
  - どのような実験条件が考えられ，どの実験条件に絞り込むのか？それはなぜか？
    - What conditions do you think to be considered? How would you narrow them down? Why?
  - 実験条件が公平であるか？どのような正当性を持つか？
    - Are conditions fair? How do you justify?
  - 実験参加者は誰か？上で想定したユーザと齟齬はないか？
    - Who are your participants? Aren't they different from your target users?
- **How do you make this happen?**
  - どのようなスケジュールにすれば今目標にしている論文締切の1ヶ月前までに全ての実装や調査が終えられるのか？
    - Describe your plan so that you can finish everything one month before the final deadline (e.g., thesis submission).
  - その間に重要な締切等はないか？あればそれは何でいつか？
    - Is there any other important deadline or milestone in your plan? If so, what and when?
  - 実行すべき大きな項目を5～7個程度に対して，それらをいつから始めていつ終えるのか？
    - Itemize 5-7 major action items and when you will start and end for each.
  - そのスケジュールに無理はないか？無理があるとすれば目標としていることを見直すべきではないか？
    - Can you really follow your plan? If there is a stretch, which goals should you re-consider?

以上の質問に全て答えられたら次のDevil's Reviewに移ってください．

When you have answered all questions, please move on to Devil's Review.

***

## Criticize Deeply: Devil's Review {#devil_s_review}

次にこのアイデアのよさを批判的な立場から検証します．このように意図的に批判的な立場にたって質問することをDevil's advocateといいます．例えば，“Let me play a Devil's advocate.”とか言うことがあります．これらの質問に答えながら，ここまでに書いてきたことを必要に応じて修正してください．単に「問題ない」と答えるのではなく，「こうこうこういう理由で問題がない」と論拠を説明してください．
Now you are criticizing your idea by playing a Devil's advocate. Please answer the following questions and revise your answers above if necessary. Do not provide simple answers like "shouldn't be an issue." You must provide justifications and explanations for your argument of "no issue".

- **Why does your idea really matter?**
  - そのアイデアが解決する問題はどのくらい世の中で重要なのか？
    - How important is the problem your idea is trying to solve?
  - もしアイデアが実現できればどんなインパクトをもたらすことができるのか？
    - What impact would you offer if you make your idea happen.
  - その調査の結果がわかるとどんな新しい知見を見いだせそうか？
    - What new insight would you bring after your survey?
- **Aren't you just building toys?**
  - 単に見た目に面白そうなだけで役に立たないものをつくっているだけではないか？
    - Aren't we creating something that just looks cool but totally useless?
  - 実際にシステムを使ってくれるユーザはいるのか？いるなら誰でどのくらい一般的なのか？
    - Are there really people who would want to use your system? If so, how many?
  - 実社会で有益なアプリケーションはあるのか？あるならそれは何か？ないならば，なぜこの技術を作る必要があるのか？
    - What are applications that bring real benefits to the world? If so, what is that? If not, why are we building this technology after all?
  - このシステムや手法でしかできないことはあるのか？あるならそれは何で，それが実現できるとどのくらいユーザにとって嬉しいのか？
    - Is there anything only this system or method enables? If so, what is that? How much happier would it make users if your idea happens?
- **Aren't you solving toy problems?**
  - 今解決しようとしている問題は本当に重要なのか？研究のための課題を作り上げているのではないか？
    - Is the problem you are going to solve really important? Aren't you just making up a problem for research?
  - その問題が解決することで誰がどの程度幸せになるのか？
    - If you solve that problem, who would be happier? And how much?
- **Isn't your system just all known?**
  - これから作ろうするシステムは単に既存技術の組み合わせではないか？自明ではない技術的貢献は何か？
    - Isn't your system just a sum of existing technologies? What is a non-trivial technical contribution in your idea?
  - 単なる組み合わせ以上の効果を本当に生み出せるのか？生み出せるとしたらその根拠は何か？
    - Can you create more than effect from the sum of technologies? If so, what is your justification?
- **Aren't you working on a small delta?**
  - 既存研究と比較して単なる＋αの仕事をしていないか？
    - Is your work just a small delta from prior work?
  - 速度や精度が上がるとして，ユーザにとってどの程度影響があるものか？
    - If you can improve speed or accuracy, how much would it impact on users?
  - incrementalではなく，innovativeだと世の中に言ってもらえる点はどこか？
    - What convinces people that your work is innovative, not incremental?
  - システムの有用性は本当に社会に影響力のあるものなのか？
    - Would the utility of your system really bring impact to the society?
- **Are you really the right person to work on this?**
  - このアイデアは本当に自分がやるべきか？このアイデアに似たことをやりそうな研究グループは誰か？
    - Is your idea really what we should do? Any other research group who may be working on similar ideas?
  - 他の人たちが簡単に追いつけない，我々だけの有利な点があるか？
    - What is our unique advantage that other people do not have?
  - このアイデアを実行するのに必要な知識を持っているか？なければ何を勉強しないといけないか？
    - Do we have necessary knowledge for execution? If not, what will we have to learn?
- **Aren't you missing important related work?**
  - このアイデアに直接関係するプロジェクトをやっている研究者の名前を数名挙げられるか？
    - Can you list up a few names who work on relevant projects?
  - 直近の論文誌や会議で発表されたものはチェックしたか？
    - Have you checked publications at recent journals and conferences?
  - 逆に古い文献で似たようなものは本当にないのか？
    - Have you checked classic publications?
  - このアイデアに直接関係するもので一番古い論文はどれか？
    - What is the oldest paper related to your idea?
- **Do your limitations make your system useless in reality?**
  - システムや実験が非常に限れた状況でしか行えないものではないか？
    - Does your system or experiment work only under a limited condition?
  - このまま世の中に出してもある程度は運用可能か？
    - Can your system be deployable?
- **Aren't you just designing your system however you like?**
  - システムの設計方針を理論立てて説明できるか？
    - Can you justify your system design rationales?
  - インタフェースデザインを正当化する論拠はあるのか？
    - How can you justify your interface design?
  - システムや実験におけるパラメタはどうやって決めるのか？その決定方法は他の研究者に納得してもらえるものか？
    - How would you determine parameters for your system and/or experiment? How can your decision convince other researchers?
- **Aren't you cheating in your evaluations?**
  - 実験では自分のシステムにとって有利になるような評価軸を使っていないか？
    - Aren't you using metrics that are in favor for you?
  - 他の評価軸としては何があるのか？なぜそれらを使わないのか？
    - What are other possible metrics? Why don't you use them?
  - 自分にとって有利となるような状況やタスクを設定していないか？
    - Aren't you setting conditions and task that are in favor for you?
  - 他のタスクや実験条件は考えられないのか？考えられる場合，なぜそれらを選ばないのか？
    - What are other possible tasks and conditions? If so, why don't you use them?
  - ユーザ実験の場合には自分の実験に都合の良い実験参加者を選んでいないか？当初ターゲットとしていたユーザ層との食い違いはないのか？
    - If you conduct user studies, do you pick up participants who are biased toward you? Is there any discrepancy between them and your target users?

以上の質問に全て答えられたら次のExecutive Summaryに移ってください．

When you have answered all questions, please move on to Executive Summary.

***

## State Concisely: Executive Summary {#executive_summary}

最後にこのアイデアを簡潔かつ正確に説明してみましょう．
As a final exercise, let's explain your idea concisely and precisely.

- **Explain your research in 30 seconds.**
  - このアイデアを初対面の人にどう紹介し、面白いと思わせるか？
    - Consider how you can explain your research to others and convince them your project is very cool.
  - 次の5つのポイントを各々1～2行で説明し，全体で7～8行くらいにする．
    - Explain the five following points in 1 or 2 sentences and make the paragraph 7-8 sentences.
    - 何をやろうとするのか？
      - What are you going to do?
    - どんな問題を解決するのか？
      - What problems will you solve?
    - なぜその問題は重要なのか？
      - Why is your problem so important?
    - 自分の研究のユニークなところはどこか？
      - What is unique in your research?
    - 自分のアイデアにどんなメリットがあるのか？
      - What merits would your idea offer?
- **Explain your research in one sentence.**
  - 1行で自分のアイデアをどうやって説明できるか？
    - Can you explain your idea in a single sentence?
  - キーワードが過不足なく含まれているか？
    - Does your description contain all important keywords?
  - 実際にやることや得られるであろう結果と比べて誇張しすぎていないか？
    - Make sure you are not over-claiming what exactly you are going to do.
  - 漠然としていないか．例えば他の似た研究プロジェクトでも同じ文が使えてしまわないか？
    - Isn't your description too generic? Can similar projects use the same description?
  - 逆に特定しすぎていて，研究プロジェクトを狭めてはいないか？
    - Isn't your description too specific or narrow?

以上の質問に全て答えられたら終わりです．お疲れ様でした．最後の節を読んで論文のドラフトを書きましょう！

This is the end of the reality check. Great job! Please take a look at the last section and create a paper draft!

***

## Congratulations! {#congratulations}

以上でReality Checkは終わりです．ここで書いたことを少し整理・修正するだけで論文のドラフトを書くことができます．今までに記述してきたことと論文の構成には大まかには以下のような対応関係があります．
That's all for the reality Check. Now, you can create a paper draft with making minor revisions on your answers. You can roughly map between what you have written and what you need to put in your paper draft as follows.

- **Title**
  - Explain your research in one sentence.
- **Abstract**
  - Explain your research in 30 seconds.
- **Introduction**
  - Why does your idea really matter?
  - Who cares?
  - What is your key scenario?
  - What is your goal?
- **Contributions**
  - How radical?
  - How unique?
- **Related Work**
  - What are the classics?
  - Who are competitors?
  - What are your advantages?
- **Implementation**
  - How will you implement your system and/or run your study?
  - What will you need to build your system and/or run your study?
- **Experimental Design**
  - How will you confirm your advantages?
`),Ci={title:xi.title??``,blocks:Ar(Si)};function wi(){return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:Ur.pageTitle,children:Ci.title}),(0,k.jsx)(bi,{blocks:Ci.blocks})]})}var Ti=Ar(`**Student admissions are available in Graduate School of Information Science and Technology, and Graduate School of Interdisciplinary Information Studies. **We do not have admissions from Graduate School of Engineering. **We are prioritizing students who have strong interests in pursuing Ph.D.s and collaborating internationally.**

**学生さんの受け入れは情報理工学系研究科，および学際情報学府にて行なっております．**工学系研究科での受け入れはありませんので注意してください．**また，現在博士課程への進学を強く希望し，国際的な共同研究を行いたいと考えている学生さんを優先的に検討しています**

***

We are looking for highly-motivated students who have strong passion in building and evaluating interactive systems and applications, and creating new values through reshaping interactions between users and computers. We also accept students who work as full-time employees at companies.

If you are interested in working with us, **please read the following note before** [contacting me](/member/koji-yatani). As I receive many emails and messages everyday, your understanding would be much appreciated.

**Note that due to our limited capacity, we do not any research student (or kenkyusei) except that you are being considered for MEXT fellowship or you are in a special circumstance. **I will not reply to emails about kenkyusei inquiries.

IIS Labでは新しいインタラクティブなシステムやアプリケーションの構築・評価と，コンピュータとユーザとの新しいあり方を提案し，テクノロジーの新しい価値を創造していくことに興味と熱意がある学生さんを募集しています．また社会人大学院生の受け入れも行っておりますので，遠慮なくご相談ください．

IIS Labで研究をしたいという人はこのページに書かれていることを読んだうえで，[矢谷まで](/member/koji-yatani)ご連絡ください．矢谷は日々多くのメールやメッセージを受け取っていますので，ご協力いただけますと大変助かります．なお，研究生の受け入れは原則行っておりません．

## A few things Koji would like to see / 送っていただきたいもの

Please make sure you include the following information and materials in your email to Koji if you are serious about joining our lab. If your email does not cover them, Koji may not respond. **Note that, for Ph.D. applicants, your CV and research proposal must be written in English even if you are native or fluent in Japanese.\xA0**Materials can be either in English or Japanese for master and other applicants though English is still preferred.

- In your email body,
  - A brief introduction of yourself (4 – 5 sentences),
  - Programs you are considering (i.e., IST and/or GSII),
    - If you are considering MEXT fellowship, please let me know as well.
  - A brief statement of why you are interested in joining us.
- As an attachment,
  - Your CV (no need to have a picture of yourself),
  - Your research proposal (**up to 4 pages including references**)
    - Note that the program you are applying for may have different requirements on a research proposal (e.g., page limit). It is your full responsibility to meet these requirements for your applications.
  - Three accomplishments you are most proud of. They can be academic papers, software, hardware, products, design work and any artifact you developed. If you collaborate with others for these accomplishment, clarify what exactly your contributions are.

## A few things I really appreciate when you email me / メールを送っていただく前に

- **Sorry, but we are super selective. **We are really in the full capacity in terms of the number of students. Our circumstance would not be changed at least for the next few years. Therefore, we have to be extremely selective. We already have turned down many applications and requests from very strong candidates. You must demonstrate strong research capabilities in HCI and/or relevant fields to be considered when you contact us.
- **No research student (or kenkyusei, 研究生).**\xA0Due to our limited capacity, we are not taking any research student (or 研究生) unless you are in a very exceptional circumstance and we see strong potentials in collaboration with you. I thus unlikely reply to emails about kenkyusei positions.
- **Please carefully review our research scope.** You should carefully review [our website](/) and [publications](/publications), and make sure that you and your interests would match with our lab well.
- **Please send me a research proposal.** I strongly would like to see your research proposal even if the program you are applying for does not require. Additional materials (e.g., published papers, links to videos, and portfolios) would be helpful to know about you, but the most important document is your research proposal.
- **The majority of your research proposal should cover what you want to do here.** Your proposal should include a clear description of your idea, motivation, a brief summary of related work, and project execution plan. I would like to see your capability of describing ideas, understanding related work, and claiming the novelty of your idea. It is highly unlikely to impress me if your research proposal only includes generic personal or research statements (e.g., "I am interested in HCI." or "My university is one of the top universities in XYZ.") as well as merely talks about facts that I can know from your transcripts and other materials (e.g., "My GPA was 3.8."). You need to demonstrate your intellectual capability and strong curiosity as well as project execution skills in your research proposal. You may want to check out useful resources for writing a good research proposal:
  - [https://www.geog.ox.ac.uk/study/graduate/apply/research_proposal.html](https://www.geog.ox.ac.uk/study/graduate/apply/research_proposal.html)
  - [https://www.exeter.ac.uk/media/universityofexeter/webteam/shared/postgraduate/pdfs/A_Guide_to_Writing_your_PhD_Proposal.pdf](https://www.exeter.ac.uk/media/universityofexeter/webteam/shared/postgraduate/pdfs/A_Guide_to_Writing_your_PhD_Proposal.pdf)
  - [https://conservationbytes.com/2015/05/04/twenty-tips-for-writing-a-research-proposal/](https://conservationbytes.com/2015/05/04/twenty-tips-for-writing-a-research-proposal/)
  - [http://undergradresearch.northwestern.edu/proposal-writing](http://undergradresearch.northwestern.edu/proposal-writing)
  - [https://www.meaning.ca/archives/archive/art_how_to_write_P_Wong.htm](https://www.meaning.ca/archives/archive/art_how_to_write_P_Wong.htm)
  - [https://www.sydney.edu.au/study/how-to-apply/postgraduate-research/how-to-write-a-research-proposal-for-a-strong-phd-application.html](https://www.sydney.edu.au/study/how-to-apply/postgraduate-research/how-to-write-a-research-proposal-for-a-strong-phd-application.html)
- **Your research proposal must be HCI-oriented and should show your creativity.** I am not really interested in projects like "using deep learning for an application of XXX." Your research proposal should present new ideas instead of extensions of existing systems and technologies (including what we have developed). Instead of thinking of applications based on what you can implement, you should start with thinking of future systems or applications that can change your life (or other's life), and then think about how you can develop a proof of concept. Show your creativity and intellectual capabilities through your research proposal.
- **Your research proposal must have a concise but well-covered literature review.** It is also important to discuss what prior work exists in light of your research proposal. Your literature review should include papers from the conferences and journals we normally target for publication (i.e., CHI, UIST, UbiComp, CSCW, PACM IMWUT, and MobiSys) as well as literature in the relevant fields (e.g., medical or psychological journals).
- **Go through our [Research Reality Check](/misc/realitycheck) when you are done with your research proposal.**
- It often takes time to process your email due to the large volume of emails I receive. I will do my best to reply to you in a couple of days. So, **just wait a while and ping me again if you do not receive a reply even after a week.** Do not send emails to others (e.g., my students or department office) to ask whether I have checked your email or not because they are very busy on their work.
- **Your email should look like being written and sent by a human.** For example, a blank email with only attachments will likely be thrown to a spam box. I generally do not reply to emails that start with a cliche (e.g., "Respected sir" or "Dear professor") and do not mention my name.

***

<!-- nav -->
- [For prospective Ph.D. students / 博士課程を目指す方へ](#phd)
- [For prospective Master students / 修士課程を目指す方へ](#master)
- [For prospective undergraduate students / 学部生の方へ](#undergrad)
- [For prospective international students](#international)
- [For prospective interns, visiting students and exchange students (undergrads, Masters and Kenkyusei)](#visiting_student)
- [For visiting researchers (Ph.D. students and above)](#visiting_researcher)
<!-- /nav -->

***

## For prospective Ph.D. students / 博士課程を目指す方へ {#phd}

If you want to pursue a Ph.D. at IIS Lab, you must be confident on working independently and collaboratively with proficient technical skills and strong research motivations. Publications at top venues are of course great, but I rather expect you to have strong research passions that keep you to enjoy challenging yourself to the hardest problems. I also expect Ph.D. students to have strong background and experience in HCI. This does not necessarily mean that you don't have a chance to join us if you are trained in different fields. But you may have to work even harder to catch up. You are also expected to work internationally. Thus, English communication skills are mandatory. We use English for regular face-to-face meetings. I also expect you to advise junior students to accumulate teaching experience though you should not expect them to work **for** you.\xA0You will collaborate with them on your side projects rather than use them as your resource.

Note that Koji belongs to two departments: [Department of Information and Communication Engineering, Graduate School of Information Science and Technology](https://www.i.u-tokyo.ac.jp/edu/course/ice/index_e.shtml),\xA0and [Emerging Design and Informatics Course, Interfaculty Initiative in Information Studies](http://www.iii.u-tokyo.ac.jp/education/courses/emergingdi). So applicants must choose either of the departments. Although I treat students in both departments equally (I mean, with equally high quality bars 🙂 ), there are some differences in entrance examination process and curricula. So please carefully examine which department would be more suitable for you before applying. For an admission examination, please find more details at the department's website.

Unfortunately, the capacity of our lab is currently very full. Therefore, we have to be extremely selective even for Ph.D. applicants to maintain the quality of our teaching. We already have turned down many applications and requests from very strong candidates. You must demonstrate strong research capabilities in HCI and/or relevant fields for consideration when you contact us.

If you are interested in working with us, **please send me your CV and your research proposal by email**. Your CV and research proposal must be written in English even if you are native or proficient in Japanese. Your research proposal is up to 2 pages long and must state what projects you would like to work on and why you want to work here. Please be specific about your research interests (simply saying "I am interested in HCI and ubiquitous computing" is not anything at all). It is also important to discuss what prior work exists in light of your research proposal. Your literature review should include papers from the conferences and journals we normally target for publication (i.e., CHI, UIST, UbiComp, CSCW, PACM IMWUT, and MobiSys) as well as literature in the relevant fields (e.g., medical or psychological journals).

In addition, **please share with me three accomplishments you are most proud of**. They are not limited to academic papers. Anything that demonstrates your technical capabilities would work. Examples are: artwork portfolios, mobile apps you publish in a market, hackathon outcomes (not awards. I am more interested in what you built.), and any artifact you created. If you worked as a group, please clarify what role you took and what contributions you made in each project.

You are also strongly recommended to visit us before applying. You will likely be asked to give a talk upon your visit. Please contact Koji and set up time to visit.

## For prospective Master students / 修士課程を目指す方へ {#master}

You are more than welcome to join us regardless of your technical backgrounds. All you need is a determination and passion that you will work and learn hard. 🙂 I also expect you to work internationally. So, English skills are important. You do not need to have strong English skills by when you start working with us. However, you must work hard on writing and speaking in English as well as executing your research projects.

Note that Koji belongs to two departments: [Department of Information and Communication Engineering, Graduate School of Information Science and Technology](https://www.i.u-tokyo.ac.jp/edu/course/ice/index_e.shtml),\xA0and [Emerging Design and Informatics Course, Interfaculty Initiative in Information Studies](http://www.iii.u-tokyo.ac.jp/education/courses/emergingdi). So applicants must choose either of the departments. Although I treat students in both departments equally (I mean, with equally high quality bars 🙂 ), there are some differences in entrance examination process and curricula. So please carefully examine which department would be more suitable for you before applying. For an admission examination, please find more details at the department's website.

Like prospective Ph.D. students, you are encouraged to visit us before applying. Please contact Koji and set up time to visit.

IIS Labはいろんな技術的バックグラウンドをお持ちの方を歓迎します．必要なのはよく手を動かし，よく学ぶ覚悟と情熱です．:) それからできるかぎり国際的に活躍してほしいと思っていますので，英語は重要なスキルになります．ラボに入る前までに英語に長けている必要はありませんが，研究をするだけでなく，英語で話したり書いたりすることも努力してもらうことになります．

矢谷は[情報理工学系研究科電子情報学専攻](https://www.i.u-tokyo.ac.jp/edu/course/ice/)と[学際情報学府先端表現情報学コース](http://www.iii.u-tokyo.ac.jp/education/courses/emergingdi)の2つに所属しています．このためどちらかの専攻を選んでいただくことになります．ラボでは同じように扱われる(同じ要求レベルで扱われる 🙂 )ことになりますが，入試やカリキュラムにいくつか違いがあります．ですので，どちらの専攻が自分に合っているかよく調べた上で，応募してください．入学試験の詳細は各専攻のホームページから確認してください．

博士課程志望者と同じく，応募する前にラボの見学に来ていただくことをおすすめします．矢谷に連絡の上，お越しくださる時間を決めてください．

## For prospective undergraduate students / 学部生の方へ {#undergrad}

Even if you are an undergrad, I expect you to conduct your own research projects. I and your senior students will help you, but do not expect that we prepare everything for you. You have to be proactive on coming up with ideas, work hard, learn a lot, and lead your project. **I strongly recommend you to take my visualization class offered in the hands-on project course (in third year's fall semester).** You should be able to better see what kind of a person I am and what I really expect my students. 🙂 You can also see the titles of past theses [in a separate page](/publications), and check if we executed project you may be interested in.

You are welcome to visit us before deciding a lab for your undergraduate thesis projects. You can just talk to me at my visualization class or send me an email. But it will steal a lot of our time if you visit us individually.\xA0 So please visit us in a group (at least four people).

IIS Labでは卒論生であっても自分自身のプロジェクトを行うことが期待されています．矢谷やラボのメンバーもお手伝いしますが，全部おぜん立てしてくれることはありません．自分自身で積極的にアイデアを提案し，手を動かし，いろいろなことを勉強し，プロジェクトを率いてください．**また3年生の冬学期で行われる実験において，矢谷が行っている情報可視化の実験を取ることを強くお勧めしています．**この授業で矢谷がどんな人間で，どのようなことを学生さんに期待しているか，よくわかると思います．:) また過去にどのような卒業論文があったかは[こちらのページ](/publications)で確認できますので，自分の興味に合うようなプロジェクトがあったかを確認してみてください．

卒論配属を決める前にラボの見学に来ていただくことをお勧めしています．情報可視化の講義の時かメールで矢谷まで連絡してください．ただし一人ひとり対応していると数が多くなることがありますので，できる限りグループ(4人以上)でお越しになれるように各自でご調整ください．

## For prospective international students {#international}

We always welcome international students. We strongly appreciate diversity, and your unique backgrounds would contribute substantially. However, simply being international does not make your case any stronger at all. You still need to have deep knowledge and strong research passions.

Unfortunately, we are pretty close to the full capacity in terms of the number of students. Therefore, we have to be extremely selective for all kinds of applications. We already have turned down many applications and requests from very strong candidates. You must demonstrate strong research capabilities in HCI and/or relevant fields for consideration when you contact us.

Please send your email well in advance, say** 6 – 8 weeks** before your application deadline. This will help both of us secure enough time if we decide to move forward in your case. So earlier is always better.

If you are being considered for MEXT fellowship, please clearly state so in your email.

Note that admission for international students can be different from that for Japanese. You should consult with the admission office. In addition, **please send me your CV and your research proposal by email**. Your CV and research proposal must be written in English even if you are native or proficient in Japanese. Your research proposal is up to 2 pages long and must state what projects you would like to work on and why you want to work here. Please be specific about your research interests (simply saying "I am interested in HCI and ubiquitous computing" is not anything at all). It is also important to discuss what prior work exists in light of your research proposal. Your literature review should include papers from the conferences and journals we normally target for publication (i.e., CHI, UIST, UbiComp, CSCW, PACM IMWUT, and MobiSys) as well as literature in the relevant fields (e.g., medical or psychological journals).

In addition, **please share with me three accomplishments you are most proud of**. They are not limited to academic papers. Anything that demonstrates your technical capabilities would work. Examples are: artwork portfolios, mobile apps you publish in a market, hackathon outcomes (not awards. I am more interested in what you built.), and any artifact you created. If you worked as a group, please clarify what role you took and what contributions you made in each project.

## For prospective interns, visiting students and exchange students (undergrads, Masters and Kenkyusei) {#visiting_student}

Currently, we only have very limited bandwidth to take junior research visitors, interns, and exchange students (generally undergrads and Masters) because I already have so much teaching and supervising workload and our laboratory space is pretty close to full. Please understand that we have to be extremely selective.

If you are really serious, you are welcome to send us an email along with your CV and research proposal. Please send them before you make any application. Your research proposal is up to 2 pages long and must clearly state what projects you would like to work on and illustrate how skillful and confident you are to conduct your research. Your materials should clearly describe what unique intellectual contributions you can offer to our lab.

We also note that we do not take\xA0Graduate International Research Students ("kenkyusei" in Japanese) for the reasons above unless there is a special circumstance to be considered.

当ラボでは上記理由により，特段の事情がない限りは研究生の受け入れは行っておりません．どうぞご理解をお願い致します．

## For visiting researchers (Ph.D. students and above) {#visiting_researcher}

If you are an experienced researcher (e.g., a visiting researcher, a post-doc, or a senior Ph.D. student), please contact Koji along with your CV and research proposal. Your CV and\xA0research proposal must be written in English (even if you are a Japanese). In addition, please share with me three accomplishments you are proud of the most. They are not limited to academic papers, and anything that demonstrates your technical capabilities would work. Examples are: artwork portfolios, mobile apps you publish in a market, hackathon outcomes (not awards. I am more interested in what you built.), and any artifact you created.
`);function Ei(){return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:Ur.pageTitle,children:`Join Us!`}),(0,k.jsx)(bi,{blocks:Ti})]})}var Di={wrapper:`_wrapper_1qajw_1`,table:`_table_1qajw_7`,rowOdd:`_rowOdd_1qajw_38`,rowEven:`_rowEven_1qajw_42`,sectionRow:`_sectionRow_1qajw_51`,nameCell:`_nameCell_1qajw_59`,affiliationCell:`_affiliationCell_1qajw_68`};function Oi(e){return e.startsWith(`/`)&&!e.startsWith(`//`)}function ki({row:e}){return e.url?Oi(e.url)?(0,k.jsx)(In,{to:e.url,children:e.nameEn}):(0,k.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,children:e.nameEn}):(0,k.jsx)(k.Fragment,{children:e.nameEn})}function Ai({row:e}){return e.nameJa?e.url?Oi(e.url)?(0,k.jsx)(In,{to:e.url,children:e.nameJa}):(0,k.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,children:e.nameJa}):(0,k.jsx)(k.Fragment,{children:e.nameJa}):null}function ji({sections:e}){let t=(0,x.useMemo)(()=>{let t=0;return e.map(e=>{let n=t;return t+=e.rows.length,n})},[e]);return(0,k.jsx)(`div`,{className:Di.wrapper,children:(0,k.jsxs)(`table`,{className:`${Di.table} tablepress`,children:[(0,k.jsx)(`thead`,{children:(0,k.jsxs)(`tr`,{children:[(0,k.jsx)(`th`,{children:`NAME`}),(0,k.jsx)(`th`,{children:`名前`}),(0,k.jsx)(`th`,{children:`所属 / AFFILIATION`})]})}),(0,k.jsx)(`tbody`,{children:e.map((e,n)=>(0,k.jsxs)(x.Fragment,{children:[(0,k.jsx)(`tr`,{className:Di.sectionRow,children:(0,k.jsx)(`td`,{colSpan:3,children:(0,k.jsx)(`strong`,{children:e.title})})}),e.rows.map((r,i)=>(0,k.jsxs)(`tr`,{className:(t[n]+i)%2==1?Di.rowEven:Di.rowOdd,children:[(0,k.jsx)(`td`,{className:Di.nameCell,"data-label":`NAME`,children:(0,k.jsx)(ki,{row:r})}),(0,k.jsx)(`td`,{className:Di.nameCell,"data-label":`名前`,children:(0,k.jsx)(Ai,{row:r})}),(0,k.jsx)(`td`,{className:Di.affiliationCell,"data-label":`所属 / AFFILIATION`,children:r.affiliation})]},`${e.title}-${r.nameEn}`))]},e.title))})]})})}var Mi=`---
intro_ja: |
IIS Labには2026年4月現在，ポスドク1名，博士課程6名，修士課程7名，学部生4名，共同研究者・客員研究員2名が在籍しています．また現在までに，助教1名，博士9名，修士37名，学士49名，研究員・共同研究者・インターン生等18名を輩出いたしました（のべ人数）．
intro_en: |
IIS Lab currently has 1 post-doctoral researcher, 6 doctoral students, 7 master students, 4 undergraduate students, and 2 visiting researcher and students as of April 2026. We also have alumni of 1 assistant professor, 9 Ph.D.s, 37 masters, 49 bachelors, and 18 intern/visiting students/visiting researchers in total so far.
---

## Professor (Lab Director) / 教授

| nameEn | nameJa | url | affiliation |
| --- | --- | --- | --- |
| Koji Yatani | 矢谷 浩司 | /member/koji-yatani | 情報理工学系研究科電子情報学専攻学際情報学府先端表現情報学コース工学系研究科電気系工学専攻工学部電子情報工学科 |

## Post-doctoral Researcher / ポスドク研究員

| nameEn | nameJa | url | affiliation |
| --- | --- | --- | --- |
| Ya-Fang (Avon) Lin |  |  | 情報理工学系研究科電子情報学専攻 |

## Doctoral students / 博士課程

| nameEn | nameJa | url | affiliation |
| --- | --- | --- | --- |
| Nasi Wang | 王 納恩 |  | 工学系研究科電気系工学専攻 |
| Keitaro Shimizu | 清水 啓太郎 | https://xr-edtechlab.com/ | 学際情報学府先端表現情報学コース（社会人博士） |
| Feiyang Zhou | 周 飛揚 |  | 学際情報学府先端表現情報学コース |
| Jo Takezawa | 竹澤 譲 |  | 学際情報学府先端表現情報学コース（社会人博士） |
| Xinrui Fang | 方 欣瑞 | http://xinrui.design/ | 学際情報学府先端表現情報学コース |
| Shunpei Norihama | 乘濵 駿平 |  | 学際情報学府先端表現情報学コースClass of 2024（Master，学際情報学府先端表現情報学コース）Class of 2022（Bachelor，工学部電子情報工学科） |

## Master students / 修士課程

| nameEn | nameJa | url | affiliation |
| --- | --- | --- | --- |
| Satoshi Inoue | 井上 聡士 |  | 学際情報学府先端表現情報学コースClass of 2025 (Bachelor，工学部電子情報工学科) |
| Dingkun Gong | 龔 定坤 |  | 工学系研究科電気系工学専攻 |
| Shuta Takahashi | 高橋 脩汰 |  | 工学系研究科電気系工学専攻Class of 2025 (Bachelor，工学部電気電子工学科) |
| Yugo Fusawa | 風澤 宥吾 |  | 工学系研究科電気系工学専攻Class of 2024 (Bachelor，工学部電気電子工学科) |
| Haruto Mori | 盛 遥斗 |  | 工学系研究科電気系工学専攻Class of 2025 (Bachelor，工学部電子情報工学科) |
| Jiayi Yang | 楊 佳怡 |  | 工学系研究科電気系工学専攻 |
| Wenhao Li | 李 文豪 |  | 工学系研究科電気系工学専攻 |

## Undergraduate students / 学部生

| nameEn | nameJa | url | affiliation |
| --- | --- | --- | --- |
| Ren Yin | 尹 人 |  | 電子情報工学科 |
| Yuta Omori | 大森 唯詩 |  | 電子情報工学科 |
| Yudai Shimada | 島田 雄大 |  | 工学部電気電子工学科 |
| Haruma Tasaki | 田崎 晴真 |  | 電子情報工学科 |

## Visiting researchers / 共同研究者・客員研究員

| nameEn | nameJa | url | affiliation |
| --- | --- | --- | --- |
| Le Fang | 方 楽 |  | from Hong Kong Polytechnic UniversityJanuary 2026 — June 2026 |
| Simo Hosio | ホシオ シモ | https://simohosio.com/ | from University of OuluApril 2022 — March 2027 |

## Alumni / 卒業生

| nameEn | nameJa | url | affiliation |
| --- | --- | --- | --- |
| Chi-Lan Yang | 楊 期蘭 | https://sites.google.com/cyber.t.u-tokyo.ac.jp/chi-lan-yang/home | April 2023 — March 2026 as an Assistant Professor in 学際情報学府 |
| Kazuhiro Shinoda | 篠田 和宏 | https://kcfnen1916.com/ | Class of 2025 (Ph.D., 学際情報学府先端表現情報学コース)Class of 2022（Master, 学際情報学府先端表現情報学コース）Class of 2020 (Bachelor, 工学部電子情報工学科)JSPS特別研究員(DC2) |
| Zefan Sramek | シュラーメク ゼファン | http://zefansramek.net/research.php | Class of 2025 (Ph.D., 工学系研究科電気系工学専攻)Class of 2021 (Master, 工学系研究科電気系工学専攻) |
| Minghui Chen | 陳 明輝 | http://minghuihub.github.io/ | Class of 2025 (Ph.D., 工学系研究科電気系工学専攻)Class of 2020 (Master, 工学系研究科電気系工学専攻) |
| Shitao Fang | 方 詩涛 | https://stfang.me/ | Class of 2025 (Ph.D., 工学系研究科電気系工学専攻)Class of 2022 (Master, 工学系研究科電気系工学専攻) |
| Yuya Umeda | 梅田 悠哉 |  | Class of 2025 (Master, 学際情報学府先端表現情報学コース)Class of 2023（Bachelor，工学部電子情報工学科） |
| Rei Sawano | 澤野 令 |  | Class of 2025 (Master, 工学系研究科電気系工学専攻)Class of 2022（Bachelor，工学部電子情報工学科） |
| Hiroki Nakano | 中野 博貴 |  | Class of 2025 (Master, 工学系研究科電気系工学専攻)Class of 2023（Bachelor，工学部電子情報工学科） |
| Haruma Hirabayashi | 平林 晴馬 |  | Class of 2025 (Master, 学際情報学府先端表現情報学コース)Class of 2023（Bachelor，工学部電子情報工学科） |
| Shun Yamanaka | 山中 駿 |  | Class of 2025 (Master, 工学系研究科電気系工学専攻) |
| Yuange Liu | 劉 遠歌 |  | Class of 2025 (Master, 学際情報学府先端表現情報学コース) |
| Kohei Yasugi | 八杉 航平 |  | Class of 2025 (Bachelor, 工学部電子情報工学科) |
| He Xinyu | 何 昕昱 |  | October 2024 — March 2026 as 大学院外国人研究生 |
| Lukas Moers | メールス ルーカス |  | July 2025 — August 2025 as an intern |
| Saumya Pareek | パリーク ソウミャ |  | March 2025 — April 2025 as an intern |
| Shixian Geng | 耿 世嫻 | https://shixiangeng.github.io/ | Class of 2025 (Ph.D.，工学系研究科電気系工学専攻)Class of 2022 (Master, 工学系研究科電気系工学専攻) |
| Anran Xu | 徐 安然 | https://anranxu.com | Class of 2025 (Ph.D.，工学系研究科電気系工学専攻)Class of 2022 (Master, 工学系研究科電気系工学専攻) |
| Hiroki Katori | 香取 浩紀 |  | Class of 2024（Master，工学系研究科電気系工学専攻）Class of 2022（Bachelor，工学部電子情報工学科） |
| Kakeru Miyazaki | 宮崎 翔 |  | Class of 2024（Master，学際情報学府先端表現情報学コース）Class of 2022（Bachelor，工学部電子情報工学科） |
| Taiyo Ito | 伊東 大燿 |  | Class of 2024（Bachelor，工学部電子情報工学科） |
| Sylvain Malacria | マラクリア シルバン | http://www.malacria.com/ | July, 2024 — May, 2025 as aJSPS invitational fellow（JSPS外国人招へい研究者） |
| Xuhui Chang | 常 旭暉 |  | October 2024 — March 2025 as a USTEP graduate exchange student（大学院交換留学生） |
| Daniel Szabo | ダニエル スザボ |  | October 2024 as an intern |
| Li Junhao | リー ジュンハオ |  | October 2024 as an intern |
| Zhongyi Zhou | 周 中一 |  | Class of 2023 (Ph.D., 工学系研究科電気系工学専攻)Class of 2020 (Master, 工学系研究科電気系工学専攻) |
| Ginshi Shimojima | 下島 銀士 |  | Class of 2023（Master, 学際情報学府先端表現情報学コース）Class of 2021 (Bachelor, 工学部電子情報工学科) |
| Kosuke Yamamoto | 山本 恒輔 |  | Class of 2023 (Master, 工学系研究科電気系工学専攻) |
| Ryo Yoshikawa | 吉川 諒 |  | Class of 2023（Master, 学際情報学府先端表現情報学コース）Class of 2021 (Bachelor, 工学部電気電子工学科) |
| Arissa Janejera Sato | 佐藤 安理紗 ジエンジエラ |  | Class of 2022 (Ph.D., 工学系研究科電気系工学専攻)Class of 2019 (Master, 工学系研究科電気系工学専攻) |
| Akari Doi | 土居 明莉 |  | Class of 2022（Master, 学際情報学府先端表現情報学コース） |
| Michihiko Ueno | 上野 道彦 |  | January, 2020 — March, 2023, as a visiting researcher |
| Dimas Antony Chacon Salas | チャコン アントニー |  | Class of 2022（Ph.D.，工学系研究科電気系工学専攻） |
| Shoko Sano | 佐野 翔子 |  | Class of 2021 (Master, 学際情報学府先端表現情報学コース) |
| Ryo Takashima | 高島 諒 |  | Class of 2021 (Master, 工学系研究科電気系工学専攻) |
| Hirotaka Hayashi | 林 裕嵩 |  | Class of 2021 (Master, 学際情報学府先端表現情報学コース)Class of 2019 (Bachelor, 工学部電子情報工学科) |
| Yuta Hirai | 平井 雄太 |  | Class of 2021 (Master, 工学系研究科電気系工学専攻) |
| Takuma Masuda | 桝田 拓磨 |  | Class of 2021 (Bachelor, 工学部電子情報工学科) |
| Takaharu Yamada | 山田 崇晴 |  | Class of 2021 (Bachelor, 工学部電子情報工学科) |
| Nami Ogawa | 小川 奈美 |  | April, 2021 — March, 2022, as a visiting researcher |
| Yuji Sugiyama | 杉山 悠司 |  | Class of 2020 (Master, 工学系研究科電気系工学専攻)Class of 2018 (Bachelor, 工学部電子情報工学科) |
| Asahi Takenouchi | 竹ノ内 朝陽 |  | Class of 2020 (Master, 学際情報学府先端表現情報学コース)Class of 2018 (Bachelor, 工学部電子情報工学科) |
| Ikutoshi Katayama | 片山 育星 |  | Class of 2020 (Bachelor, 電気電子工学科) |
| Ryoto Suzuki | 鈴木 凌斗 |  | Class of 2020 (Bachelor, 電気電子工学科) |
| Naho Tomiki | 富木 菜穂 |  | Class of 2020 (Bachelor, 電子情報工学科) |
| Shinichiro Yoshida | 吉田 慎一朗 |  | Class of 2020 (Bachelor, 電気電子工学科) |
| Hao Xu | 胥 皓 |  | Class of 2020 (Master, 工学系研究科電気系工学専攻) |
| Carla F. Griggio | グリッジョ カーラ |  | May 2019 — May 2020, as a post-doctoral researcher supported by JSPS |
| Tatsuhiko Sakaguchi | 坂口 達彦 |  | Class of 2019 (Master, 工学系研究科電気系工学専攻)Class of 2017 (Bachelor, 工学部電子情報工学科) |
| Hiroaki Masaki | 正木 博明 |  | Class of 2019 (Master, 学際情報学府先端表現情報学コース)Class of 2017 (Bachelor, 工学部電子情報工学科) |
| Hidenori Matsui | 松井 秀憲 |  | Class of 2019 (Master, 学際情報学府先端表現情報学コース)Class of 2017 (Bachelor, 工学部電子情報工学科) |
| Ayuka Ito | 伊藤 歩桂 |  | Class of 2019 (Bachelor, 工学部電子情報工学科) |
| Siwook Choi | チェ シウク |  | Class of 2019 (Bachelor, 工学部電子情報工学科) |
| Yuki Tsubouchi | 坪内 優樹 |  | Class of 2019 (Bachelor, 工学部電気電子工学科) |
| Kosuke Hatai | 幡井 皓介 |  | Class of 2019 (Bachelor, 工学部電子情報工学科) |
| Kiyotaka Eguchi | 江口 清貴 |  | April 2018 — March 2020, as a visiting researcher |
| Kengo Shibata | 柴田 健吾 |  | April 2019 — July 2019, as an exchange student from University of Geneva |
| Peihan Tu | トゥ ペイハン |  | April 2019 — July 2019, as a research intern |
| Daisuke Shibato | 柴藤 大介 |  | Class of 2018 (Master, 工学系研究科電気系工学専攻)Class of 2016 (Bachelor, 工学部電子情報工学科) |
| Benio Shimada | 嶋田 紅緒 |  | Class of 2018 (Bachelor, 工学部電子情報工学科) |
| Toby Chong | チョン ロン ヒン |  | Class of 2018 (Bachelor, 工学部電気電子工学科) |
| Yuya Munekata | 宗像 佑弥 |  | Class of 2018 (Bachelor, 工学部電子情報工学科) |
| Namiki Shimoo | 下尾 波輝 |  | Class of 2017 (Master, 工学系研究科電気系工学専攻)Class of 2015 (Bachelor, 工学部電子情報工学科) |
| Takahiro Hashizume | 橋爪 崇弘 |  | Class of 2017 (Master, 工学系研究科電気系工学専攻) |
| Takuma Yoshitani | 吉谷 拓真 |  | Class of 2017 (Master, 工学系研究科電気系工学専攻)Class of 2015 (Bachelor, 工学部電子情報工学科) |
| Takuma Suzuki | 鈴木 拓馬 |  | Class of 2017 (Bachelor, 工学部電子情報工学科) |
| Junpei Mishima | 三島 潤平 |  | Class of 2017 (Bachelor, 工学部電子情報工学科) |
| Yuji Hatada | 畑田 裕二 |  | Class of 2017 (Bachelor, 工学部電子情報工学科) |
| Rishabh Shrivastava | スリバスタバ リシャブ |  | May 2017 — July 2017, as a research intern from Indian Institute of Technology, Kharagpur |
| Shunya Ariga | 有賀 竣哉 |  | Class of 2016 (Master, 工学系研究科電気系工学専攻) |
| Tomomi Iwashita | 岩下 知美 |  | Class of 2016 (Master, 工学系研究科電気系工学専攻) |
| Yu Aoki | 青木 優 |  | Class of 2016 (Bachelor, 工学部電子情報工学科) |
| Takuya Arizono | 有薗 拓也 |  | Class of 2016 (Bachelor, 工学部電子情報工学科) |
| Hiroki Nakazawa | 中沢 弘樹 |  | Class of 2016 (Bachelor, 工学部電子情報工学科) |
| Wakana Nogami | 野上 和加奈 |  | Class of 2016 (Bachelor, 工学部電気電子工学科) |
| Shota MIyazaki | 宮崎 章太 |  | Class of 2016 (Bachelor, 工学部電子情報工学科) |
| Sauvik Das | ソウヴィック ダス |  | Jun. 2016 — Aug. 2016, as a research intern from CMU |
| Stephen MacNeil | ステファン マクネイル |  | Jun. 2016 — Aug. 2016, as a research intern from UNC Charlotte |
| Mitsuru Inada | 稲田 弥鶴 |  | Class of 2015 (Bachelor, 工学部電子情報工学科) |
| Atsushi Otsubo | 大坪 篤史 |  | Class of 2015 (Bachelor, 工学部電子情報工学科) |
| Kenta Hasegawa | 長谷川 健太 |  | Class of 2015 (Bachelor, 工学部電子情報工学科) |
| Ryo Suzuki | 鈴木 遼 |  | Oct. 2014 — May 2015, as a student collaborator |
`;function Ni(e){if(!e.startsWith(`|`)||e.includes(`---`))return null;let t=e.split(`|`).slice(1,-1).map(e=>e.trim());if(t.length<4)return null;let[n,r,i,a]=t;if(!n||n===`nameEn`)return null;let o={nameEn:n};return r&&(o.nameJa=r),i&&(o.url=i),a&&(o.affiliation=a),o}function Pi(e){let{meta:t,body:n}=Mr(e),r=[],i=n.split(/\n(?=## )/);for(let e of i){let t=e.trim();if(!t)continue;let n=t.match(/^## (.+?)\n([\s\S]*)$/);if(!n)continue;let i=[];for(let e of n[2].split(`
`)){let t=Ni(e.trim());t&&i.push(t)}i.length&&r.push({title:n[1].trim(),rows:i})}return{intro:{ja:t.intro_ja??``,en:t.intro_en??``},sections:r}}var{intro:Fi,sections:Ii}=Pi(Mi),Li=Fi,Ri=Ii,N={pageTitle:`_pageTitle_1lkbd_1`,intro:`_intro_1lkbd_12`};function P(){return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:N.pageTitle,children:`Members`}),(0,k.jsxs)(`div`,{className:N.intro,children:[(0,k.jsx)(`p`,{children:Li.ja}),(0,k.jsx)(`p`,{children:Li.en})]}),(0,k.jsx)(ji,{sections:Ri})]})}function F(e){return e===`paper`||e===`video`?`(${e})`:e}function zi({text:e}){let t=[],n=/(\*\*[^*]+\*\*|_[^_]+_|\[[^\]]+\]\([^)]+\))/g,r=0,i,a=0;for(;(i=n.exec(e))!==null;){i.index>r&&t.push(e.slice(r,i.index));let n=i[0];if(n.startsWith(`**`))t.push((0,k.jsx)(`strong`,{children:n.slice(2,-2)},a++));else if(n.startsWith(`_`))t.push((0,k.jsx)(`em`,{children:n.slice(1,-1)},a++));else{let e=n.match(/\[([^\]]+)\]\(([^)]+)\)/);e&&t.push((0,k.jsx)(`a`,{href:ir(e[2]),target:`_blank`,rel:`noopener noreferrer`,children:F(e[1])},a++))}r=i.index+n.length}return r<e.length&&t.push(e.slice(r)),(0,k.jsx)(k.Fragment,{children:t})}var Bi={section:`_section_rgm34_1`,yearLabel:`_yearLabel_rgm34_5`,thesisYearLabel:`_thesisYearLabel_rgm34_15`,list:`_list_rgm34_25`,paragraph:`_paragraph_rgm34_43`,thesisBlock:`_thesisBlock_rgm34_44`,thesisLine:`_thesisLine_rgm34_71`};function Vi({block:e}){return e.type===`paragraph`?(0,k.jsx)(`p`,{className:Bi.paragraph,children:(0,k.jsx)(zi,{text:e.text})}):e.type===`year-list`?(0,k.jsxs)(k.Fragment,{children:[e.year&&(0,k.jsx)(`h5`,{className:Bi.yearLabel,children:e.year}),(0,k.jsx)(`ul`,{className:Bi.list,children:e.items.map(e=>(0,k.jsx)(`li`,{children:(0,k.jsx)(zi,{text:e})},e.slice(0,80)))})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`h4`,{className:Bi.thesisYearLabel,children:e.year}),(0,k.jsx)(`div`,{className:Bi.thesisBlock,children:e.lines.map((e,t)=>(0,k.jsx)(`p`,{className:Bi.thesisLine,children:(0,k.jsx)(zi,{text:e})},`${t}-${e.slice(0,40)}`))})]})}function Hi({sections:e}){return(0,k.jsx)(k.Fragment,{children:e.map(e=>(0,k.jsxs)(`section`,{className:Bi.section,id:Ui(e.title),children:[(0,k.jsx)(`h2`,{children:e.title}),e.blocks.map((t,n)=>(0,k.jsx)(Vi,{block:t},`${e.title}-${n}`))]},e.title))})}function Ui(e){return e.toLowerCase().replace(/[^\w\u3040-\u30ff\u4e00-\u9faf]+/g,`-`).replace(/^-|-$/g,``)}var Wi=`## Journals

##### 2025年

* Andy Alorwu, Niels van Berkel, Joonas Moilanen, Parsa Sharmila, Niloofar Meftahi, Koji Yatani, Aku Visuri, and Simo Hosio. 2025. Crowd-Powered Discovery of Mental Health Self-Care Techniques in Higher Education. In ACM Transactions on Computer-Human Interaction.
* Zefan Sramek, Sachinthya Lokuge, Tia Sternat, Martin A. Katzman, and Koji Yatani. 2025. Beyond the Feature Level: A Cluster Analysis of Feature-Level Social Media Behaviour Patterns, Maladaptive Use, and Psychological Well-Being. Proceedings of ACM on Interactive, Mobile, Wearable, and Ubiquitous Technology (PACM IMWUT), Volume 9, Issue 4, Article 210, 42 pages. [paper](https://dl.acm.org/doi/10.1145/3770713)
* Minghui Chen, Simo Hosio, and Koji Yatani. 2025. Investigating Design Considerations for Supporting Remote Teaching and Learning of Physical Drawing. Proceedings of the ACM on Human-Computer Interaction, Volume 9, Issue 8, Article ISS005, 23 pages. [paper](https://dl.acm.org/doi/10.1145/3773062)
* Mahmoud Ali, Niels van Berkel, Benjamin Tag, Ville Paananen, Jonas Oppenlaender, Koji Yatani, and Simo Hosio. 2025. Investigating Mental Wellbeing Self-care in Higher Education Using BERTopic Modeling. Discover Mental Health. [paper](https://link.springer.com/article/10.1007/s44192-025-00323-1)
* Shunpei Norihama, Shixian Geng, Kakeru Miyazaki, Arissa J. Sato, Mari Hirano, Simo Hosio, and Koji Yatani. 2025. Examining Input Modalities and Visual Feedback Designs in Mobile Expressive Writing. Proceedings of the ACM on Human-Computer Interaction, Volume 9, Issue 5 Article MHCI009, 1–28. [paper](https://dl.acm.org/doi/10.1145/3743723)
* 平林晴馬，宮崎翔, 矢谷浩司．2025. 情報可視化システム開発における大規模言語モデルプロンプトの定量的調査．情報処理学会論文誌デジタルコンテンツ（DCON），13(2)，1-10．[paper](/wp-content/uploads/2025/12/IPSJ-DCON-2025.pdf)
* Shixian Geng, Ginshi Shimojima, Chi-Lan Yang, Zefan Sramek, Shunpei Norihama, Ayumi Takano, Simo Hosio, and Koji Yatani. 2025. When Group Spirit Meets Personal Journeys: Exploring Motivational Dynamics and Design Opportunities in Group Therapy. In Proceedings of the ACM on Human-Computer Interaction, Volume 9, Issue 2, Article CSCW205, 1-27. [paper](https://dl.acm.org/doi/10.1145/3711103)

##### 2024年

* 耿世嫻，平井雄太，下島銀士，柳田陵介，山田大志，小野寺宏，戸原玄，矢谷浩司．2024．スマートフォンを用いた画像認識による嚥下機能の定量的評価手法．情報処理学会論文誌，65(6)，1091-1101．[paper](/wp-content/uploads/2024/10/IPSJ2024.pdf)

##### 2023年

* Anran Xu, Zhongyi Zhou, Kakeru Miyazaki, Ryo Yoshikawa, Simo Hosio, and Koji Yatani. 2023. DIPA2: An Image Dataset with Cross-cultural Privacy Perception Annotations. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 7, 4, Article 192 (December 2023), 30 pages. [paper](/wp-content/uploads/2024/02/IMWUT202312.pdf) **PACM IMWUT Distinguished Paper Award winner**
* 吉川諒，落合秀也，矢谷浩司．2023．ボット判定の機会を活用した情報セキュリティ・倫理の学習手法の知識習得と知識持続効果の検証．電子情報通信学会論文誌 D\xA0 ，Vol. J106-D，No. 7，409-418． [paper](/wp-content/uploads/2024/02/IEICE2023.pdf)
* Kazuhiro Shinoda, D. Antony Chacon, and Koji Yatani. 2023. An Embroidery Touch Sensor with Layered Structure of Conductive and Non-Conductive Threads.\xA0IEEE Sensors Letters, Vo. 7, No. 6, Article 6003104. [paper](/wp-content/uploads/2024/02/IEEESensorL2023.pdf)

##### 2022年

* Antony Chacon, Kazuhiro Shinoda, Tomoyuki Yokota, and Koji Yatani. 2022. Demonstrating the Feasibility of Subepidermal Image Sensing for Hand Posture and Gesture Recognition. _IEEE Sensors Letters_, Vo. 6, No. 10, Article 2502504. [paper](/wp-content/uploads/2022/09/SensorLetter2022.pdf)

##### 2021年

* Zhongyi Zhou, Anran Xu, and Koji Yatani. 2021. SyncUp: Vision-based Practice Support for Synchronized Dancing. _Proc. ACM Interact. Mob. Wearable Ubiquitous Technol._ 5, 3, Article 143 (Sept 2021), 25 pages. [paper](/wp-content/uploads/2021/11/IMWUT_SyncUp.pdf) [video](https://www.youtube.com/watch?v=LTNBBjgt6ek) **PACM IMWUT Distinguished Paper Award winner, Best Presentation Award winner at UbiComp/ISWC 2021**

##### 2020年

* 正木博明，柴田健吾，星野秀偉，石濱嵩博，齋藤長行，矢谷浩司．2020．若年層SNSユーザに対するプライバシ・安全上の行動に関するナッジの大規模定量調査．情報処理学会論文誌，61(12)，1892-1902，[paper](/wp-content/uploads/2021/06/IPSJ-202012.pdf)
* Peihan Tu, Li-Yi Wei, Koji Yatani, Takeo Igarashi, and Matthias Zwicker. Continuous Curve Textures. ACM Transactions on Graphics Vol. 39, No. 6 (Also appeared in SIGGRAPH Asia 2020), 2020. [paper](/wp-content/uploads/2020/10/TOG2020.pdf) [video](https://www.youtube.com/watch?v=7p390vwlFyY&feature=youtu.be)

##### 2018年

* Hidenori Matsui, Takahiro Hashizume, and Koji Yatani. 2018. Al-light: An Alcohol-Sensing Smart Ice Cube. _Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (PACM IMWUT)_ 2, 3, Article 126 (September 2018), 20 pages.\xA0[paper](/paper/IMWUT_al-light.pdf) [video](https://youtu.be/hElzdnnT5VM)
* Takahiro Hashizume, Takuya Arizono, and Koji Yatani. 2018. Auth ‘n’ Scan: Opportunistic Photoplethysmography in Mobile Fingerprint Authentication.\xA0_Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (PACM IMWUT)_\xA01, 4, Article 137 (January 2018), 27 pages.\xA0[paper](/paper/IMWUT_auth_n_scan.pdf) [video](https://youtu.be/Nj8lek9KP4M)

##### 2015年

* Jun Xing, Li-Yi Wei, Takaaki Shiratori, and Koji Yatani. 2015. Autocomplete hand-drawn animations. _ACM Trans. Graph._ 34, 6, Article 169. (Also appeared in SIGGRAPH Asia 2015) [paper](/paper/SA2015.pdf) [video](https://www.youtube.com/watch?v=w0YmWiy6sA4)

## Conference full papers (peer-reviewed)

##### 2025年

* Shixian Geng, Remi Inayoshi, Chi-Lan Yang, Zefan Sramek, Yuya Umeda, Chiaki Kasahara, Arissa J. Sato, Simo Hosio, and Koji Yatani. 2025. Beyond the Dialogue: Multi-chatbot Group Motivational Interviewing for Premenstrual Syndrome (PMS) Management. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2025), Article 640, 1–18.

##### 2024年

* Anran Xu, Shitao Fang, Huan Yang, Simo Hosio, Koji Yatani. Examining Human Perception of Generative Content Replacement in Image Privacy Protection. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2024), Article 777, 1–16, 2024. [paper](/wp-content/uploads/2024/05/CHI2024.pdf)

##### 2023年

* Zefan Sramek, Arissa J. Sato, Zhongyi Zhou, Simo Hosio, and Koji Yatani. 2023. SoundTraveller: Exploring Abstraction and Entanglement in Timbre Creation Interfaces for Synthesizers. In Proceedings of the 2023 ACM Designing Interactive Systems Conference (DIS '23), 95–114. [paper](/wp-content/uploads/2023/05/DIS2023.pdf) **Best Demo Award** (for the accompanying demo presentation)
* Arissa J. Sato, Zefan Sramek, and Koji Yatani. Groupnamics: Designing an Interface for Overviewing and Managing Parallel Group Discussions in an Online Classroom. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2023), Article 701, 1–18, 2023.\xA0[paper](/wp-content/uploads/2023/05/CHI2023.pdf)

##### 2022年

* Joonas Moilanen, Aku Visuri, Sharadhi Alape Suryanarayana, Andy Alorwu, Koji Yatani, and Simo Hosio. 2022. Measuring the Effect of Mental Health Chatbot Personality on User Engagement. In Proceedings of the International Conference on Mobile and Ubiquitous Multimedia (MUM '22), 138–150.
* Zhongyi Zhou and Koji Yatani. 2022. Gesture-aware Interactive Machine Teaching with In-situ Object Annotations. In Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology (UIST '22), Article 27, 1–14 [paper](/wp-content/uploads/2022/09/UIST2022.pdf) [video](https://www.youtube.com/watch?v=ZS-Ser7-vGI)
* Ryo Yoshikawa, Hideya Ochiai, and Koji Yatani. 2022. DualCheck: Exploiting Human Verification Tasks for Opportunistic Online Safety Microlearning. In _Proceedings of the Eighteenth Symposium on Usable Privacy and Security (SOUPS 2022), _19–37. [paper](/wp-content/uploads/2022/08/SOUPS2022.pdf) [video](https://youtu.be/5W16fpjeg4M)

##### 2021年

* Carla F. Griggio, Arissa J. Sato, Wendy E. Mackay, and Koji Yatani. 2021. Mediating Intimacy with DearBoard: a Co-Customizable Keyboard for Everyday Messaging. In _Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems_ (_CHI '21_),\xA0Article 342, 1–16. ([paper](/wp-content/uploads/2021/05/CHI2021.pdf))

##### 2020年

* Hiroaki Masaki, Kengo Shibata, Shui Hoshino, Takahiro Ishihama, Nagayuki Saito, and Koji Yatani. Exploring Nudge Designs to Help Adolescent SNS Users Avoid Privacy and Safety Threats. _In Proceedings of ACM CHI Conference on Human Factors in Computing Systems, _1-11, April 2020. **Honorable Mention Award winner** [paper](/paper/CHI2020.pdf)

##### 2019年

* 柴藤大介，有薗拓也，宮崎章太，矢谷浩司．CodeGlass: GitHubのプルリクエストを活用したコード断片のインタラクティブな調査支援システム．インタラクション2019，159-168．[paper](/paper/interaction2019.pdf)\xA0[video](https://www.youtube.com/watch?v=nVoGx-tWvt0)

##### 2017年

* Haojian Jin, Yale Song, and Koji Yatani. ElasticPlay: Interactive Video Summarization with Dynamic Time Budgets. _In Proceedings of Multimedia_ (MM '17), ACM 1164 – 1172 (oral presentation). [paper](https://arxiv.org/pdf/1708.06858) [video](https://www.youtube.com/watch?v=mQGiBhesAlM)
* Shunya Ariga, Masataka Goto, and Koji Yatani. 2017. Strummer: An Interactive Guitar Chord Practice System. In _Proceedings of IEEE International Conference on Multimedia and Expo_ (ICME '17), IEEE, 1057-1062. [paper](/paper/ICME2017.pdf) [video](https://www.youtube.com/watch?v=MIdhuZdzScY)

##### 2016年

* Takuma Yoshitani, Masa Ogata, and Koji Yatani. 2016. LumiO: a plaque-aware toothbrush. In _Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing_ (UbiComp '16), 605-615. [paper](/paper/ubicomp2016.pdf) [video](https://www.youtube.com/watch?v=gwvPTRLiZiQ)
* Minsam Ko, Seungwoo Choi, Koji Yatani, and Uichin Lee. 2016. Lock n' LoL: Group-based Limiting Assistance App to Mitigate Smartphone Distractions in Group Activities. In _Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems_ (CHI '16), 998-1010. **Best Paper Award winner **[paper](/paper/CHI2016.pdf)**

**

##### 2015年

* Darren Edge, Sumit Gulwani, Natasa Milic-Frayling, Mohammad Raza, Reza Adhitya Saputra, Chao Wang, and Koji Yatani. 2015. Mixed-Initiative Approaches to Global Editing in Slideware. In _Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems_ (CHI '15), 3503-3512. [paper](/paper/CHI2015.pdf) [video](https://www.youtube.com/watch?v=yM4IQL8xFJw)
* Minsam Ko, Subin Yang, Joonwon Lee, Christian Heizmann, Jinyoung Jeong, Uichin Lee, Daehee Shin, Koji Yatani, Junehwa Song, and Kyong-Mee Chung. 2015. NUGU: A Group-based Intervention App for Improving Self-Regulation of Limiting Smartphone Use. In _Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work & Social Computing_ (CSCW '15), 1235-1245. [paper](/paper/CSCW2015.pdf)

##### 2014年

* Bahador Saket, Sijie Yang, Hong Tan, Koji Yatani, and Darren Edge. 2014. TalkZones: section-based time support for presentations. In _Proceedings of the 16th international conference on Human-computer interaction with mobile devices & services_ (MobileHCI '14), 263-272. **Honorable Mention Award winner **[paper](/paper/MobileHCI2014_TalkZones.pdf) [video](https://www.youtube.com/watch?v=90MpLqvHJjw)**

**
* Haojian Jin, Tetsuya Sakai, and Koji Yatani. 2014. ReviewCollage: a mobile interface for direct comparison using online reviews. In _Proceedings of the 16th international conference on Human-computer interaction with mobile devices & services_ (MobileHCI '14), 349-358. **Honorable Mention Award winner **[paper](/paper/MobileHCI2014_ReviewCollage.pdf) [video](https://www.youtube.com/watch?v=QDPg2E0RYbg)**

**

## Conference short papers (peer-reviewed)

##### 2025年

* Kazuhiro Shinoda, Sylvain Malacria, Fabrice Matulic, and Koji Yatani. 2025. An Equivalent Circuit Model for 2D Embroidery Using Conductive Threads. In Proceedings of the 2025 ACM International Symposium on Wearable Computers (ISWC '25), 9–15. [paper](https://dl.acm.org/doi/10.1145/3715071.3750414)

##### 2018年

* Ryo Suzuki, Koji Yatani, Mark D. Gross, and Tom Yeh. Tabby: Explorable Design for 3D Printing Textures.\xA0_In Proceedings of Pacific Graphics 2018._

## Demos / Posters (work-in-progress, peer-reviewed)

##### 2023年

* Shitao Fang, and Koji Yatani. Towards Understanding Sense of Inclusion in Social VR Onboarding. To appear in Extended Abstracts of _ACM Conference on Human Factors in Computing Systems (CHI 2023). _[paper](/wp-content/uploads/2024/02/CHI2023-LBW.pdf)
* Anran Xu, Zhongyi Zhou, Kakeru Miyazaki, Ryo Yoshikawa, Simo Hosio, and Koji Yatani. 2023. DIPA : An Image Dataset with Cross-cultural Privacy Concern Annotations. In Companion Proceedings of the 28th International Conference on Intelligent User Interfaces (IUI '23 Companion). Association for Computing Machinery, New York, NY, USA, 259–266. [paper](/wp-content/uploads/2024/02/IUI-EA2023.pdf)

##### 2021年

* Zhongyi Zhou, and Koji Yatani. Enhancing Model Assessment in Vision-based Interactive Machine Teaching through Real-time Saliency Map Visualization. The Adjunct Publication of the Annual ACM Symposium on User Interface Software and Technology (UIST 2021), 112–114.
* Hirotaka Hayashi, Anran Xu, Zhongyi Zhou, and Koji Yatani. Vision-based Scene Analysis toward Dangerous Cycling Behavior Detection Using Smartphones. In Adjunct Proceedings of the 2021 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp 2021), 28–29. [paper](/wp-content/uploads/2021/12/UbiComp2021-demo.pdf)
* Zefan Sramek and Koji Yatani. 2021. Interactive Timbre Exploration Support for Sound Authoring with Synthesizers. Work-In-Progress Prototype Demonstration _at__\xA0NIME 2021_. [paper](/wp-content/uploads/2021/08/NIME2021.pdf)

##### 2019年

* Zhongyi Zhou, Yuki Tsubouchi, and Koji Yatani. 2019. Visualizing Out-of-synchronization in Group Dancing. In _The Adjunct Publication of __UIST 2019,_ 107–109. [paper](/wp-content/uploads/2021/01/UIST2019.pdf)

##### 2016年

* Takefumi Hiraki, Koya Narumi, Koji Yatani, and Yoshihiro Kawahara. 2016. Phones on Wheels: Exploring Interaction for Smartphones with Kinetic Capabilities. In _Proceedings of the 29th Annual Symposium on User Interface Software and Technology_ (UIST '16 Adjunct). ACM, New York, NY, USA, 121-122.

## 

## 全国大会・国内研究会・国内学会デモ発表

##### 2025年

* 山中駿, 中野博貴, 矢谷浩司．AIセルフクローンを用いた面接時の回答改善支援手法の検討．情報処理学会HCI研究会，2025年11月．
* 中野博貴, 竹澤譲, 楊期蘭, 矢谷浩司． AIによる執筆を開示することで読み手の認識に及ぶ影響の理解に向けて．情報処理学会UBI研究会，2025年11月．
* 乘濵駿平, 岩根由佳, 竹澤譲, ホシオ シモ, 平野真理, 山下直美, 矢谷浩司． 家族内ケアストレスの内省記述における時間・空間・社会的距離の影響の調査．情報処理学会UBI研究会，2025年11月．**学生奨励賞受賞**
* 篠田和宏, マラクリヤ シルバン, 亀﨑允啓, 矢谷浩司． 刺繍の縫い方の違いによる触覚特性の変化．情報処理学会UBI研究会，2025年11月．**優秀論文賞受賞**
* 伊東大燿, 篠田和宏, 矢谷浩司．モジュール性の高いツールキットを用いたハードウェアプロトタイピングにおける初学者の課題の理解．情報処理学会UBI研究会，2025年5月．[paper](/wp-content/uploads/2025/12/IPSJUBI-Ito.pdf)
* 風澤宥吾, 矢谷浩司．薬物依存症治療におけるグループ動機づけ面接のファシリテーショントレーニング支援システム．情報処理学会UBI研究会，2025年5月．[paper](/wp-content/uploads/2025/12/IPSJUBI-Fusawa.pdf) **UBIヤングリサーチャー賞受賞**

##### 2024年

* 香取浩紀，矢谷浩司，楊期蘭．2025．授業後の要約ノート作成支援アシスタントの設計と評価．情報処理学会全国大会，2025年3月．[paper](/wp-content/uploads/2025/12/IPSJ2025-Katori.pdf) **学生奨励賞受賞**
* 澤野令，香取浩紀，矢谷浩司．文章読解中における類義語学習を目的とした質問または説明ベースのマイクロタスクの効果検証，情報処理学会全国大会．2025年3月．
* 宮崎翔, マラクリヤ シルバン, 矢谷浩司．アクセシビリティのための論文内画像の代替テキストに関する定量的調査．情報処理学会HCI研究会，2024年11月．[paper](/wp-content/uploads/2024/10/IPSJHCI-202411.pdf) **2025年度山下記念研究賞**
* 徐安然, 風澤宥吾, 矢谷浩司. シームレスでカスタマイズ可能な写真プライバシー保護加工を対話的に行うインタフェース. コンピュータセキュリティシンポジウム2024. 2024年10月. [paper](/wp-content/uploads/2024/10/CSS2024.pdf)
* 梅田悠哉, 楊期蘭, 平野真理, 矢谷浩司. 2024. 大規模言語モデルを活用した認知再構成法支援チャットボットシステム. DICOMO 2024, 2024年7月. [paper](/wp-content/uploads/2024/10/DICOMO2024_Umeda.pdf)
* 中野博貴, 乘濵駿平, 耿世嫻, 矢谷浩司. 2024. 筆記開示後の視覚フィードバックデザインの選好に関する調査. DICOMO 2024, 2024年7月. [paper](/wp-content/uploads/2024/10/DICOMO2024_Nakano.pdf)
* 平林晴馬, 宮崎翔, 矢谷浩司. 2024. 情報可視化システム開発における大規模言語モデルプロンプトの定量的調査. DICOMO 2024, 2024年7月. [paper](/wp-content/uploads/2024/10/DICOMO2024_HIrabayashi.pdf)
* 小谷理紗, 瀬戸瑛子, 代田悠一郎, 長島優, 小野寺宏, 矢谷浩司, 濱田雅, 戸田達

史. 2024. 錐体外路・小脳障害患者に対する標準ディサースリア検査（AMSD）を用いた音声特徴量抽出. 日本神経学会学術大会, 2024年5月.
* 乘濵駿平, 耿世嫻, 宮崎翔, 佐藤安理紗ジエンジエラ, 下島銀士, 平野真理, シモホシオ, 矢谷浩司. 2024. 筆記開示チャットボットにおけるストレス解消感を高める視覚フィードバックデザインの比較評価. 情報処理学会UBI研究会, 2024年5月. [paper](/wp-content/uploads/2024/10/IPSJUBI-202405.pdf) **学生奨励賞受賞**
* 吉川諒, 方詩涛, 徐安然, 矢谷浩司. 2024. 生成AIに関する知識と認識に関する多国間調査. 情報処理学会HCI研究会, 2024年3月. [paper](/wp-content/uploads/2024/05/IPSJHCI-202403.pdf)

##### 2023年

* 下島銀士, 耿世嫻, 楊期蘭, 乘濵駿平, シュラーメクゼファン, 高野歩, シモホシオ, 矢谷浩司. 2023. 薬物依存症治療におけるデジタル支援に向けた治療経験者への質的調査. 情報処理学会HCI研究会, 2023年11月. [paper](/wp-content/uploads/2024/05/IPSJHCI-202311.pdf)
* 香取浩紀, 山本恒輔, 佐藤安理紗ジエンジエラ, 矢谷浩司. 2023. アルゴリズムとデータ構造に関するコードデータのアノテーションとその分析. DICOMO 2023, 2023年7月.　[paper](/wp-content/uploads/2023/06/DICOMO2023_Katori.pdf)
* 澤野令, 山田大志, 佐藤安理紗ジエンジエラ, 戸原玄, 矢谷浩司. 2023. 発声支援デバイスの制御を目的とした手のジェスチャに関する社会的受容性の調査. DICOMO 2023, 2023年7月. [paper](/wp-content/uploads/2023/06/DICOMO2023_Sawano.pdf)
* 篠田和宏, 矢谷浩司. 2023. 導電糸刺繍の設計パラメータの違いによる抵抗値変化を活用した布変形検出手法. DICOMO 2023, 2023年7月. [paper](/wp-content/uploads/2023/06/DICOMO2023_Shinoda.pdf) **優秀プレゼンテーション賞受賞**
* 清水啓太郎, 佐藤安理紗ジエンジエラ, 矢谷浩司. 2023. 親子の対話型読み聞かせのための記録システムに向けたインタビュー調査. DICOMO 2023, 2023年7月. [paper](/wp-content/uploads/2023/06/DICOMO2023_Shimizu.pdf)
* 下島銀士, 耿世嫻, 乘濵駿平, 田村綾子, 高野歩, 矢谷浩司. 2023. 薬物依存症治療におけるデジタルコミュニケーションの活用可能性に関する質的調査. DICOMO 2023, 2023年7月. [paper](/wp-content/uploads/2023/06/DICOMO2023_Shimojima.pdf)
* 中村徹, 澤谷雪子, 磯原隆将, 矢谷浩司. 2023. SNS投稿への反応に関するプライバシリスク意識調査. DICOMO 2023, 2023年7月.
* 乘濵駿平, 宮崎翔, 耿世嫻, 下島銀士, 佐藤安理紗ジエンジエラ, シモホシオ, 矢谷浩司. 2023. 対話形式でのストレス管理に向けたチャットボットにおける入力方法の評価. DICOMO 2023, 2023年7月. [paper](/wp-content/uploads/2023/06/DICOMO2023_Norihama.pdf)
* 宮崎翔, 乘濵駿平, 山本恒輔, シュラーメクゼファン, 佐藤安理紗ジエンジエラ, 矢谷浩司. 2023. プッシュ通知インタフェースの誘目度と干渉度のモデル化. DICOMO 2023, 2023年7月. [paper](/wp-content/uploads/2023/06/DICOMO2023_Miyazaki.pdf)
* 山本恒輔, 周中一, シュラーメクゼファン, 矢谷浩司. 2023. インタラクティブ機械学習の教示プロセスでの生成AIの利用可能性の検討. DICOMO 2023, 2023年7月. [paper](/wp-content/uploads/2023/06/DICOMO2023_Yamamoto.pdf) **優秀プレゼンテーション賞受賞**
* 吉川諒, 徐安然, シュラーメクゼファン, 矢谷浩司. 2023. ユーザブルセキュリティ研究に向けた情報セキュリティ・プライバシーに関する問題セットの構築. DICOMO 2023, 2023年7月. **優秀プレゼンテーション賞受賞, 2024年度山下記念研究賞受賞**
* Shitao Fang, and Koji Yatani. 2023. Towards Understanding Sense of Inclusion in Social VR Onboarding. Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems (CHI EA 2023), Article 291.
* 土居明莉, 耿世嫻, 矢谷浩司. 2023. PMSや月経に伴う不調の症状や対策に関する情報の共有意識の違いに関する定量的調査. 情報処理学会HCI研究会, 2023年3月. [paper](/wp-content/uploads/2023/05/IPSJHCI-202303.pdf)
* 篠田和宏, 矢谷浩司. 2023. 導電糸と非導電糸の組み合わせによるインタラクティブ刺繍. インタラクション2023 (デモ発表), 2023年3月.\xA0 [paper](/wp-content/uploads/2023/03/Interaction2023.pdf) **インタラクティブ発表賞 (一般投票) 受賞**
* 篠田和宏, 矢谷浩司. 2023. 導電糸刺繍における縫い方の抵抗値に与える影響の調査. 情報処理学会全国大会, 2023年3月. [paper](/wp-content/uploads/2023/03/IPSJ2023.pdf) **学生奨励賞受賞**
* 土居明莉, 耿世嫻, 矢谷浩司. 2023. PMSや月経に伴う不調の重症度と症状や対策に関する情報共有意識の関係についての定量的調査. 日本健康支援学会年次学術大会, 2023年3月. [paper](/wp-content/uploads/2023/05/JSHP2023.pdf)

##### 2022年

* 方 詩涛，矢谷 浩司．ソーシャルVR空間参加時における被受容感に関する調査．日本バーチャルリアリティ学会大会，2022年9月．[paper](/wp-content/uploads/2022/10/VRSJ2022.pdf)
* 耿 世嫻，平井 雄太，下島 銀士，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．スマートフォンを用いた画像認識による口腔・嚥下機能の定量的評価手法．DICOMO 2022，2022年7月． [paper](/wp-content/uploads/2022/06/DICOMO2022.pdf) **優秀プレゼンテーション賞受賞**
* 平井 雄太，耿 世嫻，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．歌唱中の音声・画像からの構音・嚥下機能の分類．日本老年歯科医学会学術大会，2022年6月． [paper](/wp-content/uploads/2022/06/JSG2022.pdf)
* 徐 安然，周 中一，吉川 諒．矢谷 浩司．写真のプライバシー保護加工を対話的に行うインタフェース．情報処理学会UBI研究会，2022年6月． [paper](/wp-content/uploads/2022/06/IPSJUBI-202206.pdf)
* 吉川 諒，矢谷 浩司．情報倫理・セキュリティ啓発を目指したCAPTCHAの設計．電子情報通信学会総合大会，2022年3月． [paper](/wp-content/uploads/2022/06/IEICE2022_Yoshikawa.pdf)
* 桝田 拓磨，小林 正起，矢谷 浩司．非熟練ユーザーの光電子分光計測・分析支援に向けた質的調査．電子情報通信学会総合大会，2022年3月．[paper](/wp-content/uploads/2022/06/IEICE2022_Masuda.pdf)
* 高島 諒，矢谷 浩司．コンピュータ使用時のユーザの前傾姿勢の検知に向けた予備的検討．電子情報通信学会総合大会，2022年3月．[paper](/wp-content/uploads/2022/06/IEICE2022_Takashima.pdf)

##### 2021年

* 佐野 翔子，佐藤 安理紗 ジエンジエラ，矢谷 浩司．リモートワーク環境での雑談を支援するインタフェースデザインの質的調査．情報処理学会HCI研究会，2021年12月． [paper](/wp-content/uploads/2021/12/IPSJHCI-202112.pdf)
* 林 裕嵩，徐 安然，周 中一，矢谷 浩司．スマートフォンを用いた危険な自転車運転検知に向けた運転状況認識手法の実装．情報処理学会UBI研究会，2021年12月．\xA0[paper](/wp-content/uploads/2021/12/IPSJUBI-202112_Hayashi.pdf)
* 平井 雄太，耿 世嫻，下島 銀士，小野寺 宏，矢谷 浩司．歌による嚥下・構音機能の定量的評価手法の実現に向けた歌唱データの音響・画像分析．情報処理学会UBI研究会，2021年12月． [paper](/wp-content/uploads/2021/12/IPSJHCI-202112.pdf)
* Zefan Sramek，矢谷 浩司．シンセサイザを用いた音の創作に向けたインタラクティブな音色探索支援．情報処理学会音楽情報科学研究会，2021年6月．[paper](/wp-content/uploads/2021/08/IPSJSIGMUS-202106.pdf)
* 篠田 和宏，チャコン アントニー，雪田 和歌子，横田 知之，染谷 隆夫，矢谷 浩司． 変形可能なハンカチ型インタフェースの設計．情報処理学会UBI研究会，2021年6月．**優秀論文賞****受賞．**[paper](/wp-content/uploads/2021/06/IPSJUBI-202106.pdf)
* 富木 菜穂，佐藤 安理紗 ジエンジエラ，矢谷 浩司．「OrchExplorer:アマチュアオーケストラ向けコンサートプログラム構成支援システム」情報処理学会HCI研究会，2021年3月．[paper](/wp-content/uploads/2021/02/IPSJHCI-202103.pdf)
* 竹ノ内 朝陽，矢谷 浩司．「利用規約中の特異な文章を強調するインタフェース」電子情報通信学会全国大会，2021年3月．[paper](/wp-content/uploads/2021/02/IEICE2021_Takenouchi.pdf)
* 篠田 和宏，原田 珠華，佐野 由季，安斉 周，矢谷 浩司．「導電糸を用いたウェアラブルデバイス向け手書き文字入力デバイス」電子情報通信学会全国大会，2021年3月．[paper](/wp-content/uploads/2021/02/IEICE2021_Shinoda.pdf)
* 竹ノ内 朝陽，矢谷 浩司．「サービス利用規約の読解促進に向けた特異な条項を強調するインタフェースの実装と評価」情報処理学会SPT研究会，2021年3月．[paper](/wp-content/uploads/2021/02/IPSJSPT-202103.pdf)

##### 2020年

* 周 中一，矢谷 浩司．「人体ポーズ分析を応用したシンクロダンス練習支援システム」情報処理学会UBI研究会，2020年12月．**学生奨励賞受賞．**[paper](/wp-content/uploads/2020/12/IPSJUBI-202012.pdf)
* 鈴木\xA0凌斗，矢谷 浩司． 「変数の値の変化を利用したソースコード分析手法の提案」 ヒューマンインタフェースサイバーコロキウム2020．2020年10月．[paper](/wp-content/uploads/2020/12/HIS2020_suzuki.pdf)
* 富木 菜穂,，矢谷 浩司．「オーケストラのコンサートプログラム考案時のユーザの検索行動に関する定性的調査」ヒューマンインタフェースサイバーコロキウム2020, 2020年10月．[paper](/wp-content/uploads/2020/12/HIS2020_naho.pdf)
* 竹ノ内 朝陽，矢谷 浩司．サービス利用規約の読解促進を目指した表示手法の比較検討．FIT 2020，第3分冊，57 – 64．[paper](/paper/FIT2020_Takenouchi.pdf)
* 杉山 悠司，矢谷 浩司．コーディング面接の練習を支援するシステムの構築．FIT 2020，第3分冊，49 – 56．[paper](/paper/FIT2020_Sugiyama.pdf)
* 松井 秀憲，矢谷 浩司．「GitHub上のコード変更を利用したプログラミング演習問題の実用性の評価」情報処理学会HCI研究会，2020年3月．[paper](/paper/IPSJHCI-202003_matsui.pdf)
* 胥 皓，矢谷 浩司．「ユーザの体の3Dモデル上に服装品をデザインするインタフェースの予備的検討」情報処理学会HCI研究会，2020年3月．[paper](/paper/IPSJHCI-202003_xu.pdf)
* チェ シウク，小野寺 宏，矢谷 浩司．「コンピュータ使用時に目の乾燥状態を検出する手法の検討」情報処理学会UBI研究会，2020年3月．**優秀論文賞****受賞．**[paper](/paper/IPSJUBI-202003_choi.pdf)
* 坂口 達彦，矢谷 浩司．「指紋認証 Dual-purpose Biometrics における脈拍数計測の改善と評価」情報処理学会UBI研究会，2020年3月．[paper](/paper/IPSJUBI-202003_sakaguchi.pdf)
* 陳 明輝，チャコン サラス ディマス アントニー，矢谷 浩司．「複数周波数帯での静電容量センシングによる指の識別手法」情報処理学会UBI研究会，2020年3月．[paper](/paper/IPSJUBI-202003_chen.pdf)
* 佐藤 安理紗 ジエンジエラ，柴田 健吾，矢谷 浩司．「英語非母語話者のアカデミック・ライティングにおけるリアルタイム剽窃疑い提示の効果」情報処理学会HCI研究会， 2020年1月．[paper](/paper/IPSJHCI-202001_sato.pdf)
* 正木 博明，柴田 健吾，星野 秀偉，石濵 嵩博，齋藤 長行，矢谷 浩司．「SNS上の行動に関する若年層ユーザに対するナッジの効果検証」情報処理学会HCI研究会，2020年1月．**学生奨励賞受賞．**[paper](/paper/IPSJHCI-202001_masaki.pdf)

##### 2019年

* 杉山 悠司，刀根 亮太，今村 修一郎，矢谷 浩司．「商品棚前における非計画購買者の行動特徴量の検討」情報処理学会第62回UBI研究会，2019年6月．[paper](/paper/IPSJUBI-201906.pdf)
* 嶋田 紅緒，矢谷 浩司．「視覚が不自由なユーザのファッション活動に関する定性的調査」情報処理学会第61回UBI研究会，2019年3月．**優秀論文賞****受賞．**[paper](/paper/IPSJUBI-201903_shimada.pdf)
* 竹ノ内 朝陽，矢谷 浩司．「風を用いたインタフェース実現に向けた風に関する知覚の定量的調査」情報処理学会第61回UBI研究会，2019年3月．[paper](/paper/IPSJUBI-201903_takenouchi.pdf)

##### 2018年

* 松井 秀憲，橋爪 崇弘，矢谷 浩司．「飲料のアルコール濃度計測を行うスマートアイスキューブの試作と評価」第58回情報処理学会UBI研究会，2018年5月．**優秀論文賞受賞．令和元年度山下記念研究賞受賞．**[paper](/paper/IPSJUBI-201805.pdf)
* 下尾 波輝，矢谷 浩司．「エレキギター演奏におけるミスの自動検出」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[paper](/paper/IPSJ2018_guitar.pdf)
* 松井 秀憲，橋爪 崇弘，矢谷 浩司．「氷型スマートデバイス向け光学的アルコール濃度推定手法の調査」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[paper](/paper/IPSJ2018_icecube.pdf)
* 坂口 達彦，矢谷 浩司．「回路図の画像認識を用いたブレッドボード向け実体配線図の自動生成手法に関する検討」第80回情報処理学会全国大会，2018年3月．[paper](/paper/IPSJ2018_circuit.pdf)
* 下尾 波輝，矢谷 浩司．「KnowledgeDeck: ビジネス資料作成向け情報収集・整理支援システム」第80回情報処理学会全国大会，2018年3月．[paper](/paper/IPSJ2018_knowledgedeck.pdf)
* 柴藤 大介，矢谷 浩司．「GitHubのプルリクエストを用いたプログラミング課題自動生成システムの実現可能性に関する検討」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[paper](/paper/IPSJ2018_code.pdf)
* 畑田 裕二，矢谷 浩司．「ソーシャルメディア上の行動データから流出する個人情報の定量的分析」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[paper](/paper/IPSJ2018_social.pdf)
* 吉谷 拓真，矢谷 浩司．「クラウドソーシングを用いたアイコンの主観的属性の収集」第80回情報処理学会全国大会，2018年3月．[paper](/paper/IPSJ2018_icon.pdf)
* 吉谷 拓真，矢谷 浩司．「クラウドソーシングを用いたアイコンの主観的属性と視覚的特徴量の関係性の調査」第169回情報処理学会CGVI研究会，2018年3月．**優秀研究発表賞受賞．**[paper](/paper/IPSJMUS-201711.pdf)
* 柴藤 大介，三島 潤平，矢谷 浩司．「GitHub のプルリクエストを用いた プログラミング課題自動生成システム」第4回SIGPX勉強会，2018年3月．
* 三島 潤平，柴藤 大介，矢谷 浩司．「DiDA: GitHub上のコード変更と開発履歴に関するデータセット」第4回SIGPX勉強会，2018年3月．[paper](/paper/SIGPX-201803_DiDA.pdf)
* Daisuke Shibato, Shota Miyazaki, and Koji Yatani. 「Code Examination Support Using GitHub Pull Requests」第4回SIGPX勉強会，2018年3月．

##### 2017年

* 下尾 波輝，矢谷 浩司．「エレキギター演奏自動評価のための音響的特徴量の調査」 第117回情報処理学会音楽情報科学研究会，2017年11月．**学生奨励賞受賞．**[paper](/paper/IPSJMUS-201711.pdf)
* 橋爪 崇弘，矢谷 浩司．「指尖容積脈波を同時に取得する指紋認証システムの試作と評価」第53回情報処理学会UBI研究会，2017年3月．**優秀論文賞受賞．**[paper](/paper/IPSJUBI-201703_hashizume.pdf)
* 有薗 拓也，橋爪 崇弘，矢谷 浩司．「重心移動が可能なダンベル型デバイスの製作とその知覚に関する実験」第53回情報処理学会UBI研究会，2017年3月．**学生奨励賞受賞．**[paper](/paper/IPSJUBI-201703_arizono.pdf)**

**
* 宮崎 章太，矢谷 浩司．「車椅子アクセシビリティ情報収集における飲食店の外観写真の有用性」第53回情報処理学会UBI研究会，2017年3月．[paper](/paper/IPSJUBI-201703_miyazaki.pdf)**

**
* 有薗 拓也，橋爪 崇弘，矢谷 浩司．「筋力トレーニングを指向したExergame向け負荷制御の研究」インタラクション，2017年3月．
* 有賀 竣哉，後藤 真孝，矢谷 浩司．「Strummer：インタラクティブなギターコード練習システム」第114回情報処理学会音楽情報科学研究会，2017-MUS-114(24)，1-6，2017年2月．**学生奨励賞受賞．平成29年度山下記念研究賞受賞．**[paper](/paper/IPSJMUS-201703.pdf)

##### 2016年

* 岩下 知美，矢谷 浩司．「インフォグラフィックスの作成をインタラクティブに支援するシステム」第170回情報処理学会HCI研究会，2016-HCI-170(8)，1-7，2016年10月．[paper](/paper/IPSJHCI-201610.pdf)

## 

## 新聞報道

* びっくり新技術　価格や色を音声に，アプリ開発．東京新聞(2019/4/22朝刊版)，中日新聞(2019/4/23夕刊版)．
* 百貨店で買い物、声や振動で案内 視覚障害者向けアプリ ．朝日新聞デジタル 2019/3/6．

[https://www.asahi.com/articles/ASM2W3W7BM2WULBJ008.html](https://www.asahi.com/articles/ASM2W3W7BM2WULBJ008.html)
* 経営ひと言／東京大学・矢谷浩司准教授「失敗こそ仕事」日刊工業新聞 2019/2/15 版．

[https://www.nikkan.co.jp/articles/view/00506399](https://www.nikkan.co.jp/articles/view/00506399)
* 衝動買いにつながるしぐさ、東大などがデータ収集．日刊工業新聞 2019/1/31版．

[https://www.nikkan.co.jp/articles/view/00504428](https://www.nikkan.co.jp/articles/view/00504428)
* 視覚障がい者の買い物、ＲＦＩＤで支援　東大がスマホアプリ開発．日刊工業新聞 2019/1/28版．

[https://www.nikkan.co.jp/articles/view/00503965](https://www.nikkan.co.jp/articles/view/00503965)

---
## Thesis

We here list up theses written by our lab alumni. Those with English titles are written in English; otherwise, they are in Japanese. If you are interested in any of our theses, please contact the author or Koji.

ここでは過去の修士論文，卒業論文の一覧を公開しています．英語タイトルが付いているものは英文で，それ以外は日本語で書かれたものです．論文に関してのお問い合わせは，著者もしくは矢谷までお願いいたします．

## 博士論文(Dissertation)

#### 2025年度

徐 安然（工学系研究科電気系工学専攻）**電気系工学専攻 優秀博士論文賞受賞**
Human-Centered Approaches for Image Privacy Perception and Protection
（人間中心設計手法による画像プライバシーのユーザ意識理解と保護手法構築）

耿 世嫻
Supporting Mental Health with Multi-Chatbot Group Therapy
（複数チャットボットによる集団療法を用いたメンタルヘルス支援）

#### 2023年度

周 中一 （工学系研究科電気系工学専攻）**電気系工学専攻 優秀博士論文賞受賞**
Teaching AI through Object Demonstrations and Language Instructions
(物体教示と言語指示によるAI学習)

#### 2022年度

佐藤 安理紗 ジエンジエラ （工学系研究科電気系工学専攻）
A Visualization System for Overviewing and Managing Parallel Group Discussions in an Online Classroom
（オンライン授業内の複数同時進行グループワークの状況把握と介入を支援する可視化システム）

Dimas Antony Chacon Salas （工学系研究科電気系工学専攻）
A Wearable Posture and Gesture Sensing Approach Using Subepidermal Images
（表皮下画像を用いたウェアラブルな姿勢・動作センシング手法）

## 修士論文(Master thesis)

#### 2024年度

乘濵 駿平（学際情報学府先端表現情報学コース）
Investigating Interface Designs for Mobile Expressive Writing
（モバイルデバイス上での筆記開示を支援するインタフェース設計の研究）

香取 浩紀（工学系研究科電気系工学専攻）
AI Writing Assistants for Supporting Post-Class Summary Note Creation
（授業後の要約ノート作成支援 AI アシスタントの研究）

宮崎 翔（学際情報学府先端表現情報学コース）
アクセシビリティのための論文内画像の代替テキストに関する定量的調査と記述支援システム構築

#### 2023年度

下島 銀士（学際情報学府先端表現情報学コース）
薬物依存症治療におけるデジタル支援の可能性に関する質的調査

山本 恒輔（工学系研究科電気系工学専攻）
Interactive Machine Learning with Data Augmentation Enhanced by Generative AI
（生成AIによるデータ拡張を組み入れたインタラクティブ機械学習）

吉川 諒（学際情報学府先端表現情報学コース）
生成AIに関する知識と利用習慣に関する多国間定量的調査

#### 2022年度

篠田 和宏（学際情報学府先端表現情報学コース）
縫い方の変化により様々な電気的特性をもたらす導電糸刺繍技術

土居 明莉（学際情報学府先端表現情報学コース）
女性のPMSや月経に伴う不調とその対処法に関する情報共有の意識についての定量的研究

#### 2021年度

佐野 翔子（学際情報学府先端表現情報学コース）
リモートワーク環境での雑談への参加を促進しうるインタフェースデザインの提案および評価

Zefan Kosey Groebner Sramek（工学系研究科電気系工学専攻）
Interactive Timbre Exploration Support for Sound Authoring with Synthesizers
（シンセサイザーを用いた音の創作に向けたインタラクティブな音色探索支援）

高島 亮（工学系研究科電気系工学専攻）
コンピュータ使用時におけるユーザの前傾姿勢の検知手法の予備的検討

平井 雄太（工学系研究科電気系工学専攻）
歌唱により嚥下・構音機能を評価する手法の実装と評価

林 裕嵩（学際情報学府先端表現情報学コース）
スマートフォンを用いた自転車運転状況認識と危険運転検知手法の実装

#### 2020年度

周 中一（Zhongyi Zhou）（工学系研究科電気系工学専攻）
Supporting Synchronized Dancing Practice through Spatial-temporal Visual Analysis
(ダンス動画の時空間的な分析手法を 用いたシンクロダンスの練習支援システム)

杉山 悠司（工学系研究科電気系工学専攻）
コーディング面接練習支援システムの設計と構築

胥 皓（Hao Xu）（工学系研究科電気系工学専攻）
A Sketch-based Garment Modeling Interface via 2D-to-3D Shape Matching
(2 次元から 3 次元への形状マッチングによるスケッチを利用した 衣服のモデリングインタフェース)

竹ノ内 朝陽（学際情報学府先端表現情報学コース）
サービス利用規約の読解促進に向けたインタフェースデザインの研究

#### 2019年度

坂口 達彦（工学系研究科電気系工学専攻）
指紋認証時に脈拍数を同時計測する手法の短時間化とその評価

佐藤 安理紗 ジエンジエラ（工学系研究科電気系工学専攻）
Design Implications for Plagiarism Detection Systems with Real-time Feedback in Academic Writing for Non-Native Speakers
（英語非母語話者のアカデミック・ライティングにおいてリアルタイムに剽窃疑いを提示するインタフェースの設計指針）

正木 博明（学際情報学府先端表現情報学コース）**学際情報学府優秀修士論文 専攻長賞受賞**
A Study on Designs of Privacy/Safety-related Nudges for Adolescent SNS Users
（若年層SNSユーザに対するプライバシー・安全に関するナッジデザインの検証）

松井 秀憲（学際情報学府先端表現情報学コース）
GitHub上のコード変更を利用したプログラミング演習問題の実用性の評価

#### 2018年度

柴藤大介（工学系研究科電気系工学専攻）
GitHub上のコード変更を利用したプログラミング演習問題システムの研究

#### 2017年度

下尾波輝（工学系研究科電気系工学専攻）
音響的特徴量を用いたエレキギターの演奏評価手法

橋爪崇弘（工学系研究科電気系工学専攻）**電気系工学専攻 専攻長賞受賞**
Opportunistic Photoplethysmography in Mobile Fingerprint Authentication
(モバイルデバイスでの指紋認証時に 指尖容積脈波を同時に取得する手法の研究)

吉谷拓真（工学系研究科電気系工学専攻）
Quantitative Investigations on Icon Subjective Attributes and Visual Features
(アイコンの主観的属性と視覚的特徴量の定量的分析)

#### 2016年度

有賀　竣哉（工学系研究科電気系工学専攻）
An Interactive System for Guitar Chord Practice with a Data-driven Approach
(データドリブンな手法を用いたインタラクティブなギターコード練習システム)

岩下　知美（工学系研究科電気系工学専攻）
インフォグラフィックス制作支援システムの 開発と評価

## 卒業論文(graduation thesis)

#### 2024年度

伊東 大燿
モジュール性の高いツールキットを用いたハードウェアプロトタイピングにおける初学者の課題の理解

風澤 宥吾
薬物依存症治療におけるグループ動機づけ面接のファシリテーショントレーニング支援システム

#### 2023年度

梅田 悠哉
A System for Supporting Cognitive Reframing Using a Large Language Model
（大規模言語モデルを活用した認知再構成法支援システム）

中野 博貴
An Investigation on User Preference of Visual Feedback Designs for Expressive Writing
(筆記開示に伴う視覚的フィードバックデザインのユーザ嗜好に関する調査)

平林 晴馬
情報可視化システムの開発における対話型AIの利用方法の調査

#### 2022年度

香取 浩紀
アルゴリズムとデータ構造に関するコードデータのアノテーションとその分析

澤野 令
発声支援デバイスの制御を目的とした手のジェスチャに関する社会的受容性の調査

乘濵 駿平
Investigating Chatbot Design for Interactive Stress Management
（対話形式でのストレス管理に向けたチャットボットの設計に関する研究）

宮崎 翔
プッシュ通知インタフェースの誘目度と干渉度のモデル化

#### 2021年度

下島 銀士
擦式手指消毒における消毒液の塗布位置・量による影響の定量的評価

桝田 拓磨
非熟練ユーザ向け光電子分光計測・解析支援システム

山田 崇晴
持ち上げ動作時のパワーポジション習得支援モバイルシステムの検討

吉川 諒
Integrating Online Safety Microlearning into Human Verification
（インターネットの適切な利用に関するマイクロ ラーニングを組み込んだボット判別テストシステム）

#### 2020年度

片山 育星
定性的調査によるリモート音楽活動支援システムの検討

篠田 和宏 **学科長特別賞・優秀卒業論文賞受賞**
A Deformable Handkerchief Interface Using Conductive Yarn
（導電糸を用いた変形可能なハンカチ型インターフェース）

鈴木 凌斗
A Code Similarity Analysis Method Using Variable Behavior and its Applications
（変数の振る舞いに着目したコードの類似性分析手法とその応用）

富木 菜穂
アマチュアオーケストラのコンサートプログラム構成支援システムの研究

吉田 慎一朗
個人の嗜好に合わせた野球ハイライト映像に対するナレーション自動生成手法

#### 2019年度

伊藤 歩桂
女子生徒のプログラミング学習意欲の向上を促す指導法に関する研究

チェ シウク **優秀卒業論文賞受賞**
A study on vision-based approaches for eye dryness detection during computer use
（コンピュータ使用時における目の乾燥状態を検知する画像認識手法の研究）

坪内 優樹
個人の嗜好に合わせた野球ハイライト映像生成に向けたシーン抽出手法の検討

幡井 皓介
ペアレンタルコントロールサービスに関するインタフェース改善点の検討

林 裕嵩
生体情報の共有がチャットコミュニケーションにもたらす影響の比較評価

#### 2018年度

嶋田 紅緒
視覚が不自由なユーザ向けのProxemic Interactionを用いたファッション購買支援システム

杉山 悠司
商品棚前における非計画購買者の行動特徴量の検討

竹ノ内 朝陽
風を用いたインタフェース実現に向けた風の変化の感知に関する定量的調査

宗像 佑弥
虚偽の生体情報提示を用いた集中度制御に関する定量的調査

チョン ロン ヒン
Investigating feedback modality effect for body language suggestions during presentation delivery
(プレゼンテーション中におけるボディランゲージ提示手法の比較検討)

#### 2017年度

坂口 達彦
回路図の画像認識を用いたブレッドボード向け実体配線図の自動生成システム

鈴木 拓馬
スマートフォン向け覗き見防止インタフェースの比較検討

畑田 裕二
SNS上でのつながりに起因する意図しない個人情報流出の可能性の分析

正木 博明
病気診断モバイルアプリに向けた爪画像データ収集機構の構築

松井 秀憲
A Smart Ice Cube with Beverage Alcohol Concentration Sensing
(飲料のアルコール濃度計測を行う氷型スマートデバイス)

三島 潤平
GitHub上のコード変更と開発履歴に関するデータセットの構築

#### 2016年度

青木 優
少人数グループでの撮影行動データを利用した共有アルバム内写真の重要度決定手法に関する考察

有薗 拓也
液体を用いた重量移動可能な筋力トレーニング運動ゲーム向けデバイスの研究

柴藤 大介 **優秀卒業論文賞受賞**
Interactive Piece-level Code Examination Using Diffs and Review Comments
(差分とレビューコメントを用いたソースコードのインタラクティブな局所的調査手法)

中沢 弘樹
Investigating Accented English Speech Intelligibility for Non-native Speakers
(非英語話者を想定したアクセント付き英語発話の音声明瞭度に関する検討)

野上 和加奈
掛軸画像データセットの作成とその毛筆文字の視覚的特徴量の検討

宮崎 章太
車椅子アクセシビリティ推定のための飲食店外観写真における視覚的特徴量の調査

#### 2015年度

稲田 弥鶴
ブレインストーミング支援システムにおけるアイディア候補の順位付け手法の比較検討

大坪 篤史
大規模なイベント向けソーシャルカメラアプリとハイライト動画作成システムの構築

下尾 波輝
ビジネス資料作成を支援する情報収集・整理システムの構築と評価

長谷川 健太
ソーシャルな運動アプリにおける歩行情報のフィードバック手法の比較検討

吉谷 拓真
Designing a Toothbrush with Plaque Detection and Brushing Performance Feedback
(歯垢検知と歯磨きの状態を知らせる機構を組み入れた歯ブラシの製作)

---
## Publication before IIS Lab started / IIS Lab以前の発表文献

## Journals

* Nikola Banovi, Koji Yatani, and Khai N. Truong. "Escape-Keyboard: A Sight-free One-handed Text Entry Method for Mobile Touch-screen Devices" _International Journal of Mobile Human Computer Interaction_, Vol. 5, No. 3, pp. 42 — 61, 2013. [paper](/paper/IJMHCI2013.pdf)
* Koji Yatani, and Khai N. Truong. "An Evaluation of Stylus-based Text Entry Methods on Handheld Devices Studied in Different Mobility States" _Pervasive and Mobile Computing_, Vol. 5, No. 5, pp. 496 — 506, October 2009. [paper](/paper/PMC2009.pdf)
* Elaine M. Huang, Koji Yatani, Khai N. Truong, Julie A. Kientz and Shwetak N. Patel."Understanding Mobile Phone Situated Sustainability: The Influence of Local Constraints and Practices on Transferability" _IEEE Pervasive Computing_, Vol. 8, No. 1, pp. 46 — 53, January 2009. [paper](/paper/IEEEPervasive2009.pdf)
* Koji Yatani, Koiti Tamura, Keiichi Hiroki, Masanori Sugimoto and Hiromichi Hashizume."Toss-It: Intuitive Information Transfer Techniques for Mobile Devices Using Toss and Swing Actions" _IEICE Transactions on Systems and Computers_, Vol. E89-D, No. 1, pp. 150 — 157, January 2006. [paper](/paper/IEICETrans2006.pdf)
* Koji Yatani, Mayumi Onuma, Masanori Sugimoto, and Fusako Kusunoki. "Musex: A System for Supporting Children's Collaborative Learning in a Museum with PDAs" _Systems and Computers in Japan_, Vol. 35, No. 14, pp. 54 — 63, December 2004.
* 矢谷 浩司, 大沼 真弓, 杉本 雅則, 楠 房子. "Musex: 博物館におけるPDAを用いた協調学習支援システム" 電子情報通信学会論文誌, Vol. 86 D-I, No. 10, pp. 773 — 782, October 2003. [paper](/paper/IEICETrans2003.pdf)

## Conference full papers (peer-reviewed)

* Ha Trinh, Koji Yatani, and Darren Edge. "PitchPerfect: Integrated Rehearsal Environment for Structured Presentation Preparation" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2014)_, pp. 1571 — 1580, April 2014. **Honorable Mention Award** **winner **[paper](/paper/CHI2014_PitchPerfect.pdf)
* Uichin Lee, Joonwon Lee, Minsam Ko, Changhun Lee, Yuhwan Kim, Subin Yang, Koji Yatani, Gahgene Gweon, Kyong-Mee Chung, and Junehwa Song. "Hooked on Smartphones: An Exploratory Study on Smartphone Overuse among College Students" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2014)_, pp. 2327 — 2336, April 2014. [paper](/paper/CHI2014_MobileOveruse.pdf)
* Darren Edge, Joan M. Savage, and Koji Yatani. "HyperSlides: Dynamic Presentation Prototyping" In_ Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2013)_, pp. 671 — 680, May 2013. [paper](/paper/CHI2013_HyperSlides.pdf)
* Koji Yatani, and Khai N. Truong. "BodyScope: A Wearable Acoustic Sensor for Activity Recognition" In _Proceedings of International Conference on Ubiquitous Computing (Ubicomp 2012)_, pp. 341 — 350, September 2012. [paper](/paper/Ubicomp2012.pdf)
* Koji Yatani, Nikola Banovic, and Khai. N Truong. "SpaceSense: Representing Geographical Information to Visually Impaired People Using Spatial Tactile Feedback" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2012)_, pp. 415 — 424, May 2012. [paper](/paper/CHI2012.pdf)
* Koji Yatani, Darren Gergle, and Khai N. Truong. "Investigating Effects of Visual and Tactile Feedback on Spatial Coordination in Collaborative Handheld Systems" In _Proceedings of the ACM Conference on Computer Supported Cooperative Work (CSCW 2012)_, pp. 661 — 670, February 2012. [paper](/paper/CSCW2012.pdf)
* Nikola Banovic, Frank Chun Yat Li, David Dearman, Koji Yatani, and Khai N. Truong."Design of Unimanual Multi-finger Pie Menu Interaction" In _Proceedings of the ACM Conference on Interactive Tabletops and Surfaces (ITS 2011)_, pp. 120 — 129, November 2011. [paper](/paper/ITS2011.pdf)
* Frank Chun Yat Li, Richard T. Guy, Koji Yatani, and Khai N. Truong. "The 1Line Keyboard: A QWERTY Layout in a Single Line" In _Proceedings of the ACM Symposium on User Interface Software and Technology (UIST 2011)_, pp. 461 — 470, October 2011. [paper](/paper/UIST2011.pdf)
* Koji Yatani, Michael Novati, Andrew Trusty, and Khai N. Truong. "Analysis of Adjective-noun Word Pair Extraction Methods for Online Review Summarization" In _Proceedings of the International Joint Conference on Artificial Intelligence (IJCAI 2011)_, pp. 2771 — 2776, July 2011. [paper](/paper/IJCAI2011.pdf)
* Koji Yatani, Michael Novati, Andrew Trusty, and Khai N. Truong. "Review Spotlight: A User Interface for Summarizing User-generated Reviews Using Adjective-Noun Word Pairs" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2011)_, pp. 1541 — 1550, April 2011. **Best Paper Award winner** [paper](/paper/CHI2011.pdf)**

**
* Ken Hinckley, Koji Yatani, Michel Pahud, Nicole Coddington, Jenny Rodenhouse, Andy Wilson, Hrvoje Benko, and Bill Buxton. "Pen + Touch = New Tools" In _Proceedings of the ACM Symposium on User Interface Software and Technology (UIST 2010)_, pp. 27 — 36, October 2010. [paper](/paper/UIST2010_penplustouch.pdf)
* Jeremy Scott, David Dearman, Koji Yatani, and Khai N. Truong. "Sensing Foot Gestures from the Pocket" In _Proceedings of the ACM Symposium on User Interface Software and Technology (UIST 2010)_, pp. 199 — 208, October 2010. [paper](/paper/UIST2010_footgesture.pdf)
* Eunyoung Chung, Carlos Jensen, Koji Yatani, Victor Kuechler, and Khai N. Truong."Sketching and Drawing in the Design of Open Source Software" In _Proceedings of the IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC 2010)_, pp. 195 — 202, September 2010. [paper](/paper/VLHCC2010.pdf)
* Koji Yatani, and Khai N. Truong. "SemFeel: A User Interface with Semantic Tactile Feedback for Mobile Touch-screen Devices" In _Proceedings of the ACM Symposium on User Interface Software and Technology (UIST 2009)_, pp. 111 — 120, October 2009. [paper](/paper/UIST2009.pdf)
* Koji Yatani, Eunyoung Chung, Carlos Jensen and Khai N. Truong. "Understanding How and Why Open Source Contributors Use Diagrams in the Development of Ubuntu" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2009)_, pp. 995 — 1004, April 2009. [paper](/paper/CHI2009.pdf)
* Koji Yatani, Kurt Partridge, Marshall Bern and Mark W. Newman. "Escape: A Target Selection Technique Using Visually-cued Gestures" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)_, pp. 285 — 294, April 2008. [paper](/paper/CHI2008.pdf)
* Koji Yatani and Khai N. Truong. "An Evaluation of Stylus-based Text Entry Methods on Handheld Devices in Stationary and Mobile Scenarios" In _Proceedings of the ACM SIGCHI International Conference on Human Computer Interaction with Mobile Devices & Services (MobileHCI 2007)_, pp. 145 — 152, September 2007. [paper](/paper/MobileHCI2007.pdf)
* Hiromichi Hashizume, Ayumu Kaneko, Yusuke Sugano, Koji Yatani and Masanori Sugimoto. "Fast and Accurate Positioning Technique Using Ultrasonic Phase Accordance Method" In _Proceedings of the IEEE Region 10 Conference (TenCon 2005)_, pp. 826 — 831, November 2005. [paper](/paper/TenCon2005.pdf)
* Fusako Kusunoki, Takako Yamaguti, Takuichi Nishimura, Koji Yatani and Masanori Sugimoto. "Interactive and Enjoyable Interface in Museum" In _Proceedings of the ACM SIGCHI International Conference on Advances in Computer Entertainment Technology (ACE 2005)_, pp. 1 — 8, June 2005. [paper](/paper/ACE2005.pdf)
* 矢谷 浩司, 田村 晃一, 廣木 桂一, 杉本 雅則, 橋爪 宏達. "Toss-It: モバイルデバイスにおける「トス」や「振り」の動作を用いた情報の移動を直感的に実現するインタフェース技術" インタラクション2005, pp. 151 — 158, February 2005. [paper](/paper/interaction2005.pdf)
* Koji Yatani, Koiti Tamura, Masanori Sugimoto, and Hiromichi Hashizume. "Information Transfer Techniques for Mobile Devices by Toss and Swing Actions" In _Proceedings of the Sixth IEEE Workshop on Mobile Computing Systems and Applications (WMSCA 2004)_, pp. 144 — 151, December 2004. [paper](/paper/WMCSA2004.pdf)

## Short papers and tech notes (peer-reviewed)

* Larissa Pschetz, Koji Yatani, and Darren Edge. "TurningPoint: Narrative-Driven Presentation Planning" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2014)_, pp. 1591 — 1594, April 2014. **Honorable Mention Award winner **[paper](/paper/CHI2014_TurningPoint.pdf)
* Yefeng Liu, Darren Edge, and Koji Yatani. "SidePoint: A Peripheral Knowledge Panel for Presentation Slide Authoring" In _Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2013)_, pp. 681 — 684, May 2013. [paper](/paper/CHI2013_SidePoint.pdf)
* Claire L. Barco, Koji Yatani, Yuanye Ma, Candra K. Gill, and Joyojeet Pal. "Information Management and Communication for Dementia: Preliminary Research from China" In _Proceedings of iConference 2013_, pp. 571 — 575, February 2013. [paper](/paper/iConference2013.pdf)
* Koji Yatani, Masanori Sugimoto, and Fusako Kusunoki. "Musex: A System for Supporting Children's Collaborative Learning in a Museum with PDAs" In _Proceedings of the Second IEEE Workshop on Wireless and Mobile Technology in Education (WMTE 2004)_, pp. 109 — 113, March 2004. [paper](/paper/WMTE2004.pdf)

## Work-in-progress

* Ken Hinckley, Koji Yatani, Michel Pahud, Nicole Coddington, Jenny Rodenhouse, Andy Wilson, Hrvoje Benko, and Bill Buxton. "Manual Deskterity : An Exploration of Simultaneous Pen + Touch Direct Input" In _Extended Abstracts of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2010)_, pp. 2793 — 2802, April 2010.
* Koji Yatani. "Towards Designing User Interfaces on Mobile Touch-screen Devices for People with Visual Impairment" In _Extended Abstract of the ACM Symposium on User Interface Software and Technology (UIST 2009)_, pp. 37 — 40, October 2009.
* Koji Yatani, Masanori Sugimoto and Hiromichi Hashizume. "A Multiplayer Whack-A-Mole Game Using Gestural Input in a Location-Sensitive and Immersive Environment" In_ Extended Abstracts of International Conference on Entertainment Computing (ICEC 2005)_, pp. 9 — 12, September 2005.
* Koji Yatani, Masanori Sugimoto and Hiromichi Hashizume. "ARHunter: A Multiplayer Game Using Gestural Input in a Location-Sensitive and Immersive Environment" In _Workshop on Ubiquitous Computing, Entertainment and Games in the Seventh International Conference on Ubiquitous Computing (Ubicomp 2005) _, September 2005.
* Koji Yatani, Koiti Tamura, Keiichi Hiroki, Masanori Sugimoto, and Hiromichi Hashizume."Toss-It: Intuitive Information Transfer Techniques for Mobile Devices" In _Extended Abstracts of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2005)_, pp. 1881 — 1884, April 2005.
* 廣木 桂一, 矢谷 浩司, 杉本 雅則. "モバイルデバイスの表裏両面からの操作を連携させることによる効率的な入力手法" インタラクション2005, pp. 61 — 62, February 2005.
* 矢谷 浩司, 岸村 俊哉, 田村 晃一, 杉本 雅則, 橋爪 宏達. "モバイルデバイスを用いた「振る」ことによる情報の移動を実現するインタフェース" インタラクション2004, pp. 229 — 230, March 2004.

## 国内研究会・デモ発表等

* 矢谷 浩司, 杉本 雅則, 橋爪 宏達. "ARHunter: ジェスチャによる入力と位置認識技術を組み合わせた没入型マルチプレイヤゲーム環境" 情報処理学会エンタテインメントコンピューティング研究会 第2回研究発表会, pp. 55 — 62, December 2005.
* 菅野 裕介, 金子 歩, 矢谷 浩司, 杉本 雅則, 橋爪 宏達. "超音波センサを用いた相対位置認識技術における通信及び測距技術" 情報処理学会第67回全国大会, pp. 3-761 — 3-762, March 2005.
* 金子 歩, 菅野 裕介, 矢谷 浩司, 杉本 雅則, 橋爪 宏達. "超音波センサを用いた相対位置認識デバイスの設計" 情報処理学会第67回全国大会, pp. 3-759 — 3-760, March 2005.
* 山口 尚子, 楠 房子, 矢谷 浩司, 杉本 雅則. "Wpalette（ワットパレット） – 博物館において一緒に経験を高めるツール" インタラクティブシステムとソフトウェアに関するワークショップ(WISS), December 2004.
* 矢谷 浩司, 田村 晃一, 杉本 雅則, 橋爪 宏達. "ユーザの位置、方向、ジェスチャを認識することによるモバイルデバイスのための情報移動手法" ヒューマンインタフェース学会研究会 vol. 6 No. 4, pp. 31 — 36, November 2004.
* 楠 房子, 山口 尚子, 矢谷 浩司, 杉本 雅則. "Pi_book – 博物館での体験を高めるツールのデザイン" 教育システム情報学会 TD-3, August 2004.
* 矢谷 浩司, 岸村 俊哉, 田村 晃一, 杉本 雅則, 橋爪 宏達. "Toss-It: モバイルデバイスにおける情報の移動を直感的に実現するインタフェース" 電子情報通信学会 技術研究報告 vol. 104 No. 169, pp. 19 — 24, July 2004.
* 岸村 俊哉, 田村 晃一, 矢谷 浩司, 杉本 雅則, 橋爪 宏達. "人間の自然なジェスチャを利用した実世界指向端末" 情報処理学会第66回全国大会, pp. 4-251 — 4-252, March 2004.
* 田村 晃一, 岸村 俊哉, 矢谷 浩司, 杉本 雅則, 橋爪 宏達. "複数センサを用いることによるジェスチャ入力可能な携帯情報端末の設計" In 情報処理学会第66回全国大会, pp. 4-253 — 4-254, March 2004.
* 矢谷 浩司, 杉本 雅則, 楠 房子. "博物館におけるPDAを用いた協調学習支援システム" 第27回日本科学教育学会 2B4-16, July 2003.
* 楠 房子, 矢谷 浩司, 石川 葵, 石山 琢子,山口 尚子, 杉本 雅則. "博物館における展示支援Pibook" 電子情報通信学会技術研究報告 ヒューマン情報処理, 103(166), pp. 11 — 15, July 2003.
* 楠 房子, 矢谷 浩司, 石川 葵, 石山 琢子, 山口 尚子, 西村 拓一, 杉本 雅則. "イベント空間におけるエデュテイメントを実現する情報支援" 第17回人工知能学会全国大会 3E1-06, June 2003.
* 矢谷 浩司, 大沼 真弓, 服部 亜珠沙, 杉本 雅則, 楠 房子. "Musex 2: 博物館におけるPDAを用いた協調学習支援" 情報処理学会第65回全国大会, pp. 4-377 — 4-378, March 2003. ** 学生奨励賞受賞**
* 矢谷 浩司, 石川 葵, 石山 琢子, 山口 尚子, 西村 拓一, 杉本 雅則, 楠 房子. "Pi_book: 博物館における展示支援ツール" インタラクション2003, pp. 51 — 52, February 2003.
* 服部 亜珠沙, 矢谷 浩司, 杉本 雅則, 楠 房子. "ボードゲームを用いた博物館における学習支援" エンタテイメントコンピューティング, January 2003.
* 矢谷 浩司, 大沼 真弓, 服部 亜珠沙, 杉本 雅則, 楠 房子. "Musex : 博物館におけるPDAを用いた協調学習支援" 情報処理学会 ヒューマンインターフェース研究会 2002-HI-101-2, pp. 9 — 16, November 2002.
`,Gi=new Set([`Recent Posts`,`Categories`]);function Ki(e){let t=[],n=e.split(/\n(?=## )/);for(let e of n){let n=e.trim();if(!n||n===`##`)continue;let r=n.split(`
`),i=r[0].replace(/^##\s*/,``).trim();if(!i||Gi.has(i))continue;let a={title:i,blocks:[]},o=null,s=null,c=()=>{o&&o.items.length>0&&a.blocks.push({type:`year-list`,...o}),o=null},l=()=>{s&&s.lines.length>0&&a.blocks.push({type:`thesis-year`,...s}),s=null};for(let e=1;e<r.length;e++){let t=r[e],n=t.match(/^#####\s+(.+)$/),i=t.match(/^####\s+(.+)$/);if(n){l(),c(),o={year:n[1].trim(),items:[]};continue}if(i){c(),l(),s={year:i[1].trim(),lines:[]};continue}if(t.match(/^---\s*$/)||t.match(/^##\s*$/))continue;let u=t.match(/^\*\s+(.+)$/);if(u){l(),o||={year:``,items:[]},o.items.push(u[1].trim());continue}let d=t.trim();if(!d)continue;let f=d.replace(/^<(.+)>$/,`$1`).trim();if(/^https?:\/\//.test(f)&&(l(),o&&o.items.length>0)){let e=o.items.length-1;o.items[e]+=` [${f}](${f})`;continue}if(s){s.lines.push(d);continue}o&&c(),a.blocks.push({type:`paragraph`,text:d})}c(),l(),t.push(a)}return t.filter(e=>e.title&&e.blocks.length>0)}function qi(){let e=(0,x.useMemo)(()=>Ki(Wi),[]);return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:N.pageTitle,children:`Publications`}),(0,k.jsx)(Hi,{sections:e})]})}var Ji=`---
slug: al-light
titleEn: "Al-light: An Alcohol-Sensing Smart Ice Cube"
titleJa: ""
thumb: /images/research/thumbs/al-light.png
---

![](/images/research/content/al-light/IPSJ_zenkoku_matsui_pic.png)
<!-- width: 600 height: 406 -->

Inappropriate alcohol drinking may cause health and social problems. Although controlling the intake of alcohol is effective to solve the problem, it is laborious to track consumption manually. A system that automatically records the amount of alcohol consumption has a potential to improve behavior in drinking activities. Existing devices and systems support drinking activity detection and liquid intake estimation, but our target scenario requires the capability of determining the alcohol concentration of a beverage. We present Al-light, a smart ice cube to detect the alcohol concentration level of a beverage using an optical method. Al-light is the size of 31.9 x 38.6 x 52.6 mm and users can simply put it into a beverage for estimation. It embeds near infrared (1450 nm) and visible LEDs, and measures the magnitude of light absorption. Our device design integrates prior technology in a patent which exploits different light absorption properties between water and ethanol to determine alcohol concentration. Through our revisitation studies, we found that light at the wavelength of 1450 nm has strong distinguishability even with different types of commercially-available beverages. Our quantitative examinations on alcohol concentration estimation revealed that Al-light was able to achieve the estimation accuracy of approximately 2 % v/v with 13 commercially-available beverages. Although our current approach needs a regressor to be trained for a particular ambient light condition or the sensor to be calibrated using measurements with water, it does not require beverage-dependent models unlike prior work. We then discuss four applications our current prototype supports and future research directions.

過度な飲酒は， 健康面や社会的な面で様々な問題を引き起こし得る．アルコール摂取量を自動的に計測し，ユーザの飲酒を定量的に管理することが可能となれば，これらの問題の予防に貢献できる．しかしながら，アルコール摂取量を計測する上で知る必要があるアルコール濃度について，これを手軽に計測するスマートデバイスは知られていない．そこで我々は，近赤外・可視光LED と光検出器を搭載し，水とアルコールの光吸収特性を利用してアルコール濃度計測を行うスマートアイスキューブを提案する．本研究で作成したプロトタイプは3 x 4 x 5 cm の直方体であり，ユーザがこのデバイスをグラスの中に入れるだけで，通常の飲酒行為を妨げることなく濃度計測が行われる．本稿では，プロトタイプを用いて市販のアルコール飲料のアルコール濃度を計測した実験結果を報告し，実現されるアプリケーションについて議論する．

Hidenori Matsui, Takahiro Hashizume, and Koji Yatani. Al-light: An Alcohol-Sensing Smart Ice Cube.\xA0_Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (PACM IMWUT)_ 2, 3, Article 126 (September 2018), 20 pages. [(paper)](/paper/IMWUT_al-light.pdf) [(video)](https://youtu.be/hElzdnnT5VM)

松井秀憲，橋爪崇弘，矢谷浩司．「飲料のアルコール濃度計測を行うスマートアイスキューブの試作と評価」第58回情報処理学会UBI研究会，2018年5月．**優秀論文賞受賞．**[(paper)](/paper/IPSJUBI-201805.pdf)

松井秀憲，橋爪崇弘，矢谷浩司．「氷型スマートデバイス向け光学的アルコール濃度推定手法の調査」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[(paper)](/paper/IPSJ2018_icecube.pdf)

テレビ東京 ワールドビジネスサテライト トレンドたまご(8/2放送分)．

[http://www.tv-tokyo.co.jp/mv/wbs/trend_tamago/post_160082/](http://www.tv-tokyo.co.jp/mv/wbs/trend_tamago/post_160082/)

[http://www.tv-tokyo.co.jp/plus/smp/business/entry/2018/017664.html](http://www.tv-tokyo.co.jp/plus/smp/business/entry/2018/017664.html)
`,Yi=`---
slug: alter-ego-interview
titleEn: AIセルフクローンを用いた面接時の回答改善支援手法の検討
titleJa: ""
thumb: /images/research/thumbs/alter-ego-interview.png
---

![](/images/research/content/alter-ego-interview/alter-ego-interview-1024x655.png)
<!-- width: 790 height: 505 -->

情報処理技術を活用した多くの面接支援システムは，模擬面接を通してユーザーの姿勢や発話を分析し，フィードバックを生成する．しかし，それらはあくまで第三者的視点からのアドバイスであり，ユーザーは改善の目標となる理想的な自己のパフォーマンスを直接観察することができない．この課題に対して，ユーザーの背景情報を学習し，ユーザーのように振る舞うLLM 駆動の「AI セルフクローン」を用いた面接支援システムを提案する．本システムではユーザーのAI セルフクローンを模擬面接に参加させ，ユーザーの文脈で質問に回答させるシミュレーションを行う．AI セルフクローンは面接において理想とされる振る舞いを行うように調整されており，ユーザーはその振る舞いを参照することで自己の理想的なパフォーマンスを観察し，それを目標として改善の方向性を明確にすることができる．本研究では改善の対象を発話内容に限定し，就職活動を控える，もしくは直近に経験した成人を対象とした実験を行った．結果，ユーザーはAI セルフクローンの発言を利用して自己の発話内容を改善できただけでなく，過去の体験を思い出し，新たな視点から経験を語るなどの効果が確認された．

山中 駿, 中野 博貴, 矢谷 浩司．AIセルフクローンを用いた面接時の回答改善支援手法の検討．情報処理学会HCI研究会，2025年11月．[(paper)](/wp-content/uploads/2026/03/IPSJHCI-202511_Yamanaka.pdf)
`,Xi=`---
slug: auth-n-scan
titleEn: "Auth 'n' Scan: Opportunistic Photoplethysmography in Mobile Fingerprint Authentication"
titleJa: ""
thumb: /images/research/thumbs/auth-n-scan.png
---

![](/images/research/content/auth-n-scan/auth_n_scan-1024x897.png)
<!-- width: 604 height: 529 -->

Recent commodity smartphones have biometric sensing capabilities, allowing their daily use for authentication and identification. This increasing use of biometric systems motivates us to design an opportunistic way to sense user’s additional physiological or behavioral data. We define this concurrent physiological or behavioral data sensing during biometric authentication or identification as dual-purpose biometrics. As an instance of dual-purpose biometrics, we develop photoplethysmography (PPG) sensing during mobile fingerprint authentication, called Auth ‘n’ Scan. Our system opportunistically extracts cardiovascular information, such as a heart rate and its variability, while users perform phone unlock of a smartphone. To achieve this sensing, our Auth ‘n’ Scan system attaches four PPG units around a fingerprint sensor. The system also performs noise removal and signal selection to accurately estimate cardiovascular information. This paper presents the hardware implementation and signal processing algorithm of our Auth ‘n’ Scan prototype. We also report our system evaluations with 10 participants, showing that, despite a little low precision (a standard deviation of 3–7), estimation of heart rates with high accuracy (under a mean error of 1) is possible from PPG data of five seconds and longer if their baseline information is given. We discuss the feasibility of opportunistic PPG sensing in mobile fingerprint authentication.

スマートデバイスの普及により生体認証は日常的に使用できる技術となっている．生体認証においては認証に必要な情報だけではなく，ユーザの健康に関する情報も同時に取得できる可能性がある．これを実現することにより，例えばユーザは携帯電話をアンロックする際に自身の健康情報を同時に記録することが可能となり，ライフログなどのアプリケーションに活用できる．我々は，このようなシステムをDual-purpose biometrics と呼んでいる．本論文では，Dual-purpose biometrics の一例として，指紋認証と同時に指尖容積脈波を取得するシステムを提案し，その試作と評価を行った．予備実験の結果，指の中心部だけでなく周辺部において，脈拍と呼吸数を指紋認証時に取得できることがわかった．この実験結果から，指尖容積脈波を同時に取得する指紋認証システム実現可能性と有用性の高いアプリケーションを議論する．

Takahiro Hashizume, Takuya Arizono, and Koji Yatani. 2018. Auth ‘n’ Scan: Opportunistic Photoplethysmography in Mobile Fingerprint Authentication.\xA0_Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (PACM IMWUT)_\xA01, 4, Article 137 (January 2018), 27 pages.\xA0(paper) [(video)](https://youtu.be/Nj8lek9KP4M)

橋爪崇弘，矢谷浩司．「指尖容積脈波を同時に取得する指紋認証システムの試作と評価」第53回報処理学会UBI研究会，2017年3月．[(paper)](/paper/IPSJUBI-201703_hashizume.pdf) **優秀論文賞受賞．**
`,Zi=`---
slug: autocomplete-animations
titleEn: Autocomplete Hand-drawn Animations
titleJa: ""
thumb: /images/research/thumbs/autocomplete-animations.png
---

![](/images/research/content/autocomplete-animations/autocomplete.png)
<!-- width: 500 height: 437 -->

Hand-drawn animation is a major art form and communication edium, but can be challenging to produce. We present a system to help people create frame-by-frame animations through hand-drawn sketches. We design our interface to be minimalistic; it contains only a canvas for sketches and a few controls. When users are drawing on the canvas, our system silently analyzes all past sketches and predicts what might be drawn in the future across both spatial locations and temporal frames. The interface also offers users suggestions to beautify existing drawings. These predictions and suggestions greatly reduce the workload on creating multiple frames for animation and also help to create desirable results. Users can accept, ignore, or modify such predictions visualized on the canvas by simple gestures. Our method considers both high level structures and low level repetitions, and can significantly reduce manual workload while help produce better results. We evaluate our system through a preliminary user study and confirm that it can enhance both users’ objective performance and subjective satisfaction.

手書きアニメーションは主要な芸術形態であり，コミュニケーションメディアである．しかしながら，アニメーション制作はとても難しく時間がかかる作業である．我々はフレームごとに手書きスケッチによって描かれるアニメーションの作成を支援するシステムを提案する．システムインターフェースは機能が最小になるように設計されており，スケッチのためのキャンバスと調整機能のみを備えている．ユーザがキャンバス上にスケッチを描いている間に，システムは過去の全てのスケッチを分析し，次のフレームでどのような絵がどこに描かれるのかを予測する．また，システムはユーザが描いた絵がより美しくするためのサジェスト機能も行う．これらの予測とサジェストによって，アニメーションに必要な複数のフレームの絵を描く作業負荷を大幅に削減し，ユーザの思い描いたアニメーションを作り出すのに役に立つ．予備的なユーザースタディの結果，我々のシステムは，ユーザの客観的なパフォーマンスと主観的な満足度の両方を高められたことがわかった．

J. Xing, L.-Y. Wei, T. Shiratori, and K. Yatani. “Autocomplete Hand-drawn Animations,” in Proceedings of SIGGRAPH Asia 2015, 2015.

[(paper)](/paper/SA2015.pdf)
`,Qi=`---
slug: chatbot_input
titleEn: 対話形式でのストレス管理に向けた チャットボットにおける入力方法の評価
titleJa: ""
thumb: /images/research/thumbs/chatbot_input.png
---

![](/images/research/content/chatbot_input/norihama_project_visual-1024x658.png)
<!-- width: 790 height: 508 -->

現代社会において多くの人が抱えるとされているストレスは，蓄積してしまうと様々な悪影響をもたらすため，こまめに発散することが重要である．そのためストレスの発散を支援するデジタルアプリケーションが研究・開発されてきているが，ストレスの有効な発散方法とされている感情の表出に着目したものは少ない．そこで本研究では，ストレスから生じる感情を表出し発散することのできるチャットボットシステムの設計を行った．このチャットボットでは，ストレスに感じた出来事とそれにまつわる感情をテキスト入力か音声入力により表出することで，ストレスを管理する事ができる．入力方法による違いを検証するため，2 週間にわたり28 名の参加者に実際にシステムを利用してもらう実験を実施し，ストレスの発散効果にどのような違いが出るのかについて分析を行った．結果として，ストレス管理のためのチャットボットにおいてはテキスト入力がより好まれ，それぞれの入力方法の利点と欠点が明らかになった．今後の研究においては感情の表出によるストレスの解消を支援する追加の機能の開発と，様々な入力方法が与える影響についてのさらなる検証が必要である．

乘濵 駿平，宮崎 翔，耿 世嫻，下島 銀士，佐藤 安理紗 ジエンジエラ，ホシオ シモ，矢谷 浩司．対話形式でのストレス管理に向けた チャットボットにおける入力方法の評価．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Norihama.pdf)
`,$i=`---
slug: circuitgeneration
titleEn: 回路図の画像認識を用いたブレッドボード向け実体配線図の自動生成手法に関する検討
titleJa: ""
thumb: /images/research/thumbs/circuitgeneration.png
---

![](/images/research/content/circuitgeneration/sakaguchi_image-1024x768.png)
<!-- width: 604 height: 453 -->

電子回路の学習において実際に回路を組み立てて実験することは，理論と実際の性質の違いを学ぶための良い演習である．教科書には多くの回路例が掲載されているが，回路図から実体配線を行う過程は時間がかかり，かつ誤配線が起きやすいため，電子回路実験を行う障壁となっている．そこで本研究では，これらの障壁を取り除くため，回路図を撮影した画像からブレッドボード向けの実体配線図を生成するシステムを構築する．本システムでは初学者でも誤配線なく実験を行えるよう，ユーザにとって組みやすい実体配線図の生成を試みる．本稿ではシステムを構築するために行なった予備実験と，現在までの進捗について報告する．

坂口達彦，矢谷浩司．「回路図の画像認識を用いたブレッドボード向け実体配線図の自動生成手法に関する検討」第80回情報処理学会全国大会，2018年3月．[(paper)](/paper/IPSJ2018_icon.pdf)
`,ea=`---
slug: cloth_deformation
titleEn: 導電糸刺繍の設計パラメータの違いによる抵抗値変化を活用した布変形検出手法
titleJa: ""
thumb: /images/research/thumbs/cloth_deformation.png
---

![](/images/research/content/cloth_deformation/DICOMO2023_Shinoda-1024x1024.png)
<!-- width: 790 height: 790 -->

スマートテキスタイル技術によってセンサを作成する上で，コンピューター制御による刺繍ミシンにより糸密度やピッチなどの設計パラメータを調整することで，導電糸刺繍の抵抗値を制御できることが明らかになっている． そこで本研究では，刺繍の設計パラメータの違いによる抵抗値変化を活用した，布の変形を検出する手法を提案する． これまで，布の柔軟性を活かし，つまむ・折る・曲げるなどの変形検出手法が提案されているが，これらの先行研究は布とセンサ回路基板との接続数の増大などハードウェアの複雑化による耐久性の低下が課題になっている． 本研究では，電極形状ではなく刺繍の設計パラメータの変化により所望の電気的特性を実現することで，布とセンサとの接続数を減らした簡略なハードウェアによる変形の検出を目指す． また，タタミ縫いにおける刺繍の等価抵抗回路モデルの構築により，センサの検出精度向上に役立てる．

篠田 和宏，矢谷 浩司．導電糸刺繍の設計パラメータの違いによる抵抗値変化を活用した布変形検出手法．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Shinoda.pdf)
`,ta=`---
slug: code-analysis
titleEn: 変数の値の変化を利用したソースコード分析手法の提案
titleJa: ""
thumb: /images/research/thumbs/code-analysis.png
---

![](/images/research/content/code-analysis/3e7963b81331235f080b7ccac88fc1cd-1024x603.png)
<!-- width: 604 height: 356 -->

ソースコードの類似性分析は，コードクローン・盗用の検出やソースコードの分類といった応用のために重要である．既存研究では，ソースコードを木構造で表現したものの類似性や文字列としての類似性を評価するなどプログラムの構造に注目した分析が多く，ソースコードを1 行変更しただけでプログラムの動作が大きく変わる場合であっても構造的な変化は小さいため類似度を過大評価してしまうといったように，処理の類似性を検出することが難しい．本研究では，変数の値の変化を利用した類似度を定義し，その類似度に基づいてソースコードをクラスタリングするプログラムを実装した．さらに予備的な実験としてオンラインジャッジシステム(プログラム問題を自動採点するシステム) に提出されたソースコードに対してクラスタリングを行い，処理の類似性を検出できる可能性がわかった．

鈴木\xA0凌斗，矢谷 浩司． 「変数の値の変化を利用したソースコード分析手法の提案」 ヒューマンインタフェースサイバーコロキウム2020．2020年10月．[(paper)](/wp-content/uploads/2020/12/HIS2020_suzuki.pdf)
`,na=`---
slug: code_annotation
titleEn: アルゴリズムとデータ構造に関するコードデータのアノテーションとその分析
titleJa: ""
thumb: /images/research/thumbs/code_annotation.png
---

![](/images/research/content/code_annotation/DICOMO2023_Katori-1024x428.png)
<!-- width: 790 height: 330 -->

アルゴリズムとデータ構造の学習は, 情報教育の1 つとして欠かせないものである. これまでに, アルゴリズムとデータ構造に関して体系立てて説明した書籍や教材, 研究などは存在する. アルゴリズムとデータ構造の知識がある人がソースコードレベルで重要な行とその理由について述べることはできるが, 複数人への調査を経て, 一般に高等教育などで教えられるアルゴリズムとデータ構造に関してアノテーションされたものは少ない. そこで, 本研究では, アルゴリズムとデータ構造の問題と解答ソースコードを30問用意し, 各問題において, そのソースコードの中で重要な行を選び, その理由を書いてもらうというアンケート調査をアルゴリズムとデータ構造の知識およびプログラミング経験のある11人に対して実施した.さらに, 著者ら2 人で, 14 個のラベルを作成し, 回答で得られた全ての理由データに対してラベリングを行った. 本稿ではそのデータ制作過程を述べるとともに, プログラミング穴埋め問題を作成する際のデータとして使用するなどのコードデータの活用法について述べる.

香取 浩紀，山本 恒輔，佐藤 安理紗 ジエンジエラ，矢谷 浩司．アルゴリズムとデータ構造に関するコードデータのアノテーションとその分析．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Katori.pdf)
`,ra=`---
slug: codeglass
titleEn: "CodeGlass: GitHubのプルリクエストを活用したコード断片のインタラクティブな調査支援システム"
titleJa: ""
thumb: /images/research/thumbs/codeglass.png
---

ソフトウェア開発においてソースコードの理解は必要不可欠である．特に，実際の開発においてはコードの一部分(コード断片)の理解が必要となることが多い．我々が行ったインタビュー調査では，GitHub のプルリクエストの説明文とコメントに，コード理解において有用な情報が含まれていることが明 らかとなった．しかし既存のシステムでは，コード断片の理解支援のためにプルリクエストが十分に活用 されていない．そこで我々は，ユーザが選択したコード断片に関連する過去のプルリクエストを抽出し，ユーザに提供する CodeGlass を開発した．CodeGlass では，プルリクエストの説明文を解析し，実装内容や開発背景に関する文章をインターフェース上で強調して表示することが可能となっている．CodeGlass のアルゴリズムにより，選択されたコード断片が過去のバージョンにおいて分裂していた場合にも，関連する過去のプルリクエストをユーザに提供することができる．我々が行った CodeGlass の定量的および定性的評価の結果，コード断片の理解や専門的用途における CodeGlass の有用性が確認された．

柴藤大介，有薗拓也，宮崎章太，矢谷浩司．CodeGlass: GitHubのプルリクエストを活用したコード断片のインタラクティブな調査支援システム．インタラクション2019（フルペーパー）.\xA0[(paper)](/paper/interaction2019.pdf)
`,ia=`---
slug: codequiz
titleEn: GitHub のプルリクエストを用いた プログラミング課題自動生成システムの実現可能性に関する検討
titleJa: ""
thumb: /images/research/thumbs/codequiz.png
---

![](/images/research/content/codequiz/IMG_5449.png)
<!-- width: 450 height: 800 -->

教育現場にて習得可能な情報技術と情報産業界で求められる能力には大きな乖離が存在している．教育現場では情報技術の基本原則を習得することを目的としているが，情報産業界において求められる能力は，ソフトウェア開発プロジェクトを推進するための新機能開発やバグ修正といった実践的な技術である．そこで本研究では，以上のような教育現場と情報産業界の乖離を埋めるために，情報産業界において行われたソースコード変更からプログラミング課題を自動生成するシステムを提案する．本稿では、提案システムの実現可能性を模索するために行った分析結果を述べ，得られた知見をもとに今後実装を行うシステムに関して議論する．

柴藤大介，矢谷浩司．「GitHubのプルリクエストを用いたプログラミング課題自動生成システムの実現可能性に関する検討」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[(paper)](/paper/IPSJ2018_code.pdf)
`,aa=`---
slug: coding-interview
titleEn: コーディング面接の練習を支援するシステムの構築
titleJa: ""
thumb: /images/research/thumbs/coding-interview.png
---

![](/images/research/content/coding-interview/coding-interview-1024x542.png)
<!-- width: 604 height: 320 -->

ソフトウェアエンジニアなどプログラミングを行う技術者を企業側が評価する方法の一つとしてコーディング面接が存在する．コーディング面接とは，面接官と参加者が対面ないしオンラインで面接を行う中である問題が提示され，その問題に従ってコーティングを行うという面接形式の一つである．参加者は指定された課題に対してその場で一からコードを書き始め，コーディング中に適宜面接官からのコメントや質問に答えながら解答を完成させていく．本研究ではコーディング面接を受ける参加者側に注目し，参加者がコーディング面接特有の形式に慣れることができるようなシステムを構築することを目指す．コーディング面接では面接官とのコミュニケーションや受験者の意図しないタイミングでの質問，慣れていない環境への適応など，通常のプログラミング開発には見られない要素が多く存在する．こうしたことから，コーディング面接に限定したシステムの設計が必要であり，参加者はこのようなシステムを事前に使うことでコーディング面接特有の形式に慣れることができると考えた．本稿ではまシステムの作成に先行して行ったインタビュー調査の内容を紹介し，このインタビュー調査によってコーディング面接において解決すべき課題を明確にするとともに，実際に設計したシステムを紹介し，予備的なユーザ実験の結果を報告する．

杉山 悠司，矢谷 浩司．コーディング面接の練習を支援するシステムの構築．FIT 2020，第3分冊，49 – 56．[(paper)](/paper/FIT2020_Sugiyama.pdf)
`,oa=`---
slug: continuous-curves
titleEn: Continuous Curve Textures
titleJa: ""
thumb: /images/research/thumbs/continuous-curves.png
---

![](/images/research/content/continuous-curves/continuous-curves-1024x617.png)
<!-- width: 604 height: 364 -->

Repetitive patterns are ubiquitous in natural and man-made objects, with a variety of development tools and methods. Manual authoring provides unprecedented degree of freedom and control, but can require significant artistic expertise and manual labor. Computational methods can automate parts of the manual creation process, but are mainly tailored for discrete pixels or elements instead of more general continuous structures. We propose an example-based method to synthesize continuous curve patterns from exemplars. Our main idea is to extend prior sample-based discrete element synthesis methods to consider not only sample positions (geometry) but also their connections (topology). Since continuous structures can exhibit higher complexity than discrete elements, we also propose robust, hierarchical synthesis to enhance output quality. Our algorithm can generate a variety of continuous curve patterns fully automatically. For further quality improvement and customization, we also present an autocomplete user interface to facilitate interactive creation and iterative editing. We evaluate our methods and interface via different patterns, ablation studies, and comparisons with alternative methods.

自然物や人工物には繰り返しのパターンが至る所に存在し、それらパターンを生成するために様々な開発ツールや手法が用いられています。手動でそれらを生成するのは、高い自由度で編集ができる一方、相当の芸術的専門知識と手作業を必要とする場合があります。自動で生成する手法は手動でのプロセスの一部を助けることできますが、より一般的な連続した構造ではなく、離散的なピクセルや要素に合わせて調整されています。我々は、ユーザから与えられた例から連続的な曲線パターンを自動で合成するインタフェースを提案します。このシステムは、サンプルベースの離散要素の合成方法を拡張し、サンプルの位置だけでなく、それらの接続も考慮します。連続的な構造は離散要素よりも複雑になる可能性があるため、出力品質を向上させるために、ロバストで階層的な生成方法を実装し、インタラクティブな作成と反復編集を容易にするために、自動補完を行うなユーザーインターフェースを提案します。
`,sa=`---
slug: cycling-behavior
titleEn: Vision-based Scene Analysis toward Dangerous Cycling Behavior Detection Using Smartphones
titleJa: スマートフォンを用いた危険な自転車運転検知に向けた運転状況認識手法の実装
thumb: /images/research/thumbs/cycling-behavior.jpg
---

![](/images/research/content/cycling-behavior/cycling-behavior-1024x528.jpg)
<!-- width: 790 height: 407 -->

Cycling can contribute to improvements of user’s physical and mental health, and can also bring positive impacts on the environment. However, many riders do not necessarily have a full understanding of safe bicycle riding. Existing sensing technology and mobile systems have demonstrated assistive features for car driving, and this motivates us to design a mobile application to feedback cyclist’s bicycle riding. In this paper, we present the current progress of our mobile system to perform vision-based scene analysis tailored toward the detection of potentially dangerous cycling.

心身の健康や混雑回避，環境問題の観点から自転車利用が注目を集めている．しかし，自転車利用\xA0者の多くは自転車の安全運転について学ぶ機会を十分に得られていないため，知らずのうちに危険な運転をしてしまう可能性がある．従って，自転車利用者を事故から守るためには支援が必要である．現在，自動車の運転支援技術は広く研究されているが，自転車の運転支援に関する研究は限られている．自動車と比較して自転車は走行位置や環境，積載デバイスの制約など特有の問題が存在するため，自動車支援技術をそのまま転用することは難しい．そこで，本研究では自転車に搭載した速度センサとスマートフォンのカメラから乗車データを取得し，運転後に自転車利用者にフィードバックをするための運転状況の認識と評価の手法を検討する．

林 裕嵩，徐 安然，周 中一，矢谷 浩司．スマートフォンを用いた危険な自転車運転検知に向けた運転状況認識手法の実装．情報処理学会UBI研究会，2021年12月． [(paper)](/wp-content/uploads/2021/12/IPSJUBI-202112_Hayashi.pdf)

Hirotaka Hayashi, Anran Xu, Zhongyi Zhou, and Koji Yatani. Vision-based Scene Analysis toward Dangerous Cycling Behavior Detection Using Smartphones. In Adjunct Proceedings of the 2021 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp 2021), 28–29. [(paper)](/wp-content/uploads/2021/12/UbiComp2021-demo.pdf)
`,ca=`---
slug: dearboard
titleEn: "Mediating Intimacy with DearBoard: a Co-Customizable Keyboard for Everyday Messaging"
titleJa: ""
thumb: /images/research/thumbs/dearboard.png
---

![](/images/research/content/dearboard/dearboard-1024x578.png)
<!-- width: 790 height: 446 -->

Co-customizations are collaborative customizations in messaging apps that all conversation members can view and change, e.g. the color of chat bubbles on Facebook Messenger. Co-customizations grant new opportunities for expressing intimacy; however, most apps offer private customizations only. To investigate how people in close relationships integrate co-customizations into their established communication app ecosystems, we built DearBoard: an Android keyboard that allows two people to co-customize its color theme and a toolbar of expression shortcuts (emojis and GIFs). In a 5-week field study with 18 pairs of couples, friends, and relatives, participants expressed their shared interests, history, and knowledge of each other through co-customizations that served as meaningful decorations, interface optimizations, conversation themes, and non-verbal channels for playful, affectionate interactions. The co-ownership of the co-customizations invited participants to negotiate who customizes what and for whom they customize. We discuss how co-customizations mediate intimacy through place-making efforts and suggest design opportunities.

Co-customizationとは，Facebook Messengerのチャットバブルの色など，会話の相手全員が閲覧・変更できるメッセージングアプリにおいて協調してカスタマイズできる機能である．Co-customizationは，ユーザ間の親密さを表現するための新たな機会となりえますが，ほとんどのアプリは1人のユーザにしか適用されないカスタマイズしか提供していない．私たちは，親密な関係にある人々が既存のコミュニケーションアプリにCo-customizationをどのように組み込むかを調査するためにDearBoardを開発した．DearBoardは，カラーテーマと表現のショートカット（絵文字やGIF）のツールバーを2人でCo-customizationできるAndroidキーボードである．18組のカップル，友人，親戚を対象とした5週間の実地調査を通して，参加者は意味のある装飾，インターフェースの最適化，会話のテーマ，遊び心や愛情表現の非言語チャンネルとしてCo-customizationが利用され，共通の関心事，歴史，そして互いの知識を表現していたことを確認した．また，Co-customizationは誰が，誰のために，何をカスタマイズするのかお互いに交渉する機会を生み出しました．本論文ではCo-customizationがユーザ間の親密さをより深めるためのデザインの可能性を議論する．
`,la=`---
slug: dida
titleEn: "DiDA: GitHub上のコード変更と開発履歴に関するデータセット"
titleJa: ""
thumb: /images/research/thumbs/dida.png
---

![](/images/research/content/dida/DiDA-1024x637.png)
<!-- width: 604 height: 376 -->

GitHub におけるソフトウェア開発の過程で生じた膨大な量のデータは，多くの研究者がプログラミング体験の質を向上させるために利用してきた．ソフトウェア開発データの入手を容易にするため，先行研究では GitHub の開発履歴に関する大規模なデータセットの一般公開が行われている．しかし，GitHub 上のコード変更データと開発履歴データはそれぞれ入手経路が異なり，両者を統合して大規模に収集したデータセットは存在しない．両方のデータを併せ持つデータセットが存在すれば，コード開発に関する新しい視点からの解析・発見が実現できる可能性がある．そこで本研究では，新たなデータ活用の可能性を模索するため，GitHub のコード変更と開発履歴のデータをひとつのデータベースにまとめて収集するシステムを構築した．さらにコード変更を使ったデータセット検索ができるアプリケーションを作成した．

三島潤平，柴藤大介，矢谷浩司．「DiDA: GitHub上のコード変更と開発履歴に関するデータセット」第4回SIGPX勉強会，2018年3月．[(paper)](/paper/SIGPX-201803_DiDA.pdf)
`,ua=`---
slug: dipa
titleEn: An Image Dataset with Cross-cultural Privacy Perception Annotations
titleJa: ""
thumb: /images/research/thumbs/dipa.png
---

![](/images/research/content/dipa/DIPA-1024x520.png)
<!-- width: 790 height: 401 -->

The world today is increasingly visual. Many of the most popular online social networking services are largely powered\xA0by images, making image privacy protection a critical research topic in the fields of ubiquitous computing, usable security,\xA0and human-computer interaction (HCI). One topical issue is understanding privacy-threatening content in images that are\xA0shared online. This dataset article introduces DIPA2, an open-sourced image dataset that offers object-level annotations with\xA0high-level reasoning properties to show perceptions of privacy among different cultures. DIPA2 provides 5,897 annotations\xA0describing perceived privacy risks of 3,347 objects in 1,304 images. The annotations contain the type of the object and four\xA0additional privacy metrics: 1) information type indicating what kind of information may leak if the image containing the\xA0object is shared, 2) a 7-point Likert item estimating the perceived severity of privacy leakages, and 3) intended recipient\xA0scopes when annotators assume they are either image owners or allowing others to repost the image. Our dataset contains\xA0unique data from two cultures: We recruited annotators from both Japan and the U.K. to demonstrate the impact of culture on\xA0object-level privacy perceptions. In this paper, we first illustrate how we designed and performed the construction of DIPA2,\xA0along with data analysis of the collected annotations. Second, we provide two machine-learning baselines to demonstrate\xA0how DIPA2 challenges the current image privacy recognition task. DIPA2 facilitates various types of research on image\xA0privacy, including machine learning methods inferring privacy threats in complex scenarios, quantitative analysis of cultural\xA0influences on privacy preferences, understanding of image sharing behaviors, and promotion of cyber hygiene for general\xA0user populations.

最も人気のあるオンラインソーシャルネットワーキングサービスの多くは，画像によって大きく支えられており，画像のプライバシー保護はユビキタスコンピューティングやユーザブルセキュリティ，HCIにおける重要な研究トピックとなっています．本研究は，異なる文化間のプライバシーに対する認識を示すために，高度な推論特性を持つオブジェクトレベルの注釈を提供するオープンソースの画像データセットであるDIPA2を提案します．DIPA2は，1,304枚の画像内の3,347オブジェクトの認識されたプライバシーリスクを記述する5,897の注釈を提供します。注釈にはオブジェクトのタイプと，さらに4つのプライバシー指標が含まれています．1) 画像が共有された場合にどのような情報が漏洩する可能性があるかを示す情報の種類，2) プライバシー漏洩時に予想される深刻度，3) アノテーション付加者が画像の所有者，あるいは他人に画像を再投稿させることを許可していると仮定した場合の意図された受信者の範囲．さらに，本データセットには，物体レベルのプライバシー認識に対する文化の影響を示すために，日本とイギリスの両方からアノテーション付加者を募集し，データを収集しました．DIPA2は，複雑なシナリオでのプライバシー脅威を推測する機械学習手法，プライバシー嗜好に対する文化的影響の定量的分析，画像共有行動の理解，および一般的なユーザー集団のサイバーハイジーンの促進など，画像プライバシーに関するさまざまなタイプの研究を容易にすること期待されます．

The DIPA dataset is available here. DIPAデータセットは以下より利用可能です．

[https://anranxu.github.io/DIPA2_VIS/](https://anranxu.github.io/DIPA2_VIS/)

Anran Xu, Zhongyi Zhou, Kakeru Miyazaki, Ryo Yoshikawa, Simo Hosio, and Koji Yatani. 2024. DIPA2: An Image Dataset with Cross-cultural Privacy Perception Annotations. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 7, 4, Article 192 (December 2023), 30 pages. [(paper)](/wp-content/uploads/2024/02/IMWUT202312.pdf)

Anran Xu, Zhongyi Zhou, Kakeru Miyazaki, Ryo Yoshikawa, Simo Hosio, and Koji Yatani. 2023. DIPA : An Image Dataset with Cross-cultural Privacy Concern Annotations. In Companion Proceedings of the 28th International Conference on Intelligent User Interfaces (IUI '23 Companion). Association for Computing Machinery, New York, NY, USA, 259–266. [(paper)](/wp-content/uploads/2024/02/IUI-EA2023.pdf)
`,I=`---
slug: dual-freq-sensing
titleEn: 複数周波数帯での静電容量センシングによる指の識別手法
titleJa: ""
thumb: /images/research/thumbs/dual-freq-sensing.png
---

![](/images/research/content/dual-freq-sensing/Iraka-UBI-1024x468.png)
<!-- width: 800 height: 366 -->

どの指が物体に触れているか識別することができれば，指によるインタラクションの幅が大きく広がる．本稿では，導電性の物体にユーザが触れたときに，どの指が触れたかを速く正確に特定する手法を紹介する．本研究において我々は，信号を出力するリストバンドと信号を検知するコンパクトな回路を設計し，導電性の物体に触れた指を特定するシステムを構築した．本システムでは，手の皮膚組織を高周波の信号を伝える導波管として用い，伝わった複数周波数帯の信号の位相や振幅を処理して比較することで，導電性の物体に触れた指を特定することが可能となっている．本稿では，複数周波数帯の信号から指を特定する手法を述べたのち，本システムがスマートウォッチなど日常で用いるデバイスに利用できる可能性について議論する．最後に，本システムを用いた将来のインターフェースの可能性について述べる．

陳 明輝，チャコン サラス ディマス アントニー，矢谷 浩司．「複数周波数帯での静電容量センシングによる指の識別手法」情報処理学会UBI研究会，2020年3月．[(paper)](/paper/IPSJUBI-202003_chen.pdf)
`,da=`---
slug: dual-purpose_ppg_2
titleEn: 指紋認証Dual-purpose Biometrics における脈拍数計測の改善と評価
titleJa: ""
thumb: /images/research/thumbs/dual-purpose_ppg_2.png
---

![](/images/research/content/dual-purpose_ppg_2/UbiWorkshopSakaguchi-1024x768.png)
<!-- width: 604 height: 453 -->

生体認証はスマートフォンなどの認証だけでなくユーザの健康支援に有用な生体データを取得できる可能性がある．橋爪らはスマートフォンの指紋認証と同時にユーザの指尖容積脈波（Photoplethysmography:PPG）を計測するシステムであるAuth \`n' Scan を構築した．このシステムは脈拍を平均誤差1 bpm 未満で測定できるが，そのために指紋認証と比較して長時間である5 秒の測定を必要とする．そこで本研究はシステムを改善し，より短い計測時間での脈拍の精度を向上させることを目的とする．本研究では新たな回路および信号処理手法を提案することで短時間のデータでの脈拍推定を試みた．加えて28 名の参加者のデータを用いた数値的評価を行った．本稿では用いた手法とその評価結果について報告する．

坂口 達彦，矢谷 浩司．「指紋認証 Dual-purpose Biometrics における脈拍数計測の改善と評価」情報処理学会UBI研究会，2020年3月．[(paper)](/paper/IPSJUBI-202003_sakaguchi.pdf)
`,fa=`---
slug: dualcheck
titleEn: "DualCheck: Exploiting Human Verification Tasks for Opportunistic Online Safety Microlearning"
titleJa: "DualCheck: ボット判定に情報セキュリティ・倫理に関する学習を織り込んだシステム"
thumb: /images/research/thumbs/dualcheck.png
---

![](/images/research/content/dualcheck/DualCheck-1024x277.png)
<!-- width: 790 height: 214 -->

Learning online safety and ethics is becoming more critical for the general user population. However, they do not receive such learning opportunities regularly, and are often left behind. We were therefore motivated to design an interactive system to provide more frequent learning opportunities to the general user population. This paper presents our explorations on the integration of opportunistic microlearning about online safety and ethics into human verification. Our instantiation of this concept, called DualCheck, asks users to respond to questions related to online safety and ethics while human verification would be executed in a similar manner to reCAPTCHA v2. In this manner, DualCheck offers users microlearning opportunities when they use online services. Our 15-day user study confirmed the positive learning effect of DualCheck. The quantitative and qualitative results revealed participants' positive experience with attitude toward DualCheck, and also found its significantly higher perceived usability than text-based CAPTCHA and picture-based reCAPTCHA.

近年のインターネット社会において，情報倫理・セキュリティに関する基礎知識を身に着ける重要性が高まっているが，教育の場が限られており，誰もが定期的に最新の状況に基づいた知識を得ているとは言い難い．そこで本研究では，Web フォームへの回答時などに求められる CAPTCHA による判定を活用した，マイクロラーニングによる学習システムを提案する．CAPTCHA はウェブを使う多くの人が定期的に遭遇するものであり，従来のタスクのかわりに情報倫理・セキュリティに関するクイズを出題できれば適切な学習機会となる上，CAPTCHAをユーザにとって有意義なものにすることができる．提案手法の実現に向け，CAPTCHA の形式でクイズを出題した直後に知識の定着を確認する調査を実施した．本稿では調査の詳細を報告し，今後の展望を論ずる．

吉川 諒，落合 秀也，矢谷 浩司．2023．ボット判定の機会を活用した情報セキュリティ・倫理の学習手法の知識習得と知識持続効果の検証．電子情報通信学会論文誌（7月掲載予定)，

Ryo Yoshikawa, Hideya Ochiai, and Koji Yatani. 2022. DualCheck: Exploiting Human Verification Tasks for Opportunistic Online Safety Microlearning. In _Proceedings of the Eighteenth Symposium on Usable Privacy and Security (SOUPS 2022), _19–37. [(paper)](/wp-content/uploads/2022/08/SOUPS2022.pdf)

吉川 諒，矢谷 浩司．情報倫理・セキュリティ啓発を目指したCAPTCHAの設計．電子情報通信学会総合大会，2022年3月． [(paper)](/wp-content/uploads/2022/06/IEICE2022_Yoshikawa.pdf)
`,pa=`---
slug: dumbbell
titleEn: 重心移動が可能なダンベル型デバイスの製作とその知覚に関する実験
titleJa: ""
thumb: /images/research/thumbs/dumbbell.png
---

![](/images/research/content/dumbbell/dumbbell-1024x727.png)
<!-- width: 604 height: 429 -->

筋力トレーニングは健康の増進に寄与することが知られている．しかしながら，従来の筋力トレーニングは単純な反復運動で構成されているため，ユーザが動機を維持しにくい課題がある．本研究では，この課題を解決するための手法として，重心の移動が可能なダンベル型デバイスを提案する．このデバイスでは左右のウェイトプレート間で水を移動させることにより重心の移動が可能である．重心を移動させることにより，デバイスの総重量に変化がなくとも，負荷が変化したような知覚を与えられる．この技術によって，ゲームをプレイしながら筋力トレーニングを行う新しいexergame などのアプリケーションが実現できる．本研究では，アクリルを用いて製作したダンベル型デバイスの製作と，このデバイスがユーザに与える負荷の知覚に関する実験を行い，ユーザの知覚と負荷の変化の関係性を調査した．

有薗拓也，橋爪崇弘，矢谷浩司．「重心移動が可能なダンベル型デバイスの製作とその知覚に関する実験」第53回報処理学会UBI研究会，2017年3月．[(paper)](/paper/IPSJUBI-201703_arizono.pdf) **学生奨励賞受賞**
`,ma=`---
slug: elasticplay
titleEn: "ElasticPlay: Interactive Video Summarization with Dynamic Time Budgets"
titleJa: ""
thumb: /images/research/thumbs/elasticplay.png
---

![](/images/research/content/elasticplay/elasticplay-1024x392.png)
<!-- width: 604 height: 231 -->

Video consumption is being shifted from sit-and-watch to selective skimming. Existing video player interfaces, however, only provide indirect manipulation to support this emerging behavior. Video summarization alleviates this issue to some extent, shortening a video based on the desired length of a summary as an input variable. But an optimal length of a summarized video is often not available in advance. Moreover, the user cannot edit the summary once it is produced, limiting its practical applications. We argue that video summarization should be an interactive, mixed-initiative process in which users have control over the summarization procedure while algorithms help users achieve their goal via video understanding. In this paper, we introduce ElasticPlay, a mixed-initiative approach that combines an advanced video summarization technique with direct interface manipulation to help users control the video summarization process. Users can specify a time budget for the remaining content while watching a video; our system then immediately updates the playback plan using our proposed cut-and-forward algorithm, determining which parts to skip or to fast-forward. This interactive process allows users to fine-tune the summarization result with immediate feedback. We show that our system outperforms existing video summarization techniques on the TVSum50 dataset. We also report two lab studies (22 participants) and a Mechanical Turk deployment study (60 participants), and show that the participants responded favorably to ElasticPlay.

スマートデバイスや動画配信サービスの普及により，動画視聴の際は視聴したいシーンまでスキップしたり，視聴速度を変えたりするなど人々の動画視聴の方法が変わってきている．既存研究では，動画要約技術によって動画内の重要なシーンを自動選別したり，重要でないシーンを速く再生し，結合することでこの問題にある程度対応してきた．しかしながら，ユーザは自動要約開始時に出力されるダイジェスト動画の時間を前もって決める必要があったり，終了後には要約された動画を編集できないなどの問題点があった．動画要約の理想形とは，ユーザが動画要約全体の主導権を持ちつつアルゴリズムがそれを補助するような，インタラクティブな作業であると我々は考える．本研究ではそのような，ユーザとアルゴリズムが協調して動画要約を行うアプリケーションとしてElasticPlayを提案する．ユーザが動画を視聴しながら残りの再生時間を調整すると，我々のアルゴリズムは即座に残りの動画の中でどの場所をスキップすべきか，あるいは再生時間を速めるべきかを推定する．これによって，ユーザはアルゴリズムからのフィードバックを受けながら，動画要約をインタラクティブに行うことが可能になる．TVSum50データセットを用いた評価の結果，我々のシステムは既存の動画要約技術を遥かに上回る性能を誇ることがわかった．また，研究室内実験と(実験参加者22人)とクラウドソーシングを利用して行なった実験(実験参加者60人)の結果，ユーザはElasticPlayを好んで使いたいということが分かった．

Haojian Jin, Yale Song, and Koji Yatani. ElasticPlay: Interactive Video Summarization with Dynamic Time Budgets. In Proceedings of Multimedia 2017, 1164 – 1172 (oral presentation). [(paper)](https://arxiv.org/pdf/1708.06858)
`,ha=`---
slug: elecguitar
titleEn: 音響的特徴量を用いたエレキギター演奏自動評価手法
titleJa: ""
thumb: /images/research/thumbs/elecguitar.png
---

![](/images/research/content/elecguitar/SIGMUS_201711.png)
<!-- width: 600 height: 523 -->

独学でも効率良くエレキギターを練習できるシステムはこれまでにも開発されてきた．しかしこれらの大半は，指定したタイミングで正しい高さの音を鳴らせたかのみを演奏評価の基準としている．実際の演奏においては音色やテクニックなど，他の観点からも演奏を評価する必要がある．そこで本研究では，より多角的な観点から自動的にエレキギター演奏評価を行うシステムを実現することを目指し，エレキギター演奏の評価に活用できる音響的特徴量3つを提案する．5人のエレキギター初心者による演奏音源と3人のエレキギター経験者による主観的評価をデータセットとし，様々な音響的特徴量との関係性を検証し，提案する音響的特徴量の有効性を示した．さらにエレキギター演奏において特に初心者が困難に感じる左手による押弦に焦点を当て，押弦が正しく行えているかを判定する手法を考案した．この手法により，エレキギターの単音を 「正しく押弦できている音/フレット上を押さえている音/十分に押弦できていない音」の3つに85.3%の精度で分類することができた．さらに，以前の研究で考案したエレキギター演奏自動採点手法と組み合わせ，エレキギター練習用システムを作成した．このシステムでは，4つの単音からなるフレーズを弾くことで，その演奏に対する点数と各音の押弦判定が表示される．

下尾波輝，矢谷浩司．「エレキギター演奏におけるミスの自動検出」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[(paper)](/paper/IPSJ2018_guitar.pdf)

下尾波輝，矢谷浩司．「エレキギター演奏自動評価のための音響的特徴量の調査」 第117回情報処理学会音楽情報科学研究会，2017年11月．**学生奨励賞受賞．**[(paper)](/paper/IPSJMUS-201711.pdf)
`,ga=`---
slug: embroidery_sensor
titleEn: An Embroidery Touch Sensor with Layered Structure of Conductive and Non-Conductive Threads
titleJa: 導電糸と非導電糸の組み合わせによるインタラクティブ刺繍
thumb: /images/research/thumbs/embroidery_sensor.png
---

![](/images/research/content/embroidery_sensor/embroidery_sensor-1024x819.png)
<!-- width: 790 height: 632 -->

Textile-based touch sensing methods for ubiquitous and wearable interfaces employ multiple independent or specific shaped electrodes, leading to limitations on three aspects: design freedom of electrode shape, durability, and simple production. We introduce the creation approach of an embroidery touch sensor by adding embroidery using non-conductive threads on top of an electrode made of conductive threads. Changes of stitch densities of the non-conductive thread embroidery lead to differences in electrical properties, which can be useful to distinguish which part of the embroidery is touched. Our method enables the creation of touch-sensitive embroidery with high design freedom of electrode shape and durability in a simple process.

布製品にインタラクティブな機能を搭載させるために，様々なスマートテキスタイル技術の研究が行われている．これまでの取り組みでは電極の形状を工夫することによってセンシングに対応した電気的特性を作り出しており，既存の衣服が持っているようなデザインの多様性をスマートテキスタイルでは実現できていない．そこで本研究では，導電糸の上に非導電糸で重ね縫いをすることで，タッチ時における静電容量変化を制御し，タッチ位置検出に利用する手法を提案する．非導電糸の密度を変化させることで，タッチ時における指と導電糸の距離が変化して静電容量変化をもたらす．この手法を利用することで，インタラクティブ刺繍を多様なデザインで実現することができる．

Kazuhiro Shinoda, D. Antony Chacon, and Koji Yatani. 2023. An Embroidery Touch Sensor with Layered Structure of Conductive and Non-Conductive Threads.\xA0IEEE Sensors Letters, Vo. 7, No. 6, Article 6003104. [(paper)](/wp-content/uploads/2023/05/IEEESensorsLetter2023.pdf)

篠田 和宏，矢谷 浩司．導電糸と非導電糸の組み合わせによるインタラクティブ刺繍．インタラクション2023（デモ発表），2023年3月．[(paper)](/wp-content/uploads/2023/03/Interaction2023.pdf) **インタラクティブ発表賞（一般投票）受賞**
`,_a=`---
slug: expwriting_feedback
titleEn: Examining Input Modalities and Visual Feedback Designs in Mobile Expressive Writing
titleJa: 筆記開示チャットボットにおけるストレス解消感を高める視覚フィードバックデザインの比較評価
thumb: /images/research/thumbs/expwriting_feedback.png
---

![](/images/research/content/expwriting_feedback/norihama_ubi-1024x666.png)
<!-- width: 790 height: 514 -->

Expressive writing is an established approach for stress management. Recently, information technologies, such as smartphones, have also been explored for expressive writing. Although mobile interfaces have the potential to support various daily writing activities, interface designs for mobile expressive writing and their effects on stress relief still lack empirical understanding. We examined the interface design of mobile expressive writing by investigating the influence of input modalities and visual feedback designs on usability and perceived cathartic effects through field studies. While our studies confirmed the stress-relieving effects of mobile expressive writing, our results offer important insights into interface design. We found keyboard-based text entry more suited and preferred over voice messages for its privacy and reflective nature. Participants expressed different reasons for preferring different post-writing visual feedback depending on the cause and type of stress. This work advances interface design for mobile expressive writing and deepens understanding of its effects.

ストレスは抑うつなどを防ぐためにもこまめな解消が重要である．解消の支援にあたり，時間や場所の制約がないデジタルツールの活用が広まっており，近年ではチャットボットでの対話形式の支援が注目されている．チャットボットに対してストレスを言語化して表出する筆記開示は有効な解消方法であるとされているが、ストレスについて思い出すことで気分が下がる可能性があることや，作業の負担が大きいことなどが課題として指摘されている．そこで本研究では，筆記開示に対する応答を変化させることによって，解消の効果や知覚する負担を変化させることができるのかについて検証を行った．画面上でストレスを能動的に消失させた場合，消失する様子を受動的に知覚した場合，何もしなかった場合の3つの条件を用意し，36名の方にそれぞれ1週間ずつ計3 週間利用してもらった．実験の結果から，条件ごとに得られる異なった効果を明らかにし，さらにストレス管理を行うためのツールのデザインについて議論した．

Shunpei Norihama, Shixian Geng, Kakeru Miyazaki, Arissa J. Sato, Mari Hirano, Simo Hosio, and Koji Yatani. 2025. Examining Input Modalities and Visual Feedback Designs in Mobile Expressive Writing. Proceedings of the ACM on Human-Computer Interaction, Volume 9, Issue 5 Article MHCI009, 1–28. [(paper)](https://dl.acm.org/doi/10.1145/3743723)

乘濵駿平, 耿世嫻, 宮崎翔, 佐藤安理紗ジエンジエラ, 下島銀士, 平野真理, シモホシオ, 矢谷浩司. 2024. 筆記開示チャットボットにおけるストレス解消感を高める視覚フィードバックデザインの比較評価. 情報処理学会UBI研究会, 2024年5月. [(paper)](https://dl.acm.org/doi/10.1145/3743723) **学生奨励賞受賞**
`,va=`---
slug: expwriting_feedbackdesign
titleEn: 筆記開示後の視覚フィードバックデザインの選好に関する調査
titleJa: ""
thumb: /images/research/thumbs/expwriting_feedbackdesign.png
---

![](/images/research/content/expwriting_feedbackdesign/DICOMO_Nakano-1024x376.png)
<!-- width: 790 height: 290 -->

日常生活につきまとうストレスに対して適切な対処法を見つけ上手くつきあう必要があるが、個人によって何をストレスに感じ、そのストレスにどのような対処が適しているのかは異なる。そこで本研究ではストレスの内容やユーザの心理状態、個人の性格に応じてユーザが求めるストレス対処法を提案するシステムを構成することを見据えて、これらの要素がストレス対処法への好みにどのように影響するのかを調査する。ストレスの内容やユーザの心理状態を分析するために筆記開示という心理療法を通じて言語化してもらい、ストレス対処法のメタファーとなるような視覚的フィードバックを4種類のうちから1つを選んで使用してもらうことで選好傾向を分析した。ユーザ実験では、クラウドソーシングサイトから募集した20代後半から50代後半までの男女29人を対象に4 週間の間毎日実験を行なってもらい、442の筆記開示のサンプルを収集した。定量分析の結果、ストレスの大きさやストレスによる怒り・悲しみ・恐怖感、そしてストレスの原因が自分自身にあるかどうかといったことが視覚的フィードバックへの選好に影響を与えることがわかった。この結果を利用することでどのようなストレスを抱えているか、それによってどのような感情を抱いているかを考慮してユーザが使いたいと感じるストレス対処法を的確に提案するシステムを作ることができると考えられる。しかし筆記開示の文面自体と選ばれた視覚的フィードバックの間に特徴的な関係性は見出せなかったため、筆記開示の文面のみから予測を行うためには書き手にストレスの種類、感情について言及するよう促すことが重要である。

中野 博貴，乘濵 駿平，耿 世嫻，矢谷 浩司．2024．筆記開示後の視覚フィードバックデザインの選好に関する調査．DICOMO 2024．[(paper)](/wp-content/uploads/2024/10/DICOMO2024_Nakano.pdf)
`,ya=`---
slug: extraherics
titleEn: 促考するAI
titleJa: AI as Extraherics
thumb: /images/research/thumbs/extraherics.png
---

As artificial intelligence (AI) technologies, including generative AI, continue to evolve, concerns have arisen about over-reliance on AI, which may lead to human deskilling and diminished cognitive engagement. Over-reliance on AI can also lead users to accept information given by AI without performing critical examinations, causing negative consequences, such as misleading users with hallucinated contents. This paper introduces extraheric AI, a human-AI interaction conceptual framework that fosters users' higher-order thinking skills, such as creativity, critical thinking, and problem-solving, during task completion. Unlike existing human-AI interaction designs, which replace or augment human cognition, extraheric AI fosters cognitive engagement by posing questions or providing alternative perspectives to users, rather than direct answers. We discuss interaction strategies, evaluation methods aligned with cognitive load theory and Bloom's taxonomy, and future research directions to ensure that human cognitive skills remain a crucial element in AI-integrated environments, promoting a balanced partnership between humans and AI.

生成AIをはじめとするAI技術が進化し続ける中，AIへの過度な依存に対する懸念が高まっている．AIへの過剰な依存は人間のスキルの低下や認知的な関与の減少を招く恐れがありほか，AIの提供する情報を批判的に検討せずに受け入れてしまうことにつながり、ハルシネーションなどによって誤った情報が拡散されるといった負の側面も持つ．本論文では，タスク遂行の過程において，ユーザの高次思考スキル（創造性、批判的思考、問題解決能力など）を促進するための人間・AI協調インタラクションとして，**Extraheric AI（促考するAI）**というフレームワークを提案する．人間の認知を代替したり拡張したりする既存の設計とは異なり，促考するAIは直接的な答えを出すのではなく，ユーザに問いかけを行ったり代替的な視点を提示したりすることで，認知的な関与を促す．本論文では促考するAIが取りうるインタラクション戦略，促考するAIを用いたシステムの評価手法，促考するAIの今後の研究の方向性を議論する．促考するAIのフレームワークによりAIが統合された環境下においても，人間の認知スキルが不可欠な要素であり続けることを保ち，人間とAIのバランスの取れたパートナーシップを促進することを目指す．

Koji Yatani, Zefan Sramek, Chi-Lan Yang.

AI as Extraherics: Fostering Higher-order Thinking Skills in Human-AI Interaction.

[https://arxiv.org/abs/2409.09218](https://arxiv.org/abs/2409.09218)

ご自身が使っているChatGPTやGeminiで促考するAIを簡単に試すこともできます！以下のリンクから試してみてください．うまくいったこと，改良すべきことなど，コメントがありましたら，矢谷（koji [at-mark] iis-lab.org）までお寄せください．

You can try extraheric AI with your ChatGPT and Gemini! Please feel free to try out the following links. If you have any usage that you found useful or where we need improvements, please share with Koji (koji [at-mark] iis-lab.org).

GPT based on this extraheric AI concept / 促考するAIの考えに基づいたGPT

[https://chatgpt.com/g/g-6a1fd8a4e4b081918af0f313ad4c3a51-extraheric-ai-cu-kao-suruai](https://chatgpt.com/g/g-6a1fd8a4e4b081918af0f313ad4c3a51-extraheric-ai-cu-kao-suruai)

Gem based on this extraheric AI concept / 促考するAIの考えに基づいたGPT

[https://gemini.google.com/gem/1J-OyVIclq1pS3NnTaWwYFm8CXaAbJNLg?usp=sharing](https://gemini.google.com/gem/1J-OyVIclq1pS3NnTaWwYFm8CXaAbJNLg?usp=sharing)

***

## Extraheric AI strategies / 促考するAIが取りうるインタラクション戦略

Through our literature survey on full-paper publications at ACM CHI 2023 and 2024, we have identified 7 interaction strategies. We note that our original manuscript has 8 interaction strategies, but we decided to omit the nudging strategy after re-review. The following explains each interaction strategy along with illustrations of its example use.

ACM CHI 2023および2024で発表された査読付き論文の文献調査を通じて，私たちは7つのインタラクション戦略を特定しました．なお，当初の原稿では8つの戦略を掲げてありましたが．再検討の結果「ナッジング（nudging）」の戦略は除外することとした．以下では各戦略の例を示すイラストレーションとともに，その詳細を説明する．

### Suggesting / 提案

![](/images/research/content/extraherics/Suggesting-1024x733.png)
<!-- width: 790 height: 565 -->

Suggesting (and recommending) is an extraheric AI interaction strategy that involves proposing ideas, viewpoints, solutions, or actions to the user, without necessarily detailing the rationales behind them. With this strategy, users’ cognitive engagement comes in the form of evaluating and deciding whether or not to incorporate the AI’s suggestions or recommendations into their thinking or tasks. For example, in the context of news article reading, extraheric AI may recommend related articles with similar or different perspectives to encourage the user to explore multiple viewpoints. In the context of technical tasks like software development, extraheric AI may suggest multiple implementations of a particular method and allow the user to choose the one they determine to be most appropriate. In all such cases, it is critical that the AI makes multiple\xA0suggestions to allow the user to evaluate and choose among them.

Suggesting（提案）は背後にある根拠を必ずしも詳細に説明することなく，アイデア，視点，解決策，または行動をユーザに提示する戦略である．この戦略におけるユーザの認知的関与は、AIの提案や推奨を自身の思考やタスクにどのように取り入れるべきかどうかを評価し，判断するという形で現れる，例えばニュース記事を閲覧する場面では，ユーザーが多角的な視点を探求することを促すために促考するAIが同様の視点や異なる視点からの関連記事を提案する．ソフトウェア開発のような技術的タスクにおいては，特定の実装方針に対して複数の実装方法を提案し，ユーザが最も適切であると判断したものを選択できるようにする．これらすべての場合において，ユーザがそれらを評価・選択できるように．AIが複数の提案を行うことが極めて重要である．

### Explaining / 説明

![](/images/research/content/extraherics/Explaining-1024x947.png)
<!-- width: 790 height: 731 -->

Explaining is a strategy in which extraheric AI offers explanations of information related to the task which the user currently engages in. Unlike suggestions or recommendations, this strategy emphasizes providing details on the ‘why’ and ‘how’ of a particular piece of information. In the context of news article reading for opinion formation, extraheric AI with this strategy may visualize additional background or contextual explanations about a particular component of the article the user is currently reading. In this manner, extraheric AI allows the user to confirm their understanding and situate the article correctly.\xA0In the context of software development, extraheric AI may provide explanations of methods or API calls to allow the user to better understand the code’s function. It is important that extraheric AI offers explanations that allow the user to deepen their understanding of the task at hand. It thus should aim to provide additional context or information rather than step-by-step instructions that the user may blindly follow.

Explaining（説明）は，ユーザが現在取り組んでいるタスクに関連する情報の解説を提示する戦略である．Suggestingと異なり，特定の情報に関する「なぜ」や「どのように」といった詳細を提供することに重点を置く．例えばニュース記事閲覧の場面では，ユーザが現在読んでいる記事の特定の部分について，追加の背景や文脈的な説明を可視化する．これにより促考するAIはユーザが自身の理解を確認し，記事を正しく位置付けることを支援する．ソフトウェア開発では，ユーザがコードの機能をより良く理解できるように，メソッドやAPI呼び出しの説明を提供する．促考するAIはユーザがタスクに対する理解を深められるような説明を提示することが重要であり，ユーザが盲目的に従ってしまうような手順の指示ではなく，追加の文脈や情報を提供することを目指すべきである．

### Discussing / 議論

![](/images/research/content/extraherics/Debating-1024x502.png)
<!-- width: 790 height: 387 -->

In this mode, users debate or discuss a given topic and exchange their thoughts and opinions with AI agents. In the context of news article reading, extraheric AI using this strategy could offer an online discussion thread where the user may discuss their thoughts with AI agents holding various different opinions. In the context of software development, the user may engage in paired programming with an AI peer, and discuss the use of different libraries, code structures, or algorithms. When using this strategy, it is important that debates and discussions focus on presenting different perspectives and ideas rather than simply disagreeing with or asking the user to justify their opinion.

この戦略では，ユーザが特定のトピックについてAIエージェントと議論やディスカッションを行い，思考や意見を交換する．例えばニュース記事を閲覧する場面においては，ユーザが多様な意見を持つAIエージェントと自身の考えを議論できるオンライン掲示板を提供する．ソフトウェア開発の場面では，ユーザーがAIのピア（仲間）とペアプログラミングを行い，異なるライブラリの使用やコード構造，あるいはアルゴリズムについて議論する．この戦略を用いる際，議論やディスカッションは，単にユーザの意見に反対したり正当化を求めたりするのではなく，異なる視点やアイデアを提示することに焦点を当てることが重要である．

### Questioning / 発問

![](/images/research/content/extraherics/Questioning-1024x607.png)
<!-- width: 790 height: 468 -->

In this mode, extraheric AI asks questions about particular parts of what the user currently engages in. Such questioning is not supposed to validate the correctness of opinions and perspectives, but rather stimulate users’ cognitive activities to expand their thoughts or consider different perspectives. In the context of news article reading, extraheric AI using this strategy may ask questions about a particular portion of the content, such as “How do you think people in other countries perceive this news? What consequence could occur in their countries?”. In the context of software development, extraheric AI may ask the user to explain how a particular code block functions, or why they chose to implement an algorithm in the way they did. Through users’ active engagement with questions from AI agents, this process effectively stimulates users’ higher-order thinking.

この戦略では，ユーザが現在取り組んでいる内容の特定の箇所について問いかけを行う．このような問いかけは，意見や視点の正当性を確認するためのものではなく，ユーザの思考を広げたり，異なる視点を検討したりするための認知活動を刺激することを目的としている．例えばニュース記事を閲覧する場面においては，コンテンツの特定の部分について，「他国の人々はこのニュースをどのように捉えると思いますか？その国々ではどのような結果が生じる可能性がありますか？」といった質問を投げかける．ソフトウェア開発の場面では，特定のコードブロックがどのように機能するか，あるいはなぜそのアルゴリズムをそのような方法で実装することを選択したのかを説明するようにユーザに求める．AIエージェントからの問いかけに対するユーザの能動的な関与を通じて，ユーザの高次思考を効果的に刺激する．

### Scaffolding / 足場かけ

![](/images/research/content/extraherics/Scaffolding-1024x656.png)
<!-- width: 790 height: 506 -->

Scaffolding is a learning approach where teachers offer temporary customized support to help students learn new concepts and skills, and gradually remove this help as students become more capable on their own. Extraheric AI can serve as a scaffold for users by taking on part of a task and allowing them to focus only on particular portions at a time. In the context of software development, extraheric AI using this strategy may help the user focus on program structure by allowing them to write pseudo-code or use visual programming methods before later translating these into functional code. It is critical that extraheric AI using this strategy focuses on developing the user’s fundamental understanding of a task rather than simply allowing them to offload task decomposition.

Scaffolding（足場かけ）は，教師が一時的にカスタマイズされた支援を提供することで学生の新しい概念やスキルの習得を助け，学生が自立して能力を発揮できるようになるにつれてその支援を徐々に取り除いていく学習アプローチである．促考するAIでは，タスクの一部を引き受け，ユーザが一度に特定の箇所だけに集中できるようにすることで，ユーザにとっての足場として機能することができる．例えばソフトウェア開発の場面では，ユーザがまず擬似コードを書いたり視覚的なプログラミング手法を用いたりすることを可能にし，後にこれらを実行可能なコードへと変換することで，プログラムの構造に集中できるよう支援する．この戦略を用いる促考するAIにおいては，単にタスクの分解を肩代わりさせるのではなく，タスクに対するユーザの根本的な理解を深めることに焦点を当てることが極めて重要である．

### Simulating / 模擬

![](/images/research/content/extraherics/Simulation-1024x751.png)
<!-- width: 790 height: 579 -->

In this mode, extraheric AI simulates a circumstance where the user experiences a situation from a standpoint other than their own or develops skills that would be difficult to otherwise practice. For example, AI agents could simulate audience members of different opinions and perspectives, allowing users to practice public speaking and responding to audience questions. Extraheric AI could be tuned to different levels of aggressiveness to develop resilience and abilities for handling different types of audiences. Simulations can also allow users to experience situations from a different standpoint. For example, the user could take the role of an interviewer tasked with interviewing an AI agent playing the role of a job candidate. By asking a variety of questions and observing the agent’s responses, the user can think about how they may answer such questions as interviewees in actual job interviews. The user will also have the opportunity to empathize with their interviewers, potentially giving them valuable insight into how to best communicate their ideas. As with other strategies, it is important that such simulations be designed to present a variety of viewpoints to encourage users to consider different perspectives and think critically about their own positionality. This strategy could be particularly valuable for helping users understand their own and others’ implicit biases.

この戦略では，ユーザが自分自身とは異なる立場から状況を経験したり，他の方法では練習が困難なスキルを習得したりする状況をシミュレートする．例えば，AIエージェントが異なる意見や視点を持つ聴衆の役割を担うことで，ユーザはパブリックスピーチや聴衆からの質問への回答を練習することができる．促考するAIは，異なる種類の聴衆に対応するためのレジリエンスや能力を養うために，積極性のレベルを様々に調整することが可能である．また，シミュレーションによってユーザは異なる立場から状況を経験することもできる．例えば，ユーザが面接官の役割を担い，採用候補者の役割を演じるAIエージェントにインタビューを行うタスクに取り組むことができる．多様な質問を投げかけ，エージェントの反応を観察することで，ユーザは実際の採用面接において面接を受ける側としてどのように回答すべきかを考えることができる．またユーザは面接官に共感する機会も得られ，自分の考えを最も効果的に伝える方法について貴重な洞察を得られる可能性がある．他の戦略と同様に，ユーザが異なる視点を検討し，自身の立ち位置について批判的に考えられるよう，多様な観点を提示するようにシミュレーションを設計することが重要である．この戦略は，ユーザが自分自身や他者の潜在的なバイアスの理解支援において特に価値があると考えられる．

### Demonstrating / 実演

![](/images/research/content/extraherics/Demonstrating-1024x525.png)
<!-- width: 790 height: 405 -->

Demonstrating is a strategy where users simply observe the behavior or interaction of AI agents and learn implicitly through these observations. In this case, there is no direct information flow from extraheric AI to users. Users thus would have the largest freedom in how they interpret the behavior or interaction of AI agents and internalize take-aways through vicarious learning. In the context of news article reading for opinion formation, extraheric AI using this strategy may take the role of a peer, demonstrating their reading process and sharing opinions. The user can review these demonstrations and construct their own opinions by integrating what they have observed with their own reading. Extraheric AI using this strategy may include multiple AI agents to offer the demonstrations of diverse perspective or approaches to a task or topic.

Demonstrating（実演）は，ユーザがAIエージェントの振る舞いやインタラクションを単に観察し，それらの観察を通じて暗黙的に学習する戦略である．この場合，促考するAIからユーザーへの直接的な情報の流れは存在しない．ユーザがAIエージェントの振る舞いやインタラクションをどのように解釈し，代理学習を通じて教訓を内面化するかはユーザに大きく任せられることになる．例えばニュース記事閲覧の文脈では，AIが仲間の役割を担い，自身の読解プロセスを実演したり意見を共有したりする場合がある．ユーザはこれらの実演を検討し，観察した内容を自身の読解と統合することで，自分自身の意見を構築することができる．この戦略においては，タスクやトピックに対する多様な視点やアプローチの実演を提供するために，複数のAIエージェントを含む場合がある．

## Extraheric AI work at IIS Lab / IIS Labにおける促考するAI研究成果

- Xinrui Fang, Anran Xu, Chi-Lan Yang, Ya-Fang Lin, Sylvain Malacria, and Koji Yatani. LLM-based In-situ Thought Exchanges for Critical Paper Reading. To appear in Proceedings of IUI 2026.
- 山中駿, 中野博貴, 矢谷浩司．AIセルフクローンを用いた面接時の回答改善支援手法の検討．情報処理学会HCI研究会，2025年11月．
- Shixian Geng, Remi Inayoshi, Chi-Lan Yang, Zefan Sramek, Yuya Umeda, Chiaki Kasahara, Arissa J. Sato, Simo Hosio, and Koji Yatani. 2025. Beyond the Dialogue: Multi-chatbot Group Motivational Interviewing for Premenstrual Syndrome (PMS) Management. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2025), Article 640, 1–18.
- 風澤宥吾, 矢谷浩司．薬物依存症治療におけるグループ動機づけ面接のファシリテーショントレーニング支援システム．情報処理学会UBI研究会，2025年5月．
- 香取浩紀，矢谷浩司，楊期蘭．2025．授業後の要約ノート作成支援アシスタントの設計と評価．情報処理学会全国大会，2025年3月．
- 耿世嫻，稲吉玲美，楊期蘭，シュラーメク ゼファン，梅田悠哉，笠原千秋，佐藤安理紗ジエンジエラ，ホシオ シモ，矢谷浩司．複数のチャットボットを組み合わせた動機付け面接によるPMSへの対処支援．情報処理学会HCI研究会，2025年1月．
- 梅田悠哉, 楊期蘭, 平野真理, 矢谷浩司. 2024. 大規模言語モデルを活用した認知再構成法支援チャットボットシステム. DICOMO 2024, 2024年7月.
`,ba=`---
slug: eye-dryness
titleEn: コンピュータ使用時に目の乾燥状態を検出する手法の検討
titleJa: ""
thumb: /images/research/thumbs/eye-dryness.png
---

![](/images/research/content/eye-dryness/Choi_UBI_presentation-1024x619.png)
<!-- width: 604 height: 365 -->

コンピュータを使用する時や使用した直後，目に異物感などの目の乾燥に起因する症状を経験する人は多い．目の乾燥は生活の質や業務の効率などに甚大な影響を及ぼす．もし目の乾燥状態を検出して症状が出る前にユーザーに警告することができるシステムがあれば，目の乾燥に起因する症状を予防することができる．コンピュータ使用時に目の乾燥状態を検出する従来の手法は，目の瞬きを用いる間接的な手法だった．この手法には，周辺の環境や個人差などは考慮できないという問題があった．目の乾燥状態を直接評価するためには涙液層の観察が必要であるが，涙液層を観察する既存の手法はコンピュータ使用時に用いることができなかった．この問題を解決するために本研究では，ユーザの瞳に映りこんだコンピュータディスプレイの画面の乱れ具合を分析することで，涙液層を観察し，目の乾燥状態を検出する手法を検討する．本稿では本手法の実装方法を述べるとともに，本手法を評価するために実施した予備実験について報告する．

チェ シウク，小野寺 宏，矢谷 浩司．「コンピュータ使用時に目の乾燥状態を検出する手法の検討」情報処理学会UBI研究会，2020年3月．**優秀論文賞****受賞．**[(paper)](/paper/IPSJUBI-202003_choi.pdf)
`,xa=`---
slug: garment-design-ui
titleEn: ユーザの体の3Dモデル上に服装品をデザインするインタフェースの予備的検討
titleJa: ""
thumb: /images/research/thumbs/garment-design-ui.png
---

![](/images/research/content/garment-design-ui/xu-hci-1024x830.png)
<!-- width: 604 height: 490 -->

近年のファブリケーション技術の発達により，洋服やアクセサリなどをユーザが自在にデザインできる世の中が近づいている．一方で，一般的なユーザがちゃんと身につけられる服装品をデザインするためには様々な知識や経験を必要とする場合が多い．本研究では，ユーザの体の3Dデータを元にして，その上に直接服装品をデザインを設計できるインタフェースを提案する．本論文では，現在までに構築したプロトタイプ，および予備的実験の結果について述べる．

胥 皓，矢谷 浩司．「ユーザの体の3Dモデル上に服装品をデザインするインタフェースの予備的検討」情報処理学会HCI研究会，2020年3月．[(paper)](/paper/IPSJHCI-202003_xu.pdf)
`,Sa=`---
slug: gcr
titleEn: Examining Human Perception of Generative Content Replacement in Image Privacy Protection
titleJa: ""
thumb: /images/research/thumbs/gcr.png
---

![](/images/research/content/gcr/GCR-1024x618.png)
<!-- width: 790 height: 477 -->

The richness of the information in photos can often threaten privacy, thus image editing methods are often employed for privacy protection. Existing image privacy protection techniques, like blurring, often struggle to maintain the balance between robust privacy protection and preserving image usability. To address this, we introduce a generative content replacement (GCR) method in image privacy protection, which seamlessly substitutes privacy-threatening contents with similar and realistic substitutes, using state-of-the-art generative techniques. Compared with four prevalent image protection methods, GCR consistently exhibited low detectability, making the detection of edits remarkably challenging. GCR also performed reasonably well in hindering the identification of specific content and managed to sustain the image’s narrative and visual harmony. This research serves as a pilot study and encourages further innovation on GCR and the development of tools that enable human-in-the-loop image privacy protection using approaches similar to GCR.

直接画像を編集する手法は，画像のプライバシー保護を実現する最も一般的な方法の一つである．しかし，モザイクのような普及した方法では，画像の利便性を維持できず，共有の意図した目的を維持できないことがよくある．さらに，プライバシー保護のためのユーザーフレンドリーな画像編集サポートが不足しているため，ユーザーが望むプライバシー保護効果を迅速に達成することができず，プライバシー保護に対する意欲を低下させている．本論文では，生成的コンテンツ置換（プライバシーの脅威をシームレスに類似の代替物に置き換える新しい手法）を通じて，ユーザーが画像内のプライバシーの保護を支援するカスタマイズ可能なインタフェースを開発する．ユーザーは，プライバシーを保護する領域の設定や、代替物の詳細の指定、出力内容の制御をするための様々なパラメータの調整をすることができる．このインタフェースが，従来の画像プライバシー保護手法やソフトウェアと比較して，人々のプライバシー保護に役立つことを期待する．

徐安然，風澤宥吾，矢谷浩司．シームレスでカスタマイズ可能な写真プライバシー保護加工を対話的に行うインタフェース．コンピュータセキュリティシンポジウム2024．[(paper)](/wp-content/uploads/2024/10/CSS2024.pdf)

Anran Xu, Shitao Fang, Huan Yang, Simo Hosio. Koji Yatani. 2024. Examining Human Perception of Generative Content Replacement in Image Privacy Protection. Poster presentation at SOUPS 2024. [(paper)](/wp-content/uploads/2024/10/CSS2024.pdf)

Anran Xu, Shitao Fang, Huan Yang, Simo Hosio. Koji Yatani. 2024. Examining Human Perception of Generative Content Replacement in Image Privacy Protection. In Proceedings of CHI 2024, Article 777, 1–16. [(paper)](/wp-content/uploads/2024/10/CHI2024.pdf)
`,Ca=`---
slug: genai-infovis
titleEn: 情報可視化システム開発における大規模言語モデルプロンプトの定量的調査
titleJa: ""
thumb: /images/research/thumbs/genai-infovis.png
---

![](/images/research/content/genai-infovis/DICOMO_HIrabayashi.png)
<!-- width: 730 height: 512 -->

自然言語処理技術に基づく大規模言語モデル(LLM)の進化により，高い生成能力を示すAI技術がシステム開発やプログラミングの分野にも影響を与えている．本研究では対話型のテキスト生成AIの利用に関して, 情報可視化システムの開発におけるユーザの行動パターンと利用目的に焦点を当てた定量的な分析を行う情報検索におけるセッション分析の観点を取り入れ，連続して入力されたプロンプト同士の関係性にも注目してAIの利用実態を考察する．さらに，これらの利用実態の調査結果からユーザの生成AIを用いたシステム開発を支援するツールの設計について考察を行う．分析の結果，ユーザの対話型AIの利用がAIを主軸としてコードを積極的に記述させる段階と，AI をコード記述の支援に利用してユーザが主体となってコードを記述する2つの段階に分類されることが確認された．また，ユーザとAI間でのシステム開発の進捗状況の同期の難しさが存在することが確認され，支援の必要性が確認された．

平林晴馬，宮崎翔, 矢谷浩司．2025. 情報可視化システム開発における大規模言語モデルプロンプトの定量的調査．情報処理学会論文誌デジタルコンテンツ（DCON），13(2)，1-10．[(paper)](/wp-content/uploads/2025/12/IPSJ-DCON-2025.pdf)

平林晴馬，宮崎翔，矢谷浩司．2024．情報可視化システム開発における大規模言語モデルプロンプトの定量的調査．DICOMO 2024．[(paper)](/wp-content/uploads/2024/10/DICOMO2024_HIrabayashi.pdf)
`,wa=`---
slug: graphie
titleEn: インフォグラフィックスの作成をインタラクティブに支援するシステム
titleJa: ""
thumb: /images/research/thumbs/graphie.png
---

![](/images/research/content/graphie/system.png)
<!-- width: 400 height: 300 -->

データ可視化の手段としてinfographics を用いる機会が近年増えている。データ可視化においては、読み手により良い理解を促すためにストーリーテリングが重要である。ストーリーテリングには重要なデータ探索、ストーリー作り、ストーリーの伝え方の３つのプロセスがある。本稿ではinfographics にてよく用いられるスタイルの画像を自動的に生成するシステムによって特にストーリーの伝え方を支援するシステムを提案する。画像は、インターネットからピクトグラムを取得しそれを加工することによって生成を行う。

岩下知美，矢谷浩司．「インフォグラフィックスの作成をインタラクティブに支援するシステム」第170回情報処理学会HCI研究会，2016年10月．[(paper)](/paper/IPSJHCI-201610.pdf)
`,Ta=`---
slug: group-mi-training
titleEn: 薬物依存症治療におけるグループ動機づけ面接のファシリテーショントレーニング支援システム
titleJa: ""
thumb: /images/research/thumbs/group-mi-training.png
---

![](/images/research/content/group-mi-training/group-mi-training-1024x575.png)
<!-- width: 790 height: 444 -->

動機づけ面接は人の行動の変化を促進させるためのコミュニケーション手法として, 個別形式, グループ形式の精神療法で用いられる. 動機づけ面接を提供するカウンセラーの能力は治療効果に影響する可能性が示唆されており, カウンセリング能力を向上させるためのトレーニングは重要である. 個別形式とグループ形式では, カウンセラーに求められるコミュニケーション能力は異なるものの, グループ形式の動機づけ面接に着目したカウンセラーのファシリテーショントレーニングについてはデジタル支援は考慮されていない. 本研究では, 薬物依存症治療のための集団精神療法であるせりがや覚醒剤依存再発防止プログラム(SMARPP)を対象に集団動機づけ面接のトレーニングシステムの設計を行った.

風澤宥吾, 矢谷浩司．薬物依存症治療におけるグループ動機づけ面接のファシリテーショントレーニング支援システム．情報処理学会UBI研究会，2025年5月．[(paper)](/wp-content/uploads/2025/12/IPSJUBI-Fusawa.pdf) **UBIヤングリサーチャー賞受賞**
`,Ea=`---
slug: groupnamics
titleEn: "Groupnamics: Designing an Interface for Overviewing and Managing Parallel Group Discussions in an Online Classroom"
titleJa: ""
thumb: /images/research/thumbs/groupnamics.png
---

![](/images/research/content/groupnamics/groupnamics-1024x364.png)
<!-- width: 790 height: 281 -->

Instructors facilitating online classes have a limited ability to\xA0see and hear interactions of student groups working in parallel, which prevents them from interacting with students effectively. In this work, we explore interface design for providing an overview of parallel group discussions in online classrooms. We derive design considerations through a participatory design process and instantiate them in our visualization interface, Groupnamics. Groupnamics Äi0visualizes recent vocal activities and discussion statuses of each group in a one-page view, facilitating identification of groups where intervention may be needed. Our user study with 16 instructors confirmed that Groupnamics Äi0can successfully provide cues for when instructors should join group discussions and improvements on the perceived usefulness and ease of use over the baseline interface representing existing videoconferencing tools. Our qualitative results suggest future research directions in interface design for online parallel group discussions.

Arissa J. Sato, Zefan Sramek, and Koji Yatani. Groupnamics: Designing an Interface for Overviewing and Managing Parallel Group Discussions in an Online Classroom. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI 2023), Article 701, 1–18, 2023. [(paper)](/wp-content/uploads/2023/05/CHI2023.pdf)
`,Da=`---
slug: handkerchief
titleEn: 変形可能なハンカチ型インタフェースの設計
titleJa: ""
thumb: /images/research/thumbs/handkerchief.jpg
---

![](/images/research/content/handkerchief/handkerchief-1024x901.jpg)
<!-- width: 790 height: 695 -->

eTextile 技術は衣服や家具などにインタラクティブな機能をもたらす．本研究ではハンカチというフォームファクタに着目したeTextile インタフェースを提案する．この形状により，ユーザは机の上に広げたり，折りたたんで両手や片手で持ったり，引っ張ったりなど，様々な形に変形させた上でインタラクションが可能となる．このインタフェースを実現するため，導電糸を織り込んだ布と刺繍によりプロトタイプの構築を行った．本稿では，プロトタイプの実装の詳細と，それを用いたインタラクションの例を述べ，今後の研究の方向について議論する．

篠田 和宏，チャコン アントニー，雪田 和歌子，横田 知之，染谷 隆夫，矢谷 浩司． 変形可能なハンカチ型インタフェースの設計．情報処理学会UBI研究会，2021年6月．**優秀論文賞****受賞．**[(paper)](/wp-content/uploads/2021/06/IPSJUBI-202106.pdf)
`,Oa=`---
slug: hidetight
titleEn: An Interactive Photo Privacy Protection Interface
titleJa: 写真のプライバシー保護加工を対話的に行うインタフェース
thumb: /images/research/thumbs/hidetight.png
---

![](/images/research/content/hidetight/HideTight-1024x573.png)
<!-- width: 790 height: 442 -->

写真はSNSで共有され，ユビキタス・コンピューティングで活用される重要なメディアとなっている．そのため，写真のプライバシー保護は，多くのユーザーにとって重要であるが，プライバシー保護のための写真編集支援は必ずしも十分でない．本研究ではプライバシー保護のための写真編集を対話的に行うHideTightを提案する．HideTightは，プライバシーを脅かす可能性のある8種類のオブジェクトを我々独自の物体認識モデルによりユーザから与えられた写真の中から検出し，プライバシー保護を行う領域を提案する．ユーザは，ボタンを押すことで提案された場所に保護編集を行えるほか，必要に応じて修正を行うことができる．本稿では，HideTightの実装について報告し，および今後の研究の方向性について議論する．

徐 安然，周 中一，吉川 諒．矢谷 浩司．写真のプライバシー保護加工を対話的に行うインタフェース．情報処理学会UBI研究会，2022年6月．\xA0[(paper)](/wp-content/uploads/2022/06/IPSJUBI-202206.pdf)
`,ka=`---
slug: iconstudy
titleEn: クラウドソーシングを用いたアイコンの主観的属性と視覚的特徴量の関係性の調査
titleJa: ""
thumb: /images/research/thumbs/iconstudy.png
---

![](/images/research/content/iconstudy/iconstudy.png)
<!-- width: 600 height: 425 -->

アイコンは GUI や資料製作において重要な要素である.同じテーマのものを描いたアイコンであっ ても，そのスタイル(例:フォーマル，かわいい，近代的)は多岐に渡りそれぞれ異なる印象を与える．し かし，どのような視覚的特徴量がアイコンの持つ主観的属性に寄与するのかに関しての十分な調査はなされ ていない．この関係性を明らかにすることによって，例えば主観的な概念を用いて望みのアイコンを検索 できるシステムのような，アイコンデータとの新たなインタラクションが可能となる．本研究ではアイコ ンの主観的属性と視覚的特徴量の関係を定量的に分析した．まずアイコンのデータセットを Web 上のデー タを用いて構築した.次にクラウドソーシングを用いて 3,380 個の主観的属性候補を収集し，手動で整理 を行い最終的に 45 個の主観的属性を得た．更に，1 つの主観的属性と 2 つのアイコンコレクションを提示しどちらのアイコンコレクションがより与えられた主観的属性に合っているかに関する主観的評価のデー タの収集も行った.このデータを機械学習のモデルに学習させ，アイコンの主観的属性と視覚的特徴量の 関係性を明らかにした．その結果，アスペクト比，黒さ，線幅の一定度合いが主要な視覚的特徴量であることが分かった．本研究は視覚的特徴と主観的属性を結びつけるための定量的手法を提示するものである．

吉谷拓真，矢谷浩司．「クラウドソーシングを用いたアイコンの主観的属性と視覚的特徴量の関係性の調査」第169回情報処理学会CGVI研究会，2018年3月．**優秀研究発表賞．**[(paper)](/paper/IPSJ2018_icon.pdf)

吉谷拓真，矢谷浩司．「クラウドソーシングを用いたアイコンの主観的属性の収集」第80回情報処理学会全国大会，2018年3月．[(paper)](/paper/IPSJCGVI-201803.pdf)
`,Aa=`---
slug: impulsive_buying
titleEn: 商品棚前における非計画購買者の行動特徴量の検討
titleJa: ""
thumb: /images/research/thumbs/impulsive_buying.png
---

![](/images/research/content/impulsive_buying/795316b92fc766b0181f6fef074f03fa-1024x626.png)
<!-- width: 604 height: 369 -->

購買者が入店前に購入品目を決定しなかったにもかかわらず，店内において購買を決定する購買行動を非計画購買と呼ぶ．実店舗においてこの非計画購買を理解することは販促活動において非常に重要視されている．その理由の一つとして，日本のコンビニエンスストアにおいて売り上げの70%は非計画購買によって成り立っているという調査がある．既存の研究ではカメラやセンサーを用いて実店舗における購買行動を調査しているが，非計画購買の特徴を説明づけるような行動特徴量の調査は今まで行われてこなかった．そこで本研究ではセンサーを備えたスマート商品棚を用いて，非計画購買に特有の行動特徴量に関する定量的な調査を行なった．研究室に店舗を模した環境を用意して実験を行なった結果，棚前での滞在時間や商品に手を伸ばした回数，棚からの距離が計画購買と比べて有意な差を示すことがわかった．また，これらの特徴量にBoruta と呼ばれる特徴量抽出手法とサポートベクターマシンを用いることで購買行動の分類を試みた結果，precision = 0.76，recall = 0.81 であった．最後にこれらの結果に対する議論および今後の展望について述べる．

杉山 悠司，刀根 亮太，今村 修一郎，矢谷 浩司．「商品棚前における非計画購買者の行動特徴量の検討」情報処理学会第62回UBI研究会，2019年6月．[(paper)](/paper/IPSJUBI-201906.pdf)
`,ja=`---
slug: imt_with_genai
titleEn: インタラクティブ機械学習の教示プロセスでの生成 AI の利用可能性の検討
titleJa: ""
thumb: /images/research/thumbs/imt_with_genai.png
---

![](/images/research/content/imt_with_genai/DICOMO2023_Yamamoto-1024x738.png)
<!-- width: 790 height: 569 -->

機械学習は大量の学習データがあれば難しい課題を効率的に解決できるが，モデル作成には深い理解が必要であり，一般の人々が利用するにはハードルが高い．インタラクティブ機械学習（IMT）は機械学習のモデル作成に対話的要素を組み込み，ユーザの理解を促進することを目的としており，すでにウェブカメラなどを使って簡単にデータを提供できるシステムが公開されている．しかし，これらのIMTツールではユーザが提供する学習データと実際に学習させたい概念との乖離が生じることがあり，本研究ではその乖離を生成AI によるデータの拡張によって解決することを目指す．本稿では，生成AI を組み込んだIMTシステムの開発と実験を行い，IMTの教示プロセスにおける生成AIの利用可能性を検討した．

山本 恒輔，周 中一，ゼファン シュラーメク，矢谷 浩司．インタラクティブ機械学習の教示プロセスでの生成 AI の利用可能性の検討．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Yamamoto.pdf)
`,Ma=`---
slug: informal-chat
titleEn: リモートワーク環境での雑談を支援するインタフェースデザインの質的調査
titleJa: ""
thumb: /images/research/thumbs/informal-chat.png
---

![](/images/research/content/informal-chat/informal-chat-suggest-1024x457.png)
<!-- width: 790 height: 353 -->

COVID-19 の影響やSDGs への関心の高まりに伴い, オンラインでのコミュニケーションが増加した. その結果, 心的健康・社会性の面で必要とされていた何気ない他者との会話（以下雑談とする）が減少し, 孤独感・帰属意識の低下といった課題が生まれている. リモートコミュニケーションを支援するツールは複数生み出されているものの, 目的を持たない他者との雑談の活性化に焦点を置いた研究は少ない. 本研究では, ユーザ調査を通じて, リモート環境における雑談の発生条件を調査し, どのような情報を提示すると効果的であるかを分析する. またその結果に基づき, チャットシステムにおけるインタフェースデザインを検討する.

佐野 翔子，佐藤 安理紗 ジエンジエラ，矢谷 浩司．リモートワーク環境での雑談を支援するインタフェースデザインの質的調査．情報処理学会HCI研究会，2021年12月． [(paper)](/wp-content/uploads/2021/12/IPSJHCI-202112.pdf)
`,Na=`---
slug: interactive-gcr
titleEn: シームレスでカスタマイズ可能な写真プライバシー保護加工を対話的に行うインタフェース
titleJa: ""
thumb: /images/research/thumbs/interactive-gcr.png
---

![](/images/research/content/interactive-gcr/interactive-GCR-1024x555.png)
<!-- width: 790 height: 428 -->

直接画像を編集する手法は，画像のプライバシー保護を実現する最も一般的な方法の一つである．しかし，モザイクのような普及した方法では，画像の利便性を維持できず，共有の意図した目的を維持で きないことがよくある．さらに，プライバシー保護のためのユーザーフレンドリーな画像編集サポートが 不足しているため，ユーザーが望むプライバシー保護効果を迅速に達成することができず，プライバシー保護に対する意欲を低下させている．本論文では，生成的コンテンツ置換（プライバシーの脅威をシーム レスに類似の代替物に置き換える新しい手法）を通じて，ユーザーが画像内のプライバシーの保護を支援 するカスタマイズ可能なインタフェースを開発する．ユーザーは，プライバシーを保護する領域の設定や、 代替物の詳細の指定、出力内容の制御をするための様々なパラメータの調整をすることができる．このイ ンタフェースが，従来の画像プライバシー保護手法やソフトウェアと比較して，人々のプライバシー保護に役立つことを期待する．

徐安然, 風澤宥吾, 矢谷浩司. シームレスでカスタマイズ可能な写真プライバシー保護加工を対話的に行うインタフェース. コンピュータセキュリティシンポジウム2024. 2024年10月. [(paper)](/wp-content/uploads/2024/10/CSS2024.pdf)
`,Pa=`---
slug: iot-prototyping
titleEn: モジュール性の高いツールキットを用いたハードウェアプロトタイピングにおける初学者の課題の理解
titleJa: ""
thumb: /images/research/thumbs/iot-prototyping.png
---

![](/images/research/content/iot-prototyping/iot-prototyping-1024x821.png)
<!-- width: 790 height: 633 -->

ハードウェアプロトタイピングでは，プログラミングと電子回路というソフトウェア・ハードウェアの両方の知識を組み合わせてシステムを設計・実装する必要があるため，初学者は様々な困難に直面する．先行研究では，Arduino 等のモジュール性の低いマイコンを使用したハードウェアプログラミングにおいて初学者が直面する困難に関する調査が行われている．一方で，近年では，micro:bit 等のモジュール性の高いツールキットが開発され，これらのミスの多くはモジュール性の高いツールキットを使用することで防ぐことができると考えられる．そこで，本研究では，モジュール性の高いツールキットを使用したハードウェアプロトタイピングワークショップにおいて初学者が直面する困難を明らかにし，先行研究の結果と比較することでツールキットのモジュール性による初学者が直面する困難の違いを追究する．

伊東大燿, 篠田和宏, 矢谷浩司．モジュール性の高いツールキットを用いたハードウェアプロトタイピングにおける初学者の課題の理解．情報処理学会UBI研究会，2025年5月．[(paper)](/wp-content/uploads/2025/12/IPSJUBI-Ito.pdf)
`,Fa=`---
slug: knowledgedeck
titleEn: "KnowledgeDeck: ビジネス資料作成向け情報収集・整理支援システム"
titleJa: ""
thumb: /images/research/thumbs/knowledgedeck.png
---

![](/images/research/content/knowledgedeck/kd-1024x734.png)
<!-- width: 604 height: 433 -->

ビジネスパーソンは，プレゼンテーションのスライドなどの専門的な資料を作成する機会が多々ある．しかし，専門的な資料の作成は時間がかかることが多く，ナレッジワーカー(主に知的生産物の創造に従事する労働者)の生産性を下げる要因となっている．そこで本研究では，ナレッジワーカーの資料作成を支援するインタラクティブなシステムを構築した．システム設計に際し，ビジネス資料の作成・管理の方法や，その際にどのような問題点を感じているかに関するインタビューを実施し，質的分析を行った．その結果に基づき，Web上の情報を保存・管理し，プレゼンテーションスライドの下書きを行うことを支援するシステムであるKnowledgeDeckを作成した．KnowledgeDeckの有用性を検証するために，3人のナレッジワーカーにエキスパートレビューを行ってもらったところ，KnowledgeDeckは事例紹介を含むプレゼンテーションスライドの作成に，最も有効に活用できる可能性があることがわかった．

下尾波輝，矢谷浩司．「KnowledgeDeck: ビジネス資料作成向け情報収集・整理支援システム」第80回情報処理学会全国大会，2018年3月．[(paper)](/paper/IPSJ2018_knowledgedeck.pdf)
`,Ia=`---
slug: linked
titleEn: "LINKED: RFID技術を活用した未来の家のコンセプト提案"
titleJa: ""
thumb: /images/research/thumbs/linked.jpg
---

![LINKED: RFID技術を活用した未来の家のコンセプト提案](/images/research/content/linked/DYS2655-1024x682.jpg)
<!-- width: 604 height: 402 alt: LINKED: RFID技術を活用した未来の家のコンセプト提案 -->

2018年12月に，コンセプト立案，及びコンセプトビデオ作成を行った，家庭内におけるRFID（電子タグ技術）を利用した未来の生活ビジョン，LINKED，です．このコンセプトビデオは，東京ガス横浜ショールームの「くらしのライブラリー キッチンライブラリーコーナー」における展示の一部として公開されたものです．現在の行為と直後の行為を結びつけるLINK foward，現在の行為と直前の行為を結びつけるLINK back，現在の行為と未来の行為を結びつけるLINK aheadの3つの結びつけ方とともに，5つの具体的なRFID技術の活用例を示しました．

なお以下の映像は，経済産業省が所管する新エネルギー・産業技術総合開発機構（NEDO）「IoTを活用した新産業モデル創出基盤整備事業」の一環として制作しました．

さらに，我々が提案したコンセプトをもとにしたビジョンビデオがこちらになります．
`,La=`---
slug: lock-n-lol
titleEn: "Lock n' LoL: Group-based Limiting Assistance App to Mitigate Smartphone Distractions in Group Activities"
titleJa: ""
thumb: /images/research/thumbs/lock-n-lol.png
---

![](/images/research/content/lock-n-lol/lock-n-lol-1.png)
<!-- width: 600 height: 323 -->

Prior studies have addressed many negative aspects of mobile distractions in group activities. In this paper, we present Lock n' LoL. This is an application designed to help users focus on their group activities by allowing group members to limit their smartphone usage together. In particular, it provides synchronous social awareness of each other's limiting behavior. This synchronous social awareness can arouse feelings of connectedness among group members and can mitigate social vulnerability due to smartphone distraction (e.g., social exclusion) that often results in poor social experiences. After following an iterative prototyping process, we conducted a large-scale user study (n = 976) via real field deployment. The study results revealed how the participants used Lock n' LoL in their diverse contexts and how Lock n' LoL helped them to mitigate smartphone distractions.

本研究では，グループ活動中のメンバがスマートフォンの使用をお互いに制限することで，ユーザが活動に集中する手助けをするアプリケーションLock n’ LoLを提案する．特に，Lock n’ LoLはグループメンバ同士でお互いに行動を制限することで，メンバ間の社会的認識を高めることとなる．このようにお互いにつながりを認識することによって，仲間はずれなどのスマートフォンによって生じる社会的脆弱性の発生を抑制することができる．実際にLock n’ LoLを実装し，976人の実験参加者に対してユーザースタディを行なった．その結果，Lock n’ LoLが様々な文脈の中でどのように使われるのか，またどのようにスマートフォンを見てしまわないようユーザを手助けしているのかについて明らかにした．

Minsam Ko, Seungwoo Choi, Koji Yatani, and Uichin Lee. Lock n' LoL: Group-based Limiting Assistance App to Mitigate Smartphone Distractions in Group Activities. In Proc. CHI 2016, 998-1010.

[(paper)](/paper/CHI2016.pdf) **Best Paper Award winner**
`,Ra=`---
slug: lookhere
titleEn: Gesture-aware Interactive Machine Teaching with In-situ Object Annotations
titleJa: ユーザの教示動作に基づいた物体アノテーションを統合した対話型AIモデル構築
thumb: /images/research/thumbs/lookhere.png
---

![](/images/research/content/lookhere/LookHere-e1664320357676-1024x481.png)
<!-- width: 790 height: 371 -->

Interactive Machine Teaching (IMT) systems allow non-experts to easily create Machine Learning (ML) models. However, existing vision-based IMT systems either ignore annotations on the objects of interest or require users to annotate in a post-hoc manner. Without the annotations on objects, the model may misinterpret the objects using unrelated features. Post-hoc annotations cause additional workload, which diminishes the usability of the overall model building process. % with vision-based IMT. In this paper, we develop LookHere, which integrates in-situ object annotations into vision-based IMT. LookHere exploits users' deictic gestures to segment the objects of interest in real time. This segmentation information can be additionally used for training. To achieve the reliable performance of this object segmentation, we utilize our custom dataset called HuTics, including 2040 front-facing images of deictic gestures toward various objects by 170 people. The quantitative results of our user study showed that participants were 16.3 times faster in creating a model with our system compared to a standard IMT system with a post-hoc annotation process while demonstrating comparable accuracies. Additionally, models created by our system showed a significant accuracy improvement (ΔmIoU=0.466) in segmenting the objects of interest compared to those without annotations.

The details of the project, demonstration videos, and the HuTics dataset is available on the following page.

[https://zhongyi-zhou.github.io/GestureIMT/](https://zhongyi-zhou.github.io/GestureIMT/)

Zhongyi Zhou, and Koji Yatani. 2022. Gesture-aware Interactive Machine Teaching with In-situ Object Annotations. _To appear in UIST 2022._\xA0[(paper)](/wp-content/uploads/2022/09/UIST2022.pdf)
`,za=`---
slug: lumio
titleEn: "LumiO: A Plaque-aware Toothbrush"
titleJa: ""
thumb: /images/research/thumbs/lumio.png
---

![](/images/research/content/lumio/lumio2.png)
<!-- width: 600 height: 535 -->

Toothbrushing plays an important role in daily dental plaque removal for preventive dentistry. Prior work has investigated improvements on toothbrushing with sensing technologies. But existing toothbrushing support focuses mostly on estimating brushing coverage. Users thus only have indirect information about how well their toothbrushing removes dental plaque. We present LumiO, a toothbrush that offers users continuous feedback on the amount of plaque on teeth. LumiO uses a well-known method for plaque detection, called Quantitative Light-induced Fluorescence (QLF). QLF exploits a red fluorescence property that bacterium in the plaque demonstrates when a blue-violet ray is cast. Blue-violet light excites this fluorescence property, and a camera with an optical filter can capture plaque in pink. We incorporate this technology into an electric toothbrush to achieve improvements in performance on plaque removal in daily dental care. This paper first discusses related work in sensing for oral activities and interaction as well as dental care with technologies. We then describe the principles of QLF, the hardware design of LumiO, and our vision-based plaque detection method. Our evaluations show that the vision-based plaque detection method with three machine learning techniques can achieve F-measures of 0.68 – 0.92 under user-dependent training. Qualitative evidence also suggests that study participants were able to have improved awareness of plaque and build confidence on their toothbrushing.

予防歯科のための日常的な歯垢除去において，歯磨きは重要な役割を果たしている．先行研究では様々なセンシング技術によって歯磨きの改善を行なってきた．しかし，これらは主に歯磨きが行われた範囲を推定するのみであり，歯垢が適切に除去されたかについての情報を用いていなかった．そこで我々は歯垢の量をユーザに継続的にフィードバックする歯ブラシ，LumiOを提案する．LumiOは歯垢検出のために，定量的可視光誘導蛍光法（QLF法）を使用している．QLF法は，青紫色光線を当てられた歯垢内のバクテリアが赤色の蛍光特性を示すことを利用している．これにより，光学フィルタを施したカメラによって歯垢をピンク色として捉えることができる．我々はユーザが日常生活の中でより効果的に歯垢を除去できるよう，電動歯ブラシにこの技術を組み込んだ．本稿ではまず，口を用いる行動とそれにまつわるインタラクション技術，ならびに歯科医療技術についての関連研究について述べる．その後，QLF法の原理，LumiOのハードウェアデザイン，そして画像処理を用いた歯垢検出法について述べる．ユーザ依存の学習を行なった3種類の機械学習を用いて，歯垢検出を評価した結果，F値0.68〜0.92となった．実際にユーザにLumiOを使用してもらった結果，LumiOによって歯垢への意識が高められ，自信を持って歯磨きできるようになるということがわかった．

T. Yoshitani, M. Ogata, and K. Yatani. LumiO: A Plaque-aware Toothbrush. in Proceedings of UbiComp 2016, 2016.

[(paper)](/paper/ubicomp2016.pdf) [(video)](https://www.youtube.com/watch?v=gwvPTRLiZiQ)
`,Ba=`---
slug: multi-ai-reading
titleEn: LLM-based In-situ Thought Exchanges for Critical Paper Reading
titleJa: 大規模言語モデルを用いた批判的論文読解支援システム
thumb: /images/research/thumbs/multi-ai-reading.png
---

![](/images/research/content/multi-ai-reading/multi-AI-reading-1024x527.png)
<!-- width: 790 height: 407 -->

Critical reading is a primary way through which researchers develop their critical thinking skills. While exchanging thoughts and opinions with peers can strengthen critical reading, junior researchers often lack access to peers who can offer diverse perspectives. To address this gap, we designed an in-situ thought exchange interface informed by peer feedback from a formative study (N=8) to support junior researchers' critical paper reading. We evaluated the effects of thought exchanges under three conditions (no-agent, single-agent, and multi-agent) with 46 junior researchers over two weeks. Our results showed that incorporating agent-mediated thought exchanges during paper reading significantly improved participants' critical thinking scores compared to the no-agent condition. In the single-agent condition, participants more frequently made reflective annotations on the paper content. In the multi-agent condition, participants engaged more actively with agents' responses. Our qualitative analysis further revealed that participants compared and analyzed multiple perspectives in the multi-agent condition. This work contributes to understanding in-situ AI-based support for critical paper reading through thought exchanges and offers design implications for future research.

批判的読解は，研究者が批判的思考力を育成する上での主要な手段である．同僚との意見交換や思考共有はこの読解を強化するが，若手研究者は多様な視点を提供できる仲間にアクセスする機会が限られている．この課題に対処するため，本研究では形成的調査（N ＝ 8）から得られたピアフィードバックに基づき，若手研究者の批判的論文読解を支援するためのその場型思考交流インタフェースを設計した．さらに，2 週間にわたり 46 名の若手研究者を対象に，エージェントなし，単一エージェント，および複数エージェントという 3 条件下で思考交流の効果を評価した．その結果，読解中にエージェントを介した思考交流を導入することで，エージェントなし条件と比較して参加者の批判的思考スコアが有意に向上した．単一エージェント条件では，参加者は論文内容に対してより多くの内省的注釈を行い，複数エージェント条件では，エージェントの応答に対してより積極的に関与した．質的分析の結果，複数エージェント条件では参加者が複数の視点を比較・分析する様子も確認された．

Xinrui Fang,\xA0Anran Xu, Chi-Lan Yang, Ya-Fang Lin, Sylvain Malacria, Koji Yatani. 2026. LLM-based In-situ Thought Exchanges for Critical Paper Reading. In Proceeding of IUI 2026.

[https://arxiv.org/abs/2510.15234](https://arxiv.org/abs/2510.15234)

方 欣瑞．徐 安然．楊 期蘭．林 雅芳．マラクリヤ シルバン．矢谷 浩司．大規模言語モデルを用いた批判的論文読解支援システム．情報処理学会HCI研究会，2026年1月．[(paper)](/wp-content/uploads/2026/03/IPSJHCI-202601.pdf)
`,Va=`---
slug: notification_design
titleEn: プッシュ通知インタフェースの誘目度と干渉度のモデル化
titleJa: ""
thumb: /images/research/thumbs/notification_design.png
---

![](/images/research/content/notification_design/DICOMO2023_MIyazaki-1024x458.png)
<!-- width: 790 height: 353 -->

スマートフォンやパーソナルコンピュータ上でのプッシュ通知は，ユーザに対し即時的に情報を伝える手段として広く用いられているが，ユーザが通知を受け取りたいかどうかを考慮せずに行われるため，ユーザの作業への集中の妨げになったり，煩わしく感じられたりしてしまうという課題がある．本研究では，見た目や出現位置といったプッシュ通知の視覚的な特性を適切に調整することで，ユーザに対する気づかれやすさと受容性の高さを両立する通知を設計することを最終的な目標とし，通知の視覚的特性の変化が通知の誘目性と受容性をどう変化させるかを調査した．この調査のために，実験参加者にタスク中に出現する通知について気づきやすさと受容性について評価をしてもらうユーザ実験を行った結果，通知の透明度や注視点に対する相対位置が誘目度と受容性の増減に強い影響を与えるなどがわかり，それらの知見をもとにユーザにとっての気づかれやすさと受け入れやすさを両立する通知の設計方針について議論した．

宮崎 翔，乘濵 駿平，山本 恒輔，ゼファン シュラーメク，佐藤 安理紗 ジエンジエラ, 矢谷 浩司．プッシュ通知インタフェースの誘目度と干渉度のモデル化．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Miyazaki.pdf)
`,Ha=`---
slug: nugu
titleEn: "NUGU: A Group-based Intervention App for Improving Self-Regulation of Limiting Smartphone Use"
titleJa: ""
thumb: /images/research/thumbs/nugu.png
---

![](/images/research/content/nugu/nugu.png)
<!-- width: 400 height: 300 -->

Our preliminary study reveals that individuals use various management strategies for limiting smartphone use, ranging from keeping smartphones out of reach to removing apps. However, we also found that users often had difficulties in maintaining their chosen management strategies due to the lack of self-regulation. In this paper, we present NUGU, a group-based intervention app for improving self-regulation on smartphone use through leveraging social support: groups of people limit their use together by sharing their limiting information. NUGU is designed based on social cognitive theory and it has been developed iteratively through two pilot tests. Our three-week user study (n = 62) demonstrated that compared with its non-social counterpart, the NUGU users’ usage amount significantly decreased and their perceived level of managing disturbances improved. Furthermore, our exit interview confirmed that NUGU’s design elements are effective for achieving limiting goals.

人々はスマートフォンの利用を制限するために様々な戦略を用いている．例えば，すぐに手にとってしまわないようにスマートフォンをできるだけ遠ざけたり，アプリを削除したりなどである．しかしながら，そういった自己制御に頼った戦略はしばしば失敗に終わってしまう．そこで本稿では，ソーシャルサポートを利用してスマートフォン利用に関する自己制御を向上させるアプリNUGUを提案する．NUGUはグループ内のメンバが互いにスマートフォンの制限情報を共有することで，メンバ同士助け合いながら共にスマートフォンを使わないように支援するアプリケーションである．我々はNUGUを社会認知理論に基づいて設計し，2回のパイロットスタディを通じて改善した．62人の実験参加者に対して行なった3週間のユーザースタディの結果，NUGUを使用したユーザは使用しない者に比べ，スマートフォン使用量が大幅に減少することが判明した．また，インタビューの結果NUGUの設計要素はスマートフォンの制限目標を達成するのに有効であることがわかった．

M. Ko, S. Yang, J. Lee, C. Heizmann, J. Jeong, U. Lee, D. H. Shin, K. Yatani, J. Song, and K. Chung, “NUGU: A Group-based Intervention App for Improving Self-Regulation of Limiting Smartphone Use,” in Proceedings of the ACM conference on Computer-Supported Cooperative Work and Social Computing (CSCW 2015), 2015.

[(paper)](/paper/CSCW2015.pdf)
`,Ua=`---
slug: oralfrality-inference
titleEn: Quantifying Oral and Swallowing Capabilities through Computer Vision Using Smartphones
titleJa: スマートフォンを用いた画像認識による口腔・嚥下機能の定量的評価手法
thumb: /images/research/thumbs/oralfrality-inference.png
---

![](/images/research/content/oralfrality-inference/oralfrality-inference-1024x576.png)
<!-- width: 790 height: 444 -->

医師による嚥下障害の診断には，患者に定期的な通院が必要な点や診断結果が医師の経験に大きく左右される点が課題として存在する．そこで我々は，患者が在宅で簡単に嚥下障害の有無を評価できるようにするため，スマートフォンで撮影した動画から口腔・嚥下機能を評価する手法を提案する．提案手法の実現に向けて我々は，口腔・嚥下機能を分析するために必要なタスク群を決定し，147名の実験参加者から得られたそれらのタスクの動画の分析を行った. その結果，87.1%の精度，0.612のF値の識別性能を得た．

耿 世嫻，平井 雄太，下島 銀士，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．2024．スマートフォンを用いた画像認識による嚥下機能の定量的評価手法．情報処理学会論文誌，Vol. 65，No. 6，1091-1101．

耿 世嫻，平井 雄太，下島 銀士，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．スマートフォンを用いた画像認識による口腔・嚥下機能の定量的評価手法．DICOMO 2022，2022年7月． [(paper)](/wp-content/uploads/2022/06/DICOMO2022.pdf) **優秀プレゼンテーション賞受賞**
`,Wa=`---
slug: orchestra-program
titleEn: "OrchExplorer: アマチュアオーケストラ向けコンサートプログラム構成支援システム"
titleJa: ""
thumb: /images/research/thumbs/orchestra-program.png
---

![](/images/research/content/orchestra-program/f7dfe0f21acad27bd44bf28b0c016628-1024x453.png)
<!-- width: 604 height: 267 -->

オーケストラのコンサートプログラムの構成では，編成や技術的制約に加え，プログラム全体の統一性を考慮する．様々な条件を考慮しながらコンサートプログラムの構成を行うには，十分な音楽的知識が必要とされる．音楽に関するデジタルライブラリが整備される中で，楽曲検索に関しては多くの研究がなされているが，特定の曲に対する様々な方法での検索を可能にする観点に焦点が当てられており，検索対象のタイトルなどメタ情報をあらかじめ知っていることがシステム利用の前提とされている．また，過去の履歴から個人の嗜好に合わせた作品を推薦するシステムについての研究も多く行われている．しかしながらコンサートプログラムの構成を支援することを目的としたシステムの検討はあまりされていない．本研究では，インターネット上の既存の検索システム等を自由に用いてコンサートプログラムを考案する定性的なユーザ実験を行った．得られた知見に基づき，コンサートプログラムの考案を支援するインタラクティブなシステムを設計する上で重要なデザイン指針を導き出した．さらに，過去のコンサートプログラムデータと楽曲検索のデータベースを組み合わせ，コンサートプログラムの考案における試行錯誤の過程を支援するインタラクティブなシステムOrchExplorer を構築した．

富木 菜穂，佐藤 安理紗 ジエンジエラ，矢谷 浩司．「OrchExplorer:アマチュアオーケストラ向けコンサートプログラム構成支援システム」情報処理学会HCI研究会，2021年3月．[(paper)](/wp-content/uploads/2021/02/IPSJHCI-202103.pdf)

富木 菜穂,，矢谷 浩司．「オーケストラのコンサートプログラム考案時のユーザの検索行動に関する定性的調査」ヒューマンインタフェースサイバーコロキウム2020, 2020年10月．[(paper)](/wp-content/uploads/2020/12/HIS2020_naho.pdf)
`,Ga=`---
slug: parent_child_reading
titleEn: 親子の対話型読み聞かせのための記録システムに向けたインタビュー調査
titleJa: ""
thumb: /images/research/thumbs/parent_child_reading.png
---

![](/images/research/content/parent_child_reading/shimizu_project_visualimage-1024x544.png)
<!-- width: 790 height: 420 -->

子どもとの対話コミュニケーションの重要性について多くの研究が示唆しているにも関わらず，子育て親は忙しさが増しておりコミュニケーション機会を確保することは難しくなっている．本研究では対話コ ミュニケーション機会として親子の読み聞かせ活動に着目し，活動への意欲や対話型読み聞かせを促すため のシステムデザインを検討する．そのために読み聞かせに際しての親子を取り巻く環境についての状況や，やりがい，続ける上での課題や, システムデザインを踏まえたセキュリティ意識などを把握するために，子育て親に対してインタビューを実施し定性的な調査をおこなった．インタビュー結果を元に考察をおこない，子育て親が振り返りながら対話型読み聞かせを続けていくためのシステムデザインについて検討した．

清水 啓太郎，佐藤 安理紗 ジエンジエラ，矢谷 浩司．親子の対話型読み聞かせのための記録システムに向けたインタビュー調査．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Shimizu.pdf)
`,Ka=`---
slug: phones-on-wheels
titleEn: "Phones on Wheels: Exploring Interaction for Smartphones with Kinetic Capabilities"
titleJa: ""
thumb: /images/research/thumbs/phones-on-wheels.png
---

![](/images/research/content/phones-on-wheels/phonssonwheels-300x236.png)
<!-- width: 600 height: 473 -->

This work introduces novel interaction and applications using smartphones with kinetic capabilities. We develop an accessory module with robot wheels for a smartphone. With this module, the smartphone can move in a linear direction or rotate with sufficient power. The module also includes rotary encoders, allowing us to use the wheels as an input modality. We demonstrate a series of novel mobile interaction for mobile devices with kinetic capabilities through three applications.

我々はスマートフォンに運動力学的機能を付加するため，ロボットホイールを備えたモジュールを開発した．このモジュールを付加したスマートフォンは，直線方向に進んだり，回転したりすることができる．また，モジュールにはロータリーエンコーダが搭載されておりホイールの回転を入力として使うこともできる．本研究ではこのような運動力学的能力を備えたスマートフォンについて3つのアプリケーションを提案し，新たなインタラクションについて考察する．

Takefumi Hiraki, Koya Narumi, Koji Yatani, and Yoshihiro Kawahara. 2016. Phones on Wheels: Exploring Interaction for Smartphones with Kinetic Capabilities. In Proceedings of the 29th Annual Symposium on User Interface Software and Technology (UIST '16 Adjunct), 121-122.
`,qa=`---
slug: plagiarism_feedback
titleEn: 英語非母語話者のアカデミック・ライティングにおけるリアルタイム剽窃疑い提示の効果
titleJa: ""
thumb: /images/research/thumbs/plagiarism_feedback.jpg
---

![](/images/research/content/plagiarism_feedback/realtimeplag-1024x552.jpg)
<!-- width: 604 height: 326 -->

英語が母国語でない話者は言語的な障壁により、剽窃、すなわち他の文献から不適切な形で言葉を「借用する」という行為を犯してしまうことがある。既存のシステムは既に執筆を終えた原稿に対して剽窃の可能性を提示するように設計されている。そのため、執筆途中においては剽窃の疑いを検出することができず、ユーザは各時点で瞬時に文章を修正することができない。本研究では、事後ではなくリアルタイムで剽窃の疑いを提示することが、英語非母語話者の執筆における剽窃行為を回避する上でより効果的であるという仮説を立てた。英語が母国語でない16名の参加者に学術論文を要約してもらう実験を実施し、剽窃の疑いに関する情報提示のタイミングの違いによる効果を比較した。本論文では、剽窃の疑い箇所をリアルタイムで提示することの利点と欠点を明らかにするとともに、将来の剽窃疑い検出ツールにおけるインターフェースデザインの検討について述べる。

佐藤 安理紗 ジエンジエラ，柴田 健吾，矢谷 浩司．「英語非母語話者のアカデミック・ライティングにおけるリアルタイム剽窃疑い提示の効果」情報処理学会HCI研究会，2020年1月．
`,Ja=`---
slug: pms_survey
titleEn: PMSや月経に伴う不調の症状や対策について情報の共有意識の違いに関する定量的調査
titleJa: ""
thumb: /images/research/thumbs/pms_survey.png
---

![](/images/research/content/pms_survey/PMS_quant-1024x330.png)
<!-- width: 790 height: 255 -->

月経前症候群（PMS）や月経に伴う不調といった日常生活に支障を及ぼす症状を感じる女性は増加している．身体症状や精神症状など複合的な症状に対して様々な対策が提示されているが，自らの症状やその対策についての情報共有による改善の効果に焦点を当てた研究は少ない．他者への自己開示は精神的にポジティブな影響を与えることがわかっていることから，本研究では情報共有に焦点を当て，情報共有意識の異なる群ごとの特徴から，症状改善へつながりうる要因を検討することを目的とした．20 歳以上の日本人女性を対象にアンケート調査を実施した．各群に質問を行い，属性ごとの情報共有の意識の違いを生む背景となっている要素を検討した．その結果，情報共有をしている人は周囲の身近な人への共有が盛んで，精神症状にポジティブな影響を感じている傾向がわかった．また，共有意思がない群は気分症状をもつ割合が有意に少ないことがわかり，気分症状の有無が情報共有意識の差を生む要素である可能性が示唆された．

土居 明莉，耿 世嫻，矢谷 浩司．PMSや月経に伴う不調の症状や対策に関する情報の共有意識の違いに関する定量的調査．情報処理学会HCI研究会，2023年3月．[(paper)](/wp-content/uploads/2023/05/IPSJHCI-202303.pdf)

土居 明莉，耿 世嫻，矢谷 浩司．PMSや月経に伴う不調の重症度と症状や対策に関する情報共有意識の関係についての定量的調査．日本健康支援学会年次学術大会．2023年3月．[(paper)](/wp-content/uploads/2023/05/JSHP2023.pdf)
`,Ya=`---
slug: posture_study
titleEn: A Preliminary Study on Detecting Forward-Leaning Posture during Computer Use
titleJa: コンピュータ使用時のユーザの前傾姿勢の検知に向けた予備的検討
thumb: /images/research/thumbs/posture_study.png
---

![](/images/research/content/posture_study/posture_study-1024x660.png)
<!-- width: 790 height: 509 -->

IT機器の中でも特にコンピューターのディスプレイ等の画像表示端末をVisual Display Terminals (VDT)と呼ぶが，VDT使用時には，猫背など前屈みの姿勢を維持するなどの使用中の行動が人体の健康に及ぼす悪影響が懸念されている．VDTの使用は眼の痛み，ドライアイ，疲労感，手首や腕の疲れ，首や肩の痛みなどに繋がり，以上のような症状はVDT症候群と総称されている．このようなVDT症候群を検知し，予防を支援する研究は広く行われてきた．本論文では深度カメラを用いてユーザの顔の特徴量を抽出し，上半身の前傾姿勢を検知する方法の予備実験を行い，その結果及び分析について述べる．

高島 諒，矢谷 浩司．コンピュータ使用時のユーザの前傾姿勢の検知に向けた予備的検討．電子情報通信学会総合大会，2022年3月．[(paper)](/wp-content/uploads/2022/06/IEICE2022_Takashima.pdf)
`,Xa=`---
slug: programming-exercises
titleEn: GitHub上のコード変更を利用したプログラミング演習問題の実用性の評価
titleJa: ""
thumb: /images/research/thumbs/programming-exercises.png
---

![](/images/research/content/programming-exercises/matsui-hci.png)
<!-- width: 700 height: 513 -->

学校や教科書で用いられるプログラミングの演習問題と，実際のソフトウェア開発業務に関する知識やスキルの間に隔たりがあることが知られている．先行研究では，GitHubのコード変更データをプログラミング演習問題に転用するシステムであるRealCodeが開発され，既存の学習環境にはない独自の演習問題を提供可能であることが明らかになった．しかし，RealCodeが演習問題を生成する条件に検討の余地が残されていることに加え，演習問題から学べる内容と難易度についての評価・予測は行われていない．そこで，PythonまたはJavaScriptで開発を行った経験のある15人の学生，開発者により，RealCodeが作成した演習問題の妥当性，学習できる内容，難易度についての評価を実施した．本論文では，集めたデータの詳細を報告するとともに演習問題の妥当性，難易度，学習内容の予測に寄与する可能性のある特徴量について議論する．

松井 秀憲，矢谷 浩司．「GitHub上のコード変更を利用したプログラミング演習問題の実用性の評価」情報処理学会HCI研究会，2020年3月．[(paper)](/paper/IPSJHCI-202003_matsui.pdf)
`,Za=`---
slug: reframing_chatbot
titleEn: 大規模言語モデルを活用した認知再構成法支援チャットボットシステム
titleJa: ""
thumb: /images/research/thumbs/reframing_chatbot.png
---

![](/images/research/content/reframing_chatbot/DICOMO_Umeda.png)
<!-- width: 541 height: 612 -->

認知再構成法は，人々の精神状態を改善するのに有効な，確立された心理学的技法である．ユーザがチャットボットから助言を受けることや，逆にユーザがチャットボットに対して支援を行うことは，どちらもユーザの認知再構成を支援するのに効果的であることが先行研究によって示されている．しかしながら，これらのチャットボットとのやり取りが，ユーザの認知再構成や心理状態に対してもたらす影響の違いについての比較検証は，未だ十分になされていない．この課題に取り組むため，本研究では大規模言語モデルを活用して2種類のチャットボットを開発し，それらを組み込んだウェブシステムを構築した．一つは，ユーザと同様の悩みをユーザに相談するピアチャットボットであり，もう一つは，ユーザの悩みに助言を行うコンサルティングチャットボットである．統制群・ピア群・コンサルティング群の3群に分けられた計102名の参加者に対し，3週間にわたってユーザ実験を実施した．結果として，先行研究とは異なり，いずれの群においても参加者の心理状態に有意な変化は見られなかった．また，ピア群では，チャットボットの介入によって悩みに対する別の考え方を記述することがより難しく感じられたことが確認された．一方コンサルティング群においては，チャットボットの介入によって主観的解決に至った悩みの個数が有意に増加した．先行研究と照らし合わせながら，これらの結果が得られた理由について考察する．また，その考察を踏まえ，ユーザの認知再構成を効果的に支援するチャットボットシステムの設計に関しても議論する．

梅田 悠哉，楊 期蘭，平野 真理，矢谷 浩司．2024．大規模言語モデルを活用した認知再構成法支援チャットボットシステム．DICOMO 2024．[(paper)](/wp-content/uploads/2024/10/DICOMO2024_Umeda.pdf)
`,Qa=`---
slug: reviewcollage
titleEn: "ReviewCollage: A Mobile Interface for Direct Comparison Using Online Reviews"
titleJa: ""
thumb: /images/research/thumbs/reviewcollage.png
---

![](/images/research/content/reviewcollage/reviewcollage.png)
<!-- width: 400 height: 300 -->

Review comments posted in online websites can help the user decide a product to purchase or place to visit. They can also be useful to closely compare a couple of candidate entities. However, the user may have to read different webpages back and forth for comparison, and this is not desirable particularly when she is using a mobile device. We present ReviewCollage, a mobile interface that aggregates information about two reviewed entities in a one-page view. ReviewCollage uses attribute-value pairs, known to be effective for review text summarization, and highlights the similarities and differences between the entities. Our user study confirms that ReviewCollage can support the user to compare two entities and make a decision within a couple of minutes, at least as quickly as existing summarization interfaces. It also reveals that ReviewCollage could be most useful when two entities are very similar.

ウェブサイト上に掲載された様々なレビューは商品の購入や旅行先を決定する際などに役に立つ．また，レビューによってそれらを詳細に比較することもできる．しかしながら，ユーザはそれらの比較のために異なるウェブページを何度も往復して読まなければならない場合があり，これは特にモバイルデバイスを使用する際にとても煩雑な作業となる．そこで我々は，2つのエンティティに関するレビューを1ページに集約するモバイルインタフェース，ReviewCollageを提案する．ReviewCollageはレビュー文の要約に効果的であると知られている「属性と値」のペアを用いて，エンティティ間の類似点と相違点を強調して表示する．ユーザースタディの結果，ReviewCollageを用いることで，ユーザは数分以内という，少なくとも既存の要約システムと同程度に素早く2つのエンティティを比較し意思決定できることが判明した．また，ReviewCollageは2つのエンティティが似ている際に最も役に立つということもわかった．

H. Jin, T. Sakai, and K. Yatani, “ReviewCollage: A Mobile Interface for Direct Comparison Using Online Reviews,” in Proceedings of the ACM SIGCHI International Conference on Human Computer Interaction with Mobile Devices and Services (MobileHCI 2014), 2014.

[(paper)](/paper/MobileHCI2014_ReviewCollage.pdf) [(video)](http://youtu.be/QDPg2E0RYbg) **Honorable Mention Award**
`,$a=`---
slug: security_questions
titleEn: ユーザブルセキュリティ研究に向けた情報セキュリティ・プライバシーに関する問題セットの構築
titleJa: ""
thumb: /images/research/thumbs/security_questions.png
---

![](/images/research/content/security_questions/DICOMO2023_Yoshikawa-1024x576.png)
<!-- width: 790 height: 444 -->

情報セキュリティやプライバシーについて知っておくべき知識は多様であり，それらについて学ぶことは欠かせない．ユーザブルセキュリティの研究においても，実験参加者等の知識を測るために情報セキュリティ・プライバシーに関する問題を出題することがあり，インターネットに関する知識を網羅的に扱った問題セットの需要は高い．そこで本研究では，情報セキュリティ・プライバシーに関する網羅的な問題リストの作成を目指した．まず，過去10 年のユーザブルセキュリティに関する論文を分類し，9の大分類と40の小分類を作成した．そして，分類カテゴリに基づいて90 問の正誤問題を作成し，クラウドソーシング調査（N=900）で正答率を測定した．調査の結果から，問題への正答率とSeBIS のスコアの相関や，年代や居住国，性別による正答率の差異が明らかになった．

吉川 諒，徐 安然，ゼファン シュラーメク，矢谷 浩司．ユーザブルセキュリティ研究に向けた情報セキュリティ・プライバシーに関する問題セットの構築．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Yoshikawa.pdf)
`,eo=`---
slug: shopping_accessibility
titleEn: 視覚が不自由なユーザのファッション活動に関する定性的調査
titleJa: ""
thumb: /images/research/thumbs/shopping_accessibility.png
---

![](/images/research/content/shopping_accessibility/shopping_accessibility-1024x618.png)
<!-- width: 604 height: 365 -->

ファッション活動は社会生活において不可欠であり，個人のアイデンティティの表現でもある．し かし，ファッション活動は本質的に視覚を通して行われるため，視覚障がいのある人にとっては難易度が高い．情報技術は視覚が不自由なユーザのファッション活動を支えることができるが，既存研究では彼らの 必要としている情報や課題の全体像を十分に分析できていなかった．本研究は，視覚が不自由なユーザへ のインタビュー調査とその分析により，ファッションにおける視覚が不自由なユーザの問題点とその構造 に対する理解を深めることを目的とする．事前調査では視覚障がいのある 30 人の成人（全盲 18 人，弱視 12 人，男性 11 人，女性 19 人）の衣服のファッション活動に関するインタビューを通じて，定性的な調査を行った．本調査では衣料品のファッション活動が 4 つの段階，すなわち，購入前，店舗でのショッピング， 衣服管理，コーディネートから構成されていることを明らかにした．また，ファッション情報の収集，購 入する服の詳細情報の取得，着る服の状態の把握，コーディネートのフィードバックの取得といった，各段階における大きな課題を特定したうえで，ファッションに関するアクセシビリティを技術的に支援できる研究分野について論じた．

嶋田 紅緒，矢谷 浩司．「視覚が不自由なユーザのファッション活動に関する定性的調査」情報処理学会UBI研究会，2019年3月．**優秀論文賞受賞．**[(paper)](/paper/IPSJUBI-201903_shimada.pdf)
`,to=`---
slug: slacks_text
titleEn: 導電糸を用いたウェアラブルデバイス向け手書き文字入力デバイス
titleJa: ""
thumb: /images/research/thumbs/slacks_text.png
---

![](/images/research/content/slacks_text/slacks_text-1024x683.png)
<!-- width: 790 height: 527 -->

ウェアラブルデバイスには，デバイスのサイズや身につける位置などの制約から文字入力が困難であるという課題がある．これに対してすでに多くの研究が行われているが，既存の手法は文字入力をするために覚えるべきことが多い，身につけた時に違和感がある，入力時の姿勢や動作が不自然になってしまう，入力に視線の注意が常に必要といった課題がある．そこで，本研究では導電糸を用いたズボン型の手書き文字入力が可能なデバイスを提案する．手書き入力であれば，ユーザはその入力を用いるために新たに入力方法を覚える必要がなくすぐに使うことができる．また，導電糸を用いてズボンに文字入力の機構を組み込むことで身につけていることの違和感もなく，入力の動作も目立たないと考えられる．加えて，広い入力面に自由な書き方の手書き入力をできるようにすることで，アイズフリーでの入力を可能にする．これを達成するために，ストライプ状に導電糸を編み込んだデバイスで，一次元入力のみの手書き文字認識を実装する．

篠田 和宏，原田 珠華，佐野 由季，安斉 周，矢谷 浩司．「導電糸を用いたウェアラブルデバイス向け手書き文字入力デバイス」電子情報通信学会全国大会，2021年3月．[(paper)](/wp-content/uploads/2021/02/IEICE2021_Shinoda.pdf)
`,no=`---
slug: smarpp_study
titleEn: 薬物依存症治療におけるデジタルコミュニケーションの活用可能性に関する質的調査
titleJa: ""
thumb: /images/research/thumbs/smarpp_study.png
---

![](/images/research/content/smarpp_study/DICOMO2023_Shimojima-1024x281.png)
<!-- width: 790 height: 217 -->

依存症の治療としては，認知行動療法や動機づけ面接によるものの効果がこれまでの研究によって示されてきた．我が国においてそれらを活用した，物質使用障害に対する治療プログラムとしてSMARPPがある．また，これを遠隔地など専門家が現地に存在しない場面でもプログラムを受講できるシステムも開発されている．しかし，現行SMARPP における利点や欠点といった特性やプログラム内で用いられている技法を調査し，それを活かしたシステムはまだない．本研究では，そのようなシステムによる支援を目指すため，プログラム内のコミュニケーションを中心に質的調査を行った．結果，コミュニケーションの際の意識やプログラムで感じている利点や欠点などが明らかになり，デジタル技術による支援がいくつか提案された．

下島 銀士，耿 世嫻，乘濵 駿平，田村 綾子，高野 歩，矢谷 浩司．薬物依存症治療におけるデジタルコミュニケーションの活用可能性に関する質的調査．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Shimojima.pdf)
`,ro=`---
slug: sns-nudge
titleEn: Exploring Nudge Designs to Help Adolescent SNS Users Avoid Privacy and Safety Threats
titleJa: ""
thumb: /images/research/thumbs/sns-nudge.png
---

![](/images/research/content/sns-nudge/sns_nudge-e1579239180203.png)
<!-- width: 687 height: 983 -->

A nudge is a method to influence individual choices without taking away freedom of choice. We are interested in whether nudges can help adolescents avoid privacy and safety threats on social network services (SNS). We conducted online surveys to compare how 11 different nudge designs influence decisions in 9 scenarios featuring various privacy and safety threats. We collected 29,608 responses from adolescent SNS users (self-claimed high school and university students), and found that nudges can help to reduce potentially risky choices. Participants were more likely to avoid potentially risky choices when presented with negative frames (e.g., “90% of users would not share a photo without permission”) than affirmative ones (e.g., “10% of users would”). Social nudges displaying statistics on how likely other people would make potentially risky decisions can have a negative effect in comparison to a nudge with only general privacy and safety suggestions. We conclude by providing design considerations for privacy/safety nudges targeting adolescent SNS users.

ナッジは人の選択肢を奪うことなく人の行動をある方向に誘導するものである。本研究では、若年層ユーザがSNSにおけるプライバシーや安全上の脅威を避けるためのナッジの効果を検討した。プライバシーや安全上の脅威に関する9つのシナリオにおける若年層SNSユーザの意思決定が、異なる警告文のナッジによってどのように変化するのかを比較するオンライン調査を実施した。その結果、ナッジの存在がリスクの高い行動を避けるのに有用となり得ることを確認した。また、「55%の人は（SNSで知り合った人と1対1で）会わないそうだよ」といった否定文のナッジを提示された時の方が、「45%の人は会うそうだよ」といった肯定文のナッジを提示された時と比較して、実験参加者はリスクの高い選択肢を避ける傾向があることが分かった。さらに、他の人がどのように行動するのかを統計的に示すソーシャルナッジは、単にプライバシーや安全に関しての提案を行うナッジと比較して、安全な行動を促進する上で逆効果ともなり得ることが分かった。最後に、若年層SNSユーザのためのナッジデザインの検討を述べる。

正木 博明，柴田 健吾，星野 秀偉，石濱 嵩博，齋藤 長行，矢谷 浩司．若年層SNSユーザに対するプライバシ・安全上の行動に関するナッジの大規模定量調査．情報処理学会論文誌，61(12)，1892-1902，2020．[(paper)](/wp-content/uploads/2021/06/IPSJ-202012.pdf)

Hiroaki Masaki, Kengo Shibata, Shui Hoshino, Takahiro Ishihama, Nagayuki Saito, and Koji Yatani. Exploring Nudge Designs to Help Adolescent SNS Users Avoid Privacy and Safety Threats. _In Proceedings of ACM CHI Conference on Human Factors in Computing Systems, _1-11, April 2020. **Honorable Mention Award winner** [(paper)](/paper/CHI2020.pdf)

正木 博明，柴田 健吾，星野 秀偉，石濵 嵩博，齋藤 長行，矢谷 浩司．「SNS上の行動に関する若年層ユーザに対するナッジの効果検証」情報処理学会HCI研究会，2020年1月．**学生奨励賞受賞．**[(paper)](/paper/IPSJHCI-202001_masaki.pdf)
`,io=`---
slug: socialpii
titleEn: ソーシャルメディア上の行動データから流出する個人情報の定量的分析
titleJa: ""
thumb: /images/research/thumbs/socialpii.png
---

![](/images/research/content/socialpii/social-1024x576.png)
<!-- width: 604 height: 340 -->

情報社会において個人情報を適切に守ることは重要だが，スマートフォンとソーシャルメディアの普及とともに，個人情報の流出経路が多様化している．中でもSNSには，テキストを投稿するだけでなく，他者と交流したり他者の投稿に対してリアクションを行ったりする機能がある．このような行動データから，自らが意図的に個人情報を含んだ投稿を行わなくとも，個人情報の流出が起きる可能性がある．本研究ではSNSとしてTwitterのデータを分析に用いて，本人が投稿したテキスト以外から流出する個人情報について，定量的な評価を行った．

畑田裕二，矢谷浩司．「ソーシャルメディア上の行動データから流出する個人情報の定量的分析」第80回情報処理学会全国大会，2018年3月．**学生奨励賞受賞．**[(paper)](/paper/IPSJ2018_social.pdf)
`,ao=`---
slug: socialvr_inclusion
titleEn: ソーシャルVR空間参加時における被受容感に関する調査
titleJa: ""
thumb: /images/research/thumbs/socialvr_inclusion.png
---

![](/images/research/content/socialvr_inclusion/socialvr_inclusion-1024x576.png)
<!-- width: 790 height: 444 -->

ソーシャルVR 空間でのユーザの被受容感は，新しく参加するユーザにとってはその空間の印象を決める重要なものである．この被受容感がユーザのどのような振る舞いに依存するかが明らかになれば，被受容感の醸成度合いを定量的に示したり，被受容感を高める提案をコミュニティに提供したりできる．本稿では，相手を見る，相手に手をふるなどの振る舞いが，ユーザの被受容感にどう関係するかを比較検討する実験の結果を報告する.

方 詩涛，矢谷 浩司．ソーシャルVR空間参加時における被受容感に関する調査．日本バーチャルリアリティ学会大会，2022年9月．[(paper)](/wp-content/uploads/2022/10/VRSJ2022.pdf)
`,oo=`---
slug: strummer
titleEn: "Strummer: An Interactive Guitar Chord Practice System"
titleJa: ""
thumb: /images/research/thumbs/strummer.png
---

![](/images/research/content/strummer/strummer.png)
<!-- width: 485 height: 341 -->

Musical instrument playing is a skill many people desire to acquire, and learners now have a wide variety of learning materials. However, their volume is enormous, and novice learners may easily get lost in which songs they should practice first. We develop Strummer: an interactive multimedial system for guitar practice. Strummer provide data-driven and personalized practice for learners in order to identify important and easy-to-learn chords and songs. This practice design is intended to encourage smooth skill transfers to songs that learners even have not seen. Our user study confirms the benefits and possible improvements of the Strummer system. In particular, participants expressed their positive impressions on lessons provided by the system.

楽器の演奏は多くの人が望むスキルであり，様々な練習方法や教材が考案されているが，その種類の多さゆえ初心者は何を練習すればよいのか迷いがちである．さらに独学では自分の演奏の可否を判断して修正することが難しく，これらはモチベーション低下につながる問題となっている．本稿では，データドリブンでインタラクティブなギターコード練習システム 「Strummer」 を提案する．Strummer システムの開発にあたり，コードラベルが付与された 727 曲分の楽曲データを解析し，コードの出現率と難易度を考慮した曲の重要性の尺度を新たに定義した．これをシステム中で用いることで，ユーザは簡単かつ重要な楽曲から練習が可能になる．さらに，本システムは音響信号解析によってユーザが正しいコードを弾いたのかを認識してフィードバックする機能を有しており，インタラクティブかつ段階的な練習を提供する．実験では 5 人のギター初心者に計 5 時間ずつ本システムを用いてギター練習をしてもらい，インタビューやアンケートを実施し，本システムの評価を行った．

Shunya Ariga, Masataka Goto, and Koji Yatani. Strummer: An Interactive Guitar Chord Practice System. In Proc. ICME 2017, pp. 1057-1062. [(paper)](/paper/ICME2017.pdf)

有賀竣哉，後藤真孝，矢谷浩司．「Strummer：インタラクティブなギターコード練習システム」第114回報処理学会音楽情報科学研究会，2017-MUS-114(24)，1-6，2017年2月．[(paper)](/paper/IPSJMUS-201703.pdf) **学生奨励賞受賞．平成29年度山下記念研究賞受賞．**
`,so=`---
slug: stylesnap
titleEn: Mixed-Initiative Approaches to Global Editing in Slideware
titleJa: ""
thumb: /images/research/thumbs/stylesnap.png
---

![](/images/research/content/stylesnap/stylesnap.png)
<!-- width: 500 height: 408 -->

Good alignment and repetition of objects across presentation slides can facilitate visual processing and contribute to audience understanding. However, creating and maintaining such consistency during slide design is difficult. To solve this problem, we present two complementary tools: (1) StyleSnap, which increases the alignment and repetition of objects by adaptively clustering object edge positions and allowing parallel editing of all objects snapped to the same spatial extent; and (2) FlashFormat, which infers the least-general generalization of editing examples and applies it throughout the selected range. In user studies of repetitive styling task performance, StyleSnap and FlashFormat were 4-5 times and 2-3 times faster respectively than conventional editing. Both use a mixed-initiative approach to improve the consistency of slide decks and generalize to any situations involving direct editing across disjoint visual spaces.

プレゼンテーションスライド全体でオブジェクトの整列と繰り返しが適切になされていれば，スライドの構造が見やすくなり内容も理解しやすくなる．しかしながら，スライド作成中にそのような一貫性を作り出し，維持することは難しい．この問題を解決するため，我々は2つのツールStyleSnapとFlashFormatを提案する．StyleSnapはスライド内のオブジェクトのエッジの位置を適応的にクラスタリングし，同じ空間範囲にスナップされたオブジェクトを並列に編集することで，オブジェクトの配置と繰り返し度合いを向上させる．FlashFormatは編集中のオブジェクト例の最小限一般化を推論し，選択範囲全体にそれを適応するものである．繰り返しに関するスタイリングタスクをユーザに行なってもらった結果，StyleSnapとFlashFormatを利用することで，従来のスライド編集方法に比べ，それぞれ4~5倍，2~3倍はやく行うことができた．この2つのツールはスライドを一貫性を向上させ，また異なる空間的位置にあるオブジェクトを直接一括で編集するといういかなる状況でも使用することができる．

Darren Edge, Sumit Gulwani, Natasa Milic-Frayling, Mohammad Raza, Reza Adhitya Saputra, Chao Wang, and Koji Yatani. Mixed-Initiative Approaches to Global Editing in Slideware,” in Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2015), 2015.

[(paper)](/paper/CHI2015.pdf)
`,co=`---
slug: subepidermal
titleEn: Demonstrating the Feasibility of Subepidermal Image Sensing for Hand Posture and Gesture Recognition
titleJa: 表皮下の画像を用いたウェアラブルな手の姿勢とジェスチャ認識手法
thumb: /images/research/thumbs/subepidermal.png
---

![](/images/research/content/subepidermal/subepidermal-1024x406.png)
<!-- width: 790 height: 313 -->

Light-based wearable sensing methods for human body motion often rely on a few single light emitters and receivers, which leads to limited sensing capabilities. While increasing the number of light sources and sensors can help detect more complex motions, this increase in hardware often degrades wearability and mobility. In this paper, we employ a flexible organic photosensor matrix surrounded by an LED array as the light source to detect subepidermal images on the back of the hand. We then use computer vision and deep learning techniques to detect patterns based on blood-related changes under the skin. Our sensor system can accurately distinguish 32 hand postures and 17 gestures in user-dependent training, showing promise for ultra-light wearable systems in natural user interface applications.

D. A. Chacon, K. Shinoda, T. Yokota and K. Yatani, Demonstrating the Feasibility of Subepidermal Image Sensing for Hand Posture and Gesture Recognition. _IEEE Sensors Letters_, 2022. [(paper)](/wp-content/uploads/2022/09/SensorLetter2022.pdf)
`,lo=`---
slug: summary-note-with-ai
titleEn: 授業後の要約ノート作成支援アシスタントの設計と評価
titleJa: ""
thumb: /images/research/thumbs/summary-note-with-ai.png
---

![](/images/research/content/summary-note-with-ai/summary-note-1024x677.png)
<!-- width: 790 height: 522 -->

要約ノート作成は理解を深める一方で，心理的コストの高さやモチベーションの維持が課題となる．本研究ではGPT-4を用いたシステムを開発し，「説明」または「質問」を提示する介入の効果を3群間比較実験によって要約ノート作成に対する効果を検証した ．実験の結果，説明群においてノート作成中の文字数の変化量に有意な増加が確認されたが ，ノートの質やテスト成績については群間で有意な差は認められなかった ．定性的には，アシスタントが見落としの防止や安心感の提供に寄与する一方で ，既述内容の再提示による集中の阻害や，AIが提示した箇所のみに意識が向くといった依存性の課題が明らかとなった．

香取浩紀，矢谷浩司，楊期蘭．2025．授業後の要約ノート作成支援アシスタントの設計と評価．情報処理学会全国大会，2025年3月．[(paper)](/wp-content/uploads/2025/12/IPSJ2025-Katori.pdf) **学生奨励賞受賞**
`,uo=`---
slug: syncup
titleEn: "SyncUp: Vision-based Practice Support for Synchronized Dancing"
titleJa: コンピュータビジョンによるシンクロダンス練習支援システム
thumb: /images/research/thumbs/syncup.png
---

![](/images/research/content/syncup/syncup-1024x577.png)
<!-- width: 790 height: 445 -->

The beauty of synchronized dancing lies in the synchronization of body movements among multiple dancers. While dancers utilize camera recording for their practice, standard video interfaces do not efficiently support their activities of identifying segments where they are not well synchronized. This thus fails to close a tight loop of an iterative practice process (i.e.,capturing a practice, reviewing the video, and practicing again). We present SyncUp, a system providing multiple interactive visualizations to support the practice of synchronized dancing to liberate users from manual inspection of recorded practice videos. By analyzing videos uploaded by users, SyncUp quantifies two aspects of synchronization in dancing: pose similarity among multiple dancers and temporal alignment of their movements. The system then highlights which body parts and which portions of the dance routine require further practice to achieve better synchronization. The results of our system evaluations show that our pose similarity estimation and temporal alignment predictions were correlated with human ratings well. Participants in our qualitative user evaluation expressed the benefits and its potential use of SyncUp, confirming that it would enable quick iterative practice.

シンクロダンスの美しさは，複数のダンサーの間で体のポーズが同期していることにある．ダンサーは練習にカメラ録画を利用しているが，標準的な動画インタフェースでは，ポーズの同期が十分でない部分を特定し，さらなる練習を行うことを効率的に支援できていない．今回提案するSyncUpは，一般的なカメラで撮影された動画を用いるシンクロダンス練習支援システムである．SyncUpは，ユーザがアップロードした動画を解析することで，動画中の複数ダンサーのポーズの類似性を定量化する．そしてより良い同期性を実現するために，体のどの部分の練習する必要があるのかを可視化する．本稿では，SyncUpの実装手法，およびシンクロダンスに特化したポーズ類似性推定手法の詳細と評価について報告する．

Zhongyi Zhou, Anran Xu, and Koji Yatani. 2021. SyncUp: Vision-based Practice Support for Synchronized Dancing. _Proc. ACM Interact. Mob. Wearable Ubiquitous Technol._ 5, 3, Article 143 (Sept 2021), 25 pages. [(paper)](/wp-content/uploads/2021/11/IMWUT_SyncUp.pdf) **PACM IMWUT Distinguished Paper Award winner, Best Presentation Award winner at UbiComp/ISWC 2021**

周 中一，矢谷 浩司．「人体ポーズ分析を応用したシンクロダンス練習支援システム」情報処理学会UBI研究会，2020年12月．**学生奨励賞受賞．** [(paper)](/wp-content/uploads/2020/12/IPSJUBI-202012.pdf)

Zhongyi Zhou, Yuki Tsubouchi, and Koji Yatani. 2019. Visualizing Out-of-synchronization in Group Dancing. In _The Adjunct Publication of __UIST 2019,_ 107–109. [(paper)](/wp-content/uploads/2021/01/UIST2019.pdf)
`,fo=`---
slug: synthesizer-support
titleEn: "SoundTraveller: Exploring Abstraction and Entanglement in Timbre Creation Interfaces for Synthesizers"
titleJa: シンセサイザを用いた音の創作に向けたインタラクティブな音色探索支援
thumb: /images/research/thumbs/synthesizer-support.jpg
---

![](/images/research/content/synthesizer-support/timbre-exploration-prototype-1024x690.jpg)
<!-- width: 790 height: 532 -->

Electronic music synthesizers are instruments that give the user direct control of their timbre. Synthesizers with hundreds of parameters can create thousands of unique timbres, but this complexity also hinders musicians' ability to explore these timbres effectively. Our interview study with ten electronic musicians revealed that, while they desired unique sounds for their music, many participants lacked the understanding or motivation to program their own timbres from scratch, instead generally relying on presets. While many previous works have proposed novel interfaces for electronic music synthesis or performance, few researchers have looked at timbral exploration interfaces. Based on our formative study, we developed nine synthesizer programming interface design guidelines, with which, and a participatory design study, we developed a novel timbral exploration interface prototype. Rather than editing individual parameters or auditioning presets, our system allows the user to define and explore the timbral space within local regions. This is achieved with two modes: morphing and evolutionary. In both these modes it is possible to generate hundreds of unique timbres without the need to understand how individual parameters are changing. Using our prototype, we conducted a user study in order to observe how these tools, and the interface we developed for them, offered our participants new methods for timbre exploration, which helped them create new sounds and gain inspiration for their compositions. We witnessed how the prototype was adopted into their existing sound design and composition workflows, allowing them to create unique timbres that they could not previously access.

電子音楽用シンセサイザは，ユーザが音色を直接コントロールできる楽器である．シンセサイザにおいては音色に関する何百ものパラメータが調整可能であり，数多くの音色を作り出すことが可能である一方，この自由度の高さはミュージシャンがこれらの音色を効果的に探求する能力の妨げにもなりえる．10人のエレクトロニック・ミュージシャンへのインタビュー調査の結果，彼らは自分の音楽のために独自のサウンドを求めているものの，多くの場合自分の音色をゼロからプログラミングする理解やモチベーションがなく，既存の音色に頼ることが多いことがわかった．電子音楽の合成や演奏のための新しいインタフェースは数多く提案されているが，シンセサイザにおける音色の探索を支援する方法は研究されていない．本研究では，インタビュー調査によって，シンセサイザにおける音色構築インタフェースのデザインガイドラインを作成し，それに基づいて参加型デザイン・スタディを行い，新しい音色探索インタフェースを構築した．本システムでは，個々のパラメータを編集したり，プリセットを試聴したりするのではなく，ユーザが局所的な領域における音色空間を定義し，探索することを可能としている．この探索は，モーフィングとエボリューションという2つのモードで実現されている．この2つのモードでは，個々のパラメータがどのように変化しているかを理解しなくても，何百ものユニークな音色を生成することが可能となる．ユーザ実験においては，本プロトタイプが参加者に音色を探索するための新しい方法を提供し，新しい音色の創造や作曲のためのインスピレーションを得るのに役立っているかを検証した．結果，本プロトタイプが既存のサウンドデザインや作曲のワークフローにうまく融合され，本プロトタイプがない場合には発見できなかった音色を生み出すことができるようになったことを確認した．

Zefan Sramek, Arissa J. Sato, Zhongyi Zhou, Simo Hosio, and Koji Yatani. SoundTraveller: Exploring Abstraction and Entanglement in Timbre Creation Interfaces for Synthesizers. _To appear in Proceedings of the ACM SIGCHI Conference on Designing Interactive Systems (DIS 2023)_, 2023. [(paper)](/wp-content/uploads/2023/05/DIS2023.pdf)

Zefan Sramek, and Koji Yatani. Interactive Timbre Exploration Support for Sound Authoring with Synthesizers. Demo presentation at New Interfaces for Musical Expression 2021, June 2021. [(paper)](/wp-content/uploads/2021/08/NIME2021.pdf)

Zefan Sramek，矢谷浩司．シンセサイザを用いた音の創作に向けたインタラ クティブな音色探索支援．情報処理学会 SIGMUS研究会，2021年6月．[(paper)](/wp-content/uploads/2021/08/IPSJSIGMUS-202106.pdf)
`,po=`---
slug: tabby
titleEn: "Tabby: Explorable Design for 3D Printing Textures."
titleJa: ""
thumb: /images/research/thumbs/tabby.png
---

This paper presents Tabby, an interactive and explorable design tool for 3D printing textures. Tabby allows texture design with direct manipulation in the following workflow: 1) select a target surface, 2) sketch and manipulate a texture with 2D drawings, and then 3) generate 3D printing textures onto an arbitrary curved surface. To enable efficient texture creation, Tabby leverages an auto-completion approach which automates the tedious, repetitive process of applying texture, while allowing flexible customization. Our user evaluation study with seven participants confirms that Tabby can effectively support the design exploration of different patterns for both novice and experienced users.

Ryo Suzuki, Koji Yatani, Mark D. Gross, and Tom Yeh. Tabby: Explorable Design for 3D Printing Textures.\xA0In Proceedings of Pacific Graphics 2018.
`,L=`---
slug: talkzones
titleEn: "TalkZones: Section-based Time Support for Presentations"
titleJa: ""
thumb: /images/research/thumbs/talkzones.png
---

![](/images/research/content/talkzones/talkzones.png)
<!-- width: 400 height: 300 -->

プレゼンテーション中の時間管理は多くのユーザにとって課題である．モバイルデバイスの利便性と柔軟性をうまく活用することで，プレゼンテーション時間の目標を設定・調整・トラックすることができる可能性がある．20人の参加者に対する初期実験の結果，スライド単位でもプレゼンテーション全体でもなく「ゾーン」と呼ばれる一連のスライド群に対して時間目標を設定すべきであり，また，プレゼンテーションのタイミングに関する2つのタイプのフィードバックを行う必要があるということが判明した．これらに基づいて我々はプレゼンテーション時間管理アプリケーションであるTalkZonesを開発した．20枚のスライドを6分40秒でプレゼンしてもらう実験では，通常のタイマを使用した12人のプレゼン平均超過時間は1分49秒だったのに対し，TalkZonesを使用した12人はわずか8秒であった．また，本来なら30分のプレゼンを20分で行ってもらう実験を8人に対し行なった結果，2%しか時間超過しないという結果も得られた．したがって，TalkZonesは時間超過につながる前にプレゼンを進行させ，時間通り発表を行えるようにユーザを支援することができた．

B. Saket, S. Yang, H. Z. Tan, K. Yatani, and D. Edge, “TalkZones: Section-based Time Support for Presentations,” in Proceedings of the ACM SIGCHI International Conference on Human Computer Interaction with Mobile Devices and Services (MobileHCI 2014), 2014.

[(paper)](/paper/MobileHCI2014_TalkZones.pdf) [(video)](http://youtu.be/90MpLqvHJjw) **Honorable Mention Award**
`,mo=`---
slug: terms-of-use
titleEn: サービス利用規約の読解促進に向けた特異な条項を強調するインタフェースの実装と評価
titleJa: ""
thumb: /images/research/thumbs/terms-of-use.png
---

![](/images/research/content/terms-of-use/termcheck-1024x750.png)
<!-- width: 790 height: 579 -->

オンラインでサービスを初めて利用するとき，サービスを提供する企業が提示する利用規約にユーザは同意しなければならない．利用規約に同意するボタンをクリックする行為は契約を締結する行為と同等の効果を持つ．しかし，利用規約を読んで正しく理解した上で同意または拒否を選択するユーザは極めて少なく，多くのユーザが内容をほとんど読まずに同意を選択している．ユーザに利用規約を読解してもらうために企業が取りうる1つの方法として，利用規約のユーザへの見せ方（表示手法）を工夫することが挙げられる．例えば，利用規約を表示するページのスタイリングを工夫したり，利用規約の重要な部分について別途概要などの補助的なコンテンツを追加したりすることが挙げられる．しかし，表示手法の工夫の方法は企業によって統一されておらず，それぞれの表示手法の実際の効果は不明である．そこで本研究では，様々な利用規約の表示手法にユーザの利用規約の読解を促進する効果があるかを定量的に調べることを目的とする．そのため，架空のSNSのウェブサイトと利用規約を独自に用意し，クラウドソーシングを活用したユーザ実験を通じて複数の利用規約の表示手法を比較評価した．結果，利用規約の表示手法は，ユーザの利用規約の理解度とほとんど関係ないことがわかった．また，利用規約には一般的には見られない内容が含まれていても，ユーザがそれに気づかない可能性が高いという知見も得られた．さらに，このようなリスクを低減するインタフェースの要件を検討し，要件を可能な限り満たすインタフェースのプロトタイプを実装した．現プロトタイプは，筆者らが先行研究で構築したウェブサイトで動作するブラウザ拡張機能である．論文では，現在までに構築したプロトタイプの実装の詳細とその評価実験の結果について述べ，今後の研究課題について議論する．

竹ノ内 朝陽，矢谷 浩司．「サービス利用規約の読解促進に向けた特異な条項を強調するインタフェースの実装と評価」情報処理学会SPT研究会，2021年3月．[(paper)](/wp-content/uploads/2021/02/IPSJSPT-202103.pdf)

竹ノ内 朝陽，矢谷 浩司．「利用規約中の特異な文章を強調するインタフェース」電子情報通信学会全国大会，2021年3月．[(paper)](/wp-content/uploads/2021/02/IEICE2021_Takenouchi.pdf)

竹ノ内 朝陽，矢谷 浩司．サービス利用規約の読解促進を目指した表示手法の比較検討．FIT 2020，第3分冊，57 – 64．[(paper)](/paper/FIT2020_Takenouchi.pdf)
`,ho=`---
slug: two-modes-reflection
titleEn: "Two Modes of Reflection: How Temporal, Spatial, and Social Distances Affect Reflective Writing in Family Caregiving"
titleJa: 家族内ケアストレスの内省記述における時間・空間・社会的距離の影響の調査
thumb: /images/research/thumbs/two-modes-reflection.jpg
---

![](/images/research/content/two-modes-reflection/two-modes-reflection-1024x1024.jpg)
<!-- width: 790 height: 790 -->

Writing about personal experiences can improve well-being, but for family caregivers, fixed or user-initiated schedules often miss the right moments. Drawing on Construal Level Theory, we conducted a three-week field study with 47 caregivers using a chatbot that delivered daily reflective writing prompts and captured temporal, spatial, and social contexts. We collected 958 writing entries, resulting in 5,412 coded segments. Our Analysis revealed two reflective modes. Under proximal conditions, participants produced detailed, emotion-rich, and care recipient-focused narratives that supported emotional release. Under distal conditions, they generated calmer, self-focused, and analytic accounts that enabled objective reflection and cognitive reappraisal. Participants described trade-offs: proximity preserved vivid detail but limited objectivity, while distance enabled analysis but risked memory loss. This work contributes empirical evidence of how psychological distances shape reflective writing and proposes design implications for distance-aware Just-in-Time Adaptive Interventions for family caregivers' mental health support.

モバイル端末上での内省記述は家族内ケアにおけるストレスの緩和とウェルビーイング向上につながるが，ケア相手の状態に左右されやすく，実施タイミングの最適化が難しい．そこで本研究は解釈レベル理論に基づき，ケア相手とのストレス事象からの時間的・空間的・社会的距離が，内省記述の内容や体験，効果に与える影響を調査した．3週間のユーザ実験にて，家族内ケアを行う参加者に多様なタイミングでケアにおけるストレスについて振り返って記述するよう促し，記述内容と記述時の状況のデータを収集し，分析した．結果として，内省記述における2つのモードが明らかになった．近接状況では，ケア相手に焦点を当てて具体的に・感情的に記述する傾向があり，感情の発散に繋がっていた．一方で遠隔状況では，落ち着いて客観的に記述でき，参加者自身についての分析的記述が増え，認知や行動の変容を促した．これらの心理的距離と内省記述の関係性をもとに，家族内ケアにおける適時介入の設計について議論する．

Shunpei Norihama, Yuka Iwane, Jo Takezawa, Simo Hosio, Mari Hirano, Naomi Yamashita, Koji Yatani. 2025.

Two Modes of Reflection: How Temporal, Spatial, and Social Distances Affect Reflective Writing in Family Caregiving.

[https://arxiv.org/abs/2510.05510](https://arxiv.org/abs/2510.05510)

乘濵 駿平, 岩根 由佳, 竹澤 譲, ホシオ シモ, 平野 真理, 山下 直美, 矢谷 浩司．家族内ケアストレスの内省記述における時間・空間・社会的距離の影響の調査．情報処理学会HCI研究会．2025年11月．[(paper)](/wp-content/uploads/2026/03/IPSJUBI-202511_Norihama.pdf)
`,R=`---
slug: voice_support_gesture
titleEn: 発声支援デバイスの制御を目的とした手のジェスチャに関する社会的受容性の調査
titleJa: ""
thumb: /images/research/thumbs/voice_support_gesture.png
---

![](/images/research/content/voice_support_gesture/DICOMO2023_Sawano-1024x732.png)
<!-- width: 790 height: 565 -->

がんの治療などによって声を失った喉頭摘出者が用いる代用発声法の一つに発声支援デバイスを用いた発声法があるが, 一部の発声支援デバイスは声に抑揚がなく不自然に聞こえるという欠点がある. 過去の研究において複数の抑揚制御の方法が提案されてきたが, デバイスを持つことにより常に片手が塞がれてしまったり, 抑揚制御が呼気量に依存してしまうといった欠点がある. これらを解決するために, 本研究では新たにジェスチャを用いて声の抑揚を制御するシステムの設計に向けて, 発声障がい者が会話している状況下において人々がジェスチャに対して感じる社会的受容性を調査した. その際ジェスチャを行う側と観測する側の双方の立場からの調査を行い, 社会的受容性の観点からどのような特徴を持つジェスチャがシステムの入力に相応しいかを考察した.

澤野 令，山田 大志，佐藤 安理紗 ジエンジエラ，戸原 玄，矢谷 浩司．発声支援デバイスの制御を目的とした手のジェスチャに関する社会的受容性の調査．DICOMO 2023，2023年7月．[(paper)](/wp-content/uploads/2023/06/DICOMO2023_Sawano.pdf)
`,z=`---
slug: wheelin
titleEn: 車椅子アクセシビリティ情報収集における飲食店の外観写真の有用性
titleJa: ""
thumb: /images/research/thumbs/wheelin.png
---

![](/images/research/content/wheelin/wheelchair_accessibility-300x200.png)
<!-- width: 600 height: 400 -->

車椅子利用者が飲食店を訪れる際，目的地にて車椅子が支障なく利用できるかという情報を知ることが必要となる．このようなアクセシビリティ情報をいかにして入手しているのかを調査するため，本研究ではまず7名の車椅子利用者にインタビューを行った．結果，飲食店口コミサイトにおける外観写真をよく利用していることがわかった．本研究ではさらに，車椅子利用者がアクセシビリティ情報の判断に有用だと感じたレストランの写真を収集・分析し，それらの特徴について整理を行った．本稿ではインタビュー調査の結果とともに，収集した写真の分析結果を報告し，これらの知見が車椅子アクセシビリティの向上を目指すユビキタス・モバイルシステムにどのように応用できるかを議論する．

宮崎章太，矢谷浩司．「車椅子アクセシビリティ情報収集における飲食店の外観写真の有用性」第53回報処理学会UBI研究会，2017年3月．[(paper)](/paper/IPSJUBI-201703_miyazaki.pdf)
`,B=`---
slug: window_study
titleEn: 風を用いたインタフェース実現に向けた風に関する知覚の定量的調査
titleJa: ""
thumb: /images/research/thumbs/window_study.png
---

![](/images/research/content/window_study/window_study-1024x763.png)
<!-- width: 604 height: 450 -->

風は新たなユーザインタフェースの情報提示手法として近年注目されている．しかし，先行研究で はインタフェースとして利用可能な風を起こすシステムを実現することが主な目的となっており，風によ る刺激と人間の知覚の関係性においては明らかになっていないことも多い．本研究では，人間の知覚を考 慮した風を用いたユーザインタフェースを実現するために，扇風機を用いた風に対する知覚を定量的に評 価する実験システムを構築した．そのシステムを用いて，ユーザが風の変化に気づくのに必要な強さの変 化量を調査した．さらに，調査した結果から風と人間の知覚の関係に関する知見をまとめることで風によ るユーザインタフェースの設計のガイドラインを提案する．

竹ノ内 朝陽，矢谷 浩司．「風を用いたインタフェース実現に向けた風に関する知覚の定量的調査」情報処理学会UBI研究会，2019年3月．[(paper)](/paper/IPSJUBI-201903_takenouchi.pdf)
`,go=`---
slug: writing-discloure
titleEn: Understanding Reader Perception Shifts upon Disclosure of AI Authorship
titleJa: AIによる執筆を開示することで読み手の認識に及ぶ影響の理解に向けて
thumb: /images/research/thumbs/writing-discloure.png
---

![](/images/research/content/writing-discloure/writing-disclosure.png)
<!-- width: 960 height: 540 -->

As AI writing support becomes ubiquitous, how disclosing its use affects reader perception remains a critical, underexplored question. We conducted a study with 261 participants to examine how revealing varying levels of AI involvement shifts author impressions across six distinct communicative acts. Our analysis of 990 responses shows that disclosure generally erodes perceptions of trustworthiness, caring, competence, and likability, with the sharpest declines in social and interpersonal writing. A thematic analysis of participants' feedback links these negative shifts to a perceived loss of human sincerity, diminished author effort, and the contextual inappropriateness of AI. Conversely, we find that higher AI literacy mitigates these negative perceptions, leading to greater tolerance or even appreciation for AI use. Our results highlight the nuanced social dynamics of AI-mediated authorship and inform design implications for creating transparent, context-sensitive writing systems that better preserve trust and authenticity.

AIによる筆記支援が広く普及しているが、AIの使用を開示することが読み手の認識にどう影響するかは、重要な問題であるものの十分に調査されていない。私たちは261人の参加者を対象とし、コミュニケーションにおける6種類の手段のそれぞれについて様々な度合いのAIの支援を開示することで、書き手に対する印象がどのように変化するのかを調査した。990件の回答を分析した結果、AIの使用を開示することは一般的に書き手の信頼性・思いやり・有能さ・好感を低下させ、特に他者に社会的にはたらきかける文章においてその印象の悪化が最も顕著であった。参加者からのフィードバックをトピック分析したところ、AIを使用することによる人間らしい誠実さの喪失、書き手の省力化、そして文脈による不適切さがこれらの否定的な変化に結びついていることを示した。逆に、AIリテラシーが高いほどこうした否定的な認識が緩和され、例えばAIの使用に対してより寛容になったりむしろ肯定的に評価したりすることもあることが分かった。これらの知見は、AIによる執筆にまつわる社会的な複雑さを浮き彫りにするとともに、AIの使用の透明性を高めつつ文脈を考慮して支援を行うことで信頼や信憑性を維持するためのシステムデザインに関する示唆を与えている。

Hiroki Nakano, Jo Takezawa, Fabrice Matulic, Chi-Lan Yang, Koji Yatani. 2026. Understanding Reader Perception Shifts upon Disclosure of AI Authorship. In Proceedings of IUI 2026.

[https://arxiv.org/abs/2510.24011](https://arxiv.org/abs/2510.24011)

中野 博貴，竹澤 譲，楊 期蘭，矢谷 浩司．AIによる執筆を開示することで読み手の認識に及ぶ影響の理解に向けて．情報処理学会UBI研究会，2025年11月．[(paper)](/wp-content/uploads/2026/03/IPSJUBI-202511_Nakano.pdf)
`,_o=`---
slug: xps-analysis
titleEn: A Qualitative Study toward Supporting Non-expert to Perform Measurements and Analysis in Photoemission Spectroscopy
titleJa: 非熟練ユーザーの光電子分光計測・分析支援に向けた質的調査
thumb: /images/research/thumbs/xps-analysis.png
---

![](/images/research/content/xps-analysis/XPS-analysis-1024x546.png)
<!-- width: 790 height: 421 -->

光電効果を応用した実験手法の一つに光電子分光法 (photoemission spectroscopy) がある．X線などの高エネルギーの電磁波を試料に照射した際に試料表面から出てきた電子（光電子）を解析することで物質表面や内部の電子状態などを調べる光電子分光は，今や物質科学，生命科学，医学，ナノテクノロジーなど様々な分野で欠かせない実験手法となっている．光電子分光では光源として，物質由来の特性 X 線の他に，放射光と呼ばれる連続的な電磁波（光）を使用することがある．高輝度な放射光光源を用いることで，計測精度が飛躍的に向上し，計測時間の短縮も見込める．しかし，放射光を用いた光電子分光では，放射光施設において，限られた利用時間内に素早く正確な計測と解析をミスなく遂行する必要があり，特に施設や装置，実験手法に不慣れなユーザーには負担が大きい．この課題を解決する計測・分析支援ツールを開発するために，筆者らはまず非熟練ユーザーと専門家合計7名にインタビューを行った．本稿ではその結果を報告し，今後の展望について述べる．

桝田 拓磨，小林 正起，矢谷 浩司．非熟練ユーザーの光電子分光計測・分析支援に向けた質的調査．電子情報通信学会総合大会，2022年3月．[(paper)](/wp-content/uploads/2022/06/IEICE2022_Masuda.pdf)
`,vo=`multi-ai-reading
two-modes-reflection
alter-ego-interview
writing-discloure
extraherics
iot-prototyping
group-mi-training
summary-note-with-ai
interactive-gcr
gcr
expwriting_feedback
genai-infovis
expwriting_feedbackdesign
reframing_chatbot
dipa
code_annotation
voice_support_gesture
smarpp_study
security_questions
notification_design
imt_with_genai
cloth_deformation
chatbot_input
parent_child_reading
groupnamics
embroidery_sensor
pms_survey
socialvr_inclusion
lookhere
subepidermal
hidetight
oralfrality-inference
xps-analysis
dualcheck
posture_study
cycling-behavior
informal-chat
synthesizer-support
handkerchief
dearboard
slacks_text
terms-of-use
syncup
orchestra-program
code-analysis
coding-interview
continuous-curves
dual-freq-sensing
garment-design-ui
programming-exercises
eye-dryness
dual-purpose_ppg_2
plagiarism_feedback
sns-nudge
impulsive_buying
linked
shopping_accessibility
window_study
codeglass
tabby
auth-n-scan
socialpii
knowledgedeck
dida
circuitgeneration
iconstudy
codequiz
lumio
al-light
stylesnap
autocomplete-animations
elecguitar
lock-n-lol
elasticplay
strummer
dumbbell
wheelin
graphie
phones-on-wheels
nugu
talkzones
reviewcollage
`,yo=Object.assign({"./markdown/research/al-light.md":Ji,"./markdown/research/alter-ego-interview.md":Yi,"./markdown/research/auth-n-scan.md":Xi,"./markdown/research/autocomplete-animations.md":Zi,"./markdown/research/chatbot_input.md":Qi,"./markdown/research/circuitgeneration.md":$i,"./markdown/research/cloth_deformation.md":ea,"./markdown/research/code-analysis.md":ta,"./markdown/research/code_annotation.md":na,"./markdown/research/codeglass.md":ra,"./markdown/research/codequiz.md":ia,"./markdown/research/coding-interview.md":aa,"./markdown/research/continuous-curves.md":oa,"./markdown/research/cycling-behavior.md":sa,"./markdown/research/dearboard.md":ca,"./markdown/research/dida.md":la,"./markdown/research/dipa.md":ua,"./markdown/research/dual-freq-sensing.md":I,"./markdown/research/dual-purpose_ppg_2.md":da,"./markdown/research/dualcheck.md":fa,"./markdown/research/dumbbell.md":pa,"./markdown/research/elasticplay.md":ma,"./markdown/research/elecguitar.md":ha,"./markdown/research/embroidery_sensor.md":ga,"./markdown/research/expwriting_feedback.md":_a,"./markdown/research/expwriting_feedbackdesign.md":va,"./markdown/research/extraherics.md":ya,"./markdown/research/eye-dryness.md":ba,"./markdown/research/garment-design-ui.md":xa,"./markdown/research/gcr.md":Sa,"./markdown/research/genai-infovis.md":Ca,"./markdown/research/graphie.md":wa,"./markdown/research/group-mi-training.md":Ta,"./markdown/research/groupnamics.md":Ea,"./markdown/research/handkerchief.md":Da,"./markdown/research/hidetight.md":Oa,"./markdown/research/iconstudy.md":ka,"./markdown/research/impulsive_buying.md":Aa,"./markdown/research/imt_with_genai.md":ja,"./markdown/research/informal-chat.md":Ma,"./markdown/research/interactive-gcr.md":Na,"./markdown/research/iot-prototyping.md":Pa,"./markdown/research/knowledgedeck.md":Fa,"./markdown/research/linked.md":Ia,"./markdown/research/lock-n-lol.md":La,"./markdown/research/lookhere.md":Ra,"./markdown/research/lumio.md":za,"./markdown/research/multi-ai-reading.md":Ba,"./markdown/research/notification_design.md":Va,"./markdown/research/nugu.md":Ha,"./markdown/research/oralfrality-inference.md":Ua,"./markdown/research/orchestra-program.md":Wa,"./markdown/research/parent_child_reading.md":Ga,"./markdown/research/phones-on-wheels.md":Ka,"./markdown/research/plagiarism_feedback.md":qa,"./markdown/research/pms_survey.md":Ja,"./markdown/research/posture_study.md":Ya,"./markdown/research/programming-exercises.md":Xa,"./markdown/research/reframing_chatbot.md":Za,"./markdown/research/reviewcollage.md":Qa,"./markdown/research/security_questions.md":$a,"./markdown/research/shopping_accessibility.md":eo,"./markdown/research/slacks_text.md":to,"./markdown/research/smarpp_study.md":no,"./markdown/research/sns-nudge.md":ro,"./markdown/research/socialpii.md":io,"./markdown/research/socialvr_inclusion.md":ao,"./markdown/research/strummer.md":oo,"./markdown/research/stylesnap.md":so,"./markdown/research/subepidermal.md":co,"./markdown/research/summary-note-with-ai.md":lo,"./markdown/research/syncup.md":uo,"./markdown/research/synthesizer-support.md":fo,"./markdown/research/tabby.md":po,"./markdown/research/talkzones.md":L,"./markdown/research/terms-of-use.md":mo,"./markdown/research/two-modes-reflection.md":ho,"./markdown/research/voice_support_gesture.md":R,"./markdown/research/wheelin.md":z,"./markdown/research/window_study.md":B,"./markdown/research/writing-discloure.md":go,"./markdown/research/xps-analysis.md":_o}),bo=new Map;for(let[e,t]of Object.entries(yo)){if(e.endsWith(`/order.txt`))continue;let{meta:n,body:r}=Mr(t),i=n.slug??``;i&&bo.set(i,{slug:i,titleEn:n.titleEn??``,titleJa:n.titleJa??``,thumb:n.thumb??``,blocks:Ar(r)})}var xo=vo.trim().split(`
`).map(e=>bo.get(e)).filter(e=>e!==void 0);function So(e){return bo.get(e)}function V(e){return e.trim()}function Co(e){let t=V(e.titleEn),n=V(e.titleJa);return{primary:t||n,secondary:n&&t&&n!==t?n:``}}var wo={pageHeader:`_pageHeader_1fneg_1`,back:`_back_1fneg_5`,pageTitle:`_pageTitle_1fneg_10`,subtitle:`_subtitle_1fneg_20`};function To(){let{slug:e}=_t(),t=e?So(e):void 0;if(!t)return(0,k.jsx)(Vt,{to:`/research`,replace:!0});let{primary:n,secondary:r}=Co(t);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(`header`,{className:wo.pageHeader,children:[(0,k.jsx)(`p`,{className:wo.back,children:(0,k.jsx)(In,{to:`/research`,children:`← Research`})}),(0,k.jsx)(`h2`,{className:wo.pageTitle,children:n}),r&&(0,k.jsx)(`p`,{className:wo.subtitle,children:r})]}),(0,k.jsx)(`article`,{className:`entry-content`,children:(0,k.jsx)(Sr,{blocks:t.blocks})})]})}var Eo={grid:`_grid_1c11r_2`,item:`_item_1c11r_11`,link:`_link_1c11r_15`,title:`_title_1c11r_26`,imageWrap:`_imageWrap_1c11r_36`,image:`_image_1c11r_36`,placeholder:`_placeholder_1c11r_54`,shimmer:`_shimmer_1c11r_1`,placeholderIcon:`_placeholderIcon_1c11r_85`,divider:`_divider_1c11r_94`,text:`_text_1c11r_102`,subtitle:`_subtitle_1c11r_116`};function Do(){return(0,k.jsx)(`ul`,{className:Eo.grid,children:xo.map(e=>{let{primary:t,secondary:n}=Co(e);return(0,k.jsx)(`li`,{className:Eo.item,children:(0,k.jsxs)(In,{to:`/research/${e.slug}`,className:Eo.link,children:[(0,k.jsx)(`div`,{className:Eo.imageWrap,children:(0,k.jsx)(`img`,{src:ir(e.thumb),alt:t,className:Eo.image,loading:`lazy`,width:800,height:600})}),(0,k.jsx)(`hr`,{className:Eo.divider}),(0,k.jsxs)(`div`,{className:Eo.text,children:[(0,k.jsx)(`h2`,{className:Eo.title,children:t}),n&&(0,k.jsx)(`p`,{className:Eo.subtitle,children:n})]})]})},e.slug)})})}function Oo(){return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:N.pageTitle,children:`Research`}),(0,k.jsx)(Do,{})]})}var{intro:ko,months:Ao}=ri(`---
intro: このページには過去のニュースを載せています．
---

## 2023/3

### 博士課程1名，修士課程2名，学部生4名が卒業いたしました！

博士課程の佐藤，修士課程の篠田と土居，学部生の香取，澤野，乘濵，宮崎の計7名が卒業いたしました！篠田，香取，澤野，乘濵，宮崎の5名は進学し，さらに研究を続けていきます．

### We are presenting one full-paper and one WiP poster at CHI 2023!

We have one full paper and one WiP poster accepted at CHI 2023!

CHI 2023にて1件の論文，および1件のポスター発表を行います．

> [Full paper] Arissa J. Sato, Zefan Sramek, Koji Yatani. Groupnamics: Designing an Interface for Overviewing and Managing Parallel Group Discussions in an Online Classroom.  [WiP poster] Shitao Fang, Koji Yatani. Towards Understanding Sense of Inclusion in Social VR Onboarding.

### 篠田がインタラクションにてインタラクティブ発表賞（一般投票）を受賞しました！

篠田が以下のデモ発表においてインタラクティブ発表賞（一般投票）を受賞しました．

> 篠田 和宏，矢谷 浩司．導電糸と非導電糸の組み合わせによるインタラクティブ刺繍．

### 篠田が情報処理学会全国大会にて学生奨励賞を受賞しました！

篠田が以下の発表において学生奨励賞を受賞しました．

> 篠田 和宏，矢谷 浩司．導電糸刺繍における縫い方の抵抗値に与える影響の調査．

### 篠田と土居が合わせて4件の発表を行います．

M2の篠田と土居が今月，以下の発表を行います．

> 土居 明莉，耿 世嫻，矢谷 浩司．PMSや月経に伴う不調の症状や対策に関する情報の共有意識の違いに関する定量的調査．情報処理学会HCI研究会．

> 篠田 和宏，矢谷 浩司．導電糸と非導電糸の組み合わせによるインタラクティブ刺繍．インタラクション2023（デモ発表），

> 篠田 和宏，矢谷 浩司．導電糸刺繍における縫い方の抵抗値に与える影響の調査．情報処理学会全国大会，

> 土居 明莉，耿 世嫻，矢谷 浩司．PMSや月経に伴う不調の重症度と症状や対策に関する情報共有意識の関係についての定量的調査．日本健康支援学会年次学術大会．

## 2023/2

### Koji is serving as an Award chair for UbiComp 2023!

矢谷がUbiComp 2023にてAward chairを務めます．

## 2023/1

### 矢谷が第24回日本口腔ケア協会学術大会並びに日本口腔ケア学会春季大会において，招待登壇いたします．

矢谷が2/11に開催される第24回日本口腔ケア協会学術大会並びに日本口腔ケア学会春季大会のシンポジウムにおいて招待登壇いたします．

[https://www.oralcare-jp.org/2793/](https://www.oralcare-jp.org/2793/)

## 2022/12

### Koji named ACM Distinguished Member!

Koji has been inducted into ACM Distinguished Members! The Distinguished Members Grade recognizes those ACM members with at least 15 years of professional experience and 5 years of Professional Membership in the last 10 years who have achieved significant accomplishments or have made a significant impact on the computing field. In 2022, ACM named 67 individuals, and there are 862 Distinguished Members so far.

矢谷がACM Distinguished Memberに選出されました．ACM Distinguished Memberは，15年以上の職務経験と過去10年間に5年以上のProfessional Membershipを有するACM会員で，大きな業績を達成した者，またはコンピューティング分野に大きな影響を与えた者を表彰するものです．2022年では67名が選出され，現在までに862名のDistinguished Membersがいます．

[https://www.acm.org/media-center/2022/december/distinguished-members-2022](https://www.acm.org/media-center/2022/december/distinguished-members-2022)

## 2022/11

### 耿がDICOMOで優秀論文賞を受賞しました！

[https://dicomo.org/commendation](https://dicomo.org/commendation)

DICOMOにて修士課程の耿が発表した以下の論文に対して，優秀論文賞を受賞しました！

> 耿 世嫻，平井 雄太，下島 銀士，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．  スマートフォンを用いた画像認識による口腔・嚥下機能の定量的評価手法

## 2022/09

### Our work has been accepted in IEEE Sensor Letter!

Antony's work on a wearable gesture sensor using subepidermal images has been accepted in IEEE Sensor Letter!

チャコンの表皮下画像を用いたウェアラブルジェスチャセンサの論文がIEEE Sensor Letterに採録されました．

> D. Antony Chacon, Kazuhiro Shinoda, Tomoyuki Yokota, and Koji Yatani.  Demonstrating the Feasibility of Subepidermal Image Sensing for Hand Posture and Gesture Recognition.

[https://ieeexplore.ieee.org/document/9900417](https://ieeexplore.ieee.org/document/9900417)

### Our SyncUp Paper won a PACM IMWUT Distinguished Paper Award!

Our SyncUp paper by Zhongyi, Anran, and Koji won a PACM IMWUT Distinguished Paper Award! It is given 5 papers out of the 193 papers published in Volume 5 of PACM IMWUT that represent outstanding and exemplary contributions to our research community.

私達のSyncUpに関する論文がPACM IMWUT Distinguished Paper Awardを受賞いたしました．PACM IMWUT volume 5の全193件の論文の内選ばれた5つの論文のうちの1つが，私達のSyncUpの論文となりました．

> Zhongyi Zhou, Anran Xu, and Koji Yatani. 2021. SyncUp: Vision-based Practice Support for Synchronized Dancing. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 5, 3, Article 143 (Sept 2021), 25 pages.

### 日本バーチャルリアリティ学会で発表いたします．

修士課程の方が以下の論文を日本バーチャルリアリティ学会で発表いたします．

> 方 詩涛，矢谷 浩司．  ソーシャルVR空間参加時における被受容感に関する調査

## 2022/08

### Zhongyi won Google East Asia PhD Fellowship!

Zhongyi won Google East Asia PhD Fellowship! Congratulations! The Google PhD Fellowship Program is to recognize outstanding graduate students doing exceptional and innovative research in areas relevant to computer science and related fields.

周がGoogle East Asia PhD Fellowshipを受賞いたしました！Google PhD Fellowship Programはコンピュータサイエンスおよびその関連分野で卓越した革新的な研究を行っている優秀な大学院生を表彰するためのプログラムです．

[https://research.google/outreach/phd-fellowship/](https://research.google/outreach/phd-fellowship/)

### 耿がDICOMOで優秀プレゼンテーション賞を受賞しました！

[https://dicomo.org/commendation](https://dicomo.org/commendation)

DICOMOにて修士課程の耿が発表した以下の論文に対して，優秀プレゼンテーション賞を受賞しました！

> 耿 世嫻，平井 雄太，下島 銀士，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．  スマートフォンを用いた画像認識による口腔・嚥下機能の定量的評価手法

### 矢谷がTrack IT人材育成戦略会議にて登壇します．

矢谷がTrack IT人材育成戦略会議にて，オンラインでの効果的なアルゴリズム能力の育成手法と心得に関して講演を行います．講演は8/22から9/2までオンラインにて視聴可能です．

[Track IT人材育成戦略会議 2022 | Track（トラック） – DX人材の採用・育成・評価のためのHRプラットフォーム](https://tracks.run/lp/cf-2208/)

## 2022/07

### Our paper has been conditionally accepted at UIST 2022!

Our paper on interactive machine teaching exploiting users' deictic gestures has been conditionally accepted at UIST 2022! Zhongyi will be presenting this work at the conference.

ユーザの教示動作を利用したinteractive machine teachingに関する論文がUIST 2022に条件付き採録となりました！博士課程のZhongyiが発表する予定です．

> Zhongyi Zhou and Koji Yatani.  Gesture-aware Interactive Machine Teaching with In-situ Object Annotations.

### 下島と山本が2021年度未踏スーパークリエータに認定されました！

修士課程の下島と山本が2021年度未踏スーパークリエータに認定されました！「未踏スーパークリエータ」は，毎年度の事業終了時点で担当プロジェクトマネジャーが特に優秀であると評価したクリエータを候補者として選出し，第三者機関である審査委員会の審議を経て，IPAが認定しております．

[https://www.ipa.go.jp/files/000098511.pdf](https://www.ipa.go.jp/files/000098511.pdf)

### DICOMOにて発表を行います．

DICOMOにて，修士課程の耿が以下の論文を発表いたします．

> 耿 世嫻，平井 雄太，下島 銀士，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．  スマートフォンを用いた画像認識による口腔・嚥下機能の定量的評価手法

## 2022/06

### Our paper has been accepted at SOUPS 2022!

Our paper on DualCheck (the integration of microlearning of online safety into human verification tasks) has been accepted at SOUPS 2022! Ryo will be presenting this work at the conference.

ボット判定に情報セキュリティに関するマイクロラーニングに織り込んだシステムDualCheckの論文がSOUPS 2022にて採録されました！修士課程の吉川が発表する予定です．

> Ryo Yoshikawa, Hideya Ochiai, and Koji Yatani. DualCheck: Exploiting Human Verification Tasks for Opportunistic Online Safety Microlearning.

### 日本老年歯科医学会学術大会にて発表いたします．

日本老年歯科医学会学術大会にて，卒業生の平井が以下の論文を発表いたします（口頭発表）．

> 平井 雄太，耿 世嫻，柳田 陵介，山田 大志，小野寺 宏，戸原 玄，矢谷 浩司．  歌唱中の音声・画像からの構音・嚥下機能の分類

### 情報処理学会UBI研究会にて発表いたします．

情報処理学会UBI研究会にて，徐が以下の論文を発表いたします．

> 徐 安然，周 中一，吉川 諒．矢谷 浩司．  写真のプライバシー保護加工を対話的に行うインタフェース

## 2022/05

### 大学院志望者向けオープンラボを行います！

We are organizing an open lab for prospective graduate students on 30th May at 2 pm! You are welcome to join regardless of which department you are applying for (i.e., School of Engineering or Graduate School of Interdisciplinary Information Studies). If you are consider us for your graduate study, please swing by this open lab!

5/30（月）の14時から大学院志望者向けオープンラボをハイブリッド形式で行います！志望先（工学系研究科，学際情報学府）に関係なく，ご参加いただけますので，IIS Labを進学先として検討されている方はぜひご参加をお願いいたします．

[2022年度大学院志望者向けオープンラボ](https://iis-lab.org/event/2022-openlab/)

## 2022/04

### Welcome, Simo!

Simo Hosio from University of Oulu, Finland joins us as a visiting researcher! He is staying in our lab for the next 6 months.

フィンランドのオウル大学からホシオ シモが客員研究員としてラボに加わりました！6ヶ月間ラボに滞在する予定です．

### Welcome, new members!

We have 4 new master students and 5 new undergradates. Welcome!

4名の修士課程学生と5名の学部生が新しくラボに加わりました！

## 2022/03

### 修士課程学生4名，学部生4名が卒業いたしました！

修士課程学生として佐野，高島，林，平井，学部生として下島，桝田，山田，吉川が卒業しました！皆さんおめでとうございます！

### Koji won a Best Teaching Award!

Koji won a Best Teaching Award in School of Engineering at University of Tokyo! This award is given to faculty members who have demonstrated highly effective teaching with outstanding teaching ability and made remarkable educational contributions by redesigning educational methods.

矢谷が工学部Best Teaching Awardを受賞しました！この賞は卓越した指導力で教育効果の高い授業を実践し，教育方法の工夫又は改善に取り組み顕著な教育効果を実践した者に与えられる賞です．

[https://www.t.u-tokyo.ac.jp/foe/activity/award-bestteaching](https://www.t.u-tokyo.ac.jp/foe/activity/award-bestteaching)

### 電子情報通信学会総合大会において，3件の論文を発表します．

電子情報通信学会総合大会において，以下の3件の論文を発表します．

> 吉川 諒，矢谷 浩司．  情報倫理・セキュリティ啓発を目指したCAPTCHAの設計

> 桝田 拓磨，小林 正起，矢谷 浩司．  非熟練ユーザーの光電子分光計測・分析支援に向けた質的調査

> 高島 諒，矢谷 浩司．  コンピュータ使用時のユーザの前傾姿勢の検知に向けた予備的検討

### 

## 2022/02

### Koji won an IPSJ Microsoft Faculty Award!

Koji won an IPSJ Microsoft Faculty Award! This award is given to a young researcher who has made an outstanding international contribution to research and development in a major field of informatics, and is expected further achievements and contributions.

[https://www.ipsj.or.jp/award/microsoft-award.html](https://www.ipsj.or.jp/award/microsoft-award.html)
[https://www.ipsj.or.jp/english/organization/aboutipsj/award/microsoft.html](https://www.ipsj.or.jp/english/organization/aboutipsj/award/microsoft.html)

矢谷がマイクロソフト情報学研究賞を受賞いたしました．本賞は，情報学の主要な分野で，その研究・開発において国際的に顕著な貢献が認められ，今後もその進歩，発展が期待される若手研究者に授与される賞です．

## 2022/01

### Arissa won a Best Poster Award in our Rinko!

Arissa (D2) won a Best Poster Award in our Rinko (a seminar course consisting of presentations by students in our department) this month.

佐藤（D2）が専攻内の輪講においてベストポスター賞を受賞しました！

### Zhongyi and Anran won a Ubicomp/ISWC'21 Best Presentation Award!

Zhongyi (D2) and Anran (M2) won a Ubicomp/ISWC'21 Best Presentation Award for the following presentation. This award recognizes authors who made an outstanding presentation on their papers.

周（D2）と徐（M2）がUbicomp/ISWC'21 Best Presentation Awardを受賞しました．この賞は，UbiComp/ISWC 2021において発表された論文において，優れた発表を行った著者を表彰するものです．

[SyncUp: Vision-based Practice Support for Synchronized Dancing](https://iis-lab.org/research/syncup/)

### 篠田（M1）が「探求の階段」（テレビ東京系列）に出演いたします．

篠田「探求の階段」（テレビ東京系列）に出演いたします．放送予定日は1/20 22:58（テレビ東京），1/29 21:55からです．

[https://www.tv-tokyo.co.jp/tankyunokaidan/backnumber/index.html?trgt=20220120](https://www.tv-tokyo.co.jp/tankyunokaidan/backnumber/index.html?trgt=20220120)

### 佐野（M2）の研究成果がITmediaに掲載されました．

佐野が情報処理学会HCI研究会にて発表した「リモートワーク環境での雑談を支援するインタフェースデザインの質的調査」の研究成果がITmediaにも掲載されました．

[https://www.itmedia.co.jp/news/articles/2201/14/news056.html](https://www.itmedia.co.jp/news/articles/2201/14/news056.html)

## 2021/12

### Koji is giving an invited talk at COMSNETS 2022.

Koji is giving an invited talk at COMSNETS 2022, a premier international conference dedicated to advances in Networking and Communications Systems. His talk will be on 11:30 – 12:00 on 5th Jan. IST.

矢谷がCOMSNETS 2022にて招待講演を行います．インド標準時間で2022年1月5日 11:30から12:00の予定です．

[https://www.comsnets.org/invited_speakers.html#Koji_Yatani](https://www.comsnets.org/invited_speakers.html#Koji_Yatani)

## 2021/11

### UBI研究会，HCI研究会にて3件の発表を行います．

12月に開催されるUBI研究会，HCI研究会にて，以下の3件の発表を行います．

> 林 裕嵩，徐 安然，周 中一，矢谷 浩司．  「スマートフォンを用いた危険な自転車運転検知に向けた運転状況認識手法の実装」

> 佐野 翔子，佐藤 安理紗 ジエンジエラ，矢谷 浩司．  「リモートワーク環境での雑談を支援するインタフェースデザインの質的調査」

> 平井 雄太，耿 世嫻，下島 銀士，小野寺 宏，矢谷 浩司．  「歌による嚥下・構音機能の定量的評価手法の実現に向けた歌唱データの音響・画像分析」

## 2021/10

### Zhongyi is doing a demo presentation at UIST 2021!

周が今月開催されるUISTにおいてデモ発表を行います．

> Zhongyi Zhou and Koji Yatani.  Enhancing Model Assessment in Vision-based Interactive Machine Teaching through Real-time Saliency Map Visualization.

## 2021/09

### SyncUp is now on TechCrunch!

当ラボの研究成果であるSyncUpがTechCrunchに取り上げられました．

[https://jp.techcrunch.com/2021/09/29/tokyo-univ-syncup/](https://jp.techcrunch.com/2021/09/29/tokyo-univ-syncup/)

### Koji is giving an invited talk at an MSRA alumni online event on 28th Sept!

Koji is giving an invited talk at an MSRA alumni online event, which is open to anybody with RSVP. It is 10:30 am on 28th Sept. in Japan time.

矢谷がオンラインのMSRAアルムナイイベントにおいて招待講演を行います．どなたでもご視聴可能です（参加登録必須）．

2021年9月29日水曜10:30AM～(日本時間)にオンラインイベントを開催します。MSRA Alumniイベントですが、今回はどなたの参加もWelcomeです。東大・矢谷浩司先生とパデュー大学のDr. Hong TanのTalkとFireside Chatぜひお楽しみください！オンラインのリンクをお伝えするため、事前登録お願いします：） [pic.twitter.com/uduqREqUej](https://t.co/uduqREqUej)

— マイクロソフトリサーチoutreach (@msraurjp) [September 27, 2021](https://twitter.com/msraurjp/status/1442348734457659394?ref_src=twsrc%5Etfw)

### We are presenting 1 IMWUT and 1 demo at UbiComp 2021.

今月開催されるUbiComp 2021にてIMWUTの論文１件，およびデモ1件を発表いたします．

> Zhongyi Zhou, Anran Xu, and Koji Yatani.  SyncUp: Vision-based Practice Support for Synchronized Dancing.  Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 5, 3, Article 143 (Sept 2021), 25 pages.

> Hirotaka Hayashi, Anran Xu, Zhongyi Zhou, Koji Yatani.  Vision-based Scene Analysis toward Dangerous Cycling Behavior Detection Using Smartphones.

### 矢谷が五月祭の公開討論企画にてパネリストとして登壇いたします！

矢谷が五月祭（9月に延期）の公開討論企画にてパネリストとして登壇いたします．

「公開討論～誹謗中傷を防ぐには～」

【白熱の議論をご覧あれ】

五月祭新企画・公開討論のワンシーンを一足先にお見せします！
「SNS上の誹謗中傷」をテーマに、4人のスペシャリストが独自の視点から織りなす議論は必見です。

▷9月19日（日）14:00〜15:30
▷YouTube Liveにて公開

お見逃しなく！ [pic.twitter.com/HOXRM3psMV](https://t.co/HOXRM3psMV)

— 東京大学 五月祭 (@gogatsusai) [August 31, 2021](https://twitter.com/gogatsusai/status/1432629233524768768?ref_src=twsrc%5Etfw)

[https://gogatsusai.jp/94/visitor/kikaku/115](https://gogatsusai.jp/94/visitor/kikaku/115)

## 2021/07

### 篠田（M1）が情報処理学会UBI研究会にて優秀論文賞を受賞しました！

篠田（M1）が情報処理学会UBI研究会にて発表した以下の論文に対して，優秀論文賞を受賞いたしました．

> 篠田 和宏，チャコン アントニー，雪田 和歌子，横田 知之，染谷 隆夫，矢谷 浩司． 「変形可能なハンカチ型インタフェースの設計」

[http://sigubi.ipsj.or.jp/excellent/](http://sigubi.ipsj.or.jp/excellent/)

### 佐藤が先端VRドクトラルシンポジウムに登壇いたします．

Visualization for Overviewing Parallel Group Activities in Online Classrooms

7月16日にオンライン開催される2021年度東京大学バーチャルリアリティ教育研究センター主催ドクトーラルシンポジウムに佐藤（D2）が登壇いたします．

17:20-17:35　佐藤 安理紗 ジエンジエラ
オンライン授業における複数同時進行グループワークを概観する可視化手法の研究

[先端VRドクトラルシンポジウム開催のご案内](https://vr.u-tokyo.ac.jp/doctoral_symposium/)

### Our paper has been accepted in PACM IMWUT!

Our IMWUT submission has been accepted (with minor revisions)! Big congrats to Zhongyi and Anran!

以下の論文がPACM IMWUTに（微修正の条件付き）採択されました！

> Zhongyi Zhou, Anran Xu, and Koji Yatani.  SyncUp: Vision-based Practice Support for Synchronized Dancing.

## 2021/06

### SOMPOホールディングス株式会社 CDO 楢󠄀﨑浩一様による特別講演

We are honored to have Koichi Narasaki, who is CDO at SOMPO Holdings, Inc. to present the applications of data in the real world to drive innovations empowered by digital technology, and discuss how knowledge of computer science including algorithms can contribute to business. This invited talk is held as a part of lectures for my course of Algorithms (for third-year undergrads), but this DLS is open to anybody at University of Tokyo. You are more than welcome to join!

SOMPOホールディングス株式会社にてCDOを務めておられる楢󠄀﨑浩一様に，SOMPOホールディングス株式会社が目指すデジタル戦略におけるデータ活用，そしてアルゴリズムなどコンピュータ科学の知識がビジネスの世界でどのように生かされるかを，ご自身の経験とともにお話しいただきます．この特別講義は，矢谷が担当しているアルゴリズム（学部3年生向け）の講義の一部として開かれますが，東京大学の全ての学生・教職員にご視聴いただけますので，遠慮なくご参加ください！

[SOMPOホールディングス株式会社 CDO 楢󠄀﨑浩一様 特別講演](https://iis-lab.org/dls/koichinarasaki/)

### 篠田（M1）が未踏スーパークリエタに選ばれました！

Kazuhiro Shinoda has been recognized as a MITOU Super Creator! This recognition is given to young leaders who have demonstrated outstanding achievements in MITOU projects by Information-technology Promotion Agency (IPA).

[https://www.meti.go.jp/press/2021/05/20210528004/20210528004.html](https://www.meti.go.jp/press/2021/05/20210528004/20210528004.html)
[https://www.ipa.go.jp/jinzai/mitou/2020/20210528.html](https://www.ipa.go.jp/jinzai/mitou/2020/20210528.html)

篠田（M1）が未踏スーパークリエタに選ばれました．「未踏スーパークリエータ」は「突出したIT人材」を発掘・育成するために独立行政法人情報処理推進機構（IPA）が行っている未踏IT人材発掘・育成事業において，その中でも特に卓越した能力を持つと認められた人材に認定される賞です．

## 2021/05

### 篠田（M1）が情報処理学会UBI研究会にて発表します．

篠田（M1）が以下の論文を情報処理学会UBI研究会にて発表いたします．

> 篠田 和宏，チャコン アントニー，雪田 和歌子，横田 知之，染谷 隆夫，矢谷 浩司． 「変形可能なハンカチ型インタフェースの設計」

### 大学院志望者向けオープンラボ（ハイブリッド形式）を開催いたします！

We are holding our open lab for prospective graduate students in a hybrid style. If you are interested, please check out the following page and register.

大学院でIIS Labを志望される方向けにハイブリッド形式でのオープンラボを開催します．詳細を以下のページよりご確認いただき，ご登録をお願いいたします．

[大学院志望者向けオープンラボ](https://iis-lab.org/news/openlab2021/)

### Carla (a former researcher) is presenting her DearBoard work at CHI 2021!

Carla is presenting her DearBoard work at CHI 2021. Her talk will be the sessions of Affection and Support in a Digital World – B and C.

CarlaがIIS Labでの研究成果であるDearBoardのプロジェクトについてCHI 2021で発表いたします！Affection and Support in a Digital World – B，Cのセッションです．

[https://acmchi.delegateconnect.co/talks/1370](https://acmchi.delegateconnect.co/talks/1370)

### 矢谷が2020年度船井学術賞を受賞しました！

Koji won a Funai Academic Award! This award is given to young researchers who have made outstanding research achievements in computer science, information technology, and other engineering fields.

矢谷が2020年度船井学術賞を受賞いたしました．船井学術賞は情報科学，情報技術分野を中心に広く理工系分野において，顕著な研究業績のあった若手研究者に与えられる賞です．

[https://www.funaifoundation.jp/grantees/awardees_up_to_now_20.html](https://www.funaifoundation.jp/grantees/awardees_up_to_now_20.html)

## 2021/04

### DMM.com社との共同研究を開始しました．

IIS Lab has started a collaboration project with DMM.com on interaction design for social VR.

[https://www.t.u-tokyo.ac.jp/foe/press/setnws_202104011210578359643951.html](https://www.t.u-tokyo.ac.jp/foe/press/setnws_202104011210578359643951.html)
[https://dmm-corp.com/press/press-release/32359](https://dmm-corp.com/press/press-release/32359)

IIS LabはDMM.com社とともにソーシャルVRを発展させるインタラクションデザインに関する研究を開始しました．

### Welcome, new members!

We have 1 Ph.D student, 3 new master students and 4 new undergradates. Welcome!

1名の博士課程学生，3名の修士課程学生と4名の学部生が新しくラボに加わりました！

## 2021/03

### 修士課程学生4名，学部生5名が卒業いたしました！

修士課程学生として杉山，竹ノ内，学部生として片山，篠田，鈴木，富木，吉田が卒業しました！皆さんおめでとうございます！

### 矢谷がオンライン授業等におけるグッドプラクティス総長表彰を受けました．

Koji has received a recognition by the President for his good practices for online courses.

[https://www.u-tokyo.ac.jp/ja/students/classes/online-hybrid-good-practices.html](https://www.u-tokyo.ac.jp/ja/students/classes/online-hybrid-good-practices.html)

### 篠田（B4）が学科長特別賞，および優秀卒業論文賞を受賞いたしました！

Kazuhiro Shinoda won a Department Dean Special Recognition Award and an Excellent Graduation Thesis Award on his thesis! Congratulations!

篠田 和宏．
「A Deformable Handkerchief Interface Using Conductive Yarn（導電糸を用いた変形可能なハンカチ型インターフェース）」

## 2021/02

### 竹ノ内（M2）が情報処理学会SPT研究会にて発表いたします．

竹ノ内（M2）が情報処理学会SPT研究会にて以下の論文を発表いたします．

> 竹ノ内 朝陽，矢谷 浩司．  「サービス利用規約の読解促進に向けた特異な条項を強調するインタフェースの実装と評価」

### 富木（B4）が情報処理学会HCI研究会にて発表いたします．

富木（B4）が情報処理学会HCI研究会にて以下の論文を発表いたします．

> 富木 菜穂，佐藤 安理紗 ジエンジエラ，矢谷 浩司．  「OrchExplorer:アマチュアオーケストラ向けコンサートプログラム構成支援システム」

### 竹ノ内（M2），篠田（B4）が電子情報通信学会全国大会にて発表いたします．

竹ノ内（M2），篠田（B4）が電子情報通信学会全国大会にて以下の論文を発表いたします．

> 竹ノ内 朝陽，矢谷 浩司．  「利用規約中の特異な文章を強調するインタフェース」  篠田 和宏，原田 珠華，佐野 由季，安斉 周，矢谷 浩司．  「導電糸を用いたウェアラブルデバイス向け手書き文字入力デバイス」

## 2021/01

### Koji won a Japan ACM SIGCHI Local Chapter Distinguished Young Researcher Award!

Koji won a Japan ACM SIGCHI Local Chapter Distinguished Young Researcher Award, and will be giving an award talk at RIEC International Symposium on Human-Computer Interaction on 24th Jan.

[https://sigchi.jp/award/2020/result.ja.html#KojiYatani](https://sigchi.jp/award/2020/result.ja.html#KojiYatani)
[https://sites.google.com/view/riec-hci-symposium-2021](https://sites.google.com/view/riec-hci-symposium-2021)

矢谷がJapan ACM SIGCHI Local Chapter優秀若手研究者賞を受賞いたしました！また，24日の開催されるRIEC International Symposium on Human-Computer Interactionで受賞講演を行う予定です．

### 周がUBI研究会において学生奨励賞を受賞しました！

Zhongyi won a Student Encouragement Award for his following paper presented at an IPSJ UBI workshop.

第68回ユビキタスコンピューティングシステム（UBI）研究発表会にて発表した以下の論文において，周が学生奨励賞を受賞しました．

> 周 中一，矢谷 浩司．  「人体ポーズ分析を応用したシンクロダンス練習支援システム」

## 2020/12

### Koji is serving as a Papers co-chair for CHI 2022!

矢谷がCHI 2022においてPapers co-chairを務めます．

### ラボの研究紹介ビデオを公開しました！

We have uploaded three short videos to give you quick highlights on recent work at IIS Lab. They are in Japanese, but English subtitles are available. Enjoy!

IIS Labの最近の研究をハイライトしたビデオを3つ公開いたしました．各々3~4分の短いビデオですが，IIS Labの主な研究活動をご覧いただければと思います！字幕（日英）もついています．

### #1: 安全，安心を促すインタフェースデザイン

### #2: センシング・人工知能技術のアプリケーション研究

### #3: インタラクティブシステムの社会実証研究

### 周（D1）がUBI研究会にて発表をいたします．

周が以下の論文を第68回ユビキタスコンピューティングシステム（UBI）研究発表会にて発表します．

> 周 中一，矢谷 浩司．  「人体ポーズ分析を応用したシンクロダンス練習支援システム」

## 2020/11

### Our collaboration work with LINE was presented at LINE Developer Day!

Our recent exploration on interfaces for visual effect on video chats was presented at LINE Developer Day. This project is in collaboration with LINE Corp, and supported by [CRIS collaboration funding](http://research.nii.ac.jp/CRIS/collaborative/).

現在株式会社LINEと共同して行っている，ビデオ通話における視覚効果を付与するインタフェースに関する研究が，LINE Developer Dayにて紹介されました．これは[CRIS共同研究](http://research.nii.ac.jp/CRIS/collaborative/)で支援されている研究の成果でもあります．

### IIS Lab Distinguished Lecture Series：大阪大学 栄藤稔先生

IIS Lab at University of Tokyo organizes distinguished lectures by international and interdisciplinary guests about research, business, education, and political strategies enabled by HCI, Ubiquitous computing, and mobile systems and applications. We are extremely honored to have Prof. Minoru Etoh at Osaka University, and he will present his experience and perspective on deep tech startups based on AI. The talk will be 14:55 – 16:40 on 23rd Dec. (Wed). Please check out the following webpage and register! (Note that this is open only to students and staff at University of Tokyo).

IIS Lab (東京大学矢谷研究室)では国内外でご活躍されている多彩なゲストをお呼びして，ヒューマンコンピュータインタラクション(HCI)，ユビキタスコンピューティング，モバイルシステム・アプリケーションに関係する研究，ビジネス，教育，政策に関する特別講演を不定期に主催しています．この度，大阪大学 栄藤稔先生をお呼びし，AIをベースにしたディープテックスタートアップに関するご経験とお考えに関するお話を頂戴します．12/23 (水) 14:55 ~ 16:40にオンラインで開催予定です．詳細は以下のページをご覧いただき，ご登録をお願いいたします．（学内の学生，および教職員のみ）

[IIS Lab Distinguished Lecture Series](https://iis-lab.org/dls/minoru-etoh/)

### Koji was featured on People of ACM!

"People of ACM" highlights the unique scientific accomplishments and compelling personal attributes of ACM members who are making a difference in advancing computing as a science and a profession.

矢谷がPeople of ACMに取り上げられました！People of ACMはコンピューティングの発展に大きく貢献しているACM会員の，ユニークな科学的業績とその研究者の個性を紹介する記事です．

[https://www.acm.org/articles/people-of-acm/2020/koji-yatani](https://www.acm.org/articles/people-of-acm/2020/koji-yatani)

## 2020/10

### ヒューマンインタフェースサイバーコロキウムにて2件の発表を行います．

[https://jp.his.gr.jp/hic2/](https://jp.his.gr.jp/hic2/)

ヒューマンインタフェースサイバーコロキウムにて富木，鈴木（ともにB4）が以下の発表を行います．

> 富木 菜穂,，矢谷 浩司．  「オーケストラのコンサートプログラム考案時のユーザの検索行動に関する定性的調査」  鈴木 凌斗，矢谷 浩司．  「変数の値の変化を利用したソースコード分析手法の提案」

### ITmediaに研究成果を取り上げていただきました！

[https://www.itmedia.co.jp/news/articles/2010/28/news067.html](https://www.itmedia.co.jp/news/articles/2010/28/news067.html)

チェさん（当時B4）が行った[コンピュータ使用時に目の乾燥状態を検出する手法の検討](https://iis-lab.org/research/eye-dryness/)の研究成果に関する記事を掲載していただきました．

「瞳に映るモニター画面」でドライアイ検出　東大が深層学習で開発

## 2020/09

### 修士課程学生3名が卒業いたしました！

修士課程学生として周，陳，胥が卒業しました！皆さんおめでとうございます！周，陳は博士課程に進学し，更に研究を進めます！

## 2020/08

### We got a ToG article for SIGGRAPH Asia 2020!

Our paper has been accepted at ToG for SIGGRAPH Asia 2020! This work was led by Peihan Tu, who worked with us as a research intern.

インターンとして一緒に研究をしたPeihan TuのプロジェクトがSIGGRAPH Asia 2020に採択されました．

> Peihan Tu, Li-Yi Wei, Koji Yatani, Takeo Igarashi, Matthias Zwicker．  Continuous Curve Textures.  [https://tph9608.github.io/cct-siga20/](https://tph9608.github.io/cct-siga20/)

### An article in interactions is out!

Duncan, Leah, and I have an article in interactions which shares our experience of virtual Doctoral Consortium at CHI 2020. Please check it out!

Duncan Brumby，Leah Findlaterとともに，CHI 2020におけるバーチャル形式でのDoctoral Consortiumの体験談をinteractionsにて記事にいたしました．

[https://interactions.acm.org/archive/view/july-august-2020/reflections-on-planning-and-running-a-virtual-doctoral-consortium-at-chi-20?doi=10.1145%2F3404201](https://interactions.acm.org/archive/view/july-august-2020/reflections-on-planning-and-running-a-virtual-doctoral-consortium-at-chi-20?doi=10.1145%2F3404201)

## 2020/07

### 卒業生の嶋田のショートインタビューが本学工学部のロールモデル集に掲載されました！

IIS Lab卒業生の嶋田のショートインタビューが，Women in Engineeringに掲載されました（9ページ目）．Women in Engineeringは，工学分野の最前線を切り拓く工学系研究科・工学部女性教員および卒業生の活躍を紹介する，東京大学大学院工学系研究科・工学部ロールモデル集です．

[https://www.t.u-tokyo.ac.jp/shared/gender/data/setevt_202007061633560839786291_935283.pdf](https://www.t.u-tokyo.ac.jp/shared/gender/data/setevt_202007061633560839786291_935283.pdf)

### FIT 2020にて2件発表いたします．

FIT 2020において，以下の2件の発表（推奨論文）を行います．9月1日（火）9:30-12:00，1j会場にて発表予定です．

> 杉山 悠司，矢谷 浩司．「コーディング面接の練習を支援するシステムの構築」  竹ノ内 朝陽，矢谷 浩司．「サービス利用規約の読解促進を目指した表示手法の比較検討」

[https://www.ipsj.or.jp/event/fit/fit2020/FIT2020_program/data/html/program/j.html](https://www.ipsj.or.jp/event/fit/fit2020/FIT2020_program/data/html/program/j.html)

### Crush Your Coding Interviews presented by Facebook

[https://sites.google.com/g.ecc.u-tokyo.ac.jp/facebook-cyci2020/](https://sites.google.com/g.ecc.u-tokyo.ac.jp/facebook-cyci2020/)

7/15の13時より，Facebookの方をお招きいたしまして，コーディング面接に関するワークショップを開催いたします．エンジニアの採用試験などで取り入れられているコーディング面接の裏側を知ることができる貴重な機会ですので，ご参加ください！

学内の方ならどなたでも参加できますので，ご友人，先輩，後輩を遠慮なくお誘い合わせの上，ご参加いただければと思います．なお事前登録が必要になりますので，以下のページよりお願いいたします．

上のページを閲覧するためにはECCSアカウントが必要です．

### Koji is serving as a Program Committee member for MUM 2020.

矢谷がMUM 2020においてプログラム委員を務めます．

[http://www.mum-conf.org/2020/](http://www.mum-conf.org/2020/)

## 2020/06

### オープンラボを実施します！

大学院受験（[工学系研究科電気系工学専攻](http://www.eeis.t.u-tokyo.ac.jp/)と[学際情報学府先端表現情報学コース](http://www.iii.u-tokyo.ac.jp/education/courses/emergingdi)）を考えておらえる方々のために6/24（水）の16:00〜18:00でオープンラボを実施いたします．オンラインで実施いたしますので，少しでもIIS Labにご興味のある方はご参加ください！詳細は以下のページをご覧ください．

[オープンラボ・ウィーク](https://iis-lab.org/news/gsii-openlab2020/)

## 2020/04

### Eight new members are on board! Welcome!

8名の新しい学生さん（修士課程3名，学部生5名）がラボに加わりました！佐野さん，高島さん，平井さん， 片山さん，篠田さん，鈴木さん，富木さん，吉田さん，ようこそ！

### 矢谷のインタビューが公開されました！

[https://hey-labo.com/labo/iis-lab/blog/29](https://hey-labo.com/labo/iis-lab/blog/29)

Hey! Laboにおきまして矢谷のインタビューが掲載されました．

「一番最初に失敗する集団!?人間とテクノロジーの新しい関係を追求する研究とは」

### Koji has started serving as an Editor for Foundation and Trends in Human-Computer Interaction.

矢谷がFoundation and Trends in Human-Computer Interactionのエディタを務めることになりました．

[https://www.nowpublishers.com/Journal/EditorialBoard/HCI](https://www.nowpublishers.com/Journal/EditorialBoard/HCI)

## 2020/03

### 修士課程学生4名，学部生5名が卒業いたしました！

修士課程学生として坂口，佐藤，正木，松井，学部生として伊藤，チェ，坪内，幡井，林が卒業しました！皆さんおめでとうございます！

### 正木(M2)が学際情報学府優秀修士論文 専攻長賞を受賞しました！

HIroaki won a Department Dean Award on this master thesis! Congratulations!

A Study on Designs of Privacy/Safety-related Nudges for Adolescent SNS Users

（若年層SNSユーザに対するプライバシー・安全に関するナッジデザインの検証）

### チェ(B4)が優秀卒業論文賞を受賞しました！

Siwook won an Excellent Graduation Thesis award! Congratulations!

A study on vision-based approaches for eye dryness detection during computer use

（コンピュータ使用時における目の乾燥状態を検知する画像認識手法の研究）

### 来年度よりアルゴリズムの講義を共同担当いたします．

来年度よりアルゴリズム（学部3年生向け）の講義を担当することとなりました．

[https://yatani.jp/teaching/doku.php?id=2020algorithms:start](https://yatani.jp/teaching/doku.php?id=2020algorithms:start)

### 情報処理学会HCI研究会において学生奨励賞を受賞しました！

1月に開催された情報処理学会HCI研究会にて，M2の正木が以下の論文に対して学生奨励賞を受賞しました．

> 正木 博明，柴田 健吾，星野 秀偉，石濵 嵩博，齋藤 長行，矢谷 浩司．  「SNS上の行動に関する若年層ユーザに対するナッジの効果検証」

### Koji receives IPSJ/ACM Award for Early Career Contributions to Global Research!

Koji won IPSJ/ACM Award for Early Career Contributions to Global Research, which IPSJ and ACM jointly gives to a young researcher in computer science who has outstanding international achievements.

[https://www.ipsj.or.jp/award/ACM-Joint-Award2020.html](https://www.ipsj.or.jp/award/ACM-Joint-Award2020.html)
[https://www.ipsj.or.jp/english/organization/aboutipsj/award/ACM-Award-E.html](https://www.ipsj.or.jp/english/organization/aboutipsj/award/ACM-Award-E.html)

情報学の分野において，国際的な研究による成果をあげ，今後の発展および国際的な活躍が期待される若手研究者に情報処理学会とACMから共同表彰されるIPSJ/ACM Award for Early Career Contributions to Global Researchを矢谷が受賞いたしました．

### We won an Honorable Mention Award at CHI 2020!

Our CHI 2020 paper won an Honorable Mention Award, which is given to top 5% of the total submissions.

以下のCHI 2020の論文がトップ5%の論文に与えられるHonorable Mention Awardを受賞いたしました！

> Hiroaki Masaki, Kengo Shibata, Shui Hoshino, Takahiro Ishihama, Nagayuki Saito, and Koji Yatani.  "Exploring Nudge Designs to Help Adolescent SNS Users Avoid Privacy and Safety Threats."

### 情報処理学会UBI研究会において優秀論文賞を受賞しました！

3月に開催された情報処理学会UBI研究会にて，B4のチェが以下の論文に対して優秀論文賞を受賞しました．

> チェ シウク，小野寺 宏，矢谷 浩司．  「コンピュータ使用時に目の乾燥状態を検出する手法の検討」

### 情報処理学会HCI研究会において2件の発表を行います．

3月に開催される情報処理学会HCI研究会にて，以下の2件の発表を行います．

> 松井 秀憲，矢谷 浩司．  「GitHub上のコード変更を利用したプログラミング演習問題の実用性の評価」  胥 皓，矢谷 浩司．  「ユーザの体の3Dモデル上に服装品をデザインするインタフェースの予備的検討」

### 情報処理学会UBI研究会において3件の発表を行います．

3月に開催される情報処理学会UBI研究会にて，以下の3件の発表を行います．

> チェ シウク，小野寺 宏，矢谷 浩司．  「コンピュータ使用時に目の乾燥状態を検出する手法の検討」  坂口 達彦，矢谷\xA0浩司．  「指紋認証 Dual-purpose Biometrics における脈拍数計測の改善と評価」  陳 明輝，チャコン サラス ディマス アントニー，矢谷 浩司．  「複数周波数帯での静電容量センシングによる指の識別手法」

## 2020/01

### Minghui won the Best poster presentation award in our Rinko course!

M2のMinghuiが専攻内の輪講におけるポスタープレゼンテーションでBest poster presentation awardを受賞しました．

### Koji is presenting our recent work at RIEC International Symposium on Human-Computer Interaction.

Koji Yatani. "Helping adolescent SNS users overcome privacy and security threats."

矢谷がRIEC International Symposium on Human-Computer InteractionにてIIS Labで行なっている最新の研究に関して発表します．

[https://sites.google.com/view/riec-sigchi-symposium/](https://sites.google.com/view/riec-sigchi-symposium/)

### 情報処理学会HCI研究会で発表いたします．

M2の佐藤と正木が情報処理学会HCI研究会におきまして以下の論文の発表を行います．

> 佐藤 安理紗 ジエンジエラ，柴田 健吾，矢谷 浩司．  「英語非母語話者のアカデミック・ライティングにおけるリアルタイム剽窃疑い提示の効果」  正木 博明，柴田 健吾，星野 秀偉，石濵 嵩博，齋藤 長行，矢谷 浩司．  「SNS上の行動に関する若年層ユーザに対するナッジの効果検証」

## 2019/12

### Our CHI 2020 submission has been conditionally accepted!

以下の論文がCHI 2020に条件付き採択されました！

> Hiroaki Masaki, Kengo Shibata, Shui Hoshino, Takahiro Ishihama, Nagayuki Saito, and Koji Yatani. "Exploring Nudge Designs to Help Adolescent SNS Users Avoid Privacy and Safety Threats."

### Carla and Koji are attending CSCW Asia Winter School 2019 in Kyoto.

Carla is presenting her work and Koji is serving as a mentor and panelist at the event.

Carla Griggioと矢谷がCSCW Asia Winter Schoolに参加します．Carlaは研究発表をし，矢谷はメンター，およびパネリストとして参加します．

## 2019/11

### 松井(M2)が情報処理学会山下記念研究賞を受賞いたしました！

Matsui won an IPSJ Yamashita SIG Research Award! This award is given to an outstanding paper presented at IPSJ SIG workshops or symposia.

[https://www.ipsj.or.jp/award/yamasita2019-detail.html#ubi](https://www.ipsj.or.jp/award/yamasita2019-detail.html#ubi)

松井(M2)が情報処理学会の山下記念研究賞を受賞致しました！山下記念研究賞は，研究賞として本学会の研究会および研究会主催シンポジウムにおける研究発表のうちから特に優秀な論文を選び，その発表者に贈られているものです．

### Alphaboat社様との共同研究を開始いたしました．

[https://www.alpha-boat.com/archives/830](https://www.alpha-boat.com/archives/830)
[https://www.t.u-tokyo.ac.jp/foe/press/setnws_201911151312465555055854.html](https://www.t.u-tokyo.ac.jp/foe/press/setnws_201911151312465555055854.html)

IIS LabはAlphaboat社（西谷大蔵社長）と共同で，SNSユーザの行動・つながりデータ可視化システムの研究を開始しました．

### 矢谷がRIEC Awardを受賞致しました．

Koji has received RIEC Award. RIEC Award is organized by Tohoku University RIEC, and given to a young researcher who has outstanding research contributions in the field of EE, information, and communication, and a strong potential to further contribute to such research communities.

[http://www.riec.tohoku.ac.jp/ja/info/riec-award/r1/](http://www.riec.tohoku.ac.jp/ja/info/riec-award/r1/)

矢谷がRIEC Awardを受賞致しました．RIEC Awardは，電気情報通信分野の学術研究の発展に顕著な貢献があり，将来にわたり，当該分野の発展に寄与することが期待される優秀な若手研究者に与えられる賞で，東北大学電気通信研究所により創設されたものです．

## 2019/10

### 矢谷が情報・システム工学概論の講義の2コマを担当いたします．

矢谷が駒場教養課程の授業におきまして，情報・システム工学概論の2コマ(10/28，11/7)を担当いたします．授業名は「ユーザエクスペリエンスの設計・実装法」です．
[授業のリンク](https://sites.google.com/view/hasegawalecture/%E6%83%85%E5%A0%B1%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%B7%A5%E5%AD%A6%E6%A6%82%E8%AB%96)

### Zhongyi will be presenting his work at UIST as a demo.

Zhongyi will be presenting his work on group dancing systems at UIST 2019 as a demo.

> Zhongyi Zhou, Yuki Tsubouchi, and Koji Yatani. 2019. Visualizing Out-of-synchronization in Group Dancing. In\xA0The Adjunct Publication of the 32nd Annual ACM Symposium on User Interface Software and Technology (UIST '19). ACM, New York, NY, USA, 107-109.

### Carla will be serving as a Data & PCS co-chair for CHI 2021.

CarlaがCHI 2021においてData&PCS担当委員を務めることになりました．

### Koji will be serving as a Sponsorship and Journals co-chair for CHI 2021.

矢谷がCHI 2021においてSponsorship担当委員，およびJournals担当委員を務めることになりました．

### Koji will be serving as a Student Innovation Content co-chair for UIST 2020.

矢谷がUIST 2020においてStudent Innovation Content担当委員を務めることになりました．

## 2019/09

### 日本海事新聞社様との共同研究を開始いたしました．

[https://www.jmd.co.jp/article.php?no=249744](https://www.jmd.co.jp/article.php?no=249744)
[https://www.nikkei.com/article/DGXLRSP518477_V00C19A9000000/](https://www.nikkei.com/article/DGXLRSP518477_V00C19A9000000/)

IIS Labは日本海事新聞社（大山高明社長）と共同で，海運情報メディアにおける知的作業の生産性向上を目指し，人工知能技術を活用したサービス・アプリケーションの検討を行う研究を開始しました．

### 合同会社DMM.comのCTO松本勇気様の特別講演を開催します．

[https://iis-lab.org/dls/yukimatsumoto/](https://iis-lab.org/dls/yukimatsumoto/)

IIS Labは合同会社DMM.comのCTO松本勇気様の特別講演を10/16に開催いたします．学内外を問わずご参加いただけます．ご興味のある方は以下のページをご覧ください．

### セコム科学技術振興財団による研究者インタビューが掲載されました．

[https://www.secomzaidan.jp/challenge/interview/cyber/07yatani/index.html](https://www.secomzaidan.jp/challenge/interview/cyber/07yatani/index.html)

現在研究助成を受けているセコム科学技術振興財団による矢谷のインタビューが掲載れました．

## 2019/08

### パシフィックリーグマーケティング株式会社との共同研究開始がプレスリリースされました．

[https://www.t.u-tokyo.ac.jp/shared/press/data/setnws_201908210906190490997264_958145.pdf](https://www.t.u-tokyo.ac.jp/shared/press/data/setnws_201908210906190490997264_958145.pdf)
[https://insight.official-pacificleague.com/news/18077](https://insight.official-pacificleague.com/news/18077)
[https://headlines.yahoo.co.jp/hl?a=20190827-00515279-fullcount-base](https://headlines.yahoo.co.jp/hl?a=20190827-00515279-fullcount-base)
[https://www.nikkansports.com/baseball/news/201908210000448.html](https://www.nikkansports.com/baseball/news/201908210000448.html)

パシフィックリーグマーケティング株式会社とIIS Labは共同で，視聴時間を自在に設定できる野球ダイジェスト動画配信システムの研究を開始いたしました．

### 矢谷が情報処理学会学会誌に寄稿させていただきました．

[https://iis-lab.org/paper/IPSJ-201908.pdf](https://iis-lab.org/paper/IPSJ-201908.pdf)

矢谷が情報処理学会学会誌2019年8月号の「先生，質問です．」のコーナーに寄稿させていただきました．

### Koji becomes the new SC chair for UbiComp!

Koji has been elected as the new Steering Committee chair for UbiComp for the next two years.

矢谷がUbiComp運営委員会の委員長(2年間)に選ばれました．

## 2019/06

### Stockmarkでの矢谷のインタビューが紹介されました．

[https://www.wantedly.com/companies/stockmark/post_articles/171937](https://www.wantedly.com/companies/stockmark/post_articles/171937)

矢谷が技術アドバイザーを務めるStockmark社での業務に関するインタビューが紹介されました．

最新テクノロジーと実社会をつなぐ「応用科学」の専門家 –技術アドバイザー・矢谷 浩司

### 矢谷研究室の研究成果が論座の記事に取り上げられました．

[https://webronza.asahi.com/science/articles/2019052200009.html](https://webronza.asahi.com/science/articles/2019052200009.html)

視覚が不自由な方向けの衣料品・服飾品ショッピング支援モバイルアプリに関する研究が論座の記事におきまして取り上げられました．

「人間はもう超えた！　ファッション向けＡＩの進化」

### Yuji presents his work at an IPSJ UBI workshop.

[http://sigubi.ipsj.or.jp/seminar62/](http://sigubi.ipsj.or.jp/seminar62/)

M1の杉山が情報処理学会UBI研究会において以下の論文を発表いたします．

杉山 悠司 (東京大学), 刀根 亮太 (SBクリエイティブ株式会社), 今村 修一郎 (プロクター・アンド・ギャンブル・ジャパン株式会社), 矢谷 浩司 (東京大学)
「商品棚前における非計画購買者の行動特徴量の検討」

## 2019/05

### Ivan Poupyrev is giving us a distinguished lecture!

[https://sites.google.com/view/iislab-dls-ivan/home](https://sites.google.com/view/iislab-dls-ivan/home)

5/29の13時より，東京大学工学部2号館におきまして，GoogleのIvan\xA0Poupyrev氏にご講演いただくことになりました．現在GoogleのAdvanced Technology and ProjectsにおいてDirector of Engineeringを務めるPoupyrev氏は，HCI分野において最も影響力のある研究者の1人であります．HCIの研究分野で最も権威のある国際会議であるCHI 2019ではクロージングの基調講演も務められました．今回の講演では日常生活に溶け込むインタラクティブな技術の開発秘話と彼が目指す未来をお話しいただきます．

### Carla joined us!

Carla F. Griggio joined us as a post-doc. Welcome, Carla!

### Koji is serving as a Program Committee member for ASSETS 2019.

Koji is serving as a Program Committee member for ASSETS 2019.

矢谷がASSETS 2019においてプログラム委員を務めさせていただくことになりました．

## 2019/04

### 卒業生の嶋田さんの研究が東京新聞，中日新聞に掲載されました.

卒業生の嶋田さんの研究が東京新聞(2019/4/22朝刊)，中日新聞(2019/4/23夕刊)に掲載されました．

「びっくり新技術　価格や色を音声に，アプリ開発」

### 矢谷のインタビュー記事が掲載されました.

[http://top-researchers.com/?p=2489](http://top-researchers.com/?p=2489)

Top Researchersに矢谷のインタビュー記事が掲載されました．

「人間とコンピュータの最適な関係を実現する〜矢谷浩司・東京大学准教授」

### Koji is serving as a Subcommittee co-Chair for CHI 2020.

Koji is serving as a Subcommittee co-Chair for Engineering Interactive Systems and Technologies in CHI 2020.

矢谷がCHI 2020のEngineering Interactive Systems and TechnologiesサブコミッティーのSubcommittee co-Chairを務めます．

### Koji is serving as a Doctoral Consortium co-Chair for CHI 2020.

Koji is serving as a Doctoral Consortium co-Chair for CHI 2020.

矢谷がCHI 2020においてDoctoral Consortium co-Chairを務めさせていただくことになりました．

### Welcome, new members!

4 Master students, 5 undergraduate students, and 3 interns/visiting students join us!

修士課程4名，学部生5名が新たに配属されました．また，3名のインターン生が加わりました．

## 2019/03

### 1 master and 5 undergraduates graduated!

1 master and 5 undergraduate students successfully graduated this March. Congratulations!

修士課程1名，学部生5名が卒業いたしました．おめでとうございます！

### Antony won the Best Paper Award at TEI 2019!

Antony won the Best Paper Award at TEI 2019 for the work he did in collaboration with researchers at University of Melbourne.

アントニーがTEI 2019にてBest Paper Awardを受賞いたしました．アントニーのメルボルン大学時代の研究になります．

### Koji is serving as a Program Committee member for ASSETS 2019

Koji is serving as a Program Committee member for ASSETS 2019.

矢谷がASSETS 2019にプログラム委員として参加致します．

### Had a workshop with researchers at Stockholm University

We had a workshop with Prof. Barry Brown and his colleagues at Stockholm University to discuss creative use of smartphone technology.

ストックホルム大学のBarry Brown教授とその研究室メンバーと共にワークショップを開催し，スマートフォンの新しい活用法・アプリケーションに関する議論を行いました．

### B4の嶋田がUBI研究会にて優秀論文賞を受賞しました．

3月に開催された情報処理学会UBI研究会にて，B4の嶋田が以下の論文に対して優秀論文賞を受賞しました．

> 嶋田 紅緒，矢谷 浩司．  「視覚が不自由なユーザのファッション活動に関する定性的調査」

### IIS Labの研究が朝日新聞デジタルで取り上げられました．

[https://www.asahi.com/articles/ASM2W3W7BM2WULBJ008.html](https://www.asahi.com/articles/ASM2W3W7BM2WULBJ008.html)

視覚が不自由な方向けの衣料品・服飾品ショッピング支援モバイルアプリに関して朝日新聞デジタルで取り上げていただきました．

百貨店で買い物、声や振動で案内 視覚障害者向けアプリ

### 「キミの東大」で矢谷のインタビューが紹介されました．

[https://kimino.ct.u-tokyo.ac.jp/lab-visit/2021](https://kimino.ct.u-tokyo.ac.jp/lab-visit/2021)

高大接続研究開発センターが運営する「キミの東大」というウェブサイトで，矢谷のインタビューを取り上げていただきました．

やり方が分かっていたらそれは研究ではない―工学部・矢谷浩司准教授

## 2019/02

### 日刊工業新聞2019年2月15日版において矢谷が「経営ひと言」で紹介されました．

日刊工業新聞2019年2月15日版において矢谷が「経営ひと言」で紹介されました．Web版でもご覧いただけます（会員登録必要）．

[https://www.nikkan.co.jp/articles/view/00506399](https://www.nikkan.co.jp/articles/view/00506399)

### 経済産業省主導のRFID活用実証実験において，RFIDを利用した未来の家での生活のコンセプト立案，及びコンセプトビデオ作成に貢献しました．

[http://www.meti.go.jp/press/2018/02/20190208003/20190208003.html](http://www.meti.go.jp/press/2018/02/20190208003/20190208003.html)
[https://www.youtube.com/watch?v=_iIisFgHGS0](https://www.youtube.com/watch?v=_iIisFgHGS0)
[https://www.youtube.com/watch?v=mR6lMZma9L4](https://www.youtube.com/watch?v=mR6lMZma9L4)
[https://www.youtube.com/watch?v=aWaXMFGyOps](https://www.youtube.com/watch?v=aWaXMFGyOps)

経済産業省主導のRFID活用実証実験において，ハッカソンを研究雨室内で執り行い，家庭内におけるRFIDを利用した未来の生活のコンセプト立案，及びコンセプトビデオ作成に貢献しました．東京ガス横浜ショールームの「くらしのライブラリー キッチンライブラリーコーナー」における展示の一部として，貸し出されるタブレット端末より御覧いただける予定です．

経済産業省プレスリリース
ハッカソンにより作成したコンセプトビデオ
LINKED: ひと・もの・いえがつながる未来
IoT技術を活用した新たなサプライチェーン情報共有システムの開発の実証実験

### Koji is giving a keynote talk at WristSense 2019 workshop (co-located with IEEE PerCom).

Koji is giving a keynote talk at WristSense 2019 workshop about our latest research outcome on personal healthcare systems.

矢谷がWristSense 2019というワークショップにおきまして，ラボの研究成果を含めた基調講演を行います．

[https://sites.google.com/view/wristsense2019/program?authuser=0](https://sites.google.com/view/wristsense2019/program?authuser=0)

### UBI研究会にて2件の発表を行います．

3月に開催される情報処理学会UBI研究会にて，B4の嶋田と竹ノ内が発表致します．

> 嶋田 紅緒，矢谷 浩司．  「視覚が不自由なユーザのファッション活動に関する定性的調査」

> 竹ノ内 朝陽，矢谷 浩司．  「風を用いたインタフェース実現に向けた風に関する知覚の定量的調査」

### コンビニでの衝動買いに関する実証実験のプレスリリースしました，

[https://www.nikkan.co.jp/articles/view/00504428](https://www.nikkan.co.jp/articles/view/00504428)

[https://newswitch.jp/p/16308](https://newswitch.jp/p/16308)

SBクリエイティブ，ローソンと共同で，消費者の衝動買いにつながるしぐさを検出するためのデータを集める実店舗調査を行うことをプレスリリースしました．

日刊工業新聞Web版

ニュースイッチ

## 2019/01

### 日本橋高島屋における実証実験のプレスリリースしました．

[https://www.nikkan.co.jp/articles/view/00503965](https://www.nikkan.co.jp/articles/view/00503965)

[https://www.t.u-tokyo.ac.jp/soe/press/setnws_201901281409483167686745.html](https://www.t.u-tokyo.ac.jp/soe/press/setnws_201901281409483167686745.html)

IIS Labで開発している視覚が不自由な方向けの衣料品・服飾品ショッピング支援モバイルアプリの実証実験を日本橋高島屋 S.C.本館婦人靴売場において執り行いました．

日刊工業新聞Web版

プレスリリース

### Koji is serving as a Doctoral Consortium co-Chair for CHI 2020.

Koji is serving as a Doctoral Consortium co-Chair for CHI 2020.

矢谷がCHI 2020においてDoctoral Consortium co-Chairを務めさせていただくことになりました．

### 株式会社ナナメウエとの共同研究をプレスリリースしました．

IIS Labと株式会社ナナメウエは共同で，インターネットコミュニティにおける18歳未満のユーザーに関するトラブルリスクを軽減させるためのインターフェイスに関する研究を開始致しました．

[http://www.t.u-tokyo.ac.jp/shared/press/data/setnws_201901211357268881193465_978518.pdf](http://www.t.u-tokyo.ac.jp/shared/press/data/setnws_201901211357268881193465_978518.pdf)

### インタラクション2019にM2柴藤の論文が採択されました．

インタラクション2019にM2柴藤が筆頭著者の論文が採択されました．

> 柴藤大介，有薗拓也，宮崎章太，矢谷浩司．CodeGlass: GitHubのプルリクエストを活用したコード断片のインタラクティブな調査支援システム．インタラクション2019．

## 2018/12

### Antony and Daisuke gave invited talks at NTU.

Antony and Daisuke gave invited talks at National Taiwan University.

国立台湾大学にてAntonyと柴藤が招待講演を行いました．

[https://www.csie.ntu.edu.tw/app/news.php?Sn=14358](https://www.csie.ntu.edu.tw/app/news.php?Sn=14358)

## 2018/10

### Presenting two IMWUT papers at UbiComp!

We presented two IMWUT papers at UbiComp 2018.

UbiComp 2018にてIMWUTに採択された2件の論文を発表しました．

### Presenting a short paper at Pacific Graphics.

Our co-authored work was presented as a short paper at Pacific Graphics 2018.

Ryo Suzuki, Koji Yatani, Mark D. Gross, and Tom Yeh. Tabby: Explorable Design for 3D Printing Textures.\xA0In Proceedings of Pacific Graphics 2018.

Pacific Graphics 2018にて共著となっている論文がshort paperとして発表されました．

### Welcome, new members!

1 Doctoral and 3 Master students join us!

博士課程1名，修士課程3名が新たに配属されました．

## 2018/08

### 月刊「化学工業」に矢谷が寄稿いたしました．

月刊「化学工業」2018年9号(VOL.69 No.9)に，以下のタイトルで矢谷が寄稿いたしました．

「AI研究が拓く新しい産学連携 〜非AI研究者の視点から〜」([PDF](https://iis-lab.org/paper/kagakukogyo201808.pdf))

### Hidenori and Al-light on TV!

Hidenori Matsui and his work, Al-light, was featured at Trend Tamago in World Business Satellite on 2nd August.

[http://www.tv-tokyo.co.jp/mv/wbs/trend_tamago/post_160082/](http://www.tv-tokyo.co.jp/mv/wbs/trend_tamago/post_160082/)
[http://www.tv-tokyo.co.jp/plus/smp/business/entry/2018/017664.html](http://www.tv-tokyo.co.jp/plus/smp/business/entry/2018/017664.html)

松井とAl-lightがテレビ東京のワールドビジネスサテライトの中のトレンドたまごで紹介されました(8/2)．

## 2018/07

### Koji is serving as a Subcommittee co-Chair for CHI 2019.

Koji is serving as a Subcommittee co-Chair for Engineering Interactive Systems and Technologies in CHI 2019.

矢谷がCHI 2019のEngineering Interactive Systems and TechnologiesサブコミッティーのSubcommittee co-Chairを務めます．

[http://chi2019.acm.org/authors/papers/selecting-a-subcommittee/#TOC-Engineering-Interactive-Systems-and-Technologies](http://chi2019.acm.org/authors/papers/selecting-a-subcommittee/#TOC-Engineering-Interactive-Systems-and-Technologies)

### 矢谷が文京区教育センターの子ども科学カレッジにて講演いたします．

矢谷が文京区教育センターの子ども科学カレッジにて，「AIに触れてみよう」という講演をいたします．

リンクは[こちら](http://www.bunkyo-tky.ed.jp/ed-center/2018/06/23/%E7%AC%AC6%E5%9B%9E%e3%80%80%E5%AD%90%E3%81%A9%E3%82%82%E7%A7%91%E5%AD%A6%E3%82%AB%E3%83%AC%E3%83%83%E3%82%B8-3/)．

## 2018/06

### 矢谷が放射光学会若手研究会にて講演いたします．

矢谷が9月に開催される放射光学会若手研究会にて，「次の「当たり前」をデザインする　〜HCI研究がお手伝いできること〜」という講演をいたします．

[https://www.jssrr-wakate-2018.com/home-1](https://www.jssrr-wakate-2018.com/home-1)

### 矢谷がヒューマンインタフェース2018にて講演いたします．

矢谷が9月に開催されるヒューマンインタフェース2018にて，「Understand stats, know thy results: 統計モデルを用いたHCI実験の解析事例紹介」という講演をいたします．

[https://www.his.gr.jp/event/his2018_kousyuu.html](https://www.his.gr.jp/event/his2018_kousyuu.html)

### Koji is giving an invited talk at UBC.

Koji is giving an invited talk at UBC for their Designing for People graduate program.

矢谷がブリティッシュコロンビア大学のDFPプログラムの授業において招待講演をいたします．

[http://dfp.ubc.ca/](http://dfp.ubc.ca/)

## 2018/05

### M1の松井が優秀論文賞を受賞しました！

M1の松井が5/18・19に開催される情報処理学会UBI研究会にて，以下の論文に対して優秀論文賞を受賞いたしました．

> 松井秀憲，橋爪崇弘，矢谷浩司．  「飲料のアルコール濃度計測を行うスマートアイスキューブの試作と評価」

### M1の松井がUBI研究会にて発表します．

M1の松井が5/18・19に開催される情報処理学会UBI研究会にて以下の研究発表を行います．

> 松井秀憲，橋爪崇弘，矢谷浩司．  「飲料のアルコール濃度計測を行うスマートアイスキューブの試作と評価」

## 2018/04

### 卒業生の吉谷が優秀研究発表賞を受賞しました！

卒業生の吉谷が3月の情報処理学会CGVI研究会にて，以下の論文に対して優秀研究発表賞を受賞いたしました．

> 吉谷拓真，矢谷浩司．  「クラウドソーシングを用いたアイコンの主観的属性と視覚的特徴量の関係性の調査」

### Koji is serving as a Doctoral Consortium co-Chair for CHI 2019.

Koji is serving as a Doctoral Consortium co-Chair for CHI 2019.

矢谷がCHI 2019においてDoctoral Consortium co-Chairを務めさせていただくことになりました．

### Koji is serving as a Sponsorship co-Chair for UbiComp/ISWC 2018.

Koji is serving as a Sponsorship co-Chair for UbiComp/ISWC 2018. 矢谷がUbiComp/ISWC 2018においてSponsorship co-Chairを務めさせていただくことになりました．

### Koji is serving as a Program Committee for UIST 2018.

Koji is serving as a Program Committee for UIST 2018.

矢谷がUIST 2018においてプログラム委員を務めさせていただくことになりました．

### Koji is serving as a Program Committee for ASSETS 2018.

Koji is serving as a Program Committee for ASSETS 2018.

矢谷がASSETS 2018においてプログラム委員を務めさせていただくことになりました．

### Koji is serving as a Doctoral Consortium co-Chair for ISS 2018.

Koji is serving as a Doctoral Consortium co-Chair for ISS 2018.

矢谷がISS 2018においてDoctoral Consortium co-Chairを務めさせていただくことになりました．

### Welcome, new members!

5 Master and 5 undergraduate students join us!

修士課程5名，学部生5名が新たに配属されました．

## 2018/03

### 修士課程3名，学部6名が卒業いたしました！

3 Master and 6 undergraduate students graduated! Congratulations!

修士課程3名，学部生6名が卒業いたしました．おめでとうございます！

### 橋爪が修士論文専攻長賞を受賞いたしました！

Takahiro won a Department Thesis Award for his Master thesis. His research has been published in PACM IWMUT.

Opportunistic Photoplethysmography in Mobile Fingerprint Authentication

橋爪が自身の修士論文において，専攻長賞を受賞いたしました．本研究内容はPACM IMWUTにも採録されています．

論文タイトル / Thesis title:
(モバイルデバイスでの指紋認証時に 指尖容積脈波を同時に取得する手法の研究)

### セコム科学技術振興財団挑戦的研究助成に採択されました．

セコム科学技術振興財団挑戦的研究助成に矢谷の研究提案が採択されました．

研究課題:
利用者の生体情報を用いて指紋認証を拡張するシステムの研究

### 情報処理学会全国大会にて学生奨励賞を4件受賞いたしました！

情報処理学会全国大会における以下の論文発表に対して，学生奨励賞を受賞いたしました．

### 情報処理学会CGVI研究会にてM2の吉谷が発表いたしました．

情報処理学会CGVI研究会にてM2の吉谷が以下の論文を発表いたしました．

> 吉谷拓真，矢谷浩司．  「クラウドソーシングを用いたアイコンの主観的属性と視覚的特徴量の関係性の調査」

### SIGPX勉強会にてM1の柴藤，B4の三島が発表いたしました．

SIGPX勉強会にてM1の柴藤，B4の三島が以下の論文を発表いたしました．

## 2018/02

### オープンラボ @ DMM.make AKIBA

DMM.make AKIBA AKIBAでつながる交流会にて，ラボの紹介と研究成果デモを行います．詳細は以下のページよりご確認ください．

[https://akibameetup24.peatix.com/](https://akibameetup24.peatix.com/)

## 2018/01

### 情報処理学会全国大会にて7件の論文を発表し，卒業生有賀が山下記念研究賞を受賞いたします．

IIS Labのメンバーが情報処理学会全国大会にて以下の論文を発表いたします．また，卒業生の有賀が本年度の山下記念研究賞を受賞いたします．

## 2017/12

### Koji is serving as an Associate Editor for TOCHI.

Koji is serving as an Associate Editor for ACM Transaction of Computer-Human Interaction.

矢谷がACM Transaction of Computer-Human Interactionの編集委員を務めさせていただくことになりました．

## 2017/11

### Koji has been elected as a UTokyo Excellent Young Researcher!

Koji has been elected as a 2017 UTokyo Excellent Young Researcher.

[http://www.u-tokyo.ac.jp/ja/news/topics/topics_z1402_00007.html](http://www.u-tokyo.ac.jp/ja/news/topics/topics_z1402_00007.html)
[https://www.t.u-tokyo.ac.jp/foe/topics/setnws_201712281037090077765562.html](https://www.t.u-tokyo.ac.jp/foe/topics/setnws_201712281037090077765562.html)

矢谷が平成29年度東京大学卓越研究員に選出されました．

### M2の下尾が音楽情報科学研究会にて学生奨励賞を受賞しました．

M2の下尾が11/25に開催される情報処理学会音楽情報処理研究会にて以下の研究発表に対して学生奨励賞を受賞いたしました．

> 下尾 波輝, 矢谷 浩司．  「エレキギター演奏自動評価のための音響的特徴量の調査」

### 矢谷がストックマーク株式会社の技術アドバイザーに就任しました．

東京大学大学院情報理工学系研究科における機械学習・ディープラーニング研究をベースとして，2015年4月に創業された東大発AIベンチャーであるストックマーク株式会社におきまして，矢谷が技術アドバイザーとして就任いたしました．

[https://www.anews.cloud/single-post/release/20171113/advisor-yatani](https://www.anews.cloud/single-post/release/20171113/advisor-yatani)

### M2の下尾が音楽情報科学研究会にて発表します．

M2の下尾が11/25に開催される情報処理学会音楽情報処理研究会にて以下の研究発表を行います．

> 下尾 波輝, 矢谷 浩司．  「エレキギター演奏自動評価のための音響的特徴量の調査」

## 2017/10

### B4の畑田が電気系同窓会の講演とパネルディスカッションに参加しました．

B4の畑田が電気系同窓会におけるVRの講演とパネルディスカッションに参加し，五月祭におけるVR企画の内容を発表しました．

[http://todaidenki.jp/?p=9472](http://todaidenki.jp/?p=9472)

## 2017/07

### 卒業生の有賀が2017年度山下記念研究賞を受賞しました．

卒業生の有賀(2016年度修士卒)が，音楽情報処理研究会において発表した論文に対し，2017年度山下記念研究賞を受賞いたしました．

> 有賀竣哉，後藤真孝，矢谷浩司．「Strummer：インタラクティブなギターコード練習システム」 (情報処理学会音楽情報科学研究会にて発表．)

[http://www.ipsj.or.jp/award/yamashita2017.html](http://www.ipsj.or.jp/award/yamashita2017.html)

### 橋爪が専攻のポスター発表においてBest Poster Awardを受賞しました．

橋爪(M2)が専攻内の輪講におけるポスター発表でBest Poster Awardを受賞しました．

## 2017/06

### A paper accepted for an oral presentation at MM 2017!

Our paper has been accepted for an oral presentation at Multimedia 2017!

Haojian Jin, Yale Song, Koji Yatani. ElasticPlay: Interactive Video Summarization with Dynamic Time Budgets.

Multimedia 2017において以下のフルペーパーの論文が口頭発表にて採択されました．

### Presenting a paper at ICME 2017!

Shunya (our former master student) is presenting the following paper as a poster presentation at ICME 2017.

Shunya Ariga, Masataka Goto, Koji Yatani. Strummer: An Interactive Guitar Chord Practice System.

卒業生の有賀がICME 2017にて以下のフルペーパーの論文をポスター発表いたします．

## 2017/04

### Welcome, new members!

3 Master and 5 undergraduate students join us!

修士課程3名，学部生5名が新たに配属されました．

## 2017/03

### Graduation!

2 master students and 6 undergraduate students graduated this month. Congratulations!

修士課程2名と学部生6名が卒業いたしました．おめでとうございます！

### 柴藤大介が優秀卒業論文賞を受賞しました．

ラボメンバーの柴藤(B4)が優秀卒業論文賞を受賞しました．

柴藤大介．"Interactive Piece-level Code Examination Using Diffs and Review Comments" (差分とレビューコメントを用いたソースコードのインタラクティブな局所的調査手法)

### UBI研究会にて橋爪崇弘が優秀論文賞，有薗拓也が学生奨励賞を受賞しました．

ラボメンバーの橋爪(M1)と有薗(B4)が情報処理学会UBI研究会の発表において，それぞれ優秀論文賞と学生奨励賞を受賞しました．

### 有賀竣哉が音楽情報科学研究会にて学生奨励賞を受賞しました．

ラボメンバーの有賀(M2)が情報処理学会音楽情報科学研究会の発表において，学生奨励賞を受賞しました．

> 有賀竣哉，後藤真孝，矢谷浩司．「Strummer：インタラクティブなギターコード練習システム」

### 情報処理学会UBI研究会にて発表します．

ラボメンバーの橋爪(M1)，有薗(B4)，宮崎(B4)がUBI研究会にて口頭発表を行います．

### インタラクション2017にてデモ発表します．

ラボメンバーの有薗(B4)がインタラクションにてデモ発表を行います．

> 有薗拓也，橋爪崇弘，矢谷浩司．「筋力トレーニングを指向したExergame向け負荷制御の研究」

## 2017/02

### 情報処理学会音楽情報科学研究会にて発表します．

ラボメンバーの有賀(M2)が情報処理学会音楽情報科学研究会にて口頭発表を行います．

> 有賀竣哉，後藤真孝，矢谷浩司．「Strummer：インタラクティブなギターコード練習システム」

### Koji is serving for UIST 2017 as a program committee member.

Koji is serving for UIST 2017 as a program committee member. 矢谷がUIST2017においてプログラム委員を務めます．

## 2016/12

### Koji is serving for UbiComp 2017 as a sponsorship co-chair.

Koji is serving for UbiComp 2017 as a sponsorship co-chair. 矢谷がUbiComp2017においてスポンサーシップチェアを務めます．

### Koji is serving for PACM IWMUT as an Editor.

Koji is serving for PACM IWMUT as an Editor. PACM IWMUT is a new journal series that accepts work in interactive, wearable, mobile, and ubiquitous computing. Accepted papers are also invited to presentations at UbiComp. So please submit your greatest work to IMWUT!

矢谷が新しくできた論文誌PCAM IWMUTのエディターを務めます．IWMUTに採択された論文はUbiCompでの発表にも招待されますので，ぜひご投稿下さい！

[http://imwut.acm.org/](http://imwut.acm.org/)

## 2016/10

### HCI研究会にて発表します．

ラボメンバーの岩下(M2)がHCI研究会にて口頭発表を行います．

> 岩下知美，矢谷浩司．インフォグラフィックスの作成をインタラクティブに支援するシステム．

## 2016/09

### We presented at UbiComp 2016.

Takuma Yoshitani and Takahiro Hashizume presented two papers at UbiComp 2016.

ラボメンバーの吉谷と橋爪(どちらもM1)がUbiComp2016にて口頭発表を行いました．

### Koji is serving for CHI 2017 as an associate chair.

Koji is serving for CHI 2017 as an associate chair for the Interaction techniques, Devices and Modalities subcommittee.

CHI2017のInteraction techniques, Devices and Modalitiesサブコミッティのプログラム委員として矢谷が参加します．

## 2016/04

### Welcome, new members!

3 Master and 6 undergraduate students join IIS Lab. Welcome! 修士3名，学部生6名が新たにIIS Labに加わりました．

## 2016/02

### Won a Best Paper award at CHI 2016!

We won a Best Paper award at CHI 2016 with Minsam Ko, Seung-woo Choi, and Uichin Lee at KAIST.

KAISTの研究者(Minsam Ko，Seung-woo Choi，Uichin Lee)とともにCHI2016にてBest Paper awardを受賞しました．

## 2015/10

### A technical paper presentation at SIGGRAPH Asia 2015 and we are on Wired!

We have the following paper at SIGGRAPH Asia 2015. This work is in collaboration with Jun and Li-Yi from University of Hong Kong, and Takaaki from Microsoft Research. We are also featured on Wired.

[http://sa2015.siggraph.org/en/attendees/technical-papers.html?view=event&type=techpapers&event=320](http://sa2015.siggraph.org/en/attendees/technical-papers.html?view=event&type=techpapers&event=320)
[http://www.wired.com/2015/10/microsofts-badass-new-tool-is-like-autocomplete-for-drawing/](http://www.wired.com/2015/10/microsofts-badass-new-tool-is-like-autocomplete-for-drawing/)

SIGGRAPH Asia 2015にてUniversity of Hong KongのJunとLi-Yi，Microsoft Researchの白鳥さんとの共同研究成果を発表します．またWiredで取り上げられました．

> Jun Xing, Li-Yi Wei, Takaaki Shiratori, and Koji Yatani. Autocomplete Hand-drawn Animations.

## 2015/09

### Largest UbiComp/ISWC ever!

Koji served as a Program co-Chair for UbiComp this year, and we had the largest number of registrations! Thank you all for coming to the conference!

私が共同プログラム委員長を務めたUbiComp 2015が無事に閉幕し，過去最大の登録者数を集めました．会議にお越し下さった皆様，ありがとうございました．

## 2015/08

### Open lab for high school students

We have open labs including demos of information visualization systems created by lab members for high school students.

高校生向けに情報可視化システムのデモを中心にオープンラボを行います．

## 2015/04

### A full-paper presentation at CHI 2015

We present a full-paper of work in collaboration with researchers in Microsoft Research at CHI 2015.

CHI 2015にてMicrosoft Researchの研究者との共同研究の成果をフルペーパーとして発表します．

> Darren Edge, Sumit Gulwani, Natasa Milic-Frayling, Mohammad Raza, Reza Adhitya Saputra, Chao Wang, and Koji Yatani. Mixed-Initiative Approaches to Global Editing in Slideware. In Proceedings of CHI 2015.

### Koji is serving as a Program Committee for UIST 2015.

Koji Yatani will be serving as a Program Committee for UIST 2015.

UIST 2015に矢谷がプログラム委員として参加します.

### Welcome, new members!

IIS Lab welcomes three Master students this month. We and Aida Lab welcome eight undergraduates.

IIS Labに修士課程の学生さんが3名加わりました．また相田研と共同で8人の学部生を迎えることになりました．

## 2015/03

### A full-paper presentation at CSCW 2015

We present a full-paper of work in collaboration with professors and students in KAIST at CSCW 2015.

Minsam Ko, Subin Yang, Joonwon Lee, Christian Heizmann, Jinyoung Jeong, Uichin Lee, Daehee Shin, Koji Yatani, Junehwa Song, and Kyong-Mee Chung. 2015. NUGU: A Group-based Intervention App for Improving Self-Regulation of Limiting Smartphone Use. In Proceedings of the 18th ACM Conference on Computer Supported Cooperative Work & Social Computing (CSCW '15). ACM, New York, NY, USA, 1235-1245.

CSCW 2015にてKAISTの先生・学生さんと共同研究の成果をフルペーパーとして発表します．

### Koji is serving as a Program Committee for Mobiquitous 2015.

Koji Yatani will be serving as a Program Committee for Mobiquitous 2015.

Mobiquitous 2015に矢谷がプログラム委員として参加します.

## 2015/01

### Asian CHI symposium at CHI 2015

My friends and I are organizing a symposium at CHI 2015 to showcase exciting latest research from Japan.

CHI2015にて日本からの最新の研究成果を報告するためのシンポジウムを共同で開催します．

## 2014/09

### Koji is serving as a Program co-Chair for UbiComp 2015

UbiComp2015 will be held in Osaka, and Koji Yatani will be serving as a Program co-Chair.

UbiComp2015が大阪で行われ，矢谷が共同プログラム委員長を務めます．

### Two honorable mention awards at MobileHCI 2014!

Our ReviewCollage (in collaboration with Haojian Jin and Tetsuya Sakai) and TalkZones (in collaboration with Bahador Saket, Sijie Yang, Hong Tan, and Darren Edge) projects won Honorable Mention Awards at MobileHCI 2014.

ReviewCollage(Haojian Jin，Tetsuya Sakaiと共著)とTalkZones(Bahador Saket，Sijie Yang，Hong Tan，Darren Edgeと共著)の論文がにてHonorable Mention Awardを受賞しました．

## 2014/08

### IIS Lab launched!

IIS Lab has been launched on August, 2014.

IIS Labは2014年8月に発足しました．
`),jo=ko;function H(){return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`p`,{className:j.backLink,children:(0,k.jsx)(In,{to:`/#news`,children:`← IIS Lab`})}),(0,k.jsx)(`h1`,{className:Ur.pageTitle,children:`Old News`}),jo&&(0,k.jsx)(`p`,{children:jo}),(0,k.jsx)(`hr`,{className:j.divider}),(0,k.jsx)(ai,{items:Ao})]})}var Mo={season:`_season_1y5se_1`,seasonTitle:`_seasonTitle_1y5se_13`,gallery:`_gallery_1y5se_31`,item:`_item_1y5se_40`,figure:`_figure_1y5se_44`,imageWrap:`_imageWrap_1y5se_66`,image:`_image_1y5se_66`,caption:`_caption_1y5se_81`};function No({seasons:e}){return(0,k.jsx)(k.Fragment,{children:e.map(e=>(0,k.jsxs)(`section`,{className:Mo.season,children:[(0,k.jsx)(`h2`,{className:Mo.seasonTitle,children:e.title}),(0,k.jsx)(`ul`,{className:Mo.gallery,children:e.items.map((t,n)=>(0,k.jsx)(`li`,{className:Mo.item,children:(0,k.jsxs)(`figure`,{className:Mo.figure,children:[(0,k.jsx)(`div`,{className:Mo.imageWrap,children:(0,k.jsx)(`img`,{src:ir(t.image),alt:t.caption,className:Mo.image,loading:`lazy`})}),(0,k.jsx)(`figcaption`,{className:Mo.caption,children:t.caption})]})},`${e.title}-${n}`))})]},e.title))})}var Po=`---
intro_en: Do you want to know what we are doing inside and outside the lab? 🙂 Here are some photos of us.
intro_ja: 私たちがラボや外でどんな活動をしているかご存知ですか？ここではラボでの活動やラボメンバーの様子を紹介しています．
---

## Season #10 (April 2024 – March 2025)

![Anran presented his work published in IMWUT at UbiComp 2024.](/images/whatsup/s01-001-4294555513.jpg)
![Anran won a PACM IMWUT Distinguished Paper Award!](/images/whatsup/s01-002-1062714810.jpg)
![TOHAI invited speakers visited our lab.](/images/whatsup/s01-003-3440563593.jpg)
![We organized TOHAI 2024!](/images/whatsup/s01-004-3609181881.jpg)
![Petter Bae Brandtzæg visited our lab and gave a talk.](/images/whatsup/s01-005-3703474089.jpg)
![Sylvain Malacria has joined our lab as a visiting researcher!](/images/whatsup/s01-006-1213002440.jpg)
![HIroki presented his work at DICOMO 2024.](/images/whatsup/s01-007-125072025.jpg)
![Yuya presented his work at DICOMO 2024.](/images/whatsup/s01-008-3438643939.jpg)
![Haruma presented his work at DICOMO 2024.](/images/whatsup/s01-009-319982728.jpg)
![Anran presented his GCR work at CHI 2024.](/images/whatsup/s01-010-1968794542.jpg)
![Season 10 started!](/images/whatsup/s01-011-590810938.jpg)

## Season #9 (April 2023 – March 2024)

![Yuya, Haruma, and Hiroki graduated! Congrats!](/images/whatsup/s02-001-1188341684.jpg)
![Yuya, Haruma, and Hiroki graduated! Congrats!](/images/whatsup/s02-002-988808114.jpg)
![Zhongyi won an Excellent Dissertation Award! Big congrats!](/images/whatsup/s02-003-3409220759.jpg)
![Zhongyi, Ryo, Kosuke, and Ginshi graduated! Congrats!](/images/whatsup/s02-004-656629643.jpg)
![Pizza party!](/images/whatsup/s02-005-3315625110.jpg)
![Lab tour during our TOHAI event.](/images/whatsup/s02-006-2339881973.jpg)
![Will Guzman gave a talk at our TOHAI event.](/images/whatsup/s02-007-391116562.jpg)
![Alyssa Castillo Yap gave a talk at our TOHAI event.](/images/whatsup/s02-008-1188520390.jpg)
![Zefan, our Ph.D. student, gave a talk at our TOHAI event.](/images/whatsup/s02-009-834774464.jpg)
![Zhanna Sarsenbayeva gave a talk at our TOHAI event.](/images/whatsup/s02-010-3211371443.jpg)
![Benjamin Tag gave a talk at our TOHAI event.](/images/whatsup/s02-011-3276605365.jpg)
![Chi-lan, our assistant professor, gave a talk at our TOHAI event.](/images/whatsup/s02-012-863902441.jpg)
![Daniel Szabo gave a talk at our TOHAI event.](/images/whatsup/s02-013-3093736675.jpg)
![Niels van Berkel gave a talk at our TOHAI event.](/images/whatsup/s02-014-3372783992.jpg)
![Aakar Gupta visited us and gave a talk.](/images/whatsup/s02-015-306691487.jpg)
![Koji gave an invited talk at Japan Alcohol, NIcotine &amp; Drug Addiction Conference.](/images/whatsup/s02-016-3404657653.jpg)
![Kazuhiro did a demo at Tokyo Maker Faire!](/images/whatsup/s02-017-870870984.jpg)
![A group photo! So glad to have such a big team!](/images/whatsup/s02-018-3284733518.jpg)
![Zefan won the Best Demo Award at DIS 2023!](/images/whatsup/s02-019-2452396340.jpg)
![Zefan presented his work at DIS 2023 and also did a demo.](/images/whatsup/s02-020-1333667558.jpg)
![We made 10 presentations at DICOMO 2023!](/images/whatsup/s02-021-554042583.jpg)
![Kakeru presented his work at DICOMO 2023.](/images/whatsup/s02-022-4107945345.jpg)
![Ginshi presented his work at DICOMO 2023.](/images/whatsup/s02-023-1961497635.jpg)
![Ryo presented his work at DICOMO 2023, and won an Excellent Presentation Award!](/images/whatsup/s02-024-23492101.jpg)
![Shumpei presented his work at DICOMO 2023.](/images/whatsup/s02-025-1173818504.jpg)
![Rei presented his work at DICOMO 2023.](/images/whatsup/s02-026-2249295135.jpg)
![Hiroki presented his work at DICOMO 2023.](/images/whatsup/s02-027-3574838763.jpg)
![Kosuke presented his work at DICOMO 2023, and won an Excellent Presentation Award!](/images/whatsup/s02-028-1166734176.jpg)
![Keitaro presented his work at DICOMO 2023.](/images/whatsup/s02-029-3717664074.jpg)
![Kazuhiro presented his work at DICOMO 2023, and won an Excellent Presentation Award!.](/images/whatsup/s02-030-2298405255.jpg)
![Shitao presented his poster work at CHI 2023!](/images/whatsup/s02-031-2120716891.jpg)
![Arissa presented her full-paper work at CHI 2023!](/images/whatsup/s02-032-1048735478.jpg)

## Season #8 (April 2022 – March 2023)

![Kazuhiro won a Student Encouragement Award at an IPSJ conference!](/images/whatsup/s03-001-2284756934.jpg)
![HIroki, Kakeru, Rei, and Shunpei successfully graduated!](/images/whatsup/s03-002-1139632442.jpg)
![Arissa, Akari, and Kazuhiro successfully graduated!](/images/whatsup/s03-003-311530935.jpg)
![Kazuhiro won an Interactive Demo Award at Interaction!](/images/whatsup/s03-004-3187815526.jpg)
![Kazuhiro did his demo presentation at Interaction.](/images/whatsup/s03-005-1536727740.jpg)
![Kazuhiro gave a presentation at an IPSJ conference, and won a Student Encouragement Award!](/images/whatsup/s03-006-3480374006.jpg)
![Akari gave a presentation at Japan Society of Health Promotion.](/images/whatsup/s03-007-1044571577.png)
![Aida-sensei&#039;s final lecture](/images/whatsup/s03-008-3166515616.jpg)
![Koji has been inducted into an ACM Distinguished Member!](/images/whatsup/s03-009-1120224881.png)
![FInal project presentations at my infovis class!](/images/whatsup/s03-010-1277521729.jpg)
![FInal project presentations at my infovis class!](/images/whatsup/s03-011-2505631380.jpg)
![Yoshihisa Ijiri from LINE gave us a talk.](/images/whatsup/s03-012-2695155503.jpg)
![Akira Tajima from Yahoo Research gave us a talk.](/images/whatsup/s03-013-790795614.jpg)
![Takeshi Yabe from Nissei IT gave us a talk.](/images/whatsup/s03-014-2128444362.jpg)
![Naomi Yamashita from NTT gave us a talk.](/images/whatsup/s03-015-3097217220.jpg)
![Anran, Shitao, and Shixian successfully graduated with their master degrees! Congrats!](/images/whatsup/s03-016-2726777773.jpg)
![Our SyncUp paper won a PACM IMWUT Distinguished Paper Award!](/images/whatsup/s03-017-1333233134.png)
![Ryo presented his DualCheck work at SOUPS 2022.](/images/whatsup/s03-018-3874699941.png)
![Koji gave his final presentation for Secom foundation.](/images/whatsup/s03-019-721519564.jpg)
![Yuta gave a talk at Japan Society of Gerodontology.](/images/whatsup/s03-020-3976453692.png)
![Anran presented his work at an IPSJ UBI workshop.](/images/whatsup/s03-021-3284166537.png)
![Season 8 started! Great to have Simo Hosio as a visiting researcher!](/images/whatsup/s03-022-2274454849.png)

## Season #7 (April 2021 – March 2022)

![Takaharu, Ryo, Ginshi, and Takuma successfully graduated with their bachelor degrees. Congrats!](/images/whatsup/s04-001-697707628.jpg)
![Yuta, Ryo, Hirotaka, and Shoko successfully graduated with their master degrees. Congrats!](/images/whatsup/s04-002-3057860710.jpg)
![Koji won a Best Teaching Award!](/images/whatsup/s04-003-3996217819.jpg)
![Our online open house was very successful!](/images/whatsup/s04-004-3228626083.png)
![Koji won an IPSJ Microsoft Faculty Award!](/images/whatsup/s04-005-4090385139.png)
![Koji gave an invited talk at an MSRA Alumni online event.](/images/whatsup/s04-006-264807652.png)
![Zefan graduated with his master degree, and he is now a Ph.D. student in IIS Lab!](/images/whatsup/s04-007-3973233549.jpg)
![Koichi Narasaki from Sompo HD gave us a talk!](/images/whatsup/s04-008-3033124104.jpg)
![Koji won a Funai Academic Award!](/images/whatsup/s04-009-2023948963.jpg)
![A social gathering with cool mixture of fully offline, fully online, and a telepresence robot!](/images/whatsup/s04-010-1183782360.jpg)
![A virtual group photo. We have now 23. What a big and great team!](/images/whatsup/s04-011-3092926887.png)

## Season #6 (April 2020 – March 2021)

![Asahi and Yuji graduated with their master degrees. Congrats!](/images/whatsup/s05-001-2980107543.jpg)
![Kazuhiro won a Department Dean Special Recognition Award and an Excellent Graduation Thesis Award. Big Congrats!](/images/whatsup/s05-002-462215618.jpg)
![Ikutoshi, Kazuhiro, Ryoto, Naho and Shinichiro graduated with their bachelor degrees. Congratulations!](/images/whatsup/s05-003-357329138.jpg)
![Koji won Japan the ACM SIGCHI Local Chapter Distinguished Young Researcher Award!](/images/whatsup/s05-004-2100722667.jpg)
![Koji won the IPSJ/ACM Award for Early Career Contributions to Global Research!](/images/whatsup/s05-005-1339364873.jpg)
![Lab gather.town!](/images/whatsup/s05-006-3012723825.png)
![We are growing! Now we are 22!](/images/whatsup/s05-007-2986996280.png)
![Online all hands!](/images/whatsup/s05-008-3805431168.png)

## Season #5 (April 2019 – March 2020)

![Siwook won an Excellent Graduation Thesis Award! Big congratulations!](/images/whatsup/s06-001-2983102005.jpg)
![Ayuka, Siwook, Takahiro, Yuki, and Kosuke successfully graduated with their bachelor degrees. Congratulations!](/images/whatsup/s06-002-1363778913.jpg)
![Hiroaki won an Department Dean Award for his master thesis. Big congrats!](/images/whatsup/s06-003-1766649147.jpg)
![Hiroaki and Hidenori successfully graduated with their master degrees! Congratulations!](/images/whatsup/s06-004-2625916906.jpg)
![Arissa and Tatsuhiko successfully graduated with their master degrees! Congratulations!](/images/whatsup/s06-005-598725106.jpg)
![Arissa presented her work at an IPSJ HCI workshop.](/images/whatsup/s06-006-2749558672.jpg)
![Hiroaki presented his work at an IPSJ HCI workshop.](/images/whatsup/s06-007-3546246773.jpg)
![Final demo presentations in Koji&#039;s course](/images/whatsup/s06-008-2674591235.jpg)
![Final demo presentations in Koji&#039;s course](/images/whatsup/s06-009-3194101971.jpg)
![Koji won RIEC Award!](/images/whatsup/s06-010-3488340309.jpg)
![Steven Drucker visited us.](/images/whatsup/s06-011-1606487935.jpg)
![Peer-review session in Koji&#039;s class](/images/whatsup/s06-012-3916703943.jpg)
![Taiichi Hashimoto&#039;s lab visit](/images/whatsup/s06-013-459845699.jpg)
![Taiichi Hashimoto from LINE gave us a talk.](/images/whatsup/s06-014-1673117973.jpg)
![Masayuki Imamura&#039;s lab visit](/images/whatsup/s06-015-765525228.jpg)
![Satoru Joraku&#039;s lab visit](/images/whatsup/s06-016-162445795.jpg)
![Zhongyi demoed his work at UIST.](/images/whatsup/s06-017-3936967187.jpg)
![Masayuki Imamura gave us a talk.](/images/whatsup/s06-018-1544825255.jpg)
![Satoru Joraku from Sansan Inc. gave us a talk.](/images/whatsup/s06-019-3595912689.jpg)
![Yuki Matsumoto from DMM.com gave us a talk.](/images/whatsup/s06-020-2298661201.jpg)
![Great meeting with all IMWUT editors!](/images/whatsup/s06-021-1443032889.jpg)
![Hardware demos at Koji&#039;s course.](/images/whatsup/s06-022-3517665135.jpg)
![Hardware demos at Koji&#039;s course.](/images/whatsup/s06-023-4141949982.jpg)
![FInal presentations in Koji&#039;s HCI course.](/images/whatsup/s06-024-3180854814.jpg)
![Group photo in front of Yasuda hall](/images/whatsup/s06-025-2727411275.jpeg)
![Yuji presented his work at an IPSJ UBI workshop.](/images/whatsup/s06-026-4180166191.jpeg)
![Lab party!](/images/whatsup/s06-027-4097459043.jpeg)
![Ivan gave an invited talk.](/images/whatsup/s06-028-1234740891.jpeg)
![Brainstorming!](/images/whatsup/s06-029-4197880094.jpeg)
![Wonderful DC at CHI!](/images/whatsup/s06-030-2148126327.jpg)
![Koji co-chaired DC at CHI this year.](/images/whatsup/s06-031-1729699279.jpeg)
![Koji&#039;s HCI course](/images/whatsup/s06-032-2552843611.jpeg)
![Brainstorming session in the lab](/images/whatsup/s06-033-1974046647.jpeg)
![Season 5 started with the largest number of students!](/images/whatsup/s06-034-564674385.jpg)

## Season #4 (April 2018 – March 2019)

![Undergrads successfully graduated. Congrats!](/images/whatsup/s07-001-275783913.jpg)
![outdoor activities in Chichibu](/images/whatsup/s07-002-2832259947.jpeg)
![outdoor activities in Chichibu](/images/whatsup/s07-003-222830030.jpeg)
![Antony won the Best Paper Award at TEI 2019!](/images/whatsup/s07-004-3931409808.jpg)
![Daisuke graduated with his master degree. Congratulations!](/images/whatsup/s07-005-1432120696.jpg)
![Students&#039; visit at Microsoft Japan](/images/whatsup/s07-006-124742614.jpeg)
![Had a wonderful discussion at the workshop with visitors from Stockholm University](/images/whatsup/s07-007-588728267.jpeg)
![Had a workshop with visitors from Stockholm University](/images/whatsup/s07-008-2598333300.jpeg)
![Had a great discussion with chairs for WristSense.](/images/whatsup/s07-009-2478248657.jpeg)
![Koji gave a keynote speech at a Percom WriteSense workshop.](/images/whatsup/s07-010-1801494555.jpeg)
![Daisuke gave an oral presentation at Interaction 2019.](/images/whatsup/s07-011-431017728.jpeg)
![Benio gave a talk at a UBI workshop, and she won an Excellent Paper Award!](/images/whatsup/s07-012-2712301009.jpeg)
![Koji&#039;s talk at Fujitsu SSL](/images/whatsup/s07-013-542625102.jpeg)
![Visit with students at Stockmark Inc.](/images/whatsup/s07-014-4104143957.jpeg)
![Asahi gave a talk at a UBI workshop.](/images/whatsup/s07-015-438043262.jpeg)
![A user study at a department store](/images/whatsup/s07-016-2267345033.jpeg)
![We have now 14 students!](/images/whatsup/s07-017-690976955.png)
![Antony gave a talk at NTU.](/images/whatsup/s07-018-2051993745.jpg)
![Daisuke gave a talk at NTU.](/images/whatsup/s07-019-1418915114.jpg)
![Christmas celebration!](/images/whatsup/s07-020-3608849084.jpg)
![Visitors from Oath Inc. talked with my students.](/images/whatsup/s07-021-1173423462.jpeg)
![Visitors from Oath Inc. gave a talk.](/images/whatsup/s07-022-3351926284.jpeg)
![Mike Chen at NTU visited us!](/images/whatsup/s07-023-1062638108.jpeg)
![Quick design prototyping discussion with students](/images/whatsup/s07-024-1401808363.jpg)
![Final demo presentations at Koji&#039;s infovis course](/images/whatsup/s07-025-4199412874.jpeg)
![Final demo presentations at Koji&#039;s infovis course](/images/whatsup/s07-026-47263898.jpeg)
![IIS Lab members joined an ideathon!](/images/whatsup/s07-027-3645743452.jpeg)
![Stockmark&#039;s gathering!](/images/whatsup/s07-028-567371084.jpeg)
![Great meeting with IMWUT editors!](/images/whatsup/s07-029-4064839910.jpg)
![Takahiro presented his Auth &#039;n&#039; Scan work at UbiComp.](/images/whatsup/s07-030-2386827885.jpg)
![Hidenori presented his Al-light work at UbiComp.](/images/whatsup/s07-031-2219847589.jpg)
![A visitor from LINE gave us a talk.](/images/whatsup/s07-032-2276403217.jpg)
![A visitor from DMM.com gave us a talk.](/images/whatsup/s07-033-3072349215.jpg)
![Koji gave a lecture to kids in Bunkyo Ward.](/images/whatsup/s07-034-2966634958.jpg)
![Koji gave a lecture to kids in Bunkyo Ward.](/images/whatsup/s07-035-1123671830.jpg)
![Daisuke did a poster presentation.](/images/whatsup/s07-036-55369778.jpg)
![Demos for visitors from Ajou University](/images/whatsup/s07-037-220927936.jpg)
![Great gathering with profs and students from Ajou University!](/images/whatsup/s07-038-3304342678.jpg)
![Visitors from Ajou University gave us talks.](/images/whatsup/s07-039-2279555630.jpg)
![A startup company visited us.](/images/whatsup/s07-040-261714187.jpg)
![Takoyaki party!](/images/whatsup/s07-041-3430591869.jpg)
![A presentation for III group coursework.](/images/whatsup/s07-042-4236652556.jpg)
![A presentation for III group coursework.](/images/whatsup/s07-043-3475086170.jpg)
![Hidenori presented his work at an IPSJ UBI workshop and won an Excellent Paper award!](/images/whatsup/s07-044-3065278281.jpg)
![Workshop course work with III grad students](/images/whatsup/s07-045-3749016059.jpg)
![Workshop course work with III grad students](/images/whatsup/s07-046-1017189756.jpg)
![VR game demo for school festival](/images/whatsup/s07-047-2872365128.jpg)
![Season #4 started!](/images/whatsup/s07-048-2831931388.jpg)

## Season #3 (April 2017 – March 2018)

![Takahiro won a Department Thesis Award for his master thesis!](/images/whatsup/s08-001-187980063.jpg)
![Namiki, Takahiro, and Takuma graduated. Congrats!](/images/whatsup/s08-002-511945788.jpg)
![Takuma presented his work at the IPSJ conference.](/images/whatsup/s08-003-331705309.jpg)
![Namiki presented his another work at the IPSJ conference.](/images/whatsup/s08-004-1359999530.jpg)
![Tatsuhiko presented his work at the IPSJ conference.](/images/whatsup/s08-005-75554245.jpg)
![Yuji presented his work at the IPSJ conference, and won a Student Paper award.](/images/whatsup/s08-006-1025078886.jpg)
![Daisuke presented his work at the IPSJ conference, and won a Student Paper award.](/images/whatsup/s08-007-915511383.jpg)
![Hidenori presented his work at the IPSJ conference, and won a Student Paper award.](/images/whatsup/s08-008-1163582732.jpg)
![Namiki presented his work at the IPSJ conference, and won a Student Paper award.](/images/whatsup/s08-009-2962391005.jpg)
![Takuma presented his work at an IPSJ CGVI workshop.](/images/whatsup/s08-010-1956902141.jpg)
![Eran Toch visited us.](/images/whatsup/s08-011-585195620.jpg)
![Demo showcases in DMM.make AKIBA](/images/whatsup/s08-012-2680802513.jpg)
![Daisuke presented his work at a SIGPX workshop.](/images/whatsup/s08-013-382801802.jpg)
![Junpei presented his work at a SIGPX workshop.](/images/whatsup/s08-014-1591747903.jpg)
![Lab retreat in Chiba!](/images/whatsup/s08-015-2042863006.jpg)
![Koji has been elected as a UTokyo Excellent Young Researcher!](/images/whatsup/s08-016-3069077215.png)
![Meat party!](/images/whatsup/s08-017-1668542519.jpg)
![Students at my infovis class show their demos to a guest from industry.](/images/whatsup/s08-018-2766195224.jpg)
![Students at my infovis class show their demos to a guest from industry.](/images/whatsup/s08-019-1194634911.jpg)
![Lunch meeting with guests from NTU](/images/whatsup/s08-020-2170881347.jpg)
![Mitsuo Hasiba from DMM.make AKIBA visited us.](/images/whatsup/s08-021-3578256734.jpg)
![Namiki Shimoo presented his work at a SIGMUS workshop and won a Student Paper Award!](/images/whatsup/s08-022-365804530.png)
![Infovis hands-on class demo presentation](/images/whatsup/s08-023-3146615367.jpg)
![Tadashi Jogetsu visited us.](/images/whatsup/s08-024-3018781860.jpg)
![Noodles!](/images/whatsup/s08-025-1549322839.jpg)
![Deep learning tutorials](/images/whatsup/s08-026-3317660861.jpg)
![Deep fried party!](/images/whatsup/s08-027-792933009.jpg)
![High-school students visited us.](/images/whatsup/s08-028-1056506996.jpg)
![Analysis in progress](/images/whatsup/s08-029-669599582.png)
![Namiki&#039;s poster presentation](/images/whatsup/s08-030-1922549168.jpg)
![Takahiro&#039;s poster presentation](/images/whatsup/s08-031-379550633.jpg)
![Takuma&#039;s poster presentation](/images/whatsup/s08-032-2076448973.jpg)
![Lab hackathon!](/images/whatsup/s08-033-1698557218.jpg)
![Shunya presented his full paper with a poster presentation at ICME 2017.](/images/whatsup/s08-034-2046701735.jpg)
![Pizza dinner at a paper deadline night](/images/whatsup/s08-035-1975507787.jpg)
![Advanced Topics in HCI taught by Koji](/images/whatsup/s08-036-2084431829.jpg)
![Lots of snacks!](/images/whatsup/s08-037-1417160467.jpg)
![Season 3 started with 12 students!](/images/whatsup/s08-038-258819458.jpg)

## Season #2 (April 2016 – March 2017)

![Yu, Takuya, Daisuke, Hiroki, Wakana, and Shota graduated with bachelor degrees. Congrats!](/images/whatsup/s09-001-4091557840.jpg)
![Daisuke won a best undergraduate thesis award!](/images/whatsup/s09-002-426217002.jpg)
![Shunya and Tomomi graduated with Master degree. Congrats!](/images/whatsup/s09-003-3748696340.jpg)
![Lab retreat at Mito](/images/whatsup/s09-004-399924078.jpg)
![Barry Brown and researchers at Mobile Life visited us.](/images/whatsup/s09-005-132237325.jpg)
![Shuya presented his work at a SIGMUS workshop, and won a student paper award!](/images/whatsup/s09-006-3655130030.jpg)
![Barry Brown&#039;s visit](/images/whatsup/s09-007-2327081783.jpg)
![Takahiro presented his work at a UBI workshop, and won an excellent paper award!.](/images/whatsup/s09-008-2935129641.jpg)
![Takuya presented his work at a UBI workshop, and won a student paper award!.](/images/whatsup/s09-009-1698620564.jpg)
![Shota presented his work at a UBI workshop.](/images/whatsup/s09-010-2550653594.jpg)
![Takuya presented his demo at Interaction 2017.](/images/whatsup/s09-011-4190285854.jpg)
![Steve Brewster from University of Glasgow visited us!](/images/whatsup/s09-012-2698596635.jpg)
![We joined a post-UIST open house.](/images/whatsup/s09-013-3036153787.jpg)
![Tomomi&#039;s poster presentation](/images/whatsup/s09-014-547851186.jpg)
![Shunya&#039;s poster presentation](/images/whatsup/s09-015-3384206892.jpg)
![Takahiro presented his a printed puressure sensor at UbiComp 2016.](/images/whatsup/s09-016-2596827492.jpg)
![Takuma presented his LumiO paper at UbiComp 2016.](/images/whatsup/s09-017-1781673858.jpg)
![Sashimi party!](/images/whatsup/s09-018-1085340252.jpg)
![Mark Chignell visited us.](/images/whatsup/s09-019-124162071.jpg)
![Being a user is important and fun!](/images/whatsup/s09-020-3414187759.jpg)
![Koji&#039;s poster presentation at Microsoft](/images/whatsup/s09-021-3538582689.jpg)
![We won a best paper award at CHI 2016!](/images/whatsup/s09-022-1120730763.jpg)
![Course project presentation](/images/whatsup/s09-023-2567520726.jpg)
![Course project presentation](/images/whatsup/s09-024-2122083245.jpg)
![Pizza party!](/images/whatsup/s09-025-2073837828.jpg)
![Career discussions with a guest](/images/whatsup/s09-026-1345646015.jpg)
![Uichin Lee&#039;s visit](/images/whatsup/s09-027-4051055375.jpg)
![Open lab for junior high school students](/images/whatsup/s09-028-3544628729.jpg)
![Koji contributed to a book chapter!](/images/whatsup/s09-029-3322538372.jpg)
![Our second season started!](/images/whatsup/s09-030-1531473699.jpg)
![Qualitative analysis on the way](/images/whatsup/s09-031-1410103607.jpg)

## Season #1 (April 2015 – March 2016)

![IIS Lab first undergrads graduation, congrats!](/images/whatsup/s10-001-91426046.jpg)
![Christmas cake!](/images/whatsup/s10-002-1006584673.jpg)
![Project madness in Koji&#039;s infovis course](/images/whatsup/s10-003-13486782.jpg)
![Demo presentations in Koji&#039;s infovis course](/images/whatsup/s10-004-2493473899.jpg)
![Demo presentations in Koji&#039;s infovis course](/images/whatsup/s10-005-1348508859.jpg)
![Won the third place in department&#039;s futsal games!](/images/whatsup/s10-006-1617338268.jpg)
![Group reviewing on research reports](/images/whatsup/s10-007-4030370938.jpg)
![Group reviewing on research reports](/images/whatsup/s10-008-1178787506.jpg)
![Comments on demos in open lab](/images/whatsup/s10-009-1913319033.jpg)
![Open lab for high school students](/images/whatsup/s10-010-950276992.jpg)
![Open lab for high school students](/images/whatsup/s10-011-1528921998.jpg)
![Qualitative analysis in progress](/images/whatsup/s10-012-1723990816.jpg)
![A typical scene of the lab](/images/whatsup/s10-013-2339727071.jpg)
![Business magazine set for a research project](/images/whatsup/s10-014-3702690337.jpg)
![Open lab for high school students](/images/whatsup/s10-015-3235668463.jpg)
![Open lab for high school students](/images/whatsup/s10-016-1482233842.jpg)
![Open lab for high school students](/images/whatsup/s10-017-1405164655.jpg)
![Arduino and robot tutorial](/images/whatsup/s10-018-2550263134.jpg)
![Arduino and robot tutorial](/images/whatsup/s10-019-3327402017.jpg)
![Machine learning tutorial](/images/whatsup/s10-020-2247140720.jpg)
![Brainstorming with lab members](/images/whatsup/s10-021-3324863253.jpg)
![A formative study with a guitar](/images/whatsup/s10-022-3448632202.jpg)
`;function Fo(e){let{meta:t,body:n}=Mr(e),r=[],i=n.replace(/\r\n/g,`
`).split(/\n(?=## )/);for(let e of i){let t=e.trim();if(!t)continue;let n=t.match(/^## (.+?)\n([\s\S]*)$/);if(!n)continue;let i=n[1].trim(),a=[];for(let e of n[2].split(`
`)){let t=e.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);t&&a.push({caption:t[1],image:t[2]})}a.length&&r.push({title:i,items:a})}return{intro:{en:t.intro_en??``,ja:t.intro_ja??``},seasons:r}}var{intro:Io,seasons:Lo}=Fo(Po),Ro=Io,zo=Lo,Bo={pageTitle:`_pageTitle_gncap_1`,intro:`_intro_gncap_11`};function Vo(){return(0,k.jsxs)(`article`,{className:`entry-content`,children:[(0,k.jsx)(`h1`,{className:Bo.pageTitle,children:`What's up?`}),(0,k.jsxs)(`div`,{className:Bo.intro,children:[(0,k.jsx)(`p`,{children:Ro.en}),(0,k.jsx)(`p`,{children:Ro.ja})]}),(0,k.jsx)(No,{seasons:zo})]})}var Ho=`/IIS-Lab-webpage/`.replace(/\/$/,``);function Uo(){return(0,k.jsx)(Nn,{basename:Ho||void 0,children:(0,k.jsx)(Gt,{children:(0,k.jsxs)(Ut,{element:(0,k.jsx)(fr,{}),children:[(0,k.jsx)(Ut,{index:!0,element:(0,k.jsx)(hi,{})}),(0,k.jsx)(Ut,{path:`research`,element:(0,k.jsx)(Oo,{})}),(0,k.jsx)(Ut,{path:`research/:slug`,element:(0,k.jsx)(To,{})}),(0,k.jsx)(Ut,{path:`publications`,element:(0,k.jsx)(qi,{})}),(0,k.jsx)(Ut,{path:`members`,element:(0,k.jsx)(P,{})}),(0,k.jsx)(Ut,{path:`member/:slug`,element:(0,k.jsx)(Vr,{})}),(0,k.jsx)(Ut,{path:`dls`,element:(0,k.jsx)(Xr,{})}),(0,k.jsx)(Ut,{path:`news/old`,element:(0,k.jsx)(H,{})}),(0,k.jsx)(Ut,{path:`whats-up`,element:(0,k.jsx)(Vo,{})}),(0,k.jsx)(Ut,{path:`contact`,element:(0,k.jsx)(Wr,{})}),(0,k.jsx)(Ut,{path:`join`,element:(0,k.jsx)(Ei,{})}),(0,k.jsx)(Ut,{path:`misc/realitycheck`,element:(0,k.jsx)(wi,{})})]})})})}(0,er.createRoot)(document.getElementById(`root`)).render((0,k.jsx)(x.StrictMode,{children:(0,k.jsx)(Uo,{})}));
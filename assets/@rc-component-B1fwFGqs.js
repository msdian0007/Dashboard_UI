import{c as D,f as Ee,d as Re,e as T,h as Xt,i as en,a as Ut,b as _e,j as Et,_ as Jt,l as rn,g as Fr,k as tn}from"./@babel-nFbzLRrx.js";import{r as s}from"./react-DHBI0EtI.js";import{r as Qt}from"./react-dom-DvAqprxs.js";import{c as Or,u as K,d as nn,a as an,r as Rt,s as Yr,e as Zt,f as on,h as un,i as Ve,j as Ct,k as sn,g as St,l as fn,m as cn,n as ln}from"./rc-util-C_IKOujR.js";import{c as cr}from"./classnames-C9FZUsQl.js";import{R as Gt}from"./rc-resize-observer-43YOlFZH.js";import{C as Kt}from"./rc-motion-CdxvAtL7.js";var Ot=s.createContext(null),Dt=[];function vn(t,e){var r=s.useState(function(){if(!Or())return null;var c=document.createElement("div");return c}),n=D(r,1),a=n[0],i=s.useRef(!1),o=s.useContext(Ot),u=s.useState(Dt),d=D(u,2),h=d[0],m=d[1],l=o||(i.current?void 0:function(c){m(function(S){var f=[c].concat(Ee(S));return f})});function C(){a.parentElement||document.body.appendChild(a),i.current=!0}function y(){var c;(c=a.parentElement)===null||c===void 0||c.removeChild(a),i.current=!1}return K(function(){return t?o?o(C):C():y(),y},[t]),K(function(){h.length&&(h.forEach(function(c){return c()}),m(Dt))},[h]),[a,l]}function dn(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var hn="rc-util-locker-".concat(Date.now()),At=0;function mn(t){var e=!!t,r=s.useState(function(){return At+=1,"".concat(hn,"_").concat(At)}),n=D(r,1),a=n[0];K(function(){if(e){var i=nn(document.body).width,o=dn();an(`
html body {
  overflow-y: hidden;
  `.concat(o?"width: calc(100% - ".concat(i,"px);"):"",`
}`),a)}else Rt(a);return function(){Rt(a)}},[e,a])}var gn=!1;function yn(t){return gn}var Nt=function(e){return e===!1?!1:!Or()||!e?null:typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e},Yt=s.forwardRef(function(t,e){var r=t.open,n=t.autoLock,a=t.getContainer;t.debug;var i=t.autoDestroy,o=i===void 0?!0:i,u=t.children,d=s.useState(r),h=D(d,2),m=h[0],l=h[1],C=m||r;s.useEffect(function(){(o||r)&&l(r)},[r,o]);var y=s.useState(function(){return Nt(a)}),c=D(y,2),S=c[0],f=c[1];s.useEffect(function(){var O=Nt(a);f(O??null)});var q=vn(C&&!S),w=D(q,2),M=w[0],g=w[1],x=S??M;mn(n&&r&&Or()&&(x===M||x===document.body));var A=null;if(u&&Yr(u)&&e){var R=u;A=R.ref}var U=Zt(A,e);if(!C||!Or()||S===void 0)return null;var W=x===!1||yn(),J=u;return e&&(J=s.cloneElement(u,{ref:U})),s.createElement(Ot.Provider,{value:g},W?J:Qt.createPortal(J,x))});function Mt(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Pt=Mt();var wn=/%[sdj%]/g,bn=function(){};function xt(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var n=r.field;e[n]=e[n]||[],e[n].push(r)}),e}function re(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=0,i=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var o=t.replace(wn,function(u){if(u==="%%")return"%";if(a>=i)return u;switch(u){case"%s":return String(r[a++]);case"%d":return Number(r[a++]);case"%j":try{return JSON.stringify(r[a++])}catch{return"[Circular]"}break;default:return u}});return o}return t}function Cn(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function I(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||Cn(e)&&typeof t=="string"&&!t)}function Sn(t,e,r){var n=[],a=0,i=t.length;function o(u){n.push.apply(n,Ee(u||[])),a++,a===i&&r(n)}t.forEach(function(u){e(u,o)})}function $t(t,e,r){var n=0,a=t.length;function i(o){if(o&&o.length){r(o);return}var u=n;n=n+1,u<a?e(t[u],i):r([])}i([])}function Mn(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,Ee(t[r]||[]))}),e}var Tt=function(t){Xt(r,t);var e=en(r);function r(n,a){var i;return Ut(this,r),i=e.call(this,"Async Validation Error"),_e(Et(i),"errors",void 0),_e(Et(i),"fields",void 0),i.errors=n,i.fields=a,i}return Jt(r)}(rn(Error));function Pn(t,e,r,n,a){if(e.first){var i=new Promise(function(C,y){var c=function(q){return n(q),q.length?y(new Tt(q,xt(q))):C(a)},S=Mn(t);$t(S,r,c)});return i.catch(function(C){return C}),i}var o=e.firstFields===!0?Object.keys(t):e.firstFields||[],u=Object.keys(t),d=u.length,h=0,m=[],l=new Promise(function(C,y){var c=function(f){if(m.push.apply(m,f),h++,h===d)return n(m),m.length?y(new Tt(m,xt(m))):C(a)};u.length||(n(m),C(a)),u.forEach(function(S){var f=t[S];o.indexOf(S)!==-1?$t(f,r,c):Sn(f,r,c)})});return l.catch(function(C){return C}),l}function xn(t){return!!(t&&t.message!==void 0)}function qn(t,e){for(var r=t,n=0;n<e.length;n++){if(r==null)return r;r=r[e[n]]}return r}function Lt(t,e){return function(r){var n;return t.fullFields?n=qn(e,t.fullFields):n=e[r.field||t.fullField],xn(r)?(r.field=r.field||t.fullField,r.fieldValue=n,r):{message:typeof r=="function"?r():r,fieldValue:n,field:r.field||t.fullField}}}function kt(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];Re(n)==="object"&&Re(t[r])==="object"?t[r]=T(T({},t[r]),n):t[r]=n}}return t}var sr="enum",Fn=function(e,r,n,a,i){e[sr]=Array.isArray(e[sr])?e[sr]:[],e[sr].indexOf(r)===-1&&a.push(re(i.messages[sr],e.fullField,e[sr].join(", ")))},En=function(e,r,n,a,i){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||a.push(re(i.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var o=new RegExp(e.pattern);o.test(r)||a.push(re(i.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},Rn=function(e,r,n,a,i){var o=typeof e.len=="number",u=typeof e.min=="number",d=typeof e.max=="number",h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,m=r,l=null,C=typeof r=="number",y=typeof r=="string",c=Array.isArray(r);if(C?l="number":y?l="string":c&&(l="array"),!l)return!1;c&&(m=r.length),y&&(m=r.replace(h,"_").length),o?m!==e.len&&a.push(re(i.messages[l].len,e.fullField,e.len)):u&&!d&&m<e.min?a.push(re(i.messages[l].min,e.fullField,e.min)):d&&!u&&m>e.max?a.push(re(i.messages[l].max,e.fullField,e.max)):u&&d&&(m<e.min||m>e.max)&&a.push(re(i.messages[l].range,e.fullField,e.min,e.max))},pt=function(e,r,n,a,i,o){e.required&&(!n.hasOwnProperty(e.field)||I(r,o||e.type))&&a.push(re(i.messages.required,e.fullField))},Kr;const Dn=function(){if(Kr)return Kr;var t="[a-fA-F\\d:]",e=function(A){return A&&A.includeBoundaries?"(?:(?<=\\s|^)(?=".concat(t,")|(?<=").concat(t,")(?=\\s|$))"):""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",a=["(?:".concat(n,":){7}(?:").concat(n,"|:)"),"(?:".concat(n,":){6}(?:").concat(r,"|:").concat(n,"|:)"),"(?:".concat(n,":){5}(?::").concat(r,"|(?::").concat(n,"){1,2}|:)"),"(?:".concat(n,":){4}(?:(?::").concat(n,"){0,1}:").concat(r,"|(?::").concat(n,"){1,3}|:)"),"(?:".concat(n,":){3}(?:(?::").concat(n,"){0,2}:").concat(r,"|(?::").concat(n,"){1,4}|:)"),"(?:".concat(n,":){2}(?:(?::").concat(n,"){0,3}:").concat(r,"|(?::").concat(n,"){1,5}|:)"),"(?:".concat(n,":){1}(?:(?::").concat(n,"){0,4}:").concat(r,"|(?::").concat(n,"){1,6}|:)"),"(?::(?:(?::".concat(n,"){0,5}:").concat(r,"|(?::").concat(n,"){1,7}|:))")],i="(?:%[0-9a-zA-Z]{1,})?",o="(?:".concat(a.join("|"),")").concat(i),u=new RegExp("(?:^".concat(r,"$)|(?:^").concat(o,"$)")),d=new RegExp("^".concat(r,"$")),h=new RegExp("^".concat(o,"$")),m=function(A){return A&&A.exact?u:new RegExp("(?:".concat(e(A)).concat(r).concat(e(A),")|(?:").concat(e(A)).concat(o).concat(e(A),")"),"g")};m.v4=function(x){return x&&x.exact?d:new RegExp("".concat(e(x)).concat(r).concat(e(x)),"g")},m.v6=function(x){return x&&x.exact?h:new RegExp("".concat(e(x)).concat(o).concat(e(x)),"g")};var l="(?:(?:[a-z]+:)?//)",C="(?:\\S+(?::\\S*)?@)?",y=m.v4().source,c=m.v6().source,S="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",f="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",q="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",w="(?::\\d{2,5})?",M='(?:[/?#][^\\s"]*)?',g="(?:".concat(l,"|www\\.)").concat(C,"(?:localhost|").concat(y,"|").concat(c,"|").concat(S).concat(f).concat(q,")").concat(w).concat(M);return Kr=new RegExp("(?:^".concat(g,"$)"),"i"),Kr};var jt={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},qr={integer:function(e){return qr.number(e)&&parseInt(e,10)===e},float:function(e){return qr.number(e)&&!qr.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return Re(e)==="object"&&!qr.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(jt.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Dn())},hex:function(e){return typeof e=="string"&&!!e.match(jt.hex)}},An=function(e,r,n,a,i){if(e.required&&r===void 0){pt(e,r,n,a,i);return}var o=["integer","float","array","regexp","object","method","email","number","date","url","hex"],u=e.type;o.indexOf(u)>-1?qr[u](r)||a.push(re(i.messages.types[u],e.fullField,e.type)):u&&Re(r)!==e.type&&a.push(re(i.messages.types[u],e.fullField,e.type))},Nn=function(e,r,n,a,i){(/^\s+$/.test(r)||r==="")&&a.push(re(i.messages.whitespace,e.fullField))};const P={required:pt,whitespace:Nn,type:An,range:Rn,enum:Fn,pattern:En};var $n=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i)}n(o)},Tn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(r==null&&!e.required)return n();P.required(e,r,a,o,i,"array"),r!=null&&(P.type(e,r,a,o,i),P.range(e,r,a,o,i))}n(o)},Ln=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i),r!==void 0&&P.type(e,r,a,o,i)}n(o)},kn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r,"date")&&!e.required)return n();if(P.required(e,r,a,o,i),!I(r,"date")){var d;r instanceof Date?d=r:d=new Date(r),P.type(e,d,a,o,i),d&&P.range(e,d.getTime(),a,o,i)}}n(o)},jn="enum",Vn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i),r!==void 0&&P[jn](e,r,a,o,i)}n(o)},_n=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i),r!==void 0&&(P.type(e,r,a,o,i),P.range(e,r,a,o,i))}n(o)},Wn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i),r!==void 0&&(P.type(e,r,a,o,i),P.range(e,r,a,o,i))}n(o)},zn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i),r!==void 0&&P.type(e,r,a,o,i)}n(o)},Bn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(r===""&&(r=void 0),I(r)&&!e.required)return n();P.required(e,r,a,o,i),r!==void 0&&(P.type(e,r,a,o,i),P.range(e,r,a,o,i))}n(o)},Hn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i),r!==void 0&&P.type(e,r,a,o,i)}n(o)},In=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r,"string")&&!e.required)return n();P.required(e,r,a,o,i),I(r,"string")||P.pattern(e,r,a,o,i)}n(o)},Un=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r)&&!e.required)return n();P.required(e,r,a,o,i),I(r)||P.type(e,r,a,o,i)}n(o)},Jn=function(e,r,n,a,i){var o=[],u=Array.isArray(r)?"array":Re(r);P.required(e,r,a,o,i,u),n(o)},Qn=function(e,r,n,a,i){var o=[],u=e.required||!e.required&&a.hasOwnProperty(e.field);if(u){if(I(r,"string")&&!e.required)return n();P.required(e,r,a,o,i,"string"),I(r,"string")||(P.type(e,r,a,o,i),P.range(e,r,a,o,i),P.pattern(e,r,a,o,i),e.whitespace===!0&&P.whitespace(e,r,a,o,i))}n(o)},bt=function(e,r,n,a,i){var o=e.type,u=[],d=e.required||!e.required&&a.hasOwnProperty(e.field);if(d){if(I(r,o)&&!e.required)return n();P.required(e,r,a,u,i,o),I(r,o)||P.type(e,r,a,u,i)}n(u)};const Er={string:Qn,method:zn,number:Bn,boolean:Ln,regexp:Un,integer:Wn,float:_n,array:Tn,object:Hn,enum:Vn,pattern:In,date:kn,url:bt,hex:bt,email:bt,required:Jn,any:$n};var pr=function(){function t(e){Ut(this,t),_e(this,"rules",null),_e(this,"_messages",Pt),this.define(e)}return Jt(t,[{key:"define",value:function(r){var n=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(Re(r)!=="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(a){var i=r[a];n.rules[a]=Array.isArray(i)?i:[i]})}},{key:"messages",value:function(r){return r&&(this._messages=kt(Mt(),r)),this._messages}},{key:"validate",value:function(r){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},o=r,u=a,d=i;if(typeof u=="function"&&(d=u,u={}),!this.rules||Object.keys(this.rules).length===0)return d&&d(null,o),Promise.resolve(o);function h(c){var S=[],f={};function q(M){if(Array.isArray(M)){var g;S=(g=S).concat.apply(g,Ee(M))}else S.push(M)}for(var w=0;w<c.length;w++)q(c[w]);S.length?(f=xt(S),d(S,f)):d(null,o)}if(u.messages){var m=this.messages();m===Pt&&(m=Mt()),kt(m,u.messages),u.messages=m}else u.messages=this.messages();var l={},C=u.keys||Object.keys(this.rules);C.forEach(function(c){var S=n.rules[c],f=o[c];S.forEach(function(q){var w=q;typeof w.transform=="function"&&(o===r&&(o=T({},o)),f=o[c]=w.transform(f),f!=null&&(w.type=w.type||(Array.isArray(f)?"array":Re(f)))),typeof w=="function"?w={validator:w}:w=T({},w),w.validator=n.getValidationMethod(w),w.validator&&(w.field=c,w.fullField=w.fullField||c,w.type=n.getType(w),l[c]=l[c]||[],l[c].push({rule:w,value:f,source:o,field:c}))})});var y={};return Pn(l,u,function(c,S){var f=c.rule,q=(f.type==="object"||f.type==="array")&&(Re(f.fields)==="object"||Re(f.defaultField)==="object");q=q&&(f.required||!f.required&&c.value),f.field=c.field;function w(R,U){return T(T({},U),{},{fullField:"".concat(f.fullField,".").concat(R),fullFields:f.fullFields?[].concat(Ee(f.fullFields),[R]):[R]})}function M(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],U=Array.isArray(R)?R:[R];!u.suppressWarning&&U.length&&t.warning("async-validator:",U),U.length&&f.message!==void 0&&(U=[].concat(f.message));var W=U.map(Lt(f,o));if(u.first&&W.length)return y[f.field]=1,S(W);if(!q)S(W);else{if(f.required&&!c.value)return f.message!==void 0?W=[].concat(f.message).map(Lt(f,o)):u.error&&(W=[u.error(f,re(u.messages.required,f.field))]),S(W);var J={};f.defaultField&&Object.keys(c.value).map(function(z){J[z]=f.defaultField}),J=T(T({},J),c.rule.fields);var O={};Object.keys(J).forEach(function(z){var V=J[z],se=Array.isArray(V)?V:[V];O[z]=se.map(w.bind(null,z))});var te=new t(O);te.messages(u.messages),c.rule.options&&(c.rule.options.messages=u.messages,c.rule.options.error=u.error),te.validate(c.value,c.rule.options||u,function(z){var V=[];W&&W.length&&V.push.apply(V,Ee(W)),z&&z.length&&V.push.apply(V,Ee(z)),S(V.length?V:null)})}}var g;if(f.asyncValidator)g=f.asyncValidator(f,c.value,M,c.source,u);else if(f.validator){try{g=f.validator(f,c.value,M,c.source,u)}catch(R){var x,A;(x=(A=console).error)===null||x===void 0||x.call(A,R),u.suppressValidatorError||setTimeout(function(){throw R},0),M(R.message)}g===!0?M():g===!1?M(typeof f.message=="function"?f.message(f.fullField||f.field):f.message||"".concat(f.fullField||f.field," fails")):g instanceof Array?M(g):g instanceof Error&&M(g.message)}g&&g.then&&g.then(function(){return M()},function(R){return M(R)})},function(c){h(c)},o)}},{key:"getType",value:function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!Er.hasOwnProperty(r.type))throw new Error(re("Unknown rule type %s",r.type));return r.type||"string"}},{key:"getValidationMethod",value:function(r){if(typeof r.validator=="function")return r.validator;var n=Object.keys(r),a=n.indexOf("message");return a!==-1&&n.splice(a,1),n.length===1&&n[0]==="required"?Er.required:Er[this.getType(r)]||void 0}}]),t}();_e(pr,"register",function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");Er[e]=r});_e(pr,"warning",bn);_e(pr,"messages",Pt);_e(pr,"validators",Er);function Zn(t){var e=t.prefixCls,r=t.align,n=t.arrow,a=t.arrowPos,i=n||{},o=i.className,u=i.content,d=a.x,h=d===void 0?0:d,m=a.y,l=m===void 0?0:m,C=s.useRef();if(!r||!r.points)return null;var y={position:"absolute"};if(r.autoArrow!==!1){var c=r.points[0],S=r.points[1],f=c[0],q=c[1],w=S[0],M=S[1];f===w||!["t","b"].includes(f)?y.top=l:f==="t"?y.top=0:y.bottom=0,q===M||!["l","r"].includes(q)?y.left=h:q==="l"?y.left=0:y.right=0}return s.createElement("div",{ref:C,className:cr("".concat(e,"-arrow"),o),style:y},u)}function Gn(t){var e=t.prefixCls,r=t.open,n=t.zIndex,a=t.mask,i=t.motion;return a?s.createElement(Kt,Fr({},i,{motionAppear:!0,visible:r,removeOnLeave:!0}),function(o){var u=o.className;return s.createElement("div",{style:{zIndex:n},className:cr("".concat(e,"-mask"),u)})}):null}var Kn=s.memo(function(t){var e=t.children;return e},function(t,e){return e.cache}),On=s.forwardRef(function(t,e){var r=t.popup,n=t.className,a=t.prefixCls,i=t.style,o=t.target,u=t.onVisibleChanged,d=t.open,h=t.keepDom,m=t.fresh,l=t.onClick,C=t.mask,y=t.arrow,c=t.arrowPos,S=t.align,f=t.motion,q=t.maskMotion,w=t.forceRender,M=t.getPopupContainer,g=t.autoDestroy,x=t.portal,A=t.zIndex,R=t.onMouseEnter,U=t.onMouseLeave,W=t.onPointerEnter,J=t.ready,O=t.offsetX,te=t.offsetY,z=t.offsetR,V=t.offsetB,se=t.onAlign,B=t.onPrepare,Q=t.stretch,F=t.targetWidth,ne=t.targetHeight,N=typeof r=="function"?r():r,me=d||h,fe=(M==null?void 0:M.length)>0,lr=s.useState(!M||!fe),Ye=D(lr,2),be=Ye[0],pe=Ye[1];if(K(function(){!be&&fe&&o&&pe(!0)},[be,fe,o]),!be)return null;var ce="auto",Z={left:"-1000vw",top:"-1000vh",right:ce,bottom:ce};if(J||!d){var ae,ge=S.points,ye=S.dynamicInset||((ae=S._experimental)===null||ae===void 0?void 0:ae.dynamicInset),Xe=ye&&ge[0][1]==="r",vr=ye&&ge[0][0]==="b";Xe?(Z.right=z,Z.left=ce):(Z.left=O,Z.right=ce),vr?(Z.bottom=V,Z.top=ce):(Z.top=te,Z.bottom=ce)}var G={};return Q&&(Q.includes("height")&&ne?G.height=ne:Q.includes("minHeight")&&ne&&(G.minHeight=ne),Q.includes("width")&&F?G.width=F:Q.includes("minWidth")&&F&&(G.minWidth=F)),d||(G.pointerEvents="none"),s.createElement(x,{open:w||me,getContainer:M&&function(){return M(o)},autoDestroy:g},s.createElement(Gn,{prefixCls:a,open:d,zIndex:A,mask:C,motion:q}),s.createElement(Gt,{onResize:se,disabled:!d},function(er){return s.createElement(Kt,Fr({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:w,leavedClassName:"".concat(a,"-hidden")},f,{onAppearPrepare:B,onEnterPrepare:B,visible:d,onVisibleChanged:function(X){var Ce;f==null||(Ce=f.onVisibleChanged)===null||Ce===void 0||Ce.call(f,X),u(X)}}),function(De,X){var Ce=De.className,E=De.style,We=cr(a,Ce,n);return s.createElement("div",{ref:on(er,e,X),className:We,style:T(T(T(T({"--arrow-x":"".concat(c.x||0,"px"),"--arrow-y":"".concat(c.y||0,"px")},Z),G),E),{},{boxSizing:"border-box",zIndex:A},i),onMouseEnter:R,onMouseLeave:U,onPointerEnter:W,onClick:l},y&&s.createElement(Zn,{prefixCls:a,arrow:y,arrowPos:c,align:S}),s.createElement(Kn,{cache:!d&&!m},N))})}))}),Yn=s.forwardRef(function(t,e){var r=t.children,n=t.getTriggerDOMNode,a=Yr(r),i=s.useCallback(function(u){un(e,n?n(u):u)},[n]),o=Zt(i,r.ref);return a?s.cloneElement(r,{ref:o}):r}),Vt=s.createContext(null);function _t(t){return t?Array.isArray(t)?t:[t]:[]}function pn(t,e,r,n){return s.useMemo(function(){var a=_t(r??e),i=_t(n??e),o=new Set(a),u=new Set(i);return t&&(o.has("hover")&&(o.delete("hover"),o.add("click")),u.has("hover")&&(u.delete("hover"),u.add("click"))),[o,u]},[t,e,r,n])}function Xn(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return r?t[0]===e[0]:t[0]===e[0]&&t[1]===e[1]}function ea(t,e,r,n){for(var a=r.points,i=Object.keys(t),o=0;o<i.length;o+=1){var u,d=i[o];if(Xn((u=t[d])===null||u===void 0?void 0:u.points,a,n))return"".concat(e,"-placement-").concat(d)}return""}function Wt(t,e,r,n){return e||(r?{motionName:"".concat(t,"-").concat(r)}:n?{motionName:n}:null)}function Dr(t){return t.ownerDocument.defaultView}function qt(t){for(var e=[],r=t==null?void 0:t.parentElement,n=["hidden","scroll","clip","auto"];r;){var a=Dr(r).getComputedStyle(r),i=a.overflowX,o=a.overflowY,u=a.overflow;[i,o,u].some(function(d){return n.includes(d)})&&e.push(r),r=r.parentElement}return e}function Rr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(t)?e:t}function xr(t){return Rr(parseFloat(t),0)}function zt(t,e){var r=T({},t);return(e||[]).forEach(function(n){if(!(n instanceof HTMLBodyElement||n instanceof HTMLHtmlElement)){var a=Dr(n).getComputedStyle(n),i=a.overflow,o=a.overflowClipMargin,u=a.borderTopWidth,d=a.borderBottomWidth,h=a.borderLeftWidth,m=a.borderRightWidth,l=n.getBoundingClientRect(),C=n.offsetHeight,y=n.clientHeight,c=n.offsetWidth,S=n.clientWidth,f=xr(u),q=xr(d),w=xr(h),M=xr(m),g=Rr(Math.round(l.width/c*1e3)/1e3),x=Rr(Math.round(l.height/C*1e3)/1e3),A=(c-S-w-M)*g,R=(C-y-f-q)*x,U=f*x,W=q*x,J=w*g,O=M*g,te=0,z=0;if(i==="clip"){var V=xr(o);te=V*g,z=V*x}var se=l.x+J-te,B=l.y+U-z,Q=se+l.width+2*te-J-O-A,F=B+l.height+2*z-U-W-R;r.left=Math.max(r.left,se),r.top=Math.max(r.top,B),r.right=Math.min(r.right,Q),r.bottom=Math.min(r.bottom,F)}}),r}function Bt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r="".concat(e),n=r.match(/^(.*)\%$/);return n?t*(parseFloat(n[1])/100):parseFloat(r)}function Ht(t,e){var r=e||[],n=D(r,2),a=n[0],i=n[1];return[Bt(t.width,a),Bt(t.height,i)]}function It(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[t[0],t[1]]}function fr(t,e){var r=e[0],n=e[1],a,i;return r==="t"?i=t.y:r==="b"?i=t.y+t.height:i=t.y+t.height/2,n==="l"?a=t.x:n==="r"?a=t.x+t.width:a=t.x+t.width/2,{x:a,y:i}}function je(t,e){var r={t:"b",b:"t",l:"r",r:"l"};return t.map(function(n,a){return a===e?r[n]||"c":n}).join("")}function ra(t,e,r,n,a,i,o){var u=s.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[n]||{}}),d=D(u,2),h=d[0],m=d[1],l=s.useRef(0),C=s.useMemo(function(){return e?qt(e):[]},[e]),y=s.useRef({}),c=function(){y.current={}};t||c();var S=Ve(function(){if(e&&r&&t){let ue=function(Fe,Oe){var or=arguments.length>2&&arguments[2]!==void 0?arguments[2]:We,ur=N.x+Fe,Mr=N.y+Oe,Pr=ur+ae,Qr=Mr+Z,ht=Math.max(ur,or.left),mt=Math.max(Mr,or.top),gt=Math.min(Pr,or.right),yt=Math.min(Qr,or.bottom);return Math.max(0,(gt-ht)*(yt-mt))},Jr=function(){Ie=N.y+$,Ue=Ie+Z,Pe=N.x+L,Je=Pe+ae};var w,M,g=e,x=g.ownerDocument,A=Dr(g),R=A.getComputedStyle(g),U=R.width,W=R.height,J=R.position,O=g.style.left,te=g.style.top,z=g.style.right,V=g.style.bottom,se=g.style.overflow,B=T(T({},a[n]),i),Q=x.createElement("div");(w=g.parentElement)===null||w===void 0||w.appendChild(Q),Q.style.left="".concat(g.offsetLeft,"px"),Q.style.top="".concat(g.offsetTop,"px"),Q.style.position=J,Q.style.height="".concat(g.offsetHeight,"px"),Q.style.width="".concat(g.offsetWidth,"px"),g.style.left="0",g.style.top="0",g.style.right="auto",g.style.bottom="auto",g.style.overflow="hidden";var F;if(Array.isArray(r))F={x:r[0],y:r[1],width:0,height:0};else{var ne=r.getBoundingClientRect();F={x:ne.x,y:ne.y,width:ne.width,height:ne.height}}var N=g.getBoundingClientRect(),me=x.documentElement,fe=me.clientWidth,lr=me.clientHeight,Ye=me.scrollWidth,be=me.scrollHeight,pe=me.scrollTop,ce=me.scrollLeft,Z=N.height,ae=N.width,ge=F.height,ye=F.width,Xe={left:0,top:0,right:fe,bottom:lr},vr={left:-ce,top:-pe,right:Ye-ce,bottom:be-pe},G=B.htmlRegion,er="visible",De="visibleFirst";G!=="scroll"&&G!==De&&(G=er);var X=G===De,Ce=zt(vr,C),E=zt(Xe,C),We=G===er?E:Ce,ie=X?E:We;g.style.left="auto",g.style.top="auto",g.style.right="0",g.style.bottom="0";var Ar=g.getBoundingClientRect();g.style.left=O,g.style.top=te,g.style.right=z,g.style.bottom=V,g.style.overflow=se,(M=g.parentElement)===null||M===void 0||M.removeChild(Q);var Ae=Rr(Math.round(ae/parseFloat(U)*1e3)/1e3),Ne=Rr(Math.round(Z/parseFloat(W)*1e3)/1e3);if(Ae===0||Ne===0||Ct(r)&&!sn(r))return;var Nr=B.offset,Y=B.targetOffset,Xr=Ht(N,Nr),dr=D(Xr,2),le=dr[0],ve=dr[1],$r=Ht(F,Y),de=D($r,2),et=de[0],Tr=de[1];F.x-=et,F.y-=Tr;var rt=B.points||[],ze=D(rt,2),oe=ze[0],$e=ze[1],Se=It($e),ee=It(oe),Lr=fr(F,Se),kr=fr(N,ee),Me=T({},B),L=Lr.x-kr.x+le,$=Lr.y-kr.y+ve,_=ue(L,$),rr=ue(L,$,E),Te=fr(F,["t","l"]),Be=fr(N,["t","l"]),hr=fr(F,["b","r"]),mr=fr(N,["b","r"]),He=B.overflow||{},he=He.adjustX,tt=He.adjustY,gr=He.shiftX,tr=He.shiftY,yr=function(Oe){return typeof Oe=="boolean"?Oe:Oe>=0},Ie,Ue,Pe,Je;Jr();var jr=yr(tt),wr=ee[0]===Se[0];if(jr&&ee[0]==="t"&&(Ue>ie.bottom||y.current.bt)){var Le=$;wr?Le-=Z-ge:Le=Te.y-mr.y-ve;var Vr=ue(L,Le),nr=ue(L,Le,E);Vr>_||Vr===_&&(!X||nr>=rr)?(y.current.bt=!0,$=Le,ve=-ve,Me.points=[je(ee,0),je(Se,0)]):y.current.bt=!1}if(jr&&ee[0]==="b"&&(Ie<ie.top||y.current.tb)){var Qe=$;wr?Qe+=Z-ge:Qe=hr.y-Be.y-ve;var p=ue(L,Qe),nt=ue(L,Qe,E);p>_||p===_&&(!X||nt>=rr)?(y.current.tb=!0,$=Qe,ve=-ve,Me.points=[je(ee,0),je(Se,0)]):y.current.tb=!1}var _r=yr(he),Wr=ee[1]===Se[1];if(_r&&ee[1]==="l"&&(Je>ie.right||y.current.rl)){var Ze=L;Wr?Ze-=ae-ye:Ze=Te.x-mr.x-le;var zr=ue(Ze,$),at=ue(Ze,$,E);zr>_||zr===_&&(!X||at>=rr)?(y.current.rl=!0,L=Ze,le=-le,Me.points=[je(ee,1),je(Se,1)]):y.current.rl=!1}if(_r&&ee[1]==="r"&&(Pe<ie.left||y.current.lr)){var Ge=L;Wr?Ge+=ae-ye:Ge=hr.x-Be.x-le;var Br=ue(Ge,$),it=ue(Ge,$,E);Br>_||Br===_&&(!X||it>=rr)?(y.current.lr=!0,L=Ge,le=-le,Me.points=[je(ee,1),je(Se,1)]):y.current.lr=!1}Jr();var we=gr===!0?0:gr;typeof we=="number"&&(Pe<E.left&&(L-=Pe-E.left-le,F.x+ye<E.left+we&&(L+=F.x-E.left+ye-we)),Je>E.right&&(L-=Je-E.right-le,F.x>E.right-we&&(L+=F.x-E.right+we)));var xe=tr===!0?0:tr;typeof xe=="number"&&(Ie<E.top&&($-=Ie-E.top-ve,F.y+ge<E.top+xe&&($+=F.y-E.top+ge-xe)),Ue>E.bottom&&($-=Ue-E.bottom-ve,F.y>E.bottom-xe&&($+=F.y-E.bottom+xe)));var br=N.x+L,Hr=br+ae,ke=N.y+$,Ke=ke+Z,Cr=F.x,ar=Cr+ye,qe=F.y,ot=qe+ge,ut=Math.max(br,Cr),st=Math.min(Hr,ar),Ir=(ut+st)/2,ft=Ir-br,ct=Math.max(ke,qe),lt=Math.min(Ke,ot),Ur=(ct+lt)/2,vt=Ur-ke;o==null||o(e,Me);var Sr=Ar.right-N.x-(L+N.width),ir=Ar.bottom-N.y-($+N.height);Ae===1&&(L=Math.round(L),Sr=Math.round(Sr)),Ne===1&&($=Math.round($),ir=Math.round(ir));var dt={ready:!0,offsetX:L/Ae,offsetY:$/Ne,offsetR:Sr/Ae,offsetB:ir/Ne,arrowX:ft/Ae,arrowY:vt/Ne,scaleX:Ae,scaleY:Ne,align:Me};m(dt)}}),f=function(){l.current+=1;var M=l.current;Promise.resolve().then(function(){l.current===M&&S()})},q=function(){m(function(M){return T(T({},M),{},{ready:!1})})};return K(q,[n]),K(function(){t||q()},[t]),[h.ready,h.offsetX,h.offsetY,h.offsetR,h.offsetB,h.arrowX,h.arrowY,h.scaleX,h.scaleY,h.align,f]}function ta(t,e,r,n,a){K(function(){if(t&&e&&r){let l=function(){n(),a()};var i=e,o=r,u=qt(i),d=qt(o),h=Dr(o),m=new Set([h].concat(Ee(u),Ee(d)));return m.forEach(function(C){C.addEventListener("scroll",l,{passive:!0})}),h.addEventListener("resize",l,{passive:!0}),n(),function(){m.forEach(function(C){C.removeEventListener("scroll",l),h.removeEventListener("resize",l)})}}},[t,e,r])}function na(t,e,r,n,a,i,o,u){var d=s.useRef(t);d.current=t,s.useEffect(function(){if(e&&n&&(!a||i)){var h=function(y){var c=y.target;d.current&&!o(c)&&u(!1)},m=Dr(n);m.addEventListener("mousedown",h,!0),m.addEventListener("contextmenu",h,!0);var l=St(r);return l&&(l.addEventListener("mousedown",h,!0),l.addEventListener("contextmenu",h,!0)),function(){m.removeEventListener("mousedown",h,!0),m.removeEventListener("contextmenu",h,!0),l&&(l.removeEventListener("mousedown",h,!0),l.removeEventListener("contextmenu",h,!0))}}},[e,r,n,a,i])}var aa=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function ia(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Yt,e=s.forwardRef(function(r,n){var a=r.prefixCls,i=a===void 0?"rc-trigger-popup":a,o=r.children,u=r.action,d=u===void 0?"hover":u,h=r.showAction,m=r.hideAction,l=r.popupVisible,C=r.defaultPopupVisible,y=r.onPopupVisibleChange,c=r.afterPopupVisibleChange,S=r.mouseEnterDelay,f=r.mouseLeaveDelay,q=f===void 0?.1:f,w=r.focusDelay,M=r.blurDelay,g=r.mask,x=r.maskClosable,A=x===void 0?!0:x,R=r.getPopupContainer,U=r.forceRender,W=r.autoDestroy,J=r.destroyPopupOnHide,O=r.popup,te=r.popupClassName,z=r.popupStyle,V=r.popupPlacement,se=r.builtinPlacements,B=se===void 0?{}:se,Q=r.popupAlign,F=r.zIndex,ne=r.stretch,N=r.getPopupClassNameFromAlign,me=r.fresh,fe=r.alignPoint,lr=r.onPopupClick,Ye=r.onPopupAlign,be=r.arrow,pe=r.popupMotion,ce=r.maskMotion,Z=r.popupTransitionName,ae=r.popupAnimation,ge=r.maskTransitionName,ye=r.maskAnimation,Xe=r.className,vr=r.getTriggerDOMNode,G=tn(r,aa),er=W||J||!1,De=s.useState(!1),X=D(De,2),Ce=X[0],E=X[1];K(function(){E(fn())},[]);var We=s.useRef({}),ie=s.useContext(Vt),Ar=s.useMemo(function(){return{registerSubPopup:function(b,k){We.current[b]=k,ie==null||ie.registerSubPopup(b,k)}}},[ie]),Ae=cn(),Ne=s.useState(null),Nr=D(Ne,2),Y=Nr[0],Xr=Nr[1],dr=s.useRef(null),le=Ve(function(v){dr.current=v,Ct(v)&&Y!==v&&Xr(v),ie==null||ie.registerSubPopup(Ae,v)}),ve=s.useState(null),$r=D(ve,2),de=$r[0],et=$r[1],Tr=s.useRef(null),rt=Ve(function(v){Ct(v)&&de!==v&&(et(v),Tr.current=v)}),ze=s.Children.only(o),oe=(ze==null?void 0:ze.props)||{},$e={},Se=Ve(function(v){var b,k,H=de;return(H==null?void 0:H.contains(v))||((b=St(H))===null||b===void 0?void 0:b.host)===v||v===H||(Y==null?void 0:Y.contains(v))||((k=St(Y))===null||k===void 0?void 0:k.host)===v||v===Y||Object.values(We.current).some(function(j){return(j==null?void 0:j.contains(v))||v===j})}),ee=Wt(i,pe,ae,Z),Lr=Wt(i,ce,ye,ge),kr=s.useState(C||!1),Me=D(kr,2),L=Me[0],$=Me[1],_=l??L,rr=Ve(function(v){l===void 0&&$(v)});K(function(){$(l||!1)},[l]);var Te=s.useRef(_);Te.current=_;var Be=s.useRef([]);Be.current=[];var hr=Ve(function(v){var b;rr(v),((b=Be.current[Be.current.length-1])!==null&&b!==void 0?b:_)!==v&&(Be.current.push(v),y==null||y(v))}),mr=s.useRef(),He=function(){clearTimeout(mr.current)},he=function(b){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;He(),k===0?hr(b):mr.current=setTimeout(function(){hr(b)},k*1e3)};s.useEffect(function(){return He},[]);var tt=s.useState(!1),gr=D(tt,2),tr=gr[0],yr=gr[1];K(function(v){(!v||_)&&yr(!0)},[_]);var Ie=s.useState(null),Ue=D(Ie,2),Pe=Ue[0],Je=Ue[1],jr=s.useState([0,0]),wr=D(jr,2),Le=wr[0],Vr=wr[1],nr=function(b){Vr([b.clientX,b.clientY])},Qe=ra(_,Y,fe?Le:de,V,B,Q,Ye),p=D(Qe,11),nt=p[0],_r=p[1],Wr=p[2],Ze=p[3],zr=p[4],at=p[5],Ge=p[6],Br=p[7],it=p[8],we=p[9],xe=p[10],br=pn(Ce,d,h,m),Hr=D(br,2),ke=Hr[0],Ke=Hr[1],Cr=ke.has("click"),ar=Ke.has("click")||Ke.has("contextMenu"),qe=Ve(function(){tr||xe()}),ot=function(){Te.current&&fe&&ar&&he(!1)};ta(_,de,Y,qe,ot),K(function(){qe()},[Le,V]),K(function(){_&&!(B!=null&&B[V])&&qe()},[JSON.stringify(Q)]);var ut=s.useMemo(function(){var v=ea(B,i,we,fe);return cr(v,N==null?void 0:N(we))},[we,N,B,i,fe]);s.useImperativeHandle(n,function(){return{nativeElement:Tr.current,popupElement:dr.current,forceAlign:qe}});var st=s.useState(0),Ir=D(st,2),ft=Ir[0],ct=Ir[1],lt=s.useState(0),Ur=D(lt,2),vt=Ur[0],Sr=Ur[1],ir=function(){if(ne&&de){var b=de.getBoundingClientRect();ct(b.width),Sr(b.height)}},dt=function(){ir(),qe()},ue=function(b){yr(!1),xe(),c==null||c(b)},Jr=function(){return new Promise(function(b){ir(),Je(function(){return b})})};K(function(){Pe&&(xe(),Pe(),Je(null))},[Pe]);function Fe(v,b,k,H){$e[v]=function(j){var Zr;H==null||H(j),he(b,k);for(var wt=arguments.length,Ft=new Array(wt>1?wt-1:0),Gr=1;Gr<wt;Gr++)Ft[Gr-1]=arguments[Gr];(Zr=oe[v])===null||Zr===void 0||Zr.call.apply(Zr,[oe,j].concat(Ft))}}(Cr||ar)&&($e.onClick=function(v){var b;Te.current&&ar?he(!1):!Te.current&&Cr&&(nr(v),he(!0));for(var k=arguments.length,H=new Array(k>1?k-1:0),j=1;j<k;j++)H[j-1]=arguments[j];(b=oe.onClick)===null||b===void 0||b.call.apply(b,[oe,v].concat(H))}),na(_,ar,de,Y,g,A,Se,he);var Oe=ke.has("hover"),or=Ke.has("hover"),ur,Mr;Oe&&(Fe("onMouseEnter",!0,S,function(v){nr(v)}),Fe("onPointerEnter",!0,S,function(v){nr(v)}),ur=function(b){(_||tr)&&Y!==null&&Y!==void 0&&Y.contains(b.target)&&he(!0,S)},fe&&($e.onMouseMove=function(v){var b;(b=oe.onMouseMove)===null||b===void 0||b.call(oe,v)})),or&&(Fe("onMouseLeave",!1,q),Fe("onPointerLeave",!1,q),Mr=function(){he(!1,q)}),ke.has("focus")&&Fe("onFocus",!0,w),Ke.has("focus")&&Fe("onBlur",!1,M),ke.has("contextMenu")&&($e.onContextMenu=function(v){var b;Te.current&&Ke.has("contextMenu")?he(!1):(nr(v),he(!0)),v.preventDefault();for(var k=arguments.length,H=new Array(k>1?k-1:0),j=1;j<k;j++)H[j-1]=arguments[j];(b=oe.onContextMenu)===null||b===void 0||b.call.apply(b,[oe,v].concat(H))}),Xe&&($e.className=cr(oe.className,Xe));var Pr=T(T({},oe),$e),Qr={},ht=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];ht.forEach(function(v){G[v]&&(Qr[v]=function(){for(var b,k=arguments.length,H=new Array(k),j=0;j<k;j++)H[j]=arguments[j];(b=Pr[v])===null||b===void 0||b.call.apply(b,[Pr].concat(H)),G[v].apply(G,H)})});var mt=s.cloneElement(ze,T(T({},Pr),Qr)),gt={x:at,y:Ge},yt=be?T({},be!==!0?be:{}):null;return s.createElement(s.Fragment,null,s.createElement(Gt,{disabled:!_,ref:rt,onResize:dt},s.createElement(Yn,{getTriggerDOMNode:vr},mt)),s.createElement(Vt.Provider,{value:Ar},s.createElement(On,{portal:t,ref:le,prefixCls:i,popup:O,className:cr(te,ut),style:z,target:de,onMouseEnter:ur,onMouseLeave:Mr,onPointerEnter:ur,zIndex:F,open:_,keepDom:tr,fresh:me,onClick:lr,mask:g,motion:ee,maskMotion:Lr,onVisibleChanged:ue,onPrepare:Jr,forceRender:U,autoDestroy:er,getPopupContainer:R,align:we,arrow:yt,arrowPos:gt,ready:nt,offsetX:_r,offsetY:Wr,offsetR:Ze,offsetB:zr,onAlign:qe,stretch:ne,targetWidth:ft/Br,targetHeight:vt/it})))});return e}const da=ia(Yt);function ha(t){var e=s.createContext(void 0),r=function(a){var i=a.value,o=a.children,u=s.useRef(i);u.current=i;var d=s.useState(function(){return{getValue:function(){return u.current},listeners:new Set}}),h=D(d,1),m=h[0];return K(function(){Qt.unstable_batchedUpdates(function(){m.listeners.forEach(function(l){l(i)})})},[i]),s.createElement(e.Provider,{value:m},o)};return{Context:e,Provider:r,defaultValue:t}}function ma(t,e){var r=Ve(typeof e=="function"?e:function(l){if(e===void 0)return l;if(!Array.isArray(e))return l[e];var C={};return e.forEach(function(y){C[y]=l[y]}),C}),n=s.useContext(t==null?void 0:t.Context),a=n||{},i=a.listeners,o=a.getValue,u=s.useRef();u.current=r(n?o():t==null?void 0:t.defaultValue);var d=s.useState({}),h=D(d,2),m=h[1];return K(function(){if(!n)return;function l(C){var y=r(C);ln(u.current,y,!0)||m({})}return i.add(l),function(){i.delete(l)}},[n]),u.current}function ga(){var t=s.createContext(null);function e(){return s.useContext(t)}function r(a,i){var o=Yr(a),u=function(h,m){var l=o?{ref:m}:{},C=s.useRef(0),y=s.useRef(h),c=e();return c!==null?s.createElement(a,Fr({},h,l)):((!i||i(y.current,h))&&(C.current+=1),y.current=h,s.createElement(t.Provider,{value:C.current},s.createElement(a,Fr({},h,l))))};return o?s.forwardRef(u):u}function n(a,i){var o=Yr(a),u=function(h,m){var l=o?{ref:m}:{};return e(),s.createElement(a,Fr({},h,l))};return o?s.memo(s.forwardRef(u),i):s.memo(u,i)}return{makeImmutable:r,responseImmutable:n,useImmutableMark:e}}export{pr as S,da as T,ha as a,ga as c,ma as u};

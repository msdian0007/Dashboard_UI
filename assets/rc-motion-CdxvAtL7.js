import{k as se,h as Me,i as be,a as Ne,_ as Oe,d as me,c as D,e as v,b as A,j as ke,g as Je}from"./@babel-nFbzLRrx.js";import{c as Xe}from"./classnames-C9FZUsQl.js";import{c as pe,q as Ce,F as ce,G as Ye,i as Ze,h as et,s as tt,H as nt}from"./rc-util-C_IKOujR.js";import{r as o}from"./react-DHBI0EtI.js";var rt=["children"],De=o.createContext({});function Rt(e){var t=e.children,n=se(e,rt);return o.createElement(De.Provider,{value:n},t)}var at=function(e){Me(n,e);var t=be(n);function n(){return Ne(this,n),t.apply(this,arguments)}return Oe(n,[{key:"render",value:function(){return this.props.children}}]),n}(o.Component),O="none",X="appear",Y="enter",Z="leave",Le="none",P="prepare",$="start",H="active",Ee="end",Ue="prepared";function Pe(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit".concat(e)]="webkit".concat(t),n["Moz".concat(e)]="moz".concat(t),n["ms".concat(e)]="MS".concat(t),n["O".concat(e)]="o".concat(t.toLowerCase()),n}function it(e,t){var n={animationend:Pe("Animation","AnimationEnd"),transitionend:Pe("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}var ot=it(pe(),typeof window<"u"?window:{}),Ve={};if(pe()){var ut=document.createElement("div");Ve=ut.style}var ee={};function we(e){if(ee[e])return ee[e];var t=ot[e];if(t)for(var n=Object.keys(t),r=n.length,a=0;a<r;a+=1){var u=n[a];if(Object.prototype.hasOwnProperty.call(t,u)&&u in Ve)return ee[e]=t[u],ee[e]}return""}var Fe=we("animationend"),je=we("transitionend"),Ke=!!(Fe&&je),Re=Fe||"animationend",_e=je||"transitionend";function xe(e,t){if(!e)return null;if(me(e)==="object"){var n=t.replace(/-\w/g,function(r){return r[1].toUpperCase()});return e[n]}return"".concat(e,"-").concat(t)}const st=function(e){var t=o.useRef();function n(a){a&&(a.removeEventListener(_e,e),a.removeEventListener(Re,e))}function r(a){t.current&&t.current!==a&&n(t.current),a&&a!==t.current&&(a.addEventListener(_e,e),a.addEventListener(Re,e),t.current=a)}return o.useEffect(function(){return function(){n(t.current)}},[]),[r,n]};var Ie=pe()?o.useLayoutEffect:o.useEffect;const ct=function(){var e=o.useRef(null);function t(){Ce.cancel(e.current)}function n(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;t();var u=Ce(function(){a<=1?r({isCanceled:function(){return u!==e.current}}):n(r,a-1)});e.current=u}return o.useEffect(function(){return function(){t()}},[]),[n,t]};var vt=[P,$,H,Ee],ft=[P,Ue],Qe=!1,lt=!0;function $e(e){return e===H||e===Ee}const dt=function(e,t,n){var r=ce(Le),a=D(r,2),u=a[0],f=a[1],m=ct(),p=D(m,2),i=p[0],s=p[1];function c(){f(P,!0)}var l=t?ft:vt;return Ie(function(){if(u!==Le&&u!==Ee){var d=l.indexOf(u),E=l[d+1],k=n(u);k===Qe?f(E,!0):E&&i(function(R){function g(){R.isCanceled()||f(E,!0)}k===!0?g():Promise.resolve(k).then(g)})}},[e,u]),o.useEffect(function(){return function(){s()}},[]),[c,u]};function mt(e,t,n,r){var a=r.motionEnter,u=a===void 0?!0:a,f=r.motionAppear,m=f===void 0?!0:f,p=r.motionLeave,i=p===void 0?!0:p,s=r.motionDeadline,c=r.motionLeaveImmediately,l=r.onAppearPrepare,d=r.onEnterPrepare,E=r.onLeavePrepare,k=r.onAppearStart,R=r.onEnterStart,g=r.onLeaveStart,U=r.onAppearActive,V=r.onEnterActive,b=r.onLeaveActive,w=r.onAppearEnd,C=r.onEnterEnd,T=r.onLeaveEnd,M=r.onVisibleChanged,te=ce(),Q=D(te,2),L=Q[0],F=Q[1],y=Ye(O),j=D(y,2),N=j[0],K=j[1],ne=ce(null),q=D(ne,2),W=q[0],Se=q[1],_=N(),re=o.useRef(!1),ae=o.useRef(null);function G(){return n()}var ye=o.useRef(!1);function he(){K(O),Se(null,!0)}var Ae=Ze(function(h){var S=N();if(S!==O){var x=G();if(!(h&&!h.deadline&&h.target!==x)){var B=ye.current,J;S===X&&B?J=w==null?void 0:w(x,h):S===Y&&B?J=C==null?void 0:C(x,h):S===Z&&B&&(J=T==null?void 0:T(x,h)),B&&J!==!1&&he()}}}),He=st(Ae),We=D(He,1),ze=We[0],ge=function(S){switch(S){case X:return A(A(A({},P,l),$,k),H,U);case Y:return A(A(A({},P,d),$,R),H,V);case Z:return A(A(A({},P,E),$,g),H,b);default:return{}}},z=o.useMemo(function(){return ge(_)},[_]),qe=dt(_,!e,function(h){if(h===P){var S=z[P];return S?S(G()):Qe}if(I in z){var x;Se(((x=z[I])===null||x===void 0?void 0:x.call(z,G(),null))||null)}return I===H&&_!==O&&(ze(G()),s>0&&(clearTimeout(ae.current),ae.current=setTimeout(function(){Ae({deadline:!0})},s))),I===Ue&&he(),lt}),Te=D(qe,2),Ge=Te[0],I=Te[1],Be=$e(I);ye.current=Be,Ie(function(){F(t);var h=re.current;re.current=!0;var S;!h&&t&&m&&(S=X),h&&t&&u&&(S=Y),(h&&!t&&i||!h&&c&&!t&&i)&&(S=Z);var x=ge(S);S&&(e||x[P])?(K(S),Ge()):K(O)},[t]),o.useEffect(function(){(_===X&&!m||_===Y&&!u||_===Z&&!i)&&K(O)},[m,u,i]),o.useEffect(function(){return function(){re.current=!1,clearTimeout(ae.current)}},[]);var ie=o.useRef(!1);o.useEffect(function(){L&&(ie.current=!0),L!==void 0&&_===O&&((ie.current||L)&&(M==null||M(L)),ie.current=!0)},[L,_]);var oe=W;return z[P]&&I===$&&(oe=v({transition:"none"},oe)),[_,I,oe,L??t]}function pt(e){var t=e;me(e)==="object"&&(t=e.transitionSupport);function n(a,u){return!!(a.motionName&&t&&u!==!1)}var r=o.forwardRef(function(a,u){var f=a.visible,m=f===void 0?!0:f,p=a.removeOnLeave,i=p===void 0?!0:p,s=a.forceRender,c=a.children,l=a.motionName,d=a.leavedClassName,E=a.eventProps,k=o.useContext(De),R=k.motion,g=n(a,R),U=o.useRef(),V=o.useRef();function b(){try{return U.current instanceof HTMLElement?U.current:nt(V.current)}catch{return null}}var w=mt(g,m,b,a),C=D(w,4),T=C[0],M=C[1],te=C[2],Q=C[3],L=o.useRef(Q);Q&&(L.current=!0);var F=o.useCallback(function(W){U.current=W,et(u,W)},[u]),y,j=v(v({},E),{},{visible:m});if(!c)y=null;else if(T===O)Q?y=c(v({},j),F):!i&&L.current&&d?y=c(v(v({},j),{},{className:d}),F):s||!i&&!d?y=c(v(v({},j),{},{style:{display:"none"}}),F):y=null;else{var N;M===P?N="prepare":$e(M)?N="active":M===$&&(N="start");var K=xe(l,"".concat(T,"-").concat(N));y=c(v(v({},j),{},{className:Xe(xe(l,T),A(A({},K,K&&N),l,typeof l=="string")),style:te}),F)}if(o.isValidElement(y)&&tt(y)){var ne=y,q=ne.ref;q||(y=o.cloneElement(y,{ref:F}))}return o.createElement(at,{ref:V},y)});return r.displayName="CSSMotion",r}const Et=pt(Ke);var ve="add",fe="keep",le="remove",ue="removed";function St(e){var t;return e&&me(e)==="object"&&"key"in e?t=e:t={key:e},v(v({},t),{},{key:String(t.key)})}function de(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return e.map(St)}function yt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=[],r=0,a=t.length,u=de(e),f=de(t);u.forEach(function(i){for(var s=!1,c=r;c<a;c+=1){var l=f[c];if(l.key===i.key){r<c&&(n=n.concat(f.slice(r,c).map(function(d){return v(v({},d),{},{status:ve})})),r=c),n.push(v(v({},l),{},{status:fe})),r+=1,s=!0;break}}s||n.push(v(v({},i),{},{status:le}))}),r<a&&(n=n.concat(f.slice(r).map(function(i){return v(v({},i),{},{status:ve})})));var m={};n.forEach(function(i){var s=i.key;m[s]=(m[s]||0)+1});var p=Object.keys(m).filter(function(i){return m[i]>1});return p.forEach(function(i){n=n.filter(function(s){var c=s.key,l=s.status;return c!==i||l!==le}),n.forEach(function(s){s.key===i&&(s.status=fe)})}),n}var ht=["component","children","onVisibleChanged","onAllRemoved"],At=["status"],gt=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function Tt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Et,n=function(r){Me(u,r);var a=be(u);function u(){var f;Ne(this,u);for(var m=arguments.length,p=new Array(m),i=0;i<m;i++)p[i]=arguments[i];return f=a.call.apply(a,[this].concat(p)),A(ke(f),"state",{keyEntities:[]}),A(ke(f),"removeKey",function(s){var c=f.state.keyEntities,l=c.map(function(d){return d.key!==s?d:v(v({},d),{},{status:ue})});return f.setState({keyEntities:l}),l.filter(function(d){var E=d.status;return E!==ue}).length}),f}return Oe(u,[{key:"render",value:function(){var m=this,p=this.state.keyEntities,i=this.props,s=i.component,c=i.children,l=i.onVisibleChanged,d=i.onAllRemoved,E=se(i,ht),k=s||o.Fragment,R={};return gt.forEach(function(g){R[g]=E[g],delete E[g]}),delete E.keys,o.createElement(k,E,p.map(function(g,U){var V=g.status,b=se(g,At),w=V===ve||V===fe;return o.createElement(t,Je({},R,{key:b.key,visible:w,eventProps:b,onVisibleChanged:function(T){if(l==null||l(T,{key:b.key}),!T){var M=m.removeKey(b.key);M===0&&d&&d()}}}),function(C,T){return c(v(v({},C),{},{index:U}),T)})}))}}],[{key:"getDerivedStateFromProps",value:function(m,p){var i=m.keys,s=p.keyEntities,c=de(i),l=yt(s,c);return{keyEntities:l.filter(function(d){var E=s.find(function(k){var R=k.key;return d.key===R});return!(E&&E.status===ue&&d.status===le)})}}}]),u}(o.Component);return A(n,"defaultProps",{component:"div"}),n}Tt(Ke);export{Et as C,Rt as M};
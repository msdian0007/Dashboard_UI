import{k as $,c as w,b as m,g as D,e as g}from"./@babel-nFbzLRrx.js";import{c as M}from"./classnames-C9FZUsQl.js";import{A as j}from"./rc-util-C_IKOujR.js";import{r as a}from"./react-DHBI0EtI.js";var A=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],W=a.forwardRef(function(e,k){var s=e.prefixCls,n=s===void 0?"rc-checkbox":s,C=e.className,b=e.style,_=e.checked,l=e.disabled,u=e.defaultChecked,y=u===void 0?!1:u,d=e.type,o=d===void 0?"checkbox":d,x=e.title,i=e.onChange,R=$(e,A),c=a.useRef(null),f=a.useRef(null),E=j(y,{value:_}),h=w(E,2),v=h[0],N=h[1];a.useImperativeHandle(k,function(){return{focus:function(t){var r;(r=c.current)===null||r===void 0||r.focus(t)},blur:function(){var t;(t=c.current)===null||t===void 0||t.blur()},input:c.current,nativeElement:f.current}});var P=M(n,C,m(m({},"".concat(n,"-checked"),v),"".concat(n,"-disabled"),l)),S=function(t){l||("checked"in e||N(t.target.checked),i==null||i({target:g(g({},e),{},{type:o,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))};return a.createElement("span",{className:P,title:x,style:b,ref:f},a.createElement("input",D({},R,{className:"".concat(n,"-input"),ref:c,onChange:S,disabled:l,checked:!!v,type:o})),a.createElement("span",{className:"".concat(n,"-inner")}))});export{W as C};

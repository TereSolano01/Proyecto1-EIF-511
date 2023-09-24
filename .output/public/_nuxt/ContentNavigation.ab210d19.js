import{w as I,h,j as A,a as D,b as p,r as f,e as E,f as R,i as T,k as P,l as d,F as v,m as V,p as O,d as r,_ as o,t as y,q as b,s as $,v as j,x as S,y as k}from"./entry.52b7bd8a.js";import"./ContentSlot.4fafbbcb.js";import"./DocumentDrivenEmpty.ca89c2d5.js";import"./DocumentDrivenNotFound.c69805d1.js";import"./Markdown.7d724ef5.js";import"./ProseCode.af0e67e2.js";const C=t=>{let e=t;typeof(e==null?void 0:e.params)=="function"&&(e=e.params());const n=I(e?`/navigation/${h(e)}.json`:"/navigation");return $fetch(n,{method:"GET",responseType:"json",params:{_params:A(e||{}),previewToken:D("previewToken").value}})};const w=p({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const _=f(null),a=E();return R(i=>{if(!a.isHydrating)return n("error",i),_.value=i,!1}),()=>{var i,u;return _.value?(i=e.error)==null?void 0:i.call(e,{error:_}):(u=e.default)==null?void 0:u.call(e)}}}),x=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),N=p({name:"ClientOnly",props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e}){const n=f(!1);return T(()=>{n.value=!0}),_=>{var l;if(n.value)return(l=e.default)==null?void 0:l.call(e);const a=e.fallback||e.placeholder;if(a)return a();const i=_.fallback||_.placeholder||"",u=_.fallbackTag||_.placeholderTag||"span";return P(u,null,i)}}});function q(t){const{setup:e,render:n,template:_}=t;return n?t.render=(a,...i)=>{var u,l;return a.mounted$?d(v,null,[d(n(a,...i),(u=a.$attrs)!=null?u:a._.attrs)]):d("div",(l=a.$attrs)!=null?l:a._.attrs)}:_&&(t.template=`
      <template v-if="mounted$">${_}</template>
      <template v-else><div></div></template>
    `),p({...t,setup(a,i){const u=f(!1);return T(()=>{u.value=!0}),Promise.resolve((e==null?void 0:e(a,i))||{}).then(l=>typeof l!="function"?{...l,mounted$:u}:(...m)=>u.value?d(v,null,[d(l(...m),i.attrs)]):d("div",i.attrs))}})}const z=Object.freeze(Object.defineProperty({__proto__:null,default:N,createClientOnly:q},Symbol.toStringTag,{value:"Module"})),B=p({name:"ServerPlaceholder",render(){return P("div")}}),M=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),F=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t){const e=W({duration:t.duration,throttle:t.throttle}),n=E();return n.hook("page:start",e.start),n.hook("page:finish",e.finish),V(()=>e.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${e.progress.value}%`,height:`${t.height}px`,opacity:e.isLoading.value?1:0,background:t.color,backgroundSize:`${100/e.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}})}});function W(t){const e=f(0),n=f(!1),_=O(()=>1e4/t.duration);let a=null,i=null;function u(){m(),e.value=0,n.value=!0,t.throttle?i=setTimeout(s,t.throttle):s()}function l(){e.value=100,g()}function m(){clearInterval(a),clearTimeout(i),a=null,i=null}function c(L){e.value=Math.min(100,e.value+L)}function g(){m(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function s(){a=setInterval(()=>{c(_.value)},100)}return{progress:e,isLoading:n,start:u,finish:l,clear:m}}const X=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));r(()=>o(()=>import("./FooterView.d6927773.js"),["FooterView.d6927773.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./HeaderView.cf8731fe.js"),["HeaderView.cf8731fe.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.52b7bd8a.js").then(t=>t.Z),["entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.52b7bd8a.js").then(t=>t.$),["entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.52b7bd8a.js").then(t=>t.Y),["entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.52b7bd8a.js").then(t=>t.X),["entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.52b7bd8a.js").then(t=>t.W),["entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ContentSlot.4fafbbcb.js"),["ContentSlot.4fafbbcb.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./DocumentDrivenEmpty.ca89c2d5.js"),["DocumentDrivenEmpty.ca89c2d5.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./DocumentDrivenNotFound.c69805d1.js"),["DocumentDrivenNotFound.c69805d1.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./Markdown.7d724ef5.js"),["Markdown.7d724ef5.js","ContentSlot.4fafbbcb.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseA.47542657.js"),["ProseA.47542657.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseBlockquote.e07f331d.js"),["ProseBlockquote.e07f331d.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseCode.af0e67e2.js"),["ProseCode.af0e67e2.js","ProseCode.e63e49c6.css","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseCodeInline.42111bec.js"),["ProseCodeInline.42111bec.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseEm.ac7234b5.js"),["ProseEm.ac7234b5.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH1.9b8763dc.js"),["ProseH1.9b8763dc.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH2.46d9365e.js"),["ProseH2.46d9365e.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH3.1119bc9f.js"),["ProseH3.1119bc9f.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH4.91105395.js"),["ProseH4.91105395.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH5.c765b641.js"),["ProseH5.c765b641.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseH6.94a056c7.js"),["ProseH6.94a056c7.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseHr.5f67bcdd.js"),["ProseHr.5f67bcdd.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseImg.1f6de84a.js"),["ProseImg.1f6de84a.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseLi.dd697730.js"),["ProseLi.dd697730.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseOl.e0315744.js"),["ProseOl.e0315744.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseP.3f80f4e9.js"),["ProseP.3f80f4e9.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseStrong.3f9d0061.js"),["ProseStrong.3f9d0061.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTable.64b40aee.js"),["ProseTable.64b40aee.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTbody.d358465c.js"),["ProseTbody.d358465c.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTd.4d90ecb7.js"),["ProseTd.4d90ecb7.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTh.3a89ad4f.js"),["ProseTh.3a89ad4f.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseThead.cba389ad.js"),["ProseThead.cba389ad.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseTr.4d80b3c5.js"),["ProseTr.4d80b3c5.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./ProseUl.655753fc.js"),["ProseUl.655753fc.js","entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./welcome.eb5a5fb9.js"),["welcome.eb5a5fb9.js","entry.52b7bd8a.js","entry.a98774ca.css","ContentSlot.4fafbbcb.js","DocumentDrivenEmpty.ca89c2d5.js","DocumentDrivenNotFound.c69805d1.js","Markdown.7d724ef5.js","ProseCode.af0e67e2.js","ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.52b7bd8a.js").then(t=>t.a0),["entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>x),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>z),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>M),void 0,import.meta.url).then(t=>t.default||t));r(()=>o(()=>import("./entry.52b7bd8a.js").then(t=>t.V),["entry.52b7bd8a.js","entry.a98774ca.css"],import.meta.url).then(t=>t.default||t));r(()=>o(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));const G=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=y(t),n=O(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation","$X9s2D0PBpW").value){const{navigation:a}=$();return{navigation:a}}const{data:_}=await j(`content-navigation-${h(n.value)}`,()=>C(n.value),"$qwqtCbrR7R");return{navigation:_}},render(t){const e=S(),{navigation:n}=t,_=u=>d(k,{to:u._path},()=>u.title),a=(u,l)=>d("ul",l?{"data-level":l}:null,u.map(m=>m.children?d("li",null,[_(m),a(m.children,l+1)]):d("li",null,_(m)))),i=u=>a(u,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):i(n)}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{G as default};
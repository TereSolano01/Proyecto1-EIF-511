import f from"./HeaderView.dc915f3d.js";import{B as g,P as y,o as c,k as i,I as e,E as s,K as t,L as r,F as v,S as w,D as b,N as x,O as B,y as I}from"./entry.864443da.js";import k from"./FooterView.0d287b26.js";const N={async asyncData({$content:o,params:n}){const l=await o("compositors",n.slug).fetch(),_=await o("albums").where({compositorId:n.slug}).fetch();return{compositor:l,books:_}}},u=o=>(x("data-v-b76dfbf6"),o=o(),B(),o),S={class:"container"},V={class:"row"},F={class:"three columns"},$=["src"],D={class:"six columns"},L=u(()=>s("h1",null,"hola",-1)),C={class:"three columns"},E=u(()=>s("h5",null,"Books",-1));function T(o,n,l,_,H,K){const d=f,m=y("nuxt-content"),p=I,h=k;return c(),i("div",S,[e(d),s("div",V,[s("div",F,[s("img",{class:"u-max-full-width",src:"/images/"+o.compositor.image,alt:"Italian Trulli"},null,8,$)]),s("div",D,[L,s("h4",null,t(o.compositor.name),1),r(" Nationality: "+t(o.compositor.nationality)+"; Born: "+t(o.compositor.birth_year)+" Fields: "+t(o.compositor.fields)+" Biography ",1),e(m,{document:o.compositor},null,8,["document"])])]),s("div",C,[E,s("ul",null,[(c(!0),i(v,null,w(o.books,a=>(c(),i("li",{key:a.slug},[e(p,{to:{name:"compositors-slug",params:{slug:a.slug}}},{default:b(()=>[r(t(a.title),1)]),_:2},1032,["to"])]))),128))])]),e(h)])}const q=g(N,[["render",T],["__scopeId","data-v-b76dfbf6"]]);export{q as default};
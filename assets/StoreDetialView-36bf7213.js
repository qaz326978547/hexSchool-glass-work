import{f as w,u as y,g as d,h as S,i as k,o as r,c as m,a as s,k as D,v as B,F as C,j as L,t as l}from"./index-190ddf03.js";import{u as N}from"./StoreDataStore-cde765e9.js";import"./pub-use-0394c426.js";const q="/hexSchool-glass-work/assets/map@2x-dc2516bb.png",E="/hexSchool-glass-work/assets/map-5fdbfbd6.png",F={class:"container mt-[96px] mb-20"},M=s("div",{class:"border-l-8 border-primary-light"},[s("h2",{class:"text-6xl font-bold ml-4"},"門市據點")],-1),V={class:"flex items-center my-6"},j=s("label",{class:"whitespace-nowrap mr-2 text-2xl",for:"city"},"選擇分店",-1),A=["value"],O={class:"flex items-center flex-col lg:flex-row"},R={class:"lg:w-5/12 md:flex"},U={class:"md:flex lg:block"},z=["src"],G={class:"md:flex lg:block lg:ml-0 md:flex-col md:ml-6 border border-[#00000020]"},H={class:"card-title py-2 px-6 border-b-[1px] border-b-[#00000020]"},I={class:"text-2xl"},J={class:"py-4 px-6 space-y-2 text-xl"},K={class:"flex"},P=s("i",{class:"icon icon_call w-6 h-6 mr-2"},null,-1),Q={class:"ml-2"},T={class:"flex"},W=s("i",{class:"icon icon_clock w-6 h-6 mr-2"},null,-1),X={class:"ml-2"},Y={class:"flex"},Z=s("i",{class:"icon icon_map w-6 h-6 mr-2"},null,-1),$={class:"ml-2"},ss=s("div",{class:"lg:ml-6 lg:w-7/12 md:1/2 mt-6"},[s("img",{class:"md:block hidden",src:q,alt:"map"}),s("img",{class:"md:hidden block",src:E,alt:"map"})],-1),cs=w({__name:"StoreDetialView",setup(es){const g=N(),{allCityList:n}=g,_=y(),u=d([]),t=d(),c=d(),v=()=>{const e=[];n.map(o=>{e.push(o.name)}),u.value=e};return S(c,(e,o)=>{console.log(e,o),t.value=n.find(a=>a.name===e)}),k(()=>{var e;console.log(_.query.id),t.value=n.find(o=>o.id.toString()===_.query.id),c.value=(e=t.value)==null?void 0:e.name,v()}),(e,o)=>{var a,p,h,x,f;return r(),m("div",F,[M,s("div",V,[j,D(s("select",{class:"lg:w-1/4 md:w-1/3 w-full py-[6px] px-3 border-[#CED4DA] border",name:"city",id:"city","onUpdate:modelValue":o[0]||(o[0]=i=>c.value=i)},[(r(!0),m(C,null,L(u.value,(i,b)=>(r(),m("option",{key:b,value:i},l(i),9,A))),128))],512),[[B,c.value]])]),s("div",O,[s("ul",R,[s("li",U,[s("img",{class:"md:w-1/2 lg:w-full",src:(a=t.value)==null?void 0:a.img,alt:""},null,8,z),s("div",G,[s("div",H,[s("h3",I,l((p=t.value)==null?void 0:p.name),1)]),s("ul",J,[s("li",K,[P,s("p",Q,"電話:"+l((h=t.value)==null?void 0:h.phone),1)]),s("li",T,[W,s("p",X,"營業時間:"+l((x=t.value)==null?void 0:x.time),1)]),s("li",Y,[Z,s("p",$,"地址:"+l((f=t.value)==null?void 0:f.address),1)])])])])]),ss])])}}});export{cs as default};

import{a as S,m as b,R as V,C as k,ao as w,bm as L,bn as N}from"./index-22b5c2ba.js";const i=["start","end","center"],g=["space-between","space-around","space-evenly"];function o(t,s){return L.reduce((e,a)=>{const n=t+N(a);return e[n]=s(),e},{})}const p=[...i,"baseline","stretch"],d=t=>p.includes(t),f=o("align",()=>({type:String,default:null,validator:d})),A=[...i,...g],y=t=>A.includes(t),C=o("justify",()=>({type:String,default:null,validator:y})),E=[...i,...g,"stretch"],j=t=>E.includes(t),m=o("alignContent",()=>({type:String,default:null,validator:j})),r={align:Object.keys(f),justify:Object.keys(C),alignContent:Object.keys(m)},P={align:"align",justify:"justify",alignContent:"align-content"};function h(t,s,e){let a=P[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const T=S()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...C,alignContent:{type:String,default:null,validator:j},...m,...b(),...V()},setup(t,s){let{slots:e}=s;const a=k(()=>{const n=[];let l;for(l in r)r[l].forEach(c=>{const v=t[c],u=h(l,c,v);u&&n.push(u)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return w(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{T as V};

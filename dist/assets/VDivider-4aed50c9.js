import{a as c,m as d,S as v,U as h,aO as m,X as u,C as g,O as a,u as C,d as x}from"./index-22b5c2ba.js";const f=c()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...d(),...v()},setup(e,r){let{attrs:t}=r;const{themeClasses:s}=h(e),{textColorClasses:l,textColorStyles:n}=m(u(e,"color")),o=g(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=a(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=a(e.thickness)),i});return C(()=>x("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},s.value,l.value,e.class],style:[o.value,n.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{f as V};

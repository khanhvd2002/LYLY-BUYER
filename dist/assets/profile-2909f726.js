import{l as k}from"./index-772d334d.js";import{_ as p,ab as I,o as s,f as i,d as e,w as a,h as u,t as m,F as _,r as x,e as V,V as y,q as r}from"./index-22b5c2ba.js";import{V as b,a as C,b as $,c as S}from"./VList-746651b2.js";import{V as B}from"./VAvatar-d7bb5f07.js";import{H as L,B as w}from"./bottomMobile-36805a3c.js";import"./index-56c5ee2d.js";import"./VImg-653cffe0.js";import"./ssrBoot-08c7bd55.js";import"./createSimpleFunctional-9be224d5.js";import"./VDivider-4aed50c9.js";import"./user-12b71aec.js";import"./swiper-vue-ee6ad123.js";import"./product-aa49f252.js";import"./index-a4fb869b.js";const N={name:"profileMenu",computed:{userInfo(){return JSON.parse(localStorage.getItem("infoUser"))}},data:()=>({items:[{text:"Đơn mua hàng",icon:"icon-park-outline:transaction-order",link:"order"},{text:"Giỏ hàng",icon:"noto-v1:shopping-cart",link:"cart"},{text:"Thông tin tài khoản",icon:"icon-park:people",link:"account"}]}),methods:{handleClick(n){this.$router.push({name:n})},handleLogout(){k().then(n=>{this.$moshaToast("Đăng xuất thành công",{type:"success",transition:"slide",timeout:3e3}),localStorage.removeItem("access_token"),localStorage.removeItem("infoUser"),I.push("/login")})}}},T={class:"hidden-xs"},D={style:{"margin-left":"1rem"}};function M(n,d,f,h,g,t){return s(),i("div",T,[e(S,{density:"compact",class:"menu-list"},{default:a(()=>[e(b,{class:"menu-header"},{default:a(()=>[e(B,{size:"80",image:t.userInfo.avatar?t.userInfo.avatar:"https://kiddy.edu.vn/wp-content/uploads/2023/04/150-Hinh-Avatar-Nam-Dep-Trai-Ca-Tinh-Doc-Dao.jpg"},null,8,["image"]),u("strong",D,m(t.userInfo.name?t.userInfo.name:"customer"),1)]),_:1}),(s(!0),i(_,null,x(n.items,(o,c)=>(s(),V($,{key:c,value:o,color:"primary",onClick:l=>t.handleClick(o.link)},{prepend:a(()=>[e(y,{icon:o.icon},null,8,["icon"])]),default:a(()=>[e(C,{textContent:m(o.text)},null,8,["textContent"])]),_:2},1032,["value","onClick"]))),128))]),_:1})])}const H=p(N,[["render",M],["__scopeId","data-v-9c3beff8"]]);const A={name:"profile",components:{HeaderNav:L,ProfileMenu:H,BottomMobile:w},computed:{userInfo(){return localStorage.getItem("access_token")}}},F={class:"container-profile"};function R(n,d,f,h,g,t){const o=r("header-nav"),c=r("profile-menu"),l=r("RouterView"),v=r("bottom-mobile");return s(),i(_,null,[e(o),u("div",F,[e(c),e(l,{class:"content"}),e(v)])],64)}const Z=p(A,[["render",R],["__scopeId","data-v-c6a7e4cc"]]);export{Z as default};

import{d as g}from"./VChip-34702d29.js";import C from"./preOrder-d2f393d7.js";import{_ as k,q as h,o as i,f as o,h as e,F as b,r as V,d as s,w as l,L as m,j as c,k as w,t as p,i as u,p as x,l as q}from"./index-d8bdc496.js";import{V as A}from"./VDivider-b6f72085.js";import{V as N}from"./VCheckbox-404e6a5e.js";import{V as P}from"./VTextField-952090ec.js";import"./VAvatar-89ad20fc.js";import"./VImg-d0ac8ec7.js";import"./VCounter-f846fe82.js";import"./index-3dc29f8e.js";import"./VInput-bf41ae86.js";import"./lazy-93080ec6.js";import"./getScrollParent-7b3d9385.js";import"./index-a4fb869b.js";import"./index-30d4c17e.js";import"./QRcode.vue_vue_type_style_index_0_scoped_7e7556d3_lang-489fc7d6.js";import"./visa-0ce6805b.js";import"./VCard-1e8bcd02.js";import"./createSimpleFunctional-0b4fdfea.js";import"./VRow-a0998b98.js";import"./VCol-2f8f9c79.js";import"./VList-c151f906.js";import"./ssrBoot-46c30e5a.js";import"./VCheckboxBtn-3f03a174.js";import"./VSelectionControl-afd661f8.js";import"./VRadioGroup-ba8da0e0.js";const S="/lyly-web/assets/empty-animation1-f02fbb4b.gif";const B={name:"cart",components:{PreOrder:C},data(){return{status:0,rules:{required:t=>!!t||"Bắt buộc",counter:t=>t.length>0&&t||"Lớn hơn 0",checkNum:(t,n)=>!t||isNaN(t)||t<=0?"Số lượng mua lớn hơn 0 ":(t>n.quantity&&(t=this.product.quantity),!0)},cart:{image:"https://product.hstatic.net/1000025647/product/kcn_innisfree_tone_up_no_sebum_new-min_804b62f1d33b4e7eb1c42c74dd5a6786_1024x1024.jpg",name:"Kem chống ẩm",price:"100.000",flowPrice:"300.000",num:3},cartArr:[],selectedCart:[],orderArr:[]}},created(){this.getDataCart()},methods:{getDataCart(){g().then(t=>{this.cartArr=t.data})},handleCheck(t){t.quantity},handleClickCheckCart(){this.orderArr=this.cartArr.filter(t=>this.selectedCart.includes(t.id)),this.status=1}}},f=t=>(x("data-v-834eabb7"),t=t(),q(),t),T={key:0,class:"cart"},D={key:0},I=w('<h3 class="header-text" data-v-834eabb7>Giỏ hàng</h3><div class="cart-title hidden-xs" data-v-834eabb7><span data-v-834eabb7><div style="width:5%;" data-v-834eabb7></div></span><span style="width:15%;" data-v-834eabb7>Hình ảnh</span><span style="width:35%;" data-v-834eabb7>Tên sản phẩm</span><span style="width:30%;" data-v-834eabb7>Giá tiền</span><span style="width:15%;text-align:end;" data-v-834eabb7>Tùy chọn</span></div>',2),F={class:"cart-container"},L={class:"cart-item"},O={class:"item-img"},U=["src"],j={class:"item-content"},G={class:"item-price"},E={class:"action"},H={key:1,class:"no-cart"},K=f(()=>e("img",{src:S,alt:""},null,-1)),M=f(()=>e("h2",null,"Chưa có sản phẩm nào trong giỏ hàng",-1)),X={key:1,class:"order"};function z(t,n,J,Q,r,_){const v=h("router-link"),y=h("PreOrder");return i(),o(b,null,[r.status===0?(i(),o("div",T,[r.cartArr.length?(i(),o("div",D,[I,e("div",F,[(i(!0),o(b,null,V(r.cartArr,a=>(i(),o("div",{key:a.id},[s(A),e("div",L,[s(N,{modelValue:r.selectedCart,"onUpdate:modelValue":n[0]||(n[0]=d=>r.selectedCart=d),value:a.id},null,8,["modelValue","value"]),e("div",O,[e("img",{width:"80",height:"80",src:a.product_detail.image_url,alt:""},null,8,U)]),e("div",j,p(a.product_detail.name),1),e("div",G,[e("span",null,p(t.formatPrice(a.product_detail.price)),1),s(P,{rules:[r.rules.required],min:"1",max:a.product_detail.quantity,class:"item-quantity",readonly:"",density:"compact","onUpdate:modelValue":[d=>_.handleCheck(a),d=>a.quantity=d],type:"number",modelValue:a.quantity},null,8,["rules","max","onUpdate:modelValue","modelValue"]),e("span",null,p(t.formatPrice(a.total)),1)]),e("div",E,[s(m,null,{default:l(()=>[u("Xóa")]),_:1})])])]))),128)),e("div",null,[s(m,{onClick:_.handleClickCheckCart},{default:l(()=>[u("Thanh toán")]),_:1},8,["onClick"])])])])):c("",!0),r.cartArr.length?c("",!0):(i(),o("div",H,[K,M,s(v,{to:"/"},{default:l(()=>[s(m,{"append-icon":"mdi-cart"},{default:l(()=>[u("Mua ngay")]),_:1})]),_:1})]))])):c("",!0),r.status===1?(i(),o("div",X,[s(y,{order:r.orderArr,"selected-ids":r.selectedCart},null,8,["order","selected-ids"])])):c("",!0)],64)}const Ct=k(B,[["render",z],["__scopeId","data-v-834eabb7"]]);export{Ct as default};
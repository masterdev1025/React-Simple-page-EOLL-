(this.webpackJsonpeoll=this.webpackJsonpeoll||[]).push([[0],{174:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"default",(function(){return U}));var c,n=a(0),l=a.n(n),s=a(18),i=a(29),o=a(28),m=a(23),u=a(9),d=a(84),p=a(197),E=a(79),h=a(199),b=a(198),f=Object(b.a)({GET_PRODUCTS:function(e){return{params:e}},GET_PRODUCTS_SUCCEED:function(e){return{products:e}},GET_PRODUCTS_FAILED:function(e){return{error:e}},GET_CARTS:function(){return{}},ADD_CART:function(e){return{id:e}},UPDATE_CARTS:function(e){return{carts:e}},DELETE_PRODUCT:function(e){return{id:e}},DELETE_PRODUCT_SUCCEED:function(){return{}},DELETE_PRODUCT_FAILED:function(e){return{error:e}},UPDATE_PRODUCT:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{id:e,Product:t,params:a}},UPDATE_PRODUCT_SUCCEED:function(){return{}},UPDATE_PRODUCT_FAILED:function(e){return{error:e}},ADD_PRODUCT:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{Product:e,params:t}},ADD_PRODUCT_SUCCEED:function(){return{}},ADD_PRODUCT_FAILED:function(e){return{error:e}},GET_PRODUCT:function(e){return{id:e}},GET_PRODUCT_SUCCEED:function(e){return{Product:e}},GET_PRODUCT_FAILED:function(e){return{error:e}},UPDATE_CURRENT_PRODUCT:function(e){return{Product:e}}}),v=f.getProducts,g=f.getProductsSucceed,O=f.getProductsFailed,N=f.getProduct,j=f.getProductSucceed,C=f.getProductFailed,S=(f.getCarts,f.addCart,f.updateCarts);f.deleteProduct,f.deleteProductSucceed,f.deleteProductFailed,f.updateProduct,f.updateProductSucceed,f.updateProductFailed,f.addProduct,f.addProductSucceed,f.addProductFailed,f.updateCurrentProduct;function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P={products:null,error:null,loading:!1,message:"",success:!1,currentProduct:null,carts:new Set},R=Object(h.a)((c={},Object(m.a)(c,v,(function(e){return D({},e,{error:null,loading:!0,message:"Generating products listing..."})})),Object(m.a)(c,O,(function(e,t){return D({},e,{error:t.payload,loading:!1})})),Object(m.a)(c,g,(function(e,t){return D({},e,{loading:!1,message:"success",products:t.payload.products})})),Object(m.a)(c,N,(function(e,t){t.payload.id;return D({},e,{loading:!0,success:!1,message:"Getting Products info..."})})),Object(m.a)(c,j,(function(e,t){return D({},e,{loading:!1,message:"",currentProduct:t.payload.Product})})),Object(m.a)(c,C,(function(e,t){t.payload.error;return D({},e,{loading:!1,success:!1,message:"Getting Product info failed",currentProduct:null})})),Object(m.a)(c,S,(function(e,t){return D({},e,{loading:!1,message:"",carts:t.payload.carts})})),c),P),A=Object(u.c)({product:R}),U=Object(u.c)({routing:E.routerReducer,services:A}),T=a(33),w=a.n(T),k=a(24),L=[{id:1,name:"MAGNUS",category:"ladies",material:"glass",size:"medium",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/3025.jpg"},{id:2,name:"MUSE",category:"ladies",material:"glass",size:"medium",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/aviator.jpg"},{id:4,name:"3025",category:"ladies",material:"glass",size:"medium",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/hsp.jpg"},{id:5,name:"POOLSIDE",category:"ladies",material:"glass",size:"medium",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/magnus.jpg"},{id:6,name:"MAGNUS",category:"ladies",material:"glass",size:"medium",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/muse.jpg"},{id:7,name:"MAGNUS",category:"ladies",material:"glass",size:"narrow",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/poolside.jpg"},{id:8,name:"MAGNUS",category:"ladies",material:"glass",size:"medium",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/aviator.jpg"},{id:9,name:"MAGNUS",category:"ladies",material:"glass",size:"narrow",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/3025.jpg"},{id:10,name:"MAGNUS",category:"ladies",material:"glass",size:"medium",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/hsp.jpg"},{id:11,name:"MAGNUS",category:"ladies",material:"glass",size:"wide",shape:"round",color:"red",brands:"bvlgari",price:100,imgUrl:"./assets/images/products/3025.jpg"}],_=L,x=function(e,t){var a=!1,r=!1,c=!1;return e.material&&e.material.size>0?e.material.has(t.material)&&(a=!0):a=!0,e.size&&e.size.size>0?e.size.has(t.size)&&(r=!0):r=!0,e.shape&&e.shape.size>0?e.shape.has(t.shape)&&(c=!0):c=!0,1==a&&1==r&&1==c},z=function(e){var t=[];if(null==e||""==e)return _;if(0==e.material.size&&0==e.size.size&&0==e.shape.size)return _;for(var a=0;a<_.length;a++)1==x(e,_[a])&&t.push(_[a]);return t},I=function(e){console.log("sdfsdf");for(var t=0;t<L.length;t++)if(L[t].id==e)return L[t];return null},G=w.a.mark(B),F=w.a.mark(H),M=w.a.mark(W);function B(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)("GET_PRODUCTS",H)]);case 2:return e.next=4,Object(k.a)([Object(k.d)("GET_PRODUCT",W)]);case 4:case"end":return e.stop()}}),G)}function H(e){var t,a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.params,r.prev=1,r.next=4,Object(k.b)(z,t);case 4:return a=r.sent,r.next=7,Object(k.c)(g(a));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(k.c)(O(r.t0));case 13:case"end":return r.stop()}}),F,null,[[1,9]])}function W(e){var t,a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.id,r.prev=1,r.next=4,Object(k.b)(I,t);case 4:return a=r.sent,r.next=7,Object(k.c)(j(a));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(k.c)(C(r.t0));case 13:case"end":return r.stop()}}),M,null,[[1,9]])}function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var $=Object(d.a)(),J=[$],Y=u.d.apply(void 0,[u.a.apply(void 0,J)].concat([])),q=Object(u.c)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},r,{form:p.a})),K=Object(u.e)(q,{},Y);$.run(B);var Q=K,Z=a(11),X=a(12),ee=a(15),te=a(13),ae=a(14),re=a(32),ce=a(21),ne=(a(174),function(e){function t(e){var a;return Object(Z.a)(this,t),(a=Object(ee.a)(this,Object(te.a)(t).call(this,e))).state={mobile_menu_open:!1},a.cartClassNameRender=a.cartClassNameRender.bind(Object(ce.a)(a)),a}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"cartClassNameRender",value:function(){return this.props.product.carts.size>0?"cart open":"cart hide"}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"headerBar"},l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header-wrapper"},l.a.createElement("div",{className:"logo"},l.a.createElement(i.c,{to:"/"},"EOLL")),l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"item"},"LADIES"),l.a.createElement("div",{className:"item"},"GENTS"),l.a.createElement("div",{className:"item"},"CHILDREN"),l.a.createElement("div",{className:"item"},"TRENDS"),l.a.createElement("div",{className:"item"},"SALE")),l.a.createElement("div",{className:"right-helper"},l.a.createElement("div",{className:"item"},"LOGIN"),l.a.createElement("div",{className:"item"},"HELP"),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:"assets/icons/search.svg",alt:""})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:"assets/icons/cart.svg",alt:""}),l.a.createElement("div",{className:this.cartClassNameRender()},l.a.createElement("div",null,this.props.product.carts.size)))),l.a.createElement("div",{className:"mobile-menu"},l.a.createElement("div",{className:"menu-icon"},l.a.createElement("i",{className:this.state.mobile_menu_open?"fa fa-window-close":"fa fa-bars",onClick:function(){e.setState({mobile_menu_open:!e.state.mobile_menu_open})}})),l.a.createElement("div",{className:this.state.mobile_menu_open?"menu-wrapper open":"menu-wrapper hide"},l.a.createElement("div",{className:"item"},"LADIES"),l.a.createElement("div",{className:"item"},"GENTS"),l.a.createElement("div",{className:"item"},"CHILDREN"),l.a.createElement("div",{className:"item"},"TRENDS"),l.a.createElement("div",{className:"item"},"SALE"),l.a.createElement("hr",null),l.a.createElement("div",{className:"item"},"HELP"))))),l.a.createElement("hr",null))}}]),t}(l.a.Component)),le=Object(s.b)((function(e){return{product:e.default.services.product}}),null)(ne),se=a(189),ie=a(190),oe=a(191),me=a(192),ue=a(193),de=a(194),pe=a(196),Ee=(a(176),function(e){function t(e){var a;return Object(Z.a)(this,t),(a=Object(ee.a)(this,Object(te.a)(t).call(this,e))).filterFun=a.filterFun.bind(Object(ce.a)(a)),a.filterSetMaterial=new Set,a.filterSetSize=new Set,a.filterSetShape=new Set,a.filters={},a.state={filterIsShow:!1},a}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"filterFun",value:function(e){var t=e.target.checked,a=e.target.id.split("-")[0],r=e.target.id.split("-")[1];switch(a){case"material":1==t?this.filterSetMaterial.add(r):this.filterSetMaterial.delete(r);break;case"size":1==t?this.filterSetSize.add(r):this.filterSetSize.delete(r);break;case"shape":1==t?this.filterSetShape.add(r):this.filterSetShape.delete(r)}this.filters={material:this.filterSetMaterial,size:this.filterSetSize,shape:this.filterSetShape},this.props.productActions.getProducts(this.filters)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"filter-wrapper"},l.a.createElement("div",{className:"filterHandle",onClick:function(){e.setState({filterIsShow:!e.state.filterIsShow})}},"FILTERS ",l.a.createElement("i",{className:this.state.filterIsShow?"fa fa-chevron-up":"fa fa-chevron-down"}),l.a.createElement("hr",null)),l.a.createElement("div",{className:this.state.filterIsShow?"filterArea open":"filterArea hide"},l.a.createElement("div",{className:"filter-content"},l.a.createElement(se.a,null,l.a.createElement(ie.a,null,l.a.createElement(oe.a,{for:"materialCheck"},"MATERIALS"),l.a.createElement("div",null,l.a.createElement(me.a,{type:"checkbox",id:"material-glass",label:"GLASS",onChange:this.filterFun}),l.a.createElement(me.a,{type:"checkbox",id:"material-plastic",label:"PLASTIC",onChange:this.filterFun}),l.a.createElement(me.a,{type:"checkbox",id:"material-wood",label:"WOOD",onChange:this.filterFun})))),l.a.createElement(se.a,null,l.a.createElement(ie.a,null,l.a.createElement(oe.a,{for:"sizeCheck"},"SIZE"),l.a.createElement("div",null,l.a.createElement(me.a,{type:"checkbox",id:"size-medium",label:"MEDIUM",onChange:this.filterFun}),l.a.createElement(me.a,{type:"checkbox",id:"size-narrow",label:"NARROW",onChange:this.filterFun}),l.a.createElement(me.a,{type:"checkbox",id:"size-wide",label:"WIDE",onChange:this.filterFun})))),l.a.createElement(se.a,null,l.a.createElement(ie.a,null,l.a.createElement(oe.a,{for:"shapeCheck"},"SHAPE"),l.a.createElement("div",null,l.a.createElement(me.a,{type:"checkbox",id:"shape-rectangular",label:"RECTANGULAR",onChange:this.filterFun}),l.a.createElement(me.a,{type:"checkbox",id:"shape-round",label:"ROUND",onChange:this.filterFun}),l.a.createElement(me.a,{type:"checkbox",id:"shape-roundRectangular",label:"ROUND-RECTANGULAR",onChange:this.filterFun})))),l.a.createElement(se.a,null,l.a.createElement(ie.a,null,l.a.createElement(oe.a,{for:"colorCheck"},"COLOR"),l.a.createElement(ue.a,null,l.a.createElement(de.a,{md:"6",sm:"6",xs:"6"},l.a.createElement(me.a,{type:"radio",id:"color-marble",className:"color color-marble",name:"color",label:"MARBLE"}),l.a.createElement(me.a,{type:"radio",id:"color-charcoal",className:"color color-charcoal",name:"color",label:"CHARCOAL"}),l.a.createElement(me.a,{type:"radio",id:"color-pastel",className:"color color-pastel",name:"color",label:"PASTEL"}),l.a.createElement(me.a,{type:"radio",id:"color-red",className:"color color-red",name:"color",label:"RED"})),l.a.createElement(de.a,{md:"6",sm:"6",xs:"6"},l.a.createElement(me.a,{type:"radio",id:"color-nude",className:"color color-nude",name:"color",label:"NUDE"}),l.a.createElement(me.a,{type:"radio",id:"color-blue",className:"color color-blue",name:"color",label:"BLUE"}),l.a.createElement(me.a,{type:"radio",id:"color-transparent",className:"color color-transparent",name:"color",label:"TRANSPARENT"}),l.a.createElement(me.a,{type:"radio",id:"color-tortoise",className:"color color-tortoise",name:"color",label:"TORTOISE"}))))),l.a.createElement(se.a,null,l.a.createElement(ie.a,null,l.a.createElement(oe.a,{for:"shapeCheck"},"BARNDS"),l.a.createElement("div",{className:"brands"},l.a.createElement(me.a,{type:"checkbox",id:"brands-rectangular",label:"RECTANGULAR"}),l.a.createElement(me.a,{type:"checkbox",id:"brands-round",label:"ROUND"}),l.a.createElement(me.a,{type:"checkbox",id:"brands-roundRectangular",label:"ROUND-RECTANGULAR"}),l.a.createElement(me.a,{type:"checkbox",id:"brands-roundRectangular",label:"ROUND-RECTANGULAR"}),l.a.createElement(me.a,{type:"checkbox",id:"brands-roundRectangular",label:"ROUND-RECTANGULAR"})))),l.a.createElement(se.a,{className:"price"},l.a.createElement(ie.a,null,l.a.createElement(oe.a,{for:"shapeCheck"},"PRICE"),l.a.createElement(pe.a,{value:[30,70],type:"Range"}),l.a.createElement("div",{className:"price-area"},l.a.createElement("div",{className:"start"},"10$"),l.a.createElement("div",{className:"end"},"100$"))))),l.a.createElement("hr",null)))}}]),t}(l.a.Component)),he=Object(s.b)(null,(function(e){return{productActions:Object(u.b)({getProducts:v},e)}}))(Ee),be=(a(177),function(e){function t(e){var a;return Object(Z.a)(this,t),(a=Object(ee.a)(this,Object(te.a)(t).call(this,e))).gotoDetails=a.gotoDetails.bind(Object(ce.a)(a)),a}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"gotoDetails",value:function(e){this.props.productActions.getProduct(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"cardView"},l.a.createElement(i.c,{to:"/details"},l.a.createElement("div",{className:"imageShow"},l.a.createElement("img",{src:this.props.imgUrl,onClick:function(){return e.gotoDetails(e.props.id)},alt:""}),l.a.createElement("div",{className:"colorSpace"},"AVAILABLE IN",l.a.createElement("div",null,l.a.createElement("label",{className:"color-marble"}),l.a.createElement("label",{className:"color-pastel"}),l.a.createElement("label",{className:"color-charcoal"}))))),l.a.createElement("div",{className:"product-info"},l.a.createElement("div",{className:"title"},this.props.title?this.props.title:""),l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"more"},this.props.more?this.props.more:""),l.a.createElement("div",{className:"price"},this.props.price?this.props.price:""))))}}]),t}(l.a.Component)),fe=Object(s.b)(null,(function(e){return{productActions:Object(u.b)({getProduct:N},e)}}))(be),ve=(a(178),function(e){function t(e){var a;return Object(Z.a)(this,t),(a=Object(ee.a)(this,Object(te.a)(t).call(this,e))).props.productActions.getProducts(""),a}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"renderProducts",value:function(){if(this.props.products){var e=this.props.products.map((function(e,t){return l.a.createElement(de.a,{key:t,lg:"3",md:"4",sm:"6"},l.a.createElement(fe,{imgUrl:e.imgUrl,title:e.name,more:e.size,price:e.price,id:e.id}))}));return l.a.createElement("div",{className:"view-wrapper"},l.a.createElement(ue.a,null,e))}return l.a.createElement("div",null)}},{key:"render",value:function(){return l.a.createElement("div",null,this.renderProducts())}}]),t}(l.a.Component)),ge=Object(s.b)((function(e){return{products:e.default.services.product.products}}),(function(e){return{productActions:Object(u.b)({getProducts:v,getProduct:N},e)}}))(ve),Oe=(a(179),function(e){function t(e){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).call(this,e))}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footerBar"},l.a.createElement("hr",null),l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-wrapper"},l.a.createElement("div",{className:"social"},l.a.createElement("div",{className:"item"},"FACEBOOK"),l.a.createElement("div",{className:"item"},"INSTOGRAM")),l.a.createElement("div",{className:"space"}),l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"item"},"HELP"),l.a.createElement("div",{className:"item"},"DELIVERY & RETURNS")),l.a.createElement("div",{className:"helper"},l.a.createElement("div",{className:"item"},"ABOUT EOLL")),l.a.createElement("div",{className:"cart"},l.a.createElement("img",{src:"assets/icons/cart.svg",alt:""})))),l.a.createElement("hr",null))}}]),t}(l.a.Component)),Ne=function(e){function t(e){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).call(this,e))}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(he,null),l.a.createElement(ge,null),l.a.createElement(Oe,null))}}]),t}(l.a.Component),je=a(195),Ce=(a(180),function(e){function t(e){var a;return Object(Z.a)(this,t),(a=Object(ee.a)(this,Object(te.a)(t).call(this,e))).state={addBtnActive:!1,color:null},a.changeColor=a.changeColor.bind(Object(ce.a)(a)),a.isCart=a.isCart.bind(Object(ce.a)(a)),a}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"changeColor",value:function(e){this.setState({color:e.target.id})}},{key:"addCart",value:function(e){console.log("sdfsdf");var t=this.props.productR.carts;t.has(e)||t.add(e),this.props.cartAction.updateCarts(t)}},{key:"isCart",value:function(){return!!this.props.productR.carts.has(this.props.product.id)}},{key:"addBtnText",value:function(){return this.isCart()?l.a.createElement("i",{className:"fa fa-check"}):"ADD TO BAG"}},{key:"renderDetails",value:function(){var e=this;if(this.props.product)return l.a.createElement("div",{className:"detail-view"},l.a.createElement("img",{src:this.props.product.imgUrl?this.props.product.imgUrl:"",alt:""}),l.a.createElement("div",{className:"detail-info"},l.a.createElement("div",{className:"space"}),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"title"},this.props.product.name),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"more"},this.props.product.size),l.a.createElement("div",{className:"price"},this.props.product.price)),l.a.createElement("div",{className:"color-selection"},l.a.createElement("hr",null),l.a.createElement("div",{className:"color-selection-wrapper"},l.a.createElement("div",{className:"title"},"SELECT COLOR"),l.a.createElement("div",{className:"select-area"},l.a.createElement(me.a,{className:"item color-marble",type:"radio",name:"color",id:"marble",label:"MARBLE",onChange:this.changeColor}),l.a.createElement(me.a,{className:"item color-nude",type:"radio",name:"color",id:"nude",label:"NUDE",onChange:this.changeColor}),l.a.createElement(me.a,{className:"item color-charcoal",type:"radio",name:"color",id:"charcoal",label:"CHARCOAL",onChange:this.changeColor}))),l.a.createElement("hr",null)),l.a.createElement("div",{className:"add-to-blog"},this.state.color?l.a.createElement(je.a,{onClick:function(){return e.addCart(e.props.product.id)},className:this.isCart()?"success":""},l.a.createElement("div",{className:"textBtn"},this.addBtnText())):l.a.createElement(je.a,{disabled:!0,className:this.isCart()?"success":""},l.a.createElement("div",{className:"textBtn"},this.addBtnText()))),l.a.createElement("div",{className:"detail"},l.a.createElement("div",{className:"description-info"},"Designed in Paris, Plastic frame cat eye sunglasses with bright coloured geometirc shapes"),l.a.createElement("div",{className:"title"},"MATERIAL"),l.a.createElement("div",{className:"info"},"PLASTIC"),l.a.createElement("div",{className:"title"},"SHAPE"),l.a.createElement("div",{className:"info"},"ROUNDED SQUARE"),l.a.createElement("div",{className:"title"},"DIMENSIONS"),l.a.createElement("div",{className:"info"},"48 20 148"),l.a.createElement("div",{className:"see-btn"},l.a.createElement(je.a,{outline:!0},"SEE SIMILAR PRODUCTS"))),l.a.createElement("div",{className:"bottom-bar"},l.a.createElement("hr",null),l.a.createElement("div",{className:"left-item"},"HELF"),l.a.createElement("div",{className:"left-item"},"DELIVERY & RETURNS"),l.a.createElement("div",{className:"right-item"},"ABOUT EOLL")))))}},{key:"render",value:function(){return console.log(this.props.carts),l.a.createElement("div",null,this.renderDetails())}}]),t}(l.a.Component)),Se=Object(s.b)((function(e){return{product:e.default.services.product.currentProduct,productR:e.default.services.product}}),(function(e){return{cartAction:Object(u.b)({updateCarts:S},e)}}))(Ce),ye=(a(181),function(e){function t(e){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).call(this,e))}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(le,null),l.a.createElement("div",{className:"home-wrapper"},l.a.createElement(re.c,null,l.a.createElement(re.a,{path:"/",exact:!0,render:function(){return l.a.createElement(Ne,null)}}),l.a.createElement(re.a,{path:"/ladies",render:function(){return l.a.createElement(Ne,null)}}),l.a.createElement(re.a,{path:"/details",render:function(){return l.a.createElement(Se,null)}}))))}}]),t}(l.a.Component)),De=function(e){function t(){return Object(Z.a)(this,t),Object(ee.a)(this,Object(te.a)(t).apply(this,arguments))}return Object(ae.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(i.a,null,l.a.createElement(re.c,null,l.a.createElement(re.a,{path:"/",render:function(e){return l.a.createElement(ye,e)}}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(182),a(183);var Pe=document.querySelector("#root");Object(o.render)(l.a.createElement(s.a,{store:Q},l.a.createElement(i.b,null,l.a.createElement(De,null))),Pe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,a){e.exports=a(184)}},[[86,1,2]]]);
//# sourceMappingURL=main.d068da81.chunk.js.map
"use strict";(self.webpackChunkcar_rent=self.webpackChunkcar_rent||[]).push([[226],{6647:function(a,s,e){e(2791);s.Z=e.p+"static/media/symbol-defs.bb068d2edaa1f2c179ff3ecc52e6989e.svg"},9321:function(a,s,e){e.d(s,{Z:function(){return p}});var n="Modal_overlay__r63M6",r="Modal_modal__DJDMv",i="Modal_closebtn__6fsdE",c="Modal_icon__2UpwH",o=e(6647),l=e(2791),t=e(4164),d=e(184),m=document.querySelector("#modal-root"),p=function(a){var s=a.onClose,e=a.children;(0,l.useEffect)((function(){var a=function(a){"Escape"===a.code&&s()};return window.addEventListener("keydown",a),function(){return window.removeEventListener("keydown",a)}}),[s]);return(0,t.createPortal)((0,d.jsx)("div",{className:n,onClick:function(a){a.target===a.currentTarget&&s()},children:(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("div",{className:i,onClick:s,children:(0,d.jsx)("svg",{className:c,width:"18",height:"18",children:(0,d.jsx)("use",{href:"".concat(o.Z,"#icon-x")})})}),e]})}),m)}},9603:function(a,s,e){e.d(s,{Z:function(){return i}});var n={modalWrap:"ModalCard_modalWrap__hWyFc",imgCar:"ModalCard_imgCar__gM0jS",imageWrapper:"ModalCard_imageWrapper__HoFw+",infoWrap:"ModalCard_infoWrap__zqOVO",infoTopWrap:"ModalCard_infoTopWrap__NtLzG",infoBottomWrap:"ModalCard_infoBottomWrap__+YJfE",infoCar:"ModalCard_infoCar__HAxul",border:"ModalCard_border__f8lFW",nameCar:"ModalCard_nameCar__MEZvi",modelCar:"ModalCard_modelCar__XWVDN",carDescription:"ModalCard_carDescription__b7Q1r",carDetails:"ModalCard_carDetails__4tsAy",infoConditions:"ModalCard_infoConditions__zD8hx",conditionsTopWrap:"ModalCard_conditionsTopWrap__qFkTa",conditionsTextIn:"ModalCard_conditionsTextIn__7Epfj",condSapn:"ModalCard_condSapn__mtKxJ",conditionsText:"ModalCard_conditionsText__luROz",conditionsBottomWrap:"ModalCard_conditionsBottomWrap__GPBkA",buttonRent:"ModalCard_buttonRent__eRlTD",btnRentWrap:"ModalCard_btnRentWrap__buc3t"},r=e(184),i=function(a){var s=a.data,e=s.id,i=s.address,c=s.rentalCompany,o=s.year,l=s.type,t=s.photoLink,d=s.model,m=s.img,p=s.make,_=s.rentalPrice,u=s.accessories,x=s.fuelConsumption,h=s.engineSize,j=s.description,N=s.functionalities,f=s.rentalConditions,C=s.mileage,v=f.split("\n"),g=v[0].match(/\d+/),W=i.split(",");return(0,r.jsxs)("div",{className:n.modalWrap,children:[(0,r.jsx)("div",{className:n.imageWrapper,children:(0,r.jsx)("img",{src:"".concat(m||t),alt:d,className:n.imgCar})}),(0,r.jsxs)("p",{className:n.nameCar,children:[" ",p," ",(0,r.jsx)("span",{className:n.modelCar,children:d}),", ",(0,r.jsx)("span",{children:o})]}),(0,r.jsxs)("div",{className:n.infoWrap,children:[(0,r.jsxs)("div",{className:n.infoTopWrap,children:[(0,r.jsxs)("p",{className:n.infoCar,children:[W[1]," ",(0,r.jsx)("span",{className:n.border})]}),(0,r.jsxs)("p",{className:n.infoCar,children:[W[2]," ",(0,r.jsx)("span",{className:n.border})]}),(0,r.jsxs)("p",{className:n.infoCar,children:[c," ",(0,r.jsx)("span",{className:n.border})]}),(0,r.jsxs)("p",{className:n.infoCar,children:["Id: ",(0,r.jsx)("span",{children:e})," ",(0,r.jsx)("span",{className:n.border})]}),(0,r.jsxs)("p",{className:n.infoCar,children:["Year: ",(0,r.jsx)("span",{children:o})," ",(0,r.jsx)("span",{className:n.border})]}),(0,r.jsxs)("p",{className:n.infoCar,children:["Type: ",(0,r.jsx)("span",{children:l})]})]}),(0,r.jsxs)("div",{className:n.infoBottomWrap,children:[(0,r.jsxs)("p",{className:n.infoCar,children:["Fuel Consumption: ",(0,r.jsx)("span",{children:x})," ",(0,r.jsx)("span",{className:n.border})]}),(0,r.jsxs)("p",{className:n.infoCar,children:["Engine Size: ",(0,r.jsx)("span",{children:h})]})]})]}),(0,r.jsx)("p",{className:n.carDescription,children:j}),(0,r.jsx)("p",{className:n.carDetails,children:"Accessories and functionalities:"}),(0,r.jsxs)("div",{className:n.carDetailsWrap,children:[(0,r.jsx)("div",{className:n.infoTopWrap,children:u.map((function(a){return(0,r.jsxs)("p",{className:n.infoCar,children:[a," ",(0,r.jsx)("span",{className:n.border})]},a)}))}),(0,r.jsx)("div",{className:n.infoBottomWrap,children:N.map((function(a){return(0,r.jsxs)("p",{className:n.infoCar,children:[a," ",(0,r.jsx)("span",{className:n.border})]},a)}))})]}),(0,r.jsx)("p",{className:n.infoConditions,children:"Rental Conditions: "}),(0,r.jsxs)("div",{className:n.conditionsTopWrap,children:[(0,r.jsxs)("p",{className:n.conditionsTextIn,children:["Minimum age : ",(0,r.jsx)("span",{className:n.condSapn,children:g[0]})]}),(0,r.jsx)("p",{className:n.conditionsText,children:v[1]}),(0,r.jsx)("p",{className:n.conditionsText,children:v[2]})]}),(0,r.jsxs)("div",{className:n.conditionsBottomWrap,children:[(0,r.jsx)("p",{className:n.conditionsText,children:"Security deposite required"}),(0,r.jsxs)("p",{className:n.conditionsText,children:["Mileage: ",(0,r.jsx)("span",{className:n.condSapn,children:C})]}),(0,r.jsxs)("p",{className:n.conditionsText,children:["Price: ",(0,r.jsx)("span",{className:n.condSapn,children:_})]})]}),(0,r.jsx)("div",{className:n.btnRentWrap,children:(0,r.jsx)("a",{href:"tel:+380730000000",className:n.buttonRent,children:"Rental car"})})]},e)}},226:function(a,s,e){e.r(s),e.d(s,{default:function(){return T}});var n=e(9439),r="Favourite_wrapper__j3ONm",i="Favourite_imageGallery__uEwNX",c="Favourite_imageGalleryItem__2O6eM",o="Favourite_imageGalleryItemImg__Xv7OB",l="Favourite_btnFav__PW3YA",t="Favourite_cardTitle__5vqNh",d="Favourite_cardTitleSpan__47K+y",m="Favourite_cardTitleSpanBlue__G5+e2",p="Favourite_cardTitleSpanPrice__ts7wF",_="Favourite_cardTitleWrap__1iFhI",u="Favourite_carInfoWrap__UqNiO",x="Favourite_delimeter__axNLN",h="Favourite_carInfo__lLPdI",j="Favourite_carInfoBottomWrap__iX0io",N="Favourite_cardBtnLearnMore__+ldCu",f="Favourite_title__8Y+u3",C=e(2791),v=e(5984),g=e(9321),W=e(9603),M=e(6647),b=e(184);function T(){var a=(0,C.useState)([]),s=(0,n.Z)(a,2),e=s[0],T=s[1],y=(0,C.useState)(!1),F=(0,n.Z)(y,2),S=F[0],k=F[1],w=(0,C.useState)(""),I=(0,n.Z)(w,2),B=I[0],D=I[1];(0,C.useEffect)((function(){T(JSON.parse(localStorage.getItem("items")))}),[]);return(0,b.jsxs)("div",{className:r,children:[(0,b.jsx)("h1",{className:f,children:" My Favourite"}),(0,b.jsx)("ul",{className:i,children:e&&e.map((function(a){var s=a.id,n=a.address,r=a.rentalCompany,i=a.year,f=a.type,C=a.model,g=a.img,W=a.make,y=a.rentalPrice,F=a.accessories,S=a.photoLink,w=n.replace(/[,]/g,"").split(" ").splice(-2),I=(0,v.x0)();return(0,b.jsxs)("li",{className:c,children:[(0,b.jsx)("img",{className:o,src:"".concat(g||S),alt:C}),(0,b.jsxs)("h3",{className:t,children:[(0,b.jsxs)("div",{className:_,children:[(0,b.jsx)("span",{className:d,children:W}),(0,b.jsxs)("span",{className:m,children:[C,","]}),(0,b.jsx)("span",{className:d,children:i})]}),(0,b.jsx)("span",{className:p,children:y})]}),(0,b.jsxs)("div",{className:u,children:[(0,b.jsxs)("span",{className:h,children:[w[0],"  "]}),(0,b.jsx)("span",{className:x}),(0,b.jsxs)("span",{className:h,children:[w[1],"  "]}),(0,b.jsx)("span",{className:x}),(0,b.jsx)("span",{className:h,children:r}),(0,b.jsx)("span",{className:x})]}),(0,b.jsxs)("div",{className:j,children:[(0,b.jsx)("span",{className:h,children:f}),(0,b.jsx)("span",{className:x}),(0,b.jsx)("span",{className:h,children:s}),(0,b.jsx)("span",{className:x}),(0,b.jsx)("span",{className:h,children:F[0]}),(0,b.jsx)("span",{className:x})]}),(0,b.jsx)("button",{type:"button",className:N,onClick:function(){return function(a){k(!0);var s=e.find((function(s){return s.id===a}));D(s)}(s)},children:"Learn more"}),(0,b.jsx)("button",{type:"button",onClick:function(){return function(a){T(e.filter((function(s){return s.id!==a}))),localStorage.setItem("items",JSON.stringify(e))}(s)},className:l,children:(0,b.jsx)("svg",{width:"18",height:"18",children:(0,b.jsx)("use",{href:"".concat(M.Z,"#icon-heart")})})})]},I)}))}),S&&(0,b.jsx)(g.Z,{onClose:function(){k(!1)},children:(0,b.jsx)(W.Z,{data:B})})]})}},5984:function(a,s,e){e.d(s,{x0:function(){return n}});var n=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(a)).reduce((function(a,s){return a+=(s&=63)<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=226.bc7d56e8.chunk.js.map
"use strict";(self.webpackChunkcar_rent=self.webpackChunkcar_rent||[]).push([[226],{226:function(e,n,r){r.r(n),r.d(n,{default:function(){return m}});var t=r(9439),a="Favourite_wrapper__j3ONm",s="Favourite_imageGallery__uEwNX",i="Favourite_imageGalleryItem__2O6eM",c="Favourite_imageGalleryItemImg__Xv7OB",l="Favourite_btnFav__PW3YA",o="Favourite_title__8Y+u3",u=r(2791),p=r(5984),d=r(184);function m(){var e=(0,u.useState)([]),n=(0,t.Z)(e,2),r=n[0],m=n[1];(0,u.useEffect)((function(){m(JSON.parse(localStorage.getItem("items")))}),[]),console.log("\u043d\u0430 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445:",r);return(0,d.jsxs)("div",{className:a,children:[(0,d.jsx)("h1",{className:o,children:" My Favourite"}),(0,d.jsx)("ul",{className:s,children:r&&r.map((function(e){var n=e.id,t=e.address,a=e.rentalCompany,s=e.year,o=e.type,u=e.model,h=e.img,_=e.make,f=e.rentalPrice,x=e.accessories,g=e.photoLink,j=t.replace(/[,]/g,"").split(" ").splice(-2),v=(0,p.x0)();return(0,d.jsxs)("li",{className:i,children:[(0,d.jsx)("img",{className:c,src:"".concat(h||g),alt:u}),(0,d.jsx)("span",{children:_}),(0,d.jsx)("span",{children:u}),(0,d.jsx)("span",{children:s}),(0,d.jsx)("span",{children:f}),(0,d.jsx)("span",{children:j.splice(0)}),(0,d.jsx)("span",{children:j.splice(1)}),(0,d.jsx)("span",{children:a}),(0,d.jsx)("span",{children:o}),(0,d.jsx)("span",{children:n}),(0,d.jsx)("span",{children:x[0]}),(0,d.jsx)("button",{type:"button",onClick:function(){return function(e){m(r.filter((function(n){return n.id!==e}))),localStorage.setItem("items",JSON.stringify(r)),console.log("\u043f\u043e\u0441\u043b\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0438\u0437 \u0438\u0437\u0431\u0440:",r)}(n)},className:l,children:" button"})]},v)}))})]})}},5984:function(e,n,r){r.d(n,{x0:function(){return t}});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=226.ecfe05fb.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),i=(n(13),n(1));n(15);function o(){return c.a.createElement("header",null,c.a.createElement("nav",null,c.a.createElement("span",null,"Website Logo"),c.a.createElement(u,{query:"(min-width: 800px)"})))}var u=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),r=n[0],l=n[1];return Object(a.useEffect)(function(){var t=window.matchMedia(e.query);window.addEventListener("resize",function(){t.matches&&l(!1)})},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"button-container",onClick:function(){l(!0!==r)}},c.a.createElement("div",{className:"menu-button ".concat(!0===r&&"hide")}),c.a.createElement("div",{className:"close-button ".concat(!1===r&&"hide")})),c.a.createElement(m,{className:r?"":"hide",itemNos:[1,2,3,4]}))},m=function(e){return c.a.createElement("ul",{id:"menu",className:e.className},e.itemNos.map(function(e){return c.a.createElement("li",{key:e},"item ",e)}))};function s(){var e=Object(a.useState)("Welcome Message"),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"welcome",onClick:function(){r("Have a Good Time!")}},c.a.createElement("h1",null,n)),c.a.createElement(d,null))}var d=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("h2",{id:"sectionTitle"},"Section Title"),c.a.createElement(E,{className:"box",orders:[1,2,3,4]}),c.a.createElement("div",{id:"actionBtn-container"},c.a.createElement("button",{onClick:function(){return r(!0)}},"Call to Action")),c.a.createElement(E,{className:"box ".concat(!1===n&&"hide"),orders:[5,6,7,8]}))},E=function(e){return c.a.createElement("div",{className:"gridContainer"},e.orders.map(function(t){return c.a.createElement("div",{className:e.className,key:t},"content box ",t)}))};var f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(o,null),c.a.createElement(s,null))},v=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,19)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(f,null)),v()},4:function(e,t,n){e.exports=n(18)}},[[4,3,2]]]);
//# sourceMappingURL=main.d70858ef.chunk.js.map
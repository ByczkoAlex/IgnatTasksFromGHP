(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports={nav:"Nav_nav__2gE1m",item:"Nav_item__3shUb",active:"Nav_active__1gUWp",mainmenubtn:"Nav_mainmenubtn__3Wz5O",dropdown:"Nav_dropdown__24smM","dropdown-child":"Nav_dropdown-child__3xaMH"}},15:function(e,t,a){e.exports={buttonNya:"Hi_buttonNya__2zwH8",inputNya:"Hi_inputNya__3UMqT",wrapper:"Hi_wrapper__Slemk"}},18:function(e,t,a){e.exports={reviews:"message_reviews__2REDO",comment:"message_comment__Oyefs",comment_bubble:"message_comment_bubble__3Vqty",author:"message_author__14W2x",comment_text:"message_comment_text__QR1IE",time:"message_time___tpIn"}},26:function(e,t,a){e.exports={text:"myName_text__2PqoK",text_area:"myName_text_area__2-RJQ"}},38:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),i=(a(43),a(44),a(14)),o=a(3),u=a(35),m=a(11),s=a(15),E=a.n(s),d=a(67),v=a(68),p=a(65),_=a(66);function f(){return l.a.createElement("input",{type:"checkbox",id:"one"})}function b(e){return l.a.createElement("button",Object.assign({className:E.a.buttonNya,onClick:e.onKeyPressSayHello},e),"Press")}var h=a(36);function N(e){var t=e.onEnter,a=e.error,n=Object(h.a)(e,["onEnter","error"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",Object.assign({className:E.a.inputNya,onKeyPress:function(a){13===a.charCode&&(t&&t(),e.onKeyPressSayHello&&e.onKeyPressSayHello(a))},onChange:e.onTitleChange},n,{type:"text",onBlur:e.deActivateEditMode,value:e.title})),a?l.a.createElement("span",null,a):null)}function w(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2),o=i[0],s=i[1],h=function(e){!function(){""!==a.trim()&&alert("Hi "+a),r("");var e=[].concat(Object(u.a)(o),[{name:a,id:Object(d.a)()}]);s(e)}()};return l.a.createElement("div",{className:E.a.wrapper},l.a.createElement(v.a,{fixed:!0},l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(p.a,{container:!0,xs:3},l.a.createElement(_.a,null,l.a.createElement("div",null,l.a.createElement(N,{onTitleChange:function(e){return r(e.currentTarget.value)},onKeyPressSayHello:h})))),l.a.createElement(p.a,{container:!0,xs:3},l.a.createElement(_.a,null,l.a.createElement("div",null,l.a.createElement(b,{onKeyPressSayHello:h})))),l.a.createElement(p.a,{container:!0,xs:3},l.a.createElement(_.a,null,l.a.createElement("div",null,l.a.createElement("span",null)),l.a.createElement("div",null,l.a.createElement(f,null))))),l.a.createElement(p.a,{container:!0,xs:3},l.a.createElement(_.a,null,l.a.createElement("div",null,o.map((function(e){return l.a.createElement("div",null,e.name)}))))))))}function y(){var e=Object(n.useState)([{id:1,n:"\u0440\u0430\u0431\u043e\u0442\u0430 :",p:"hight"},{id:2,n:"\u0430\u043d\u0438\u043c\u0435 :",p:"low"},{id:3,n:"\u0438\u0433\u0440\u044b :",p:"middle"},{id:4,n:"\u0440\u0435\u0430\u043a\u0442 :",p:"hight"},{id:5,n:"\u0445\u0442\u043c\u043b :",p:"low"}]),t=Object(m.a)(e,2),a=t[0],r=t[1];var c=Object(n.useState)("all"),i=Object(m.a)(c,2),o=i[0],u=i[1],s=a;function E(e){u(e)}"hight"===o&&(s=a.filter((function(e){return"hight"===e.p}))),"middle"===o&&(s=a.filter((function(e){return"middle"===e.p}))),"low"===o&&(s=a.filter((function(e){return"low"===e.p})));var d=s.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("span",null,e.n),l.a.createElement("span",null,e.p),l.a.createElement("button",{onClick:function(){!function(e){var t=a.filter((function(t){return t.id!==e}));r(t)}(e.id)}},"X"))}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h3",null,"My Hobbies")),l.a.createElement("ul",null,d),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){E("hight")}},"hight"),l.a.createElement("button",{onClick:function(){E("middle")}},"middle"),l.a.createElement("button",{onClick:function(){E("low")}},"low"),l.a.createElement("button",{onClick:function(){E("all")}},"all"))))}var g=a(18),j=a.n(g);var x=function(){return l.a.createElement("div",{id:"reviews"},l.a.createElement("div",{className:j.a.comment},l.a.createElement("div",{className:j.a.comment_bubble},l.a.createElement("p",{className:j.a.author},"Lourens S."),l.a.createElement("p",{className:j.a.comment_text},"Porro officia cumque sint deleniti nemo facere rem vitae odit inventore cum odio, iste quia doloribus autem aperiam nulla ea neque reprehenderit. Libero doloribus, possimus officiis sapiente necessitatibus commodi consectetur?"),l.a.createElement("p",{className:j.a.time},"12:43"))))},O=a(26),C=a.n(O);function S(e){return l.a.createElement("div",{className:C.a.text_area},l.a.createElement("p",{className:C.a.text}," ",e.one," ",e.two," ",e.three))}var k=function(){return l.a.createElement("div",null,l.a.createElement(S,{one:"\u0411\u044b\u0446\u043a\u043e",two:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",three:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447"}))};function P(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(k,null)),l.a.createElement("div",null,l.a.createElement(w,null)),l.a.createElement("div",null,l.a.createElement(y,null)),l.a.createElement("div",null,l.a.createElement(x,null)))}function H(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(e.value),o=Object(m.a)(i,2),u=o[0],s=o[1];return r?l.a.createElement(N,{title:u,onTitleChange:function(e){s(e.currentTarget.value)},deActivateEditMode:function(){c(!1),e.saveNewTitle(u)}}):l.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.value)}function J(){var e=Object(n.useState)("justdoit"),t=Object(m.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,"Junior",l.a.createElement("div",null,l.a.createElement(H,{value:a,saveNewTitle:function(e){r(e)}})))}function T(){return l.a.createElement("div",null,"JuniorPlus")}var K=a(13),M=a.n(K);function q(){return l.a.createElement("div",{className:M.a.nav},l.a.createElement("nav",null,l.a.createElement("div",{className:"".concat(M.a.item," ").concat(M.a.active)},l.a.createElement(i.b,{to:"/prejunior",activeClassName:M.a.active},"Prejunior")),l.a.createElement("div",{className:M.a.item},l.a.createElement(i.b,{to:"/junior",activeClassName:M.a.active},"Junior")),l.a.createElement("div",{className:M.a.item},l.a.createElement(i.b,{to:"/JuniorPlus",activeClassName:M.a.active},"Junior+"))))}var W=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(q,null)),l.a.createElement("div",null,l.a.createElement(o.a,{path:"/prejunior",component:P}),l.a.createElement(o.a,{path:"/junior",component:J}),l.a.createElement(o.a,{path:"/juniorPlus",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.c945fa11.chunk.js.map
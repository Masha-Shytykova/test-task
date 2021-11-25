(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{82:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var i,a=t(0),c=t.n(a),r=t(7),l=t.n(r),s=t(50),o=t(20),d=[{id:"Total Performance 1",title:"Dow Jones Industrial Average",allocations:[{value:"100%",title:"Dow Jones Industrial Average",security:!1}],indices:[{period:"1 YR",value:"+27.71"},{period:"5 YR",value:"+27.71"},{period:"10 YR",value:"+27.71"}]},{id:"Total Performance 2",title:"Private Label Domestic Growth",allocations:[{value:"20%",title:"APPL",security:!0},{value:"20%",title:"CTXS",security:!0},{value:"20%",title:"DELL",security:!0},{value:"20%",title:"Dow Jones",security:!1},{value:"20%",title:"NASDAQ",security:!1}],indices:[{period:"1 YR",value:"+27.71"},{period:"5 YR",value:"+27.71"},{period:"10 YR",value:"+27.71"}]},{id:"Total Performance 3",title:"Private Label Value",allocations:[{value:"10%",title:"APPL",security:!0},{value:"10%",title:"CTXS",security:!0},{value:"10%",title:"DELL",security:!0},{value:"10%",title:"GOOGL",security:!0},{value:"10%",title:"IBM",security:!0},{value:"10%",title:"Dow Jones",security:!1},{value:"10%",title:"FTSE 100 Index",security:!1},{value:"10%",title:"FTSE 250 Index",security:!1},{value:"20%",title:"NASDAQ",security:!1}],indices:[{period:"1 YR",value:"+27.71"},{period:"5 YR",value:"+27.71"},{period:"10 YR",value:"+27.71"}]}],p=t.p+"static/media/sprite.b8f148a9.svg",b=t(1),x=function(n){var e=n.icon,t=n.width,i=void 0===t?"15px":t,a=n.height,c=void 0===a?"15px":a;return Object(b.jsx)("svg",{width:i,height:c,children:Object(b.jsx)("use",{href:p+e})})},u=t(11),h=t(12),j=h.a.div(i||(i=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: rgba(24, 28, 39, 0.25);\n  z-index: 1200;\n\n  .modal {\n    position: relative;\n    overflow-x: auto;\n    height: 100%;\n    width: 530px;\n    padding: 60px 20px;\n    background-color: #fff;\n    transform: translateX(100%);\n\n    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:hover .modal,\n  &:focus .modal {\n    transform: translateX(0);\n  }\n\n  .closeBtn {\n    position: absolute;\n    right: 20px;\n    top: 60px;\n    border: none;\n    background-color: transparent;\n  }\n"]))),m=document.querySelector("#modal-root");var f,g=function(n){var e=n.closeModal,t=n.children;function i(n){"Escape"===n.code&&e()}return Object(a.useEffect)((function(){return window.addEventListener("keydown",i),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",i),document.body.style.overflow=""}}),[]),Object(r.createPortal)(Object(b.jsx)(j,{onClick:function(n){n.currentTarget===n.target&&e()},children:Object(b.jsxs)("div",{className:"modal",children:[Object(b.jsx)("button",{onClick:function(){e()},type:"button","aria-label":"close-button",className:"closeBtn",children:Object(b.jsx)(x,{icon:"#icon-cross",width:"15px",height:"15px"})}),t]})}),m)},O=t(41),v=h.a.div(f||(f=Object(u.a)(['\n  .formTitle {\n    margin-bottom: 20px;\n\n    font-size: 20px;\n    font-weight: 500;\n\n    &:after {\n      content: "";\n      margin-top: 15px;\n      background-color: rgb(197, 194, 194);\n      height: 2px;\n      display: block;\n    }\n  }\n\n  .formDescription {\n    line-height: 1.3;\n    font-size: 12px;\n  }\n\n  .formContainer {\n    padding: 0 12px;\n  }\n\n  .colorWrapper {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n    padding: 7px;\n    border-bottom: 1px solid grey;\n    background-color: rgb(237, 234, 234);\n  }\n  .label {\n    font-size: 10px;\n    margin-bottom: 5px;\n    padding-left: 2px;\n  }\n\n  .benchmarkId {\n    width: 100%;\n    background-color: transparent;\n    border: none;\n    font-size: 14px;\n\n    &:hover,\n    &:focus {\n      border: none;\n    }\n  }\n  .input {\n    width: 100%;\n    background-color: transparent;\n    border: none;\n    font-size: 14px;\n  }\n\n  .validationRules {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 10px;\n    font-size: 10px;\n    color: grey;\n  }\n\n  .inputWrapperSmall {\n    width: 30%;\n    margin-left: auto;\n  }\n  .colorWrapperSmall {\n    display: flex;\n    padding: 10px;\n    border-bottom: 1px solid grey;\n    background-color: rgb(237, 234, 234);\n  }\n\n  .indexRow {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-top: 20px;\n  }\n\n  .pagination {\n    margin-right: 25px;\n  }\n  .noColorWrapperSmall {\n    display: flex;\n    margin-top: 10px;\n    padding: 10px;\n    border-bottom: 1px solid grey;\n    font-weight: 700;\n  }\n  .justifyCenter {\n    justify-content: center;\n  }\n  .inputBold {\n    font-weight: 700;\n  }\n  .indicesMenu {\n    display: flex;\n    align-items: center;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    font-size: 14px;\n  }\n  .searchDescription {\n    padding: 10px;\n    font-size: 12px;\n    text-transform: uppercase;\n    color: grey;\n  }\n  .deleteBtn {\n    position: absolute;\n    top: 0;\n    right: -34px;\n  }\n  .searchWrapper {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n  }\n\n  .addBtn {\n    color: #3f51b5;\n    border: 1px solid #3f51b5;\n  }\n  .buttonsWrapper {\n    display: flex;\n    justify-content: end;\n  }\n  .cancelButton {\n    margin-right: 15px;\n  }\n  .MuiButton-root {\n    text-transform: none;\n    font-weight: 400;\n  }\n']))),y=t(120),w=t(121),N=t(62),k=t.n(N),C=t(64),S=t.n(C),D=t(63),z=t.n(D),T=t(116),I=t(127),B=t(118),L=t(124),M=t(61),R=t.n(M),P=Object(T.a)((function(n){return Object(I.a)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:370,borderRadius:8,borderColor:"grey"},input:{marginLeft:n.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})}));function W(){var n=P();return Object(b.jsxs)(B.a,{component:"div",className:n.root,variant:"outlined",children:[Object(b.jsx)(y.a,{type:"submit",className:n.iconButton,"aria-label":"search",children:Object(b.jsx)(R.a,{})}),Object(b.jsx)(L.a,{className:n.input,placeholder:"Search for an Index or Security",inputProps:{"aria-label":"Search for an Index or Security"}})]})}var A,F=function(n){var e=n.benchmarksData,t=n.closeModal,i=n.onSubmit,c=Object(a.useState)(e[0]),r=Object(o.a)(c,2),l=r[0],s=r[1],d=function(n){console.log(n);var e=n.currentTarget,t=e.name,i=e.value;"title"===t&&s((function(n){return Object(O.a)(Object(O.a)({},n),{},{title:i})}))};return Object(b.jsxs)(v,{children:[Object(b.jsx)("h3",{className:"formTitle",children:"Add a New Benchmark"}),Object(b.jsx)("p",{className:"formDescription",children:"A benchmark can be made up of one or more indices, securities or a combination of both. It can be assigned to an empty slot, a slot in use or be not assigned. For a slot in use it will replace that benchmark which will then be changed to not assigned."}),Object(b.jsxs)("form",{className:"formContainer",onSubmit:function(n){n.preventDefault(),i(l),s(e[0]),t()},children:[Object(b.jsxs)("div",{className:"colorWrapper",children:[Object(b.jsx)("label",{className:"label",htmlFor:"benchmarkId",children:"Assign To*"}),Object(b.jsx)("select",{className:"benchmarkId",id:"benchmarkId",name:"id",onChange:function(n){s((function(e){return Object(O.a)(Object(O.a)({},e),{},{id:n.currentTarget.value})}))},value:l.id,children:e.map((function(n){var e=n.id;return Object(b.jsx)("option",{value:e,children:e},e)}))})]}),Object(b.jsxs)("div",{className:"inputWrapper",children:[Object(b.jsxs)("div",{className:"colorWrapper",children:[Object(b.jsx)("label",{className:"label",htmlFor:"benchmarkTitle",children:"Name*"}),Object(b.jsx)("input",{className:"input",id:"benchmarkTitle",type:"text",name:"title",value:l.title,required:!0,onChange:d})]}),Object(b.jsxs)("div",{className:"validationRules",children:[Object(b.jsx)("span",{children:"Only Alpha Numeric"}),Object(b.jsxs)("span",{className:"validationResult",children:[l.title.length,"/ 50"]})]})]}),Object(b.jsxs)("div",{className:"indexRow",children:[Object(b.jsx)("div",{className:"pagination",children:"--"}),Object(b.jsxs)("div",{className:"inputWrapper",children:[Object(b.jsx)("label",{className:"label",htmlFor:"indexTitle",children:"Index"}),Object(b.jsx)("input",{className:"input",id:"indexTitle",type:"text",name:"title",value:l.allocations[0].title,onChange:d})]}),Object(b.jsxs)("div",{className:"inputWrapperSmall",children:[Object(b.jsxs)("div",{className:"colorWrapperSmall",children:[Object(b.jsx)("input",{className:"input",id:"indexValue",name:"title",value:l.allocations[0].value.slice(0,-1),onChange:function(){}}),Object(b.jsx)("label",{htmlFor:"indexValue",children:"%"})]}),Object(b.jsxs)("div",{className:"validationRules",children:[Object(b.jsx)("span",{children:"Numeric "}),Object(b.jsxs)("span",{children:[l.allocations[0].value.length-1,"/3"]})]})]}),Object(b.jsx)(y.a,{"aria-label":"delete",className:"deleteBtn",children:Object(b.jsx)(k.a,{fontSize:"small"})})]}),Object(b.jsxs)("div",{className:"inputWrapperSmall",children:[Object(b.jsxs)("div",{className:"noColorWrapperSmall",children:[Object(b.jsx)("input",{className:"input inputBold ",id:"sumIndexValue",name:"title",value:"100",onChange:function(){}}),Object(b.jsx)("label",{htmlFor:"sumIndexValue",children:"%"})]}),Object(b.jsx)("span",{className:"validationRules justifyCenter",children:"Must total 100%"})]}),Object(b.jsxs)("div",{className:"indicesMenu",children:[Object(b.jsx)(z.a,{}),"View Available Indices"]}),Object(b.jsx)("p",{className:"searchDescription",children:"add a component to this benchmark"}),Object(b.jsxs)("div",{className:"searchWrapper",children:[Object(b.jsx)(W,{}),Object(b.jsx)(y.a,{"aria-label":"add",className:"addBtn",children:Object(b.jsx)(S.a,{})})]}),Object(b.jsxs)("div",{className:"buttonsWrapper",children:[Object(b.jsx)(w.a,{variant:"outlined",color:"primary",onClick:t,className:"cancelButton",children:"Cancel"}),Object(b.jsx)(w.a,{variant:"contained",color:"primary",type:"submit",size:"large",children:"Save Benchmark"})]})]})]})},E=h.a.li(A||(A=Object(u.a)(["\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  font-size: 14px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n\n  .firstColumn {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 20%;\n    height: 100%;\n  }\n\n  .verticalDivider {\n    position: relative;\n    padding-right: 30px;\n    height: 50px;\n  }\n\n  .line {\n    width: 100%;\n  }\n  .text1 {\n    position: absolute;\n    top: 50%;\n    font-size: 12px;\n    font-weight: 700;\n    background: #fff;\n    color: rgba(0, 0, 0, 0.12);\n    transform: translateY(-50%) rotate(-90deg);\n  }\n  .secondColumn {\n    display: flex;\n    align-items: center;\n    width: 25%;\n    height: 50px;\n  }\n\n  //////////////////////// thirdColumn\n  .thirdColumn {\n    width: 33%;\n  }\n\n  .groupTitle {\n    text-transform: uppercase;\n    font-size: 10px;\n    font-weight: 600;\n    color: #9db658;\n  }\n  .allocationsList {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 3px;\n  }\n  .allocationsItem {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //flex-basis: calc(100% / 5 - 3px);\n    width: 55px;\n    margin-right: 3px;\n    margin-bottom: 5px;\n    font-size: 10px;\n    font-weight: 600;\n    text-align: center;\n  }\n\n  .index {\n    width: 100%;\n    height: 22px;\n    line-height: 22px;\n    border: 1px solid rgb(197, 194, 194);\n  }\n\n  .security {\n    width: 100%;\n    height: 22px;\n    line-height: 22px;\n    background-color: rgb(197, 194, 194);\n  }\n  .allocationTitle {\n    width: 100%;\n    margin-top: 3px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    word-break: break-all;\n  }\n\n  //////////////////////// fourthColumn\n  .fourthColumn {\n    width: 17%;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .indicesList {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    width: 100%;\n  }\n\n  .indicesItem {\n    display: flex;\n    flex-direction: column;\n\n    align-items: flex-end;\n    flex-basis: calc(100% / 3 - 5px);\n    margin-left: 5px;\n  }\n\n  .indexPeriod {\n    margin-bottom: 7px;\n    text-transform: uppercase;\n    font-size: 10px;\n    font-weight: 600;\n    color: #9db658;\n  }\n\n  .fifthColumn {\n    width: 5%;\n  }\n\n  .MuiIconButton-root:hover {\n    background-color: transparent;\n  }\n  .divider {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 80%;\n    margin-left: auto;\n  }\n"]))),Y=t(122),V=t(65),J=t.n(V),X=t(123),G=t(128);function q(n){var e=n.openModal,t=c.a.useState(null),i=Object(o.a)(t,2),a=i[0],r=i[1],l=function(){r(null)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(y.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(n){r(n.currentTarget)},children:Object(b.jsx)(J.a,{})}),Object(b.jsxs)(X.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:l,children:[Object(b.jsx)(G.a,{onClick:function(){r(null),e()},children:"Edit"}),Object(b.jsx)(G.a,{onClick:l,children:"Delete"})]})]})}var Q,H=function(n){var e=n.id,t=n.title,i=n.allocations,a=n.indices,c=n.openModal;return Object(b.jsxs)(E,{children:[Object(b.jsxs)("div",{className:"firstColumn",children:[Object(b.jsx)("div",{children:e}),Object(b.jsxs)("div",{className:"verticalDivider",children:[Object(b.jsx)(Y.a,{orientation:"vertical"}),Object(b.jsx)("div",{className:"text1",children:"v"})]})]}),Object(b.jsx)("div",{className:"secondColumn",children:t}),Object(b.jsxs)("div",{className:"thirdColumn",children:[Object(b.jsx)("span",{className:"groupTitle",children:"allocations"}),Object(b.jsx)("ul",{className:"allocationsList",children:i.map((function(n){var e=n.value,t=n.title,i=n.security;return Object(b.jsxs)("li",{className:"allocationsItem",children:[Object(b.jsx)("span",{className:i?"security":"index",children:e}),Object(b.jsx)("span",{className:"allocationTitle",children:t})]},t)}))})]}),Object(b.jsx)("div",{className:"fourthColumn",children:Object(b.jsx)("ul",{className:"indicesList",children:a.map((function(n){var e=n.period,t=n.value;return Object(b.jsxs)("li",{className:"indicesItem",children:[Object(b.jsx)("span",{className:"indexPeriod",children:e}),Object(b.jsx)("span",{className:"indexValue",children:t})]},e)}))})}),Object(b.jsx)("div",{className:"fifthColumn",children:Object(b.jsx)(q,{openModal:c})}),Object(b.jsx)(Y.a,{variant:"inset",className:"divider"})]})},K=h.a.div(Q||(Q=Object(u.a)(['\n  .descriptionContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-left: 45%;\n    margin-right: 5%;\n  }\n  .wrapper {\n    display: flex;\n    align-items: center;\n  }\n\n  .indexDescription {\n    font-size: 10px;\n    &:not(:last-child) {\n      margin-right: 15px;\n    }\n  }\n\n  .indexDescription-first::before {\n    content: "";\n    margin-right: 7px;\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    cursor: pointer;\n    background-color: rgb(197, 194, 194);\n  }\n  .indexDescription-second::before {\n    content: "";\n    margin-right: 7px;\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    cursor: pointer;\n    border: 1px solid rgb(197, 194, 194);\n  }\n\n  /* .label {\n    font-size: 10px;\n\n    &:not(:last-child) {\n      margin-right: 15px;\n    }\n\n    &::before {\n      content: "";\n      margin-right: 7px;\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      cursor: pointer;\n      border-radius: 1px;\n      background-color: red;\n      //background-image: url(\'../images/backgroundicon/check.svg\');\n    }\n  }\n\n  .checkbox {\n    height: 0;\n    width: 0;\n    appearance: none;\n\n    &:not(:last-child) {\n      border: none;\n    }\n\n    &:checked + .label::before {\n      background-color: #3f51b5;\n    }\n  } */\n\n  .listDescription {\n    font-size: 10px;\n  }\n\n  .list li:last-child .divider {\n    display: none;\n  }\n'])));var U,Z,$,_,nn,en,tn,an,cn,rn,ln,sn,on=function(n){var e=n.benchmarksData,t=n.openModal;return Object(b.jsxs)(K,{children:[Object(b.jsxs)("div",{className:"descriptionContainer",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("span",{className:"indexDescription indexDescription-first",children:"Security"}),Object(b.jsx)("span",{className:"indexDescription indexDescription-second",children:"Index"})]}),Object(b.jsx)("span",{className:"listDescription",children:"5 YR & 10 YR are annualized"})]}),Object(b.jsx)("ul",{className:"list",children:e.map((function(n){var e=n.id,i=n.title,a=n.allocations,c=n.indices;return Object(b.jsx)(H,{id:e,title:i,allocations:a,indices:c,openModal:t},e)}))})]})},dn=h.a.div(U||(U=Object(u.a)(["\n  padding: 30px 20px;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.3);\n"]))),pn=h.a.div(Z||(Z=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n\n  .MuiFormControlLabel-label {\n    font-size: 12px;\n  }\n"]))),bn=h.a.h2($||($=Object(u.a)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),xn=h.a.p(_||(_=Object(u.a)(["\n  margin-bottom: 20px;\n  line-height: 1.4;\n  font-size: 12px;\n"]))),un=h.a.span(nn||(nn=Object(u.a)(["\n  margin-right: 20px;\n  font-size: 14px;\n"]))),hn=h.a.button(en||(en=Object(u.a)(["\n  width: 100px;\n  padding: 5px;\n  font-size: 10px;\n  border: 1px solid #5c5cfa;\n  border-radius: 5px;\n  color: #5c5cfa;\n  fill: #5c5cfa;\n"]))),jn=h.a.span(tn||(tn=Object(u.a)(["\n  margin-left: 5px;\n"]))),mn=t(125),fn=t(126),gn=function(){var n=Object(a.useState)(!1),e=Object(o.a)(n,2),t=e[0],i=e[1],c=Object(a.useState)(!0),r=Object(o.a)(c,2),l=r[0],p=r[1],u=Object(a.useState)(Object(s.a)(d)),h=Object(o.a)(u,2),j=h[0],m=h[1],f=function(){i((function(n){return!n}))};return Object(b.jsxs)(dn,{children:[Object(b.jsxs)(pn,{children:[Object(b.jsx)(bn,{children:"Total Performance Benchmarks"}),Object(b.jsx)(mn.a,{className:"label",control:Object(b.jsx)(fn.a,{checked:!0===l,onChange:function(){p((function(n){return!n}))},size:"small",name:"checkedB",color:"primary"}),label:"Enabled"})]}),Object(b.jsxs)(xn,{children:["These are comparative defaults that appear anywhere that total performance for households or selected accounts are displayed. See an example of how these will be displayed when your have"," ",Object(b.jsx)("a",{href:"../../../public/index.html",children:"benchmarks assigned and enabled"}),"."]}),Object(b.jsxs)(un,{children:[j.length," of 3 Assigned"]}),Object(b.jsxs)(hn,{type:"button",onClick:f,children:[Object(b.jsx)(x,{icon:"#icon-plus",width:"7px",height:"7px"}),Object(b.jsx)(jn,{children:"Add New"})]}),l&&Object(b.jsx)(on,{benchmarksData:j,openModal:f}),t&&Object(b.jsx)(g,{closeModal:f,children:Object(b.jsx)(F,{benchmarksData:j,closeModal:f,onSubmit:function(n){var e=j.map((function(e){return e.id===n.id?n:e}));m(Object(s.a)(e))}})})]})},On=h.a.div(an||(an=Object(u.a)(["\n  padding: 40px 20px;\n"]))),vn=h.a.div(cn||(cn=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),yn=h.a.h1(rn||(rn=Object(u.a)(["\n  font-size: 28px;\n  font-weight: 500;\n"]))),wn=h.a.button(ln||(ln=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 180px;\n  padding: 5px 10px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  background-color: #b6afaf;\n  line-height: 100%;\n"]))),Nn=h.a.p(sn||(sn=Object(u.a)(["\n  margin-bottom: 20px;\n  line-height: 1.4;\n  font-size: 12px;\n"]))),kn=function(){return Object(b.jsxs)(On,{children:[Object(b.jsxs)(vn,{children:[Object(b.jsx)(yn,{children:"Performance and Benchmarks"}),Object(b.jsxs)(wn,{children:[Object(b.jsx)(x,{icon:"#icon-cog"}),"Perfomance Settings",Object(b.jsx)(x,{icon:"#icon-share"})]})]}),Object(b.jsxs)(Nn,{children:["Define and control your settings for displaying benchmarks. See our"," ",Object(b.jsx)("a",{href:"../../../public/index.html",children:"list of indices"})," you can choose from."]}),Object(b.jsx)(gn,{})]})};var Cn=function(){return Object(b.jsx)(kn,{})},Sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,130)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),c(n),r(n)}))};t(82);l.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Cn,{})}),document.getElementById("root")),Sn()}},[[83,1,2]]]);
//# sourceMappingURL=main.3335f2e4.chunk.js.map
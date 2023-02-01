(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=(c(18),c(19),c(2)),r=(c(20),c(4)),j=c(0),i=c(6),l=c.n(i),o=(c(21),c(1)),b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})};function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var d=Object(j.memo)((function(e){var t=e.person;return Object(o.jsx)(a.b,{to:"../".concat(t.slug),className:l()({"has-text-danger":"f"===t.sex}),children:t.name})})),x=function(){var e=Object(s.h)().slug,t=void 0===e?"":e,c=Object(j.useState)([]),n=Object(r.a)(c,2),a=n[0],i=n[1],x=Object(j.useState)(!1),O=Object(r.a)(x,2),u=O[0],m=O[1],p=Object(j.useState)(!1),f=Object(r.a)(p,2),v=f[0],g=f[1],N=function(e){return e.slug===t};Object(j.useEffect)((function(){m(!0),h().then(i).catch((function(){return g(!0)})).finally((function(){return m(!1)}))}),[]);var y=function(e){var t=a.find((function(t){return t.name===e}));return t?Object(o.jsx)(d,{person:t}):e};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[u&&Object(o.jsx)(b,{}),!a.length&&!u&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),a.length>0&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:a.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":N(e)}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(d,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:e.motherName?y(e.motherName):e.motherName||"-"}),Object(o.jsx)("td",{children:e.fatherName?y(e.fatherName):e.fatherName||"-"})]},e.slug)}))})]}),v&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})},O=Object(j.memo)((function(e){var t=e.to,c=e.text;return Object(o.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:c})})),u=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(O,{to:"/",text:"Home"}),Object(o.jsx)(O,{to:"/people",text:"People"})]})})}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsx)(s.b,{path:"home",element:Object(o.jsx)(s.a,{to:"/",replace:!0})}),Object(o.jsxs)(s.b,{path:"people",children:[Object(o.jsx)(s.b,{index:!0,element:Object(o.jsx)(x,{})}),Object(o.jsx)(s.b,{path:":slug",element:Object(o.jsx)(x,{})})]}),Object(o.jsx)(s.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(u,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.42cc5423.chunk.js.map
(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),r=(c(18),c(19),c(2)),s=(c(20),c(4)),i=c(0),j=(c(21),c(1)),o=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})};function l(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var b=c(6),d=c.n(b),h=Object(i.memo)((function(e){var t=e.person;return Object(j.jsx)(a.b,{to:"../".concat(t.slug),className:d()({"has-text-danger":"f"===t.sex}),children:t.name})})),u=Object(i.memo)((function(e){var t,c=e.person,n=e.people,a=Object(r.h)().slug,s=void 0===a?"":a,i=function(e){var t=n.find((function(t){return t.name===e}));return t?Object(j.jsx)(h,{person:t}):e};return Object(j.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":(t=c,t.slug===s)}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(h,{person:c})}),Object(j.jsx)("td",{children:c.sex}),Object(j.jsx)("td",{children:c.born}),Object(j.jsx)("td",{children:c.died}),Object(j.jsx)("td",{children:c.motherName?i(c.motherName):c.motherName||"-"}),Object(j.jsx)("td",{children:c.fatherName?i(c.fatherName):c.fatherName||"-"})]},c.slug)})),O=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(s.a)(a,2),b=r[0],d=r[1],h=Object(i.useState)(!1),O=Object(s.a)(h,2),m=O[0],x=O[1];Object(i.useEffect)((function(){d(!0),l().then(n).catch((function(){return x(!0)})).finally((function(){return d(!1)}))}),[]);var p=Object(i.useMemo)((function(){return[{id:1,title:"Name"},{id:2,title:"Sex"},{id:3,title:"Born"},{id:4,title:"Died"},{id:5,title:"Mother"},{id:6,title:"Father"}]}),[]),f=Object(i.useMemo)((function(){return!b&&!c.length&&m}),[b,c]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[b&&Object(j.jsx)(o,{}),m&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),f&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",className:"box-error",children:"There are no people on the server"}),c.length>0&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:p.map((function(e){return Object(j.jsx)("th",{children:e.title},e.id)}))})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsx)(u,{person:e,people:c},e.slug)}))})]})]})})]})},m=Object(i.memo)((function(e){var t=e.to,c=e.text;return Object(j.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},children:c})})),x=Object(i.memo)((function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})})),p=Object(i.memo)((function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})})),f=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(m,{to:"/",text:"Home"}),Object(j.jsx)(m,{to:"/people",text:"People"})]})})}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(x,{})}),Object(j.jsx)(r.b,{path:"home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsxs)(r.b,{path:"people",children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(O,{})}),Object(j.jsx)(r.b,{path:":slug",element:Object(j.jsx)(O,{})})]}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(p,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(f,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3213921f.chunk.js.map
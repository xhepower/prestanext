(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{5057:function(e,n,c){Promise.resolve().then(c.bind(c,7871))},9546:function(e,n,c){"use strict";c.d(n,{Gp:function(){return a},PM:function(){return f},YL:function(){return d},eA:function(){return o},eU:function(){return s},ir:function(){return r},jc:function(){return i},k2:function(){return u},tw:function(){return l},zU:function(){return h},zy:function(){return m}}),c(5355);var t=c(1162);(0,t.$)("ea416d63a93d9127f408ed2a2c119156a3636075");var i=(0,t.$)("536a8c2b3c8ac4b6f11e08e891a4adbd027d6721"),a=(0,t.$)("d008241667b80543a4c1f0b89d2426d6c09906c6"),r=(0,t.$)("22838a2d5f6bd0cd777d41297e4e47cc20d0e4c7"),d=(0,t.$)("d53151f3321c2537c731dc630525f9968d5ed473"),s=(0,t.$)("b4b7bd2957972672c9d44454ceec749a7d68ba4c"),l=(0,t.$)("1d3f6793b222d80d1d54c2e974516cfe03a1709c"),o=(0,t.$)("0785c53d9754ca61d214fa1ccad72d865ddfc8e6"),u=(0,t.$)("5bf5332a71182e8ae38ba129702880d101a712a0"),h=(0,t.$)("75220ce7eaeec1c4bd4141a9d6556dbc542a850a");(0,t.$)("fe313f7db73c0a5990a61471f83208dee7e37123");var f=(0,t.$)("563d0e1fd0e2844ebe010a59ae49fb9338ea8215"),m=(0,t.$)("fefe69edeab0b5e2be67b9cb51c09276ac9ec82c")},7871:function(e,n,c){"use strict";c.r(n),c.d(n,{default:function(){return o}});var t=c(7437);c(4356);var i=c(6230),a=c(5691),r=c(9546),d=c(2265);function s(e){let{prestamos:n,pagos:c,sumaPrestamos:i,sumaPagos:a}=e.reporte;return console.log("reporte",e.reporte),(0,t.jsxs)("div",{children:[n?(0,t.jsxs)("details",{children:[(0,t.jsx)("summary",{children:"Prestamos ".concat(i.toFixed(2))}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Inicio"}),(0,t.jsx)("th",{children:"Cliente"}),(0,t.jsx)("th",{children:"Capital"})]})}),(0,t.jsx)("tbody",{children:n.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.inicio}),(0,t.jsx)("td",{children:e.cliente.name}),(0,t.jsx)("td",{children:e.capital})]},"reportePrestamo".concat(e.id)))})]})]}):null,c?(0,t.jsxs)("details",{children:[(0,t.jsx)("summary",{children:"Pagos ".concat(a.toFixed(2))}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Fecha"}),(0,t.jsx)("th",{children:"Prestamo"}),(0,t.jsx)("th",{children:"Monto"})]})}),(0,t.jsx)("tbody",{children:c.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.fecha}),(0,t.jsx)("td",{children:e.prestamo.id}),(0,t.jsx)("td",{children:e.monto})]},"reportePago".concat(e.id)))})]})]}):null]})}let l=a.Ry().shape({inicio:a.hT(),final:a.hT()});function o(){let[e,n]=(0,d.useState)([]),{errors:c,touched:a,values:o,handleChange:u,handleSubmit:h}=(0,i.TA)({initialValues:{inicio:new Date,final:new Date},validationSchema:l,onSubmit:async e=>{let{inicio:c,final:t}=e;n(await (0,r.ir)({inicio:c,final:t}))}});return console.log(e),(0,t.jsx)("section",{className:"main-container",children:(0,t.jsxs)("div",{className:"rutas-container",children:[(0,t.jsxs)("form",{method:"POST",onSubmit:h,className:"app-form",children:[(0,t.jsx)("h2",{className:"titulo-form",children:"Reportes"}),(0,t.jsx)("label",{htmlFor:"inicio",className:"app-form-label ",children:"Inicio Reporte"}),(0,t.jsx)("input",{type:"datetime-local",name:"inicio",onChange:u,id:"inicio",className:"app-form-input input-number"}),(0,t.jsx)("label",{htmlFor:"inicio",className:"app-form-label ",children:"Inicio Reporte"}),(0,t.jsx)("input",{type:"datetime-local",name:"final",onChange:u,id:"final",className:"app-form-input input-number"}),(0,t.jsx)("button",{type:"submit",className:"btn-primary",children:"Crear reporte"})]}),(0,t.jsx)(s,{reporte:e})]})})}},4356:function(){}},function(e){e.O(0,[447,971,938,744],function(){return e(e.s=5057)}),_N_E=e.O()}]);
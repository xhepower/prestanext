exports.id=979,exports.ids=[979],exports.modules={66333:(s,e,a)=>{"use strict";a.r(e),a.d(e,{AddRuta:()=>l});var r=a(95344),t=a(94721),o=a(84502),i=a(55258);let n=o.Ry().shape({name:o.Z_().required(),userId:o.Rx().required()});function l(s){let{errors:e,touched:a,values:o,handleChange:l,handleSubmit:c}=(0,t.TA)({initialValues:{name:"",userId:0},validationSchema:n,onSubmit:async({name:e,userId:a})=>{await (0,i.YL)(e,+s.id)}});return(0,r.jsxs)("form",{method:"POST",onSubmit:c,className:"app-form",children:[r.jsx("h2",{className:"titulo-form",children:" A\xf1adir ruta nueva"}),r.jsx("label",{htmlFor:"name",className:"app-form-label",children:"Nombre de Ruta"}),r.jsx("input",{type:"name",name:"name",value:o.name,onChange:l,id:"name",className:"app-form-input"}),e.name&&a.name&&r.jsx("span",{children:e.name}),r.jsx("button",{type:"submit",className:"btn-primary",children:"Guardar ruta"})]})}},25846:(s,e,a)=>{"use strict";a.r(e),a.d(e,{Ruta:()=>d});var r=a(95344);a(74634);var t=a(3729),o=a(55258);function i({pago:s}){let[e,a]=(0,t.useState)(!1),{id:o,monto:i,saldoAnterior:n,saldoActual:l,fecha:c}=s;return r.jsx("div",{className:"pago-container",children:r.jsx("div",{className:"card-pago",children:(0,r.jsxs)("div",{className:"datos-prestamo",children:[(0,r.jsxs)("p",{className:"datos-pago-item",children:[" ",` ${c}`]}),(0,r.jsxs)("p",{className:"datos-pago-item",children:[" ",`Saldo anterior: ${n}`]}),(0,r.jsxs)("p",{className:"datos-pago-item",children:[" ",`monto: ${i}`]}),(0,r.jsxs)("p",{className:"datos-pago-item",children:[" ",`Saldo actual: ${l}`]})]})})})}function n({prestamo:s}){let[e,a]=(0,t.useState)(!1),{id:n,inicio:l,vencimiento:c,capital:d,porcentaje:m,porcentajemora:p,cuota:u,intereses:x,saldo:h,mora:j,total:b,estado:N,frecuencia:v,proxima:y,created_at:f,updated_at:g,pagos:w}=s;async function C(s){await (0,o.zy)(s)}return(0,r.jsxs)("div",{className:"prestamo-container",children:[(0,r.jsxs)("div",{className:"card-prestamo",children:[(0,r.jsxs)("div",{className:"datos-prestamo",children:[(0,r.jsxs)("p",{className:"datos-prestamo-item",children:[" ",N.toLocaleUpperCase()]}),(0,r.jsxs)("p",{className:"datos-prestamo-item",children:[" ",`capital: ${d}`]}),(0,r.jsxs)("p",{className:"datos-prestamo-item",children:[" ",`porcentaje: ${m}%`]}),(0,r.jsxs)("p",{className:"datos-prestamo-item",children:[" ",`mora: ${j}`]}),(0,r.jsxs)("p",{className:"datos-prestamo-item",children:[" ",`total: ${b}`]}),(0,r.jsxs)("p",{className:"datos-prestamo-item",children:[" ",`saldo: ${h}`]}),r.jsx("p",{className:"datos-prestamo-item",children:`vencimiento: ${c}`})]}),(0,r.jsxs)("div",{className:"botones botones-prestamo",children:[r.jsx("button",{className:"boton-ver boton-card boton-card-prestamo",onClick:()=>{a(!e)},children:"ver"}),r.jsx("button",{className:" boton-card boton-add-pago boton-card-prestamo",onClick:()=>{C(`/home?visibleModal=visible&modal=addPago&id=${n}`)},children:"a\xf1adir"})]})]}),e?(0,r.jsxs)("div",{className:"pagos-container",children:[r.jsx("h5",{className:"titulo-pagos",children:"Pagos"}),w?.map(s=>r.jsx(i,{pago:s},`pagoKey${s.id}`))]}):null]})}function l({cliente:s}){let[e,a]=(0,t.useState)(!1),{id:i,name:l,dni:c,city:d,hood:m,business:p,phone1:u,phone2:x,created_at:h,updated_at:j,prestamos:b}=s;async function N(s){await (0,o.zy)(s)}return(0,r.jsxs)("div",{className:"cliente-container",children:[(0,r.jsxs)("div",{className:"card-cliente",children:[(0,r.jsxs)("div",{className:"datos-cliente",children:[(0,r.jsxs)("p",{className:"datos-cliente-item",children:[" ",l]}),(0,r.jsxs)("p",{className:"datos-cliente-item",children:[" ",c]}),(0,r.jsxs)("p",{className:"datos-cliente-item",children:[" ",d]}),(0,r.jsxs)("p",{className:"datos-cliente-item",children:[" ",m]}),(0,r.jsxs)("p",{className:"datos-cliente-item",children:[" ",p]}),(0,r.jsxs)("p",{className:"datos-cliente-item",children:[" ",u]}),(0,r.jsxs)("p",{className:"datos-cliente-item",children:[" ",x]})]}),(0,r.jsxs)("div",{className:"botones botones-cliente",children:[r.jsx("button",{className:"boton-ver boton-card boton-card-cliente",onClick:()=>{a(!e)},children:"ver"}),r.jsx("button",{className:" boton-card boton-add-prestamo boton-card-cliente",onClick:()=>{N(`/home?visibleModal=visible&modal=addPrestamo&id=${i}`)},children:"a\xf1adir"})]})]}),e?(0,r.jsxs)("div",{className:"prestamos-container",children:[r.jsx("h5",{className:"titulo-prestamos",children:"Prestamos"}),b?.map(s=>r.jsx(n,{prestamo:s},`rutaKey${s.id}`))]}):null]})}async function c(s){await (0,o.zy)(s)}function d({ruta:s,dropVisible:e}){let[a,o]=(0,t.useState)(!1),{name:i,clientes:n,id:d}=s;return(0,r.jsxs)("div",{className:"ruta-container",children:[(0,r.jsxs)("div",{className:"card-ruta",children:[r.jsx("div",{className:"datos-ruta",children:(0,r.jsxs)("p",{className:"datos-ruta-item",children:[" ",i]})}),e&&(0,r.jsxs)("div",{className:"botones botones-ruta",children:[r.jsx("button",{className:"boton-ver boton-card boton-card-ruta",onClick:()=>{o(!a)},children:"ver"}),r.jsx("button",{className:" boton-card boton-add-cliente boton-card-ruta",onClick:()=>{c(`/home?visibleModal=visible&modal=addCliente&id=${d}`)},children:"a\xf1adir"})]})]}),a?(0,r.jsxs)("div",{className:"clientes-container",children:[r.jsx("h4",{className:"titulo-cliente",children:"Clientes"}),n?.map(e=>r.jsx(l,{cliente:e},`rutaKey${s.id}`))]}):null]})}a(35259),a(71384),a(98395)},48601:(s,e,a)=>{"use strict";a.r(e),a.d(e,{AddUser:()=>l});var r=a(95344),t=a(94721),o=a(84502),i=a(55258);let n=o.Ry().shape({email:o.Z_().required().email(),password:o.Z_().required().min(1),role:o.Z_().required()});function l(s){let{errors:e,touched:a,values:o,handleChange:l,handleSubmit:c}=(0,t.TA)({initialValues:{email:"",password:"",role:"cobrador"},validationSchema:n,onSubmit:async({email:s,password:e,role:a})=>{await (0,i.Gp)(s,e,a)}});return r.jsx(r.Fragment,{children:(0,r.jsxs)("form",{method:"POST",onSubmit:c,className:"app-form ",children:[r.jsx("h2",{className:"titulo-form",children:"Agregar un usuario."}),r.jsx("label",{htmlFor:"email",className:"app-form-label",children:"Email"}),r.jsx("input",{type:"email",name:"email",className:"app-form-input",value:o.email,onChange:l,id:"email"}),e.email&&a.email&&r.jsx("span",{children:e.email}),r.jsx("label",{htmlFor:"password",className:"app-form-label",children:"Password"}),r.jsx("input",{type:"password",name:"password",className:"app-form-input",value:o.password,onChange:l,id:"password"}),e.password&&a.password&&r.jsx("span",{children:e.password}),r.jsx("label",{htmlFor:"role",className:"app-form-label",children:"Elija un rol"}),(0,r.jsxs)("select",{id:"role",name:"roles",value:o.password,onChange:l,className:"app-form-input",children:[r.jsx("option",{value:"admin",children:"Admin"}),r.jsx("option",{value:"cobrador",children:"Cobrador"})]}),e.role&&a.role&&r.jsx("span",{children:e.role}),r.jsx("button",{type:"submit",className:"btn-primary",children:"Guardar usuario"})]})})}},72720:(s,e,a)=>{"use strict";a.r(e),a.d(e,{AddUserButton:()=>i,redireccionar:()=>o});var r=a(95344),t=a(55258);async function o(s){await (0,t.zy)(s)}async function i(){return r.jsx("div",{className:"btn-adduser-container",children:r.jsx("button",{onClick:()=>{o("/home/users?visibleModal=visible&modal=addUser")},className:"btn-adduser",children:"A\xf1adir usuario"})})}},14273:(s,e,a)=>{"use strict";a.r(e),a.d(e,{User:()=>l});var r=a(95344),t=a(25846);a(22707);var o=a(3729),i=a(55258);async function n(s){await (0,i.zy)(s)}function l({user:s}){let[e,a]=(0,o.useState)(!1),{email:i,role:l,rutas:c,id:d}=s;return(0,r.jsxs)("div",{className:"usuario-container",children:[(0,r.jsxs)("div",{className:"card-usuario",children:[(0,r.jsxs)("div",{className:"datos-usuario",children:[(0,r.jsxs)("p",{className:"datos-usuario-item",children:[" ",i]}),r.jsx("p",{className:"datos-usuario-item datos-usuario-role",children:l})]}),(0,r.jsxs)("div",{className:"botones botones-usuario",children:[r.jsx("button",{className:"boton-ver boton-card boton-card-users",onClick:()=>{a(!e)},children:"ver"}),r.jsx("button",{className:" boton-card boton-add-ruta boton-card-users",onClick:()=>{n(`/home/users?visibleModal=visible&modal=addRuta&id=${d}`)},children:"a\xf1adir"})]})]}),e?(0,r.jsxs)("div",{className:"rutas-container",children:[r.jsx("h3",{className:"titulo-ruta",children:"Rutas"}),c?.map(s=>r.jsx(t.Ruta,{ruta:s,dropVisible:!1},`rutaKey${s.id}`))]}):null]})}},8916:(s,e,a)=>{"use strict";a.r(e),a.d(e,{Modal:()=>o});var r=a(95344);a(5187);var t=a(55258);function o({children:s,redir:e}){async function a(s){await (0,t.zy)(s)}return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:"modal",children:[r.jsx("div",{className:"overlay",children:r.jsx("button",{className:" boton-card modal-cerrar",onClick:()=>{a(`${e}`)},children:"a\xf1adir"})}),s]})})}},7877:(s,e,a)=>{"use strict";a.d(e,{n:()=>n});var r=a(86843);let t=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Rutas/AddRuta.tsx`),{__esModule:o,$$typeof:i}=t;t.default;let n=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Rutas/AddRuta.tsx#AddRuta`)},62025:(s,e,a)=>{"use strict";a.d(e,{U:()=>n});var r=a(86843);let t=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Users/AddUsuario.tsx`),{__esModule:o,$$typeof:i}=t;t.default;let n=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Users/AddUsuario.tsx#AddUser`)},33683:(s,e,a)=>{"use strict";a.d(e,{n:()=>n});var r=a(86843);let t=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Users/User.tsx`),{__esModule:o,$$typeof:i}=t;t.default;let n=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Users/User.tsx#User`)},19117:(s,e,a)=>{"use strict";a.d(e,{UX:()=>r.U,kT:()=>l}),a(33683);var r=a(62025),t=a(86843);let o=(0,t.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Users/BtnAddUsuario.tsx`),{__esModule:i,$$typeof:n}=o;o.default,(0,t.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Users/BtnAddUsuario.tsx#redireccionar`);let l=(0,t.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/Users/BtnAddUsuario.tsx#AddUserButton`)},3202:(s,e,a)=>{"use strict";a.d(e,{u:()=>n});var r=a(86843);let t=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/shared/Modal/Modal.tsx`),{__esModule:o,$$typeof:i}=t;t.default;let n=(0,r.createProxy)(String.raw`/home/xhepo/Escritorio/Projects/prestanext/src/app/Components/shared/Modal/Modal.tsx#Modal`)},74634:()=>{},71384:()=>{},35259:()=>{},98395:()=>{},22707:()=>{}};
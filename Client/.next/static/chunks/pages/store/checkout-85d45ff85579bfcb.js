(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[684],{3034:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/store/checkout",function(){return n(7415)}])},7415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(5893),l=n(7294),o=n(956),s=n(1905);let r=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,t)=>((t&=63)<36?e+=t.toString(36):t<62?e+=(t-26).toString(36).toUpperCase():t>62?e+="-":e+="_",e),"");function c(){let{totalCost:e}=(0,l.useContext)(s.o),[t,n]=(0,l.useState)("Proceed To Payment"),[c,m]=(0,l.useState)({firstName:"",lastName:"",email:"",phoneNo:"",address:"",amount:""});(0,l.useEffect)(()=>{m(t=>({...t,amount:"".concat((null==e?void 0:e.toFixed(2))||0)}))},[e]);let d=function(e){let{name:t,value:n}=e.target;m(e=>({...e,[t]:n}))},i=async function(e){e.preventDefault();let t=Object.keys(c).some(e=>""===e);if(t){console.log("ran"),(0,o.Z)("error","You need to fill out the form properly");return}if(c.amount<1){(0,o.Z)("error","You need to add items to your cart");return}let a=r(),l={tx_ref:a,amount:c.amount,redirect_url:"http://localhost:3000/store/checkout/success",meta:{consumer_id:a,consumer_mac:a},customer:{name:"".concat(c.firstName," ").concat(c.lastName),email:"".concat(c.email),phone:"".concat(c.phoneNo)}};try{n("Processing...");let e=await fetch("".concat(o.c,"/checkout"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}),t=await e.json();if(200!==e.status)throw Error(t.error);console.log(t.message),window.open(t.message,"_self")}catch(e){console.error(e),(0,o.Z)("error","Error Making Payment")}finally{n("Proceed To Payment")}};return(0,a.jsx)("section",{className:"checkout_section flex items-center justify-center w-full",children:(0,a.jsxs)("form",{onSubmit:i,className:"checkout_form w-[300px] md:w-[600px] container mx-auto my-16 md:my-32 flex flex-col",children:[(0,a.jsx)("h2",{className:"cardoFont font-bold text-headerBackground text-2xl md:text-4xl text-center",children:"Billing Information"}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[(0,a.jsxs)("div",{className:"mt-4 md:mt-0",children:[(0,a.jsx)("label",{htmlFor:"firstName",className:"block mb-2",children:"First Name:"}),(0,a.jsx)("input",{type:"text",placeholder:"First Name",value:c.firstName,onChange:d,className:"px-4 py-2 outline-none rounded-md w-full md:w-auto",required:!0,name:"firstName"})]}),(0,a.jsxs)("div",{className:"mt-4 md:mt-0",children:[(0,a.jsx)("label",{htmlFor:"lastName",className:"block mb-2",children:"Last Name:"}),(0,a.jsx)("input",{type:"text",placeholder:"Last Name",value:c.lastName,onChange:d,className:"px-4 py-2 outline-none rounded-md w-full md:w-auto",required:!0,name:"lastName"})]})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("label",{htmlFor:"email",className:"block mb-2",children:"Email Address:"}),(0,a.jsx)("input",{type:"text",placeholder:"Email Address",value:c.email,onChange:d,className:"px-4 py-2 outline-none rounded-md w-full",required:!0,name:"email"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("label",{htmlFor:"phoneNo",className:"block mb-2",children:"Phone No:"}),(0,a.jsx)("input",{type:"number",placeholder:"Phone Number",value:c.phoneNo,onChange:d,className:"px-4 py-2 outline-none rounded-md w-full",required:!0,name:"phoneNo"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("label",{htmlFor:"Billing Address",className:"block mb-2",children:"Billing Address:"}),(0,a.jsx)("input",{type:"text",placeholder:"Billing Address",value:c.address,onChange:d,className:"px-4 py-2 outline-none rounded-md w-full",required:!0,name:"address"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("label",{htmlFor:"Amount",className:"block mb-2",children:"Amount To Be Paid:"}),(0,a.jsx)("input",{type:"text",placeholder:"Amount",value:"₦ ".concat(c.amount),onChange:d,className:"px-4 py-2 outline-none rounded-md w-full",required:!0,disabled:!0})]})]}),(0,a.jsx)("button",{className:"w-full py-3 bg-headerBackground text-white rounded-md",children:t})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3034)}),_N_E=e.O()}]);
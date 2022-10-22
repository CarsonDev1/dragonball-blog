"use strict";(self.webpackChunkmonkey_blogging=self.webpackChunkmonkey_blogging||[]).push([[472],{5456:function(e,n,t){t.d(n,{Y:function(){return l}});t(2791);var r=t(184),a=t(1413),o=t(4925),i=t(1134),s=["checked","children","control","name"],l=function(e){var n=e.checked,t=e.children,l=e.control,c=e.name,u=(0,o.Z)(e,s),d=(0,i.bc)({control:l,name:c,defaultValue:""}).field;return(0,r.jsxs)("label",{children:[(0,r.jsx)("input",(0,a.Z)((0,a.Z)({onChange:function(){},checked:n,type:"radio",className:"hidden-input"},d),u)),(0,r.jsxs)("div",{className:"flex items-center gap-x-3 font-medium cursor-pointer",children:[(0,r.jsx)("div",{className:"w-7 h-7 rounded-full ".concat(n?"bg-green-400":"bg-gray-200")}),(0,r.jsx)("span",{children:t})]})]})}},8378:function(e,n,t){t.d(n,{L:function(){return h}});var r=t(1413),a=t(4925),o=t(2791),i=t(9439),s=t(184),l=(0,o.createContext)();function c(e){var n=(0,o.useState)(!1),t=(0,i.Z)(n,2),r=t[0],a=t[1],c={show:r,setShow:a,toggle:function(){a(!r)}};return(0,s.jsx)(l.Provider,{value:c,children:e.children})}function u(){var e=(0,o.useContext)(l);if("undefined"===typeof e)throw new Error("useDropdown must be used within DropdownProvider");return e}var d=["children"],h=function(e){var n=e.children,t=(0,a.Z)(e,d);return(0,s.jsx)(c,(0,r.Z)((0,r.Z)({},t),{},{children:(0,s.jsx)("div",{className:"relative inline-block w-full",children:n})}))},p=function(e){var n=e.onClick,t=u().setShow;return(0,s.jsx)("div",{className:"px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100",onClick:function(){n&&n(),t(!1)},children:e.children})},f=["placeholder"],m=function(e){var n=e.placeholder,t=(0,a.Z)(e,f),o=u().onChange;return(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)("input",(0,r.Z)({type:"text",placeholder:n,className:"p-4 outline-none w-full border border-gray-200 rounded",onChange:o},t))})},g=function(e){var n=e.placeholder,t=void 0===n?"":n,r=u(),a=r.toggle,o=r.show;return(0,s.jsxs)("div",{className:"flex items-center justify-between p-5 bg-[#E7ECF3] rounded cursor-pointer font-medium",onClick:a,children:[(0,s.jsx)("span",{children:t}),(0,s.jsx)("span",{children:o?(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"})}):(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})})]})},x=function(e){var n=e.children,t=u().show;return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)("div",{className:"absolute top-full left-0 w-full bg-white shadow-sm",children:n})})};h.Option=p,h.Search=m,h.Select=g,h.List=x},9248:function(e,n,t){t.d(n,{g:function(){return l},Y:function(){return c}});var r,a=t(168),o=(t(2791),t(6444)),i=t(184),s=o.ZP.div(r||(r=(0,a.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\trow-gap: 20px;\n\tmargin-bottom: 40px;\n\t&:last-child {\n\t\tmargin-bottom: 0;\n\t}\n"]))),l=function(e){var n=e.children;return(0,i.jsx)(s,{children:n})},c=function(e){var n=e.children;return(0,i.jsx)("div",{className:"flex flex-wrap gap-5",children:n})}},3031:function(e,n,t){var r=t(1413),a=t(4925),o=t(2791),i=t(184),s=["name","className","progress","image","handleDeleteImage"];n.Z=function(e){var n=e.name,t=e.className,l=void 0===t?"":t,c=e.progress,u=void 0===c?0:c,d=e.image,h=void 0===d?"":d,p=e.handleDeleteImage,f=void 0===p?function(){}:p,m=(0,a.Z)(e,s);return(0,i.jsxs)("label",{className:"cursor-pointer flex items-center justify-center border border-dashed w-full min-h-[200px] rounded-lg ".concat(l," relative overflow-hidden group"),children:[(0,i.jsx)("input",(0,r.Z)({type:"file",name:n,className:"hidden-input",onChange:function(){}},m)),0!==u&&!h&&(0,i.jsx)("div",{className:"absolute z-10 w-16 h-16 border-8 border-green-500 rounded-full loading border-t-transparent animate-spin"}),!h&&0===u&&(0,i.jsxs)("div",{className:"flex flex-col items-center text-center pointer-events-none",children:[(0,i.jsx)("img",{src:"/img-upload.png",alt:"upload-img",className:"max-w-[80px] mb-5"}),(0,i.jsx)("p",{className:"font-semibold",children:"Choose photo"})]}),h&&(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)("img",{src:h,className:"object-cover w-full h-full",alt:""}),(0,i.jsx)("button",{type:"button",className:"absolute z-10 flex items-center justify-center invisible w-16 h-16 text-red-500 transition-all bg-white rounded-full opacity-0 cursor-pointer group-hover:opacity-100 group-hover:visible",onClick:f,children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),!h&&(0,i.jsx)("div",{className:"absolute bottom-0 left-0 w-10 h-1 transition-all bg-green-400 image-upload-progress",style:{width:"".concat(Math.ceil(u),"%")}})]})}},3175:function(e,n,t){var r,a=t(1413),o=t(4925),i=t(168),s=(t(2791),t(1134)),l=t(6444),c=t(184),u=["name","type","children","control"],d=l.ZP.div(r||(r=(0,i.Z)(["\n\tposition: relative;\n\twidth: 100%;\n\tinput {\n\t\twidth: 100%;\n\t\tpadding: ",";\n\t\tbackground-color: ",";\n\t\tborder-radius: 8px;\n\t\tfont-weight: 500;\n\t\ttransition: all 0.2s linear;\n\t\tborder: 1px solid transparent;\n\t}\n\tinput:focus {\n\t\tbackground-color: white;\n\t\tborder-color: ",";\n\t}\n\tinput::-webkit-input-placeholder {\n\t\tcolor: #84878b;\n\t}\n\tinput::-moz-input-placeholder {\n\t\tcolor: #84878b;\n\t}\n\t.input-icon {\n\t\tposition: absolute;\n\t\tright: 20px;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tcursor: pointer;\n\t}\n"])),(function(e){return e.hasIcon?"20px 60px 20px 20px":"20px"}),(function(e){return e.theme.grayLight}),(function(e){return e.theme.primary}));n.Z=function(e){var n=e.name,t=void 0===n?"":n,r=e.type,i=void 0===r?"text":r,l=e.children,h=e.control,p=(0,o.Z)(e,u),f=(0,s.bc)({control:h,name:t,defaultValue:""}).field;return(0,c.jsxs)(d,{hasIcon:!!l,children:[(0,c.jsx)("input",(0,a.Z)((0,a.Z)({id:t,type:i},f),p)),l?(0,c.jsx)("div",{className:"input-icon",children:l}):null]})}},3117:function(e,n,t){t.d(n,{I:function(){return r.Z}});var r=t(3175)},6848:function(e,n,t){t.d(n,{_:function(){return h},O:function(){return f}});var r,a,o=t(1413),i=t(4925),s=t(168),l=(t(2791),t(6444)),c=t(184),u=["htmlFor","children"],d=l.ZP.label(r||(r=(0,s.Z)(["\n\tcolor: ",";\n\tfont-weight: 500;\n\tfont-size: 14px;\n\tcursor: pointer;\n"])),(function(e){return e.theme.gray4b})),h=function(e){var n=e.htmlFor,t=void 0===n?"":n,r=e.children,a=(0,i.Z)(e,u);return(0,c.jsx)(d,(0,o.Z)((0,o.Z)({htmlFor:t},a),{},{children:r}))},p=l.ZP.span(a||(a=(0,s.Z)(["\n\tdisplay: inline-block;\n\tpadding: 10px 15px;\n\tborder-radius: 8px;\n\tfont-size: 14px;\n\tfont-weight: 500;\n"]))),f=function(e){var n=e.children,t=e.type,r="text-gray-500 bg-gray-100";switch(void 0===t?"default":t){case"success":r="text-green-500 bg-green-100";break;case"warning":r="text-orange-500 bg-orange-100";break;case"danger":r="text-red-500 bg-red-100"}return(0,c.jsx)(p,{className:r,children:n})}},4961:function(e,n,t){var r=t(1413),a=t(4925),o=(t(2791),t(184)),i=["on","onClick"];n.Z=function(e){var n=e.on,t=e.onClick,s=(0,a.Z)(e,i);return(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox",checked:n,className:"hidden-input",onChange:function(){},onClick:t}),(0,o.jsx)("div",(0,r.Z)((0,r.Z)({className:"inline-block w-[70px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ".concat(n?"bg-green-500":"bg-gray-300")},s),{},{children:(0,o.jsx)("span",{className:"transition-all w-[34px] h-[34px] bg-white rounded-full inline-block ".concat(n?"translate-x-[28px]":"")})}))]})}},1776:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(9439),a=t(4453),o=t(2791);function i(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=(0,o.useState)(0),s=(0,r.Z)(i,2),l=s[0],c=s[1],u=(0,o.useState)(""),d=(0,r.Z)(u,2),h=d[0],p=d[1];if(e&&n){var f=function(e){var n=(0,a.cF)(),t=(0,a.iH)(n,"images/"+e.name),r=(0,a.B0)(t,e);r.on("state_changed",(function(e){var n=e.bytesTransferred/e.totalBytes*100;switch(c(n),console.log("Upload is "+l+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break;default:console.log("Nothing at all")}}),(function(e){console.log("Error")}),(function(){(0,a.Jt)(r.snapshot.ref).then((function(e){p(e)}))}))},m=function(n){var t=n.target.files[0];t&&(e("image_name",t.name),f(t))},g=function(){var e=(0,a.cF)(),r=(0,a.iH)(e,"images/"+(t||n("image_name")));(0,a.oq)(r).then((function(){console.log("Remove image successfully"),p(""),c(0)})).catch((function(e){console.log("Can not delete image")})),p("")},x=function(){p(""),c(0)};return{image:h,setImage:p,handleResetUpload:x,progress:l,handleSelectImage:m,handleDeleteImage:g}}}},8322:function(e,n,t){t(2791);var r=t(184);n.Z=function(e){var n=e.title,t=void 0===n?"":n,a=e.desc,o=void 0===a?"":a,i=e.children;return(0,r.jsxs)("div",{className:"mb-10 flex items-start justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"dashboard-heading",children:t}),(0,r.jsx)("p",{className:"dashboard-short-desc",children:o})]}),i]})}},5472:function(e,n,t){t.r(n);var r=t(4165),a=t(1413),o=t(5861),i=t(9439),s=t(2791),l=t(1134),c=t(4167),u=t(5456),d=t(8378),h=t(9248),p=t(3117),f=t(6848),m=t(333),g=t.n(m),x=t(3585),v=t(3031),b=(t(8113),t(6009),t(1776)),j=t(4961),w=t(9062),Z=t(1199),k=t(9808),y=t(9085),N=t(8322),C=t(1830),E=t.n(C),I=t(4569),S=t.n(I),L=t(184);n.default=function(){var e=(0,k.a)().userInfo,n=(0,l.cI)({mode:"onChange",defaultValues:{title:"",slug:"",status:2,hot:!1,image:"",category:{},user:{}}}),t=n.control,m=n.watch,C=n.setValue,I=n.handleSubmit,D=n.getValues,P=n.reset,F=m("status"),_=m("hot"),A=(0,b.Z)(C,D),M=A.image,R=A.handleResetUpload,V=A.progress,Y=A.handleSelectImage,B=A.handleDeleteImage,J=(0,s.useState)([]),O=(0,i.Z)(J,2),T=O[0],U=O[1],z=(0,s.useState)(""),q=(0,i.Z)(z,2),H=(q[0],q[1],(0,s.useState)("")),W=(0,i.Z)(H,2),G=W[0],Q=W[1],K=(0,s.useState)(!1),X=(0,i.Z)(K,2),$=X[0],ee=X[1];(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.email){n.next=2;break}return n.abrupt("return");case 2:return t=(0,w.IO)((0,w.hJ)(Z.db,"users"),(0,w.ar)("email","==",e.email)),n.next=5,(0,w.PL)(t);case 5:n.sent.forEach((function(e){C("user",(0,a.Z)({id:e.id},e.data()))}));case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e.email]);var ne=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var o,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((null===e||void 0===e?void 0:e.role)===x.xZ.ADMIN){n.next=3;break}return E().fire("Failed","You have no right to do this action","warning"),n.abrupt("return");case 3:return ee(!0),n.prev=4,(o=(0,a.Z)({},t)).slug=g()(t.slug||t.title,{lower:!0}),o.status=Number(t.status),i=(0,w.hJ)(Z.db,"posts"),n.next=11,(0,w.ET)(i,(0,a.Z)((0,a.Z)({},o),{},{image:M,createdAt:(0,w.Bt)()}));case 11:y.Am.success("Create new post successfully!"),P({title:"",slug:"",status:2,category:{},hot:!1,image:"",user:{}}),R(),Q({}),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(4),ee(!1);case 20:return n.prev=20,ee(!1),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[4,17,20,23]])})));return function(e){return n.apply(this,arguments)}}();(0,s.useMemo)((function(){return{toolbar:[["bold","italic","underline","strike"],["blockquote"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,4,5,6,!1]}],["link","image"]],imageUploader:{upload:function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("image",n),e.next=4,S()({method:"post",url:"https://api.imgbb.com/1/upload?key=6c81ce2f42aa002b833279d91dad07ba",data:t,headers:{"Content-Type":"multipart/form-data"}});case 4:return a=e.sent,e.abrupt("return",a.data.data.url);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}}),[]);(0,s.useEffect)((function(){function e(){return(e=(0,o.Z)((0,r.Z)().mark((function e(){var n,t,o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,w.hJ)(Z.db,"categories"),t=(0,w.IO)(n,(0,w.ar)("status","==",1)),e.next=4,(0,w.PL)(t);case 4:o=e.sent,i=[],o.forEach((function(e){i.push((0,a.Z)({id:e.id},e.data()))})),U(i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,s.useEffect)((function(){document.title="Monkey Blogging - Add new post"}),[]);var te=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,w.JU)(Z.db,"categories",n.id),e.next=3,(0,w.QT)(t);case 3:o=e.sent,C("category",(0,a.Z)({id:o.id},o.data())),Q(n);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(N.Z,{title:"Add post",desc:"Add new post"}),(0,L.jsxs)("form",{onSubmit:I(ne),children:[(0,L.jsxs)("div",{className:"form-layout",children:[(0,L.jsxs)(h.g,{children:[(0,L.jsx)(f._,{children:"Title"}),(0,L.jsx)(p.I,{control:t,placeholder:"Enter your title",name:"title",required:!0})]}),(0,L.jsxs)(h.g,{children:[(0,L.jsx)(f._,{children:"Slug"}),(0,L.jsx)(p.I,{control:t,placeholder:"Enter your slug",name:"slug"})]})]}),(0,L.jsxs)("div",{className:"form-layout",children:[(0,L.jsxs)(h.g,{children:[(0,L.jsx)(f._,{children:"Image"}),(0,L.jsx)(v.Z,{onChange:Y,handleDeleteImage:B,className:"h-[250px]",progress:V,image:M})]}),(0,L.jsxs)(h.g,{children:[(0,L.jsx)(f._,{children:"Category"}),(0,L.jsxs)(d.L,{children:[(0,L.jsx)(d.L.Select,{placeholder:"Select the category"}),(0,L.jsx)(d.L.List,{children:T.length>0&&T.map((function(e){return(0,L.jsx)(d.L.Option,{onClick:function(){return te(e)},children:e.name},e.id)}))})]}),(null===G||void 0===G?void 0:G.name)&&(0,L.jsx)("span",{className:"inline-block p-3 text-sm font-medium text-green-600 rounded-lg bg-green-50",children:null===G||void 0===G?void 0:G.name})]})]}),(0,L.jsxs)("div",{className:"form-layout",children:[(0,L.jsxs)(h.g,{children:[(0,L.jsx)(f._,{children:"Feature post"}),(0,L.jsx)(j.Z,{on:!0===_,onClick:function(){return C("hot",!_)}})]}),(0,L.jsxs)(h.g,{children:[(0,L.jsx)(f._,{children:"Status"}),(0,L.jsxs)(h.Y,{children:[(0,L.jsx)(u.Y,{name:"status",control:t,checked:Number(F)===x.cf.APPROVED,value:x.cf.APPROVED,children:"Approved"}),(0,L.jsx)(u.Y,{name:"status",control:t,checked:Number(F)===x.cf.PENDING,value:x.cf.PENDING,children:"Pending"}),(0,L.jsx)(u.Y,{name:"status",control:t,checked:Number(F)===x.cf.REJECTED,value:x.cf.REJECTED,children:"Reject"})]})]})]}),(0,L.jsx)(c.z,{type:"submit",className:"mx-auto w-[250px]",isLoading:$,disabled:$,children:"Add new post"})]})]})}}}]);
//# sourceMappingURL=472.46d66dd2.chunk.js.map
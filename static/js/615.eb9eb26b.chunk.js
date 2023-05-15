"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[615],{7615:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r=t(9439),a=t(4403),u=t(9434),o="NOT_FOUND";var i=function(e,n){return e===n};function c(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?i:r,u=t.maxSize,c=void 0===u?1:u,l=t.resultEqualityCheck,s=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===c?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:o},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return o}return{get:r,put:function(n,a){r(n)===o&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,s);function d(){var n=f.get(arguments);if(n===o){if(n=e.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(e){return l(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function s(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,f=s.memoizeOptions,d=void 0===f?t:f,p=Array.isArray(d)?d:[d],m=l(r),v=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=m.length,t=0;t<n;t++)e.push(m[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:m,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var f=s(c),d=function(e){return e.contacts.items},p=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},v=f([d,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),h=t(8361),b=t(8969),y=t(6151),x=t(3329);function j(){var e=(0,u.v9)(d),n=(0,u.I0)();return(0,x.jsxs)("form",{className:a.Z.wrapper,action:"",onSubmit:function(t){t.preventDefault();var r=t.target,a=r.elements.name.value,u=r.elements.number.value,o=e.some((function(e){return e.name.toLowerCase()===a.toLowerCase()})),i={name:a,number:u};o?alert("".concat(a," is already in contacts.")):n((0,h.uK)(i)),r.reset()},children:[(0,x.jsx)(b.Z,{fullWidth:!0,label:"Name",id:"name",name:"name",placeholder:"Enter contact name...",required:!0}),(0,x.jsx)(b.Z,{fullWidth:!0,label:"Number",id:"number",name:"number",placeholder:"Enter contact phone number...",required:!0}),(0,x.jsx)(y.Z,{variant:"outlined",type:"submit",children:"Add contact"})]})}var _="Filter_wrapper__9Ksqy",w=t(4808);function g(){var e=(0,u.I0)();return(0,x.jsx)("div",{className:_,children:(0,x.jsx)(b.Z,{fullWidth:!0,label:"Find contacts by name",id:"filter",name:"filter",onChange:function(n){var t=n.target.value;e((0,w.T)(t))},placeholder:"Find contacts by name..."})})}var C="ContactList_wrapper__VP-XU",k="ContactList_textWrapper__7AQji",E="ContactList_buttonWrapper__+BGhN";function N(e){var n=e.openModal,t=(0,u.v9)(v),r=(0,u.I0)();return(0,x.jsx)("ul",{className:C,children:t.map((function(e){var t=e.id,a=e.name,u=e.number;return(0,x.jsxs)("li",{children:[(0,x.jsxs)("div",{className:k,children:[(0,x.jsxs)("p",{children:["Name: ",a.toUpperCase()]}),(0,x.jsxs)("p",{children:["Number: ",u]})]}),(0,x.jsxs)("div",{className:E,children:[(0,x.jsx)(y.Z,{type:"button",fullWidth:!0,size:"small",onClick:function(){return n({id:t,name:a,number:u})},children:"Update"}),(0,x.jsx)(y.Z,{type:"button",fullWidth:!0,size:"small",onClick:function(){return r((0,h.GK)(t))},children:"Delete"})]})]},t)}))})}var Z=t(2791),L="UpdateModal_overlay__ExW3-",U="UpdateModal_wrapper__Wr-LA",W="UpdateModal_btnWrapper__Ntazl",F=t(4164),S=document.querySelector("#modal-root");function q(e){var n=e.closeModal,t=e.contactToUpdate,a=(0,Z.useState)(t.name),o=(0,r.Z)(a,2),i=o[0],c=o[1],l=(0,Z.useState)(t.number),s=(0,r.Z)(l,2),f=s[0],d=s[1],p=(0,u.I0)(),m=function(e){var n=e.target;switch(n.name){case"name":c(n.value);break;case"number":d(n.value);break;default:return}},v=function(e){"Escape"===e.code&&n()};return(0,Z.useEffect)((function(){return window.addEventListener("keydown",v),function(){return window.removeEventListener("keydown",v)}})),(0,F.createPortal)((0,x.jsx)("div",{className:L,children:(0,x.jsxs)("div",{className:U,children:[(0,x.jsx)("h2",{children:"Update contact"}),(0,x.jsx)(b.Z,{fullWidth:!0,label:"Change name",id:"name",name:"name",value:i,onChange:m,placeholder:"Enter contact name...",required:!0}),(0,x.jsx)(b.Z,{fullWidth:!0,label:"Change number",id:"number",name:"number",value:f,onChange:m,placeholder:"Enter contact phone number...",required:!0}),(0,x.jsxs)("div",{className:W,children:[(0,x.jsx)(y.Z,{variant:"outlined",type:"button",onClick:function(){p((0,h.Tk)({id:t.id,name:i,number:f})),n()},children:"Update"}),(0,x.jsx)(y.Z,{variant:"outlined",type:"button",onClick:function(){n()},children:"Cancel"})]})]})}),S)}function A(){var e=(0,u.I0)(),n=(0,u.v9)(p),t=(0,u.v9)(m),a=(0,Z.useState)(!1),o=(0,r.Z)(a,2),i=o[0],c=o[1],l=(0,Z.useState)({}),s=(0,r.Z)(l,2),f=s[0],d=s[1];(0,Z.useEffect)((function(){e((0,h.yF)())}),[e]);return(0,x.jsx)(x.Fragment,{children:i?(0,x.jsx)(q,{closeModal:function(){c(!1),d({})},contactToUpdate:f}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(g,{}),n&&!t&&(0,x.jsx)("p",{children:"Loading tasks..."}),(0,x.jsx)(N,{openModal:function(e){c(!0),d(e)}})]})})}},4403:function(e,n){n.Z={wrapper:"ContactForm_wrapper__-Umw-",button:"ContactForm_button__eSwX9"}}}]);
//# sourceMappingURL=615.eb9eb26b.chunk.js.map
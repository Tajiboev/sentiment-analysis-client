(this["webpackJsonpsentiment-analysis-client"]=this["webpackJsonpsentiment-analysis-client"]||[]).push([[0],{16:function(e,t,n){e.exports={container:"container_container__2BsfZ"}},4:function(e,t,n){e.exports={form:"form_form__1nrlR",fieldset:"form_fieldset__3PbX0",textarea:"form_textarea__dDQuz",button:"form_button__1cPHF"}},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(15),a=n.n(r),i=n(3),l=n(6),j=n(17),u=n.n(j),o=n(4),b=n.n(o),d=n(0),f=function(e){var t=e.setResults,n=e.setError,s=Object(c.useState)(!1),r=Object(i.a)(s,2),a=r[0],l=r[1],j=Object(c.useState)(!1),o=Object(i.a)(j,2),f=o[0],O=o[1],x=Object(c.useRef)(null);return Object(d.jsx)("form",{className:b.a.form,onSubmit:function(e){if(e.preventDefault(),x.current&&""!==x.current.value){if(O(!1),l(!0),t([]),x.current){var c=x.current.value;u.a.post("https://arcane-coast-64432.herokuapp.com/analyze",{text:c}).then((function(e){l(!1),t(e.data.data)})).catch((function(e){l(!1),e.response?n(e.response.statusText):n("Something went wrong. Please try again!")}))}}else O(!0)},children:Object(d.jsxs)("fieldset",{className:b.a.fieldset,children:[Object(d.jsx)("legend",{children:"Enter you text inside this textarea:"}),Object(d.jsx)("textarea",{className:b.a.textarea,rows:8,ref:x}),f&&Object(d.jsx)("p",{className:"error",children:"Please enter your text in the textarea!"}),Object(d.jsx)("button",{className:b.a.button,disabled:a,children:a?"Waiting for results":"Analyze \u2192"})]})})},O=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,44))})),x=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,45))})),h=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,46))})),m=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,47))})),p=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),j=a[0],u=a[1];return Object(d.jsxs)("main",{children:[Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading..."}),children:Object(d.jsx)(h,{})}),Object(d.jsxs)(l.a,{children:[Object(d.jsx)(f,{setResults:s,setError:u}),0!==n.length&&Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading..."}),children:Object(d.jsx)(O,{results:n})}),j&&Object(d.jsx)("p",{className:"error",children:j}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading..."}),children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("div",{children:"Loading..."}),children:Object(d.jsx)(m,{})})]})};n(41);a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))},6:function(e,t,n){"use strict";var c=n(16),s=n.n(c),r=n(0);t.a=function(e){var t=e.children;return Object(r.jsx)("div",{className:s.a.container,children:t})}}},[[42,1,2]]]);
//# sourceMappingURL=main.ca580cc4.chunk.js.map
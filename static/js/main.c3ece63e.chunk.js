(this["webpackJsonpztm-robofriends"]=this["webpackJsonpztm-robofriends"]||[]).push([[0],{21:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(5),r=c.n(s),i=(c(21),c(11)),a=c(12),o=c(16),l=c(14),d=c(15),h=c(13),j=c.n(h),b=(c(33),c(2)),u=c(0),p=function(e){var t=e.id,c=e.name,s=e.email,r=e.city,i=e.company,a=e.website,o=e.phone,l=Object(n.useState)(!1),h=Object(d.a)(l,2),p=h[0],m=h[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{onClick:function(){return m(!0)},className:"tc dib br3 pa3 ma2 grow bw2 shadow-5 card pointer",children:[Object(u.jsx)("img",{alt:"profile_photo",src:"https://robohash.org/".concat(t,"?200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:c}),Object(u.jsx)("p",{children:s})]})]}),Object(u.jsxs)(j.a,{isOpen:p,onRequestClose:function(){return m(!1)},ariaHideApp:!1,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"solid 2px #9b6109",background:"#d87e43"},overlay:{background:"rgba(0,0,0,0.65)",opacity:"0.97",cursor:"pointer"}},children:[Object(u.jsx)(b.a,{onClick:function(){return m(!1)}}),Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("img",{alt:"profile_photo",src:"https://robohash.org/".concat(t,"?200x200")}),Object(u.jsxs)("h2",{children:["Name: ",c]}),Object(u.jsxs)("h2",{children:["E-mail: ",s]}),Object(u.jsxs)("h2",{children:["City: ",r]}),Object(u.jsxs)("h2",{children:["Company: ",i]}),Object(u.jsxs)("h2",{children:["Website: ",a]}),Object(u.jsxs)("h2",{children:["Phone: ",o]})]})]})]})},m=function(e){var t=e.robots;return Object(u.jsx)("div",{className:"",children:t.map((function(e,c){return Object(u.jsx)(p,{id:t[c].id,name:t[c].name,email:t[c].email,city:t[c].address.city,company:t[c].company.name,website:t[c].website,phone:t[c].phone},t[c].id)}))})},x=(c(35),function(e){var t=e.searchFunc;return Object(u.jsxs)("div",{className:"pa2 container",children:[Object(u.jsx)("input",{type:"text",className:"pa3 ba br3 ma2",placeholder:"Search",onChange:t}),Object(u.jsx)("div",{className:"searchLense",children:Object(u.jsx)("span",{className:"",id:"basic-addon1",children:Object(u.jsx)(b.b,{})})})]})});var O=function(e){return Object(u.jsx)("div",{style:{overflow:"scroll",border:"5px solid #9b6109",height:"800px",borderRadius:"5px"},children:e.children})},f=c.p+"static/media/Loading.478145db.svg",v=(c(36),c(10),function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).searchFunc=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(a.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,c=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return t.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{className:"f1",children:"ZTM Robo Friends App"}),Object(u.jsx)(x,{searchFunc:this.searchFunc}),Object(u.jsx)(O,{children:Object(u.jsx)(m,{robots:n})})]}):Object(u.jsx)("div",{className:"picContainer",children:Object(u.jsx)("div",{className:"picDiv",children:Object(u.jsx)("img",{src:f,alt:"loading logo",className:"loadinPic"})})})}}]),c}(n.Component));r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c3ece63e.chunk.js.map
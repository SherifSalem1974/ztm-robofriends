(this["webpackJsonpztm-robofriends"]=this["webpackJsonpztm-robofriends"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(8),s=n.n(r),a=(n(19),n(9)),i=n(10),o=n(13),u=n(11),j=n(25),l=(n(20),n(26)),h=n(1),d=function(e){var t=e.id,n=e.name,c=e.email;return Object(h.jsx)("div",{className:"d-flex justify-content-center align-content-center",children:Object(h.jsxs)(l.a,{style:{width:"18rem"},children:[Object(h.jsx)(l.a.Img,{variant:"top",alt:"profile_photo",src:"https://robohash.org/".concat(t,"?200x200")}),Object(h.jsxs)(l.a.Body,{children:[Object(h.jsx)(l.a.Title,{children:n}),Object(h.jsx)(l.a.Text,{children:c})]})]})})},b=function(e){var t=e.robots;return Object(h.jsx)(j.a,{className:"d-flex flex-wrap justify-content-center align-content-center",children:t.map((function(e,n){return Object(h.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},p=n(12),f=(n(22),function(e){var t=e.searchFunc;return Object(h.jsxs)("div",{className:"input-group mb-3 p-3 justify-content-center",children:[Object(h.jsx)("input",{type:"text",className:"searchInput",placeholder:"Search",onChange:t}),Object(h.jsx)("div",{className:"input-group-prepend",children:Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:Object(h.jsx)(p.a,{})})})]})}),m=(n(23),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).searchFunc=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("h1",{className:"text-center",children:"ZTM Robo Friends App"}),Object(h.jsx)(f,{searchFunc:this.searchFunc}),Object(h.jsx)(b,{robots:t})]})}}]),n}(c.Component));s.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0016cbfc.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(t,e,n){t.exports=n.p+"static/media/langham.753cb62e.png"},37:function(t,e,n){t.exports=n.p+"static/media/qlicky.7d61ad0b.png"},43:function(t,e,n){t.exports=n.p+"static/media/kone.29357ec4.png"},44:function(t,e,n){t.exports=n.p+"static/media/thyssenkrupp.769aa387.png"},49:function(t,e,n){t.exports=n(71)},54:function(t,e,n){},55:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(4),l=n.n(r),i=(n(54),n(55),n(10)),c=n(11),u=n(12),s=n(13),m=n(35),d=n.n(m),b=n(36),h=(n(56),n(100)),p=n(99),f=n(37),g=n.n(f),E=n(38),k=n.n(E),y=n(63),v=function(t,e){return void 0!==t?t:e},F=[["P","U","1","2","3"],["R","L","4","5","6"],["M","B","7","8","9"],["F","G","del","0","#"]],C=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleClick=function(t){var e="del"===t.target.name?"":a.state.baseInput+t.target.name;a.setState({baseInput:e})},a.button=function(t){var e=a.state.numberButtonVariant,n=a.state.numberButtonFont;return"del"===t?(e=a.state.dangerButtonVariant,n=a.state.dangerButtonFont):t.charAt(0).match(/[a-z]/i)&&(e=a.state.floorButtonVariant,n=a.state.floorButtonFont),o.a.createElement(h.a,{name:t,onClick:a.handleClick,className:a.state.defaultButtonClass,style:{fontSize:a.state.buttonFontSize,fontWeight:"bold",backgroundColor:e,borderColor:e,color:n}},t)},a.keyboard=function(){return o.a.createElement("div",null,o.a.createElement("table",{align:"center",className:a.state.baseKeyboardClass},o.a.createElement("tbody",null,a.state.keys.map((function(t,e){return o.a.createElement("tr",null,t.map((function(t,e){return o.a.createElement("td",null,a.button(t))})))})))))},a.handleChange=function(t){a.setState(Object(b.a)({},t.target.name,t.target.value))},a.state={baseInput:"",title:v(t.title,"Qlicky"),logo:v(t.logo,g.a),icon:v(t.icon,"icons/qlicky.ico"),logoWidth:v(t.logoWidth,100),qrWidth:v(t.qrWidth,250),baseKeyboardClass:v(t.baseKeyboardClass,"keyboard-content"),defaultButtonClass:v(t.defaultButtonClass,"keyboard-button"),floorButtonVariant:v(t.floorButtonVariant,"#1976d2"),floorButtonFont:v(t.floorButtonFont,"#FFFFFF"),numberButtonVariant:v(t.numberButtonVariant,"#f5f5f5"),numberButtonFont:v(t.numberButtonFont,"#000000"),dangerButtonVariant:v(t.dangerButtonVariant,"#212121"),dangerButtonFont:v(t.dangerButtonFont,"FFFFFF"),buttonFontSize:v(t.buttonFontSize,30),keys:v(t.keyboard,F)},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.title=this.state.title}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k.a,null,o.a.createElement("title",null,this.state.title),o.a.createElement("meta",{name:this.state.title,content:this.state.title}),o.a.createElement("link",{rel:"icon",type:"image/png",href:this.state.icon,sizes:"16x16"}),o.a.createElement("link",{rel:"apple-touch-icon",type:"image/png",href:this.state.icon,sizes:"16x16"})),o.a.createElement("br",null),o.a.createElement("img",{src:this.state.logo,alt:"",width:this.state.logoWidth}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(y,{value:this.state.baseInput,size:this.state.qrWidth,renderAs:"svg",fgColor:""===this.state.baseInput?"#DCDCDC":"#000000",bgColor:""===this.state.baseInput?"#DCDCDC":"#FFFFFF"})," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement(p.a,{name:"baseInput",id:"outlined-basic",label:"Where to?",variant:"outlined",onChange:this.handleChange,value:this.state.baseInput,inputProps:{style:{fontSize:"20px",fontWeight:"bold"}},InputLabelProps:{style:{fontSize:"20px",fontWeight:"bold"}}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",null,this.keyboard()))}}]),n}(o.a.Component),B=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C,{title:"Langham Place",logo:d.a,icon:"icons/langhamplace/langham.ico"}))}}]),n}(o.a.Component),O=n(43),j=n.n(O),x=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C,{title:"KONE",logo:j.a,icon:"icons/kone/kone.ico"}))}}]),n}(o.a.Component),W=n(44),z=n.n(W),I=[["P","U","1","2","3"],["R","L","4","5","6"],["M","B","7","8","9"],["F","G","del","0","-"]],V=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C,{title:"thyssenkrupp",logo:z.a,logoWidth:150,icon:"icons/thyssenkrupp/thyssenkrupp.ico",keyboard:I}))}}]),n}(o.a.Component),w=n(14);var S=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w.c,null,o.a.createElement(w.a,{exact:!0,path:"/",component:C}),o.a.createElement(w.a,{exact:!0,path:"/langhamplace",component:B}),o.a.createElement(w.a,{exact:!0,path:"/kone",component:x}),o.a.createElement(w.a,{exact:!0,path:"/tka",component:V})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(22),D=o.a.createElement(q.a,{basename:"https://qlicky.github.io"},o.a.createElement(S,null));console.log("Hello V1, https://qlicky.github.io"),l.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.a9f9710e.chunk.js.map
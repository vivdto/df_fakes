(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},66:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c,i=n(0),a=n.n(i),o=n(32),l=n.n(o),s=(n(43),n(44),n(17)),r=n(2),d=n(8),j=n(9),u=n(11),h=n(10),b=(n(45),n(46),n(1)),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("center",{children:[Object(b.jsx)("p",{className:"footer1",children:"\xa9 Copyright Vartika, Noopur, Vivashwat"}),Object(b.jsx)("p",{className:"footer1",children:"All Rights Reserved"})]})})}}]),n}(i.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("h1",{className:"heading",children:[" ",Object(b.jsx)("span",{style:{color:"#16F7FA",fontWeight:"bold"},children:"DEEP"})," FAKE"]}),Object(b.jsx)("p",{className:"para",children:"DeepFake technology is incredibly advance and can easily confuse humans between a real and a fake video. It has a great potential in entertainment, gaming and other various fields if used responsibly. Our application provides you a platform were you can detect your own DeepFake video by uploading the real or fake video. "})]}),Object(b.jsx)(p,{})]})}}]),n}(i.Component),f=n(16),v=(n(48),n.p+"media/facesearch.030ad8c1.svg"),m=n(33),x=n.n(m),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).handleLoad=function(){console.log(window.data);var e=window.data;e=e.replaceAll("&#34;",'"'),console.log(e),e=JSON.parse(e),c.setState({output:e.output,confidence:e.confidence})},c.uploadFile2Backend=function(){document.getElementById("line").style.display="none";var e=new FormData;e.append("video",c.state.file,c.state.file.name),x.a.post("http://127.0.0.1:3000/Detect",e).catch((function(e){console.log(e)})).then((function(e){console.log(e)}))},c.onFileSelect=function(e){e.target.files&&e.target.files[0]&&c.setState({file:e.target.files[0]}),document.getElementById("sub").style.display="inline-block"},c.state={file:null,output:null,confidence:null},c.onFileSelect=c.onFileSelect.bind(Object(f.a)(c)),c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){console.log("component Mounted"),window.addEventListener("load",this.handleLoad)}},{key:"render",value:function(){var e=this.state,t=e.output,n=e.confidence;return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsxs)("div",{className:"background1",children:[Object(b.jsx)("h1",{className:"detectHeading",children:"IS YOUR VIDEO FAKE ? CHECK IT !"}),Object(b.jsxs)("form",{method:"POST",action:"",encType:"multipart/form-data",children:[Object(b.jsx)("label",{for:"video",className:"button",style:{top:"15vh",padding:"0"},children:"+ ADD VIDEO"}),Object(b.jsx)("input",{id:"video",name:"video",type:"file",style:{display:"none"},onChange:this.onFileSelect}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",id:"sub",value:"submit",onSubmit:this.uploadFile2Backend,style:{display:"none",verticalAlign:"middle",textAlign:"center",top:"16vh",position:"relative"}})]}),Object(b.jsx)("img",{src:v,alt:"detect image",style:{height:"35vh",width:"35vh",top:"20vh",position:"relative"}}),Object(b.jsx)("h2",{id:"line",style:{color:"#16F7FA",top:"20vh",position:"relative"},children:"RESULT OF THE VIDEO WILL GO HERE!"}),Object(b.jsxs)("h2",{id:"result",style:{color:"#16F7FA",top:"22vh",position:"relative"},children:["Result: ",Object(b.jsx)("span",{style:{color:"white"},children:t})]}),Object(b.jsxs)("h2",{id:"result",style:{color:"#16F7FA",top:"22.5vh",position:"relative"},children:["Confidence: ",Object(b.jsx)("span",{style:{color:"white"},children:n})]})]}),Object(b.jsx)(p,{})]})}}]),n}(i.Component),y=(n(66),n(34)),F=n(35),E=Object(F.a)(s.b)(c||(c=Object(y.a)(["\n    color: white;\n    text-decoration: none;\n    border: none;\n    &.active {\n        color: #16F7FA;\n        text-decoration: underline;    \n    }\n"]))),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsxs)("ul",{className:"nav",children:[Object(b.jsx)(E,{exact:!0,to:"/",children:Object(b.jsx)("li",{children:"HOME"})},1),Object(b.jsx)(E,{exact:!0,to:"/Detect",children:Object(b.jsx)("li",{children:"DETECT"})},3)]})})}}]),n}(i.Component),k=n.p+"media/bgimage.14b90305.jpg";var D=function(){return Object(b.jsx)(a.a.Fragment,{children:Object(b.jsx)("div",{className:"App",style:{backgroundImage:"url(".concat(k,")"),backgroundSize:"cover"},children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:O}),Object(b.jsx)(r.a,{exact:!0,path:"/Detect",component:g})]})]})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};l.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),A()}},[[72,1,2]]]);
//# sourceMappingURL=main.ecd30300.chunk.js.map
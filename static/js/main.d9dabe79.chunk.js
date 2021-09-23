(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(8),o=a.n(c),r=(a(13),a(14),a(3)),m=a(4),d=a(6),i=a(5),p=a(2),u=a(0),h=[{key:"Q",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",name:"Heater-1"},{key:"W",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",name:"Heater-2"},{key:"E",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",name:"Heater-3"},{key:"A",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",name:"Heater-4"},{key:"S",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",name:"clap"},{key:"D",sound:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",name:"open-hh"},{key:"Z",sound:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",name:"kick-n-hat"},{key:"X",sound:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",name:"kick"},{key:"C",sound:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",name:"closed-hh"}],l=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).makeLit=function(){n.setState({lit:"rgb(240,240,240)"})},n.unLit=function(){n.setState({lit:""})},n.playAudio=function(){n.audio.current.play(),n.audio.current.parentNode.parentNode.nextSibling.children[0].querySelector("p").innerText=n.props.id},n.state={lit:""},n.audio=s.a.createRef(),n.playAudio=n.playAudio.bind(Object(p.a)(n)),n.makeLit=n.makeLit.bind(Object(p.a)(n)),n.unLit=n.unLit.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"drum-pad",onMouseDown:this.makeLit,onMouseUp:this.unLit,onClick:this.playAudio,style:{backgroundColor:this.state.lit},id:"key-"+this.props.text,children:[Object(u.jsx)("p",{className:"each-pad",children:this.props.text}),Object(u.jsx)("audio",{ref:this.audio,src:this.props.audio,className:"clip",id:this.props.text})]})}}]),a}(n.Component);document.addEventListener("keydown",(function(e){var t=e.key.toUpperCase(),a=document.getElementById(t);if(a){a.currentTime=0;var n=a.parentNode;n.classList.add("active"),a.play(),a.addEventListener("ended",(function(){n.classList.remove("active")}));var s=n.parentNode.nextSibling.firstChild,c=t.toUpperCase();h.map((function(e,t){return c===e.key&&(s.querySelector("p").innerText=e.name),!0}))}}));var k=[{key:"Q",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",name:"Heater-1"},{key:"W",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",name:"Heater-2"},{key:"E",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",name:"Heater-3"},{key:"A",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",name:"Heater-4"},{key:"S",sound:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",name:"clap"},{key:"D",sound:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",name:"open-hh"},{key:"Z",sound:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",name:"kick-n-hat"},{key:"X",sound:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",name:"kick"},{key:"C",sound:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",name:"closed-hh"}],y=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"drum-machine",children:Object(u.jsxs)("div",{id:"body-container",children:[Object(u.jsx)("div",{id:"keys-container",children:k.map((function(e,t){return Object(u.jsx)(l,{text:e.key,audio:e.sound,id:e.name},t)}))}),Object(u.jsxs)("div",{id:"display-container",children:[Object(u.jsx)("div",{id:"display",children:Object(u.jsx)("p",{id:"display-text",children:"Play Something"})}),Object(u.jsx)("label",{id:"vol-label",children:"Volume"}),Object(u.jsx)("input",{onChange:this.handleChange,type:"range",min:"1",max:"100",value:"50",className:"slider",id:"volumeSlider"})]})]})})}}]),a}(n.Component);var f=function(){return Object(u.jsx)(y,{})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.d9dabe79.chunk.js.map
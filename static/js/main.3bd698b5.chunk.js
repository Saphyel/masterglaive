(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{124:function(e){e.exports=[{id:1,title:"Max level",headers:["lvl 99","lvl 80","lvl 50","lvl 30","lvl 20"],contents:["This bird roosts at the top of the pecking order!","This bird's plumage exudes an air of prestige.","This bird's feathers have a certain sheen about them.","This bird is middle-of-the-flock in all regards.","This bird does not stand out from the flock."]},{id:2,title:"Bonus for training attributes",headers:["Any","stamina","fighter","speed","nothing"],contents:["It appears to possess incredible attributes.","Its sturdy musculature should make it more resillient.","It looks ready and raring for a good fight.","Its quick reflex should help it sprint to and fro. OR Its powerful wings should allow it to stay aloft longer.","It seems to possess no notable attributes."]}]},126:function(e){e.exports=[{id:1,title:"Lestallum",contents:["Marcia Lythe \u2013 Treasure Donations","Finnegan Parton \u2013 Gil Donations","Torben Talum \u2013 20% Munitions Discount"]},{id:2,title:"Old Lestallum",contents:["Ernie Sypert \u2013 Treasure Donations","Camilla Mescall \u2013 Gil Donations","Russel Springs \u2013 Meteorshard Donations"]},{id:3,title:"Old Lestallum 2",contents:["Elyria Ostis \u2013 Treasure Donations","Harper Flint \u2013 Meteorshard Donations","Matteo Marchesi \u2013 Gil Donations"]},{id:4,title:"Meldacio Hunter HQ",contents:["Devon Elkton \u2013 Trading Post Opening","Biggs Callux \u2013 Gil Donations","Wedge Kincaid \u2013 20% Imperial Discount"]},{id:5,title:"Meldacio Hunter HQ 2",contents:["Todd Portabello \u2013 Treasure Donations","Olga Boore \u2013 Meteorshard Donations","Norris Dweller \u2013 20% Munitions Discount"]},{id:6,title:"Norduscaen Garrison",contents:["Aiden Lunder \u2013 Item shop Opening","Killian West \u2013 Gil Discount"]}]},127:function(e){e.exports=[{id:1,title:"Lestallum",subtitle:"Birthplace of the most aggressive. They are all-out attackers blessed with high power and max HP.",requirement:"",content:["528 HP","49 MP","26 STR","22 VIT","38 MAG","40 SPI"]},{id:2,title:"Altissia",subtitle:"Birthplace of resilient people. They are granted bonuses to vitality, spirit and max HP.",requirement:"",content:["504 HP","55 MP","22 STR","24 VIT","47 MAG","44 SPI"]},{id:3,title:"Galahd",subtitle:"Birthplace of offensive specialists. They are blessed with a higher level of power and magic. They are both adept at melee combat and with offensive spells.",requirement:"",content:["480 HP","55 MP","24 STR","22 VIT","53 MAG","40 SPI"]},{id:4,title:"Insomnia",subtitle:"Birthplace of the magical specialists. They are given high magic and high max MP.",requirement:"",content:["432 HP","60 MP","19 STR","22 VIT","57 MAG","40 SPI"]},{id:5,title:"Tenebrae",subtitle:"Birthplace of many blessed with high magic, spirit, and max MP, but deficient in other areas.",requirement:"Rematch: The Pyreburner`s Trial",content:["336 HP","63 MP","15 STR","15 VIT","55 MAG","52 SPI"]},{id:6,title:"Gralea",subtitle:"Birthplace of many blessed with high Power, Vitality, and max HP, but deficient in other areas.",requirement:"Final Round: The Bladekeeper`s Trial",content:["600 HP","38 MP","30 STR","30 VIT","28 MAG","30 SPI"]}]},137:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(41),i=n.n(o),c=n(320),l=n(45),u=n(321),s=n.n(u),f=n(9),p=n.n(f),m=n(20),h=n.n(m),d=n(136),y=n.n(d),b=n(135),v=n.n(b),g=n(134),w=n.n(g),E=n(44),k=n.n(E),S=n(116),P=function(e){return a.a.createElement(k.a,{component:"p"},e.sentences.map(function(e){return a.a.createElement("span",{key:S()},e,a.a.createElement("br",null))}))},T=function(e){return a.a.createElement(h.a,{item:!0,sm:6,md:6,lg:6},a.a.createElement(y.a,null,a.a.createElement(v.a,{title:e.title,subheader:e.subtitle}),a.a.createElement(w.a,null,e.requirement?a.a.createElement(k.a,{color:"secondary"},"Requires: ",e.requirement):null,a.a.createElement(P,{sentences:e.content}))))},_=n(127),O={fetchAll:function(){return _}};function x(e){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void a(e)}n.done?r(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return!t||"object"!==x(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var A=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=M(this,D(t).call(this))).state={birthplaces:[]},e}var n,r,o,i,c;return n=t,(r=[{key:"getItems",value:(c=I(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{birthplaces:O.fetchAll()});case 1:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"componentDidMount",value:(i=I(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.getItems();case 3:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement(h.a,{container:!0,spacing:8,alignItems:"stretch"},this.state.birthplaces.map(function(e){return a.a.createElement(T,{key:e.id,title:e.title,subtitle:e.subtitle,requirement:e.requirement,content:e.content})})))}}])&&j(n.prototype,r),o&&j(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");C(e.prototype,t&&t.prototype),t&&C(e,t)}(t,e),t}(a.a.Component),R=function(e){return a.a.createElement(h.a,{item:!0,sm:6,md:6,lg:6},a.a.createElement(y.a,null,a.a.createElement(v.a,{title:e.title}),a.a.createElement(w.a,null,a.a.createElement(P,{sentences:e.content}))))},q=n(126),B={fetchAll:function(){return q}};function N(e){return(N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void a(e)}n.done?r(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var F=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=L(this,W(t).call(this))).state={leaders:[]},e}var n,r,o,i,c;return n=t,(r=[{key:"getItems",value:(c=G(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{leaders:B.fetchAll()});case 1:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"componentDidMount",value:(i=G(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.getItems();case 3:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement(h.a,{container:!0,spacing:8,alignItems:"stretch"},this.state.leaders.map(function(e){return a.a.createElement(R,{key:e.id,title:e.title,content:e.contents})})))}}])&&V(n.prototype,r),o&&V(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");H(e.prototype,t&&t.prototype),t&&H(e,t)}(t,e),t}(a.a.Component),Q=n(133),J=n.n(Q),K=n(125),U=n.n(K),Y=n(132),$=n.n(Y),z=function(e){return a.a.createElement(J.a,{margin:"normal"},a.a.createElement($.a,{htmlFor:e.name},e.title),a.a.createElement(U.a,{id:e.name,name:e.name,onChange:e.onChange,type:e.inputType,placeholder:e.placeholder,value:e.content,required:e.required,inputProps:{"aria-label":"Description"}}))},X=n(324),Z=n.n(X),ee=function(e){return a.a.createElement(J.a,{margin:"normal",required:!0},a.a.createElement($.a,{htmlFor:e.name},e.title),a.a.createElement(Z.a,{name:e.name,onChange:e.onChange,defaultValue:e.selectedOption},e.options.map(function(e){return a.a.createElement("option",{key:e,value:e},e)})))},te=n(42),ne=n.n(te),re=n(83),ae=n.n(re),oe=n(35),ie=n.n(oe),ce=n(131),le=n.n(ce),ue=function(e){return a.a.createElement(le.a,{variant:"dense"},a.a.createElement(k.a,{variant:"title"},e.message))};function se(e){return(se="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e){return(me=Object.getPrototypeOf||function(e){return e.__proto__})(e)}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var de=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=me(t).call(this,e))||"object"!==se(a)&&"function"!==typeof a?he(r):a).state={hp:"",attack:"",colour:"Red",speed:"D"},n.handleChange=n.handleChange.bind(he(he(n))),n.handleSubmit=n.handleSubmit.bind(he(he(n))),n}var n,r,o;return n=t,(r=[{key:"handleChange",value:function(e){var t,n,r;this.setState((t={},n=e.target.name,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addNewItem(this.state.hp,this.state.attack,this.state.colour,this.state.speed)}},{key:"render",value:function(){return a.a.createElement(h.a,{item:!0,xs:!0},a.a.createElement(ne.a,null,a.a.createElement(ue,{message:"Add a new chocobo"}),a.a.createElement("form",{className:"new",onSubmit:this.handleSubmit},a.a.createElement(ae.a,{row:!0},a.a.createElement(z,{inputType:"number",title:"HP",name:"hp",placeholder:"2000",required:!0,onChange:this.handleChange}),a.a.createElement(z,{inputType:"number",title:"Attack",name:"attack",placeholder:"1000",required:!0,onChange:this.handleChange})),a.a.createElement(ae.a,{row:!0},a.a.createElement(ee,{title:"Colour",name:"colour",options:["Red","Blue","Yellow","Black","Green"],selectedOption:this.state.colour,onChange:this.handleChange}),a.a.createElement(ee,{title:"Speed",name:"speed",options:["D","C","B","A","A+"],onChange:this.handleChange,selectedOption:this.state.speed})),a.a.createElement(ae.a,{row:!0},a.a.createElement(ie.a,{variant:"raised",color:"primary",type:"submit"},"Add")))))}}])&&pe(n.prototype,r),o&&pe(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");fe(e.prototype,t&&t.prototype),t&&fe(e,t)}(t,e),t}(a.a.Component),ye=n(130),be=n.n(ye),ve=n(323),ge=n.n(ve),we=n(82),Ee=n.n(we),ke=n(19),Se=n.n(ke),Pe=n(129),Te=n.n(Pe);function _e(e){return(_e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(e,t){return(Oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e,t){return!t||"object"!==_e(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ce(e){return(Ce=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var je=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ie(this,Ce(t).apply(this,arguments))}var n,r,o;return n=t,(r=[{key:"calcSpeed",value:function(e){return"C"===e?110:"B"===e?120:"A"===e?130:"A+"===e?140:100}},{key:"calculator",value:function(e){var t=parseInt(e.hp),n=parseInt(e.attack),r=this.calcSpeed(e.speed);return Math.round(t/20+n/10+r)}},{key:"render",value:function(){var e=this;return a.a.createElement(h.a,{item:!0,xs:!0},a.a.createElement(ne.a,null,a.a.createElement(ue,{message:"Stable of Chocobos"}),a.a.createElement(be.a,null,a.a.createElement(ge.a,null,a.a.createElement(Ee.a,null,this.props.header.map(function(e){return a.a.createElement(Se.a,{key:e},e)}))),a.a.createElement(Te.a,null,this.props.items.map(function(t){return a.a.createElement(Ee.a,{key:t.id},a.a.createElement(Se.a,null,t.chocobo.hp),a.a.createElement(Se.a,null,t.chocobo.attack),a.a.createElement(Se.a,null,t.chocobo.speed),a.a.createElement(Se.a,null,t.chocobo.colour),a.a.createElement(Se.a,null,e.calculator(t.chocobo)),a.a.createElement(Se.a,null,a.a.createElement(ie.a,{variant:"contained",color:"secondary",onClick:function(){return e.props.DeleteItem(t.id)}},"Delete")))})))))}}])&&xe(n.prototype,r),o&&xe(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Oe(e.prototype,t&&t.prototype),t&&Oe(e,t)}(t,e),t}(a.a.Component),Me=n(43);function De(e){return(De="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ae(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void a(e)}n.done?r(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function qe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Be(e,t){return!t||"object"!==De(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ne(e){return(Ne=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Ge=n(116),He=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Be(this,Ne(t).call(this))).addNewItem=function(t,n,r,a){var o={hp:t,attack:n,speed:a,colour:r},i=Ge(),c={id:i,chocobo:o};Object(Me.d)(i,o),e.setState(function(e){return e.stable.push(c),{stable:e.stable}})},e.DeleteItem=function(t){Object(Me.a)(t),e.setState(function(e){return e.stable=e.stable.filter(function(e){return e.id!==t}),{stable:e.stable}})},e.state={stable:[]},e}var n,r,o,i,c;return n=t,(r=[{key:"getItems",value:(c=Ae(p.a.mark(function e(){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Object(Me.c)();case 3:n=e.sent,r=0;case 5:if(!(r<n.length)){e.next=16;break}return e.t0=t,e.t1=n[r],e.next=10,Object(Me.b)(n[r]);case 10:e.t2=e.sent,e.t3={id:e.t1,chocobo:e.t2},e.t0.push.call(e.t0,e.t3);case 13:r++,e.next=5;break;case 16:return e.abrupt("return",{stable:t});case 17:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"componentDidMount",value:(i=Ae(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.getItems();case 3:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement(h.a,{container:!0,spacing:8,direction:"column",alignItems:"stretch",justify:"center"},a.a.createElement(je,{items:this.state.stable,DeleteItem:this.DeleteItem,header:["HP","Attack","Speed","Colour","Value","Manage"]}),a.a.createElement(de,{addNewItem:this.addNewItem})))}}])&&qe(n.prototype,r),o&&qe(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Re(e.prototype,t&&t.prototype),t&&Re(e,t)}(t,e),t}(a.a.Component),Ve=function(e){return a.a.createElement(h.a,{item:!0,xs:!0},a.a.createElement(ne.a,null,a.a.createElement(ue,{message:e.title}),a.a.createElement(be.a,null,a.a.createElement(Te.a,null,e.headers.map(function(t,n){return a.a.createElement(Ee.a,{key:t},a.a.createElement(Se.a,{component:"th",scope:"row"},t),a.a.createElement(Se.a,null,e.contents[n]))})))))},Le=n(124),We={fetchAll:function(){return Le}};function Fe(e){return(Fe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qe(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void a(e)}n.done?r(i):Promise.resolve(i).then(c,l)}function c(e){i("next",e)}function l(e){i("throw",e)}c()})}}function Je(e,t){return(Je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ke(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ue(e,t){return!t||"object"!==Fe(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ye(e){return(Ye=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var $e=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Ue(this,Ye(t).call(this))).state={training:[]},e}var n,r,o,i,c;return n=t,(r=[{key:"getItems",value:(c=Qe(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{training:We.fetchAll()});case 1:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"componentDidMount",value:(i=Qe(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,this.getItems();case 3:e.t1=e.sent,e.t0.setState.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"render",value:function(){return a.a.createElement("main",null,a.a.createElement(h.a,{container:!0,spacing:8,alignItems:"stretch",justify:"center"},this.state.training.map(function(e){return a.a.createElement(Ve,{key:e.id,title:e.title,headers:e.headers,contents:e.contents})})))}}])&&Ke(n.prototype,r),o&&Ke(n,o),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Je(e.prototype,t&&t.prototype),t&&Je(e,t)}(t,e),t}(a.a.Component),ze=n(322),Xe=n.n(ze),Ze=n(56),et=function(){return a.a.createElement(Xe.a,{position:"static",color:"default"},a.a.createElement(le.a,null,a.a.createElement(k.a,{variant:"title",color:"inherit",noWrap:!0},"MasterGlaive"),a.a.createElement(Ze.a,{className:"nav-link",activeClassName:"active",to:"/masterglaive/"},a.a.createElement(ie.a,{color:"inherit"},"Birthplace status")),a.a.createElement(Ze.a,{className:"nav-link",activeClassName:"active",to:"/masterglaive/leaders"},a.a.createElement(ie.a,{color:"inherit"},"City leaders")),a.a.createElement(Ze.a,{className:"nav-link",activeClassName:"active",to:"/masterglaive/stable"},a.a.createElement(ie.a,{color:"inherit"},"Stable")),a.a.createElement(Ze.a,{className:"nav-link",activeClassName:"active",to:"/masterglaive/training"},a.a.createElement(ie.a,{color:"inherit"},"Training"))))},tt=function(){return a.a.createElement("div",{id:"main"},a.a.createElement(s.a,null),a.a.createElement(et,null),a.a.createElement(l.a,{exact:!0,path:"/masterglaive/",component:A}),a.a.createElement(l.a,{path:"/masterglaive/leaders",component:F}),a.a.createElement(l.a,{path:"/masterglaive/stable",component:He}),a.a.createElement(l.a,{path:"/masterglaive/training",component:$e}))},nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rt(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(c.a,null,a.a.createElement(tt,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/masterglaive",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/masterglaive","/service-worker.js");nt?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):rt(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):rt(e)})}}()},319:function(e,t,n){n(318),e.exports=n(137)}},[[319,0,1]]]);
//# sourceMappingURL=main.3bd698b5.chunk.js.map
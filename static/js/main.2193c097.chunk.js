(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),l=(a(14),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=(a(15),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("table",{className:"table  "},o.a.createElement("tbody",null,this.props.items.map((function(t,a){return o.a.createElement("tr",{id:a},o.a.createElement("td",null,o.a.createElement("input",{type:"checkbox",name:t.term,onClick:e.props.handleCheck.bind(e,t)})),o.a.createElement("td",null,o.a.createElement("label",{style:t.checked?{textDecoration:"line-through"}:{textDecoration:"none"}},t.term)),o.a.createElement("td",null,o.a.createElement("button",{onClick:e.addProduct},"+")),o.a.createElement("td",null,o.a.createElement("button",{onClick:e.props.deleteToDo.bind(e,t)},"-")))})))))}}]),t}(o.a.Component)),h=a(8),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},a.handleChange=function(e){var t=e.target.name;console.log(e.target.value);var n=e.target.value;a.setState(Object(h.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault(),console.log("hallo"),a.props.addItem(a.state),a.setState({term:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("from",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"term",type:"text",value:this.state.term,onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"add to do from input"}),o.a.createElement("button",{onClick:this.handleSubmit},"add to do ")))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={items:[{term:"go to bed",checked:!1},{term:"eate Breakfast",checked:!1},{term:"go to school",checked:!1}]},a.addItem=function(e){console.log("i am term",e.term);var t=a.state.items,n={term:e.term,checked:!1};t.push(n),console.log("haaallo",t),a.setState({newState:t})},a.deleteToDo=function(e){console.log(e);var t=a.state.items.indexOf(e);console.log(t);a.state.items.splice(t,1);console.log(a.state),a.forceUpdate()},a.handleCheck=function(e){var t=a.state.items.indexOf(e);a.state.items[t].checked=!a.state.items[t].checked,a.forceUpdate()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,{items:this.state.items,deleteToDo:this.deleteToDo,handleCheck:this.handleCheck}),o.a.createElement(p,{addItem:this.addItem}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2193c097.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,a){},16:function(e,n,a){},17:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(7),o=a.n(c),i=(a(15),a(1)),l=a(2),u=a(4),s=a(3),h=a(5),m=a(8),d=a.n(m),p=(a(16),[{name:"Software Development Alumni Fund"},{name:"Economics Research Alumni Fund"},{name:"Natural Sciences Alumni Fund"},{name:"Arts and Technology Development Fund"}]),v=function(e){function n(e){var a;return Object(i.a)(this,n),(a=Object(u.a)(this,Object(s.a)(n).call(this,e))).handleChange=function(e){a.setState({value:e.target.value}),a.props.handleSearchChange(e.target.value)},a.state={value:""},a}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{className:"searchBar",type:"text",placeholder:"Search for a Fund...",value:this.state.value,onChange:this.handleChange})}}]),n}(t.Component),f=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"fund"},r.a.createElement("h1",null,this.props.name))}}]),n}(t.Component),b={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMachCharLength:1,keys:["name"]},g=function(e){function n(e){var a;return Object(i.a)(this,n),(a=Object(u.a)(this,Object(s.a)(n).call(this,e))).handleSearchChange=function(e){a.setState({searchValue:e})},a.state={searchValue:""},a}return Object(h.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=new d.a(p,b).search(this.state.searchValue).map(function(e){return r.a.createElement(f,{key:e.name,name:e.name})});return r.a.createElement("div",{className:"App"},r.a.createElement(v,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"funds"},e))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.63ad68c9.chunk.js.map
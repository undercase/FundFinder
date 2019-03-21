(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),s=t.n(i),c=(t(15),t(1)),o=t(2),l=t(4),h=t(3),d=t(5),u=t(8),m=t.n(u),p=(t(16),[{name:"Academic Advancement Program",description:"AAP, the largest university-based, student-diversity program in the nation, turns unlikely students into successful graduates and future leaders."},{name:"Achievement Scholarship",description:"Aiding undergraduate students who demonstrate great need and high academic merit."},{name:"Ahmanson Adult Congenital Heart Disease Center",description:"Providing patient care, diagnostic, research and educational facilities for adults with congenital heart disease."},{name:"Alumni Scholarships General Fund",description:"Supporting leadership and academic excellence by giving to one of UCLA's longest-standing scholarship programs."},{name:"American Indian Studies Center",description:"Fostering innovative academic research and scholarship in the field of American Indian Studies."},{name:"Arts & Global Health Center",description:"Unleashing the transformative power of the arts to advance global health."},{name:"Asian American Studies Center",description:"Transforming education, research, community service and the arts as they relate to Asian American and Pacific Islander communities."},{name:"Biomedical Graduate Education",description:"Supporting UCLA\u2019s biomedical Ph.D. students, no matter what size the gift, drives groundbreaking research and advances the future of medicine."},{name:"Broad STEM Cell Annual Fund",description:"The UCLA Broad Stem Cell Research Center is working to transform patient care through the development of personalized stem cell-based therapies for a wide range of diseases."},{name:"Bruin Guardian Scholars",description:"Setting up current and former foster youth for success."},{name:"Bruin Woods Centennial Scholarship",description:"Supporting the Bruin Woods student staff who make family camp memorable and magical."},{name:"California Center for Population Research",description:"The California Center for Population Research at UCLA is a campus-wide interdisciplinary research co-operative comprising nearly 200 faculty and researchers from disciplines spanning the behavioral, health, medical and social sciences."}]),g=[{name:"tag1",title:"Tag #1"},{name:"tag2",title:"Tag #2"},{name:"tag3",title:"Tag #3"}],f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(h.a)(a).call(this,e))).handleChange=function(e){t.setState({value:e.target.value}),t.props.handleSearchChange(e.target.value)},t.state={value:""},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{className:"searchBar",type:"text",placeholder:"Search for a Fund...",value:this.state.value,onChange:this.handleChange})}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"fund"},r.a.createElement("h1",null,this.props.data.name),r.a.createElement("p",null,this.props.data.description))}}]),a}(n.Component),b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){t.props.toggleTag(t.props.tagName)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.selected?"selected":"",a="tag ".concat(e);return r.a.createElement("div",{className:a,onClick:this.handleClick},r.a.createElement("h3",null,this.props.children))}}]),a}(n.Component),C=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=g.map(function(a){return r.a.createElement(b,{key:a.name,tagName:a.name,selected:e.props.selectedTags.has(a.name),toggleTag:e.props.toggleTag},a.title)});return r.a.createElement("div",{className:"tags"},a)}}]),a}(n.Component),y={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMachCharLength:1,keys:["name","description"]},S=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(h.a)(a).call(this,e))).handleSearchChange=function(e){t.setState({searchValue:e})},t.toggleSearchTag=function(e){t.setState(function(a){var t=new Set(a.searchTags);return a.searchTags.has(e)?t.delete(e):t.add(e),{searchTags:t}})},t.state={searchValue:"",searchTags:new Set([])},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=new m.a(p,y),a=(this.state.searchValue?e.search(this.state.searchValue):p).map(function(e){return r.a.createElement(v,{key:e.name,data:e})});return r.a.createElement("div",{className:"App"},r.a.createElement(f,{handleSearchChange:this.handleSearchChange}),r.a.createElement(C,{selectedTags:this.state.searchTags,toggleTag:this.toggleSearchTag}),r.a.createElement("div",{className:"funds"},a))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.24003fd5.chunk.js.map
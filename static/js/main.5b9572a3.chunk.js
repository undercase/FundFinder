(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},16:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),s=n.n(i),o=(n(15),n(1)),c=n(2),d=n(4),l=n(3),h=n(5),u=n(8),m=n.n(u),p=(n(16),[{name:"Academic Advancement Program",description:"AAP, the largest university-based, student-diversity program in the nation, turns unlikely students into successful graduates and future leaders."},{name:"Achievement Scholarship",description:"Aiding undergraduate students who demonstrate great need and high academic merit."},{name:"Ahmanson Adult Congenital Heart Disease Center",description:"Providing patient care, diagnostic, research and educational facilities for adults with congenital heart disease."},{name:"Alumni Scholarships General Fund",description:"Supporting leadership and academic excellence by giving to one of UCLA's longest-standing scholarship programs."},{name:"American Indian Studies Center",description:"Fostering innovative academic research and scholarship in the field of American Indian Studies."},{name:"Arts & Global Health Center",description:"Unleashing the transformative power of the arts to advance global health."},{name:"Asian American Studies Center",description:"Transforming education, research, community service and the arts as they relate to Asian American and Pacific Islander communities."},{name:"Biomedical Graduate Education",description:"Supporting UCLA\u2019s biomedical Ph.D. students, no matter what size the gift, drives groundbreaking research and advances the future of medicine."},{name:"Broad STEM Cell Annual Fund",description:"The UCLA Broad Stem Cell Research Center is working to transform patient care through the development of personalized stem cell-based therapies for a wide range of diseases."},{name:"Bruin Guardian Scholars",description:"Setting up current and former foster youth for success."},{name:"Bruin Woods Centennial Scholarship",description:"Supporting the Bruin Woods student staff who make family camp memorable and magical."},{name:"California Center for Population Research",description:"The California Center for Population Research at UCLA is a campus-wide interdisciplinary research co-operative comprising nearly 200 faculty and researchers from disciplines spanning the behavioral, health, medical and social sciences."}]),f=function(e){function a(e){var n;return Object(o.a)(this,a),(n=Object(d.a)(this,Object(l.a)(a).call(this,e))).handleChange=function(e){n.setState({value:e.target.value}),n.props.handleSearchChange(e.target.value)},n.state={value:""},n}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{className:"searchBar",type:"text",placeholder:"Search for a Fund...",value:this.state.value,onChange:this.handleChange})}}]),a}(t.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"fund"},r.a.createElement("h1",null,this.props.data.name),r.a.createElement("p",null,this.props.data.description))}}]),a}(t.Component),v={shouldSort:!0,threshold:.6,location:0,distance:100,maxPatternLength:32,minMachCharLength:1,keys:["name","description"]},C=function(e){function a(e){var n;return Object(o.a)(this,a),(n=Object(d.a)(this,Object(l.a)(a).call(this,e))).handleSearchChange=function(e){n.setState({searchValue:e})},n.state={searchValue:""},n}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=new m.a(p,v),a=(this.state.searchValue?e.search(this.state.searchValue):p).map(function(e){return r.a.createElement(g,{key:e.name,data:e})});return r.a.createElement("div",{className:"App"},r.a.createElement(f,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"funds"},a))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.5b9572a3.chunk.js.map
(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[33],{156:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t(97),l=t(7),o=t(95),r=t(16),i=t(0),c=t.n(i),m=t(13),s=t.n(m),p=t(124),d=t(93),g=["defaultOpen"],h=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},t.toggle=t.toggle.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},t.render=function(){return c.a.createElement(p.a,Object(l.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(d.omit)(this.props,g)))},a}(i.Component);h.propTypes=Object(n.a)({defaultOpen:s.a.bool,onToggle:s.a.func},p.a.propTypes)},681:function(e,a,t){"use strict";t.r(a),t.d(a,"applicationForm1Query",(function(){return G})),t.d(a,"applicationForm2Query",(function(){return z}));var n=t(5),l=t(2),o=t.n(l),r=t(38),i=t(0),c=t.n(i),m=t(133),s=t(134),p=t(146),d=t(147),g=t(198),h=t(199),u=t(172),y=t(145),E=t(315),b=t(194),v=t(195),C=t(196),x=t(200),f=t(201),P=t(156),A=t(368),S=t(300),T=t(299),N=t(92),_=t.n(N),F=t(210),k=t.n(F),D=t(212),O=t.n(D),w=t(213),j=t.n(w),M=(t(214),t(11));M.a.collection("Global_Variables").doc("admitCard").get().then((function(e){e.exists?console.log("Document data:",e.data()):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));const G=function(){var e=Object(r.a)(o.a.mark((function e(a,t,n,l,r,i){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{M.a.collection("Global_Variables").doc("admitCard").set({paper1_date:a,paper1_time:t,paper2_date:n,paper2_time:l}),console.log("success")}catch(o){console.log("not success"),console.log(o),alert(o.message)}case 1:case"end":return e.stop()}}),e)})));return function(a,t,n,l,o,r){return e.apply(this,arguments)}}(),z=function(){var e=Object(r.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t=M.a.collection("Global_Variables").doc("admitCardAvailable"),console.log("success state changed"),t.set({isAdmitCardAvailable:a})}catch(n){console.log("not success"),console.log(n),alert(n.message)}case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();class L extends i.Component{constructor(...e){super(...e),this.state={paper1_date:"",paper1_time:"",paper2_date:"",paper2_time:"",stetDirectorSign:"",isAdmitCardAvailable:!0},this.applicationForm1=()=>{G(this.state.paper1_date,this.state.paper1_time,this.state.paper2_date,this.state.paper2_time,this.state.stetDirectorSign,this.state.isAdmitCardAvailable)},this.applicationForm2=()=>{z(this.state.isAdmitCardAvailable)},this.sendData=e=>{console.log("sendData function",this.state),e.preventDefault(),this.applicationForm1()},this.sendState=e=>{console.log("sendData function",this.state),this.applicationForm2()}}render(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"header-title"},"Generate Admit Cards"),c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement(p.a,null,c.a.createElement(d.a,null,c.a.createElement(g.a,{row:!0},c.a.createElement(h.a,{for:"fname",md:3},"Paper 1 date & time"),c.a.createElement(s.a,{md:9},c.a.createElement(m.a,null,c.a.createElement(s.a,{md:6},c.a.createElement(u.a,{type:"Date",name:"paper1_date",id:"paper1_date",placeholder:"Enter Paper 1 date",value:this.state.paper1_date,onChange:e=>{this.setState({paper1_date:e.target.value}),console.log(e.target.value)}})),c.a.createElement(s.a,{md:6},c.a.createElement(u.a,{type:"Time",name:"paper1_time",id:"paper1_time",placeholder:"Enter Paper 1 time",value:this.state.paper1_time,onChange:e=>{this.setState({paper1_time:e.target.value}),console.log(e.target.value)}}))))),c.a.createElement(g.a,{row:!0},c.a.createElement(h.a,{for:"fname",md:3},"Paper 2 date & time"),c.a.createElement(s.a,{md:9},c.a.createElement(m.a,null,c.a.createElement(s.a,{md:6},c.a.createElement(u.a,{type:"Date",name:"paper2_date",id:"paper2_date",placeholder:"Enter Paper 2 date",value:this.state.paper2_date,onChange:e=>{this.setState({paper2_date:e.target.value}),console.log(e.target.value)}})),c.a.createElement(s.a,{md:6},c.a.createElement(u.a,{type:"Time",name:"paper2_time",id:"paper2_time",placeholder:"Enter Paper 2 time",value:this.state.paper2_time,onChange:e=>{this.setState({paper2_time:e.target.value}),console.log(e.target.value),console.log(this.state)}}))))),c.a.createElement(g.a,{row:!0},c.a.createElement(h.a,{for:"certdeg2",md:3},"Upload STET Director Signature"),c.a.createElement(s.a,{md:9},c.a.createElement(u.a,{type:"file",name:"stetDirectorSign",id:"stetDirectorSign",value:this.state.stetDirectorSign,onChange:e=>{this.setState({stetDirectorSign:e.target.value}),console.log(e.target.value)}}))),c.a.createElement("div",{className:"text-right"},c.a.createElement(y.a,{className:"pull-right",onClick:this.sendData,color:"success"},"Generate")))))),c.a.createElement("hr",{style:{height:"1px",color:"black",background:"black"}}),c.a.createElement("div",{class:"row mt-5 mx-2"},c.a.createElement("table",{className:"table table-bordered",style:{border:"1px solid #000"}},c.a.createElement(m.a,null,c.a.createElement(s.a,{md:9},c.a.createElement("h5",{className:"ml-3"},"Provide access to Admit Card for all Candidates")),c.a.createElement(s.a,{md:3},c.a.createElement(E.a,{type:"switch",id:"exampleCustomSwitch",name:"customSwitch",className:"mt-2 mr-2 text-right",value:this.state.isAdmitCardAvailable,onChange:e=>{this.setState({isAdmitCardAvailable:!this.state.isAdmitCardAvailable}),console.log(e.target.value),this.sendState()}}))))))}}class V extends i.Component{constructor(e){super(e),this.toggle=e=>{this.state.activeTab!==e&&this.setState({activeTab:e})},this.state={activeTab:"1"},this.toggle=this.toggle.bind(this)}render(){const e=[{id:"1",title:"Generate Admit Cards",icon:"uil-home-alt",text:c.a.createElement(L,null)},{id:"2",title:"View Generated Admit Cards",icon:"uil-user",text:c.a.createElement(Z,null)}];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"header-title mb-3 mt-3"},"Admit Card"),c.a.createElement(p.a,null,c.a.createElement(d.a,null,c.a.createElement(b.a,{className:"nav nav-pills navtab-bg nav-justified"},e.map((e,a)=>c.a.createElement(v.a,{key:a},c.a.createElement(C.a,{href:"#",className:_()({active:this.state.activeTab===e.id}),onClick:()=>{this.toggle(e.id)}},c.a.createElement("i",{className:_()(e.icon,"d-sm-none","d-block","mr-1")}),c.a.createElement("span",{className:"d-none d-sm-block"},e.title))))),c.a.createElement(x.a,{activeTab:this.state.activeTab},e.map((e,a)=>c.a.createElement(f.a,{tabId:e.id,key:a},c.a.createElement(m.a,null,c.a.createElement(s.a,{sm:"12"},c.a.createElement("p",{className:"mt-2"},e.text)))))))))}}const B=[{id:1,age:32,name:"Burt",company:"Kaggle",phone:"+1 (823) 532-2427"},{id:2,age:23,name:"Long",company:"Magmina",phone:"+1 (813) 583-2089"},{id:3,age:31,name:"Alvarado",company:"Translink",phone:"+1 (975) 468-3875"},{id:4,age:24,name:"Lilia",company:"Digitalus",phone:"+1 (891) 537-3461"},{id:5,age:25,name:"Amanda",company:"Bunga",phone:"+1 (916) 522-3747"},{id:6,age:20,name:"Alexandra",company:"Conjurica",phone:"+1 (876) 492-3181"},{id:7,age:27,name:"Diana",company:"Extragen",phone:"+1 (977) 417-3038"},{id:8,age:26,name:"Goodman",company:"Aquamate",phone:"+1 (930) 545-2289"},{id:9,age:26,name:"Edith",company:"Pyrami",phone:"+1 (854) 506-3468"},{id:10,age:29,name:"Juana",company:"Singavera",phone:"+1 (872) 560-2324"},{id:11,age:21,name:"Fitzgerald",company:"Dancerity",phone:"+1 (813) 573-2507"},{id:12,age:38,name:"Madden",company:"Corpulse",phone:"+1 (935) 534-3876"},{id:13,age:40,name:"Jewell",company:"Frenex",phone:"+1 (886) 516-3262"},{id:14,age:32,name:"Kerr",company:"Artiq",phone:"+1 (807) 561-3077"},{id:15,age:20,name:"Washington",company:"Organica",phone:"+1 (948) 458-3517"},{id:16,age:20,name:"Audrey",company:"Softmicro",phone:"+1 (900) 592-3841"},{id:17,age:39,name:"Allison",company:"Playce",phone:"+1 (998) 478-3810"},{id:18,age:25,name:"Holder",company:"Paragonia",phone:"+1 (850) 536-2708"},{id:19,age:26,name:"Atkinson",company:"Scentric",phone:"+1 (850) 467-2761"},{id:20,age:35,name:"Delaney",company:"Telpod",phone:"+1 (934) 468-2218"},{id:21,age:20,name:"Myrna",company:"Zanity",phone:"+1 (953) 565-3836"},{id:22,age:30,name:"Erna",company:"Techade",phone:"+1 (872) 574-3879"},{id:23,age:36,name:"Fannie",company:"Cubix",phone:"+1 (843) 576-2904"},{id:24,age:38,name:"Melody",company:"Talae",phone:"+1 (817) 424-3500"},{id:25,age:27,name:"Letitia",company:"Enjola",phone:"+1 (857) 441-2917"},{id:26,age:33,name:"Nina",company:"Eventex",phone:"+1 (917) 599-2793"},{id:27,age:40,name:"Byrd",company:"Obones",phone:"+1 (846) 422-2064"},{id:28,age:34,name:"Chen",company:"Dadabase",phone:"+1 (956) 474-3409"},{id:29,age:25,name:"Alexandria",company:"Turnabout",phone:"+1 (964) 415-2278"},{id:30,age:37,name:"Page",company:"Metroz",phone:"+1 (897) 541-2460"},{id:31,age:24,name:"Clare",company:"Zilch",phone:"+1 (832) 591-3814"},{id:32,age:38,name:"Lindsey",company:"Roughies",phone:"+1 (942) 579-2920"},{id:33,age:32,name:"Oconnor",company:"Kinetica",phone:"+1 (899) 599-3206"},{id:34,age:35,name:"Maldonado",company:"Zentime",phone:"+1 (955) 419-2815"},{id:35,age:25,name:"Day",company:"Eargo",phone:"+1 (895) 555-2916"},{id:36,age:20,name:"Collier",company:"Phuel",phone:"+1 (998) 468-2079"},{id:37,age:40,name:"Jeannette",company:"Entogrok",phone:"+1 (904) 567-2078"},{id:38,age:33,name:"Wallace",company:"Nurali",phone:"+1 (877) 566-3957"},{id:39,age:39,name:"Mcfadden",company:"Cincyr",phone:"+1 (949) 405-3992"},{id:40,age:21,name:"Chrystal",company:"Futurize",phone:"+1 (988) 458-3032"},{id:41,age:31,name:"Leila",company:"Zensure",phone:"+1 (902) 447-2419"},{id:42,age:24,name:"Madelyn",company:"Egypto",phone:"+1 (881) 538-3081"},{id:43,age:39,name:"Peck",company:"Tellifly",phone:"+1 (803) 452-3922"},{id:44,age:32,name:"Garrett",company:"Aquasure",phone:"+1 (876) 475-2185"},{id:45,age:21,name:"Kramer",company:"Terrago",phone:"+1 (912) 404-2597"},{id:46,age:35,name:"Lane",company:"Anivet",phone:"+1 (911) 495-3587"},{id:47,age:21,name:"Merritt",company:"Inear",phone:"+1 (856) 519-3838"},{id:48,age:25,name:"Margarita",company:"Unq",phone:"+1 (931) 558-3156"},{id:49,age:28,name:"Leigh",company:"Marqet",phone:"+1 (918) 526-2007"},{id:50,age:31,name:"Coleman",company:"Insuresys",phone:"+1 (827) 449-3786"},{id:51,age:31,name:"Alexander",company:"Portico",phone:"+1 (854) 576-2455"},{id:52,age:38,name:"Tanisha",company:"Earthwax",phone:"+1 (994) 494-3496"},{id:53,age:23,name:"Crane",company:"Pushcart",phone:"+1 (924) 497-3347"},{id:54,age:26,name:"Carmella",company:"Acusage",phone:"+1 (898) 575-2585"},{id:55,age:27,name:"Rosalind",company:"Isologica",phone:"+1 (838) 572-2994"},{id:56,age:37,name:"Duran",company:"Gazak",phone:"+1 (991) 446-3820"},{id:57,age:27,name:"Bernard",company:"Zoinage",phone:"+1 (824) 585-2197"},{id:58,age:29,name:"Tate",company:"Endipine",phone:"+1 (896) 448-2084"},{id:59,age:39,name:"Pearlie",company:"Progenex",phone:"+1 (805) 545-2585"},{id:60,age:20,name:"Manning",company:"Handshake",phone:"+1 (917) 405-3406"}],I=[{dataField:"id",text:"ID",sort:!0},{dataField:"name",text:"Name",sort:!0},{dataField:"phone",text:"Phone Number",sort:!1,searchable:!1},{dataField:"age",text:"Age",sort:!0,searchable:!1},{dataField:"company",text:"Company",sort:!1,searchable:!1}],q=[{dataField:"id",order:"asc"}],J=({options:e,currSizePerPage:a,onSizePerPageChange:t})=>c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:"d-inline mr-1"},"Show"),c.a.createElement(u.a,{type:"select",name:"select",id:"no-entries",className:"custom-select custom-select-sm d-inline col-1",defaultValue:a,onChange:e=>t(e.target.value)},e.map((e,a)=>c.a.createElement("option",{key:a},e.text))),c.a.createElement("label",{className:"d-inline ml-1"},"entries")),R=()=>{const e=D.Search.SearchBar,a=D.CSVExport.ExportCSVButton,t={paginationSize:5,pageStartIndex:1,firstPageText:"First",prePageText:"Back",nextPageText:"Next",lastPageText:"Last",nextPageTitle:"First page",prePageTitle:"Pre page",firstPageTitle:"Next page",lastPageTitle:"Last page",showTotal:!0,paginationTotalRenderer:(e,a,t)=>c.a.createElement("span",{className:"react-bootstrap-table-pagination-total ml-4"},"Showing ",e," to ",a," of ",t," Results"),sizePerPageRenderer:J,sizePerPageList:[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25},{text:"All",value:B.length}]},l=({columns:e,onColumnToggle:a,toggles:t})=>c.a.createElement(P.a,{className:"mb-3"},c.a.createElement(A.a,{tag:"button",className:"btn btn-white"},"Select Columns ",c.a.createElement("i",{className:"uil uil-angle-down font-size-15 ml-1 align-middle"})),c.a.createElement(S.a,null,e.map(e=>Object(n.a)(Object(n.a)({},e),{},{toggle:t[e.dataField]})).map(e=>c.a.createElement(T.a,{key:e.dataField,onClick:()=>a(e.dataField)},e.toggle&&c.a.createElement("i",{className:"uil uil-check"}),c.a.createElement("span",{className:"ml-2"},e.text)))));return c.a.createElement(p.a,null,c.a.createElement(d.a,null,c.a.createElement(O.a,{bootstrap4:!0,keyField:"id",data:B,columns:I,search:!0,columnToggle:!0,exportCSV:{onlyExportFiltered:!0,exportAll:!1}},n=>c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement(e,n.searchProps)),c.a.createElement(s.a,null,c.a.createElement(l,n.columnToggleProps)),c.a.createElement(s.a,{className:"text-right"},c.a.createElement(a,Object.assign({},n.csvProps,{className:"btn btn-primary"}),"Export CSV"))),c.a.createElement(k.a,Object.assign({},n.baseProps,{bordered:!1,defaultSorted:q,pagination:j()(t),wrapperClasses:"table-responsive",keyField:"id",data:B,columns:I}))))))},Z=()=>c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"header-title mt-2"},"Generated Admit Cards"),c.a.createElement(m.a,null,c.a.createElement(s.a,null,c.a.createElement(R,null))));a.default=V}}]);
//# sourceMappingURL=33.a61fa9d6.chunk.js.map
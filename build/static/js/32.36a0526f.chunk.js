(this["webpackJsonpshreyu-react"]=this["webpackJsonpshreyu-react"]||[]).push([[32],{126:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(32),s=a(152),c=a(153);t.a=e=>{const t=e.title||"",a=e.breadCrumbItems||"";return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{className:"float-right mt-1 font-size-14"},n.a.createElement(c.a,null,n.a.createElement(l.b,{to:"/"},"Shreyu")),a.map((e,t)=>e.active?n.a.createElement(c.a,{active:!0,key:t},e.label):n.a.createElement(c.a,{key:t},n.a.createElement(l.b,{to:e.path},e.label)))),n.a.createElement("h4",{className:"mb-1 mt-0"},t))}},678:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(133),s=a(134),c=a(146),o=a(147),m=a(198),i=a(199),h=a(172),E=a(145),d=(a(126),a(173),a(11));class p extends r.Component{constructor(...e){super(...e),this.state={centerNo:"",centerName:"",centerAddress:"",centerCity:"",centerVacancies:""},this.sendData=e=>{console.log("sendData function",this.state),e.preventDefault();try{d.a.collection("Admin_Exam_Centre").doc().set({centerNo:this.state.centerNo,centerName:this.state.centerName,centerAddress:this.state.centerAddress,centerCity:this.state.centerCity,centerVacancies:this.state.centerVacancies}),window.location.reload()}catch(t){console.log("Admin_Exam_Centre"),console.log(t),alert(t.message)}}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement(s.a,null,n.a.createElement(c.a,null,n.a.createElement("h4",{className:"header-title mt-2 mb-2"},"Set Exam Centers"),n.a.createElement(o.a,null,n.a.createElement(m.a,{row:!0},n.a.createElement(i.a,{for:"fname",md:3},"Exam Center No."),n.a.createElement(s.a,{md:9},n.a.createElement(h.a,{type:"text",name:"centerNo",id:"centerNo",placeholder:"Enter Exam Center No.",value:this.state.centerNo,onChange:e=>{this.setState({centerNo:e.target.value}),console.log(e.target.value)}}))),n.a.createElement(m.a,{row:!0},n.a.createElement(i.a,{for:"fname",md:3},"Exam Center Name"),n.a.createElement(s.a,{md:9},n.a.createElement(h.a,{type:"text",name:"centerName",id:"centerName",placeholder:"Enter Exam Center Name",value:this.state.centerName,onChange:e=>{this.setState({centerName:e.target.value}),console.log(e.target.value)}}))),n.a.createElement(m.a,{row:!0},n.a.createElement(i.a,{for:"fname",md:3},"Exam Center Address"),n.a.createElement(s.a,{md:9},n.a.createElement(h.a,{type:"textarea",name:"centerAddress",id:"centerAddress",placeholder:"Enter Exam Center Address",value:this.state.centerAddress,onChange:e=>{this.setState({centerAddress:e.target.value}),console.log(e.target.value)}}))),n.a.createElement(m.a,{row:!0},n.a.createElement(i.a,{for:"fname",md:3},"Exam Center City"),n.a.createElement(s.a,{md:9},n.a.createElement(h.a,{type:"text",name:"centerCity",id:"centerCity",placeholder:"Enter Exam Center City",value:this.state.centerCity,onChange:e=>{this.setState({centerCity:e.target.value}),console.log(e.target.value)}}))),n.a.createElement(m.a,{row:!0},n.a.createElement(i.a,{for:"fname",md:3},"Exam Center Vacancies"),n.a.createElement(s.a,{md:9},n.a.createElement(h.a,{type:"text",name:"centerVacancies",id:"centerVacancies",placeholder:"Enter Exam Center Vacancies",value:this.state.centerVacancies,onChange:e=>{this.setState({centerVacancies:e.target.value}),console.log(e.target.value)}}))),n.a.createElement("div",{className:"text-right"},n.a.createElement(E.a,{className:"pull-right",onClick:this.sendData,color:"success"},"Add")))))))}}class u extends r.Component{constructor(...e){super(...e),this.state={onePaperFeesGM:"",twoPaperFeesGM:"",onePaperFeesOthers:"",twoPaperFeesOthers:""},this.sendData=e=>{console.log("sendData function",this.state),e.preventDefault();try{d.a.collection("Global_Variables").doc("applicationFees").set({onePaperFeesGM:this.state.onePaperFeesGM,twoPaperFeesGM:this.state.twoPaperFeesGM,onePaperFeesOthers:this.state.onePaperFeesOthers,twoPaperFeesOthers:this.state.twoPaperFeesOthers}),window.location.reload()}catch(t){console.log("Global_Variables applicationFees"),console.log(t),alert(t.message)}}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null,n.a.createElement(s.a,null,n.a.createElement(c.a,null,n.a.createElement("h4",{className:"header-title mt-2 mb-2"},"Set Exam Fees"),n.a.createElement(o.a,null,n.a.createElement(m.a,{row:!0},n.a.createElement(i.a,{for:"fname",md:3},"Fees for GM Candidate"),n.a.createElement(s.a,{md:9},n.a.createElement(l.a,null,n.a.createElement(s.a,{md:6},n.a.createElement(h.a,{type:"text",name:"onePaperFeesGM",id:"onePaperFeesGM",placeholder:"Enter one paper Fees for GM",value:this.state.onePaperFeesGM,onChange:e=>{this.setState({onePaperFeesGM:e.target.value}),console.log(e.target.value)}})),n.a.createElement(s.a,{md:6},n.a.createElement(h.a,{type:"text",name:"twoPaperFeesGM",id:"twoPaperFeesGM",placeholder:"Enter two papers Fees for GM",value:this.state.twoPaperFeesGM,onChange:e=>{this.setState({twoPaperFeesGM:e.target.value}),console.log(e.target.value)}}))))),n.a.createElement(m.a,{row:!0},n.a.createElement(i.a,{for:"fname",md:3},"Fees for OBC/SC/ST/PwD Candidates"),n.a.createElement(s.a,{md:9},n.a.createElement(l.a,null,n.a.createElement(s.a,{md:6},n.a.createElement(h.a,{type:"text",name:"onePaperFeesOthers",id:"onePaperFeesOthers",placeholder:"Enter one paper Fees for others",value:this.state.onePaperFeesOthers,onChange:e=>{this.setState({onePaperFeesOthers:e.target.value}),console.log(e.target.value)}})),n.a.createElement(s.a,{md:6},n.a.createElement(h.a,{type:"text",name:"twoPaperFeesOthers",id:"twoPaperFeesOthers",placeholder:"Enter two papers Fees for others",value:this.state.twoPaperFeesOthers,onChange:e=>{this.setState({twoPaperFeesOthers:e.target.value}),console.log(e.target.value),console.log(this.state)}}))))),n.a.createElement("div",{className:"text-right"},n.a.createElement(E.a,{className:"pull-right",onClick:this.sendData,color:"success"},"Set")))))))}}class g extends n.a.Component{render(){return n.a.createElement("div",{className:"mt-4"},n.a.createElement("h4",{className:"header-title mt-4 mb-4"},"Application Form"),n.a.createElement(c.a,null,n.a.createElement(o.a,null,n.a.createElement(u,null))),n.a.createElement(c.a,null,n.a.createElement(o.a,null,n.a.createElement(p,null))))}}t.default=g}}]);
//# sourceMappingURL=32.36a0526f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,r){t.exports=r(29)},29:function(t,e,r){"use strict";r.r(e);var a=r(0),i=r.n(a),s=r(14),n=r.n(s),c=r(31),o=r(4),u=r(5),p=r(7),l=r(6),m=r(8),h=r(30),y=r(32),d=r(10),b=r.n(d),f=r(11),v={width:"126px",height:"150px",textAlign:"center",display:"flex",flexDirection:"column",border:"solid",borderRadius:"7px",backgroundColor:"#2f88fc",lineHeight:"18px"},E={fontSize:"30px",fontWeight:"bold",lineHeight:"30px"},g={lineHeight:"16px"},k={fontSize:"16px"},w=function(t){function e(){return Object(o.a)(this,e),Object(p.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props.time,e="string"===typeof t?t.split(" ")[1]:"",r="string"===typeof t?t.split(" ")[0]:"",a=r.slice(0,-3);a=a.substr(5);var s=r.substr(8),n=e.slice(0,-6),c="";switch(n){case"00":n="12am";break;case"03":n="3am";break;case"06":n="6am";break;case"09":n="9am";break;case"12":n="12pm";break;case"15":n="3pm";break;case"18":n="6pm";break;case"21":n="9pm";break;default:n="No Time"}switch("string"===typeof s?s.split("")[1]:""){case"1":c="st";break;case"2":c="nd";break;case"3":c="rd";break;default:c="th"}switch(a){case"01":a="Jan";break;case"02":a="Feb";break;case"03":a="March";break;case"04":a="April";break;case"05":a="May";break;case"06":a="June";break;case"07":a="July";break;case"08":a="Aug";break;case"09":a="Sept";break;case"10":a="Oct";break;case"11":a="Nov";break;case"12":a="Dec";break;default:a=""}return i.a.createElement("div",null,this.props.temperature&&i.a.createElement("div",{style:v},this.props.city&&this.props.country&&i.a.createElement("p",{style:g},this.props.city,", ",this.props.country),this.props.time&&i.a.createElement("p",{style:k},a," ",s,c),this.props.time&&i.a.createElement("p",{style:k},n),this.props.temperature&&i.a.createElement("p",{style:E},this.props.temperature,"\xb0"),this.props.description&&i.a.createElement("p",null,this.props.description),this.props.error&&i.a.createElement("p",null," ",this.props.error," ")))}}]),e}(i.a.Component),x=function(t){return i.a.createElement("form",{onSubmit:t.getWeather},i.a.createElement("input",{type:"text",name:"city",value:"Ottawa"}),i.a.createElement("input",{type:"text",name:"country",value:"Ca"}),i.a.createElement("button",null,"Get Weather"))},O="682fb94b532d981c22c94d9c494437aa",j=function(t){function e(){var t,r;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(r=Object(p.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(i)))).state={temperature:[],time:[],city:void 0,country:void 0,description:[],error:void 0},r.getWeather=function(){var t=Object(f.a)(b.a.mark(function t(e){var a,i,s,n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a=e.target.elements.city.value,i=e.target.elements.country.value,t.next=5,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(a,",").concat(i,"ca&appid=").concat(O,"&units=metric"));case 5:return s=t.sent,t.next=8,s.json();case 8:n=t.sent,a&&i?(console.log(n),r.setState({temperature:n.list.map(function(t){return t.main.temp}),time:n.list.map(function(t){return t.dt_txt}),city:n.city.name,country:n.city.country,description:n.list.map(function(t){return t.weather[0].description}),error:""})):r.setState({temperature:void 0,time:void 0,city:void 0,country:void 0,description:void 0,error:"Please enter a value."});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),r}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{fontWeight:"bold",color:"black"}},i.a.createElement(x,{getWeather:this.getWeather}),i.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",width:"700px",height:"160px"}},i.a.createElement(w,{temperature:this.state.temperature[0],time:this.state.time[0],city:this.state.city,country:this.state.country,description:this.state.description[0],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[4],time:this.state.time[4],city:this.state.city,country:this.state.country,description:this.state.description[4],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[8],time:this.state.time[8],city:this.state.city,country:this.state.country,description:this.state.description[8],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[12],time:this.state.time[12],city:this.state.city,country:this.state.country,description:this.state.description[12],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[16],time:this.state.time[16],city:this.state.city,country:this.state.country,description:this.state.description[16],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[20],time:this.state.time[20],city:this.state.city,country:this.state.country,description:this.state.description[20],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[24],time:this.state.time[24],city:this.state.city,country:this.state.country,description:this.state.description[24],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[28],time:this.state.time[28],city:this.state.city,country:this.state.country,description:this.state.description[28],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[32],time:this.state.time[32],city:this.state.city,country:this.state.country,description:this.state.description[32],error:this.state.error}),i.a.createElement(w,{temperature:this.state.temperature[36],time:this.state.time[36],city:this.state.city,country:this.state.country,description:this.state.description[36],error:this.state.error})))}}]),e}(i.a.Component),W=function(t){return i.a.createElement("div",null,t.city&&t.country&&i.a.createElement("p",null,"Location: ",t.city,", ",t.country),t.temperature&&i.a.createElement("p",null,"Temperature: ",t.temperature),t.humidity&&i.a.createElement("p",null,"Humidity: ",t.humidity),".",t.description&&i.a.createElement("p",null,"Conditons: ",t.description),t.error&&i.a.createElement("p",null," ",t.error," "))},S="682fb94b532d981c22c94d9c494437aa",C=function(t){function e(){var t,r;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(r=Object(p.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(i)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},r.getWeather=function(){var t=Object(f.a)(b.a.mark(function t(e){var a,i,s,n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a=e.target.elements.city.value,i=e.target.elements.country.value,t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(i,"ca&appid=").concat(S,"&units=metric"));case 5:return s=t.sent,t.next=8,s.json();case 8:n=t.sent,a&&i?(console.log(n),r.setState({temperature:n.main.temp,city:n.name,country:n.sys.country,humidity:n.main.humidity,description:n.weather[0].description,error:""})):r.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter a value."});case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),r}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{fontWeight:"bold",color:"black"}},i.a.createElement(x,{getWeather:this.getWeather}),i.a.createElement(W,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))}}]),e}(i.a.Component),D=function(t){function e(){return Object(o.a)(this,e),Object(p.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t={width:"634px",height:"355px",backgroundImage:"url(https://eus-www.sway-cdn.com/s/lS9lnvgYelIJHUrK/images/AJBYoWDmgsV86b?quality=960&allowAnimation=false)",backgroundSize:"cover",border:"solid",borderRadius:"12px",fontFamily:"Open Sans, sans-serif"};return i.a.createElement("div",{style:t},i.a.createElement("button",null,i.a.createElement(h.a,{to:"/currentWeather"},"CurrentWeather")),i.a.createElement("button",null,i.a.createElement(h.a,{to:"/5DayForcast"},"FiveDayForcast")),i.a.createElement(y.a,{path:"/currentWeather",component:C}),i.a.createElement(y.a,{path:"/5DayForcast",component:j}))}}]),e}(i.a.Component);n.a.render(i.a.createElement(c.a,null,i.a.createElement(D,null)),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.55db3129.chunk.js.map
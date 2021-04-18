(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{43:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(16),i=r.n(a),s=(r(43),r(1)),o=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Weather App"})})},j=r(4),d=r(15),u=r.n(d),l=r(21),h=r(25),b=r(5),p="DELETE_WEATHER",O="ADD_WEATHER",m="CHANGE_VALUE",x="ADD_WEEK_WEATHER",f="REMOVE_WEEK_WEATHER",v="ADD_ERROR",w="REMOVE_ERROR",y={weather:[],weekWeather:[],input:"",error:!1},g=function(e){return{type:m,payload:e}},E=function(){return{type:v}},C=r(22),_=r.n(C),k=function(){var e=Object(j.c)((function(e){return e.reducer.input})),t=Object(j.c)((function(e){return e.reducer.error})),r=Object(j.c)((function(e){return e.reducer.weather})),c=Object(j.c)((function(e){return e.reducer.weekWeather})),n=Object(j.b)(),a=function(t){var a;t.preventDefault(),""!==e.trim()&&r.every((function(t){return t.name.toLowerCase()!==e.toLowerCase()}))&&c.filter((function(t){return t.city.name.toLowerCase()!==e.toLowerCase()}))&&(n(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(r){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&lang=ru&appid=82e17534f531bddc0561bcda2bdc6dec"));case 3:200===(c=t.sent).status?r((n=c.data,{type:O,payload:n})):r(E()),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(E());case 10:case"end":return t.stop()}var n}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e)),n((a=e,function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(a,"&lang=ru&units=metric&appid=82e17534f531bddc0561bcda2bdc6dec"));case 3:200===(r=e.sent).status?t((c=r.data,{type:x,payload:c})):t(E()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}var c}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),n(g("")))};return Object(s.jsxs)("form",{onSubmit:function(e){return a(e)},children:[t?Object(s.jsx)("p",{children:"incorrect value"}):null,Object(s.jsx)("input",{value:e,style:t?{border:"2px solid red"}:{border:"none"},onChange:function(e){return n(g(e.target.value))},placeholder:"enter the country"}),Object(s.jsx)("button",{type:"submit",children:"search"})]})},N=r(13),W=r(71),R=function(){var e=Object(j.c)((function(e){return e.reducer.weather})),t=Object(j.c)((function(e){return e.reducer.error})),r=Object(j.b)(),c=function(){t&&r({type:w})};return Object(s.jsx)("div",{className:"grid",children:e.map((function(e){return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:e.name}),Object(s.jsxs)("p",{children:["today: ",Math.floor(1*e.main.temp)/1,"\xb0C"]}),Object(s.jsxs)("div",{className:"btn-cover",children:[Object(s.jsx)("button",{className:"delete",onClick:function(){var t;r((t=e.name,{type:p,payload:t})),r(function(e){return{type:f,payload:e}}(e.name)),c()},children:"delete"}),Object(s.jsx)(N.b,{to:"/".concat(e.name),children:Object(s.jsx)("button",{onClick:function(){return c()},children:"learn more"})})]})]},Object(W.a)())}))})},M=function(){return Object(s.jsx)(R,{})},S=(r(69),function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o,{}),Object(s.jsx)(k,{}),Object(s.jsx)(M,{})]})}),A=r(11),D=r(36),L=r(37),T=Object(A.combineReducers)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{weather:[].concat(Object(h.a)(e.weather),[t.payload]),error:!1});case p:return Object(b.a)(Object(b.a)({},e),{},{weather:e.weather.filter((function(e){return e.name!==t.payload})),error:!1});case m:return Object(b.a)(Object(b.a)({},e),{},{input:t.payload,error:!1});case x:return Object(b.a)(Object(b.a)({},e),{},{weekWeather:[].concat(Object(h.a)(e.weekWeather),[t.payload]),error:!1});case f:return Object(b.a)(Object(b.a)({},e),{},{weekWeather:e.weekWeather.filter((function(e){return e.city.name!==t.payload})),error:!1});case v:return Object(b.a)(Object(b.a)({},e),{},{error:!0});case w:return Object(b.a)(Object(b.a)({},e),{},{error:!1});default:return e}}}),H=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},I=Object(A.createStore)(T,H,Object(D.composeWithDevTools)(Object(A.applyMiddleware)(L.a))),J=r(3),V=function(e){var t=e.nameCity,r=Object(j.c)((function(e){return e.reducer.weekWeather})).filter((function(e){return e.city.name===t}))[0].list;return Object(s.jsx)(s.Fragment,{children:r.map((function(e){var t=e.dt_txt.slice(0,4),r=e.dt_txt.slice(5,7),c=e.dt_txt.slice(8,10),n=1*e.dt_txt.slice(11,13);return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h3",{children:"".concat(n,":00 - ").concat(c,"/").concat(r,"/").concat(t)}),Object(s.jsxs)("p",{children:[Math.floor(1*e.main.temp)/1,"\xb0C"]}),Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsxs)("p",{children:["min: ",Math.floor(e.main.temp_min),"\xb0C"]}),Object(s.jsxs)("p",{children:["max: ",Math.floor(e.main.temp_max),"\xb0C"]})]})]},Object(W.a)())}))})},q=function(e){var t=e.nameCity,r=Object(j.c)((function(e){return e.reducer.weather})).filter((function(e){return e.name===t})),c=r[0].main;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o,{}),Object(s.jsx)(N.b,{to:"/",children:Object(s.jsx)("button",{className:"home",children:"Go home"})}),Object(s.jsxs)("div",{className:"main-content",children:[Object(s.jsx)("h2",{children:r[0].name}),Object(s.jsxs)("div",{className:"flex card-info",children:[Object(s.jsxs)("div",{className:"card-info",children:[Object(s.jsx)("h4",{children:r[0].weather[0].main}),Object(s.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(r[0].weather[0].icon,".png"),alt:r[0].name}),Object(s.jsx)("p",{children:r[0].weather[0].description})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("h4",{children:["temp: ",Math.floor(c.temp),"\xb0C"]}),Object(s.jsxs)("p",{children:["feels like: ",Math.floor(c.feels_like)]}),Object(s.jsxs)("p",{children:["temp max: ",Math.floor(c.temp_max),"\xb0C"]}),Object(s.jsxs)("p",{children:["temp min: ",Math.floor(c.temp_min),"\xb0C"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["humidity: ",c.humidity]}),Object(s.jsxs)("p",{children:["pressure: ",c.pressure]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"wind:"}),Object(s.jsxs)("p",{children:["deg: ",r[0].wind.deg]}),Object(s.jsxs)("p",{children:["speed: ",r[0].wind.speed]})]})]}),Object(s.jsx)("h5",{className:"weather-title",children:"weather for the near future"}),Object(s.jsx)("div",{className:"grid",children:Object(s.jsx)(V,{nameCity:t})})]})]})};I.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(I.getState()))})),i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(j.a,{store:I,children:Object(s.jsx)(N.a,{basename:"/weather-app",children:Object(s.jsxs)(J.c,{children:[Object(s.jsx)(J.a,{exact:!0,path:"/",component:S}),Object(s.jsx)(J.a,{path:"/:id",render:function(e){var t=e.match.params.id;return Object(s.jsx)(q,{nameCity:t})}})]})})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.015a3be6.chunk.js.map
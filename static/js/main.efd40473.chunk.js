(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{56:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(21),s=a.n(n),c=a(52),o=a(38),i=a(28),r=a(1),l=function(){return Object(r.jsxs)(o.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(o.a.Brand,{href:"/honey-badger/#/",children:"Honey Badger"}),Object(r.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(o.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)(i.a,{children:Object(r.jsx)(i.a.Link,{href:"/honey-badger/#/heatmap",children:"Heatmap"})}),Object(r.jsx)(i.a,{children:Object(r.jsx)(i.a.Link,{href:"/honey-badger/#/stats",children:"Stats"})}),Object(r.jsx)(i.a,{children:Object(r.jsx)(i.a.Link,{href:"/honey-badger/#/live-logs",children:"Live logs"})})]})]})},d=a(8),j=a(34),u=(a(71),function(){return Object(r.jsxs)("div",{className:"about-page",children:[Object(r.jsx)("h2",{children:"Welcome to Honey Badger"}),Object(r.jsx)("p",{children:"The internet is a big mysterious black box of machines communicating with one another. Ever wondered how much communication is going on behind your back? Or which far corner of the world is getting in touch with your home router to see whether it is running outdated software and is vulnerable to a cyber attack?"}),Object(r.jsx)("p",{children:"Honey Badger is a honeypot application that allows you to see just how much traffic an open server on the internet is subjected to. It spins up a random server on the AWS cloud and listens for any attempted connections made to that server. Every attempted connection is stored by the application and is used to keep track of who is trying to communicate with our server, where in the world the requests are coming from, and what payload data is being sent with the request."}),Object(r.jsx)("p",{children:"This dashboard shows collections of these metrics displayed in different ways. We have a heatmap which shows the distribution of connection attempts across the world map, a stats page which shows who is trying to connect to our server the most stubbornly, and a live logs page where you can see details of the connection attempts in real time."}),Object(r.jsx)(j.a,{variant:"dark",href:"https://github.com/bm402/honey-badger",children:"View project on GitHub"})]})}),h=a(89),b=a(92),m=a(0),p=a(88),O=a(16),g=a.n(O),x=(a(72),function(){var e=Object(p.a)();return Object(m.useEffect)((function(){fetch("https://omf1aavgfc.execute-api.eu-west-2.amazonaws.com/prod/v1/heatmap-data").then((function(e){return e.json()})).then((function(e){return e.heatmap_data_points})).then((function(t){for(var a=t.map((function(e){return[e.lat,e.lon,e.count]})).sort((function(e,t){return e[2]-t[2]})),n=1,s=a[0][2],c=0;c<a.length;c++)a[c][2]>s&&n++,s=a[c][2],a[c][2]=n;var o=a[a.length-1][2],i=a.map((function(e){return[e[0],e[1],e[2]/o]}));g.a.heatLayer(i,{minOpacity:.4,maxZoom:3,radius:20,blur:15,gradient:{.4:"blue",.6:"lime",.8:"yellow",.9:"orange",1:"red"}}).addTo(e);var r=g.a.latLngBounds([]);i.forEach((function(e){r.extend([e[0],e[1]])})),e.fitBounds(r)})).catch(console.log)}),[e]),null}),f=(a(73),function(){return Object(r.jsxs)(h.a,{className:"heatmap",children:[Object(r.jsx)(x,{}),Object(r.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})]})}),v=a(11),y=a(10),N=a(57),w=a(37),_=a(90),k=a(91),L=function(e){var t=Object(p.a)();return Object(m.useEffect)((function(){if(e.mapData&&0!==e.mapData.length){var a=Object(O.latLngBounds)([]);e.mapData.forEach((function(e){a.extend([e.lat,e.lon])})),t.fitBounds(a,{maxZoom:10})}}),[t,e.mapData]),null},S=a.p+"static/media/gold.7b323ec2.jpg",D=a.p+"static/media/silver.9a7c5b0e.jpg",B=a.p+"static/media/bronze.d1bf6559.jpg",E=(a(74),a(75),function(e){var t,a=Object(m.useState)(!1),n=Object(v.a)(a,2),s=n[0],c=n[1],o=Object(m.useState)(0),i=Object(v.a)(o,2),l=i[0],d=i[1],j=function(e){d(e),c(!0)},u=function(e){return e?Object.keys(e).map((function(t){return Object(r.jsxs)("p",{className:"modal-metadata-item",children:[e[t].title,": ",p(e[t].value)]},t)})):null},p=function(e){return Array.isArray(e)?e.sort((function(e,t){return e.localeCompare(t)})).join(", "):e};return Object(r.jsxs)("div",{className:"podium",children:[Object(r.jsxs)(N.a,{children:[Object(r.jsx)(y.a,{className:"podium-title-card",children:Object(r.jsx)(y.a.Body,{className:"podium-title-text",children:Object(r.jsx)(y.a.Text,{children:e.title})})}),Object(r.jsxs)(y.a,{className:"podium-data-card",onClick:function(){return j(0)},children:[Object(r.jsxs)(y.a.Body,{children:[Object(r.jsx)(y.a.Img,{className:"podium-medal-image",src:S}),Object(r.jsx)(y.a.Text,{className:"".concat(e.isDataLoaded?"":"loading"," ").concat("podium-text-"+e.type),children:e.data[0].value})]}),Object(r.jsx)(y.a.Footer,{className:"podium-gold-footer"})]}),Object(r.jsxs)(y.a,{className:"podium-data-card",onClick:function(){return j(1)},children:[Object(r.jsxs)(y.a.Body,{children:[Object(r.jsx)(y.a.Img,{className:"podium-medal-image",src:D}),Object(r.jsx)(y.a.Text,{className:"".concat(e.isDataLoaded?"":"loading"," ").concat("podium-text-"+e.type),children:e.data[1].value})]}),Object(r.jsx)(y.a.Footer,{className:"podium-silver-footer"})]}),Object(r.jsxs)(y.a,{className:"podium-data-card",onClick:function(){return j(2)},children:[Object(r.jsxs)(y.a.Body,{children:[Object(r.jsx)(y.a.Img,{className:"podium-medal-image",src:B}),Object(r.jsx)(y.a.Text,{className:"".concat(e.isDataLoaded?"":"loading"," ").concat("podium-text-"+e.type),children:e.data[2].value})]}),Object(r.jsx)(y.a.Footer,{className:"podium-bronze-footer"})]})]}),Object(r.jsxs)(w.a,{show:s,onHide:function(){return c(!1)},children:[Object(r.jsx)(w.a.Header,{closeButton:!0,children:Object(r.jsxs)(w.a.Title,{children:[e.title,": ",e.data[l].value]})}),Object(r.jsxs)(w.a.Body,{children:[u(e.data[l].metadata),(t=e.data[l].map_data,t&&0!==t.length?Object(r.jsxs)(h.a,{className:"statsmap",maxZoom:"18",children:[Object(r.jsx)(L,{mapData:t}),Object(r.jsx)(b.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e,t){return Object(r.jsx)(_.a,{position:[e.lat,e.lon],children:e.metadata&&Object(r.jsx)(k.a,{children:u(e.metadata)})},t)}))]}):null)]})]})]})}),C=(a(76),function(){var e=Object(m.useState)(!1),t=Object(v.a)(e,2),a=t[0],n=t[1],s=Object(m.useState)({most_connections:[{},{},{}],most_active_cities:[{},{},{}],most_active_countries:[{},{},{}],most_ip_addresses:[{},{},{}],most_ingress_ports:[{},{},{}]}),c=Object(v.a)(s,2),o=c[0],i=c[1];return Object(m.useEffect)((function(){fetch("https://omf1aavgfc.execute-api.eu-west-2.amazonaws.com/prod/v1/stats-data").then((function(e){return e.json()})).then((function(e){i(e),n(!0)})).catch(console.log)}),[]),Object(r.jsxs)("div",{className:"stats-page",children:[Object(r.jsx)(E,{title:"Most connection attempts",data:o.most_connections,type:"number",isDataLoaded:a}),Object(r.jsx)(E,{title:"Most active city",data:o.most_active_cities,type:"string",isDataLoaded:a}),Object(r.jsx)(E,{title:"Most active country",data:o.most_active_countries,type:"string",isDataLoaded:a}),Object(r.jsx)(E,{title:"Most IP addresses used",data:o.most_ip_addresses,type:"number",isDataLoaded:a}),Object(r.jsx)(E,{title:"Most ingress ports tried",data:o.most_ingress_ports,type:"number",isDataLoaded:a})]})}),T=a(60),z=a(58),I=(a(56),function(e){var t=Object(m.useState)(!1),a=Object(v.a)(t,2),n=a[0],s=a[1];return Object(r.jsxs)("tr",{className:"live-log-entry ".concat(n?"open":"closed"),children:[Object(r.jsx)("td",{className:"live-log-entry-field-toggle",onClick:function(){s(!n)},children:n?"\u25bc":"\u25b6"}),Object(r.jsx)("td",{className:"live-log-entry-field timestamp",children:new Date(e.logEntry.timestamp).toLocaleString()}),Object(r.jsx)("td",{className:"live-log-entry-field ingress-port",children:e.logEntry.ingress_port}),Object(r.jsx)("td",{className:"live-log-entry-field ip-address",children:e.logEntry.ip_address}),Object(r.jsx)("td",{className:"live-log-entry-field location",children:e.logEntry.city+", "+e.logEntry.country}),Object(r.jsx)("td",{className:"live-log-entry-field input",children:e.logEntry.input})]})}),H=function(){var e=Object(m.useState)(null),t=Object(v.a)(e,2),a=t[0],n=t[1],s=Object(m.useState)(!1),c=Object(v.a)(s,2),o=c[0],i=c[1],l=Object(m.useState)("Disconnected"),d=Object(v.a)(l,2),u=d[0],h=d[1],b=Object(m.useState)([]),p=Object(v.a)(b,2),O=p[0],g=p[1];return Object(r.jsxs)("div",{className:"live-logs-page",children:[Object(r.jsxs)("div",{className:"live-logs-control-panel",children:[Object(r.jsx)(j.a,{className:"live-logs-control-panel-button",variant:"success",disabled:o,onClick:o?null:function(){var e=new WebSocket("wss://rgs4h7oyra.execute-api.eu-west-2.amazonaws.com/prod");n(e),i(!0),h("Connecting..."),e.onopen=function(){h("Connected")},e.onmessage=function(e){g((function(t){return[].concat(Object(T.a)(t),[JSON.parse(e.data)])}))},e.onclose=function(){h("Disconnected")}},children:"\u25b6"}),Object(r.jsx)(j.a,{className:"live-logs-control-panel-button",variant:"danger",disabled:!o,onClick:o?function(){a.close(),i(!1)}:null,children:"\u25a0"}),Object(r.jsxs)("div",{className:"live-logs-status",children:["Status: ",u]})]}),Object(r.jsx)("div",{className:"live-logs-log-section",children:Object(r.jsxs)(z.a,{className:"live-logs-table",striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{className:"live-log-entry-field-toggle"}),Object(r.jsx)("th",{className:"live-log-entry-field timestamp",children:"Time"}),Object(r.jsx)("th",{className:"live-log-entry-field ingress-port",children:"Port"}),Object(r.jsx)("th",{className:"live-log-entry-field ip-address",children:"IP"}),Object(r.jsx)("th",{className:"live-log-entry-field location",children:"Location"}),Object(r.jsx)("th",{className:"live-log-entry-field input",children:"Input"})]})}),Object(r.jsx)("tbody",{children:O.map((function(e,t){return Object(r.jsx)(I,{logEntry:e},t)}))})]})})]})},M=function(){return Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:u}),Object(r.jsx)(d.a,{exact:!0,path:"/heatmap",component:f}),Object(r.jsx)(d.a,{exact:!0,path:"/stats",component:C}),Object(r.jsx)(d.a,{exact:!0,path:"/live-logs",component:H})]})},A=(a(83),function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(M,{})]})});a(84),a(85);s.a.render(Object(r.jsx)(c.a,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.efd40473.chunk.js.map
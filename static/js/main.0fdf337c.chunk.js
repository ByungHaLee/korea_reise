(this.webpackJsonpkorea_reise=this.webpackJsonpkorea_reise||[]).push([[0],{40:function(e,t,a){e.exports=a(74)},45:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=a(15),s=a(14),i=a(9),u=a(10),m=a(12),p=a(11),d=a(13),h=a(36),f=(a(45),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:"false",className:"title"},r.a.createElement("h1",null,"Nach S\xfcdkorea"))}}]),t}(r.a.Component)),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(this.props),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",null,r.a.createElement("span",null,e.state.title),r.a.createElement("span",null,e.state.tel),r.a.createElement("span",null,e.state.add),r.a.createElement("span",null,e.state.mapx),r.a.createElement("span",null,e.state.mapy)):null}}]),t}(r.a.Component),v=a(17),b=a.n(v),j=a(19),O=a(20),g=a.n(O),k=(a(64),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,records:[]},a.getHotels=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("./hotels.json");case 2:t=e.sent,n=t.data.records,console.log(n),a.setState({records:n,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getHotels()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.records;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"hotels"},a.map((function(e){return r.a.createElement("div",{className:"hotel"},r.a.createElement(o.b,{to:{pathname:"/hotel-detail/".concat(e.contentid),state:{title:e.title,tel:e.tel,add:e.add}}},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,"tel: ",e.tel),r.a.createElement("p",null,"add: ",e.add)))}))))}}]),t}(r.a.Component)),y=(a(70),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.getSpots=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("./tourspot.json");case 2:t=e.sent,n=t.data,a.setState({data:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getSpots()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("section",{classNmae:"container"},r.a.createElement("div",{className:"spotitems"},e.map((function(e){return r.a.createElement("div",{className:"spotitem"},r.a.createElement("span",null,e.no),r.a.createElement("h3",null,e.name),r.a.createElement("img",{src:e.image,alt:e.name,title:e.name}),r.a.createElement("a",{href:e.link},e.link))}))))}}]),t}(r.a.Component)),N=(a(71),a(21));var w=function(){return r.a.createElement(N.a,{sticky:"top"},r.a.createElement(N.a.Brand,{href:"/"},"Home"),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(o.b,{to:"/spot"},"Spot"),r.a.createElement(o.b,{to:"/hotel"},"Hotel")))};var x=function(){return r.a.createElement(o.a,null,r.a.createElement(w,null),r.a.createElement(s.a,{path:"/",exact:!0,component:f}),r.a.createElement(s.a,{path:"/spot",component:y}),r.a.createElement(s.a,{path:"/hotel",component:k}),r.a.createElement(s.a,{path:"/hotel-detail/:id",component:E}))};a(72),a(73);l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0fdf337c.chunk.js.map
(this.webpackJsonpkorea_reise=this.webpackJsonpkorea_reise||[]).push([[0],{38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=a(7),s=a(8),i=a(11),u=a(9),m=a(12),p=a(13),d=a(14);a(43);var h=function(){return c.a.createElement("div",{className:"main"},c.a.createElement("h1",null,"Welcome to Korea!"),c.a.createElement("section",{className:"menus"},c.a.createElement("div",{className:"menu m1"},c.a.createElement(p.b,{to:"/spot"},c.a.createElement("span",null,"Spot"))),c.a.createElement("div",{className:"menu m2"},c.a.createElement(p.b,{to:"/hotel"},c.a.createElement("span",null,"Hotel")))))},E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(this.props),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?c.a.createElement("div",null,c.a.createElement("span",null,e.state.title),c.a.createElement("span",null,e.state.tel),c.a.createElement("span",null,e.state.add),c.a.createElement("span",null,e.state.mapx),c.a.createElement("span",null,e.state.mapy)):null}}]),t}(c.a.Component),f=a(16),b=a.n(f),v=a(18),j=a(19),O=a.n(j),g=(a(67),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isLoading:!0,records:[]},a.getHotels=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("./hotels.json");case 2:t=e.sent,n=t.data.records,console.log(n),a.setState({records:n,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getHotels()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.records;return c.a.createElement("section",{className:"container"},t?c.a.createElement("div",{className:"loader"},c.a.createElement("span",{className:"loader__text"},"Loading...")):c.a.createElement("div",{className:"hotels"},a.map((function(e){return c.a.createElement("div",{className:"hotel"},c.a.createElement(p.b,{to:{pathname:"/hotel-detail/".concat(e.contentid),state:{title:e.title,tel:e.tel,add:e.add}}},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,"tel: ",e.tel),c.a.createElement("p",null,"add: ",e.add)))}))))}}]),t}(c.a.Component)),y=(a(68),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={data:[]},a.getSpots=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("./tourspot.json");case 2:t=e.sent,n=t.data,a.setState({data:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getSpots()}},{key:"render",value:function(){var e=this.state.data;return c.a.createElement("section",{classNmae:"container"},c.a.createElement("div",{className:"spotitems"},e.map((function(e){return c.a.createElement("div",{className:"spotitem"},c.a.createElement("span",null,e.no),c.a.createElement("h3",null,e.name),c.a.createElement("img",{src:e.image,alt:e.name,title:e.name}),c.a.createElement("a",{href:e.link},e.link))}))))}}]),t}(c.a.Component)),k=(a(69),a(20)),N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return"/"===this.props.location.pathname?c.a.createElement("span",null):c.a.createElement(k.a,{fixed:"top"},c.a.createElement(k.a.Brand,{href:"/"},"Home"),c.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(p.b,{to:"/spot"},"Spot"),c.a.createElement(p.b,{to:"/hotel"},"Hotel")))}}]),t}(c.a.Component),x=Object(d.e)(N),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(x,null),c.a.createElement(d.a,{path:"/",exact:!0,component:h}),c.a.createElement(d.a,{path:"/spot",component:y}),c.a.createElement(d.a,{path:"/hotel",component:g}),c.a.createElement(d.a,{path:"/hotel-detail/:id",component:E}))}}]),t}(c.a.Component);a(70),a(71);l.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a84e5ca8.chunk.js.map
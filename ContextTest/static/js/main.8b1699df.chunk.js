(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(22),o=n.n(r),s=n(12),c=n(13),l=n(19),p=n(18),u=n(20),d=n(23),f=n(30),h=n(54),m=n(52),b=null,g=null,v={reactPlugin:b,appInsights:g,initialize:function(e,t){if(!t)throw new Error("Could not initialize Telemetry Service");if(!e)throw new Error("Instrumentation key not provided in ./src/telemetry-provider.jsx");b=new m.a,(g=new h.a({config:{instrumentationKey:e,maxBatchInterval:0,disableFetchTracking:!1,extensions:[b],extensionConfig:Object(f.a)({},b.identifier,{history:t})}})).loadAppInsights()}},y=n(53),w=n(10),j=function(e){function t(){var e,n;Object(s.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={initialized:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history,t=this.state.initialized,n=this.props.instrumentationKey;!Boolean(t)&&Boolean(n)&&Boolean(e)&&(v.initialize(n,e),this.setState({initialized:!0})),this.props.after()}},{key:"render",value:function(){var e=this.props.children;return a.a.createElement(i.Fragment,null,e)}}]),t}(i.Component),O=Object(w.d)(Object(y.a)(v.reactPlugin,j)),k=n(14),E={clientId:"e0f60ff0-327b-43e2-9055-54782bbed141",tenant:"microsoft.onmicrosoft.com",endpoints:{graphApiUri:"https://graph.microsoft.com",IDRApiUri:"https://idrservice-stg.azurewebsites.net",WebApiUri:"https://campuswebapi.azurewebsites.net",TeamsApiUri:"https://teamsforcampus.azurewebsites.net",DevOpsAPIUri:"499b84ac-1321-427f-aa17-267ca6975798"},postLogoutRedirectUri:window.location.origin,cacheLocation:"localStorage"},U=new k.AuthenticationContext(E),A=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,[{key:"GetAdalUserName",value:function(){var e=U.getCachedUser();return null!==e||void 0!==e?U.getCachedUser().profile.name:"Not found"}}]),e}(),I=(Object(k.withAdalLogin)(U,E.endpoints.WebApiUri),function(e){function t(e){var n;return Object(s.a)(this,t),console.log("app constructor"),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).qs=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var i=e[n].split("=",2);1==i.length?t[i[0]]="":t[i[0]]=decodeURIComponent(i[1].replace(/\+/g," "))}return t}(window.location.search.substr(1).split("&")),n.state={appInsights:null},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("app mount");var e=this.qs.url;if(e){var t=(new A).GetAdalUserName();console.log("User Name : ",t),this.state.appInsights.trackEvent({name:"Website Hit",properties:{URL:e,userName:t}}),setTimeout((function(){window.location.replace(e)}),3e3)}}},{key:"trackException",value:function(){}},{key:"trackTrace",value:function(){}},{key:"trackEvent",value:function(){}},{key:"render",value:function(){var e=this;return console.log("app render"),a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,null,a.a.createElement(O,{instrumentationKey:"8d188f25-4d90-421a-ab66-217f77e754ce",after:function(){e.state.appInsights=g}},a.a.createElement("div",{style:{display:"flex",position:"absolute",top:"45%",left:"45%"}},a.a.createElement("div",{className:"loader"}),a.a.createElement("div",{style:{padding:"3px",paddingLeft:"5px",fontSize:"20px",fontFamily:"arial"}},"Loading...")))))}}]),t}(a.a.Component));Object(k.runWithAdal)(U,(function(){o.a.render(a.a.createElement(I,null),document.getElementById("root"))}),!1)}},[[34,1,2]]]);
//# sourceMappingURL=main.8b1699df.chunk.js.map
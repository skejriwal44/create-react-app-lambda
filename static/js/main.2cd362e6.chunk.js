(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),u=(a(60),a(23)),o=a(4),s=a(17),l=a(24),p=a.n(l),d=(a(63),p.a.initializeApp({apiKey:"AIzaSyDD-wxR9leSA7w9z4nvs8BkyIXnGxXCtLY",authDomain:"livestream-unichat.firebaseapp.com",projectId:"livestream-unichat",storageBucket:"livestream-unichat.appspot.com",messagingSenderId:"848137294150",appId:"1:848137294150:web:cd023f714fe23fe275d547"}).auth()),h=r.a.createContext();function f(e){var t=e.children,a=Object(n.useState)(!0),c=Object(s.a)(a,2),i=c[0],u=c[1],l=Object(n.useState)(null),p=Object(s.a)(l,2),f=p[0],m=p[1],b=Object(o.f)();Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){m(e),u(!1),e&&b.push("/chats")}))}),[f,b]);var g={user:f};return r.a.createElement(h.Provider,{value:g},!i&&t)}var m=a(18),b=a.n(m),g=a(35),v=a(1),E=a.n(v),j=a(25);function w(){var e=Object(n.useRef)(!1),t=Object(n.useState)(!0),a=Object(s.a)(t,2),c=a[0],i=a[1],u=Object(n.useContext)(h).user,l=Object(o.f)();function p(){return(p=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.signOut();case 2:l.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("https://cors-anywhere.herokuapp.com/"+t),t="https://cors-anywhere.herokuapp.com/"+t,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.blob();case 7:return n=e.sent,e.abrupt("return",new File([n],"test.jpg",{type:"image/jpeg"}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(!e.current){if(e.current=!0,!u||null===u)return void l.push("/");E.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"3d7fabcc-f5f4-4bfe-ae0a-34cd71c9b916","user-name":u.email,"user-secret":u.uid}}).then((function(){return i(!1)})).catch((function(e){var t=new FormData;t.append("email",u.email),t.append("username",u.email),t.append("secret",u.uid),f(u.photoURL).then((function(e){console.log(e),E.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"015c9875-80f1-4d12-91a1-66388f883692"}}).then((function(){i(!1)})).catch((function(e){return console.log("e",e.response)}))}))})),E.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"6d68dbc1-8843-403d-a512-781c5d48182e","user-name":u.email,"user-secret":u.uid}}).then((function(){return i(!1)})).catch((function(e){console.log(e);var t=new FormData;t.append("email",u.email),t.append("username",u.email),t.append("secret",u.uid),f(u.photoURL).then((function(e){console.log(u),E.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"02d6777d-c38c-4581-bcbd-8055edcdb2e4"}}).then((function(){i(!1)})).catch((function(e){return console.log("e",e.response)}))}))}))}}),[u,l]),Object(n.useEffect)((function(){if(u&&null!==u){var e={username:u.email};E.a.post("https://api.chatengine.io/chats/135591/people/",e,{headers:{"Project-ID":"3d7fabcc-f5f4-4bfe-ae0a-34cd71c9b916","User-Name":"asasdd","User-Secret":"aa"}}).then((function(e){}))}else l.push("/")}),[u,l]),Object(n.useEffect)((function(){if(!u||null===u)return console.log("Here_null"),void l.push("/");E.a.put("https://api.chatengine.io/chats/",{usernames:["Live_Offers"],title:"Live Offers",is_direct_chat:!0},{headers:{"Project-ID":"6d68dbc1-8843-403d-a512-781c5d48182e","User-Name":u.email,"User-Secret":u.uid}}).then((function(e){}))}),[u,l]),!u||c?r.a.createElement("div",null):r.a.createElement("div",{className:"chats-page"},r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"logo-tab"},"Livestream"),r.a.createElement("div",{onClick:function(){return p.apply(this,arguments)},className:"logout-tab"},"Logout")),r.a.createElement(j.d,{height:"calc(99vh - 66px)",projectID:"3d7fabcc-f5f4-4bfe-ae0a-34cd71c9b916",userName:u.email,userSecret:u.uid,renderChatList:function(e){return r.a.createElement("iframe",{id:"ytplayer",width:"100%",height:"73.75%",src:"https://www.youtube.com/embed/-zk7FTN9dC0?autoplay=1&rel=0&modestbranding=1;",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})},renderChatSettings:function(){return null},offset:6}),r.a.createElement(j.d,{height:"calc(99vh - 66px)",projectID:"6d68dbc1-8843-403d-a512-781c5d48182e",userName:u.email,userSecret:u.uid,renderChatList:function(e){return null},renderChatSettings:function(){return null},offset:6}))}var y=a(118);function O(){return r.a.createElement("div",{id:"login-page"},r.a.createElement("div",{id:"login-card"},r.a.createElement("h2",null,"Welcome to Unichat!"),r.a.createElement("div",{className:"login-button google",onClick:function(){return d.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},r.a.createElement(y.a,null)," Sign In with Google"),r.a.createElement("br",null),r.a.createElement("br",null)))}var S=function(){return r.a.createElement("div",{style:{fontFamily:"Avenir"}},r.a.createElement(u.a,null,r.a.createElement(f,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/chats",component:w}),r.a.createElement(o.a,{path:"/",component:O})))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.2cd362e6.chunk.js.map
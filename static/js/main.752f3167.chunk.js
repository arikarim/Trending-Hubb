(this.webpackJsonptrending=this.webpackJsonptrending||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},140:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),i=(a(108),a(224)),o=a(41),l=a(13),d=(a(109),a(2)),u=function(e){return Object(d.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:" Trending Hub  "})},j=a(8),b=a(212),p=a(215),f=a(217),h=a(93),m=a.n(h),O=a(94),v=a.n(O),g=a(68),x=a.n(g),w=a(95),y=a.n(w),_=Object(b.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function k(){var e=_(),t=c.a.useState(0),a=Object(j.a)(t,2),r=a[0],s=a[1],i=Object(l.f)();return Object(n.useEffect)((function(){0===r?i.push("/"):1===r?i.push("/movies"):2===r?i.push("/series"):3===r&&i.push("/search")}),[r,i]),Object(d.jsxs)(p.a,{value:r,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(d.jsx)(f.a,{style:{color:"white"},label:"Trending",icon:Object(d.jsx)(m.a,{})}),Object(d.jsx)(f.a,{style:{color:"white"},label:"Movies",icon:Object(d.jsx)(v.a,{})}),Object(d.jsx)(f.a,{style:{color:"white"},label:"TV Series",icon:Object(d.jsx)(y.a,{})}),Object(d.jsx)(f.a,{style:{color:"white"},label:"Search",icon:Object(d.jsx)(x.a,{})})]})}var S=a(15),N=a.n(S),C=a(20),T=a(21),P=a.n(T),E="https://image.tmdb.org/t/p/w300",M="https://image.tmdb.org/t/p/w500",U="https://www.movienewz.com/img/films/poster-holder.jpg",B=a(221),F=a(228),G=a(218),W=a(177),I=a(219),z=a(220),A=(a(140),a(96)),D=a.n(A),H=(a(174),a(175),function(e){return e.preventDefault()}),L=function(e){var t=e.media_type,a=e.id,c=Object(n.useState)(),r=Object(j.a)(c,2),s=r[0],i=r[1],o=null===s||void 0===s?void 0:s.map((function(e){return Object(d.jsxs)("div",{className:"carouselItem",children:[Object(d.jsx)("img",{src:e.profile_path?"".concat(E,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:H,className:"carouselItem__img"}),Object(d.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),l=function(){var e=Object(C.a)(N.a.mark((function e(){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/credits?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&lanfuage=en-US"));case 2:n=e.sent,c=n.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);return Object(d.jsx)(D.a,{autoPlay:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},infinite:!0,mouseTracking:!0,disableButtonsControls:!0,disableDotsControls:!0,items:o})},q=Object(b.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function V(e){var t=e.children,a=e.media_type,r=e.id,s=q(),i=c.a.useState(!1),u=Object(j.a)(i,2),b=u[0],p=u[1],f=Object(n.useState)(),h=Object(j.a)(f,2),m=h[0],O=h[1],v=Object(n.useState)(),g=Object(j.a)(v,2),x=g[0],w=g[1],y=Object(n.useState)(),_=Object(j.a)(y,2),k=_[0],S=_[1],T=Object(n.useState)(),E=Object(j.a)(T,2),B=E[0],A=E[1],D=Object(l.f)(),H=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(r,"?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&lanfuage=en-US"));case 3:t=e.sent,n=t.data,O(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(r,"/videos?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&lanfuage=en-US"));case 3:n=e.sent,c=n.data,w(null===(t=c.results[0])||void 0===t?void 0:t.key),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){H(),V()}),[]),Object(d.jsxs)("div",{className:"col-10 px-md-3 col-md-6 col-lg-3",children:[Object(d.jsx)("div",{className:"media mx-auto",type:"button",onClick:function(){p(!0)},children:t}),Object(d.jsx)(F.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:b,onClose:function(){p(!1)},closeAfterTransition:!0,BackdropComponent:G.a,BackdropProps:{timeout:500},children:Object(d.jsx)(W.a,{in:b,children:m&&Object(d.jsx)("div",{className:s.paper,children:Object(d.jsxs)("div",{className:"ContentModal",children:[Object(d.jsx)("img",{src:m.poster_path?"".concat(M,"/").concat(m.poster_path):U,alt:m.name||m.title,className:"ContentModal__portrait"}),Object(d.jsx)("img",{src:m.backdrop_path?"".concat(M,"/").concat(m.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:m.name||m.title,className:"ContentModal__landscape"}),Object(d.jsxs)("div",{className:"ContentModal__about",children:[Object(d.jsxs)("span",{className:"ContentModal__title",children:[m.name||m.title," (",(m.first_air_date||m.release_date||"-----").substring(0,4),")"]}),m.tagline&&Object(d.jsx)("i",{className:"tagline",children:m.tagline}),Object(d.jsx)("span",{className:"ContentModal__description",children:m.overview}),Object(d.jsx)("div",{children:Object(d.jsx)(L,{id:r,media_type:a})}),Object(d.jsx)(I.a,{variant:"contained",startIcon:Object(d.jsx)(z.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(x),children:"Watch the Trailer"}),"movie"===a&&Object(d.jsx)(o.b,{className:"btn btn-primary my-2",to:"/watch/".concat(r),children:"watch"}),"tv"===a&&Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(){return D.push("/watch/".concat(r,"/").concat(k,"/").concat(B))},children:[Object(d.jsx)("input",{className:"form-control my-2 inputs",type:"number",placeholder:"season",onChange:function(e){return S(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"form-control my-2 inputs",type:"number",placeholder:"episode",onChange:function(e){return A(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"btn btn-primary my-2",type:"submit",children:"watch"})]})})]})]})})})})]})}var J=function(e){var t=e.id,a=e.poster,n=e.title,c=e.date,r=e.media_type,s=e.vote_average;return Object(d.jsxs)(V,{className:"mx-auto",media_type:r,id:t,children:[Object(d.jsx)(B.a,{badgeContent:s,color:s>6?"primary":"secondary"}),Object(d.jsx)("img",{className:"poster",src:a?"".concat(E).concat(a):U,alt:n}),Object(d.jsx)("b",{style:{color:"#FEE715FF"},className:"title",children:n}),Object(d.jsxs)("span",{className:"subTitle",children:["tv"===r?"TV Series":"Movie",Object(d.jsx)("span",{className:"subTitle",children:c})]})]})},R=a(227),$=a(97),K=a(222),Q=Object($.a)({palette:{type:"dark"}}),X=function(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?15:a;return Object(d.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(d.jsx)(K.a,{theme:Q,children:Object(d.jsx)(R.a,{count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"secondary"})})})},Y=function(e){var t=Object(n.useState)(1),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),i=Object(j.a)(s,2),o=i[0],l=i[1],u=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&page=").concat(c));case 2:t=e.sent,a=t.data,l(a.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[c]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pagesTitle",children:"Trending"}),Object(d.jsx)("div",{className:"trending",children:o&&o.map((function(e,t){return Object(d.jsx)(J,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(d.jsx)(X,{setPage:r})]})},Z=a(225),ee=a(226),te=a(223),ae=function(e){var t=Object(n.useState)(""),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(0),i=Object(j.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(1),b=Object(j.a)(u,2),p=b[0],f=b[1],h=Object(n.useState)([]),m=Object(j.a)(h,2),O=m[0],v=m[1],g=Object(n.useState)(),w=Object(j.a)(g,2),y=w[0],_=w[1],k=Object($.a)({palette:{type:"dark",primary:{main:"#fff"}}}),S=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.themoviedb.org/3/search/".concat(o?"tv":"movie","?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&query=").concat(c,"&page=").concat(p,"&include_adult=false"));case 3:t=e.sent,a=t.data,console.log(a.results),v(a.results),_(a.total_pages),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),S()}),[o,p]),Object(d.jsxs)("div",{children:[Object(d.jsxs)(K.a,{theme:k,children:[Object(d.jsxs)("div",{style:{display:"flex",margin:"15px 0"},children:[Object(d.jsx)(Z.a,{style:{flex:1},label:"search",variant:"filled",onChange:function(e){return r(e.target.value)}}),Object(d.jsx)(I.a,{variant:"contained",style:{marginLeft:10},onClick:S,children:Object(d.jsx)(x.a,{})})]}),Object(d.jsxs)(ee.a,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){l(t),f(1)},children:[Object(d.jsx)(te.a,{style:{width:"50%"},label:"Search Movies"}),Object(d.jsx)(te.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(d.jsxs)("div",{className:"trending",children:[O&&O.map((function(e,t){return Object(d.jsx)(J,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:0===o?"movie":"tv",vote_average:e.vote_average},e.id)})),O&&0===O.length&&(o?Object(d.jsx)("h2",{children:"No Series Found"}):Object(d.jsx)("h2",{children:"No Movies Found"}))]}),y>1&&Object(d.jsx)(X,{setPage:f,numOfPages:y})]})},ne=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},ce=a(74),re=a(229),se=function(e){var t=e.genres,a=e.setGenres,c=e.selectedGenres,r=e.setSelectedGenres,s=e.setPage,i=e.type,o=function(){var e=Object(C.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/genre/".concat(i,"/list?api_key=").concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US"));case 2:t=e.sent,n=t.data,a(n.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return o(),function(){a({})}}),[]);return Object(d.jsxs)("div",{style:{padding:"6px 0",width:"100%"},children:[c&&c.map((function(e){return Object(d.jsx)(re.a,{label:e.name,size:"small",color:"secondary",style:{margin:2},clickable:!0,onDelete:function(){return function(e){r(c.filter((function(t){return t.id!==e.id}))),a([].concat(Object(ce.a)(t),[e])),s(1)}(e)}},e.id)})),t&&t.map((function(e){return Object(d.jsx)(re.a,{label:e.name,size:"small",style:{margin:2},clickable:!0,onClick:function(){return function(e){r([].concat(Object(ce.a)(c),[e])),a(t.filter((function(t){return t.id!==e.id}))),s(1)}(e)}},e.id)}))]})},ie=function(e){var t=Object(n.useState)(1),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),i=Object(j.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(),b=Object(j.a)(u,2),p=b[0],f=b[1],h=Object(n.useState)([]),m=Object(j.a)(h,2),O=m[0],v=m[1],g=Object(n.useState)([]),x=Object(j.a)(g,2),w=x[0],y=x[1],_=ne(w),k=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=").concat(c,"&with_genres=").concat(_));case 2:t=e.sent,a=t.data,l(a.results),f(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k()}),[c,w]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pagesTitle",children:"Series"}),Object(d.jsx)(se,{genres:O,setGenres:v,selectedGenres:w,setSelectedGenres:y,setPage:r,type:"tv"}),Object(d.jsx)("div",{className:"trending",children:o&&o.map((function(e,t){return Object(d.jsx)(J,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),p>1&&Object(d.jsx)(X,{setPage:r,numOfPages:p})]})},oe=function(e){var t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),i=Object(j.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(1),b=Object(j.a)(u,2),p=b[0],f=b[1],h=Object(n.useState)([]),m=Object(j.a)(h,2),O=m[0],v=m[1],g=Object(n.useState)(),x=Object(j.a)(g,2),w=x[0],y=x[1],_=ne(o),k=function(){var e=Object(C.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("7e99f2c550d89cde253b192f786c9d4d","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(p,"&with_genres=").concat(_));case 2:t=e.sent,a=t.data,v(a.results),y(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k()}),[p,o]),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"pagesTitle",children:"Movies"}),Object(d.jsx)(se,{genres:c,setGenres:r,selectedGenres:o,setSelectedGenres:l,setPage:f,type:"movie"}),Object(d.jsx)("div",{className:"trending",children:O&&O.map((function(e){return Object(d.jsx)(J,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),w>1&&Object(d.jsx)(X,{setPage:f,numOfPages:w})]})},le=a(70),de=function(){var e=Object(l.g)().id;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(le.a,{className:"frame",url:"https://www.2embed.ru/embed/tmdb/movie?id=".concat(e),width:"100%",height:"100%",allowFullScreen:!0,frameBorder:"0"})})},ue=function(){var e=Object(l.g)(),t=e.id,a=e.season,n=e.ep;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(le.a,{className:"frame",url:"https://www.2embed.ru/embed/tmdb/tv?id=".concat(t,"&s=").concat(a,"&e=").concat(n),width:"100%",height:"100%",allowFullScreen:!0,frameBorder:"0"})})};var je=function(){return Object(d.jsxs)(o.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(i.a,{className:"cont",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/movies",component:oe}),Object(d.jsx)(l.a,{path:"/series",component:ie}),Object(d.jsx)(l.a,{path:"/search",component:ae}),Object(d.jsx)(l.a,{exact:!0,path:"/watch/:id",component:de}),Object(d.jsx)(l.a,{path:"/watch/:id/:season/:ep",component:ue}),Object(d.jsx)(l.a,{path:"/\nTrending-Hub/home",component:Y})]})})}),Object(d.jsx)(k,{})]})},be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(d.jsx)(je,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Trending-Hub",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Trending-Hub","/service-worker.js");be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):pe(t,e)}))}}()}},[[176,1,2]]]);
//# sourceMappingURL=main.752f3167.chunk.js.map
(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),s=i(18),a=i.n(s),r=i(9),o=i.n(r),d=i(19),l=i(3),u=i(4),j=i(6),m=i(5),h=i(0),v=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.trySearch(e.state.term)},e.onInputChange=function(t){e.setState({term:t.target.value})},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"search-bar ui segment",children:Object(h.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(h.jsxs)("div",{className:"field",children:[Object(h.jsx)("label",{children:" Video search "}),Object(h.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange,placeholder:"Search..."}),Object(h.jsx)("button",{className:"ui button",children:"Search"})]})})})}}]),i}(c.a.Component),b=i(8),p=i.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",type:"video",maxResult:5,key:"AIzaSyBMLBQn2LB3BXXh0dol26sUVR3a81nCqSE"}}),O=(i(44),function(e){return Object(h.jsxs)("div",{onClick:function(){e.onVideoSelect(e.videoElement)},className:"video-item item",children:[Object(h.jsx)("img",{className:"ui image",src:e.videoElement.snippet.thumbnails.medium.url}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("div",{className:"header",children:e.videoElement.snippet.title})})]})}),x=function(e){var t=e.videos.map((function(t){return Object(h.jsx)(O,{onVideoSelect:e.onVideoSelect,videoElement:t},t.id.videoId)}));return Object(h.jsx)("div",{className:"ui relaxed divided list",children:t})},f=function(e){if(!e.video)return Object(h.jsx)("div",{children:"loading....."});var t="https://www.youtube.com/embed/".concat(e.video.id.videoId);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"ui embed",children:Object(h.jsx)("iframe",{src:t})}),Object(h.jsxs)("div",{className:"ui segment",children:[Object(h.jsxs)("h4",{className:"ui header",children:[" ",e.video.snippet.title," "]}),Object(h.jsxs)("p",{children:[" ",e.video.snippet.description]})]})]})},S=function(e){Object(j.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onSearch=function(){var t=Object(d.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(h.jsx)(v,{trySearch:this.onSearch}),Object(h.jsx)("div",{className:"ui grid",children:Object(h.jsxs)("div",{className:"ui row",children:[Object(h.jsx)("div",{className:"ten wide column",children:Object(h.jsx)(f,{video:this.state.selectedVideo})}),Object(h.jsx)("div",{className:"six wide column",children:Object(h.jsx)(x,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})})]})})]})}}]),i}(c.a.Component);a.a.render(Object(h.jsx)(S,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4d1e2cef.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[155],{458:function(n,t,e){e.d(t,{c:function(){return l}});var i,r,o,a=e(168),s=e(5867),c=s.ZP.div(i||(i=(0,a.Z)(["\n  margin: 10px auto;\n  padding: 0;\n  width: 500px;\n"]))),d=s.ZP.img(r||(r=(0,a.Z)(["\n  display: block;\n  object-fit: cover;\n  height: fit-content;\n  border: none;\n  border-radius: 50%;\n  margin: 0 auto;\n"]))),p=s.ZP.h2(o||(o=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 40px auto;\n"]))),u=e(184),l=function(n){var t=n.image;return(0,u.jsxs)(c,{children:[(0,u.jsx)(d,{src:t,alt:"Nothing in List"}),(0,u.jsx)(p,{children:"Enter something to search!"})]})}},3228:function(n,t,e){e.d(t,{O:function(){return s}});var i=e(7689),r=e(1087),o=e(184),a=function(n){var t=n.movie,e=(0,i.TH)();return(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)},s=function(n){var t=n.movies;return(0,o.jsx)("ul",{children:t.map((function(n,t){return(0,o.jsx)(a,{movie:n},t)}))})}},6062:function(n,t,e){e.d(t,{T:function(){return x}});var i,r,o,a=e(5900),s=e(168),c=e(5867),d=c.ZP.div(i||(i=(0,s.Z)([""]))),p=c.ZP.img(r||(r=(0,s.Z)(["\n  display: block;\n  border: none;\n  border-radius: 50%;\n  margin: 20px auto;\n"]))),u=c.ZP.h2(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 40px auto;\n"]))),l=e(184),x=function(n){var t=n.title;return(0,l.jsxs)(d,{children:[(0,l.jsx)(p,{src:a,alt:"Nothing in List"}),(0,l.jsx)(u,{children:t})]})}},7104:function(n,t,e){e.d(t,{U:function(){return m}});var i,r,o,a,s,c=e(9126),d=e(168),p=e(5867),u=p.ZP.div(i||(i=(0,d.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  border-radius: 50px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #ffc700;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),l=p.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  background-color: #fff;\n  border-radius: 50px;\n  overflow: hidden;\n"]))),x=p.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n"]))),f=p.ZP.span(a||(a=(0,d.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),h=p.ZP.input(s||(s=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  margin-left: 10px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=e(184),m=function(n){var t=n.onSubmit;return(0,g.jsx)(u,{children:(0,g.jsxs)(l,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value;t(e),n.target.reset()},children:[(0,g.jsx)(f,{className:"button-label",children:(0,g.jsx)("span",{className:"search-span",children:"Search"})}),(0,g.jsx)(h,{type:"text",name:"query",required:!0}),(0,g.jsx)(x,{type:"submit",children:(0,g.jsx)(c.dVI,{})})]})})}},1555:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var i=e(9439),r=e(7104),o=e(3228),a=e(2791),s=e(1087),c=e(8565),d=e(458),p=e.p+"static/media/businessman-with-magnifying-glass-white-background.3f1a0cc3806b53317105.jpg",u=e(6062),l=e(184),x=function(){var n=(0,a.useState)([]),t=(0,i.Z)(n,2),e=t[0],x=t[1],f=(0,s.lr)(),h=(0,i.Z)(f,2),g=h[0],m=h[1],b=(0,a.useState)(!1),j=(0,i.Z)(b,2),v=j[0],Z=j[1],y=g.get("query");(0,a.useEffect)((function(){y&&(0,c.z1)(y).then((function(n){0!==n.results.length?x(n.results):Z(!0)}))}),[y]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.U,{onSubmit:function(n){m({query:n}),Z(!1)}}),!y&&(0,l.jsx)(d.c,{image:p}),v&&(0,l.jsx)(u.T,{title:" Nothing find!Please enter a valid query! \ud83e\udd26\u200d\u2642\ufe0f  "}),(0,l.jsx)(o.O,{movies:e})]})}},5900:function(n,t,e){n.exports=e.p+"static/media/pulp-fiction-john-travolta.59b46f4510af6cc07976.gif"}}]);
//# sourceMappingURL=155.29a64789.chunk.js.map
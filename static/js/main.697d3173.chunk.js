(this["webpackJsonpmaterial-ui-app"]=this["webpackJsonpmaterial-ui-app"]||[]).push([[0],{64:function(e,a,t){e.exports=t(77)},69:function(e,a,t){},70:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),c=(t(69),t(55)),i=t(20),m=(t(70),t(108)),u=t(111),s=t(126),p=t(112),E=t(113),d=t(114),b=t(50),g=t.n(b),h=t(51),f=t.n(h),v=Object(m.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function x(e){return l.a.createElement(s.a,Object.assign({button:!0,component:"a"},e))}function y(){var e=v();return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{component:"nav","aria-label":"main mailbox folders"},l.a.createElement(s.a,{button:!0},l.a.createElement(p.a,null,l.a.createElement(g.a,null)),l.a.createElement(E.a,{primary:"Inbox"})),l.a.createElement(s.a,{button:!0},l.a.createElement(p.a,null,l.a.createElement(f.a,null)),l.a.createElement(E.a,{primary:"Drafts"}))),l.a.createElement(d.a,null),l.a.createElement(u.a,{component:"nav","aria-label":"secondary mailbox folders"},l.a.createElement(s.a,{button:!0},l.a.createElement(E.a,{primary:"Trash"})),l.a.createElement(x,{href:"#simple-list"},l.a.createElement(E.a,{primary:"Spam"}))))}var w=t(45),k=t(119),S=t(118),N=t(117),C=t(116),O=t(124),j=t(52),B=t.n(j),I=t(53),W=t.n(I),P=t(30),D=t(115),L=["username@gmail.com","user02@gmail.com"],R=Object(m.a)({avatar:{backgroundColor:D.a[100],color:D.a[600]}});function A(e){var a=R(),t=e.onClose,n=e.selectedValue,r=e.open,o=function(e){t(e)};return l.a.createElement(O.a,{onClose:function(){t(n)},"aria-labelledby":"simple-dialog-title",open:r},l.a.createElement(C.a,{id:"simple-dialog-title"},"Set backup account"),l.a.createElement(u.a,null,L.map((function(e){return l.a.createElement(s.a,{button:!0,onClick:function(){return o(e)},key:e},l.a.createElement(N.a,null,l.a.createElement(S.a,{className:a.avatar},l.a.createElement(B.a,null))),l.a.createElement(E.a,{primary:e}))})),l.a.createElement(s.a,{autoFocus:!0,button:!0,onClick:function(){return o("addAccount")}},l.a.createElement(N.a,null,l.a.createElement(S.a,null,l.a.createElement(W.a,null))),l.a.createElement(E.a,{primary:"add account"}))))}function F(){var e=l.a.useState(!1),a=Object(w.a)(e,2),t=a[0],n=a[1],r=l.a.useState(L[1]),o=Object(w.a)(r,2),c=o[0],i=o[1];return l.a.createElement("div",null,l.a.createElement(P.a,{variant:"subtitle1"},"Selected: ",c),l.a.createElement("br",null),l.a.createElement(k.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open simple dialog"),l.a.createElement(A,{selectedValue:c,open:t,onClose:function(e){n(!1),i(e)}}))}var G=t(120),J=t(121),T=t(80),V=t(54),z=t.n(V),$=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function q(){var e=$();return l.a.createElement("div",{className:e.root},l.a.createElement(G.a,{position:"static"},l.a.createElement(J.a,null,l.a.createElement(T.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(z.a,null)),l.a.createElement(P.a,{variant:"h6",className:e.title},"News"),l.a.createElement(k.a,{color:"inherit"},"Login"))))}var H=t(125),K=t(122),M=t(123),Q=t(37),U=t.n(Q),X=Object(m.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function Y(){var e=X();return l.a.createElement("div",{className:e.root},l.a.createElement(H.a,null,l.a.createElement(K.a,{expandIcon:l.a.createElement(U.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},l.a.createElement(P.a,{className:e.heading},"Expansion Panel 1")),l.a.createElement(M.a,null,l.a.createElement(P.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(H.a,null,l.a.createElement(K.a,{expandIcon:l.a.createElement(U.a,null),"aria-controls":"panel2a-content",id:"panel2a-header"},l.a.createElement(P.a,{className:e.heading},"Expansion Panel 2")),l.a.createElement(M.a,null,l.a.createElement(P.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),l.a.createElement(H.a,{disabled:!0},l.a.createElement(K.a,{expandIcon:l.a.createElement(U.a,null),"aria-controls":"panel3a-content",id:"panel3a-header"},l.a.createElement(P.a,{className:e.heading},"Disabled Expansion Panel"))))}var Z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(i.a,{path:"/",component:y}),l.a.createElement(i.a,{path:"/SimpleDialogs",component:F}),l.a.createElement(i.a,{path:"/SimpleAppBar",component:q}),l.a.createElement(i.a,{path:"/SimpleExpansionPanel",component:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.697d3173.chunk.js.map
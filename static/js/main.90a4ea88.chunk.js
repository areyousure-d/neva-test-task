(this["webpackJsonpneva-test-task"]=this["webpackJsonpneva-test-task"]||[]).push([[0],{112:function(e,t,c){"use strict";c.r(t);var n=c(0),j=c.n(n),i=c(36),r=c.n(i),s=c(28),d=c(132),l=c(17),b=c(15),a=c(124),O=c(122),h=c(121),x=c(123),o=c(1),u=function(e){var t=e.title,c=e.children,n=e.to;return Object(o.jsxs)(h.a,{m:2,p:4,w:"300px",position:"relative",borderWidth:"1px",borderRadius:"md",transition:"0.2s",bg:"gray.200",_hover:{bg:"green.300"},children:[Object(o.jsx)(O.a,{size:"sm",children:t}),Object(o.jsx)(x.a,{children:c}),Object(o.jsx)(s.b,{to:n,style:{position:"absolute",top:"0",left:"0",bottom:"0",right:"0"}})]})},p=function(){return Object(o.jsxs)(a.a,{height:"100vh",pt:"15%",direction:"column",align:"center",children:[Object(o.jsx)(O.a,{size:"xl",children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),Object(o.jsxs)(a.a,{mt:4,flexWrap:"wrap",justifyContent:"center",children:[Object(o.jsx)(u,{title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 1",to:"/tickets",children:"\u0411\u0438\u043b\u0435\u0442\u044b \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435"}),Object(o.jsx)(u,{title:"\u0417\u0430\u0434\u0430\u043d\u0438\u0435 2",to:"/time",children:"\u0412\u0440\u0435\u043c\u044f \u0438\u0437 A \u0432 B"})]})]})},m=c(130),g=c(125),f={ab:["2021-08-21 18:00:00","2021-08-21 18:30:00","2021-08-21 18:45:00","2021-08-21 19:00:00","2021-08-21 19:15:00","2021-08-21 21:00:00"],ba:["2021-08-21 18:30:00","2021-08-21 18:45:00","2021-08-21 19:00:00","2021-08-21 19:15:00","2021-08-21 19:35:00","2021-08-21 21:50:00","2021-08-21 21:55:00"]},v="SET_DIRECTION",T="SET_START_TIME",_="SET_SECOND_TIME",k="SET_QUANTITY",y=function(e){return{type:T,payload:e}},C=function(e){return{type:_,payload:e}};function A(e){var t=new Date(e),c=t.getTimezoneOffset(),n=t.getTime()-60*(c- -180)*1e3;return new Date(n)}var B=function(){var e,t,c=Object(l.b)(),n=Object(l.c)((function(e){return e.timeReducer})),i=n.direction,r=n.ABTime,s=n.BATime,d=[],b=[];return"ab"===i&&(d=f.ab.map((function(e){return A(e)}))),"ba"===i&&(b=f.ba.map((function(e){return A(e)}))),"aba"===i&&(d=f.ab.map((function(e){return A(e)})),r&&(b=(b=f.ba.filter((function(e){return console.log(">",new Date(e).getTime()+3e6>+new Date(r).getTime()),new Date(e).getTime()-3e6>new Date(r).getTime()}))).map((function(e){return A(e)})))),e=d.map((function(e){if(e)return Object(o.jsx)("option",{value:e.toString(),children:e.toString()},e.getTime())})),t=b.map((function(e){if(e)return Object(o.jsx)("option",{value:e.toString(),children:e.toString()},e.getTime())})),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"}),Object(o.jsxs)(g.a,{value:A("ba"!==i?r:s),onChange:function(e){"ab"!==i&&"aba"!==i||c(y(e.target.value)),"ba"===i&&c(C(e.target.value))},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f",children:["ab"===i&&e,"ba"===i&&t,"aba"===i&&e]}),"aba"===i&&Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsx)("h2",{children:"\u0418\u0437 \u0412 \u0432 A"}),Object(o.jsx)(g.a,{value:A(s),onChange:function(e){c(C(e.target.value))},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f",children:t})]})]})},w=c(7),S=function(){var e=Object(l.b)(),t=Object(n.useState)(""),c=Object(w.a)(t,2),j=c[0],i=c[1];return Object(o.jsxs)(g.a,{onChange:function(t){var c;i(t.target.value),e((c=t.target.value,{type:v,payload:c}))},value:j,placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",children:[Object(o.jsx)("option",{value:"ab",children:"\u0438\u0437 A \u0432 B"}),Object(o.jsx)("option",{value:"ba",children:"\u0438\u0437 B \u0432 A"}),Object(o.jsx)("option",{value:"aba",children:"\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"})]})},z=c(126),R=function(){var e=Object(l.b)(),t=Object(n.useState)(0),c=Object(w.a)(t,2),j=c[0],i=c[1];return Object(o.jsx)(z.a,{type:"number",onChange:function(t){var c;i(t.target.value),e((c=t.target.value,{type:k,payload:Number(c)}))},value:j})},E={ab:700,ba:700,aba:1200};function D(e){var t=A(e),c=t.getHours(),n=t.getMinutes();return c<10&&(c="0"+c),n<10&&(n="0"+n),c+":"+n}var q=function(){Object(l.b)();var e=Object(l.c)((function(e){return e.timeReducer})),t=e.direction,c=e.quantity,n=e.ABTime,i=e.BATime,r=E[t]*c,s=D(n),d=D(A(n).getTime()+3e6),b=D(i),a=D(A(i).getTime()+3e6),h="",u="\u0431\u0438\u043b\u0435\u0442";return 0===c||c>=5?u="\u0431\u0438\u043b\u0435\u0442\u043e\u0432":1===c?u="\u0431\u0438\u043b\u0435\u0442":c<5&&(u="\u0431\u0438\u043b\u0435\u0442a"),"ab"===t&&(h="\u0438\u0437 A \u0432 B",50),"ba"===t&&(h="\u0438\u0437 B \u0432 A",50),"aba"===t&&(h="\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 A",100),Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsx)(O.a,{size:"md",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),Object(o.jsxs)(x.a,{children:["\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 ",c," ",u," \u043f\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443 ",h," ","\u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c\u044e ",r," \u0440\u0443\u0431\u043b\u0435\u0439."]}),"aba"!==t&&Object(o.jsxs)(x.a,{children:["\u0422\u0435\u043f\u043b\u043e\u0445\u043e\u0434 ",h," \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 ",s,", \u043f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u0432"," ",d,"."]}),"aba"===t&&Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsxs)(x.a,{children:["\u0422\u0435\u043f\u043b\u043e\u0445\u043e\u0434 \u0438\u0437 \u0410 \u0432 \u0412 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 ",s,", \u043f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u0432"," ",d]}),Object(o.jsxs)(x.a,{children:["\u0422\u0435\u043f\u043b\u043e\u0445\u043e\u0434 \u0438\u0437 \u0412 \u0432 \u0410 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u0442\u0441\u044f \u0432 ",b,", \u043f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u0432"," ",a]})]}),Object(o.jsxs)(x.a,{children:["\u041e\u0431\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432 \u043f\u0443\u0442\u0438 ","aba"===t?"1 \u0447\u0430\u0441 40 \u043c\u0438\u043d\u0443\u0442":"50 \u043c\u0438\u043d\u0443\u0442","."]}),Object(o.jsx)(x.a,{children:"\u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0439 \u043f\u043e\u0435\u0437\u0434\u043a\u0438!"})]})},I=c(131),N=function(e){var t=e.title,c=e.statusText,n=e.children,j=e.backTitle,i=e.nextTitle,r=e.nextOnClick,s=e.backOnClick;return Object(o.jsxs)(h.a,{children:[Object(o.jsx)(O.a,{size:"md",children:t}),Object(o.jsx)(x.a,{mb:2,children:c}),n,Object(o.jsxs)(a.a,{mt:4,justifyContent:"space-between",children:[j&&Object(o.jsx)(I.a,{onClick:s,children:j}),i&&Object(o.jsx)(I.a,{onClick:r,children:i})]})]})},F=function(){var e=Object(b.f)(),t=Object(m.a)(),c=Object(l.c)((function(e){return e.timeReducer.quantity}));return Object(o.jsx)(N,{title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u043b\u0435\u0442\u043e\u0432",statusText:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u043b\u0435\u0442\u043e\u0432: "+Number(c),backTitle:"\u041d\u0430\u0437\u0430\u0434",backOnClick:function(){e.push("/time/select-time/")},nextTitle:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c",nextOnClick:function(){null!==c&&0!==c?Number(c)<0?t({title:"\u041e\u0448\u0438\u0431\u043a\u0430",description:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0438\u043b\u0435\u0442\u043e\u0432 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c",status:"error",duration:5e3,isClosable:!0}):e.push("/time/result/"):t({title:"\u041e\u0448\u0438\u0431\u043a\u0430",description:"\u0412\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",status:"error",duration:5e3,isClosable:!0})},children:Object(o.jsx)(R,{})})},M=function(){return Object(o.jsx)(q,{})},W=function(){var e=Object(b.f)(),t=Object(m.a)(),c=Object(l.c)((function(e){return e.timeReducer})),n=c.ABTime,j=c.BATime,i=c.direction,r="";return null===n||""===n||"ab"!==i&&"aba"!==i||(r="\u0438\u0437 \u0410 \u0432 \u0412 \u0432 ".concat(n)),null===j||""===j||"ba"!==i&&"aba"!==i||(r+=" \u0438\u0437 \u0412 \u0432 \u0410 \u0432 ".concat(j)),null!==n&&""!==n||null!==j&&""!==j||(r="\u0432\u044b \u043f\u043e\u043a\u0430 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0432\u0440\u0435\u043c\u044f"),Object(o.jsx)(N,{title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f",statusText:r,nextTitle:"\u0414\u0430\u043b\u0435\u0435",nextOnClick:function(){if(null!==n&&""!==n||null!==j&&""!==j){if("aba"===i){if(null===n||""===n)return void t({title:"\u041e\u0448\u0438\u0431\u043a\u0430!",description:"\u0412\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0432\u0440\u0435\u043c\u044f \u0438\u0437 \u0410 \u0432 \u0412",status:"error",duration:5e3,isClosable:!0});if(null===j||""===j)return void t({title:"\u041e\u0448\u0438\u0431\u043a\u0430!",description:"\u0412\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0432\u0440\u0435\u043c\u044f \u0438\u0437 B \u0432 A",status:"error",duration:5e3,isClosable:!0})}e.push("/time/select-quantity/")}else t({title:"\u041e\u0448\u0438\u0431\u043a\u0430!",description:"\u0412\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0432\u0440\u0435\u043c\u044f",status:"error",duration:5e3,isClosable:!0})},backTitle:"\u041d\u0430\u0437\u0430\u0434",backOnClick:function(){e.push("/time/select-direction")},children:Object(o.jsx)(B,{})})},J=function(){var e=Object(m.a)(),t=Object(b.f)(),c=Object(l.c)((function(e){return e.timeReducer.direction})),n="\u0432\u044b \u043f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438";return"ab"===c&&(n="\u0438\u0437 \u0410 \u0432 \u0412"),"ba"===c&&(n="\u0438\u0437 \u0412 \u0432 \u0410"),"aba"===c&&(n="\u0438\u0437 \u0410 \u0432 \u0412 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"),Object(o.jsx)(N,{title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",statusText:"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435: "+n,nextOnClick:function(){"ab"===c||"ba"===c||"aba"===c?t.push("/time/select-time/"):e({title:"\u041e\u0448\u0438\u0431\u043a\u0430",description:"\u0412\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",status:"error",duration:5e3,isClosable:!0})},nextTitle:"\u0414\u0430\u043b\u0435\u0435",backOnClick:null,backTitle:null,children:Object(o.jsx)(S,{})})},H=function(){return Object(o.jsxs)(j.a.Fragment,{children:[Object(o.jsx)(O.a,{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),Object(o.jsx)(x.a,{mb:"40px",children:"\u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0431\u0438\u043b\u0435\u0442\u044b \u0438\u0437 \u043f\u0443\u043d\u043a\u0442\u0430 \u0410 \u0432 \u043f\u0443\u043d\u043a\u0442 \u0412, \u0438\u0437 \u0410 \u0432 \u0412, \u0438\u0437 \u0410 \u0432 \u0412 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e"}),Object(o.jsx)(s.b,{style:{borderRadius:"5px",padding:"15px",backgroundColor:"#dadada"},to:"/time/select-direction/",children:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u043f\u043e\u043a\u0443\u043f\u043a\u0435 \u0431\u0438\u043b\u0435\u0442\u043e\u0432"})]})},Q=function(){return Object(o.jsx)(b.c,{children:[{path:"/time/",exact:!0,component:H},{path:"/time/select-direction/",exact:!1,component:J},{path:"/time/select-quantity/",exact:!0,component:F},{path:"/time/select-time/",exact:!0,component:W},{path:"/time/result/",exact:!0,component:M}].map((function(e){var t=e.path,c=e.exact,n=e.component;return Object(o.jsx)(b.a,{path:t,exact:c,component:n},t)}))})},U=function(){return Object(o.jsxs)(h.a,{p:4,children:[Object(o.jsx)("h1",{children:"\u041f\u043e\u0435\u0437\u0434\u043a\u0430"}),Object(o.jsx)(Q,{})]})},Y=function(){return Object(o.jsx)(a.a,{justifyContent:"center",children:Object(o.jsx)(h.a,{width:"600px",maxWidth:"600px",children:Object(o.jsx)(U,{})})})},G=c(127),K=c(128),L=c(129),P=function(){return Object(o.jsxs)(h.a,{p:4,children:[Object(o.jsx)(O.a,{children:"\u0411\u0438\u043b\u0435\u0442\u044b \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u0435"}),Object(o.jsx)(O.a,{size:"md",children:"\u0412\u0441\u0435\u0433\u043e \u0431\u0443\u0434\u0435\u0442 4 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."}),Object(o.jsxs)(G.b,{children:[Object(o.jsx)(G.a,{children:"purchase_order"}),Object(o.jsx)(G.a,{children:"purchase_order_item"}),Object(o.jsx)(G.a,{children:"ticket_type"}),Object(o.jsx)(G.a,{children:"ticket_price"})]}),Object(o.jsx)(K.a,{}),Object(o.jsx)(O.a,{size:"md",children:"purchase_order"}),Object(o.jsx)(x.a,{children:"\u0412 purchase_order \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0437\u0430\u043a\u0430\u0437\u044b. \u0423\u0434\u0430\u043b\u0438\u043b \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u043e\u0431\u0449\u0435\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0435\u0435 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0435 \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e. \u0423\u0434\u0430\u043b\u0438\u043b \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441\u043e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c\u044e, \u0442\u0438\u043f\u043e\u043c, \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u043e\u043c \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043e\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u0438\u043b\u0435\u0442\u043e\u0432, \u0431\u0438\u043b\u0435\u0442\u044b \u0437\u0430\u043a\u0430\u0437\u0430 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u0434\u0440\u0443\u0433\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 purchase_order_item, \u0443 \u043a\u0430\u0436\u0434\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0431\u0443\u0434\u0435\u0442 id \u0437\u0430\u043a\u0430\u0437\u0430 - purchase_order_id."}),Object(o.jsxs)(L.a,{children:[Object(o.jsx)(L.b,{children:"purchase_order"}),Object(o.jsx)(L.f,{children:Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.e,{children:"id"}),Object(o.jsx)(L.e,{children:"user_id"}),Object(o.jsx)(L.e,{children:"created"}),Object(o.jsx)(L.e,{children:"event_date"})]})}),Object(o.jsxs)(L.c,{children:[Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"00451"}),Object(o.jsx)(L.d,{children:"2021-02-03 00:00:00"}),Object(o.jsx)(L.d,{children:"2021-02-21 00:00:00"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"00364"}),Object(o.jsx)(L.d,{children:"2021-02-11 21:00:00"}),Object(o.jsx)(L.d,{children:"2021-02-20 15:00:00"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"00015"}),Object(o.jsx)(L.d,{children:"2021-02-11 00:00:00"}),Object(o.jsx)(L.d,{children:"2021-08-21 00:00:00"})]})]})]}),Object(o.jsx)(K.a,{}),Object(o.jsx)(O.a,{size:"md",children:"purchase_order_item"}),Object(o.jsx)(x.a,{children:"\u0412 purchase_order_item \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432. \u041e\u0434\u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c - \u043e\u0434\u0438\u043d \u0431\u0438\u043b\u0435\u0442, \u0442\u0443\u0442 \u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044c\u044f \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434\u044b."}),Object(o.jsxs)(L.a,{children:[Object(o.jsx)(L.b,{children:"purchase_order_item"}),Object(o.jsx)(L.f,{children:Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.e,{children:"id"}),Object(o.jsx)(L.e,{children:"purchase_order_id"}),Object(o.jsx)(L.e,{children:"ticket_price_id"}),Object(o.jsx)(L.e,{children:"barcode"})]})}),Object(o.jsxs)(L.c,{children:[Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"11111111"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"6"}),Object(o.jsx)(L.d,{children:"11111112"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"6"}),Object(o.jsx)(L.d,{children:"11111113"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"4"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"11111114"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"5"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"11111115"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"6"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"11111116"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"7"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"11111117"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"8"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"11111118"})]})]})]}),Object(o.jsx)(K.a,{}),Object(o.jsx)(O.a,{size:"md",children:"ticket_type"}),Object(o.jsx)(x.a,{children:"\u0422\u0438\u043f \u0431\u0438\u043b\u0435\u0442\u0430 (\u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0439, \u0434\u0435\u0442\u0441\u043a\u0438\u0439, \u043b\u044c\u0433\u043e\u0442\u043d\u044b\u0439, \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u043e\u0439 \u0438 \u0442\u0434)"}),Object(o.jsxs)(L.a,{children:[Object(o.jsx)(L.b,{children:"ticket_type"}),Object(o.jsx)(L.f,{children:Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.e,{children:"id"}),Object(o.jsx)(L.e,{children:"type"})]})}),Object(o.jsxs)(L.c,{children:[Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"adult"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"kid"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"discount"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"4"}),Object(o.jsx)(L.d,{children:"group"})]})]})]}),Object(o.jsx)(K.a,{}),Object(o.jsx)(O.a,{size:"md",children:"ticket_price"}),Object(o.jsx)(x.a,{children:"\u0422\u0430\u043a \u043a\u0430\u043a \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0446\u0435\u043d\u044b \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0431\u0438\u043b\u0435\u0442\u0430, \u0432\u0441\u0435 \u0446\u0435\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435."}),Object(o.jsxs)(L.a,{children:[Object(o.jsx)(L.b,{children:"ticket_price"}),Object(o.jsx)(L.f,{children:Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.e,{children:"id"}),Object(o.jsx)(L.e,{children:"event_id"}),Object(o.jsx)(L.e,{children:"ticket_type_id"}),Object(o.jsx)(L.e,{children:"price"})]})}),Object(o.jsxs)(L.c,{children:[Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"003"}),Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"700"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"003"}),Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"450"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"003"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"200"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"4"}),Object(o.jsx)(L.d,{children:"003"}),Object(o.jsx)(L.d,{children:"4"}),Object(o.jsx)(L.d,{children:"500"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"5"}),Object(o.jsx)(L.d,{children:"006"}),Object(o.jsx)(L.d,{children:"1"}),Object(o.jsx)(L.d,{children:"1000"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"6"}),Object(o.jsx)(L.d,{children:"006"}),Object(o.jsx)(L.d,{children:"2"}),Object(o.jsx)(L.d,{children:"800"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"7"}),Object(o.jsx)(L.d,{children:"006"}),Object(o.jsx)(L.d,{children:"3"}),Object(o.jsx)(L.d,{children:"700"})]}),Object(o.jsxs)(L.g,{children:[Object(o.jsx)(L.d,{children:"8"}),Object(o.jsx)(L.d,{children:"006"}),Object(o.jsx)(L.d,{children:"4"}),Object(o.jsx)(L.d,{children:"700"})]})]})]})]})},V=function(){return Object(o.jsx)(b.c,{children:[{path:"/time/",exact:!1,component:Y},{path:"/",exact:!0,component:p},{path:"/tickets/",exact:!0,component:P}].map((function(e){return Object(o.jsx)(b.a,{path:e.path,exact:e.exact,component:e.component},e.path)}))})};var X=function(){return Object(o.jsx)(V,{})},Z=c(42),$=c(35),ee={direction:null,ABTime:null,BATime:null,quantity:null},te=Object(Z.b)({timeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object($.a)(Object($.a)({},e),{},{direction:t.payload});case T:return Object($.a)(Object($.a)({},e),{},{ABTime:t.payload});case _:return Object($.a)(Object($.a)({},e),{},{BATime:t.payload});case k:return Object($.a)(Object($.a)({},e),{},{quantity:t.payload});default:return e}}}),ce=Object(Z.c)(te);r.a.render(Object(o.jsx)(j.a.StrictMode,{children:Object(o.jsx)(l.a,{store:ce,children:Object(o.jsx)(d.a,{children:Object(o.jsx)(s.a,{basename:"/",children:Object(o.jsx)(X,{})})})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.90a4ea88.chunk.js.map
"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[667],{425:(e,a,s)=>{s.d(a,{A:()=>c});const r=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var t=s(579);const c=()=>(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})},883:(e,a,s)=>{s.r(a),s.d(a,{default:()=>C});var r=s(43),t=s(591),c=s(897),n=s(69);const i=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var l=s(579);const o=e=>{let{data:a}=e;const{name:s,description:r,thumbnail:t,homepage:c,wiki:n}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:t,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:s}),(0,l.jsx)("p",{className:"randomchar__descr",children:r}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"wiki"})})]})]})]})},h=()=>{const[e,a]=(0,r.useState)(null),{getCharacter:s,clearError:t,process:h,setProcess:d}=(0,c.A)();(0,r.useEffect)((()=>{u();const e=setInterval(u(),6e4);return()=>{clearInterval(e)}}),[]);const m=e=>{a(e)},u=()=>{t();const e=Math.floor(400*Math.random())+1011e3;s(e).then(m).then((()=>d("confirmed")))};return(0,l.jsxs)("div",{className:"randomchar",children:[(0,n.A)(h,o,e),(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:u,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var d=s(391),m=s(523),u=s(502),j=s(425);const _=(e,a,s)=>{switch(e){case"waiting":return(0,l.jsx)(u.A,{});case"loading":return s?(0,l.jsx)(a,{}):(0,l.jsx)(u.A,{});case"confirmed":return(0,l.jsx)(a,{});case"error":return(0,l.jsx)(j.A,{});default:throw new Error("Unexpected process state")}},x=e=>{const[a,s]=(0,r.useState)([]),[t,n]=(0,r.useState)(!1),[i,o]=(0,r.useState)(210),[h,u]=(0,r.useState)(!1),{getAllCharacters:j,process:x,setProcess:p}=(0,c.A)();(0,r.useEffect)((()=>{b(i,!0)}),[]);const b=(e,a)=>{n(!a),j(e).then(v).then((()=>p("confirmed")))},v=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),n((e=>!1)),o((e=>e+9)),u((e=>a))},g=(0,r.useRef)([]),N=e=>{g.current.forEach((e=>e.classList.remove("char__item_selected"))),g.current[e].classList.add("char__item_selected"),g.current[e].focus()};return(0,l.jsxs)("div",{className:"char__list",children:[_(x,(()=>function(a){const s=a.map(((a,s)=>{let r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(r={objectFit:"unset"}),(0,l.jsx)(d.A,{timeout:500,classNames:"char__item",children:(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>g.current[s]=e,onClick:()=>{e.onCharSelected(a.id),N(s)},onKeyPress:r=>{" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(a.id),N(s))},children:[(0,l.jsx)("img",{src:a.thumbnail,alt:a.name,style:r}),(0,l.jsx)("div",{className:"char__name",children:a.name})]})},a.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:(0,l.jsx)(m.A,{component:null,children:s})})}(a)),t),(0,l.jsx)("button",{className:"button button__main button__long",disabled:t,style:{display:h?"none":"block"},onClick:()=>b(i),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},p=e=>{let{data:a}=e;const{name:s,description:r,thumbnail:t,homepage:c,wiki:n,comics:i}=a;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(o={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:t,alt:s,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:n,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:r}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this Hero!",i.map(((e,a)=>{if(!(a>9))return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},b=e=>{const[a,s]=(0,r.useState)(null),{getCharacter:t,clearError:i,process:o,setProcess:h}=(0,c.A)();(0,r.useEffect)((()=>{d()}),[e.charId]);const d=()=>{const{charId:a}=e;a&&(i(),t(a).then(m).then((()=>h("confirmed"))))},m=e=>{s(e)};return(0,l.jsx)("div",{className:"char__info",children:(0,n.A)(o,p,a)})};class v extends r.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){this.setState({error:!0})}render(){return this.state.error?(0,l.jsx)(j.A,{}):this.props.children}}const g=v,N=s.p+"static/media/vision.067d4ae1936d64a577ce.png";var f=s(892),k=s(899),w=s(475);const y=()=>{const[e,a]=(0,r.useState)(null),{getCharacterByName:s,clearError:t,process:n,setProcess:i}=(0,c.A)(),o=e=>{a(e)},h="error"===n?(0,l.jsx)("div",{className:"char__search-critical-error",children:(0,l.jsx)(j.A,{})}):null,d=e?e.length>0?(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",e[0].name," page?"]}),(0,l.jsx)(w.N_,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"To page"})})]}):(0,l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,l.jsxs)("div",{className:"char__search-form",children:[(0,l.jsx)(f.l1,{initialValues:{charName:""},validationSchema:k.Ik({charName:k.Yj().required("This field is requred")}),onSubmit:e=>{let{charName:a}=e;var r;r=a,t(),s(r).then(o).then((()=>i("confirmed")))},children:(0,l.jsxs)(f.lV,{children:[(0,l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsx)(f.D0,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===n,children:(0,l.jsx)("div",{className:"inner",children:"find"})})]}),(0,l.jsx)(f.Kw,{component:"div",className:"char__search-error",name:"charName"})]})}),d,h]})},C=()=>{const[e,a]=(0,r.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.m,{children:[(0,l.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,l.jsx)("title",{children:"Marvel information portal"})]}),(0,l.jsx)(g,{children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(g,{children:(0,l.jsx)(x,{onCharSelected:e=>{a(e)}})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(g,{children:(0,l.jsx)(b,{charId:e})}),(0,l.jsx)(g,{children:(0,l.jsx)(y,{})})]})]}),(0,l.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}},897:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(43);const t=()=>{const{request:e,clearError:a,process:s,setProcess:t}=(()=>{const[e,a]=(0,r.useState)("waiting");return{request:(0,r.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a("loading");try{const a=await fetch(e,{method:s,body:r,headers:t});if(!a.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));return await a.json()}catch(c){throw a("error"),c}}),[]),clearError:(0,r.useCallback)((()=>{a("loading")}),[]),process:e,setProcess:a}})(),c="https://gateway.marvel.com:443/v1/public/",n="apikey=0db456f458ff601147a385f809ef5f2e",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>{var a;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{process:s,setProcess:t,getAllCharacters:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(c,"characters?limit=9&offset=").concat(a,"&").concat(n))).data.results.map(i)},getCharacterByName:async a=>(await e("".concat(c,"characters?name=").concat(a,"&").concat(n))).data.results.map(i),getCharacter:async a=>{const s=await e("".concat(c,"characters/").concat(a,"?").concat(n));return i(s.data.results[0])},getAllComics:async function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(c,"comics?orderBy=issueNumber&limit=8&offset=").concat(a,"&").concat(n))).data.results.map(l)},getComic:async a=>{const s=await e("".concat(c,"comics/").concat(a,"?").concat(n));return l(s.data.results[0])},clearError:a}}},69:(e,a,s)=>{s.d(a,{A:()=>i});var r=s(502),t=s(425),c=s(579);const n=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]}),i=(e,a,s)=>{switch(e){case"waiting":return(0,c.jsx)(n,{});case"loading":return(0,c.jsx)(r.A,{});case"confirmed":return(0,c.jsx)(a,{data:s});case"error":return(0,c.jsx)(t.A,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=667.3149eb9b.chunk.js.map
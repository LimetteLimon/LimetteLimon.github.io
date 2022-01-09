import{o as i,c,a as s,t as l,b as w,p as v,d as m,F as d,r as b,n as g,e as x,f,w as k,v as $,g as I,h as U,i as N,j as S}from"./vendor.ad024933.js";const L=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};L();var B=[{U1:"\u0421\u0432\u044F\u0437\u044B\u0432\u0430\u043D\u0438\u0435 css \u043A\u043B\u0430\u0441\u0441\u043E\u0432. \u0423\u0440\u043E\u043A 1"},{U2:"\u0418\u0437\u0443\u0447\u0435\u043D\u0438\u0435 props \u0438 ref. \u0423\u0440\u043E\u043A 2"},{U3:"\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0444\u043E\u0440\u043C\u0430\u043C\u0438. \u0423\u0440\u043E\u043A 3"},{U4:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u0435\u043B (To-do list). \u0423\u0440\u043E\u043A 4"},{U5:"\u0422\u0430\u0439\u043C\u0435\u0440. \u0423\u0440\u043E\u043A 5"},{U6:"\u0421\u0442\u0435\u043D\u0430. \u0423\u0440\u043E\u043A 6"},{U7:"\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u043B\u043E\u0432. \u0423\u0440\u043E\u043A 7"},{U8:"\u041D\u0430\u0439\u0434\u0438 \u0431\u0443\u043A\u0432\u044B. \u0423\u0440\u043E\u043A 8"},{U9:"\u0423\u0440\u043E\u043A 9"}];var h=(e,n)=>{for(const[a,u]of n)e[a]=u;return e};const j={components:{},data(){return{}},created(){},mounted(){var e=document.querySelector('meta[name="description"]').setAttribute("content",this.uLength()+" \u0443\u0440\u043E\u043A\u043E\u0432 VUE");console.log(e)},computed:{},watch:{},methods:{openNavi(){this.$root.content="Navi"},uLength(){var e=B.length;return e},end(){return/1/.test(this.uLength())?"\u0443\u0440\u043E\u043A":this.uLength()===2||this.uLength()===3||this.uLength()===4?"\u0443\u0440\u043E\u043A\u0430":"\u0443\u0440\u043E\u043A\u043E\u0432"}}},M=e=>(v("data-v-26199c10"),e=e(),m(),e),q=M(()=>s("div",{class:"logo"},null,-1)),A={class:"uCounter"};function V(e,n,a,u,t,r){return i(),c("header",null,[q,s("button",{class:"top",onClick:n[0]||(n[0]=(...o)=>r.openNavi&&r.openNavi(...o))},"\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435"),s("p",A,[s("span",null,l(r.uLength()),1),w(l(r.end())+" VUE",1)])])}var H=h(j,[["render",V],["__scopeId","data-v-26199c10"]]);const T={};function R(e,n){return i(),c("h1",null,l(this.$root.unterrichtName),1)}var D=h(T,[["render",R],["__scopeId","data-v-44bfc120"]]);const G={data(){return{unterrichten:B}},created(){this.changeTitle("\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435")},methods:{changeU(e,n){this.$root.content=n,this.changeTitle(e)},changeTitle(e){document.querySelector("title").innerHTML=e,this.$root.unterrichtName=e}}},O={class:"navi"},E={class:"navi-item"},z=["onClick"];function P(e,n,a,u,t,r){return i(),c("ul",O,[(i(!0),c(d,null,b(t.unterrichten,o=>(i(),c("li",E,[(i(!0),c(d,null,b(o,(_,p)=>(i(),c("a",{href:"#",onClick:Bt=>r.changeU(_,p)},l(_),9,z))),256))]))),256))])}var Z=h(G,[["render",P],["__scopeId","data-v-7b84b65a"]]);const F={components:{},data(){return{bg:null,colors:["red","green","blue","orange","gold"],i:0}},created(){},mounted(){this.changeColor()},computed:{},watch:{},methods:{changeColor(){this.i===this.colors.length&&(this.i=0),this.bg=this.colors[this.i++]}}},J=e=>(v("data-v-b0e377de"),e=e(),m(),e),K=J(()=>s("p",{class:"erklarung"},"\u0418\u0437\u043C\u0435\u043D\u0438 \u0446\u0432\u0435\u0442 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u043A\u043B\u0438\u043A\u043D\u0443\u0432 \u043F\u043E \u043D\u0435\u043C\u0443.",-1)),W={class:"rect_900_auto bg_MediumAquaMarine"};function Y(e,n,a,u,t,r){return i(),c(d,null,[K,s("div",W,[s("div",{class:g(["box",t.bg]),onClick:n[0]||(n[0]=o=>r.changeColor())},null,2),s("div",{class:g(["box",t.bg]),onClick:n[1]||(n[1]=o=>r.changeColor())},null,2),s("div",{class:g(["box",t.bg]),onClick:n[2]||(n[2]=o=>r.changeColor())},null,2),s("div",{class:g(["box",t.bg]),onClick:n[3]||(n[3]=o=>r.changeColor())},null,2)])],64)}var Q=h(F,[["render",Y],["__scopeId","data-v-b0e377de"]]);const X={props:["index"],components:{},data(){return{bg:null,colors:["red","orangered","orange","gold","yellow","GreenYellow"],i:this.index||0}},created(){},mounted(){this.changeColor()},computed:{},watch:{},methods:{changeColor(){this.i===this.colors.length&&(this.i=0),this.$refs.b.style.backgroundColor=this.colors[this.i++]}}};function ee(e,n,a,u,t,r){return i(),c("div",{class:"box",onClick:n[0]||(n[0]=o=>r.changeColor()),ref:"b"},null,512)}var te=h(X,[["render",ee],["__scopeId","data-v-d22c8cbe"]]);const se={components:{ColorsBox:te},data(){return{}},created(){},mounted(){},computed:{},watch:{},methods:{}},ne=s("p",{class:"erklarung"},"\u0418\u0437\u043C\u0435\u043D\u0438 \u0446\u0432\u0435\u0442 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u043A\u043B\u0438\u043A\u043D\u0443\u0432 \u043F\u043E \u043D\u0435\u043C\u0443.",-1),oe={class:"rect_900_auto bg_MediumAquaMarine"};function re(e,n,a,u,t,r){const o=x("ColorsBox");return i(),c(d,null,[ne,s("div",oe,[f(o),f(o),f(o),f(o,{index:"3"})])],64)}var ie=h(se,[["render",re]]);const ce={components:{},data(){return{person:"\u043A\u0438\u0440\u043F\u0438\u0447",light:!0,bricks:[],countBricks:1}},created(){},mounted(){this.addBrick()},computed:{},watch:{},methods:{addBrick(){for(var e=0;e<this.countBricks;e++)this.bricks.push(this.person+" "+(e+1))},reset(){this.person="\u043A\u0438\u0440\u043F\u0438\u0447",this.bricks=[],this.countBricks=1}}},ae=e=>(v("data-v-56c138f1"),e=e(),m(),e),le={class:"rect_900_auto bg_MediumAquaMarine colorWhite"},ue=ae(()=>s("span",null,"Label",-1));function _e(e,n,a,u,t,r){return i(),c("div",le,[k(s("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=o=>t.person=o)},null,512),[[$,t.person]]),s("p",null,l(t.person),1),s("label",null,[ue,k(s("input",{type:"checkbox","onUpdate:modelValue":n[1]||(n[1]=o=>t.light=o)},null,512),[[I,t.light]])]),s("p",null,l(t.light),1),s("div",null,[(i(!0),c(d,null,b(t.bricks,o=>(i(),c("div",null,l(o),1))),256))]),s("div",null,[k(s("input",{type:"number",min:"1",max:"5","onUpdate:modelValue":n[2]||(n[2]=o=>t.countBricks=o)},null,512),[[$,t.countBricks]]),s("button",{onClick:n[3]||(n[3]=(...o)=>r.addBrick&&r.addBrick(...o))},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C "+l(t.countBricks)+" \u043A\u0438\u0440\u043F\u0438\u0447",1),s("button",{onClick:n[4]||(n[4]=(...o)=>r.reset&&r.reset(...o))},"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C")])])}var de=h(ce,[["render",_e],["__scopeId","data-v-56c138f1"]]);const he={components:{},data(){return{todos:[],note:"",datum_start:new Date().toLocaleDateString(),datum_end:"",index:null,objNote:null}},created(){this.load()},mounted(){},computed:{},watch:{},methods:{add(){console.log(this.index),this.index||this.index===0?(this.objNote.text=this.note,this.todos[this.index]=this.objNote,this.index=null):(this.datum_end===""&&(this.datum_end=this.datum_start),this.objNote={text:this.note,datum_start:this.datum_start,datum_end:this.formatDate(this.datum_end),checked:!1,prior:!1},this.todos.push(this.objNote),this.datum_end=""),this.note="",this.save()},save(){localStorage.setItem("todos",JSON.stringify(this.todos))},load(){var e=localStorage.getItem("todos");e&&(this.todos=JSON.parse(e))},removeNote(e){this.todos.splice(e,1),this.save()},formatDate(e){return e.split("-").reverse().join(".")},changeStatus(e){this.todos[e].checked=!this.todos[e].checked,this.save()},changePrior(e){this.todos[e].prior=!this.todos[e].prior,this.save()},edit(e){this.note=this.todos[e].text,this.index=e,this.objNote=this.todos[e]}}},y=e=>(v("data-v-08ba975d"),e=e(),m(),e),pe=y(()=>s("p",{class:"erklarung"},"\u0418 \u0442\u0430\u043A\u0438 \u043D\u0430\u043F\u0438\u0448\u0438 \u0441\u044E\u0434\u0430 \u0441\u0432\u043E\u0438 \u0432\u0430\u0436\u043D\u044B\u0435 \u0434\u0435\u043B\u0430!",-1)),ve={class:"rect_900_auto bg_blue_grauHell"},me={class:"todo_list"},be=y(()=>s("div",{class:"einstellungen"},null,-1)),ge={class:"create_new_todo"},fe={id:"list-rendering"},ke={class:"date"},$e={class:"start-date"},xe={class:"end-date"},ye={class:"abstand"},Ce=y(()=>s("input",{class:"checkbox",type:"checkbox",id:"item_0"},null,-1)),we=["onClick"],Be=["onClick"],Ie={class:"labelBTN"},Ue=["onClick"],Ne=["onClick"],Se=["onClick"];function Le(e,n,a,u,t,r){return i(),c(d,null,[pe,s("div",ve,[s("div",me,[k(s("input",{class:"datum",type:"date","onUpdate:modelValue":n[0]||(n[0]=o=>t.datum_end=o)},null,512),[[$,t.datum_end]]),be,s("div",ge,[k(s("input",{type:"text",class:"message","onUpdate:modelValue":n[1]||(n[1]=o=>t.note=o),placeholder:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"},null,512),[[$,t.note]]),s("button",{class:"add",onClick:n[2]||(n[2]=(...o)=>r.add&&r.add(...o))},"+")]),s("ol",fe,[(i(!0),c(d,null,b(t.todos,(o,_)=>(i(),c("li",null,[s("div",ke,[s("div",$e,l(o.datum_start),1),s("div",xe,l(o.datum_end),1)]),s("div",ye,[Ce,o.checked?(i(),c("i",{key:0,class:"fa fa-check-square-o","aria-hidden":"true",onClick:p=>r.changeStatus(_)},null,8,we)):(i(),c("i",{key:1,class:"fa fa-square-o","aria-hidden":"true",onClick:p=>r.changeStatus(_)},null,8,Be))]),s("label",{for:"item_0",class:g({prior:o.prior})},l(o.text),3),s("span",Ie,[s("i",{class:"fa fa-bell-o",onClick:p=>r.changePrior(_),"aria-hidden":"true"},null,8,Ue),s("i",{class:"fa fa-sun-o",onClick:p=>r.edit(_),"aria-hidden":"true"},null,8,Ne),s("i",{class:"fa fa-trash-o",onClick:p=>r.removeNote(_),"aria-hidden":"true"},null,8,Se)])]))),256))])])])],64)}var je=h(he,[["render",Le],["__scopeId","data-v-08ba975d"]]),C=null;const Me={props:[],components:{},data(){return{numer:5,interval:!1}},created(){},mounted(){this.timer()},computed:{},watch:{},methods:{timer(){C=setInterval(this.plus,500)},plus(){this.numer++},stop(){clearInterval(C),C=null}}},qe=s("p",{class:"erklarung"},null,-1),Ae={class:"rect_900_auto bg_MediumAquaMarine"};function Ve(e,n,a,u,t,r){return i(),c(d,null,[qe,s("div",Ae,[w(" Text test "+l(t.numer)+" ",1),s("button",{onClick:n[0]||(n[0]=(...o)=>r.stop&&r.stop(...o))},"stop")])],64)}var He=h(Me,[["render",Ve]]),Te="./assets/Backstein_1.e242f54c.jpg",Re="./assets/Backstein_2.689571c1.jpg",De="./assets/Backstein_3.bdc9a8c1.jpg",Ge="./assets/Backstein_4.cae9a861.jpg",Oe="./assets/Backstein_5.323f6859.jpg";const Ee={props:[],components:{},data(){return{row:[1,1,1,1,1,1,1,1]}},created(){},mounted(){},computed:{},watch:{},methods:{num(){return rando(1,5)},src(){return new URL({"../../bilder/u6/Backstein_1.jpg":Te,"../../bilder/u6/Backstein_2.jpg":Re,"../../bilder/u6/Backstein_3.jpg":De,"../../bilder/u6/Backstein_4.jpg":Ge,"../../bilder/u6/Backstein_5.jpg":Oe}[`../../bilder/u6/Backstein_${this.num()}.jpg`],self.location).pathname}}},ze=["src"];function Pe(e,n,a,u,t,r){return i(!0),c(d,null,b(t.row,o=>(i(),c("img",{class:"zigel",src:r.src(),alt:"Backstein"},null,8,ze))),256)}var Ze=h(Ee,[["render",Pe],["__scopeId","data-v-79df58c4"]]);const Fe={props:[],components:{Zigel:Ze},data(){return{zCount:10,rCount:1}},created(){},mounted(){},computed:{},watch:{},methods:{zigel(){},rows(){return this.rCount}}},Je=e=>(v("data-v-4a107c4e"),e=e(),m(),e),Ke=Je(()=>s("p",{class:"erklarung"},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u044F\u0434\u043E\u0432 \u043A\u0438\u0440\u043F\u0438\u0447\u0435\u0439 \u0432 \u0441\u0442\u0435\u043D\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0432 \u0446\u0438\u0444\u0440\u0443 \u043D\u0438\u0436\u0435.",-1)),We={class:"rect_900_auto"},Ye={class:"verwaltung"},Qe={class:"wand"},Xe={class:"row"};function et(e,n,a,u,t,r){const o=x("Zigel");return i(),c(d,null,[Ke,s("div",We,[s("div",Ye,[k(s("input",{type:"number",min:"1",max:"20","onUpdate:modelValue":n[0]||(n[0]=_=>t.rCount=_)},null,512),[[$,t.rCount]])]),s("div",Qe,[(i(!0),c(d,null,b(r.rows(),_=>(i(),c("div",Xe,[f(o)]))),256))])])],64)}var tt=h(Fe,[["render",et],["__scopeId","data-v-4a107c4e"]]);const st={props:[],components:{},data(){return{antwort:"",isRed:!1,isGreen:!1,i:0,text:[{wort:"\u043A\u0438\u0440\u043F..\u0447",buchstabe_1:"\u0438",buchstabe_2:"\u043E",buchstabe_R:"\u0438"},{wort:"\u0440\u043E\u0434..\u043D\u0430",buchstabe_1:"\u0438",buchstabe_2:"\u0435",buchstabe_R:"\u0438"}]}},created(){},mounted(){},computed:{},watch:{},methods:{control(e){e===this.text[this.i].buchstabe_R?(this.antwort="\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442!",this.isRed=!1,this.isGreen=!0):(this.antwort="\u043E\u0442\u0432\u0435\u0442 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439!",this.isRed=!0,this.isGreen=!1),setTimeout(()=>{this.next(),this.antwort=""},1e3)},next(){this.i++,this.text.length===this.i&&(this.i=0,alert("\u0418\u0433\u0440\u0430 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430"))}}},nt=e=>(v("data-v-c7e965c4"),e=e(),m(),e),ot=nt(()=>s("p",{class:"erklarung"},"\u041A\u0430\u043A\u0443\u044E \u0431\u0443\u043A\u0432\u0443 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C?",-1)),rt={class:"rect_900_auto bg_MediumAquaMarine"},it={class:"container"},ct={class:"wort"},at={class:"buchstaben"};function lt(e,n,a,u,t,r){return i(),c(d,null,[ot,s("div",rt,[s("div",it,[s("p",ct,l(t.text[t.i].wort),1),s("div",at,[s("button",{class:"buchstabe",onClick:n[0]||(n[0]=o=>r.control(t.text[t.i].buchstabe_1))},l(t.text[t.i].buchstabe_1),1),s("button",{class:"buchstabe",onClick:n[1]||(n[1]=o=>r.control(t.text[t.i].buchstabe_2))},l(t.text[t.i].buchstabe_2),1)]),s("div",{class:g(["commentar",{red:t.isRed,green:t.isGreen}])},l(t.antwort),3)])])],64)}var ut=h(st,[["render",lt],["__scopeId","data-v-c7e965c4"]]);const _t={props:[],components:{},data(){return{buchstaben:["b","d","p","q"],i:0,n:44,sack:[]}},created(){},mounted(){this.sackInhalt()},computed:{},watch:{},methods:{sackInhalt(){for(var e=0;e<this.n;e++)this.sack[e]={b:this.buchstaben[rando(0,3)],cl:!1}},b_current(){return this.buchstaben[this.i]},control(e,n){this.b_current()===e.b&&(this.sack[n].cl=!0,this.ebene())},ebene(){var e=this.sack.filter(a=>{if(a.b===this.b_current())return!0}).length,n=this.sack.filter(a=>{if(a.b===this.b_current()&&a.cl===!0)return!0}).length;e===n&&(alert("\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0439\u0434\u0435\u043D"),this.i++,this.checkEndGame(),this.sackInhalt())},checkEndGame(){this.sack.length-1===this.i&&(this.i=0,alert("\u0438\u0433\u0440\u0430 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430"))}}},dt=e=>(v("data-v-5b218d1c"),e=e(),m(),e),ht=dt(()=>s("p",{class:"erklarung"},"\u041D\u0430\u0439\u0434\u0438 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0441 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0431\u0443\u043A\u0432\u044B.",-1)),pt={class:"rect_900_auto bg_MediumAquaMarine"},vt={class:"container"},mt={class:"linie_1"},bt={class:"linie_2"},gt=["onClick"];function ft(e,n,a,u,t,r){return i(),c(d,null,[ht,s("div",pt,[s("div",vt,[s("div",mt,[s("p",null,l(t.buchstaben[t.i]),1)]),s("div",bt,[(i(!0),c(d,null,b(t.sack,(o,_)=>(i(),c("p",{onClick:p=>r.control(o,_),class:g({clicked:o.cl})},l(o.b),11,gt))),256))])])])],64)}var kt=h(_t,[["render",ft],["__scopeId","data-v-5b218d1c"]]);const $t={components:{Hut:H,H1:D,Navi:Z,U1:Q,U2:ie,U3:de,U4:je,U5:He,U6:tt,U7:ut,U8:kt},data(){return{content:"Navi",unterrichtName:"\u041E\u0433\u043B\u0430\u0432\u043B\u0435\u043D\u0438\u0435"}}},xt={class:"wrapperOben"},yt={class:"wrapper"};function Ct(e,n,a,u,t,r){const o=x("Hut"),_=x("H1");return i(),c(d,null,[s("div",xt,[f(o)]),s("div",yt,[f(_),(i(),U(N(t.content),{class:"content"}))])],64)}var wt=h($t,[["render",Ct]]);S(wt).mount("#app");
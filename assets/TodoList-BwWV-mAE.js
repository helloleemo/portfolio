import{_ as m,r as p,c as l,d as i,w as y,o as d,a as e,i as _,v as h,j as f,F as x,f as k,n as C,t as v,k as g}from"./index-Cp2MKcqQ.js";const w={data(){return{temp:[],content:{text:"",isCompleted:!1,isEditing:!1,priorityIndex:0,id:""},priorityColors:["gray","rgb(184, 51, 51)","#3dbeff","#fddb00"],greeting:!1}},methods:{addBtn(){this.content.text!==""&&this.temp.push({...this.content,isCompleted:!1,isEditing:!1,priorityIndex:0,id:Date.now()}),this.content.text=""},finishedList(o){o.isCompleted=!o.isCompleted},deleteList(o){this.temp.splice(o,1)},setPriority(o){o.priorityIndex=(o.priorityIndex+1)%this.priorityColors.length},showGreeting(){}},computed:{reversedTemp(){return[...this.temp].reverse()}}},B={class:"wrapper"},L={class:"frame border rounded p-4 pb-5"},I=e("h2",{class:"fw-bold text-center",style:{"font-family":"'Pattaya'"}},"To Do List",-1),T={class:"input-group mb-3"},D={class:"list-group-item mt-1"},E={class:"d-flex text-center"},P=["onClick"],V=["onClick"],z={class:"edit ms-auto"},F=["onClick"];function K(o,n,N,S,a,s){const r=p("v-icon"),u=p("v-container");return d(),l("div",B,[i(u,null,{default:y(()=>[e("div",L,[I,e("div",T,[_(e("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>a.content.text=t),type:"text",class:"form-control",placeholder:"write something","aria-label":"Recipient's username","aria-describedby":"button-addon2",style:{border:"2px solid black"},onKeyup:n[1]||(n[1]=f((...t)=>s.addBtn&&s.addBtn(...t),["enter"]))},null,544),[[h,a.content.text]]),e("button",{onClick:n[2]||(n[2]=(...t)=>s.addBtn&&s.addBtn(...t)),class:"btn btn-dark",type:"button",id:"button-addon2",style:{border:"2px solid black","border-left":"none"}},[i(r,{icon:"mdi-plus"})])]),(d(!0),l(x,null,k(s.reversedTemp,(t,b)=>(d(),l("ul",{key:t.id,class:"list-group list-group-flush"},[e("li",D,[e("div",E,[t.isCompleted?(d(),l("button",{key:0,onClick:c=>s.finishedList(t),class:"btn p-0 pe-2"},[i(r,{icon:"mdi-checkbox-marked"})],8,P)):(d(),l("button",{key:1,onClick:c=>s.finishedList(t),class:"btn p-0 pe-2"},[i(r,{icon:"mdi-checkbox-blank-outline"})],8,V)),e("span",{class:C({done:t.isCompleted})},v(t.text),3),e("div",z,[i(r,{icon:"mdi-circle",onClick:c=>s.setPriority(t),style:g({color:a.priorityColors[t.priorityIndex]}),class:"priority pe-2"},null,8,["onClick","style"]),e("button",{onClick:c=>s.deleteList(b),type:"button",class:"btn small text-end p-0","aria-label":"Close"},[i(r,{icon:"mdi-trash-can-outline"})],8,F)])])])]))),128))])]),_:1})])}const G=m(w,[["render",K]]);export{G as default};
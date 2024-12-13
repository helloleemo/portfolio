import{_ as v,r as u,c as f,d as c,w as d,o,a as t,t as b,b as a,g as l,e as p,i as g,v as T,n as C,p as S,h as y}from"./index-Ci0epWps.js";const V={data(){return{focusTime:25,breakTime:5,seconds:0,timerRunning:!1,isPaused:!1,settingsVisible:!1,interval:null,mode:"focus",toggleSettings:!1}},computed:{formattedTime(){const i=String(Math.floor(this.seconds/60)).padStart(2,"0"),n=String(this.seconds%60).padStart(2,"0");return`${i}:${n}`}},methods:{startTimer(){this.isPaused||(this.seconds=this.mode==="focus"?this.focusTime*60:this.breakTime*60),this.timerRunning=!0,this.isPaused=!1,this.interval=setInterval(()=>{this.seconds>0?this.seconds--:this.switchMode()},1e3)},pauseTimer(){this.timerRunning=!1,this.isPaused=!0,clearInterval(this.interval)},resumeTimer(){this.startTimer()},stopTimer(){this.timerRunning=!1,this.isPaused=!1,clearInterval(this.interval),this.seconds=this.focusTime*60},switchMode(){this.mode=this.mode==="focus"?"break":"focus",this.stopTimer(),this.startTimer()},toggleSettings(){this.settingsVisible=!this.settingsVisible}},mounted(){this.seconds=this.focusTime*60}},_=i=>(S("data-v-6089fa5c"),i=i(),y(),i),x={class:"bg-primary"},P={key:0},R=_(()=>t("label",null,"Focus Time (min): ",-1)),w=_(()=>t("label",null,"Break Time (min): ",-1));function I(i,n,B,M,e,s){const r=u("v-icon"),h=u("v-btn"),k=u("v-container");return o(),f("div",x,[c(k,{class:"d-flex justify-center flex-column text-center"},{default:d(()=>[t("h1",null,b(s.formattedTime),1),!e.timerRunning&&!e.isPaused?(o(),a(r,{key:0,icon:"mdi-play",onClick:s.startTimer},null,8,["onClick"])):l("",!0),e.timerRunning?(o(),a(r,{key:1,icon:"mdi-pause",onClick:s.pauseTimer,class:"pause"},null,8,["onClick"])):l("",!0),!e.timerRunning&&e.isPaused?(o(),a(r,{key:2,icon:"mdi-play",onClick:s.resumeTimer,class:"start"},null,8,["onClick"])):l("",!0),e.timerRunning||e.isPaused?(o(),a(h,{key:3,onClick:s.stopTimer,class:"stop"},{default:d(()=>[c(r,{icon:"mdi-stop"}),p("Stop")]),_:1},8,["onClick"])):l("",!0),c(h,{onClick:s.toggleSettings},{default:d(()=>[c(r,{icon:"mdi-set"}),p("Settings")]),_:1},8,["onClick"]),t("div",{class:C(["settings-container",{show:e.settingsVisible}])},[s.toggleSettings?(o(),f("div",P,[R,g(t("input",{type:"number","onUpdate:modelValue":n[0]||(n[0]=m=>e.focusTime=m),min:"1"},null,512),[[T,e.focusTime]])])):l("",!0),t("div",null,[w,g(t("input",{type:"number","onUpdate:modelValue":n[1]||(n[1]=m=>e.breakTime=m),min:"1"},null,512),[[T,e.breakTime]])])],2)]),_:1})])}const D=v(V,[["render",I],["__scopeId","data-v-6089fa5c"]]);export{D as default};

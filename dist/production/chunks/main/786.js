"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[786],{786:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(74);class o extends l.Z{static getConfig(){return{className:"Neo.main.addon.CloneNode",map:{},remote:{app:["applyClones","createNode"]},singleton:!0}}applyClones(e){let t,a,l,o,n,p,s=0,r=this.map[e.id],m=e.data.length,d=document.getElementById(e.parentId);requestAnimationFrame((()=>{let c=performance.now();for(;s<m;s++)t=r.template.cloneNode(!0),a=e.data[s],Object.entries(a).forEach((([e,a])=>{if(o=r.paths[e],o){for(o=o.split("/").map((e=>Number(e))),l=0,n=o.length,p=t;l<n;l++)p=p.childNodes[o[l]];p.textContent=a}})),d.append(t);let i=performance.now();console.log("time",i-c)}))}createNode(e){let t=document.createElement(e.tag);t.innerHTML=e.html,this.map[e.id]={paths:e.paths,template:t}}}Neo.applyClassConfig(o);let n=Neo.create(o);Neo.applyToGlobalNs(n);const p=n}}]);
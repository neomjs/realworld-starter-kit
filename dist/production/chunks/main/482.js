"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[482],{482:(e,r,s)=>{s.r(r),s.d(r,{default:()=>i});var o=s(74),a=s(194);class n extends o.Z{static config={className:"Neo.main.addon.ServiceWorker",singleton:!0};construct(e){if("serviceWorker"in navigator){let e=this,r=Neo.config,s="development"===r.environment,o=s?"ServiceWorker.mjs":"serviceworker.js",n=window.location.pathname.includes("/examples/")?"examples/":"apps/",i=s?{type:"module"}:{},t=(s?r.basePath:r.workerBasePath)+(s?n:"")+o,c=navigator.serviceWorker;window.addEventListener("beforeunload",e.onBeforeUnload.bind(e)),c.register(t,i).then((e=>{c.ready.then((()=>{c.onmessage=a.Z.onWorkerMessage.bind(a.Z),a.Z.getWorker("service")||(a.Z.serviceWorker=e.active),a.Z.sendMessage("service",{action:"registerNeoConfig",data:r})}))}))}}onBeforeUnload(){a.Z.sendMessage("service",{action:"unregisterPort"})}}const i=Neo.applyClassConfig(n)}}]);
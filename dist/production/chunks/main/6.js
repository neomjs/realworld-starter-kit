"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[6],{6:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o(74),l=o(227),r=o(245);class a extends n.Z{static getConfig(){return{className:"Neo.main.addon.DragDrop",alwaysFireDragMove:!1,bodyCursorStyle:null,boundaryContainerRect:null,clientX:0,clientY:0,dragElementRootId:null,dragProxyCls:"neo-dragproxy",dragProxyElement:null,dragProxyRect:null,dragZoneId:null,dropZoneIdentifier:null,initialScrollLeft:0,initialScrollTop:0,moveHorizontal:!0,moveVertical:!0,offsetX:0,offsetY:0,remote:{app:["setConfigs","setDragProxyElement"]},scrollContainerElement:null,scrollContainerRect:null,scrollFactorLeft:1,scrollFactorTop:1,singleton:!0}}construct(e){super.construct(e);let t=this,n=[];r.Z.on({mouseEnter:t.onMouseEnter,mouseLeave:t.onMouseLeave,scope:t}),t.addGlobalEventListeners(),Neo.config.hasTouchEvents?n.push(o.e(59).then(o.bind(o,59))):n.push(o.e(531).then(o.bind(o,531))),Promise.all(n).then((e=>{Neo.create({module:e[0].default})}))}addGlobalEventListeners(){let e=this;document.addEventListener("drag:end",e.onDragEnd.bind(e),!0),document.addEventListener("drag:move",e.onDragMove.bind(e),!0),document.addEventListener("drag:start",e.onDragStart.bind(e),!0)}getEventData(e){const t=e.path||e.composedPath(),o={...r.Z.getEventData(e.detail.originalEvent),clientX:e.detail.clientX,clientY:e.detail.clientY};return e.detail.eventPath?o.targetPath=e.detail.eventPath.map((e=>r.Z.getTargetData(e))):o.targetPath=o.path,o.path=t.map((e=>r.Z.getTargetData(e))),o}onDragEnd(e){let t=this,o=t.getEventData(e),n=t.pathIncludesDropZone(o.targetPath);l.Z.setBodyCls({remove:["neo-unselectable"]}),t.bodyCursorStyle&&l.Z.setStyle({id:"document.body",style:{cursor:null}}),r.Z.sendMessageToApp({...o,isDrop:n,offsetX:t.offsetX,offsetY:t.offsetY,type:"drag:end"}),n&&r.Z.sendMessageToApp({...r.Z.getMouseEventData(e.detail.originalEvent),dragZoneId:t.dragZoneId,type:"drop"}),Object.assign(t,{alwaysFireDragMove:!1,bodyCursorStyle:null,boundaryContainerRect:null,dragElementRootId:null,dragElementRootRect:null,dragProxyCls:"neo-dragproxy",dragProxyElement:null,dragZoneId:null,dropZoneIdentifier:null,initialScrollLeft:0,initialScrollTop:0,moveHorizontal:!0,moveVertical:!0,scrollContainerElement:null,scrollContainerRect:null,setScrollFactorLeft:1,scrollFactorTop:1})}onDragMove(e){let t,o,n,l=this,a=l.dragProxyRect,i=l.boundaryContainerRect;l.scrollContainerElement&&(t=l.scrollContainer({clientX:e.detail.clientX,clientY:e.detail.clientY}),e.detail.clientX=t.clientX,e.detail.clientY=t.clientY),l.dragProxyElement&&(o=e.detail.clientX-l.offsetX,n=e.detail.clientY-l.offsetY,i&&(o<i.left?o=i.left:o>i.right-a.width&&(o=i.right-a.width),n<i.top?n=i.top:n>i.bottom-a.height&&(n=i.bottom-a.height)),l.moveHorizontal||(o=l.dragProxyRect.x),l.dragProxyElement.style.left=`${o}px`,l.moveVertical||(n=l.dragProxyRect.y),l.dragProxyElement.style.top=`${n}px`),l.dragProxyElement&&!l.alwaysFireDragMove||r.Z.sendMessageToApp({...l.getEventData(e),offsetX:l.offsetX,offsetY:l.offsetY,type:"drag:move"})}onDragStart(e){let t=e.target.getBoundingClientRect();l.Z.setBodyCls({add:["neo-unselectable"]}),Object.assign(this,{dragProxyRect:t,offsetX:e.detail.clientX-t.left,offsetY:e.detail.clientY-t.top}),r.Z.sendMessageToApp({...this.getEventData(e),type:"drag:start"})}onMouseEnter(e){this.pathIncludesDropZone(e.path)&&r.Z.sendMessageToApp({...e,dragZoneId:this.dragZoneId,type:"drop:enter"})}onMouseLeave(e){this.pathIncludesDropZone(e.path)&&r.Z.sendMessageToApp({...e,dragZoneId:this.dragZoneId,type:"drop:leave"})}pathIncludesDropZone(e){let t,o,n=!0,l=this.dropZoneIdentifier;if(l){t=l.cls,o=l.ids;for(const l of e){if(t){n=!1;for(const e of l.cls)if(t.includes(e)){n=!0;break}}if(n&&o&&!o.includes(l.id)&&(n=!1),n)return!0}}return!1}scrollContainer(e){let t=this,o=e.clientX-t.clientX,n=e.clientY-t.clientY,l=t.scrollContainerElement,r=250,a=t.scrollContainerRect;return t.clientX=e.clientX,t.clientY=e.clientY,(o<0&&e.clientX<a.left+r||o>0&&e.clientX>a.right-r)&&(l.scrollLeft+=o*t.scrollFactorLeft),(n<0&&e.clientY<a.top+r||n>0&&e.clientY>a.bottom-r)&&(l.scrollTop+=n*t.scrollFactorTop),{clientX:t.clientX+l.scrollLeft-t.initialScrollLeft,clientY:t.clientY+l.scrollTop-t.initialScrollTop}}setConfigs(e){let t,o=this;delete e.appName,e.boundaryContainerId&&(t=l.Z.getElementOrBody(e.boundaryContainerId),o.boundaryContainerRect=t.getBoundingClientRect()),delete e.boundaryContainerId,e.scrollContainerId&&(t=l.Z.getElementOrBody(e.scrollContainerId),Object.assign(o,{scrollContainerElement:t,scrollContainerRect:t.getBoundingClientRect(),initialScrollLeft:t.scrollLeft,initialScrollTop:t.scrollTop})),delete e.scrollContainerId,Object.entries(e).forEach((([e,t])=>{o.hasOwnProperty(e)?o[e]=t:console.error("unknown key passed inside setConfigs()",e)})),o.bodyCursorStyle&&l.Z.setStyle({id:"document.body",style:{cursor:o.bodyCursorStyle}})}setDragProxyElement(e){this.dragProxyElement=document.getElementById(e.id)}}Neo.applyClassConfig(a);let i=Neo.create(a);Neo.applyToGlobalNs(i);const s=i}}]);
"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[531],{251:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(74);class a extends o.Z{static config={className:"Neo.main.draggable.sensor.Base",currentElement:null,dragTargetClasses:["neo-draggable","neo-resizable"],isDragging:!1,lastEvent:null,startEvent:null};attach(){}detach(){}onConstructed(){this.attach(),super.onConstructed()}trigger(e,t){const n=document.createEvent("Event");return n.detail=t,n.initEvent(t.type,!0,!0),e.dispatchEvent(n),this.lastEvent=t,t}}Neo.applyClassConfig(a);const s=a},531:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var o=n(251),a=n(245);class s extends o.Z{static config={className:"Neo.main.draggable.sensor.Mouse",delay:100,minDistance:5,mouseDownTime:0,mouseDownTimeout:null,pageX:null,pageY:null};construct(e){super.construct(e),Neo.bindMethods(this,["onDistanceChange","onMouseDown","onMouseMove","onMouseUp"])}attach(){document.addEventListener("mousedown",this.onMouseDown,!0)}detach(){document.removeEventListener("mousedown",this.onMouseDown,!0)}onDistanceChange(e){let t=this;if(t.currentElement){const{pageX:n,pageY:o}=e,s=Date.now()-t.mouseDownTime,r=a.Z.getDistance(t.startEvent.pageX,t.startEvent.pageY,n,o)||0;Object.assign(t,{pageX:n,pageY:o}),s>=t.delay&&r>=t.minDistance&&(clearTimeout(t.mouseDownTimeout),document.removeEventListener("mousemove",t.onDistanceChange),t.startDrag())}}onMouseDown(e){if(0===e.button&&!e.ctrlKey&&!e.metaKey){let t=this,n=a.Z.testPathInclusion(e,t.dragTargetClasses);e.path||(e.path=e.composedPath()),n&&(Object.assign(t,{currentElement:n.node,mouseDownTime:Date.now(),pageX:e.pageX,pageY:e.pageY,startEvent:e}),document.addEventListener("dragstart",r),document.addEventListener("mousemove",t.onDistanceChange),document.addEventListener("mouseup",t.onMouseUp),t.mouseDownTimeout=setTimeout((()=>{t.onDistanceChange({pageX:t.pageX,pageY:t.pageY})}),t.delay))}}onMouseMove(e){let t=this;if(t.dragging){let n=t.currentElement,o=document.elementFromPoint(e.clientX,e.clientY);t.trigger(n,{clientX:e.clientX,clientY:e.clientY,element:n,originalEvent:e,path:t.startEvent.path||t.startEvent.composedPath(),target:o,type:"drag:move"})}}onMouseUp(e){if(0===e.button){let t=this;if(clearTimeout(t.mouseDownTimeout),document.removeEventListener("dragstart",r),document.removeEventListener("mousemove",t.onDistanceChange),document.removeEventListener("mouseup",t.onMouseUp),t.dragging){let n=t.currentElement,o=document.elementFromPoint(e.clientX,e.clientY);t.trigger(n,{clientX:e.clientX,clientY:e.clientY,element:n,originalEvent:e,path:t.startEvent.path||t.startEvent.composedPath(),target:o,type:"drag:end"}),document.removeEventListener("contextmenu",r,!0),document.removeEventListener("mousemove",t.onMouseMove),Object.assign(t,{currentElement:null,dragging:!1,startEvent:null})}t.dragging=!1}}startDrag(){let e=this,t=e.currentElement,n=e.startEvent;e.trigger(t,{clientX:n.clientX,clientY:n.clientY,element:t,originalEvent:n,path:n.path||n.composedPath(),target:n.target,type:"drag:start"}),e.dragging=!0,e.dragging&&(document.addEventListener("contextmenu",r,!0),document.addEventListener("mousemove",e.onMouseMove))}}function r(e){e.preventDefault()}Neo.applyClassConfig(s);const i=s}}]);
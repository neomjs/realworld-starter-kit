"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[684,860],{5986:(e,t,r)=>{r.d(t,{Z:()=>s});var o=r(5074),a=r(4683);class n extends a.Z{static getConfig(){return{className:"Neo.draggable.DragProxyComponent",ntype:"dragproxy",autoMount:!0,autoRender:!0,cls:["neo-dragproxy"],moveInMainThread:!0}}constructor(e){super(e);let t=this;t.on("mounted",t.onMounted,t)}onMounted(e){this.moveInMainThread&&Neo.main.addon.DragDrop.setDragProxyElement({appName:this.appName,id:e})}}Neo.applyClassConfig(n);var l=r(565),d=(r(6622),r(5892));class s extends o.Z{static getStaticConfig(){return{observable:!0}}static getConfig(){return{className:"Neo.draggable.DragZone",ntype:"dragzone",addDragProxyCls:!0,alwaysFireDragMove:!1,appName_:null,bodyCursorStyle:null,boundaryContainerId:null,data:null,dragElement:null,dragElementRect:null,dragProxy:null,dragProxyConfig_:null,dragProxyCls:"neo-dragproxy",dropZoneIdentifier:null,moveHorizontal:!0,moveInMainThread:!0,moveVertical:!0,offsetX:0,offsetY:0,owner:null,proxyParentId_:"document.body",scrollContainerId:null,scrollFactorLeft:1,scrollFactorTop:1,useProxyWrapper:!0}}constructor(e){super(e),Neo.main.addon.DragDrop||console.error("You can not use Neo.draggable.DragZone without adding Neo.main.addon.DragDrop to the main thread addons",this.id)}afterSetAppName(e,t){e&&Neo.currentWorker.insertThemeFiles(e,this.__proto__)}beforeGetDragProxyConfig(e){return Neo.clone(e,!0,!0)}createDragProxy(e){let t=this,r=Neo.getComponent(t.getDragElementRoot().id)||t.owner,o=t.dragElementRect,a=t.dragProxyConfig?.vdom,s=d.Z.clone(a||t.dragElement);const i={module:n,appName:t.appName,moveInMainThread:t.moveInMainThread,parentId:t.proxyParentId,...t.dragProxyConfig,vdom:t.useProxyWrapper?{cn:[s]}:s};i.cls=i.cls||[],r&&i.cls.push(r.getTheme()),s.cls&&!t.useProxyWrapper&&i.cls.push(...s.cls),t.addDragProxyCls&&i.cls&&l.Z.add(i.cls,t.dragProxyCls),i.style=i.style||{},Object.assign(i.style,{height:`${e.height}px`,left:`${t.moveHorizontal?e.x:o.x}px`,top:`${t.moveVertical?e.y:o.y}px`,width:`${e.width}px`}),t.dragProxy=Neo.create(i)}destroyDragProxy(){let e=this,t=e.dragProxy.id;setTimeout((()=>{Neo.currentWorker.promiseMessage("main",{action:"updateDom",appName:e.appName,deltas:[{action:"removeNode",id:t}]})}),e.moveInMainThread?0:30),e.dragProxy.destroy()}dragEnd(e){let t=this,r=t.owner,o=r.cls;l.Z.remove(o,"neo-is-dragging"),r.cls=o,t.dragProxy&&(t.destroyDragProxy(),t.dragProxy=null),Object.assign(t,{dragElementRect:null,offsetX:0,offsetY:0,scrollContainerId:null}),t.fire("dragEnd",e),t.resetData()}dragMove(e){let t,r=this;!r.moveInMainThread&&r.dragProxy&&(t=r.dragProxy.style,r.moveHorizontal&&(t.left=e.clientX-r.offsetX+"px"),r.moveVertical&&(t.top=e.clientY-r.offsetY+"px"),r.dragProxy.style=t),r.fire("dragMove",e)}dragStart(e){let t,r,o=this,a=o.owner,n=a.cls,d=o.getDragElementRect(e);o.setData(),Neo.main.addon.DragDrop.setConfigs({appName:o.appName,...o.getMainThreadConfigs()}),l.Z.add(n,"neo-is-dragging"),a.cls=n,t=e.clientX-d.left,r=e.clientY-d.top,Object.assign(o,{dragElementRect:d,offsetX:t,offsetY:r}),o.createDragProxy(d),o.fire("dragStart",{clientX:e.clientX,clientY:e.clientY,dragElementRect:d,eventData:e,id:o.id,offsetX:t,offsetY:r})}getDragElementRect(e){let t=this.getDragElementRoot().id;for(let r of e.path)if(r.id===t)return r.rect;for(let r of e.targetPath)if(r.id===t)return r.rect;return null}getDragElementRoot(){return this.dragElement}getMainThreadConfigs(){let e=this;return{alwaysFireDragMove:e.alwaysFireDragMove,bodyCursorStyle:e.bodyCursorStyle,boundaryContainerId:e.boundaryContainerId,dragElementRootId:e.getDragElementRoot().id,dragProxyCls:e.dragProxyCls,dragZoneId:e.id,dropZoneIdentifier:e.dropZoneIdentifier,moveHorizontal:e.moveHorizontal,moveVertical:e.moveVertical,scrollContainerId:e.scrollContainerId,scrollFactorLeft:e.scrollFactorLeft,scrollFactorTop:e.scrollFactorTop}}onDrop(e){this.fire("drop",e)}onDropEnter(e){this.fire("drop:enter",e)}onDropLeave(e){this.fire("drop:leave",e)}resetData(){setTimeout((()=>{this.data=null}),30)}setData(e={}){let t=this;t.data={dragElement:t.getDragElementRoot(),dragZoneId:t.id,...e}}}Neo.applyClassConfig(s)},2860:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(5986),a=r(565),n=r(5892);class l extends o.Z{static getConfig(){return{className:"Neo.draggable.list.DragZone",ntype:"list-dragzone",dragProxyConfig:{cls:["neo-list"]}}}constructor(e){super(e);let t=this,r=t.owner,o=r.domListeners,a={delegate:".neo-draggable",scope:t},n=r.store;o.push({"drag:end":t.onDragEnd,...a},{"drag:start":t.onDragStart,...a}),r.domListeners=o,n.on({load:t.onStoreLoad,scope:t}),n.getCount()>0&&t.onStoreLoad()}adjustListItemCls(e){let t,r=this,o=r.owner,n=o.store,l=o.vdom;n.items.forEach(((o,n)=>{t=r.getItemVdom(o,n),t&&(t.cls=t.cls||[],a.Z[e?"add":"remove"](t.cls,"neo-draggable"))})),o.vdom=l}getItemVdom(e,t){return this.owner.vdom.cn[t]}onDragEnd(e){if(this.owner.draggable){let e=this,t=e.dragProxy,r=t.cls||{},o=e.dragElementRect,n=t.wrapperStyle||{};a.Z.add(r,"neo-animate"),t.cls=r,setTimeout((()=>{n.left=`${o.left}px`,n.top=`${o.top}px`,t.wrapperStyle=n,setTimeout((()=>{e.dragEnd()}),300)}),30)}}onDragStart(e){let t=this;t.owner.draggable&&(t.dragElement=n.Z.findVdomChild(t.owner.vdom,e.path[0].id).vdom,t.dragStart(e))}onStoreLoad(){this.adjustListItemCls(!0)}setData(e={}){let t=this.owner,r=t.getItemRecordId(this.getDragElementRoot().id);e.record=t.store.get(r),super.setData(e)}}Neo.applyClassConfig(l)},6684:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var o=r(2860),a=r(565),n=r(5892);class l extends o.default{static getConfig(){return{className:"Neo.draggable.tree.DragZone",ntype:"tree-dragzone",dragProxyConfig:{cls:["neo-tree-list"]},leafNodesOnly_:!1}}afterSetLeafNodesOnly(e,t){if(void 0!==t){let t,r=this.owner,o=r.store,n=r.vdom;o.items.forEach((o=>{o.isLeaf||(t=r.getVdomChild(r.getItemId(o.id),r.vdom),t.cls=t.cls||[],a.Z[e?"remove":"add"](t.cls,"neo-draggable"))})),r.vdom=n}}getDragElementRoot(){return this.dragElement.cn[0]}getItemVdom(e,t){let r=this.owner;return!this.leafNodesOnly||e.isLeaf?r.getVdomChild(r.getItemId(e.id),r.vdom):null}onDragStart(e){let t=this;t.owner.draggable&&(t.dragElement={tag:"ul",cls:["neo-list-container","neo-list"],cn:[n.Z.findVdomChild(t.owner.vdom,e.path[0].id).vdom]},t.dragStart(e))}}Neo.applyClassConfig(l)}}]);
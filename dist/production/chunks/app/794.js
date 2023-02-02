"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[794],{6794:(e,t,s)=>{s.r(t),s.d(t,{onStart:()=>se});var n=s(7683),a=s(9018);class o extends a.Z{static config={className:"Docs.app.model.Api",fields:[{name:"className",type:"String"},{name:"collapsed",type:"Boolean"},{name:"id",type:"Integer"},{name:"isLeaf",type:"Boolean"},{name:"name",type:"String"},{name:"parentId",type:"Integer"},{name:"path",type:"String"},{name:"singleton",type:"Boolean"},{name:"srcPath",type:"String"}]}}Neo.applyClassConfig(o);const i=o;var r=s(284);class l extends r.Z{static config={className:"Docs.app.store.Api",keyProperty:"id",model:i}}Neo.applyClassConfig(l);const c=l;class d extends n.Z{static config={className:"Docs.view.ApiTreeList",ntype:"api-treelist",store:c};onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/output/structure.json"}).then((t=>{e.store.data=t.json,e.createItems(null,e.getListItemsRoot(),0),e.update()}))}}Neo.applyClassConfig(d);const m=d;var p=s(3992),h=s(4683);class u extends h.Z{static config={className:"Docs.view.classdetails.SourceViewComponent",ntype:"classdetails-sourceviewcomponent",isHighlighted_:!1,line_:null,previousLine:null,structureData:null,style:{overflow:"auto"},_vdom:{cn:[{tag:"pre",cn:[{tag:"code",class:"javascript"}]}]}};construct(e){super.construct(e);let t=this,s="../../"+t.structureData.srcPath;Neo.Xhr.promiseRequest({url:s}).then((e=>{t.applySourceCode(e.response)}))}afterSetMounted(e,t){super.afterSetMounted(e,t),e&&setTimeout((()=>{this.syntaxHighlight()}),50)}afterSetIsHighlighted(e,t){if(e){let e=this;setTimeout((()=>{Neo.main.addon.HighlightJS.syntaxHighlightLine({addLine:e.line,removeLine:e.previousLine,vnodeId:e.vdom.cn[0].id})}),50)}}afterSetLine(e,t){let s=this;t&&(s.previousLine=t),s.isHighlighted&&s.afterSetIsHighlighted(!0,!1)}applySourceCode(e){let t=this;t.vdom.cn[0].cn[0].innerHTML=e,t.update(),t.mounted&&t.syntaxHighlight()}syntaxHighlight(){let e=this;Neo.main.addon.HighlightJS.syntaxHighlight({vnodeId:e.vdom.cn[0].id}).then((()=>{e.isHighlighted?e.afterSetIsHighlighted(!0,!1):e.isHighlighted=!0}))}}Neo.applyClassConfig(u);const f=u;class g extends h.Z{static config={className:"Docs.view.classdetails.HeaderComponent",ntype:"classdetails-headercomponent",cls:["neo-docs-classdetails-headercomponent"],record_:null,domListeners:{click:{fn:"onHeaderClick",delegate:".neo-docs-header-text"}},_vdom:{cn:[{tag:"span",cls:["neo-docs-header-text"]}]}};onConstructed(){super.onConstructed();let e=this,t=e.record.className,s=e.up("main-container").store.find({$kind:"Neo"===t?"module":"class",neoClassName:t})[0],n=0,a=s?.tags?.length||0,o=!1;for(;n<a;n++)if("singleton"===s.tags[n].title){o=!0;break}e.vdom.cn[0].innerHTML=o?t+" → Singleton":t,s.description&&e.vdom.cn.push({cls:["neo-docs-header-description"],innerHTML:s.description}),e.update()}}Neo.applyClassConfig(g);const y=g;var C=s(565);class x extends n.Z{static config={className:"Docs.view.classdetails.HierarchyTreeList",ntype:"classhierarchy-treelist",cls:["docs-classhierarchy-treelist","neo-list-container","neo-tree-list","neo-list"],showCollapseExpandAllIcons:!1,structureData:null};onConstructed(){super.onConstructed();let e=this;e.createStoreItems(),e.createItems(null,e.getListItemsRoot(),0)}createStoreItems(){let e,t,s=this,n=s.structureData.className,a=s.up("main-container").store,o=[],i=[];for(e=a.find({$kind:"Neo"===n?"module":"class",neoClassName:s.structureData.className})[0],i.unshift(e);e?.hasOwnProperty("augments");)e=a.find({$kind:"class",neoClassName:e.augments[0]})[0],i.unshift(e);i.forEach(((e,s)=>{e&&(t=i[s-1]?i[s-1].id:null,o.push({checked:!0,id:e.id,isLeaf:!0,name:e.neoClassName,parentId:t}))})),s.store.items=o}onLeafItemClick(e){let t=this,s=t.getItemId(e.id),n=t.getVdomChild(s);C.Z[e.checked?"add":"remove"](n.cls,"unchecked"),e.checked=!e.checked,t.update(),t.fire("refreshClassMembers")}}Neo.applyClassConfig(x);const b=x;var v=s(3779);class N extends v.Z{static config={className:"Docs.view.classdetails.MainContainerController"};onHeaderClick(e){let t=this.component.structureData,s=this.component.up("main-container").down("docs-content-tabcontainer"),n=(t.path?t.path+".":"")+t.name;s.add({module:f,id:n+"__source",structureData:t,tabButtonConfig:{iconCls:"fa fa-code",text:n}})}onMutateItems(e){let t=this,s=0,n=0,a=0,o=0,i=0,r=0;e.items.forEach((e=>{"function"===e.kind?a++:"member"===e.kind?s++:n++,"private"===e.access?o++:"protected"===e.access&&i++,"static"===e.scope&&r++})),t.getReference("showConfigs").text="Configs "+s,t.getReference("showMethods").text="Methods "+a,t.getReference("showEvents").text="Events "+n,t.getReference("showPrivateMembers").text="Private "+o,t.getReference("showProtectedMembers").text="Protected "+i,t.getReference("showStaticMembers").text="Static "+r}onScrollIntoView(e){let t=Neo.getComponent(e.target.id);Neo.main.addon.HighlightJS.scrollIntoView({text:t.reference.substr(4),vnodeId:this.component.vdom.id})}onSearchFieldChange(e){this.getReference("classdetails-memberslist").filterMembersQuery=e.value}onToggleMembers(e){let t=Neo.getComponent(e.target.id),s=this.getReference("classdetails-memberslist");t.iconCls=t.checked?"fa fa-square":"fa fa-check-square",t.checked=!t.checked,s[t.reference]=t.checked}}Neo.applyClassConfig(N);const w=N;var M=s(7749),k=s(5036);class S extends M.Z{static config={className:"Docs.view.classdetails.MembersList",ntype:"classdetails-memberslist",cls:["docs-classhierarchy-memberslist"],filterMembersQuery_:"",showPrivateMembers_:!0,showProtectedMembers_:!0,showStaticMembers_:!0,store:null,targetClassName:null,_vdom:{cn:[]}};onConstructed(){super.onConstructed();let e=this,t=e.up("classdetails-maincontainer").down("classhierarchy-treelist"),s=e.up("main-container").store;t.on({refreshClassMembers:e.onRefreshClassMembers,scope:e}),e.store=Neo.create(k.Z,{filterMode:"advanced",sourceId:s.id}),e.onRefreshClassMembers()}afterSetFilterMembersQuery(e,t){void 0!==t&&this.onRefreshClassMembers()}afterSetShowProtectedMembers(e,t){void 0!==t&&this.onRefreshClassMembers()}afterSetShowPrivateMembers(e,t){void 0!==t&&this.onRefreshClassMembers()}afterSetShowStaticMembers(e,t){void 0!==t&&this.onRefreshClassMembers()}applyConfigsHeader(e,t){return"member"===e.items[0]?.kind&&t.cn.push({},{cls:["neo-docs-memberlist-group-header"],innerHTML:"Configs","data-list-header":"Configs"}),t}applyEventsHeader(e,t,s,n){return"event"===e.kind&&"event"!==s.items[t-1]?.kind&&n.cn.push({},{cls:["neo-docs-memberlist-group-header"],innerHTML:"Events",style:{zIndex:3},"data-list-header":"Events"}),n}applyMethodsHeader(e,t,s,n){return"function"!==e.kind||s.items[t-1]&&"function"===s.items[t-1]?.kind||n.cn.push({},{cls:["neo-docs-memberlist-group-header"],innerHTML:"Methods",style:{zIndex:2},"data-list-header":"Methods"}),n}createItems(){let e,t,s,n,a=this,o=new RegExp(a.filterMembersQuery||"","gi"),i=!1,r=a.targetClassName,l=a.vdom;l.cn=[],l=a.applyConfigsHeader(a.store,l),a.store.items.forEach(((c,d)=>{l=a.applyEventsHeader(c,d,a.store,l),l=a.applyMethodsHeader(c,d,a.store,l),t=[],"_"===c.name.substr(-1)&&(c.name=c.name.slice(0,-1),t.push("GS")),c.neoClassName!==r&&t.push("inherited"),"private"!==c.access&&"protected"!==c.access||t.push(c.access),"static"===c.scope&&t.push("static"),e=c.name,""!==a.filterMembersQuery&&null!==a.filterMembersQuery&&(e=e.replace(o,(e=>`<span class="neo-highlight-search">${e}</span>`))),c.type?.names&&(e+=": {"+S.escapeHtml(c.type.names.join("|"))+"}"),c.hasOwnProperty("defaultvalue")&&(e+=" = "+c.defaultvalue),c.params&&"event"!==c.kind&&(e+="("+c.params.reduce(((e,t)=>(t.name.indexOf(".")<0&&(t.optional?e.push("["+t.name+"]"):e.push(t.name)),e)),[]).join(", ")+")"),c.returns&&(e+=" → {"+S.escapeHtml(c.returns[0].type.names.join("|")+"}")),n=c.meta.path,n.includes("/neo.mjs/")?n=n.substr(n.indexOf("/neo.mjs/")+9):n.includes("/neomjs/")?n=n.substr(n.indexOf("/neomjs/")+8):n.includes("/neo/")&&(n=n.substr(n.indexOf("/neo/")+5)),s={cls:["neo-list-item"],cn:[{cls:["neo-list-item-header-container"],cn:[{cls:["neo-list-item-header"],innerHTML:e},{style:{flex:1}},{cls:["neo-list-item-header"],innerHTML:t.join(", ")}]},{cls:"neo-docs-view-source-link-container",cn:[{tag:"a",cls:["neo-docs-view-source-link"],href:"#viewSource="+c.neoClassName+"&line="+c.meta.lineno,innerHTML:"Source: "+n+"/"+c.meta.filename+" (Line "+c.meta.lineno+")"}]},{innerHTML:c.description}]},c.examples?.length>0&&(i=!0,c.examples.forEach((e=>{s.cn.push({tag:"pre",cn:[{tag:"code",html:e}]})}))),c.params?.length>0&&s.cn.push(S.createParametersTable(c.params)),c.returns&&"event"!==c.kind&&s.cn.push({innerHTML:"Returns {"+S.escapeHtml(c.returns[0].type.names.join("|")+"} ")+(c.returns[0].description||"")}),l.cn.push(s)})),a.update(),i&&setTimeout((()=>{Neo.main.addon.HighlightJS.syntaxHighlightInit()}),100)}static createParametersTable(e){let t,s,n,a=!1,o=!1;return e.forEach((e=>{e.hasOwnProperty("defaultvalue")&&(a=!0),e.hasOwnProperty("optional")&&(o=!0)})),n={tag:"table",cls:"docs-param-table",cn:[{tag:"thead",cn:[{tag:"th",innerHTML:"Name"},{tag:"th",innerHTML:"Type"},{tag:"th",innerHTML:"Description"}]}]},a&&n.cn[0].cn.splice(2,0,{tag:"th",innerHTML:"Default"}),o&&n.cn[0].cn.splice(2,0,{tag:"th",innerHTML:"Optional"}),e.forEach((i=>{i.name.indexOf(".")<0&&(t={tag:"td",innerHTML:i.description},s=[],e.forEach((e=>{0===e.name.indexOf(i.name+".")&&((e=Neo.clone(e,!0)).name=e.name.split("."),e.name.shift(),e.name=e.name.join("."),s.push(e))})),s.length>0&&(t={tag:"td",cn:[{innerHTML:t.innerHTML},S.createParametersTable(s)]}),n.cn.push({tag:"tr",cn:[{tag:"td",innerHTML:i.name},{tag:"td",innerHTML:i.type?S.escapeHtml(i.type.names.join(" | ")):""},t]}),a&&n.cn[n.cn.length-1].cn.splice(2,0,{tag:"td",innerHTML:void 0===i.defaultvalue?"":i.defaultvalue+""}),o&&n.cn[n.cn.length-1].cn.splice(2,0,{tag:"td",innerHTML:i.optional}))})),n}static escapeHtml(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}filterAndSortItems(){let e,t,s=this,n={},a=s.up("classdetails-maincontainer").down("classhierarchy-treelist").store.items,o=0,i=[];for(a.forEach((e=>{!0===e.checked&&i.push(e.name)})),t=i.length;o<t;o++)n[i[o]]=o;s.targetClassName=a[a.length-1].name,e=[{operator:"included",property:"neoClassName",value:i},{operator:"!==",property:"kind",value:"class"},{operator:"!==",property:"kind",value:"constant"},{operator:"!==",property:"kind",value:"module"},{operator:"isUndefined",property:"inherited"}],s.showPrivateMembers||e.push({operator:"!==",property:"access",value:"private"}),s.showProtectedMembers||e.push({operator:"!==",property:"access",value:"protected"}),s.showStaticMembers||e.push({operator:"!==",property:"scope",value:"static"}),""!==s.filterMembersQuery&&null!==s.filterMembersQuery&&e.push({operator:"like",property:"name",value:s.filterMembersQuery}),e.push({scope:s,filterBy:function(e){let t,s,a,o=e.filteredItems,i=e.item,r=this.targetClassName;if("ntype"===i.name&&i.neoClassName!==r)return!0;if(i.neoClassName!==r)for(s=0,a=o.length;s<a;s++)if(t=o[s],i.id!==t.id&&i.name===t.name&&i.scope===t.scope&&n[i.neoClassName]<n[t.neoClassName])return!0;return!1}}),s.store.filters=e,s.store.sorters=[{sortBy:function(e,t){return(e="member"===e.kind?0:"function"===e.kind?1:2)>(t="member"===t.kind?0:"function"===t.kind?1:2)?1:e<t?-1:0}},{direction:"ASC",property:"name"}],s.fire("mutateItems",s.store)}onStoreFilter(){}onRefreshClassMembers(){this.filterAndSortItems(),this.createItems()}}Neo.applyClassConfig(S);const T=S;var L=s(7364),H=s(8459);class I extends p.Z{static config={className:"Docs.view.classdetails.MainContainer",ntype:"classdetails-maincontainer",cls:["neo-docs-classdetails-maincontainer","neo-container"],controller:w,layout:{ntype:"vbox",align:"stretch"},structureData:null,items:[{ntype:"container",_cls:["neo-docs-classdetails-headercontainer"],flex:"0 1 auto",layout:{ntype:"hbox",align:"stretch"},items:[{module:L.Z,cls:["neo-docs-classdetails-headerpanel","neo-panel","neo-container"],headers:[{dock:"bottom",style:{borderWidth:0},items:[{handler:"onScrollIntoView",reference:"showConfigs",style:{marginRight:"5px"},text:"Configs"},{handler:"onScrollIntoView",reference:"showMethods",style:{marginRight:"5px"},text:"Methods"},{handler:"onScrollIntoView",reference:"showEvents",text:"Events"},{ntype:"component",flex:1},{module:H.Z,listeners:{change:"onSearchFieldChange"},placeholderText:"Filter Members",width:160,style:{margin:0,marginRight:"5px",paddingTop:"2px"}},{checked:!0,handler:"onToggleMembers",iconCls:"fa fa-check-square",reference:"showPrivateMembers",style:{marginRight:"5px"},text:"Private"},{checked:!0,handler:"onToggleMembers",iconCls:"fa fa-check-square",reference:"showProtectedMembers",style:{marginRight:"5px"},text:"Protected"},{checked:!0,handler:"onToggleMembers",iconCls:"fa fa-check-square",reference:"showStaticMembers",text:"Static"}]}],items:[{module:y,flex:1,record:"@config:structureData"}]},{module:b,flex:"0 0 auto",minWidth:330,structureData:"@config:structureData"}]},{module:T,flex:1,listeners:{mutateItems:"onMutateItems"},reference:"classdetails-memberslist"}]}}Neo.applyClassConfig(I);var D=s(6026),R=s(3272);class Z extends D.Z{static config={className:"Docs.view.ContentTabContainer",ntype:"docs-content-tabcontainer",activateInsertedTabs:!0,contentContainerDefaults:{cls:["neo-docs-tab-content-container","neo-tab-content-container","neo-container"]},headerToolbarDefaults:{cls:["docs-tab-header-toolbar","neo-tab-header-toolbar","neo-toolbar"]},items:[{ntype:"component",html:"Welcome to the neo.mjs docs!",style:{padding:"20px"},tabButtonConfig:{iconCls:"fa fa-users",text:"Welcome!"}}],sortable:!0};construct(e){super.construct(e);let t=this.cls;t.unshift("docs-content-tabcontainer"),this.cls=t}getTabButtonConfig(e,t){let s=this;return{module:R.Z,flex:"none",index:t,pressed:s.activeIndex===t,domListeners:[{click:function(e){let t=e.path.map((e=>e.id));0===t[0].indexOf("neo-tab-header-button-")?s.activeIndex=e.component.index:s.removeAt(Neo.getComponent(s.tabBarId).indexOf(t[1]))},scope:s}],...e}}}Neo.applyClassConfig(Z);const j=Z;class P extends a.Z{static config={className:"Docs.app.model.Example",fields:[{name:"collapsed",type:"Boolean"},{name:"id",type:"Integer"},{name:"isLeaf",type:"Boolean"},{name:"name",type:"String"},{name:"parentId",type:"Integer"},{name:"path",type:"String"}]}}Neo.applyClassConfig(P);const E=P;class _ extends r.Z{static config={className:"Docs.app.store.Examples",keyProperty:"id",model:E}}Neo.applyClassConfig(_);const B=_;class V extends n.Z{static config={className:"Docs.view.ExamplesTreeList",ntype:"examples-treelist",cls:["docs-examples-treelist","neo-tree-list","neo-list-container","neo-list"],store:B};onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/examples.json"}).then((t=>{e.store.data=t.json,e.createItems(null,e.getListItemsRoot(),0),e.update()}))}}Neo.applyClassConfig(V);const O=V;var A=s(5264);class J extends p.Z{static config={className:"Docs.view.HeaderContainer",ntype:"neo-docs-header-container",cls:["neo-docs-header-container"],height:55,layout:{ntype:"hbox",align:"stretch"},items:[{module:H.Z,listeners:{change:"onNavigationSearchFieldChange"},placeholderText:"Filter Navigation",style:{padding:"10px"},width:240},{module:A.Z,domListeners:{click:"onSwitchThemeButtonClick"},flex:"none",height:27,reference:"theme-button",style:{marginTop:"5px"},text:"Theme Dark"},{module:A.Z,domListeners:{click:"onSwitchSourceViewThemeButtonClick"},flex:"none",height:27,reference:"source-view-theme-button",style:{marginLeft:"10px",marginTop:"5px"},text:"Source View Theme Dark"},{ntype:"component",flex:1},{ntype:"component",cls:["neo-logo-text"],html:"neo.mjs docs",width:210}]}}Neo.applyClassConfig(J);const Q=J;class F extends v.Z{static config={className:"Docs.view.MainContainerController",ntype:"docs-maincontainer-controller"};onApiListLeafClick(e){this.getReference("content-tabcontainer").add({ntype:"classdetails-maincontainer",id:e.className,structureData:e,tabButtonConfig:{iconCls:e.singleton?"fa fa-arrow-alt-circle-right":"fa fa-copyright",text:e.name}})}onExamplesListLeafClick(e){let t,s=this.getReference("content-tabcontainer"),n=e.name,a=[],o=this.getReference("examples-treelist").store,i=e;for(;null!==i.parentId;)i=o.get(i.parentId),n=i.name+"."+n;n="examples_"+n,t={iconCls:"fa fa-desktop",text:e.name},Array.isArray(e.path)?(e.path.forEach((e=>{a.push(import(e))})),Promise.all(a).then((function(e){let a=[];e.forEach((e=>{a.push({module:e.default})})),s.add({ntype:"container",id:n,items:a,style:{padding:"10px"},tabButtonConfig:t})}))):import(e.path).then((e=>{s.add({module:e.default,id:n,tabButtonConfig:t})}))}onHashChange(e,t){let s,n,a=e?.hash,o=this.getReference("content-tabcontainer"),i=this.getReference("api-treelist").store;a?.hasOwnProperty("viewSource")&&(s=i.find("className",a.viewSource)[0],s&&(n=o.add({ntype:"classdetails-sourceviewcomponent",id:a.viewSource+"__source",line:a.line,structureData:s,tabButtonConfig:{iconCls:"fa fa-code",text:s.name}}),n.line=a.line))}onNavigationSearchFieldChange(e){let t=this,s=e.value;t.getReference("examples-treelist").filter("name",s,null),t.getReference("api-treelist").filter("name",s,null),t.getReference("tutorials-treelist").filter("name",s,null)}onSwitchSourceViewThemeButtonClick(){let e,t,s=this.getReference("source-view-theme-button");"Source View Theme Light"===s.text?(e="Source View Theme Dark",t="./resources/highlightjs-custom-github-theme.css"):(e="Source View Theme Light",t="./resources/highlightjs-custom-dark-theme.css"),Neo.main.addon.Stylesheet.swapStyleSheet({href:t,id:"hljs-theme"}).then((t=>{s.text=e}))}onSwitchThemeButtonClick(){let e,t,s,n=this.getReference("theme-button"),a=this.component;"Theme Light"===n.text?(e="Theme Dark",s="neo-theme-light"):(e="Theme Light",s="neo-theme-dark"),Neo.config.useCssVars&&(t=[...a.cls],a.cls.forEach(((e,s)=>{e.includes("neo-theme")&&C.Z.remove(t,e)})),C.Z.add(t,s),a.cls=t,n.text=e)}onTutorialListLeafClick(e){this.getReference("content-tabcontainer").add({ntype:"classdetails-tutorialcomponent",fileName:e.fileName,fileType:e.type,id:e.name,tabButtonConfig:{iconCls:"fa fa-hands-helping",text:e.name}})}}Neo.applyClassConfig(F);const q=F;class X extends h.Z{static config={className:"Docs.view.classdetails.TutorialComponent",ntype:"classdetails-tutorialcomponent",cls:["neo-classdetails-tutorialcomponent"],fileName:null,fileType:null,style:{overflow:"auto"}};construct(e){super.construct(e);let t=this,s="json"===t.fileType,n="../../docs/tutorials/"+t.fileName;Neo.Xhr[s?"promiseJson":"promiseRequest"]({url:n}).then((e=>{setTimeout((()=>{t.applySourceCode(s?e.json:e.response)}),100)}))}applySourceCode(e){let t=this;"json"===t.fileType?t.vdom.cn=e:t.vdom.innerHTML=e,t.update(),setTimeout((()=>{X.syntaxHighlight()}),50)}static syntaxHighlight(){Neo.main.addon.HighlightJS.syntaxHighlightInit()}}Neo.applyClassConfig(X);class W extends a.Z{static config={className:"Docs.app.model.Tutorial",fields:[{name:"fileName",type:"String"},{name:"id",type:"Integer"},{name:"isLeaf",type:"Boolean"},{name:"name",type:"String"},{name:"parentId",type:"Integer"},{name:"type",type:"String"}]}}Neo.applyClassConfig(W);const $=W;class z extends r.Z{static config={className:"Docs.app.store.Tutorials",keyProperty:"id",model:$}}Neo.applyClassConfig(z);const G=z;class U extends n.Z{static config={className:"Docs.view.TutorialsTreeList",ntype:"tutorials-treelist",cls:["docs-tutorials-treelist","neo-tree-list","neo-list-container","neo-list"],store:G};onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/tutorials/tutorials.json"}).then((t=>{e.store.data=t.json,e.createItems(null,e.getListItemsRoot(),0),e.update()}))}}Neo.applyClassConfig(U);const K=U;var Y=s(668);class ee extends Y.Z{static config={className:"Docs.view.MainContainer",ntype:"main-container",autoMount:!0,cls:["neo-docs-maincontainer","neo-viewport"],controller:q,layout:{ntype:"vbox",align:"stretch"},store_:null,items:[Q,{ntype:"container",flex:1,layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"tab-container",cls:["neo-docs-navigation-tab-container","neo-tab-container"],minWidth:290,sortable:!0,width:290,items:[{module:m,listeners:{leafItemClick:"onApiListLeafClick"},reference:"api-treelist",tabButtonConfig:{iconCls:"fa fa-code",text:"API"}},{module:K,listeners:{leafItemClick:"onTutorialListLeafClick"},reference:"tutorials-treelist",tabButtonConfig:{iconCls:"fa fa-hands-helping",text:"Tutorials"}},{module:O,listeners:{leafItemClick:"onExamplesListLeafClick"},reference:"examples-treelist",tabButtonConfig:{iconCls:"fa fa-desktop",text:"Examples"}}]},{module:j,flex:1,reference:"content-tabcontainer"}]}]};construct(e){super.construct(e);let t=this;t.store||(t.store=Neo.create(k.Z,{keyProperty:"id"})),t.items[1].items[0].items[2].tabButtonConfig.disabled="development"!==Neo.config.environment}onConstructed(){super.onConstructed();let e=this;Neo.Xhr.promiseJson({url:"../../docs/output/all.json"}).then((t=>{e.store.items=t.json}))}}Neo.applyClassConfig(ee);const te=ee,se=()=>Neo.app({mainView:te,name:"Docs"})}}]);
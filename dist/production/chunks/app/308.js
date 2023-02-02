"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[308],{6308:(t,e,l)=>{l.r(e),l.d(e,{default:()=>n});var a=l(4683),s=l(5892),o=l(3562),i=l(3817);class r extends a.Z{static config={className:"RealWorld.view.article.CreateComponent",baseCls:["editor-page"],body_:"",errors_:[],description_:"",slug:null,tagList_:[],title_:"",_vdom:{cn:[{cls:["container","page"],cn:[{cls:["row"],cn:[{cls:["col-md-10","offset-md-1","col-xs-12"],cn:[{tag:"ul",cls:["error-messages"],flag:"errors"},{tag:"form",cn:[{tag:"fieldset",cn:[{tag:"fieldset",cls:["form-group"],cn:[{tag:"input",cls:["form-control","form-control-lg"],flag:"title",name:"title",placeholder:"Article Title",type:"text"}]},{tag:"fieldset",cls:["form-group"],cn:[{tag:"input",cls:["form-control"],name:"description",flag:"description",placeholder:"What's this article about?",type:"text"}]},{tag:"fieldset",cls:["form-group"],cn:[{tag:"textarea",cls:["form-control"],flag:"body",name:"body",placeholder:"Write your article (in markdown)",rows:8}]},{tag:"fieldset",cls:["form-group"],cn:[{tag:"input",cls:["form-control","field-tags"],flag:"tags",name:"tags",placeholder:"Enter tags",type:"text"},{cls:["tag-list"],flag:"tag-list"}]},{tag:"button",cls:["btn","btn-lg","btn-primary","pull-xs-right"],html:"Publish Article",type:"button"}]}]}]}]}]}]}};construct(t){super.construct(t);let e=this;e.addDomListeners([{click:{fn:e.onSubmitButtonClick,delegate:".btn-primary",scope:e}},{click:{fn:e.onTagClose,delegate:".ion-close-round",scope:e}},{keydown:{fn:e.onFieldTagsKeyDown,delegate:".field-tags",scope:e}}])}afterSetBody(t,e){s.Z.getByFlag(this.vdom,"body").value=t,this.update()}afterSetDescription(t,e){s.Z.getByFlag(this.vdom,"description").value=t,this.update()}afterSetErrors(t,e){let l=s.Z.getByFlag(this.vdom,"errors");l.cn=[],Object.entries(t||{}).forEach((([t,e])=>{l.cn.push({tag:"li",html:t+" "+e.join(" and ")})})),this.update()}afterSetTagList(t,e){let l=this,a=s.Z.getByFlag(l.vdom,"tag-list"),o=s.Z.getByFlag(l.vdom,"tags");a.cn=[],o.value=null,Object.entries(t||{}).forEach((([t,e])=>{a.cn.push({tag:"span",cls:["tag-default tag-pill"],cn:[{tag:"i",cls:["ion-close-round"],"data-value":e},{vtype:"text",html:e}]})})),l.update()}afterSetTitle(t,e){s.Z.getByFlag(this.vdom,"title").value=t,this.update()}onFieldTagsKeyDown(t){let e=this;"Enter"===t.key&&Neo.main.DomAccess.getAttributes({id:t.target.id,attributes:"value"}).then((t=>{o.Z.findChildVnode(e.vnode,{className:"field-tags"}).vnode.attributes.value=t.value,e.tagList=[...e._tagList,t.value]}))}onSubmitButtonClick(){let t=this,e=t.vdom,l=s.Z.getByFlag(e,"body"),a=s.Z.getByFlag(e,"description"),o=[s.Z.getByFlag(e,"title").id,a.id,l.id];Neo.main.DomAccess.getAttributes({id:o,attributes:"value"}).then((e=>{i.Z[t.slug?"put":"post"]({data:JSON.stringify({article:{title:e[0].value,description:e[1].value,body:e[2].value,tagList:t.tagList}}),slug:t.slug}).then((e=>{const l=e.json.errors;l?t.errors=l:Neo.Main.setRoute({value:"/article/"+e.json.article.slug})}))}))}onTagClose(t){this.tagList=this.tagList.filter((e=>e!==t.target.data.value))}resetForm(){this.set({body:"",description:"",slug:null,tagList:[],title:""})}}Neo.applyClassConfig(r);const n=r}}]);
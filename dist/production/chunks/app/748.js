"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[748],{3748:(t,e,o)=>{o.r(e),o.d(e,{default:()=>i});var n=o(4683);class a extends n.Z{static config={className:"RealWorld.view.article.CreateCommentComponent",baseCls:["card","comment-form"],userImage_:null,userName_:null,_vdom:{tag:"form",cn:[{cls:["card-block"],cn:[{tag:"textarea",cls:["form-control"],placeholder:"Write a comment...",rows:3}]},{cls:["card-footer"],cn:[{tag:"img",cls:["comment-author-img"],src:"https://static.productionready.io/images/smiley-cyrus.jpg"},{vtype:"text",html:"&nbsp;"},{tag:"span",cls:["comment-author"]},{tag:"button",cls:["btn","btn-sm","btn-primary"],html:"Post Comment",type:"button"}]}]}};construct(t){super.construct(t);let e=this;e.addDomListeners({click:{fn:e.onSubmitButtonClick,delegate:".btn-primary",scope:e}}),e.vdom.cn[0].cn[0].id=e.getInputElId(),e.update(),e.getController().on({afterSetCurrentUser:e.onCurrentUserChange,scope:e})}afterSetUserImage(t,e){t&&(this.vdom.cn[1].cn[0].src=t,this.update())}afterSetUserName(t,e){t&&(this.vdom.cn[1].cn[2].html=t,this.update())}getInputElId(){return this.id+"__input"}onCurrentUserChange(t){this.set({userImage:t.image,userName:t.username})}onSubmitButtonClick(t){let e=this;Neo.main.DomAccess.getAttributes({id:e.getInputElId(),attributes:"value"}).then((t=>{e.getController().postComment({data:JSON.stringify({comment:{body:t.value}})}).then((t=>{e.vdom.cn[0].cn[0].value="",e.update()}))}))}}Neo.applyClassConfig(a);const l=a;var r=o(565),s=o(5892);class c extends n.Z{static config={className:"RealWorld.view.article.Component",author_:null,baseCls:["article-page"],body_:null,commentComponent:null,commentComponents:[],comments_:null,createCommentComponent:null,createdAt_:null,favorited_:!1,favoritesCount_:null,tagList_:null,title_:null,_vdom:{cn:[{cls:["banner"],cn:[{cls:["container"],cn:[{tag:"h1",flag:"title"},{cls:["article-meta"],cn:[{tag:"a",flag:"userimage",cn:[{tag:"img"}]},{cls:["info"],cn:[{tag:"a",cls:["author"],flag:"username"},{tag:"span",cls:["date"],flag:"createdAt"}]},{tag:"button",cls:["btn","btn-sm","btn-outline-secondary","follow-button"],cn:[{tag:"i",flag:"followIcon"},{vtype:"text",flag:"followAuthor"},{vtype:"text",flag:"username"}]},{tag:"button",cls:["btn","btn-sm","btn-outline-secondary","edit-button"],flag:"edit-button",removeDom:!0,cn:[{tag:"i",cls:["ion-edit"]},{vtype:"text",html:" Edit Article"}]},{vtype:"text",html:"&nbsp;&nbsp;"},{tag:"button",cls:["btn","btn-sm","btn-outline-primary","favorite-button"],flag:"favorited",cn:[{tag:"i",cls:["ion-heart"]},{vtype:"text",html:"&nbsp;"},{vtype:"text"},{vtype:"text",html:" Post "},{tag:"span",cls:["counter"],flag:"favoritesCount"}]},{tag:"button",cls:["btn","btn-sm","btn-outline-danger","delete-button"],flag:"delete-button",removeDom:!0,cn:[{tag:"i",cls:["ion-trash-a"]},{vtype:"text",html:" Delete Article"}]}]}]}]},{cls:["container","page"],cn:[{cls:["row","article-content"],cn:[{cls:["col-md-12"],flag:"body",cn:[]}]},{tag:"hr"},{cls:["article-actions"],flag:"article-actions",cn:[{cls:["article-meta"],cn:[{tag:"a",flag:"userimage",cn:[{tag:"img"}]},{cls:["info"],cn:[{tag:"a",cls:["author"],flag:"username"},{tag:"span",cls:["date"],html:"January 20th"}]},{tag:"button",cls:["btn","btn-sm","btn-outline-secondary","follow-button"],cn:[{tag:"i",flag:"followIcon"},{vtype:"text",flag:"followAuthor"},{vtype:"text",flag:"username"}]},{vtype:"text",html:"&nbsp;&nbsp;"},{tag:"button",cls:["btn","btn-sm","btn-outline-primary","favorite-button"],flag:"favorited",cn:[{tag:"i",cls:["ion-heart"]},{vtype:"text",html:"&nbsp;"},{vtype:"text"},{vtype:"text",html:" Post "},{tag:"span",cls:["counter"],flag:"favoritesCount"}]}]}]},{cls:"row",cn:[{cls:["col-xs-12","col-md-8","offset-md-2"],flag:"comments-section",cn:[]}]}]}]}};construct(t){super.construct(t);let e=this;e.addDomListeners([{click:{fn:e.onDeleteButtonClick,delegate:".delete-button",scope:e}},{click:{fn:e.onEditButtonClick,delegate:".edit-button",scope:e}},{click:{fn:e.onFavoriteButtonClick,delegate:".favorite-button",scope:e}},{click:{fn:e.onFollowButtonClick,delegate:".follow-button",scope:e}}]),e.getController().on({afterSetCurrentUser:e.onCurrentUserChange,scope:e})}onConstructed(){let t=this,e=t.getController().currentUser;t.createCommentComponent=Neo.create({module:l,parentId:t.id,userImage:e?.image||null}),s.Z.getByFlag(t.vdom,"comments-section").cn.unshift(t.createCommentComponent.vdom),t.update(),super.onConstructed()}afterSetAuthor(t,e){if(t){let e=this,o=e.vdom;s.Z.getFlags(o,"followAuthor").forEach((e=>{e.html=t.following?" Unfollow ":" Follow "})),s.Z.getFlags(o,"followIcon").forEach((e=>{e.cls=t.following?["ion-minus-round"]:["ion-plus-round"]})),s.Z.getFlags(o,"userimage").forEach((e=>{e.href="#/profile/"+t.username,e.cn[0].src=t.image})),s.Z.getFlags(o,"username").forEach((e=>{e.href="#/profile/"+t.username,e.html=t.username})),e.update(),e.onCurrentUserChange()}}afterSetBody(t,e){t&&Neo.main.addon.Markdown.markdownToHtml(t).then((t=>{s.Z.getByFlag(this.vdom,"body").cn[0]={cn:[{tag:"p",html:t}]},this.update()}))}async afterSetComments(t,e){if(Array.isArray(t)){let e,n,a=this,l=s.Z.getByFlag(a.vdom,"comments-section");a.commentComponent||(n=await o.e(745).then(o.bind(o,745)),a.commentComponent=n.default),l.cn=[l.cn.shift()],t.forEach(((t,o)=>{e={author:t.author,body:t.body,commentId:t.id,createdAt:t.createdAt,updatedAt:t.updatedAt},a.commentComponents[o]?a.commentComponents[o].set(e,!0):a.commentComponents[o]=Neo.create({module:a.commentComponent,parentId:a.id,...e}),l.cn.push(a.commentComponents[o].vdom)})),a.update()}}afterSetCreatedAt(t,e){t&&(s.Z.getByFlag(this.vdom,"createdAt").html=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(new Date(t)),this.update())}afterSetFavorited(t,e){let o=this;s.Z.getFlags(o.vdom,"favorited").forEach((e=>{e.cn[2].html=t?"Unfavorite":"Favorite",r.Z.add(e.cls,t?"btn-primary":"btn-outline-primary"),r.Z.remove(e.cls,t?"btn-outline-primary":"btn-primary")})),o.update(),Neo.isBoolean(e)&&o.getController().favoriteArticle(o.slug,t).then((t=>{o.favoritesCount=t.json.article.favoritesCount}))}afterSetFavoritesCount(t,e){Neo.isNumber(t)&&(s.Z.getFlags(this.vdom,"favoritesCount").forEach((e=>{e.html=`(${t})`})),this.update())}afterSetTagList(t,e){let o,n=s.Z.getByFlag(this.vdom,"body");Array.isArray(t)&&t.length>0?(o={tag:"ul",cls:["tag-list"],cn:[]},t.forEach((t=>{o.cn.push({tag:"li",cls:["tag-default","tag-pill","tag-outline"],html:t})})),n.cn[1]=o):n.cn[1]&&(n.cn[1].removeDom=!0),this.update()}afterSetTitle(t,e){s.Z.getByFlag(this.vdom,"title").html=t,this.update()}onCurrentUserChange(){console.log("### onCurrentUserChange");let t,e=this,o=e.getController().currentUser,n=e.vdom;e.author&&o&&(t=e.author.username===o.username,n.cn[0].cn[0].cn[1].cn[2].removeDom=t,n.cn[0].cn[0].cn[1].cn[5].removeDom=t,s.Z.getByFlag(n,"article-actions").removeDom=t,s.Z.getByFlag(n,"delete-button").removeDom=!t,s.Z.getByFlag(n,"edit-button").removeDom=!t,e.update())}onDeleteButtonClick(t){this.getController().deleteArticle(this.slug)}onEditButtonClick(t){Neo.Main.setRoute({value:"/editor/"+this.slug})}onFavoriteButtonClick(t){this.favorited=!this.favorited}onFollowButtonClick(t){let e=this;e.getController().followUser(e.author.username,!e.author.following).then((t=>{e.author=t.json.profile}))}}Neo.applyClassConfig(c);const i=c}}]);
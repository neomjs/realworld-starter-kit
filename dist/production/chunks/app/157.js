"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[157],{5551:(e,t,l)=>{l.d(t,{Z:()=>r});var o=l(4683),n=l(565),i=l(5892);class a extends o.Z{static getConfig(){return{className:"RealWorld.view.article.PreviewComponent",author_:null,cls:["article-preview"],createdAt_:null,description_:null,favorited_:!1,favoritesCount_:null,slug_:null,tagList_:null,title_:null,userImage_:null,_vdom:{cn:[{cls:["article-meta"],cn:[{tag:"a",flag:"userImageLink",cn:[{tag:"img"}]},{cls:["info"],cn:[{tag:"a",cls:["author"],flag:"author"},{tag:"span",cls:["date"],flag:"createdAt"}]},{tag:"button",cls:["btn","btn-sm","pull-xs-right"],cn:[{tag:"i",cls:["ion-heart"]},{vtype:"text",flag:"favoritesCount"}]}]},{tag:"a",cls:["preview-link"],flag:"preview-link",cn:[{tag:"h1",flag:"title"},{tag:"p",flag:"description"},{tag:"span",html:"Read more..."}]}]}}}construct(e){super.construct(e);let t=this,l=t.domListeners;l.push({click:{fn:t.onFavoriteButtonClick,delegate:".pull-xs-right",scope:t}}),t.domListeners=l}afterSetAuthor(e,t){let l=this.vdom,o=i.Z.getByFlag(l,"author"),n="#/profile/"+e;o.href=n,o.html=e,i.Z.getByFlag(l,"userImageLink").href=n,this.vdom=l}afterSetCreatedAt(e,t){let l=this.vdom;i.Z.getByFlag(l,"createdAt").html=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e)),this.vdom=l}afterSetDescription(e,t){let l=this.vdom;i.Z.getByFlag(l,"description").html=e,this.vdom=l}afterSetFavorited(e,t){let l=this,o=l.vdom,i=o.cn[0].cn[2];n.Z.add(i.cls,e?"btn-primary":"btn-outline-primary"),n.Z.remove(i.cls,e?"btn-outline-primary":"btn-primary"),l.vdom=o,Neo.isBoolean(t)&&l.getController().favoriteArticle(l.slug,e)}afterSetFavoritesCount(e,t){let l=this.vdom;i.Z.getByFlag(l,"favoritesCount").html=" "+e,this.vdom=l}afterSetSlug(e,t){let l=this.vdom;i.Z.getByFlag(l,"preview-link").href="#/article/"+e,this.vdom=l}afterSetTagList(e,t){let l,o=this.vdom;o.cn[1].cn[3]&&o.cn[1].cn.pop(),Array.isArray(e)&&e.length>0&&(l={tag:"ul",cls:["tag-list"],cn:[]},e.forEach((e=>{l.cn.push({tag:"li",cls:["tag-default","tag-pill","tag-outline"],html:e})})),o.cn[1].cn.push(l),this.vdom=o)}afterSetTitle(e,t){let l=this.vdom;i.Z.getByFlag(l,"title").html=e,this.vdom=l}afterSetUserImage(e,t){let l=this.vdom;i.Z.getByFlag(l,"userImageLink").cn[0].src=e,this.vdom=l}onFavoriteButtonClick(e){let t=this,l=!t.favorited;t.set({favorited:l,favoritesCount:l?t.favoritesCount+1:t.favoritesCount-1})}}Neo.applyClassConfig(a);const r=a},1157:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var o=l(4683),n=l(565),i=l(5551),a=l(5892);class r extends o.Z{static getConfig(){return{className:"RealWorld.view.user.ProfileComponent",articlePreviews_:null,bio_:null,cls:["profile-page"],countArticles_:5,following_:null,image_:null,myProfile_:!1,previewComponents:[],username_:null,_vdom:{cn:[{cls:["user-info"],cn:[{cls:["container"],cn:[{cls:["row"],cn:[{cls:["col-xs-12","col-md-10","offset-md-1"],cn:[{tag:"img",cls:["user-img"],flag:"image"},{tag:"h4",flag:"username"},{tag:"p",flag:"bio"},{tag:"button",cls:["btn","btn-sm","btn-outline-secondary","action-btn","follow-button"],flag:"following",cn:[{tag:"i",cls:["ion-plus-round"]},{vtype:"text"},{vtype:"text"}]},{tag:"a",cls:["btn","btn-sm","btn-outline-secondary","action-btn"],flag:"edit-profile",href:"#/settings",removeDom:!0,cn:[{tag:"i",cls:["ion-gear-a"]},{vtype:"text",html:" Edit Profile Settings"}]}]}]}]}]},{cls:["container"],cn:[{cls:["row"],cn:[{cls:["col-xs-12","col-md-10","offset-md-1"],flag:"feed-container",cn:[{cls:["articles-toggle"],cn:[{tag:"ul",cls:["nav","nav-pills","outline-active"],flag:"feed-header",cn:[{tag:"li",cls:["nav-item"],cn:[{tag:"a",cls:["nav-link","prevent-click","active"],href:"",html:"My Articles"}]},{tag:"li",cls:["nav-item"],cn:[{tag:"a",cls:["nav-link","prevent-click"],href:"",html:"Favorited Articles"}]}]}]}]}]}]}]}}}construct(e){super.construct(e),Neo.main.DomEvents.registerPreventDefaultTargets({name:"click",cls:"prevent-click"});let t=this,l=t.domListeners;l.push({click:{fn:t.onFollowButtonClick,delegate:".follow-button",scope:t}},{click:{fn:t.onNavLinkClick,delegate:".nav-link",scope:t}}),t.domListeners=l,t.getController().on({afterSetCurrentUser:t.onCurrentUserChange,scope:t})}afterSetArticlePreviews(e,t){let l,o=this,n=o.vdom,r=a.Z.getByFlag(n,"feed-container");r.cn=[r.cn.shift()],Array.isArray(e)&&e.forEach(((e,t)=>{l={author:e.author.username,createdAt:e.createdAt,description:e.description,favorited:e.favorited,favoritesCount:e.favoritesCount,slug:e.slug,tagList:e.tagList,title:e.title,userImage:e.author.image},o.previewComponents[t]?o.previewComponents[t].set(l,!0):o.previewComponents[t]=Neo.create({module:i.Z,parentId:o.id,...l}),r.cn.push(o.previewComponents[t].vdom)})),o.vdom=n}afterSetBio(e,t){if(e){let t=this.vdom;a.Z.getByFlag(t,"bio").html=e,this.vdom=t}}afterSetFollowing(e,t){if(Neo.isBoolean(e)){let t=this.vdom,l=a.Z.getByFlag(t,"following");n.Z.remove(l.cls,e?"btn-outline-secondary":"btn-secondary"),n.Z.add(l.cls,e?"btn-secondary":"btn-outline-secondary"),l.cn[0].cls=[e?"ion-minus-round":"ion-plus-round"],l.cn[1].html=e?" Unfollow ":" Follow ",this.vdom=t}}afterSetImage(e,t){let l=this.vdom;a.Z.getByFlag(l,"image").src=e,this.vdom=l}afterSetMyProfile(e,t){if(console.log("afterSetMyProfile",e),Neo.isBoolean(t)){let t=this.vdom;a.Z.getByFlag(t,"edit-profile").removeDom=!e,a.Z.getByFlag(t,"following").removeDom=e,this.vdom=t}}afterSetUsername(e,t){let l=this.vdom;a.Z.getByFlag(l,"following").cn[2].html=e,a.Z.getByFlag(l,"username").html=e,this.vdom=l}getArticles(e){this.getController().getArticles(e).then((e=>{this.articlePreviews=e.json.articles}))}onCurrentUserChange(e){console.log("onCurrentUserChange",e),this.myProfile=this.username===e?.username}onFollowButtonClick(e){let t=this;t.getController().followUser(t.username,!t.following).then((e=>{t.following=e.json.profile.following}))}onNavLinkClick(e){let t=this,l=t.vdom,o=a.Z.findVdomChild(l,e.path[0].id),i=a.Z.getByFlag(l,"feed-header"),r={};if(!o.vdom.cls.includes("disabled")){switch(o.vdom.html){case"Favorited Articles":r={favorited:t.username};break;case"My Articles":r={author:t.username}}i.cn.forEach((e=>{n.Z[e.id===o.parentNode.id?"add":"remove"](e.cn[0].cls,"active")})),t.vdom=l,t.getArticles({...r,limit:t.countArticles,offset:0})}}update(e){let t=this,l=e.username;t.set({bio:e.bio,following:e.following,image:e.image,myProfile:e.myProfile,username:l}).then((()=>{t.getArticles({author:l,limit:t.countArticles,offset:0})}))}}Neo.applyClassConfig(r);const s=r}}]);
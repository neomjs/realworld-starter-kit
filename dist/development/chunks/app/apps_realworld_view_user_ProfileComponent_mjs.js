"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_user_ProfileComponent_mjs"],{

/***/ "./apps/realworld/view/article/PreviewComponent.mjs":
/*!**********************************************************!*\
  !*** ./apps/realworld/view/article/PreviewComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class RealWorld.view.article.PreviewComponent
 * @extends Neo.component.Base
 */
class PreviewComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.article.PreviewComponent'
         * @protected
         */
        className: 'RealWorld.view.article.PreviewComponent',
        /**
         * @member {String|null} author_=null
         */
        author_: null,
        /**
         * @member {String[]} baseCls=['article-preview']
         */
        baseCls: ['article-preview'],
        /**
         * ISO 8601 timestamp
         * @member {String|null} createdAt_=null
         */
        createdAt_: null,
        /**
         * @member {String|null} description_=null
         */
        description_: null,
        /**
         * @member {Boolean} favorited_=false
         */
        favorited_: false,
        /**
         * @member {Number|null} favoritesCount_=null
         */
        favoritesCount_: null,
        /**
         * @member {String|null} slug_=null
         */
        slug_: null,
        /**
         * @member {Array|null} tagList_=null
         */
        tagList_: null,
        /**
         * @member {String|null} title_=null
         */
        title_: null,
        /**
         * @member {String|null} userImage_=null
         */
        userImage_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['article-meta'], cn: [
                {tag : 'a', flag: 'userImageLink', cn: [{tag: 'img'}]},
                {cls: ['info'], cn: [
                    {tag: 'a',    cls: ['author'], flag: 'author'},
                    {tag: 'span', cls: ['date'],   flag: 'createdAt'}
                ]},
                {tag: 'button', cls: ['btn', 'btn-sm', 'pull-xs-right'], cn: [
                    {tag: 'i', cls: ['ion-heart']},
                    {vtype: 'text', flag: 'favoritesCount'}
                ]}
            ]},
            {tag: 'a', cls : ['preview-link'], flag: 'preview-link', cn: [
                {tag: 'h1',   flag: 'title'},
                {tag: 'p',    flag: 'description'},
                {tag: 'span', html: 'Read more...'}
            ]}
        ]}
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.addDomListeners({
            click: {
                fn      : me.onFavoriteButtonClick,
                delegate: '.pull-xs-right',
                scope   : me
            }
        });
    }

    /**
     * Triggered after the author config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetAuthor(value, oldValue) {
        let vdom = this.vdom,
            node = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'author'),
            href = '#/profile/' + value;

        node.href = href;
        node.html = value;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'userImageLink').href = href;
        this.update();
    }

    /**
     * Triggered after the createdAt config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetCreatedAt(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(this.vdom, 'createdAt').html = new Intl.DateTimeFormat('en-US', {
            day  : 'numeric',
            month: 'long',
            year : 'numeric'
        }).format(new Date(value));

        this.update();
    }

    /**
     * Triggered after the description config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDescription(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(this.vdom, 'description').html = value;
        this.update();
    }

    /**
     * Triggered after the favorited config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFavorited(value, oldValue) {
        let me     = this,
            button = me.vdom.cn[0].cn[2];

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(button.cls, value ? 'btn-primary' : 'btn-outline-primary');
        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(button.cls, value ? 'btn-outline-primary' : 'btn-primary');

        me.update();

        // ignore the initial setter call
        if (Neo.isBoolean(oldValue)) {
            me.getController().favoriteArticle(me.slug, value);
        }
    }

    /**
     * Triggered after the favoritesCount config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetFavoritesCount(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(this.vdom, 'favoritesCount').html = ' ' + value;
        this.update();
    }

    /**
     * Triggered after the slug config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetSlug(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(this.vdom, 'preview-link').href = '#/article/' + value;
        this.update();
    }

    /**
     * Triggered after the tagList config got changed
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetTagList(value, oldValue) {
        let me   = this,
            vdom = me.vdom,
            tagList;

        // remove old tags if exists
        if (vdom.cn[1].cn[3]) {
            vdom.cn[1].cn.pop();
        }

        if (Array.isArray(value) && value.length > 0) {
            tagList = {
                tag: 'ul',
                cls: ['tag-list'],
                cn : []
            };

            value.forEach(item => {
                tagList.cn.push({
                    tag : 'li',
                    cls : ['tag-default', 'tag-pill', 'tag-outline'],
                    html: item
                })
            });

            vdom.cn[1].cn.push(tagList);

            me.update();
        }
    }

    /**
     * Triggered after the title config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTitle(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(this.vdom, 'title').html = value;
        this.update();
    }

    /**
     * Triggered after the userImage config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserImage(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(this.vdom, 'userImageLink').cn[0].src = value;
        this.update();
    }

    /**
     * @param {Object} data
     */
    onFavoriteButtonClick(data) {
        let me        = this,
            favorited = !me.favorited;

        me.set({
            favorited,
            favoritesCount: favorited ? (me.favoritesCount + 1) : (me.favoritesCount - 1)
        });
    }
}

Neo.applyClassConfig(PreviewComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewComponent);


/***/ }),

/***/ "./apps/realworld/view/user/ProfileComponent.mjs":
/*!*******************************************************!*\
  !*** ./apps/realworld/view/user/ProfileComponent.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _article_PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article/PreviewComponent.mjs */ "./apps/realworld/view/article/PreviewComponent.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");





/**
 * @class RealWorld.view.user.ProfileComponent
 * @extends Neo.component.Base
 */
class ProfileComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.user.ProfileComponent'
         * @protected
         */
        className: 'RealWorld.view.user.ProfileComponent',
        /**
         * @member {Object[]|null} articlePreviews_=null
         */
        articlePreviews_: null,
        /**
         * @member {String[]} baseCls=['profile-page']
         */
        baseCls: ['profile-page'],
        /**
         * @member {String|null} bio_=null
         */
        bio_: null,
        /**
         * @member {Number} countArticles_=5
         */
        countArticles_: 5,
        /**
         * @member {Boolean|null} following_=null
         */
        following_: null,
        /**
         * @member {String|null} image_=null
         */
        image_: null,
        /**
         * @member {Boolean} myProfile_=false
         */
        myProfile_: false,
        /**
         * @member {RealWorld.view.article.PreviewComponent[]} previewComponents=[]
         */
        previewComponents: [],
        /**
         * @member {String|null} username_=null
         */
        username_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['user-info'], cn: [
                {cls: ['container'], cn: [
                    {cls: ['row'], cn: [
                        {cls: ['col-xs-12', 'col-md-10', 'offset-md-1'], cn: [
                            {tag: 'img', cls: ['user-img'], flag: 'image'},
                            {tag: 'h4', flag: 'username'},
                            {tag: 'p', flag: 'bio'},
                            {tag: 'button', cls: ['btn', 'btn-sm', 'btn-outline-secondary', 'action-btn', 'follow-button'], flag: 'following', cn: [
                                {tag: 'i', cls: ['ion-plus-round']},
                                {vtype: 'text'},
                                {vtype: 'text'}
                            ]},
                            {tag: 'a', cls: ['btn', 'btn-sm', 'btn-outline-secondary', 'action-btn'], flag: 'edit-profile', href: '#/settings', removeDom: true, cn: [
                                {tag: 'i', cls: ['ion-gear-a']},
                                {vtype: 'text', html: ' Edit Profile Settings'}
                            ]}
                        ]}
                    ]}
                ]}
            ]},
            {cls: ['container'], cn: [
                {cls: ['row'], cn: [
                    {cls: ['col-xs-12', 'col-md-10', 'offset-md-1'], flag: 'feed-container', cn: [
                        {cls: ['articles-toggle'], cn: [
                            {tag: 'ul', cls: ['nav', 'nav-pills', 'outline-active'], flag: 'feed-header', cn: [
                                {tag: 'li', cls: ['nav-item'], cn: [
                                    {tag: 'a', cls: ['nav-link', 'prevent-click', 'active'], href: '', html: 'My Articles'}
                                ]},
                                {tag: 'li', cls: ['nav-item'], cn: [
                                    {tag: 'a', cls: ['nav-link', 'prevent-click'], href: '', html: 'Favorited Articles'}
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        Neo.main.DomEvents.registerPreventDefaultTargets({
            name: 'click',
            cls : 'prevent-click'
        });

        let me = this;

        me.addDomListeners([
            {click: {fn: me.onFollowButtonClick, delegate: '.follow-button', scope: me}},
            {click: {fn: me.onNavLinkClick,      delegate: '.nav-link',      scope: me}}
        ]);

        me.getController().on({
            afterSetCurrentUser: me.onCurrentUserChange,
            scope              : me
        });
    }

    /**
     * Triggered after the articlePreviews config got changed
     * @param {Object[]|null} value
     * @param {Object[]|null} oldValue
     * @protected
     */
    afterSetArticlePreviews(value, oldValue) {
        let me        = this,
            container = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(me.vdom, 'feed-container'),
            config;

        container.cn = [container.cn.shift()];

        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                config = {
                    author        : item.author.username,
                    createdAt     : item.createdAt,
                    description   : item.description,
                    favorited     : item.favorited,
                    favoritesCount: item.favoritesCount,
                    slug          : item.slug,
                    tagList       : item.tagList,
                    title         : item.title,
                    userImage     : item.author.image
                };

                if (!me.previewComponents[index]) {
                    me.previewComponents[index] = Neo.create({
                        module  : _article_PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                        parentId: me.id,
                        ...config
                    });
                } else {
                    me.previewComponents[index].set(config, true);
                }

                container.cn.push(me.previewComponents[index].vdom);
            });
        }

        me.update();
    }

    /**
     * Triggered after the bio config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBio(value, oldValue) {
        if (value) {
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(this.vdom, 'bio').html = value;
            this.update();
        }
    }

    /**
     * Triggered after the following config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFollowing(value, oldValue) {
        if (Neo.isBoolean(value)) {
            let node = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(this.vdom, 'following');

            // tobiu: did not see this one in the specs, but the react & vue app do it
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(node.cls, value ? 'btn-outline-secondary' : 'btn-secondary');
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(node.cls, value ? 'btn-secondary' : 'btn-outline-secondary');

            node.cn[0].cls  = [value ? 'ion-minus-round' : 'ion-plus-round'];
            node.cn[1].html = value ? ' Unfollow ' : ' Follow ';
            this.update();
        }
    }

    /**
     * Triggered after the image config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetImage(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(this.vdom, 'image').src = value;
        this.update();
    }

    /**
     * Triggered after the myProfile config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMyProfile(value, oldValue) {console.log('afterSetMyProfile', value);
        if (Neo.isBoolean(oldValue)) {
            let vdom = this.vdom;

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'edit-profile').removeDom = !value;
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'following')   .removeDom = value;
            this.update();
        }
    }

    /**
     * Triggered after the username config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUsername(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'following').cn[2].html = value;
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'username').html = value;
        this.update();
    }

    /**
     * @param {Object} params
     */
    getArticles(params) {
        this.getController().getArticles(params).then(data => {
            this.articlePreviews = data.json.articles;
        });
    }

    /**
     * @param {Object} value
     */
    onCurrentUserChange(value) {console.log('onCurrentUserChange', value);
        this.myProfile = this.username === value?.username;
    }

    /**
     * @param {Object} data
     */
    onFollowButtonClick(data) {
        let me = this;

        me.getController().followUser(me.username, !me.following).then(data => {
            me.following = data.json.profile.following;
        });
    }

    /**
     * @param {Object} data
     */
    onNavLinkClick(data) {
        let me         = this,
            el         = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].findVdomChild(me.vdom, data.path[0].id),
            feedHeader = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(me.vdom, 'feed-header'),
            params     = {};

        if (!el.vdom.cls.includes('disabled')) {
            switch(el.vdom.html) {
                case 'Favorited Articles':
                    params = {
                        favorited: me.username
                    };
                    break;
                case 'My Articles':
                    params = {
                        author: me.username
                    };
                    break;
            }

            feedHeader.cn.forEach(item => {
                _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][item.id === el.parentNode.id ? 'add' : 'remove'](item.cn[0].cls, 'active');
            });

            me.update();

            me.getArticles({
                ...params,
                limit : me.countArticles,
                offset: 0
            });
        }
    }

    /**
     * @param {Object} configs
     */
    updateContent(configs) {
        let me       = this,
            username = configs.username;

        me.set({
            bio      : configs.bio,
            following: configs.following,
            image    : configs.image,
            myProfile: configs.myProfile,
            username : username
        }).then(() => {
            me.getArticles({
                author: username,
                limit : me.countArticles,
                offset: 0
            });
        });
    }
}

Neo.applyClassConfig(ProfileComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X3VzZXJfUHJvZmlsZUNvbXBvbmVudF9tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRjtBQUNKO0FBQ0Q7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9GQUFTO0FBQ3hDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsaUJBQWlCLHdDQUF3QyxXQUFXLEVBQUU7QUFDdEUsaUJBQWlCO0FBQ2pCLHFCQUFxQiw2Q0FBNkM7QUFDbEUscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIscUJBQXFCLDZCQUE2QjtBQUNsRCxxQkFBcUI7QUFDckI7QUFDQSxjQUFjO0FBQ2QsYUFBYTtBQUNiLGlCQUFpQiwyQkFBMkI7QUFDNUMsaUJBQWlCLGlDQUFpQztBQUNsRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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anMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL1ByZXZpZXdDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy91c2VyL1Byb2ZpbGVDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgUHJldmlld0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5hcnRpY2xlLlByZXZpZXdDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYXV0aG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhdXRob3JfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9WydhcnRpY2xlLXByZXZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWydhcnRpY2xlLXByZXZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElTTyA4NjAxIHRpbWVzdGFtcFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY3JlYXRlZEF0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVkQXRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRlc2NyaXB0aW9uXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkZXNjcmlwdGlvbl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmYXZvcml0ZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBmYXZvcml0ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBmYXZvcml0ZXNDb3VudF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmF2b3JpdGVzQ291bnRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNsdWdfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNsdWdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gdGFnTGlzdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdGl0bGVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRpdGxlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VySW1hZ2VfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJJbWFnZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2FydGljbGUtbWV0YSddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWcgOiAnYScsIGZsYWc6ICd1c2VySW1hZ2VMaW5rJywgY246IFt7dGFnOiAnaW1nJ31dfSxcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ2luZm8nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCAgICBjbHM6IFsnYXV0aG9yJ10sIGZsYWc6ICdhdXRob3InfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnZGF0ZSddLCAgIGZsYWc6ICdjcmVhdGVkQXQnfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdwdWxsLXhzLXJpZ2h0J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi1oZWFydCddfSxcbiAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICdmYXZvcml0ZXNDb3VudCd9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAge3RhZzogJ2EnLCBjbHMgOiBbJ3ByZXZpZXctbGluayddLCBmbGFnOiAncHJldmlldy1saW5rJywgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnaDEnLCAgIGZsYWc6ICd0aXRsZSd9LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgICAgZmxhZzogJ2Rlc2NyaXB0aW9uJ30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBodG1sOiAnUmVhZCBtb3JlLi4uJ31cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5hZGREb21MaXN0ZW5lcnMoe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogbWUub25GYXZvcml0ZUJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLnB1bGwteHMtcmlnaHQnLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGF1dGhvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBdXRob3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYXV0aG9yJyksXG4gICAgICAgICAgICBocmVmID0gJyMvcHJvZmlsZS8nICsgdmFsdWU7XG5cbiAgICAgICAgbm9kZS5ocmVmID0gaHJlZjtcbiAgICAgICAgbm9kZS5odG1sID0gdmFsdWU7XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd1c2VySW1hZ2VMaW5rJykuaHJlZiA9IGhyZWY7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjcmVhdGVkQXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3JlYXRlZEF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodGhpcy52ZG9tLCAnY3JlYXRlZEF0JykuaHRtbCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGVzY3JpcHRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGVzY3JpcHRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh0aGlzLnZkb20sICdkZXNjcmlwdGlvbicpLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZhdm9yaXRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZhdm9yaXRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidXR0b24gPSBtZS52ZG9tLmNuWzBdLmNuWzJdO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChidXR0b24uY2xzLCB2YWx1ZSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xuICAgICAgICBOZW9BcnJheS5yZW1vdmUoYnV0dG9uLmNscywgdmFsdWUgPyAnYnRuLW91dGxpbmUtcHJpbWFyeScgOiAnYnRuLXByaW1hcnknKTtcblxuICAgICAgICBtZS51cGRhdGUoKTtcblxuICAgICAgICAvLyBpZ25vcmUgdGhlIGluaXRpYWwgc2V0dGVyIGNhbGxcbiAgICAgICAgaWYgKE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuZmF2b3JpdGVBcnRpY2xlKG1lLnNsdWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmF2b3JpdGVzQ291bnQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmF2b3JpdGVzQ291bnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh0aGlzLnZkb20sICdmYXZvcml0ZXNDb3VudCcpLmh0bWwgPSAnICcgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNsdWcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2x1Zyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ3ByZXZpZXctbGluaycpLmhyZWYgPSAnIy9hcnRpY2xlLycgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ0xpc3QgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ0xpc3QodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgdGFnTGlzdDtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhZ3MgaWYgZXhpc3RzXG4gICAgICAgIGlmICh2ZG9tLmNuWzFdLmNuWzNdKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZ0xpc3QgPSB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyd0YWctbGlzdCddLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGFnTGlzdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyd0YWctZGVmYXVsdCcsICd0YWctcGlsbCcsICd0YWctb3V0bGluZSddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnB1c2godGFnTGlzdCk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aXRsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaXRsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ3RpdGxlJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlckltYWdlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZXJJbWFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ3VzZXJJbWFnZUxpbmsnKS5jblswXS5zcmMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmF2b3JpdGVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmF2b3JpdGVkID0gIW1lLmZhdm9yaXRlZDtcblxuICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgZmF2b3JpdGVkLFxuICAgICAgICAgICAgZmF2b3JpdGVzQ291bnQ6IGZhdm9yaXRlZCA/IChtZS5mYXZvcml0ZXNDb3VudCArIDEpIDogKG1lLmZhdm9yaXRlc0NvdW50IC0gMSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQcmV2aWV3Q29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0NvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBQcmV2aWV3Q29tcG9uZW50IGZyb20gJy4uL2FydGljbGUvUHJldmlld0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy51c2VyLlByb2ZpbGVDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBQcm9maWxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LnVzZXIuUHJvZmlsZUNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcudXNlci5Qcm9maWxlQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGFydGljbGVQcmV2aWV3c189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYXJ0aWNsZVByZXZpZXdzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBiYXNlQ2xzPVsncHJvZmlsZS1wYWdlJ11cbiAgICAgICAgICovXG4gICAgICAgIGJhc2VDbHM6IFsncHJvZmlsZS1wYWdlJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYmlvXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBiaW9fOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudEFydGljbGVzXz01XG4gICAgICAgICAqL1xuICAgICAgICBjb3VudEFydGljbGVzXzogNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW58bnVsbH0gZm9sbG93aW5nXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmb2xsb3dpbmdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGltYWdlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBteVByb2ZpbGVfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBteVByb2ZpbGVfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudFtdfSBwcmV2aWV3Q29tcG9uZW50cz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmlld0NvbXBvbmVudHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVzZXJuYW1lXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1c2VybmFtZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ3VzZXItaW5mbyddLCBjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsncm93J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC14cy0xMicsICdjb2wtbWQtMTAnLCAnb2Zmc2V0LW1kLTEnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaW1nJywgY2xzOiBbJ3VzZXItaW1nJ10sIGZsYWc6ICdpbWFnZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdoNCcsIGZsYWc6ICd1c2VybmFtZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgZmxhZzogJ2Jpbyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1zZWNvbmRhcnknLCAnYWN0aW9uLWJ0bicsICdmb2xsb3ctYnV0dG9uJ10sIGZsYWc6ICdmb2xsb3dpbmcnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24tcGx1cy1yb3VuZCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdhY3Rpb24tYnRuJ10sIGZsYWc6ICdlZGl0LXByb2ZpbGUnLCBocmVmOiAnIy9zZXR0aW5ncycsIHJlbW92ZURvbTogdHJ1ZSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLWdlYXItYSddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcgRWRpdCBQcm9maWxlIFNldHRpbmdzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsncm93J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY29sLXhzLTEyJywgJ2NvbC1tZC0xMCcsICdvZmZzZXQtbWQtMSddLCBmbGFnOiAnZmVlZC1jb250YWluZXInLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydhcnRpY2xlcy10b2dnbGUnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndWwnLCBjbHM6IFsnbmF2JywgJ25hdi1waWxscycsICdvdXRsaW5lLWFjdGl2ZSddLCBmbGFnOiAnZmVlZC1oZWFkZXInLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzOiBbJ25hdi1saW5rJywgJ3ByZXZlbnQtY2xpY2snLCAnYWN0aXZlJ10sIGhyZWY6ICcnLCBodG1sOiAnTXkgQXJ0aWNsZXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgY2xzOiBbJ25hdi1pdGVtJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWyduYXYtbGluaycsICdwcmV2ZW50LWNsaWNrJ10sIGhyZWY6ICcnLCBodG1sOiAnRmF2b3JpdGVkIEFydGljbGVzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBOZW8ubWFpbi5Eb21FdmVudHMucmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMoe1xuICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgIGNscyA6ICdwcmV2ZW50LWNsaWNrJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFkZERvbUxpc3RlbmVycyhbXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25Gb2xsb3dCdXR0b25DbGljaywgZGVsZWdhdGU6ICcuZm9sbG93LWJ1dHRvbicsIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uTmF2TGlua0NsaWNrLCAgICAgIGRlbGVnYXRlOiAnLm5hdi1saW5rJywgICAgICBzY29wZTogbWV9fVxuICAgICAgICBdKTtcblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkub24oe1xuICAgICAgICAgICAgYWZ0ZXJTZXRDdXJyZW50VXNlcjogbWUub25DdXJyZW50VXNlckNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXJ0aWNsZVByZXZpZXdzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXJ0aWNsZVByZXZpZXdzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IFZEb21VdGlsLmdldEJ5RmxhZyhtZS52ZG9tLCAnZmVlZC1jb250YWluZXInKSxcbiAgICAgICAgICAgIGNvbmZpZztcblxuICAgICAgICBjb250YWluZXIuY24gPSBbY29udGFpbmVyLmNuLnNoaWZ0KCldO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvciAgICAgICAgOiBpdGVtLmF1dGhvci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0ICAgICA6IGl0ZW0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiAgIDogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVkICAgICA6IGl0ZW0uZmF2b3JpdGVkLFxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZXNDb3VudDogaXRlbS5mYXZvcml0ZXNDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgc2x1ZyAgICAgICAgICA6IGl0ZW0uc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgdGFnTGlzdCAgICAgICA6IGl0ZW0udGFnTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgICAgICAgICA6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbWFnZSAgICAgOiBpdGVtLmF1dGhvci5pbWFnZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1lLnByZXZpZXdDb21wb25lbnRzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5wcmV2aWV3Q29tcG9uZW50c1tpbmRleF0gPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgOiBQcmV2aWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnByZXZpZXdDb21wb25lbnRzW2luZGV4XS5zZXQoY29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuY24ucHVzaChtZS5wcmV2aWV3Q29tcG9uZW50c1tpbmRleF0udmRvbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYmlvIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEJpbyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodGhpcy52ZG9tLCAnYmlvJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9sbG93aW5nIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Rm9sbG93aW5nKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ2ZvbGxvd2luZycpO1xuXG4gICAgICAgICAgICAvLyB0b2JpdTogZGlkIG5vdCBzZWUgdGhpcyBvbmUgaW4gdGhlIHNwZWNzLCBidXQgdGhlIHJlYWN0ICYgdnVlIGFwcCBkbyBpdFxuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG5vZGUuY2xzLCB2YWx1ZSA/ICdidG4tb3V0bGluZS1zZWNvbmRhcnknIDogJ2J0bi1zZWNvbmRhcnknKTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgdmFsdWUgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5Jyk7XG5cbiAgICAgICAgICAgIG5vZGUuY25bMF0uY2xzICA9IFt2YWx1ZSA/ICdpb24tbWludXMtcm91bmQnIDogJ2lvbi1wbHVzLXJvdW5kJ107XG4gICAgICAgICAgICBub2RlLmNuWzFdLmh0bWwgPSB2YWx1ZSA/ICcgVW5mb2xsb3cgJyA6ICcgRm9sbG93ICc7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbWFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbWFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ2ltYWdlJykuc3JjID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBteVByb2ZpbGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNeVByb2ZpbGUodmFsdWUsIG9sZFZhbHVlKSB7Y29uc29sZS5sb2coJ2FmdGVyU2V0TXlQcm9maWxlJywgdmFsdWUpO1xuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2VkaXQtcHJvZmlsZScpLnJlbW92ZURvbSA9ICF2YWx1ZTtcbiAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZm9sbG93aW5nJykgICAucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VybmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VybmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdmb2xsb3dpbmcnKS5jblsyXS5odG1sID0gdmFsdWU7XG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndXNlcm5hbWUnKS5odG1sID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgICAqL1xuICAgIGdldEFydGljbGVzKHBhcmFtcykge1xuICAgICAgICB0aGlzLmdldENvbnRyb2xsZXIoKS5nZXRBcnRpY2xlcyhwYXJhbXMpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFydGljbGVQcmV2aWV3cyA9IGRhdGEuanNvbi5hcnRpY2xlcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICovXG4gICAgb25DdXJyZW50VXNlckNoYW5nZSh2YWx1ZSkge2NvbnNvbGUubG9nKCdvbkN1cnJlbnRVc2VyQ2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB0aGlzLm15UHJvZmlsZSA9IHRoaXMudXNlcm5hbWUgPT09IHZhbHVlPy51c2VybmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRm9sbG93QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5mb2xsb3dVc2VyKG1lLnVzZXJuYW1lLCAhbWUuZm9sbG93aW5nKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuZm9sbG93aW5nID0gZGF0YS5qc29uLnByb2ZpbGUuZm9sbG93aW5nO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTmF2TGlua0NsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZWwgICAgICAgICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQobWUudmRvbSwgZGF0YS5wYXRoWzBdLmlkKSxcbiAgICAgICAgICAgIGZlZWRIZWFkZXIgPSBWRG9tVXRpbC5nZXRCeUZsYWcobWUudmRvbSwgJ2ZlZWQtaGVhZGVyJyksXG4gICAgICAgICAgICBwYXJhbXMgICAgID0ge307XG5cbiAgICAgICAgaWYgKCFlbC52ZG9tLmNscy5pbmNsdWRlcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgc3dpdGNoKGVsLnZkb20uaHRtbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Zhdm9yaXRlZCBBcnRpY2xlcyc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlZDogbWUudXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTXkgQXJ0aWNsZXMnOlxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IG1lLnVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmZWVkSGVhZGVyLmNuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXlbaXRlbS5pZCA9PT0gZWwucGFyZW50Tm9kZS5pZCA/ICdhZGQnIDogJ3JlbW92ZSddKGl0ZW0uY25bMF0uY2xzLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIG1lLmdldEFydGljbGVzKHtcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgbGltaXQgOiBtZS5jb3VudEFydGljbGVzLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnc1xuICAgICAqL1xuICAgIHVwZGF0ZUNvbnRlbnQoY29uZmlncykge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdXNlcm5hbWUgPSBjb25maWdzLnVzZXJuYW1lO1xuXG4gICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICBiaW8gICAgICA6IGNvbmZpZ3MuYmlvLFxuICAgICAgICAgICAgZm9sbG93aW5nOiBjb25maWdzLmZvbGxvd2luZyxcbiAgICAgICAgICAgIGltYWdlICAgIDogY29uZmlncy5pbWFnZSxcbiAgICAgICAgICAgIG15UHJvZmlsZTogY29uZmlncy5teVByb2ZpbGUsXG4gICAgICAgICAgICB1c2VybmFtZSA6IHVzZXJuYW1lXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUuZ2V0QXJ0aWNsZXMoe1xuICAgICAgICAgICAgICAgIGF1dGhvcjogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgbGltaXQgOiBtZS5jb3VudEFydGljbGVzLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUHJvZmlsZUNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb21wb25lbnQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_user_ProfileComponent_mjs"],{

/***/ "./apps/realworld/view/article/PreviewComponent.mjs":
/*!**********************************************************!*\
  !*** ./apps/realworld/view/article/PreviewComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreviewComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class RealWorld.view.article.PreviewComponent
 * @extends Neo.component.Base
 */
class PreviewComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
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
         * @member {String[]} cls=['article-preview']
         */
        cls: ['article-preview'],
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
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push({
            click: {
                fn      : me.onFavoriteButtonClick,
                delegate: '.pull-xs-right',
                scope   : me
            }
        });

        me.domListeners = domListeners;
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

        this.vdom = vdom;
    }

    /**
     * Triggered after the createdAt config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetCreatedAt(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'createdAt').html = new Intl.DateTimeFormat('en-US', {
            day  : 'numeric',
            month: 'long',
            year : 'numeric'
        }).format(new Date(value));

        this.vdom = vdom;
    }

    /**
     * Triggered after the description config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetDescription(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'description').html = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the favorited config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFavorited(value, oldValue) {
        let me     = this,
            vdom   = me.vdom,
            button = vdom.cn[0].cn[2];

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(button.cls, value ? 'btn-primary' : 'btn-outline-primary');
        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(button.cls, value ? 'btn-outline-primary' : 'btn-primary');

        me.vdom = vdom;

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
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'favoritesCount').html = ' ' + value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the slug config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetSlug(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'preview-link').href = '#/article/' + value;
        this.vdom = vdom;
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

            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the title config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTitle(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'title').html = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the userImage config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserImage(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getByFlag(vdom, 'userImageLink').cn[0].src = value;
        this.vdom = vdom;
    }

    /**
     * @param {Object} data
     */
    onFavoriteButtonClick(data) {
        let me        = this,
            favorited = !me.favorited;

        me.set({
            favorited     : favorited,
            favoritesCount: favorited ? (me.favoritesCount + 1) : (me.favoritesCount - 1)
        });
    }
}

Neo.applyClassConfig(PreviewComponent);




/***/ }),

/***/ "./apps/realworld/view/user/ProfileComponent.mjs":
/*!*******************************************************!*\
  !*** ./apps/realworld/view/user/ProfileComponent.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfileComponent)
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
    static getConfig() {return {
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
         * @member {String|null} bio_=null
         */
        bio_: null,
        /**
         * @member {String[]} cls=['profile-page']
         */
        cls: ['profile-page'],
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
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        Neo.main.DomEvents.registerPreventDefaultTargets({
            name: 'click',
            cls : 'prevent-click'
        });

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push(
            {click: {fn: me.onFollowButtonClick, delegate: '.follow-button', scope: me}},
            {click: {fn: me.onNavLinkClick,      delegate: '.nav-link',      scope: me}}
        );

        me.domListeners = domListeners;

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
            vdom      = me.vdom,
            container = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'feed-container'),
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

        me.vdom = vdom;
    }

    /**
     * Triggered after the bio config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBio(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'bio').html = value;
            this.vdom = vdom;
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
            let vdom = this.vdom,
                node = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'following');

            // tobiu: did not see this one in the specs, but the react & vue app do it
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(node.cls, value ? 'btn-outline-secondary' : 'btn-secondary');
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(node.cls, value ? 'btn-secondary' : 'btn-outline-secondary');

            node.cn[0].cls  = [value ? 'ion-minus-round' : 'ion-plus-round'];
            node.cn[1].html = value ? ' Unfollow ' : ' Follow ';
            this.vdom = vdom;
        }
    }

    /**
     * Triggered after the image config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetImage(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'image').src = value;
        this.vdom = vdom;
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
            this.vdom = vdom;
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
        this.vdom = vdom;
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
            vdom       = me.vdom,
            el         = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].findVdomChild(vdom, data.path[0].id),
            feedHeader = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'feed-header'),
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

            me.vdom = vdom;

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
    update(configs) {
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X3VzZXJfUHJvZmlsZUNvbXBvbmVudF9tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRjtBQUNKO0FBQ0Q7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9GQUFTO0FBQ3hDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUIsd0NBQXdDLFdBQVcsRUFBRTtBQUN0RSxpQkFBaUI7QUFDakIscUJBQXFCLDZDQUE2QztBQUNsRSxxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQixxQkFBcUIsNkJBQTZCO0FBQ2xELHFCQUFxQjtBQUNyQjtBQUNBLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCLDJCQUEyQjtBQUM1QyxpQkFBaUIsaUNBQWlDO0FBQ2xELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9QcmV2aWV3Q29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvdXNlci9Qcm9maWxlQ29tcG9uZW50Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFByZXZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5hcnRpY2xlLlByZXZpZXdDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYXV0aG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhdXRob3JfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2FydGljbGUtcHJldmlldyddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnYXJ0aWNsZS1wcmV2aWV3J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJU08gODYwMSB0aW1lc3RhbXBcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGNyZWF0ZWRBdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlZEF0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBkZXNjcmlwdGlvbl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGVzY3JpcHRpb25fOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZmF2b3JpdGVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZmF2b3JpdGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gZmF2b3JpdGVzQ291bnRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZhdm9yaXRlc0NvdW50XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBzbHVnXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzbHVnXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IHRhZ0xpc3RfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhZ0xpc3RfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHRpdGxlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0aXRsZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdXNlckltYWdlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1c2VySW1hZ2VfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHtjbjogW1xuICAgICAgICAgICAge2NsczogWydhcnRpY2xlLW1ldGEnXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnIDogJ2EnLCBmbGFnOiAndXNlckltYWdlTGluaycsIGNuOiBbe3RhZzogJ2ltZyd9XX0sXG4gICAgICAgICAgICAgICAge2NsczogWydpbmZvJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgICAgY2xzOiBbJ2F1dGhvciddLCBmbGFnOiAnYXV0aG9yJ30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ2RhdGUnXSwgICBmbGFnOiAnY3JlYXRlZEF0J31cbiAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tc20nLCAncHVsbC14cy1yaWdodCddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24taGVhcnQnXX0sXG4gICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBmbGFnOiAnZmF2b3JpdGVzQ291bnQnfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzIDogWydwcmV2aWV3LWxpbmsnXSwgZmxhZzogJ3ByZXZpZXctbGluaycsIGNuOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ2gxJywgICBmbGFnOiAndGl0bGUnfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAncCcsICAgIGZsYWc6ICdkZXNjcmlwdGlvbid9LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgaHRtbDogJ1JlYWQgbW9yZS4uLid9XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgIGZuICAgICAgOiBtZS5vbkZhdm9yaXRlQnV0dG9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcucHVsbC14cy1yaWdodCcsXG4gICAgICAgICAgICAgICAgc2NvcGUgICA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGF1dGhvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBdXRob3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYXV0aG9yJyksXG4gICAgICAgICAgICBocmVmID0gJyMvcHJvZmlsZS8nICsgdmFsdWU7XG5cbiAgICAgICAgbm9kZS5ocmVmID0gaHJlZjtcbiAgICAgICAgbm9kZS5odG1sID0gdmFsdWU7XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd1c2VySW1hZ2VMaW5rJykuaHJlZiA9IGhyZWY7XG5cbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNyZWF0ZWRBdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDcmVhdGVkQXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnY3JlYXRlZEF0JykuaHRtbCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcblxuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGVzY3JpcHRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGVzY3JpcHRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZGVzY3JpcHRpb24nKS5odG1sID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmYXZvcml0ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGYXZvcml0ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGJ1dHRvbiA9IHZkb20uY25bMF0uY25bMl07XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGJ1dHRvbi5jbHMsIHZhbHVlID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShidXR0b24uY2xzLCB2YWx1ZSA/ICdidG4tb3V0bGluZS1wcmltYXJ5JyA6ICdidG4tcHJpbWFyeScpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIC8vIGlnbm9yZSB0aGUgaW5pdGlhbCBzZXR0ZXIgY2FsbFxuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5mYXZvcml0ZUFydGljbGUobWUuc2x1ZywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmYXZvcml0ZXNDb3VudCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGYXZvcml0ZXNDb3VudCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdmYXZvcml0ZXNDb3VudCcpLmh0bWwgPSAnICcgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNsdWcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2x1Zyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdwcmV2aWV3LWxpbmsnKS5ocmVmID0gJyMvYXJ0aWNsZS8nICsgdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0YWdMaXN0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUYWdMaXN0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIHRhZ0xpc3Q7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCB0YWdzIGlmIGV4aXN0c1xuICAgICAgICBpZiAodmRvbS5jblsxXS5jblszXSkge1xuICAgICAgICAgICAgdmRvbS5jblsxXS5jbi5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YWdMaXN0ID0ge1xuICAgICAgICAgICAgICAgIHRhZzogJ3VsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsndGFnLWxpc3QnXSxcbiAgICAgICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRhZ0xpc3QuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZyA6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGNscyA6IFsndGFnLWRlZmF1bHQnLCAndGFnLXBpbGwnLCAndGFnLW91dGxpbmUnXSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS5jbi5wdXNoKHRhZ0xpc3QpO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGl0bGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGl0bGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndGl0bGUnKS5odG1sID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VySW1hZ2UgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlckltYWdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3VzZXJJbWFnZUxpbmsnKS5jblswXS5zcmMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmF2b3JpdGVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmF2b3JpdGVkID0gIW1lLmZhdm9yaXRlZDtcblxuICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgZmF2b3JpdGVkICAgICA6IGZhdm9yaXRlZCxcbiAgICAgICAgICAgIGZhdm9yaXRlc0NvdW50OiBmYXZvcml0ZWQgPyAobWUuZmF2b3JpdGVzQ291bnQgKyAxKSA6IChtZS5mYXZvcml0ZXNDb3VudCAtIDEpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUHJldmlld0NvbXBvbmVudCk7XG5cbmV4cG9ydCB7UHJldmlld0NvbXBvbmVudCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb21wb25lbnQgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBQcmV2aWV3Q29tcG9uZW50IGZyb20gJy4uL2FydGljbGUvUHJldmlld0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy51c2VyLlByb2ZpbGVDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBQcm9maWxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcudXNlci5Qcm9maWxlQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy51c2VyLlByb2ZpbGVDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gYXJ0aWNsZVByZXZpZXdzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhcnRpY2xlUHJldmlld3NfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJpb189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYmlvXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydwcm9maWxlLXBhZ2UnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3Byb2ZpbGUtcGFnZSddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudEFydGljbGVzXz01XG4gICAgICAgICAqL1xuICAgICAgICBjb3VudEFydGljbGVzXzogNSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW58bnVsbH0gZm9sbG93aW5nXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmb2xsb3dpbmdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGltYWdlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBteVByb2ZpbGVfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBteVByb2ZpbGVfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudFtdfSBwcmV2aWV3Q29tcG9uZW50cz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmlld0NvbXBvbmVudHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVzZXJuYW1lXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1c2VybmFtZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ3VzZXItaW5mbyddLCBjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsncm93J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC14cy0xMicsICdjb2wtbWQtMTAnLCAnb2Zmc2V0LW1kLTEnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaW1nJywgY2xzOiBbJ3VzZXItaW1nJ10sIGZsYWc6ICdpbWFnZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdoNCcsIGZsYWc6ICd1c2VybmFtZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgZmxhZzogJ2Jpbyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1zZWNvbmRhcnknLCAnYWN0aW9uLWJ0bicsICdmb2xsb3ctYnV0dG9uJ10sIGZsYWc6ICdmb2xsb3dpbmcnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24tcGx1cy1yb3VuZCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdhY3Rpb24tYnRuJ10sIGZsYWc6ICdlZGl0LXByb2ZpbGUnLCBocmVmOiAnIy9zZXR0aW5ncycsIHJlbW92ZURvbTogdHJ1ZSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLWdlYXItYSddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcgRWRpdCBQcm9maWxlIFNldHRpbmdzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsncm93J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY29sLXhzLTEyJywgJ2NvbC1tZC0xMCcsICdvZmZzZXQtbWQtMSddLCBmbGFnOiAnZmVlZC1jb250YWluZXInLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydhcnRpY2xlcy10b2dnbGUnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndWwnLCBjbHM6IFsnbmF2JywgJ25hdi1waWxscycsICdvdXRsaW5lLWFjdGl2ZSddLCBmbGFnOiAnZmVlZC1oZWFkZXInLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzOiBbJ25hdi1saW5rJywgJ3ByZXZlbnQtY2xpY2snLCAnYWN0aXZlJ10sIGhyZWY6ICcnLCBodG1sOiAnTXkgQXJ0aWNsZXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgY2xzOiBbJ25hdi1pdGVtJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWyduYXYtbGluaycsICdwcmV2ZW50LWNsaWNrJ10sIGhyZWY6ICcnLCBodG1sOiAnRmF2b3JpdGVkIEFydGljbGVzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tRXZlbnRzLnJlZ2lzdGVyUHJldmVudERlZmF1bHRUYXJnZXRzKHtcbiAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICBjbHMgOiAncHJldmVudC1jbGljaydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25Gb2xsb3dCdXR0b25DbGljaywgZGVsZWdhdGU6ICcuZm9sbG93LWJ1dHRvbicsIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uTmF2TGlua0NsaWNrLCAgICAgIGRlbGVnYXRlOiAnLm5hdi1saW5rJywgICAgICBzY29wZTogbWV9fVxuICAgICAgICApO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkub24oe1xuICAgICAgICAgICAgYWZ0ZXJTZXRDdXJyZW50VXNlcjogbWUub25DdXJyZW50VXNlckNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXJ0aWNsZVByZXZpZXdzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXJ0aWNsZVByZXZpZXdzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjb250YWluZXIgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZlZWQtY29udGFpbmVyJyksXG4gICAgICAgICAgICBjb25maWc7XG5cbiAgICAgICAgY29udGFpbmVyLmNuID0gW2NvbnRhaW5lci5jbi5zaGlmdCgpXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBhdXRob3IgICAgICAgIDogaXRlbS5hdXRob3IudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdCAgICAgOiBpdGVtLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gICA6IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlZCAgICAgOiBpdGVtLmZhdm9yaXRlZCxcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVzQ291bnQ6IGl0ZW0uZmF2b3JpdGVzQ291bnQsXG4gICAgICAgICAgICAgICAgICAgIHNsdWcgICAgICAgICAgOiBpdGVtLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgIHRhZ0xpc3QgICAgICAgOiBpdGVtLnRhZ0xpc3QsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlICAgICAgICAgOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB1c2VySW1hZ2UgICAgIDogaXRlbS5hdXRob3IuaW1hZ2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5wcmV2aWV3Q29tcG9uZW50c1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWUucHJldmlld0NvbXBvbmVudHNbaW5kZXhdID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgIDogUHJldmlld0NvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5wcmV2aWV3Q29tcG9uZW50c1tpbmRleF0uc2V0KGNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNuLnB1c2gobWUucHJldmlld0NvbXBvbmVudHNbaW5kZXhdLnZkb20pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGJpbyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRCaW8odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYmlvJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZm9sbG93aW5nIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Rm9sbG93aW5nKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tLFxuICAgICAgICAgICAgICAgIG5vZGUgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZvbGxvd2luZycpO1xuXG4gICAgICAgICAgICAvLyB0b2JpdTogZGlkIG5vdCBzZWUgdGhpcyBvbmUgaW4gdGhlIHNwZWNzLCBidXQgdGhlIHJlYWN0ICYgdnVlIGFwcCBkbyBpdFxuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG5vZGUuY2xzLCB2YWx1ZSA/ICdidG4tb3V0bGluZS1zZWNvbmRhcnknIDogJ2J0bi1zZWNvbmRhcnknKTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgdmFsdWUgPyAnYnRuLXNlY29uZGFyeScgOiAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5Jyk7XG5cbiAgICAgICAgICAgIG5vZGUuY25bMF0uY2xzICA9IFt2YWx1ZSA/ICdpb24tbWludXMtcm91bmQnIDogJ2lvbi1wbHVzLXJvdW5kJ107XG4gICAgICAgICAgICBub2RlLmNuWzFdLmh0bWwgPSB2YWx1ZSA/ICcgVW5mb2xsb3cgJyA6ICcgRm9sbG93ICc7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbWFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbWFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdpbWFnZScpLnNyYyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbXlQcm9maWxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TXlQcm9maWxlKHZhbHVlLCBvbGRWYWx1ZSkge2NvbnNvbGUubG9nKCdhZnRlclNldE15UHJvZmlsZScsIHZhbHVlKTtcbiAgICAgICAgaWYgKE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdlZGl0LXByb2ZpbGUnKS5yZW1vdmVEb20gPSAhdmFsdWU7XG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZvbGxvd2luZycpICAgLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlcm5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlcm5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZm9sbG93aW5nJykuY25bMl0uaHRtbCA9IHZhbHVlO1xuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3VzZXJuYW1lJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKi9cbiAgICBnZXRBcnRpY2xlcyhwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5nZXRDb250cm9sbGVyKCkuZ2V0QXJ0aWNsZXMocGFyYW1zKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnRpY2xlUHJldmlld3MgPSBkYXRhLmpzb24uYXJ0aWNsZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ3VycmVudFVzZXJDaGFuZ2UodmFsdWUpIHtjb25zb2xlLmxvZygnb25DdXJyZW50VXNlckNoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5teVByb2ZpbGUgPSB0aGlzLnVzZXJuYW1lID09PSB2YWx1ZT8udXNlcm5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZvbGxvd0J1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuZm9sbG93VXNlcihtZS51c2VybmFtZSwgIW1lLmZvbGxvd2luZykudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmZvbGxvd2luZyA9IGRhdGEuanNvbi5wcm9maWxlLmZvbGxvd2luZztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk5hdkxpbmtDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgZWwgICAgICAgICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmRvbSwgZGF0YS5wYXRoWzBdLmlkKSxcbiAgICAgICAgICAgIGZlZWRIZWFkZXIgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZlZWQtaGVhZGVyJyksXG4gICAgICAgICAgICBwYXJhbXMgICAgID0ge307XG5cbiAgICAgICAgaWYgKCFlbC52ZG9tLmNscy5pbmNsdWRlcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgc3dpdGNoKGVsLnZkb20uaHRtbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Zhdm9yaXRlZCBBcnRpY2xlcyc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlZDogbWUudXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTXkgQXJ0aWNsZXMnOlxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IG1lLnVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmZWVkSGVhZGVyLmNuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXlbaXRlbS5pZCA9PT0gZWwucGFyZW50Tm9kZS5pZCA/ICdhZGQnIDogJ3JlbW92ZSddKGl0ZW0uY25bMF0uY2xzLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgIG1lLmdldEFydGljbGVzKHtcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgbGltaXQgOiBtZS5jb3VudEFydGljbGVzLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnc1xuICAgICAqL1xuICAgIHVwZGF0ZShjb25maWdzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB1c2VybmFtZSA9IGNvbmZpZ3MudXNlcm5hbWU7XG5cbiAgICAgICAgbWUuc2V0KHtcbiAgICAgICAgICAgIGJpbyAgICAgIDogY29uZmlncy5iaW8sXG4gICAgICAgICAgICBmb2xsb3dpbmc6IGNvbmZpZ3MuZm9sbG93aW5nLFxuICAgICAgICAgICAgaW1hZ2UgICAgOiBjb25maWdzLmltYWdlLFxuICAgICAgICAgICAgbXlQcm9maWxlOiBjb25maWdzLm15UHJvZmlsZSxcbiAgICAgICAgICAgIHVzZXJuYW1lIDogdXNlcm5hbWVcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5nZXRBcnRpY2xlcyh7XG4gICAgICAgICAgICAgICAgYXV0aG9yOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBsaW1pdCA6IG1lLmNvdW50QXJ0aWNsZXMsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQcm9maWxlQ29tcG9uZW50KTtcblxuZXhwb3J0IHtQcm9maWxlQ29tcG9uZW50IGFzIGRlZmF1bHR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
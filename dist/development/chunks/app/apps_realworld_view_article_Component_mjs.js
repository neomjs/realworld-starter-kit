"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_article_Component_mjs"],{

/***/ "./apps/realworld/view/article/Component.mjs":
/*!***************************************************!*\
  !*** ./apps/realworld/view/article/Component.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _CreateCommentComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCommentComponent.mjs */ "./apps/realworld/view/article/CreateCommentComponent.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");





/**
 * @class RealWorld.view.article.Component
 * @extends Neo.component.Base
 */
class Component extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.article.Component'
         * @protected
         */
        className: 'RealWorld.view.article.Component',
        /**
         * @member {Object|null} author_=null
         */
        author_: null,
        /**
         * @member {String[]} baseCls=['article-page']
         */
        baseCls: ['article-page'],
        /**
         * @member {String|null} body_=null
         */
        body_: null,
        /**
         * We store the lazy loaded class here
         * @member {RealWorld.view.article.CommentComponent} commentComponent=null
         * @protected
         */
        commentComponent: null,
        /**
         * @member {RealWorld.view.article.CommentComponent[]} commentComponents=[]
         */
        commentComponents: [],
        /**
         * @member {Object[]|null} comments_=null
         */
        comments_: null,
        /**
         * @member {RealWorld.view.article.CreateCommentComponent|null} createCommentComponent=null
         */
        createCommentComponent: null,
        /**
         * @member {String|null} createdAt_=null
         */
        createdAt_: null,
        /**
         * @member {Boolean} favorited_=false
         */
        favorited_: false,
        /**
         * @member {Number|null} favoritesCount_=null
         */
        favoritesCount_: null,
        /**
         * @member {Array|null} tagList_=null
         */
        tagList_: null,
        /**
         * @member {String|null} title_=null
         */
        title_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['banner'], cn: [
                {cls: ['container'], cn: [
                    {tag: 'h1', flag: 'title'},
                    {cls: ['article-meta'], cn: [
                        {tag: 'a', flag: 'userimage', cn: [
                            {tag: 'img'}
                        ]},
                        {cls: ['info'], cn: [
                            {tag: 'a', cls: ['author'], flag: 'username'},
                            {tag: 'span', cls: ['date'], flag: 'createdAt'}
                        ]},
                        {tag: 'button', cls: ['btn', 'btn-sm', 'btn-outline-secondary', 'follow-button'], cn: [
                            {tag: 'i', flag: 'followIcon'},
                            {vtype: 'text', flag: 'followAuthor'},
                            {vtype: 'text', flag: 'username'}
                        ]},
                        {tag: 'button', cls: ['btn', 'btn-sm', 'btn-outline-secondary', 'edit-button'], flag: 'edit-button', removeDom: true, cn: [
                            {tag: 'i', cls: ['ion-edit']},
                            {vtype: 'text', html: ' Edit Article'}
                        ]},
                        {vtype: 'text', html: '&nbsp;&nbsp;'},
                        {tag: 'button', cls: ['btn', 'btn-sm', 'btn-outline-primary', 'favorite-button'], flag: 'favorited', cn: [
                            {tag: 'i', cls: ['ion-heart']},
                            {vtype: 'text', html: '&nbsp;'},
                            {vtype: 'text'},
                            {vtype: 'text', html: ' Post '},
                            {tag: 'span', cls: ['counter'], flag: 'favoritesCount'}
                        ]},
                        {tag: 'button', cls: ['btn', 'btn-sm', 'btn-outline-danger', 'delete-button'], flag: 'delete-button', removeDom: true, cn: [
                            {tag: 'i', cls: ['ion-trash-a']},
                            {vtype: 'text', html: ' Delete Article'}
                        ]}
                    ]}
                ]}
            ]},
            {cls: ['container', 'page'], cn: [
                {cls: ['row', 'article-content'], cn: [
                    {cls: ['col-md-12'], flag: 'body', cn: []}
                ]},
                {tag: 'hr'},
                {cls: ['article-actions'], flag: 'article-actions', cn: [
                    {cls: ['article-meta'], cn: [
                        {tag: 'a', flag: 'userimage', cn: [{tag: 'img'}]},
                        {cls: ['info'], cn: [
                            {tag: 'a', cls: ['author'], flag: 'username'},
                            {tag: 'span', cls: ['date'], html: 'January 20th'}
                        ]},
                        {tag: 'button', cls: ['btn', 'btn-sm', 'btn-outline-secondary', 'follow-button'], cn: [
                            {tag: 'i', flag: 'followIcon'},
                            {vtype: 'text', flag: 'followAuthor'},
                            {vtype: 'text', flag: 'username'}
                        ]},
                        {vtype: 'text', html: '&nbsp;&nbsp;'},
                        {tag: 'button', cls: ['btn', 'btn-sm', 'btn-outline-primary', 'favorite-button'], flag: 'favorited', cn: [
                            {tag: 'i', cls: ['ion-heart']},
                            {vtype: 'text', html: '&nbsp;'},
                            {vtype: 'text'},
                            {vtype: 'text', html: ' Post '},
                            {tag: 'span', cls: ['counter'], flag: 'favoritesCount'}
                        ]}
                    ]}
                ]},
                {cls: 'row', cn: [
                    {cls: ['col-xs-12', 'col-md-8', 'offset-md-2'], flag: 'comments-section', cn: []}
                ]}
            ]}
        ]}
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.addDomListeners([
            {click: {fn: me.onDeleteButtonClick,   delegate: '.delete-button',   scope: me}},
            {click: {fn: me.onEditButtonClick,     delegate: '.edit-button',     scope: me}},
            {click: {fn: me.onFavoriteButtonClick, delegate: '.favorite-button', scope: me}},
            {click: {fn: me.onFollowButtonClick,   delegate: '.follow-button',   scope: me}}
        ]);

        me.getController().on({
            afterSetCurrentUser: me.onCurrentUserChange,
            scope              : me
        });
    }

    /**
     *
     */
    onConstructed() {
        let me          = this,
            currentUser = me.getController().currentUser;

        me.createCommentComponent = Neo.create({
            module   : _CreateCommentComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            parentId : me.id,
            userImage: currentUser?.image || null
        });

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(me.vdom, 'comments-section').cn.unshift(me.createCommentComponent.vdom);
        me.update();

        super.onConstructed();
    }

    /**
     * Triggered after the author config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetAuthor(value, oldValue) {
        if (value) {
            let me   = this,
                vdom = me.vdom;

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(vdom, 'followAuthor').forEach(node => {
                node.html = value.following ? ' Unfollow ' : ' Follow ';
            });

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(vdom, 'followIcon').forEach(node => {
                node.cls = value.following ? ['ion-minus-round'] : ['ion-plus-round'];
            });

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(vdom, 'userimage').forEach(node => {
                node.href = '#/profile/' + value.username;
                node.cn[0].src = value.image;
            });

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(vdom, 'username').forEach(node => {
                node.href = '#/profile/' + value.username;
                node.html = value.username;
            });

            me.update();
            me.onCurrentUserChange();
        }
    }

    /**
     * Triggered after the body config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBody(value, oldValue) {
        if (value) {
            Neo.main.addon.Markdown.markdownToHtml(value).then(html => {
                _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(this.vdom, 'body').cn[0] = {
                    cn: [{
                        tag: 'p',
                        html
                    }]
                };

                this.update();
            });
        }
    }

    /**
     * Triggered after the comments config got changed
     * @param {Object[]|null} value
     * @param {Object[]|null} oldValue
     * @protected
     */
    async afterSetComments(value, oldValue) {
        if (Array.isArray(value)) {
            let me        = this,
                container = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(me.vdom, 'comments-section'),
                config, module;

            if (!me.commentComponent) {
                module = await __webpack_require__.e(/*! import() */ "apps_realworld_view_article_CommentComponent_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./CommentComponent.mjs */ "./apps/realworld/view/article/CommentComponent.mjs"));
                me.commentComponent = module.default;
            }

            container.cn = [container.cn.shift()]; // keep the CreateCommentComponent

            value.forEach((item, index) => {
                config = {
                    author   : item.author,
                    body     : item.body,
                    commentId: item.id,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt
                };

                if (!me.commentComponents[index]) {
                    me.commentComponents[index] = Neo.create({
                        module  : me.commentComponent,
                        parentId: me.id,
                        ...config
                    });
                } else {
                    me.commentComponents[index].set(config, true);
                }

                container.cn.push(me.commentComponents[index].vdom);
            });

            me.update();
        }
    }

    /**
     * Triggered after the createdAt config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetCreatedAt(value, oldValue) {
        if (value) {
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(this.vdom, 'createdAt').html = new Intl.DateTimeFormat('en-US', {
                day  : 'numeric',
                month: 'long',
                year : 'numeric'
            }).format(new Date(value));

            this.update();
        }
    }

    /**
     * Triggered after the favorited config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFavorited(value, oldValue) {
        let me = this;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(me.vdom, 'favorited').forEach(node => {
            node.cn[2].html = value ? 'Unfavorite' : 'Favorite';

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(node.cls, value ? 'btn-primary' : 'btn-outline-primary');
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(node.cls, value ? 'btn-outline-primary' : 'btn-primary');
        });

        me.update();

        // ignore the initial setter call
        if (Neo.isBoolean(oldValue)) {
            me.getController().favoriteArticle(me.slug, value).then(data => {
                me.favoritesCount = data.json.article.favoritesCount;
            });
        }
    }

    /**
     * Triggered after the favoritesCount config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFavoritesCount(value, oldValue) {
        if (Neo.isNumber(value)) {
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(this.vdom, 'favoritesCount').forEach(node => {
                node.html = `(${value})`;
            });

            this.update();
        }
    }

    /**
     * Triggered after the tagList config got changed
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetTagList(value, oldValue) {
        let me   = this,
            body = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(me.vdom, 'body'),
            tagList;

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

            body.cn[1] = tagList;
        } else {
            if (body.cn[1]) {
                body.cn[1].removeDom = true;
            }
        }

        me.update();
    }

    /**
     * Triggered after the title config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTitle(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(this.vdom, 'title').html = value;
        this.update();
    }

    /**
     *
     */
    onCurrentUserChange() {console.log('### onCurrentUserChange');
        let me          = this,
            currentUser = me.getController().currentUser,
            vdom        = me.vdom,
            isCurrentUser;

        if (me.author && currentUser) {
            isCurrentUser = me.author.username === currentUser.username;

            vdom.cn[0].cn[0].cn[1].cn[2].removeDom = isCurrentUser; // follow user button
            vdom.cn[0].cn[0].cn[1].cn[5].removeDom = isCurrentUser; // favorite post button

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'article-actions').removeDom = isCurrentUser;
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'delete-button')  .removeDom = !isCurrentUser;
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'edit-button')    .removeDom = !isCurrentUser;

            me.update();
        }
    }

    /**
     * @param {Object} data
     */
    onDeleteButtonClick(data) {
        this.getController().deleteArticle(this.slug);
    }

    /**
     * @param {Object} data
     */
    onEditButtonClick(data) {
        Neo.Main.setRoute({
            value: '/editor/' + this.slug
        });
    }

    /**
     * @param {Object} data
     */
    onFavoriteButtonClick(data) {
        this.favorited = !this.favorited;
    }

    /**
     * @param {Object} data
     */
    onFollowButtonClick(data) {
        let me = this;

        me.getController().followUser(me.author.username, !me.author.following).then(data => {
            me.author = data.json.profile;
        });
    }
}

Neo.applyClassConfig(Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


/***/ }),

/***/ "./apps/realworld/view/article/CreateCommentComponent.mjs":
/*!****************************************************************!*\
  !*** ./apps/realworld/view/article/CreateCommentComponent.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class RealWorld.view.article.CreateCommentComponent
 * @extends Neo.component.Base
 */
class CreateCommentComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.article.CreateCommentComponent'
         * @protected
         */
        className: 'RealWorld.view.article.CreateCommentComponent',
        /**
         * @member {String[]} baseCls=['card','comment-form']
         */
        baseCls: ['card', 'comment-form'],
        /**
         * @member {String|null} userImage_=null
         */
        userImage_: null,
        /**
         * @member {String|null} userName_=null
         */
        userName_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'form', cn: [
            {cls: ['card-block'], cn: [
                {tag: 'textarea', cls: ['form-control'], placeholder: 'Write a comment...', rows: 3}
            ]},
            {cls: ['card-footer'], cn: [
                {tag: 'img', cls: ['comment-author-img'], src: 'https://static.productionready.io/images/smiley-cyrus.jpg'},  // https://github.com/gothinkster/realworld/issues/442
                {vtype: 'text', html: '&nbsp;'},
                {tag: 'span', cls: ['comment-author']},
                {tag: 'button', cls: ['btn', 'btn-sm', 'btn-primary'], html: 'Post Comment', type: 'button'}
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
                fn      : me.onSubmitButtonClick,
                delegate: '.btn-primary',
                scope   : me
            }
        });

        me.vdom.cn[0].cn[0].id = me.getInputElId();
        me.update();

        me.getController().on({
            afterSetCurrentUser: me.onCurrentUserChange,
            scope              : me
        });
    }

    /**
     * Triggered after the userImage config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserImage(value, oldValue) {
        if (value) {
            this.vdom.cn[1].cn[0].src = value;
            this.update();
        }
    }

    /**
     * Triggered after the userName config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserName(value, oldValue) {
        if (value) {
            this.vdom.cn[1].cn[2].html = value;
            this.update();
        }
    }

    /**
     * @returns {String}
     */
    getInputElId() {
        return this.id + '__input';
    }

    /**
     * @param {Object} value
     */
    onCurrentUserChange(value) {
        this.set({
            userImage: value.image,
            userName : value.username
        });
    }

    /**
     * @param {Object} data
     */
    onSubmitButtonClick(data) {
        let me = this;

        // read the input values from the main thread
        // we could register an oninput event to this view as well and store the changes
        Neo.main.DomAccess.getAttributes({
            id        : me.getInputElId(),
            attributes: 'value'
        }).then(data => {
            me.getController().postComment({
                data: JSON.stringify({
                    comment: {
                        body: data.value
                    }
                })
            }).then(data => {
                me.vdom.cn[0].cn[0].value = ''; // reset the textarea value
                me.update();
            });
        });
    }
}

Neo.applyClassConfig(CreateCommentComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCommentComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RjtBQUMzQjtBQUN1QjtBQUNEOztBQUV4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRkFBYTtBQUNyQztBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5Q0FBeUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkNBQTJDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvREFBb0Q7QUFDeEU7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLHFCQUFxQix5QkFBeUI7QUFDOUMscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6Qiw2QkFBNkIsNENBQTRDO0FBQ3pFLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLDZCQUE2Qiw2QkFBNkI7QUFDMUQsNkJBQTZCLG9DQUFvQztBQUNqRSw2QkFBNkI7QUFDN0IsMEJBQTBC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QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixnREFBZ0Q7QUFDaEQ7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsc0JBQXNCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9Db21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL0NyZWF0ZUNvbW1lbnRDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlQ29tcG9uZW50ICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IENyZWF0ZUNvbW1lbnRDb21wb25lbnQgZnJvbSAnLi9DcmVhdGVDb21tZW50Q29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5hcnRpY2xlLkNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBhdXRob3JfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGF1dGhvcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYmFzZUNscz1bJ2FydGljbGUtcGFnZSddXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiBbJ2FydGljbGUtcGFnZSddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJvZHlfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGJvZHlfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2Ugc3RvcmUgdGhlIGxhenkgbG9hZGVkIGNsYXNzIGhlcmVcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21tZW50Q29tcG9uZW50fSBjb21tZW50Q29tcG9uZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY29tbWVudENvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tbWVudENvbXBvbmVudFtdfSBjb21tZW50Q29tcG9uZW50cz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgY29tbWVudENvbXBvbmVudHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gY29tbWVudHNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbW1lbnRzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tbWVudENvbXBvbmVudHxudWxsfSBjcmVhdGVDb21tZW50Q29tcG9uZW50PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZUNvbW1lbnRDb21wb25lbnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY3JlYXRlZEF0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVkQXRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZmF2b3JpdGVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZmF2b3JpdGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gZmF2b3JpdGVzQ291bnRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZhdm9yaXRlc0NvdW50XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IHRhZ0xpc3RfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhZ0xpc3RfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHRpdGxlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0aXRsZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2Jhbm5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdoMScsIGZsYWc6ICd0aXRsZSd9LFxuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2FydGljbGUtbWV0YSddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBmbGFnOiAndXNlcmltYWdlJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaW1nJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydpbmZvJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHM6IFsnYXV0aG9yJ10sIGZsYWc6ICd1c2VybmFtZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ2RhdGUnXSwgZmxhZzogJ2NyZWF0ZWRBdCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1zZWNvbmRhcnknLCAnZm9sbG93LWJ1dHRvbiddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgZmxhZzogJ2ZvbGxvd0ljb24nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgZmxhZzogJ2ZvbGxvd0F1dGhvcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBmbGFnOiAndXNlcm5hbWUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JywgJ2VkaXQtYnV0dG9uJ10sIGZsYWc6ICdlZGl0LWJ1dHRvbicsIHJlbW92ZURvbTogdHJ1ZSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24tZWRpdCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyBFZGl0IEFydGljbGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwOyZuYnNwOyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXByaW1hcnknLCAnZmF2b3JpdGUtYnV0dG9uJ10sIGZsYWc6ICdmYXZvcml0ZWQnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi1oZWFydCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwOyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyBQb3N0ICd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ2NvdW50ZXInXSwgZmxhZzogJ2Zhdm9yaXRlc0NvdW50J31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLWRhbmdlcicsICdkZWxldGUtYnV0dG9uJ10sIGZsYWc6ICdkZWxldGUtYnV0dG9uJywgcmVtb3ZlRG9tOiB0cnVlLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi10cmFzaC1hJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnIERlbGV0ZSBBcnRpY2xlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAge2NsczogWydjb250YWluZXInLCAncGFnZSddLCBjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsncm93JywgJ2FydGljbGUtY29udGVudCddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC1tZC0xMiddLCBmbGFnOiAnYm9keScsIGNuOiBbXX1cbiAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnaHInfSxcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ2FydGljbGUtYWN0aW9ucyddLCBmbGFnOiAnYXJ0aWNsZS1hY3Rpb25zJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydhcnRpY2xlLW1ldGEnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgZmxhZzogJ3VzZXJpbWFnZScsIGNuOiBbe3RhZzogJ2ltZyd9XX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2luZm8nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWydhdXRob3InXSwgZmxhZzogJ3VzZXJuYW1lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnZGF0ZSddLCBodG1sOiAnSmFudWFyeSAyMHRoJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdmb2xsb3ctYnV0dG9uJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBmbGFnOiAnZm9sbG93SWNvbid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBmbGFnOiAnZm9sbG93QXV0aG9yJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICd1c2VybmFtZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7Jm5ic3A7J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtcHJpbWFyeScsICdmYXZvcml0ZS1idXR0b24nXSwgZmxhZzogJ2Zhdm9yaXRlZCcsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLWhlYXJ0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnIFBvc3QgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnY291bnRlciddLCBmbGFnOiAnZmF2b3JpdGVzQ291bnQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICB7Y2xzOiAncm93JywgY246IFtcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydjb2wteHMtMTInLCAnY29sLW1kLTgnLCAnb2Zmc2V0LW1kLTInXSwgZmxhZzogJ2NvbW1lbnRzLXNlY3Rpb24nLCBjbjogW119XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5hZGREb21MaXN0ZW5lcnMoW1xuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uRGVsZXRlQnV0dG9uQ2xpY2ssICAgZGVsZWdhdGU6ICcuZGVsZXRlLWJ1dHRvbicsICAgc2NvcGU6IG1lfX0sXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25FZGl0QnV0dG9uQ2xpY2ssICAgICBkZWxlZ2F0ZTogJy5lZGl0LWJ1dHRvbicsICAgICBzY29wZTogbWV9fSxcbiAgICAgICAgICAgIHtjbGljazoge2ZuOiBtZS5vbkZhdm9yaXRlQnV0dG9uQ2xpY2ssIGRlbGVnYXRlOiAnLmZhdm9yaXRlLWJ1dHRvbicsIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uRm9sbG93QnV0dG9uQ2xpY2ssICAgZGVsZWdhdGU6ICcuZm9sbG93LWJ1dHRvbicsICAgc2NvcGU6IG1lfX1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLm9uKHtcbiAgICAgICAgICAgIGFmdGVyU2V0Q3VycmVudFVzZXI6IG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdXJyZW50VXNlciA9IG1lLmdldENvbnRyb2xsZXIoKS5jdXJyZW50VXNlcjtcblxuICAgICAgICBtZS5jcmVhdGVDb21tZW50Q29tcG9uZW50ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENyZWF0ZUNvbW1lbnRDb21wb25lbnQsXG4gICAgICAgICAgICBwYXJlbnRJZCA6IG1lLmlkLFxuICAgICAgICAgICAgdXNlckltYWdlOiBjdXJyZW50VXNlcj8uaW1hZ2UgfHwgbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcobWUudmRvbSwgJ2NvbW1lbnRzLXNlY3Rpb24nKS5jbi51bnNoaWZ0KG1lLmNyZWF0ZUNvbW1lbnRDb21wb25lbnQudmRvbSk7XG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuXG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGF1dGhvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBdXRob3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRGbGFncyh2ZG9tLCAnZm9sbG93QXV0aG9yJykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmh0bWwgPSB2YWx1ZS5mb2xsb3dpbmcgPyAnIFVuZm9sbG93ICcgOiAnIEZvbGxvdyAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFZEb21VdGlsLmdldEZsYWdzKHZkb20sICdmb2xsb3dJY29uJykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmNscyA9IHZhbHVlLmZvbGxvd2luZyA/IFsnaW9uLW1pbnVzLXJvdW5kJ10gOiBbJ2lvbi1wbHVzLXJvdW5kJ107XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0RmxhZ3ModmRvbSwgJ3VzZXJpbWFnZScpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5ocmVmID0gJyMvcHJvZmlsZS8nICsgdmFsdWUudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgbm9kZS5jblswXS5zcmMgPSB2YWx1ZS5pbWFnZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRGbGFncyh2ZG9tLCAndXNlcm5hbWUnKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuaHJlZiA9ICcjL3Byb2ZpbGUvJyArIHZhbHVlLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgIG5vZGUuaHRtbCA9IHZhbHVlLnVzZXJuYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgICAgICAgICAgbWUub25DdXJyZW50VXNlckNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBib2R5IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEJvZHkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFya2Rvd24ubWFya2Rvd25Ub0h0bWwodmFsdWUpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ2JvZHknKS5jblswXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21tZW50cyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhc3luYyBhZnRlclNldENvbW1lbnRzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IFZEb21VdGlsLmdldEJ5RmxhZyhtZS52ZG9tLCAnY29tbWVudHMtc2VjdGlvbicpLFxuICAgICAgICAgICAgICAgIGNvbmZpZywgbW9kdWxlO1xuXG4gICAgICAgICAgICBpZiAoIW1lLmNvbW1lbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vQ29tbWVudENvbXBvbmVudC5tanMnKTtcbiAgICAgICAgICAgICAgICBtZS5jb21tZW50Q29tcG9uZW50ID0gbW9kdWxlLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5jbiA9IFtjb250YWluZXIuY24uc2hpZnQoKV07IC8vIGtlZXAgdGhlIENyZWF0ZUNvbW1lbnRDb21wb25lbnRcblxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvciAgIDogaXRlbS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgICAgIDogaXRlbS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRBdDogaXRlbS51cGRhdGVkQXRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5jb21tZW50Q29tcG9uZW50c1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuY29tbWVudENvbXBvbmVudHNbaW5kZXhdID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgIDogbWUuY29tbWVudENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5jb21tZW50Q29tcG9uZW50c1tpbmRleF0uc2V0KGNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNuLnB1c2gobWUuY29tbWVudENvbXBvbmVudHNbaW5kZXhdLnZkb20pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjcmVhdGVkQXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3JlYXRlZEF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh0aGlzLnZkb20sICdjcmVhdGVkQXQnKS5odG1sID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICB5ZWFyIDogJ251bWVyaWMnXG4gICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmF2b3JpdGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmF2b3JpdGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEZsYWdzKG1lLnZkb20sICdmYXZvcml0ZWQnKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgbm9kZS5jblsyXS5odG1sID0gdmFsdWUgPyAnVW5mYXZvcml0ZScgOiAnRmF2b3JpdGUnO1xuXG4gICAgICAgICAgICBOZW9BcnJheS5hZGQobm9kZS5jbHMsIHZhbHVlID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobm9kZS5jbHMsIHZhbHVlID8gJ2J0bi1vdXRsaW5lLXByaW1hcnknIDogJ2J0bi1wcmltYXJ5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuXG4gICAgICAgIC8vIGlnbm9yZSB0aGUgaW5pdGlhbCBzZXR0ZXIgY2FsbFxuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5mYXZvcml0ZUFydGljbGUobWUuc2x1ZywgdmFsdWUpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuZmF2b3JpdGVzQ291bnQgPSBkYXRhLmpzb24uYXJ0aWNsZS5mYXZvcml0ZXNDb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmYXZvcml0ZXNDb3VudCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGYXZvcml0ZXNDb3VudCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE5lby5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIFZEb21VdGlsLmdldEZsYWdzKHRoaXMudmRvbSwgJ2Zhdm9yaXRlc0NvdW50JykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmh0bWwgPSBgKCR7dmFsdWV9KWA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGFnTGlzdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGFnTGlzdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgYm9keSA9IFZEb21VdGlsLmdldEJ5RmxhZyhtZS52ZG9tLCAnYm9keScpLFxuICAgICAgICAgICAgdGFnTGlzdDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFnTGlzdCA9IHtcbiAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ3RhZy1saXN0J10sXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0YWdMaXN0LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWcgOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ3RhZy1kZWZhdWx0JywgJ3RhZy1waWxsJywgJ3RhZy1vdXRsaW5lJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJvZHkuY25bMV0gPSB0YWdMaXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGJvZHkuY25bMV0pIHtcbiAgICAgICAgICAgICAgICBib2R5LmNuWzFdLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRpdGxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRpdGxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodGhpcy52ZG9tLCAndGl0bGUnKS5odG1sID0gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkN1cnJlbnRVc2VyQ2hhbmdlKCkge2NvbnNvbGUubG9nKCcjIyMgb25DdXJyZW50VXNlckNoYW5nZScpO1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudFVzZXIgPSBtZS5nZXRDb250cm9sbGVyKCkuY3VycmVudFVzZXIsXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpc0N1cnJlbnRVc2VyO1xuXG4gICAgICAgIGlmIChtZS5hdXRob3IgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGlzQ3VycmVudFVzZXIgPSBtZS5hdXRob3IudXNlcm5hbWUgPT09IGN1cnJlbnRVc2VyLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzBdLmNuWzBdLmNuWzFdLmNuWzJdLnJlbW92ZURvbSA9IGlzQ3VycmVudFVzZXI7IC8vIGZvbGxvdyB1c2VyIGJ1dHRvblxuICAgICAgICAgICAgdmRvbS5jblswXS5jblswXS5jblsxXS5jbls1XS5yZW1vdmVEb20gPSBpc0N1cnJlbnRVc2VyOyAvLyBmYXZvcml0ZSBwb3N0IGJ1dHRvblxuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2FydGljbGUtYWN0aW9ucycpLnJlbW92ZURvbSA9IGlzQ3VycmVudFVzZXI7XG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2RlbGV0ZS1idXR0b24nKSAgLnJlbW92ZURvbSA9ICFpc0N1cnJlbnRVc2VyO1xuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdlZGl0LWJ1dHRvbicpICAgIC5yZW1vdmVEb20gPSAhaXNDdXJyZW50VXNlcjtcblxuICAgICAgICAgICAgbWUudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGVsZXRlQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmdldENvbnRyb2xsZXIoKS5kZWxldGVBcnRpY2xlKHRoaXMuc2x1Zyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkVkaXRCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgIHZhbHVlOiAnL2VkaXRvci8nICsgdGhpcy5zbHVnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25GYXZvcml0ZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5mYXZvcml0ZWQgPSAhdGhpcy5mYXZvcml0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZvbGxvd0J1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuZm9sbG93VXNlcihtZS5hdXRob3IudXNlcm5hbWUsICFtZS5hdXRob3IuZm9sbG93aW5nKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuYXV0aG9yID0gZGF0YS5qc29uLnByb2ZpbGU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5DcmVhdGVDb21tZW50Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQ3JlYXRlQ29tbWVudENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5hcnRpY2xlLkNyZWF0ZUNvbW1lbnRDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tbWVudENvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYmFzZUNscz1bJ2NhcmQnLCdjb21tZW50LWZvcm0nXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWydjYXJkJywgJ2NvbW1lbnQtZm9ybSddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVzZXJJbWFnZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckltYWdlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VyTmFtZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlck5hbWVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHt0YWc6ICdmb3JtJywgY246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnY2FyZC1ibG9jayddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICd0ZXh0YXJlYScsIGNsczogWydmb3JtLWNvbnRyb2wnXSwgcGxhY2Vob2xkZXI6ICdXcml0ZSBhIGNvbW1lbnQuLi4nLCByb3dzOiAzfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7Y2xzOiBbJ2NhcmQtZm9vdGVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ2ltZycsIGNsczogWydjb21tZW50LWF1dGhvci1pbWcnXSwgc3JjOiAnaHR0cHM6Ly9zdGF0aWMucHJvZHVjdGlvbnJlYWR5LmlvL2ltYWdlcy9zbWlsZXktY3lydXMuanBnJ30sICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ290aGlua3N0ZXIvcmVhbHdvcmxkL2lzc3Vlcy80NDJcbiAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwOyd9LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ2NvbW1lbnQtYXV0aG9yJ119LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tcHJpbWFyeSddLCBodG1sOiAnUG9zdCBDb21tZW50JywgdHlwZTogJ2J1dHRvbid9XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuYWRkRG9tTGlzdGVuZXJzKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6IG1lLm9uU3VibWl0QnV0dG9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcuYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tLmNuWzBdLmNuWzBdLmlkID0gbWUuZ2V0SW5wdXRFbElkKCk7XG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5vbih7XG4gICAgICAgICAgICBhZnRlclNldEN1cnJlbnRVc2VyOiBtZS5vbkN1cnJlbnRVc2VyQ2hhbmdlLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VySW1hZ2UgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlckltYWdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmRvbS5jblsxXS5jblswXS5zcmMgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZXJOYW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZXJOYW1lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmRvbS5jblsxXS5jblsyXS5odG1sID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbnB1dEVsSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19faW5wdXQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ3VycmVudFVzZXJDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgdXNlckltYWdlOiB2YWx1ZS5pbWFnZSxcbiAgICAgICAgICAgIHVzZXJOYW1lIDogdmFsdWUudXNlcm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Ym1pdEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyByZWFkIHRoZSBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWRcbiAgICAgICAgLy8gd2UgY291bGQgcmVnaXN0ZXIgYW4gb25pbnB1dCBldmVudCB0byB0aGlzIHZpZXcgYXMgd2VsbCBhbmQgc3RvcmUgdGhlIGNoYW5nZXNcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgaWQgICAgICAgIDogbWUuZ2V0SW5wdXRFbElkKCksXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiAndmFsdWUnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkucG9zdENvbW1lbnQoe1xuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudmRvbS5jblswXS5jblswXS52YWx1ZSA9ICcnOyAvLyByZXNldCB0aGUgdGV4dGFyZWEgdmFsdWVcbiAgICAgICAgICAgICAgICBtZS51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENyZWF0ZUNvbW1lbnRDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb21tZW50Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
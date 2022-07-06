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
    static getConfig() {return {
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
         * @member {String[]} cls=['article-page']
         */
        cls: ['article-page'],
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
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push(
            {click: {fn: me.onDeleteButtonClick,   delegate: '.delete-button',   scope: me}},
            {click: {fn: me.onEditButtonClick,     delegate: '.edit-button',     scope: me}},
            {click: {fn: me.onFavoriteButtonClick, delegate: '.favorite-button', scope: me}},
            {click: {fn: me.onFollowButtonClick,   delegate: '.follow-button',   scope: me}
        });

        me.domListeners = domListeners;

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
            currentUser = me.getController().currentUser,
            vdom        = me.vdom;

        me.createCommentComponent = Neo.create({
            module   : _CreateCommentComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            parentId : me.id,
            userImage: currentUser?.image || null
        });

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'comments-section').cn.unshift(me.createCommentComponent.vdom);

        me.vdom = vdom;

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

            me.vdom = vdom;

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
        const me = this;

        if (value) {
            Neo.main.addon.Markdown.markdownToHtml(value).then(html => {
                let vdom = me.vdom;

                _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'body').cn[0] = {
                    cn: [{
                        tag : 'p',
                        html: html
                    }]
                };

                me.vdom = vdom;
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
                vdom      = me.vdom,
                container = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'comments-section'),
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

            me.vdom = vdom;
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
            let vdom = this.vdom;

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'createdAt').html = new Intl.DateTimeFormat('en-US', {
                day  : 'numeric',
                month: 'long',
                year : 'numeric'
            }).format(new Date(value));

            this.vdom = vdom;
        }
    }

    /**
     * Triggered after the favorited config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFavorited(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(vdom, 'favorited').forEach(node => {
            node.cn[2].html = value ? 'Unfavorite' : 'Favorite';

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].add(node.cls, value ? 'btn-primary' : 'btn-outline-primary');
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(node.cls, value ? 'btn-outline-primary' : 'btn-primary');
        });

        me.vdom = vdom;

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
            let vdom = this.vdom;

            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getFlags(vdom, 'favoritesCount').forEach(node => {
                node.html = `(${value})`;
            });

            this.vdom = vdom;
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
            vdom = me.vdom,
            body = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'body'),
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

        me.vdom = vdom;
    }

    /**
     * Triggered after the title config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTitle(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].getByFlag(vdom, 'title').html = value;
        this.vdom = vdom;
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

            me.vdom = vdom;
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
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.view.article.CreateCommentComponent'
         * @protected
         */
        className: 'RealWorld.view.article.CreateCommentComponent',
        /**
         * @member {String[]} cls=['card', 'comment-form']
         */
        cls: ['card', 'comment-form'],
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
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me           = this,
            domListeners = me.domListeners,
            vdom         = me.vdom;

        domListeners.push({
            click: {
                fn      : me.onSubmitButtonClick,
                delegate: '.btn-primary',
                scope   : me
            }
        });

        me.domListeners = domListeners;

        vdom.cn[0].cn[0].id = me.getInputElId();
        me.vdom = vdom;

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
            let vdom = this.vdom;

            vdom.cn[1].cn[0].src = value;
            this.vdom = vdom;
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
            let vdom = this.vdom;

            vdom.cn[1].cn[2].html = value;
            this.vdom = vdom;
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
                let vdom = me.vdom;

                vdom.cn[0].cn[0].value = ''; // reset the textarea value
                me.vdom = vdom;
            });
        });
    }
}

Neo.applyClassConfig(CreateCommentComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCommentComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RjtBQUMzQjtBQUN1QjtBQUNEOztBQUV4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRkFBYTtBQUNyQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlDQUF5QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBMkM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFvRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCLHlCQUF5QjtBQUM5QyxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLDZCQUE2Qiw0Q0FBNEM7QUFDekUsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIsNkJBQTZCLDZCQUE2QjtBQUMxRCw2QkFBNkIsb0NBQW9DO0FBQ2pFLDZCQUE2QjtBQUM3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QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLGlFQUFlLHNCQUFzQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC92aWV3L2FydGljbGUvQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9DcmVhdGVDb21tZW50Q29tcG9uZW50Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUNvbXBvbmVudCAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBDcmVhdGVDb21tZW50Q29tcG9uZW50IGZyb20gJy4vQ3JlYXRlQ29tbWVudENvbXBvbmVudC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBhdXRob3JfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGF1dGhvcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYm9keV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYm9keV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBzdG9yZSB0aGUgbGF6eSBsb2FkZWQgY2xhc3MgaGVyZVxuICAgICAgICAgKiBAbWVtYmVyIHtSZWFsV29ybGQudmlldy5hcnRpY2xlLkNvbW1lbnRDb21wb25lbnR9IGNvbW1lbnRDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb21tZW50Q29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21tZW50Q29tcG9uZW50W119IGNvbW1lbnRDb21wb25lbnRzPVtdXG4gICAgICAgICAqL1xuICAgICAgICBjb21tZW50Q29tcG9uZW50czogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBjb21tZW50c189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tbWVudHNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5DcmVhdGVDb21tZW50Q29tcG9uZW50fG51bGx9IGNyZWF0ZUNvbW1lbnRDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlQ29tbWVudENvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjcmVhdGVkQXRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZWRBdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnYXJ0aWNsZS1wYWdlJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydhcnRpY2xlLXBhZ2UnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZhdm9yaXRlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGZhdm9yaXRlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGZhdm9yaXRlc0NvdW50Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmYXZvcml0ZXNDb3VudF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSB0YWdMaXN0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWdMaXN0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0aXRsZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGl0bGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHtjbjogW1xuICAgICAgICAgICAge2NsczogWydiYW5uZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaDEnLCBmbGFnOiAndGl0bGUnfSxcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydhcnRpY2xlLW1ldGEnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgZmxhZzogJ3VzZXJpbWFnZScsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ltZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnaW5mbyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzOiBbJ2F1dGhvciddLCBmbGFnOiAndXNlcm5hbWUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWydkYXRlJ10sIGZsYWc6ICdjcmVhdGVkQXQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JywgJ2ZvbGxvdy1idXR0b24nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGZsYWc6ICdmb2xsb3dJY29uJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICdmb2xsb3dBdXRob3InfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgZmxhZzogJ3VzZXJuYW1lJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdlZGl0LWJ1dHRvbiddLCBmbGFnOiAnZWRpdC1idXR0b24nLCByZW1vdmVEb206IHRydWUsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLWVkaXQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcgRWRpdCBBcnRpY2xlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcmbmJzcDsmbmJzcDsnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1wcmltYXJ5JywgJ2Zhdm9yaXRlLWJ1dHRvbiddLCBmbGFnOiAnZmF2b3JpdGVkJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24taGVhcnQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcmbmJzcDsnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcgUG9zdCAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWydjb3VudGVyJ10sIGZsYWc6ICdmYXZvcml0ZXNDb3VudCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1kYW5nZXInLCAnZGVsZXRlLWJ1dHRvbiddLCBmbGFnOiAnZGVsZXRlLWJ1dHRvbicsIHJlbW92ZURvbTogdHJ1ZSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24tdHJhc2gtYSddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyBEZWxldGUgQXJ0aWNsZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJywgJ3BhZ2UnXSwgY246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ3JvdycsICdhcnRpY2xlLWNvbnRlbnQnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydjb2wtbWQtMTInXSwgZmxhZzogJ2JvZHknLCBjbjogW119XG4gICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAge3RhZzogJ2hyJ30sXG4gICAgICAgICAgICAgICAge2NsczogWydhcnRpY2xlLWFjdGlvbnMnXSwgZmxhZzogJ2FydGljbGUtYWN0aW9ucycsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnYXJ0aWNsZS1tZXRhJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGZsYWc6ICd1c2VyaW1hZ2UnLCBjbjogW3t0YWc6ICdpbWcnfV19LFxuICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydpbmZvJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHM6IFsnYXV0aG9yJ10sIGZsYWc6ICd1c2VybmFtZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ2RhdGUnXSwgaHRtbDogJ0phbnVhcnkgMjB0aCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1zZWNvbmRhcnknLCAnZm9sbG93LWJ1dHRvbiddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgZmxhZzogJ2ZvbGxvd0ljb24nfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgZmxhZzogJ2ZvbGxvd0F1dGhvcid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBmbGFnOiAndXNlcm5hbWUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwOyZuYnNwOyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXByaW1hcnknLCAnZmF2b3JpdGUtYnV0dG9uJ10sIGZsYWc6ICdmYXZvcml0ZWQnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi1oZWFydCddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwOyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyBQb3N0ICd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ2NvdW50ZXInXSwgZmxhZzogJ2Zhdm9yaXRlc0NvdW50J31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAge2NsczogJ3JvdycsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY29sLXhzLTEyJywgJ2NvbC1tZC04JywgJ29mZnNldC1tZC0yJ10sIGZsYWc6ICdjb21tZW50cy1zZWN0aW9uJywgY246IFtdfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaChcbiAgICAgICAgICAgIHtjbGljazoge2ZuOiBtZS5vbkRlbGV0ZUJ1dHRvbkNsaWNrLCAgIGRlbGVnYXRlOiAnLmRlbGV0ZS1idXR0b24nLCAgIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uRWRpdEJ1dHRvbkNsaWNrLCAgICAgZGVsZWdhdGU6ICcuZWRpdC1idXR0b24nLCAgICAgc2NvcGU6IG1lfX0sXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25GYXZvcml0ZUJ1dHRvbkNsaWNrLCBkZWxlZ2F0ZTogJy5mYXZvcml0ZS1idXR0b24nLCBzY29wZTogbWV9fSxcbiAgICAgICAgICAgIHtjbGljazoge2ZuOiBtZS5vbkZvbGxvd0J1dHRvbkNsaWNrLCAgIGRlbGVnYXRlOiAnLmZvbGxvdy1idXR0b24nLCAgIHNjb3BlOiBtZX1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5vbih7XG4gICAgICAgICAgICBhZnRlclNldEN1cnJlbnRVc2VyOiBtZS5vbkN1cnJlbnRVc2VyQ2hhbmdlLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudFVzZXIgPSBtZS5nZXRDb250cm9sbGVyKCkuY3VycmVudFVzZXIsXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgbWUuY3JlYXRlQ29tbWVudENvbXBvbmVudCA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDcmVhdGVDb21tZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50SWQgOiBtZS5pZCxcbiAgICAgICAgICAgIHVzZXJJbWFnZTogY3VycmVudFVzZXI/LmltYWdlIHx8IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdjb21tZW50cy1zZWN0aW9uJykuY24udW5zaGlmdChtZS5jcmVhdGVDb21tZW50Q29tcG9uZW50LnZkb20pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGF1dGhvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBdXRob3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRGbGFncyh2ZG9tLCAnZm9sbG93QXV0aG9yJykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmh0bWwgPSB2YWx1ZS5mb2xsb3dpbmcgPyAnIFVuZm9sbG93ICcgOiAnIEZvbGxvdyAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFZEb21VdGlsLmdldEZsYWdzKHZkb20sICdmb2xsb3dJY29uJykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmNscyA9IHZhbHVlLmZvbGxvd2luZyA/IFsnaW9uLW1pbnVzLXJvdW5kJ10gOiBbJ2lvbi1wbHVzLXJvdW5kJ107XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0RmxhZ3ModmRvbSwgJ3VzZXJpbWFnZScpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5ocmVmID0gJyMvcHJvZmlsZS8nICsgdmFsdWUudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgbm9kZS5jblswXS5zcmMgPSB2YWx1ZS5pbWFnZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRGbGFncyh2ZG9tLCAndXNlcm5hbWUnKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuaHJlZiA9ICcjL3Byb2ZpbGUvJyArIHZhbHVlLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgIG5vZGUuaHRtbCA9IHZhbHVlLnVzZXJuYW1lO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgICAgICBtZS5vbkN1cnJlbnRVc2VyQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGJvZHkgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Qm9keSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFya2Rvd24ubWFya2Rvd25Ub0h0bWwodmFsdWUpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdib2R5JykuY25bMF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnIDogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogaHRtbFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21tZW50cyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhc3luYyBhZnRlclNldENvbW1lbnRzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdjb21tZW50cy1zZWN0aW9uJyksXG4gICAgICAgICAgICAgICAgY29uZmlnLCBtb2R1bGU7XG5cbiAgICAgICAgICAgIGlmICghbWUuY29tbWVudENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9Db21tZW50Q29tcG9uZW50Lm1qcycpO1xuICAgICAgICAgICAgICAgIG1lLmNvbW1lbnRDb21wb25lbnQgPSBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbmVyLmNuID0gW2NvbnRhaW5lci5jbi5zaGlmdCgpXTsgLy8ga2VlcCB0aGUgQ3JlYXRlQ29tbWVudENvbXBvbmVudFxuXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yICAgOiBpdGVtLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgYm9keSAgICAgOiBpdGVtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRJZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBpdGVtLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEF0OiBpdGVtLnVwZGF0ZWRBdFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1lLmNvbW1lbnRDb21wb25lbnRzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5jb21tZW50Q29tcG9uZW50c1tpbmRleF0gPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgOiBtZS5jb21tZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNvbW1lbnRDb21wb25lbnRzW2luZGV4XS5zZXQoY29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuY24ucHVzaChtZS5jb21tZW50Q29tcG9uZW50c1tpbmRleF0udmRvbSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNyZWF0ZWRBdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDcmVhdGVkQXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnY3JlYXRlZEF0JykuaHRtbCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICBkYXkgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKHZhbHVlKSk7XG5cbiAgICAgICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZhdm9yaXRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZhdm9yaXRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0RmxhZ3ModmRvbSwgJ2Zhdm9yaXRlZCcpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBub2RlLmNuWzJdLmh0bWwgPSB2YWx1ZSA/ICdVbmZhdm9yaXRlJyA6ICdGYXZvcml0ZSc7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgdmFsdWUgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShub2RlLmNscywgdmFsdWUgPyAnYnRuLW91dGxpbmUtcHJpbWFyeScgOiAnYnRuLXByaW1hcnknKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgLy8gaWdub3JlIHRoZSBpbml0aWFsIHNldHRlciBjYWxsXG4gICAgICAgIGlmIChOZW8uaXNCb29sZWFuKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLmZhdm9yaXRlQXJ0aWNsZShtZS5zbHVnLCB2YWx1ZSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5mYXZvcml0ZXNDb3VudCA9IGRhdGEuanNvbi5hcnRpY2xlLmZhdm9yaXRlc0NvdW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZhdm9yaXRlc0NvdW50IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZhdm9yaXRlc0NvdW50KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIFZEb21VdGlsLmdldEZsYWdzKHZkb20sICdmYXZvcml0ZXNDb3VudCcpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5odG1sID0gYCgke3ZhbHVlfSlgO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ0xpc3QgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ0xpc3QodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgYm9keSA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYm9keScpLFxuICAgICAgICAgICAgdGFnTGlzdDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFnTGlzdCA9IHtcbiAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ3RhZy1saXN0J10sXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0YWdMaXN0LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWcgOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ3RhZy1kZWZhdWx0JywgJ3RhZy1waWxsJywgJ3RhZy1vdXRsaW5lJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJvZHkuY25bMV0gPSB0YWdMaXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGJvZHkuY25bMV0pIHtcbiAgICAgICAgICAgICAgICBib2R5LmNuWzFdLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRpdGxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRpdGxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3RpdGxlJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25DdXJyZW50VXNlckNoYW5nZSgpIHtjb25zb2xlLmxvZygnIyMjIG9uQ3VycmVudFVzZXJDaGFuZ2UnKTtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyID0gbWUuZ2V0Q29udHJvbGxlcigpLmN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaXNDdXJyZW50VXNlcjtcblxuICAgICAgICBpZiAobWUuYXV0aG9yICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBpc0N1cnJlbnRVc2VyID0gbWUuYXV0aG9yLnVzZXJuYW1lID09PSBjdXJyZW50VXNlci51c2VybmFtZTtcblxuICAgICAgICAgICAgdmRvbS5jblswXS5jblswXS5jblsxXS5jblsyXS5yZW1vdmVEb20gPSBpc0N1cnJlbnRVc2VyOyAvLyBmb2xsb3cgdXNlciBidXR0b25cbiAgICAgICAgICAgIHZkb20uY25bMF0uY25bMF0uY25bMV0uY25bNV0ucmVtb3ZlRG9tID0gaXNDdXJyZW50VXNlcjsgLy8gZmF2b3JpdGUgcG9zdCBidXR0b25cblxuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdhcnRpY2xlLWFjdGlvbnMnKS5yZW1vdmVEb20gPSBpc0N1cnJlbnRVc2VyO1xuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdkZWxldGUtYnV0dG9uJykgIC5yZW1vdmVEb20gPSAhaXNDdXJyZW50VXNlcjtcbiAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZWRpdC1idXR0b24nKSAgICAucmVtb3ZlRG9tID0gIWlzQ3VycmVudFVzZXI7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRlbGV0ZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRDb250cm9sbGVyKCkuZGVsZXRlQXJ0aWNsZSh0aGlzLnNsdWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25FZGl0QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBOZW8uTWFpbi5zZXRSb3V0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogJy9lZGl0b3IvJyArIHRoaXMuc2x1Z1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmF2b3JpdGVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZmF2b3JpdGVkID0gIXRoaXMuZmF2b3JpdGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Gb2xsb3dCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLmZvbGxvd1VzZXIobWUuYXV0aG9yLnVzZXJuYW1lLCAhbWUuYXV0aG9yLmZvbGxvd2luZykudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmF1dGhvciA9IGRhdGEuanNvbi5wcm9maWxlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tbWVudENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIENyZWF0ZUNvbW1lbnRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5hcnRpY2xlLkNyZWF0ZUNvbW1lbnRDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tbWVudENvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY2FyZCcsICdjb21tZW50LWZvcm0nXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NhcmQnLCAnY29tbWVudC1mb3JtJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdXNlckltYWdlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1c2VySW1hZ2VfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVzZXJOYW1lXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyTmFtZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge3RhZzogJ2Zvcm0nLCBjbjogW1xuICAgICAgICAgICAge2NsczogWydjYXJkLWJsb2NrJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ3RleHRhcmVhJywgY2xzOiBbJ2Zvcm0tY29udHJvbCddLCBwbGFjZWhvbGRlcjogJ1dyaXRlIGEgY29tbWVudC4uLicsIHJvd3M6IDN9XG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHtjbHM6IFsnY2FyZC1mb290ZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnaW1nJywgY2xzOiBbJ2NvbW1lbnQtYXV0aG9yLWltZyddLCBzcmM6ICdodHRwczovL3N0YXRpYy5wcm9kdWN0aW9ucmVhZHkuaW8vaW1hZ2VzL3NtaWxleS1jeXJ1cy5qcGcnfSwgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3RoaW5rc3Rlci9yZWFsd29ybGQvaXNzdWVzLzQ0MlxuICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7J30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnY29tbWVudC1hdXRob3InXX0sXG4gICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1wcmltYXJ5J10sIGh0bWw6ICdQb3N0IENvbW1lbnQnLCB0eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgIGZuICAgICAgOiBtZS5vblN1Ym1pdEJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLmJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMF0uaWQgPSBtZS5nZXRJbnB1dEVsSWQoKTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLm9uKHtcbiAgICAgICAgICAgIGFmdGVyU2V0Q3VycmVudFVzZXI6IG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZXJJbWFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VySW1hZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0uY25bMF0uc3JjID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VyTmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VyTmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS5jblsyXS5odG1sID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbnB1dEVsSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19faW5wdXQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ3VycmVudFVzZXJDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgdXNlckltYWdlOiB2YWx1ZS5pbWFnZSxcbiAgICAgICAgICAgIHVzZXJOYW1lIDogdmFsdWUudXNlcm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Ym1pdEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyByZWFkIHRoZSBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWRcbiAgICAgICAgLy8gd2UgY291bGQgcmVnaXN0ZXIgYW4gb25pbnB1dCBldmVudCB0byB0aGlzIHZpZXcgYXMgd2VsbCBhbmQgc3RvcmUgdGhlIGNoYW5nZXNcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgaWQgICAgICAgIDogbWUuZ2V0SW5wdXRFbElkKCksXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiAndmFsdWUnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkucG9zdENvbW1lbnQoe1xuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICAgICAgdmRvbS5jblswXS5jblswXS52YWx1ZSA9ICcnOyAvLyByZXNldCB0aGUgdGV4dGFyZWEgdmFsdWVcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENyZWF0ZUNvbW1lbnRDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVDb21tZW50Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
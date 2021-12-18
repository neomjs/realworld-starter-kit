"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_article_Component_mjs"],{

/***/ "./apps/realworld/view/article/Component.mjs":
/*!***************************************************!*\
  !*** ./apps/realworld/view/article/Component.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
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




/***/ }),

/***/ "./apps/realworld/view/article/CreateCommentComponent.mjs":
/*!****************************************************************!*\
  !*** ./apps/realworld/view/article/CreateCommentComponent.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateCommentComponent)
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RjtBQUMzQjtBQUN1QjtBQUNEOztBQUV4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRkFBYTtBQUNyQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlDQUF5QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBMkM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFvRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCLHlCQUF5QjtBQUM5QyxxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLDZCQUE2Qiw0Q0FBNEM7QUFDekUsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekIsNkJBQTZCLDZCQUE2QjtBQUMxRCw2QkFBNkIsb0NBQW9DO0FBQ2pFLDZCQUE2QjtBQUM3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O0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC92aWV3L2FydGljbGUvQ3JlYXRlQ29tbWVudENvbXBvbmVudC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VDb21wb25lbnQgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgQ3JlYXRlQ29tbWVudENvbXBvbmVudCBmcm9tICcuL0NyZWF0ZUNvbW1lbnRDb21wb25lbnQubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy5hcnRpY2xlLkNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gYXV0aG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhdXRob3JfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJvZHlfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGJvZHlfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2Ugc3RvcmUgdGhlIGxhenkgbG9hZGVkIGNsYXNzIGhlcmVcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21tZW50Q29tcG9uZW50fSBjb21tZW50Q29tcG9uZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY29tbWVudENvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tbWVudENvbXBvbmVudFtdfSBjb21tZW50Q29tcG9uZW50cz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgY29tbWVudENvbXBvbmVudHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gY29tbWVudHNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbW1lbnRzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tbWVudENvbXBvbmVudHxudWxsfSBjcmVhdGVDb21tZW50Q29tcG9uZW50PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZUNvbW1lbnRDb21wb25lbnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY3JlYXRlZEF0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVkQXRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2FydGljbGUtcGFnZSddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnYXJ0aWNsZS1wYWdlJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmYXZvcml0ZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBmYXZvcml0ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBmYXZvcml0ZXNDb3VudF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmF2b3JpdGVzQ291bnRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gdGFnTGlzdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdGl0bGVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRpdGxlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnYmFubmVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge2NsczogWydjb250YWluZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2gxJywgZmxhZzogJ3RpdGxlJ30sXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnYXJ0aWNsZS1tZXRhJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGZsYWc6ICd1c2VyaW1hZ2UnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbWcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2luZm8nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWydhdXRob3InXSwgZmxhZzogJ3VzZXJuYW1lJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnZGF0ZSddLCBmbGFnOiAnY3JlYXRlZEF0J31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1vdXRsaW5lLXNlY29uZGFyeScsICdmb2xsb3ctYnV0dG9uJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBmbGFnOiAnZm9sbG93SWNvbid9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBmbGFnOiAnZm9sbG93QXV0aG9yJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICd1c2VybmFtZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1zZWNvbmRhcnknLCAnZWRpdC1idXR0b24nXSwgZmxhZzogJ2VkaXQtYnV0dG9uJywgcmVtb3ZlRG9tOiB0cnVlLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi1lZGl0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnIEVkaXQgQXJ0aWNsZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7Jm5ic3A7J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtcHJpbWFyeScsICdmYXZvcml0ZS1idXR0b24nXSwgZmxhZzogJ2Zhdm9yaXRlZCcsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLWhlYXJ0J119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnIFBvc3QgJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnY291bnRlciddLCBmbGFnOiAnZmF2b3JpdGVzQ291bnQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtZGFuZ2VyJywgJ2RlbGV0ZS1idXR0b24nXSwgZmxhZzogJ2RlbGV0ZS1idXR0b24nLCByZW1vdmVEb206IHRydWUsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLXRyYXNoLWEnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcgRGVsZXRlIEFydGljbGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lcicsICdwYWdlJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge2NsczogWydyb3cnLCAnYXJ0aWNsZS1jb250ZW50J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY29sLW1kLTEyJ10sIGZsYWc6ICdib2R5JywgY246IFtdfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdocid9LFxuICAgICAgICAgICAgICAgIHtjbHM6IFsnYXJ0aWNsZS1hY3Rpb25zJ10sIGZsYWc6ICdhcnRpY2xlLWFjdGlvbnMnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2FydGljbGUtbWV0YSddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBmbGFnOiAndXNlcmltYWdlJywgY246IFt7dGFnOiAnaW1nJ31dfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnaW5mbyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzOiBbJ2F1dGhvciddLCBmbGFnOiAndXNlcm5hbWUnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWydkYXRlJ10sIGh0bWw6ICdKYW51YXJ5IDIwdGgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tc20nLCAnYnRuLW91dGxpbmUtc2Vjb25kYXJ5JywgJ2ZvbGxvdy1idXR0b24nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGZsYWc6ICdmb2xsb3dJY29uJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICdmb2xsb3dBdXRob3InfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgZmxhZzogJ3VzZXJuYW1lJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcmbmJzcDsmbmJzcDsnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdidG4tb3V0bGluZS1wcmltYXJ5JywgJ2Zhdm9yaXRlLWJ1dHRvbiddLCBmbGFnOiAnZmF2b3JpdGVkJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24taGVhcnQnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcmbmJzcDsnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcgUG9zdCAnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWydjb3VudGVyJ10sIGZsYWc6ICdmYXZvcml0ZXNDb3VudCd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIHtjbHM6ICdyb3cnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC14cy0xMicsICdjb2wtbWQtOCcsICdvZmZzZXQtbWQtMiddLCBmbGFnOiAnY29tbWVudHMtc2VjdGlvbicsIGNuOiBbXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25EZWxldGVCdXR0b25DbGljaywgICBkZWxlZ2F0ZTogJy5kZWxldGUtYnV0dG9uJywgICBzY29wZTogbWV9fSxcbiAgICAgICAgICAgIHtjbGljazoge2ZuOiBtZS5vbkVkaXRCdXR0b25DbGljaywgICAgIGRlbGVnYXRlOiAnLmVkaXQtYnV0dG9uJywgICAgIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uRmF2b3JpdGVCdXR0b25DbGljaywgZGVsZWdhdGU6ICcuZmF2b3JpdGUtYnV0dG9uJywgc2NvcGU6IG1lfX0sXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25Gb2xsb3dCdXR0b25DbGljaywgICBkZWxlZ2F0ZTogJy5mb2xsb3ctYnV0dG9uJywgICBzY29wZTogbWV9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkub24oe1xuICAgICAgICAgICAgYWZ0ZXJTZXRDdXJyZW50VXNlcjogbWUub25DdXJyZW50VXNlckNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyID0gbWUuZ2V0Q29udHJvbGxlcigpLmN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLmNyZWF0ZUNvbW1lbnRDb21wb25lbnQgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ3JlYXRlQ29tbWVudENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudElkIDogbWUuaWQsXG4gICAgICAgICAgICB1c2VySW1hZ2U6IGN1cnJlbnRVc2VyPy5pbWFnZSB8fCBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnY29tbWVudHMtc2VjdGlvbicpLmNuLnVuc2hpZnQobWUuY3JlYXRlQ29tbWVudENvbXBvbmVudC52ZG9tKTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhdXRob3IgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXV0aG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0RmxhZ3ModmRvbSwgJ2ZvbGxvd0F1dGhvcicpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5odG1sID0gdmFsdWUuZm9sbG93aW5nID8gJyBVbmZvbGxvdyAnIDogJyBGb2xsb3cgJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRGbGFncyh2ZG9tLCAnZm9sbG93SWNvbicpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbHMgPSB2YWx1ZS5mb2xsb3dpbmcgPyBbJ2lvbi1taW51cy1yb3VuZCddIDogWydpb24tcGx1cy1yb3VuZCddO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFZEb21VdGlsLmdldEZsYWdzKHZkb20sICd1c2VyaW1hZ2UnKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuaHJlZiA9ICcjL3Byb2ZpbGUvJyArIHZhbHVlLnVzZXJuYW1lO1xuICAgICAgICAgICAgICAgIG5vZGUuY25bMF0uc3JjID0gdmFsdWUuaW1hZ2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0RmxhZ3ModmRvbSwgJ3VzZXJuYW1lJykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLmhyZWYgPSAnIy9wcm9maWxlLycgKyB2YWx1ZS51c2VybmFtZTtcbiAgICAgICAgICAgICAgICBub2RlLmh0bWwgPSB2YWx1ZS51c2VybmFtZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgbWUub25DdXJyZW50VXNlckNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBib2R5IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEJvZHkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcmtkb3duLm1hcmtkb3duVG9IdG1sKHZhbHVlKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYm9keScpLmNuWzBdID0ge1xuICAgICAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGh0bWxcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY29tbWVudHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXN5bmMgYWZ0ZXJTZXRDb21tZW50cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnY29tbWVudHMtc2VjdGlvbicpLFxuICAgICAgICAgICAgICAgIGNvbmZpZywgbW9kdWxlO1xuXG4gICAgICAgICAgICBpZiAoIW1lLmNvbW1lbnRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vQ29tbWVudENvbXBvbmVudC5tanMnKTtcbiAgICAgICAgICAgICAgICBtZS5jb21tZW50Q29tcG9uZW50ID0gbW9kdWxlLmRlZmF1bHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5jbiA9IFtjb250YWluZXIuY24uc2hpZnQoKV07IC8vIGtlZXAgdGhlIENyZWF0ZUNvbW1lbnRDb21wb25lbnRcblxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvciAgIDogaXRlbS5hdXRob3IsXG4gICAgICAgICAgICAgICAgICAgIGJvZHkgICAgIDogaXRlbS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50SWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogaXRlbS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRBdDogaXRlbS51cGRhdGVkQXRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5jb21tZW50Q29tcG9uZW50c1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuY29tbWVudENvbXBvbmVudHNbaW5kZXhdID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgIDogbWUuY29tbWVudENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5jb21tZW50Q29tcG9uZW50c1tpbmRleF0uc2V0KGNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNuLnB1c2gobWUuY29tbWVudENvbXBvbmVudHNbaW5kZXhdLnZkb20pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjcmVhdGVkQXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3JlYXRlZEF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2NyZWF0ZWRBdCcpLmh0bWwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgZGF5ICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZSh2YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmYXZvcml0ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGYXZvcml0ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEZsYWdzKHZkb20sICdmYXZvcml0ZWQnKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgbm9kZS5jblsyXS5odG1sID0gdmFsdWUgPyAnVW5mYXZvcml0ZScgOiAnRmF2b3JpdGUnO1xuXG4gICAgICAgICAgICBOZW9BcnJheS5hZGQobm9kZS5jbHMsIHZhbHVlID8gJ2J0bi1wcmltYXJ5JyA6ICdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobm9kZS5jbHMsIHZhbHVlID8gJ2J0bi1vdXRsaW5lLXByaW1hcnknIDogJ2J0bi1wcmltYXJ5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIC8vIGlnbm9yZSB0aGUgaW5pdGlhbCBzZXR0ZXIgY2FsbFxuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5mYXZvcml0ZUFydGljbGUobWUuc2x1ZywgdmFsdWUpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuZmF2b3JpdGVzQ291bnQgPSBkYXRhLmpzb24uYXJ0aWNsZS5mYXZvcml0ZXNDb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmYXZvcml0ZXNDb3VudCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGYXZvcml0ZXNDb3VudCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE5lby5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRGbGFncyh2ZG9tLCAnZmF2b3JpdGVzQ291bnQnKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuaHRtbCA9IGAoJHt2YWx1ZX0pYDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0YWdMaXN0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUYWdMaXN0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIGJvZHkgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2JvZHknKSxcbiAgICAgICAgICAgIHRhZ0xpc3Q7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZ0xpc3QgPSB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyd0YWctbGlzdCddLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGFnTGlzdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyd0YWctZGVmYXVsdCcsICd0YWctcGlsbCcsICd0YWctb3V0bGluZSddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBib2R5LmNuWzFdID0gdGFnTGlzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChib2R5LmNuWzFdKSB7XG4gICAgICAgICAgICAgICAgYm9keS5jblsxXS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aXRsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaXRsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd0aXRsZScpLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ3VycmVudFVzZXJDaGFuZ2UoKSB7Y29uc29sZS5sb2coJyMjIyBvbkN1cnJlbnRVc2VyQ2hhbmdlJyk7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdXJyZW50VXNlciA9IG1lLmdldENvbnRyb2xsZXIoKS5jdXJyZW50VXNlcixcbiAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlzQ3VycmVudFVzZXI7XG5cbiAgICAgICAgaWYgKG1lLmF1dGhvciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgaXNDdXJyZW50VXNlciA9IG1lLmF1dGhvci51c2VybmFtZSA9PT0gY3VycmVudFVzZXIudXNlcm5hbWU7XG5cbiAgICAgICAgICAgIHZkb20uY25bMF0uY25bMF0uY25bMV0uY25bMl0ucmVtb3ZlRG9tID0gaXNDdXJyZW50VXNlcjsgLy8gZm9sbG93IHVzZXIgYnV0dG9uXG4gICAgICAgICAgICB2ZG9tLmNuWzBdLmNuWzBdLmNuWzFdLmNuWzVdLnJlbW92ZURvbSA9IGlzQ3VycmVudFVzZXI7IC8vIGZhdm9yaXRlIHBvc3QgYnV0dG9uXG5cbiAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYXJ0aWNsZS1hY3Rpb25zJykucmVtb3ZlRG9tID0gaXNDdXJyZW50VXNlcjtcbiAgICAgICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZGVsZXRlLWJ1dHRvbicpICAucmVtb3ZlRG9tID0gIWlzQ3VycmVudFVzZXI7XG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2VkaXQtYnV0dG9uJykgICAgLnJlbW92ZURvbSA9ICFpc0N1cnJlbnRVc2VyO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25EZWxldGVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29udHJvbGxlcigpLmRlbGV0ZUFydGljbGUodGhpcy5zbHVnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRWRpdEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgdmFsdWU6ICcvZWRpdG9yLycgKyB0aGlzLnNsdWdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZhdm9yaXRlQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZhdm9yaXRlZCA9ICF0aGlzLmZhdm9yaXRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRm9sbG93QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5mb2xsb3dVc2VyKG1lLmF1dGhvci51c2VybmFtZSwgIW1lLmF1dGhvci5mb2xsb3dpbmcpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5hdXRob3IgPSBkYXRhLmpzb24ucHJvZmlsZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21wb25lbnQpO1xuXG5leHBvcnQge0NvbXBvbmVudCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tbWVudENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIENyZWF0ZUNvbW1lbnRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5hcnRpY2xlLkNyZWF0ZUNvbW1lbnRDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tbWVudENvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY2FyZCcsICdjb21tZW50LWZvcm0nXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NhcmQnLCAnY29tbWVudC1mb3JtJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdXNlckltYWdlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1c2VySW1hZ2VfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVzZXJOYW1lXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1c2VyTmFtZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge3RhZzogJ2Zvcm0nLCBjbjogW1xuICAgICAgICAgICAge2NsczogWydjYXJkLWJsb2NrJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ3RleHRhcmVhJywgY2xzOiBbJ2Zvcm0tY29udHJvbCddLCBwbGFjZWhvbGRlcjogJ1dyaXRlIGEgY29tbWVudC4uLicsIHJvd3M6IDN9XG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHtjbHM6IFsnY2FyZC1mb290ZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnaW1nJywgY2xzOiBbJ2NvbW1lbnQtYXV0aG9yLWltZyddLCBzcmM6ICdodHRwczovL3N0YXRpYy5wcm9kdWN0aW9ucmVhZHkuaW8vaW1hZ2VzL3NtaWxleS1jeXJ1cy5qcGcnfSwgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3RoaW5rc3Rlci9yZWFsd29ybGQvaXNzdWVzLzQ0MlxuICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7J30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnY29tbWVudC1hdXRob3InXX0sXG4gICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ2J0bi1wcmltYXJ5J10sIGh0bWw6ICdQb3N0IENvbW1lbnQnLCB0eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgIGZuICAgICAgOiBtZS5vblN1Ym1pdEJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLmJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMF0uaWQgPSBtZS5nZXRJbnB1dEVsSWQoKTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLm9uKHtcbiAgICAgICAgICAgIGFmdGVyU2V0Q3VycmVudFVzZXI6IG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZXJJbWFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VySW1hZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0uY25bMF0uc3JjID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VyTmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VyTmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS5jblsyXS5odG1sID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbnB1dEVsSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19faW5wdXQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ3VycmVudFVzZXJDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgICAgdXNlckltYWdlOiB2YWx1ZS5pbWFnZSxcbiAgICAgICAgICAgIHVzZXJOYW1lIDogdmFsdWUudXNlcm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Ym1pdEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyByZWFkIHRoZSBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWRcbiAgICAgICAgLy8gd2UgY291bGQgcmVnaXN0ZXIgYW4gb25pbnB1dCBldmVudCB0byB0aGlzIHZpZXcgYXMgd2VsbCBhbmQgc3RvcmUgdGhlIGNoYW5nZXNcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgaWQgICAgICAgIDogbWUuZ2V0SW5wdXRFbElkKCksXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiAndmFsdWUnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkucG9zdENvbW1lbnQoe1xuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICAgICAgdmRvbS5jblswXS5jblswXS52YWx1ZSA9ICcnOyAvLyByZXNldCB0aGUgdGV4dGFyZWEgdmFsdWVcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENyZWF0ZUNvbW1lbnRDb21wb25lbnQpO1xuXG5leHBvcnQge0NyZWF0ZUNvbW1lbnRDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
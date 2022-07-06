"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_HomeComponent_mjs"],{

/***/ "./apps/realworld/view/HomeComponent.mjs":
/*!***********************************************!*\
  !*** ./apps/realworld/view/HomeComponent.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _article_PreviewComponent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article/PreviewComponent.mjs */ "./apps/realworld/view/article/PreviewComponent.mjs");
/* harmony import */ var _article_TagListComponent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/TagListComponent.mjs */ "./apps/realworld/view/article/TagListComponent.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");






/**
 * @class RealWorld.view.HomeComponent
 * @extends Neo.component.Base
 */
class HomeComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.view.HomeComponent'
         * @protected
         */
        className: 'RealWorld.view.HomeComponent',
        /**
         * @member {String|null} activeTag=null
         */
        activeTag: null,
        /**
         * @member {Object[]|null} articlePreviews_=null
         */
        articlePreviews_: null,
        /**
         * @member {String[]} cls=['home-page']
         */
        cls: ['home-page'],
        /**
         * @member {Number} countArticles_=10
         */
        countArticles_: 10,
        /**
         * @member {Number} countArticles_=10
         */
        currentPage_: 1,
        /**
         * @member {Object[]} feeds_
         */
        feeds_: [
            {name: 'Your Feed',   disabled: true},
            {name: 'Global Feed', active  : true}
        ],
        /**
         * @member {Boolean} loggedIn_=false
         */
        loggedIn_: false,
        /**
         * @member {Number} pageSize_=10
         */
        pageSize_: 10,
        /**
         * @member {RealWorld.view.article.PreviewComponent[]} previewComponents=[]
         */
        previewComponents: [],
        /**
         * @member {RealWorld.view.article.TagListComponent|null} tagList_=null
         */
        tagList_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
            {cn: [
                {cls: ['banner'], cn: [
                    {cls: ['container'], cn: [
                        {tag: 'h1', cls: ['logo-font'], html: 'conduit'},
                        {tag: 'p', html: 'A place to share your knowledge.'}
                    ]}
                ]},
                {cls: ['container', 'page'], cn: [
                    {cls: ['row'], cn: [
                        {cls: ['col-md-9'], cn: [
                            {cls: ['feed-toggle'], cn: [
                                {tag: 'ul', cls: ['nav', 'nav-pills', 'outline-active'], flag: 'feed-header', cn: []}
                            ]},
                            {tag: 'nav', cn: [
                                {tag: 'ul', cls: ['pagination'], flag: 'pagination'}
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
            {click: {fn: me.onNavLinkClick,     delegate: '.nav-link',  scope: me}},
            {click: {fn: me.onPageNavLinkClick, delegate: '.page-link', scope: me}}
        );

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
        super.onConstructed();

        let me   = this,
            vdom = me.vdom;

        me.tagList = Neo.create({
            module  : _article_TagListComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            parentId: me.id,

            listeners: {
                tagChange: me.onTagChange,
                scope    : me
            }
        });

        vdom.cn[1].cn[0].cn.push(me.tagList.vdom);

        me.vdom = vdom;
    }

    /**
     * Triggered after the articlePreviews config got changed
     * @param {Object[]|null} value
     * @param {Object[]|null} oldValue
     * @protected
     */
    afterSetArticlePreviews(value, oldValue) {
        let me        = this,
            container = me.getContainer(),
            footer    = container.cn.pop(),
            vdom      = me.vdom,
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
                    me.previewComponents[index].set(config, true); // hint: try this call with false and compare the delta updates
                }

                container.cn.push(me.previewComponents[index].vdom);
            });
        }

        container.cn.push(footer);

        me.vdom = vdom;
    }

    /**
     * Triggered after the countArticles config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetCountArticles(value, oldValue) {
        let me          = this,
            vdom        = me.vdom,
            pagination  = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(vdom, 'pagination'),
            pageSize    = me.pageSize,
            countPages  = Math.ceil(value / pageSize),
            currentPage = me.currentPage,
            i           = 1,
            cls;

        if (countPages < 2) {
            // todo: hide the paging bbar
        } else {
            pagination.cn = [];

            for (; i <= countPages; i++) {
                cls = ['page-item'];

                if (i === currentPage) {
                    cls.push('active');
                }

                pagination.cn.push({
                    tag: 'li',
                    cls: cls,
                    cn : [{
                        tag : 'a',
                        cls : ['page-link', 'prevent-click'],
                        id  : me.getNavLinkVdomId(i),
                        href: '',
                        html: i
                    }]
                });
            }
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the currentPage config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetCurrentPage(value, oldValue) {
        let me   = this,
            vdom = me.vdom,
            node, oldNode;

        if (me.mounted) {
            node    = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(vdom, me.getNavLinkVdomId(value)).parentNode;
            oldNode = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(vdom, me.getNavLinkVdomId(oldValue)).parentNode;

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(node.cls, 'active');
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(oldNode.cls, 'active');

            me.vdom = vdom;

            me.getController()._articlesOffset = (value - 1) * me.pageSize; // silent update
            me.getArticles();

            Neo.main.DomAccess.windowScrollTo({});
        }
    }

    /**
     * Triggered after the feeds config got changed
     * @param {Object[]} value
     * @param {Object[]} oldValue
     * @protected
     */
    afterSetFeeds(value, oldValue) {
        let me         = this,
            vdom       = me.vdom,
            feedHeader = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(vdom, 'feed-header'),
            cls;

        feedHeader.cn = [];

        value.forEach((item, index) => {
            cls = ['prevent-click', 'nav-link'];

            if (item.active)   {cls.push('active');}
            if (item.disabled) {cls.push('disabled');}

            feedHeader.cn.push({
                tag: 'li',
                cls: ['nav-item'],
                id : me.id + '__nav-item_' + index,
                cn : [{
                    tag: 'a',
                    cls: cls,
                    href: '',
                    html: item.name,
                    id  : me.id + '__nav-item-link_' + index,
                }]
            });
        });
    }

    /**
     * Triggered after the loggedIn config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetLoggedIn(value, oldValue) {
        let me      = this,
            vdom    = me.vdom,
            navItem = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(vdom, me.id + '__nav-item-link_0').vdom;

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value ? 'remove' : 'add'](navItem.cls, 'disabled');
        me.vdom = vdom;
    }

    /**
     * todo
     * Triggered after the pageSize config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetPageSize(value, oldValue) {
        let me = this,
            i  = 0;

        console.log('afterSetPageSize', value);

        for (; i < value; i++) {

        }
    }

    /**
     * Creates an article id using the view id as a prefix
     * @returns {String} itemId
     */
    getArticleId(id) {
        return this.id + '__' + id;
    }

    /**
     * @param {Object} [params={}]
     * @param {Object} [opts={}]
     */
    getArticles(params={}, opts={}) {
        let me = this;

        if (me.activeTag) {
            params = {
                tag: me.activeTag,
                ...params
            };
        }

        me.getController().getArticles(params, opts).then(data => {
            me.set({
                articlePreviews: data.json.articles,
                countArticles  : data.json.articlesCount
            });
        });
    }

    /**
     * @returns {Object} vdom
     */
    getContainer() {
        let el = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(this.vdom, {cls: 'col-md-9'});
        return el?.vdom;
    }

    /**
     * @param {String} nodeId
     * @returns {Number}
     */
    getNavLinkId(nodeId) {
        return parseInt(nodeId.split('__')[1]);
    }

    /**
     * @param {Number|String} id
     * @returns {String}
     */
    getNavLinkVdomId(id) {
        return this.id + '__' + id;
    }

    /**
     * @param {Object} data
     */
    onNavLinkClick(data) {
        let me         = this,
            vdom       = me.vdom,
            el         = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(vdom, data.path[0].id),
            feedHeader = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(vdom, 'feed-header'),
            opts       = {};

        if (!el.vdom.cls.includes('disabled')) {
            switch(el.vdom.html) {
                case 'Global Feed':
                    me.activeTag = null;
                    break;
                case 'Your Feed':
                    me.activeTag = null;
                    opts = {
                        slug: 'feed'
                    };
                    break;
                default: // tag
                    me.activeTag = el.vdom.html.substring(2); // remove the '# '
                    break;
            }

            feedHeader.cn.forEach(item => {
                _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][item.id === el.parentNode.id ? 'add' : 'remove'](item.cn[0].cls, 'active');
            });


            me._currentPage = 1; // silent update
            me.vdom = vdom;

            me.getController()._articlesOffset = 0; // silent update
            me.getArticles({}, opts);
        }
    }

    /**
     * @param {Object} value
     */
    onCurrentUserChange(value) {
        this.loggedIn = !!value;
    }

    /**
     * @param {Object} data
     */
    onPageNavLinkClick(data) {
        this.currentPage = this.getNavLinkId(data.path[0].id);
    }

    /**
     * @param {Object} opts
     * @param {String|null} opts.oldValue
     * @param {String|null} opts.value
     */
    onTagChange(opts) {
        let me    = this,
            feeds = me.feeds,
            name  = '# ' + opts.value;

        feeds.forEach(item => {
            item.active = false;
        });

        if (feeds.length < 3) {
            feeds.push({
                active: true,
                name  : name
            });
        } else {
            Object.assign(feeds[2], {
                active: true,
                name  : name
            });
        }

        me.activeTag    = opts.value;
        me._currentPage = 1; // silent update
        me.feeds        = feeds;

        me.getController()._articlesOffset = 0; // silent update

        me.getArticles({
            tag: opts.value
        });
    }
}

Neo.applyClassConfig(HomeComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeComponent);


/***/ }),

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewComponent);


/***/ }),

/***/ "./apps/realworld/view/article/TagListComponent.mjs":
/*!**********************************************************!*\
  !*** ./apps/realworld/view/article/TagListComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class RealWorld.view.article.TagListComponent
 * @extends Neo.component.Base
 */
class TagListComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core.Observable mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.view.article.TagListComponent'
         * @protected
         */
        className: 'RealWorld.view.article.TagListComponent',
        /**
         * @member {String|null} activeTag_
         */
        activeTag_: null,
        /**
         * @member {String[]} cls=['col-md-3']
         */
        cls: ['col-md-3'],
        /**
         * @member {String[]} tags_=[]
         */
        tags_: [],
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['sidebar'], cn: [
                {tag: 'p', html: 'Popular Tags'},
                {cls: ['tag-list']}
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
            cls : 'tag-pill'
        });

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push({
            click: {
                fn      : me.onTagLinkClick,
                delegate: '.tag-pill',
                scope   : me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     * Triggered after the activeTag config got changed
     * @param {String[]|null} value
     * @param {String[]|null} oldValue
     * @protected
     */
    afterSetActiveTag(value, oldValue) {
        if (oldValue !== undefined) {
            this.fire('tagChange', {
                oldValue: oldValue,
                value   : value
            });
        }
    }

    /**
     * Triggered after the tags config got changed
     * @param {String[]|null} value
     * @param {String[]|null} oldValue
     * @protected
     */
    afterSetTags(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[0].cn[1].cn = [];

        if (Array.isArray(value)) {
            value.forEach(item => {
                vdom.cn[0].cn[1].cn.push({
                    tag : 'a',
                    cls : ['tag-pill', 'tag-default'],
                    href: '',
                    html: item,
                    id  : me.getTagVdomId(item)
                });
            });

            me.vdom = vdom;
        }
    }

    /**
     * @param {String} nodeId
     * @returns {String}
     */
    getTagId(nodeId) {
        return nodeId.split('__')[1];
    }

    /**
     * @param {String} name
     * @returns {String}
     */
    getTagVdomId(name) {
        return this.id + '__' + name;
    }

    /**
     * @param {Object} data
     */
    onTagLinkClick(data) {
        this.activeTag = this.getTagId(data.path[0].id);
    }
}

Neo.applyClassConfig(TagListComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagListComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X0hvbWVDb21wb25lbnRfbWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRjtBQUNKO0FBQ2xCO0FBQ0E7QUFDaUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9GQUFTO0FBQ3JDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBLGFBQWEsb0NBQW9DO0FBQ2pELGFBQWE7QUFDYjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUEyQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQThDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQix5QkFBeUIsK0NBQStDO0FBQ3hFLHlCQUF5QjtBQUN6QjtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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cmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9Ib21lQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9QcmV2aWV3Q29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9UYWdMaXN0Q29tcG9uZW50Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50ICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgUHJldmlld0NvbXBvbmVudCBmcm9tICcuL2FydGljbGUvUHJldmlld0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFRhZ0xpc3RDb21wb25lbnQgZnJvbSAnLi9hcnRpY2xlL1RhZ0xpc3RDb21wb25lbnQubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuSG9tZUNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEhvbWVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5Ib21lQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy5Ib21lQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY3RpdmVUYWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlVGFnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gYXJ0aWNsZVByZXZpZXdzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhcnRpY2xlUHJldmlld3NfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2hvbWUtcGFnZSddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnaG9tZS1wYWdlJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50QXJ0aWNsZXNfPTEwXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudEFydGljbGVzXzogMTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50QXJ0aWNsZXNfPTEwXG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50UGFnZV86IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmVlZHNfXG4gICAgICAgICAqL1xuICAgICAgICBmZWVkc186IFtcbiAgICAgICAgICAgIHtuYW1lOiAnWW91ciBGZWVkJywgICBkaXNhYmxlZDogdHJ1ZX0sXG4gICAgICAgICAgICB7bmFtZTogJ0dsb2JhbCBGZWVkJywgYWN0aXZlICA6IHRydWV9XG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBsb2dnZWRJbl89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGxvZ2dlZEluXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHBhZ2VTaXplXz0xMFxuICAgICAgICAgKi9cbiAgICAgICAgcGFnZVNpemVfOiAxMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudFtdfSBwcmV2aWV3Q29tcG9uZW50cz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmlld0NvbXBvbmVudHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5UYWdMaXN0Q29tcG9uZW50fG51bGx9IHRhZ0xpc3RfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhZ0xpc3RfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgICAgICB7Y246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ2Jhbm5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2gxJywgY2xzOiBbJ2xvZ28tZm9udCddLCBodG1sOiAnY29uZHVpdCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3AnLCBodG1sOiAnQSBwbGFjZSB0byBzaGFyZSB5b3VyIGtub3dsZWRnZS4nfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJywgJ3BhZ2UnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydyb3cnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY29sLW1kLTknXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2ZlZWQtdG9nZ2xlJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd1bCcsIGNsczogWyduYXYnLCAnbmF2LXBpbGxzJywgJ291dGxpbmUtYWN0aXZlJ10sIGZsYWc6ICdmZWVkLWhlYWRlcicsIGNuOiBbXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbmF2JywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3VsJywgY2xzOiBbJ3BhZ2luYXRpb24nXSwgZmxhZzogJ3BhZ2luYXRpb24nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBOZW8ubWFpbi5Eb21FdmVudHMucmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMoe1xuICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgIGNscyA6ICdwcmV2ZW50LWNsaWNrJ1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaChcbiAgICAgICAgICAgIHtjbGljazoge2ZuOiBtZS5vbk5hdkxpbmtDbGljaywgICAgIGRlbGVnYXRlOiAnLm5hdi1saW5rJywgIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uUGFnZU5hdkxpbmtDbGljaywgZGVsZWdhdGU6ICcucGFnZS1saW5rJywgc2NvcGU6IG1lfX1cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLm9uKHtcbiAgICAgICAgICAgIGFmdGVyU2V0Q3VycmVudFVzZXI6IG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBtZS50YWdMaXN0ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgIDogVGFnTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZCxcblxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgdGFnQ2hhbmdlOiBtZS5vblRhZ0NoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZSAgICA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZkb20uY25bMV0uY25bMF0uY24ucHVzaChtZS50YWdMaXN0LnZkb20pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXJ0aWNsZVByZXZpZXdzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXJ0aWNsZVByZXZpZXdzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IG1lLmdldENvbnRhaW5lcigpLFxuICAgICAgICAgICAgZm9vdGVyICAgID0gY29udGFpbmVyLmNuLnBvcCgpLFxuICAgICAgICAgICAgdmRvbSAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNvbmZpZztcblxuICAgICAgICBjb250YWluZXIuY24gPSBbY29udGFpbmVyLmNuLnNoaWZ0KCldO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvciAgICAgICAgOiBpdGVtLmF1dGhvci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0ICAgICA6IGl0ZW0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiAgIDogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVkICAgICA6IGl0ZW0uZmF2b3JpdGVkLFxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZXNDb3VudDogaXRlbS5mYXZvcml0ZXNDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgc2x1ZyAgICAgICAgICA6IGl0ZW0uc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgdGFnTGlzdCAgICAgICA6IGl0ZW0udGFnTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgICAgICAgICA6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbWFnZSAgICAgOiBpdGVtLmF1dGhvci5pbWFnZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1lLnByZXZpZXdDb21wb25lbnRzW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5wcmV2aWV3Q29tcG9uZW50c1tpbmRleF0gPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgOiBQcmV2aWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnByZXZpZXdDb21wb25lbnRzW2luZGV4XS5zZXQoY29uZmlnLCB0cnVlKTsgLy8gaGludDogdHJ5IHRoaXMgY2FsbCB3aXRoIGZhbHNlIGFuZCBjb21wYXJlIHRoZSBkZWx0YSB1cGRhdGVzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNuLnB1c2gobWUucHJldmlld0NvbXBvbmVudHNbaW5kZXhdLnZkb20pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuY24ucHVzaChmb290ZXIpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY291bnRBcnRpY2xlcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDb3VudEFydGljbGVzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgcGFnaW5hdGlvbiAgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3BhZ2luYXRpb24nKSxcbiAgICAgICAgICAgIHBhZ2VTaXplICAgID0gbWUucGFnZVNpemUsXG4gICAgICAgICAgICBjb3VudFBhZ2VzICA9IE1hdGguY2VpbCh2YWx1ZSAvIHBhZ2VTaXplKSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gbWUuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDEsXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKGNvdW50UGFnZXMgPCAyKSB7XG4gICAgICAgICAgICAvLyB0b2RvOiBoaWRlIHRoZSBwYWdpbmcgYmJhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFnaW5hdGlvbi5jbiA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8PSBjb3VudFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjbHMgPSBbJ3BhZ2UtaXRlbSddO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNscy5wdXNoKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGNsczogY2xzLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ3BhZ2UtbGluaycsICdwcmV2ZW50LWNsaWNrJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgOiBtZS5nZXROYXZMaW5rVmRvbUlkKGkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBpXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGN1cnJlbnRQYWdlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEN1cnJlbnRQYWdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIG5vZGUsIG9sZE5vZGU7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG5vZGUgICAgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKHZkb20sIG1lLmdldE5hdkxpbmtWZG9tSWQodmFsdWUpKS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgb2xkTm9kZSA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmRvbSwgbWUuZ2V0TmF2TGlua1Zkb21JZChvbGRWYWx1ZSkpLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG9sZE5vZGUuY2xzLCAnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuX2FydGljbGVzT2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiBtZS5wYWdlU2l6ZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuZ2V0QXJ0aWNsZXMoKTtcblxuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLndpbmRvd1Njcm9sbFRvKHt9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmVlZHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZlZWRzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGZlZWRIZWFkZXIgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZlZWQtaGVhZGVyJyksXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgZmVlZEhlYWRlci5jbiA9IFtdO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjbHMgPSBbJ3ByZXZlbnQtY2xpY2snLCAnbmF2LWxpbmsnXTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlKSAgIHtjbHMucHVzaCgnYWN0aXZlJyk7fVxuICAgICAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtjbHMucHVzaCgnZGlzYWJsZWQnKTt9XG5cbiAgICAgICAgICAgIGZlZWRIZWFkZXIuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgIGNsczogWyduYXYtaXRlbSddLFxuICAgICAgICAgICAgICAgIGlkIDogbWUuaWQgKyAnX19uYXYtaXRlbV8nICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBjbHMsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGlkICA6IG1lLmlkICsgJ19fbmF2LWl0ZW0tbGlua18nICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxvZ2dlZEluIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TG9nZ2VkSW4odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgbmF2SXRlbSA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmRvbSwgbWUuaWQgKyAnX19uYXYtaXRlbS1saW5rXzAnKS52ZG9tO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID8gJ3JlbW92ZScgOiAnYWRkJ10obmF2SXRlbS5jbHMsICdkaXNhYmxlZCcpO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBwYWdlU2l6ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQYWdlU2l6ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGkgID0gMDtcblxuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXJTZXRQYWdlU2l6ZScsIHZhbHVlKTtcblxuICAgICAgICBmb3IgKDsgaSA8IHZhbHVlOyBpKyspIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhcnRpY2xlIGlkIHVzaW5nIHRoZSB2aWV3IGlkIGFzIGEgcHJlZml4XG4gICAgICogQHJldHVybnMge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0QXJ0aWNsZUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKi9cbiAgICBnZXRBcnRpY2xlcyhwYXJhbXM9e30sIG9wdHM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuYWN0aXZlVGFnKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdGFnOiBtZS5hY3RpdmVUYWcsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLmdldEFydGljbGVzKHBhcmFtcywgb3B0cykudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZVByZXZpZXdzOiBkYXRhLmpzb24uYXJ0aWNsZXMsXG4gICAgICAgICAgICAgICAgY291bnRBcnRpY2xlcyAgOiBkYXRhLmpzb24uYXJ0aWNsZXNDb3VudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBnZXRDb250YWluZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodGhpcy52ZG9tLCB7Y2xzOiAnY29sLW1kLTknfSk7XG4gICAgICAgIHJldHVybiBlbD8udmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZUlkXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXROYXZMaW5rSWQobm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChub2RlSWQuc3BsaXQoJ19fJylbMV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldE5hdkxpbmtWZG9tSWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk5hdkxpbmtDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgZWwgICAgICAgICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmRvbSwgZGF0YS5wYXRoWzBdLmlkKSxcbiAgICAgICAgICAgIGZlZWRIZWFkZXIgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZlZWQtaGVhZGVyJyksXG4gICAgICAgICAgICBvcHRzICAgICAgID0ge307XG5cbiAgICAgICAgaWYgKCFlbC52ZG9tLmNscy5pbmNsdWRlcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgc3dpdGNoKGVsLnZkb20uaHRtbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0dsb2JhbCBGZWVkJzpcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlVGFnID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnWW91ciBGZWVkJzpcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlVGFnID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdmZWVkJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyB0YWdcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlVGFnID0gZWwudmRvbS5odG1sLnN1YnN0cmluZygyKTsgLy8gcmVtb3ZlIHRoZSAnIyAnXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmZWVkSGVhZGVyLmNuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXlbaXRlbS5pZCA9PT0gZWwucGFyZW50Tm9kZS5pZCA/ICdhZGQnIDogJ3JlbW92ZSddKGl0ZW0uY25bMF0uY2xzLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBtZS5fY3VycmVudFBhZ2UgPSAxOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLl9hcnRpY2xlc09mZnNldCA9IDA7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIG1lLmdldEFydGljbGVzKHt9LCBvcHRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ3VycmVudFVzZXJDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9ICEhdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblBhZ2VOYXZMaW5rQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gdGhpcy5nZXROYXZMaW5rSWQoZGF0YS5wYXRoWzBdLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9wdHMub2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvcHRzLnZhbHVlXG4gICAgICovXG4gICAgb25UYWdDaGFuZ2Uob3B0cykge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmVlZHMgPSBtZS5mZWVkcyxcbiAgICAgICAgICAgIG5hbWUgID0gJyMgJyArIG9wdHMudmFsdWU7XG5cbiAgICAgICAgZmVlZHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmZWVkcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBmZWVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZSAgOiBuYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmVlZHNbMl0sIHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZSAgOiBuYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmFjdGl2ZVRhZyAgICA9IG9wdHMudmFsdWU7XG4gICAgICAgIG1lLl9jdXJyZW50UGFnZSA9IDE7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgbWUuZmVlZHMgICAgICAgID0gZmVlZHM7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLl9hcnRpY2xlc09mZnNldCA9IDA7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICBtZS5nZXRBcnRpY2xlcyh7XG4gICAgICAgICAgICB0YWc6IG9wdHMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIb21lQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgUHJldmlld0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhdXRob3JfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGF1dGhvcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnYXJ0aWNsZS1wcmV2aWV3J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydhcnRpY2xlLXByZXZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElTTyA4NjAxIHRpbWVzdGFtcFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY3JlYXRlZEF0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVkQXRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRlc2NyaXB0aW9uXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkZXNjcmlwdGlvbl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmYXZvcml0ZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBmYXZvcml0ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBmYXZvcml0ZXNDb3VudF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmF2b3JpdGVzQ291bnRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNsdWdfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNsdWdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gdGFnTGlzdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdGl0bGVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRpdGxlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VySW1hZ2VfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJJbWFnZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2FydGljbGUtbWV0YSddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWcgOiAnYScsIGZsYWc6ICd1c2VySW1hZ2VMaW5rJywgY246IFt7dGFnOiAnaW1nJ31dfSxcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ2luZm8nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCAgICBjbHM6IFsnYXV0aG9yJ10sIGZsYWc6ICdhdXRob3InfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnZGF0ZSddLCAgIGZsYWc6ICdjcmVhdGVkQXQnfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdwdWxsLXhzLXJpZ2h0J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi1oZWFydCddfSxcbiAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICdmYXZvcml0ZXNDb3VudCd9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAge3RhZzogJ2EnLCBjbHMgOiBbJ3ByZXZpZXctbGluayddLCBmbGFnOiAncHJldmlldy1saW5rJywgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnaDEnLCAgIGZsYWc6ICd0aXRsZSd9LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgICAgZmxhZzogJ2Rlc2NyaXB0aW9uJ30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBodG1sOiAnUmVhZCBtb3JlLi4uJ31cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6IG1lLm9uRmF2b3JpdGVCdXR0b25DbGljayxcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZTogJy5wdWxsLXhzLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXV0aG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEF1dGhvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb20sXG4gICAgICAgICAgICBub2RlID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdhdXRob3InKSxcbiAgICAgICAgICAgIGhyZWYgPSAnIy9wcm9maWxlLycgKyB2YWx1ZTtcblxuICAgICAgICBub2RlLmhyZWYgPSBocmVmO1xuICAgICAgICBub2RlLmh0bWwgPSB2YWx1ZTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3VzZXJJbWFnZUxpbmsnKS5ocmVmID0gaHJlZjtcblxuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3JlYXRlZEF0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENyZWF0ZWRBdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdjcmVhdGVkQXQnKS5odG1sID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICAgICAgZGF5ICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICB5ZWFyIDogJ251bWVyaWMnXG4gICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZSh2YWx1ZSkpO1xuXG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkZXNjcmlwdGlvbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREZXNjcmlwdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdkZXNjcmlwdGlvbicpLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZhdm9yaXRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZhdm9yaXRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgYnV0dG9uID0gdmRvbS5jblswXS5jblsyXTtcblxuICAgICAgICBOZW9BcnJheS5hZGQoYnV0dG9uLmNscywgdmFsdWUgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGJ1dHRvbi5jbHMsIHZhbHVlID8gJ2J0bi1vdXRsaW5lLXByaW1hcnknIDogJ2J0bi1wcmltYXJ5Jyk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgLy8gaWdub3JlIHRoZSBpbml0aWFsIHNldHRlciBjYWxsXG4gICAgICAgIGlmIChOZW8uaXNCb29sZWFuKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLmZhdm9yaXRlQXJ0aWNsZShtZS5zbHVnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZhdm9yaXRlc0NvdW50IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZhdm9yaXRlc0NvdW50KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2Zhdm9yaXRlc0NvdW50JykuaHRtbCA9ICcgJyArIHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2x1ZyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTbHVnKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3ByZXZpZXctbGluaycpLmhyZWYgPSAnIy9hcnRpY2xlLycgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ0xpc3QgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ0xpc3QodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgdGFnTGlzdDtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhZ3MgaWYgZXhpc3RzXG4gICAgICAgIGlmICh2ZG9tLmNuWzFdLmNuWzNdKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZ0xpc3QgPSB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyd0YWctbGlzdCddLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGFnTGlzdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyd0YWctZGVmYXVsdCcsICd0YWctcGlsbCcsICd0YWctb3V0bGluZSddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnB1c2godGFnTGlzdCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aXRsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaXRsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd0aXRsZScpLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZXJJbWFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VySW1hZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndXNlckltYWdlTGluaycpLmNuWzBdLnNyYyA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25GYXZvcml0ZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmYXZvcml0ZWQgPSAhbWUuZmF2b3JpdGVkO1xuXG4gICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICBmYXZvcml0ZWQgICAgIDogZmF2b3JpdGVkLFxuICAgICAgICAgICAgZmF2b3JpdGVzQ291bnQ6IGZhdm9yaXRlZCA/IChtZS5mYXZvcml0ZXNDb3VudCArIDEpIDogKG1lLmZhdm9yaXRlc0NvdW50IC0gMSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQcmV2aWV3Q29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0NvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFRhZ0xpc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5UYWdMaXN0Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY3RpdmVUYWdfXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVUYWdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvbC1tZC0zJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb2wtbWQtMyddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHRhZ3NfPVtdXG4gICAgICAgICAqL1xuICAgICAgICB0YWdzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ3NpZGViYXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAncCcsIGh0bWw6ICdQb3B1bGFyIFRhZ3MnfSxcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ3RhZy1saXN0J119XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBOZW8ubWFpbi5Eb21FdmVudHMucmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMoe1xuICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgIGNscyA6ICd0YWctcGlsbCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogbWUub25UYWdMaW5rQ2xpY2ssXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcudGFnLXBpbGwnLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhY3RpdmVUYWcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBY3RpdmVUYWcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ3RhZ0NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGFncyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uY24gPSBbXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdmRvbS5jblswXS5jblsxXS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ3RhZy1waWxsJywgJ3RhZy1kZWZhdWx0J10sXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBpZCAgOiBtZS5nZXRUYWdWZG9tSWQoaXRlbSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRhZ0lkKG5vZGVJZCkge1xuICAgICAgICByZXR1cm4gbm9kZUlkLnNwbGl0KCdfXycpWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUYWdWZG9tSWQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25UYWdMaW5rQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhZyA9IHRoaXMuZ2V0VGFnSWQoZGF0YS5wYXRoWzBdLmlkKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhZ0xpc3RDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBUYWdMaXN0Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
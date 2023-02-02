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
    static config = {
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
         * @member {String[]} baseCls=['home-page']
         */
        baseCls: ['home-page'],
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
            {click: {fn: me.onNavLinkClick,     delegate: '.nav-link',  scope: me}},
            {click: {fn: me.onPageNavLinkClick, delegate: '.page-link', scope: me}}
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
        super.onConstructed();

        let me = this;

        me.tagList = Neo.create({
            module  : _article_TagListComponent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            parentId: me.id,

            listeners: {
                tagChange: me.onTagChange,
                scope    : me
            }
        });

        me.vdom.cn[1].cn[0].cn.push(me.tagList.vdom);
        me.update();
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
        me.update();
    }

    /**
     * Triggered after the countArticles config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetCountArticles(value, oldValue) {
        let me          = this,
            pagination  = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(me.vdom, 'pagination'),
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
                    cls,
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

        me.update();
    }

    /**
     * Triggered after the currentPage config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetCurrentPage(value, oldValue) {
        let me = this,
            node, oldNode;

        if (me.mounted) {
            node    = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(me.vdom, me.getNavLinkVdomId(value)).parentNode;
            oldNode = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(me.vdom, me.getNavLinkVdomId(oldValue)).parentNode;

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(node.cls, 'active');
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(oldNode.cls, 'active');

            me.update();

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
                    tag : 'a',
                    cls : cls,
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
            navItem = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(me.vdom, me.id + '__nav-item-link_0').vdom;

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value ? 'remove' : 'add'](navItem.cls, 'disabled');
        me.update();
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
            el         = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(me.vdom, data.path[0].id),
            feedHeader = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].getByFlag(me.vdom, 'feed-header'),
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
            me.update();

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
                name
            });
        } else {
            Object.assign(feeds[2], {
                active: true,
                name
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
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true

    static config = {
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
         * @member {String[]} baseCls=['col-md-3']
         */
        baseCls: ['col-md-3'],
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
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        Neo.main.DomEvents.registerPreventDefaultTargets({
            name: 'click',
            cls : 'tag-pill'
        });

        let me = this;

        me.addDomListeners({
            click: {
                fn      : me.onTagLinkClick,
                delegate: '.tag-pill',
                scope   : me
            }
        });
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
                oldValue,
                value
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
        let me = this;

        me.vdom.cn[0].cn[1].cn = [];

        if (Array.isArray(value)) {
            value.forEach(item => {
                me.vdom.cn[0].cn[1].cn.push({
                    tag : 'a',
                    cls : ['tag-pill', 'tag-default'],
                    href: '',
                    html: item,
                    id  : me.getTagVdomId(item)
                });
            });

            me.update();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X0hvbWVDb21wb25lbnRfbWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRjtBQUNKO0FBQ2xCO0FBQ0E7QUFDaUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9GQUFTO0FBQ3JDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQSxhQUFhLG9DQUFvQztBQUNqRCxhQUFhO0FBQ2I7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBMkM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUE4QztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCLCtDQUErQztBQUNwRSxxQkFBcUI7QUFDckI7QUFDQSxjQUFjO0FBQ2QsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FB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LFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsaUJBQWlCLCtCQUErQjtBQUNoRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC92aWV3L0hvbWVDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL1ByZXZpZXdDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL1RhZ0xpc3RDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBQcmV2aWV3Q29tcG9uZW50IGZyb20gJy4vYXJ0aWNsZS9QcmV2aWV3Q29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgVGFnTGlzdENvbXBvbmVudCBmcm9tICcuL2FydGljbGUvVGFnTGlzdENvbXBvbmVudC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5Ib21lQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5Ib21lQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy5Ib21lQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY3RpdmVUYWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlVGFnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W118bnVsbH0gYXJ0aWNsZVByZXZpZXdzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhcnRpY2xlUHJldmlld3NfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9Wydob21lLXBhZ2UnXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWydob21lLXBhZ2UnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRBcnRpY2xlc189MTBcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50QXJ0aWNsZXNfOiAxMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRBcnRpY2xlc189MTBcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnRQYWdlXzogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBmZWVkc19cbiAgICAgICAgICovXG4gICAgICAgIGZlZWRzXzogW1xuICAgICAgICAgICAge25hbWU6ICdZb3VyIEZlZWQnLCAgIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnR2xvYmFsIEZlZWQnLCBhY3RpdmUgIDogdHJ1ZX1cbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxvZ2dlZEluXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgbG9nZ2VkSW5fOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcGFnZVNpemVfPTEwXG4gICAgICAgICAqL1xuICAgICAgICBwYWdlU2l6ZV86IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50W119IHByZXZpZXdDb21wb25lbnRzPVtdXG4gICAgICAgICAqL1xuICAgICAgICBwcmV2aWV3Q29tcG9uZW50czogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtSZWFsV29ybGQudmlldy5hcnRpY2xlLlRhZ0xpc3RDb21wb25lbnR8bnVsbH0gdGFnTGlzdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2Jhbm5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdoMScsIGNsczogWydsb2dvLWZvbnQnXSwgaHRtbDogJ2NvbmR1aXQnfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ3AnLCBodG1sOiAnQSBwbGFjZSB0byBzaGFyZSB5b3VyIGtub3dsZWRnZS4nfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJywgJ3BhZ2UnXSwgY246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ3JvdyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC1tZC05J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2ZlZWQtdG9nZ2xlJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3VsJywgY2xzOiBbJ25hdicsICduYXYtcGlsbHMnLCAnb3V0bGluZS1hY3RpdmUnXSwgZmxhZzogJ2ZlZWQtaGVhZGVyJywgY246IFtdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbmF2JywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndWwnLCBjbHM6IFsncGFnaW5hdGlvbiddLCBmbGFnOiAncGFnaW5hdGlvbid9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUV2ZW50cy5yZWdpc3RlclByZXZlbnREZWZhdWx0VGFyZ2V0cyh7XG4gICAgICAgICAgICBuYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgY2xzIDogJ3ByZXZlbnQtY2xpY2snXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuYWRkRG9tTGlzdGVuZXJzKFtcbiAgICAgICAgICAgIHtjbGljazoge2ZuOiBtZS5vbk5hdkxpbmtDbGljaywgICAgIGRlbGVnYXRlOiAnLm5hdi1saW5rJywgIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uUGFnZU5hdkxpbmtDbGljaywgZGVsZWdhdGU6ICcucGFnZS1saW5rJywgc2NvcGU6IG1lfX1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLm9uKHtcbiAgICAgICAgICAgIGFmdGVyU2V0Q3VycmVudFVzZXI6IG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnRhZ0xpc3QgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgOiBUYWdMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkLFxuXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdDaGFuZ2U6IG1lLm9uVGFnQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbS5jblsxXS5jblswXS5jbi5wdXNoKG1lLnRhZ0xpc3QudmRvbSk7XG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXJ0aWNsZVByZXZpZXdzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXJ0aWNsZVByZXZpZXdzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IG1lLmdldENvbnRhaW5lcigpLFxuICAgICAgICAgICAgZm9vdGVyICAgID0gY29udGFpbmVyLmNuLnBvcCgpLFxuICAgICAgICAgICAgY29uZmlnO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbiA9IFtjb250YWluZXIuY24uc2hpZnQoKV07XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yICAgICAgICA6IGl0ZW0uYXV0aG9yLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQgICAgIDogaXRlbS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICAgOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZWQgICAgIDogaXRlbS5mYXZvcml0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlc0NvdW50OiBpdGVtLmZhdm9yaXRlc0NvdW50LFxuICAgICAgICAgICAgICAgICAgICBzbHVnICAgICAgICAgIDogaXRlbS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICB0YWdMaXN0ICAgICAgIDogaXRlbS50YWdMaXN0LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSAgICAgICAgIDogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlckltYWdlICAgICA6IGl0ZW0uYXV0aG9yLmltYWdlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICghbWUucHJldmlld0NvbXBvbmVudHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnByZXZpZXdDb21wb25lbnRzW2luZGV4XSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICA6IFByZXZpZXdDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWUucHJldmlld0NvbXBvbmVudHNbaW5kZXhdLnNldChjb25maWcsIHRydWUpOyAvLyBoaW50OiB0cnkgdGhpcyBjYWxsIHdpdGggZmFsc2UgYW5kIGNvbXBhcmUgdGhlIGRlbHRhIHVwZGF0ZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuY24ucHVzaChtZS5wcmV2aWV3Q29tcG9uZW50c1tpbmRleF0udmRvbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5jbi5wdXNoKGZvb3Rlcik7XG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY291bnRBcnRpY2xlcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDb3VudEFydGljbGVzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcGFnaW5hdGlvbiAgPSBWRG9tVXRpbC5nZXRCeUZsYWcobWUudmRvbSwgJ3BhZ2luYXRpb24nKSxcbiAgICAgICAgICAgIHBhZ2VTaXplICAgID0gbWUucGFnZVNpemUsXG4gICAgICAgICAgICBjb3VudFBhZ2VzICA9IE1hdGguY2VpbCh2YWx1ZSAvIHBhZ2VTaXplKSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gbWUuY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDEsXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKGNvdW50UGFnZXMgPCAyKSB7XG4gICAgICAgICAgICAvLyB0b2RvOiBoaWRlIHRoZSBwYWdpbmcgYmJhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFnaW5hdGlvbi5jbiA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8PSBjb3VudFBhZ2VzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjbHMgPSBbJ3BhZ2UtaXRlbSddO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNscy5wdXNoKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGNscyxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogWydwYWdlLWxpbmsnLCAncHJldmVudC1jbGljayddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgIDogbWUuZ2V0TmF2TGlua1Zkb21JZChpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogaVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWUudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjdXJyZW50UGFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDdXJyZW50UGFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUsIG9sZE5vZGU7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG5vZGUgICAgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKG1lLnZkb20sIG1lLmdldE5hdkxpbmtWZG9tSWQodmFsdWUpKS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgb2xkTm9kZSA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQobWUudmRvbSwgbWUuZ2V0TmF2TGlua1Zkb21JZChvbGRWYWx1ZSkpLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChub2RlLmNscywgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG9sZE5vZGUuY2xzLCAnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuXG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuX2FydGljbGVzT2Zmc2V0ID0gKHZhbHVlIC0gMSkgKiBtZS5wYWdlU2l6ZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuZ2V0QXJ0aWNsZXMoKTtcblxuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLndpbmRvd1Njcm9sbFRvKHt9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmVlZHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZlZWRzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGZlZWRIZWFkZXIgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZlZWQtaGVhZGVyJyksXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgZmVlZEhlYWRlci5jbiA9IFtdO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjbHMgPSBbJ3ByZXZlbnQtY2xpY2snLCAnbmF2LWxpbmsnXTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlKSAgIHtjbHMucHVzaCgnYWN0aXZlJyk7fVxuICAgICAgICAgICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtjbHMucHVzaCgnZGlzYWJsZWQnKTt9XG5cbiAgICAgICAgICAgIGZlZWRIZWFkZXIuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGknLFxuICAgICAgICAgICAgICAgIGNsczogWyduYXYtaXRlbSddLFxuICAgICAgICAgICAgICAgIGlkIDogbWUuaWQgKyAnX19uYXYtaXRlbV8nICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgOiAnYScsXG4gICAgICAgICAgICAgICAgICAgIGNscyA6IGNscyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQgIDogbWUuaWQgKyAnX19uYXYtaXRlbS1saW5rXycgKyBpbmRleCxcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbG9nZ2VkSW4gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMb2dnZWRJbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbmF2SXRlbSA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQobWUudmRvbSwgbWUuaWQgKyAnX19uYXYtaXRlbS1saW5rXzAnKS52ZG9tO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID8gJ3JlbW92ZScgOiAnYWRkJ10obmF2SXRlbS5jbHMsICdkaXNhYmxlZCcpO1xuICAgICAgICBtZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBwYWdlU2l6ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQYWdlU2l6ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGkgID0gMDtcblxuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXJTZXRQYWdlU2l6ZScsIHZhbHVlKTtcblxuICAgICAgICBmb3IgKDsgaSA8IHZhbHVlOyBpKyspIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhcnRpY2xlIGlkIHVzaW5nIHRoZSB2aWV3IGlkIGFzIGEgcHJlZml4XG4gICAgICogQHJldHVybnMge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0QXJ0aWNsZUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKi9cbiAgICBnZXRBcnRpY2xlcyhwYXJhbXM9e30sIG9wdHM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuYWN0aXZlVGFnKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgdGFnOiBtZS5hY3RpdmVUYWcsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLmdldEFydGljbGVzKHBhcmFtcywgb3B0cykudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLnNldCh7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZVByZXZpZXdzOiBkYXRhLmpzb24uYXJ0aWNsZXMsXG4gICAgICAgICAgICAgICAgY291bnRBcnRpY2xlcyAgOiBkYXRhLmpzb24uYXJ0aWNsZXNDb3VudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBnZXRDb250YWluZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodGhpcy52ZG9tLCB7Y2xzOiAnY29sLW1kLTknfSk7XG4gICAgICAgIHJldHVybiBlbD8udmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZUlkXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXROYXZMaW5rSWQobm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChub2RlSWQuc3BsaXQoJ19fJylbMV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldE5hdkxpbmtWZG9tSWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk5hdkxpbmtDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGVsICAgICAgICAgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKG1lLnZkb20sIGRhdGEucGF0aFswXS5pZCksXG4gICAgICAgICAgICBmZWVkSGVhZGVyID0gVkRvbVV0aWwuZ2V0QnlGbGFnKG1lLnZkb20sICdmZWVkLWhlYWRlcicpLFxuICAgICAgICAgICAgb3B0cyAgICAgICA9IHt9O1xuXG4gICAgICAgIGlmICghZWwudmRvbS5jbHMuaW5jbHVkZXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHN3aXRjaChlbC52ZG9tLmh0bWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdHbG9iYWwgRmVlZCc6XG4gICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZVRhZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1lvdXIgRmVlZCc6XG4gICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZVRhZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnZmVlZCdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8gdGFnXG4gICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZVRhZyA9IGVsLnZkb20uaHRtbC5zdWJzdHJpbmcoMik7IC8vIHJlbW92ZSB0aGUgJyMgJ1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmVlZEhlYWRlci5jbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5W2l0ZW0uaWQgPT09IGVsLnBhcmVudE5vZGUuaWQgPyAnYWRkJyA6ICdyZW1vdmUnXShpdGVtLmNuWzBdLmNscywgJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgbWUuX2N1cnJlbnRQYWdlID0gMTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5fYXJ0aWNsZXNPZmZzZXQgPSAwOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICBtZS5nZXRBcnRpY2xlcyh7fSwgb3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKi9cbiAgICBvbkN1cnJlbnRVc2VyQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSAhIXZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25QYWdlTmF2TGlua0NsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMuZ2V0TmF2TGlua0lkKGRhdGEucGF0aFswXS5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvcHRzLm9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb3B0cy52YWx1ZVxuICAgICAqL1xuICAgIG9uVGFnQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZlZWRzID0gbWUuZmVlZHMsXG4gICAgICAgICAgICBuYW1lICA9ICcjICcgKyBvcHRzLnZhbHVlO1xuXG4gICAgICAgIGZlZWRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmVlZHMubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgZmVlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihmZWVkc1syXSwge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmFjdGl2ZVRhZyAgICA9IG9wdHMudmFsdWU7XG4gICAgICAgIG1lLl9jdXJyZW50UGFnZSA9IDE7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgbWUuZmVlZHMgICAgICAgID0gZmVlZHM7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLl9hcnRpY2xlc09mZnNldCA9IDA7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICBtZS5nZXRBcnRpY2xlcyh7XG4gICAgICAgICAgICB0YWc6IG9wdHMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIb21lQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgUHJldmlld0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5hcnRpY2xlLlByZXZpZXdDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuUHJldmlld0NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYXV0aG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhdXRob3JfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9WydhcnRpY2xlLXByZXZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWydhcnRpY2xlLXByZXZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElTTyA4NjAxIHRpbWVzdGFtcFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY3JlYXRlZEF0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVkQXRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRlc2NyaXB0aW9uXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkZXNjcmlwdGlvbl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmYXZvcml0ZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBmYXZvcml0ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBmYXZvcml0ZXNDb3VudF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmF2b3JpdGVzQ291bnRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNsdWdfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNsdWdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gdGFnTGlzdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdGl0bGVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRpdGxlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VySW1hZ2VfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJJbWFnZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2FydGljbGUtbWV0YSddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWcgOiAnYScsIGZsYWc6ICd1c2VySW1hZ2VMaW5rJywgY246IFt7dGFnOiAnaW1nJ31dfSxcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ2luZm8nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCAgICBjbHM6IFsnYXV0aG9yJ10sIGZsYWc6ICdhdXRob3InfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnZGF0ZSddLCAgIGZsYWc6ICdjcmVhdGVkQXQnfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1zbScsICdwdWxsLXhzLXJpZ2h0J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi1oZWFydCddfSxcbiAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGZsYWc6ICdmYXZvcml0ZXNDb3VudCd9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAge3RhZzogJ2EnLCBjbHMgOiBbJ3ByZXZpZXctbGluayddLCBmbGFnOiAncHJldmlldy1saW5rJywgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnaDEnLCAgIGZsYWc6ICd0aXRsZSd9LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgICAgZmxhZzogJ2Rlc2NyaXB0aW9uJ30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBodG1sOiAnUmVhZCBtb3JlLi4uJ31cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5hZGREb21MaXN0ZW5lcnMoe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogbWUub25GYXZvcml0ZUJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLnB1bGwteHMtcmlnaHQnLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGF1dGhvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBdXRob3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYXV0aG9yJyksXG4gICAgICAgICAgICBocmVmID0gJyMvcHJvZmlsZS8nICsgdmFsdWU7XG5cbiAgICAgICAgbm9kZS5ocmVmID0gaHJlZjtcbiAgICAgICAgbm9kZS5odG1sID0gdmFsdWU7XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd1c2VySW1hZ2VMaW5rJykuaHJlZiA9IGhyZWY7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjcmVhdGVkQXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3JlYXRlZEF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodGhpcy52ZG9tLCAnY3JlYXRlZEF0JykuaHRtbCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgeWVhciA6ICdudW1lcmljJ1xuICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGVzY3JpcHRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGVzY3JpcHRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh0aGlzLnZkb20sICdkZXNjcmlwdGlvbicpLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZhdm9yaXRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZhdm9yaXRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidXR0b24gPSBtZS52ZG9tLmNuWzBdLmNuWzJdO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChidXR0b24uY2xzLCB2YWx1ZSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xuICAgICAgICBOZW9BcnJheS5yZW1vdmUoYnV0dG9uLmNscywgdmFsdWUgPyAnYnRuLW91dGxpbmUtcHJpbWFyeScgOiAnYnRuLXByaW1hcnknKTtcblxuICAgICAgICBtZS51cGRhdGUoKTtcblxuICAgICAgICAvLyBpZ25vcmUgdGhlIGluaXRpYWwgc2V0dGVyIGNhbGxcbiAgICAgICAgaWYgKE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuZmF2b3JpdGVBcnRpY2xlKG1lLnNsdWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmF2b3JpdGVzQ291bnQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmF2b3JpdGVzQ291bnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh0aGlzLnZkb20sICdmYXZvcml0ZXNDb3VudCcpLmh0bWwgPSAnICcgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNsdWcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2x1Zyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ3ByZXZpZXctbGluaycpLmhyZWYgPSAnIy9hcnRpY2xlLycgKyB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ0xpc3QgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ0xpc3QodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgdGFnTGlzdDtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHRhZ3MgaWYgZXhpc3RzXG4gICAgICAgIGlmICh2ZG9tLmNuWzFdLmNuWzNdKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhZ0xpc3QgPSB7XG4gICAgICAgICAgICAgICAgdGFnOiAndWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyd0YWctbGlzdCddLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGFnTGlzdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzIDogWyd0YWctZGVmYXVsdCcsICd0YWctcGlsbCcsICd0YWctb3V0bGluZSddLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuLnB1c2godGFnTGlzdCk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aXRsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaXRsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ3RpdGxlJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlckltYWdlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZXJJbWFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ3VzZXJJbWFnZUxpbmsnKS5jblswXS5zcmMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmF2b3JpdGVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmF2b3JpdGVkID0gIW1lLmZhdm9yaXRlZDtcblxuICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgZmF2b3JpdGVkLFxuICAgICAgICAgICAgZmF2b3JpdGVzQ291bnQ6IGZhdm9yaXRlZCA/IChtZS5mYXZvcml0ZXNDb3VudCArIDEpIDogKG1lLmZhdm9yaXRlc0NvdW50IC0gMSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQcmV2aWV3Q29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJldmlld0NvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFRhZ0xpc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIG9ic2VydmFibGUgPSB0cnVlXG5cbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5UYWdMaXN0Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY3RpdmVUYWdfXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVUYWdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGJhc2VDbHM9Wydjb2wtbWQtMyddXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiBbJ2NvbC1tZC0zJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdGFnc189W11cbiAgICAgICAgICovXG4gICAgICAgIHRhZ3NfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnc2lkZWJhciddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgaHRtbDogJ1BvcHVsYXIgVGFncyd9LFxuICAgICAgICAgICAgICAgIHtjbHM6IFsndGFnLWxpc3QnXX1cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tRXZlbnRzLnJlZ2lzdGVyUHJldmVudERlZmF1bHRUYXJnZXRzKHtcbiAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXG4gICAgICAgICAgICBjbHMgOiAndGFnLXBpbGwnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuYWRkRG9tTGlzdGVuZXJzKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6IG1lLm9uVGFnTGlua0NsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLnRhZy1waWxsJyxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhY3RpdmVUYWcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBY3RpdmVUYWcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ3RhZ0NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ3MgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUYWdzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnZkb20uY25bMF0uY25bMV0uY24gPSBbXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudmRvbS5jblswXS5jblsxXS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ3RhZy1waWxsJywgJ3RhZy1kZWZhdWx0J10sXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBpZCAgOiBtZS5nZXRUYWdWZG9tSWQoaXRlbSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldFRhZ0lkKG5vZGVJZCkge1xuICAgICAgICByZXR1cm4gbm9kZUlkLnNwbGl0KCdfXycpWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUYWdWZG9tSWQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBuYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25UYWdMaW5rQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhZyA9IHRoaXMuZ2V0VGFnSWQoZGF0YS5wYXRoWzBdLmlkKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhZ0xpc3RDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBUYWdMaXN0Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
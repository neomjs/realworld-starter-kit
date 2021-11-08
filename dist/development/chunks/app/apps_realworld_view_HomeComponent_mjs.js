"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_HomeComponent_mjs"],{

/***/ "./apps/realworld/view/HomeComponent.mjs":
/*!***********************************************!*\
  !*** ./apps/realworld/view/HomeComponent.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeComponent)
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
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

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
     *
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
     *
     * @returns {Object} vdom
     */
    getContainer() {
        let el = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(this.vdom, {cls: 'col-md-9'});
        return el?.vdom;
    }

    /**
     *
     * @param {String} nodeId
     * @returns {Number}
     */
    getNavLinkId(nodeId) {
        return parseInt(nodeId.split('__')[1]);
    }

    /**
     *
     * @param {Number|String} id
     * @returns {String}
     */
    getNavLinkVdomId(id) {
        return this.id + '__' + id;
    }

    /**
     *
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
     *
     * @param {Object} value
     */
    onCurrentUserChange(value) {
        this.loggedIn = !!value;
    }

    /**
     *
     * @param {Object} data
     */
    onPageNavLinkClick(data) {
        this.currentPage = this.getNavLinkId(data.path[0].id);
    }

    /**
     *
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




/***/ }),

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
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

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
     *
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

/***/ "./apps/realworld/view/article/TagListComponent.mjs":
/*!**********************************************************!*\
  !*** ./apps/realworld/view/article/TagListComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagListComponent)
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
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

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
     *
     * @param {String} nodeId
     * @returns {String}
     */
    getTagId(nodeId) {
        return nodeId.split('__')[1];
    }

    /**
     *
     * @param {String} name
     * @returns {String}
     */
    getTagVdomId(name) {
        return this.id + '__' + name;
    }

    /**
     *
     * @param {Object} data
     */
    onTagLinkClick(data) {
        this.activeTag = this.getTagId(data.path[0].id);
    }
}

Neo.applyClassConfig(TagListComponent);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X0hvbWVDb21wb25lbnRfbWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRjtBQUNKO0FBQ2xCO0FBQ0E7QUFDaUI7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9GQUFTO0FBQ3JDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBLGFBQWEsb0NBQW9DO0FBQ2pELGFBQWE7QUFDYjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUEyQztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQThDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQix5QkFBeUIsK0NBQStDO0FBQ3hFLHlCQUF5QjtBQUN6QjtBQUNBLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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WyJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC92aWV3L0hvbWVDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL1ByZXZpZXdDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL1RhZ0xpc3RDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBQcmV2aWV3Q29tcG9uZW50IGZyb20gJy4vYXJ0aWNsZS9QcmV2aWV3Q29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgVGFnTGlzdENvbXBvbmVudCBmcm9tICcuL2FydGljbGUvVGFnTGlzdENvbXBvbmVudC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5Ib21lQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgSG9tZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LkhvbWVDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LkhvbWVDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGFjdGl2ZVRhZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVUYWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBhcnRpY2xlUHJldmlld3NfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGFydGljbGVQcmV2aWV3c186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnaG9tZS1wYWdlJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydob21lLXBhZ2UnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRBcnRpY2xlc189MTBcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50QXJ0aWNsZXNfOiAxMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnRBcnRpY2xlc189MTBcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnRQYWdlXzogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBmZWVkc19cbiAgICAgICAgICovXG4gICAgICAgIGZlZWRzXzogW1xuICAgICAgICAgICAge25hbWU6ICdZb3VyIEZlZWQnLCAgIGRpc2FibGVkOiB0cnVlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnR2xvYmFsIEZlZWQnLCBhY3RpdmUgIDogdHJ1ZX1cbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxvZ2dlZEluXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgbG9nZ2VkSW5fOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcGFnZVNpemVfPTEwXG4gICAgICAgICAqL1xuICAgICAgICBwYWdlU2l6ZV86IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50W119IHByZXZpZXdDb21wb25lbnRzPVtdXG4gICAgICAgICAqL1xuICAgICAgICBwcmV2aWV3Q29tcG9uZW50czogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtSZWFsV29ybGQudmlldy5hcnRpY2xlLlRhZ0xpc3RDb21wb25lbnR8bnVsbH0gdGFnTGlzdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAgICAgIHtjbjogW1xuICAgICAgICAgICAgICAgIHtjbHM6IFsnYmFubmVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaDEnLCBjbHM6IFsnbG9nby1mb250J10sIGh0bWw6ICdjb25kdWl0J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAncCcsIGh0bWw6ICdBIHBsYWNlIHRvIHNoYXJlIHlvdXIga25vd2xlZGdlLid9XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAge2NsczogWydjb250YWluZXInLCAncGFnZSddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ3JvdyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge2NsczogWydjb2wtbWQtOSddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsnZmVlZC10b2dnbGUnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3VsJywgY2xzOiBbJ25hdicsICduYXYtcGlsbHMnLCAnb3V0bGluZS1hY3RpdmUnXSwgZmxhZzogJ2ZlZWQtaGVhZGVyJywgY246IFtdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICduYXYnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndWwnLCBjbHM6IFsncGFnaW5hdGlvbiddLCBmbGFnOiAncGFnaW5hdGlvbid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUV2ZW50cy5yZWdpc3RlclByZXZlbnREZWZhdWx0VGFyZ2V0cyh7XG4gICAgICAgICAgICBuYW1lOiAnY2xpY2snLFxuICAgICAgICAgICAgY2xzIDogJ3ByZXZlbnQtY2xpY2snXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uTmF2TGlua0NsaWNrLCAgICAgZGVsZWdhdGU6ICcubmF2LWxpbmsnLCAgc2NvcGU6IG1lfX0sXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25QYWdlTmF2TGlua0NsaWNrLCBkZWxlZ2F0ZTogJy5wYWdlLWxpbmsnLCBzY29wZTogbWV9fVxuICAgICAgICApO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkub24oe1xuICAgICAgICAgICAgYWZ0ZXJTZXRDdXJyZW50VXNlcjogbWUub25DdXJyZW50VXNlckNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLnRhZ0xpc3QgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgOiBUYWdMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkLFxuXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICB0YWdDaGFuZ2U6IG1lLm9uVGFnQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmRvbS5jblsxXS5jblswXS5jbi5wdXNoKG1lLnRhZ0xpc3QudmRvbSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhcnRpY2xlUHJldmlld3MgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBcnRpY2xlUHJldmlld3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gbWUuZ2V0Q29udGFpbmVyKCksXG4gICAgICAgICAgICBmb290ZXIgICAgPSBjb250YWluZXIuY24ucG9wKCksXG4gICAgICAgICAgICB2ZG9tICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY29uZmlnO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbiA9IFtjb250YWluZXIuY24uc2hpZnQoKV07XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yICAgICAgICA6IGl0ZW0uYXV0aG9yLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQgICAgIDogaXRlbS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICAgOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZWQgICAgIDogaXRlbS5mYXZvcml0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlc0NvdW50OiBpdGVtLmZhdm9yaXRlc0NvdW50LFxuICAgICAgICAgICAgICAgICAgICBzbHVnICAgICAgICAgIDogaXRlbS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICB0YWdMaXN0ICAgICAgIDogaXRlbS50YWdMaXN0LFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSAgICAgICAgIDogaXRlbS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlckltYWdlICAgICA6IGl0ZW0uYXV0aG9yLmltYWdlXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICghbWUucHJldmlld0NvbXBvbmVudHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnByZXZpZXdDb21wb25lbnRzW2luZGV4XSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICA6IFByZXZpZXdDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWUucHJldmlld0NvbXBvbmVudHNbaW5kZXhdLnNldChjb25maWcsIHRydWUpOyAvLyBoaW50OiB0cnkgdGhpcyBjYWxsIHdpdGggZmFsc2UgYW5kIGNvbXBhcmUgdGhlIGRlbHRhIHVwZGF0ZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuY24ucHVzaChtZS5wcmV2aWV3Q29tcG9uZW50c1tpbmRleF0udmRvbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5jbi5wdXNoKGZvb3Rlcik7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjb3VudEFydGljbGVzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENvdW50QXJ0aWNsZXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBwYWdpbmF0aW9uICA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAncGFnaW5hdGlvbicpLFxuICAgICAgICAgICAgcGFnZVNpemUgICAgPSBtZS5wYWdlU2l6ZSxcbiAgICAgICAgICAgIGNvdW50UGFnZXMgID0gTWF0aC5jZWlsKHZhbHVlIC8gcGFnZVNpemUpLFxuICAgICAgICAgICAgY3VycmVudFBhZ2UgPSBtZS5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMSxcbiAgICAgICAgICAgIGNscztcblxuICAgICAgICBpZiAoY291bnRQYWdlcyA8IDIpIHtcbiAgICAgICAgICAgIC8vIHRvZG86IGhpZGUgdGhlIHBhZ2luZyBiYmFyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uLmNuID0gW107XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDw9IGNvdW50UGFnZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGNscyA9IFsncGFnZS1pdGVtJ107XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzLnB1c2goJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBjbHMsXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA6ICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyA6IFsncGFnZS1saW5rJywgJ3ByZXZlbnQtY2xpY2snXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICA6IG1lLmdldE5hdkxpbmtWZG9tSWQoaSksXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGlcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3VycmVudFBhZ2UgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3VycmVudFBhZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgbm9kZSwgb2xkTm9kZTtcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgbm9kZSAgICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmRvbSwgbWUuZ2V0TmF2TGlua1Zkb21JZCh2YWx1ZSkpLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBvbGROb2RlID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh2ZG9tLCBtZS5nZXROYXZMaW5rVmRvbUlkKG9sZFZhbHVlKSkucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKG5vZGUuY2xzLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUob2xkTm9kZS5jbHMsICdhY3RpdmUnKTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5fYXJ0aWNsZXNPZmZzZXQgPSAodmFsdWUgLSAxKSAqIG1lLnBhZ2VTaXplOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICBtZS5nZXRBcnRpY2xlcygpO1xuXG4gICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Mud2luZG93U2Nyb2xsVG8oe30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmZWVkcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmVlZHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgZmVlZEhlYWRlciA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZmVlZC1oZWFkZXInKSxcbiAgICAgICAgICAgIGNscztcblxuICAgICAgICBmZWVkSGVhZGVyLmNuID0gW107XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNscyA9IFsncHJldmVudC1jbGljaycsICduYXYtbGluayddO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5hY3RpdmUpICAge2Nscy5wdXNoKCdhY3RpdmUnKTt9XG4gICAgICAgICAgICBpZiAoaXRlbS5kaXNhYmxlZCkge2Nscy5wdXNoKCdkaXNhYmxlZCcpO31cblxuICAgICAgICAgICAgZmVlZEhlYWRlci5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsaScsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25hdi1pdGVtJ10sXG4gICAgICAgICAgICAgICAgaWQgOiBtZS5pZCArICdfX25hdi1pdGVtXycgKyBpbmRleCxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2EnLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IGNscyxcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogJycsXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWQgIDogbWUuaWQgKyAnX19uYXYtaXRlbS1saW5rXycgKyBpbmRleCxcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbG9nZ2VkSW4gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMb2dnZWRJbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBuYXZJdGVtID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh2ZG9tLCBtZS5pZCArICdfX25hdi1pdGVtLWxpbmtfMCcpLnZkb207XG5cbiAgICAgICAgTmVvQXJyYXlbdmFsdWUgPyAncmVtb3ZlJyA6ICdhZGQnXShuYXZJdGVtLmNscywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG9cbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHBhZ2VTaXplIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFBhZ2VTaXplKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaSAgPSAwO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdhZnRlclNldFBhZ2VTaXplJywgdmFsdWUpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgdmFsdWU7IGkrKykge1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGFydGljbGUgaWQgdXNpbmcgdGhlIHZpZXcgaWQgYXMgYSBwcmVmaXhcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKi9cbiAgICBnZXRBcnRpY2xlSWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17fV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dXG4gICAgICovXG4gICAgZ2V0QXJ0aWNsZXMocGFyYW1zPXt9LCBvcHRzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmFjdGl2ZVRhZykge1xuICAgICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHRhZzogbWUuYWN0aXZlVGFnLFxuICAgICAgICAgICAgICAgIC4uLnBhcmFtc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5nZXRBcnRpY2xlcyhwYXJhbXMsIG9wdHMpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgICAgIGFydGljbGVQcmV2aWV3czogZGF0YS5qc29uLmFydGljbGVzLFxuICAgICAgICAgICAgICAgIGNvdW50QXJ0aWNsZXMgIDogZGF0YS5qc29uLmFydGljbGVzQ291bnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBnZXRDb250YWluZXIoKSB7XG4gICAgICAgIGxldCBlbCA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodGhpcy52ZG9tLCB7Y2xzOiAnY29sLW1kLTknfSk7XG4gICAgICAgIHJldHVybiBlbD8udmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldE5hdkxpbmtJZChub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG5vZGVJZC5zcGxpdCgnX18nKVsxXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXROYXZMaW5rVmRvbUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk5hdkxpbmtDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgZWwgICAgICAgICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmRvbSwgZGF0YS5wYXRoWzBdLmlkKSxcbiAgICAgICAgICAgIGZlZWRIZWFkZXIgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ZlZWQtaGVhZGVyJyksXG4gICAgICAgICAgICBvcHRzICAgICAgID0ge307XG5cbiAgICAgICAgaWYgKCFlbC52ZG9tLmNscy5pbmNsdWRlcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgc3dpdGNoKGVsLnZkb20uaHRtbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0dsb2JhbCBGZWVkJzpcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlVGFnID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnWW91ciBGZWVkJzpcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlVGFnID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdmZWVkJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAvLyB0YWdcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlVGFnID0gZWwudmRvbS5odG1sLnN1YnN0cmluZygyKTsgLy8gcmVtb3ZlIHRoZSAnIyAnXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmZWVkSGVhZGVyLmNuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXlbaXRlbS5pZCA9PT0gZWwucGFyZW50Tm9kZS5pZCA/ICdhZGQnIDogJ3JlbW92ZSddKGl0ZW0uY25bMF0uY2xzLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBtZS5fY3VycmVudFBhZ2UgPSAxOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLl9hcnRpY2xlc09mZnNldCA9IDA7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIG1lLmdldEFydGljbGVzKHt9LCBvcHRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICovXG4gICAgb25DdXJyZW50VXNlckNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvZ2dlZEluID0gISF2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25QYWdlTmF2TGlua0NsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMuZ2V0TmF2TGlua0lkKGRhdGEucGF0aFswXS5pZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9wdHMub2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvcHRzLnZhbHVlXG4gICAgICovXG4gICAgb25UYWdDaGFuZ2Uob3B0cykge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmVlZHMgPSBtZS5mZWVkcyxcbiAgICAgICAgICAgIG5hbWUgID0gJyMgJyArIG9wdHMudmFsdWU7XG5cbiAgICAgICAgZmVlZHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmZWVkcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBmZWVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZSAgOiBuYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZmVlZHNbMl0sIHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZSAgOiBuYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmFjdGl2ZVRhZyAgICA9IG9wdHMudmFsdWU7XG4gICAgICAgIG1lLl9jdXJyZW50UGFnZSA9IDE7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgbWUuZmVlZHMgICAgICAgID0gZmVlZHM7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLl9hcnRpY2xlc09mZnNldCA9IDA7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICBtZS5nZXRBcnRpY2xlcyh7XG4gICAgICAgICAgICB0YWc6IG9wdHMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIb21lQ29tcG9uZW50KTtcblxuZXhwb3J0IHtIb21lQ29tcG9uZW50IGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5hcnRpY2xlLlByZXZpZXdDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBQcmV2aWV3Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5QcmV2aWV3Q29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy5hcnRpY2xlLlByZXZpZXdDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGF1dGhvcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYXV0aG9yXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydhcnRpY2xlLXByZXZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2FydGljbGUtcHJldmlldyddLFxuICAgICAgICAvKipcbiAgICAgICAgICogSVNPIDg2MDEgdGltZXN0YW1wXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjcmVhdGVkQXRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZWRBdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGVzY3JpcHRpb25fPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlc2NyaXB0aW9uXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZhdm9yaXRlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGZhdm9yaXRlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGZhdm9yaXRlc0NvdW50Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmYXZvcml0ZXNDb3VudF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc2x1Z189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2x1Z186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSB0YWdMaXN0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWdMaXN0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0aXRsZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGl0bGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVzZXJJbWFnZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlckltYWdlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnYXJ0aWNsZS1tZXRhJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge3RhZyA6ICdhJywgZmxhZzogJ3VzZXJJbWFnZUxpbmsnLCBjbjogW3t0YWc6ICdpbWcnfV19LFxuICAgICAgICAgICAgICAgIHtjbHM6IFsnaW5mbyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsICAgIGNsczogWydhdXRob3InXSwgZmxhZzogJ2F1dGhvcid9LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWydkYXRlJ10sICAgZmxhZzogJ2NyZWF0ZWRBdCd9XG4gICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAge3RhZzogJ2J1dHRvbicsIGNsczogWydidG4nLCAnYnRuLXNtJywgJ3B1bGwteHMtcmlnaHQnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLWhlYXJ0J119LFxuICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgZmxhZzogJ2Zhdm9yaXRlc0NvdW50J31cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7dGFnOiAnYScsIGNscyA6IFsncHJldmlldy1saW5rJ10sIGZsYWc6ICdwcmV2aWV3LWxpbmsnLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdoMScsICAgZmxhZzogJ3RpdGxlJ30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3AnLCAgICBmbGFnOiAnZGVzY3JpcHRpb24nfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGh0bWw6ICdSZWFkIG1vcmUuLi4nfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogbWUub25GYXZvcml0ZUJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLnB1bGwteHMtcmlnaHQnLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhdXRob3IgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXV0aG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2F1dGhvcicpLFxuICAgICAgICAgICAgaHJlZiA9ICcjL3Byb2ZpbGUvJyArIHZhbHVlO1xuXG4gICAgICAgIG5vZGUuaHJlZiA9IGhyZWY7XG4gICAgICAgIG5vZGUuaHRtbCA9IHZhbHVlO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndXNlckltYWdlTGluaycpLmhyZWYgPSBocmVmO1xuXG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjcmVhdGVkQXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3JlYXRlZEF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2NyZWF0ZWRBdCcpLmh0bWwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgICAgICBkYXkgIDogJ251bWVyaWMnLFxuICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgfSkuZm9ybWF0KG5ldyBEYXRlKHZhbHVlKSk7XG5cbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRlc2NyaXB0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERlc2NyaXB0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2Rlc2NyaXB0aW9uJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmF2b3JpdGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmF2b3JpdGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICA9IG1lLnZkb20sXG4gICAgICAgICAgICBidXR0b24gPSB2ZG9tLmNuWzBdLmNuWzJdO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChidXR0b24uY2xzLCB2YWx1ZSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xuICAgICAgICBOZW9BcnJheS5yZW1vdmUoYnV0dG9uLmNscywgdmFsdWUgPyAnYnRuLW91dGxpbmUtcHJpbWFyeScgOiAnYnRuLXByaW1hcnknKTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAvLyBpZ25vcmUgdGhlIGluaXRpYWwgc2V0dGVyIGNhbGxcbiAgICAgICAgaWYgKE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkuZmF2b3JpdGVBcnRpY2xlKG1lLnNsdWcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmF2b3JpdGVzQ291bnQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmF2b3JpdGVzQ291bnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZmF2b3JpdGVzQ291bnQnKS5odG1sID0gJyAnICsgdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzbHVnIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNsdWcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAncHJldmlldy1saW5rJykuaHJlZiA9ICcjL2FydGljbGUvJyArIHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGFnTGlzdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGFnTGlzdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb20sXG4gICAgICAgICAgICB0YWdMaXN0O1xuXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgdGFncyBpZiBleGlzdHNcbiAgICAgICAgaWYgKHZkb20uY25bMV0uY25bM10pIHtcbiAgICAgICAgICAgIHZkb20uY25bMV0uY24ucG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFnTGlzdCA9IHtcbiAgICAgICAgICAgICAgICB0YWc6ICd1bCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ3RhZy1saXN0J10sXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0YWdMaXN0LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0YWcgOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ3RhZy1kZWZhdWx0JywgJ3RhZy1waWxsJywgJ3RhZy1vdXRsaW5lJ10sXG4gICAgICAgICAgICAgICAgICAgIGh0bWw6IGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0uY24ucHVzaCh0YWdMaXN0KTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRpdGxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRpdGxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3RpdGxlJykuaHRtbCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlckltYWdlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZXJJbWFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd1c2VySW1hZ2VMaW5rJykuY25bMF0uc3JjID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmF2b3JpdGVCdXR0b25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmF2b3JpdGVkID0gIW1lLmZhdm9yaXRlZDtcblxuICAgICAgICBtZS5zZXQoe1xuICAgICAgICAgICAgZmF2b3JpdGVkICAgICA6IGZhdm9yaXRlZCxcbiAgICAgICAgICAgIGZhdm9yaXRlc0NvdW50OiBmYXZvcml0ZWQgPyAobWUuZmF2b3JpdGVzQ291bnQgKyAxKSA6IChtZS5mYXZvcml0ZXNDb3VudCAtIDEpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUHJldmlld0NvbXBvbmVudCk7XG5cbmV4cG9ydCB7UHJldmlld0NvbXBvbmVudCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFRhZ0xpc3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlLk9ic2VydmFibGUgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LmFydGljbGUuVGFnTGlzdENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5UYWdMaXN0Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY3RpdmVUYWdfXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVUYWdfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NvbC1tZC0zJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWydjb2wtbWQtMyddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHRhZ3NfPVtdXG4gICAgICAgICAqL1xuICAgICAgICB0YWdzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ3NpZGViYXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAncCcsIGh0bWw6ICdQb3B1bGFyIFRhZ3MnfSxcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ3RhZy1saXN0J119XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBOZW8ubWFpbi5Eb21FdmVudHMucmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMoe1xuICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcbiAgICAgICAgICAgIGNscyA6ICd0YWctcGlsbCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogbWUub25UYWdMaW5rQ2xpY2ssXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcudGFnLXBpbGwnLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhY3RpdmVUYWcgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBY3RpdmVUYWcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ3RhZ0NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGFncyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uY25bMV0uY24gPSBbXTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdmRvbS5jblswXS5jblsxXS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgOiBbJ3RhZy1waWxsJywgJ3RhZy1kZWZhdWx0J10sXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICcnLFxuICAgICAgICAgICAgICAgICAgICBodG1sOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICBpZCAgOiBtZS5nZXRUYWdWZG9tSWQoaXRlbSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGFnSWQobm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBub2RlSWQuc3BsaXQoJ19fJylbMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VGFnVmRvbUlkKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgbmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25UYWdMaW5rQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhZyA9IHRoaXMuZ2V0VGFnSWQoZGF0YS5wYXRoWzBdLmlkKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhZ0xpc3RDb21wb25lbnQpO1xuXG5leHBvcnQge1RhZ0xpc3RDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
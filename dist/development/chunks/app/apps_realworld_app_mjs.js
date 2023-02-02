"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_app_mjs"],{

/***/ "./apps/realworld/api/Article.mjs":
/*!****************************************!*\
  !*** ./apps/realworld/api/Article.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./apps/realworld/api/Base.mjs");


/**
 * @class RealWorld.api.Article
 * @extends RealWorld.api.Base
 */
class Article extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.api.Article'
         * @protected
         */
        className: 'RealWorld.api.Article',
        /**
         * @member {String} resource='/articles'
         */
        resource: '/articles'
    }

    /**
     * @param {String} slug
     * @param {Number} id
     */
    deleteComment(slug, id) {
        return this.delete({
            url: `/articles/${slug}/comments/${id}`
        });
    }

    /**
     * @param {String} slug
     */
    getComments(slug) {
        return this.get({
            url: `/articles/${slug}/comments`
        });
    }

    /**
     * @param {String} slug
     * @param {Object} opts
     */
    postComment(slug, opts) {
        return this.post({
            ...opts,
            url: `/articles/${slug}/comments`
        });
    }
}

Neo.applyClassConfig(Article);

let instance = Neo.create(Article);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./apps/realworld/api/Base.mjs":
/*!*************************************!*\
  !*** ./apps/realworld/api/Base.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.mjs */ "./apps/realworld/api/config.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");



/**
 * @class RealWorld.api.Base
 * @extends Neo.core.Base
 */
class Base extends _node_modules_neo_mjs_src_core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=true
     * @static
     */
    static observable = true
    /**
     * @member {String|null} token=null
     * @protected
     * @static
     */
    static token = null

    static config = {
        /**
         * @member {String} className='RealWorld.api.Base'
         * @protected
         */
        className: 'RealWorld.api.Base',
        /**
         * @member {Object|null} defaultHeaders=null
         */
        defaultHeaders: null,
        /**
         * @member {Boolean} isReady=false
         */
        isReady: false,
        /**
         * @member {String} resource=''
         */
        resource: '/'
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();
        this.afterConstructed();
    }

    /**
     * The class extensions Article, Favorite, Profile, Tag, User are singletons
     * and get directly imported into the MainContainer(Controller)
     * => their creation happens before the app is constructed
     * => Neo.apps['RealWorld'] does most likely not exist yet.
     */
    afterConstructed() {
        let me = this;

        if (!Neo.apps || !Neo.apps['RealWorld']) {
            setTimeout(() => {
                me.afterConstructed();
            }, 100);
        } else {
            if (Neo.apps['RealWorld'].rendered) {
                me.onAppRendered();
            } else {
                Neo.apps['RealWorld'].on('render',me.onAppRendered, me);
            }
        }
    }

    /**
     *
     */
    onAppRendered() {
        const me = this;

        if (Base.token) {
            me.onReady(Base.token);
        } else if (!Base.initialTokenRequestSent) {
            Base.initialTokenRequestSent = true;

            Neo.main.addon.LocalStorage.readLocalStorageItem({
                key: _config_mjs__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_KEY
            }).then(data => {
                const token = data.value;

                if (token) {
                    Base.token = token;
                }

                me.onReady(token);
                Base.isReady = true;
                Base.fire('ready', token);
            });
        } else {
            Base.on({
                ready: me.onReady,
                scope: me
            });
        }
    }

    /**
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @param {String} [opts.url]
     * @returns {String} url
     */
    createUrl(opts) {
        if (opts.url) {
            return _config_mjs__WEBPACK_IMPORTED_MODULE_0__.API_URL + opts.url;
        }

        return _config_mjs__WEBPACK_IMPORTED_MODULE_0__.API_URL + (opts.resource || this.resource) + (opts.slug ? '/' + opts.slug : '');
    }

    /**
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    delete(opts={}) {
        // console.log('delete', opts);

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'DELETE',
            params : opts.params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders,
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld.api.Base:get()', error);
        });
    }

    /**
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    get(opts={}) {
        // console.log('get', opts);

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'GET',
            params : opts.params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders,
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld.api.Base:get()', error);
        });
    }

    /**
     * Placeholder method which gets triggered once the token is fetched from the local storage
     * @param {String|null} token
     */
    onReady(token) {
        let me = this;

        if (token) {
            me.defaultHeaders = me.defaultHeaders || {};
            me.defaultHeaders['Authorization'] = 'Token ' + token;
        }

        me.isReady = true;
        me.fire('ready', token);
    }

    /**
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    post(opts={}) {
        // console.log('post', opts);

        const params = opts.params;
        delete opts.params;

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'POST',
            params : params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders,
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld.api.Base:post()', error);
        });
    }

    /**
     * @param {Object} [opts={}]
     * @param {Object} [opts.data]
     * @param {Object} [opts.params]
     * @param {String} [opts.resource]
     * @param {String} [opts.slug]
     * @returns {Promise<any>}
     */
    put(opts={}) {
        // console.log('put', opts);

        const params = opts.params;
        delete opts.params;

        return Neo.Xhr.promiseJson({
            data   : opts.data,
            method : 'PUT',
            params : params,
            url    : this.createUrl(opts),

            headers: {
                ...this.defaultHeaders,
                'Content-Type'    : 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).catch(error => {
            console.log('RealWorld.api.Base:put()', error);
        });
    }
}

Base.initialTokenRequestSent = false;
Base.token                   = null;

Neo.applyClassConfig(Base);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);


/***/ }),

/***/ "./apps/realworld/api/Favorite.mjs":
/*!*****************************************!*\
  !*** ./apps/realworld/api/Favorite.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./apps/realworld/api/Base.mjs");


/**
 * @class RealWorld.api.Favorite
 * @extends RealWorld.api.Base
 */
class Favorite extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.api.Favorite'
         * @protected
         */
        className: 'RealWorld.api.Favorite'
    }

    /**
     * @param {String} slug
     */
    add(slug) {
        return this.post({
            url: `/articles/${slug}/favorite`
        });
    }

    /**
     * @param {String} slug
     */
    remove(slug) {
        return this.delete({
            url: `/articles/${slug}/favorite`
        });
    }
}

Neo.applyClassConfig(Favorite);

let instance = Neo.create(Favorite);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./apps/realworld/api/Profile.mjs":
/*!****************************************!*\
  !*** ./apps/realworld/api/Profile.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./apps/realworld/api/Base.mjs");


/**
 * @class RealWorld.api.Profile
 * @extends RealWorld.api.Base
 */
class Profile extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.api.Profile'
         * @protected
         */
        className: 'RealWorld.api.Profile',
        /**
         * @member {String} resource='/profiles'
         */
        resource: '/profiles'
    }

    /**
     * @param {String} slug
     */
    follow(slug) {
        return this.post({
            url: `/profiles/${slug}/follow`
        });
    }

    /**
     * @param {String} slug
     */
    unfollow(slug) {
        return this.delete({
            url: `/profiles/${slug}/follow`
        });
    }
}

Neo.applyClassConfig(Profile);

let instance = Neo.create(Profile);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./apps/realworld/api/Tag.mjs":
/*!************************************!*\
  !*** ./apps/realworld/api/Tag.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./apps/realworld/api/Base.mjs");


/**
 * @class RealWorld.api.Tag
 * @extends RealWorld.api.Base
 */
class Tag extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.api.Tag'
         * @protected
         */
        className: 'RealWorld.api.Tag',
        /**
         * @member {String} resource='/tags'
         */
        resource: '/tags'
    }
}

Neo.applyClassConfig(Tag);

let instance = Neo.create(Tag);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./apps/realworld/api/User.mjs":
/*!*************************************!*\
  !*** ./apps/realworld/api/User.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./apps/realworld/api/Base.mjs");


/**
 * @class RealWorld.api.User
 * @extends RealWorld.api.Base
 */
class User extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.api.User'
         * @protected
         */
        className: 'RealWorld.api.User',
        /**
         * @member {String} resource='/tags'
         */
        resource: '/users'
    }
}

Neo.applyClassConfig(User);

let instance = Neo.create(User);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./apps/realworld/api/config.mjs":
/*!***************************************!*\
  !*** ./apps/realworld/api/config.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "LOCAL_STORAGE_KEY": () => (/* binding */ LOCAL_STORAGE_KEY),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_URL           = 'https://api.realworld.io/api';
const LOCAL_STORAGE_KEY = 'neoRealWorldToken';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({API_URL, LOCAL_STORAGE_KEY});


/***/ }),

/***/ "./apps/realworld/app.mjs":
/*!********************************!*\
  !*** ./apps/realworld/app.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/realworld/view/MainContainer.mjs");


const onStart = () => Neo.app({
    mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'RealWorld'
});


/***/ }),

/***/ "./apps/realworld/view/FooterComponent.mjs":
/*!*************************************************!*\
  !*** ./apps/realworld/view/FooterComponent.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class RealWorld.view.FooterComponent
 * @extends Neo.component.Base
 */
class FooterComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.FooterComponent'
         * @protected
         */
        className: 'RealWorld.view.FooterComponent',
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'footer', cn: [
            {cls: ['container'], cn: [
                {tag: 'a', cls: ['logo-font'], href: '#/', html: 'conduit'},
                {tag: 'span', cls: 'attribution', html: 'An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.'}
            ]}
        ]}
    }
}

Neo.applyClassConfig(FooterComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterComponent);


/***/ }),

/***/ "./apps/realworld/view/HeaderComponent.mjs":
/*!*************************************************!*\
  !*** ./apps/realworld/view/HeaderComponent.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class RealWorld.view.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.HeaderComponent'
         * @protected
         */
        className: 'RealWorld.view.HeaderComponent',
        /**
         * @member {String} activeItem_='home'
         */
        activeItem_: 'home',
        /**
         * @member {String[]} baseCls=['navbar','navbar-light']
         */
        baseCls: ['navbar', 'navbar-light'],
        /**
         * @member {Boolean} loggedIn_=false
         */
        loggedIn_: false,
        /**
         * @member {String|null} userImage_=null
         */
        userImage_:null,
        /**
         * @member {String|null} userName_=null
         */
        userName_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {tag: 'nav', cls: ['navbar navbar-light'], cn: [
            {cls: ['container'], cn: [
                {tag: 'a',  cls: ['navbar-brand'], href: '#/', html: 'conduit'},
                {tag: 'ul', cls: ['nav navbar-nav', 'pull-xs-right'], cn: [
                    {tag: 'li', cls: ['nav-item'], cn: [
                        {tag: 'a', cls: ['nav-link'], href: '#/', html: 'Home'}
                    ]},
                    {tag: 'li', cls: ['nav-item'], removeDom: true, cn: [
                        {tag: 'a', cls: ['nav-link'], href: '#/editor', cn: [
                            {tag: 'i', cls: 'ion-compose'},
                            {vtype: 'text', html: '&nbsp;New Article'}
                        ]}
                    ]},
                    {tag: 'li', cls: ['nav-item'], removeDom: true, cn: [
                        {tag: 'a', cls: ['nav-link'], href: '#/settings', cn: [
                            {tag: 'i', cls: 'ion-gear-a'},
                            {vtype: 'text', html: '&nbsp;Settings'}
                        ]}
                    ]},
                    {tag: 'li', cls: ['nav-item'], removeDom: true, cn: [
                        {tag: 'a', cls : ['nav-link'], href: '#/profile', cn: [
                            {tag: 'img', cls: ['user-pic']},
                            {vtype: 'text', html: '&nbsp;Profile'}
                        ]}
                    ]},
                    {tag: 'li', cls: ['nav-item'], cn: [
                        {tag : 'a', cls : ['nav-link'], href: '#/login', html: 'Sign in'}
                    ]},
                    {tag: 'li', cls: ['nav-item'], cn: [
                        {tag: 'a', cls : ['nav-link'], href: '#/register', html: 'Sign up'}
                    ]}
                ]}
            ]}
        ]}
    }

    /**
     * Triggered after the activeItem config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetActiveItem(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (oldValue) {
            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(vdom.cn[0].cn[1].cn[me.getActiveIndex(oldValue)].cn[0].cls, 'active');
        }

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(vdom.cn[0].cn[1].cn[me.getActiveIndex(value)].cn[0].cls, 'active');

        me.update();
    }

    /**
     * Triggered after the loggedIn config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetLoggedIn(value, oldValue) {
        if (Neo.isBoolean(oldValue)) {
            let me   = this,
                list = me.vdom.cn[0].cn[1];

            list.cn[1].removeDom = !value; // editor
            list.cn[2].removeDom = !value; // settings
            list.cn[3].removeDom = !value; // profile
            list.cn[4].removeDom = value;  // login
            list.cn[5].removeDom = value;  // register

            me.update();
        }
    }

    /**
     * Triggered after the userImage config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserImage(value, oldValue) {
        let me          = this,
            profileLink = me.vdom.cn[0].cn[1].cn[3].cn[0];

        profileLink.cn[0].removeDom = !value;
        profileLink.cn[0].src       = value;

        me.update();
    }

    /**
     * Triggered after the userName config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserName(value, oldValue) {
        if (value) {
            let me          = this,
                profileLink = me.vdom.cn[0].cn[1].cn[3].cn[0];

            profileLink.href = '#/profile/' + value;
            profileLink.cn[1].html = '&nbsp;' + value;

            me.update();
        }
    }

    /**
     * @param {String} value
     * @returns {Number} The target index
     */
    getActiveIndex(value) {
        switch (value) {
            case '/settings': return 2;
            case '/login'   : return 4;
            case '/register': return 5;
        }

        if (value.includes('/editor')) {
            return 1;
        }

        if (value.includes('/profile')) {
            return 3;
        }

        // default to home
        return 0;
    }
}

Neo.applyClassConfig(HeaderComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderComponent);


/***/ }),

/***/ "./apps/realworld/view/MainContainer.mjs":
/*!***********************************************!*\
  !*** ./apps/realworld/view/MainContainer.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterComponent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterComponent.mjs */ "./apps/realworld/view/FooterComponent.mjs");
/* harmony import */ var _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.mjs */ "./apps/realworld/view/HeaderComponent.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./apps/realworld/view/MainContainerController.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");





/**
 * @class RealWorld.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.MainContainer'
         * @protected
         */
        className: 'RealWorld.view.MainContainer',
        /**
         * @member {String[]} baseCls=[]
         */
        baseCls: [],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox'}
         */
        layout: {ntype: 'base'},

        items: [{
            module   : _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            reference: 'header'
        }, {
            module: _FooterComponent_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
        }]
    }
}

Neo.applyClassConfig(MainContainer);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainer);


/***/ }),

/***/ "./apps/realworld/view/MainContainerController.mjs":
/*!*********************************************************!*\
  !*** ./apps/realworld/view/MainContainerController.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Article.mjs */ "./apps/realworld/api/Article.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _api_Favorite_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/Favorite.mjs */ "./apps/realworld/api/Favorite.mjs");
/* harmony import */ var _api_config_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/config.mjs */ "./apps/realworld/api/config.mjs");
/* harmony import */ var _api_Profile_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/Profile.mjs */ "./apps/realworld/api/Profile.mjs");
/* harmony import */ var _api_Tag_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/Tag.mjs */ "./apps/realworld/api/Tag.mjs");
/* harmony import */ var _api_User_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/User.mjs */ "./apps/realworld/api/User.mjs");








/**
 * @class RealWorld.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * True automatically applies the core.Observable mixin
     * @member {Boolean} observable=false
     * @static
     */
    static observable = true

    static config = {
        /**
         * @member {String} className='RealWorld.view.MainContainerController'
         * @protected
         */
        className: 'RealWorld.view.MainContainerController',
        /**
         * @member {RealWorld.view.article.Component|null} articleComponent=null
         * @protected
         */
        articleComponent: null,
        /**
         * @member {Number} articlesOffset_=0
         */
        articlesOffset_: 0,
        /**
         * @member {RealWorld.view.article.CreateComponent|null} createComponent=null
         * @protected
         */
        createComponent: null,
        /**
         * Stores the current user data after logging in
         * @member {Object|null} currentUser_=null
         * @protected
         */
        currentUser_: null,
        /**
         * @member {String|null} hashString=null
         */
        hashString: null,
        /**
         * @member {RealWorld.view.HomeComponent|null} homeComponent=null
         * @protected
         */
        homeComponent: null,
        /**
         * @member {RealWorld.view.user.ProfileComponent|null} profileComponent=null
         * @protected
         */
        profileComponent: null,
        /**
         * @member {RealWorld.view.user.SettingsComponent|null} settingsComponent=null
         * @protected
         */
        settingsComponent: null,
        /**
         * @member {RealWorld.view.user.SignUpComponent|null} signUpComponent=null
         * @protected
         */
        signUpComponent: null
    }

    /**
     * Triggered after the articlesOffset config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetArticlesOffset(value, oldValue) {
        // ignore the initial config setter call
        if (Neo.isNumber(oldValue)) {
            this.getArticles();
        }
    }

    /**
     * Triggered after the currentUser config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetCurrentUser(value, oldValue) {
        if (typeof oldValue === 'object') {
            this.getReference('header').set({
                loggedIn : !!value,
                userImage: value ? value.image    : null,
                userName : value ? value.username : null
            }).then(() => {
                // todo: test to ensure the initial markup is rendered
                setTimeout(() => {
                    this.fire('afterSetCurrentUser', value);
                }, 200);
            });
        }
    }

    /**
     * @param {String} slug
     */
    deleteArticle(slug) {
        _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]({slug: slug}).then(data => {
            Neo.Main.setRoute({
                value: '/'
            });
        });
    }

    /**
     * @param {Number} id
     * @returns {Promise<any>}
     */
    deleteComment(id) {
        let me   = this,
            slug = me.hashString.split('/').pop();

        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].deleteComment(slug, id).then(data => {
            me.getComments(slug);
        });
    }

    /**
     * @param {String} slug
     * @param {Boolean} favorited
     */
    favoriteArticle(slug, favorited) {
        return _api_Favorite_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][favorited ? 'add' : 'remove'](slug);
    }

    /**
     * @param {String} slug
     * @param {Boolean} follow
     */
    followUser(slug, follow) {
        return _api_Profile_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][follow ? 'follow' : 'unfollow'](slug);
    }

    /**
     * Article details: get an article providing a user slug
     * @param {String} slug
     * @returns {Promise<any>}
     */
    getArticle(slug) {
        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get({
            slug
        });
    }

    /**
     * @param {Object} [params={}]
     * @param {Object} [opts={}]
     * @returns {Promise<any>}
     */
    getArticles(params={}, opts={}) {
        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].get({
            params: {
                limit : 10,
                offset: this.articlesOffset,
                ...params
            },
            ...opts
        });
    }

    /**
     * @param {String} slug
     */
    getComments(slug) {
        _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getComments(slug).then(data => {
            this.articleComponent.comments = data.json.comments;
        });
    }

    /**
     * @param {String} token
     */
    getCurrentUser(token) {
        if (token) {
            _api_User_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].get({
                resource: '/user' // edge case, user instead of users
            }).then(data => {
                this.currentUser = data.json.user;
            });
        }
    }

    /**
     * @param {String} slug
     */
    getProfile(slug) {
        let me = this;

        _api_Profile_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].get({
            slug
        }).then(data => {
            me.profileComponent.updateContent({
                ...data.json.profile,
                myProfile: data.json.profile.username === (me.currentUser?.username)
            });
        });
    }

    /**
     *
     */
    getTags() {
        _api_Tag_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].get().then(data => {
            this.homeComponent.tagList.tags = data.json.tags;
        });
    }

    /**
     * @param {Object} userData
     */
    login(userData) {
        this.currentUser = userData;

        Neo.main.addon.LocalStorage.createLocalStorageItem({
            key  : _api_config_mjs__WEBPACK_IMPORTED_MODULE_3__.LOCAL_STORAGE_KEY,
            value: userData.token
        }).then(() => {
            // wait until the header vdom-update is done to avoid showing sign up & sign in twice
            setTimeout(() => {
                Neo.Main.setRoute({
                    value: '/'
                });
            }, 50);
        });
    }

    /**
     *
     */
    logout() {
        this.currentUser = null;

        Neo.main.addon.LocalStorage.destroyLocalStorageItem({
            key: _api_config_mjs__WEBPACK_IMPORTED_MODULE_3__.LOCAL_STORAGE_KEY
        }).then(() => {
            // wait until the header vdom-update is done to avoid showing sign up & sign in twice
            setTimeout(() => {
                Neo.Main.setRoute({
                    value: '/'
                });
            }, 50);
        });
    }

    /**
     *
     */
    onComponentConstructed() {
        super.onComponentConstructed();

        // default route => home
        if (!Neo.config.hash) {
            this.onHashChange({
                appNames  : ['RealWorld'],
                hash      : {'/': ''},
                hashString: '/'
            }, null);
        }
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        _api_User_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].on('ready', this.getCurrentUser, this);
    }

    /**
     * @param {Object} value
     * @param {Object} oldValue
     */
    async onHashChange(value, oldValue) {
        let me         = this,
            component  = me.component,
            hash       = value.hash,
            hashString = value.hashString,
            mode, newView, opts, slug;

        if (!component.isConstructed) { // the initial hash change gets triggered before the vnode got back from the vdom worker (using autoMount)
            component.on('constructed', () => {
                me.onHashChange(value, oldValue);
            });
        } else {
            me.hashString = hashString;

            // adjust the active header link
            component.items[0].activeItem = Object.keys(hash)[0];

                 if (hashString === '/')               {opts = ['homeComponent',     () => __webpack_require__.e(/*! import() */ "apps_realworld_view_HomeComponent_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./HomeComponent.mjs */ "./apps/realworld/view/HomeComponent.mjs")),           'home']}
            else if (hashString.includes('/article/')) {opts = ['articleComponent',  () => __webpack_require__.e(/*! import() */ "apps_realworld_view_article_Component_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./article/Component.mjs */ "./apps/realworld/view/article/Component.mjs")),       'article']}
            else if (hashString.includes('/editor'))   {opts = ['createComponent',   () => __webpack_require__.e(/*! import() */ "apps_realworld_view_article_CreateComponent_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./article/CreateComponent.mjs */ "./apps/realworld/view/article/CreateComponent.mjs")), 'editor']}
            else if (hashString.includes('/profile/')) {opts = ['profileComponent',  () => __webpack_require__.e(/*! import() */ "apps_realworld_view_user_ProfileComponent_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./user/ProfileComponent.mjs */ "./apps/realworld/view/user/ProfileComponent.mjs")),   'profile']}
            else if (hash.hasOwnProperty('/login'))    {opts = ['signUpComponent',   () => __webpack_require__.e(/*! import() */ "apps_realworld_view_user_SignUpComponent_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./user/SignUpComponent.mjs */ "./apps/realworld/view/user/SignUpComponent.mjs")),    'signup']; mode = 'signin';}
            else if (hash.hasOwnProperty('/register')) {opts = ['signUpComponent',   () => __webpack_require__.e(/*! import() */ "apps_realworld_view_user_SignUpComponent_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./user/SignUpComponent.mjs */ "./apps/realworld/view/user/SignUpComponent.mjs")),    'signup']; mode = 'signup';}
            else if (hash.hasOwnProperty('/settings')) {opts = ['settingsComponent', () => __webpack_require__.e(/*! import() */ "apps_realworld_view_user_SettingsComponent_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./user/SettingsComponent.mjs */ "./apps/realworld/view/user/SettingsComponent.mjs")),  'settings']}

            if (opts) {
                newView = await me.promiseView(...opts);

                if (mode) {
                    newView.mode = mode;
                }
            }

            if (!(oldValue && oldValue.hash && (
                oldValue.hash.hasOwnProperty('/login')    && hash.hasOwnProperty('/register') ||
                oldValue.hash.hasOwnProperty('/register') && hash.hasOwnProperty('/login')))
            ) {
                if (component.items.length > 2) {
                    component.removeAt(1, false, true);
                }

                if (newView) {
                    component.insert(1, newView);
                }
            }

            switch (newView.reference) {
                case 'article':
                    slug = hashString.split('/').pop();

                    me.getArticle(slug).then(data => {
                        let article = data.json.article,
                            body    = article.body;

                        delete article.body;

                        me.articleComponent.set(article).then(() => {
                            me.articleComponent.body = body;
                        });
                    });

                    me.getComments(slug);
                    break;
                case 'editor':
                    slug = hashString.split('/').pop();
                    if (slug !== 'editor') {
                        me.getArticle(slug).then(data => {
                            const article = data.json.article;

                            me.createComponent.set({
                                body       : article.body,
                                description: article.description,
                                slug       : article.slug,
                                tagList    : article.tagList,
                                title      : article.title
                            });
                        });
                    } else {
                        me.createComponent.resetForm();
                    }
                    break;
                case 'home':
                    me.homeComponent.loggedIn = !!me.currentUser;
                    me.homeComponent.getArticles();
                    me.getTags();
                    break;
                case 'profile':
                    me.getProfile(hashString.split('/').pop()); // pass the slug
                    break;
                case 'settings':
                    if (me.currentUser) {
                        setTimeout(() => { // added a short delay to not interfere with the mainContainer update
                            me.settingsComponent.onCurrentUserChange(me.currentUser);
                        }, 50);
                    }
                    break;
                case 'signup':
                    newView.errors = [];
                    break;
            }
        }
    }

    /**
     * @param {Object} [opts)
     * @returns {Promise<any>}
     */
    postComment(opts={}) {
        let me   = this,
            slug = me.hashString.split('/').pop();

        return _api_Article_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].postComment(slug, opts).then(data => {
            me.getComments(slug);
        });
    }

    /**
     * @param {String} key
     * @param {Function} module
     * @param {String} reference
     * @returns {Neo.component.Base} The matching view instance
     */
    async promiseView(key, module, reference) {
        let me = this;

        if (!me[key]) {
            module = await module();

            me[key] = Neo.create({
                module  : module.default,
                parentId: me.component.id,
                reference
            });
        }

        return me[key];
    }

    /**
     * @param {Object} opts
     * @returns {Promise<any>}
     */
    saveUser(opts) {
        return _api_User_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].post(opts);
    }

    /**
     * @param {Object} [opts)
     * @returns {Promise<any>}
     */
    updateSettings(opts={}) {
        return _api_User_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].put({
            ...opts,
            resource: '/user' // edge case, user instead of users
        }).then(data => {
            if (!data.json.errors) {
                this.currentUser = data.json.user;
            }

            return data;
        });
    }
}

Neo.applyClassConfig(MainContainerController);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainerController);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF9hcHBfbWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBSTtBQUMxQjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLLFlBQVksR0FBRztBQUNsRCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEtBQUs7QUFDbkMsU0FBUztBQUNUOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLO0FBQ25DLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGdDO0FBQ21DOztBQUUzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrRUFBUTtBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQSxlQUFlLG9FQUFzQjtBQUNyQztBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWUsMERBQVk7QUFDM0I7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCLGVBQWUseURBQVc7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvYXBpL0FydGljbGUubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvYXBpL0Jhc2UubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvYXBpL0Zhdm9yaXRlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL2FwaS9Qcm9maWxlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL2FwaS9UYWcubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvYXBpL1VzZXIubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvYXBpL2NvbmZpZy5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC9hcHAubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9Gb290ZXJDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9IZWFkZXJDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQuYXBpLkFydGljbGVcbiAqIEBleHRlbmRzIFJlYWxXb3JsZC5hcGkuQmFzZVxuICovXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQuYXBpLkFydGljbGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC5hcGkuQXJ0aWNsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScvYXJ0aWNsZXMnXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZTogJy9hcnRpY2xlcydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZFxuICAgICAqL1xuICAgIGRlbGV0ZUNvbW1lbnQoc2x1ZywgaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlKHtcbiAgICAgICAgICAgIHVybDogYC9hcnRpY2xlcy8ke3NsdWd9L2NvbW1lbnRzLyR7aWR9YFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGdldENvbW1lbnRzKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHtcbiAgICAgICAgICAgIHVybDogYC9hcnRpY2xlcy8ke3NsdWd9L2NvbW1lbnRzYFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICovXG4gICAgcG9zdENvbW1lbnQoc2x1Zywgb3B0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHtcbiAgICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgICAgICB1cmw6IGAvYXJ0aWNsZXMvJHtzbHVnfS9jb21tZW50c2BcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBcnRpY2xlKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShBcnRpY2xlKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IHtBUElfVVJMLCBMT0NBTF9TVE9SQUdFX0tFWX0gZnJvbSAnLi9jb25maWcubWpzJztcbmltcG9ydCBDb3JlQmFzZSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLmFwaS5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUuT2JzZXJ2YWJsZSBtaXhpblxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdG9rZW49bnVsbFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIHRva2VuID0gbnVsbFxuXG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQuYXBpLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC5hcGkuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZGVmYXVsdEhlYWRlcnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdEhlYWRlcnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1JlYWR5PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBpc1JlYWR5OiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcmVzb3VyY2U9JydcbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlOiAnLydcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgdGhpcy5hZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIGV4dGVuc2lvbnMgQXJ0aWNsZSwgRmF2b3JpdGUsIFByb2ZpbGUsIFRhZywgVXNlciBhcmUgc2luZ2xldG9uc1xuICAgICAqIGFuZCBnZXQgZGlyZWN0bHkgaW1wb3J0ZWQgaW50byB0aGUgTWFpbkNvbnRhaW5lcihDb250cm9sbGVyKVxuICAgICAqID0+IHRoZWlyIGNyZWF0aW9uIGhhcHBlbnMgYmVmb3JlIHRoZSBhcHAgaXMgY29uc3RydWN0ZWRcbiAgICAgKiA9PiBOZW8uYXBwc1snUmVhbFdvcmxkJ10gZG9lcyBtb3N0IGxpa2VseSBub3QgZXhpc3QgeWV0LlxuICAgICAqL1xuICAgIGFmdGVyQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFOZW8uYXBwcyB8fCAhTmVvLmFwcHNbJ1JlYWxXb3JsZCddKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5hZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKE5lby5hcHBzWydSZWFsV29ybGQnXS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIG1lLm9uQXBwUmVuZGVyZWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTmVvLmFwcHNbJ1JlYWxXb3JsZCddLm9uKCdyZW5kZXInLG1lLm9uQXBwUmVuZGVyZWQsIG1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25BcHBSZW5kZXJlZCgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChCYXNlLnRva2VuKSB7XG4gICAgICAgICAgICBtZS5vblJlYWR5KEJhc2UudG9rZW4pO1xuICAgICAgICB9IGVsc2UgaWYgKCFCYXNlLmluaXRpYWxUb2tlblJlcXVlc3RTZW50KSB7XG4gICAgICAgICAgICBCYXNlLmluaXRpYWxUb2tlblJlcXVlc3RTZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTG9jYWxTdG9yYWdlLnJlYWRMb2NhbFN0b3JhZ2VJdGVtKHtcbiAgICAgICAgICAgICAgICBrZXk6IExPQ0FMX1NUT1JBR0VfS0VZXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gZGF0YS52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBCYXNlLnRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUub25SZWFkeSh0b2tlbik7XG4gICAgICAgICAgICAgICAgQmFzZS5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBCYXNlLmZpcmUoJ3JlYWR5JywgdG9rZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBCYXNlLm9uKHtcbiAgICAgICAgICAgICAgICByZWFkeTogbWUub25SZWFkeSxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5kYXRhXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5wYXJhbXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnJlc291cmNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5zbHVnXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy51cmxdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgY3JlYXRlVXJsKG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMudXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gQVBJX1VSTCArIG9wdHMudXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFQSV9VUkwgKyAob3B0cy5yZXNvdXJjZSB8fCB0aGlzLnJlc291cmNlKSArIChvcHRzLnNsdWcgPyAnLycgKyBvcHRzLnNsdWcgOiAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5kYXRhXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5wYXJhbXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnJlc291cmNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5zbHVnXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZGVsZXRlKG9wdHM9e30pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlbGV0ZScsIG9wdHMpO1xuXG4gICAgICAgIHJldHVybiBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIGRhdGEgICA6IG9wdHMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZCA6ICdERUxFVEUnLFxuICAgICAgICAgICAgcGFyYW1zIDogb3B0cy5wYXJhbXMsXG4gICAgICAgICAgICB1cmwgICAgOiB0aGlzLmNyZWF0ZVVybChvcHRzKSxcblxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEhlYWRlcnMsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgICAgOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWFsV29ybGQuYXBpLkJhc2U6Z2V0KCknLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMuZGF0YV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMucGFyYW1zXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5yZXNvdXJjZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMuc2x1Z11cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdldChvcHRzPXt9KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXQnLCBvcHRzKTtcblxuICAgICAgICByZXR1cm4gTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICBkYXRhICAgOiBvcHRzLmRhdGEsXG4gICAgICAgICAgICBtZXRob2QgOiAnR0VUJyxcbiAgICAgICAgICAgIHBhcmFtcyA6IG9wdHMucGFyYW1zLFxuICAgICAgICAgICAgdXJsICAgIDogdGhpcy5jcmVhdGVVcmwob3B0cyksXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmRlZmF1bHRIZWFkZXJzLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnICAgIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVhbFdvcmxkLmFwaS5CYXNlOmdldCgpJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2Qgd2hpY2ggZ2V0cyB0cmlnZ2VyZWQgb25jZSB0aGUgdG9rZW4gaXMgZmV0Y2hlZCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdG9rZW5cbiAgICAgKi9cbiAgICBvblJlYWR5KHRva2VuKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBtZS5kZWZhdWx0SGVhZGVycyA9IG1lLmRlZmF1bHRIZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgbWUuZGVmYXVsdEhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdUb2tlbiAnICsgdG9rZW47XG4gICAgICAgIH1cblxuICAgICAgICBtZS5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgbWUuZmlyZSgncmVhZHknLCB0b2tlbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5kYXRhXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5wYXJhbXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnJlc291cmNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5zbHVnXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcG9zdChvcHRzPXt9KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwb3N0Jywgb3B0cyk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gb3B0cy5wYXJhbXM7XG4gICAgICAgIGRlbGV0ZSBvcHRzLnBhcmFtcztcblxuICAgICAgICByZXR1cm4gTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICBkYXRhICAgOiBvcHRzLmRhdGEsXG4gICAgICAgICAgICBtZXRob2QgOiAnUE9TVCcsXG4gICAgICAgICAgICBwYXJhbXMgOiBwYXJhbXMsXG4gICAgICAgICAgICB1cmwgICAgOiB0aGlzLmNyZWF0ZVVybChvcHRzKSxcblxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEhlYWRlcnMsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgICAgOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWFsV29ybGQuYXBpLkJhc2U6cG9zdCgpJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLmRhdGFdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLnBhcmFtc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMucmVzb3VyY2VdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnNsdWddXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBwdXQob3B0cz17fSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncHV0Jywgb3B0cyk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0gb3B0cy5wYXJhbXM7XG4gICAgICAgIGRlbGV0ZSBvcHRzLnBhcmFtcztcblxuICAgICAgICByZXR1cm4gTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICBkYXRhICAgOiBvcHRzLmRhdGEsXG4gICAgICAgICAgICBtZXRob2QgOiAnUFVUJyxcbiAgICAgICAgICAgIHBhcmFtcyA6IHBhcmFtcyxcbiAgICAgICAgICAgIHVybCAgICA6IHRoaXMuY3JlYXRlVXJsKG9wdHMpLFxuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0SGVhZGVycyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJyAgICA6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlYWxXb3JsZC5hcGkuQmFzZTpwdXQoKScsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5CYXNlLmluaXRpYWxUb2tlblJlcXVlc3RTZW50ID0gZmFsc2U7XG5CYXNlLnRva2VuICAgICAgICAgICAgICAgICAgID0gbnVsbDtcblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2U7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLmFwaS5GYXZvcml0ZVxuICogQGV4dGVuZHMgUmVhbFdvcmxkLmFwaS5CYXNlXG4gKi9cbmNsYXNzIEZhdm9yaXRlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQuYXBpLkZhdm9yaXRlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQuYXBpLkZhdm9yaXRlJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgYWRkKHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh7XG4gICAgICAgICAgICB1cmw6IGAvYXJ0aWNsZXMvJHtzbHVnfS9mYXZvcml0ZWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKi9cbiAgICByZW1vdmUoc2x1Zykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoe1xuICAgICAgICAgICAgdXJsOiBgL2FydGljbGVzLyR7c2x1Z30vZmF2b3JpdGVgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRmF2b3JpdGUpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEZhdm9yaXRlKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC5hcGkuUHJvZmlsZVxuICogQGV4dGVuZHMgUmVhbFdvcmxkLmFwaS5CYXNlXG4gKi9cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC5hcGkuUHJvZmlsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLmFwaS5Qcm9maWxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcmVzb3VyY2U9Jy9wcm9maWxlcydcbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlOiAnL3Byb2ZpbGVzJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgZm9sbG93KHNsdWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh7XG4gICAgICAgICAgICB1cmw6IGAvcHJvZmlsZXMvJHtzbHVnfS9mb2xsb3dgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgdW5mb2xsb3coc2x1Zykge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGUoe1xuICAgICAgICAgICAgdXJsOiBgL3Byb2ZpbGVzLyR7c2x1Z30vZm9sbG93YFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFByb2ZpbGUpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFByb2ZpbGUpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLmFwaS5UYWdcbiAqIEBleHRlbmRzIFJlYWxXb3JsZC5hcGkuQmFzZVxuICovXG5jbGFzcyBUYWcgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC5hcGkuVGFnJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQuYXBpLlRhZycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScvdGFncydcbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlOiAnL3RhZ3MnXG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUYWcpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFRhZyk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQuYXBpLlVzZXJcbiAqIEBleHRlbmRzIFJlYWxXb3JsZC5hcGkuQmFzZVxuICovXG5jbGFzcyBVc2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQuYXBpLlVzZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC5hcGkuVXNlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScvdGFncydcbiAgICAgICAgICovXG4gICAgICAgIHJlc291cmNlOiAnL3VzZXJzJ1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXNlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoVXNlcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImV4cG9ydCBjb25zdCBBUElfVVJMICAgICAgICAgICA9ICdodHRwczovL2FwaS5yZWFsd29ybGQuaW8vYXBpJztcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0tFWSA9ICduZW9SZWFsV29ybGRUb2tlbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtBUElfVVJMLCBMT0NBTF9TVE9SQUdFX0tFWX07XG4iLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5leHBvcnQgY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnUmVhbFdvcmxkJ1xufSk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5Gb290ZXJDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBGb290ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuRm9vdGVyQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy5Gb290ZXJDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHt0YWc6ICdmb290ZXInLCBjbjogW1xuICAgICAgICAgICAge2NsczogWydjb250YWluZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWydsb2dvLWZvbnQnXSwgaHJlZjogJyMvJywgaHRtbDogJ2NvbmR1aXQnfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogJ2F0dHJpYnV0aW9uJywgaHRtbDogJ0FuIGludGVyYWN0aXZlIGxlYXJuaW5nIHByb2plY3QgZnJvbSA8YSBocmVmPVwiaHR0cHM6Ly90aGlua3N0ZXIuaW9cIj5UaGlua3N0ZXI8L2E+LiBDb2RlICZhbXA7IGRlc2lnbiBsaWNlbnNlZCB1bmRlciBNSVQuJ31cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGb290ZXJDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJDb21wb25lbnQ7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5IZWFkZXJDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBIZWFkZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuSGVhZGVyQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy5IZWFkZXJDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3RpdmVJdGVtXz0naG9tZSdcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUl0ZW1fOiAnaG9tZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYmFzZUNscz1bJ25hdmJhcicsJ25hdmJhci1saWdodCddXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiBbJ25hdmJhcicsICduYXZiYXItbGlnaHQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxvZ2dlZEluXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgbG9nZ2VkSW5fOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VySW1hZ2VfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJJbWFnZV86bnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VyTmFtZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlck5hbWVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHt0YWc6ICduYXYnLCBjbHM6IFsnbmF2YmFyIG5hdmJhci1saWdodCddLCBjbjogW1xuICAgICAgICAgICAge2NsczogWydjb250YWluZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnYScsICBjbHM6IFsnbmF2YmFyLWJyYW5kJ10sIGhyZWY6ICcjLycsIGh0bWw6ICdjb25kdWl0J30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3VsJywgY2xzOiBbJ25hdiBuYXZiYXItbmF2JywgJ3B1bGwteHMtcmlnaHQnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgY2xzOiBbJ25hdi1pdGVtJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWyduYXYtbGluayddLCBocmVmOiAnIy8nLCBodG1sOiAnSG9tZSd9XG4gICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgcmVtb3ZlRG9tOiB0cnVlLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHM6IFsnbmF2LWxpbmsnXSwgaHJlZjogJyMvZWRpdG9yJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogJ2lvbi1jb21wb3NlJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcmbmJzcDtOZXcgQXJ0aWNsZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2xpJywgY2xzOiBbJ25hdi1pdGVtJ10sIHJlbW92ZURvbTogdHJ1ZSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzOiBbJ25hdi1saW5rJ10sIGhyZWY6ICcjL3NldHRpbmdzJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogJ2lvbi1nZWFyLWEnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwO1NldHRpbmdzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgcmVtb3ZlRG9tOiB0cnVlLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHMgOiBbJ25hdi1saW5rJ10sIGhyZWY6ICcjL3Byb2ZpbGUnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbWcnLCBjbHM6IFsndXNlci1waWMnXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcmbmJzcDtQcm9maWxlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWcgOiAnYScsIGNscyA6IFsnbmF2LWxpbmsnXSwgaHJlZjogJyMvbG9naW4nLCBodG1sOiAnU2lnbiBpbid9XG4gICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzIDogWyduYXYtbGluayddLCBocmVmOiAnIy9yZWdpc3RlcicsIGh0bWw6ICdTaWduIHVwJ31cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGFjdGl2ZUl0ZW0gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QWN0aXZlSXRlbSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUodmRvbS5jblswXS5jblsxXS5jblttZS5nZXRBY3RpdmVJbmRleChvbGRWYWx1ZSldLmNuWzBdLmNscywgJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKHZkb20uY25bMF0uY25bMV0uY25bbWUuZ2V0QWN0aXZlSW5kZXgodmFsdWUpXS5jblswXS5jbHMsICdhY3RpdmUnKTtcblxuICAgICAgICBtZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxvZ2dlZEluIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TG9nZ2VkSW4odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNCb29sZWFuKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGxpc3QgPSBtZS52ZG9tLmNuWzBdLmNuWzFdO1xuXG4gICAgICAgICAgICBsaXN0LmNuWzFdLnJlbW92ZURvbSA9ICF2YWx1ZTsgLy8gZWRpdG9yXG4gICAgICAgICAgICBsaXN0LmNuWzJdLnJlbW92ZURvbSA9ICF2YWx1ZTsgLy8gc2V0dGluZ3NcbiAgICAgICAgICAgIGxpc3QuY25bM10ucmVtb3ZlRG9tID0gIXZhbHVlOyAvLyBwcm9maWxlXG4gICAgICAgICAgICBsaXN0LmNuWzRdLnJlbW92ZURvbSA9IHZhbHVlOyAgLy8gbG9naW5cbiAgICAgICAgICAgIGxpc3QuY25bNV0ucmVtb3ZlRG9tID0gdmFsdWU7ICAvLyByZWdpc3RlclxuXG4gICAgICAgICAgICBtZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlckltYWdlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZXJJbWFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHByb2ZpbGVMaW5rID0gbWUudmRvbS5jblswXS5jblsxXS5jblszXS5jblswXTtcblxuICAgICAgICBwcm9maWxlTGluay5jblswXS5yZW1vdmVEb20gPSAhdmFsdWU7XG4gICAgICAgIHByb2ZpbGVMaW5rLmNuWzBdLnNyYyAgICAgICA9IHZhbHVlO1xuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlck5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlck5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBwcm9maWxlTGluayA9IG1lLnZkb20uY25bMF0uY25bMV0uY25bM10uY25bMF07XG5cbiAgICAgICAgICAgIHByb2ZpbGVMaW5rLmhyZWYgPSAnIy9wcm9maWxlLycgKyB2YWx1ZTtcbiAgICAgICAgICAgIHByb2ZpbGVMaW5rLmNuWzFdLmh0bWwgPSAnJm5ic3A7JyArIHZhbHVlO1xuXG4gICAgICAgICAgICBtZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSB0YXJnZXQgaW5kZXhcbiAgICAgKi9cbiAgICBnZXRBY3RpdmVJbmRleCh2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICcvc2V0dGluZ3MnOiByZXR1cm4gMjtcbiAgICAgICAgICAgIGNhc2UgJy9sb2dpbicgICA6IHJldHVybiA0O1xuICAgICAgICAgICAgY2FzZSAnL3JlZ2lzdGVyJzogcmV0dXJuIDU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy9lZGl0b3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy9wcm9maWxlJykpIHtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVmYXVsdCB0byBob21lXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcG9uZW50O1xuIiwiaW1wb3J0IEZvb3RlckNvbXBvbmVudCAgICAgICAgIGZyb20gJy4vRm9vdGVyQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgSGVhZGVyQ29tcG9uZW50ICAgICAgICAgZnJvbSAnLi9IZWFkZXJDb21wb25lbnQubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQudmlldy5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBiYXNlQ2xzPVtdXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94J31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnYmFzZSd9LFxuXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBIZWFkZXJDb21wb25lbnQsXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdoZWFkZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZTogRm9vdGVyQ29tcG9uZW50XG4gICAgICAgIH1dXG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcbiIsImltcG9ydCBBcnRpY2xlQXBpICAgICAgICAgIGZyb20gJy4uL2FwaS9BcnRpY2xlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50Q29udHJvbGxlciBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBGYXZvcml0ZUFwaSAgICAgICAgIGZyb20gJy4uL2FwaS9GYXZvcml0ZS5tanMnO1xuaW1wb3J0IHtMT0NBTF9TVE9SQUdFX0tFWX0gZnJvbSAnLi4vYXBpL2NvbmZpZy5tanMnO1xuaW1wb3J0IFByb2ZpbGVBcGkgICAgICAgICAgZnJvbSAnLi4vYXBpL1Byb2ZpbGUubWpzJztcbmltcG9ydCBUYWdBcGkgICAgICAgICAgICAgIGZyb20gJy4uL2FwaS9UYWcubWpzJztcbmltcG9ydCBVc2VyQXBpICAgICAgICAgICAgIGZyb20gJy4uL2FwaS9Vc2VyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnRDb250cm9sbGVyIHtcbiAgICAvKipcbiAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS5PYnNlcnZhYmxlIG1peGluXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT1mYWxzZVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgb2JzZXJ2YWJsZSA9IHRydWVcblxuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tcG9uZW50fG51bGx9IGFydGljbGVDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhcnRpY2xlQ29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhcnRpY2xlc09mZnNldF89MFxuICAgICAgICAgKi9cbiAgICAgICAgYXJ0aWNsZXNPZmZzZXRfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5DcmVhdGVDb21wb25lbnR8bnVsbH0gY3JlYXRlQ29tcG9uZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlQ29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHRoZSBjdXJyZW50IHVzZXIgZGF0YSBhZnRlciBsb2dnaW5nIGluXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBjdXJyZW50VXNlcl89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjdXJyZW50VXNlcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaGFzaFN0cmluZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoYXNoU3RyaW5nOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuSG9tZUNvbXBvbmVudHxudWxsfSBob21lQ29tcG9uZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaG9tZUNvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LnVzZXIuUHJvZmlsZUNvbXBvbmVudHxudWxsfSBwcm9maWxlQ29tcG9uZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvZmlsZUNvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LnVzZXIuU2V0dGluZ3NDb21wb25lbnR8bnVsbH0gc2V0dGluZ3NDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzZXR0aW5nc0NvbXBvbmVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1JlYWxXb3JsZC52aWV3LnVzZXIuU2lnblVwQ29tcG9uZW50fG51bGx9IHNpZ25VcENvbXBvbmVudD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpZ25VcENvbXBvbmVudDogbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXJ0aWNsZXNPZmZzZXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXJ0aWNsZXNPZmZzZXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIGlnbm9yZSB0aGUgaW5pdGlhbCBjb25maWcgc2V0dGVyIGNhbGxcbiAgICAgICAgaWYgKE5lby5pc051bWJlcihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXJ0aWNsZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3VycmVudFVzZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3VycmVudFVzZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnaGVhZGVyJykuc2V0KHtcbiAgICAgICAgICAgICAgICBsb2dnZWRJbiA6ICEhdmFsdWUsXG4gICAgICAgICAgICAgICAgdXNlckltYWdlOiB2YWx1ZSA/IHZhbHVlLmltYWdlICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSA6IHZhbHVlID8gdmFsdWUudXNlcm5hbWUgOiBudWxsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiB0ZXN0IHRvIGVuc3VyZSB0aGUgaW5pdGlhbCBtYXJrdXAgaXMgcmVuZGVyZWRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCdhZnRlclNldEN1cnJlbnRVc2VyJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgZGVsZXRlQXJ0aWNsZShzbHVnKSB7XG4gICAgICAgIEFydGljbGVBcGkuZGVsZXRlKHtzbHVnOiBzbHVnfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBkZWxldGVDb21tZW50KGlkKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHNsdWcgPSBtZS5oYXNoU3RyaW5nLnNwbGl0KCcvJykucG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIEFydGljbGVBcGkuZGVsZXRlQ29tbWVudChzbHVnLCBpZCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmdldENvbW1lbnRzKHNsdWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmF2b3JpdGVkXG4gICAgICovXG4gICAgZmF2b3JpdGVBcnRpY2xlKHNsdWcsIGZhdm9yaXRlZCkge1xuICAgICAgICByZXR1cm4gRmF2b3JpdGVBcGlbZmF2b3JpdGVkID8gJ2FkZCcgOiAncmVtb3ZlJ10oc2x1Zyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZvbGxvd1xuICAgICAqL1xuICAgIGZvbGxvd1VzZXIoc2x1ZywgZm9sbG93KSB7XG4gICAgICAgIHJldHVybiBQcm9maWxlQXBpW2ZvbGxvdyA/ICdmb2xsb3cnIDogJ3VuZm9sbG93J10oc2x1Zyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJ0aWNsZSBkZXRhaWxzOiBnZXQgYW4gYXJ0aWNsZSBwcm92aWRpbmcgYSB1c2VyIHNsdWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2V0QXJ0aWNsZShzbHVnKSB7XG4gICAgICAgIHJldHVybiBBcnRpY2xlQXBpLmdldCh7XG4gICAgICAgICAgICBzbHVnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdldEFydGljbGVzKHBhcmFtcz17fSwgb3B0cz17fSkge1xuICAgICAgICByZXR1cm4gQXJ0aWNsZUFwaS5nZXQoe1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbGltaXQgOiAxMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMuYXJ0aWNsZXNPZmZzZXQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4ub3B0c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGdldENvbW1lbnRzKHNsdWcpIHtcbiAgICAgICAgQXJ0aWNsZUFwaS5nZXRDb21tZW50cyhzbHVnKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnRpY2xlQ29tcG9uZW50LmNvbW1lbnRzID0gZGF0YS5qc29uLmNvbW1lbnRzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9rZW5cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50VXNlcih0b2tlbikge1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIFVzZXJBcGkuZ2V0KHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZTogJy91c2VyJyAvLyBlZGdlIGNhc2UsIHVzZXIgaW5zdGVhZCBvZiB1c2Vyc1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZGF0YS5qc29uLnVzZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgZ2V0UHJvZmlsZShzbHVnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgUHJvZmlsZUFwaS5nZXQoe1xuICAgICAgICAgICAgc2x1Z1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUucHJvZmlsZUNvbXBvbmVudC51cGRhdGVDb250ZW50KHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLmpzb24ucHJvZmlsZSxcbiAgICAgICAgICAgICAgICBteVByb2ZpbGU6IGRhdGEuanNvbi5wcm9maWxlLnVzZXJuYW1lID09PSAobWUuY3VycmVudFVzZXI/LnVzZXJuYW1lKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0VGFncygpIHtcbiAgICAgICAgVGFnQXBpLmdldCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvbWVDb21wb25lbnQudGFnTGlzdC50YWdzID0gZGF0YS5qc29uLnRhZ3M7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyRGF0YVxuICAgICAqL1xuICAgIGxvZ2luKHVzZXJEYXRhKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyRGF0YTtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5Mb2NhbFN0b3JhZ2UuY3JlYXRlTG9jYWxTdG9yYWdlSXRlbSh7XG4gICAgICAgICAgICBrZXkgIDogTE9DQUxfU1RPUkFHRV9LRVksXG4gICAgICAgICAgICB2YWx1ZTogdXNlckRhdGEudG9rZW5cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAvLyB3YWl0IHVudGlsIHRoZSBoZWFkZXIgdmRvbS11cGRhdGUgaXMgZG9uZSB0byBhdm9pZCBzaG93aW5nIHNpZ24gdXAgJiBzaWduIGluIHR3aWNlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZW8uTWFpbi5zZXRSb3V0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnLydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkxvY2FsU3RvcmFnZS5kZXN0cm95TG9jYWxTdG9yYWdlSXRlbSh7XG4gICAgICAgICAgICBrZXk6IExPQ0FMX1NUT1JBR0VfS0VZXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gd2FpdCB1bnRpbCB0aGUgaGVhZGVyIHZkb20tdXBkYXRlIGlzIGRvbmUgdG8gYXZvaWQgc2hvd2luZyBzaWduIHVwICYgc2lnbiBpbiB0d2ljZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db21wb25lbnRDb25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db21wb25lbnRDb25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIC8vIGRlZmF1bHQgcm91dGUgPT4gaG9tZVxuICAgICAgICBpZiAoIU5lby5jb25maWcuaGFzaCkge1xuICAgICAgICAgICAgdGhpcy5vbkhhc2hDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWVzICA6IFsnUmVhbFdvcmxkJ10sXG4gICAgICAgICAgICAgICAgaGFzaCAgICAgIDogeycvJzogJyd9LFxuICAgICAgICAgICAgICAgIGhhc2hTdHJpbmc6ICcvJ1xuICAgICAgICAgICAgfSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBVc2VyQXBpLm9uKCdyZWFkeScsIHRoaXMuZ2V0Q3VycmVudFVzZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFzeW5jIG9uSGFzaENoYW5nZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50ICA9IG1lLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGhhc2ggICAgICAgPSB2YWx1ZS5oYXNoLFxuICAgICAgICAgICAgaGFzaFN0cmluZyA9IHZhbHVlLmhhc2hTdHJpbmcsXG4gICAgICAgICAgICBtb2RlLCBuZXdWaWV3LCBvcHRzLCBzbHVnO1xuXG4gICAgICAgIGlmICghY29tcG9uZW50LmlzQ29uc3RydWN0ZWQpIHsgLy8gdGhlIGluaXRpYWwgaGFzaCBjaGFuZ2UgZ2V0cyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSB2bm9kZSBnb3QgYmFjayBmcm9tIHRoZSB2ZG9tIHdvcmtlciAodXNpbmcgYXV0b01vdW50KVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uKCdjb25zdHJ1Y3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5vbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuaGFzaFN0cmluZyA9IGhhc2hTdHJpbmc7XG5cbiAgICAgICAgICAgIC8vIGFkanVzdCB0aGUgYWN0aXZlIGhlYWRlciBsaW5rXG4gICAgICAgICAgICBjb21wb25lbnQuaXRlbXNbMF0uYWN0aXZlSXRlbSA9IE9iamVjdC5rZXlzKGhhc2gpWzBdO1xuXG4gICAgICAgICAgICAgICAgIGlmIChoYXNoU3RyaW5nID09PSAnLycpICAgICAgICAgICAgICAge29wdHMgPSBbJ2hvbWVDb21wb25lbnQnLCAgICAgKCkgPT4gaW1wb3J0KCcuL0hvbWVDb21wb25lbnQubWpzJyksICAgICAgICAgICAnaG9tZSddfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzaFN0cmluZy5pbmNsdWRlcygnL2FydGljbGUvJykpIHtvcHRzID0gWydhcnRpY2xlQ29tcG9uZW50JywgICgpID0+IGltcG9ydCgnLi9hcnRpY2xlL0NvbXBvbmVudC5tanMnKSwgICAgICAgJ2FydGljbGUnXX1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc2hTdHJpbmcuaW5jbHVkZXMoJy9lZGl0b3InKSkgICB7b3B0cyA9IFsnY3JlYXRlQ29tcG9uZW50JywgICAoKSA9PiBpbXBvcnQoJy4vYXJ0aWNsZS9DcmVhdGVDb21wb25lbnQubWpzJyksICdlZGl0b3InXX1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc2hTdHJpbmcuaW5jbHVkZXMoJy9wcm9maWxlLycpKSB7b3B0cyA9IFsncHJvZmlsZUNvbXBvbmVudCcsICAoKSA9PiBpbXBvcnQoJy4vdXNlci9Qcm9maWxlQ29tcG9uZW50Lm1qcycpLCAgICdwcm9maWxlJ119XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNoLmhhc093blByb3BlcnR5KCcvbG9naW4nKSkgICAge29wdHMgPSBbJ3NpZ25VcENvbXBvbmVudCcsICAgKCkgPT4gaW1wb3J0KCcuL3VzZXIvU2lnblVwQ29tcG9uZW50Lm1qcycpLCAgICAnc2lnbnVwJ107IG1vZGUgPSAnc2lnbmluJzt9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNoLmhhc093blByb3BlcnR5KCcvcmVnaXN0ZXInKSkge29wdHMgPSBbJ3NpZ25VcENvbXBvbmVudCcsICAgKCkgPT4gaW1wb3J0KCcuL3VzZXIvU2lnblVwQ29tcG9uZW50Lm1qcycpLCAgICAnc2lnbnVwJ107IG1vZGUgPSAnc2lnbnVwJzt9XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNoLmhhc093blByb3BlcnR5KCcvc2V0dGluZ3MnKSkge29wdHMgPSBbJ3NldHRpbmdzQ29tcG9uZW50JywgKCkgPT4gaW1wb3J0KCcuL3VzZXIvU2V0dGluZ3NDb21wb25lbnQubWpzJyksICAnc2V0dGluZ3MnXX1cblxuICAgICAgICAgICAgaWYgKG9wdHMpIHtcbiAgICAgICAgICAgICAgICBuZXdWaWV3ID0gYXdhaXQgbWUucHJvbWlzZVZpZXcoLi4ub3B0cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobW9kZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWaWV3Lm1vZGUgPSBtb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEob2xkVmFsdWUgJiYgb2xkVmFsdWUuaGFzaCAmJiAoXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUuaGFzaC5oYXNPd25Qcm9wZXJ0eSgnL2xvZ2luJykgICAgJiYgaGFzaC5oYXNPd25Qcm9wZXJ0eSgnL3JlZ2lzdGVyJykgfHxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5oYXNoLmhhc093blByb3BlcnR5KCcvcmVnaXN0ZXInKSAmJiBoYXNoLmhhc093blByb3BlcnR5KCcvbG9naW4nKSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50Lml0ZW1zLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnJlbW92ZUF0KDEsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3Vmlldykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaW5zZXJ0KDEsIG5ld1ZpZXcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChuZXdWaWV3LnJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FydGljbGUnOlxuICAgICAgICAgICAgICAgICAgICBzbHVnID0gaGFzaFN0cmluZy5zcGxpdCgnLycpLnBvcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLmdldEFydGljbGUoc2x1ZykudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnRpY2xlID0gZGF0YS5qc29uLmFydGljbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keSAgICA9IGFydGljbGUuYm9keTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFydGljbGUuYm9keTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuYXJ0aWNsZUNvbXBvbmVudC5zZXQoYXJ0aWNsZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuYXJ0aWNsZUNvbXBvbmVudC5ib2R5ID0gYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBtZS5nZXRDb21tZW50cyhzbHVnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZWRpdG9yJzpcbiAgICAgICAgICAgICAgICAgICAgc2x1ZyA9IGhhc2hTdHJpbmcuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsdWcgIT09ICdlZGl0b3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5nZXRBcnRpY2xlKHNsdWcpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGRhdGEuanNvbi5hcnRpY2xlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlQ29tcG9uZW50LnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgICAgICAgOiBhcnRpY2xlLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhcnRpY2xlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnICAgICAgIDogYXJ0aWNsZS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdMaXN0ICAgIDogYXJ0aWNsZS50YWdMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSAgICAgIDogYXJ0aWNsZS50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVDb21wb25lbnQucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgICAgIG1lLmhvbWVDb21wb25lbnQubG9nZ2VkSW4gPSAhIW1lLmN1cnJlbnRVc2VyO1xuICAgICAgICAgICAgICAgICAgICBtZS5ob21lQ29tcG9uZW50LmdldEFydGljbGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmdldFRhZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncHJvZmlsZSc6XG4gICAgICAgICAgICAgICAgICAgIG1lLmdldFByb2ZpbGUoaGFzaFN0cmluZy5zcGxpdCgnLycpLnBvcCgpKTsgLy8gcGFzcyB0aGUgc2x1Z1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzZXR0aW5ncyc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5jdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIGFkZGVkIGEgc2hvcnQgZGVsYXkgdG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtYWluQ29udGFpbmVyIHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLnNldHRpbmdzQ29tcG9uZW50Lm9uQ3VycmVudFVzZXJDaGFuZ2UobWUuY3VycmVudFVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NpZ251cCc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZpZXcuZXJyb3JzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzKVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcG9zdENvbW1lbnQob3B0cz17fSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBzbHVnID0gbWUuaGFzaFN0cmluZy5zcGxpdCgnLycpLnBvcCgpO1xuXG4gICAgICAgIHJldHVybiBBcnRpY2xlQXBpLnBvc3RDb21tZW50KHNsdWcsIG9wdHMpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5nZXRDb21tZW50cyhzbHVnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG1vZHVsZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByZWZlcmVuY2VcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfSBUaGUgbWF0Y2hpbmcgdmlldyBpbnN0YW5jZVxuICAgICAqL1xuICAgIGFzeW5jIHByb21pc2VWaWV3KGtleSwgbW9kdWxlLCByZWZlcmVuY2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lW2tleV0pIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IGF3YWl0IG1vZHVsZSgpO1xuXG4gICAgICAgICAgICBtZVtrZXldID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgbW9kdWxlICA6IG1vZHVsZS5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5jb21wb25lbnQuaWQsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZVtrZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBzYXZlVXNlcihvcHRzKSB7XG4gICAgICAgIHJldHVybiBVc2VyQXBpLnBvc3Qob3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzKVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgdXBkYXRlU2V0dGluZ3Mob3B0cz17fSkge1xuICAgICAgICByZXR1cm4gVXNlckFwaS5wdXQoe1xuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICAgIHJlc291cmNlOiAnL3VzZXInIC8vIGVkZ2UgY2FzZSwgdXNlciBpbnN0ZWFkIG9mIHVzZXJzXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEuanNvbi5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZGF0YS5qc29uLnVzZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
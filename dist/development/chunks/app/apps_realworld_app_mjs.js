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
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.api.Article'
         * @protected
         */
        className: 'RealWorld.api.Article',
        /**
         * @member {String} resource='/articles'
         */
        resource: '/articles'
    }}

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
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true,
        /**
         * @member {String|null} token=null
         * @protected
         * @static
         */
        token: null
    }}

    static getConfig() {return {
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
    }}

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
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.api.Favorite'
         * @protected
         */
        className: 'RealWorld.api.Favorite'
    }}

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
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.api.Profile'
         * @protected
         */
        className: 'RealWorld.api.Profile',
        /**
         * @member {String} resource='/profiles'
         */
        resource: '/profiles'
    }}

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
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.api.Tag'
         * @protected
         */
        className: 'RealWorld.api.Tag',
        /**
         * @member {String} resource='/tags'
         */
        resource: '/tags'
    }}
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
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.api.User'
         * @protected
         */
        className: 'RealWorld.api.User',
        /**
         * @member {String} resource='/tags'
         */
        resource: '/users'
    }}
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
    static getConfig() {return {
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
    }}
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
    static getConfig() {return {
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
         * @member {String[]} cls=['navbar', 'navbar-light']
         */
        cls: ['navbar', 'navbar-light'],
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
    }}

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

        me.vdom = vdom;
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
                vdom = me.vdom,
                list = vdom.cn[0].cn[1];

            list.cn[1].removeDom = !value; // editor
            list.cn[2].removeDom = !value; // settings
            list.cn[3].removeDom = !value; // profile
            list.cn[4].removeDom = value;  // login
            list.cn[5].removeDom = value;  // register

            me.vdom = vdom;
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
            vdom        = me.vdom,
            profileLink = vdom.cn[0].cn[1].cn[3].cn[0];

        profileLink.cn[0].removeDom = !value;
        profileLink.cn[0].src       = value;

        me.vdom = vdom;
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
                vdom        = me.vdom,
                profileLink = vdom.cn[0].cn[1].cn[3].cn[0];

            profileLink.href = '#/profile/' + value;
            profileLink.cn[1].html = '&nbsp;' + value;

            me.vdom = vdom;
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
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.view.MainContainer'
         * @protected
         */
        className: 'RealWorld.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Array} cls=[]
         */
        cls: [],
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
    }}
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
    static getConfig() {return {
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
    }}

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
            slug: slug
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
        const me = this;

        _api_Profile_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].get({
            slug: slug
        }).then(data => {
            me.profileComponent.update({
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
                module   : module.default,
                parentId : me.component.id,
                reference: reference
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUEsZUFBZSxvRUFBc0I7QUFDckM7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlLDBEQUFZO0FBQzNCOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBLDBCQUEwQjtBQUMxQixlQUFlLHlEQUFXO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL2FwaS9BcnRpY2xlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL2FwaS9CYXNlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL2FwaS9GYXZvcml0ZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC9hcGkvUHJvZmlsZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC9hcGkvVGFnLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL2FwaS9Vc2VyLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL2FwaS9jb25maWcubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvYXBwLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvRm9vdGVyQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvSGVhZGVyQ29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC92aWV3L01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLmFwaS5BcnRpY2xlXG4gKiBAZXh0ZW5kcyBSZWFsV29ybGQuYXBpLkJhc2VcbiAqL1xuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQuYXBpLkFydGljbGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC5hcGkuQXJ0aWNsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScvYXJ0aWNsZXMnXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZTogJy9hcnRpY2xlcydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICAgKi9cbiAgICBkZWxldGVDb21tZW50KHNsdWcsIGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSh7XG4gICAgICAgICAgICB1cmw6IGAvYXJ0aWNsZXMvJHtzbHVnfS9jb21tZW50cy8ke2lkfWBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKi9cbiAgICBnZXRDb21tZW50cyhzbHVnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh7XG4gICAgICAgICAgICB1cmw6IGAvYXJ0aWNsZXMvJHtzbHVnfS9jb21tZW50c2BcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqL1xuICAgIHBvc3RDb21tZW50KHNsdWcsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh7XG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgICAgdXJsOiBgL2FydGljbGVzLyR7c2x1Z30vY29tbWVudHNgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXJ0aWNsZSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQXJ0aWNsZSk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImltcG9ydCB7QVBJX1VSTCwgTE9DQUxfU1RPUkFHRV9LRVl9IGZyb20gJy4vY29uZmlnLm1qcyc7XG5pbXBvcnQgQ29yZUJhc2UgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC5hcGkuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHRva2VuPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICB0b2tlbjogbnVsbFxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLmFwaS5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdSZWFsV29ybGQuYXBpLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGRlZmF1bHRIZWFkZXJzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRIZWFkZXJzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNSZWFkeT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNSZWFkeTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScnXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZTogJy8nXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICB0aGlzLmFmdGVyQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2xhc3MgZXh0ZW5zaW9ucyBBcnRpY2xlLCBGYXZvcml0ZSwgUHJvZmlsZSwgVGFnLCBVc2VyIGFyZSBzaW5nbGV0b25zXG4gICAgICogYW5kIGdldCBkaXJlY3RseSBpbXBvcnRlZCBpbnRvIHRoZSBNYWluQ29udGFpbmVyKENvbnRyb2xsZXIpXG4gICAgICogPT4gdGhlaXIgY3JlYXRpb24gaGFwcGVucyBiZWZvcmUgdGhlIGFwcCBpcyBjb25zdHJ1Y3RlZFxuICAgICAqID0+IE5lby5hcHBzWydSZWFsV29ybGQnXSBkb2VzIG1vc3QgbGlrZWx5IG5vdCBleGlzdCB5ZXQuXG4gICAgICovXG4gICAgYWZ0ZXJDb25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIU5lby5hcHBzIHx8ICFOZW8uYXBwc1snUmVhbFdvcmxkJ10pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFmdGVyQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoTmVvLmFwcHNbJ1JlYWxXb3JsZCddLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgbWUub25BcHBSZW5kZXJlZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOZW8uYXBwc1snUmVhbFdvcmxkJ10ub24oJ3JlbmRlcicsbWUub25BcHBSZW5kZXJlZCwgbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkFwcFJlbmRlcmVkKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKEJhc2UudG9rZW4pIHtcbiAgICAgICAgICAgIG1lLm9uUmVhZHkoQmFzZS50b2tlbik7XG4gICAgICAgIH0gZWxzZSBpZiAoIUJhc2UuaW5pdGlhbFRva2VuUmVxdWVzdFNlbnQpIHtcbiAgICAgICAgICAgIEJhc2UuaW5pdGlhbFRva2VuUmVxdWVzdFNlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5Mb2NhbFN0b3JhZ2UucmVhZExvY2FsU3RvcmFnZUl0ZW0oe1xuICAgICAgICAgICAgICAgIGtleTogTE9DQUxfU1RPUkFHRV9LRVlcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIEJhc2UudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5vblJlYWR5KHRva2VuKTtcbiAgICAgICAgICAgICAgICBCYXNlLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEJhc2UuZmlyZSgncmVhZHknLCB0b2tlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEJhc2Uub24oe1xuICAgICAgICAgICAgICAgIHJlYWR5OiBtZS5vblJlYWR5LFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLmRhdGFdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLnBhcmFtc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMucmVzb3VyY2VdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnNsdWddXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnVybF1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBjcmVhdGVVcmwob3B0cykge1xuICAgICAgICBpZiAob3B0cy51cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBBUElfVVJMICsgb3B0cy51cmw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQVBJX1VSTCArIChvcHRzLnJlc291cmNlIHx8IHRoaXMucmVzb3VyY2UpICsgKG9wdHMuc2x1ZyA/ICcvJyArIG9wdHMuc2x1ZyA6ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLmRhdGFdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLnBhcmFtc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMucmVzb3VyY2VdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnNsdWddXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBkZWxldGUob3B0cz17fSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVsZXRlJywgb3B0cyk7XG5cbiAgICAgICAgcmV0dXJuIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgZGF0YSAgIDogb3B0cy5kYXRhLFxuICAgICAgICAgICAgbWV0aG9kIDogJ0RFTEVURScsXG4gICAgICAgICAgICBwYXJhbXMgOiBvcHRzLnBhcmFtcyxcbiAgICAgICAgICAgIHVybCAgICA6IHRoaXMuY3JlYXRlVXJsKG9wdHMpLFxuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0SGVhZGVycyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJyAgICA6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlYWxXb3JsZC5hcGkuQmFzZTpnZXQoKScsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5kYXRhXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cy5wYXJhbXNdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnJlc291cmNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5zbHVnXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2V0KG9wdHM9e30pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldCcsIG9wdHMpO1xuXG4gICAgICAgIHJldHVybiBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIGRhdGEgICA6IG9wdHMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZCA6ICdHRVQnLFxuICAgICAgICAgICAgcGFyYW1zIDogb3B0cy5wYXJhbXMsXG4gICAgICAgICAgICB1cmwgICAgOiB0aGlzLmNyZWF0ZVVybChvcHRzKSxcblxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdEhlYWRlcnMsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgICAgOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWFsV29ybGQuYXBpLkJhc2U6Z2V0KCknLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIG1ldGhvZCB3aGljaCBnZXRzIHRyaWdnZXJlZCBvbmNlIHRoZSB0b2tlbiBpcyBmZXRjaGVkIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB0b2tlblxuICAgICAqL1xuICAgIG9uUmVhZHkodG9rZW4pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIG1lLmRlZmF1bHRIZWFkZXJzID0gbWUuZGVmYXVsdEhlYWRlcnMgfHwge307XG4gICAgICAgICAgICBtZS5kZWZhdWx0SGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ1Rva2VuICcgKyB0b2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICBtZS5maXJlKCdyZWFkeScsIHRva2VuKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLmRhdGFdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzLnBhcmFtc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMucmVzb3VyY2VdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRzLnNsdWddXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBwb3N0KG9wdHM9e30pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Bvc3QnLCBvcHRzKTtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSBvcHRzLnBhcmFtcztcbiAgICAgICAgZGVsZXRlIG9wdHMucGFyYW1zO1xuXG4gICAgICAgIHJldHVybiBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIGRhdGEgICA6IG9wdHMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZCA6ICdQT1NUJyxcbiAgICAgICAgICAgIHBhcmFtcyA6IHBhcmFtcyxcbiAgICAgICAgICAgIHVybCAgICA6IHRoaXMuY3JlYXRlVXJsKG9wdHMpLFxuXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5kZWZhdWx0SGVhZGVycyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJyAgICA6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlYWxXb3JsZC5hcGkuQmFzZTpwb3N0KCknLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMuZGF0YV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMucGFyYW1zXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0cy5yZXNvdXJjZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdHMuc2x1Z11cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHB1dChvcHRzPXt9KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwdXQnLCBvcHRzKTtcblxuICAgICAgICBjb25zdCBwYXJhbXMgPSBvcHRzLnBhcmFtcztcbiAgICAgICAgZGVsZXRlIG9wdHMucGFyYW1zO1xuXG4gICAgICAgIHJldHVybiBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIGRhdGEgICA6IG9wdHMuZGF0YSxcbiAgICAgICAgICAgIG1ldGhvZCA6ICdQVVQnLFxuICAgICAgICAgICAgcGFyYW1zIDogcGFyYW1zLFxuICAgICAgICAgICAgdXJsICAgIDogdGhpcy5jcmVhdGVVcmwob3B0cyksXG5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmRlZmF1bHRIZWFkZXJzLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnICAgIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVhbFdvcmxkLmFwaS5CYXNlOnB1dCgpJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkJhc2UuaW5pdGlhbFRva2VuUmVxdWVzdFNlbnQgPSBmYWxzZTtcbkJhc2UudG9rZW4gICAgICAgICAgICAgICAgICAgPSBudWxsO1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQuYXBpLkZhdm9yaXRlXG4gKiBAZXh0ZW5kcyBSZWFsV29ybGQuYXBpLkJhc2VcbiAqL1xuY2xhc3MgRmF2b3JpdGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLmFwaS5GYXZvcml0ZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLmFwaS5GYXZvcml0ZSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKi9cbiAgICBhZGQoc2x1Zykge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHtcbiAgICAgICAgICAgIHVybDogYC9hcnRpY2xlcy8ke3NsdWd9L2Zhdm9yaXRlYFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIHJlbW92ZShzbHVnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSh7XG4gICAgICAgICAgICB1cmw6IGAvYXJ0aWNsZXMvJHtzbHVnfS9mYXZvcml0ZWBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGYXZvcml0ZSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoRmF2b3JpdGUpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLmFwaS5Qcm9maWxlXG4gKiBAZXh0ZW5kcyBSZWFsV29ybGQuYXBpLkJhc2VcbiAqL1xuY2xhc3MgUHJvZmlsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQuYXBpLlByb2ZpbGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC5hcGkuUHJvZmlsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHJlc291cmNlPScvcHJvZmlsZXMnXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZTogJy9wcm9maWxlcydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKi9cbiAgICBmb2xsb3coc2x1Zykge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHtcbiAgICAgICAgICAgIHVybDogYC9wcm9maWxlcy8ke3NsdWd9L2ZvbGxvd2BcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKi9cbiAgICB1bmZvbGxvdyhzbHVnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZSh7XG4gICAgICAgICAgICB1cmw6IGAvcHJvZmlsZXMvJHtzbHVnfS9mb2xsb3dgXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUHJvZmlsZSk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoUHJvZmlsZSk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQuYXBpLlRhZ1xuICogQGV4dGVuZHMgUmVhbFdvcmxkLmFwaS5CYXNlXG4gKi9cbmNsYXNzIFRhZyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQuYXBpLlRhZydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLmFwaS5UYWcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSByZXNvdXJjZT0nL3RhZ3MnXG4gICAgICAgICAqL1xuICAgICAgICByZXNvdXJjZTogJy90YWdzJ1xuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRhZyk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoVGFnKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQuYXBpLlVzZXJcbiAqIEBleHRlbmRzIFJlYWxXb3JsZC5hcGkuQmFzZVxuICovXG5jbGFzcyBVc2VyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC5hcGkuVXNlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLmFwaS5Vc2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcmVzb3VyY2U9Jy90YWdzJ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVzb3VyY2U6ICcvdXNlcnMnXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXNlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoVXNlcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJleHBvcnQgY29uc3QgQVBJX1VSTCAgICAgICAgICAgPSAnaHR0cHM6Ly9hcGkucmVhbHdvcmxkLmlvL2FwaSc7XG5leHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9LRVkgPSAnbmVvUmVhbFdvcmxkVG9rZW4nO1xuXG5leHBvcnQgZGVmYXVsdCB7QVBJX1VSTCwgTE9DQUxfU1RPUkFHRV9LRVl9O1xuIiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnUmVhbFdvcmxkJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LkZvb3RlckNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEZvb3RlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LkZvb3RlckNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuRm9vdGVyQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICAgICAge3RhZzogJ2Zvb3RlcicsIGNuOiBbXG4gICAgICAgICAgICAgICAge2NsczogWydjb250YWluZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHM6IFsnbG9nby1mb250J10sIGhyZWY6ICcjLycsIGh0bWw6ICdjb25kdWl0J30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiAnYXR0cmlidXRpb24nLCBodG1sOiAnQW4gaW50ZXJhY3RpdmUgbGVhcm5pbmcgcHJvamVjdCBmcm9tIDxhIGhyZWY9XCJodHRwczovL3RoaW5rc3Rlci5pb1wiPlRoaW5rc3RlcjwvYT4uIENvZGUgJmFtcDsgZGVzaWduIGxpY2Vuc2VkIHVuZGVyIE1JVC4nfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZvb3RlckNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LkhlYWRlckNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LkhlYWRlckNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuSGVhZGVyQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWN0aXZlSXRlbV89J2hvbWUnXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVJdGVtXzogJ2hvbWUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25hdmJhcicsICduYXZiYXItbGlnaHQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25hdmJhcicsICduYXZiYXItbGlnaHQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxvZ2dlZEluXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgbG9nZ2VkSW5fOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VySW1hZ2VfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJJbWFnZV86bnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1c2VyTmFtZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXNlck5hbWVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgICAgICB7dGFnOiAnbmF2JywgY2xzOiBbJ25hdmJhciBuYXZiYXItbGlnaHQnXSwgY246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lciddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsICBjbHM6IFsnbmF2YmFyLWJyYW5kJ10sIGhyZWY6ICcjLycsIGh0bWw6ICdjb25kdWl0J30sXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICd1bCcsIGNsczogWyduYXYgbmF2YmFyLW5hdicsICdwdWxsLXhzLXJpZ2h0J10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWyduYXYtbGluayddLCBocmVmOiAnIy8nLCBodG1sOiAnSG9tZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGNsczogWyduYXYtaXRlbSddLCByZW1vdmVEb206IHRydWUsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHM6IFsnbmF2LWxpbmsnXSwgaHJlZjogJyMvZWRpdG9yJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6ICdpb24tY29tcG9zZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwO05ldyBBcnRpY2xlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnbGknLCBjbHM6IFsnbmF2LWl0ZW0nXSwgcmVtb3ZlRG9tOiB0cnVlLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzOiBbJ25hdi1saW5rJ10sIGhyZWY6ICcjL3NldHRpbmdzJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6ICdpb24tZ2Vhci1hJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7U2V0dGluZ3MnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGNsczogWyduYXYtaXRlbSddLCByZW1vdmVEb206IHRydWUsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHMgOiBbJ25hdi1saW5rJ10sIGhyZWY6ICcjL3Byb2ZpbGUnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaW1nJywgY2xzOiBbJ3VzZXItcGljJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwO1Byb2ZpbGUnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGNsczogWyduYXYtaXRlbSddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWcgOiAnYScsIGNscyA6IFsnbmF2LWxpbmsnXSwgaHJlZjogJyMvbG9naW4nLCBodG1sOiAnU2lnbiBpbid9XG4gICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdsaScsIGNsczogWyduYXYtaXRlbSddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzIDogWyduYXYtbGluayddLCBocmVmOiAnIy9yZWdpc3RlcicsIGh0bWw6ICdTaWduIHVwJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYWN0aXZlSXRlbSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBY3RpdmVJdGVtKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZSh2ZG9tLmNuWzBdLmNuWzFdLmNuW21lLmdldEFjdGl2ZUluZGV4KG9sZFZhbHVlKV0uY25bMF0uY2xzLCAnYWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5hZGQodmRvbS5jblswXS5jblsxXS5jblttZS5nZXRBY3RpdmVJbmRleCh2YWx1ZSldLmNuWzBdLmNscywgJ2FjdGl2ZScpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbG9nZ2VkSW4gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMb2dnZWRJbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgbGlzdCA9IHZkb20uY25bMF0uY25bMV07XG5cbiAgICAgICAgICAgIGxpc3QuY25bMV0ucmVtb3ZlRG9tID0gIXZhbHVlOyAvLyBlZGl0b3JcbiAgICAgICAgICAgIGxpc3QuY25bMl0ucmVtb3ZlRG9tID0gIXZhbHVlOyAvLyBzZXR0aW5nc1xuICAgICAgICAgICAgbGlzdC5jblszXS5yZW1vdmVEb20gPSAhdmFsdWU7IC8vIHByb2ZpbGVcbiAgICAgICAgICAgIGxpc3QuY25bNF0ucmVtb3ZlRG9tID0gdmFsdWU7ICAvLyBsb2dpblxuICAgICAgICAgICAgbGlzdC5jbls1XS5yZW1vdmVEb20gPSB2YWx1ZTsgIC8vIHJlZ2lzdGVyXG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VySW1hZ2UgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlckltYWdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgcHJvZmlsZUxpbmsgPSB2ZG9tLmNuWzBdLmNuWzFdLmNuWzNdLmNuWzBdO1xuXG4gICAgICAgIHByb2ZpbGVMaW5rLmNuWzBdLnJlbW92ZURvbSA9ICF2YWx1ZTtcbiAgICAgICAgcHJvZmlsZUxpbmsuY25bMF0uc3JjICAgICAgID0gdmFsdWU7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VyTmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VyTmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBwcm9maWxlTGluayA9IHZkb20uY25bMF0uY25bMV0uY25bM10uY25bMF07XG5cbiAgICAgICAgICAgIHByb2ZpbGVMaW5rLmhyZWYgPSAnIy9wcm9maWxlLycgKyB2YWx1ZTtcbiAgICAgICAgICAgIHByb2ZpbGVMaW5rLmNuWzFdLmh0bWwgPSAnJm5ic3A7JyArIHZhbHVlO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSB0YXJnZXQgaW5kZXhcbiAgICAgKi9cbiAgICBnZXRBY3RpdmVJbmRleCh2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICcvc2V0dGluZ3MnOiByZXR1cm4gMjtcbiAgICAgICAgICAgIGNhc2UgJy9sb2dpbicgICA6IHJldHVybiA0O1xuICAgICAgICAgICAgY2FzZSAnL3JlZ2lzdGVyJzogcmV0dXJuIDU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy9lZGl0b3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy9wcm9maWxlJykpIHtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVmYXVsdCB0byBob21lXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcG9uZW50O1xuIiwiaW1wb3J0IEZvb3RlckNvbXBvbmVudCAgICAgICAgIGZyb20gJy4vRm9vdGVyQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgSGVhZGVyQ29tcG9uZW50ICAgICAgICAgZnJvbSAnLi9IZWFkZXJDb21wb25lbnQubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3Lk1haW5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9W11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9TWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IE1haW5Db250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2Jhc2UnfSxcblxuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZSAgIDogSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnaGVhZGVyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGU6IEZvb3RlckNvbXBvbmVudFxuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xuIiwiaW1wb3J0IEFydGljbGVBcGkgICAgICAgICAgZnJvbSAnLi4vYXBpL0FydGljbGUubWpzJztcbmltcG9ydCBDb21wb25lbnRDb250cm9sbGVyIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IEZhdm9yaXRlQXBpICAgICAgICAgZnJvbSAnLi4vYXBpL0Zhdm9yaXRlLm1qcyc7XG5pbXBvcnQge0xPQ0FMX1NUT1JBR0VfS0VZfSBmcm9tICcuLi9hcGkvY29uZmlnLm1qcyc7XG5pbXBvcnQgUHJvZmlsZUFwaSAgICAgICAgICBmcm9tICcuLi9hcGkvUHJvZmlsZS5tanMnO1xuaW1wb3J0IFRhZ0FwaSAgICAgICAgICAgICAgZnJvbSAnLi4vYXBpL1RhZy5tanMnO1xuaW1wb3J0IFVzZXJBcGkgICAgICAgICAgICAgZnJvbSAnLi4vYXBpL1VzZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21wb25lbnR8bnVsbH0gYXJ0aWNsZUNvbXBvbmVudD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGFydGljbGVDb21wb25lbnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFydGljbGVzT2Zmc2V0Xz0wXG4gICAgICAgICAqL1xuICAgICAgICBhcnRpY2xlc09mZnNldF86IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtSZWFsV29ybGQudmlldy5hcnRpY2xlLkNyZWF0ZUNvbXBvbmVudHxudWxsfSBjcmVhdGVDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVDb21wb25lbnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9yZXMgdGhlIGN1cnJlbnQgdXNlciBkYXRhIGFmdGVyIGxvZ2dpbmcgaW5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGN1cnJlbnRVc2VyXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnRVc2VyXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBoYXNoU3RyaW5nPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhhc2hTdHJpbmc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtSZWFsV29ybGQudmlldy5Ib21lQ29tcG9uZW50fG51bGx9IGhvbWVDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBob21lQ29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcudXNlci5Qcm9maWxlQ29tcG9uZW50fG51bGx9IHByb2ZpbGVDb21wb25lbnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwcm9maWxlQ29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcudXNlci5TZXR0aW5nc0NvbXBvbmVudHxudWxsfSBzZXR0aW5nc0NvbXBvbmVudD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNldHRpbmdzQ29tcG9uZW50OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7UmVhbFdvcmxkLnZpZXcudXNlci5TaWduVXBDb21wb25lbnR8bnVsbH0gc2lnblVwQ29tcG9uZW50PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2lnblVwQ29tcG9uZW50OiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXJ0aWNsZXNPZmZzZXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXJ0aWNsZXNPZmZzZXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIGlnbm9yZSB0aGUgaW5pdGlhbCBjb25maWcgc2V0dGVyIGNhbGxcbiAgICAgICAgaWYgKE5lby5pc051bWJlcihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QXJ0aWNsZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3VycmVudFVzZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3VycmVudFVzZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnaGVhZGVyJykuc2V0KHtcbiAgICAgICAgICAgICAgICBsb2dnZWRJbiA6ICEhdmFsdWUsXG4gICAgICAgICAgICAgICAgdXNlckltYWdlOiB2YWx1ZSA/IHZhbHVlLmltYWdlICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSA6IHZhbHVlID8gdmFsdWUudXNlcm5hbWUgOiBudWxsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiB0ZXN0IHRvIGVuc3VyZSB0aGUgaW5pdGlhbCBtYXJrdXAgaXMgcmVuZGVyZWRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlKCdhZnRlclNldEN1cnJlbnRVc2VyJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgZGVsZXRlQXJ0aWNsZShzbHVnKSB7XG4gICAgICAgIEFydGljbGVBcGkuZGVsZXRlKHtzbHVnOiBzbHVnfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBkZWxldGVDb21tZW50KGlkKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHNsdWcgPSBtZS5oYXNoU3RyaW5nLnNwbGl0KCcvJykucG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIEFydGljbGVBcGkuZGVsZXRlQ29tbWVudChzbHVnLCBpZCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmdldENvbW1lbnRzKHNsdWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZmF2b3JpdGVkXG4gICAgICovXG4gICAgZmF2b3JpdGVBcnRpY2xlKHNsdWcsIGZhdm9yaXRlZCkge1xuICAgICAgICByZXR1cm4gRmF2b3JpdGVBcGlbZmF2b3JpdGVkID8gJ2FkZCcgOiAncmVtb3ZlJ10oc2x1Zyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNsdWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZvbGxvd1xuICAgICAqL1xuICAgIGZvbGxvd1VzZXIoc2x1ZywgZm9sbG93KSB7XG4gICAgICAgIHJldHVybiBQcm9maWxlQXBpW2ZvbGxvdyA/ICdmb2xsb3cnIDogJ3VuZm9sbG93J10oc2x1Zyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXJ0aWNsZSBkZXRhaWxzOiBnZXQgYW4gYXJ0aWNsZSBwcm92aWRpbmcgYSB1c2VyIHNsdWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2V0QXJ0aWNsZShzbHVnKSB7XG4gICAgICAgIHJldHVybiBBcnRpY2xlQXBpLmdldCh7XG4gICAgICAgICAgICBzbHVnOiBzbHVnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXt9XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdldEFydGljbGVzKHBhcmFtcz17fSwgb3B0cz17fSkge1xuICAgICAgICByZXR1cm4gQXJ0aWNsZUFwaS5nZXQoe1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbGltaXQgOiAxMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMuYXJ0aWNsZXNPZmZzZXQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4ub3B0c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2x1Z1xuICAgICAqL1xuICAgIGdldENvbW1lbnRzKHNsdWcpIHtcbiAgICAgICAgQXJ0aWNsZUFwaS5nZXRDb21tZW50cyhzbHVnKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnRpY2xlQ29tcG9uZW50LmNvbW1lbnRzID0gZGF0YS5qc29uLmNvbW1lbnRzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdG9rZW5cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50VXNlcih0b2tlbikge1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIFVzZXJBcGkuZ2V0KHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZTogJy91c2VyJyAvLyBlZGdlIGNhc2UsIHVzZXIgaW5zdGVhZCBvZiB1c2Vyc1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZGF0YS5qc29uLnVzZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzbHVnXG4gICAgICovXG4gICAgZ2V0UHJvZmlsZShzbHVnKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBQcm9maWxlQXBpLmdldCh7XG4gICAgICAgICAgICBzbHVnOiBzbHVnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5wcm9maWxlQ29tcG9uZW50LnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4uZGF0YS5qc29uLnByb2ZpbGUsXG4gICAgICAgICAgICAgICAgbXlQcm9maWxlOiBkYXRhLmpzb24ucHJvZmlsZS51c2VybmFtZSA9PT0gKG1lLmN1cnJlbnRVc2VyPy51c2VybmFtZSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFRhZ3MoKSB7XG4gICAgICAgIFRhZ0FwaS5nZXQoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob21lQ29tcG9uZW50LnRhZ0xpc3QudGFncyA9IGRhdGEuanNvbi50YWdzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdXNlckRhdGFcbiAgICAgKi9cbiAgICBsb2dpbih1c2VyRGF0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlckRhdGE7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uTG9jYWxTdG9yYWdlLmNyZWF0ZUxvY2FsU3RvcmFnZUl0ZW0oe1xuICAgICAgICAgICAga2V5ICA6IExPQ0FMX1NUT1JBR0VfS0VZLFxuICAgICAgICAgICAgdmFsdWU6IHVzZXJEYXRhLnRva2VuXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gd2FpdCB1bnRpbCB0aGUgaGVhZGVyIHZkb20tdXBkYXRlIGlzIGRvbmUgdG8gYXZvaWQgc2hvd2luZyBzaWduIHVwICYgc2lnbiBpbiB0d2ljZVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJy8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5Mb2NhbFN0b3JhZ2UuZGVzdHJveUxvY2FsU3RvcmFnZUl0ZW0oe1xuICAgICAgICAgICAga2V5OiBMT0NBTF9TVE9SQUdFX0tFWVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIHdhaXQgdW50aWwgdGhlIGhlYWRlciB2ZG9tLXVwZGF0ZSBpcyBkb25lIHRvIGF2b2lkIHNob3dpbmcgc2lnbiB1cCAmIHNpZ24gaW4gdHdpY2VcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29tcG9uZW50Q29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29tcG9uZW50Q29uc3RydWN0ZWQoKTtcblxuICAgICAgICAvLyBkZWZhdWx0IHJvdXRlID0+IGhvbWVcbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLmhhc2gpIHtcbiAgICAgICAgICAgIHRoaXMub25IYXNoQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lcyAgOiBbJ1JlYWxXb3JsZCddLFxuICAgICAgICAgICAgICAgIGhhc2ggICAgICA6IHsnLyc6ICcnfSxcbiAgICAgICAgICAgICAgICBoYXNoU3RyaW5nOiAnLydcbiAgICAgICAgICAgIH0sIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgVXNlckFwaS5vbigncmVhZHknLCB0aGlzLmdldEN1cnJlbnRVc2VyLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhc3luYyBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbXBvbmVudCAgPSBtZS5jb21wb25lbnQsXG4gICAgICAgICAgICBoYXNoICAgICAgID0gdmFsdWUuaGFzaCxcbiAgICAgICAgICAgIGhhc2hTdHJpbmcgPSB2YWx1ZS5oYXNoU3RyaW5nLFxuICAgICAgICAgICAgbW9kZSwgbmV3Vmlldywgb3B0cywgc2x1ZztcblxuICAgICAgICBpZiAoIWNvbXBvbmVudC5pc0NvbnN0cnVjdGVkKSB7IC8vIHRoZSBpbml0aWFsIGhhc2ggY2hhbmdlIGdldHMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgdm5vZGUgZ290IGJhY2sgZnJvbSB0aGUgdmRvbSB3b3JrZXIgKHVzaW5nIGF1dG9Nb3VudClcbiAgICAgICAgICAgIGNvbXBvbmVudC5vbignY29uc3RydWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUub25IYXNoQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmhhc2hTdHJpbmcgPSBoYXNoU3RyaW5nO1xuXG4gICAgICAgICAgICAvLyBhZGp1c3QgdGhlIGFjdGl2ZSBoZWFkZXIgbGlua1xuICAgICAgICAgICAgY29tcG9uZW50Lml0ZW1zWzBdLmFjdGl2ZUl0ZW0gPSBPYmplY3Qua2V5cyhoYXNoKVswXTtcblxuICAgICAgICAgICAgICAgICBpZiAoaGFzaFN0cmluZyA9PT0gJy8nKSAgICAgICAgICAgICAgIHtvcHRzID0gWydob21lQ29tcG9uZW50JywgICAgICgpID0+IGltcG9ydCgnLi9Ib21lQ29tcG9uZW50Lm1qcycpLCAgICAgICAgICAgJ2hvbWUnXX1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhhc2hTdHJpbmcuaW5jbHVkZXMoJy9hcnRpY2xlLycpKSB7b3B0cyA9IFsnYXJ0aWNsZUNvbXBvbmVudCcsICAoKSA9PiBpbXBvcnQoJy4vYXJ0aWNsZS9Db21wb25lbnQubWpzJyksICAgICAgICdhcnRpY2xlJ119XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNoU3RyaW5nLmluY2x1ZGVzKCcvZWRpdG9yJykpICAge29wdHMgPSBbJ2NyZWF0ZUNvbXBvbmVudCcsICAgKCkgPT4gaW1wb3J0KCcuL2FydGljbGUvQ3JlYXRlQ29tcG9uZW50Lm1qcycpLCAnZWRpdG9yJ119XG4gICAgICAgICAgICBlbHNlIGlmIChoYXNoU3RyaW5nLmluY2x1ZGVzKCcvcHJvZmlsZS8nKSkge29wdHMgPSBbJ3Byb2ZpbGVDb21wb25lbnQnLCAgKCkgPT4gaW1wb3J0KCcuL3VzZXIvUHJvZmlsZUNvbXBvbmVudC5tanMnKSwgICAncHJvZmlsZSddfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzaC5oYXNPd25Qcm9wZXJ0eSgnL2xvZ2luJykpICAgIHtvcHRzID0gWydzaWduVXBDb21wb25lbnQnLCAgICgpID0+IGltcG9ydCgnLi91c2VyL1NpZ25VcENvbXBvbmVudC5tanMnKSwgICAgJ3NpZ251cCddOyBtb2RlID0gJ3NpZ25pbic7fVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzaC5oYXNPd25Qcm9wZXJ0eSgnL3JlZ2lzdGVyJykpIHtvcHRzID0gWydzaWduVXBDb21wb25lbnQnLCAgICgpID0+IGltcG9ydCgnLi91c2VyL1NpZ25VcENvbXBvbmVudC5tanMnKSwgICAgJ3NpZ251cCddOyBtb2RlID0gJ3NpZ251cCc7fVxuICAgICAgICAgICAgZWxzZSBpZiAoaGFzaC5oYXNPd25Qcm9wZXJ0eSgnL3NldHRpbmdzJykpIHtvcHRzID0gWydzZXR0aW5nc0NvbXBvbmVudCcsICgpID0+IGltcG9ydCgnLi91c2VyL1NldHRpbmdzQ29tcG9uZW50Lm1qcycpLCAgJ3NldHRpbmdzJ119XG5cbiAgICAgICAgICAgIGlmIChvcHRzKSB7XG4gICAgICAgICAgICAgICAgbmV3VmlldyA9IGF3YWl0IG1lLnByb21pc2VWaWV3KC4uLm9wdHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Vmlldy5tb2RlID0gbW9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghKG9sZFZhbHVlICYmIG9sZFZhbHVlLmhhc2ggJiYgKFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlLmhhc2guaGFzT3duUHJvcGVydHkoJy9sb2dpbicpICAgICYmIGhhc2guaGFzT3duUHJvcGVydHkoJy9yZWdpc3RlcicpIHx8XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUuaGFzaC5oYXNPd25Qcm9wZXJ0eSgnL3JlZ2lzdGVyJykgJiYgaGFzaC5oYXNPd25Qcm9wZXJ0eSgnL2xvZ2luJykpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5pdGVtcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5yZW1vdmVBdCgxLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lmluc2VydCgxLCBuZXdWaWV3KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAobmV3Vmlldy5yZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhcnRpY2xlJzpcbiAgICAgICAgICAgICAgICAgICAgc2x1ZyA9IGhhc2hTdHJpbmcuc3BsaXQoJy8nKS5wb3AoKTtcblxuICAgICAgICAgICAgICAgICAgICBtZS5nZXRBcnRpY2xlKHNsdWcpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJ0aWNsZSA9IGRhdGEuanNvbi5hcnRpY2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgICAgPSBhcnRpY2xlLmJvZHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhcnRpY2xlLmJvZHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFydGljbGVDb21wb25lbnQuc2V0KGFydGljbGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFydGljbGVDb21wb25lbnQuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0Q29tbWVudHMoc2x1Zyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VkaXRvcic6XG4gICAgICAgICAgICAgICAgICAgIHNsdWcgPSBoYXNoU3RyaW5nLnNwbGl0KCcvJykucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbHVnICE9PSAnZWRpdG9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuZ2V0QXJ0aWNsZShzbHVnKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGUgPSBkYXRhLmpzb24uYXJ0aWNsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZUNvbXBvbmVudC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5ICAgICAgIDogYXJ0aWNsZS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYXJ0aWNsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZyAgICAgICA6IGFydGljbGUuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTGlzdCAgICA6IGFydGljbGUudGFnTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgICAgICA6IGFydGljbGUudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlQ29tcG9uZW50LnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgICAgICAgICBtZS5ob21lQ29tcG9uZW50LmxvZ2dlZEluID0gISFtZS5jdXJyZW50VXNlcjtcbiAgICAgICAgICAgICAgICAgICAgbWUuaG9tZUNvbXBvbmVudC5nZXRBcnRpY2xlcygpO1xuICAgICAgICAgICAgICAgICAgICBtZS5nZXRUYWdzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2ZpbGUnOlxuICAgICAgICAgICAgICAgICAgICBtZS5nZXRQcm9maWxlKGhhc2hTdHJpbmcuc3BsaXQoJy8nKS5wb3AoKSk7IC8vIHBhc3MgdGhlIHNsdWdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc2V0dGluZ3MnOlxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBhZGRlZCBhIHNob3J0IGRlbGF5IHRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWFpbkNvbnRhaW5lciB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5zZXR0aW5nc0NvbXBvbmVudC5vbkN1cnJlbnRVc2VyQ2hhbmdlKG1lLmN1cnJlbnRVc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzaWdudXAnOlxuICAgICAgICAgICAgICAgICAgICBuZXdWaWV3LmVycm9ycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cylcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHBvc3RDb21tZW50KG9wdHM9e30pIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgc2x1ZyA9IG1lLmhhc2hTdHJpbmcuc3BsaXQoJy8nKS5wb3AoKTtcblxuICAgICAgICByZXR1cm4gQXJ0aWNsZUFwaS5wb3N0Q29tbWVudChzbHVnLCBvcHRzKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuZ2V0Q29tbWVudHMoc2x1Zyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBtb2R1bGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcmVmZXJlbmNlXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX0gVGhlIG1hdGNoaW5nIHZpZXcgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBhc3luYyBwcm9taXNlVmlldyhrZXksIG1vZHVsZSwgcmVmZXJlbmNlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZVtrZXldKSB7XG4gICAgICAgICAgICBtb2R1bGUgPSBhd2FpdCBtb2R1bGUoKTtcblxuICAgICAgICAgICAgbWVba2V5XSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogbW9kdWxlLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgOiBtZS5jb21wb25lbnQuaWQsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlOiByZWZlcmVuY2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lW2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHNhdmVVc2VyKG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIFVzZXJBcGkucG9zdChvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHMpXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICB1cGRhdGVTZXR0aW5ncyhvcHRzPXt9KSB7XG4gICAgICAgIHJldHVybiBVc2VyQXBpLnB1dCh7XG4gICAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgICAgcmVzb3VyY2U6ICcvdXNlcicgLy8gZWRnZSBjYXNlLCB1c2VyIGluc3RlYWQgb2YgdXNlcnNcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmICghZGF0YS5qc29uLmVycm9ycykge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhLmpzb24udXNlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyQ29udHJvbGxlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
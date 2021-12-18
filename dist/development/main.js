/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$":
/*!*****************************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/addon/ lazy ^\.\/.*\.mjs$ strict namespace object ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AmCharts.mjs": [
		"./node_modules/neo.mjs/src/main/addon/AmCharts.mjs",
		"node_modules_neo_mjs_src_main_addon_AmCharts_mjs"
	],
	"./AnalyticsByGoogle.mjs": [
		"./node_modules/neo.mjs/src/main/addon/AnalyticsByGoogle.mjs",
		"node_modules_neo_mjs_src_main_addon_AnalyticsByGoogle_mjs"
	],
	"./CloneNode.mjs": [
		"./node_modules/neo.mjs/src/main/addon/CloneNode.mjs",
		"node_modules_neo_mjs_src_main_addon_CloneNode_mjs"
	],
	"./Cookie.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Cookie.mjs",
		"node_modules_neo_mjs_src_main_addon_Cookie_mjs"
	],
	"./DragDrop.mjs": [
		"./node_modules/neo.mjs/src/main/addon/DragDrop.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_DragDrop_mjs"
	],
	"./HighlightJS.mjs": [
		"./node_modules/neo.mjs/src/main/addon/HighlightJS.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_HighlightJS_mjs"
	],
	"./LocalStorage.mjs": [
		"./node_modules/neo.mjs/src/main/addon/LocalStorage.mjs",
		"node_modules_neo_mjs_src_main_addon_LocalStorage_mjs"
	],
	"./MapboxGL.mjs": [
		"./node_modules/neo.mjs/src/main/addon/MapboxGL.mjs",
		"vendors-node_modules_neo_mjs_src_main_addon_MapboxGL_mjs"
	],
	"./Markdown.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Markdown.mjs",
		"node_modules_neo_mjs_src_main_addon_Markdown_mjs"
	],
	"./Mwc.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Mwc.mjs",
		"node_modules_neo_mjs_src_main_addon_Mwc_mjs"
	],
	"./Siesta.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Siesta.mjs",
		"node_modules_neo_mjs_src_main_addon_Siesta_mjs"
	],
	"./Stylesheet.mjs": [
		"./node_modules/neo.mjs/src/main/addon/Stylesheet.mjs",
		"node_modules_neo_mjs_src_main_addon_Stylesheet_mjs"
	],
	"./WindowPosition.mjs": [
		"./node_modules/neo.mjs/src/main/addon/WindowPosition.mjs",
		"node_modules_neo_mjs_src_main_addon_WindowPosition_mjs"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultConfig)
/* harmony export */ });
const Neo = self.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * The current environment. Valid values: 'development', 'dist/development', 'dist/production'
     * This config will get auto-generated
     * @default 'dist/production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'dist/production',
    /**
     * In case you are using the GoogleAnalytics mainThreadAddon or useGoogleAnalytics: true,
     * you can change the gtag id here. Required for the online examples (gh pages)
     * @default 'UA-153734404-1'
     * @memberOf! module:Neo
     * @name config.gtagId
     * @type String
     */
    gtagId: 'UA-153734404-1',
    /**
     * Flag for running on https://neomjs.github.io/pages/
     * => to use local images paths instead of raw.githubusercontent.com
     * @default false
     * @memberOf! module:Neo
     * @name config.isGitHubPages
     * @type Boolean
     */
    isGitHubPages: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * true will log the delta updates inside the main thread(s) as well as the requestAnimation frames
     * @default false
     * @memberOf! module:Neo
     * @name config.logDeltaUpdates
     * @type Boolean
     */
    logDeltaUpdates: false,
    /**
     * Add addons for the main thread
     * Possible values: AmCharts, AnalyticsByGoogle, DragDrop, HighlightJS, LocalStorage, MapboxGL, Markdown, Siesta, Stylesheet, WindowPosition
     * (src/main/addon)
     * @default ['DragDrop','Stylesheet']
     * @memberOf! module:Neo
     * @name config.mainThreadAddons
     * @type String[]
     */
    mainThreadAddons: ['DragDrop', 'Stylesheet'],
    /**
     * You can visually show the amount of delta updates per second using this config.
     * It expects a dom node with the id "neo-delta-updates" as the rendering target.
     * @default false
     * @memberOf! module:Neo
     * @name config.renderCountDeltas
     * @type Boolean
     */
    renderCountDeltas: false,
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCssVars === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if CSS variable based stylesheets are in use (important for switching themes)
     * @default true
     * @memberOf! module:Neo
     * @name config.useCssVars
     * @type Boolean
     */
    useCssVars: true,
    /**
     * Experimental flag if an offscreen canvas worker should get created.
     * @default false
     * @memberOf! module:Neo
     * @name config.useCssVars
     * @type Boolean
     */
    useCanvasWorker: false,
    /**
     * Flag if vdom ids should get mapped into DOM element ids.
     * false will convert them into a "data-neo-id" attribute.
     * @default true
     * @memberOf! module:Neo
     * @name config.useDomIds
     * @type Boolean
     */
    useDomIds: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Intended for the online examples where we need an easy way to add GA to every generated app
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false,
    /**
     * Creates App, Data & VDom as SharedWorkers.
     * Set this one to true in case you want to connect multiple main threads.
     * @default false
     * @memberOf! module:Neo
     * @name config.useSharedWorkers
     * @type Boolean
     */
    useSharedWorkers: false,
    /**
     * Adds global dom event listeners for mobile related events like rotate, swipe, tap
     * @default true
     * @memberOf! module:Neo
     * @name config.useTouchEvents
     * @type Boolean
     */
    useTouchEvents: true,
    /**
     * False will create the vdom.Helper within the App worker (experimental!)
     * @default true
     * @memberOf! module:Neo
     * @name config.useVdomWorker
     * @type Boolean
     */
    useVdomWorker: true
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: `${Neo.config.basePath || DefaultConfig.basePath}resources/`,
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: `${Neo.config.basePath || DefaultConfig.basePath}src/worker/`,
});




/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Neo)
/* harmony export */ });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./node_modules/neo.mjs/src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.bindMethods       as bindMethods
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Compare.isEqual        as isEqual
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @protected
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @protected
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @protected
     * @tutorial 02_ClassSystem
     */
    applyClassConfig(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            proto         = cls.prototype || cls,
            protos        = [],
            config, ctor, staticConfig;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config,       true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       || {};
        staticConfig = baseStaticCfg || {};

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig      ?.() || {},
                staticCfg = ctor.getStaticConfig?.() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!Neo.hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg?.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length > 0) {
                applyMixins(ctor, mixins);

                if (Neo.ns('Neo.core.Observable', false, ctor.prototype.mixins)) {
                    staticCfg.observable = true;
                }
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            !config.singleton && this.applyToGlobalNs(cls);
        });
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs(target, namespace, config, bind) {
        let fnName;

        if (target && Neo.typeOf(config) === 'Object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults(target, defaults) {
        if (target && Neo.typeOf(defaults) === 'Object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone(obj, deep=false, ignoreNeoInstances=false) {
        let out;

        switch (Neo.typeOf(obj)) {
            case 'Array': {
                return !deep ? [...obj] : [...obj.map(val => Neo.clone(val, deep, ignoreNeoInstances))];
            }

            case 'Date': {
                return new Date(obj.valueOf());
            }

            case 'Map': {
                return new Map(obj); // shallow copy
            }

            case 'NeoInstance': {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            }

            case 'Object': {
                out = {};

                Object.entries(obj).forEach(([key, value]) => {
                    out[key] = !deep ? value : Neo.clone(value, deep, ignoreNeoInstances);
                });

                return out;
            }

            case 'Set': {
                return new Set(obj); // shallow copy
            }

            default: {
                return obj; // return all other data types
            }
        }
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance(instance) {
        let config = {...instance.originalConfig};

        delete config._id;
        delete config.id;

        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from '../button/Base.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.button.Base' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.button.Base',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create(className, config) {
        let type = Neo.typeOf(className),
            cls, instance;

        if (type === 'NeoClass') {
            cls = className;
        } else {
            if (type === 'Object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className || config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls();

        instance.construct(config);
        instance.onConstructed();
        instance.onAfterConstructed();
        instance.init();

        return instance;
    },

    emptyFn() {},

    /**
     * Checks if there is a set method for a given property key inside the prototype chain
     * @memberOf module:Neo
     * @param {Neo.core.Base} proto The top level prototype of a class
     * @param {String} key the property key to test
     * @returns {Boolean}
     */
    hasPropertySetter(proto, key) {
        let descriptor;

        while (proto.__proto__) {
            descriptor = Object.getOwnPropertyDescriptor(proto, key);

            if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
                return true;
            }
            proto = proto.__proto__;
        }

        return false;
    },

    /**
     * Deep-merges a source object into a target object
     * @memberOf module:Neo
     * @param {Object} target
     * @param {Object} source
     * @returns {Object} target
     */
    merge(target, source) {
        if (Neo.typeOf(target) === 'Object') {
            for (let key in source) {
                if (Neo.typeOf(source[key]) === 'Object') {
                    if (!target[key]) {
                        target[key] = source[key];
                    } else {
                        Neo.merge(target[key], source[key]);
                    }
                } else {
                    target[key] = source[key];
                }
            }
        }

        return target;
    },

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.button.Base', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.button.Base = self.Neo.button.Base || {};
     * // return self.Neo.button.Base;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
     * @returns {Object} reference to the toplevel namespace
     */
    ns(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || self);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    },

    /**
     * @param {*} item
     * @returns {String|null}
     */
    typeOf(item) {
        if (item === null || item === undefined) {
            return null;
        }

        switch (typeof item) {
            case 'function': {
                if (item.prototype?.constructor.isClass) {
                    return 'NeoClass';
                }

                break;
            }

            case 'object': {
                if (item.constructor.isClass && item instanceof Neo.core.Base) {
                    return 'NeoInstance';
                }
            }
        }

        return item.constructor.name;
    }
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 *
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (Neo.hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get() {
                let me        = this,
                    beforeGet = `beforeGet${key[0].toUpperCase() + key.slice(1)}`,
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                    delete me[configSymbol][key];
                }

                if (typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey      = key[0].toUpperCase() + key.slice(1),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                if (key !== 'items') {
                    value = Neo.clone(value, true, true);
                }

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                if (!Neo.isEqual(value, oldValue)) {
                    me[afterSet]?.(value, oldValue);
                    me.afterSetConfig?.(key, value, oldValue);
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, self);
    } catch(e) {
        return false;
    }
}

/**
 *
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key]?._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                `${proto.className}: Multiple mixins defining same property (${mixinProto.className}, ${proto[key]._from}) => ${key}`
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 *
 * @param mixinCls
 * @returns {Function}
 * @private
 */
function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


const configSymbol       = Symbol.for('configSymbol'),
      forceAssignConfigs = Symbol('forceAssignConfigs'),
      isInstance         = Symbol('isInstance');

/**
 * The base class for (almost) all classes inside the Neo namespace
 * Exceptions are e.g. core.IdGenerator, vdom.VNode
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @static
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @protected
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @protected
         */
        ntype: 'base',
        /**
         * The unique component id
         * @member {String|null} id_=null
         */
        id_: null,
        /**
         * Neo.create() will change this flag to true after the onConstructed() chain is done.
         * @member {Boolean} isConstructed=false
         * @protected
         */
        isConstructed: false,
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null,
        /**
         * You can create a new instance by passing an imported class (JS module default export)
         * @member {Class} module=null
         * @protected
         */
        module: null
    }}

    /**
     * Consumes the static getConfig() return object.
     * Applies the observable mixin if needed, grants remote access if needed.
     * @param {Object} config={}
     */
    construct(config={}) {
        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        me.getStaticConfig('observable') && me.initObservable(config);

        // assign class field values prior to configs
        config = me.setFields(config);

        me.initConfig(config);

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        me.remote && setTimeout(me.initRemote.bind(me), 1);
    }

    /**
     * Triggered after the id config got changed.
     * You can dynamically change instance ids if needed. They need to stay unique at any given point.
     * Use case: e.g. component based lists, where you want to re-use item instances.
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetId(value, oldValue) {
        let me = this;

        if (oldValue) {
            if (Base.instanceManagerAvailable === true) {
                Neo.manager.Instance.unregister(oldValue);
            } else {
                delete Neo.idMap[oldValue];
            }
        }

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.register(me);
        } else {
            Neo.idMap = Neo.idMap || {};
            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {Array|String} [staticName=name + 's'] name of the static config array
     * @returns {String|Number} value or oldValue
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        let values = Array.isArray(staticName) ? staticName : this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            console.error(`Supported values for ${name} are: ${values.join(', ')}`, this);
            return oldValue;
        }

        return value;
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        this.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(this.getIdKey());
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id];
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                delete me[key];
            }
        });
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * Override this method as needed.
     * @returns {String}
     */
    getIdKey() {
        return this.ntype;
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Gets triggered after onConstructed() is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me            = this,
            remote        = me.remote,
            className     = me.className,
            currentWorker = Neo.currentWorker,
            listenerId;

        if (!me.singleton) {
            throw new Error('Remote method access is only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            if (Neo.workerId !== 'main' && currentWorker.isSharedWorker && !currentWorker.isConnected) {
                listenerId = currentWorker.on('connected', () => {
                    currentWorker.un('connected', listenerId);
                    Base.sendRemotes(className, remote);
                });
            } else {
                Base.sendRemotes(className, remote);
            }
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     *
     */
    onAfterConstructed() {
        let me = this;

        me.isConstructed = true;

        // We can only fire the event in case the Observable mixin is included.
        me.getStaticConfig('observable') && me.fire('constructed', me);
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * Helper method to replace string based values containing "@config:" with the matching config value
     * of this instance.
     * @param {Object|Object[]} items
     */
    parseItemConfigs(items) {
        let me = this;

        if (items) {
            if (!Array.isArray(items)) {
                items = [items];
            }

            items.forEach(item => {
                Object.entries(item).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        me.parseItemConfigs(value);
                    } else if (typeof value === 'string' && value.startsWith('@config:')) {
                        value = value.substr(8).trim();

                        if (!me[value] && !me.hasOwnProperty(value)) {
                            console.error('The used @config does not exist:', value, me);
                        } else {
                            // The config might not be processed yet, especially for configs
                            // not ending with an underscore, so we need to check the configSymbol first.
                            item[key] = me[configSymbol][value] || me[value];
                        }
                    }
                });
            });
        }
    }

    /**
     * When using set(), configs without a trailing underscore can already be assigned,
     * so the hasOwnProperty() check will return true
     * @param {Boolean} [forceAssign=false]
     */
    processConfigs(forceAssign=false) {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        me[forceAssignConfigs] = forceAssign;

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (forceAssign || !me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs(forceAssign);
        }
    }

    /**
     * @param {String} className
     * @param {Object} remote
     */
    static sendRemotes(className, remote) {
        let origin;

        Object.entries(remote).forEach(([worker, methods]) => {
            if (Neo.workerId !== worker) {
                origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                origin.sendMessage(worker, {
                    action: 'registerRemote',
                    className,
                    methods
                });
            }
        });
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        values = me.setFields(values);

        // If the initial config processing is still running,
        // finish this one first before dropping new values into the configSymbol.
        // see: https://github.com/neomjs/neo/issues/2201
        if (me[forceAssignConfigs] !== true && Object.keys(me[configSymbol]).length > 0) {
            me.processConfigs();
        }

        Object.assign(me[configSymbol], values);

        me.processConfigs(true);
    }

    /**
     * We want to assign class fields first and remove them from the config object,
     * so that afterSet(), beforeGet() and beforeSet() methods can get the new values right away
     * @param {Object} config
     * @returns {Object}
     */
    setFields(config) {
        let configNames = this.constructor.config;

        Object.entries(config).forEach(([key, value]) => {
            if (!configNames.hasOwnProperty(key) && !Neo.hasPropertySetter(this, key)) {
                this[key] = value;
                delete config[key];
            }
        });

        return config;
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.button.Base').toString() => "[object Neo.button.Base (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`;
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Compare.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Compare.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Compare
 * @extends Neo.core.Base
 */
class Compare extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Compare'
         * @protected
         */
        className: 'Neo.core.Compare'
    }}

    /**
     * @param {*} item1
     * @param {*} item2
     * @returns {Boolean}
     */
    static isEqual(item1, item2) {
        if (item1 === item2) {
            return true;
        }

        let type1 = Neo.typeOf(item1),
            type2 = Neo.typeOf(item2),
            key;

        if (type1 !== type2) {
            return false;
        }

        switch (type1) {
            case 'Array': {
                if (item1.length !== item2.length) {
                    return false;
                }

                for (const [i, v] of item1.entries()) {
                    if (!Compare.isEqual(v, item2[i])) {
                        return false;
                    }
                }

                break;
            }

            case 'Date': {
                return item1.valueOf() === item2.valueOf();
            }

            case 'Function': {
                if (item1.name !== item2.name) {
                    return false;
                }

                return item1.toString() === item2.toString();
            }

            case 'Map': {
                if (item1.size !== item2.size) {
                    return false;
                }

                let val2;

                for (const [key, val] of item1) {
                    val2 = item2.get(key);

                    if (val2 !== val || val2 === undefined && !item2.has(key)) {
                        return false;
                    }
                }

                break;
            }

            case 'NeoInstance': {
                if (item1.id !== item2.id) {
                    return false;
                }

                break;
            }

            case 'Object': {
                if (Object.keys(item1).length !== Object.keys(item2).length) {
                    return false;
                }

                for (key in item1) {
                    if (!Compare.isEqual(item1[key], item2[key])) {
                        return false;
                    }
                }

                break;
            }

            case 'RegExp': {
                if (item1.toString() !== item2.toString()) {
                    return false;
                }

                break;
            }

            case 'Set': {
                if (item1.size !== item2.size) {
                    return false;
                }

                for (key of item1) {
                    if (!item2.has(key)) {
                        return false;
                    }
                }

                break;
            }

            default: {
                return item1 === item2;
            }
        }

        return true;
    }
}

Neo.applyClassConfig(Compare);

// alias
Neo.isEqual = Compare.isEqual;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Compare);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/IdGenerator.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/IdGenerator.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @protected
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @protected
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @protected
         */
        singleton: true
    }}

    /**
     * @param config
     */
    construct(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    /**
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }

    init() {}

    onAfterConstructed() {}

    onConstructed() {}
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @protected
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @protected
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String|null} eventId null in case an object gets passed as the name (multiple ids)
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me         = this,
            nameObject = typeof name === 'object',
            listener, existing, eventConfig;

        if (nameObject) {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        if (!nameObject) {
            eventConfig = {
                fn    : listener,
                scope : scope,
                data  : data,
                id    : eventId || Neo.getId('event')
            };

            if (existing = me.listeners?.[name]) {
                existing.forEach(cfg => {
                    if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                        console.error('Duplicate event handler attached:', name, me);
                    }
                });

                if (typeof order === 'number') {
                    existing.splice(order, 0, eventConfig);
                } else if (order === 'before') {
                    existing.unshift(eventConfig);
                } else {
                    existing.push(eventConfig);
                }
            } else {
                me.listeners[name] = [eventConfig];
            }

            return eventConfig.id;
        }

        return null;
    }

    /**
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            if (Neo.isObject(listeners)) {
                listeners = {...listeners};
            }

            me.addListener(listeners);
        }

        while (proto?.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    removeListener(name, eventId) {
        let me = this,
            i, len, listener, listeners, match, scope;

        if (Neo.isObject(name)) {
            if (name.scope) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                listeners = me.listeners[key] || [];
                i         = 0;
                len       = listeners.length;

                for (; i < len; i++) {
                    listener = listeners[i];

                    if (
                        listener.fn.name === (Neo.isString(value) ? value : value.name) &&
                        listener.scope   === scope
                    ) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            });
        } else if (Neo.isString(eventId)) {
            listeners = me.listeners[name];
            match     = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for removeListener
     * @param {Object|String} name
     * @param {String} [eventId]
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);




/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Util.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Util.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @protected
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @protected
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @protected
         */
        ntype: 'core-util',
    }}

    /**
     * @param {Object} scope
     * @param {String[]} values
     */
    static bindMethods(scope, values) {
        values.forEach(value => {
            scope[value] = scope[value].bind(scope);
        });
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Converts a styles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (value instanceof Date) {
            return false;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    bindMethods      : 'bindMethods',
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    toArray          : 'toArray'
}, true);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Util);


/***/ }),

/***/ "./node_modules/neo.mjs/src/core/_export.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/_export.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base": () => (/* reexport safe */ _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Compare": () => (/* reexport safe */ _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "IdGenerator": () => (/* reexport safe */ _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Observable": () => (/* reexport safe */ _Observable_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Util": () => (/* reexport safe */ _Util_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Compare_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compare.mjs */ "./node_modules/neo.mjs/src/core/Compare.mjs");
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");
/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");









/***/ }),

/***/ "./node_modules/neo.mjs/src/main/DomAccess.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/DomAccess.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _mixin_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixin/DeltaUpdates.mjs */ "./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");




/**
 * @class Neo.main.DomAccess
 * @extends Neo.core.Base
 * @singleton
 */
class DomAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.DomAccess'
         * @protected
         */
        className: 'Neo.main.DomAccess',
        /**
         * @member {Number} countDeltas=0
         * @protected
         */
        countDeltas: 0,
        /**
         * @member {Number} countDeltasPer250ms=0
         * @protected
         */
        countDeltasPer250ms: 0,
        /**
         * @member {Number} countUpdates=0
         * @protected
         */
        countUpdates: 0,
        /**
         * @member {Array} mixins=[DeltaUpdates, Observable]
         */
        mixins: [
            _mixin_DeltaUpdates_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]
        ],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'addScript',
                'applyBodyCls',
                'execCommand',
                'focus',
                'getAttributes',
                'getBoundingClientRect',
                'scrollBy',
                'scrollIntoView',
                'scrollTo',
                'scrollToTableRow',
                'selectNode',
                'setBodyCls',
                'setStyle',
                'windowScrollTo'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * Void attributes inside html tags
         * @member {String[]} voidAttributes
         * @protected
         */
        voidAttributes: [
            'checked',
            'required'
        ]
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this,
            node;

        if (Neo.config.renderCountDeltas) {
            setInterval(() => {
                node = document.getElementById('neo-delta-updates');

                if (node) {
                   node.innerHTML = String(me.countDeltasPer250ms * 4);
                }

                me.countDeltasPer250ms = 0;
            }, 250);
        }
    }

    /**
     * @param {Object} data
     * @param {Boolean} data.async
     * @param {Boolean} [data.defer=false]
     * @param {String} [data.src=true]
     */
    addScript(data) {
        let script = document.createElement('script');

        if (!data.hasOwnProperty('async')) {
            data.async = true;
        }

        Object.assign(script, data);

        document.head.appendChild(script);
    }

    /**
     * @param {Object} data
     * @param {String[]} data.cls
     */
    applyBodyCls(data) {
        let cls = data.cls || [];
        document.body.classList.add(...cls);
    }

    /**
     * @param {Object} data
     * @param {String} data.command
     * @returns {Object} data
     */
    execCommand(data) {
        document.execCommand(data.command);
        return data;
    }

    /**
     * Calls focus on a node for a given dom node id
     * @param {Object} data
     * @returns {Object} obj.id => the passed id
     */
    focus(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.focus();

            if (Neo.isNumber(node.selectionStart)) {
                node.selectionStart = node.selectionEnd = node.value.length;
            }
        }

        return {id: data.id};
    }

    /**
     * Returns the attributes for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @param {Array|String} data.attributes either an attribute or an array of attributes
     * @returns {Array|Object} In case id is an array, an array of atrrbute objects is returned, otherwise an object
     */
    getAttributes(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getAttributes({
                    attributes: data.attributes,
                    id        : id
                }));
            });
        } else {
            let node = this.getElementOrBody(data.id);

            returnData = {};

            if (node) {
                if (!Array.isArray(data.attributes)) {
                    data.attributes = [data.attributes];

                    data.attributes.forEach(attribute => {
                        returnData[attribute] = node[attribute];
                    })
                }
            }
        }

        return returnData;
    }

    /**
     * Returns node.getBoundingClientRect() for a given dom node id
     * @param {Object} data
     * @param {Array|String} data.id either an id or an array of ids
     * @returns {Array|Object} In case id is an array, an array of DomRects is returned, otherwise an DomRect object
     */
    getBoundingClientRect(data) {
        let returnData;

        if (Array.isArray(data.id)) {
            returnData = [];

            data.id.forEach(id => {
                returnData.push(this.getBoundingClientRect({id: id}));
            });
        } else {
            let node = this.getElementOrBody(data.id),
                rect = {};

            returnData = {};

            if (node) {
                rect = node.getBoundingClientRect();

                // DomRect does not support spreading => {...DomRect} => {}
                Object.assign(returnData, {
                    bottom: rect.bottom,
                    height: rect.height,
                    left  : rect.left,
                    right : rect.right,
                    top   : rect.top,
                    width : rect.width,
                    x     : rect.x,
                    y     : rect.y
                });
            }
        }

        return returnData;
    }

    /**
     * @param {String} nodeId
     * @returns {HTMLElement}
     * @protected
     */
    getElement(nodeId) {
        if (Neo.config.useDomIds) {
            return document.getElementById(nodeId);
        }

        return document.querySelector(`[data-neo-id='${nodeId}']`);
    }

    /**
     * @param {String} [nodeId='document.body']
     * @returns {HTMLElement}
     * @protected
     */
    getElementOrBody(nodeId='document.body') {
        if (nodeId === 'body' || nodeId === 'document.body') {
            return document.body;
        }

        return this.getElement(nodeId);
    }

    /**
     * Include a script into the document.head
     * @param {String} src
     * @param {Boolean} [async=true]
     * @returns {Promise<unknown>}
     */
    loadScript(src, async=true) {
        let script;

        return new Promise((resolve, reject) => {
            script = document.createElement('script');

            Object.assign(script, {
                async,
                onerror: reject,
                onload : resolve,
                src
            });

            document.head.appendChild(script);
        });
    }

    /**
     * Include a link into the document.head
     * @param {String} href
     * @returns {Promise<unknown>}
     */
    loadStylesheet(href) {
        let link;

        return new Promise((resolve, reject) => {
            link = document.createElement('link');

            Object.assign(link, {
                href,
                onerror: reject,
                onload : resolve,
                rel    : 'stylesheet',
                type   : 'text/css'
            });

            document.head.appendChild(link);
        });
    }

    /**
     *
     */
    onDomContentLoaded() {
        if (Neo.config.applyBodyCls) {
            this.applyBodyCls({cls: ['neo-body']});
        }
    }

    /**
     * @param {Object} data
     * @param {String} data.nodeId
     */
    onGetOffscreenCanvas(data) {
        let me        = this,
            node      = me.getElement(data.nodeId),
            offscreen = node.transferControlToOffscreen();

        data.offscreen = offscreen;

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data,
            replyId: data.id,
            success: true
        }, [offscreen]);
    }

    /**
     * @param {Object} data
     * @param {String[]} data.attributes
     * @param {Array} data.functions An array containing strings and/or objects
     * @param {String[]} data.styles
     * @param {String} data.vnodeId
     * @protected
     */
    onReadDom(data) {
        let attributes    = data.attributes || [],
            functions     = data.functions  || [],
            styles        = data.styles     || [],
            vnodeId       = data.vnodeId,
            retAttributes = {},
            retFunctions  = {},
            retStyles     = {},
            element       = vnodeId ? this.getElement(vnodeId) : null,
            fnName, scope;

        attributes.forEach(key => {
            retAttributes[key] = element[key];
        });

        functions.forEach((key, index) => {
            if (Neo.isObject(key)) {
                key.params         = key.params         || [];
                key.paramIsDomNode = key.paramIsDomNode || [];

                scope = key.scope ? document[key.scope] : element;

                key.params.forEach((param, paramIndex) => {
                    if (key.paramIsDomNode[paramIndex] === true) {
                        key.params[paramIndex] = this.getElement(key.params[paramIndex]);
                    }
                });

                fnName = key.returnFnName ? key.returnFnName : index;
                retFunctions[fnName] = scope[key.fn](...key.params);

                if (key.returnValue) {
                    retFunctions[fnName] = retFunctions[fnName][key.returnValue];
                }
            } else {
                retFunctions[key] = element[key]();
            }
        });

        styles.forEach(key => {
            retStyles[key] = element.style[key];
        });

        Object.assign(data, {
            attributes: retAttributes,
            functions : retFunctions,
            styles    : retStyles
        });

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data,
            replyId: data.id,
            success: true
        });
    }

    /**
     * @param {Object} data
     * @protected
     */
    read(data) {
        if (typeof data === 'function') {
            data();
        }
    }

    /**
     * @param {Object} data
     * @param {String} data.direction left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollBy(data) {
        let node = this.getElement(data.id);

        if (node) {
            node[`scroll${Neo.capitalize(data.direction)}`] += data.value;
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.block='start']
     * @param {String} [data.inline='nearest']
     * @returns {Object} obj.id => the passed id
     */
    scrollIntoView(data) {
        let node = this.getElement(data.id);

        if (node) {
            node.scrollIntoView({
                behavior: data.behavior || 'smooth',
                block   : data.block    || 'start',
                inline  : data.inline   || 'nearest'
            });
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String} data.direction left, top
     * @param {String} data.id
     * @param {Number} data.value
     * @returns {Object} obj.id => the passed id
     */
    scrollTo(data) {
        let node = this.getElement(data.id);

        if (node) {
            node[`scroll${Neo.capitalize(data.direction)}`] = data.value;
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {String} [data.behavior='smooth']
     * @param {String} [data.offset=34]
     * @returns {Object} obj.id => the passed id
     */
    scrollToTableRow(data) {
        let node = this.getElement(data.id); // tr tag

        if (node) {
            let tableNode   = node.parentNode.parentNode,
                wrapperNode = tableNode.parentNode,
                tableTop    = tableNode.getBoundingClientRect().top,
                top         = node.getBoundingClientRect().top;

            wrapperNode.scrollTo({
                top     : top - tableTop - (data.hasOwnProperty('offset') ? data.offset : 34),
                behavior: data.behavior || 'smooth'
            });
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String} data.id
     * @param {Number} [data.start=0]
     * @param {Number} [data.end=99999]
     * @returns {Object} obj.id => the passed id
     */
    selectNode(data) {
        let node  = this.getElement(data.id),
            start = Neo.isNumber(data.start) || 0,
            end   = Neo.isNumber(data.end)   || 99999;

        if (node) {
            node.select();
            node.setSelectionRange(start, end);
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String[]} data.add
     * @param {Object[]} data.remove
     */
    setBodyCls(data) {
        document.body.classList.remove(...data.remove || []);
        document.body.classList.add(...data.add || []);
    }

    /**
     * Not recommended to use => stick to vdom updates.
     * Can be handy for custom CSS based animations though.
     * @param {Object} data
     * @param {String} data.id A node id or 'document.body'
     * @param {Object} data.style
     * @returns {Object} obj.id => the passed id
     */
    setStyle(data) {
        let node = this.getElementOrBody(data.id);

        if (node) {
            Object.entries(data.style).forEach(([key, value]) => {
                if (Neo.isString(value) && value.includes('!important')) {
                    value = value.replace('!important', '').trim();
                    node.style.setProperty(Neo.decamel(key), value, 'important');
                } else {
                    node.style[Neo.decamel(key)] = value;
                }
            });
        }

        return {id: data.id};
    }

    /**
     * @param {Object} data
     * @param {String} [data.behavior='smooth'] // auto or smooth
     * @param {String} [data.left=0]
     * @param {String} [data.top=0]
     */
    windowScrollTo(data) {
        window.scrollTo({
            behavior: data.behavior || 'smooth',
            left    : data.left     || 0,
            top     : data.top      || 0
        });
    }

    /**
     * @param {Object} data
     * @protected
     */
    write(data) {
        this.du_insertNode({
            index    : data.parentIndex,
            outerHTML: data.html || data.outerHTML,
            parentId : data.parentId
        });
    }
}

Neo.applyClassConfig(DomAccess);

let instance = Neo.create(DomAccess);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/DomEvents.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/DomEvents.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixin/TouchDomEvents.mjs */ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs");




const globalDomEvents = [
    {name: 'change',      handler: 'onChange'},
    {name: 'click',       handler: 'onClick'},
    {name: 'contextmenu', handler: 'onContextMenu'},
    {name: 'dblclick',    handler: 'onDoubleClick'},
    {name: 'focusin',     handler: 'onFocusIn'},
    {name: 'focusout',    handler: 'onFocusOut'},
    {name: 'input',       handler: 'onChange'},
    {name: 'keydown',     handler: 'onKeyDown'},
    {name: 'keyup',       handler: 'onKeyUp'},
    {name: 'mousedown',   handler: 'onMouseDown'},
    {name: 'mouseenter',  handler: 'onMouseEnter', options: {capture: true}},
    {name: 'mouseleave',  handler: 'onMouseLeave', options: {capture: true}},
    {name: 'mouseup',     handler: 'onMouseUp'},
    {name: 'wheel',       handler: 'onWheel',      options: {passive: false}}
];

// Will get applied to the document.body in case Neo.config.useTouchEvents === true (default value)
const touchEvents = [
    {name: 'touchcancel', handler: 'onTouchCancel'},
    {name: 'touchend',    handler: 'onTouchEnd'},
    {name: 'touchenter',  handler: 'onTouchEnter'},
    {name: 'touchleave',  handler: 'onTouchLeave'},
    {name: 'touchmove',   handler: 'onTouchMove'},
    {name: 'touchstart',  handler: 'onTouchStart'}
];

// wheel events fire very often, so we limit the targets to avoid unnecessary post messages from main to the app worker
const globalWheelTargets = [
    'neo-c-m-scrollcontainer',
    'neo-c-w-scrollcontainer',
    'neo-calendar-yearcomponent',
    'neo-circle-component',
    'neo-dateselector',
    'neo-gallery',
    'neo-helix'
];

// separated from globalWheelTargets => performance
// buffer in ms
const globalWheelTargetsBuffer = {
    'neo-c-m-scrollcontainer'   : 100,
    'neo-c-w-scrollcontainer'   : 100,
    'neo-calendar-yearcomponent': 300,
    'neo-dateselector'          : 300
};

// separated from globalWheelTargets => performance
const globalWheelTargetsKeepEvent = [
    'neo-c-m-scrollcontainer',
    'neo-c-w-scrollcontainer'
];

const lastWheelEvent = {
    date  : null,
    target: null
};

const preventClickTargets       = [],
      preventContextmenuTargets = [];

/**
 * @class Neo.main.DomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.DomEvents'
         * @protected
         */
        className: 'Neo.main.DomEvents',
        /**
         * todo: conditional dynamic import once the build processes can handle it
         * @member {Array} mixins=[TouchDomEvents]
         */
        mixins: [_mixin_TouchDomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]],
        /**
         * @member {boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: ['addDomListener']}
         * @protected
         */
        remote: {
            app: [
                'addDomListener',
                'registerPreventDefaultTargets'
            ]
        }
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        document.addEventListener('DOMContentLoaded', me.onDomContentLoaded.bind(me));
        window  .addEventListener('hashchange',       me.onHashChange      .bind(me));

        if (Neo.config.useSharedWorkers) {
            window.addEventListener('beforeunload', me.onBeforeUnload.bind(me));
        }
    }

    /**
     * @param {Object} data
     */
    addDomListener(data) {
        let me  = this,
            i   = 0,
            len = data.events.length,
            event, id, targetNode;

        for (; i < len; i++) {
            event = data.events[i];

            if (!me[event.handler]) {
                me[event.handler] = Neo.emptyFn;
            }

            id = event.vnodeId || data.vnodeId;

            if (id === 'document.body') {
                targetNode = document.body;
            } else if (Neo.config.useDomIds) {
                targetNode = document.getElementById(id);
            } else {
                targetNode = document.querySelector(`[data-neo-id='${id}']`);
            }

            targetNode.addEventListener(event.name, me[event.handler].bind(me));
        }

        Neo.worker.Manager.sendMessage(data.origin, {
            action : 'reply',
            data,
            replyId: data.id,
            success: true
        });
    }

    /**
     *
     */
    addGlobalDomListeners() {
        let me = this;

        [...globalDomEvents].concat(Neo.config.useTouchEvents ? touchEvents : []).forEach(event => {
            document.body.addEventListener(event.name, me[event.handler].bind(me), event.options);
        });
    }

    /**
     * Returns the distance between two points
     * @param  {Number} x1 The X position of the first point
     * @param  {Number} y1 The Y position of the first point
     * @param  {Number} x2 The X position of the second point
     * @param  {Number} y2 The Y position of the second point
     * @returns {Number}
     */
    getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    /**
     * Local domEvent listener
     * @param {Object} event
     */
    domEventListener(event) {
        let me     = this,
            target = event.target,
            config = {
                action   : 'domEvent',
                eventName: event.type,

                data: {
                    ...me.getEventData(event),
                    id   : target.id,
                    value: target.value
                }
            };

        // console.log('domEventListener', event.type, target.id, target.value, event);

        switch (event.type) {
            case 'dragend':
                me.dragElementId = null;
                break;
            case 'dragenter':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragleave':
                if (me.dragElementId === target.id) {
                    return; // ignore target and source to be the same
                }
                break;
            case 'dragover':
                me.onDragOver(event);
                event.preventDefault();
                break;
            case 'dragstart':
                me.dragElementId = target.id;
                break;
            case 'drop':
                if (!me.dragElementId || me.dragElementId === target.id) {
                    return; // drop fires twice by default & drop should not trigger on the drag element
                }
                if (event.stopPropagation) {
                    event.stopPropagation(); // stops the browser from redirecting.
                }
                event.preventDefault();
                config.data.srcId = me.dragElementId;
                me.dragElementId = null;
                break;
            case 'mousemove':
                Object.assign(config.data, me.getMouseEventData(event));
                break;
            default:
                event.preventDefault();
                break;
        }

        Neo.worker.Manager.sendMessage('app', config);
    }

    /**
     * @param {Object} event
     * @returns {Object}
     */
    getEventData(event) {
        let path = event.path || event.composedPath(); // FF does not support path

        return {
            path     : path.map(e => this.getTargetData(e)),
            target   : this.getTargetData(event.target),
            timeStamp: event.timeStamp,
            type     : event.type
        };
    }

    /**
     * @param {Object} event
     * @returns {Object}
     */
    getKeyboardEventData(event) {
        let {altKey, code, ctrlKey, key, keyCode, metaKey, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey,
            code,
            ctrlKey,
            key,
            keyCode,
            metaKey,
            shiftKey
        };
    }

    /**
     * @param {Object} event
     * @returns {Object}
     */
    getMouseEventData(event) {
        let {altKey, clientX, clientY, ctrlKey, metaKey, offsetX, offsetY, pageX, pageY, screenX, screenY, shiftKey} = event;

        return {
            ...this.getEventData(event),
            altKey,
            clientX,
            clientY,
            ctrlKey,
            metaKey,
            offsetX,
            offsetY,
            pageX,
            pageY,
            screenX,
            screenY,
            shiftKey
        };
    }

    /**
     * @param {Element} element
     * @returns {Element[]}
     */
    getPathFromElement(element) {
        let path = [];

        if (element) {
            path.push(element);

            while (element.parentNode) {
                path.push(element.parentNode);
                element = element.parentNode;
            }
        }

        return path;
    }

    /**
     * @param {Object} node
     * @returns {Object}
     */
    getTargetData(node) {
        let r    = node.getBoundingClientRect?.(),
            rect = {};

        if (r) {
            Object.assign(rect, {
                bottom: r.bottom,
                height: r.height,
                left  : r.left,
                right : r.right,
                top   : r.top,
                width : r.width,
                x     : r.x,
                y     : r.y
            });
        }

        return {
            checked          : node.checked,
            childElementCount: node.childElementCount,
            clientHeight     : node.clientHeight,
            clientLeft       : node.clientLeft,
            clientTop        : node.clientTop,
            clientWidth      : node.clientWidth,
            cls              : node.classList ? [...node.classList] : [],
            data             : {...node.dataset},
            draggable        : node.draggable,
            hidden           : node.hidden,
            id               : Neo.config.useDomIds ? node.id : node.dataset?.['neoId'],
            inert            : node.inert,
            isConnected      : node.isConnected,
            isContentEditable: node.isContentEditable,
            nodeType         : node.nodeType,
            offsetHeight     : node.offsetHeight,
            offsetLeft       : node.offsetLeft,
            offsetTop        : node.offsetTop,
            offsetWidth      : node.offsetWidth,
            rect,
            scrollHeight     : node.scrollHeight,
            scrollLeft       : node.scrollLeft,
            scrollTop        : node.scrollTop,
            scrollWidth      : node.scrollWidth,
            style            : node.style?.cssText,
            tabIndex         : node.tabIndex,
            tagName          : node.tagName?.toLowerCase()
        };
    }

    /**
     * Returns the first touch event found in touches or changedTouches of a TouchEvent
     * @param {TouchEvent} event
     * @returns {Touch}
     */
    getTouchCoords(event) {
        const {touches, changedTouches} = event;
        return touches?.[0] || changedTouches?.[0];
    }

    /**
     * Only in use if Neo.config.useSharedWorkers = true
     * @param {Object} event
     */
    onBeforeUnload(event) {
        let manager = Neo.worker.Manager;

        manager.appNames.forEach(appName => {
            manager.broadcast({
                action : 'disconnect',
                appName
            });
        })
    }

    /**
     * @param {Object} event
     */
    onChange(event) {
        this.sendMessageToApp({
            ...this.getEventData(event),
            valid: event.target.checkValidity(),
            value: event.target.value
        });
    }

    /**
     * @param {Object} event
     */
    onClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        me.testPathInclusion(event, preventClickTargets) && event.preventDefault();
    }

    /**
     * @param {Object} event
     */
    onContextMenu(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        me.testPathInclusion(event, preventContextmenuTargets) && event.preventDefault();
    }

    /**
     *
     */
    onDomContentLoaded() {
        this.addGlobalDomListeners();
        this.fire('domContentLoaded');
    }

    /**
     * @param {Object} event
     */
    onDoubleClick(event) {
        let me = this;

        me.sendMessageToApp(me.getMouseEventData(event));

        me.testPathInclusion(event, preventClickTargets) && event.preventDefault();
    }

    /**
     * @param {Object} event
     */
    onDragOver(event) {
        event.dataTransfer.dropEffect = 'move';
        //console.log('onDragOver', event);
    }

    /**
     * @param {Object} event
     */
    onFocusIn(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     * @param {Object} event
     */
    onFocusOut(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     *
     */
    onHashChange() {
        let manager    = Neo.worker.Manager,
            hashString = location.hash.substr(1);

        manager.sendMessage('app', {
            action: 'hashChange',
            data  : {
                appNames  : manager.appNames,
                hash      : this.parseHash(hashString),
                hashString
            }
        });
    }

    /**
     * @param {Object} event
     */
    onKeyDown(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));

        if (event.target.nodeName !== 'INPUT') { // see: https://github.com/neomjs/neo/issues/1729
            if (['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'].includes(event.key)) {
                event.preventDefault();
            }
        }
    }

    /**
     * @param {Object} event
     */
    onKeyUp(event) {
        this.sendMessageToApp(this.getKeyboardEventData(event));
    }

    /**
     * @param {Object} event
     */
    onMouseDown(event) {
        this.sendMessageToApp(this.getMouseEventData(event));
    }

    /**
     * @param {Object} event
     */
    onMouseEnter(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), fromElementId: event.fromElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseEnter', appEvent);
    }

    /**
     * @param {Object} event
     */
    onMouseLeave(event) {
        let me       = this,
            appEvent = {...me.getMouseEventData(event), toElementId: event.toElement?.id || null};

        me.sendMessageToApp(appEvent);
        me.fire('mouseLeave', appEvent);
    }

    /**
     * @param {Object} event
     */
    onMouseUp(event) {
        this.sendMessageToApp(this.getMouseEventData(event));
    }

    /**
     * @param {Object} event
     */
    onWheel(event) {
        let target        = this.testPathInclusion(event, globalWheelTargets),
            preventUpdate = false,
            targetCls;

        if (target) {
            targetCls = target.cls;

            if (globalWheelTargetsBuffer[target.cls]) {
                let date = new Date();

                if (lastWheelEvent.date && lastWheelEvent.target === targetCls && date - lastWheelEvent.date < globalWheelTargetsBuffer[targetCls]) {
                    preventUpdate = true;
                } else {
                    Object.assign(lastWheelEvent, {
                        date,
                        target: targetCls
                    });
                }
            }

             if (!preventUpdate) {
                let {deltaX, deltaY, deltaZ} = event;

                this.sendMessageToApp({
                    ...this.getEventData(event),
                    clientHeight: target.node.clientHeight,
                    clientWidth : target.node.clientWidth,
                    deltaX,
                    deltaY,
                    deltaZ,
                    scrollLeft  : target.node.scrollLeft,
                    scrollTop   : target.node.scrollTop
                });
            }

            if (!globalWheelTargetsKeepEvent.includes(targetCls)) {
                event.preventDefault();
            }
        }
    }

    /**
     * Example for Array values: "categories[]=test1&categories[]=test2"
     * @param {String} str
     * @returns {Object}
     */
    parseHash(str) {
        if (str === '') {
            return {};
        }

        let pieces = str.split('&'),
            data   = {},
            i, key, parts, value;

        for (i = 0; i < pieces.length; i++) {
            parts = pieces[i].split('=');

            if (parts.length < 2) {
                parts.push('');
            }

            key   = decodeURIComponent(parts[0]);
            value = decodeURIComponent(parts[1]);

            if (key.indexOf('[]') !== -1) {
                key = key.substring(0, key.indexOf('[]'));

                if (typeof data[key] === 'undefined') {
                    data[key] = [];
                }

                data[key].push(this.parseValue(value));
            } else {
                data[key] = this.parseValue(value);
            }
        }

        return data;
    }

    /**
     * used by parseHash to convert tokens into boolean or number types if needed
     * @param {String} value
     * @returns {Boolean|Number|String}
     * @protected
     */
    parseValue(value) {
        if (value == parseInt(value)) {
            value = parseInt(value);
        } else if (value === 'false') {
            value = false;
        } else if (value === 'true') {
            value = true;
        }

        return value;
    }

    /**
     * @param {Object} data
     * @param {Array|String} data.cls
     * @param {String} data.name
     */
    registerPreventDefaultTargets(data) {
        let preventArray;

        if (!Array.isArray(data.cls)) {
            data.cls = [data.cls];
        }

        switch (data.name) {
            case 'click':
                preventArray = preventClickTargets;
                break;
            case 'contextmenu':
                preventArray = preventContextmenuTargets;
                break;
        }

        data.cls.forEach(cls => {
            !preventArray.includes(cls) && preventArray.push(cls);
        });
    }

    /**
     * Sends the parsed event data to the app worker
     * @param {Object} data
     * @protected
     */
    sendMessageToApp(data) {
        Neo.worker.Manager.sendMessage('app', {
            action   : 'domEvent',
            eventName: data.type,
            data
        });
    }

    /**
     * @param {Object} event
     * @param {Object} targetArray
     * @returns {Object|Boolean} target cls & node if found, false otherwise
     */
    testPathInclusion(event, targetArray) {
        let countTargets = targetArray.length,
            path         = event.path || event.composedPath(),
            i            = 0,
            len          = path.length,
            j, node;

        for (; i < len; i++) {
            node = path[i];

            for (j=0; j < countTargets; j++) {
                if (node.classList?.contains(targetArray[j])) {
                    return {
                        cls : targetArray[j],
                        node
                    };
                }
            }
        }

        return false;
    }
}

Neo.applyClassConfig(DomEvents);

let instance = Neo.create(DomEvents);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/mixin/DeltaUpdates.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeltaUpdates)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Logic to apply the deltas generated by vdom.Helper to the real DOM
 * @class Neo.main.mixin.DeltaUpdates
 * @extends Neo.core.Base
 * @singleton
 */
class DeltaUpdates extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.mixin.DeltaUpdates'
         * @protected
         */
        className: 'Neo.main.mixin.DeltaUpdates'
    }}

    /**
     * @param {Object} delta
     * @param {String} delta.id
     */
    du_focusNode(delta) {
        this.getElement(delta.id).focus();
    }

    /**
     * node.children contains the "real" nodes (tags)
     * node.childNodes contains texts & comments as nodes too
     * since every vtype:'text' is wrapped inside a comment block (as an id),
     * we need the amount of nodes which are not comments to get the "realIndex".
     * insertAdjacentHTML() is faster than creating a node (template), but only available
     * for children and not for childNodes.
     * In case there are no comments (=> vtype: 'text' nodes), we stick to it for performance reasons.
     *
     * @param {Object} delta
     * @param {String} delta.index
     * @param {String} delta.outerHTML
     * @param {String} delta.parentId
     */
    du_insertNode(delta) {
        let index         = delta.index,
            parentNode    = this.getElementOrBody(delta.parentId),
            countChildren = parentNode.childNodes.length,
            i             = 0,
            realIndex     = index,
            hasComments   = false,
            node;

        // console.log('insertNode', index, countChildren, delta.parentId);

        if (countChildren <= 20 && parentNode.nodeName !== 'TBODY') {
            for (; i < countChildren; i++) {
                if (parentNode.childNodes[i].nodeType === 8) { // ignore comments
                    if (i < realIndex) {
                        realIndex++;
                    }

                    hasComments = true;
                }
            }
        }

        if (!hasComments) {
            countChildren = parentNode.children.length;

            if (index > 0 && index >= countChildren) {
                parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
                return;
            }

            if (countChildren > 0 && countChildren > index) {
                parentNode.children[index].insertAdjacentHTML('beforebegin', delta.outerHTML);
            } else if (countChildren > 0) {
                parentNode.children[countChildren - 1].insertAdjacentHTML('afterend', delta.outerHTML);
            } else {
                parentNode.insertAdjacentHTML('beforeend', delta.outerHTML);
            }
        } else {
            node = this.htmlStringToElement(delta.outerHTML);

            if (countChildren > 0 && countChildren > realIndex) {
                parentNode.insertBefore(node, parentNode.childNodes[realIndex]);
            } else {
                parentNode.appendChild(node);
            }
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.index
     * @param {String} delta.parentId
     */
    du_moveNode(delta) {
        let index      = delta.index,
            node       = this.getElement(delta.id),
            parentNode = this.getElement(delta.parentId);

        if (index >= parentNode.children.length) {
            parentNode.appendChild(node);
        } else {
            //index++; // todo?: increase the index in case same parent, oldIndex < newIndex, direct swap
            if (node && parentNode.children[index].id !== delta.id) {
                parentNode.insertBefore(node, parentNode.children[index]);
            }
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     */
    du_removeNode(delta) {
        let node = this.getElement(delta.id),
            reg, startTag;

        if (!node) { // could be a vtype: text
            node = this.getElementOrBody(delta.parentId);

            if (node) {
                startTag  = `<!-- ${delta.id} -->`;
                reg       = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

                node.innerHTML = node.innerHTML.replace(reg, '');
            } else {
                // console.warn('du_removeNode: dom node not found for id', delta.id);
            }
        } else {
            node.parentNode.removeChild(node);
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.fromId
     * @param {String} delta.parentId
     * @param {String} delta.toId
     */
    du_replaceChild(delta) {
        let me   = this,
            node = me.getElement(delta.parentId);

        node.replaceChild(me.getElement(delta.toId), me.getElement(delta.fromId));
    }

    /**
     * @param {Object} delta
     * @param {String} [delta.id]
     * @param {String} [delta.value
     */
    du_setTextContent(delta) {
        let me   = this,
            node = me.getElement(delta.id);

        node.textContent = delta.value;
    }

    /**
     * @param {Object} delta
     * @param {Object} [delta.attributes]
     * @param {String} [delta.cls]
     * @param {String} [delta.id]
     * @param {String} [delta.innerHTML]
     * @param {String} [delta.outerHTML]
     * @param {Object} [delta.style]
     */
    du_updateNode(delta) {
        let node = this.getElementOrBody(delta.id);

        if (!node) {
            console.warn('du_updateNode: node not found for id', delta.id);
        } else {
            Object.entries(delta).forEach(([prop, value]) => {
                switch(prop) {
                    case 'attributes':
                        Object.entries(value).forEach(([key, val]) => {
                            if (this.voidAttributes.includes(key)) {
                                node[key] = val === 'true'; // vnode attribute values get converted into strings
                            } else if (val === null || val === '') {
                                if (key === 'value') {
                                    node[key] = ''; // input fields => pseudo attribute can not be removed
                                } else {
                                    node.removeAttribute(key);
                                }
                            } else if (key === 'id') {
                                node[Neo.config.useDomIds ? 'id' : 'data-neo-id'] = val;
                            }else if (key === 'spellcheck' && val === 'false') {
                                // see https://github.com/neomjs/neo/issues/1922
                                node[key] = false;
                            } else {
                                node[key] = val;
                            }
                        });
                        break;
                    case 'cls':
                        node.classList.add(...value.add || []);
                        node.classList.remove(...value.remove || []);
                        break;
                    case 'innerHTML':
                        node.innerHTML = value || '';
                        break;
                    case 'outerHTML':
                        node.outerHTML = value || '';
                        break;
                    case 'style':
                        if (Neo.isObject(value)) {
                            Object.entries(value).forEach(([key, val]) => {
                                if (Neo.isString(val) && val.includes('!important')) {
                                    val = val.replace('!important', '').trim();
                                    node.style.setProperty(Neo.decamel(key), val, 'important');
                                } else {
                                    node.style[Neo.decamel(key)] = val;
                                }
                            });
                        }
                        break;
                }
            });
        }
    }

    /**
     * @param {Object} delta
     * @param {String} delta.id
     * @param {String} delta.parentId
     * @param {String} delta.value
     */
    du_updateVtext(delta) {
        let me        = this,
            node      = me.getElement(delta.parentId),
            innerHTML = node.innerHTML,
            startTag  = `<!-- ${delta.id} -->`,
            reg       = new RegExp(startTag + '[\\s\\S]*?<!-- \/neo-vtext -->');

        node.innerHTML = innerHTML.replace(reg, delta.value);
    }

    /**
     * @param {String} html representing a single element
     * @returns {ChildNode}
     */
    htmlStringToElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content;
    }

    /**
     * @param {Object} data
     * @param {Object|Object[]} data.deltas
     * @param {String} data.id
     * @param {String} [data.origin='app']
     */
    update(data) {
        let me     = this,
            deltas = data.deltas,
            i      = 0,
            len;

        deltas = Array.isArray(deltas) ? deltas : [deltas];
        len    = deltas.length;

        if (Neo.config.logDeltaUpdates && len > 0) {
            me.countDeltas += len;
            me.countUpdates++;
            console.log('update ' + me.countUpdates, 'total deltas ', me.countDeltas, Neo.clone(data, true));
        }

        if (Neo.config.renderCountDeltas && len > 0) {
            me.countDeltasPer250ms += len;
        }

        const map = {
            focusNode     : me.du_focusNode,
            insertNode    : me.du_insertNode,
            moveNode      : me.du_moveNode,
            removeNode    : me.du_removeNode,
            replaceChild  : me.du_replaceChild,
            setTextContent: me.du_setTextContent,
            updateVtext   : me.du_updateVtext,
            default       : me.du_updateNode
        };

        for (; i < len; i++) {
            (map[deltas[i].action] || map['default']).call(me, deltas[i]);
        }

        Neo.worker.Manager.sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }
}

Neo.applyClassConfig(DeltaUpdates);




/***/ }),

/***/ "./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/main/mixin/TouchDomEvents.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TouchDomEvents)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Will get imported in case Neo.config.useTouchEvents === true
 * @class Neo.main.mixin.TouchDomEvents
 * @extends Neo.core.Base
 * @singleton
 */
class TouchDomEvents extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.main.mixin.TouchDomEvents'
         * @protected
         */
        className: 'Neo.main.mixin.TouchDomEvents'
    }}

    /**
     * @param {Object} event
     */
    onTouchCancel(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     * @param {Object} event
     */
    onTouchEnd(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     * @param {Object} event
     */
    onTouchEnter(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     * @param {Object} event
     */
    onTouchLeave(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     * @param {Object} event
     */
    onTouchMove(event) {
        this.sendMessageToApp(this.getEventData(event));
    }

    /**
     * @param {Object} event
     */
    onTouchStart(event) {
        console.log('onTouchStart', event);
        this.sendMessageToApp(this.getEventData(event));
    }
}

Neo.applyClassConfig(TouchDomEvents);




/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Manager.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Manager.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixin/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs");







const NeoConfig = Neo.config,
      devMode   = NeoConfig.environment === 'development';

/**
 * The worker manager lives inside the main thread and creates the App, Data & VDom worker.
 * Also responsible for sending messages from the main thread to the different workers.
 * @class Neo.worker.Manager
 * @extends Neo.core.Base
 * @singleton
 */
class Manager extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Manager'
         * @protected
         */
        className: 'Neo.worker.Manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} activeWorkers=0
         * @protected
         */
        activeWorkers: 0,
        /**
         * @member {String[]} appNames=[]
         * @protected
         */
        appNames: [],
        /**
         * The base path for the worker file URLs, can e.g. get set inside the index.html.
         * @member {String|null} basePath=Neo.config.workerBasePath || 'worker/'
         * @protected
         */
        basePath: NeoConfig.workerBasePath || 'worker/',
        /**
         * @member {Number} constructedThreads=0
         * @protected
         */
        constructedThreads: 0,
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], _mixin_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]],
        /**
         * True in case the current browser supports window.SharedWorker.
         * @member {Boolean} sharedWorkersEnabled=false
         * @protected
         */
        sharedWorkersEnabled: false,
        /**
         * Internal flag to stop the worker communication in case their creation fails
         * @member {Boolean} stopCommunication=false
         * @protected
         */
        stopCommunication: false,
        /**
         * True in case the current browser supports window.Worker.
         * The neo.mjs framework is not able to run without web workers.
         * @member {Boolean} sharedWorkersEnabled=false
         * @protected
         */
        webWorkersEnabled: false,
        /**
         * Contains the fileNames for the App, Data & Vdom workers
         * @member {Object} workers
         * @protected
         */
        workers: {
            app: {
                fileName: devMode ? 'App.mjs'    : 'appworker.js'
            },
            canvas: {
                fileName: devMode ? 'Canvas.mjs' : 'canvasworker.js'
            },
            data: {
                fileName: devMode ? 'Data.mjs'   : 'dataworker.js'
            },
            vdom: {
                fileName: devMode ? 'VDom.mjs'   : 'vdomworker.js'
            }
        }
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.detectFeatures();

        !Neo.insideWorker && me.createWorkers();

        Neo.workerId = 'main';

        me.promises = {};

        me.on({
            'message:addDomListener'    : {fn: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].addDomListener,       scope: _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]},
            'message:getOffscreenCanvas': {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onGetOffscreenCanvas, scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:readDom'           : {fn: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].onReadDom,            scope: _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]},
            'message:registerRemote'    : {fn: me.onRegisterRemote,            scope: me},
            'message:workerConstructed' : {fn: me.onWorkerConstructed,         scope: me}
        });
    }

    /**
     * Sends a message to each worker defined inside the this.workers config.
     * @param {String} msg
     */
    broadcast(msg) {
        Object.keys(this.workers).forEach(name => {
            if (!(
                name === 'canvas' && !NeoConfig.useCanvasWorker ||
                name === 'vdom'   && !NeoConfig.useVdomWorker
            )) {
                this.sendMessage(name, msg);
            }
        });
    }

    /**
     * Creates a web worker using the passed options as well as adding error & message event listeners.
     * @param {Object} opts
     * @returns {SharedWorker|Worker}
     */
    createWorker(opts) {
        let me       = this,
            fileName = opts.fileName,
            filePath = (opts.basePath || me.basePath) + fileName,
            name     = `neomjs-${fileName.substring(0, fileName.indexOf('.')).toLowerCase()}-worker`,
            isShared = me.sharedWorkersEnabled && NeoConfig.useSharedWorkers,
            cls      = isShared ? SharedWorker : Worker,
            worker   = devMode  // todo: switch to the new syntax to create a worker from a JS module once browsers are ready
                ? new cls(filePath, {name: name, type: 'module'})
                : new cls(filePath, {name: name});

        (isShared ? worker.port : worker).onmessage = me.onWorkerMessage.bind(me);
        (isShared ? worker.port : worker).onerror   = me.onWorkerError  .bind(me);

        me.activeWorkers++;

        return worker;
    }

    /**
     * Calls createWorker for each worker inside the this.workers config.
     */
    createWorkers() {
        let me   = this,
            hash = location.hash,
            key, value;

        // pass the initial hash value as Neo.configs
        if (hash) {
            NeoConfig.hash = {
                hash      : _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].parseHash(hash.substr(1)),
                hashString: hash.substr(1)
            };
        }

        for ([key, value] of Object.entries(me.workers)) {
            if (key === 'canvas' && !NeoConfig.useCanvasWorker ||
                key === 'vdom'   && !NeoConfig.useVdomWorker
            ) {
                continue;
            }

            try {
                value.worker = me.createWorker(value);
            } catch (e) {
                document.body.innerHTML = e;
                me.stopCommunication = true;
                break;
            }

            me.sendMessage(key, {
                action: 'registerNeoConfig',
                data  : NeoConfig
            });
        }
    }

    /**
     *
     */
    detectFeatures() {
        let me = this;

        NeoConfig.hasTouchEvents = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

        if (window.Worker) {
            me.webWorkersEnabled = true;
        } else {
            throw new Error('Your browser does not support Web Workers');
        }

        if (window.SharedWorker) {
            me.sharedWorkersEnabled = true;
        }
    }

    /**
     * @param {String|Worker} name
     * @returns {Worker}
     */
    getWorker(name) {
        return name instanceof Worker ? name : this.workers[name].worker;
    }

    /**
     * @param {String} path
     */
    loadApplication(path) {
        this.sendMessage('app', {
            action       : 'loadApplication',
            path,
            resourcesPath: NeoConfig.resourcesPath
        });
    }

    /**
     * @param {Object} data
     */
    onWorkerConstructed(data) {
        let me = this;

        me.constructedThreads++;

        if (me.constructedThreads === me.activeWorkers) {
            NeoConfig.appPath && setTimeout(() => { // better save than sorry => all remotes need to be registered
                me.loadApplication(NeoConfig.appPath);
            }, 20);
        }
    }

    /**
     * Handler method for worker error events
     * @param {Object} e
     */
    onWorkerError(e) {
        // starting a worker from a JS module will show JS errors in a correct way
        !devMode && console.log('Worker Error:', e);
    }

    /**
     * Handler method for worker message events
     * @param {Object} e
     */
    onWorkerMessage(e) {
        let me           = this,
            data         = e.data,
            delayPromise = false,
            transfer     = null,
            promise;

        const {action, destination: dest, replyId} = data;

        // console.log('Main: Incoming Worker message: ' + data.origin + ':' + action, data);

        me.fire('message:'+action, data);

        if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.destination === 'main') {
                data = data.data;
            }

            if (data.reject) {
                promise.reject(data);
            } else {
                if (data.data) {
                    if (data.data.autoMount) {
                        me.fire('automount', data);
                        delayPromise = true;
                    }
                    if (data.data.updateVdom) {
                        me.fire('updateVdom', data);
                        delayPromise = true;
                    }
                }

                if (!delayPromise) {
                    promise.resolve(data);
                } else {
                    me.promises[replyId].data = data;
                }
            }

            if (!delayPromise) {
                delete me.promises[replyId];
            }
        }

        if (dest !== 'main' && action !== 'reply') {
            if (data.transfer) {
                transfer = [data.transfer];
            }

            me.promiseMessage(dest, data, transfer).then(response => {
                me.sendMessage(response.destination, response);
            }).catch(err => {
                me.sendMessage(data.origin, {
                    action : 'reply',
                    reject : true,
                    replyId: data.id,
                    error  : err.message
                });
            });
        }

        // only needed for SharedWorkers
        else if (dest === 'main' && action === 'registerAppName') {
            me.appNames.push(data.appName);
        }

        else if (dest === 'main' && action === 'remoteMethod') {
            me.onRemoteMethod(data);
        }
    }

    /**
     * @param {String} dest app, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise((resolve, reject) => {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                reject,
                resolve
            };
        });
    }

    /**
     * @param {String} replyId
     */
    resolveDomOperationPromise(replyId) {
        if (replyId) {
            let promise = this.promises[replyId];

            if (promise) {
                promise.resolve(promise.data);
                delete this.promises[replyId];
            }
        }
    }

    /**
     * @param {String} dest app, data or vdom
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @protected
     */
    sendMessage(dest, opts, transfer) {
        let me = this,
            message, worker;

        if (!me.stopCommunication) {
            worker = me.getWorker(dest);

            if (!worker) {
                throw new Error('Called sendMessage for a worker that does not exist: ' + dest);
            }

            opts.destination = dest;

            message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_3__["default"](opts);

            (me.sharedWorkersEnabled && NeoConfig.useSharedWorkers ? worker.port : worker).postMessage(message, transfer);
            return message;
        }
    }
}

Neo.applyClassConfig(Manager);

let instance = Neo.create(Manager);

Neo.applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;




/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixin/RemoteMethodAccess.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RemoteMethodAccess)
/* harmony export */ });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixin.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixin.RemoteMethodAccess'
         * @protected
         */
        className: 'Neo.worker.mixin.RemoteMethodAccess',
        /**
         * @member {Boolean} mixin=true
         * @protected
         */
        mixin: true
    }}

    /**
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };

            if (me.isSharedWorker) {
                opts.appName = opts.appName || data?.appName;
                opts.port    = opts.port    || data?.port;
            }

            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                exists    = false,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (remote.origin !== 'main' && pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                if (!pkg[method] ) {
                    pkg[method] = me.generateRemote(remote, method);
                } else {
                    exists = true;
                }
            });

            // todo: inspect if this can get removed
            if (!exists && Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(data => {
                me.resolve(msg, data);
            })
            .catch(err => {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        let opts = {
            action : 'reply',
            data,
            reject : true,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        let opts = {
            action : 'reply',
            data,
            replyId: msg.id
        };

        if (this.isSharedWorker) {
            opts.appName = msg.appName;
            opts.port    = msg.port;
        }

        this.sendMessage(msg.origin, opts);
    }
}

Neo.applyClassConfig(RemoteMethodAccess);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunks/main/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "neo.mjs-realworld-example-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./node_modules/neo.mjs/src/Main.mjs ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/DomAccess.mjs */ "./node_modules/neo.mjs/src/main/DomAccess.mjs");
/* harmony import */ var _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/DomEvents.mjs */ "./node_modules/neo.mjs/src/main/DomEvents.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worker/Manager.mjs */ "./node_modules/neo.mjs/src/worker/Manager.mjs");







/**
 * @class Neo.Main
 * @extends Neo.core.Base
 * @singleton
 */
class Main extends _core_export_mjs__WEBPACK_IMPORTED_MODULE_1__.Base {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.Main'
         * @protected
         */
        className: 'Neo.Main',
        /**
         * @member {String} mode='read'
         * @protected
         */
        mode: 'read',
        /**
         * @member {Object} openWindows={}
         * @protected
         */
        openWindows: {},
        /**
         * @member {Array} readQueue=[]
         * @protected
         */
        readQueue: [],
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: [//...]}
         * @protected
         */
        remote: {
            app: [
                'alert',
                'editRoute',
                'getWindowData',
                'setNeoConfig',
                'setRoute',
                'windowClose',
                'windowMoveTo',
                'windowOpen',
                'windowResizeTo'
            ]
        },
        /**
         * @member {Boolean} running=false
         * @protected
         */
        running: false,
        /**
         * @member {Boolean} showFps=false
         */
        showFps: false,
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * @member {Number} timeLimit=15
         */
        timeLimit: 15,
        /**
         * should be dev only
         * @member {Number} totalFrameCount=0
         * @protected
         */
        totalFrameCount: 0,
        /**
         * @member {Array} updateQueue=[]
         * @protected
         */
        updateQueue: [],
        /**
         * @member {Array} writeQueue=[]
         * @protected
         */
        writeQueue: []
    }}

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].on({
            'automount'        : me.onRender,
            'message:mountDom' : me.onMountDom,
            'message:updateDom': me.onUpdateDom,
            'updateVdom'       : me.onUpdateVdom,
            scope              : me
        });

        _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].on('domContentLoaded', me.onDomContentLoaded, me);

        if (document.readyState !== 'loading') {
            _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].onDomContentLoaded();
        }
    }

    /**
     * Workers can not trigger alert(), so we need remote method access.
     * @param {String} value
     */
    alert(value) {
        alert(value);
    }

    /**
     * Edit the location.hash value
     * A value of null will remove the given key.
     * @param {Object} data
     */
    editRoute(data) {
        let hashObj = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parseHash(window.location.hash.substr(1)),
            hashArr = [];

        if (typeof data === 'string') {
            data = _main_DomEvents_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].parseHash(data);
        }

        Object.assign(hashObj, data);

        Object.entries(hashObj).forEach(([key, value]) => {
            if (value !== null) {
                hashArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
            }
        });

        window.location.hash = hashArr.join('&');
    }

    /**
     * window.screen is not spreadable
     * @returns {Object}
     */
    getWindowData() {
        const win    = window,
              screen = win.screen;

        return {
            innerHeight: win.innerHeight,
            innerWidth : win.innerWidth,
            outerHeight: win.outerHeight,
            outerWidth : win.outerWidth,
            screen: {
                availHeight: screen.availHeight,
                availLeft  : screen.availLeft,
                availTop   : screen.availTop,
                availWidth : screen.availWidth,
                colorDepth : screen.colorDepth,
                height     : screen.height,
                orientation: {angle: screen.orientation.angle, type: screen.orientation.type},
                pixelDepth : screen.pixelDepth,
                width      : screen.width
            },
            screenLeft: win.screenLeft,
            screenTop : win.screenTop,
        };
    }

    // todo: https://developer.mozilla.org/en-US/docs/Web/Events/resize
    globalResizeListener(event) {
        console.log('globalResizeListener', event);
    }

    /**
     *
     */
    async onDomContentLoaded() {
        let me      = this,
            config  = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config,
            imports = [];

        _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].onDomContentLoaded();

        // not in use right now
        // window.addEventListener('resize', me.globalResizeListener.bind(me));

        // we need different publicPath values for the main thread inside the webpack based dist envs,
        // depending on the hierarchy level of the app entry point
        if (config.environment !== 'development') {
            __webpack_require__.p = config.basePath.substring(6);
        }

        config.mainThreadAddons.forEach(addon => {
            if (addon !== 'AnalyticsByGoogle') {
                imports.push(__webpack_require__("./node_modules/neo.mjs/src/main/addon lazy recursive ^\\.\\/.*\\.mjs$")(`./${addon}.mjs`));
            }
        });

        // intended for the online examples where we need an easy way to add GA to every generated app
        if (config.useGoogleAnalytics || config.mainThreadAddons.includes('AnalyticsByGoogle')) {
            imports.push(__webpack_require__.e(/*! import() */ "node_modules_neo_mjs_src_main_addon_AnalyticsByGoogle_mjs").then(__webpack_require__.bind(__webpack_require__, /*! ./main/addon/AnalyticsByGoogle.mjs */ "./node_modules/neo.mjs/src/main/addon/AnalyticsByGoogle.mjs")));
        }

        const modules = await Promise.all(imports);

        me.addon = {};

        modules.forEach(module => {
            me.addon[module.default.constructor.name] = module.default;
        });

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].onWorkerConstructed({
            origin: 'main'
        });
    }

    /**
     * @param data
     */
    onMountDom(data) {
        this.queueWrite(data);

        _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].sendMessage(data.origin || 'app', {
            action : 'reply',
            replyId: data.id,
            success: true
        });
    }

    /**
     * @param data
     */
    onRender(data) {
        data.data.replyId = data.replyId;
        this.queueWrite(data.data);
    }

    /**
     * @param data
     */
    onUpdateDom(data) {
        this.queueUpdate(data);
    }

    /**
     * @param data
     */
    onUpdateVdom(data) {
        data.data.replyId = data.replyId;
        this.queueUpdate(data.data);
    }

    /**
     * @param {Object[]} queue
     * @param {Date} start
     * @returns {Number}
     * @protected
     */
    processQueue(queue, start) {
        let me    = this,
            limit = me.timeLimit,
            operation;

        while (operation = queue.shift()) {
            if (new Date() - start > limit) {
                queue.unshift(operation);
                return requestAnimationFrame(me.renderFrame.bind(me));
            } else {
                _main_DomAccess_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][me.mode](operation);
                _worker_Manager_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].resolveDomOperationPromise(operation.replyId);
            }
        }
    }

    /**
     * @param {Object} data
     * @protected
     */
    queueRead(data) {
        let me = this;
        me.readQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     * @param {Object} data
     * @protected
     */
    queueUpdate(data) {
        let me = this;
        me.updateQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     * @param data
     * @protected
     */
    queueWrite(data) {
        let me = this;
        me.writeQueue.push(data);

        if (!me.running) {
            me.running = true;
            requestAnimationFrame(me.renderFrame.bind(me));
        }
    }

    /**
     * Triggers the different DOM operation queues
     * @protected
     */
    renderFrame() {
        let me      = this,
            read    = me.readQueue,
            update  = me.updateQueue,
            write   = me.writeQueue,
            reading = me.mode === 'read',
            start   = new Date();

        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.logDeltaUpdates) {
            me.totalFrameCount++;
            console.log('Total Frames: ' + me.totalFrameCount);
        }

        if (reading || !write.length) {
            me.mode = 'read';
            if (me.processQueue(read, start)) {
                return;
            }
        }

        if (update.length) {
            me.mode = 'update';
            if (me.processQueue(update, start)) {
                return;
            }
        }

        if (write.length) {
            me.mode = 'write';
            if (me.processQueue(write, start)) {
                return;
            }
        }

        me.running = false;
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.key
     * @param {*} data.value
     */
    setNeoConfig(data) {
        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config[data.key] = data.value;
    }

    /**
     * Change the location.hash value
     * @param {Object} data
     * @param {String} data.value
     */
    setRoute(data) {
        window.location.hash = data.value;
    }

    /**
     * Closes popup windows
     * @param {Object} data
     * @param {Array|String} data.names
     */
    windowClose(data) {
        if (!Array.isArray(data.names)) {
            data.names = [data.names];
        }

        data.names.forEach(name => {
            this.openWindows[name].close();
            delete this.openWindows[name];
        })
    }

    /**
     * Move a popup window
     * @param {Object} data
     * @param {String} data.windowName
     * @param {String} data.x
     * @param {String} data.y
     */
    windowMoveTo(data) {
        this.openWindows[data.windowName].moveTo(data.x, data.y);
    }

    /**
     * Open a new popup window
     * @param {Object} data
     * @param {String} data.url
     * @param {String} data.windowFeatures
     * @param {String} data.windowName
     */
    windowOpen(data) {
        this.openWindows[data.windowName] = window.open(data.url, data.windowName, data.windowFeatures);
    }

    /**
     * Move a popup window
     * @param {Object} data
     * @param {Number} [data.height]
     * @param {Number} [data.width]
     * @param {String} data.windowName
     */
    windowResizeTo(data) {
        let win    = this.openWindows[data.windowName],
            height = data.height || win.outerHeight,
            width  = data.width  || win.outerWidth;

        win.resizeTo(width, height);
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(Main);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(Main);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0IsMkRBQVM7QUFDekIsZ0JBQWdCLHNGQUF3QztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSx1RUFBMEI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxHQUFHO0FBQ2xCO0FBQ0E7QUFDQSxRQUFRLHVEQUFVO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFvQjs7QUFFcEIsZUFBZSx1REFBVTs7QUFFekIsZ0VBQW1COztBQUVuQixpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9ufGxhenl8L15cXC5cXC8uKlxcLm1qcyQvfGdyb3VwT3B0aW9uczoge318c3RyaWN0IG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvRGVmYXVsdENvbmZpZy5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvTmVvLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0Jhc2UubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvQ29tcGFyZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9JZEdlbmVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9PYnNlcnZhYmxlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvX2V4cG9ydC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9Eb21BY2Nlc3MubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vRG9tRXZlbnRzLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL21peGluL0RlbHRhVXBkYXRlcy5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9taXhpbi9Ub3VjaERvbUV2ZW50cy5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL01hbmFnZXIubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9NZXNzYWdlLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvbWl4aW4vUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9NYWluLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vQW1DaGFydHMubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vQW1DaGFydHMubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9BbUNoYXJ0c19tanNcIlxuXHRdLFxuXHRcIi4vQW5hbHl0aWNzQnlHb29nbGUubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vQW5hbHl0aWNzQnlHb29nbGUubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9BbmFseXRpY3NCeUdvb2dsZV9tanNcIlxuXHRdLFxuXHRcIi4vQ2xvbmVOb2RlLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0Nsb25lTm9kZS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0Nsb25lTm9kZV9tanNcIlxuXHRdLFxuXHRcIi4vQ29va2llLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL0Nvb2tpZS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0Nvb2tpZV9tanNcIlxuXHRdLFxuXHRcIi4vRHJhZ0Ryb3AubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vRHJhZ0Ryb3AubWpzXCIsXG5cdFx0XCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX0RyYWdEcm9wX21qc1wiXG5cdF0sXG5cdFwiLi9IaWdobGlnaHRKUy5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9IaWdobGlnaHRKUy5tanNcIixcblx0XHRcInZlbmRvcnMtbm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fSGlnaGxpZ2h0SlNfbWpzXCJcblx0XSxcblx0XCIuL0xvY2FsU3RvcmFnZS5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9Mb2NhbFN0b3JhZ2UubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9Mb2NhbFN0b3JhZ2VfbWpzXCJcblx0XSxcblx0XCIuL01hcGJveEdMLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL01hcGJveEdMLm1qc1wiLFxuXHRcdFwidmVuZG9ycy1ub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9NYXBib3hHTF9tanNcIlxuXHRdLFxuXHRcIi4vTWFya2Rvd24ubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vTWFya2Rvd24ubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9NYXJrZG93bl9tanNcIlxuXHRdLFxuXHRcIi4vTXdjLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL013Yy5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX013Y19tanNcIlxuXHRdLFxuXHRcIi4vU2llc3RhLm1qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uL1NpZXN0YS5tanNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19uZW9fbWpzX3NyY19tYWluX2FkZG9uX1NpZXN0YV9tanNcIlxuXHRdLFxuXHRcIi4vU3R5bGVzaGVldC5tanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFpbi9hZGRvbi9TdHlsZXNoZWV0Lm1qc1wiLFxuXHRcdFwibm9kZV9tb2R1bGVzX25lb19tanNfc3JjX21haW5fYWRkb25fU3R5bGVzaGVldF9tanNcIlxuXHRdLFxuXHRcIi4vV2luZG93UG9zaXRpb24ubWpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21haW4vYWRkb24vV2luZG93UG9zaXRpb24ubWpzXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfbmVvX21qc19zcmNfbWFpbl9hZGRvbl9XaW5kb3dQb3NpdGlvbl9tanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYWluL2FkZG9uIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLm1qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJjb25zdCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbi8qKlxuICogQ29uZmlnIG9iamVjdCBmb3IgdGhlIG5lby5tanMgZnJhbWV3b3JrIHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCB0byBhbGwgd29ya2Vyc1xuICogWW91IGNhbiBjaGFuZ2UgdGhlIGNvbmZpZ3MsIGUuZy4gaW5zaWRlIHRoZSBpbmRleC5odG1sIG9mIHlvdXIgYXBwXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICogQG5hbWUgY29uZmlnXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuY29uc3QgRGVmYXVsdENvbmZpZyA9IHtcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB5b3VyIGFwcC5tanMgZmlsZS4gWW91IGNhbiBjcmVhdGUgbXVsdGlwbGUgYXBwcyB0aGVyZSBpZiBuZWVkZWQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBhcHBQYXRoOiBudWxsLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgZGlyZWN0b3J5XG4gICAgICogQGRlZmF1bHQgJy4vJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5iYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGJhc2VQYXRoOiAnLi8nLFxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdkaXN0L2RldmVsb3BtZW50JywgJ2Rpc3QvcHJvZHVjdGlvbidcbiAgICAgKiBUaGlzIGNvbmZpZyB3aWxsIGdldCBhdXRvLWdlbmVyYXRlZFxuICAgICAqIEBkZWZhdWx0ICdkaXN0L3Byb2R1Y3Rpb24nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZW52aXJvbm1lbnQ6ICdkaXN0L3Byb2R1Y3Rpb24nLFxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgeW91IGFyZSB1c2luZyB0aGUgR29vZ2xlQW5hbHl0aWNzIG1haW5UaHJlYWRBZGRvbiBvciB1c2VHb29nbGVBbmFseXRpY3M6IHRydWUsXG4gICAgICogeW91IGNhbiBjaGFuZ2UgdGhlIGd0YWcgaWQgaGVyZS4gUmVxdWlyZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgKGdoIHBhZ2VzKVxuICAgICAqIEBkZWZhdWx0ICdVQS0xNTM3MzQ0MDQtMSdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZ3RhZ0lkXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgZ3RhZ0lkOiAnVUEtMTUzNzM0NDA0LTEnLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgb24gaHR0cHM6Ly9uZW9tanMuZ2l0aHViLmlvL3BhZ2VzL1xuICAgICAqID0+IHRvIHVzZSBsb2NhbCBpbWFnZXMgcGF0aHMgaW5zdGVhZCBvZiByYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNHaXRIdWJQYWdlc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0dpdEh1YlBhZ2VzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBydW5uaW5nIHRoZSBOZW8gbWFpbiB0aHJlYWQgaW5zaWRlIGFuIGlmcmFtZSAoU2llc3RhIEJyb3dzZXIgSGFybmVzcylcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0luc2lkZVNpZXN0YVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0luc2lkZVNpZXN0YTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogVXNlZCBieSBJbnRsLkRhdGVUaW1lRm9ybWF0LCBmb3IgZGV0YWlscyB0YWtlIGEgbG9vayBhdDpcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgICAqIEBkZWZhdWx0ICdkZWZhdWx0J1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2NhbGVcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBsb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgbG9nIHRoZSBkZWx0YSB1cGRhdGVzIGluc2lkZSB0aGUgbWFpbiB0aHJlYWQocykgYXMgd2VsbCBhcyB0aGUgcmVxdWVzdEFuaW1hdGlvbiBmcmFtZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5sb2dEZWx0YVVwZGF0ZXNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgbG9nRGVsdGFVcGRhdGVzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBBZGQgYWRkb25zIGZvciB0aGUgbWFpbiB0aHJlYWRcbiAgICAgKiBQb3NzaWJsZSB2YWx1ZXM6IEFtQ2hhcnRzLCBBbmFseXRpY3NCeUdvb2dsZSwgRHJhZ0Ryb3AsIEhpZ2hsaWdodEpTLCBMb2NhbFN0b3JhZ2UsIE1hcGJveEdMLCBNYXJrZG93biwgU2llc3RhLCBTdHlsZXNoZWV0LCBXaW5kb3dQb3NpdGlvblxuICAgICAqIChzcmMvbWFpbi9hZGRvbilcbiAgICAgKiBAZGVmYXVsdCBbJ0RyYWdEcm9wJywnU3R5bGVzaGVldCddXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLm1haW5UaHJlYWRBZGRvbnNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIG1haW5UaHJlYWRBZGRvbnM6IFsnRHJhZ0Ryb3AnLCAnU3R5bGVzaGVldCddLFxuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gdmlzdWFsbHkgc2hvdyB0aGUgYW1vdW50IG9mIGRlbHRhIHVwZGF0ZXMgcGVyIHNlY29uZCB1c2luZyB0aGlzIGNvbmZpZy5cbiAgICAgKiBJdCBleHBlY3RzIGEgZG9tIG5vZGUgd2l0aCB0aGUgaWQgXCJuZW8tZGVsdGEtdXBkYXRlc1wiIGFzIHRoZSByZW5kZXJpbmcgdGFyZ2V0LlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnJlbmRlckNvdW50RGVsdGFzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHJlbmRlckNvdW50RGVsdGFzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlbWVzIHlvdSB3YW50IHRvIHVzZSBoZXJlLiBUaGUgZmlyc3QgdGhlbWUgd2lsbCBnZXQgYXBwbGllZC5cbiAgICAgKiBJZiBjb25maWcudXNlQ3NzVmFycyA9PT0gdHJ1ZSwgb3RoZXIgdGhlbWUgdmFyaWFibGVzIHdpbGwgZ2V0IGluY2x1ZGVkIGFzIHdlbGxcbiAgICAgKiBAZGVmYXVsdCBbJ25lby10aGVtZS1saWdodCcsICduZW8tdGhlbWUtZGFyayddXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnRoZW1lc1xuICAgICAqIEB0eXBlIFN0cmluZ1tdXG4gICAgICovXG4gICAgdGhlbWVzOiBbJ25lby10aGVtZS1saWdodCcsICduZW8tdGhlbWUtZGFyayddLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHN0YW5kYWxvbmUgU2llc3RhIG1vZHVsZSB0ZXN0cyA9PiBwcmV2ZW50IHJlZ2lzdGVyUmVtb3RlIHdvcmtlciBtZXNzYWdlc1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVuaXRUZXN0TW9kZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1bml0VGVzdE1vZGU6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgQ1NTIHZhcmlhYmxlIGJhc2VkIHN0eWxlc2hlZXRzIGFyZSBpbiB1c2UgKGltcG9ydGFudCBmb3Igc3dpdGNoaW5nIHRoZW1lcylcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUNzc1ZhcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQ3NzVmFyczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBFeHBlcmltZW50YWwgZmxhZyBpZiBhbiBvZmZzY3JlZW4gY2FudmFzIHdvcmtlciBzaG91bGQgZ2V0IGNyZWF0ZWQuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlQ3NzVmFyc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VDYW52YXNXb3JrZXI6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgdmRvbSBpZHMgc2hvdWxkIGdldCBtYXBwZWQgaW50byBET00gZWxlbWVudCBpZHMuXG4gICAgICogZmFsc2Ugd2lsbCBjb252ZXJ0IHRoZW0gaW50byBhIFwiZGF0YS1uZW8taWRcIiBhdHRyaWJ1dGUuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VEb21JZHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRG9tSWRzOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIFRydWUgd2lsbCBhdXRvbWF0aWNhbGx5IGluY2x1ZGUgdGhlIHN0eWxlc2hlZXRcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZUZvbnRBd2Vzb21lXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUZvbnRBd2Vzb21lOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEludGVuZGVkIGZvciB0aGUgb25saW5lIGV4YW1wbGVzIHdoZXJlIHdlIG5lZWQgYW4gZWFzeSB3YXkgdG8gYWRkIEdBIHRvIGV2ZXJ5IGdlbmVyYXRlZCBhcHBcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3NcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlR29vZ2xlQW5hbHl0aWNzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIEFwcCwgRGF0YSAmIFZEb20gYXMgU2hhcmVkV29ya2Vycy5cbiAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNvbm5lY3QgbXVsdGlwbGUgbWFpbiB0aHJlYWRzLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZVNoYXJlZFdvcmtlcnNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlU2hhcmVkV29ya2VyczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQWRkcyBnbG9iYWwgZG9tIGV2ZW50IGxpc3RlbmVycyBmb3IgbW9iaWxlIHJlbGF0ZWQgZXZlbnRzIGxpa2Ugcm90YXRlLCBzd2lwZSwgdGFwXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VUb3VjaEV2ZW50c1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VUb3VjaEV2ZW50czogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBGYWxzZSB3aWxsIGNyZWF0ZSB0aGUgdmRvbS5IZWxwZXIgd2l0aGluIHRoZSBBcHAgd29ya2VyIChleHBlcmltZW50YWwhKVxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlVmRvbVdvcmtlclxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICB1c2VWZG9tV29ya2VyOiB0cnVlXG59O1xuXG5PYmplY3QuYXNzaWduKERlZmF1bHRDb25maWcsIHtcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHRoZSB0b3AgbGV2ZWwgbmVvLm1qcyByZXNvdXJjZXMgZm9sZGVyXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdyZXNvdXJjZXMvJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5yZXNvdXJjZXNQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgcmVzb3VyY2VzUGF0aDogYCR7TmVvLmNvbmZpZy5iYXNlUGF0aCB8fCBEZWZhdWx0Q29uZmlnLmJhc2VQYXRofXJlc291cmNlcy9gLFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJhc2UgVVJMIGZvciB3ZWIgd29ya2VyIGVudHJ5IHBvaW50cyAoQXBwLCBEYXRhLCBWZG9tKVxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLndvcmtlckJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgd29ya2VyQmFzZVBhdGg6IGAke05lby5jb25maWcuYmFzZVBhdGggfHwgRGVmYXVsdENvbmZpZy5iYXNlUGF0aH1zcmMvd29ya2VyL2AsXG59KTtcblxuZXhwb3J0IHtEZWZhdWx0Q29uZmlnIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IERlZmF1bHRDb25maWcgZnJvbSAnLi9EZWZhdWx0Q29uZmlnLm1qcyc7XG5cbmNvbnN0IGNvbmZpZ1N5bWJvbCA9IFN5bWJvbC5mb3IoJ2NvbmZpZ1N5bWJvbCcpLFxuICAgICAgZ2V0U2V0Q2FjaGUgID0gU3ltYm9sKCdnZXRTZXRDYWNoZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIG1vZHVsZSB0byBlbmhhbmNlIGNsYXNzZXMsIGNyZWF0ZSBpbnN0YW5jZXMgYW5kIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBAbW9kdWxlIE5lb1xuICogQHNpbmdsZXRvblxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5iaW5kTWV0aG9kcyAgICAgICBhcyBiaW5kTWV0aG9kc1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5jYXBpdGFsaXplICAgICAgICBhcyBjYXBpdGFsaXplXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0IGFzIGNyZWF0ZVN0eWxlT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlcyAgICAgIGFzIGNyZWF0ZVN0eWxlc1xuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5kZWNhbWVsICAgICAgICAgICBhcyBkZWNhbWVsXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzQXJyYXkgICAgICAgICAgIGFzIGlzQXJyYXlcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNCb29sZWFuICAgICAgICAgYXMgaXNCb29sZWFuXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzRGVmaW5lZCAgICAgICAgIGFzIGlzRGVmaW5lZFxuICogQGJvcnJvd3MgTmVvLmNvcmUuQ29tcGFyZS5pc0VxdWFsICAgICAgICBhcyBpc0VxdWFsXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzTnVtYmVyICAgICAgICAgIGFzIGlzTnVtYmVyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ICAgICAgICAgIGFzIGlzT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzU3RyaW5nICAgICAgICAgIGFzIGlzU3RyaW5nXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLnRvQXJyYXkgICAgICAgICAgIGFzIHRvQXJyYXlcbiAqIEB0dXRvcmlhbCAwMV9Db25jZXB0XG4gKi9cbmxldCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcblxuTmVvID0gc2VsZi5OZW8gPSBPYmplY3QuYXNzaWduKHtcbiAgICAvKipcbiAgICAgKiBBIG1hcCBjb250YWluaW5nIG50eXBlcyBhcyBrZXkgYW5kIE5lbyBjbGFzc2VzIG9yIHNpbmdsZXRvbnMgYXMgdmFsdWVzXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIE9iamVjdFxuICAgICAqL1xuICAgIG50eXBlTWFwOiB7fSxcbiAgICAvKipcbiAgICAgKiBOZWVkZWQgZm9yIE5lby5jcmVhdGUuIEZhbHNlIGZvciB0aGUgbWFpbiB0aHJlYWQsIHRydWUgZm9yIHRoZSBBcHAsIERhdGEgJiBWZG9tIHdvcmtlclxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaW5zaWRlV29ya2VyOiB0eXBlb2YgRGVkaWNhdGVkV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbGx5IHVzZWQgYXQgdGhlIGVuZCBvZiBlYWNoIGNsYXNzIC8gbW9kdWxlIGRlZmluaXRpb25cbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzIFRoZSBOZW8gY2xhc3MgdG8gYXBwbHkgY29uZmlncyB0b1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNsYXNzQ29uZmlnKGNscykge1xuICAgICAgICBsZXQgYmFzZUNmZyAgICAgICA9IG51bGwsXG4gICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gbnVsbCxcbiAgICAgICAgICAgIHByb3RvICAgICAgICAgPSBjbHMucHJvdG90eXBlIHx8IGNscyxcbiAgICAgICAgICAgIHByb3RvcyAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZywgY3Rvciwgc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKGN0b3IuaGFzT3duUHJvcGVydHkoJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgICAgICAgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IE5lby5jbG9uZShjdG9yLnN0YXRpY0NvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICB8fCB7fTtcbiAgICAgICAgc3RhdGljQ29uZmlnID0gYmFzZVN0YXRpY0NmZyB8fCB7fTtcblxuICAgICAgICBwcm90b3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGN0b3IgPSBlbGVtZW50LmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgbGV0IGNmZyAgICAgICA9IGN0b3IuZ2V0Q29uZmlnICAgICAgPy4oKSB8fCB7fSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZz8uKCkgfHwge30sXG4gICAgICAgICAgICAgICAgbWl4aW5zO1xuXG4gICAgICAgICAgICBpZiAoY2ZnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgtMSkgPT09ICdfJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNmZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvR2VuZXJhdGVHZXRTZXQoZWxlbWVudCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgYXBwbHkgcHJvcGVydGllcyB3aGljaCBoYXZlIG5vIHNldHRlcnMgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIU5lby5oYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZz8ub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGFwcGx5TWl4aW5zKGN0b3IsIG1peGlucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgZmFsc2UsIGN0b3IucHJvdG90eXBlLm1peGlucykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2ZnLm9ic2VydmFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgICFjb25maWcuc2luZ2xldG9uICYmIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnXG4gICAgICogfSwgdHJ1ZSk7XG4gICAgICpcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lb3xOZW8uY29yZS5CYXNlfSB0YXJnZXQgVGhlIHRhcmdldCBjbGFzcyBvciBzaW5nbGV0b24gSW5zdGFuY2Ugb3IgTmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYmluZF0gc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnModGFyZ2V0LCBuYW1lc3BhY2UsIGNvbmZpZywgYmluZCkge1xuICAgICAgICBsZXQgZm5OYW1lO1xuXG4gICAgICAgIGlmICh0YXJnZXQgJiYgTmVvLnR5cGVPZihjb25maWcpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb3BpZXMgYWxsIGtleXMgb2YgZGVmYXVsdHMgaW50byB0YXJnZXQsIGluIGNhc2UgdGhleSBkb24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzIFRoZSBvYmplY3QgY29udGFpbmluZyB0aGUga2V5cyB5b3Ugd2FudCB0byBjb3B5XG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXNzaWduRGVmYXVsdHModGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIE5lby50eXBlT2YoZGVmYXVsdHMpID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVlcD1mYWxzZV0gU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XG4gICAgICovXG4gICAgY2xvbmUob2JqLCBkZWVwPWZhbHNlLCBpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG91dDtcblxuICAgICAgICBzd2l0Y2ggKE5lby50eXBlT2Yob2JqKSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFkZWVwID8gWy4uLm9ial0gOiBbLi4ub2JqLm1hcCh2YWwgPT4gTmVvLmNsb25lKHZhbCwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKSldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdEYXRlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShvYmoudmFsdWVPZigpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnTWFwJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTWFwKG9iaik7IC8vIHNoYWxsb3cgY29weVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdOZW9JbnN0YW5jZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ09iamVjdCc6IHtcbiAgICAgICAgICAgICAgICBvdXQgPSB7fTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG91dFtrZXldID0gIWRlZXAgPyB2YWx1ZSA6IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ1NldCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNldChvYmopOyAvLyBzaGFsbG93IGNvcHlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGluc3RhbmNlXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbG9uZU5lb0luc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB7Li4uaW5zdGFuY2Uub3JpZ2luYWxDb25maWd9O1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuX2lkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CYXNlLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJyB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgY2xhc3NOYW1lOiAnTmVvLmJ1dHRvbi5CYXNlJyxcbiAgICAgKiAgICAgaWNvbkNscyAgOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8TmVvLmNvcmUuQmFzZX0gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V8bnVsbH0gVGhlIG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZykge1xuICAgICAgICBsZXQgdHlwZSA9IE5lby50eXBlT2YoY2xhc3NOYW1lKSxcbiAgICAgICAgICAgIGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdOZW9DbGFzcycpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzTmFtZSB8fCBjb25maWcubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKCk7XG5cbiAgICAgICAgaW5zdGFuY2UuY29uc3RydWN0KGNvbmZpZyk7XG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2Uub25BZnRlckNvbnN0cnVjdGVkKCk7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcblxuICAgIGVtcHR5Rm4oKSB7fSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBwcm9wZXJ0eSBrZXkgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0b3I7XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRlc2NyaXB0b3Iuc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGVlcC1tZXJnZXMgYSBzb3VyY2Ugb2JqZWN0IGludG8gYSB0YXJnZXQgb2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmIChOZW8udHlwZU9mKHRhcmdldCkgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby50eXBlT2Yoc291cmNlW2tleV0pID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLm1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzc05hbWUgc3RyaW5nIGludG8gYSBnbG9iYWwgbmFtZXNwYWNlXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnMoJ05lby5idXR0b24uQmFzZScsIHRydWUpO1xuICAgICAqIC8vID0+XG4gICAgICogLy8gc2VsZi5OZW8gPSBzZWxmLk5lbyB8fCB7fTtcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQgPSBzZWxmLk5lby5jb21wb25lbnQgfHwge307XG4gICAgICogLy8gc2VsZi5OZW8uYnV0dG9uLkJhc2UgPSBzZWxmLk5lby5idXR0b24uQmFzZSB8fCB7fTtcbiAgICAgKiAvLyByZXR1cm4gc2VsZi5OZW8uYnV0dG9uLkJhc2U7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjcmVhdGVdIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uIGV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIHNlbGZcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zKG5hbWVzLCBjcmVhdGUsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IHNlbGYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XG4gICAgICogQHNlZSB7QGxpbmsgbW9kdWxlOk5lby5jcmVhdGUgY3JlYXRlfVxuICAgICAqL1xuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIGRlZmluZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIG50eXBlIHByb3BlcnR5LiAnICsgY29uZmlnLm50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHR5cGVPZihpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBpdGVtKSB7XG4gICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcm90b3R5cGU/LmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdOZW9DbGFzcyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnTmVvSW5zdGFuY2UnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxufSwgTmVvKTtcblxuLyoqXG4gKiBMaXN0IG9mIGNsYXNzIHByb3BlcnRpZXMgd2hpY2ggYXJlIG5vdCBzdXBwb3NlZCB0byBnZXQgbWl4ZWQgaW50byBvdGhlciBjbGFzc2VzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBpZ25vcmVNaXhpbiA9IFtcbiAgICAnX25hbWUnLFxuICAgICdjbGFzc0NvbmZpZ0FwcGxpZWQnLFxuICAgICdjbGFzc05hbWUnLFxuICAgICdjb25zdHJ1Y3RvcicsXG4gICAgJ2lzQ2xhc3MnLFxuICAgICdtaXhpbicsXG4gICAgJ250eXBlJyxcbiAgICAnb2JzZXJ2YWJsZScsXG4gICAgJ3JlZ2lzdGVyVG9HbG9iYWxOcydcbl07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzXG4gKiBAcGFyYW0ge0FycmF5fSBtaXhpbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgfVxuXG4gICAgbGV0IGkgICAgICAgICAgICA9IDAsXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxuICAgICAgICBtaXhpbiwgbWl4aW5DbHMsIG1peGluUHJvdG87XG5cbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xuICAgICAgICBtaXhpbiA9IG1peGluc1tpXTtcblxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluLnByb3RvdHlwZTtcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFleGlzdHMobWl4aW4pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIG1peGluIGFuIHVuZGVmaW5lZCBjbGFzczogJyArIG1peGluICsgJywgJyArIGNscy5wcm90b3R5cGUuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW4pO1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWl4aW5Qcm90bykuZm9yRWFjaChtaXhpblByb3BlcnR5KGNscy5wcm90b3R5cGUsIG1peGluUHJvdG8pKTtcbiAgICB9XG5cbiAgICBjbHMucHJvdG90eXBlLm1peGlucyA9IG1peGluQ2xhc3NlczsgLy8gdG9kbzogd2Ugc2hvdWxkIGRvIGEgZGVlcCBtZXJnZVxufVxuXG4vKipcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHByaXZhdGVcbiAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICovXG5mdW5jdGlvbiBhdXRvR2VuZXJhdGVHZXRTZXQocHJvdG8sIGtleSkge1xuICAgIGlmIChOZW8uaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkpIHtcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9O1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlR2V0ID0gYGJlZm9yZUdldCR7a2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSl9YCxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gbWVbY29uZmlnU3ltYm9sXS5oYXNPd25Qcm9wZXJ0eShrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlOyAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIHNldHRlciA9PiBiZWZvcmVTZXQsIGFmdGVyU2V0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZUdldF0odmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHVLZXkgICAgICA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZXQgPSAnYmVmb3JlU2V0JyArIHVLZXksXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2V0ICA9ICdhZnRlclNldCcgICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgID0gbWVbX2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyBldmVyeSBzZXQgY2FsbCBoYXMgdG8gZGVsZXRlIHRoZSBtYXRjaGluZyBzeW1ib2xcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5jbG9uZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2UgZG8gd2FudCB0byBzdG9yZSB0aGUgdmFsdWUgYmVmb3JlIHRoZSBiZWZvcmVTZXQgbW9kaWZpY2F0aW9uIGFzIHdlbGwsXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgY291bGQgZ2V0IHB1bGxlZCBieSBvdGhlciBiZWZvcmVTZXQgbWV0aG9kcyBvZiBkaWZmZXJlbnQgY29uZmlnc1xuICAgICAgICAgICAgICAgIG1lW19rZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lW2JlZm9yZVNldF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBtZVtiZWZvcmVTZXRdKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhleSBkb24ndCByZXR1cm4gYSB2YWx1ZSwgdGhhdCBtZWFucyBubyBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lW19rZXldID0gb2xkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghTmVvLmlzRXF1YWwodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBtZVthZnRlclNldF0/Lih2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBtZS5hZnRlclNldENvbmZpZz8uKGtleSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjbGFzcyBuYW1lIGV4aXN0cyBpbnNpZGUgdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4aXN0cyhjbGFzc05hbWUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gISFjbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdO1xuICAgICAgICB9LCBzZWxmKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1trZXldPy5fZnJvbSkge1xuICAgICAgICAgICAgaWYgKG1peGluUHJvdG8uY2xhc3NOYW1lID09PSBwcm90b1trZXldLl9mcm9tKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXhpbiBzZXQgbXVsdGlwbGUgdGltZXMgb3IgYWxyZWFkeSBkZWZpbmVkIG9uIGEgQmFzZSBDbGFzcycsIHByb3RvLmNsYXNzTmFtZSwgbWl4aW5Qcm90by5jbGFzc05hbWUsIGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGAke3Byb3RvLmNsYXNzTmFtZX06IE11bHRpcGxlIG1peGlucyBkZWZpbmluZyBzYW1lIHByb3BlcnR5ICgke21peGluUHJvdG8uY2xhc3NOYW1lfSwgJHtwcm90b1trZXldLl9mcm9tfSkgPT4gJHtrZXl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvW2tleV0gPSBtaXhpblByb3RvW2tleV07XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KS5fZnJvbSA9IG1peGluUHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcHJvdG9ba2V5XS5fbmFtZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBtaXhpbkNsc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWl4UmVkdWNlKG1peGluQ2xzKSB7XG4gICAgcmV0dXJuIChwcmV2LCBjdXJyZW50LCBpZHgsIGFycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XSA9IGlkeCAhPT0gYXJyLmxlbmd0aCAtMSA/IHByZXZbY3VycmVudF0gfHwge30gOiBtaXhpbkNscztcbiAgICB9O1xufVxuXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcblxuTmVvLmFzc2lnbkRlZmF1bHRzKE5lby5jb25maWcsIERlZmF1bHRDb25maWcpO1xuXG5leHBvcnQge05lbyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcblxuY29uc3QgY29uZmlnU3ltYm9sICAgICAgID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBmb3JjZUFzc2lnbkNvbmZpZ3MgPSBTeW1ib2woJ2ZvcmNlQXNzaWduQ29uZmlncycpLFxuICAgICAgaXNJbnN0YW5jZSAgICAgICAgID0gU3ltYm9sKCdpc0luc3RhbmNlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIChhbG1vc3QpIGFsbCBjbGFzc2VzIGluc2lkZSB0aGUgTmVvIG5hbWVzcGFjZVxuICogRXhjZXB0aW9ucyBhcmUgZS5nLiBjb3JlLklkR2VuZXJhdG9yLCB2ZG9tLlZOb2RlXG4gKiBAY2xhc3MgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHN0YXRpY1xuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gZWFjaCBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0YXRpY0NvbmZpZ1xuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3Mgc2hvcnRjdXQtbmFtZSB0byB1c2UgZm9yIGUuZy4gY3JlYXRpbmcgY2hpbGQgY29tcG9uZW50cyBpbnNpZGUgYSBKU09OLWZvcm1hdFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2Jhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBjb21wb25lbnQgaWRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOZW8uY3JlYXRlKCkgd2lsbCBjaGFuZ2UgdGhpcyBmbGFnIHRvIHRydWUgYWZ0ZXIgdGhlIG9uQ29uc3RydWN0ZWQoKSBjaGFpbiBpcyBkb25lLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0NvbnN0cnVjdGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzQ29uc3RydWN0ZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIG1peGlucyBhcyBhbiBhcnJheSBvZiBjbGFzc05hbWVzLCBpbXBvcnRlZCBtb2R1bGVzIG9yIGEgbWl4ZWQgdmVyc2lvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1peGluczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGluc3RhbmNlIGJ5IHBhc3NpbmcgYW4gaW1wb3J0ZWQgY2xhc3MgKEpTIG1vZHVsZSBkZWZhdWx0IGV4cG9ydClcbiAgICAgICAgICogQG1lbWJlciB7Q2xhc3N9IG1vZHVsZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZHVsZTogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDb25zdW1lcyB0aGUgc3RhdGljIGdldENvbmZpZygpIHJldHVybiBvYmplY3QuXG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnPXt9XG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XG4gICAgICAgICAgICBbY29uZmlnU3ltYm9sXToge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgIDoge30sXG4gICAgICAgICAgICAgICAgd3JpdGFibGUgICAgOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW2lzSW5zdGFuY2VdOiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5jcmVhdGVJZChjb25maWcuaWQgfHwgbWUuaWQpO1xuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5jb25zdHJ1Y3Rvci5jb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSAmJiBtZS5pbml0T2JzZXJ2YWJsZShjb25maWcpO1xuXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzcyBmaWVsZCB2YWx1ZXMgcHJpb3IgdG8gY29uZmlnc1xuICAgICAgICBjb25maWcgPSBtZS5zZXRGaWVsZHMoY29uZmlnKTtcblxuICAgICAgICBtZS5pbml0Q29uZmlnKGNvbmZpZyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucmVtb3RlICYmIHNldFRpbWVvdXQobWUuaW5pdFJlbW90ZS5iaW5kKG1lKSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpZCBjb25maWcgZ290IGNoYW5nZWQuXG4gICAgICogWW91IGNhbiBkeW5hbWljYWxseSBjaGFuZ2UgaW5zdGFuY2UgaWRzIGlmIG5lZWRlZC4gVGhleSBuZWVkIHRvIHN0YXkgdW5pcXVlIGF0IGFueSBnaXZlbiBwb2ludC5cbiAgICAgKiBVc2UgY2FzZTogZS5nLiBjb21wb25lbnQgYmFzZWQgbGlzdHMsIHdoZXJlIHlvdSB3YW50IHRvIHJlLXVzZSBpdGVtIGluc3RhbmNlcy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS51bnJlZ2lzdGVyKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFtvbGRWYWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5lby5pZE1hcCA9IE5lby5pZE1hcCB8fCB7fTtcbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgYmVmb3JlU2V0IGZ1bmN0aW9ucyB3aGljaCB0ZXN0IGlmIGEgZ2l2ZW4gdmFsdWUgaXMgaW5zaWRlIGEgc3RhdGljIGFycmF5XG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBjb25maWcgbmFtZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBbc3RhdGljTmFtZT1uYW1lICsgJ3MnXSBuYW1lIG9mIHRoZSBzdGF0aWMgY29uZmlnIGFycmF5XG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IHZhbHVlIG9yIG9sZFZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgbmFtZSwgc3RhdGljTmFtZSA9IG5hbWUgKyAncycpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGljTmFtZSkgPyBzdGF0aWNOYW1lIDogdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTdXBwb3J0ZWQgdmFsdWVzIGZvciAke25hbWV9IGFyZTogJHt2YWx1ZXMuam9pbignLCAnKX1gLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBJZEdlbmVyYXRvciB0byBjcmVhdGUgYW4gaWQgaWYgYSBzdGF0aWMgb25lIGlzIG5vdCBleHBsaWNpdGx5IHNldC5cbiAgICAgKiBSZWdpc3RlcnMgdGhlIGluc3RhbmNlIHRvIG1hbmFnZXIuSW5zdGFuY2UgaWYgdGhpcyBvbmUgaXMgYWxyZWFkeSBjcmVhdGVkLFxuICAgICAqIG90aGVyd2lzZSBzdG9yZXMgaXQgaW5zaWRlIGEgdG1wIG1hcC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKi9cbiAgICBjcmVhdGVJZChpZCkge1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgSWRHZW5lcmF0b3IuZ2V0SWQodGhpcy5nZXRJZEtleSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcbiAgICAgKiBhbmQgcmVtb3ZlcyBhbGwgb2JqZWN0IGVudHJpZXMgZnJvbSB0aGlzIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnVucmVnaXN0ZXIobWUpO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pZE1hcCkge1xuICAgICAgICAgICAgZGVsZXRlIE5lby5pZE1hcFttZS5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3Qua2V5cyhtZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobWUsIGtleSkud3JpdGFibGUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlZCBpbnNpZGUgY3JlYXRlSWQoKSBhcyB0aGUgZGVmYXVsdCB2YWx1ZSBwYXNzZWQgdG8gdGhlIElkR2VuZXJhdG9yLlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIGFzIG5lZWRlZC5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5udHlwZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcga2V5IG9yIHRoZSBzdGF0aWNDb25maWcgb2JqZWN0IGl0c2VsZiBpbiBjYXNlIG5vIHZhbHVlIGlzIHNldFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRTdGF0aWNDb25maWcoa2V5KSB7XG4gICAgICAgIGxldCBjZmcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcbiAgICAgICAgcmV0dXJuIChrZXkgPyBjZmdba2V5XSA6IGNmZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCgpIGlzIGRvbmVcbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29yZS5CYXNlI29uQ29uc3RydWN0ZWQgb25Db25zdHJ1Y3RlZH1cbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBpbml0KCkge31cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYWxsIGNsYXNzIGNvbmZpZ3MgdG8gdGhpcyBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIG1lLm1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSk7XG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9lcyBnZXQgdHJpZ2dlcmVkIHdpdGggYSBkZWxheSB0byBlbnN1cmUgdGhhdCBOZW8ud29ya2VySWQgJiBOZW8ud29ya2VyLk1hbmFnZXIgYXJlIGRlZmluZWRcbiAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyB2aWEgcHJvbWlzZXNcbiAgICAgKi9cbiAgICBpbml0UmVtb3RlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZW1vdGUgICAgICAgID0gbWUucmVtb3RlLFxuICAgICAgICAgICAgY2xhc3NOYW1lICAgICA9IG1lLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIGN1cnJlbnRXb3JrZXIgPSBOZW8uY3VycmVudFdvcmtlcixcbiAgICAgICAgICAgIGxpc3RlbmVySWQ7XG5cbiAgICAgICAgaWYgKCFtZS5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3MgaXMgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy51bml0VGVzdE1vZGUgJiYgTmVvLmlzT2JqZWN0KHJlbW90ZSkpIHtcbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09ICdtYWluJyAmJiBjdXJyZW50V29ya2VyLmlzU2hhcmVkV29ya2VyICYmICFjdXJyZW50V29ya2VyLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJJZCA9IGN1cnJlbnRXb3JrZXIub24oJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdvcmtlci51bignY29ubmVjdGVkJywgbGlzdGVuZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIEJhc2Uuc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGN0b3IgPSBtZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICBpZiAoIWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lby5hcHBseUNsYXNzQ29uZmlnIGhhcyBub3QgYmVlbiBydW4gb24gJyArIG1lLmNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICAgICAgbWUub3JpZ2luYWxDb25maWcgPSBOZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkFmdGVyQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaXNDb25zdHJ1Y3RlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gV2UgY2FuIG9ubHkgZmlyZSB0aGUgZXZlbnQgaW4gY2FzZSB0aGUgT2JzZXJ2YWJsZSBtaXhpbiBpcyBpbmNsdWRlZC5cbiAgICAgICAgbWUuZ2V0U3RhdGljQ29uZmlnKCdvYnNlcnZhYmxlJykgJiYgbWUuZmlyZSgnY29uc3RydWN0ZWQnLCBtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgYWxsIGNvbnN0cnVjdG9ycyBhcmUgZG9uZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byByZXBsYWNlIHN0cmluZyBiYXNlZCB2YWx1ZXMgY29udGFpbmluZyBcIkBjb25maWc6XCIgd2l0aCB0aGUgbWF0Y2hpbmcgY29uZmlnIHZhbHVlXG4gICAgICogb2YgdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXX0gaXRlbXNcbiAgICAgKi9cbiAgICBwYXJzZUl0ZW1Db25maWdzKGl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGl0ZW0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3ModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoOCkudHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW3ZhbHVlXSAmJiAhbWUuaGFzT3duUHJvcGVydHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIHVzZWQgQGNvbmZpZyBkb2VzIG5vdCBleGlzdDonLCB2YWx1ZSwgbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgY29uZmlnIG1pZ2h0IG5vdCBiZSBwcm9jZXNzZWQgeWV0LCBlc3BlY2lhbGx5IGZvciBjb25maWdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmUsIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGhlIGNvbmZpZ1N5bWJvbCBmaXJzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBtZVtjb25maWdTeW1ib2xdW3ZhbHVlXSB8fCBtZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB1c2luZyBzZXQoKSwgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZSBjYW4gYWxyZWFkeSBiZSBhc3NpZ25lZCxcbiAgICAgKiBzbyB0aGUgaGFzT3duUHJvcGVydHkoKSBjaGVjayB3aWxsIHJldHVybiB0cnVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZm9yY2VBc3NpZ249ZmFsc2VdXG4gICAgICovXG4gICAgcHJvY2Vzc0NvbmZpZ3MoZm9yY2VBc3NpZ249ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pO1xuXG4gICAgICAgIG1lW2ZvcmNlQXNzaWduQ29uZmlnc10gPSBmb3JjZUFzc2lnbjtcblxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIDEgY29uZmlnIGNhbiByZW1vdmUgbW9yZSB0aGFuIDEga2V5IChiZWZvcmVTZXRYLCBhZnRlclNldFgpXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBpcyBpbnRlbmRlZCBmb3IgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZVxuICAgICAgICAgICAgLy8gPT4gdGhleSBjb3VsZCBhbHJlYWR5IGdvdCBhc3NpZ25lZCBpbnNpZGUgYW4gYWZ0ZXJTZXQtbWV0aG9kXG4gICAgICAgICAgICBpZiAoZm9yY2VBc3NpZ24gfHwgIW1lLmhhc093blByb3BlcnR5KGtleXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgbWVba2V5c1swXV0gPSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGRlbGV0ZSBjYWxsIGluc2lkZSB0aGUgY29uZmlnIGdldHRlciBhcyB3ZWxsIChOZW8ubWpzID0+IGF1dG9HZW5lcmF0ZUdldFNldCgpKVxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBrZWVwIHRoaXMgb25lIGZvciBjb25maWdzLCB3aGljaCBkbyBub3QgdXNlIGdldHRlcnMgKG5vIHRyYWlsaW5nIHVuZGVyc2NvcmUpXG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcblxuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoZm9yY2VBc3NpZ24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VuZFJlbW90ZXMoY2xhc3NOYW1lLCByZW1vdGUpIHtcbiAgICAgICAgbGV0IG9yaWdpbjtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhyZW1vdGUpLmZvckVhY2goKFt3b3JrZXIsIG1ldGhvZHNdKSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgICAgICAgICAgb3JpZ2luLnNlbmRNZXNzYWdlKHdvcmtlciwge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3RlclJlbW90ZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKi9cbiAgICBzZXQodmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWVzID0gbWUuc2V0RmllbGRzKHZhbHVlcyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGluaXRpYWwgY29uZmlnIHByb2Nlc3NpbmcgaXMgc3RpbGwgcnVubmluZyxcbiAgICAgICAgLy8gZmluaXNoIHRoaXMgb25lIGZpcnN0IGJlZm9yZSBkcm9wcGluZyBuZXcgdmFsdWVzIGludG8gdGhlIGNvbmZpZ1N5bWJvbC5cbiAgICAgICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMjIwMVxuICAgICAgICBpZiAobWVbZm9yY2VBc3NpZ25Db25maWdzXSAhPT0gdHJ1ZSAmJiBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCB2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHdhbnQgdG8gYXNzaWduIGNsYXNzIGZpZWxkcyBmaXJzdCBhbmQgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgY29uZmlnIG9iamVjdCxcbiAgICAgKiBzbyB0aGF0IGFmdGVyU2V0KCksIGJlZm9yZUdldCgpIGFuZCBiZWZvcmVTZXQoKSBtZXRob2RzIGNhbiBnZXQgdGhlIG5ldyB2YWx1ZXMgcmlnaHQgYXdheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHNldEZpZWxkcyhjb25maWcpIHtcbiAgICAgICAgbGV0IGNvbmZpZ05hbWVzID0gdGhpcy5jb25zdHJ1Y3Rvci5jb25maWc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICghY29uZmlnTmFtZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhTmVvLmhhc1Byb3BlcnR5U2V0dGVyKHRoaXMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGJ5IGEgZ2l2ZW4ga2V5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleSBUaGUga2V5IG9mIGEgc3RhdGljQ29uZmlnIGRlZmluZWQgaW5zaWRlIHN0YXRpYyBnZXRTdGF0aWNDb25maWdcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29uZmlnIGV4aXN0cyBhbmQgZ290IGNoYW5nZWRcbiAgICAgKi9cbiAgICBzZXRTdGF0aWNDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgc3RhdGljQ29uZmlnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG5cbiAgICAgICAgaWYgKHN0YXRpY0NvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBzdGF0aWNDb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZCwgZS5nLjwvcD5cbiAgICAgKiBgTmVvLmNyZWF0ZSgnTmVvLmJ1dHRvbi5CYXNlJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmJ1dHRvbi5CYXNlIChuZW8tYnV0dG9uLTEpXVwiYFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGFzc05hbWV9IChpZDogJHt0aGlzLmlkfSlgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgaW5zdGFuY2VvZiBtZXRob2QuIFdpdGhvdXQgdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IGZhbHNlYDxicj5cbiAgICAgKiBgTmVvLmNyZWF0ZShOZW8uY29sbGVjdGlvbi5CYXNlKSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlW2lzSW5zdGFuY2VdID09PSB0cnVlID8gc3VwZXJbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkgOiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5CYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9IGZhbHNlO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuQ29tcGFyZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBDb21wYXJlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkNvbXBhcmUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkNvbXBhcmUnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbTFcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW0yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRXF1YWwoaXRlbTEsIGl0ZW0yKSB7XG4gICAgICAgIGlmIChpdGVtMSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHR5cGUxID0gTmVvLnR5cGVPZihpdGVtMSksXG4gICAgICAgICAgICB0eXBlMiA9IE5lby50eXBlT2YoaXRlbTIpLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGlmICh0eXBlMSAhPT0gdHlwZTIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodHlwZTEpIHtcbiAgICAgICAgICAgIGNhc2UgJ0FycmF5Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5sZW5ndGggIT09IGl0ZW0yLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBbaSwgdl0gb2YgaXRlbTEuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKHYsIGl0ZW0yW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnZhbHVlT2YoKSA9PT0gaXRlbTIudmFsdWVPZigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdGdW5jdGlvbic6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEubmFtZSAhPT0gaXRlbTIubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLnRvU3RyaW5nKCkgPT09IGl0ZW0yLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ01hcCc6IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbTEuc2l6ZSAhPT0gaXRlbTIuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHZhbDI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgaXRlbTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsMiA9IGl0ZW0yLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwyICE9PSB2YWwgfHwgdmFsMiA9PT0gdW5kZWZpbmVkICYmICFpdGVtMi5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgJ05lb0luc3RhbmNlJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5pZCAhPT0gaXRlbTIuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXNlICdPYmplY3QnOiB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGl0ZW0xKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKGl0ZW0yKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGl0ZW0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQ29tcGFyZS5pc0VxdWFsKGl0ZW0xW2tleV0sIGl0ZW0yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS50b1N0cmluZygpICE9PSBpdGVtMi50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSAnU2V0Jzoge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtMS5zaXplICE9PSBpdGVtMi5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGtleSBvZiBpdGVtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW0yLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtMSA9PT0gaXRlbTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBhcmUpO1xuXG4vLyBhbGlhc1xuTmVvLmlzRXF1YWwgPSBDb21wYXJlLmlzRXF1YWw7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmU7XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXG4gKiBJdCBjb3VsZCBnZXQgc2ltcGxpZmllZCB0byBqdXN0IGJlaW5nIGFuIG9iamVjdCAobmVlZHMgdG8gbWFudWFsbHkgZ2V0IHB1dCBpbnRvIHRoZSBOZW8gbmFtZXNwYWNlIGluIHRoaXMgY2FzZSkuXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSWRHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcbiAgICAgICAgICovXG4gICAgICAgIGJhc2U6ICduZW8tJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj0ndHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcblxuICAgICAgICAvLyBhbGlhc1xuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIG9uQWZ0ZXJDb25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSWRHZW5lcmF0b3IpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKElkR2VuZXJhdG9yKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLk9ic2VydmFibGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5PYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWl4aW4tb2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1peGluOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IGV2ZW50SWQgbnVsbCBpbiBjYXNlIGFuIG9iamVjdCBnZXRzIHBhc3NlZCBhcyB0aGUgbmFtZSAobXVsdGlwbGUgaWRzKVxuICAgICAqL1xuICAgIGFkZExpc3RlbmVyKG5hbWUsIG9wdHMsIHNjb3BlLCBldmVudElkLCBkYXRhLCBvcmRlcikge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBuYW1lT2JqZWN0ID0gdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnLFxuICAgICAgICAgICAgbGlzdGVuZXIsIGV4aXN0aW5nLCBldmVudENvbmZpZztcblxuICAgICAgICBpZiAobmFtZU9iamVjdCkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7IC8vIFZDIGhvb2ssIGNhbiBnZXQgcGFyc2VkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaW4gY2FzZSB0aGUgdmlldyB1c2VzIHRoZSBwYXJlbnQgVkNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5hbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGZuICAgIDogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcbiAgICAgICAgICAgICAgICBkYXRhICA6IGRhdGEsXG4gICAgICAgICAgICAgICAgaWQgICAgOiBldmVudElkIHx8IE5lby5nZXRJZCgnZXZlbnQnKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nID0gbWUubGlzdGVuZXJzPy5bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZmcuaWQgPT09IGV2ZW50SWQgfHwgKGNmZy5mbiA9PT0gbGlzdGVuZXIgJiYgY2ZnLnNjb3BlID09PSBzY29wZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOicsIG5hbWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmcuc3BsaWNlKG9yZGVyLCAwLCBldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcmRlciA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcucHVzaChldmVudENvbmZpZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5saXN0ZW5lcnNbbmFtZV0gPSBbZXZlbnRDb25maWddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnLCBldmVudHMsIGksIGxlbjtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgZXZlbnRzID0gWy4uLmxpc3RlbmVyc1tuYW1lXV07XG4gICAgICAgICAgICBsZW4gICAgPSBldmVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZyA9IGV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnLmZuLmFwcGx5KGV2ZW50Q29uZmlnLnNjb3BlIHx8IG1lLCBldmVudENvbmZpZy5kYXRhID8gYXJncy5jb25jYXQoZXZlbnRDb25maWcuZGF0YSkgOiBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRPYnNlcnZhYmxlKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcHJvdG8gPSBtZS5fX3Byb3RvX18sXG4gICAgICAgICAgICBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIG1lLmxpc3RlbmVycyA9IGNvbmZpZy5saXN0ZW5lcnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycztcblxuICAgICAgICBtZS5saXN0ZW5lcnMgPSB7fTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSB7Li4ubGlzdGVuZXJzfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90bz8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyICAgOiBtZS5hZGRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb24gICAgICAgICAgICA6IG1lLm9uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxuICAgICAqL1xuICAgIG9uKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqL1xuICAgIHJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50SWQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGksIGxlbiwgbGlzdGVuZXIsIGxpc3RlbmVycywgbWF0Y2gsIHNjb3BlO1xuXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLnNjb3BlKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnNba2V5XSB8fCBbXTtcbiAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwO1xuICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuLm5hbWUgPT09IChOZW8uaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiB2YWx1ZS5uYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuc2NvcGUgICA9PT0gc2NvcGVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNTdHJpbmcoZXZlbnRJZCkpIHtcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVyc1tuYW1lXTtcbiAgICAgICAgICAgIG1hdGNoICAgICA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRDb25maWcsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudENvbmZpZy5pZCA9PT0gZXZlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBpZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKG1hdGNoLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHN1c3BlbmRMaXN0ZW5lcnM6IGZ1bmN0aW9uKHF1ZXVlKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciByZW1vdmVMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKi9cbiAgICB1biguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhPYnNlcnZhYmxlKTtcblxuZXhwb3J0IHtPYnNlcnZhYmxlIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XG4gICAgICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGVjYW1lbFJlZ0V4OiAvKFthLXpdKShbQS1aXSkvZ1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuVXRpbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb3JlLXV0aWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVzXG4gICAgICovXG4gICAgc3RhdGljIGJpbmRNZXRob2RzKHNjb3BlLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgICAgc2NvcGVbdmFsdWVdID0gc2NvcGVbdmFsdWVdLmJpbmQoc2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc3RyaW5nIHVwcGVyY2FzZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxTdHJpbmd9IFJldHVybnMgZmFsc2UgZm9yIG5vbiBzdHJpbmcgaW5wdXRzXG4gICAgICovXG4gICAgc3RhdGljIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVdGlsLmlzU3RyaW5nKHN0cmluZykgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhIHN0eWxlcyBzdHJpbmcgaW50byBhIHN0eWxlcyBvYmplY3QgdXNpbmcgY2FtZWxjYXNlIHN5bnRheFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0eWxlcyBzdHJpbmcgdG8gcGFyc2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgY2FtZWxjYXNlIHN0eWxlcyBvYmplY3RcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVPYmplY3Qoc3RyaW5nKSB7XG4gICAgICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJ0cztcblxuICAgICAgICAvLyBzcGxpdCgnOycpIGRvZXMgZmV0Y2ggc2VtaWNvbG9ucyBpbnNpZGUgYnJhY2tldHNcbiAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogXCJ1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwuLi5cblxuICAgICAgICAvLyBUT0RPOiBDYWNoZSBhbGwgcmVnZXhcbiAgICAgICAgcmV0dXJuIHN0cmluZy5zcGxpdCgvOyg/PVteXFwpXSooPzpcXCh8JCkpL2cpLnJlZHVjZSgob2JqLCBlbCkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBzcGxpdCBieSB0aGUgZmlyc3QgY29sb24gb25seVxuICAgICAgICAgICAgLy8gLT4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJylcbiAgICAgICAgICAgIHBhcnRzID0gZWwuc3BsaXQoKC86KC4rKS8pKS5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcGFyc2VGbG9hdCh4KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB4ID09IG51bSA/IG51bSA6IHgudHJpbSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1swXSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoLy0oW2Etel0pL2csIChzdHIsIGxldHRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2JqW3BhcnRzWzBdXSA9IHBhcnRzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgc3R5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIFRoZSBzdHlsZXMgb2JqZWN0XG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0eWxlcyBzdHJpbmcgKERPTSByZWFkeSlcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBsZXQgc3R5bGUgPSAnJztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzdHlsZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtcyBhbGwgdXBwZXJjYXNlIGNoYXJhY3RlcnMgb2YgYSBzdHJpbmcgaW50byBsb3dlcmNhc2UuXG4gICAgICogRG9lcyBub3QgdG91Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgaW5wdXQgY29udGFpbmluZyB1cHBlcmNhc2UgY2hhcmFjdGVyc1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBsb3dlcmNhc2Ugb3V0cHV0XG4gICAgICovXG4gICAgc3RhdGljIGRlY2FtZWwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoVXRpbC5kZWNhbWVsUmVnRXgsICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xuXG4vLyBhbGlhc2VzXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgYmluZE1ldGhvZHMgICAgICA6ICdiaW5kTWV0aG9kcycsXG4gICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXG4gICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcbiAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxuICAgIGlzTnVtYmVyICAgICAgICAgOiAnaXNOdW1iZXInLFxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxuICAgIHRvQXJyYXkgICAgICAgICAgOiAndG9BcnJheSdcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsO1xuIiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBhcmUgICAgIGZyb20gJy4vQ29tcGFyZS5tanMnO1xuaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICBmcm9tICcuL09ic2VydmFibGUubWpzJztcbmltcG9ydCBVdGlsICAgICAgICBmcm9tICcuL1V0aWwubWpzJztcblxuZXhwb3J0IHtCYXNlLCBDb21wYXJlLCBJZEdlbmVyYXRvciwgT2JzZXJ2YWJsZSwgVXRpbH07XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IERlbHRhVXBkYXRlcyBmcm9tICcuL21peGluL0RlbHRhVXBkYXRlcy5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1haW4uRG9tQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERvbUFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5Eb21BY2Nlc3MnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYWluLkRvbUFjY2VzcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50RGVsdGFzPTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY291bnREZWx0YXM6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGNvdW50RGVsdGFzUGVyMjUwbXM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudERlbHRhc1BlcjI1MG1zOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudFVwZGF0ZXM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudFVwZGF0ZXM6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gbWl4aW5zPVtEZWx0YVVwZGF0ZXMsIE9ic2VydmFibGVdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtcbiAgICAgICAgICAgIERlbHRhVXBkYXRlcyxcbiAgICAgICAgICAgIE9ic2VydmFibGVcbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW90ZSBtZXRob2QgYWNjZXNzIGZvciBvdGhlciB3b3JrZXJzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gcmVtb3RlPXthcHA6IFsvLy4uLl19XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ2FkZFNjcmlwdCcsXG4gICAgICAgICAgICAgICAgJ2FwcGx5Qm9keUNscycsXG4gICAgICAgICAgICAgICAgJ2V4ZWNDb21tYW5kJyxcbiAgICAgICAgICAgICAgICAnZm9jdXMnLFxuICAgICAgICAgICAgICAgICdnZXRBdHRyaWJ1dGVzJyxcbiAgICAgICAgICAgICAgICAnZ2V0Qm91bmRpbmdDbGllbnRSZWN0JyxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsQnknLFxuICAgICAgICAgICAgICAgICdzY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFRvJyxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsVG9UYWJsZVJvdycsXG4gICAgICAgICAgICAgICAgJ3NlbGVjdE5vZGUnLFxuICAgICAgICAgICAgICAgICdzZXRCb2R5Q2xzJyxcbiAgICAgICAgICAgICAgICAnc2V0U3R5bGUnLFxuICAgICAgICAgICAgICAgICd3aW5kb3dTY3JvbGxUbydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZvaWQgYXR0cmlidXRlcyBpbnNpZGUgaHRtbCB0YWdzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB2b2lkQXR0cmlidXRlc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB2b2lkQXR0cmlidXRlczogW1xuICAgICAgICAgICAgJ2NoZWNrZWQnLFxuICAgICAgICAgICAgJ3JlcXVpcmVkJ1xuICAgICAgICBdXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnJlbmRlckNvdW50RGVsdGFzKSB7XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZW8tZGVsdGEtdXBkYXRlcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IFN0cmluZyhtZS5jb3VudERlbHRhc1BlcjI1MG1zICogNCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUuY291bnREZWx0YXNQZXIyNTBtcyA9IDA7XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEuYXN5bmNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkYXRhLmRlZmVyPWZhbHNlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5zcmM9dHJ1ZV1cbiAgICAgKi9cbiAgICBhZGRTY3JpcHQoZGF0YSkge1xuICAgICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KCdhc3luYycpKSB7XG4gICAgICAgICAgICBkYXRhLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2NyaXB0LCBkYXRhKTtcblxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmNsc1xuICAgICAqL1xuICAgIGFwcGx5Qm9keUNscyhkYXRhKSB7XG4gICAgICAgIGxldCBjbHMgPSBkYXRhLmNscyB8fCBbXTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKC4uLmNscyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5jb21tYW5kXG4gICAgICogQHJldHVybnMge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGV4ZWNDb21tYW5kKGRhdGEpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoZGF0YS5jb21tYW5kKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgZm9jdXMgb24gYSBub2RlIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIGZvY3VzKGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuZm9jdXMoKTtcblxuICAgICAgICAgICAgaWYgKE5lby5pc051bWJlcihub2RlLnNlbGVjdGlvblN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2VsZWN0aW9uU3RhcnQgPSBub2RlLnNlbGVjdGlvbkVuZCA9IG5vZGUudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYXR0cmlidXRlcyBmb3IgYSBnaXZlbiBkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuaWQgZWl0aGVyIGFuIGlkIG9yIGFuIGFycmF5IG9mIGlkc1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBkYXRhLmF0dHJpYnV0ZXMgZWl0aGVyIGFuIGF0dHJpYnV0ZSBvciBhbiBhcnJheSBvZiBhdHRyaWJ1dGVzXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH0gSW4gY2FzZSBpZCBpcyBhbiBhcnJheSwgYW4gYXJyYXkgb2YgYXRycmJ1dGUgb2JqZWN0cyBpcyByZXR1cm5lZCwgb3RoZXJ3aXNlIGFuIG9iamVjdFxuICAgICAqL1xuICAgIGdldEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBsZXQgcmV0dXJuRGF0YTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmlkLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybkRhdGEucHVzaCh0aGlzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBkYXRhLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICA6IGlkXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudE9yQm9keShkYXRhLmlkKTtcblxuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLmF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcyA9IFtkYXRhLmF0dHJpYnV0ZXNdO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhW2F0dHJpYnV0ZV0gPSBub2RlW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGZvciBhIGdpdmVuIGRvbSBub2RlIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gZGF0YS5pZCBlaXRoZXIgYW4gaWQgb3IgYW4gYXJyYXkgb2YgaWRzXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH0gSW4gY2FzZSBpZCBpcyBhbiBhcnJheSwgYW4gYXJyYXkgb2YgRG9tUmVjdHMgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSBhbiBEb21SZWN0IG9iamVjdFxuICAgICAqL1xuICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdChkYXRhKSB7XG4gICAgICAgIGxldCByZXR1cm5EYXRhO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm5EYXRhID0gW107XG5cbiAgICAgICAgICAgIGRhdGEuaWQuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHtpZDogaWR9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEuaWQpLFxuICAgICAgICAgICAgICAgIHJlY3QgPSB7fTtcblxuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRG9tUmVjdCBkb2VzIG5vdCBzdXBwb3J0IHNwcmVhZGluZyA9PiB7Li4uRG9tUmVjdH0gPT4ge31cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJldHVybkRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCAgOiByZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0IDogcmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9wICAgOiByZWN0LnRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggOiByZWN0LndpZHRoLFxuICAgICAgICAgICAgICAgICAgICB4ICAgICA6IHJlY3QueCxcbiAgICAgICAgICAgICAgICAgICAgeSAgICAgOiByZWN0LnlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldEVsZW1lbnQobm9kZUlkKSB7XG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZURvbUlkcykge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG5vZGVJZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbmVvLWlkPScke25vZGVJZH0nXWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbm9kZUlkPSdkb2N1bWVudC5ib2R5J11cbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldEVsZW1lbnRPckJvZHkobm9kZUlkPSdkb2N1bWVudC5ib2R5Jykge1xuICAgICAgICBpZiAobm9kZUlkID09PSAnYm9keScgfHwgbm9kZUlkID09PSAnZG9jdW1lbnQuYm9keScpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudChub2RlSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluY2x1ZGUgYSBzY3JpcHQgaW50byB0aGUgZG9jdW1lbnQuaGVhZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzcmNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthc3luYz10cnVlXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHVua25vd24+fVxuICAgICAqL1xuICAgIGxvYWRTY3JpcHQoc3JjLCBhc3luYz10cnVlKSB7XG4gICAgICAgIGxldCBzY3JpcHQ7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNjcmlwdCwge1xuICAgICAgICAgICAgICAgIGFzeW5jLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6IHJlamVjdCxcbiAgICAgICAgICAgICAgICBvbmxvYWQgOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHNyY1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jbHVkZSBhIGxpbmsgaW50byB0aGUgZG9jdW1lbnQuaGVhZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBocmVmXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgbG9hZFN0eWxlc2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgbGluaztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsaW5rLCB7XG4gICAgICAgICAgICAgICAgaHJlZixcbiAgICAgICAgICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgICAgICAgICAgb25sb2FkIDogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICByZWwgICAgOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgdHlwZSAgIDogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICBpZiAoTmVvLmNvbmZpZy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlCb2R5Q2xzKHtjbHM6IFsnbmVvLWJvZHknXX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5ub2RlSWRcbiAgICAgKi9cbiAgICBvbkdldE9mZnNjcmVlbkNhbnZhcyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSAgICAgID0gbWUuZ2V0RWxlbWVudChkYXRhLm5vZGVJZCksXG4gICAgICAgICAgICBvZmZzY3JlZW4gPSBub2RlLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuKCk7XG5cbiAgICAgICAgZGF0YS5vZmZzY3JlZW4gPSBvZmZzY3JlZW47XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0sIFtvZmZzY3JlZW5dKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuYXR0cmlidXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEuZnVuY3Rpb25zIEFuIGFycmF5IGNvbnRhaW5pbmcgc3RyaW5ncyBhbmQvb3Igb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGRhdGEuc3R5bGVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudm5vZGVJZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblJlYWREb20oZGF0YSkge1xuICAgICAgICBsZXQgYXR0cmlidXRlcyAgICA9IGRhdGEuYXR0cmlidXRlcyB8fCBbXSxcbiAgICAgICAgICAgIGZ1bmN0aW9ucyAgICAgPSBkYXRhLmZ1bmN0aW9ucyAgfHwgW10sXG4gICAgICAgICAgICBzdHlsZXMgICAgICAgID0gZGF0YS5zdHlsZXMgICAgIHx8IFtdLFxuICAgICAgICAgICAgdm5vZGVJZCAgICAgICA9IGRhdGEudm5vZGVJZCxcbiAgICAgICAgICAgIHJldEF0dHJpYnV0ZXMgPSB7fSxcbiAgICAgICAgICAgIHJldEZ1bmN0aW9ucyAgPSB7fSxcbiAgICAgICAgICAgIHJldFN0eWxlcyAgICAgPSB7fSxcbiAgICAgICAgICAgIGVsZW1lbnQgICAgICAgPSB2bm9kZUlkID8gdGhpcy5nZXRFbGVtZW50KHZub2RlSWQpIDogbnVsbCxcbiAgICAgICAgICAgIGZuTmFtZSwgc2NvcGU7XG5cbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICByZXRBdHRyaWJ1dGVzW2tleV0gPSBlbGVtZW50W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9ucy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBrZXkucGFyYW1zICAgICAgICAgPSBrZXkucGFyYW1zICAgICAgICAgfHwgW107XG4gICAgICAgICAgICAgICAga2V5LnBhcmFtSXNEb21Ob2RlID0ga2V5LnBhcmFtSXNEb21Ob2RlIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBrZXkuc2NvcGUgPyBkb2N1bWVudFtrZXkuc2NvcGVdIDogZWxlbWVudDtcblxuICAgICAgICAgICAgICAgIGtleS5wYXJhbXMuZm9yRWFjaCgocGFyYW0sIHBhcmFtSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5wYXJhbUlzRG9tTm9kZVtwYXJhbUluZGV4XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LnBhcmFtc1twYXJhbUluZGV4XSA9IHRoaXMuZ2V0RWxlbWVudChrZXkucGFyYW1zW3BhcmFtSW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZm5OYW1lID0ga2V5LnJldHVybkZuTmFtZSA/IGtleS5yZXR1cm5Gbk5hbWUgOiBpbmRleDtcbiAgICAgICAgICAgICAgICByZXRGdW5jdGlvbnNbZm5OYW1lXSA9IHNjb3BlW2tleS5mbl0oLi4ua2V5LnBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnJldHVyblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldEZ1bmN0aW9uc1tmbk5hbWVdID0gcmV0RnVuY3Rpb25zW2ZuTmFtZV1ba2V5LnJldHVyblZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldEZ1bmN0aW9uc1trZXldID0gZWxlbWVudFtrZXldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICByZXRTdHlsZXNba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiByZXRBdHRyaWJ1dGVzLFxuICAgICAgICAgICAgZnVuY3Rpb25zIDogcmV0RnVuY3Rpb25zLFxuICAgICAgICAgICAgc3R5bGVzICAgIDogcmV0U3R5bGVzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBkYXRhLmlkLFxuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZWFkKGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBkYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRpcmVjdGlvbiBsZWZ0LCB0b3BcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzY3JvbGxCeShkYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBub2RlW2BzY3JvbGwke05lby5jYXBpdGFsaXplKGRhdGEuZGlyZWN0aW9uKX1gXSArPSBkYXRhLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5iZWhhdmlvcj0nc21vb3RoJ11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuYmxvY2s9J3N0YXJ0J11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuaW5saW5lPSduZWFyZXN0J11cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbEludG9WaWV3KGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBkYXRhLmJlaGF2aW9yIHx8ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIGJsb2NrICAgOiBkYXRhLmJsb2NrICAgIHx8ICdzdGFydCcsXG4gICAgICAgICAgICAgICAgaW5saW5lICA6IGRhdGEuaW5saW5lICAgfHwgJ25lYXJlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aWQ6IGRhdGEuaWR9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuZGlyZWN0aW9uIGxlZnQsIHRvcFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEudmFsdWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbFRvKGRhdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGVbYHNjcm9sbCR7TmVvLmNhcGl0YWxpemUoZGF0YS5kaXJlY3Rpb24pfWBdID0gZGF0YS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7aWQ6IGRhdGEuaWR9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEuYmVoYXZpb3I9J3Ntb290aCddXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLm9mZnNldD0zNF1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNjcm9sbFRvVGFibGVSb3coZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudChkYXRhLmlkKTsgLy8gdHIgdGFnXG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZU5vZGUgICA9IG5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHdyYXBwZXJOb2RlID0gdGFibGVOb2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgdGFibGVUb3AgICAgPSB0YWJsZU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgICAgICAgIHRvcCAgICAgICAgID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgICAgICAgIHdyYXBwZXJOb2RlLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3AgICAgIDogdG9wIC0gdGFibGVUb3AgLSAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnb2Zmc2V0JykgPyBkYXRhLm9mZnNldCA6IDM0KSxcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogZGF0YS5iZWhhdmlvciB8fCAnc21vb3RoJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLnN0YXJ0PTBdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLmVuZD05OTk5OV1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBvYmouaWQgPT4gdGhlIHBhc3NlZCBpZFxuICAgICAqL1xuICAgIHNlbGVjdE5vZGUoZGF0YSkge1xuICAgICAgICBsZXQgbm9kZSAgPSB0aGlzLmdldEVsZW1lbnQoZGF0YS5pZCksXG4gICAgICAgICAgICBzdGFydCA9IE5lby5pc051bWJlcihkYXRhLnN0YXJ0KSB8fCAwLFxuICAgICAgICAgICAgZW5kICAgPSBOZW8uaXNOdW1iZXIoZGF0YS5lbmQpICAgfHwgOTk5OTk7XG5cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgICAgICAgICBub2RlLnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtpZDogZGF0YS5pZH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBkYXRhLmFkZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGEucmVtb3ZlXG4gICAgICovXG4gICAgc2V0Qm9keUNscyhkYXRhKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSguLi5kYXRhLnJlbW92ZSB8fCBbXSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCguLi5kYXRhLmFkZCB8fCBbXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90IHJlY29tbWVuZGVkIHRvIHVzZSA9PiBzdGljayB0byB2ZG9tIHVwZGF0ZXMuXG4gICAgICogQ2FuIGJlIGhhbmR5IGZvciBjdXN0b20gQ1NTIGJhc2VkIGFuaW1hdGlvbnMgdGhvdWdoLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEuaWQgQSBub2RlIGlkIG9yICdkb2N1bWVudC5ib2R5J1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLnN0eWxlXG4gICAgICogQHJldHVybnMge09iamVjdH0gb2JqLmlkID0+IHRoZSBwYXNzZWQgaWRcbiAgICAgKi9cbiAgICBzZXRTdHlsZShkYXRhKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRhdGEuaWQpO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhLnN0eWxlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHZhbHVlKSAmJiB2YWx1ZS5pbmNsdWRlcygnIWltcG9ydGFudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgnIWltcG9ydGFudCcsICcnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoTmVvLmRlY2FtZWwoa2V5KSwgdmFsdWUsICdpbXBvcnRhbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlW05lby5kZWNhbWVsKGtleSldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge2lkOiBkYXRhLmlkfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS5iZWhhdmlvcj0nc21vb3RoJ10gLy8gYXV0byBvciBzbW9vdGhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RhdGEubGVmdD0wXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGF0YS50b3A9MF1cbiAgICAgKi9cbiAgICB3aW5kb3dTY3JvbGxUbyhkYXRhKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICBiZWhhdmlvcjogZGF0YS5iZWhhdmlvciB8fCAnc21vb3RoJyxcbiAgICAgICAgICAgIGxlZnQgICAgOiBkYXRhLmxlZnQgICAgIHx8IDAsXG4gICAgICAgICAgICB0b3AgICAgIDogZGF0YS50b3AgICAgICB8fCAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdyaXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kdV9pbnNlcnROb2RlKHtcbiAgICAgICAgICAgIGluZGV4ICAgIDogZGF0YS5wYXJlbnRJbmRleCxcbiAgICAgICAgICAgIG91dGVySFRNTDogZGF0YS5odG1sIHx8IGRhdGEub3V0ZXJIVE1MLFxuICAgICAgICAgICAgcGFyZW50SWQgOiBkYXRhLnBhcmVudElkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRG9tQWNjZXNzKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShEb21BY2Nlc3MpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iLCJpbXBvcnQgQmFzZSAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVG91Y2hEb21FdmVudHMgZnJvbSAnLi9taXhpbi9Ub3VjaERvbUV2ZW50cy5tanMnO1xuXG5jb25zdCBnbG9iYWxEb21FdmVudHMgPSBbXG4gICAge25hbWU6ICdjaGFuZ2UnLCAgICAgIGhhbmRsZXI6ICdvbkNoYW5nZSd9LFxuICAgIHtuYW1lOiAnY2xpY2snLCAgICAgICBoYW5kbGVyOiAnb25DbGljayd9LFxuICAgIHtuYW1lOiAnY29udGV4dG1lbnUnLCBoYW5kbGVyOiAnb25Db250ZXh0TWVudSd9LFxuICAgIHtuYW1lOiAnZGJsY2xpY2snLCAgICBoYW5kbGVyOiAnb25Eb3VibGVDbGljayd9LFxuICAgIHtuYW1lOiAnZm9jdXNpbicsICAgICBoYW5kbGVyOiAnb25Gb2N1c0luJ30sXG4gICAge25hbWU6ICdmb2N1c291dCcsICAgIGhhbmRsZXI6ICdvbkZvY3VzT3V0J30sXG4gICAge25hbWU6ICdpbnB1dCcsICAgICAgIGhhbmRsZXI6ICdvbkNoYW5nZSd9LFxuICAgIHtuYW1lOiAna2V5ZG93bicsICAgICBoYW5kbGVyOiAnb25LZXlEb3duJ30sXG4gICAge25hbWU6ICdrZXl1cCcsICAgICAgIGhhbmRsZXI6ICdvbktleVVwJ30sXG4gICAge25hbWU6ICdtb3VzZWRvd24nLCAgIGhhbmRsZXI6ICdvbk1vdXNlRG93bid9LFxuICAgIHtuYW1lOiAnbW91c2VlbnRlcicsICBoYW5kbGVyOiAnb25Nb3VzZUVudGVyJywgb3B0aW9uczoge2NhcHR1cmU6IHRydWV9fSxcbiAgICB7bmFtZTogJ21vdXNlbGVhdmUnLCAgaGFuZGxlcjogJ29uTW91c2VMZWF2ZScsIG9wdGlvbnM6IHtjYXB0dXJlOiB0cnVlfX0sXG4gICAge25hbWU6ICdtb3VzZXVwJywgICAgIGhhbmRsZXI6ICdvbk1vdXNlVXAnfSxcbiAgICB7bmFtZTogJ3doZWVsJywgICAgICAgaGFuZGxlcjogJ29uV2hlZWwnLCAgICAgIG9wdGlvbnM6IHtwYXNzaXZlOiBmYWxzZX19XG5dO1xuXG4vLyBXaWxsIGdldCBhcHBsaWVkIHRvIHRoZSBkb2N1bWVudC5ib2R5IGluIGNhc2UgTmVvLmNvbmZpZy51c2VUb3VjaEV2ZW50cyA9PT0gdHJ1ZSAoZGVmYXVsdCB2YWx1ZSlcbmNvbnN0IHRvdWNoRXZlbnRzID0gW1xuICAgIHtuYW1lOiAndG91Y2hjYW5jZWwnLCBoYW5kbGVyOiAnb25Ub3VjaENhbmNlbCd9LFxuICAgIHtuYW1lOiAndG91Y2hlbmQnLCAgICBoYW5kbGVyOiAnb25Ub3VjaEVuZCd9LFxuICAgIHtuYW1lOiAndG91Y2hlbnRlcicsICBoYW5kbGVyOiAnb25Ub3VjaEVudGVyJ30sXG4gICAge25hbWU6ICd0b3VjaGxlYXZlJywgIGhhbmRsZXI6ICdvblRvdWNoTGVhdmUnfSxcbiAgICB7bmFtZTogJ3RvdWNobW92ZScsICAgaGFuZGxlcjogJ29uVG91Y2hNb3ZlJ30sXG4gICAge25hbWU6ICd0b3VjaHN0YXJ0JywgIGhhbmRsZXI6ICdvblRvdWNoU3RhcnQnfVxuXTtcblxuLy8gd2hlZWwgZXZlbnRzIGZpcmUgdmVyeSBvZnRlbiwgc28gd2UgbGltaXQgdGhlIHRhcmdldHMgdG8gYXZvaWQgdW5uZWNlc3NhcnkgcG9zdCBtZXNzYWdlcyBmcm9tIG1haW4gdG8gdGhlIGFwcCB3b3JrZXJcbmNvbnN0IGdsb2JhbFdoZWVsVGFyZ2V0cyA9IFtcbiAgICAnbmVvLWMtbS1zY3JvbGxjb250YWluZXInLFxuICAgICduZW8tYy13LXNjcm9sbGNvbnRhaW5lcicsXG4gICAgJ25lby1jYWxlbmRhci15ZWFyY29tcG9uZW50JyxcbiAgICAnbmVvLWNpcmNsZS1jb21wb25lbnQnLFxuICAgICduZW8tZGF0ZXNlbGVjdG9yJyxcbiAgICAnbmVvLWdhbGxlcnknLFxuICAgICduZW8taGVsaXgnXG5dO1xuXG4vLyBzZXBhcmF0ZWQgZnJvbSBnbG9iYWxXaGVlbFRhcmdldHMgPT4gcGVyZm9ybWFuY2Vcbi8vIGJ1ZmZlciBpbiBtc1xuY29uc3QgZ2xvYmFsV2hlZWxUYXJnZXRzQnVmZmVyID0ge1xuICAgICduZW8tYy1tLXNjcm9sbGNvbnRhaW5lcicgICA6IDEwMCxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInICAgOiAxMDAsXG4gICAgJ25lby1jYWxlbmRhci15ZWFyY29tcG9uZW50JzogMzAwLFxuICAgICduZW8tZGF0ZXNlbGVjdG9yJyAgICAgICAgICA6IDMwMFxufTtcblxuLy8gc2VwYXJhdGVkIGZyb20gZ2xvYmFsV2hlZWxUYXJnZXRzID0+IHBlcmZvcm1hbmNlXG5jb25zdCBnbG9iYWxXaGVlbFRhcmdldHNLZWVwRXZlbnQgPSBbXG4gICAgJ25lby1jLW0tc2Nyb2xsY29udGFpbmVyJyxcbiAgICAnbmVvLWMtdy1zY3JvbGxjb250YWluZXInXG5dO1xuXG5jb25zdCBsYXN0V2hlZWxFdmVudCA9IHtcbiAgICBkYXRlICA6IG51bGwsXG4gICAgdGFyZ2V0OiBudWxsXG59O1xuXG5jb25zdCBwcmV2ZW50Q2xpY2tUYXJnZXRzICAgICAgID0gW10sXG4gICAgICBwcmV2ZW50Q29udGV4dG1lbnVUYXJnZXRzID0gW107XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYWluLkRvbUV2ZW50c1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEb21FdmVudHMgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4uRG9tRXZlbnRzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5Eb21FdmVudHMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogY29uZGl0aW9uYWwgZHluYW1pYyBpbXBvcnQgb25jZSB0aGUgYnVpbGQgcHJvY2Vzc2VzIGNhbiBoYW5kbGUgaXRcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IG1peGlucz1bVG91Y2hEb21FdmVudHNdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtUb3VjaERvbUV2ZW50c10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyBmb3Igb3RoZXIgd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlbW90ZT17YXBwOiBbJ2FkZERvbUxpc3RlbmVyJ119XG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZToge1xuICAgICAgICAgICAgYXBwOiBbXG4gICAgICAgICAgICAgICAgJ2FkZERvbUxpc3RlbmVyJyxcbiAgICAgICAgICAgICAgICAncmVnaXN0ZXJQcmV2ZW50RGVmYXVsdFRhcmdldHMnXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWUub25Eb21Db250ZW50TG9hZGVkLmJpbmQobWUpKTtcbiAgICAgICAgd2luZG93ICAuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICAgICAgIG1lLm9uSGFzaENoYW5nZSAgICAgIC5iaW5kKG1lKSk7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlU2hhcmVkV29ya2Vycykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIG1lLm9uQmVmb3JlVW5sb2FkLmJpbmQobWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoZGF0YSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBkYXRhLmV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBldmVudCwgaWQsIHRhcmdldE5vZGU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZXZlbnQgPSBkYXRhLmV2ZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKCFtZVtldmVudC5oYW5kbGVyXSkge1xuICAgICAgICAgICAgICAgIG1lW2V2ZW50LmhhbmRsZXJdID0gTmVvLmVtcHR5Rm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlkID0gZXZlbnQudm5vZGVJZCB8fCBkYXRhLnZub2RlSWQ7XG5cbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ2RvY3VtZW50LmJvZHknKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5jb25maWcudXNlRG9tSWRzKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5lby1pZD0nJHtpZH0nXWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXJnZXROb2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubmFtZSwgbWVbZXZlbnQuaGFuZGxlcl0uYmluZChtZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWRkR2xvYmFsRG9tTGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIFsuLi5nbG9iYWxEb21FdmVudHNdLmNvbmNhdChOZW8uY29uZmlnLnVzZVRvdWNoRXZlbnRzID8gdG91Y2hFdmVudHMgOiBbXSkuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubmFtZSwgbWVbZXZlbnQuaGFuZGxlcl0uYmluZChtZSksIGV2ZW50Lm9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHgxIFRoZSBYIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBwb2ludFxuICAgICAqIEBwYXJhbSAge051bWJlcn0geTEgVGhlIFkgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHBvaW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB4MiBUaGUgWCBwb3NpdGlvbiBvZiB0aGUgc2Vjb25kIHBvaW50XG4gICAgICogQHBhcmFtICB7TnVtYmVyfSB5MiBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgc2Vjb25kIHBvaW50XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXREaXN0YW5jZSh4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh4MiAtIHgxKSAqKiAyICsgKHkyIC0geTEpICoqIDIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvY2FsIGRvbUV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgZG9tRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldCA9IGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICA6ICdkb21FdmVudCcsXG4gICAgICAgICAgICAgICAgZXZlbnROYW1lOiBldmVudC50eXBlLFxuXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAuLi5tZS5nZXRFdmVudERhdGEoZXZlbnQpLFxuICAgICAgICAgICAgICAgICAgICBpZCAgIDogdGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZG9tRXZlbnRMaXN0ZW5lcicsIGV2ZW50LnR5cGUsIHRhcmdldC5pZCwgdGFyZ2V0LnZhbHVlLCBldmVudCk7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgICAgICAgICBtZS5kcmFnRWxlbWVudElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZSB0YXJnZXQgYW5kIHNvdXJjZSB0byBiZSB0aGUgc2FtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XG4gICAgICAgICAgICAgICAgaWYgKG1lLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGlnbm9yZSB0YXJnZXQgYW5kIHNvdXJjZSB0byBiZSB0aGUgc2FtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgICAgICAgICAgICBtZS5vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBtZS5kcmFnRWxlbWVudElkID0gdGFyZ2V0LmlkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5kcmFnRWxlbWVudElkIHx8IG1lLmRyYWdFbGVtZW50SWQgPT09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGRyb3AgZmlyZXMgdHdpY2UgYnkgZGVmYXVsdCAmIGRyb3Agc2hvdWxkIG5vdCB0cmlnZ2VyIG9uIHRoZSBkcmFnIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSByZWRpcmVjdGluZy5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25maWcuZGF0YS5zcmNJZCA9IG1lLmRyYWdFbGVtZW50SWQ7XG4gICAgICAgICAgICAgICAgbWUuZHJhZ0VsZW1lbnRJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZW1vdmUnOlxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29uZmlnLmRhdGEsIG1lLmdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ud29ya2VyLk1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRFdmVudERhdGEoZXZlbnQpIHtcbiAgICAgICAgbGV0IHBhdGggPSBldmVudC5wYXRoIHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpOyAvLyBGRiBkb2VzIG5vdCBzdXBwb3J0IHBhdGhcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF0aCAgICAgOiBwYXRoLm1hcChlID0+IHRoaXMuZ2V0VGFyZ2V0RGF0YShlKSksXG4gICAgICAgICAgICB0YXJnZXQgICA6IHRoaXMuZ2V0VGFyZ2V0RGF0YShldmVudC50YXJnZXQpLFxuICAgICAgICAgICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXAsXG4gICAgICAgICAgICB0eXBlICAgICA6IGV2ZW50LnR5cGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEtleWJvYXJkRXZlbnREYXRhKGV2ZW50KSB7XG4gICAgICAgIGxldCB7YWx0S2V5LCBjb2RlLCBjdHJsS2V5LCBrZXksIGtleUNvZGUsIG1ldGFLZXksIHNoaWZ0S2V5fSA9IGV2ZW50O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICBhbHRLZXksXG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgY3RybEtleSxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGtleUNvZGUsXG4gICAgICAgICAgICBtZXRhS2V5LFxuICAgICAgICAgICAgc2hpZnRLZXlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldE1vdXNlRXZlbnREYXRhKGV2ZW50KSB7XG4gICAgICAgIGxldCB7YWx0S2V5LCBjbGllbnRYLCBjbGllbnRZLCBjdHJsS2V5LCBtZXRhS2V5LCBvZmZzZXRYLCBvZmZzZXRZLCBwYWdlWCwgcGFnZVksIHNjcmVlblgsIHNjcmVlblksIHNoaWZ0S2V5fSA9IGV2ZW50O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICBhbHRLZXksXG4gICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgIGN0cmxLZXksXG4gICAgICAgICAgICBtZXRhS2V5LFxuICAgICAgICAgICAgb2Zmc2V0WCxcbiAgICAgICAgICAgIG9mZnNldFksXG4gICAgICAgICAgICBwYWdlWCxcbiAgICAgICAgICAgIHBhZ2VZLFxuICAgICAgICAgICAgc2NyZWVuWCxcbiAgICAgICAgICAgIHNjcmVlblksXG4gICAgICAgICAgICBzaGlmdEtleVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHtFbGVtZW50W119XG4gICAgICovXG4gICAgZ2V0UGF0aEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHBhdGggPSBbXTtcblxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICB3aGlsZSAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgcGF0aC5wdXNoKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRUYXJnZXREYXRhKG5vZGUpIHtcbiAgICAgICAgbGV0IHIgICAgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdD8uKCksXG4gICAgICAgICAgICByZWN0ID0ge307XG5cbiAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVjdCwge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogci5ib3R0b20sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiByLmhlaWdodCxcbiAgICAgICAgICAgICAgICBsZWZ0ICA6IHIubGVmdCxcbiAgICAgICAgICAgICAgICByaWdodCA6IHIucmlnaHQsXG4gICAgICAgICAgICAgICAgdG9wICAgOiByLnRvcCxcbiAgICAgICAgICAgICAgICB3aWR0aCA6IHIud2lkdGgsXG4gICAgICAgICAgICAgICAgeCAgICAgOiByLngsXG4gICAgICAgICAgICAgICAgeSAgICAgOiByLnlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgICAgOiBub2RlLmNoZWNrZWQsXG4gICAgICAgICAgICBjaGlsZEVsZW1lbnRDb3VudDogbm9kZS5jaGlsZEVsZW1lbnRDb3VudCxcbiAgICAgICAgICAgIGNsaWVudEhlaWdodCAgICAgOiBub2RlLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGNsaWVudExlZnQgICAgICAgOiBub2RlLmNsaWVudExlZnQsXG4gICAgICAgICAgICBjbGllbnRUb3AgICAgICAgIDogbm9kZS5jbGllbnRUb3AsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCAgICAgIDogbm9kZS5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgOiBub2RlLmNsYXNzTGlzdCA/IFsuLi5ub2RlLmNsYXNzTGlzdF0gOiBbXSxcbiAgICAgICAgICAgIGRhdGEgICAgICAgICAgICAgOiB7Li4ubm9kZS5kYXRhc2V0fSxcbiAgICAgICAgICAgIGRyYWdnYWJsZSAgICAgICAgOiBub2RlLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIGhpZGRlbiAgICAgICAgICAgOiBub2RlLmhpZGRlbixcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgOiBOZW8uY29uZmlnLnVzZURvbUlkcyA/IG5vZGUuaWQgOiBub2RlLmRhdGFzZXQ/LlsnbmVvSWQnXSxcbiAgICAgICAgICAgIGluZXJ0ICAgICAgICAgICAgOiBub2RlLmluZXJ0LFxuICAgICAgICAgICAgaXNDb25uZWN0ZWQgICAgICA6IG5vZGUuaXNDb25uZWN0ZWQsXG4gICAgICAgICAgICBpc0NvbnRlbnRFZGl0YWJsZTogbm9kZS5pc0NvbnRlbnRFZGl0YWJsZSxcbiAgICAgICAgICAgIG5vZGVUeXBlICAgICAgICAgOiBub2RlLm5vZGVUeXBlLFxuICAgICAgICAgICAgb2Zmc2V0SGVpZ2h0ICAgICA6IG5vZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0TGVmdCAgICAgICA6IG5vZGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIG9mZnNldFRvcCAgICAgICAgOiBub2RlLm9mZnNldFRvcCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoICAgICAgOiBub2RlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgcmVjdCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCAgICAgOiBub2RlLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQgICAgICAgOiBub2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxUb3AgICAgICAgIDogbm9kZS5zY3JvbGxUb3AsXG4gICAgICAgICAgICBzY3JvbGxXaWR0aCAgICAgIDogbm9kZS5zY3JvbGxXaWR0aCxcbiAgICAgICAgICAgIHN0eWxlICAgICAgICAgICAgOiBub2RlLnN0eWxlPy5jc3NUZXh0LFxuICAgICAgICAgICAgdGFiSW5kZXggICAgICAgICA6IG5vZGUudGFiSW5kZXgsXG4gICAgICAgICAgICB0YWdOYW1lICAgICAgICAgIDogbm9kZS50YWdOYW1lPy50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgdG91Y2ggZXZlbnQgZm91bmQgaW4gdG91Y2hlcyBvciBjaGFuZ2VkVG91Y2hlcyBvZiBhIFRvdWNoRXZlbnRcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybnMge1RvdWNofVxuICAgICAqL1xuICAgIGdldFRvdWNoQ29vcmRzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHt0b3VjaGVzLCBjaGFuZ2VkVG91Y2hlc30gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRvdWNoZXM/LlswXSB8fCBjaGFuZ2VkVG91Y2hlcz8uWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9ubHkgaW4gdXNlIGlmIE5lby5jb25maWcudXNlU2hhcmVkV29ya2VycyA9IHRydWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkJlZm9yZVVubG9hZChldmVudCkge1xuICAgICAgICBsZXQgbWFuYWdlciA9IE5lby53b3JrZXIuTWFuYWdlcjtcblxuICAgICAgICBtYW5hZ2VyLmFwcE5hbWVzLmZvckVhY2goYXBwTmFtZSA9PiB7XG4gICAgICAgICAgICBtYW5hZ2VyLmJyb2FkY2FzdCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICAgICAgICAgIGFwcE5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh7XG4gICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICB2YWxpZDogZXZlbnQudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSxcbiAgICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAobWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpKTtcblxuICAgICAgICBtZS50ZXN0UGF0aEluY2x1c2lvbihldmVudCwgcHJldmVudENsaWNrVGFyZ2V0cykgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgIG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBwcmV2ZW50Q29udGV4dG1lbnVUYXJnZXRzKSAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICB0aGlzLmFkZEdsb2JhbERvbUxpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmZpcmUoJ2RvbUNvbnRlbnRMb2FkZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRvdWJsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChtZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgIG1lLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBwcmV2ZW50Q2xpY2tUYXJnZXRzKSAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ29uRHJhZ092ZXInLCBldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Gb2N1c0luKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uRm9jdXNPdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UoKSB7XG4gICAgICAgIGxldCBtYW5hZ2VyICAgID0gTmVvLndvcmtlci5NYW5hZ2VyLFxuICAgICAgICAgICAgaGFzaFN0cmluZyA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuXG4gICAgICAgIG1hbmFnZXIuc2VuZE1lc3NhZ2UoJ2FwcCcsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2hhc2hDaGFuZ2UnLFxuICAgICAgICAgICAgZGF0YSAgOiB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZXMgIDogbWFuYWdlci5hcHBOYW1lcyxcbiAgICAgICAgICAgICAgICBoYXNoICAgICAgOiB0aGlzLnBhcnNlSGFzaChoYXNoU3RyaW5nKSxcbiAgICAgICAgICAgICAgICBoYXNoU3RyaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRLZXlib2FyZEV2ZW50RGF0YShldmVudCkpO1xuXG4gICAgICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgIT09ICdJTlBVVCcpIHsgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmVvbWpzL25lby9pc3N1ZXMvMTcyOVxuICAgICAgICAgICAgaWYgKFsnQXJyb3dEb3duJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uS2V5VXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0S2V5Ym9hcmRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VFbnRlcihldmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwRXZlbnQgPSB7Li4ubWUuZ2V0TW91c2VFdmVudERhdGEoZXZlbnQpLCBmcm9tRWxlbWVudElkOiBldmVudC5mcm9tRWxlbWVudD8uaWQgfHwgbnVsbH07XG5cbiAgICAgICAgbWUuc2VuZE1lc3NhZ2VUb0FwcChhcHBFdmVudCk7XG4gICAgICAgIG1lLmZpcmUoJ21vdXNlRW50ZXInLCBhcHBFdmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Nb3VzZUxlYXZlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcHBFdmVudCA9IHsuLi5tZS5nZXRNb3VzZUV2ZW50RGF0YShldmVudCksIHRvRWxlbWVudElkOiBldmVudC50b0VsZW1lbnQ/LmlkIHx8IG51bGx9O1xuXG4gICAgICAgIG1lLnNlbmRNZXNzYWdlVG9BcHAoYXBwRXZlbnQpO1xuICAgICAgICBtZS5maXJlKCdtb3VzZUxlYXZlJywgYXBwRXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uTW91c2VVcChldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRNb3VzZUV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uV2hlZWwoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldCAgICAgICAgPSB0aGlzLnRlc3RQYXRoSW5jbHVzaW9uKGV2ZW50LCBnbG9iYWxXaGVlbFRhcmdldHMpLFxuICAgICAgICAgICAgcHJldmVudFVwZGF0ZSA9IGZhbHNlLFxuICAgICAgICAgICAgdGFyZ2V0Q2xzO1xuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldENscyA9IHRhcmdldC5jbHM7XG5cbiAgICAgICAgICAgIGlmIChnbG9iYWxXaGVlbFRhcmdldHNCdWZmZXJbdGFyZ2V0LmNsc10pIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGFzdFdoZWVsRXZlbnQuZGF0ZSAmJiBsYXN0V2hlZWxFdmVudC50YXJnZXQgPT09IHRhcmdldENscyAmJiBkYXRlIC0gbGFzdFdoZWVsRXZlbnQuZGF0ZSA8IGdsb2JhbFdoZWVsVGFyZ2V0c0J1ZmZlclt0YXJnZXRDbHNdKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obGFzdFdoZWVsRXZlbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldENsc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBpZiAoIXByZXZlbnRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBsZXQge2RlbHRhWCwgZGVsdGFZLCBkZWx0YVp9ID0gZXZlbnQ7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAoe1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmdldEV2ZW50RGF0YShldmVudCksXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudEhlaWdodDogdGFyZ2V0Lm5vZGUuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICBjbGllbnRXaWR0aCA6IHRhcmdldC5ub2RlLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBkZWx0YVgsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhWSxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFaLFxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ICA6IHRhcmdldC5ub2RlLnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcCAgIDogdGFyZ2V0Lm5vZGUuc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZ2xvYmFsV2hlZWxUYXJnZXRzS2VlcEV2ZW50LmluY2x1ZGVzKHRhcmdldENscykpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhhbXBsZSBmb3IgQXJyYXkgdmFsdWVzOiBcImNhdGVnb3JpZXNbXT10ZXN0MSZjYXRlZ29yaWVzW109dGVzdDJcIlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHBhcnNlSGFzaChzdHIpIHtcbiAgICAgICAgaWYgKHN0ciA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwaWVjZXMgPSBzdHIuc3BsaXQoJyYnKSxcbiAgICAgICAgICAgIGRhdGEgICA9IHt9LFxuICAgICAgICAgICAgaSwga2V5LCBwYXJ0cywgdmFsdWU7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFydHMgPSBwaWVjZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAga2V5ICAgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMV0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1tdJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnN1YnN0cmluZygwLCBrZXkuaW5kZXhPZignW10nKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVtrZXldLnB1c2godGhpcy5wYXJzZVZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFba2V5XSA9IHRoaXMucGFyc2VWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB1c2VkIGJ5IHBhcnNlSGFzaCB0byBjb252ZXJ0IHRva2VucyBpbnRvIGJvb2xlYW4gb3IgbnVtYmVyIHR5cGVzIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufE51bWJlcnxTdHJpbmd9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHBhcnNlVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IHBhcnNlSW50KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGRhdGEuY2xzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubmFtZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyUHJldmVudERlZmF1bHRUYXJnZXRzKGRhdGEpIHtcbiAgICAgICAgbGV0IHByZXZlbnRBcnJheTtcblxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5jbHMpKSB7XG4gICAgICAgICAgICBkYXRhLmNscyA9IFtkYXRhLmNsc107XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGRhdGEubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgICAgICAgIHByZXZlbnRBcnJheSA9IHByZXZlbnRDbGlja1RhcmdldHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb250ZXh0bWVudSc6XG4gICAgICAgICAgICAgICAgcHJldmVudEFycmF5ID0gcHJldmVudENvbnRleHRtZW51VGFyZ2V0cztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEuY2xzLmZvckVhY2goY2xzID0+IHtcbiAgICAgICAgICAgICFwcmV2ZW50QXJyYXkuaW5jbHVkZXMoY2xzKSAmJiBwcmV2ZW50QXJyYXkucHVzaChjbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgcGFyc2VkIGV2ZW50IGRhdGEgdG8gdGhlIGFwcCB3b3JrZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZVRvQXBwKGRhdGEpIHtcbiAgICAgICAgTmVvLndvcmtlci5NYW5hZ2VyLnNlbmRNZXNzYWdlKCdhcHAnLCB7XG4gICAgICAgICAgICBhY3Rpb24gICA6ICdkb21FdmVudCcsXG4gICAgICAgICAgICBldmVudE5hbWU6IGRhdGEudHlwZSxcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldEFycmF5XG4gICAgICogQHJldHVybnMge09iamVjdHxCb29sZWFufSB0YXJnZXQgY2xzICYgbm9kZSBpZiBmb3VuZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgdGVzdFBhdGhJbmNsdXNpb24oZXZlbnQsIHRhcmdldEFycmF5KSB7XG4gICAgICAgIGxldCBjb3VudFRhcmdldHMgPSB0YXJnZXRBcnJheS5sZW5ndGgsXG4gICAgICAgICAgICBwYXRoICAgICAgICAgPSBldmVudC5wYXRoIHx8IGV2ZW50LmNvbXBvc2VkUGF0aCgpLFxuICAgICAgICAgICAgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgaiwgbm9kZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBub2RlID0gcGF0aFtpXTtcblxuICAgICAgICAgICAgZm9yIChqPTA7IGogPCBjb3VudFRhcmdldHM7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdD8uY29udGFpbnModGFyZ2V0QXJyYXlbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgOiB0YXJnZXRBcnJheVtqXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEb21FdmVudHMpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKERvbUV2ZW50cyk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uLy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIExvZ2ljIHRvIGFwcGx5IHRoZSBkZWx0YXMgZ2VuZXJhdGVkIGJ5IHZkb20uSGVscGVyIHRvIHRoZSByZWFsIERPTVxuICogQGNsYXNzIE5lby5tYWluLm1peGluLkRlbHRhVXBkYXRlc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBEZWx0YVVwZGF0ZXMgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1haW4ubWl4aW4uRGVsdGFVcGRhdGVzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFpbi5taXhpbi5EZWx0YVVwZGF0ZXMnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqL1xuICAgIGR1X2ZvY3VzTm9kZShkZWx0YSkge1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoZGVsdGEuaWQpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbm9kZS5jaGlsZHJlbiBjb250YWlucyB0aGUgXCJyZWFsXCIgbm9kZXMgKHRhZ3MpXG4gICAgICogbm9kZS5jaGlsZE5vZGVzIGNvbnRhaW5zIHRleHRzICYgY29tbWVudHMgYXMgbm9kZXMgdG9vXG4gICAgICogc2luY2UgZXZlcnkgdnR5cGU6J3RleHQnIGlzIHdyYXBwZWQgaW5zaWRlIGEgY29tbWVudCBibG9jayAoYXMgYW4gaWQpLFxuICAgICAqIHdlIG5lZWQgdGhlIGFtb3VudCBvZiBub2RlcyB3aGljaCBhcmUgbm90IGNvbW1lbnRzIHRvIGdldCB0aGUgXCJyZWFsSW5kZXhcIi5cbiAgICAgKiBpbnNlcnRBZGphY2VudEhUTUwoKSBpcyBmYXN0ZXIgdGhhbiBjcmVhdGluZyBhIG5vZGUgKHRlbXBsYXRlKSwgYnV0IG9ubHkgYXZhaWxhYmxlXG4gICAgICogZm9yIGNoaWxkcmVuIGFuZCBub3QgZm9yIGNoaWxkTm9kZXMuXG4gICAgICogSW4gY2FzZSB0aGVyZSBhcmUgbm8gY29tbWVudHMgKD0+IHZ0eXBlOiAndGV4dCcgbm9kZXMpLCB3ZSBzdGljayB0byBpdCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5vdXRlckhUTUxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9pbnNlcnROb2RlKGRlbHRhKSB7XG4gICAgICAgIGxldCBpbmRleCAgICAgICAgID0gZGVsdGEuaW5kZXgsXG4gICAgICAgICAgICBwYXJlbnROb2RlICAgID0gdGhpcy5nZXRFbGVtZW50T3JCb2R5KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGNvdW50Q2hpbGRyZW4gPSBwYXJlbnROb2RlLmNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICByZWFsSW5kZXggICAgID0gaW5kZXgsXG4gICAgICAgICAgICBoYXNDb21tZW50cyAgID0gZmFsc2UsXG4gICAgICAgICAgICBub2RlO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnNlcnROb2RlJywgaW5kZXgsIGNvdW50Q2hpbGRyZW4sIGRlbHRhLnBhcmVudElkKTtcblxuICAgICAgICBpZiAoY291bnRDaGlsZHJlbiA8PSAyMCAmJiBwYXJlbnROb2RlLm5vZGVOYW1lICE9PSAnVEJPRFknKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50Q2hpbGRyZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IDgpIHsgLy8gaWdub3JlIGNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcmVhbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFsSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbW1lbnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0NvbW1lbnRzKSB7XG4gICAgICAgICAgICBjb3VudENoaWxkcmVuID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IDAgJiYgaW5kZXggPj0gY291bnRDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiBpbmRleCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5baW5kZXhdLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudENoaWxkcmVuID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuY2hpbGRyZW5bY291bnRDaGlsZHJlbiAtIDFdLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBkZWx0YS5vdXRlckhUTUwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGVsdGEub3V0ZXJIVE1MKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmh0bWxTdHJpbmdUb0VsZW1lbnQoZGVsdGEub3V0ZXJIVE1MKTtcblxuICAgICAgICAgICAgaWYgKGNvdW50Q2hpbGRyZW4gPiAwICYmIGNvdW50Q2hpbGRyZW4gPiByZWFsSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBwYXJlbnROb2RlLmNoaWxkTm9kZXNbcmVhbEluZGV4XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEuaW5kZXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKi9cbiAgICBkdV9tb3ZlTm9kZShkZWx0YSkge1xuICAgICAgICBsZXQgaW5kZXggICAgICA9IGRlbHRhLmluZGV4LFxuICAgICAgICAgICAgbm9kZSAgICAgICA9IHRoaXMuZ2V0RWxlbWVudChkZWx0YS5pZCksXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gdGhpcy5nZXRFbGVtZW50KGRlbHRhLnBhcmVudElkKTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gcGFyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2luZGV4Kys7IC8vIHRvZG8/OiBpbmNyZWFzZSB0aGUgaW5kZXggaW4gY2FzZSBzYW1lIHBhcmVudCwgb2xkSW5kZXggPCBuZXdJbmRleCwgZGlyZWN0IHN3YXBcbiAgICAgICAgICAgIGlmIChub2RlICYmIHBhcmVudE5vZGUuY2hpbGRyZW5baW5kZXhdLmlkICE9PSBkZWx0YS5pZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHBhcmVudE5vZGUuY2hpbGRyZW5baW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5pZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5wYXJlbnRJZFxuICAgICAqL1xuICAgIGR1X3JlbW92ZU5vZGUoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnQoZGVsdGEuaWQpLFxuICAgICAgICAgICAgcmVnLCBzdGFydFRhZztcblxuICAgICAgICBpZiAoIW5vZGUpIHsgLy8gY291bGQgYmUgYSB2dHlwZTogdGV4dFxuICAgICAgICAgICAgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudE9yQm9keShkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRUYWcgID0gYDwhLS0gJHtkZWx0YS5pZH0gLS0+YDtcbiAgICAgICAgICAgICAgICByZWcgICAgICAgPSBuZXcgUmVnRXhwKHN0YXJ0VGFnICsgJ1tcXFxcc1xcXFxTXSo/PCEtLSBcXC9uZW8tdnRleHQgLS0+Jyk7XG5cbiAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IG5vZGUuaW5uZXJIVE1MLnJlcGxhY2UocmVnLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignZHVfcmVtb3ZlTm9kZTogZG9tIG5vZGUgbm90IGZvdW5kIGZvciBpZCcsIGRlbHRhLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZWx0YS5mcm9tSWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEucGFyZW50SWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVsdGEudG9JZFxuICAgICAqL1xuICAgIGR1X3JlcGxhY2VDaGlsZChkZWx0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUuZ2V0RWxlbWVudChkZWx0YS5wYXJlbnRJZCk7XG5cbiAgICAgICAgbm9kZS5yZXBsYWNlQ2hpbGQobWUuZ2V0RWxlbWVudChkZWx0YS50b0lkKSwgbWUuZ2V0RWxlbWVudChkZWx0YS5mcm9tSWQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmlkXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEudmFsdWVcbiAgICAgKi9cbiAgICBkdV9zZXRUZXh0Q29udGVudChkZWx0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gbWUuZ2V0RWxlbWVudChkZWx0YS5pZCk7XG5cbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IGRlbHRhLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWx0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVsdGEuYXR0cmlidXRlc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmNsc11cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2RlbHRhLmlkXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEuaW5uZXJIVE1MXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZGVsdGEub3V0ZXJIVE1MXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVsdGEuc3R5bGVdXG4gICAgICovXG4gICAgZHVfdXBkYXRlTm9kZShkZWx0YSkge1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudE9yQm9keShkZWx0YS5pZCk7XG5cbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2R1X3VwZGF0ZU5vZGU6IG5vZGUgbm90IGZvdW5kIGZvciBpZCcsIGRlbHRhLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlbHRhKS5mb3JFYWNoKChbcHJvcCwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZvaWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtrZXldID0gdmFsID09PSAndHJ1ZSc7IC8vIHZub2RlIGF0dHJpYnV0ZSB2YWx1ZXMgZ2V0IGNvbnZlcnRlZCBpbnRvIHN0cmluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9ICcnOyAvLyBpbnB1dCBmaWVsZHMgPT4gcHNldWRvIGF0dHJpYnV0ZSBjYW4gbm90IGJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW05lby5jb25maWcudXNlRG9tSWRzID8gJ2lkJyA6ICdkYXRhLW5lby1pZCddID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmIChrZXkgPT09ICdzcGVsbGNoZWNrJyAmJiB2YWwgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZW9tanMvbmVvL2lzc3Vlcy8xOTIyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLnZhbHVlLmFkZCB8fCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoLi4udmFsdWUucmVtb3ZlIHx8IFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbm5lckhUTUwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvdXRlckhUTUwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5vdXRlckhUTUwgPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsKSAmJiB2YWwuaW5jbHVkZXMoJyFpbXBvcnRhbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UoJyFpbXBvcnRhbnQnLCAnJykudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShOZW8uZGVjYW1lbChrZXkpLCB2YWwsICdpbXBvcnRhbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGVbTmVvLmRlY2FtZWwoa2V5KV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlbHRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnBhcmVudElkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbHRhLnZhbHVlXG4gICAgICovXG4gICAgZHVfdXBkYXRlVnRleHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgPSBtZS5nZXRFbGVtZW50KGRlbHRhLnBhcmVudElkKSxcbiAgICAgICAgICAgIGlubmVySFRNTCA9IG5vZGUuaW5uZXJIVE1MLFxuICAgICAgICAgICAgc3RhcnRUYWcgID0gYDwhLS0gJHtkZWx0YS5pZH0gLS0+YCxcbiAgICAgICAgICAgIHJlZyAgICAgICA9IG5ldyBSZWdFeHAoc3RhcnRUYWcgKyAnW1xcXFxzXFxcXFNdKj88IS0tIFxcL25lby12dGV4dCAtLT4nKTtcblxuICAgICAgICBub2RlLmlubmVySFRNTCA9IGlubmVySFRNTC5yZXBsYWNlKHJlZywgZGVsdGEudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIHJlcHJlc2VudGluZyBhIHNpbmdsZSBlbGVtZW50XG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX1cbiAgICAgKi9cbiAgICBodG1sU3RyaW5nVG9FbGVtZW50KGh0bWwpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfSBkYXRhLmRlbHRhc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtkYXRhLm9yaWdpbj0nYXBwJ11cbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhcyA9IGRhdGEuZGVsdGFzLFxuICAgICAgICAgICAgaSAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbjtcblxuICAgICAgICBkZWx0YXMgPSBBcnJheS5pc0FycmF5KGRlbHRhcykgPyBkZWx0YXMgOiBbZGVsdGFzXTtcbiAgICAgICAgbGVuICAgID0gZGVsdGFzLmxlbmd0aDtcblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5sb2dEZWx0YVVwZGF0ZXMgJiYgbGVuID4gMCkge1xuICAgICAgICAgICAgbWUuY291bnREZWx0YXMgKz0gbGVuO1xuICAgICAgICAgICAgbWUuY291bnRVcGRhdGVzKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlICcgKyBtZS5jb3VudFVwZGF0ZXMsICd0b3RhbCBkZWx0YXMgJywgbWUuY291bnREZWx0YXMsIE5lby5jbG9uZShkYXRhLCB0cnVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmVvLmNvbmZpZy5yZW5kZXJDb3VudERlbHRhcyAmJiBsZW4gPiAwKSB7XG4gICAgICAgICAgICBtZS5jb3VudERlbHRhc1BlcjI1MG1zICs9IGxlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICAgIGZvY3VzTm9kZSAgICAgOiBtZS5kdV9mb2N1c05vZGUsXG4gICAgICAgICAgICBpbnNlcnROb2RlICAgIDogbWUuZHVfaW5zZXJ0Tm9kZSxcbiAgICAgICAgICAgIG1vdmVOb2RlICAgICAgOiBtZS5kdV9tb3ZlTm9kZSxcbiAgICAgICAgICAgIHJlbW92ZU5vZGUgICAgOiBtZS5kdV9yZW1vdmVOb2RlLFxuICAgICAgICAgICAgcmVwbGFjZUNoaWxkICA6IG1lLmR1X3JlcGxhY2VDaGlsZCxcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50OiBtZS5kdV9zZXRUZXh0Q29udGVudCxcbiAgICAgICAgICAgIHVwZGF0ZVZ0ZXh0ICAgOiBtZS5kdV91cGRhdGVWdGV4dCxcbiAgICAgICAgICAgIGRlZmF1bHQgICAgICAgOiBtZS5kdV91cGRhdGVOb2RlXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgKG1hcFtkZWx0YXNbaV0uYWN0aW9uXSB8fCBtYXBbJ2RlZmF1bHQnXSkuY2FsbChtZSwgZGVsdGFzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby53b3JrZXIuTWFuYWdlci5zZW5kTWVzc2FnZShkYXRhLm9yaWdpbiB8fCAnYXBwJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIHJlcGx5SWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRGVsdGFVcGRhdGVzKTtcblxuZXhwb3J0IHtEZWx0YVVwZGF0ZXMgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBXaWxsIGdldCBpbXBvcnRlZCBpbiBjYXNlIE5lby5jb25maWcudXNlVG91Y2hFdmVudHMgPT09IHRydWVcbiAqIEBjbGFzcyBOZW8ubWFpbi5taXhpbi5Ub3VjaERvbUV2ZW50c1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBUb3VjaERvbUV2ZW50cyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFpbi5taXhpbi5Ub3VjaERvbUV2ZW50cydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1haW4ubWl4aW4uVG91Y2hEb21FdmVudHMnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hDYW5jZWwoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRvdWNoRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVRvQXBwKHRoaXMuZ2V0RXZlbnREYXRhKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgb25Ub3VjaExlYXZlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2VUb0FwcCh0aGlzLmdldEV2ZW50RGF0YShldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uVG91Y2hTdGFydChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25Ub3VjaFN0YXJ0JywgZXZlbnQpO1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlVG9BcHAodGhpcy5nZXRFdmVudERhdGEoZXZlbnQpKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRvdWNoRG9tRXZlbnRzKTtcblxuZXhwb3J0IHtUb3VjaERvbUV2ZW50cyBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRG9tQWNjZXNzICAgICAgICAgIGZyb20gJy4uL21haW4vRG9tQWNjZXNzLm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRzICAgICAgICAgIGZyb20gJy4uL21haW4vRG9tRXZlbnRzLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBSZW1vdGVNZXRob2RBY2Nlc3MgZnJvbSAnLi9taXhpbi9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcblxuY29uc3QgTmVvQ29uZmlnID0gTmVvLmNvbmZpZyxcbiAgICAgIGRldk1vZGUgICA9IE5lb0NvbmZpZy5lbnZpcm9ubWVudCA9PT0gJ2RldmVsb3BtZW50JztcblxuLyoqXG4gKiBUaGUgd29ya2VyIG1hbmFnZXIgbGl2ZXMgaW5zaWRlIHRoZSBtYWluIHRocmVhZCBhbmQgY3JlYXRlcyB0aGUgQXBwLCBEYXRhICYgVkRvbSB3b3JrZXIuXG4gKiBBbHNvIHJlc3BvbnNpYmxlIGZvciBzZW5kaW5nIG1lc3NhZ2VzIGZyb20gdGhlIG1haW4gdGhyZWFkIHRvIHRoZSBkaWZmZXJlbnQgd29ya2Vycy5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLk1hbmFnZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTWFuYWdlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLk1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuTWFuYWdlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFjdGl2ZVdvcmtlcnM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVXb3JrZXJzOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGFwcE5hbWVzPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGFwcE5hbWVzOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYXNlIHBhdGggZm9yIHRoZSB3b3JrZXIgZmlsZSBVUkxzLCBjYW4gZS5nLiBnZXQgc2V0IGluc2lkZSB0aGUgaW5kZXguaHRtbC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJhc2VQYXRoPU5lby5jb25maWcud29ya2VyQmFzZVBhdGggfHwgJ3dvcmtlci8nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGJhc2VQYXRoOiBOZW9Db25maWcud29ya2VyQmFzZVBhdGggfHwgJ3dvcmtlci8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb25zdHJ1Y3RlZFRocmVhZHM9MFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3RlZFRocmVhZHM6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LlNoYXJlZFdvcmtlci5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hhcmVkV29ya2Vyc0VuYWJsZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2hhcmVkV29ya2Vyc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB0byBzdG9wIHRoZSB3b3JrZXIgY29tbXVuaWNhdGlvbiBpbiBjYXNlIHRoZWlyIGNyZWF0aW9uIGZhaWxzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHN0b3BDb21tdW5pY2F0aW9uPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3BDb21tdW5pY2F0aW9uOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaW4gY2FzZSB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHdpbmRvdy5Xb3JrZXIuXG4gICAgICAgICAqIFRoZSBuZW8ubWpzIGZyYW1ld29yayBpcyBub3QgYWJsZSB0byBydW4gd2l0aG91dCB3ZWIgd29ya2Vycy5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hhcmVkV29ya2Vyc0VuYWJsZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd2ViV29ya2Vyc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGFpbnMgdGhlIGZpbGVOYW1lcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZkb20gd29ya2Vyc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHdvcmtlcnNcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2Vyczoge1xuICAgICAgICAgICAgYXBwOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnQXBwLm1qcycgICAgOiAnYXBwd29ya2VyLmpzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhbnZhczoge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBkZXZNb2RlID8gJ0NhbnZhcy5tanMnIDogJ2NhbnZhc3dvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnRGF0YS5tanMnICAgOiAnZGF0YXdvcmtlci5qcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZG9tOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IGRldk1vZGUgPyAnVkRvbS5tanMnICAgOiAndmRvbXdvcmtlci5qcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmRldGVjdEZlYXR1cmVzKCk7XG5cbiAgICAgICAgIU5lby5pbnNpZGVXb3JrZXIgJiYgbWUuY3JlYXRlV29ya2VycygpO1xuXG4gICAgICAgIE5lby53b3JrZXJJZCA9ICdtYWluJztcblxuICAgICAgICBtZS5wcm9taXNlcyA9IHt9O1xuXG4gICAgICAgIG1lLm9uKHtcbiAgICAgICAgICAgICdtZXNzYWdlOmFkZERvbUxpc3RlbmVyJyAgICA6IHtmbjogRG9tRXZlbnRzLmFkZERvbUxpc3RlbmVyLCAgICAgICBzY29wZTogRG9tRXZlbnRzfSxcbiAgICAgICAgICAgICdtZXNzYWdlOmdldE9mZnNjcmVlbkNhbnZhcyc6IHtmbjogRG9tQWNjZXNzLm9uR2V0T2Zmc2NyZWVuQ2FudmFzLCBzY29wZTogRG9tQWNjZXNzfSxcbiAgICAgICAgICAgICdtZXNzYWdlOnJlYWREb20nICAgICAgICAgICA6IHtmbjogRG9tQWNjZXNzLm9uUmVhZERvbSwgICAgICAgICAgICBzY29wZTogRG9tQWNjZXNzfSxcbiAgICAgICAgICAgICdtZXNzYWdlOnJlZ2lzdGVyUmVtb3RlJyAgICA6IHtmbjogbWUub25SZWdpc3RlclJlbW90ZSwgICAgICAgICAgICBzY29wZTogbWV9LFxuICAgICAgICAgICAgJ21lc3NhZ2U6d29ya2VyQ29uc3RydWN0ZWQnIDoge2ZuOiBtZS5vbldvcmtlckNvbnN0cnVjdGVkLCAgICAgICAgIHNjb3BlOiBtZX1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBtZXNzYWdlIHRvIGVhY2ggd29ya2VyIGRlZmluZWQgaW5zaWRlIHRoZSB0aGlzLndvcmtlcnMgY29uZmlnLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAgICAgKi9cbiAgICBicm9hZGNhc3QobXNnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMud29ya2VycykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgIGlmICghKFxuICAgICAgICAgICAgICAgIG5hbWUgPT09ICdjYW52YXMnICYmICFOZW9Db25maWcudXNlQ2FudmFzV29ya2VyIHx8XG4gICAgICAgICAgICAgICAgbmFtZSA9PT0gJ3Zkb20nICAgJiYgIU5lb0NvbmZpZy51c2VWZG9tV29ya2VyXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShuYW1lLCBtc2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd2ViIHdvcmtlciB1c2luZyB0aGUgcGFzc2VkIG9wdGlvbnMgYXMgd2VsbCBhcyBhZGRpbmcgZXJyb3IgJiBtZXNzYWdlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEByZXR1cm5zIHtTaGFyZWRXb3JrZXJ8V29ya2VyfVxuICAgICAqL1xuICAgIGNyZWF0ZVdvcmtlcihvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWxlTmFtZSA9IG9wdHMuZmlsZU5hbWUsXG4gICAgICAgICAgICBmaWxlUGF0aCA9IChvcHRzLmJhc2VQYXRoIHx8IG1lLmJhc2VQYXRoKSArIGZpbGVOYW1lLFxuICAgICAgICAgICAgbmFtZSAgICAgPSBgbmVvbWpzLSR7ZmlsZU5hbWUuc3Vic3RyaW5nKDAsIGZpbGVOYW1lLmluZGV4T2YoJy4nKSkudG9Mb3dlckNhc2UoKX0td29ya2VyYCxcbiAgICAgICAgICAgIGlzU2hhcmVkID0gbWUuc2hhcmVkV29ya2Vyc0VuYWJsZWQgJiYgTmVvQ29uZmlnLnVzZVNoYXJlZFdvcmtlcnMsXG4gICAgICAgICAgICBjbHMgICAgICA9IGlzU2hhcmVkID8gU2hhcmVkV29ya2VyIDogV29ya2VyLFxuICAgICAgICAgICAgd29ya2VyICAgPSBkZXZNb2RlICAvLyB0b2RvOiBzd2l0Y2ggdG8gdGhlIG5ldyBzeW50YXggdG8gY3JlYXRlIGEgd29ya2VyIGZyb20gYSBKUyBtb2R1bGUgb25jZSBicm93c2VycyBhcmUgcmVhZHlcbiAgICAgICAgICAgICAgICA/IG5ldyBjbHMoZmlsZVBhdGgsIHtuYW1lOiBuYW1lLCB0eXBlOiAnbW9kdWxlJ30pXG4gICAgICAgICAgICAgICAgOiBuZXcgY2xzKGZpbGVQYXRoLCB7bmFtZTogbmFtZX0pO1xuXG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbm1lc3NhZ2UgPSBtZS5vbldvcmtlck1lc3NhZ2UuYmluZChtZSk7XG4gICAgICAgIChpc1NoYXJlZCA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5vbmVycm9yICAgPSBtZS5vbldvcmtlckVycm9yICAuYmluZChtZSk7XG5cbiAgICAgICAgbWUuYWN0aXZlV29ya2VycysrO1xuXG4gICAgICAgIHJldHVybiB3b3JrZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgY3JlYXRlV29ya2VyIGZvciBlYWNoIHdvcmtlciBpbnNpZGUgdGhlIHRoaXMud29ya2VycyBjb25maWcuXG4gICAgICovXG4gICAgY3JlYXRlV29ya2VycygpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzaCA9IGxvY2F0aW9uLmhhc2gsXG4gICAgICAgICAgICBrZXksIHZhbHVlO1xuXG4gICAgICAgIC8vIHBhc3MgdGhlIGluaXRpYWwgaGFzaCB2YWx1ZSBhcyBOZW8uY29uZmlnc1xuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgTmVvQ29uZmlnLmhhc2ggPSB7XG4gICAgICAgICAgICAgICAgaGFzaCAgICAgIDogRG9tRXZlbnRzLnBhcnNlSGFzaChoYXNoLnN1YnN0cigxKSksXG4gICAgICAgICAgICAgICAgaGFzaFN0cmluZzogaGFzaC5zdWJzdHIoMSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZS53b3JrZXJzKSkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NhbnZhcycgJiYgIU5lb0NvbmZpZy51c2VDYW52YXNXb3JrZXIgfHxcbiAgICAgICAgICAgICAgICBrZXkgPT09ICd2ZG9tJyAgICYmICFOZW9Db25maWcudXNlVmRvbVdvcmtlclxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFsdWUud29ya2VyID0gbWUuY3JlYXRlV29ya2VyKHZhbHVlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGU7XG4gICAgICAgICAgICAgICAgbWUuc3RvcENvbW11bmljYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5zZW5kTWVzc2FnZShrZXksIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdyZWdpc3Rlck5lb0NvbmZpZycsXG4gICAgICAgICAgICAgICAgZGF0YSAgOiBOZW9Db25maWdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXRlY3RGZWF0dXJlcygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW9Db25maWcuaGFzVG91Y2hFdmVudHMgPSAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCAobmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcbiAgICAgICAgICAgIG1lLndlYldvcmtlcnNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViIFdvcmtlcnMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh3aW5kb3cuU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICBtZS5zaGFyZWRXb3JrZXJzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xXb3JrZXJ9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7V29ya2VyfVxuICAgICAqL1xuICAgIGdldFdvcmtlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluc3RhbmNlb2YgV29ya2VyID8gbmFtZSA6IHRoaXMud29ya2Vyc1tuYW1lXS53b3JrZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICAgKi9cbiAgICBsb2FkQXBwbGljYXRpb24ocGF0aCkge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCdhcHAnLCB7XG4gICAgICAgICAgICBhY3Rpb24gICAgICAgOiAnbG9hZEFwcGxpY2F0aW9uJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICByZXNvdXJjZXNQYXRoOiBOZW9Db25maWcucmVzb3VyY2VzUGF0aFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uV29ya2VyQ29uc3RydWN0ZWQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmNvbnN0cnVjdGVkVGhyZWFkcysrO1xuXG4gICAgICAgIGlmIChtZS5jb25zdHJ1Y3RlZFRocmVhZHMgPT09IG1lLmFjdGl2ZVdvcmtlcnMpIHtcbiAgICAgICAgICAgIE5lb0NvbmZpZy5hcHBQYXRoICYmIHNldFRpbWVvdXQoKCkgPT4geyAvLyBiZXR0ZXIgc2F2ZSB0aGFuIHNvcnJ5ID0+IGFsbCByZW1vdGVzIG5lZWQgdG8gYmUgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgIG1lLmxvYWRBcHBsaWNhdGlvbihOZW9Db25maWcuYXBwUGF0aCk7XG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIG1ldGhvZCBmb3Igd29ya2VyIGVycm9yIGV2ZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25Xb3JrZXJFcnJvcihlKSB7XG4gICAgICAgIC8vIHN0YXJ0aW5nIGEgd29ya2VyIGZyb20gYSBKUyBtb2R1bGUgd2lsbCBzaG93IEpTIGVycm9ycyBpbiBhIGNvcnJlY3Qgd2F5XG4gICAgICAgICFkZXZNb2RlICYmIGNvbnNvbGUubG9nKCdXb3JrZXIgRXJyb3I6JywgZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlciBtZXRob2QgZm9yIHdvcmtlciBtZXNzYWdlIGV2ZW50c1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25Xb3JrZXJNZXNzYWdlKGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkYXRhICAgICAgICAgPSBlLmRhdGEsXG4gICAgICAgICAgICBkZWxheVByb21pc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIHRyYW5zZmVyICAgICA9IG51bGwsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGNvbnN0IHthY3Rpb24sIGRlc3RpbmF0aW9uOiBkZXN0LCByZXBseUlkfSA9IGRhdGE7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01haW46IEluY29taW5nIFdvcmtlciBtZXNzYWdlOiAnICsgZGF0YS5vcmlnaW4gKyAnOicgKyBhY3Rpb24sIGRhdGEpO1xuXG4gICAgICAgIG1lLmZpcmUoJ21lc3NhZ2U6JythY3Rpb24sIGRhdGEpO1xuXG4gICAgICAgIGlmIChwcm9taXNlID0gYWN0aW9uID09PSAncmVwbHknICYmIG1lLnByb21pc2VzW3JlcGx5SWRdKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5kZXN0aW5hdGlvbiA9PT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEucmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5hdXRvTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmZpcmUoJ2F1dG9tb3VudCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXlQcm9taXNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLnVwZGF0ZVZkb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmZpcmUoJ3VwZGF0ZVZkb20nLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5UHJvbWlzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRlbGF5UHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWUucHJvbWlzZXNbcmVwbHlJZF0uZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWRlbGF5UHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZS5wcm9taXNlc1tyZXBseUlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXN0ICE9PSAnbWFpbicgJiYgYWN0aW9uICE9PSAncmVwbHknKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2Zlcikge1xuICAgICAgICAgICAgICAgIHRyYW5zZmVyID0gW2RhdGEudHJhbnNmZXJdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5wcm9taXNlTWVzc2FnZShkZXN0LCBkYXRhLCB0cmFuc2ZlcikudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2UocmVzcG9uc2UuZGVzdGluYXRpb24sIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgbWUuc2VuZE1lc3NhZ2UoZGF0YS5vcmlnaW4sIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0IDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgIDogZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25seSBuZWVkZWQgZm9yIFNoYXJlZFdvcmtlcnNcbiAgICAgICAgZWxzZSBpZiAoZGVzdCA9PT0gJ21haW4nICYmIGFjdGlvbiA9PT0gJ3JlZ2lzdGVyQXBwTmFtZScpIHtcbiAgICAgICAgICAgIG1lLmFwcE5hbWVzLnB1c2goZGF0YS5hcHBOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGRlc3QgPT09ICdtYWluJyAmJiBhY3Rpb24gPT09ICdyZW1vdGVNZXRob2QnKSB7XG4gICAgICAgICAgICBtZS5vblJlbW90ZU1ldGhvZChkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXN0IGFwcCwgZGF0YSBvciB2ZG9tXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgY29uZmlncyBmb3IgTmVvLndvcmtlci5NZXNzYWdlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyYW5zZmVyXSBBbiBvcHRpb25hbCBhcnJheSBvZiBUcmFuc2ZlcmFibGUgb2JqZWN0cyB0byB0cmFuc2ZlciBvd25lcnNoaXAgb2YuXG4gICAgICogSWYgdGhlIG93bmVyc2hpcCBvZiBhbiBvYmplY3QgaXMgdHJhbnNmZXJyZWQsIGl0IGJlY29tZXMgdW51c2FibGUgKG5ldXRlcmVkKSBpbiB0aGUgY29udGV4dCBpdCB3YXMgc2VudCBmcm9tXG4gICAgICogYW5kIGJlY29tZXMgYXZhaWxhYmxlIG9ubHkgdG8gdGhlIHdvcmtlciBpdCB3YXMgc2VudCB0by5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHByb21pc2VNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbWUuc2VuZE1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpLFxuICAgICAgICAgICAgICAgIG1zZ0lkICAgPSBtZXNzYWdlLmlkO1xuXG4gICAgICAgICAgICBtZS5wcm9taXNlc1ttc2dJZF0gPSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0LFxuICAgICAgICAgICAgICAgIHJlc29sdmVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXBseUlkXG4gICAgICovXG4gICAgcmVzb2x2ZURvbU9wZXJhdGlvblByb21pc2UocmVwbHlJZCkge1xuICAgICAgICBpZiAocmVwbHlJZCkge1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLnByb21pc2VzW3JlcGx5SWRdO1xuXG4gICAgICAgICAgICBpZiAocHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShwcm9taXNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnByb21pc2VzW3JlcGx5SWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlc3QgYXBwLCBkYXRhIG9yIHZkb21cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtOZW8ud29ya2VyLk1lc3NhZ2V9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBtZXNzYWdlLCB3b3JrZXI7XG5cbiAgICAgICAgaWYgKCFtZS5zdG9wQ29tbXVuaWNhdGlvbikge1xuICAgICAgICAgICAgd29ya2VyID0gbWUuZ2V0V29ya2VyKGRlc3QpO1xuXG4gICAgICAgICAgICBpZiAoIXdvcmtlcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIHNlbmRNZXNzYWdlIGZvciBhIHdvcmtlciB0aGF0IGRvZXMgbm90IGV4aXN0OiAnICsgZGVzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9wdHMuZGVzdGluYXRpb24gPSBkZXN0O1xuXG4gICAgICAgICAgICBtZXNzYWdlID0gbmV3IE1lc3NhZ2Uob3B0cyk7XG5cbiAgICAgICAgICAgIChtZS5zaGFyZWRXb3JrZXJzRW5hYmxlZCAmJiBOZW9Db25maWcudXNlU2hhcmVkV29ya2VycyA/IHdvcmtlci5wb3J0IDogd29ya2VyKS5wb3N0TWVzc2FnZShtZXNzYWdlLCB0cmFuc2Zlcik7XG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFuYWdlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTWFuYWdlcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcbiIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuLi9jb3JlL0lkR2VuZXJhdG9yLm1qcyc7XG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciB3b3JrZXIgcG9zdCBtZXNzYWdlcyBzZW50IGJldHdlZW4gdGhlIEFwcCwgRGF0YSwgVkRvbSB3b3JrZXIgJiB0aGUgbWFpbiB0aHJlYWQuXG4gKiBZb3UgY2FuIGFkZCBvcHRpb25hbCBwYXJhbXMgYXMgbmVlZGVkLlxuICogQGNsYXNzIE5lby53b3JrZXIuTWVzc2FnZVxuICovXG5jbGFzcyBNZXNzYWdlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGFjdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZXN0aW5hdGlvbj0nbWFpbidcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9SWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvcmlnaW49TmVvLndvcmtlcklkXG4gICAgICAgICAqL1xuXG4gICAgICAgIGNvbmZpZy5kZXN0aW5hdGlvbiA9IGNvbmZpZy5kZXN0aW5hdGlvbiB8fCAnbWFpbic7XG4gICAgICAgIGNvbmZpZy5pZCAgICAgICAgICA9IGNvbmZpZy5pZCAgICAgICAgICB8fCBJZEdlbmVyYXRvci5nZXRJZChOZW8ud29ya2VySWQpO1xuICAgICAgICBjb25maWcub3JpZ2luICAgICAgPSBjb25maWcub3JpZ2luICAgICAgfHwgTmVvLndvcmtlcklkO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB9XG59XG5cbmNvbnN0IG5zID0gTmVvLm5zKCdOZW8ud29ya2VyJywgdHJ1ZSk7XG5uc1snTWVzc2FnZSddID0gTWVzc2FnZTtcblxuZXhwb3J0IHtNZXNzYWdlIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW4uUmVtb3RlTWV0aG9kQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGluLlJlbW90ZU1ldGhvZEFjY2VzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbi5SZW1vdGVNZXRob2RBY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVtb3RlXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbigqPSwgKj0pOiBQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBvcmlnaW4gPSByZW1vdGUub3JpZ2luO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCBidWZmZXIpIHtcbiAgICAgICAgICAgIGxldCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgICAgIDogJ3JlbW90ZU1ldGhvZCcsXG4gICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZS5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG9wdHMuYXBwTmFtZSB8fCBkYXRhPy5hcHBOYW1lO1xuICAgICAgICAgICAgICAgIG9wdHMucG9ydCAgICA9IG9wdHMucG9ydCAgICB8fCBkYXRhPy5wb3J0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xuICAgICAgICBpZiAocmVtb3RlLmRlc3RpbmF0aW9uID09PSBOZW8ud29ya2VySWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgZXhpc3RzICAgID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbWV0aG9kcyAgID0gcmVtb3RlLm1ldGhvZHMsXG4gICAgICAgICAgICAgICAgcGtnICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3RlLm9yaWdpbiAhPT0gJ21haW4nICYmIHBrZ1ttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIHJlbW90ZSBtZXRob2QgZGVmaW5pdGlvbiAnICsgY2xhc3NOYW1lICsgJy4nICsgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXBrZ1ttZXRob2RdICkge1xuICAgICAgICAgICAgICAgICAgICBwa2dbbWV0aG9kXSA9IG1lLmdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyB0b2RvOiBpbnNwZWN0IGlmIHRoaXMgY2FuIGdldCByZW1vdmVkXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyAmJiBOZW8ud29ya2VySWQgIT09ICdtYWluJykge1xuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ3JlbW90ZXJlZ2lzdGVyZWQnLCByZW1vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqL1xuICAgIG9uUmVtb3RlTWV0aG9kKG1zZykge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHBrZyA9IE5lby5ucyhtc2cucmVtb3RlQ2xhc3NOYW1lKSxcbiAgICAgICAgICAgIG91dCwgbWV0aG9kO1xuXG4gICAgICAgIGlmICghcGtnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG5hbWVzcGFjZSBcIicgKyBtc2cucmVtb3RlQ2xhc3NOYW1lICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2QgPSBwa2dbbXNnLnJlbW90ZU1ldGhvZF07XG5cbiAgICAgICAgaWYgKCFtZXRob2QpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbWV0aG9kIG5hbWUgXCInICsgbXNnLnJlbW90ZU1ldGhvZCArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobXNnLmRhdGEpKSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIC4uLm1zZy5kYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgbXNnLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG91dC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBtZS5yZWplY3QobXNnLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZWplY3RlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlamVjdChtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbXNnLmFwcE5hbWU7XG4gICAgICAgICAgICBvcHRzLnBvcnQgICAgPSBtc2cucG9ydDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwgb3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVzb2x2ZShtc2csIGRhdGEpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICBvcHRzLmFwcE5hbWUgPSBtc2cuYXBwTmFtZTtcbiAgICAgICAgICAgIG9wdHMucG9ydCAgICA9IG1zZy5wb3J0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCBvcHRzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XG5cbmV4cG9ydCB7UmVtb3RlTWV0aG9kQWNjZXNzIGFzIGRlZmF1bHR9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiY2h1bmtzL21haW4vXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIm5lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbmVvX21qc19yZWFsd29ybGRfZXhhbXBsZV9hcHBcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbmVvX21qc19yZWFsd29ybGRfZXhhbXBsZV9hcHBcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCBOZW8gICAgICAgICAgIGZyb20gJy4vTmVvLm1qcyc7XG5pbXBvcnQgKiBhcyBjb3JlICAgICBmcm9tICcuL2NvcmUvX2V4cG9ydC5tanMnO1xuaW1wb3J0IERvbUFjY2VzcyAgICAgZnJvbSAnLi9tYWluL0RvbUFjY2Vzcy5tanMnO1xuaW1wb3J0IERvbUV2ZW50cyAgICAgZnJvbSAnLi9tYWluL0RvbUV2ZW50cy5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgZnJvbSAnLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBXb3JrZXJNYW5hZ2VyIGZyb20gJy4vd29ya2VyL01hbmFnZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLk1haW5cbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgTWFpbiBleHRlbmRzIGNvcmUuQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5NYWluJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uTWFpbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG1vZGU9J3JlYWQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZGU6ICdyZWFkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gb3BlbldpbmRvd3M9e31cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgb3BlbldpbmRvd3M6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHJlYWRRdWV1ZT1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkUXVldWU6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWy8vLi4uXX1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlOiB7XG4gICAgICAgICAgICBhcHA6IFtcbiAgICAgICAgICAgICAgICAnYWxlcnQnLFxuICAgICAgICAgICAgICAgICdlZGl0Um91dGUnLFxuICAgICAgICAgICAgICAgICdnZXRXaW5kb3dEYXRhJyxcbiAgICAgICAgICAgICAgICAnc2V0TmVvQ29uZmlnJyxcbiAgICAgICAgICAgICAgICAnc2V0Um91dGUnLFxuICAgICAgICAgICAgICAgICd3aW5kb3dDbG9zZScsXG4gICAgICAgICAgICAgICAgJ3dpbmRvd01vdmVUbycsXG4gICAgICAgICAgICAgICAgJ3dpbmRvd09wZW4nLFxuICAgICAgICAgICAgICAgICd3aW5kb3dSZXNpemVUbydcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJ1bm5pbmc9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcnVubmluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93RnBzPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93RnBzOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdGltZUxpbWl0PTE1XG4gICAgICAgICAqL1xuICAgICAgICB0aW1lTGltaXQ6IDE1LFxuICAgICAgICAvKipcbiAgICAgICAgICogc2hvdWxkIGJlIGRldiBvbmx5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdG90YWxGcmFtZUNvdW50PTBcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdG90YWxGcmFtZUNvdW50OiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHVwZGF0ZVF1ZXVlPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZVF1ZXVlOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB3cml0ZVF1ZXVlPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHdyaXRlUXVldWU6IFtdXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbih7XG4gICAgICAgICAgICAnYXV0b21vdW50JyAgICAgICAgOiBtZS5vblJlbmRlcixcbiAgICAgICAgICAgICdtZXNzYWdlOm1vdW50RG9tJyA6IG1lLm9uTW91bnREb20sXG4gICAgICAgICAgICAnbWVzc2FnZTp1cGRhdGVEb20nOiBtZS5vblVwZGF0ZURvbSxcbiAgICAgICAgICAgICd1cGRhdGVWZG9tJyAgICAgICA6IG1lLm9uVXBkYXRlVmRvbSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERvbUV2ZW50cy5vbignZG9tQ29udGVudExvYWRlZCcsIG1lLm9uRG9tQ29udGVudExvYWRlZCwgbWUpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgICAgIERvbUV2ZW50cy5vbkRvbUNvbnRlbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdvcmtlcnMgY2FuIG5vdCB0cmlnZ2VyIGFsZXJ0KCksIHNvIHdlIG5lZWQgcmVtb3RlIG1ldGhvZCBhY2Nlc3MuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgYWxlcnQodmFsdWUpIHtcbiAgICAgICAgYWxlcnQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVkaXQgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcbiAgICAgKiBBIHZhbHVlIG9mIG51bGwgd2lsbCByZW1vdmUgdGhlIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGVkaXRSb3V0ZShkYXRhKSB7XG4gICAgICAgIGxldCBoYXNoT2JqID0gRG9tRXZlbnRzLnBhcnNlSGFzaCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpLFxuICAgICAgICAgICAgaGFzaEFyciA9IFtdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRhdGEgPSBEb21FdmVudHMucGFyc2VIYXNoKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihoYXNoT2JqLCBkYXRhKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyhoYXNoT2JqKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGhhc2hBcnIucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hBcnIuam9pbignJicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHdpbmRvdy5zY3JlZW4gaXMgbm90IHNwcmVhZGFibGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFdpbmRvd0RhdGEoKSB7XG4gICAgICAgIGNvbnN0IHdpbiAgICA9IHdpbmRvdyxcbiAgICAgICAgICAgICAgc2NyZWVuID0gd2luLnNjcmVlbjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IHdpbi5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIGlubmVyV2lkdGggOiB3aW4uaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIG91dGVySGVpZ2h0OiB3aW4ub3V0ZXJIZWlnaHQsXG4gICAgICAgICAgICBvdXRlcldpZHRoIDogd2luLm91dGVyV2lkdGgsXG4gICAgICAgICAgICBzY3JlZW46IHtcbiAgICAgICAgICAgICAgICBhdmFpbEhlaWdodDogc2NyZWVuLmF2YWlsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIGF2YWlsTGVmdCAgOiBzY3JlZW4uYXZhaWxMZWZ0LFxuICAgICAgICAgICAgICAgIGF2YWlsVG9wICAgOiBzY3JlZW4uYXZhaWxUb3AsXG4gICAgICAgICAgICAgICAgYXZhaWxXaWR0aCA6IHNjcmVlbi5hdmFpbFdpZHRoLFxuICAgICAgICAgICAgICAgIGNvbG9yRGVwdGggOiBzY3JlZW4uY29sb3JEZXB0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgIDogc2NyZWVuLmhlaWdodCxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjoge2FuZ2xlOiBzY3JlZW4ub3JpZW50YXRpb24uYW5nbGUsIHR5cGU6IHNjcmVlbi5vcmllbnRhdGlvbi50eXBlfSxcbiAgICAgICAgICAgICAgICBwaXhlbERlcHRoIDogc2NyZWVuLnBpeGVsRGVwdGgsXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICA6IHNjcmVlbi53aWR0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcmVlbkxlZnQ6IHdpbi5zY3JlZW5MZWZ0LFxuICAgICAgICAgICAgc2NyZWVuVG9wIDogd2luLnNjcmVlblRvcCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB0b2RvOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvcmVzaXplXG4gICAgZ2xvYmFsUmVzaXplTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbFJlc2l6ZUxpc3RlbmVyJywgZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYXN5bmMgb25Eb21Db250ZW50TG9hZGVkKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgID0gTmVvLmNvbmZpZyxcbiAgICAgICAgICAgIGltcG9ydHMgPSBbXTtcblxuICAgICAgICBEb21BY2Nlc3Mub25Eb21Db250ZW50TG9hZGVkKCk7XG5cbiAgICAgICAgLy8gbm90IGluIHVzZSByaWdodCBub3dcbiAgICAgICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG1lLmdsb2JhbFJlc2l6ZUxpc3RlbmVyLmJpbmQobWUpKTtcblxuICAgICAgICAvLyB3ZSBuZWVkIGRpZmZlcmVudCBwdWJsaWNQYXRoIHZhbHVlcyBmb3IgdGhlIG1haW4gdGhyZWFkIGluc2lkZSB0aGUgd2VicGFjayBiYXNlZCBkaXN0IGVudnMsXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB0aGUgaGllcmFyY2h5IGxldmVsIG9mIHRoZSBhcHAgZW50cnkgcG9pbnRcbiAgICAgICAgaWYgKGNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gY29uZmlnLmJhc2VQYXRoLnN1YnN0cmluZyg2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5tYWluVGhyZWFkQWRkb25zLmZvckVhY2goYWRkb24gPT4ge1xuICAgICAgICAgICAgaWYgKGFkZG9uICE9PSAnQW5hbHl0aWNzQnlHb29nbGUnKSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydChgLi9tYWluL2FkZG9uLyR7YWRkb259Lm1qc2ApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW50ZW5kZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXMgd2hlcmUgd2UgbmVlZCBhbiBlYXN5IHdheSB0byBhZGQgR0EgdG8gZXZlcnkgZ2VuZXJhdGVkIGFwcFxuICAgICAgICBpZiAoY29uZmlnLnVzZUdvb2dsZUFuYWx5dGljcyB8fCBjb25maWcubWFpblRocmVhZEFkZG9ucy5pbmNsdWRlcygnQW5hbHl0aWNzQnlHb29nbGUnKSkge1xuICAgICAgICAgICAgaW1wb3J0cy5wdXNoKGltcG9ydCgnLi9tYWluL2FkZG9uL0FuYWx5dGljc0J5R29vZ2xlLm1qcycpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpbXBvcnRzKTtcblxuICAgICAgICBtZS5hZGRvbiA9IHt9O1xuXG4gICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgbWUuYWRkb25bbW9kdWxlLmRlZmF1bHQuY29uc3RydWN0b3IubmFtZV0gPSBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgV29ya2VyTWFuYWdlci5vbldvcmtlckNvbnN0cnVjdGVkKHtcbiAgICAgICAgICAgIG9yaWdpbjogJ21haW4nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgb25Nb3VudERvbShkYXRhKSB7XG4gICAgICAgIHRoaXMucXVldWVXcml0ZShkYXRhKTtcblxuICAgICAgICBXb3JrZXJNYW5hZ2VyLnNlbmRNZXNzYWdlKGRhdGEub3JpZ2luIHx8ICdhcHAnLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgcmVwbHlJZDogZGF0YS5pZCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBvblJlbmRlcihkYXRhKSB7XG4gICAgICAgIGRhdGEuZGF0YS5yZXBseUlkID0gZGF0YS5yZXBseUlkO1xuICAgICAgICB0aGlzLnF1ZXVlV3JpdGUoZGF0YS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG9uVXBkYXRlRG9tKGRhdGEpIHtcbiAgICAgICAgdGhpcy5xdWV1ZVVwZGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG9uVXBkYXRlVmRvbShkYXRhKSB7XG4gICAgICAgIGRhdGEuZGF0YS5yZXBseUlkID0gZGF0YS5yZXBseUlkO1xuICAgICAgICB0aGlzLnF1ZXVlVXBkYXRlKGRhdGEuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gcXVldWVcbiAgICAgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0XG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcHJvY2Vzc1F1ZXVlKHF1ZXVlLCBzdGFydCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgbGltaXQgPSBtZS50aW1lTGltaXQsXG4gICAgICAgICAgICBvcGVyYXRpb247XG5cbiAgICAgICAgd2hpbGUgKG9wZXJhdGlvbiA9IHF1ZXVlLnNoaWZ0KCkpIHtcbiAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpIC0gc3RhcnQgPiBsaW1pdCkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnVuc2hpZnQob3BlcmF0aW9uKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRG9tQWNjZXNzW21lLm1vZGVdKG9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgV29ya2VyTWFuYWdlci5yZXNvbHZlRG9tT3BlcmF0aW9uUHJvbWlzZShvcGVyYXRpb24ucmVwbHlJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBxdWV1ZVJlYWQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS5yZWFkUXVldWUucHVzaChkYXRhKTtcblxuICAgICAgICBpZiAoIW1lLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHF1ZXVlVXBkYXRlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgbWUudXBkYXRlUXVldWUucHVzaChkYXRhKTtcblxuICAgICAgICBpZiAoIW1lLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIG1lLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG1lLnJlbmRlckZyYW1lLmJpbmQobWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHF1ZXVlV3JpdGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS53cml0ZVF1ZXVlLnB1c2goZGF0YSk7XG5cbiAgICAgICAgaWYgKCFtZS5ydW5uaW5nKSB7XG4gICAgICAgICAgICBtZS5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtZS5yZW5kZXJGcmFtZS5iaW5kKG1lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgZGlmZmVyZW50IERPTSBvcGVyYXRpb24gcXVldWVzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbmRlckZyYW1lKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZWFkICAgID0gbWUucmVhZFF1ZXVlLFxuICAgICAgICAgICAgdXBkYXRlICA9IG1lLnVwZGF0ZVF1ZXVlLFxuICAgICAgICAgICAgd3JpdGUgICA9IG1lLndyaXRlUXVldWUsXG4gICAgICAgICAgICByZWFkaW5nID0gbWUubW9kZSA9PT0gJ3JlYWQnLFxuICAgICAgICAgICAgc3RhcnQgICA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcubG9nRGVsdGFVcGRhdGVzKSB7XG4gICAgICAgICAgICBtZS50b3RhbEZyYW1lQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb3RhbCBGcmFtZXM6ICcgKyBtZS50b3RhbEZyYW1lQ291bnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlYWRpbmcgfHwgIXdyaXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgbWUubW9kZSA9ICdyZWFkJztcbiAgICAgICAgICAgIGlmIChtZS5wcm9jZXNzUXVldWUocmVhZCwgc3RhcnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1lLm1vZGUgPSAndXBkYXRlJztcbiAgICAgICAgICAgIGlmIChtZS5wcm9jZXNzUXVldWUodXBkYXRlLCBzdGFydCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod3JpdGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBtZS5tb2RlID0gJ3dyaXRlJztcbiAgICAgICAgICAgIGlmIChtZS5wcm9jZXNzUXVldWUod3JpdGUsIHN0YXJ0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmtleVxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldE5lb0NvbmZpZyhkYXRhKSB7XG4gICAgICAgIE5lby5jb25maWdbZGF0YS5rZXldID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGxvY2F0aW9uLmhhc2ggdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnZhbHVlXG4gICAgICovXG4gICAgc2V0Um91dGUoZGF0YSkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGRhdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHBvcHVwIHdpbmRvd3NcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBkYXRhLm5hbWVzXG4gICAgICovXG4gICAgd2luZG93Q2xvc2UoZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5uYW1lcykpIHtcbiAgICAgICAgICAgIGRhdGEubmFtZXMgPSBbZGF0YS5uYW1lc107XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLm5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5XaW5kb3dzW25hbWVdLmNsb3NlKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5vcGVuV2luZG93c1tuYW1lXTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlIGEgcG9wdXAgd2luZG93XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS53aW5kb3dOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEueFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLnlcbiAgICAgKi9cbiAgICB3aW5kb3dNb3ZlVG8oZGF0YSkge1xuICAgICAgICB0aGlzLm9wZW5XaW5kb3dzW2RhdGEud2luZG93TmFtZV0ubW92ZVRvKGRhdGEueCwgZGF0YS55KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGEgbmV3IHBvcHVwIHdpbmRvd1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudXJsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEud2luZG93RmVhdHVyZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS53aW5kb3dOYW1lXG4gICAgICovXG4gICAgd2luZG93T3BlbihkYXRhKSB7XG4gICAgICAgIHRoaXMub3BlbldpbmRvd3NbZGF0YS53aW5kb3dOYW1lXSA9IHdpbmRvdy5vcGVuKGRhdGEudXJsLCBkYXRhLndpbmRvd05hbWUsIGRhdGEud2luZG93RmVhdHVyZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmUgYSBwb3B1cCB3aW5kb3dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGF0YS5oZWlnaHRdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtkYXRhLndpZHRoXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLndpbmRvd05hbWVcbiAgICAgKi9cbiAgICB3aW5kb3dSZXNpemVUbyhkYXRhKSB7XG4gICAgICAgIGxldCB3aW4gICAgPSB0aGlzLm9wZW5XaW5kb3dzW2RhdGEud2luZG93TmFtZV0sXG4gICAgICAgICAgICBoZWlnaHQgPSBkYXRhLmhlaWdodCB8fCB3aW4ub3V0ZXJIZWlnaHQsXG4gICAgICAgICAgICB3aWR0aCAgPSBkYXRhLndpZHRoICB8fCB3aW4ub3V0ZXJXaWR0aDtcblxuICAgICAgICB3aW4ucmVzaXplVG8od2lkdGgsIGhlaWdodCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShNYWluKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["docs_app_mjs"],{

/***/ "./docs/app.mjs":
/*!**********************!*\
  !*** ./docs/app.mjs ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onStart": () => (/* binding */ onStart)
/* harmony export */ });
/* harmony import */ var _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/view/MainContainer.mjs */ "./docs/app/view/MainContainer.mjs");


const onStart = () => Neo.app({
    mainView: _app_view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'Docs'
});



/***/ }),

/***/ "./docs/app/model/Api.mjs":
/*!********************************!*\
  !*** ./docs/app/model/Api.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Api
 * @extends Neo.data.Model
 */
class Api extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.model.Api'
         * @protected
         */
        className: 'Docs.app.model.Api',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'className',
            type: 'String'
        }, {
            name: 'collapsed',
            type: 'Boolean'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'path',
            type: 'String'
        }, {
            name: 'singleton',
            type: 'Boolean'
        }, {
            name: 'srcPath',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Api);



/***/ }),

/***/ "./docs/app/model/Example.mjs":
/*!************************************!*\
  !*** ./docs/app/model/Example.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Example
 * @extends Neo.data.Model
 */
class Example extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.model.Example'
         * @protected
         */
        className: 'Docs.app.model.Example',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'collapsed', // optional, only needed for collapsed non leaf items
            type: 'Boolean'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'path',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Example);



/***/ }),

/***/ "./docs/app/model/Tutorial.mjs":
/*!*************************************!*\
  !*** ./docs/app/model/Tutorial.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tutorial)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Tutorial
 * @extends Neo.data.Model
 */
class Tutorial extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.model.Tutorial'
         * @protected
         */
        className: 'Docs.app.model.Tutorial',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'fileName',
            type: 'String'
        }, {
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'type',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Tutorial);



/***/ }),

/***/ "./docs/app/store/Api.mjs":
/*!********************************!*\
  !*** ./docs/app/store/Api.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _model_Api_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Api.mjs */ "./docs/app/model/Api.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Api
 * @extends Neo.data.Store
 */
class Api extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.store.Api'
         * @protected
         */
        className: 'Docs.app.store.Api',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=ApiModel
         */
        model: _model_Api_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}
}

Neo.applyClassConfig(Api);



/***/ }),

/***/ "./docs/app/store/Examples.mjs":
/*!*************************************!*\
  !*** ./docs/app/store/Examples.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Examples)
/* harmony export */ });
/* harmony import */ var _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Example.mjs */ "./docs/app/model/Example.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Examples
 * @extends Neo.data.Store
 */
class Examples extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.store.Examples'
         * @protected
         */
        className: 'Docs.app.store.Examples',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Example
         */
        model: _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}
}

Neo.applyClassConfig(Examples);



/***/ }),

/***/ "./docs/app/store/Tutorials.mjs":
/*!**************************************!*\
  !*** ./docs/app/store/Tutorials.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tutorials)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _model_Tutorial_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Tutorial.mjs */ "./docs/app/model/Tutorial.mjs");



/**
 * @class Docs.app.store.Tutorials
 * @extends Neo.data.Store
 */
class Tutorials extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.app.store.Tutorials'
         * @protected
         */
        className: 'Docs.app.store.Tutorials',
        /**
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * @member {Neo.data.Model} model=Tutorial
         */
        model: _model_Tutorial_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
    }}
}

Neo.applyClassConfig(Tutorials);



/***/ }),

/***/ "./docs/app/view/ApiTreeList.mjs":
/*!***************************************!*\
  !*** ./docs/app/view/ApiTreeList.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiTreeList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _store_Api_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Api.mjs */ "./docs/app/store/Api.mjs");



/**
 * @class Docs.view.ApiTreeList
 * @extends Neo.tree.List
 */
class ApiTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.ApiTreeList'
         * @protected
         */
        className: 'Docs.view.ApiTreeList',
        /**
         * @member {String} ntype='api-treelist'
         * @protected
         */
        ntype: 'api-treelist',
        /**
         * @member {Neo.data.Store|null} store=ApiStore
         * @protected
         */
        store: _store_Api_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/structure.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.data = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ApiTreeList);




/***/ }),

/***/ "./docs/app/view/ContentTabContainer.mjs":
/*!***********************************************!*\
  !*** ./docs/app/view/ContentTabContainer.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentTabContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");



/**
 * @class Docs.view.ContentTabContainer
 * @extends Neo.tab.Container
 */
class ContentTabContainer extends _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.ContentTabContainer'
         * @protected
         */
        className: 'Docs.view.ContentTabContainer',
        /**
         * @member {String} ntype='docs-content-tabcontainer'
         * @protected
         */
        ntype: 'docs-content-tabcontainer',
        /**
         * @member {Boolean} activateInsertedTabs=true
         */
        activateInsertedTabs: true,
        /**
         * @member {Object} contentContainerDefaults={cls:[//...]}
         */
        contentContainerDefaults: {
            cls: [
                'neo-docs-tab-content-container',
                'neo-tab-content-container',
                'neo-container'
            ]
        },
        /**
         * @member {Object} headerToolbarDefaults={cls:[//...]}
         */
        headerToolbarDefaults: {
            cls: [
                'docs-tab-header-toolbar',
                'neo-tab-header-toolbar',
                'neo-toolbar'
            ]
        },
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype: 'component',
            html : 'Welcome to the neo.mjs docs!',
            style: {padding: '20px'},

            tabButtonConfig: {
                iconCls: 'fa fa-users',
                text   : 'Welcome!'
            }
        }],
        /**
         * @member {Boolean} sortable=true
         */
        sortable: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me  = this,
            cls = me.cls;

        cls.unshift('docs-content-tabcontainer');
        me.cls = cls;
    }

    /**
     * Overriding the button click listener to allow closing tabs on icon click
     * @param {Object} config
     * @param {Number} index
     * @returns {Object} The merged config
     * @protected
     * @override
     */
    getTabButtonConfig(config, index) {
        let me = this,
            defaultConfig = {
                module : _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: [{
                    click: function(data) {
                        let path = data.path.map(e => e.id);

                        if (path[0].indexOf('neo-tab-header-button-') === 0) {
                            me.activeIndex = data.component.index;
                        } else {
                            me.removeAt(Neo.getComponent(me.tabBarId).indexOf(path[1]))
                        }
                    },
                    scope: me
                }]
            };

        return {...defaultConfig, ...config};
    }
}

Neo.applyClassConfig(ContentTabContainer);




/***/ }),

/***/ "./docs/app/view/ExamplesTreeList.mjs":
/*!********************************************!*\
  !*** ./docs/app/view/ExamplesTreeList.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ExamplesTreeList)
/* harmony export */ });
/* harmony import */ var _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Examples.mjs */ "./docs/app/store/Examples.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");



/**
 * @class Docs.view.ExamplesTreeList
 * @extends Neo.tree.List
 */
class ExamplesTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.ExamplesTreeList'
         * @protected
         */
        className: 'Docs.view.ExamplesTreeList',
        /**
         * @member {String} ntype='examples-treelist'
         * @protected
         */
        ntype: 'examples-treelist',
        /**
         * @member {String[]} cls=['docs-examples-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-examples-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ],
        /**
         * @member {Neo.data.Store|null} store=ExamplesStore
         * @protected
         */
        store: _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/examples.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.data = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(ExamplesTreeList);




/***/ }),

/***/ "./docs/app/view/HeaderContainer.mjs":
/*!*******************************************!*\
  !*** ./docs/app/view/HeaderContainer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");




/**
 * @class Docs.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.HeaderContainer'
         * @protected
         */
        className: 'Docs.view.HeaderContainer',
        /**
         * @member {String} ntype='header-container'
         * @protected
         */
        ntype: 'neo-docs-header-container',
        /**
         * @member {String[]} cls=['neo-docs-header-container']
         */
        cls: ['neo-docs-header-container'],
        /**
         * @member {Number} height=55
         */
        height: 55,
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items=[//...]
         */
        items: [{
            module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            listeners      : {change: 'onNavigationSearchFieldChange'},
            placeholderText: 'Filter Navigation',
            style          : {padding: '10px'},
            width          : 240
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            domListeners: {click: 'onSwitchThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'theme-button',
            style       : {marginTop: '5px'},
            text        : 'Theme Dark'
        }, {
            module      : _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            domListeners: {click: 'onSwitchSourceViewThemeButtonClick'},
            flex        : 'none',
            height      : 27,
            reference   : 'source-view-theme-button',
            style       : {marginLeft: '10px', marginTop: '5px'},
            text        : 'Source View Theme Dark'
        }, {
            ntype: 'component',
            flex : 1
        }, {
            ntype: 'component',
            cls  : ['neo-logo-text'],
            html : 'neo.mjs docs',
            width: 210
        }]
    }}
}

Neo.applyClassConfig(HeaderContainer);




/***/ }),

/***/ "./docs/app/view/MainContainer.mjs":
/*!*****************************************!*\
  !*** ./docs/app/view/MainContainer.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
/* harmony import */ var _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiTreeList.mjs */ "./docs/app/view/ApiTreeList.mjs");
/* harmony import */ var _classdetails_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classdetails/MainContainer.mjs */ "./docs/app/view/classdetails/MainContainer.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentTabContainer.mjs */ "./docs/app/view/ContentTabContainer.mjs");
/* harmony import */ var _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExamplesTreeList.mjs */ "./docs/app/view/ExamplesTreeList.mjs");
/* harmony import */ var _HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderContainer.mjs */ "./docs/app/view/HeaderContainer.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/MainContainerController.mjs");
/* harmony import */ var _classdetails_SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classdetails/SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");
/* harmony import */ var _classdetails_TutorialComponent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classdetails/TutorialComponent.mjs */ "./docs/app/view/classdetails/TutorialComponent.mjs");
/* harmony import */ var _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TutorialsTreeList.mjs */ "./docs/app/view/TutorialsTreeList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");












/**
 * @class Docs.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_10__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.MainContainer'
         * @protected
         */
        className: 'Docs.view.MainContainer',
        /**
         * @member {String} ntype='main-container'
         * @protected
         */
        ntype: 'main-container',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount : true,
        /**
         * @member {String[]} cls=['neo-docs-maincontainer', 'neo-viewport']
         */
        cls: ['neo-docs-maincontainer', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Neo.collection.Base|null} store_=null
         */
        store_: null,
        /**
         * @member {Array} items=[//...]
         */
        items: [_HeaderContainer_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            ntype : 'container',
            flex  : 1,
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                ntype   : 'tab-container',
                cls     : ['neo-docs-navigation-tab-container', 'neo-tab-container'],
                minWidth: 290,
                sortable: true,
                width   : 290,

                items: [{
                    module   : _ApiTreeList_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    listeners: {leafItemClick: 'onApiListLeafClick'},
                    reference: 'api-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : 'API'
                    }
                }, {
                    module   : _TutorialsTreeList_mjs__WEBPACK_IMPORTED_MODULE_9__["default"],
                    listeners: {leafItemClick: 'onTutorialListLeafClick'},
                    reference: 'tutorials-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-hands-helping',
                        text   : 'Tutorials'
                    }
                }, {
                    module   : _ExamplesTreeList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
                    listeners: {leafItemClick: 'onExamplesListLeafClick'},
                    reference: 'examples-treelist',

                    tabButtonConfig: {
                        iconCls: 'fa fa-desktop',
                        text   : 'Examples'
                    }
                }]
            }, {
                module   : _ContentTabContainer_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
                flex     : 1,
                reference: 'content-tabcontainer'
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        if (!me.store) {
            me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
                keyProperty: 'id'
            });
        }

        // Disable the examples Tab for dist versions until the webpack builds can handle this (see: #140)
        me.items[1].items[0].items[2].tabButtonConfig.disabled = Neo.config.environment !== 'development';
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/all.json'
        }).then(data => {
            me.store.items = data.json;
        });
    }
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./docs/app/view/MainContainerController.mjs":
/*!***************************************************!*\
  !*** ./docs/app/view/MainContainerController.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.MainContainerController'
         * @protected
         */
        className: 'Docs.view.MainContainerController',
        /**
         * @member {String} ntype='docs-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-maincontainer-controller'
    }}

    /**
     *
     * @param {Object} record
     */
    onApiListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype        : 'classdetails-maincontainer',
            id           : record.className,
            structureData: record,

            tabButtonConfig: {
                iconCls: record.singleton ? 'fa fa-arrow-alt-circle-right' : 'fa fa-copyright',
                text   : record.name
            }
        });
    }

    /**
     *
     * @param {Object} record
     */
    onExamplesListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer'),
            name                = record.name,
            pathArray           = [],
            store               = me.getReference('examples-treelist').store,
            tmpRecord           = record,
            tabButtonConfig;

        while (tmpRecord.parentId !== null) {
            tmpRecord = store.get(tmpRecord.parentId);
            name      = tmpRecord.name + '.' + name;
        }

        name = 'examples_' + name;

        tabButtonConfig = {
            iconCls: 'fa fa-desktop',
            text   : record.name
        };

        if (!Array.isArray(record.path)) {
            import(
                /* webpackIgnore: true */
                record.path).then((module) => {
                    contentTabContainer.add({
                        module         : module.default,
                        id             : name,
                        tabButtonConfig: tabButtonConfig
                    });
                }
            );
        } else {
            record.path.forEach(path => {
                pathArray.push(import(/* webpackIgnore: true */ path));
            });

            Promise.all(pathArray).then(function(modules) {
                let items = [];

                modules.forEach(module => {
                    items.push({
                        module: module.default
                    });
                });

                contentTabContainer.add({
                    ntype          : 'container',
                    id             : name,
                    items          : items,
                    style          : {padding: '10px'},
                    tabButtonConfig: tabButtonConfig
                });
            })
        }
    }

    /**
     *
     * @param {Object} value
     * @param {Object} oldValue
     */
    onHashChange(value, oldValue) {
        let me                  = this,
            hash                = value && value.hash,
            contentTabContainer = me.getReference('content-tabcontainer'),
            structureStore      = me.getReference('api-treelist').store,
            record, tab;

        if (hash && hash.hasOwnProperty('viewSource')) {
            record = structureStore.find('className', hash.viewSource)[0];

            if (record) {
                tab = contentTabContainer.add({
                    ntype        : 'classdetails-sourceviewcomponent',
                    id           : hash.viewSource + '__source',
                    line         : hash.line,
                    structureData: record,

                    tabButtonConfig: {
                        iconCls: 'fa fa-code',
                        text   : record.name
                    }
                });

                // adjust the highlighted line for already added source view tabs
                tab.line = hash.line;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    onNavigationSearchFieldChange(data) {
        let me    = this,
            value = data.value;

        me.getReference('examples-treelist') .filter('name', value, null);
        me.getReference('api-treelist')      .filter('name', value, null);
        me.getReference('tutorials-treelist').filter('name', value, null);
    }

    /**
     *
     */
    onSwitchSourceViewThemeButtonClick() {
        let me     = this,
            button = me.getReference('source-view-theme-button'),
            buttonText, href;

        if (button.text === 'Source View Theme Light') {
            buttonText = 'Source View Theme Dark';
            href       = './resources/highlightjs-custom-github-theme.css';
        } else {
            buttonText = 'Source View Theme Light';
            href       = './resources/highlightjs-custom-dark-theme.css';
        }

        Neo.main.addon.Stylesheet.swapStyleSheet({
            href: href,
            id  : 'hljs-theme'
        }).then(data => {
            button.text = buttonText;
        });
    }

    /**
     *
     */
    onSwitchThemeButtonClick() {
        let me     = this,
            button = me.getReference('theme-button'),
            view   = me.component,
            buttonText, cls, theme;

        if (button.text === 'Theme Light') {
            buttonText = 'Theme Dark';
            theme      = 'neo-theme-light';
        } else {
            buttonText = 'Theme Light';
            theme      = 'neo-theme-dark';
        }

        if (Neo.config.useCssVars) {
            cls = [...view.cls];

            view.cls.forEach((item, index) => {
                if (item.includes('neo-theme')) {
                    _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, item);
                }
            });

            _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, theme);
            view.cls = cls;

            button.text = buttonText;
        }
    }

    /**
     *
     * @param {Object} record
     */
    onTutorialListLeafClick(record) {
        let me                  = this,
            contentTabContainer = me.getReference('content-tabcontainer');

        contentTabContainer.add({
            ntype   : 'classdetails-tutorialcomponent',
            fileName: record.fileName,
            fileType: record.type,
            id      : record.name,

            tabButtonConfig: {
                iconCls: 'fa fa-hands-helping',
                text   : record.name
            }
        });
    }
}

Neo.applyClassConfig(MainContainerController);




/***/ }),

/***/ "./docs/app/view/TutorialsTreeList.mjs":
/*!*********************************************!*\
  !*** ./docs/app/view/TutorialsTreeList.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TutorialsTreeList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _store_Tutorials_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Tutorials.mjs */ "./docs/app/store/Tutorials.mjs");



/**
 * @class Docs.view.TutorialsTreeList
 * @extends Neo.tree.List
 */
class TutorialsTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.TutorialsTreeList'
         * @protected
         */
        className: 'Docs.view.TutorialsTreeList',
        /**
         * @member {String} ntype='tutorials-treelist'
         * @protected
         */
        ntype: 'tutorials-treelist',
        /**
         * @member {String[]} cls=['docs-tutorials-treelist', 'neo-tree-list', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-tutorials-treelist',
            'neo-tree-list',
            'neo-list-container',
            'neo-list'
        ],
        /**
         * @member {Neo.data.Store|null} store=TutorialsStore
         * @protected
         */
        store: _store_Tutorials_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/tutorials/tutorials.json'
        }).then(data => {
            let vdom     = me.vdom,
                itemRoot = me.getListItemsRoot();

            me.store.data = data.json;
            itemRoot = me.createItems(null, itemRoot, 0);

            me.vdom = vdom;
        });
    }
}

Neo.applyClassConfig(TutorialsTreeList);




/***/ }),

/***/ "./docs/app/view/classdetails/HeaderComponent.mjs":
/*!********************************************************!*\
  !*** ./docs/app/view/classdetails/HeaderComponent.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.classdetails.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.HeaderComponent'
         * @protected
         */
        className: 'Docs.view.classdetails.HeaderComponent',
        /**
         * @member {String} ntype='classdetails-headercomponent'
         * @protected
         */
        ntype: 'classdetails-headercomponent',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-headercomponent']
         */
        cls: ['neo-docs-classdetails-headercomponent'],
        /**
         * @member {Object|null} record_=null
         */
        record_: null,
        /**
         * @member {Object} domListeners
         */
        domListeners: {
            click: {
                fn      : 'onHeaderClick', // Docs.app.view.MainContainerController
                delegate: '.neo-docs-header-text'
            }
        },
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'span',
                cls: ['neo-docs-header-text']
            }]
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me         = this,
            vdom      = me.vdom,
            className = me.record.className,
            store     = me.up('main-container').store,
            record    = store.find({$kind: className === 'Neo' ? 'module' : 'class', neoClassName: className})[0],
            i         = 0,
            len       = record && record.tags && record.tags.length || 0,
            singleton = false;

        for (; i < len; i++) {
            if (record.tags[i].title === 'singleton') {
                singleton = true;
                break;
            }
        }

        vdom.cn[0].innerHTML = singleton ? (className + ' → Singleton') : className;

        if (record.description) {
            vdom.cn.push({
                cls      : ['neo-docs-header-description'],
                innerHTML: record.description
            });
        }

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(HeaderComponent);




/***/ }),

/***/ "./docs/app/view/classdetails/HierarchyTreeList.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/HierarchyTreeList.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HierarchyTreeList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.classdetails.HierarchyTreeList
 * @extends Neo.tree.List
 */
class HierarchyTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.HierarchyTreeList'
         * @protected
         */
        className: 'Docs.view.classdetails.HierarchyTreeList',
        /**
         * @member {String} ntype='classdetails-treelist'
         * @protected
         */
        ntype: 'classhierarchy-treelist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-treelist', 'neo-list-container', 'neo-list']
         */
        cls: [
            'docs-classhierarchy-treelist',
            'neo-list-container',
            'neo-tree-list',
            'neo-list'
        ],
        /**
         * @member {Boolean} showCollapseExpandAllIcons=false
         */
        showCollapseExpandAllIcons: false,
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.createStoreItems();
        me.createItems(null, me.getListItemsRoot(), 0);
    }

    /**
     *
     */
    createStoreItems() {
        let me            = this,
            className     = me.structureData.className,
            mainContainer = me.up('main-container'),
            mainStore     = mainContainer.store,
            storeItems    = [],
            tmpItems      = [],
            item, parentId;

        item = mainStore.find({
            $kind       : className === 'Neo' ? 'module' : 'class',
            neoClassName: me.structureData.className
        })[0];

        tmpItems.unshift(item);

        while (item && item.hasOwnProperty('augments')) {
            item = mainStore.find({
                $kind       : 'class',
                neoClassName: item.augments[0]
            })[0];

            tmpItems.unshift(item);
        }

        tmpItems.forEach((key, index) => {
            if (key) {
                parentId = tmpItems[index - 1] ? tmpItems[index - 1].id : null;

                storeItems.push({
                    checked : true,
                    id      : key.id,
                    isLeaf  : true,
                    name    : key.neoClassName,
                    parentId: parentId
                });
            }
        });

        me.store.items = storeItems;
    }

    /**
     *
     * @param {Object} record
     */
    onLeafItemClick(record) {
        let me       = this,
            vnodeId  = me.getItemId(record.id),
            vdom     = me.vdom,
            vdomNode = me.getVdomChild(vnodeId);

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][record.checked ? 'add' : 'remove'](vdomNode.cls, 'unchecked');

        record.checked = !record.checked;

        me.vdom = vdom;

        me.fire('refreshClassMembers');
    }
}

Neo.applyClassConfig(HierarchyTreeList);




/***/ }),

/***/ "./docs/app/view/classdetails/MainContainer.mjs":
/*!******************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainer.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent.mjs */ "./docs/app/view/classdetails/HeaderComponent.mjs");
/* harmony import */ var _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTreeList.mjs */ "./docs/app/view/classdetails/HierarchyTreeList.mjs");
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./docs/app/view/classdetails/MainContainerController.mjs");
/* harmony import */ var _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembersList.mjs */ "./docs/app/view/classdetails/MembersList.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");








/**
 * @class Docs.view.classdetails.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.MainContainer'
         * @protected
         */
        className: 'Docs.view.classdetails.MainContainer',
        /**
         * @member {String} ntype='classdetails-maincontainer'
         * @protected
         */
        ntype: 'classdetails-maincontainer',
        /**
         * @member {String[]} cls=['neo-docs-classdetails-maincontainer', 'neo-container']
         */
        cls: ['neo-docs-classdetails-maincontainer', 'neo-container'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
        /**
         * @member {Object} layout={ntype: 'vbox', align: 'stretch'}
         */
        layout: {ntype: 'vbox', align: 'stretch'},
        /**
         * @member {Object|null} structureData=null
         */
        structureData: null,
        /**
         * @member {Array} items=[//...]]
         */
        items: [{
            ntype : 'container',
            _cls  : ['neo-docs-classdetails-headercontainer'],
            flex  : '0 1 auto',
            layout: {ntype: 'hbox', align: 'stretch'},

            items: [{
                module : _node_modules_neo_mjs_src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
                cls    : ['neo-docs-classdetails-headerpanel', 'neo-panel', 'neo-container'],
                headers: [{
                    dock : 'bottom',
                    style: {borderWidth: 0},
                    items: [{
                        handler  : 'onScrollIntoView',
                        reference: 'showConfigs',
                        style    : {marginRight: '5px'},
                        text     : 'Configs'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showMethods',
                        style    : {marginRight: '5px'},
                        text     : 'Methods'
                    }, {
                        handler  : 'onScrollIntoView',
                        reference: 'showEvents',
                        text     : 'Events'
                    }, {
                        ntype: 'component',
                        flex : 1
                    }, {
                        module         : _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
                        listeners      : {change: 'onSearchFieldChange'},
                        placeholderText: 'Filter Members',
                        width          : 160,

                        style: {
                            margin     : 0,
                            marginRight: '5px',
                            paddingTop : '2px'
                        }
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showPrivateMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Private',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showProtectedMembers',
                        style    : {marginRight: '5px'},
                        text     : 'Protected',
                    }, {
                        checked  : true,
                        handler  : 'onToggleMembers',
                        iconCls  : 'fa fa-check-square',
                        reference: 'showStaticMembers',
                        text     : 'Static'
                    }]
                }],

                items: [{
                    module: _HeaderComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                    flex  : 1,
                    record: '@config:structureData'
                }]
            }, {
                module       : _HierarchyTreeList_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                flex         : '0 0 auto',
                minWidth     : 330,
                structureData: '@config:structureData'
            }]
        }, {
            module   : _MembersList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            flex     : 1,
            listeners: {mutateItems: 'onMutateItems'},
            reference: 'classdetails-memberslist'
        }]
    }}
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./docs/app/view/classdetails/MainContainerController.mjs":
/*!****************************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainerController.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainContainerController)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.MainContainerController'
         * @protected
         */
        className: 'Docs.view.classdetails.MainContainerController',
        /**
         * @member {String} ntype='docs-classdetails-maincontainer-controller'
         * @protected
         */
        ntype: 'docs-classdetails-maincontainer-controller'
    }}

    /**
     *
     * @param {Object} data
     */
    onHeaderClick(data) {
        let me                  = this,
            record              = me.component.structureData,
            mainContainer       = me.component.up('main-container'),
            contentTabContainer = mainContainer.down('docs-content-tabcontainer'),
            className           = (record.path ? record.path + '.' : '') + record.name;

        contentTabContainer.add({
            module       : _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            id           : className + '__source',
            structureData: record,

            tabButtonConfig: {
                iconCls: 'fa fa-code',
                text   : className
            }
        });
    }

    /**
     *
     * @param {Neo.collection.Base} store
     */
    onMutateItems(store) {
        let me              = this,
            countConfigs    = 0,
            countEvents     = 0,
            countMethods    = 0,
            countPrivates   = 0,
            countProtecteds = 0,
            countStatics    = 0;

        store.items.forEach(item => {
            if (item.kind === 'function') {
                countMethods++;
            } else if (item.kind === 'member') {
                countConfigs++;
            } else {
                countEvents++;
            }

            if (item.access === 'private') {
                countPrivates++;
            } else if (item.access === 'protected') {
                countProtecteds++;
            }

            if (item.scope === 'static') {
                countStatics++;
            }
        });

        me.getReference('showConfigs')         .text = 'Configs '   + countConfigs;
        me.getReference('showMethods')         .text = 'Methods '   + countMethods;
        me.getReference('showEvents')          .text = 'Events '    + countEvents;
        me.getReference('showPrivateMembers')  .text = 'Private '   + countPrivates;
        me.getReference('showProtectedMembers').text = 'Protected ' + countProtecteds;
        me.getReference('showStaticMembers')   .text = 'Static '    + countStatics;
    }

    /**
     *
     * @param {Object} data
     */
    onScrollIntoView(data) {
        let me     = this,
            button = Neo.getComponent(data.target.id);

        Neo.main.addon.HighlightJS.scrollIntoView({
            text   : button.reference.substr(4),
            vnodeId: me.view.vdom.id
        });
    }

    /**
     *
     * @param {Object} data
     */
    onSearchFieldChange(data) {
        this.getReference('classdetails-memberslist').filterMembersQuery = data.value;
    }

    /**
     *
     * @param {Object} data
     */
    onToggleMembers(data) {
        let button      = Neo.getComponent(data.target.id),
            membersList = this.getReference('classdetails-memberslist');

        button.iconCls = button.checked ? 'fa fa-square' : 'fa fa-check-square';
        button.checked = !button.checked;

        membersList[button.reference] = button.checked;
    }
}

Neo.applyClassConfig(MainContainerController);




/***/ }),

/***/ "./docs/app/view/classdetails/MembersList.mjs":
/*!****************************************************!*\
  !*** ./docs/app/view/classdetails/MembersList.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MembersList)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");



/**
 * @class Docs.view.classdetails.MembersList
 * @extends Neo.list.Base
 */
class MembersList extends _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.MembersList'
         * @protected
         */
        className: 'Docs.view.classdetails.MembersList',
        /**
         * @member {String} ntype='classdetails-memberslist'
         * @protected
         */
        ntype: 'classdetails-memberslist',
        /**
         * @member {String[]} cls=['docs-classhierarchy-memberslist']
         */
        cls: ['docs-classhierarchy-memberslist'],
        /**
         * @member {String} filterMembersQuery_=''
         * @protected
         */
        filterMembersQuery_: '',
        /**
         * @member {Boolean} showPrivateMembers_=true
         */
        showPrivateMembers_: true,
        /**
         * @member {Boolean} showProtectedMembers_=true
         */
        showProtectedMembers_: true,
        /**
         * @member {Boolean} showStaticMembers_=true
         */
        showStaticMembers_: true,
        /**
         * @member {Neo.collection.Base} store=null
         */
        store: null,
        /**
         * @member {String|null} targetClassName=null
         */
        targetClassName: null,
        /**
         * @member {Object} _vdom={cn: []}
         */
        _vdom: {
            cn: []
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me            = this,
            hierarchyView = me.up('classdetails-maincontainer').down('classhierarchy-treelist'),
            mainStore     = me.up('main-container').store;

        hierarchyView.on({
            refreshClassMembers: me.onRefreshClassMembers,
            scope              : me
        });

        me.store = Neo.create(_node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            filterMode: 'advanced',
            sourceId  : mainStore.id
        });

        me.onRefreshClassMembers();
    }

    /**
     * Triggered after the filterMembersQuery config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFilterMembersQuery(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showProtectedMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowProtectedMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showPrivateMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowPrivateMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     * Triggered after the showStaticMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowStaticMembers(value, oldValue) {
        if (oldValue !== undefined) {
            this.onRefreshClassMembers();
        }
    }

    /**
     *
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyConfigsHeader(store, vdom) {
        if (store.items[0] && store.items[0].kind === 'member') {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Configs',
                'data-list-header': 'Configs'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyEventsHeader(item, index, store, vdom) {
        if (
            item.kind === 'event' &&
            store.items[index -1] &&
            store.items[index -1].kind !== 'event'
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Events',
                style    : {zIndex: 3},
                'data-list-header': 'Events'
            });
        }

        return vdom;
    }

    /**
     *
     * @param {Object} item
     * @param {Number} index
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyMethodsHeader(item, index, store, vdom) {
        if (
            item.kind === 'function' &&
            (
                !store.items[index -1] || (
                    store.items[index -1] &&
                    store.items[index -1].kind !== 'function'
                )
            )
        ) {
            vdom.cn.push({
                // scrolling placeholder
            }, {
                cls      : ['neo-docs-memberlist-group-header'],
                innerHTML: 'Methods',
                style    : {zIndex: 2},
                'data-list-header': 'Methods'
            });
        }

        return vdom;
    }

    /**
     *
     */
    createItems() {
        let me                 = this,
            filterMembersRegEx = new RegExp(me.filterMembersQuery || '', 'gi'),
            hasExamples        = false,
            targetClassName    = me.targetClassName,
            vdom               = me.vdom,
            headerText, itemAttributes, itemConfig, path;

        vdom.cn = [];
        vdom = me.applyConfigsHeader(me.store, vdom);

        me.store.items.forEach((item, index) => {
            vdom = me.applyEventsHeader( item, index, me.store, vdom);
            vdom = me.applyMethodsHeader(item, index, me.store, vdom);

            itemAttributes = [];

            if (item.name.substr(-1) === '_') {
                item.name = item.name.slice(0, -1) ;
                itemAttributes.push('GS');
            }

            if (item.neoClassName !== targetClassName) {
                itemAttributes.push('inherited');
            }

            if (item.access === 'private' || item.access === 'protected') {
                itemAttributes.push(item.access);
            }

            if (item.scope === 'static') {
                itemAttributes.push('static');
            }

            headerText = item.name;

            if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
                headerText = headerText.replace(filterMembersRegEx, match => `<span class="neo-highlight-search">${match}</span>`);
            }

            // configs
            if (item.type && item.type.names) {
                headerText += (': {' + MembersList.escapeHtml(item.type.names.join('|')) + '}');
            }

            if (item.hasOwnProperty('defaultvalue')) {
                headerText += (' = ' + item.defaultvalue);
            }

            // methods
            if (item.params && item.kind !== 'event') {
                headerText += ('(' + item.params.reduce((result, param) => {
                    if (param.name.indexOf('.') < 0) {
                        if (param.optional) {
                            result.push('[' + param.name + ']');
                        } else {
                            result.push(param.name);
                        }
                    }
                    return result;
                }, []).join(', ') + ')');
            }

            if (item.returns) {
                headerText += (' → {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '}'));
            }

            path = item.meta.path;

            if (path.includes('/neo.mjs/')) {
                path = path.substr(path.indexOf('/neo.mjs/') + 9);
            } else if (path.includes('/neomjs/')) {
                path = path.substr(path.indexOf('/neomjs/')  + 8);
            } else if (path.includes('/neo/')) {
                path = path.substr(path.indexOf('/neo/')     + 5);
            }

            itemConfig = {
                cls: ['neo-list-item'],
                cn : [{
                    cls: ['neo-list-item-header-container'],
                    cn : [{
                        cls      : ['neo-list-item-header'],
                        innerHTML: headerText
                    }, {
                        style: {
                            flex: 1
                        }
                    }, {
                        cls      : ['neo-list-item-header'],
                        innerHTML: itemAttributes.join(', ')
                    }]
                }, {
                    cls: 'neo-docs-view-source-link-container',
                    cn :[{
                        tag      : 'a',
                        cls      : ['neo-docs-view-source-link'],
                        href     : '#viewSource=' + item.neoClassName + '&line=' + item.meta.lineno,
                        innerHTML: 'Source: ' + path + '/' + item.meta.filename + ' (Line ' + item.meta.lineno + ')'
                    }]
                }, {
                    innerHTML: item.description
                }]
            };

            if (item.examples && item.examples.length > 0) {
                hasExamples = true;

                item.examples.forEach(example => {
                    itemConfig.cn.push({
                        tag: 'pre',
                        cn : [{
                            tag : 'code',
                            html: example
                        }]
                    });
                });
            }

            if (item.params && item.params.length > 0) {
                itemConfig.cn.push(MembersList.createParametersTable(item.params));
            }

            if (item.returns && item.kind !== 'event') {
                itemConfig.cn.push({
                    innerHTML: 'Returns {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '} ') + (item.returns[0].description || '')
                });
            }

            vdom.cn.push(itemConfig);
        });

        me.vdom = vdom;

        if (hasExamples) {
            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightInit();
            }, 100);
        }
    }

    /**
     *
     * @param {Object} params
     * @returns {Object} vdom
     */
    static createParametersTable(params) {
        let hasDefaultValues  = false,
            hasOptionalParams = false,
            description, nestedParams, paramTable;

        params.forEach(param => {
            if (param.hasOwnProperty('defaultvalue')) {
                hasDefaultValues = true;
            }

            if (param.hasOwnProperty('optional')) {
                hasOptionalParams = true;
            }
        });

        paramTable = {
            tag: 'table',
            cls: 'docs-param-table',
            cn : [{
                tag: 'thead',
                cn : [{
                    tag      : 'th',
                    innerHTML: 'Name'
                }, {
                    tag      : 'th',
                    innerHTML: 'Type'
                }, {
                    tag      : 'th',
                    innerHTML: 'Description'
                }]
            }]
        };

        if (hasDefaultValues) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Default'
            });
        }

        if (hasOptionalParams) {
            paramTable.cn[0].cn.splice(2, 0, {
                tag      : 'th',
                innerHTML: 'Optional'
            });
        }

        params.forEach(param => {
            if (param.name.indexOf('.') < 0) { // ignore nested params
                description = {
                    tag      : 'td',
                    innerHTML: param.description
                };
                nestedParams = [];

                params.forEach(p => {
                    if (p.name.indexOf(param.name + '.') === 0) {
                        p = Neo.clone(p, true);

                        p.name = p.name.split('.');
                        p.name.shift();
                        p.name = p.name.join('.');

                        nestedParams.push(p);
                    }
                });

                if (nestedParams.length > 0) {
                    description = {
                        tag: 'td',
                        cn : [{
                            innerHTML: description.innerHTML
                        },
                        MembersList.createParametersTable(nestedParams)]
                    }
                }

                paramTable.cn.push({
                    tag: 'tr',
                    cn : [{
                        tag      : 'td',
                        innerHTML: param.name
                    }, {
                        tag      : 'td',
                        innerHTML: param.type ? MembersList.escapeHtml(param.type.names.join(' | ')) : ''
                    },
                    description]
                });

                if (hasDefaultValues) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.defaultvalue === undefined ? '' : (param.defaultvalue + '')
                    });
                }

                if (hasOptionalParams) {
                    paramTable.cn[paramTable.cn.length - 1].cn.splice(2, 0, {
                        tag      : 'td',
                        innerHTML: param.optional
                    });
                }
            }
        });

        return paramTable;
    }

    /**
     * Replaces '<' & '>'
     * @param {String} value
     * @returns {String}
     */
    static escapeHtml(value) {
        return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    /**
     *
     */
    filterAndSortItems() {
        let me             = this,
            hierarchyMap   = {},
            hierarchyStore = me.up('classdetails-maincontainer').down('classhierarchy-treelist').store,
            hierarchyItems = hierarchyStore.items,
            i              = 0,
            tmpItems       = [],
            filters, tmpItemsLen;

        hierarchyItems.forEach(cls => {
            if (cls.checked === true) {
                tmpItems.push(cls.name);
            }
        });

        tmpItemsLen = tmpItems.length;

        for (; i < tmpItemsLen; i++) {
            hierarchyMap[tmpItems[i]] = i;
        }

        me.targetClassName = hierarchyItems[hierarchyItems.length -1].name;

        filters = [{
            operator: 'included',
            property: 'neoClassName',
            value   : tmpItems
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'class'
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'constant' // todo?
        }, {
            operator: '!==',
            property: 'kind',
            value   : 'module'
        }, {
            operator: 'isUndefined',
            property: 'inherited'
        }];

        if (!me.showPrivateMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'private'
            });
        }

        if (!me.showProtectedMembers) {
            filters.push({
                operator: '!==',
                property: 'access',
                value   : 'protected'
            });
        }

        if (!me.showStaticMembers) {
            filters.push({
                operator: '!==',
                property: 'scope',
                value   : 'static'
            });
        }

        if (me.filterMembersQuery !== '' && me.filterMembersQuery !== null) {
            filters.push({
                operator: 'like',
                property: 'name',
                value   : me.filterMembersQuery
            });
        }

        filters.push({
            scope   : me,
            filterBy: function(item, filteredItems, allItems) {
                let me              = this,
                    targetClassName = me.targetClassName,
                    filteredItem, i, len;

                // always exclude inherited className & ntype configs
                if (item.name === 'ntype' && item.neoClassName !== targetClassName
                ) {
                    return true;
                }

                if (item.neoClassName !== targetClassName) {
                    i   = 0;
                    len = filteredItems.length;

                    for (; i < len; i++) {
                        filteredItem = filteredItems[i];

                        if (item.id !== filteredItem.id) {
                            if (
                                item.name  === filteredItem.name  &&
                                item.scope === filteredItem.scope && // static VS instance members
                                hierarchyMap[item.neoClassName] < hierarchyMap[filteredItem.neoClassName]
                            ) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            }
        });

        me.store.filters = filters;

        me.store.sorters = [{
            // Configs => Methods => Events
            sortBy: function(a, b) {
                a = a.kind === 'member' ? 0 : a.kind === 'function' ? 1 : 2;
                b = b.kind === 'member' ? 0 : b.kind === 'function' ? 1 : 2;

                return a > b ? 1 : a < b ? -1 : 0;
            }
        }, {
            direction: 'ASC',
            property : 'name'
        }];

        me.fire('mutateItems', me.store);
    }

    /**
     * Override to not call createItems() at this point => onRefreshClassMembers()
     */
    onStoreFilter() {}

    /**
     *
     */
    onRefreshClassMembers() {
        this.filterAndSortItems();
        this.createItems();
    }
}

Neo.applyClassConfig(MembersList);




/***/ }),

/***/ "./docs/app/view/classdetails/SourceViewComponent.mjs":
/*!************************************************************!*\
  !*** ./docs/app/view/classdetails/SourceViewComponent.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SourceViewComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.SourceViewComponent
 * @extends Neo.component.Base
 */
class SourceViewComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.SourceViewComponent'
         * @protected
         */
        className: 'Docs.view.classdetails.SourceViewComponent',
        /**
         * @member {String} ntype='classdetails-sourceviewcomponent'
         * @protected
         */
        ntype: 'classdetails-sourceviewcomponent',
        /**
         * @member {Boolean} isHighlighted_=false
         * @protected
         */
        isHighlighted_: false,
        /**
         * @member {Number|null} line_=null
         * @protected
         */
        line_: null,
        /**
         * @member {Number|null} previousLine=null
         * @protected
         */
        previousLine: null,
        /**
         * @member {Object|null} structureData=null
         * @protected
         */
        structureData: null,
        /**
         * @member {Object} style= {overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        },
        /**
         * @member {Object} _vdom={cn: [//...]}
         */
        _vdom: {
            cn: [{
                tag: 'pre',
                cn : [{
                    tag  : 'code',
                    class: 'javascript'
                }]
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me   = this,
            url  = '../../' + me.structureData.srcPath;

        Neo.Xhr.promiseRequest({
            url: url
        }).then(data => {
            setTimeout(() => { // ensure we are not mounting
                me.applySourceCode(data.response);
            }, 100);
        });
    }

    /**
     * Triggered after the isHighlighted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetIsHighlighted(value, oldValue) {
        if (value) {
            let me = this;

            setTimeout(() => {
                Neo.main.addon.HighlightJS.syntaxHighlightLine({
                    addLine   : me.line,
                    removeLine: me.previousLine,
                    vnodeId   : me.vdom.cn[0].id
                });
            }, 50);
        }
    }

    /**
     * Triggered after the line config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetLine(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.previousLine = oldValue;
        }

        if (me.isHighlighted) {
            me.afterSetIsHighlighted(true, false);
        }
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom,
            node = vdom.cn[0]; // pre tag

        node.cn[0].innerHTML = data; // code tag
        me.vdom = vdom;

        setTimeout(() => {
            me.syntaxHighlight(node.id);
        }, 50);
    }

    /**
     *
     * @param {String} vnodeId
     */
    syntaxHighlight(vnodeId) {
        let me = this,
            id;

        if (me.vnode) {
            Neo.main.addon.HighlightJS.syntaxHighlight({
                vnodeId: me.vdom.cn[0].id
            }).then(() => {
                me.isHighlighted = true;
            });
        } else {
            id = me.on('mounted', () => {
                setTimeout(() => {
                    me.un('mounted', id);
                    me.syntaxHighlight(vnodeId);
                }, 50);
            });
        }
    }
}

Neo.applyClassConfig(SourceViewComponent);




/***/ }),

/***/ "./docs/app/view/classdetails/TutorialComponent.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/TutorialComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TutorialComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.TutorialComponent
 * @extends Neo.component.Base
 */
class TutorialComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.view.classdetails.TutorialComponent'
         * @protected
         */
        className: 'Docs.view.classdetails.TutorialComponent',
        /**
         * @member {String} ntype='classdetails-tutorialcomponent'
         * @protected
         */
        ntype: 'classdetails-tutorialcomponent',
        /**
         * @member {String[]} cls=['neo-classdetails-tutorialcomponent']
         */
        cls: ['neo-classdetails-tutorialcomponent'],
        /**
         * @member {String|null} fileName=null
         */
        fileName: null,
        /**
         * @member {String|null} fileType=null
         */
        fileType: null,
        /**
         * @member {Object} style={overflow: 'auto'}
         */
        style: {
            overflow: 'auto'
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me     = this,
            isJson = me.fileType === 'json',
            url    = '../../docs/tutorials/' + me.fileName;

        Neo.Xhr[isJson ? 'promiseJson' : 'promiseRequest']({
            url: url
        }).then(data => {
            setTimeout(() => { // ensure we are not mounting
                me.applySourceCode(isJson ? data.json : data.response);
            }, 100);
        });
    }

    /**
     *
     * @param {Object} data
     */
    applySourceCode(data) {
        let me   = this,
            vdom = me.vdom;

        if (me.fileType === 'json') {
            vdom.cn = data;
        } else {
            vdom.innerHTML = data;
        }

        me.vdom = vdom;

        setTimeout(() => {
            TutorialComponent.syntaxHighlight();
        }, 50);
    }

    /**
     *
     */
    static syntaxHighlight() {
        Neo.main.addon.HighlightJS.syntaxHighlightInit();
    }
}

Neo.applyClassConfig(TutorialComponent);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9kb2NzX2FwcF9tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7O0FBRXpEO0FBQ0EsY0FBYyxtRUFBYTtBQUMzQjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTG9FOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnRkFBSztBQUN2Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9Dc0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdGQUFLO0FBQzNCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENzRTs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0ZBQUs7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN3QztBQUNnQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0ZBQUs7QUFDdkIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0EsZUFBZSxzREFBUTtBQUN2QjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjJDO0FBQzRCOztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnRkFBSztBQUM1Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQSxlQUFlLDBEQUFPO0FBQ3RCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCd0U7QUFDM0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdGQUFLO0FBQzdCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBLGVBQWUsMkRBQVE7QUFDdkI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ1RTtBQUMvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0VBQVE7QUFDbEMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBLGVBQWUsc0RBQVE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRCtDO0FBQ0k7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1GQUFTO0FBQzNDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsUUFBUSx1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1RkFBWTtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTs7QUFFd0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhVO0FBQzBCOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrRUFBUTtBQUN2Qyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBLGVBQWUsMkRBQWE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0QwQztBQUNIO0FBQ007O0FBRWxGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9GQUFTO0FBQ3ZDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxRQUFRO0FBQ3BDO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSw2QkFBNkIsdUZBQVc7QUFDeEMsOEJBQThCLHdDQUF3QztBQUN0RTtBQUNBLDhCQUE4QixnQkFBZ0I7QUFDOUM7QUFDQSxTQUFTO0FBQ1QsMEJBQTBCLGlGQUFNO0FBQ2hDLDJCQUEyQixrQ0FBa0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBLFNBQVM7QUFDVCwwQkFBMEIsaUZBQU07QUFDaEMsMkJBQTJCLDRDQUE0QztBQUN2RTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUNBQXFDO0FBQ2hFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVvQjtBQUNlO0FBQ3FCO0FBQzVCO0FBQ0g7QUFDRDtBQUNRO0FBQ1M7QUFDRjtBQUNiO0FBQ2lDOztBQUUvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5RkFBUTtBQUNwQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBLG9CQUFvQixvRUFBdUI7QUFDM0M7QUFDQSxvQkFBb0IsUUFBUSxRQUFRO0FBQ3BDO0FBQ0EsaUJBQWlCLGdDQUFnQztBQUNqRDtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxnQkFBZ0IsNERBQWU7QUFDL0I7QUFDQTtBQUNBLHFCQUFxQixnQ0FBZ0M7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQix3REFBVztBQUMxQyxnQ0FBZ0Msb0NBQW9DO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLCtCQUErQiw4REFBaUI7QUFDaEQsZ0NBQWdDLHlDQUF5QztBQUN6RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwrQkFBK0IsNkRBQWdCO0FBQy9DLGdDQUFnQyx5Q0FBeUM7QUFDekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLDJCQUEyQixnRUFBbUI7QUFDOUM7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrQ0FBa0MscUZBQVU7QUFDNUM7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SWlEO0FBQ1Y7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBGQUFTO0FBQy9DLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQkFBZ0I7QUFDdEQ7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVGQUFlO0FBQ25DO0FBQ0EsYUFBYTs7QUFFYixZQUFZLG9GQUFZO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE9pQztBQUN6Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0VBQVE7QUFDeEMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQSxlQUFlLDREQUFjO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RvRDtBQUM5Qjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0ZBQVM7QUFDdkMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHlFQUF5RTtBQUM3RztBQUNBO0FBQ0E7O0FBRUEsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRnNDO0FBQ0M7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLCtFQUFRO0FBQ3hDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsZ0ZBQVE7O0FBRWhCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySHdEO0FBQ2xDO0FBQ0U7QUFDTTtBQUNaO0FBQ3VDO0FBQ0U7O0FBRWpHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9GQUFTO0FBQ3JDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0Esb0JBQW9CLG9FQUF1QjtBQUMzQztBQUNBLG9CQUFvQixRQUFRLFFBQVE7QUFDcEM7QUFDQSxpQkFBaUIsZ0NBQWdDO0FBQ2pEO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQ0FBZ0M7O0FBRXJEO0FBQ0EseUJBQXlCLHFGQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIseUNBQXlDLHVGQUFXO0FBQ3BELDBDQUEwQyw4QkFBOEI7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7O0FBRWpCO0FBQ0EsNEJBQTRCLDREQUFlO0FBQzNDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLCtCQUErQiw4REFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCx1QkFBdUIsd0RBQVc7QUFDbEM7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJOEQ7QUFDcEM7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBGQUFTO0FBQy9DLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixnRUFBbUI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFNEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhnQztBQUNNOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrRUFBSTtBQUM5Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULDhCQUE4QixxRkFBVTtBQUN4QztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLHFCQUFxQjtBQUNwQyxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUscUJBQXFCO0FBQ3BDLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1IQUFtSCxNQUFNO0FBQ3pIOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsMERBQTBEO0FBQzdGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxvQ0FBb0Msb0VBQW9FO0FBQ3hHOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLHFFQUFxRTtBQUM5RyxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx3Q0FBd0Msc0JBQXNCO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUEsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsU0FBUztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNW1CZ0Q7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9GQUFTO0FBQzNDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLFFBQVEsT0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0JBQStCO0FBQy9CO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUV3Qzs7Ozs7Ozs7Ozs7Ozs7OztBQy9Kd0M7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9GQUFTO0FBQ3pDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0JBQStCO0FBQy9CO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVzQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvbW9kZWwvQXBpLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL21vZGVsL0V4YW1wbGUubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvbW9kZWwvVHV0b3JpYWwubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvc3RvcmUvQXBpLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3N0b3JlL0V4YW1wbGVzLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3N0b3JlL1R1dG9yaWFscy5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L0FwaVRyZWVMaXN0Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvQ29udGVudFRhYkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L0V4YW1wbGVzVHJlZUxpc3QubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9IZWFkZXJDb250YWluZXIubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9UdXRvcmlhbHNUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9IZWFkZXJDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvSGllcmFyY2h5VHJlZUxpc3QubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9NZW1iZXJzTGlzdC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9Tb3VyY2VWaWV3Q29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL1R1dG9yaWFsQ29tcG9uZW50Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL2FwcC92aWV3L01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnRG9jcydcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLm1vZGVsLkFwaVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgQXBpIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC5tb2RlbC5BcGknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLm1vZGVsLkFwaScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY2xhc3NOYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb2xsYXBzZWQnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzTGVhZicsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhcmVudElkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGF0aCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2luZ2xldG9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc3JjUGF0aCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwaSk7XG5cbmV4cG9ydCB7QXBpIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAubW9kZWwuRXhhbXBsZVxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgRXhhbXBsZSBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAubW9kZWwuRXhhbXBsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAubW9kZWwuRXhhbXBsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY29sbGFwc2VkJywgLy8gb3B0aW9uYWwsIG9ubHkgbmVlZGVkIGZvciBjb2xsYXBzZWQgbm9uIGxlYWYgaXRlbXNcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpc0xlYWYnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXJlbnRJZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhdGgnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhFeGFtcGxlKTtcblxuZXhwb3J0IHtFeGFtcGxlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAubW9kZWwuVHV0b3JpYWxcbiAqIEBleHRlbmRzIE5lby5kYXRhLk1vZGVsXG4gKi9cbmNsYXNzIFR1dG9yaWFsIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC5tb2RlbC5UdXRvcmlhbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAubW9kZWwuVHV0b3JpYWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGZpZWxkc1xuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2ZpbGVOYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzTGVhZicsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhcmVudElkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndHlwZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFR1dG9yaWFsKTtcblxuZXhwb3J0IHtUdXRvcmlhbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQXBpTW9kZWwgZnJvbSAnLi4vbW9kZWwvQXBpLm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAuc3RvcmUuQXBpXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBBcGkgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnN0b3JlLkFwaSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAuc3RvcmUuQXBpJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWw9QXBpTW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBBcGlNb2RlbFxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwaSk7XG5cbmV4cG9ydCB7QXBpIGFzIGRlZmF1bHR9OyIsImltcG9ydCBFeGFtcGxlIGZyb20gJy4uL21vZGVsL0V4YW1wbGUubWpzJztcbmltcG9ydCBTdG9yZSAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3MuYXBwLnN0b3JlLkV4YW1wbGVzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBFeGFtcGxlcyBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAuc3RvcmUuRXhhbXBsZXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnN0b3JlLkV4YW1wbGVzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWw9RXhhbXBsZVxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IEV4YW1wbGVcbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhFeGFtcGxlcyk7XG5cbmV4cG9ydCB7RXhhbXBsZXMgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFN0b3JlICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5pbXBvcnQgVHV0b3JpYWwgZnJvbSAnLi4vbW9kZWwvVHV0b3JpYWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAuc3RvcmUuVHV0b3JpYWxzXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBUdXRvcmlhbHMgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnN0b3JlLlR1dG9yaWFscydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAuc3RvcmUuVHV0b3JpYWxzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWw9VHV0b3JpYWxcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBUdXRvcmlhbFxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFR1dG9yaWFscyk7XG5cbmV4cG9ydCB7VHV0b3JpYWxzIGFzIGRlZmF1bHR9OyIsImltcG9ydCBUcmVlTGlzdCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdHJlZS9MaXN0Lm1qcyc7XG5pbXBvcnQgQXBpU3RvcmUgZnJvbSAnLi4vc3RvcmUvQXBpLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5BcGlUcmVlTGlzdFxuICogQGV4dGVuZHMgTmVvLnRyZWUuTGlzdFxuICovXG5jbGFzcyBBcGlUcmVlTGlzdCBleHRlbmRzIFRyZWVMaXN0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkFwaVRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuQXBpVHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYXBpLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2FwaS10cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZT1BcGlTdG9yZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQXBpU3RvcmVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIHVybDogJy4uLy4uL2RvY3Mvb3V0cHV0L3N0cnVjdHVyZS5qc29uJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBpdGVtUm9vdCA9IG1lLmdldExpc3RJdGVtc1Jvb3QoKTtcblxuICAgICAgICAgICAgbWUuc3RvcmUuZGF0YSA9IGRhdGEuanNvbjtcbiAgICAgICAgICAgIGl0ZW1Sb290ID0gbWUuY3JlYXRlSXRlbXMobnVsbCwgaXRlbVJvb3QsIDApO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBcGlUcmVlTGlzdCk7XG5cbmV4cG9ydCB7QXBpVHJlZUxpc3QgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29udGFpbmVyICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVhZGVyQnV0dG9uIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvaGVhZGVyL0J1dHRvbi5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuQ29udGVudFRhYkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLnRhYi5Db250YWluZXJcbiAqL1xuY2xhc3MgQ29udGVudFRhYkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5Db250ZW50VGFiQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuQ29udGVudFRhYkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvY3MtY29udGVudC10YWJjb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYWN0aXZhdGVJbnNlcnRlZFRhYnM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZhdGVJbnNlcnRlZFRhYnM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbnRlbnRDb250YWluZXJEZWZhdWx0cz17Y2xzOlsvLy4uLl19XG4gICAgICAgICAqL1xuICAgICAgICBjb250ZW50Q29udGFpbmVyRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGNsczogW1xuICAgICAgICAgICAgICAgICduZW8tZG9jcy10YWItY29udGVudC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICduZW8tdGFiLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAnbmVvLWNvbnRhaW5lcidcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGVhZGVyVG9vbGJhckRlZmF1bHRzPXtjbHM6Wy8vLi4uXX1cbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJEZWZhdWx0czoge1xuICAgICAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAgICAgJ2RvY3MtdGFiLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgICAgICAgICAnbmVvLXRhYi1oZWFkZXItdG9vbGJhcicsXG4gICAgICAgICAgICAgICAgJ25lby10b29sYmFyJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGh0bWwgOiAnV2VsY29tZSB0byB0aGUgbmVvLm1qcyBkb2NzIScsXG4gICAgICAgICAgICBzdHlsZToge3BhZGRpbmc6ICcyMHB4J30sXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS11c2VycycsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ1dlbGNvbWUhJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNvcnRhYmxlPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIGNscy51bnNoaWZ0KCdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkaW5nIHRoZSBidXR0b24gY2xpY2sgbGlzdGVuZXIgdG8gYWxsb3cgY2xvc2luZyB0YWJzIG9uIGljb24gY2xpY2tcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG1lcmdlZCBjb25maWdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgZ2V0VGFiQnV0dG9uQ29uZmlnKGNvbmZpZywgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGRlZmF1bHRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlIDogSGVhZGVyQnV0dG9uLFxuICAgICAgICAgICAgICAgIGZsZXggICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICBpbmRleCAgOiBpbmRleCxcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBtZS5hY3RpdmVJbmRleCA9PT0gaW5kZXgsXG5cbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF0aCA9IGRhdGEucGF0aC5tYXAoZSA9PiBlLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGhbMF0uaW5kZXhPZignbmVvLXRhYi1oZWFkZXItYnV0dG9uLScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlSW5kZXggPSBkYXRhLmNvbXBvbmVudC5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVtb3ZlQXQoTmVvLmdldENvbXBvbmVudChtZS50YWJCYXJJZCkuaW5kZXhPZihwYXRoWzFdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWd9O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGVudFRhYkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7Q29udGVudFRhYkNvbnRhaW5lciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBFeGFtcGxlc1N0b3JlIGZyb20gJy4uL3N0b3JlL0V4YW1wbGVzLm1qcyc7XG5pbXBvcnQgVHJlZUxpc3QgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdHJlZS9MaXN0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5FeGFtcGxlc1RyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIEV4YW1wbGVzVHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5FeGFtcGxlc1RyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuRXhhbXBsZXNUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdleGFtcGxlcy10cmVlbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdleGFtcGxlcy10cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnZG9jcy1leGFtcGxlcy10cmVlbGlzdCcsICduZW8tdHJlZS1saXN0JywgJ25lby1saXN0LWNvbnRhaW5lcicsICduZW8tbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICdkb2NzLWV4YW1wbGVzLXRyZWVsaXN0JyxcbiAgICAgICAgICAgICduZW8tdHJlZS1saXN0JyxcbiAgICAgICAgICAgICduZW8tbGlzdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ25lby1saXN0J1xuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gc3RvcmU9RXhhbXBsZXNTdG9yZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogRXhhbXBsZXNTdG9yZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9leGFtcGxlcy5qc29uJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbGV0IHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICBpdGVtUm9vdCA9IG1lLmdldExpc3RJdGVtc1Jvb3QoKTtcblxuICAgICAgICAgICAgbWUuc3RvcmUuZGF0YSA9IGRhdGEuanNvbjtcbiAgICAgICAgICAgIGl0ZW1Sb290ID0gbWUuY3JlYXRlSXRlbXMobnVsbCwgaXRlbVJvb3QsIDApO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhFeGFtcGxlc1RyZWVMaXN0KTtcblxuZXhwb3J0IHtFeGFtcGxlc1RyZWVMaXN0IGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbnRhaW5lciAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEJ1dHRvbiAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IFNlYXJjaEZpZWxkIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlYXJjaC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuSGVhZGVyQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgSGVhZGVyQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkhlYWRlckNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LkhlYWRlckNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdoZWFkZXItY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kb2NzLWhlYWRlci1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaGVpZ2h0PTU1XG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IDU1LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogU2VhcmNoRmllbGQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgICA6IHtjaGFuZ2U6ICdvbk5hdmlnYXRpb25TZWFyY2hGaWVsZENoYW5nZSd9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiAnRmlsdGVyIE5hdmlnYXRpb24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgIDogMjQwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogQnV0dG9uLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7Y2xpY2s6ICdvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2snfSxcbiAgICAgICAgICAgIGZsZXggICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgOiAyNyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSAgIDogJ3RoZW1lLWJ1dHRvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICA6IHttYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1RoZW1lIERhcmsnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogQnV0dG9uLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7Y2xpY2s6ICdvblN3aXRjaFNvdXJjZVZpZXdUaGVtZUJ1dHRvbkNsaWNrJ30sXG4gICAgICAgICAgICBmbGV4ICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGhlaWdodCAgICAgIDogMjcsXG4gICAgICAgICAgICByZWZlcmVuY2UgICA6ICdzb3VyY2Utdmlldy10aGVtZS1idXR0b24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5Ub3A6ICc1cHgnfSxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1NvdXJjZSBWaWV3IFRoZW1lIERhcmsnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgIGNscyAgOiBbJ25lby1sb2dvLXRleHQnXSxcbiAgICAgICAgICAgIGh0bWwgOiAnbmVvLm1qcyBkb2NzJyxcbiAgICAgICAgICAgIHdpZHRoOiAyMTBcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWFkZXJDb250YWluZXIpO1xuXG5leHBvcnQge0hlYWRlckNvbnRhaW5lciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBBcGlUcmVlTGlzdCAgICAgICAgICAgICBmcm9tICcuL0FwaVRyZWVMaXN0Lm1qcyc7XG5pbXBvcnQgQ2xhc3NEZXRhaWxzQ29udGFpbmVyICAgZnJvbSAnLi9jbGFzc2RldGFpbHMvTWFpbkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0Jhc2UubWpzJztcbmltcG9ydCBDb250ZW50VGFiQ29udGFpbmVyICAgICBmcm9tICcuL0NvbnRlbnRUYWJDb250YWluZXIubWpzJztcbmltcG9ydCBFeGFtcGxlc1RyZWVMaXN0ICAgICAgICBmcm9tICcuL0V4YW1wbGVzVHJlZUxpc3QubWpzJztcbmltcG9ydCBIZWFkZXJDb250YWluZXIgICAgICAgICBmcm9tICcuL0hlYWRlckNvbnRhaW5lci5tanMnO1xuaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBTb3VyY2VWaWV3Q29tcG9uZW50ICAgICBmcm9tICcuL2NsYXNzZGV0YWlscy9Tb3VyY2VWaWV3Q29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgVHV0b3JpYWxDb21wb25lbnQgICAgICAgZnJvbSAnLi9jbGFzc2RldGFpbHMvVHV0b3JpYWxDb21wb25lbnQubWpzJztcbmltcG9ydCBUdXRvcmlhbHNUcmVlTGlzdCAgICAgICBmcm9tICcuL1R1dG9yaWFsc1RyZWVMaXN0Lm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWFpbi1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFpbi1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudCA6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRvY3MtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kb2NzLW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9TWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IE1haW5Db250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb2xsZWN0aW9uLkJhc2V8bnVsbH0gc3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW0hlYWRlckNvbnRhaW5lciwge1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBudHlwZSAgIDogJ3RhYi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIGNscyAgICAgOiBbJ25lby1kb2NzLW5hdmlnYXRpb24tdGFiLWNvbnRhaW5lcicsICduZW8tdGFiLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAyOTAsXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lkdGggICA6IDI5MCxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IEFwaVRyZWVMaXN0LFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtsZWFmSXRlbUNsaWNrOiAnb25BcGlMaXN0TGVhZkNsaWNrJ30sXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2FwaS10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQVBJJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFR1dG9yaWFsc1RyZWVMaXN0LFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtsZWFmSXRlbUNsaWNrOiAnb25UdXRvcmlhbExpc3RMZWFmQ2xpY2snfSxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAndHV0b3JpYWxzLXRyZWVsaXN0JyxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1oYW5kcy1oZWxwaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUdXRvcmlhbHMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogRXhhbXBsZXNUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7bGVhZkl0ZW1DbGljazogJ29uRXhhbXBsZXNMaXN0TGVhZkNsaWNrJ30sXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2V4YW1wbGVzLXRyZWVsaXN0JyxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1kZXNrdG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdFeGFtcGxlcydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBDb250ZW50VGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdjb250ZW50LXRhYmNvbnRhaW5lcidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5zdG9yZSkge1xuICAgICAgICAgICAgbWUuc3RvcmUgPSBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIHtcbiAgICAgICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBleGFtcGxlcyBUYWIgZm9yIGRpc3QgdmVyc2lvbnMgdW50aWwgdGhlIHdlYnBhY2sgYnVpbGRzIGNhbiBoYW5kbGUgdGhpcyAoc2VlOiAjMTQwKVxuICAgICAgICBtZS5pdGVtc1sxXS5pdGVtc1swXS5pdGVtc1syXS50YWJCdXR0b25Db25maWcuZGlzYWJsZWQgPSBOZW8uY29uZmlnLmVudmlyb25tZW50ICE9PSAnZGV2ZWxvcG1lbnQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICB1cmw6ICcuLi8uLi9kb2NzL291dHB1dC9hbGwuanNvbidcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvY3MtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvY3MtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkFwaUxpc3RMZWFmQ2xpY2socmVjb3JkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2NvbnRlbnQtdGFiY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgbnR5cGUgICAgICAgIDogJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJyxcbiAgICAgICAgICAgIGlkICAgICAgICAgICA6IHJlY29yZC5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHJ1Y3R1cmVEYXRhOiByZWNvcmQsXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6IHJlY29yZC5zaW5nbGV0b24gPyAnZmEgZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodCcgOiAnZmEgZmEtY29weXJpZ2h0JyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiByZWNvcmQubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkV4YW1wbGVzTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKSxcbiAgICAgICAgICAgIG5hbWUgICAgICAgICAgICAgICAgPSByZWNvcmQubmFtZSxcbiAgICAgICAgICAgIHBhdGhBcnJheSAgICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICAgICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2V4YW1wbGVzLXRyZWVsaXN0Jykuc3RvcmUsXG4gICAgICAgICAgICB0bXBSZWNvcmQgICAgICAgICAgID0gcmVjb3JkLFxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnO1xuXG4gICAgICAgIHdoaWxlICh0bXBSZWNvcmQucGFyZW50SWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRtcFJlY29yZCA9IHN0b3JlLmdldCh0bXBSZWNvcmQucGFyZW50SWQpO1xuICAgICAgICAgICAgbmFtZSAgICAgID0gdG1wUmVjb3JkLm5hbWUgKyAnLicgKyBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbmFtZSA9ICdleGFtcGxlc18nICsgbmFtZTtcblxuICAgICAgICB0YWJCdXR0b25Db25maWcgPSB7XG4gICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtZGVza3RvcCcsXG4gICAgICAgICAgICB0ZXh0ICAgOiByZWNvcmQubmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZWNvcmQucGF0aCkpIHtcbiAgICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgICAgICAvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovXG4gICAgICAgICAgICAgICAgcmVjb3JkLnBhdGgpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IG1vZHVsZS5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgICAgOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB0YWJCdXR0b25Db25maWdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlY29yZC5wYXRoLmZvckVhY2gocGF0aCA9PiB7XG4gICAgICAgICAgICAgICAgcGF0aEFycmF5LnB1c2goaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gcGF0aCkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHBhdGhBcnJheSkudGhlbihmdW5jdGlvbihtb2R1bGVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICBtb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IG1vZHVsZS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICA6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zICAgICAgICAgIDogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzogdGFiQnV0dG9uQ29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhhc2ggICAgICAgICAgICAgICAgPSB2YWx1ZSAmJiB2YWx1ZS5oYXNoLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKSxcbiAgICAgICAgICAgIHN0cnVjdHVyZVN0b3JlICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2FwaS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkLCB0YWI7XG5cbiAgICAgICAgaWYgKGhhc2ggJiYgaGFzaC5oYXNPd25Qcm9wZXJ0eSgndmlld1NvdXJjZScpKSB7XG4gICAgICAgICAgICByZWNvcmQgPSBzdHJ1Y3R1cmVTdG9yZS5maW5kKCdjbGFzc05hbWUnLCBoYXNoLnZpZXdTb3VyY2UpWzBdO1xuXG4gICAgICAgICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgdGFiID0gY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgOiAnY2xhc3NkZXRhaWxzLXNvdXJjZXZpZXdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgOiBoYXNoLnZpZXdTb3VyY2UgKyAnX19zb3VyY2UnLFxuICAgICAgICAgICAgICAgICAgICBsaW5lICAgICAgICAgOiBoYXNoLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGFkanVzdCB0aGUgaGlnaGxpZ2h0ZWQgbGluZSBmb3IgYWxyZWFkeSBhZGRlZCBzb3VyY2UgdmlldyB0YWJzXG4gICAgICAgICAgICAgICAgdGFiLmxpbmUgPSBoYXNoLmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25OYXZpZ2F0aW9uU2VhcmNoRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWUgPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnZXhhbXBsZXMtdHJlZWxpc3QnKSAuZmlsdGVyKCduYW1lJywgdmFsdWUsIG51bGwpO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ2FwaS10cmVlbGlzdCcpICAgICAgLmZpbHRlcignbmFtZScsIHZhbHVlLCBudWxsKTtcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCd0dXRvcmlhbHMtdHJlZWxpc3QnKS5maWx0ZXIoJ25hbWUnLCB2YWx1ZSwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN3aXRjaFNvdXJjZVZpZXdUaGVtZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IG1lLmdldFJlZmVyZW5jZSgnc291cmNlLXZpZXctdGhlbWUtYnV0dG9uJyksXG4gICAgICAgICAgICBidXR0b25UZXh0LCBocmVmO1xuXG4gICAgICAgIGlmIChidXR0b24udGV4dCA9PT0gJ1NvdXJjZSBWaWV3IFRoZW1lIExpZ2h0Jykge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdTb3VyY2UgVmlldyBUaGVtZSBEYXJrJztcbiAgICAgICAgICAgIGhyZWYgICAgICAgPSAnLi9yZXNvdXJjZXMvaGlnaGxpZ2h0anMtY3VzdG9tLWdpdGh1Yi10aGVtZS5jc3MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdTb3VyY2UgVmlldyBUaGVtZSBMaWdodCc7XG4gICAgICAgICAgICBocmVmICAgICAgID0gJy4vcmVzb3VyY2VzL2hpZ2hsaWdodGpzLWN1c3RvbS1kYXJrLXRoZW1lLmNzcyc7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ubWFpbi5hZGRvbi5TdHlsZXNoZWV0LnN3YXBTdHlsZVNoZWV0KHtcbiAgICAgICAgICAgIGhyZWY6IGhyZWYsXG4gICAgICAgICAgICBpZCAgOiAnaGxqcy10aGVtZSdcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uVGV4dDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN3aXRjaFRoZW1lQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gbWUuZ2V0UmVmZXJlbmNlKCd0aGVtZS1idXR0b24nKSxcbiAgICAgICAgICAgIHZpZXcgICA9IG1lLmNvbXBvbmVudCxcbiAgICAgICAgICAgIGJ1dHRvblRleHQsIGNscywgdGhlbWU7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1RoZW1lIERhcmsnO1xuICAgICAgICAgICAgdGhlbWUgICAgICA9ICduZW8tdGhlbWUtbGlnaHQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uVGV4dCA9ICdUaGVtZSBMaWdodCc7XG4gICAgICAgICAgICB0aGVtZSAgICAgID0gJ25lby10aGVtZS1kYXJrJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uY29uZmlnLnVzZUNzc1ZhcnMpIHtcbiAgICAgICAgICAgIGNscyA9IFsuLi52aWV3LmNsc107XG5cbiAgICAgICAgICAgIHZpZXcuY2xzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaW5jbHVkZXMoJ25lby10aGVtZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCB0aGVtZSk7XG4gICAgICAgICAgICB2aWV3LmNscyA9IGNscztcblxuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b25UZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25UdXRvcmlhbExpc3RMZWFmQ2xpY2socmVjb3JkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIgPSBtZS5nZXRSZWZlcmVuY2UoJ2NvbnRlbnQtdGFiY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgbnR5cGUgICA6ICdjbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnLFxuICAgICAgICAgICAgZmlsZU5hbWU6IHJlY29yZC5maWxlTmFtZSxcbiAgICAgICAgICAgIGZpbGVUeXBlOiByZWNvcmQudHlwZSxcbiAgICAgICAgICAgIGlkICAgICAgOiByZWNvcmQubmFtZSxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWhhbmRzLWhlbHBpbmcnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IFRyZWVMaXN0ICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcbmltcG9ydCBUdXRvcmlhbHNTdG9yZSBmcm9tICcuLi9zdG9yZS9UdXRvcmlhbHMubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LlR1dG9yaWFsc1RyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIFR1dG9yaWFsc1RyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuVHV0b3JpYWxzVHJlZUxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5UdXRvcmlhbHNUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0dXRvcmlhbHMtdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndHV0b3JpYWxzLXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLXR1dG9yaWFscy10cmVlbGlzdCcsICduZW8tdHJlZS1saXN0JywgJ25lby1saXN0LWNvbnRhaW5lcicsICduZW8tbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICdkb2NzLXR1dG9yaWFscy10cmVlbGlzdCcsXG4gICAgICAgICAgICAnbmVvLXRyZWUtbGlzdCcsXG4gICAgICAgICAgICAnbmVvLWxpc3QtY29udGFpbmVyJyxcbiAgICAgICAgICAgICduZW8tbGlzdCdcbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlPVR1dG9yaWFsc1N0b3JlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlOiBUdXRvcmlhbHNTdG9yZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy90dXRvcmlhbHMvdHV0b3JpYWxzLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIGl0ZW1Sb290ID0gbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpO1xuXG4gICAgICAgICAgICBtZS5zdG9yZS5kYXRhID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgaXRlbVJvb3QgPSBtZS5jcmVhdGVJdGVtcyhudWxsLCBpdGVtUm9vdCwgMCk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFR1dG9yaWFsc1RyZWVMaXN0KTtcblxuZXhwb3J0IHtUdXRvcmlhbHNUcmVlTGlzdCBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb21wb25lbnQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgZnJvbSAnLi9Tb3VyY2VWaWV3Q29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5jbGFzc2RldGFpbHMuSGVhZGVyQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IZWFkZXJDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuSGVhZGVyQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1oZWFkZXJjb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHJlY29yZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcmVjb3JkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZG9tTGlzdGVuZXJzXG4gICAgICAgICAqL1xuICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6ICdvbkhlYWRlckNsaWNrJywgLy8gRG9jcy5hcHAudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLm5lby1kb2NzLWhlYWRlci10ZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tZG9jcy1oZWFkZXItdGV4dCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBtZS5yZWNvcmQuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3RvcmUgICAgID0gbWUudXAoJ21haW4tY29udGFpbmVyJykuc3RvcmUsXG4gICAgICAgICAgICByZWNvcmQgICAgPSBzdG9yZS5maW5kKHska2luZDogY2xhc3NOYW1lID09PSAnTmVvJyA/ICdtb2R1bGUnIDogJ2NsYXNzJywgbmVvQ2xhc3NOYW1lOiBjbGFzc05hbWV9KVswXSxcbiAgICAgICAgICAgIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgPSByZWNvcmQgJiYgcmVjb3JkLnRhZ3MgJiYgcmVjb3JkLnRhZ3MubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBzaW5nbGV0b24gPSBmYWxzZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnRhZ3NbaV0udGl0bGUgPT09ICdzaW5nbGV0b24nKSB7XG4gICAgICAgICAgICAgICAgc2luZ2xldG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZkb20uY25bMF0uaW5uZXJIVE1MID0gc2luZ2xldG9uID8gKGNsYXNzTmFtZSArICcg4oaSIFNpbmdsZXRvbicpIDogY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmIChyZWNvcmQuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLWhlYWRlci1kZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogcmVjb3JkLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29tcG9uZW50KTtcblxuZXhwb3J0IHtIZWFkZXJDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgVHJlZUxpc3QgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RyZWUvTGlzdC5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5jbGFzc2RldGFpbHMuSGllcmFyY2h5VHJlZUxpc3RcbiAqIEBleHRlbmRzIE5lby50cmVlLkxpc3RcbiAqL1xuY2xhc3MgSGllcmFyY2h5VHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuSGllcmFyY2h5VHJlZUxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuSGllcmFyY2h5VHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzaGllcmFyY2h5LXRyZWVsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9Wydkb2NzLWNsYXNzaGllcmFyY2h5LXRyZWVsaXN0JywgJ25lby1saXN0LWNvbnRhaW5lcicsICduZW8tbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICdkb2NzLWNsYXNzaGllcmFyY2h5LXRyZWVsaXN0JyxcbiAgICAgICAgICAgICduZW8tbGlzdC1jb250YWluZXInLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0J1xuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDb2xsYXBzZUV4cGFuZEFsbEljb25zOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0cnVjdHVyZURhdGE6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5jcmVhdGVTdG9yZUl0ZW1zKCk7XG4gICAgICAgIG1lLmNyZWF0ZUl0ZW1zKG51bGwsIG1lLmdldExpc3RJdGVtc1Jvb3QoKSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVTdG9yZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgID0gbWUuc3RydWN0dXJlRGF0YS5jbGFzc05hbWUsXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyID0gbWUudXAoJ21haW4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBtYWluU3RvcmUgICAgID0gbWFpbkNvbnRhaW5lci5zdG9yZSxcbiAgICAgICAgICAgIHN0b3JlSXRlbXMgICAgPSBbXSxcbiAgICAgICAgICAgIHRtcEl0ZW1zICAgICAgPSBbXSxcbiAgICAgICAgICAgIGl0ZW0sIHBhcmVudElkO1xuXG4gICAgICAgIGl0ZW0gPSBtYWluU3RvcmUuZmluZCh7XG4gICAgICAgICAgICAka2luZCAgICAgICA6IGNsYXNzTmFtZSA9PT0gJ05lbycgPyAnbW9kdWxlJyA6ICdjbGFzcycsXG4gICAgICAgICAgICBuZW9DbGFzc05hbWU6IG1lLnN0cnVjdHVyZURhdGEuY2xhc3NOYW1lXG4gICAgICAgIH0pWzBdO1xuXG4gICAgICAgIHRtcEl0ZW1zLnVuc2hpZnQoaXRlbSk7XG5cbiAgICAgICAgd2hpbGUgKGl0ZW0gJiYgaXRlbS5oYXNPd25Qcm9wZXJ0eSgnYXVnbWVudHMnKSkge1xuICAgICAgICAgICAgaXRlbSA9IG1haW5TdG9yZS5maW5kKHtcbiAgICAgICAgICAgICAgICAka2luZCAgICAgICA6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgbmVvQ2xhc3NOYW1lOiBpdGVtLmF1Z21lbnRzWzBdXG4gICAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgICAgdG1wSXRlbXMudW5zaGlmdChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRtcEl0ZW1zLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA9IHRtcEl0ZW1zW2luZGV4IC0gMV0gPyB0bXBJdGVtc1tpbmRleCAtIDFdLmlkIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIHN0b3JlSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDoga2V5LmlkLFxuICAgICAgICAgICAgICAgICAgICBpc0xlYWYgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgICA6IGtleS5uZW9DbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IHN0b3JlSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25MZWFmSXRlbUNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdm5vZGVJZCAgPSBtZS5nZXRJdGVtSWQocmVjb3JkLmlkKSxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Ob2RlID0gbWUuZ2V0VmRvbUNoaWxkKHZub2RlSWQpO1xuXG4gICAgICAgIE5lb0FycmF5W3JlY29yZC5jaGVja2VkID8gJ2FkZCcgOiAncmVtb3ZlJ10odmRvbU5vZGUuY2xzLCAndW5jaGVja2VkJyk7XG5cbiAgICAgICAgcmVjb3JkLmNoZWNrZWQgPSAhcmVjb3JkLmNoZWNrZWQ7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgbWUuZmlyZSgncmVmcmVzaENsYXNzTWVtYmVycycpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGllcmFyY2h5VHJlZUxpc3QpO1xuXG5leHBvcnQge0hpZXJhcmNoeVRyZWVMaXN0IGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IEhlYWRlckNvbXBvbmVudCAgICAgICAgIGZyb20gJy4vSGVhZGVyQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgSGllcmFyY2h5VHJlZUxpc3QgICAgICAgZnJvbSAnLi9IaWVyYXJjaHlUcmVlTGlzdC5tanMnO1xuaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJztcbmltcG9ydCBNZW1iZXJzTGlzdCAgICAgICAgICAgICBmcm9tICcuL01lbWJlcnNMaXN0Lm1qcyc7XG5pbXBvcnQgUGFuZWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFNlYXJjaEZpZWxkICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlYXJjaC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1kb2NzLWNsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJywgJ25lby1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kb2NzLWNsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudH0gY29udHJvbGxlcj1NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHN0cnVjdHVyZURhdGE9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgX2NscyAgOiBbJ25lby1kb2NzLWNsYXNzZGV0YWlscy1oZWFkZXJjb250YWluZXInXSxcbiAgICAgICAgICAgIGZsZXggIDogJzAgMSBhdXRvJyxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBtb2R1bGUgOiBQYW5lbCxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1kb2NzLWNsYXNzZGV0YWlscy1oZWFkZXJwYW5lbCcsICduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGRvY2sgOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtib3JkZXJXaWR0aDogMH0sXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25TY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93Q29uZmlncycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzVweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnQ29uZmlncydcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25TY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93TWV0aG9kcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzVweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnTWV0aG9kcydcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25TY3JvbGxJbnRvVmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93RXZlbnRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0V2ZW50cydcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCA6IDFcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBTZWFyY2hGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgIDoge2NoYW5nZTogJ29uU2VhcmNoRmllbGRDaGFuZ2UnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dDogJ0ZpbHRlciBNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICAgIDogMTYwLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nVG9wIDogJzJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlciAgOiAnb25Ub2dnbGVNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLWNoZWNrLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdzaG93UHJpdmF0ZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1ByaXZhdGUnLFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblRvZ2dsZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dQcm90ZWN0ZWRNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdQcm90ZWN0ZWQnLFxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblRvZ2dsZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dTdGF0aWNNZW1iZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1N0YXRpYydcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IEhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ6ICdAY29uZmlnOnN0cnVjdHVyZURhdGEnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgOiBIaWVyYXJjaHlUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAwIGF1dG8nLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoICAgICA6IDMzMCxcbiAgICAgICAgICAgICAgICBzdHJ1Y3R1cmVEYXRhOiAnQGNvbmZpZzpzdHJ1Y3R1cmVEYXRhJ1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBNZW1iZXJzTGlzdCxcbiAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge211dGF0ZUl0ZW1zOiAnb25NdXRhdGVJdGVtcyd9LFxuICAgICAgICAgICAgcmVmZXJlbmNlOiAnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0J1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29tcG9uZW50ICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBTb3VyY2VWaWV3Q29tcG9uZW50IGZyb20gXCIuL1NvdXJjZVZpZXdDb21wb25lbnQubWpzXCI7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyQ29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkb2NzLWNsYXNzZGV0YWlscy1tYWluY29udGFpbmVyLWNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZG9jcy1jbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25IZWFkZXJDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlY29yZCAgICAgICAgICAgICAgPSBtZS5jb21wb25lbnQuc3RydWN0dXJlRGF0YSxcbiAgICAgICAgICAgIG1haW5Db250YWluZXIgICAgICAgPSBtZS5jb21wb25lbnQudXAoJ21haW4tY29udGFpbmVyJyksXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWFpbkNvbnRhaW5lci5kb3duKCdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJyksXG4gICAgICAgICAgICBjbGFzc05hbWUgICAgICAgICAgID0gKHJlY29yZC5wYXRoID8gcmVjb3JkLnBhdGggKyAnLicgOiAnJykgKyByZWNvcmQubmFtZTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBTb3VyY2VWaWV3Q29tcG9uZW50LFxuICAgICAgICAgICAgaWQgICAgICAgICAgIDogY2xhc3NOYW1lICsgJ19fc291cmNlJyxcbiAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvZGUnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IGNsYXNzTmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVcbiAgICAgKi9cbiAgICBvbk11dGF0ZUl0ZW1zKHN0b3JlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRDb25maWdzICAgID0gMCxcbiAgICAgICAgICAgIGNvdW50RXZlbnRzICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudE1ldGhvZHMgICAgPSAwLFxuICAgICAgICAgICAgY291bnRQcml2YXRlcyAgID0gMCxcbiAgICAgICAgICAgIGNvdW50UHJvdGVjdGVkcyA9IDAsXG4gICAgICAgICAgICBjb3VudFN0YXRpY3MgICAgPSAwO1xuXG4gICAgICAgIHN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5raW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY291bnRNZXRob2RzKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ua2luZCA9PT0gJ21lbWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb3VudENvbmZpZ3MrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRFdmVudHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJpdmF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb3VudFByaXZhdGVzKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJvdGVjdGVkJykge1xuICAgICAgICAgICAgICAgIGNvdW50UHJvdGVjdGVkcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5zY29wZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICAgICAgICBjb3VudFN0YXRpY3MrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93Q29uZmlncycpICAgICAgICAgLnRleHQgPSAnQ29uZmlncyAnICAgKyBjb3VudENvbmZpZ3M7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd01ldGhvZHMnKSAgICAgICAgIC50ZXh0ID0gJ01ldGhvZHMgJyAgICsgY291bnRNZXRob2RzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dFdmVudHMnKSAgICAgICAgICAudGV4dCA9ICdFdmVudHMgJyAgICArIGNvdW50RXZlbnRzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dQcml2YXRlTWVtYmVycycpICAudGV4dCA9ICdQcml2YXRlICcgICArIGNvdW50UHJpdmF0ZXM7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd1Byb3RlY3RlZE1lbWJlcnMnKS50ZXh0ID0gJ1Byb3RlY3RlZCAnICsgY291bnRQcm90ZWN0ZWRzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dTdGF0aWNNZW1iZXJzJykgICAudGV4dCA9ICdTdGF0aWMgJyAgICArIGNvdW50U3RhdGljcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TY3JvbGxJbnRvVmlldyhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCk7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgdGV4dCAgIDogYnV0dG9uLnJlZmVyZW5jZS5zdWJzdHIoNCksXG4gICAgICAgICAgICB2bm9kZUlkOiBtZS52aWV3LnZkb20uaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2VhcmNoRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0JykuZmlsdGVyTWVtYmVyc1F1ZXJ5ID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Ub2dnbGVNZW1iZXJzKGRhdGEpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiAgICAgID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCksXG4gICAgICAgICAgICBtZW1iZXJzTGlzdCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnKTtcblxuICAgICAgICBidXR0b24uaWNvbkNscyA9IGJ1dHRvbi5jaGVja2VkID8gJ2ZhIGZhLXNxdWFyZScgOiAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSAhYnV0dG9uLmNoZWNrZWQ7XG5cbiAgICAgICAgbWVtYmVyc0xpc3RbYnV0dG9uLnJlZmVyZW5jZV0gPSBidXR0b24uY2hlY2tlZDtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyQ29udHJvbGxlciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9saXN0L0Jhc2UubWpzJztcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NZW1iZXJzTGlzdFxuICogQGV4dGVuZHMgTmVvLmxpc3QuQmFzZVxuICovXG5jbGFzcyBNZW1iZXJzTGlzdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1lbWJlcnNMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1lbWJlcnNMaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2RvY3MtY2xhc3NoaWVyYXJjaHktbWVtYmVyc2xpc3QnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2RvY3MtY2xhc3NoaWVyYXJjaHktbWVtYmVyc2xpc3QnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZmlsdGVyTWVtYmVyc1F1ZXJ5Xz0nJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJNZW1iZXJzUXVlcnlfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dQcml2YXRlTWVtYmVyc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd1ByaXZhdGVNZW1iZXJzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dQcm90ZWN0ZWRNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93UHJvdGVjdGVkTWVtYmVyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93U3RhdGljTWVtYmVyc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd1N0YXRpY01lbWJlcnNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdGFyZ2V0Q2xhc3NOYW1lPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhcmdldENsYXNzTmFtZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NuOiBbXX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW11cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoaWVyYXJjaHlWaWV3ID0gbWUudXAoJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJykuZG93bignY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnKSxcbiAgICAgICAgICAgIG1haW5TdG9yZSAgICAgPSBtZS51cCgnbWFpbi1jb250YWluZXInKS5zdG9yZTtcblxuICAgICAgICBoaWVyYXJjaHlWaWV3Lm9uKHtcbiAgICAgICAgICAgIHJlZnJlc2hDbGFzc01lbWJlcnM6IG1lLm9uUmVmcmVzaENsYXNzTWVtYmVycyxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnN0b3JlID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICBmaWx0ZXJNb2RlOiAnYWR2YW5jZWQnLFxuICAgICAgICAgICAgc291cmNlSWQgIDogbWFpblN0b3JlLmlkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmlsdGVyTWVtYmVyc1F1ZXJ5IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZpbHRlck1lbWJlcnNRdWVyeSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25SZWZyZXNoQ2xhc3NNZW1iZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dQcm90ZWN0ZWRNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1Byb3RlY3RlZE1lbWJlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93UHJpdmF0ZU1lbWJlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93UHJpdmF0ZU1lbWJlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93U3RhdGljTWVtYmVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dTdGF0aWNNZW1iZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGFwcGx5Q29uZmlnc0hlYWRlcihzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoc3RvcmUuaXRlbXNbMF0gJiYgc3RvcmUuaXRlbXNbMF0ua2luZCA9PT0gJ21lbWJlcicpIHtcbiAgICAgICAgICAgIHZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsaW5nIHBsYWNlaG9sZGVyXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLW1lbWJlcmxpc3QtZ3JvdXAtaGVhZGVyJ10sXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnQ29uZmlncycsXG4gICAgICAgICAgICAgICAgJ2RhdGEtbGlzdC1oZWFkZXInOiAnQ29uZmlncydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBhcHBseUV2ZW50c0hlYWRlcihpdGVtLCBpbmRleCwgc3RvcmUsIHZkb20pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXRlbS5raW5kID09PSAnZXZlbnQnICYmXG4gICAgICAgICAgICBzdG9yZS5pdGVtc1tpbmRleCAtMV0gJiZcbiAgICAgICAgICAgIHN0b3JlLml0ZW1zW2luZGV4IC0xXS5raW5kICE9PSAnZXZlbnQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3MtbWVtYmVybGlzdC1ncm91cC1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdFdmVudHMnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge3pJbmRleDogM30sXG4gICAgICAgICAgICAgICAgJ2RhdGEtbGlzdC1oZWFkZXInOiAnRXZlbnRzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGFwcGx5TWV0aG9kc0hlYWRlcihpdGVtLCBpbmRleCwgc3RvcmUsIHZkb20pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXRlbS5raW5kID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXN0b3JlLml0ZW1zW2luZGV4IC0xXSB8fCAoXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLml0ZW1zW2luZGV4IC0xXSAmJlxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5pdGVtc1tpbmRleCAtMV0ua2luZCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1tZW1iZXJsaXN0LWdyb3VwLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ01ldGhvZHMnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge3pJbmRleDogMn0sXG4gICAgICAgICAgICAgICAgJ2RhdGEtbGlzdC1oZWFkZXInOiAnTWV0aG9kcydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJNZW1iZXJzUmVnRXggPSBuZXcgUmVnRXhwKG1lLmZpbHRlck1lbWJlcnNRdWVyeSB8fCAnJywgJ2dpJyksXG4gICAgICAgICAgICBoYXNFeGFtcGxlcyAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIHRhcmdldENsYXNzTmFtZSAgICA9IG1lLnRhcmdldENsYXNzTmFtZSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBoZWFkZXJUZXh0LCBpdGVtQXR0cmlidXRlcywgaXRlbUNvbmZpZywgcGF0aDtcblxuICAgICAgICB2ZG9tLmNuID0gW107XG4gICAgICAgIHZkb20gPSBtZS5hcHBseUNvbmZpZ3NIZWFkZXIobWUuc3RvcmUsIHZkb20pO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2ZG9tID0gbWUuYXBwbHlFdmVudHNIZWFkZXIoIGl0ZW0sIGluZGV4LCBtZS5zdG9yZSwgdmRvbSk7XG4gICAgICAgICAgICB2ZG9tID0gbWUuYXBwbHlNZXRob2RzSGVhZGVyKGl0ZW0sIGluZGV4LCBtZS5zdG9yZSwgdmRvbSk7XG5cbiAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzID0gW107XG5cbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUuc3Vic3RyKC0xKSA9PT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gaXRlbS5uYW1lLnNsaWNlKDAsIC0xKSA7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaCgnR1MnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0ubmVvQ2xhc3NOYW1lICE9PSB0YXJnZXRDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtQXR0cmlidXRlcy5wdXNoKCdpbmhlcml0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJpdmF0ZScgfHwgaXRlbS5hY2Nlc3MgPT09ICdwcm90ZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaChpdGVtLmFjY2Vzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnNjb3BlID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goJ3N0YXRpYycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXJUZXh0ID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAobWUuZmlsdGVyTWVtYmVyc1F1ZXJ5ICE9PSAnJyAmJiBtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ID0gaGVhZGVyVGV4dC5yZXBsYWNlKGZpbHRlck1lbWJlcnNSZWdFeCwgbWF0Y2ggPT4gYDxzcGFuIGNsYXNzPVwibmVvLWhpZ2hsaWdodC1zZWFyY2hcIj4ke21hdGNofTwvc3Bhbj5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uZmlnc1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSAmJiBpdGVtLnR5cGUubmFtZXMpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnOiB7JyArIE1lbWJlcnNMaXN0LmVzY2FwZUh0bWwoaXRlbS50eXBlLm5hbWVzLmpvaW4oJ3wnKSkgKyAnfScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdHZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnID0gJyArIGl0ZW0uZGVmYXVsdHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbWV0aG9kc1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyYW1zICYmIGl0ZW0ua2luZCAhPT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCcoJyArIGl0ZW0ucGFyYW1zLnJlZHVjZSgocmVzdWx0LCBwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ubmFtZS5pbmRleE9mKCcuJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgnWycgKyBwYXJhbS5uYW1lICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignLCAnKSArICcpJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnJldHVybnMpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnIOKGkiB7JyArIE1lbWJlcnNMaXN0LmVzY2FwZUh0bWwoaXRlbS5yZXR1cm5zWzBdLnR5cGUubmFtZXMuam9pbignfCcpICsgJ30nKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhdGggPSBpdGVtLm1ldGEucGF0aDtcblxuICAgICAgICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJy9uZW8ubWpzLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lby5tanMvJykgKyA5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0aC5pbmNsdWRlcygnL25lb21qcy8nKSkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cihwYXRoLmluZGV4T2YoJy9uZW9tanMvJykgICsgOCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoJy9uZW8vJykpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIocGF0aC5pbmRleE9mKCcvbmVvLycpICAgICArIDUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdC1pdGVtJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWxpc3QtaXRlbS1oZWFkZXItY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tbGlzdC1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBoZWFkZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWxpc3QtaXRlbS1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaXRlbUF0dHJpYnV0ZXMuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiAnbmVvLWRvY3Mtdmlldy1zb3VyY2UtbGluay1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjbiA6W3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLXZpZXctc291cmNlLWxpbmsnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYgICAgIDogJyN2aWV3U291cmNlPScgKyBpdGVtLm5lb0NsYXNzTmFtZSArICcmbGluZT0nICsgaXRlbS5tZXRhLmxpbmVubyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1NvdXJjZTogJyArIHBhdGggKyAnLycgKyBpdGVtLm1ldGEuZmlsZW5hbWUgKyAnIChMaW5lICcgKyBpdGVtLm1ldGEubGluZW5vICsgJyknXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uZXhhbXBsZXMgJiYgaXRlbS5leGFtcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaGFzRXhhbXBsZXMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5leGFtcGxlcy5mb3JFYWNoKGV4YW1wbGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtQ29uZmlnLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAncHJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWcgOiAnY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogZXhhbXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmFtcyAmJiBpdGVtLnBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNvbmZpZy5jbi5wdXNoKE1lbWJlcnNMaXN0LmNyZWF0ZVBhcmFtZXRlcnNUYWJsZShpdGVtLnBhcmFtcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5yZXR1cm5zICYmIGl0ZW0ua2luZCAhPT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGl0ZW1Db25maWcuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1JldHVybnMgeycgKyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKGl0ZW0ucmV0dXJuc1swXS50eXBlLm5hbWVzLmpvaW4oJ3wnKSArICd9ICcpICsgKGl0ZW0ucmV0dXJuc1swXS5kZXNjcmlwdGlvbiB8fCAnJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKGl0ZW1Db25maWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAoaGFzRXhhbXBsZXMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodEluaXQoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVBhcmFtZXRlcnNUYWJsZShwYXJhbXMpIHtcbiAgICAgICAgbGV0IGhhc0RlZmF1bHRWYWx1ZXMgID0gZmFsc2UsXG4gICAgICAgICAgICBoYXNPcHRpb25hbFBhcmFtcyA9IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sIG5lc3RlZFBhcmFtcywgcGFyYW1UYWJsZTtcblxuICAgICAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW0uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHR2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgaGFzRGVmYXVsdFZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbS5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9uYWwnKSkge1xuICAgICAgICAgICAgICAgIGhhc09wdGlvbmFsUGFyYW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyYW1UYWJsZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgIGNsczogJ2RvY3MtcGFyYW0tdGFibGUnLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3RoZWFkJyxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnTmFtZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnVHlwZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhhc0RlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHBhcmFtVGFibGUuY25bMF0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRGVmYXVsdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc09wdGlvbmFsUGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbVRhYmxlLmNuWzBdLmNuLnNwbGljZSgyLCAwLCB7XG4gICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ09wdGlvbmFsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW0ubmFtZS5pbmRleE9mKCcuJykgPCAwKSB7IC8vIGlnbm9yZSBuZXN0ZWQgcGFyYW1zXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmVzdGVkUGFyYW1zID0gW107XG5cbiAgICAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAubmFtZS5pbmRleE9mKHBhcmFtLm5hbWUgKyAnLicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gTmVvLmNsb25lKHAsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwLm5hbWUgPSBwLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAubmFtZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5uYW1lID0gcC5uYW1lLmpvaW4oJy4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkUGFyYW1zLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGRlc2NyaXB0aW9uLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcnNMaXN0LmNyZWF0ZVBhcmFtZXRlcnNUYWJsZShuZXN0ZWRQYXJhbXMpXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFyYW1UYWJsZS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS50eXBlID8gTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChwYXJhbS50eXBlLm5hbWVzLmpvaW4oJyB8ICcpKSA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1UYWJsZS5jbltwYXJhbVRhYmxlLmNuLmxlbmd0aCAtIDFdLmNuLnNwbGljZSgyLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLmRlZmF1bHR2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiAocGFyYW0uZGVmYXVsdHZhbHVlICsgJycpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNPcHRpb25hbFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVRhYmxlLmNuW3BhcmFtVGFibGUuY24ubGVuZ3RoIC0gMV0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0ub3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyYW1UYWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyAnPCcgJiAnPidcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBlc2NhcGVIdG1sKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZmlsdGVyQW5kU29ydEl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGllcmFyY2h5TWFwICAgPSB7fSxcbiAgICAgICAgICAgIGhpZXJhcmNoeVN0b3JlID0gbWUudXAoJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJykuZG93bignY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnKS5zdG9yZSxcbiAgICAgICAgICAgIGhpZXJhcmNoeUl0ZW1zID0gaGllcmFyY2h5U3RvcmUuaXRlbXMsXG4gICAgICAgICAgICBpICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICB0bXBJdGVtcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgZmlsdGVycywgdG1wSXRlbXNMZW47XG5cbiAgICAgICAgaGllcmFyY2h5SXRlbXMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgICAgICAgaWYgKGNscy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdG1wSXRlbXMucHVzaChjbHMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRtcEl0ZW1zTGVuID0gdG1wSXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgdG1wSXRlbXNMZW47IGkrKykge1xuICAgICAgICAgICAgaGllcmFyY2h5TWFwW3RtcEl0ZW1zW2ldXSA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS50YXJnZXRDbGFzc05hbWUgPSBoaWVyYXJjaHlJdGVtc1toaWVyYXJjaHlJdGVtcy5sZW5ndGggLTFdLm5hbWU7XG5cbiAgICAgICAgZmlsdGVycyA9IFt7XG4gICAgICAgICAgICBvcGVyYXRvcjogJ2luY2x1ZGVkJyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAnbmVvQ2xhc3NOYW1lJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiB0bXBJdGVtc1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2tpbmQnLFxuICAgICAgICAgICAgdmFsdWUgICA6ICdjbGFzcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgcHJvcGVydHk6ICdraW5kJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiAnY29uc3RhbnQnIC8vIHRvZG8/XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAna2luZCcsXG4gICAgICAgICAgICB2YWx1ZSAgIDogJ21vZHVsZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICdpc1VuZGVmaW5lZCcsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2luaGVyaXRlZCdcbiAgICAgICAgfV07XG5cbiAgICAgICAgaWYgKCFtZS5zaG93UHJpdmF0ZU1lbWJlcnMpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnYWNjZXNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3ByaXZhdGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuc2hvd1Byb3RlY3RlZE1lbWJlcnMpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnYWNjZXNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3Byb3RlY3RlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZS5zaG93U3RhdGljTWVtYmVycykge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdzY29wZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6ICdzdGF0aWMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09ICcnICYmIG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ2xpa2UnLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IG1lLmZpbHRlck1lbWJlcnNRdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgc2NvcGUgICA6IG1lLFxuICAgICAgICAgICAgZmlsdGVyQnk6IGZ1bmN0aW9uKGl0ZW0sIGZpbHRlcmVkSXRlbXMsIGFsbEl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENsYXNzTmFtZSA9IG1lLnRhcmdldENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtLCBpLCBsZW47XG5cbiAgICAgICAgICAgICAgICAvLyBhbHdheXMgZXhjbHVkZSBpbmhlcml0ZWQgY2xhc3NOYW1lICYgbnR5cGUgY29uZmlnc1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdudHlwZScgJiYgaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xuICAgICAgICAgICAgICAgICAgICBsZW4gPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW0gPSBmaWx0ZXJlZEl0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gZmlsdGVyZWRJdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgID09PSBmaWx0ZXJlZEl0ZW0ubmFtZSAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zY29wZSA9PT0gZmlsdGVyZWRJdGVtLnNjb3BlICYmIC8vIHN0YXRpYyBWUyBpbnN0YW5jZSBtZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeU1hcFtpdGVtLm5lb0NsYXNzTmFtZV0gPCBoaWVyYXJjaHlNYXBbZmlsdGVyZWRJdGVtLm5lb0NsYXNzTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZS5maWx0ZXJzID0gZmlsdGVycztcblxuICAgICAgICBtZS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgIC8vIENvbmZpZ3MgPT4gTWV0aG9kcyA9PiBFdmVudHNcbiAgICAgICAgICAgIHNvcnRCeTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIGEgPSBhLmtpbmQgPT09ICdtZW1iZXInID8gMCA6IGEua2luZCA9PT0gJ2Z1bmN0aW9uJyA/IDEgOiAyO1xuICAgICAgICAgICAgICAgIGIgPSBiLmtpbmQgPT09ICdtZW1iZXInID8gMCA6IGIua2luZCA9PT0gJ2Z1bmN0aW9uJyA/IDEgOiAyO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnLFxuICAgICAgICAgICAgcHJvcGVydHkgOiAnbmFtZSdcbiAgICAgICAgfV07XG5cbiAgICAgICAgbWUuZmlyZSgnbXV0YXRlSXRlbXMnLCBtZS5zdG9yZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdG8gbm90IGNhbGwgY3JlYXRlSXRlbXMoKSBhdCB0aGlzIHBvaW50ID0+IG9uUmVmcmVzaENsYXNzTWVtYmVycygpXG4gICAgICovXG4gICAgb25TdG9yZUZpbHRlcigpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uUmVmcmVzaENsYXNzTWVtYmVycygpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBbmRTb3J0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtcygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWVtYmVyc0xpc3QpO1xuXG5leHBvcnQge01lbWJlcnNMaXN0IGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5Tb3VyY2VWaWV3Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgU291cmNlVmlld0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuU291cmNlVmlld0NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5Tb3VyY2VWaWV3Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy1zb3VyY2V2aWV3Y29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1zb3VyY2V2aWV3Y29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzSGlnaGxpZ2h0ZWRfPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzSGlnaGxpZ2h0ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBsaW5lXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpbmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHByZXZpb3VzTGluZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHByZXZpb3VzTGluZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBzdHJ1Y3R1cmVEYXRhPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9IHtvdmVyZmxvdzogJ2F1dG8nfVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NuOiBbLy8uLi5dfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2NvZGUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2phdmFzY3JpcHQnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdXJsICA9ICcuLi8uLi8nICsgbWUuc3RydWN0dXJlRGF0YS5zcmNQYXRoO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBlbnN1cmUgd2UgYXJlIG5vdCBtb3VudGluZ1xuICAgICAgICAgICAgICAgIG1lLmFwcGx5U291cmNlQ29kZShkYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaXNIaWdobGlnaHRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElzSGlnaGxpZ2h0ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc3ludGF4SGlnaGxpZ2h0TGluZSh7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpbmUgICA6IG1lLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpbmU6IG1lLnByZXZpb3VzTGluZSxcbiAgICAgICAgICAgICAgICAgICAgdm5vZGVJZCAgIDogbWUudmRvbS5jblswXS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsaW5lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExpbmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBtZS5wcmV2aW91c0xpbmUgPSBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5pc0hpZ2hsaWdodGVkKSB7XG4gICAgICAgICAgICBtZS5hZnRlclNldElzSGlnaGxpZ2h0ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGFwcGx5U291cmNlQ29kZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHZkb20uY25bMF07IC8vIHByZSB0YWdcblxuICAgICAgICBub2RlLmNuWzBdLmlubmVySFRNTCA9IGRhdGE7IC8vIGNvZGUgdGFnXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbWUuc3ludGF4SGlnaGxpZ2h0KG5vZGUuaWQpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqL1xuICAgIHN5bnRheEhpZ2hsaWdodCh2bm9kZUlkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICBpZiAobWUudm5vZGUpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodCh7XG4gICAgICAgICAgICAgICAgdm5vZGVJZDogbWUudmRvbS5jblswXS5pZFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuaXNIaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkID0gbWUub24oJ21vdW50ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnVuKCdtb3VudGVkJywgaWQpO1xuICAgICAgICAgICAgICAgICAgICBtZS5zeW50YXhIaWdobGlnaHQodm5vZGVJZCk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNvdXJjZVZpZXdDb21wb25lbnQpO1xuXG5leHBvcnQge1NvdXJjZVZpZXdDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgVHV0b3JpYWxDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBmaWxlTmFtZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBmaWxlVHlwZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWxlVHlwZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9e292ZXJmbG93OiAnYXV0byd9XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXNKc29uID0gbWUuZmlsZVR5cGUgPT09ICdqc29uJyxcbiAgICAgICAgICAgIHVybCAgICA9ICcuLi8uLi9kb2NzL3R1dG9yaWFscy8nICsgbWUuZmlsZU5hbWU7XG5cbiAgICAgICAgTmVvLlhocltpc0pzb24gPyAncHJvbWlzZUpzb24nIDogJ3Byb21pc2VSZXF1ZXN0J10oe1xuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyBlbnN1cmUgd2UgYXJlIG5vdCBtb3VudGluZ1xuICAgICAgICAgICAgICAgIG1lLmFwcGx5U291cmNlQ29kZShpc0pzb24gPyBkYXRhLmpzb24gOiBkYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBhcHBseVNvdXJjZUNvZGUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUuZmlsZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgdmRvbS5jbiA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZG9tLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFR1dG9yaWFsQ29tcG9uZW50LnN5bnRheEhpZ2hsaWdodCgpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgc3ludGF4SGlnaGxpZ2h0KCkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUy5zeW50YXhIaWdobGlnaHRJbml0KCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUdXRvcmlhbENvbXBvbmVudCk7XG5cbmV4cG9ydCB7VHV0b3JpYWxDb21wb25lbnQgYXMgZGVmYXVsdH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
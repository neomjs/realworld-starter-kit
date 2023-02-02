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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Api
 * @extends Neo.data.Model
 */
class Api extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }
}

Neo.applyClassConfig(Api);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./docs/app/model/Example.mjs":
/*!************************************!*\
  !*** ./docs/app/model/Example.mjs ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Example
 * @extends Neo.data.Model
 */
class Example extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }
}

Neo.applyClassConfig(Example);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Example);


/***/ }),

/***/ "./docs/app/model/Tutorial.mjs":
/*!*************************************!*\
  !*** ./docs/app/model/Tutorial.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class Docs.app.model.Tutorial
 * @extends Neo.data.Model
 */
class Tutorial extends _node_modules_neo_mjs_src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }
}

Neo.applyClassConfig(Tutorial);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tutorial);


/***/ }),

/***/ "./docs/app/store/Api.mjs":
/*!********************************!*\
  !*** ./docs/app/store/Api.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Api_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Api.mjs */ "./docs/app/model/Api.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Api
 * @extends Neo.data.Store
 */
class Api extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static config = {
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
    }
}

Neo.applyClassConfig(Api);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);


/***/ }),

/***/ "./docs/app/store/Examples.mjs":
/*!*************************************!*\
  !*** ./docs/app/store/Examples.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_Example_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Example.mjs */ "./docs/app/model/Example.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class Docs.app.store.Examples
 * @extends Neo.data.Store
 */
class Examples extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static config = {
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
    }
}

Neo.applyClassConfig(Examples);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Examples);


/***/ }),

/***/ "./docs/app/store/Tutorials.mjs":
/*!**************************************!*\
  !*** ./docs/app/store/Tutorials.mjs ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _model_Tutorial_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Tutorial.mjs */ "./docs/app/model/Tutorial.mjs");



/**
 * @class Docs.app.store.Tutorials
 * @extends Neo.data.Store
 */
class Tutorials extends _node_modules_neo_mjs_src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }
}

Neo.applyClassConfig(Tutorials);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tutorials);


/***/ }),

/***/ "./docs/app/view/ApiTreeList.mjs":
/*!***************************************!*\
  !*** ./docs/app/view/ApiTreeList.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _store_Api_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Api.mjs */ "./docs/app/store/Api.mjs");



/**
 * @class Docs.view.ApiTreeList
 * @extends Neo.tree.List
 */
class ApiTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/output/structure.json'
        }).then(data => {
            me.store.data = data.json;
            me.createItems(null, me.getListItemsRoot(), 0);
            me.update();
        });
    }
}

Neo.applyClassConfig(ApiTreeList);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiTreeList);


/***/ }),

/***/ "./docs/app/view/ContentTabContainer.mjs":
/*!***********************************************!*\
  !*** ./docs/app/view/ContentTabContainer.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");



/**
 * @class Docs.view.ContentTabContainer
 * @extends Neo.tab.Container
 */
class ContentTabContainer extends _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTabContainer);


/***/ }),

/***/ "./docs/app/view/ExamplesTreeList.mjs":
/*!********************************************!*\
  !*** ./docs/app/view/ExamplesTreeList.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_Examples_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Examples.mjs */ "./docs/app/store/Examples.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");



/**
 * @class Docs.view.ExamplesTreeList
 * @extends Neo.tree.List
 */
class ExamplesTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static config = {
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
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/examples.json'
        }).then(data => {
            me.store.data = data.json;
            me.createItems(null, me.getListItemsRoot(), 0);
            me.update();
        });
    }
}

Neo.applyClassConfig(ExamplesTreeList);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplesTreeList);


/***/ }),

/***/ "./docs/app/view/HeaderContainer.mjs":
/*!*******************************************!*\
  !*** ./docs/app/view/HeaderContainer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_form_field_Search_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/form/field/Search.mjs */ "./node_modules/neo.mjs/src/form/field/Search.mjs");




/**
 * @class Docs.view.HeaderContainer
 * @extends Neo.container.Base
 */
class HeaderContainer extends _node_modules_neo_mjs_src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }
}

Neo.applyClassConfig(HeaderContainer);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderContainer);


/***/ }),

/***/ "./docs/app/view/MainContainer.mjs":
/*!*****************************************!*\
  !*** ./docs/app/view/MainContainer.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    static config = {
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
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainer);


/***/ }),

/***/ "./docs/app/view/MainContainerController.mjs":
/*!***************************************************!*\
  !*** ./docs/app/view/MainContainerController.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

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
            hash                = value?.hash,
            contentTabContainer = me.getReference('content-tabcontainer'),
            structureStore      = me.getReference('api-treelist').store,
            record, tab;

        if (hash?.hasOwnProperty('viewSource')) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainerController);


/***/ }),

/***/ "./docs/app/view/TutorialsTreeList.mjs":
/*!*********************************************!*\
  !*** ./docs/app/view/TutorialsTreeList.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _store_Tutorials_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Tutorials.mjs */ "./docs/app/store/Tutorials.mjs");



/**
 * @class Docs.view.TutorialsTreeList
 * @extends Neo.tree.List
 */
class TutorialsTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        Neo.Xhr.promiseJson({
            url: '../../docs/tutorials/tutorials.json'
        }).then(data => {
            me.store.data = data.json;
            me.createItems(null, me.getListItemsRoot(), 0);
            me.update();
        });
    }
}

Neo.applyClassConfig(TutorialsTreeList);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialsTreeList);


/***/ }),

/***/ "./docs/app/view/classdetails/HeaderComponent.mjs":
/*!********************************************************!*\
  !*** ./docs/app/view/classdetails/HeaderComponent.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.classdetails.HeaderComponent
 * @extends Neo.component.Base
 */
class HeaderComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
        _vdom:
        {cn: [
            {tag: 'span', cls: ['neo-docs-header-text']}
        ]}
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me         = this,
            className = me.record.className,
            store     = me.up('main-container').store,
            record    = store.find({$kind: className === 'Neo' ? 'module' : 'class', neoClassName: className})[0],
            i         = 0,
            len       = record?.tags?.length || 0,
            singleton = false;

        for (; i < len; i++) {
            if (record.tags[i].title === 'singleton') {
                singleton = true;
                break;
            }
        }

        me.vdom.cn[0].innerHTML = singleton ? (className + ' → Singleton') : className;

        if (record.description) {
            me.vdom.cn.push({
                cls      : ['neo-docs-header-description'],
                innerHTML: record.description
            });
        }

        me.update();
    }
}

Neo.applyClassConfig(HeaderComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderComponent);


/***/ }),

/***/ "./docs/app/view/classdetails/HierarchyTreeList.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/HierarchyTreeList.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/tree/List.mjs */ "./node_modules/neo.mjs/src/tree/List.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Docs.view.classdetails.HierarchyTreeList
 * @extends Neo.tree.List
 */
class HierarchyTreeList extends _node_modules_neo_mjs_src_tree_List_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

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

        while (item?.hasOwnProperty('augments')) {
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
            vdomNode = me.getVdomChild(vnodeId);

        _node_modules_neo_mjs_src_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][record.checked ? 'add' : 'remove'](vdomNode.cls, 'unchecked');

        record.checked = !record.checked;

        me.update();

        me.fire('refreshClassMembers');
    }
}

Neo.applyClassConfig(HierarchyTreeList);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HierarchyTreeList);


/***/ }),

/***/ "./docs/app/view/classdetails/MainContainer.mjs":
/*!******************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainer.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    static config = {
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
    }
}

Neo.applyClassConfig(MainContainer);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainer);


/***/ }),

/***/ "./docs/app/view/classdetails/MainContainerController.mjs":
/*!****************************************************************!*\
  !*** ./docs/app/view/classdetails/MainContainerController.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");
/* harmony import */ var _SourceViewComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SourceViewComponent.mjs */ "./docs/app/view/classdetails/SourceViewComponent.mjs");



/**
 * @class Docs.view.classdetails.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _node_modules_neo_mjs_src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='Docs.view.classdetails.MainContainerController'
         * @protected
         */
        className: 'Docs.view.classdetails.MainContainerController'
    }

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
            vnodeId: me.component.vdom.id
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainerController);


/***/ }),

/***/ "./docs/app/view/classdetails/MembersList.mjs":
/*!****************************************************!*\
  !*** ./docs/app/view/classdetails/MembersList.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");



/**
 * @class Docs.view.classdetails.MembersList
 * @extends Neo.list.Base
 */
class MembersList extends _node_modules_neo_mjs_src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
        _vdom:
        {cn: []}
    }

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
        oldValue !== undefined && this.onRefreshClassMembers();
    }

    /**
     * Triggered after the showProtectedMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowProtectedMembers(value, oldValue) {
        oldValue !== undefined && this.onRefreshClassMembers();
    }

    /**
     * Triggered after the showPrivateMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowPrivateMembers(value, oldValue) {
        oldValue !== undefined && this.onRefreshClassMembers();
    }

    /**
     * Triggered after the showStaticMembers config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowStaticMembers(value, oldValue) {
        oldValue !== undefined && this.onRefreshClassMembers();
    }

    /**
     *
     * @param {Neo.collection.Base} store
     * @param {Object} vdom
     * @returns {Object} vdom
     */
    applyConfigsHeader(store, vdom) {
        if (store.items[0]?.kind === 'member') {
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
            store.items[index -1]?.kind !== 'event'
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
                    store.items[index -1]?.kind !== 'function'
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
            if (item.type?.names) {
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

            if (item.examples?.length > 0) {
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

            if (item.params?.length > 0) {
                itemConfig.cn.push(MembersList.createParametersTable(item.params));
            }

            if (item.returns && item.kind !== 'event') {
                itemConfig.cn.push({
                    innerHTML: 'Returns {' + MembersList.escapeHtml(item.returns[0].type.names.join('|') + '} ') + (item.returns[0].description || '')
                });
            }

            vdom.cn.push(itemConfig);
        });

        me.update();

        hasExamples && setTimeout(() => {
            Neo.main.addon.HighlightJS.syntaxHighlightInit();
        }, 100);
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
            filterBy: function(opts) {
                let me              = this,
                    filteredItems   = opts.filteredItems,
                    item            = opts.item,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MembersList);


/***/ }),

/***/ "./docs/app/view/classdetails/SourceViewComponent.mjs":
/*!************************************************************!*\
  !*** ./docs/app/view/classdetails/SourceViewComponent.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.SourceViewComponent
 * @extends Neo.component.Base
 */
class SourceViewComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
        _vdom:
        {cn: [
            {tag: 'pre', cn: [
                {tag: 'code', class: 'javascript'}
            ]}
        ]}
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me   = this,
            url  = '../../' + me.structureData.srcPath;

        Neo.Xhr.promiseRequest({
            url: url
        }).then(data => {
            me.applySourceCode(data.response);
        });
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (value) {
            setTimeout(() => {
                this.syntaxHighlight();
            }, 50);
        }
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
            node = me.vdom.cn[0]; // pre tag

        node.cn[0].innerHTML = data; // code tag
        me.update();

        me.mounted && me.syntaxHighlight();
    }

    /**
     *
     */
    syntaxHighlight() {
        let me = this;

        Neo.main.addon.HighlightJS.syntaxHighlight({
            vnodeId: me.vdom.cn[0].id
        }).then(() => {
            if (!me.isHighlighted) {
                me.isHighlighted = true;
            } else {
                me.afterSetIsHighlighted(true, false);
            }
        });
    }
}

Neo.applyClassConfig(SourceViewComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourceViewComponent);


/***/ }),

/***/ "./docs/app/view/classdetails/TutorialComponent.mjs":
/*!**********************************************************!*\
  !*** ./docs/app/view/classdetails/TutorialComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Docs.view.classdetails.TutorialComponent
 * @extends Neo.component.Base
 */
class TutorialComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
    }

    /**
     *
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

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
        let me = this;

        if (me.fileType === 'json') {
            me.vdom.cn = data;
        } else {
            me.vdom.innerHTML = data;
        }

        me.update();

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsaUVBQWUsbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSzZDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvRkFBUztBQUN6QztBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0I7QUFDL0I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC9tb2RlbC9BcGkubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvbW9kZWwvRXhhbXBsZS5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC9tb2RlbC9UdXRvcmlhbC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC9zdG9yZS9BcGkubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvc3RvcmUvRXhhbXBsZXMubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvc3RvcmUvVHV0b3JpYWxzLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvQXBpVHJlZUxpc3QubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9Db250ZW50VGFiQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvRXhhbXBsZXNUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L0hlYWRlckNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L01haW5Db250YWluZXIubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L1R1dG9yaWFsc1RyZWVMaXN0Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL0hlYWRlckNvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9IaWVyYXJjaHlUcmVlTGlzdC5tanMiLCJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9kb2NzL2FwcC92aWV3L2NsYXNzZGV0YWlscy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL01lbWJlcnNMaXN0Lm1qcyIsIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2RvY3MvYXBwL3ZpZXcvY2xhc3NkZXRhaWxzL1NvdXJjZVZpZXdDb21wb25lbnQubWpzIiwid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vZG9jcy9hcHAvdmlldy9jbGFzc2RldGFpbHMvVHV0b3JpYWxDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vYXBwL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5leHBvcnQgY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnRG9jcydcbn0pO1xuXG4iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAubW9kZWwuQXBpXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBBcGkgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC5tb2RlbC5BcGknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLm1vZGVsLkFwaScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY2xhc3NOYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdjb2xsYXBzZWQnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzTGVhZicsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhcmVudElkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAncGF0aCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc2luZ2xldG9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnc3JjUGF0aCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBpKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5tb2RlbC5FeGFtcGxlXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAubW9kZWwuRXhhbXBsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAubW9kZWwuRXhhbXBsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzXG4gICAgICAgICAqL1xuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY29sbGFwc2VkJywgLy8gb3B0aW9uYWwsIG9ubHkgbmVlZGVkIGZvciBjb2xsYXBzZWQgbm9uIGxlYWYgaXRlbXNcbiAgICAgICAgICAgIHR5cGU6ICdCb29sZWFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICAgICAgdHlwZTogJ0ludGVnZXInXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpc0xlYWYnLFxuICAgICAgICAgICAgdHlwZTogJ0Jvb2xlYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXJlbnRJZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhdGgnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfV1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV4YW1wbGUpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5tb2RlbC5UdXRvcmlhbFxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgVHV0b3JpYWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLmFwcC5tb2RlbC5UdXRvcmlhbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAubW9kZWwuVHV0b3JpYWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGZpZWxkc1xuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2ZpbGVOYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgICB0eXBlOiAnSW50ZWdlcidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2lzTGVhZicsXG4gICAgICAgICAgICB0eXBlOiAnQm9vbGVhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ3BhcmVudElkJyxcbiAgICAgICAgICAgIHR5cGU6ICdJbnRlZ2VyJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAndHlwZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHV0b3JpYWwpO1xuXG5leHBvcnQgZGVmYXVsdCBUdXRvcmlhbDtcbiIsImltcG9ydCBBcGlNb2RlbCBmcm9tICcuLi9tb2RlbC9BcGkubWpzJztcbmltcG9ydCBTdG9yZSAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5zdG9yZS5BcGlcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEFwaSBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnN0b3JlLkFwaSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAuc3RvcmUuQXBpJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWw9QXBpTW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBBcGlNb2RlbFxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBpKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBpO1xuIiwiaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi4vbW9kZWwvRXhhbXBsZS5tanMnO1xuaW1wb3J0IFN0b3JlICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy5hcHAuc3RvcmUuRXhhbXBsZXNcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIEV4YW1wbGVzIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy5hcHAuc3RvcmUuRXhhbXBsZXMnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3MuYXBwLnN0b3JlLkV4YW1wbGVzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWw9RXhhbXBsZVxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IEV4YW1wbGVcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEV4YW1wbGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZXM7XG4iLCJpbXBvcnQgU3RvcmUgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzJztcbmltcG9ydCBUdXRvcmlhbCBmcm9tICcuLi9tb2RlbC9UdXRvcmlhbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLmFwcC5zdG9yZS5UdXRvcmlhbHNcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIFR1dG9yaWFscyBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3MuYXBwLnN0b3JlLlR1dG9yaWFscydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy5hcHAuc3RvcmUuVHV0b3JpYWxzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWw9VHV0b3JpYWxcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBUdXRvcmlhbFxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVHV0b3JpYWxzKTtcblxuZXhwb3J0IGRlZmF1bHQgVHV0b3JpYWxzO1xuIiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcbmltcG9ydCBBcGlTdG9yZSBmcm9tICcuLi9zdG9yZS9BcGkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LkFwaVRyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIEFwaVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LkFwaVRyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuQXBpVHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYXBpLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2FwaS10cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZT1BcGlTdG9yZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogQXBpU3RvcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9vdXRwdXQvc3RydWN0dXJlLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5zdG9yZS5kYXRhID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMobnVsbCwgbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpLCAwKTtcbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEFwaVRyZWVMaXN0KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBpVHJlZUxpc3Q7XG4iLCJpbXBvcnQgQ29udGFpbmVyICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgSGVhZGVyQnV0dG9uIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvaGVhZGVyL0J1dHRvbi5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuQ29udGVudFRhYkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLnRhYi5Db250YWluZXJcbiAqL1xuY2xhc3MgQ29udGVudFRhYkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuQ29udGVudFRhYkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LkNvbnRlbnRUYWJDb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZG9jcy1jb250ZW50LXRhYmNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdkb2NzLWNvbnRlbnQtdGFiY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGFjdGl2YXRlSW5zZXJ0ZWRUYWJzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2YXRlSW5zZXJ0ZWRUYWJzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb250ZW50Q29udGFpbmVyRGVmYXVsdHM9e2NsczpbLy8uLi5dfVxuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudENvbnRhaW5lckRlZmF1bHRzOiB7XG4gICAgICAgICAgICBjbHM6IFtcbiAgICAgICAgICAgICAgICAnbmVvLWRvY3MtdGFiLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICAnbmVvLXRhYi1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgJ25lby1jb250YWluZXInXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGhlYWRlclRvb2xiYXJEZWZhdWx0cz17Y2xzOlsvLy4uLl19XG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJUb29sYmFyRGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGNsczogW1xuICAgICAgICAgICAgICAgICdkb2NzLXRhYi1oZWFkZXItdG9vbGJhcicsXG4gICAgICAgICAgICAgICAgJ25lby10YWItaGVhZGVyLXRvb2xiYXInLFxuICAgICAgICAgICAgICAgICduZW8tdG9vbGJhcidcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBodG1sIDogJ1dlbGNvbWUgdG8gdGhlIG5lby5tanMgZG9jcyEnLFxuICAgICAgICAgICAgc3R5bGU6IHtwYWRkaW5nOiAnMjBweCd9LFxuXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdXNlcnMnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdXZWxjb21lISdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzb3J0YWJsZT10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBtZS5jbHM7XG5cbiAgICAgICAgY2xzLnVuc2hpZnQoJ2RvY3MtY29udGVudC10YWJjb250YWluZXInKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRpbmcgdGhlIGJ1dHRvbiBjbGljayBsaXN0ZW5lciB0byBhbGxvdyBjbG9zaW5nIHRhYnMgb24gaWNvbiBjbGlja1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbWVyZ2VkIGNvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBnZXRUYWJCdXR0b25Db25maWcoY29uZmlnLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgOiBIZWFkZXJCdXR0b24sXG4gICAgICAgICAgICAgICAgZmxleCAgIDogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGluZGV4ICA6IGluZGV4LFxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IG1lLmFjdGl2ZUluZGV4ID09PSBpbmRleCxcblxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoID0gZGF0YS5wYXRoLm1hcChlID0+IGUuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0aFswXS5pbmRleE9mKCduZW8tdGFiLWhlYWRlci1idXR0b24tJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5hY3RpdmVJbmRleCA9IGRhdGEuY29tcG9uZW50LmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5yZW1vdmVBdChOZW8uZ2V0Q29tcG9uZW50KG1lLnRhYkJhcklkKS5pbmRleE9mKHBhdGhbMV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gey4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZ307XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250ZW50VGFiQ29udGFpbmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFRhYkNvbnRhaW5lcjtcbiIsImltcG9ydCBFeGFtcGxlc1N0b3JlIGZyb20gJy4uL3N0b3JlL0V4YW1wbGVzLm1qcyc7XG5pbXBvcnQgVHJlZUxpc3QgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdHJlZS9MaXN0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5FeGFtcGxlc1RyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIEV4YW1wbGVzVHJlZUxpc3QgZXh0ZW5kcyBUcmVlTGlzdCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuRXhhbXBsZXNUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LkV4YW1wbGVzVHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZXhhbXBsZXMtdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZXhhbXBsZXMtdHJlZWxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2RvY3MtZXhhbXBsZXMtdHJlZWxpc3QnLCAnbmVvLXRyZWUtbGlzdCcsICduZW8tbGlzdC1jb250YWluZXInLCAnbmVvLWxpc3QnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAnZG9jcy1leGFtcGxlcy10cmVlbGlzdCcsXG4gICAgICAgICAgICAnbmVvLXRyZWUtbGlzdCcsXG4gICAgICAgICAgICAnbmVvLWxpc3QtY29udGFpbmVyJyxcbiAgICAgICAgICAgICduZW8tbGlzdCdcbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlPUV4YW1wbGVzU3RvcmVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IEV4YW1wbGVzU3RvcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9leGFtcGxlcy5qc29uJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuc3RvcmUuZGF0YSA9IGRhdGEuanNvbjtcbiAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKG51bGwsIG1lLmdldExpc3RJdGVtc1Jvb3QoKSwgMCk7XG4gICAgICAgICAgICBtZS51cGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhFeGFtcGxlc1RyZWVMaXN0KTtcblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZXNUcmVlTGlzdDtcbiIsImltcG9ydCBDb250YWluZXIgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBCdXR0b24gICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvYnV0dG9uL0Jhc2UubWpzJztcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LkhlYWRlckNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuSGVhZGVyQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuSGVhZGVyQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2hlYWRlci1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbmVvLWRvY3MtaGVhZGVyLWNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRvY3MtaGVhZGVyLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRvY3MtaGVhZGVyLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBoZWlnaHQ9NTVcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogNTUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgOiBTZWFyY2hGaWVsZCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgIDoge2NoYW5nZTogJ29uTmF2aWdhdGlvblNlYXJjaEZpZWxkQ2hhbmdlJ30sXG4gICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ6ICdGaWx0ZXIgTmF2aWdhdGlvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICAgICA6IHtwYWRkaW5nOiAnMTBweCd9LFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgOiAyNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgOiBCdXR0b24sXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtjbGljazogJ29uU3dpdGNoVGhlbWVCdXR0b25DbGljayd9LFxuICAgICAgICAgICAgZmxleCAgICAgICAgOiAnbm9uZScsXG4gICAgICAgICAgICBoZWlnaHQgICAgICA6IDI3LFxuICAgICAgICAgICAgcmVmZXJlbmNlICAgOiAndGhlbWUtYnV0dG9uJyxcbiAgICAgICAgICAgIHN0eWxlICAgICAgIDoge21hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnVGhlbWUgRGFyaydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgOiBCdXR0b24sXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtjbGljazogJ29uU3dpdGNoU291cmNlVmlld1RoZW1lQnV0dG9uQ2xpY2snfSxcbiAgICAgICAgICAgIGZsZXggICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgOiAyNyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSAgIDogJ3NvdXJjZS12aWV3LXRoZW1lLWJ1dHRvbicsXG4gICAgICAgICAgICBzdHlsZSAgICAgICA6IHttYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblRvcDogJzVweCd9LFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnU291cmNlIFZpZXcgVGhlbWUgRGFyaydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgZmxleCA6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgY2xzICA6IFsnbmVvLWxvZ28tdGV4dCddLFxuICAgICAgICAgICAgaHRtbCA6ICduZW8ubWpzIGRvY3MnLFxuICAgICAgICAgICAgd2lkdGg6IDIxMFxuICAgICAgICB9XVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29udGFpbmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29udGFpbmVyO1xuIiwiaW1wb3J0IEFwaVRyZWVMaXN0ICAgICAgICAgICAgIGZyb20gJy4vQXBpVHJlZUxpc3QubWpzJztcbmltcG9ydCBDbGFzc0RldGFpbHNDb250YWluZXIgICBmcm9tICcuL2NsYXNzZGV0YWlscy9NYWluQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuaW1wb3J0IENvbnRlbnRUYWJDb250YWluZXIgICAgIGZyb20gJy4vQ29udGVudFRhYkNvbnRhaW5lci5tanMnO1xuaW1wb3J0IEV4YW1wbGVzVHJlZUxpc3QgICAgICAgIGZyb20gJy4vRXhhbXBsZXNUcmVlTGlzdC5tanMnO1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciAgICAgICAgIGZyb20gJy4vSGVhZGVyQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgICAgIGZyb20gJy4vY2xhc3NkZXRhaWxzL1NvdXJjZVZpZXdDb21wb25lbnQubWpzJztcbmltcG9ydCBUdXRvcmlhbENvbXBvbmVudCAgICAgICBmcm9tICcuL2NsYXNzZGV0YWlscy9UdXRvcmlhbENvbXBvbmVudC5tanMnO1xuaW1wb3J0IFR1dG9yaWFsc1RyZWVMaXN0ICAgICAgIGZyb20gJy4vVHV0b3JpYWxzVHJlZUxpc3QubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuTWFpbkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWFpbi1jb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWFpbi1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudCA6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRvY3MtbWFpbmNvbnRhaW5lcicsICduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1kb2NzLW1haW5jb250YWluZXInLCAnbmVvLXZpZXdwb3J0J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udHJvbGxlci5Db21wb25lbnR9IGNvbnRyb2xsZXI9TWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXI6IE1haW5Db250YWluZXJDb250cm9sbGVyLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXQ9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb2xsZWN0aW9uLkJhc2V8bnVsbH0gc3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtcz1bLy8uLi5dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW0hlYWRlckNvbnRhaW5lciwge1xuICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGZsZXggIDogMSxcbiAgICAgICAgICAgIGxheW91dDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBudHlwZSAgIDogJ3RhYi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIGNscyAgICAgOiBbJ25lby1kb2NzLW5hdmlnYXRpb24tdGFiLWNvbnRhaW5lcicsICduZW8tdGFiLWNvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiAyOTAsXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lkdGggICA6IDI5MCxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IEFwaVRyZWVMaXN0LFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtsZWFmSXRlbUNsaWNrOiAnb25BcGlMaXN0TGVhZkNsaWNrJ30sXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2FwaS10cmVlbGlzdCcsXG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQVBJJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICA6IFR1dG9yaWFsc1RyZWVMaXN0LFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtsZWFmSXRlbUNsaWNrOiAnb25UdXRvcmlhbExpc3RMZWFmQ2xpY2snfSxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAndHV0b3JpYWxzLXRyZWVsaXN0JyxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1oYW5kcy1oZWxwaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUdXRvcmlhbHMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogRXhhbXBsZXNUcmVlTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7bGVhZkl0ZW1DbGljazogJ29uRXhhbXBsZXNMaXN0TGVhZkNsaWNrJ30sXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ2V4YW1wbGVzLXRyZWVsaXN0JyxcblxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1kZXNrdG9wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdFeGFtcGxlcydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlICAgOiBDb250ZW50VGFiQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGZsZXggICAgIDogMSxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2U6ICdjb250ZW50LXRhYmNvbnRhaW5lcidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuc3RvcmUpIHtcbiAgICAgICAgICAgIG1lLnN0b3JlID0gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICAgICAga2V5UHJvcGVydHk6ICdpZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgZXhhbXBsZXMgVGFiIGZvciBkaXN0IHZlcnNpb25zIHVudGlsIHRoZSB3ZWJwYWNrIGJ1aWxkcyBjYW4gaGFuZGxlIHRoaXMgKHNlZTogIzE0MClcbiAgICAgICAgbWUuaXRlbXNbMV0uaXRlbXNbMF0uaXRlbXNbMl0udGFiQnV0dG9uQ29uZmlnLmRpc2FibGVkID0gTmVvLmNvbmZpZy5lbnZpcm9ubWVudCAhPT0gJ2RldmVsb3BtZW50JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy9vdXRwdXQvYWxsLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IGRhdGEuanNvbjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5NYWluQ29udGFpbmVyQ29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvY3MtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvY3MtbWFpbmNvbnRhaW5lci1jb250cm9sbGVyJ1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uQXBpTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBudHlwZSAgICAgICAgOiAnY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLFxuICAgICAgICAgICAgaWQgICAgICAgICAgIDogcmVjb3JkLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6IHJlY29yZCxcblxuICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogcmVjb3JkLnNpbmdsZXRvbiA/ICdmYSBmYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0JyA6ICdmYSBmYS1jb3B5cmlnaHQnLFxuICAgICAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uRXhhbXBsZXNMaXN0TGVhZkNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyID0gbWUuZ2V0UmVmZXJlbmNlKCdjb250ZW50LXRhYmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICAgICAgICA9IHJlY29yZC5uYW1lLFxuICAgICAgICAgICAgcGF0aEFycmF5ICAgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICAgICAgICA9IG1lLmdldFJlZmVyZW5jZSgnZXhhbXBsZXMtdHJlZWxpc3QnKS5zdG9yZSxcbiAgICAgICAgICAgIHRtcFJlY29yZCAgICAgICAgICAgPSByZWNvcmQsXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc7XG5cbiAgICAgICAgd2hpbGUgKHRtcFJlY29yZC5wYXJlbnRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdG1wUmVjb3JkID0gc3RvcmUuZ2V0KHRtcFJlY29yZC5wYXJlbnRJZCk7XG4gICAgICAgICAgICBuYW1lICAgICAgPSB0bXBSZWNvcmQubmFtZSArICcuJyArIG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lID0gJ2V4YW1wbGVzXycgKyBuYW1lO1xuXG4gICAgICAgIHRhYkJ1dHRvbkNvbmZpZyA9IHtcbiAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1kZXNrdG9wJyxcbiAgICAgICAgICAgIHRleHQgICA6IHJlY29yZC5uYW1lXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlY29yZC5wYXRoKSkge1xuICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgIC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9cbiAgICAgICAgICAgICAgICByZWNvcmQucGF0aCkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUYWJDb250YWluZXIuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgIDogbW9kdWxlLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICA6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHRhYkJ1dHRvbkNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjb3JkLnBhdGguZm9yRWFjaChwYXRoID0+IHtcbiAgICAgICAgICAgICAgICBwYXRoQXJyYXkucHVzaChpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyBwYXRoKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocGF0aEFycmF5KS50aGVuKGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIG1vZHVsZXMuZm9yRWFjaChtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogbW9kdWxlLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgICAgICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgIDogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgICAgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB0YWJCdXR0b25Db25maWdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIG9uSGFzaENoYW5nZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzaCAgICAgICAgICAgICAgICA9IHZhbHVlPy5oYXNoLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKSxcbiAgICAgICAgICAgIHN0cnVjdHVyZVN0b3JlICAgICAgPSBtZS5nZXRSZWZlcmVuY2UoJ2FwaS10cmVlbGlzdCcpLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkLCB0YWI7XG5cbiAgICAgICAgaWYgKGhhc2g/Lmhhc093blByb3BlcnR5KCd2aWV3U291cmNlJykpIHtcbiAgICAgICAgICAgIHJlY29yZCA9IHN0cnVjdHVyZVN0b3JlLmZpbmQoJ2NsYXNzTmFtZScsIGhhc2gudmlld1NvdXJjZSlbMF07XG5cbiAgICAgICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICAgICAgICB0YWIgPSBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgICAgICA6ICdjbGFzc2RldGFpbHMtc291cmNldmlld2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICA6IGhhc2gudmlld1NvdXJjZSArICdfX3NvdXJjZScsXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgICAgICAgICA6IGhhc2gubGluZSxcbiAgICAgICAgICAgICAgICAgICAgc3RydWN0dXJlRGF0YTogcmVjb3JkLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNvZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogcmVjb3JkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gYWRqdXN0IHRoZSBoaWdobGlnaHRlZCBsaW5lIGZvciBhbHJlYWR5IGFkZGVkIHNvdXJjZSB2aWV3IHRhYnNcbiAgICAgICAgICAgICAgICB0YWIubGluZSA9IGhhc2gubGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk5hdmlnYXRpb25TZWFyY2hGaWVsZENoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGEudmFsdWU7XG5cbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdleGFtcGxlcy10cmVlbGlzdCcpIC5maWx0ZXIoJ25hbWUnLCB2YWx1ZSwgbnVsbCk7XG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnYXBpLXRyZWVsaXN0JykgICAgICAuZmlsdGVyKCduYW1lJywgdmFsdWUsIG51bGwpO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3R1dG9yaWFscy10cmVlbGlzdCcpLmZpbHRlcignbmFtZScsIHZhbHVlLCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3dpdGNoU291cmNlVmlld1RoZW1lQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnV0dG9uID0gbWUuZ2V0UmVmZXJlbmNlKCdzb3VyY2Utdmlldy10aGVtZS1idXR0b24nKSxcbiAgICAgICAgICAgIGJ1dHRvblRleHQsIGhyZWY7XG5cbiAgICAgICAgaWYgKGJ1dHRvbi50ZXh0ID09PSAnU291cmNlIFZpZXcgVGhlbWUgTGlnaHQnKSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1NvdXJjZSBWaWV3IFRoZW1lIERhcmsnO1xuICAgICAgICAgICAgaHJlZiAgICAgICA9ICcuL3Jlc291cmNlcy9oaWdobGlnaHRqcy1jdXN0b20tZ2l0aHViLXRoZW1lLmNzcyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1NvdXJjZSBWaWV3IFRoZW1lIExpZ2h0JztcbiAgICAgICAgICAgIGhyZWYgICAgICAgPSAnLi9yZXNvdXJjZXMvaGlnaGxpZ2h0anMtY3VzdG9tLWRhcmstdGhlbWUuY3NzJztcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLlN0eWxlc2hlZXQuc3dhcFN0eWxlU2hlZXQoe1xuICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgIGlkICA6ICdobGpzLXRoZW1lJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b25UZXh0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3dpdGNoVGhlbWVCdXR0b25DbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBidXR0b24gPSBtZS5nZXRSZWZlcmVuY2UoJ3RoZW1lLWJ1dHRvbicpLFxuICAgICAgICAgICAgdmlldyAgID0gbWUuY29tcG9uZW50LFxuICAgICAgICAgICAgYnV0dG9uVGV4dCwgY2xzLCB0aGVtZTtcblxuICAgICAgICBpZiAoYnV0dG9uLnRleHQgPT09ICdUaGVtZSBMaWdodCcpIHtcbiAgICAgICAgICAgIGJ1dHRvblRleHQgPSAnVGhlbWUgRGFyayc7XG4gICAgICAgICAgICB0aGVtZSAgICAgID0gJ25lby10aGVtZS1saWdodCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b25UZXh0ID0gJ1RoZW1lIExpZ2h0JztcbiAgICAgICAgICAgIHRoZW1lICAgICAgPSAnbmVvLXRoZW1lLWRhcmsnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5jb25maWcudXNlQ3NzVmFycykge1xuICAgICAgICAgICAgY2xzID0gWy4uLnZpZXcuY2xzXTtcblxuICAgICAgICAgICAgdmlldy5jbHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbmNsdWRlcygnbmVvLXRoZW1lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHRoZW1lKTtcbiAgICAgICAgICAgIHZpZXcuY2xzID0gY2xzO1xuXG4gICAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvblRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvblR1dG9yaWFsTGlzdExlYWZDbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1lLmdldFJlZmVyZW5jZSgnY29udGVudC10YWJjb250YWluZXInKTtcblxuICAgICAgICBjb250ZW50VGFiQ29udGFpbmVyLmFkZCh7XG4gICAgICAgICAgICBudHlwZSAgIDogJ2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCcsXG4gICAgICAgICAgICBmaWxlTmFtZTogcmVjb3JkLmZpbGVOYW1lLFxuICAgICAgICAgICAgZmlsZVR5cGU6IHJlY29yZC50eXBlLFxuICAgICAgICAgICAgaWQgICAgICA6IHJlY29yZC5uYW1lLFxuXG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaGFuZHMtaGVscGluZycsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogcmVjb3JkLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyQ29udHJvbGxlcik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Db250YWluZXJDb250cm9sbGVyO1xuIiwiaW1wb3J0IFRyZWVMaXN0ICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcbmltcG9ydCBUdXRvcmlhbHNTdG9yZSBmcm9tICcuLi9zdG9yZS9UdXRvcmlhbHMubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LlR1dG9yaWFsc1RyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIFR1dG9yaWFsc1RyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LlR1dG9yaWFsc1RyZWVMaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuVHV0b3JpYWxzVHJlZUxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHV0b3JpYWxzLXRyZWVsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3R1dG9yaWFscy10cmVlbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnZG9jcy10dXRvcmlhbHMtdHJlZWxpc3QnLCAnbmVvLXRyZWUtbGlzdCcsICduZW8tbGlzdC1jb250YWluZXInLCAnbmVvLWxpc3QnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbXG4gICAgICAgICAgICAnZG9jcy10dXRvcmlhbHMtdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby10cmVlLWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZT1UdXRvcmlhbHNTdG9yZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogVHV0b3JpYWxzU3RvcmVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiAnLi4vLi4vZG9jcy90dXRvcmlhbHMvdHV0b3JpYWxzLmpzb24nXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5zdG9yZS5kYXRhID0gZGF0YS5qc29uO1xuICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMobnVsbCwgbWUuZ2V0TGlzdEl0ZW1zUm9vdCgpLCAwKTtcbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFR1dG9yaWFsc1RyZWVMaXN0KTtcblxuZXhwb3J0IGRlZmF1bHQgVHV0b3JpYWxzVHJlZUxpc3Q7XG4iLCJpbXBvcnQgQ29tcG9uZW50ICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBTb3VyY2VWaWV3Q29tcG9uZW50IGZyb20gJy4vU291cmNlVmlld0NvbXBvbmVudC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLkhlYWRlckNvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEhlYWRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLkhlYWRlckNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IZWFkZXJDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLWhlYWRlcmNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZG9jcy1jbGFzc2RldGFpbHMtaGVhZGVyY29tcG9uZW50J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gcmVjb3JkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICByZWNvcmRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBkb21MaXN0ZW5lcnNcbiAgICAgICAgICovXG4gICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogJ29uSGVhZGVyQ2xpY2snLCAvLyBEb2NzLmFwcC52aWV3Lk1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcubmVvLWRvY3MtaGVhZGVyLXRleHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWyduZW8tZG9jcy1oZWFkZXItdGV4dCddfVxuICAgICAgICBdfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IG1lLnJlY29yZC5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdG9yZSAgICAgPSBtZS51cCgnbWFpbi1jb250YWluZXInKS5zdG9yZSxcbiAgICAgICAgICAgIHJlY29yZCAgICA9IHN0b3JlLmZpbmQoeyRraW5kOiBjbGFzc05hbWUgPT09ICdOZW8nID8gJ21vZHVsZScgOiAnY2xhc3MnLCBuZW9DbGFzc05hbWU6IGNsYXNzTmFtZX0pWzBdLFxuICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICA9IHJlY29yZD8udGFncz8ubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBzaW5nbGV0b24gPSBmYWxzZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnRhZ3NbaV0udGl0bGUgPT09ICdzaW5nbGV0b24nKSB7XG4gICAgICAgICAgICAgICAgc2luZ2xldG9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20uY25bMF0uaW5uZXJIVE1MID0gc2luZ2xldG9uID8gKGNsYXNzTmFtZSArICcg4oaSIFNpbmdsZXRvbicpIDogY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmIChyZWNvcmQuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIG1lLnZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLWhlYWRlci1kZXNjcmlwdGlvbiddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogcmVjb3JkLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29tcG9uZW50O1xuIiwiaW1wb3J0IFRyZWVMaXN0IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90cmVlL0xpc3QubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLkhpZXJhcmNoeVRyZWVMaXN0XG4gKiBAZXh0ZW5kcyBOZW8udHJlZS5MaXN0XG4gKi9cbmNsYXNzIEhpZXJhcmNoeVRyZWVMaXN0IGV4dGVuZHMgVHJlZUxpc3Qge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnRG9jcy52aWV3LmNsYXNzZGV0YWlscy5IaWVyYXJjaHlUcmVlTGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtdHJlZWxpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2RvY3MtY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLCAnbmVvLWxpc3QtY29udGFpbmVyJywgJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogW1xuICAgICAgICAgICAgJ2RvY3MtY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnLFxuICAgICAgICAgICAgJ25lby1saXN0LWNvbnRhaW5lcicsXG4gICAgICAgICAgICAnbmVvLXRyZWUtbGlzdCcsXG4gICAgICAgICAgICAnbmVvLWxpc3QnXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93Q29sbGFwc2VFeHBhbmRBbGxJY29ucz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0NvbGxhcHNlRXhwYW5kQWxsSWNvbnM6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHN0cnVjdHVyZURhdGE9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RydWN0dXJlRGF0YTogbnVsbFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuY3JlYXRlU3RvcmVJdGVtcygpO1xuICAgICAgICBtZS5jcmVhdGVJdGVtcyhudWxsLCBtZS5nZXRMaXN0SXRlbXNSb290KCksIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlU3RvcmVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2xhc3NOYW1lICAgICA9IG1lLnN0cnVjdHVyZURhdGEuY2xhc3NOYW1lLFxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lciA9IG1lLnVwKCdtYWluLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgbWFpblN0b3JlICAgICA9IG1haW5Db250YWluZXIuc3RvcmUsXG4gICAgICAgICAgICBzdG9yZUl0ZW1zICAgID0gW10sXG4gICAgICAgICAgICB0bXBJdGVtcyAgICAgID0gW10sXG4gICAgICAgICAgICBpdGVtLCBwYXJlbnRJZDtcblxuICAgICAgICBpdGVtID0gbWFpblN0b3JlLmZpbmQoe1xuICAgICAgICAgICAgJGtpbmQgICAgICAgOiBjbGFzc05hbWUgPT09ICdOZW8nID8gJ21vZHVsZScgOiAnY2xhc3MnLFxuICAgICAgICAgICAgbmVvQ2xhc3NOYW1lOiBtZS5zdHJ1Y3R1cmVEYXRhLmNsYXNzTmFtZVxuICAgICAgICB9KVswXTtcblxuICAgICAgICB0bXBJdGVtcy51bnNoaWZ0KGl0ZW0pO1xuXG4gICAgICAgIHdoaWxlIChpdGVtPy5oYXNPd25Qcm9wZXJ0eSgnYXVnbWVudHMnKSkge1xuICAgICAgICAgICAgaXRlbSA9IG1haW5TdG9yZS5maW5kKHtcbiAgICAgICAgICAgICAgICAka2luZCAgICAgICA6ICdjbGFzcycsXG4gICAgICAgICAgICAgICAgbmVvQ2xhc3NOYW1lOiBpdGVtLmF1Z21lbnRzWzBdXG4gICAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgICAgdG1wSXRlbXMudW5zaGlmdChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRtcEl0ZW1zLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA9IHRtcEl0ZW1zW2luZGV4IC0gMV0gPyB0bXBJdGVtc1tpbmRleCAtIDFdLmlkIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIHN0b3JlSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDoga2V5LmlkLFxuICAgICAgICAgICAgICAgICAgICBpc0xlYWYgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgICA6IGtleS5uZW9DbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IHN0b3JlSXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25MZWFmSXRlbUNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdm5vZGVJZCAgPSBtZS5nZXRJdGVtSWQocmVjb3JkLmlkKSxcbiAgICAgICAgICAgIHZkb21Ob2RlID0gbWUuZ2V0VmRvbUNoaWxkKHZub2RlSWQpO1xuXG4gICAgICAgIE5lb0FycmF5W3JlY29yZC5jaGVja2VkID8gJ2FkZCcgOiAncmVtb3ZlJ10odmRvbU5vZGUuY2xzLCAndW5jaGVja2VkJyk7XG5cbiAgICAgICAgcmVjb3JkLmNoZWNrZWQgPSAhcmVjb3JkLmNoZWNrZWQ7XG5cbiAgICAgICAgbWUudXBkYXRlKCk7XG5cbiAgICAgICAgbWUuZmlyZSgncmVmcmVzaENsYXNzTWVtYmVycycpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGllcmFyY2h5VHJlZUxpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCBIaWVyYXJjaHlUcmVlTGlzdDtcbiIsImltcG9ydCBDb250YWluZXIgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIZWFkZXJDb21wb25lbnQgICAgICAgICBmcm9tICcuL0hlYWRlckNvbXBvbmVudC5tanMnO1xuaW1wb3J0IEhpZXJhcmNoeVRyZWVMaXN0ICAgICAgIGZyb20gJy4vSGllcmFyY2h5VHJlZUxpc3QubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyQ29udHJvbGxlciBmcm9tICcuL01haW5Db250YWluZXJDb250cm9sbGVyLm1qcyc7XG5pbXBvcnQgTWVtYmVyc0xpc3QgICAgICAgICAgICAgZnJvbSAnLi9NZW1iZXJzTGlzdC5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBTZWFyY2hGaWVsZCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9TZWFyY2gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLk1haW5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLCAnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLW1haW5jb250YWluZXInLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fSBjb250cm9sbGVyPU1haW5Db250YWluZXJDb250cm9sbGVyXG4gICAgICAgICAqL1xuICAgICAgICBjb250cm9sbGVyOiBNYWluQ29udGFpbmVyQ29udHJvbGxlcixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGF5b3V0PXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gc3RydWN0dXJlRGF0YT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdHJ1Y3R1cmVEYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVsvLy4uLl1dXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBfY2xzICA6IFsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcmNvbnRhaW5lciddLFxuICAgICAgICAgICAgZmxleCAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IFBhbmVsLFxuICAgICAgICAgICAgICAgIGNscyAgICA6IFsnbmVvLWRvY3MtY2xhc3NkZXRhaWxzLWhlYWRlcnBhbmVsJywgJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICAgICAgZG9jayA6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge2JvcmRlcldpZHRoOiAwfSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblNjcm9sbEludG9WaWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dDb25maWdzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDb25maWdzJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblNjcm9sbEludG9WaWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dNZXRob2RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblJpZ2h0OiAnNXB4J30sXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdNZXRob2RzJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblNjcm9sbEludG9WaWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dFdmVudHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnRXZlbnRzJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4IDogMVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgICAgICAgICA6IFNlYXJjaEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICAgOiB7Y2hhbmdlOiAnb25TZWFyY2hGaWVsZENoYW5nZSd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0OiAnRmlsdGVyIE1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgICAgICAgOiAxNjAsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3AgOiAnMnB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyICA6ICdvblRvZ2dsZU1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgOiAnZmEgZmEtY2hlY2stc3F1YXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogJ3Nob3dQcml2YXRlTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5SaWdodDogJzVweCd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnUHJpdmF0ZScsXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uVG9nZ2xlTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd1Byb3RlY3RlZE1lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luUmlnaHQ6ICc1cHgnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ1Byb3RlY3RlZCcsXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgIDogJ29uVG9nZ2xlTWVtYmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICA6ICdmYSBmYS1jaGVjay1zcXVhcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiAnc2hvd1N0YXRpY01lbWJlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnU3RhdGljJ1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZDogJ0Bjb25maWc6c3RydWN0dXJlRGF0YSdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICA6IEhpZXJhcmNoeVRyZWVMaXN0LFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgICA6ICcwIDAgYXV0bycsXG4gICAgICAgICAgICAgICAgbWluV2lkdGggICAgIDogMzMwLFxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZURhdGE6ICdAY29uZmlnOnN0cnVjdHVyZURhdGEnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE1lbWJlcnNMaXN0LFxuICAgICAgICAgICAgZmxleCAgICAgOiAxLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7bXV0YXRlSXRlbXM6ICdvbk11dGF0ZUl0ZW1zJ30sXG4gICAgICAgICAgICByZWZlcmVuY2U6ICdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnXG4gICAgICAgIH1dXG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lcjtcbiIsImltcG9ydCBDb21wb25lbnQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IFNvdXJjZVZpZXdDb21wb25lbnQgZnJvbSBcIi4vU291cmNlVmlld0NvbXBvbmVudC5tanNcIjtcblxuLyoqXG4gKiBAY2xhc3MgRG9jcy52aWV3LmNsYXNzZGV0YWlscy5NYWluQ29udGFpbmVyQ29udHJvbGxlclxuICogQGV4dGVuZHMgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXInXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSGVhZGVyQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZWNvcmQgICAgICAgICAgICAgID0gbWUuY29tcG9uZW50LnN0cnVjdHVyZURhdGEsXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyICAgICAgID0gbWUuY29tcG9uZW50LnVwKCdtYWluLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgY29udGVudFRhYkNvbnRhaW5lciA9IG1haW5Db250YWluZXIuZG93bignZG9jcy1jb250ZW50LXRhYmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgY2xhc3NOYW1lICAgICAgICAgICA9IChyZWNvcmQucGF0aCA/IHJlY29yZC5wYXRoICsgJy4nIDogJycpICsgcmVjb3JkLm5hbWU7XG5cbiAgICAgICAgY29udGVudFRhYkNvbnRhaW5lci5hZGQoe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgIDogU291cmNlVmlld0NvbXBvbmVudCxcbiAgICAgICAgICAgIGlkICAgICAgICAgICA6IGNsYXNzTmFtZSArICdfX3NvdXJjZScsXG4gICAgICAgICAgICBzdHJ1Y3R1cmVEYXRhOiByZWNvcmQsXG5cbiAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1jb2RlJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiBjbGFzc05hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICovXG4gICAgb25NdXRhdGVJdGVtcyhzdG9yZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvdW50Q29uZmlncyAgICA9IDAsXG4gICAgICAgICAgICBjb3VudEV2ZW50cyAgICAgPSAwLFxuICAgICAgICAgICAgY291bnRNZXRob2RzICAgID0gMCxcbiAgICAgICAgICAgIGNvdW50UHJpdmF0ZXMgICA9IDAsXG4gICAgICAgICAgICBjb3VudFByb3RlY3RlZHMgPSAwLFxuICAgICAgICAgICAgY291bnRTdGF0aWNzICAgID0gMDtcblxuICAgICAgICBzdG9yZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvdW50TWV0aG9kcysrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmtpbmQgPT09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY291bnRDb25maWdzKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvdW50RXZlbnRzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmFjY2VzcyA9PT0gJ3ByaXZhdGUnKSB7XG4gICAgICAgICAgICAgICAgY291bnRQcml2YXRlcysrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmFjY2VzcyA9PT0gJ3Byb3RlY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBjb3VudFByb3RlY3RlZHMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uc2NvcGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICAgICAgY291bnRTdGF0aWNzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmdldFJlZmVyZW5jZSgnc2hvd0NvbmZpZ3MnKSAgICAgICAgIC50ZXh0ID0gJ0NvbmZpZ3MgJyAgICsgY291bnRDb25maWdzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dNZXRob2RzJykgICAgICAgICAudGV4dCA9ICdNZXRob2RzICcgICArIGNvdW50TWV0aG9kcztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93RXZlbnRzJykgICAgICAgICAgLnRleHQgPSAnRXZlbnRzICcgICAgKyBjb3VudEV2ZW50cztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93UHJpdmF0ZU1lbWJlcnMnKSAgLnRleHQgPSAnUHJpdmF0ZSAnICAgKyBjb3VudFByaXZhdGVzO1xuICAgICAgICBtZS5nZXRSZWZlcmVuY2UoJ3Nob3dQcm90ZWN0ZWRNZW1iZXJzJykudGV4dCA9ICdQcm90ZWN0ZWQgJyArIGNvdW50UHJvdGVjdGVkcztcbiAgICAgICAgbWUuZ2V0UmVmZXJlbmNlKCdzaG93U3RhdGljTWVtYmVycycpICAgLnRleHQgPSAnU3RhdGljICcgICAgKyBjb3VudFN0YXRpY3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2Nyb2xsSW50b1ZpZXcoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1dHRvbiA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpO1xuXG4gICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgIHRleHQgICA6IGJ1dHRvbi5yZWZlcmVuY2Uuc3Vic3RyKDQpLFxuICAgICAgICAgICAgdm5vZGVJZDogbWUuY29tcG9uZW50LnZkb20uaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU2VhcmNoRmllbGRDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmdldFJlZmVyZW5jZSgnY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0JykuZmlsdGVyTWVtYmVyc1F1ZXJ5ID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Ub2dnbGVNZW1iZXJzKGRhdGEpIHtcbiAgICAgICAgbGV0IGJ1dHRvbiAgICAgID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCksXG4gICAgICAgICAgICBtZW1iZXJzTGlzdCA9IHRoaXMuZ2V0UmVmZXJlbmNlKCdjbGFzc2RldGFpbHMtbWVtYmVyc2xpc3QnKTtcblxuICAgICAgICBidXR0b24uaWNvbkNscyA9IGJ1dHRvbi5jaGVja2VkID8gJ2ZhIGZhLXNxdWFyZScgOiAnZmEgZmEtY2hlY2stc3F1YXJlJztcbiAgICAgICAgYnV0dG9uLmNoZWNrZWQgPSAhYnV0dG9uLmNoZWNrZWQ7XG5cbiAgICAgICAgbWVtYmVyc0xpc3RbYnV0dG9uLnJlZmVyZW5jZV0gPSBidXR0b24uY2hlY2tlZDtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXJDb250cm9sbGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRhaW5lckNvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGlzdC9CYXNlLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5jbGFzc2RldGFpbHMuTWVtYmVyc0xpc3RcbiAqIEBleHRlbmRzIE5lby5saXN0LkJhc2VcbiAqL1xuY2xhc3MgTWVtYmVyc0xpc3QgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWVtYmVyc0xpc3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ0RvY3Mudmlldy5jbGFzc2RldGFpbHMuTWVtYmVyc0xpc3QnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLW1lbWJlcnNsaXN0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NsYXNzZGV0YWlscy1tZW1iZXJzbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnZG9jcy1jbGFzc2hpZXJhcmNoeS1tZW1iZXJzbGlzdCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnZG9jcy1jbGFzc2hpZXJhcmNoeS1tZW1iZXJzbGlzdCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBmaWx0ZXJNZW1iZXJzUXVlcnlfPScnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlck1lbWJlcnNRdWVyeV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1ByaXZhdGVNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93UHJpdmF0ZU1lbWJlcnNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd1Byb3RlY3RlZE1lbWJlcnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dQcm90ZWN0ZWRNZW1iZXJzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dTdGF0aWNNZW1iZXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93U3RhdGljTWVtYmVyc186IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB0YXJnZXRDbGFzc05hbWU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0Q2xhc3NOYW1lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHtjbjogW119XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGllcmFyY2h5VmlldyA9IG1lLnVwKCdjbGFzc2RldGFpbHMtbWFpbmNvbnRhaW5lcicpLmRvd24oJ2NsYXNzaGllcmFyY2h5LXRyZWVsaXN0JyksXG4gICAgICAgICAgICBtYWluU3RvcmUgICAgID0gbWUudXAoJ21haW4tY29udGFpbmVyJykuc3RvcmU7XG5cbiAgICAgICAgaGllcmFyY2h5Vmlldy5vbih7XG4gICAgICAgICAgICByZWZyZXNoQ2xhc3NNZW1iZXJzOiBtZS5vblJlZnJlc2hDbGFzc01lbWJlcnMsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZSA9IE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAgZmlsdGVyTW9kZTogJ2FkdmFuY2VkJyxcbiAgICAgICAgICAgIHNvdXJjZUlkICA6IG1haW5TdG9yZS5pZFxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZpbHRlck1lbWJlcnNRdWVyeSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGaWx0ZXJNZW1iZXJzUXVlcnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dQcm90ZWN0ZWRNZW1iZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd1Byb3RlY3RlZE1lbWJlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vblJlZnJlc2hDbGFzc01lbWJlcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dQcml2YXRlTWVtYmVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dQcml2YXRlTWVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgb2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd1N0YXRpY01lbWJlcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTaG93U3RhdGljTWVtYmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgb2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9uUmVmcmVzaENsYXNzTWVtYmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGFwcGx5Q29uZmlnc0hlYWRlcihzdG9yZSwgdmRvbSkge1xuICAgICAgICBpZiAoc3RvcmUuaXRlbXNbMF0/LmtpbmQgPT09ICdtZW1iZXInKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1tZW1iZXJsaXN0LWdyb3VwLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ0NvbmZpZ3MnLFxuICAgICAgICAgICAgICAgICdkYXRhLWxpc3QtaGVhZGVyJzogJ0NvbmZpZ3MnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge05lby5jb2xsZWN0aW9uLkJhc2V9IHN0b3JlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgYXBwbHlFdmVudHNIZWFkZXIoaXRlbSwgaW5kZXgsIHN0b3JlLCB2ZG9tKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGl0ZW0ua2luZCA9PT0gJ2V2ZW50JyAmJlxuICAgICAgICAgICAgc3RvcmUuaXRlbXNbaW5kZXggLTFdPy5raW5kICE9PSAnZXZlbnQnXG4gICAgICAgICkge1xuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWRvY3MtbWVtYmVybGlzdC1ncm91cC1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdFdmVudHMnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge3pJbmRleDogM30sXG4gICAgICAgICAgICAgICAgJ2RhdGEtbGlzdC1oZWFkZXInOiAnRXZlbnRzJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtOZW8uY29sbGVjdGlvbi5CYXNlfSBzdG9yZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGFwcGx5TWV0aG9kc0hlYWRlcihpdGVtLCBpbmRleCwgc3RvcmUsIHZkb20pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXRlbS5raW5kID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgIXN0b3JlLml0ZW1zW2luZGV4IC0xXSB8fCAoXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLml0ZW1zW2luZGV4IC0xXT8ua2luZCAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIHNjcm9sbGluZyBwbGFjZWhvbGRlclxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tZG9jcy1tZW1iZXJsaXN0LWdyb3VwLWhlYWRlciddLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ01ldGhvZHMnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgIDoge3pJbmRleDogMn0sXG4gICAgICAgICAgICAgICAgJ2RhdGEtbGlzdC1oZWFkZXInOiAnTWV0aG9kcydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJNZW1iZXJzUmVnRXggPSBuZXcgUmVnRXhwKG1lLmZpbHRlck1lbWJlcnNRdWVyeSB8fCAnJywgJ2dpJyksXG4gICAgICAgICAgICBoYXNFeGFtcGxlcyAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIHRhcmdldENsYXNzTmFtZSAgICA9IG1lLnRhcmdldENsYXNzTmFtZSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBoZWFkZXJUZXh0LCBpdGVtQXR0cmlidXRlcywgaXRlbUNvbmZpZywgcGF0aDtcblxuICAgICAgICB2ZG9tLmNuID0gW107XG4gICAgICAgIHZkb20gPSBtZS5hcHBseUNvbmZpZ3NIZWFkZXIobWUuc3RvcmUsIHZkb20pO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2ZG9tID0gbWUuYXBwbHlFdmVudHNIZWFkZXIoIGl0ZW0sIGluZGV4LCBtZS5zdG9yZSwgdmRvbSk7XG4gICAgICAgICAgICB2ZG9tID0gbWUuYXBwbHlNZXRob2RzSGVhZGVyKGl0ZW0sIGluZGV4LCBtZS5zdG9yZSwgdmRvbSk7XG5cbiAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzID0gW107XG5cbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUuc3Vic3RyKC0xKSA9PT0gJ18nKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gaXRlbS5uYW1lLnNsaWNlKDAsIC0xKSA7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaCgnR1MnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0ubmVvQ2xhc3NOYW1lICE9PSB0YXJnZXRDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtQXR0cmlidXRlcy5wdXNoKCdpbmhlcml0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0uYWNjZXNzID09PSAncHJpdmF0ZScgfHwgaXRlbS5hY2Nlc3MgPT09ICdwcm90ZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgaXRlbUF0dHJpYnV0ZXMucHVzaChpdGVtLmFjY2Vzcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnNjb3BlID09PSAnc3RhdGljJykge1xuICAgICAgICAgICAgICAgIGl0ZW1BdHRyaWJ1dGVzLnB1c2goJ3N0YXRpYycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoZWFkZXJUZXh0ID0gaXRlbS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAobWUuZmlsdGVyTWVtYmVyc1F1ZXJ5ICE9PSAnJyAmJiBtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ID0gaGVhZGVyVGV4dC5yZXBsYWNlKGZpbHRlck1lbWJlcnNSZWdFeCwgbWF0Y2ggPT4gYDxzcGFuIGNsYXNzPVwibmVvLWhpZ2hsaWdodC1zZWFyY2hcIj4ke21hdGNofTwvc3Bhbj5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uZmlnc1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZT8ubmFtZXMpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnOiB7JyArIE1lbWJlcnNMaXN0LmVzY2FwZUh0bWwoaXRlbS50eXBlLm5hbWVzLmpvaW4oJ3wnKSkgKyAnfScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdHZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnID0gJyArIGl0ZW0uZGVmYXVsdHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbWV0aG9kc1xuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyYW1zICYmIGl0ZW0ua2luZCAhPT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgKz0gKCcoJyArIGl0ZW0ucGFyYW1zLnJlZHVjZSgocmVzdWx0LCBwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ubmFtZS5pbmRleE9mKCcuJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW0ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgnWycgKyBwYXJhbS5uYW1lICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyYW0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9LCBbXSkuam9pbignLCAnKSArICcpJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpdGVtLnJldHVybnMpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJUZXh0ICs9ICgnIOKGkiB7JyArIE1lbWJlcnNMaXN0LmVzY2FwZUh0bWwoaXRlbS5yZXR1cm5zWzBdLnR5cGUubmFtZXMuam9pbignfCcpICsgJ30nKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhdGggPSBpdGVtLm1ldGEucGF0aDtcblxuICAgICAgICAgICAgaWYgKHBhdGguaW5jbHVkZXMoJy9uZW8ubWpzLycpKSB7XG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKHBhdGguaW5kZXhPZignL25lby5tanMvJykgKyA5KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGF0aC5pbmNsdWRlcygnL25lb21qcy8nKSkge1xuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cihwYXRoLmluZGV4T2YoJy9uZW9tanMvJykgICsgOCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhdGguaW5jbHVkZXMoJy9uZW8vJykpIHtcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIocGF0aC5pbmRleE9mKCcvbmVvLycpICAgICArIDUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGlzdC1pdGVtJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWxpc3QtaXRlbS1oZWFkZXItY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tbGlzdC1pdGVtLWhlYWRlciddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBoZWFkZXJUZXh0XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IFsnbmVvLWxpc3QtaXRlbS1oZWFkZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogaXRlbUF0dHJpYnV0ZXMuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiAnbmVvLWRvY3Mtdmlldy1zb3VyY2UtbGluay1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICBjbiA6W3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1kb2NzLXZpZXctc291cmNlLWxpbmsnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWYgICAgIDogJyN2aWV3U291cmNlPScgKyBpdGVtLm5lb0NsYXNzTmFtZSArICcmbGluZT0nICsgaXRlbS5tZXRhLmxpbmVubyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1NvdXJjZTogJyArIHBhdGggKyAnLycgKyBpdGVtLm1ldGEuZmlsZW5hbWUgKyAnIChMaW5lICcgKyBpdGVtLm1ldGEubGluZW5vICsgJyknXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uZXhhbXBsZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBoYXNFeGFtcGxlcyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBpdGVtLmV4YW1wbGVzLmZvckVhY2goZXhhbXBsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1Db25maWcuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6ICdwcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBleGFtcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW0ucGFyYW1zPy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbUNvbmZpZy5jbi5wdXNoKE1lbWJlcnNMaXN0LmNyZWF0ZVBhcmFtZXRlcnNUYWJsZShpdGVtLnBhcmFtcykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5yZXR1cm5zICYmIGl0ZW0ua2luZCAhPT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgIGl0ZW1Db25maWcuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1JldHVybnMgeycgKyBNZW1iZXJzTGlzdC5lc2NhcGVIdG1sKGl0ZW0ucmV0dXJuc1swXS50eXBlLm5hbWVzLmpvaW4oJ3wnKSArICd9ICcpICsgKGl0ZW0ucmV0dXJuc1swXS5kZXNjcmlwdGlvbiB8fCAnJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmRvbS5jbi5wdXNoKGl0ZW1Db25maWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS51cGRhdGUoKTtcblxuICAgICAgICBoYXNFeGFtcGxlcyAmJiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkhpZ2hsaWdodEpTLnN5bnRheEhpZ2hsaWdodEluaXQoKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVBhcmFtZXRlcnNUYWJsZShwYXJhbXMpIHtcbiAgICAgICAgbGV0IGhhc0RlZmF1bHRWYWx1ZXMgID0gZmFsc2UsXG4gICAgICAgICAgICBoYXNPcHRpb25hbFBhcmFtcyA9IGZhbHNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sIG5lc3RlZFBhcmFtcywgcGFyYW1UYWJsZTtcblxuICAgICAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW0uaGFzT3duUHJvcGVydHkoJ2RlZmF1bHR2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgaGFzRGVmYXVsdFZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbS5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9uYWwnKSkge1xuICAgICAgICAgICAgICAgIGhhc09wdGlvbmFsUGFyYW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGFyYW1UYWJsZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgIGNsczogJ2RvY3MtcGFyYW0tdGFibGUnLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3RoZWFkJyxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnTmFtZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnVHlwZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhhc0RlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHBhcmFtVGFibGUuY25bMF0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0aCcsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnRGVmYXVsdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc09wdGlvbmFsUGFyYW1zKSB7XG4gICAgICAgICAgICBwYXJhbVRhYmxlLmNuWzBdLmNuLnNwbGljZSgyLCAwLCB7XG4gICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGgnLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ09wdGlvbmFsJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW0ubmFtZS5pbmRleE9mKCcuJykgPCAwKSB7IC8vIGlnbm9yZSBuZXN0ZWQgcGFyYW1zXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmVzdGVkUGFyYW1zID0gW107XG5cbiAgICAgICAgICAgICAgICBwYXJhbXMuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAubmFtZS5pbmRleE9mKHBhcmFtLm5hbWUgKyAnLicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gTmVvLmNsb25lKHAsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBwLm5hbWUgPSBwLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAubmFtZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5uYW1lID0gcC5uYW1lLmpvaW4oJy4nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmVzdGVkUGFyYW1zLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXN0ZWRQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IGRlc2NyaXB0aW9uLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbWJlcnNMaXN0LmNyZWF0ZVBhcmFtZXRlcnNUYWJsZShuZXN0ZWRQYXJhbXMpXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFyYW1UYWJsZS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBwYXJhbS50eXBlID8gTWVtYmVyc0xpc3QuZXNjYXBlSHRtbChwYXJhbS50eXBlLm5hbWVzLmpvaW4oJyB8ICcpKSA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1UYWJsZS5jbltwYXJhbVRhYmxlLmNuLmxlbmd0aCAtIDFdLmNuLnNwbGljZSgyLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHBhcmFtLmRlZmF1bHR2YWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiAocGFyYW0uZGVmYXVsdHZhbHVlICsgJycpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNPcHRpb25hbFBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVRhYmxlLmNuW3BhcmFtVGFibGUuY24ubGVuZ3RoIC0gMV0uY24uc3BsaWNlKDIsIDAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyAgICAgIDogJ3RkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcGFyYW0ub3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcGFyYW1UYWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyAnPCcgJiAnPidcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBlc2NhcGVIdG1sKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZmlsdGVyQW5kU29ydEl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGllcmFyY2h5TWFwICAgPSB7fSxcbiAgICAgICAgICAgIGhpZXJhcmNoeVN0b3JlID0gbWUudXAoJ2NsYXNzZGV0YWlscy1tYWluY29udGFpbmVyJykuZG93bignY2xhc3NoaWVyYXJjaHktdHJlZWxpc3QnKS5zdG9yZSxcbiAgICAgICAgICAgIGhpZXJhcmNoeUl0ZW1zID0gaGllcmFyY2h5U3RvcmUuaXRlbXMsXG4gICAgICAgICAgICBpICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICB0bXBJdGVtcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgZmlsdGVycywgdG1wSXRlbXNMZW47XG5cbiAgICAgICAgaGllcmFyY2h5SXRlbXMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgICAgICAgaWYgKGNscy5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdG1wSXRlbXMucHVzaChjbHMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRtcEl0ZW1zTGVuID0gdG1wSXRlbXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgdG1wSXRlbXNMZW47IGkrKykge1xuICAgICAgICAgICAgaGllcmFyY2h5TWFwW3RtcEl0ZW1zW2ldXSA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS50YXJnZXRDbGFzc05hbWUgPSBoaWVyYXJjaHlJdGVtc1toaWVyYXJjaHlJdGVtcy5sZW5ndGggLTFdLm5hbWU7XG5cbiAgICAgICAgZmlsdGVycyA9IFt7XG4gICAgICAgICAgICBvcGVyYXRvcjogJ2luY2x1ZGVkJyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAnbmVvQ2xhc3NOYW1lJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiB0bXBJdGVtc1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2tpbmQnLFxuICAgICAgICAgICAgdmFsdWUgICA6ICdjbGFzcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgcHJvcGVydHk6ICdraW5kJyxcbiAgICAgICAgICAgIHZhbHVlICAgOiAnY29uc3RhbnQnIC8vIHRvZG8/XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9wZXJhdG9yOiAnIT09JyxcbiAgICAgICAgICAgIHByb3BlcnR5OiAna2luZCcsXG4gICAgICAgICAgICB2YWx1ZSAgIDogJ21vZHVsZSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgb3BlcmF0b3I6ICdpc1VuZGVmaW5lZCcsXG4gICAgICAgICAgICBwcm9wZXJ0eTogJ2luaGVyaXRlZCdcbiAgICAgICAgfV07XG5cbiAgICAgICAgaWYgKCFtZS5zaG93UHJpdmF0ZU1lbWJlcnMpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnYWNjZXNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3ByaXZhdGUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuc2hvd1Byb3RlY3RlZE1lbWJlcnMpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgb3BlcmF0b3I6ICchPT0nLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnYWNjZXNzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogJ3Byb3RlY3RlZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZS5zaG93U3RhdGljTWVtYmVycykge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJyE9PScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6ICdzY29wZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6ICdzdGF0aWMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5maWx0ZXJNZW1iZXJzUXVlcnkgIT09ICcnICYmIG1lLmZpbHRlck1lbWJlcnNRdWVyeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ2xpa2UnLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAnbmFtZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IG1lLmZpbHRlck1lbWJlcnNRdWVyeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgc2NvcGUgICA6IG1lLFxuICAgICAgICAgICAgZmlsdGVyQnk6IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyAgID0gb3B0cy5maWx0ZXJlZEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgICAgICAgPSBvcHRzLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENsYXNzTmFtZSA9IG1lLnRhcmdldENsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtLCBpLCBsZW47XG5cbiAgICAgICAgICAgICAgICAvLyBhbHdheXMgZXhjbHVkZSBpbmhlcml0ZWQgY2xhc3NOYW1lICYgbnR5cGUgY29uZmlnc1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09ICdudHlwZScgJiYgaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uZW9DbGFzc05hbWUgIT09IHRhcmdldENsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xuICAgICAgICAgICAgICAgICAgICBsZW4gPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW0gPSBmaWx0ZXJlZEl0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gZmlsdGVyZWRJdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgID09PSBmaWx0ZXJlZEl0ZW0ubmFtZSAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zY29wZSA9PT0gZmlsdGVyZWRJdGVtLnNjb3BlICYmIC8vIHN0YXRpYyBWUyBpbnN0YW5jZSBtZW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZXJhcmNoeU1hcFtpdGVtLm5lb0NsYXNzTmFtZV0gPCBoaWVyYXJjaHlNYXBbZmlsdGVyZWRJdGVtLm5lb0NsYXNzTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5zdG9yZS5maWx0ZXJzID0gZmlsdGVycztcblxuICAgICAgICBtZS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgIC8vIENvbmZpZ3MgPT4gTWV0aG9kcyA9PiBFdmVudHNcbiAgICAgICAgICAgIHNvcnRCeTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIGEgPSBhLmtpbmQgPT09ICdtZW1iZXInID8gMCA6IGEua2luZCA9PT0gJ2Z1bmN0aW9uJyA/IDEgOiAyO1xuICAgICAgICAgICAgICAgIGIgPSBiLmtpbmQgPT09ICdtZW1iZXInID8gMCA6IGIua2luZCA9PT0gJ2Z1bmN0aW9uJyA/IDEgOiAyO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnLFxuICAgICAgICAgICAgcHJvcGVydHkgOiAnbmFtZSdcbiAgICAgICAgfV07XG5cbiAgICAgICAgbWUuZmlyZSgnbXV0YXRlSXRlbXMnLCBtZS5zdG9yZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdG8gbm90IGNhbGwgY3JlYXRlSXRlbXMoKSBhdCB0aGlzIHBvaW50ID0+IG9uUmVmcmVzaENsYXNzTWVtYmVycygpXG4gICAgICovXG4gICAgb25TdG9yZUZpbHRlcigpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uUmVmcmVzaENsYXNzTWVtYmVycygpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJBbmRTb3J0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtcygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWVtYmVyc0xpc3QpO1xuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJzTGlzdDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5jbGFzc2RldGFpbHMuU291cmNlVmlld0NvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFNvdXJjZVZpZXdDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nRG9jcy52aWV3LmNsYXNzZGV0YWlscy5Tb3VyY2VWaWV3Q29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlNvdXJjZVZpZXdDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2xhc3NkZXRhaWxzLXNvdXJjZXZpZXdjb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2xhc3NkZXRhaWxzLXNvdXJjZXZpZXdjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNIaWdobGlnaHRlZF89ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNIaWdobGlnaHRlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGxpbmVfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGluZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcHJldmlvdXNMaW5lPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcHJldmlvdXNMaW5lOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHN0cnVjdHVyZURhdGE9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzdHJ1Y3R1cmVEYXRhOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT0ge292ZXJmbG93OiAnYXV0byd9XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFsvLy4uLl19XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7dGFnOiAncHJlJywgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnY29kZScsIGNsYXNzOiAnamF2YXNjcmlwdCd9XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdXJsICA9ICcuLi8uLi8nICsgbWUuc3RydWN0dXJlRGF0YS5zcmNQYXRoO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZVJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmFwcGx5U291cmNlQ29kZShkYXRhLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bnRheEhpZ2hsaWdodCgpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpc0hpZ2hsaWdodGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SXNIaWdobGlnaHRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUy5zeW50YXhIaWdobGlnaHRMaW5lKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGluZSAgIDogbWUubGluZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGluZTogbWUucHJldmlvdXNMaW5lLFxuICAgICAgICAgICAgICAgICAgICB2bm9kZUlkICAgOiBtZS52ZG9tLmNuWzBdLmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxpbmUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGluZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLnByZXZpb3VzTGluZSA9IG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmlzSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgIG1lLmFmdGVyU2V0SXNIaWdobGlnaHRlZCh0cnVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYXBwbHlTb3VyY2VDb2RlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSA9IG1lLnZkb20uY25bMF07IC8vIHByZSB0YWdcblxuICAgICAgICBub2RlLmNuWzBdLmlubmVySFRNTCA9IGRhdGE7IC8vIGNvZGUgdGFnXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuXG4gICAgICAgIG1lLm1vdW50ZWQgJiYgbWUuc3ludGF4SGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzeW50YXhIaWdobGlnaHQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLm1haW4uYWRkb24uSGlnaGxpZ2h0SlMuc3ludGF4SGlnaGxpZ2h0KHtcbiAgICAgICAgICAgIHZub2RlSWQ6IG1lLnZkb20uY25bMF0uaWRcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1lLmlzSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgICAgICBtZS5pc0hpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUuYWZ0ZXJTZXRJc0hpZ2hsaWdodGVkKHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTb3VyY2VWaWV3Q29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgU291cmNlVmlld0NvbXBvbmVudDtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIERvY3Mudmlldy5jbGFzc2RldGFpbHMuVHV0b3JpYWxDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBUdXRvcmlhbENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGNvbmZpZyA9IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdEb2NzLnZpZXcuY2xhc3NkZXRhaWxzLlR1dG9yaWFsQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NsYXNzZGV0YWlscy10dXRvcmlhbGNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jbGFzc2RldGFpbHMtdHV0b3JpYWxjb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBmaWxlTmFtZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWxlTmFtZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBmaWxlVHlwZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWxlVHlwZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9e292ZXJmbG93OiAnYXV0byd9XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlzSnNvbiA9IG1lLmZpbGVUeXBlID09PSAnanNvbicsXG4gICAgICAgICAgICB1cmwgICAgPSAnLi4vLi4vZG9jcy90dXRvcmlhbHMvJyArIG1lLmZpbGVOYW1lO1xuXG4gICAgICAgIE5lby5YaHJbaXNKc29uID8gJ3Byb21pc2VKc29uJyA6ICdwcm9taXNlUmVxdWVzdCddKHtcbiAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gZW5zdXJlIHdlIGFyZSBub3QgbW91bnRpbmdcbiAgICAgICAgICAgICAgICBtZS5hcHBseVNvdXJjZUNvZGUoaXNKc29uID8gZGF0YS5qc29uIDogZGF0YS5yZXNwb25zZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgYXBwbHlTb3VyY2VDb2RlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZmlsZVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgbWUudmRvbS5jbiA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS52ZG9tLmlubmVySFRNTCA9IGRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICBtZS51cGRhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFR1dG9yaWFsQ29tcG9uZW50LnN5bnRheEhpZ2hsaWdodCgpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgc3ludGF4SGlnaGxpZ2h0KCkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5IaWdobGlnaHRKUy5zeW50YXhIaWdobGlnaHRJbml0KCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUdXRvcmlhbENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFR1dG9yaWFsQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
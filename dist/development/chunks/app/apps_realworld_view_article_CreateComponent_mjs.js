"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_article_CreateComponent_mjs"],{

/***/ "./apps/realworld/view/article/CreateComponent.mjs":
/*!*********************************************************!*\
  !*** ./apps/realworld/view/article/CreateComponent.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");
/* harmony import */ var _api_Article_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/Article.mjs */ "./apps/realworld/api/Article.mjs");





/**
 * @class RealWorld.view.article.CreateComponent
 * @extends Neo.component.Base
 */
class CreateComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.view.article.CreateComponent'
         * @protected
         */
        className: 'RealWorld.view.article.CreateComponent',
        /**
         * @member {String} body_=''
         */
        body_: '',
        /**
         * @member {String[]} cls=['editor-page']
         */
        cls: ['editor-page'],
        /**
         * @member {Object[]} errors_=[]
         */
        errors_: [],
        /**
         * @member {String} description_=''
         */
        description_: '',
        /**
         * @member {String|null} slug=null
         */
        slug: null,
        /**
         * @member {String[]} tagList_=[]
         */
        tagList_: [],
        /**
         * @member {String} title_=''
         */
        title_: '',
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['container', 'page'], cn: [
                {cls: ['row'], cn: [
                    {cls: ['col-md-10', 'offset-md-1', 'col-xs-12'], cn: [
                        {tag: 'ul', cls : ['error-messages'], flag: 'errors'},
                        {tag: 'form', cn: [
                            {tag: 'fieldset', cn: [
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'input', cls: ['form-control', 'form-control-lg'], flag: 'title', name: 'title', placeholder: 'Article Title', type: 'text'}
                                ]},
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'input', cls: ['form-control'], name: 'description', flag: 'description', placeholder: 'What\'s this article about?', type: 'text'}
                                ]},
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'textarea', cls: ['form-control'], flag: 'body', name: 'body', placeholder: 'Write your article (in markdown)', rows: 8}
                                ]},
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'input', cls: ['form-control', 'field-tags'], flag: 'tags', name: 'tags', placeholder: 'Enter tags', type: 'text'},
                                    {cls: ['tag-list'], flag: 'tag-list'}
                                ]},
                                {tag: 'button', cls: ['btn', 'btn-lg', 'btn-primary', 'pull-xs-right'], html: 'Publish Article', type: 'button'}
                            ]}
                        ]}
                    ]}
                ]}
            ]}
        ]}
    }}

    /**
     * constructor
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push(
            {click  : {fn: me.onSubmitButtonClick, delegate: '.btn-primary',     scope: me}},
            {click  : {fn: me.onTagClose,          delegate: '.ion-close-round', scope: me}},
            {keydown: {fn: me.onFieldTagsKeyDown,  delegate: '.field-tags',      scope: me}}
        );

        me.domListeners = domListeners;
    }

    /**
     * Triggered after the body config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBody(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'body').value = value;
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

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'description').value = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the errors config got changed
     * @param {Object[]} value
     * @param {Object[]} oldValue
     * @protected
     */
    afterSetErrors(value, oldValue) {
        let me   = this,
            vdom = me.vdom,
            list = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'errors');

        list.cn = [];

        Object.entries(value || {}).forEach(([key, value]) => {
            list.cn.push({
                tag : 'li',
                html: key + ' ' + value.join(' and ')
            });
        });

        me.vdom = vdom;
    }

    /**
     * Triggered after the tagList config got changed
     * Render tag list and reset tag field value
     * @param {String[]} value
     * @param {String[]} oldValue
     */
    afterSetTagList(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            list     = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'tag-list'),
            tagField = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'tags');

        list.cn        = [];
        tagField.value = null; // TODO Reset tag field value properly

        Object.entries(value || {}).forEach(([key, value]) => {
            list.cn.push({
                tag: 'span',
                cls: ['tag-default tag-pill'],
                cn : [{
                    tag         : 'i',
                    cls         : ['ion-close-round'],
                    'data-value': value,
                }, {
                    vtype: 'text',
                    html : value
                }]
            });
        });

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

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'title').value = value;
        this.vdom = vdom;
    }

    /**
     * on field tags key down enter add tag to tag list
     * @param event
     */
    onFieldTagsKeyDown(event) {
        const me = this;

        if (event.key === 'Enter') {
            Neo.main.DomAccess.getAttributes({
                id        : event.target.id,
                attributes: 'value'
            }).then(data => {
                _node_modules_neo_mjs_src_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(me.vnode, {className: 'field-tags'}).vnode.attributes.value = data.value;
                me.tagList = [...me._tagList, data.value];
            });
        }
    }

    /**
     * get the form data and post the article via api
     */
    onSubmitButtonClick() {
        let me          = this,
            vdom        = me.vdom,
            body        = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'body'),
            description = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'description'),
            title       = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'title'),
            ids         = [
                title.id,
                description.id,
                body.id
            ];

        Neo.main.DomAccess.getAttributes({
            id        : ids,
            attributes: 'value'
        }).then(data => {
            _api_Article_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][me.slug ? 'put' : 'post']({
                data: JSON.stringify({
                    "article": {
                        "title"      : data[0].value,
                        "description": data[1].value,
                        "body"       : data[2].value,
                        "tagList"    : me.tagList
                    }
                }),
                slug: me.slug
            }).then(data => {
                const errors = data.json.errors;

                if (errors) {
                    me.errors = errors;
                } else {
                    Neo.Main.setRoute({
                        value: '/article/' + data.json.article.slug
                    });
                }
            });
        });
    }

    /**
     * Remove clicked tag from list
     * @param event
     */
    onTagClose(event) {
        this.tagList = this.tagList.filter(e => e !== event.target.data.value);
    }

    /**
     * Resets the value of all fields
     */
    resetForm() {
        this.set({
            body       : '',
            description: '',
            slug       : null,
            tagList    : [],
            title      : ''
        });
    }
}

Neo.applyClassConfig(CreateComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ3JlYXRlQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRjtBQUNMO0FBQ0M7QUFDOUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9GQUFTO0FBQ3ZDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQix5QkFBeUIsb0RBQW9EO0FBQzdFLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQyx1SEFBdUg7QUFDNUoscUNBQXFDO0FBQ3JDLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsVUFBVSxxRUFBcUU7QUFDNUYsYUFBYSxVQUFVLHFFQUFxRTtBQUM1RixhQUFhLFVBQVU7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHlGQUFrQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEseUZBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5RkFBa0I7O0FBRXJDOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUZBQWtCO0FBQ3pDLHVCQUF1Qix5RkFBa0I7O0FBRXpDO0FBQ0EsK0JBQStCOztBQUUvQixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEseUZBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQiwrRkFBd0IsWUFBWSx3QkFBd0I7QUFDNUU7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUZBQWtCO0FBQzVDLDBCQUEwQix5RkFBa0I7QUFDNUMsMEJBQTBCLHlGQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxZQUFZLHdEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9DcmVhdGVDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuaW1wb3J0IFZOb2RlVXRpbCAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVk5vZGUubWpzJztcbmltcG9ydCBBcnRpY2xlQXBpIGZyb20gJy4uLy4uL2FwaS9BcnRpY2xlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQ3JlYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5DcmVhdGVDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYm9keV89JydcbiAgICAgICAgICovXG4gICAgICAgIGJvZHlfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydlZGl0b3ItcGFnZSddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnZWRpdG9yLXBhZ2UnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBlcnJvcnNfPVtdXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzY3JpcHRpb25fPScnXG4gICAgICAgICAqL1xuICAgICAgICBkZXNjcmlwdGlvbl86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNsdWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2x1ZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB0YWdMaXN0Xz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0aXRsZV89JydcbiAgICAgICAgICovXG4gICAgICAgIHRpdGxlXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lcicsICdwYWdlJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge2NsczogWydyb3cnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydjb2wtbWQtMTAnLCAnb2Zmc2V0LW1kLTEnLCAnY29sLXhzLTEyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndWwnLCBjbHMgOiBbJ2Vycm9yLW1lc3NhZ2VzJ10sIGZsYWc6ICdlcnJvcnMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdmb3JtJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmllbGRzZXQnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmllbGRzZXQnLCBjbHM6IFsnZm9ybS1ncm91cCddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2lucHV0JywgY2xzOiBbJ2Zvcm0tY29udHJvbCcsICdmb3JtLWNvbnRyb2wtbGcnXSwgZmxhZzogJ3RpdGxlJywgbmFtZTogJ3RpdGxlJywgcGxhY2Vob2xkZXI6ICdBcnRpY2xlIFRpdGxlJywgdHlwZTogJ3RleHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbnB1dCcsIGNsczogWydmb3JtLWNvbnRyb2wnXSwgbmFtZTogJ2Rlc2NyaXB0aW9uJywgZmxhZzogJ2Rlc2NyaXB0aW9uJywgcGxhY2Vob2xkZXI6ICdXaGF0XFwncyB0aGlzIGFydGljbGUgYWJvdXQ/JywgdHlwZTogJ3RleHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZXh0YXJlYScsIGNsczogWydmb3JtLWNvbnRyb2wnXSwgZmxhZzogJ2JvZHknLCBuYW1lOiAnYm9keScsIHBsYWNlaG9sZGVyOiAnV3JpdGUgeW91ciBhcnRpY2xlIChpbiBtYXJrZG93biknLCByb3dzOiA4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbnB1dCcsIGNsczogWydmb3JtLWNvbnRyb2wnLCAnZmllbGQtdGFncyddLCBmbGFnOiAndGFncycsIG5hbWU6ICd0YWdzJywgcGxhY2Vob2xkZXI6ICdFbnRlciB0YWdzJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsndGFnLWxpc3QnXSwgZmxhZzogJ3RhZy1saXN0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1sZycsICdidG4tcHJpbWFyeScsICdwdWxsLXhzLXJpZ2h0J10sIGh0bWw6ICdQdWJsaXNoIEFydGljbGUnLCB0eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaChcbiAgICAgICAgICAgIHtjbGljayAgOiB7Zm46IG1lLm9uU3VibWl0QnV0dG9uQ2xpY2ssIGRlbGVnYXRlOiAnLmJ0bi1wcmltYXJ5JywgICAgIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2NsaWNrICA6IHtmbjogbWUub25UYWdDbG9zZSwgICAgICAgICAgZGVsZWdhdGU6ICcuaW9uLWNsb3NlLXJvdW5kJywgc2NvcGU6IG1lfX0sXG4gICAgICAgICAgICB7a2V5ZG93bjoge2ZuOiBtZS5vbkZpZWxkVGFnc0tleURvd24sICBkZWxlZ2F0ZTogJy5maWVsZC10YWdzJywgICAgICBzY29wZTogbWV9fVxuICAgICAgICApO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGJvZHkgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Qm9keSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdib2R5JykudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRlc2NyaXB0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERlc2NyaXB0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGVycm9ycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RXJyb3JzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIGxpc3QgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2Vycm9ycycpO1xuXG4gICAgICAgIGxpc3QuY24gPSBbXTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSB8fCB7fSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBsaXN0LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhZyA6ICdsaScsXG4gICAgICAgICAgICAgICAgaHRtbDoga2V5ICsgJyAnICsgdmFsdWUuam9pbignIGFuZCAnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGFnTGlzdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBSZW5kZXIgdGFnIGxpc3QgYW5kIHJlc2V0IHRhZyBmaWVsZCB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldFRhZ0xpc3QodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBsaXN0ICAgICA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndGFnLWxpc3QnKSxcbiAgICAgICAgICAgIHRhZ0ZpZWxkID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd0YWdzJyk7XG5cbiAgICAgICAgbGlzdC5jbiAgICAgICAgPSBbXTtcbiAgICAgICAgdGFnRmllbGQudmFsdWUgPSBudWxsOyAvLyBUT0RPIFJlc2V0IHRhZyBmaWVsZCB2YWx1ZSBwcm9wZXJseVxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlIHx8IHt9KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGxpc3QuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ3RhZy1kZWZhdWx0IHRhZy1waWxsJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgICAgICAgICA6ICdpJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgICAgOiBbJ2lvbi1jbG9zZS1yb3VuZCddLFxuICAgICAgICAgICAgICAgICAgICAnZGF0YS12YWx1ZSc6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdnR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA6IHZhbHVlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRpdGxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRpdGxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3RpdGxlJykudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvbiBmaWVsZCB0YWdzIGtleSBkb3duIGVudGVyIGFkZCB0YWcgdG8gdGFnIGxpc3RcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkZpZWxkVGFnc0tleURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgOiBldmVudC50YXJnZXQuaWQsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogJ3ZhbHVlJ1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBWTm9kZVV0aWwuZmluZENoaWxkVm5vZGUobWUudm5vZGUsIHtjbGFzc05hbWU6ICdmaWVsZC10YWdzJ30pLnZub2RlLmF0dHJpYnV0ZXMudmFsdWUgPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIG1lLnRhZ0xpc3QgPSBbLi4ubWUuX3RhZ0xpc3QsIGRhdGEudmFsdWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGZvcm0gZGF0YSBhbmQgcG9zdCB0aGUgYXJ0aWNsZSB2aWEgYXBpXG4gICAgICovXG4gICAgb25TdWJtaXRCdXR0b25DbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGJvZHkgICAgICAgID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdib2R5JyksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnZGVzY3JpcHRpb24nKSxcbiAgICAgICAgICAgIHRpdGxlICAgICAgID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd0aXRsZScpLFxuICAgICAgICAgICAgaWRzICAgICAgICAgPSBbXG4gICAgICAgICAgICAgICAgdGl0bGUuaWQsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uaWQsXG4gICAgICAgICAgICAgICAgYm9keS5pZFxuICAgICAgICAgICAgXTtcblxuICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZ2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICBpZCAgICAgICAgOiBpZHMsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiAndmFsdWUnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBBcnRpY2xlQXBpW21lLnNsdWcgPyAncHV0JyA6ICdwb3N0J10oe1xuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgXCJhcnRpY2xlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIiAgICAgIDogZGF0YVswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogZGF0YVsxXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9keVwiICAgICAgIDogZGF0YVsyXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFnTGlzdFwiICAgIDogbWUudGFnTGlzdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgc2x1ZzogbWUuc2x1Z1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBkYXRhLmpzb24uZXJyb3JzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICBtZS5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcvYXJ0aWNsZS8nICsgZGF0YS5qc29uLmFydGljbGUuc2x1Z1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGNsaWNrZWQgdGFnIGZyb20gbGlzdFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIG9uVGFnQ2xvc2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy50YWdMaXN0ID0gdGhpcy50YWdMaXN0LmZpbHRlcihlID0+IGUgIT09IGV2ZW50LnRhcmdldC5kYXRhLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHZhbHVlIG9mIGFsbCBmaWVsZHNcbiAgICAgKi9cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgIGJvZHkgICAgICAgOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIHNsdWcgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgdGFnTGlzdCAgICA6IFtdLFxuICAgICAgICAgICAgdGl0bGUgICAgICA6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ3JlYXRlQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
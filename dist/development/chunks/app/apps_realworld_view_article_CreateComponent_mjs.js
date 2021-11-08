"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_article_CreateComponent_mjs"],{

/***/ "./apps/realworld/view/article/CreateComponent.mjs":
/*!*********************************************************!*\
  !*** ./apps/realworld/view/article/CreateComponent.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateComponent)
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
    constructor(config) {
        super(config);

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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ3JlYXRlQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRjtBQUNMO0FBQ0M7QUFDOUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9GQUFTO0FBQ3ZDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQix5QkFBeUIsb0RBQW9EO0FBQzdFLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLHFDQUFxQyx1SEFBdUg7QUFDNUoscUNBQXFDO0FBQ3JDLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsVUFBVSxxRUFBcUU7QUFDNUYsYUFBYSxVQUFVLHFFQUFxRTtBQUM1RixhQUFhLFVBQVU7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHlGQUFrQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEseUZBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5RkFBa0I7O0FBRXJDOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUZBQWtCO0FBQ3pDLHVCQUF1Qix5RkFBa0I7O0FBRXpDO0FBQ0EsK0JBQStCOztBQUUvQixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEseUZBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQiwrRkFBd0IsWUFBWSx3QkFBd0I7QUFDNUU7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUZBQWtCO0FBQzVDLDBCQUEwQix5RkFBa0I7QUFDNUMsMEJBQTBCLHlGQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxZQUFZLHdEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9DcmVhdGVDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuaW1wb3J0IFZOb2RlVXRpbCAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVk5vZGUubWpzJztcbmltcG9ydCBBcnRpY2xlQXBpIGZyb20gJy4uLy4uL2FwaS9BcnRpY2xlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQ3JlYXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5DcmVhdGVDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ3JlYXRlQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYm9keV89JydcbiAgICAgICAgICovXG4gICAgICAgIGJvZHlfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydlZGl0b3ItcGFnZSddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnZWRpdG9yLXBhZ2UnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBlcnJvcnNfPVtdXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzY3JpcHRpb25fPScnXG4gICAgICAgICAqL1xuICAgICAgICBkZXNjcmlwdGlvbl86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNsdWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2x1ZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB0YWdMaXN0Xz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgdGFnTGlzdF86IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0aXRsZV89JydcbiAgICAgICAgICovXG4gICAgICAgIHRpdGxlXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lcicsICdwYWdlJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge2NsczogWydyb3cnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydjb2wtbWQtMTAnLCAnb2Zmc2V0LW1kLTEnLCAnY29sLXhzLTEyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndWwnLCBjbHMgOiBbJ2Vycm9yLW1lc3NhZ2VzJ10sIGZsYWc6ICdlcnJvcnMnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdmb3JtJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmllbGRzZXQnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmllbGRzZXQnLCBjbHM6IFsnZm9ybS1ncm91cCddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2lucHV0JywgY2xzOiBbJ2Zvcm0tY29udHJvbCcsICdmb3JtLWNvbnRyb2wtbGcnXSwgZmxhZzogJ3RpdGxlJywgbmFtZTogJ3RpdGxlJywgcGxhY2Vob2xkZXI6ICdBcnRpY2xlIFRpdGxlJywgdHlwZTogJ3RleHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbnB1dCcsIGNsczogWydmb3JtLWNvbnRyb2wnXSwgbmFtZTogJ2Rlc2NyaXB0aW9uJywgZmxhZzogJ2Rlc2NyaXB0aW9uJywgcGxhY2Vob2xkZXI6ICdXaGF0XFwncyB0aGlzIGFydGljbGUgYWJvdXQ/JywgdHlwZTogJ3RleHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZXh0YXJlYScsIGNsczogWydmb3JtLWNvbnRyb2wnXSwgZmxhZzogJ2JvZHknLCBuYW1lOiAnYm9keScsIHBsYWNlaG9sZGVyOiAnV3JpdGUgeW91ciBhcnRpY2xlIChpbiBtYXJrZG93biknLCByb3dzOiA4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbnB1dCcsIGNsczogWydmb3JtLWNvbnRyb2wnLCAnZmllbGQtdGFncyddLCBmbGFnOiAndGFncycsIG5hbWU6ICd0YWdzJywgcGxhY2Vob2xkZXI6ICdFbnRlciB0YWdzJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjbHM6IFsndGFnLWxpc3QnXSwgZmxhZzogJ3RhZy1saXN0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1sZycsICdidG4tcHJpbWFyeScsICdwdWxsLXhzLXJpZ2h0J10sIGh0bWw6ICdQdWJsaXNoIEFydGljbGUnLCB0eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goXG4gICAgICAgICAgICB7Y2xpY2sgIDoge2ZuOiBtZS5vblN1Ym1pdEJ1dHRvbkNsaWNrLCBkZWxlZ2F0ZTogJy5idG4tcHJpbWFyeScsICAgICBzY29wZTogbWV9fSxcbiAgICAgICAgICAgIHtjbGljayAgOiB7Zm46IG1lLm9uVGFnQ2xvc2UsICAgICAgICAgIGRlbGVnYXRlOiAnLmlvbi1jbG9zZS1yb3VuZCcsIHNjb3BlOiBtZX19LFxuICAgICAgICAgICAge2tleWRvd246IHtmbjogbWUub25GaWVsZFRhZ3NLZXlEb3duLCAgZGVsZWdhdGU6ICcuZmllbGQtdGFncycsICAgICAgc2NvcGU6IG1lfX1cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBib2R5IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEJvZHkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYm9keScpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkZXNjcmlwdGlvbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREZXNjcmlwdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdkZXNjcmlwdGlvbicpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBlcnJvcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEVycm9ycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb20sXG4gICAgICAgICAgICBsaXN0ID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdlcnJvcnMnKTtcblxuICAgICAgICBsaXN0LmNuID0gW107XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUgfHwge30pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgbGlzdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWcgOiAnbGknLFxuICAgICAgICAgICAgICAgIGh0bWw6IGtleSArICcgJyArIHZhbHVlLmpvaW4oJyBhbmQgJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRhZ0xpc3QgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogUmVuZGVyIHRhZyBsaXN0IGFuZCByZXNldCB0YWcgZmllbGQgdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUYWdMaXN0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgbGlzdCAgICAgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ3RhZy1saXN0JyksXG4gICAgICAgICAgICB0YWdGaWVsZCA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndGFncycpO1xuXG4gICAgICAgIGxpc3QuY24gICAgICAgID0gW107XG4gICAgICAgIHRhZ0ZpZWxkLnZhbHVlID0gbnVsbDsgLy8gVE9ETyBSZXNldCB0YWcgZmllbGQgdmFsdWUgcHJvcGVybHlcblxuICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSB8fCB7fSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBsaXN0LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGNsczogWyd0YWctZGVmYXVsdCB0YWctcGlsbCddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgICAgOiAnaScsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgICAgICAgIDogWydpb24tY2xvc2Utcm91bmQnXSxcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtdmFsdWUnOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHZ0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aXRsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaXRsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd0aXRsZScpLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb24gZmllbGQgdGFncyBrZXkgZG93biBlbnRlciBhZGQgdGFnIHRvIHRhZyBsaXN0XG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgb25GaWVsZFRhZ3NLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZ2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICAgICAgaWQgICAgICAgIDogZXZlbnQudGFyZ2V0LmlkLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6ICd2YWx1ZSdcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG1lLnZub2RlLCB7Y2xhc3NOYW1lOiAnZmllbGQtdGFncyd9KS52bm9kZS5hdHRyaWJ1dGVzLnZhbHVlID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICBtZS50YWdMaXN0ID0gWy4uLm1lLl90YWdMaXN0LCBkYXRhLnZhbHVlXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBmb3JtIGRhdGEgYW5kIHBvc3QgdGhlIGFydGljbGUgdmlhIGFwaVxuICAgICAqL1xuICAgIG9uU3VibWl0QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBib2R5ICAgICAgICA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYm9keScpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICB0aXRsZSAgICAgICA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAndGl0bGUnKSxcbiAgICAgICAgICAgIGlkcyAgICAgICAgID0gW1xuICAgICAgICAgICAgICAgIHRpdGxlLmlkLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlkLFxuICAgICAgICAgICAgICAgIGJvZHkuaWRcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgaWQgICAgICAgIDogaWRzLFxuICAgICAgICAgICAgYXR0cmlidXRlczogJ3ZhbHVlJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgQXJ0aWNsZUFwaVttZS5zbHVnID8gJ3B1dCcgOiAncG9zdCddKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwiYXJ0aWNsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCIgICAgICA6IGRhdGFbMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGRhdGFbMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvZHlcIiAgICAgICA6IGRhdGFbMl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhZ0xpc3RcIiAgICA6IG1lLnRhZ0xpc3RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHNsdWc6IG1lLnNsdWdcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZGF0YS5qc29uLmVycm9ycztcblxuICAgICAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnL2FydGljbGUvJyArIGRhdGEuanNvbi5hcnRpY2xlLnNsdWdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjbGlja2VkIHRhZyBmcm9tIGxpc3RcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBvblRhZ0Nsb3NlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudGFnTGlzdCA9IHRoaXMudGFnTGlzdC5maWx0ZXIoZSA9PiBlICE9PSBldmVudC50YXJnZXQuZGF0YS52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB2YWx1ZSBvZiBhbGwgZmllbGRzXG4gICAgICovXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICBib2R5ICAgICAgIDogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICBzbHVnICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIHRhZ0xpc3QgICAgOiBbXSxcbiAgICAgICAgICAgIHRpdGxlICAgICAgOiAnJ1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENyZWF0ZUNvbXBvbmVudCk7XG5cbmV4cG9ydCB7Q3JlYXRlQ29tcG9uZW50IGFzIGRlZmF1bHR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
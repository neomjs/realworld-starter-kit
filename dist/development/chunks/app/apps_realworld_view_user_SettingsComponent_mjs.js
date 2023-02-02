"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_user_SettingsComponent_mjs"],{

/***/ "./apps/realworld/view/user/SettingsComponent.mjs":
/*!********************************************************!*\
  !*** ./apps/realworld/view/user/SettingsComponent.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class RealWorld.view.user.SettingsComponent
 * @extends Neo.component.Base
 */
class SettingsComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.user.SettingsComponent'
         * @protected
         */
        className: 'RealWorld.view.user.SettingsComponent',
        /**
         * @member {String[]} baseCls=['settings-page']
         */
        baseCls: ['settings-page'],
        /**
         * @member {String} bio_=null
         */
        bio_: null,
        /**
         * @member {String} email_=null
         */
        email_: null,
        /**
         * @member {Object[]} errors_=[]
         */
        errors_: [],
        /**
         * @member {String} image_=null
         */
        image_: null,
        /**
         * @member {String} userName_=null
         */
        userName_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['container', 'page'], cn: [
                {cls: ['row'], cn: [
                    {cls: ['col-md-6', 'offset-md-3', 'col-xs-12'], cn: [
                        {tag: 'h1', cls: ['text-xs-center'], html: 'Your Settings'},
                        {tag: 'ul', cls: ['error-messages'], flag: 'errors', removeDom: true},
                        {tag: 'form', cn: [
                            {tag: 'fieldset', cn: [
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'input', cls: ['form-control'], flag: 'image', placeholder: 'URL of profile picture', type: 'text'}
                                ]},
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'input', cls: ['form-control', 'form-control-lg'], flag: 'userName', placeholder: 'Your Name', type: 'text'}
                                ]},
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'textarea', cls: ['form-control', 'form-control-lg'], flag: 'bio', placeholder: 'Short bio about you', rows: 8}
                                ]},
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'input', cls: ['form-control', 'form-control-lg'], flag: 'email', placeholder: 'Email', type: 'text'}
                                ]},
                                {tag: 'fieldset', cls: ['form-group'], cn: [
                                    {tag: 'input', cls: ['form-control', 'form-control-lg'], flag: 'password', placeholder: 'Password', type: 'password'}
                                ]},
                                {tag: 'button', cls: ['btn', 'btn-lg', 'btn-primary', 'pull-xs-right'], html: 'Update Settings'}
                            ]}
                        ]},
                        {tag: 'hr'},
                        {tag: 'button', cls: ['btn', 'btn-outline-danger'], html: 'Or click here to logout.'}
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

        let me = this;

        me.addDomListeners([
            {click: {fn: me.onLogoutButtonClick, delegate: '.btn-outline-danger', scope: me}},
            {click: {fn: me.onSubmitButtonClick, delegate: '.btn-primary',        scope: me}}
        ]);

        me.getController().on({
            afterSetCurrentUser: me.onCurrentUserChange,
            scope              : me
        });
    }

    /**
     * Triggered after the bio config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBio(value, oldValue) {
        let vdom = this.vdom;

        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'bio').value = value;
        this.update();
    }

    /**
     * Triggered after the email config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetEmail(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(this.vdom, 'email').value = value;
        this.update();
    }

    /**
     * Triggered after the errors config got changed
     * @param {Object[]} value=[]
     * @param {Object[]} oldValue
     * @protected
     */
    afterSetErrors(value=[], oldValue) {
        let me   = this,
            list = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(me.vdom, 'errors');

        list.cn        = [];
        list.removeDom = value.length === 0;

        Object.entries(value).forEach(([key, value]) => {
            list.cn.push({
                tag : 'li',
                html: key + ' ' + value.join(' and ')
            });
        });

        me.update();
    }

    /**
     * Triggered after the image config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetImage(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(this.vdom, 'image').value = value;
        this.update();
    }

    /**
     * Triggered after the userName config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUserName(value, oldValue) {
        _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(this.vdom, 'userName').value = value;
        this.update();
    }

    /**
     * @param {Object} value
     */
    onCurrentUserChange(value) {
        if (value) {
            this.set({
                bio     : value.bio,
                email   : value.email,
                errors  : [],
                image   : value.image,
                userName: value.username
            });
        }
    }

    /**
     * @param {Object} data
     */
    onLogoutButtonClick(data) {
        this.getController().logout();
    }

    /**
     * @param {Object} data
     */
    onSubmitButtonClick(data) {
        let me       = this,
            vdom     = me.vdom,
            bio      = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'bio'),
            email    = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'email'),
            image    = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'image'),
            password = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'password'),
            userName = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'userName');

        Neo.main.DomAccess.getAttributes({
            id        : [bio.id, email.id, image.id, password.id, userName.id],
            attributes: 'value'
        }).then(data => {
            me.getController().updateSettings({
                data: JSON.stringify({
                    user: {
                        bio     : data[0].value,
                        email   : data[1].value,
                        image   : data[2].value,
                        password: data[3].value,
                        username: data[4].value
                    }
                })
            }).then(data => {
                const errors = data.json.errors;

                if (errors) {
                    me.errors = errors;
                } else {
                    Neo.Main.setRoute({
                        value: '/profile/' + data.json.user.username
                    });
                }
            })
        });
    }
}

Neo.applyClassConfig(SettingsComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X3VzZXJfU2V0dGluZ3NDb21wb25lbnRfbWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRjtBQUNMOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvRkFBUztBQUN6QztBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLHlCQUF5QiwwREFBMEQ7QUFDbkYseUJBQXlCLG9FQUFvRTtBQUM3Rix5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQztBQUNBLDBCQUEwQjtBQUMxQix5QkFBeUIsVUFBVTtBQUNuQyx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLFFBQVEsd0VBQXdFO0FBQzdGLGFBQWEsUUFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx5RkFBa0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlGQUFrQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlGQUFrQjs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RkFBa0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlGQUFrQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlGQUFrQjtBQUN6Qyx1QkFBdUIseUZBQWtCO0FBQ3pDLHVCQUF1Qix5RkFBa0I7QUFDekMsdUJBQXVCLHlGQUFrQjtBQUN6Qyx1QkFBdUIseUZBQWtCOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvdXNlci9TZXR0aW5nc0NvbXBvbmVudC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy51c2VyLlNldHRpbmdzQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcudXNlci5TZXR0aW5nc0NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcudXNlci5TZXR0aW5nc0NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYmFzZUNscz1bJ3NldHRpbmdzLXBhZ2UnXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWydzZXR0aW5ncy1wYWdlJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJpb189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYmlvXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZW1haWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGVtYWlsXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBlcnJvcnNfPVtdXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW1hZ2VfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdXNlck5hbWVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVzZXJOYW1lXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJywgJ3BhZ2UnXSwgY246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ3JvdyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC1tZC02JywgJ29mZnNldC1tZC0zJywgJ2NvbC14cy0xMiddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2gxJywgY2xzOiBbJ3RleHQteHMtY2VudGVyJ10sIGh0bWw6ICdZb3VyIFNldHRpbmdzJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAndWwnLCBjbHM6IFsnZXJyb3ItbWVzc2FnZXMnXSwgZmxhZzogJ2Vycm9ycycsIHJlbW92ZURvbTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZm9ybScsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbnB1dCcsIGNsczogWydmb3JtLWNvbnRyb2wnXSwgZmxhZzogJ2ltYWdlJywgcGxhY2Vob2xkZXI6ICdVUkwgb2YgcHJvZmlsZSBwaWN0dXJlJywgdHlwZTogJ3RleHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbnB1dCcsIGNsczogWydmb3JtLWNvbnRyb2wnLCAnZm9ybS1jb250cm9sLWxnJ10sIGZsYWc6ICd1c2VyTmFtZScsIHBsYWNlaG9sZGVyOiAnWW91ciBOYW1lJywgdHlwZTogJ3RleHQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd0ZXh0YXJlYScsIGNsczogWydmb3JtLWNvbnRyb2wnLCAnZm9ybS1jb250cm9sLWxnJ10sIGZsYWc6ICdiaW8nLCBwbGFjZWhvbGRlcjogJ1Nob3J0IGJpbyBhYm91dCB5b3UnLCByb3dzOiA4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ZpZWxkc2V0JywgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbnB1dCcsIGNsczogWydmb3JtLWNvbnRyb2wnLCAnZm9ybS1jb250cm9sLWxnJ10sIGZsYWc6ICdlbWFpbCcsIHBsYWNlaG9sZGVyOiAnRW1haWwnLCB0eXBlOiAndGV4dCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmllbGRzZXQnLCBjbHM6IFsnZm9ybS1ncm91cCddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2lucHV0JywgY2xzOiBbJ2Zvcm0tY29udHJvbCcsICdmb3JtLWNvbnRyb2wtbGcnXSwgZmxhZzogJ3Bhc3N3b3JkJywgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tbGcnLCAnYnRuLXByaW1hcnknLCAncHVsbC14cy1yaWdodCddLCBodG1sOiAnVXBkYXRlIFNldHRpbmdzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaHInfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1vdXRsaW5lLWRhbmdlciddLCBodG1sOiAnT3IgY2xpY2sgaGVyZSB0byBsb2dvdXQuJ31cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFkZERvbUxpc3RlbmVycyhbXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25Mb2dvdXRCdXR0b25DbGljaywgZGVsZWdhdGU6ICcuYnRuLW91dGxpbmUtZGFuZ2VyJywgc2NvcGU6IG1lfX0sXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25TdWJtaXRCdXR0b25DbGljaywgZGVsZWdhdGU6ICcuYnRuLXByaW1hcnknLCAgICAgICAgc2NvcGU6IG1lfX1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLm9uKHtcbiAgICAgICAgICAgIGFmdGVyU2V0Q3VycmVudFVzZXI6IG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGJpbyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRCaW8odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAnYmlvJykudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGVtYWlsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEVtYWlsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodGhpcy52ZG9tLCAnZW1haWwnKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZXJyb3JzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHZhbHVlPVtdXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRFcnJvcnModmFsdWU9W10sIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGxpc3QgPSBWRG9tVXRpbC5nZXRCeUZsYWcobWUudmRvbSwgJ2Vycm9ycycpO1xuXG4gICAgICAgIGxpc3QuY24gICAgICAgID0gW107XG4gICAgICAgIGxpc3QucmVtb3ZlRG9tID0gdmFsdWUubGVuZ3RoID09PSAwO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGxpc3QuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnIDogJ2xpJyxcbiAgICAgICAgICAgICAgICBodG1sOiBrZXkgKyAnICcgKyB2YWx1ZS5qb2luKCcgYW5kICcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbWFnZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbWFnZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHRoaXMudmRvbSwgJ2ltYWdlJykudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZXJOYW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZXJOYW1lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodGhpcy52ZG9tLCAndXNlck5hbWUnKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uQ3VycmVudFVzZXJDaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgYmlvICAgICA6IHZhbHVlLmJpbyxcbiAgICAgICAgICAgICAgICBlbWFpbCAgIDogdmFsdWUuZW1haWwsXG4gICAgICAgICAgICAgICAgZXJyb3JzICA6IFtdLFxuICAgICAgICAgICAgICAgIGltYWdlICAgOiB2YWx1ZS5pbWFnZSxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogdmFsdWUudXNlcm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkxvZ291dEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRDb250cm9sbGVyKCkubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Ym1pdEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGJpbyAgICAgID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdiaW8nKSxcbiAgICAgICAgICAgIGVtYWlsICAgID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdlbWFpbCcpLFxuICAgICAgICAgICAgaW1hZ2UgICAgPSBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ2ltYWdlJyksXG4gICAgICAgICAgICBwYXNzd29yZCA9IFZEb21VdGlsLmdldEJ5RmxhZyh2ZG9tLCAncGFzc3dvcmQnKSxcbiAgICAgICAgICAgIHVzZXJOYW1lID0gVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICd1c2VyTmFtZScpO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRBdHRyaWJ1dGVzKHtcbiAgICAgICAgICAgIGlkICAgICAgICA6IFtiaW8uaWQsIGVtYWlsLmlkLCBpbWFnZS5pZCwgcGFzc3dvcmQuaWQsIHVzZXJOYW1lLmlkXSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6ICd2YWx1ZSdcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS51cGRhdGVTZXR0aW5ncyh7XG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaW8gICAgIDogZGF0YVswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsICAgOiBkYXRhWzFdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgICA6IGRhdGFbMl0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZGF0YVszXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhWzRdLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBkYXRhLmpzb24uZXJyb3JzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICBtZS5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcvcHJvZmlsZS8nICsgZGF0YS5qc29uLnVzZXIudXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTZXR0aW5nc0NvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
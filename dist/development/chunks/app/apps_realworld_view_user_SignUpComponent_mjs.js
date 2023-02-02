"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_user_SignUpComponent_mjs"],{

/***/ "./apps/realworld/view/user/SignUpComponent.mjs":
/*!******************************************************!*\
  !*** ./apps/realworld/view/user/SignUpComponent.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class RealWorld.view.user.SignUpComponent
 * @extends Neo.component.Base
 */
class SignUpComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
        /**
         * @member {String} className='RealWorld.view.user.SignUpComponent'
         * @protected
         */
        className: 'RealWorld.view.user.SignUpComponent',
        /**
         * @member {String[]} baseCls=['auth-page']
         */
        baseCls: ['auth-page'],
        /**
         * @member {Object[]} errors_=[]
         */
        errors_: [],
        /**
         * @member {Object[]} fieldsets_
         */
        fieldsets_: [
            {name: 'username', placeholder: 'Your Name', type: 'text'},
            {name: 'email',    placeholder: 'Email',     type: 'text'},
            {name: 'password', placeholder: 'Password',  type: 'password'}
        ],
        /**
         * @member {Object} keys
         */
        keys: {
            'Enter': 'onKeyDownEnter'
        },
        /**
         * @member {String} mode_='signup'
         * @protected
         */
        mode_: 'signup',
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['container', 'page'], cn: [
                {cls: ['row'], cn: [
                    {cls: ['col-md-6', 'offset-md-3', 'col-xs-12'], cn: [
                        {tag: 'h1', cls: ['text-xs-center']},
                        {tag: 'p', cls: ['text-xs-center'], cn : [{tag: 'a'}]},
                        {tag: 'ul', cls: ['error-messages']},
                        {tag: 'form', cn: [
                            {tag: 'fieldset', cn: [
                                {tag: 'button', cls: ['btn', 'btn-lg', 'btn-primary', 'pull-xs-right'], type: 'button'}
                            ]}
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

        let me = this;

        me.addDomListeners({
            click: {
                fn      : me.onSubmitButtonClick,
                delegate: '.btn-primary',
                scope   : me
            }
        });
    }

    /**
     * Triggered after the errors config got changed
     * @param {Object[]} value
     * @param {Object[]} oldValue
     * @protected
     */
    afterSetErrors(value, oldValue) {
        let me   = this,
            list = me.getErrorMessagesList();

        list.cn = [];

        Object.entries(value || {}).forEach(([key, value]) => {
            list.cn.push({
                tag : 'li',
                html: key + ' ' + value.join(' and ')
            });
        });

        me.update();
    }

    /**
     * Triggered after the fieldsets config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFieldsets(value, oldValue) {
        let me   = this,
            form = me.vdom.cn[0].cn[0].cn[0].cn[3];

        // slice().reverse() => iterate backwards
        value.slice().reverse().forEach(item => {
            form.cn[0].cn.unshift({
                tag: 'fieldset',
                cls: ['form-group'],
                cn : [{
                    tag        : 'input',
                    cls        : ['form-control', 'form-control-lg'],
                    id         : me.getInputId(item.name),
                    name       : item.name,
                    placeholder: item.placeholder,
                    type       : item.type
                }]
            });
        });

        me.update();
    }

    /**
     * Triggered after the mode config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetMode(value, oldValue) {
        let me         = this,
            isSignup   = value === 'signup',
            contentDiv = me.vdom.cn[0].cn[0].cn[0];

        // vdom bulk update
        contentDiv.cn[0].html = isSignup ? 'Sign up' : 'Sign in';

        contentDiv.cn[1].cn[0].href = isSignup ? '#/login' : '#/register';
        contentDiv.cn[1].cn[0].html = isSignup ? 'Have an account?' : 'Need an account?';

        // remove the username fieldset if needed
        contentDiv.cn[3].cn[0].cn[0].removeDom = !isSignup;

        // submit button text
        contentDiv.cn[3].cn[0].cn[3].html = isSignup ? 'Sign up' : 'Sign in';

        me.update();
    }

    /**
     * Example for dynamically finding vdom elements
     * @returns {Object} vdom
     */
    getErrorMessagesList() {
        let el = _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(this.vdom, {cls: 'error-messages'});
        return el?.vdom;
    }

    /**
     * Creates an inputEl id using the view id as a prefix
     * @returns {String} itemId
     */
    getInputId(id) {
        return this.id + '__' + id;
    }

    /**
     *
     */
    onKeyDownEnter() {
        this.onSubmitButtonClick();
    }

    /**
     *
     */
    onSubmitButtonClick() {
        let me         = this,
            controller = me.getController(),
            isSignup   = me.mode === 'signup',
            ids        = [me.getInputId('email'), me.getInputId('password')],
            userData;

        if (isSignup) {
            ids.push(me.getInputId('username'));
        }

        // read the input values from the main thread
        // we could register an oninput event to this view as well and store the changes
        Neo.main.DomAccess.getAttributes({
            id        : ids,
            attributes: 'value'
        }).then(data => {
            userData = {
                user: {
                    email   : data[0].value,
                    password: data[1].value
                }
            };

            if (isSignup) {
                userData.user.username = data[2].value;
            }

            controller.saveUser({
                data: JSON.stringify(userData),
                slug: isSignup ? '' : '/login'
            }).then(data => {
                const errors = data.json.errors;

                if (errors) {
                    me.errors = errors;
                } else {
                    controller.login(data.json.user);
                }
            });
        });
    }
}

Neo.applyClassConfig(SignUpComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X3VzZXJfU2lnblVwQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDTDs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0ZBQVM7QUFDdkM7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBLGFBQWEseURBQXlEO0FBQ3RFLGFBQWEseURBQXlEO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLHlCQUF5QixtQ0FBbUM7QUFDNUQseUJBQXlCLDBDQUEwQyxTQUFTLEVBQUU7QUFDOUUseUJBQXlCLG1DQUFtQztBQUM1RCx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCLDZGQUFzQixhQUFhLHNCQUFzQjtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvdXNlci9TaWduVXBDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcudXNlci5TaWduVXBDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBTaWduVXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBjb25maWcgPSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcudXNlci5TaWduVXBDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LnVzZXIuU2lnblVwQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBiYXNlQ2xzPVsnYXV0aC1wYWdlJ11cbiAgICAgICAgICovXG4gICAgICAgIGJhc2VDbHM6IFsnYXV0aC1wYWdlJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZXJyb3JzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3JzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzZXRzX1xuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzZXRzXzogW1xuICAgICAgICAgICAge25hbWU6ICd1c2VybmFtZScsIHBsYWNlaG9sZGVyOiAnWW91ciBOYW1lJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW1haWwnLCAgICBwbGFjZWhvbGRlcjogJ0VtYWlsJywgICAgIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ3Bhc3N3b3JkJywgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsICB0eXBlOiAncGFzc3dvcmQnfVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAnRW50ZXInOiAnb25LZXlEb3duRW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG1vZGVfPSdzaWdudXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVfOiAnc2lnbnVwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJywgJ3BhZ2UnXSwgY246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ3JvdyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC1tZC02JywgJ29mZnNldC1tZC0zJywgJ2NvbC14cy0xMiddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2gxJywgY2xzOiBbJ3RleHQteHMtY2VudGVyJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3AnLCBjbHM6IFsndGV4dC14cy1jZW50ZXInXSwgY24gOiBbe3RhZzogJ2EnfV19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3VsJywgY2xzOiBbJ2Vycm9yLW1lc3NhZ2VzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2Zvcm0nLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdmaWVsZHNldCcsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1sZycsICdidG4tcHJpbWFyeScsICdwdWxsLXhzLXJpZ2h0J10sIHR5cGU6ICdidXR0b24nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuYWRkRG9tTGlzdGVuZXJzKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICAgICA6IG1lLm9uU3VibWl0QnV0dG9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgZGVsZWdhdGU6ICcuYnRuLXByaW1hcnknLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGVycm9ycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RXJyb3JzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBsaXN0ID0gbWUuZ2V0RXJyb3JNZXNzYWdlc0xpc3QoKTtcblxuICAgICAgICBsaXN0LmNuID0gW107XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUgfHwge30pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgbGlzdC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWcgOiAnbGknLFxuICAgICAgICAgICAgICAgIGh0bWw6IGtleSArICcgJyArIHZhbHVlLmpvaW4oJyBhbmQgJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGZpZWxkc2V0cyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGaWVsZHNldHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGZvcm0gPSBtZS52ZG9tLmNuWzBdLmNuWzBdLmNuWzBdLmNuWzNdO1xuXG4gICAgICAgIC8vIHNsaWNlKCkucmV2ZXJzZSgpID0+IGl0ZXJhdGUgYmFja3dhcmRzXG4gICAgICAgIHZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBmb3JtLmNuWzBdLmNuLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2ZpZWxkc2V0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnZm9ybS1ncm91cCddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgICA6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgICAgICAgOiBbJ2Zvcm0tY29udHJvbCcsICdmb3JtLWNvbnRyb2wtbGcnXSxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICA6IG1lLmdldElucHV0SWQoaXRlbS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgICAgICA6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGl0ZW0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW9kZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb2RlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpc1NpZ251cCAgID0gdmFsdWUgPT09ICdzaWdudXAnLFxuICAgICAgICAgICAgY29udGVudERpdiA9IG1lLnZkb20uY25bMF0uY25bMF0uY25bMF07XG5cbiAgICAgICAgLy8gdmRvbSBidWxrIHVwZGF0ZVxuICAgICAgICBjb250ZW50RGl2LmNuWzBdLmh0bWwgPSBpc1NpZ251cCA/ICdTaWduIHVwJyA6ICdTaWduIGluJztcblxuICAgICAgICBjb250ZW50RGl2LmNuWzFdLmNuWzBdLmhyZWYgPSBpc1NpZ251cCA/ICcjL2xvZ2luJyA6ICcjL3JlZ2lzdGVyJztcbiAgICAgICAgY29udGVudERpdi5jblsxXS5jblswXS5odG1sID0gaXNTaWdudXAgPyAnSGF2ZSBhbiBhY2NvdW50PycgOiAnTmVlZCBhbiBhY2NvdW50Pyc7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSB1c2VybmFtZSBmaWVsZHNldCBpZiBuZWVkZWRcbiAgICAgICAgY29udGVudERpdi5jblszXS5jblswXS5jblswXS5yZW1vdmVEb20gPSAhaXNTaWdudXA7XG5cbiAgICAgICAgLy8gc3VibWl0IGJ1dHRvbiB0ZXh0XG4gICAgICAgIGNvbnRlbnREaXYuY25bM10uY25bMF0uY25bM10uaHRtbCA9IGlzU2lnbnVwID8gJ1NpZ24gdXAnIDogJ1NpZ24gaW4nO1xuXG4gICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4YW1wbGUgZm9yIGR5bmFtaWNhbGx5IGZpbmRpbmcgdmRvbSBlbGVtZW50c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBnZXRFcnJvck1lc3NhZ2VzTGlzdCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHtjbHM6ICdlcnJvci1tZXNzYWdlcyd9KTtcbiAgICAgICAgcmV0dXJuIGVsPy52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5wdXRFbCBpZCB1c2luZyB0aGUgdmlldyBpZCBhcyBhIHByZWZpeFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldElucHV0SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbktleURvd25FbnRlcigpIHtcbiAgICAgICAgdGhpcy5vblN1Ym1pdEJ1dHRvbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN1Ym1pdEJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbWUuZ2V0Q29udHJvbGxlcigpLFxuICAgICAgICAgICAgaXNTaWdudXAgICA9IG1lLm1vZGUgPT09ICdzaWdudXAnLFxuICAgICAgICAgICAgaWRzICAgICAgICA9IFttZS5nZXRJbnB1dElkKCdlbWFpbCcpLCBtZS5nZXRJbnB1dElkKCdwYXNzd29yZCcpXSxcbiAgICAgICAgICAgIHVzZXJEYXRhO1xuXG4gICAgICAgIGlmIChpc1NpZ251cCkge1xuICAgICAgICAgICAgaWRzLnB1c2gobWUuZ2V0SW5wdXRJZCgndXNlcm5hbWUnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWFkIHRoZSBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWRcbiAgICAgICAgLy8gd2UgY291bGQgcmVnaXN0ZXIgYW4gb25pbnB1dCBldmVudCB0byB0aGlzIHZpZXcgYXMgd2VsbCBhbmQgc3RvcmUgdGhlIGNoYW5nZXNcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgaWQgICAgICAgIDogaWRzLFxuICAgICAgICAgICAgYXR0cmlidXRlczogJ3ZhbHVlJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdXNlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbCAgIDogZGF0YVswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGRhdGFbMV0udmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaXNTaWdudXApIHtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YS51c2VyLnVzZXJuYW1lID0gZGF0YVsyXS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udHJvbGxlci5zYXZlVXNlcih7XG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgICAgICAgICAgICAgIHNsdWc6IGlzU2lnbnVwID8gJycgOiAnL2xvZ2luJ1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBkYXRhLmpzb24uZXJyb3JzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICBtZS5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5sb2dpbihkYXRhLmpzb24udXNlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU2lnblVwQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_user_SignUpComponent_mjs"],{

/***/ "./apps/realworld/view/user/SignUpComponent.mjs":
/*!******************************************************!*\
  !*** ./apps/realworld/view/user/SignUpComponent.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class RealWorld.view.user.SignUpComponent
 * @extends Neo.component.Base
 */
class SignUpComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.view.user.SignUpComponent'
         * @protected
         */
        className: 'RealWorld.view.user.SignUpComponent',
        /**
         * @member {String[]} cls=['auth-page']
         */
        cls: ['auth-page'],
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
                fn      : me.onSubmitButtonClick,
                delegate: '.btn-primary',
                scope   : me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     * Triggered after the errors config got changed
     * @param {Object[]} value
     * @param {Object[]} oldValue
     * @protected
     */
    afterSetErrors(value, oldValue) {
        let me   = this,
            list = me.getErrorMessagesList(),
            vdom = me.vdom;

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
     * Triggered after the fieldsets config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetFieldsets(value, oldValue) {
        let me   = this,
            vdom = me.vdom,
            form = vdom.cn[0].cn[0].cn[0].cn[3];

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

        me.vdom = vdom;
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
            vdom       = me.vdom,
            contentDiv = vdom.cn[0].cn[0].cn[0];

        // vdom bulk update
        contentDiv.cn[0].html = isSignup ? 'Sign up' : 'Sign in';

        contentDiv.cn[1].cn[0].href = isSignup ? '#/login' : '#/register';
        contentDiv.cn[1].cn[0].html = isSignup ? 'Have an account?' : 'Need an account?';

        // remove the username fieldset if needed
        contentDiv.cn[3].cn[0].cn[0].removeDom = !isSignup;

        // submit button text
        contentDiv.cn[3].cn[0].cn[3].html = isSignup ? 'Sign up' : 'Sign in';

        me.vdom = vdom;
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X3VzZXJfU2lnblVwQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDTDs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0ZBQVM7QUFDdkMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0EsYUFBYSx5REFBeUQ7QUFDdEUsYUFBYSx5REFBeUQ7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIseUJBQXlCLG1DQUFtQztBQUM1RCx5QkFBeUIsMENBQTBDLFNBQVMsRUFBRTtBQUM5RSx5QkFBeUIsbUNBQW1DO0FBQzVELHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCLDZGQUFzQixhQUFhLHNCQUFzQjtBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvdXNlci9TaWduVXBDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcudXNlci5TaWduVXBDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBTaWduVXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy51c2VyLlNpZ25VcENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcudXNlci5TaWduVXBDb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2F1dGgtcGFnZSddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnYXV0aC1wYWdlJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZXJyb3JzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3JzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gZmllbGRzZXRzX1xuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzZXRzXzogW1xuICAgICAgICAgICAge25hbWU6ICd1c2VybmFtZScsIHBsYWNlaG9sZGVyOiAnWW91ciBOYW1lJywgdHlwZTogJ3RleHQnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW1haWwnLCAgICBwbGFjZWhvbGRlcjogJ0VtYWlsJywgICAgIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ3Bhc3N3b3JkJywgcGxhY2Vob2xkZXI6ICdQYXNzd29yZCcsICB0eXBlOiAncGFzc3dvcmQnfVxuICAgICAgICBdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAnRW50ZXInOiAnb25LZXlEb3duRW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG1vZGVfPSdzaWdudXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVfOiAnc2lnbnVwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnY29udGFpbmVyJywgJ3BhZ2UnXSwgY246IFtcbiAgICAgICAgICAgICAgICB7Y2xzOiBbJ3JvdyddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ2NvbC1tZC02JywgJ29mZnNldC1tZC0zJywgJ2NvbC14cy0xMiddLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2gxJywgY2xzOiBbJ3RleHQteHMtY2VudGVyJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3AnLCBjbHM6IFsndGV4dC14cy1jZW50ZXInXSwgY24gOiBbe3RhZzogJ2EnfV19LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ3VsJywgY2xzOiBbJ2Vycm9yLW1lc3NhZ2VzJ119LFxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZzogJ2Zvcm0nLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdmaWVsZHNldCcsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdidXR0b24nLCBjbHM6IFsnYnRuJywgJ2J0bi1sZycsICdidG4tcHJpbWFyeScsICdwdWxsLXhzLXJpZ2h0J10sIHR5cGU6ICdidXR0b24nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgIGZuICAgICAgOiBtZS5vblN1Ym1pdEJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAnLmJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZXJyb3JzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRFcnJvcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGxpc3QgPSBtZS5nZXRFcnJvck1lc3NhZ2VzTGlzdCgpLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgbGlzdC5jbiA9IFtdO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlIHx8IHt9KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGxpc3QuY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGFnIDogJ2xpJyxcbiAgICAgICAgICAgICAgICBodG1sOiBrZXkgKyAnICcgKyB2YWx1ZS5qb2luKCcgYW5kICcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmaWVsZHNldHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmllbGRzZXRzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgIGZvcm0gPSB2ZG9tLmNuWzBdLmNuWzBdLmNuWzBdLmNuWzNdO1xuXG4gICAgICAgIC8vIHNsaWNlKCkucmV2ZXJzZSgpID0+IGl0ZXJhdGUgYmFja3dhcmRzXG4gICAgICAgIHZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBmb3JtLmNuWzBdLmNuLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgIHRhZzogJ2ZpZWxkc2V0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnZm9ybS1ncm91cCddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgICA6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgICAgICAgOiBbJ2Zvcm0tY29udHJvbCcsICdmb3JtLWNvbnRyb2wtbGcnXSxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICA6IG1lLmdldElucHV0SWQoaXRlbS5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSAgICAgICA6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGl0ZW0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW9kZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb2RlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpc1NpZ251cCAgID0gdmFsdWUgPT09ICdzaWdudXAnLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjb250ZW50RGl2ID0gdmRvbS5jblswXS5jblswXS5jblswXTtcblxuICAgICAgICAvLyB2ZG9tIGJ1bGsgdXBkYXRlXG4gICAgICAgIGNvbnRlbnREaXYuY25bMF0uaHRtbCA9IGlzU2lnbnVwID8gJ1NpZ24gdXAnIDogJ1NpZ24gaW4nO1xuXG4gICAgICAgIGNvbnRlbnREaXYuY25bMV0uY25bMF0uaHJlZiA9IGlzU2lnbnVwID8gJyMvbG9naW4nIDogJyMvcmVnaXN0ZXInO1xuICAgICAgICBjb250ZW50RGl2LmNuWzFdLmNuWzBdLmh0bWwgPSBpc1NpZ251cCA/ICdIYXZlIGFuIGFjY291bnQ/JyA6ICdOZWVkIGFuIGFjY291bnQ/JztcblxuICAgICAgICAvLyByZW1vdmUgdGhlIHVzZXJuYW1lIGZpZWxkc2V0IGlmIG5lZWRlZFxuICAgICAgICBjb250ZW50RGl2LmNuWzNdLmNuWzBdLmNuWzBdLnJlbW92ZURvbSA9ICFpc1NpZ251cDtcblxuICAgICAgICAvLyBzdWJtaXQgYnV0dG9uIHRleHRcbiAgICAgICAgY29udGVudERpdi5jblszXS5jblswXS5jblszXS5odG1sID0gaXNTaWdudXAgPyAnU2lnbiB1cCcgOiAnU2lnbiBpbic7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhhbXBsZSBmb3IgZHluYW1pY2FsbHkgZmluZGluZyB2ZG9tIGVsZW1lbnRzXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGdldEVycm9yTWVzc2FnZXNMaXN0KCkge1xuICAgICAgICBsZXQgZWwgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKHRoaXMudmRvbSwge2NsczogJ2Vycm9yLW1lc3NhZ2VzJ30pO1xuICAgICAgICByZXR1cm4gZWw/LnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnB1dEVsIGlkIHVzaW5nIHRoZSB2aWV3IGlkIGFzIGEgcHJlZml4XG4gICAgICogQHJldHVybnMge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0SW5wdXRJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKCkge1xuICAgICAgICB0aGlzLm9uU3VibWl0QnV0dG9uQ2xpY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3VibWl0QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBtZS5nZXRDb250cm9sbGVyKCksXG4gICAgICAgICAgICBpc1NpZ251cCAgID0gbWUubW9kZSA9PT0gJ3NpZ251cCcsXG4gICAgICAgICAgICBpZHMgICAgICAgID0gW21lLmdldElucHV0SWQoJ2VtYWlsJyksIG1lLmdldElucHV0SWQoJ3Bhc3N3b3JkJyldLFxuICAgICAgICAgICAgdXNlckRhdGE7XG5cbiAgICAgICAgaWYgKGlzU2lnbnVwKSB7XG4gICAgICAgICAgICBpZHMucHVzaChtZS5nZXRJbnB1dElkKCd1c2VybmFtZScpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlYWQgdGhlIGlucHV0IHZhbHVlcyBmcm9tIHRoZSBtYWluIHRocmVhZFxuICAgICAgICAvLyB3ZSBjb3VsZCByZWdpc3RlciBhbiBvbmlucHV0IGV2ZW50IHRvIHRoaXMgdmlldyBhcyB3ZWxsIGFuZCBzdG9yZSB0aGUgY2hhbmdlc1xuICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZ2V0QXR0cmlidXRlcyh7XG4gICAgICAgICAgICBpZCAgICAgICAgOiBpZHMsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiAndmFsdWUnXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICB1c2VyRGF0YSA9IHtcbiAgICAgICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsICAgOiBkYXRhWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZGF0YVsxXS52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpc1NpZ251cCkge1xuICAgICAgICAgICAgICAgIHVzZXJEYXRhLnVzZXIudXNlcm5hbWUgPSBkYXRhWzJdLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250cm9sbGVyLnNhdmVVc2VyKHtcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXG4gICAgICAgICAgICAgICAgc2x1ZzogaXNTaWdudXAgPyAnJyA6ICcvbG9naW4nXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IGRhdGEuanNvbi5lcnJvcnM7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmxvZ2luKGRhdGEuanNvbi51c2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTaWduVXBDb21wb25lbnQpO1xuXG5leHBvcnQge1NpZ25VcENvbXBvbmVudCBhcyBkZWZhdWx0fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
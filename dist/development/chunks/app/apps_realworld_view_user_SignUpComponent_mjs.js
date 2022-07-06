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
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X3VzZXJfU2lnblVwQ29tcG9uZW50X21qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Y7QUFDTDs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0ZBQVM7QUFDdkMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0EsYUFBYSx5REFBeUQ7QUFDdEUsYUFBYSx5REFBeUQ7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIseUJBQXlCLG1DQUFtQztBQUM1RCx5QkFBeUIsMENBQTBDLFNBQVMsRUFBRTtBQUM5RSx5QkFBeUIsbUNBQW1DO0FBQzVELHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0IsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsVUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBLGlCQUFpQiw2RkFBc0IsYUFBYSxzQkFBc0I7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC92aWV3L3VzZXIvU2lnblVwQ29tcG9uZW50Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LnVzZXIuU2lnblVwQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgU2lnblVwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nUmVhbFdvcmxkLnZpZXcudXNlci5TaWduVXBDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LnVzZXIuU2lnblVwQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WydhdXRoLXBhZ2UnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2F1dGgtcGFnZSddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGVycm9yc189W11cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGZpZWxkc2V0c19cbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkc2V0c186IFtcbiAgICAgICAgICAgIHtuYW1lOiAndXNlcm5hbWUnLCBwbGFjZWhvbGRlcjogJ1lvdXIgTmFtZScsIHR5cGU6ICd0ZXh0J30sXG4gICAgICAgICAgICB7bmFtZTogJ2VtYWlsJywgICAgcGxhY2Vob2xkZXI6ICdFbWFpbCcsICAgICB0eXBlOiAndGV4dCd9LFxuICAgICAgICAgICAge25hbWU6ICdwYXNzd29yZCcsIHBsYWNlaG9sZGVyOiAnUGFzc3dvcmQnLCAgdHlwZTogJ3Bhc3N3b3JkJ31cbiAgICAgICAgXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge1xuICAgICAgICAgICAgJ0VudGVyJzogJ29uS2V5RG93bkVudGVyJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtb2RlXz0nc2lnbnVwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtb2RlXzogJ3NpZ251cCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2NvbnRhaW5lcicsICdwYWdlJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge2NsczogWydyb3cnXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAge2NsczogWydjb2wtbWQtNicsICdvZmZzZXQtbWQtMycsICdjb2wteHMtMTInXSwgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdoMScsIGNsczogWyd0ZXh0LXhzLWNlbnRlciddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgY2xzOiBbJ3RleHQteHMtY2VudGVyJ10sIGNuIDogW3t0YWc6ICdhJ31dfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICd1bCcsIGNsczogWydlcnJvci1tZXNzYWdlcyddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc6ICdmb3JtJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnZmllbGRzZXQnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFnOiAnYnV0dG9uJywgY2xzOiBbJ2J0bicsICdidG4tbGcnLCAnYnRuLXByaW1hcnknLCAncHVsbC14cy1yaWdodCddLCB0eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChjb25maWcpIHtcbiAgICAgICAgc3VwZXIuY29uc3RydWN0KGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgICAgIDogbWUub25TdWJtaXRCdXR0b25DbGljayxcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZTogJy5idG4tcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgc2NvcGUgICA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGVycm9ycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RXJyb3JzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBsaXN0ID0gbWUuZ2V0RXJyb3JNZXNzYWdlc0xpc3QoKSxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGxpc3QuY24gPSBbXTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSB8fCB7fSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBsaXN0LmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhZyA6ICdsaScsXG4gICAgICAgICAgICAgICAgaHRtbDoga2V5ICsgJyAnICsgdmFsdWUuam9pbignIGFuZCAnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmllbGRzZXRzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZpZWxkc2V0cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb20sXG4gICAgICAgICAgICBmb3JtID0gdmRvbS5jblswXS5jblswXS5jblswXS5jblszXTtcblxuICAgICAgICAvLyBzbGljZSgpLnJldmVyc2UoKSA9PiBpdGVyYXRlIGJhY2t3YXJkc1xuICAgICAgICB2YWx1ZS5zbGljZSgpLnJldmVyc2UoKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZm9ybS5jblswXS5jbi51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICB0YWc6ICdmaWVsZHNldCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ2Zvcm0tZ3JvdXAnXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgIDogWydmb3JtLWNvbnRyb2wnLCAnZm9ybS1jb250cm9sLWxnJ10sXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgOiBtZS5nZXRJbnB1dElkKGl0ZW0ubmFtZSksXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgICAgICAgOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpdGVtLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgICAgICB0eXBlICAgICAgIDogaXRlbS50eXBlXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vZGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW9kZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXNTaWdudXAgICA9IHZhbHVlID09PSAnc2lnbnVwJyxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY29udGVudERpdiA9IHZkb20uY25bMF0uY25bMF0uY25bMF07XG5cbiAgICAgICAgLy8gdmRvbSBidWxrIHVwZGF0ZVxuICAgICAgICBjb250ZW50RGl2LmNuWzBdLmh0bWwgPSBpc1NpZ251cCA/ICdTaWduIHVwJyA6ICdTaWduIGluJztcblxuICAgICAgICBjb250ZW50RGl2LmNuWzFdLmNuWzBdLmhyZWYgPSBpc1NpZ251cCA/ICcjL2xvZ2luJyA6ICcjL3JlZ2lzdGVyJztcbiAgICAgICAgY29udGVudERpdi5jblsxXS5jblswXS5odG1sID0gaXNTaWdudXAgPyAnSGF2ZSBhbiBhY2NvdW50PycgOiAnTmVlZCBhbiBhY2NvdW50Pyc7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSB1c2VybmFtZSBmaWVsZHNldCBpZiBuZWVkZWRcbiAgICAgICAgY29udGVudERpdi5jblszXS5jblswXS5jblswXS5yZW1vdmVEb20gPSAhaXNTaWdudXA7XG5cbiAgICAgICAgLy8gc3VibWl0IGJ1dHRvbiB0ZXh0XG4gICAgICAgIGNvbnRlbnREaXYuY25bM10uY25bMF0uY25bM10uaHRtbCA9IGlzU2lnbnVwID8gJ1NpZ24gdXAnIDogJ1NpZ24gaW4nO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4YW1wbGUgZm9yIGR5bmFtaWNhbGx5IGZpbmRpbmcgdmRvbSBlbGVtZW50c1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBnZXRFcnJvck1lc3NhZ2VzTGlzdCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHtjbHM6ICdlcnJvci1tZXNzYWdlcyd9KTtcbiAgICAgICAgcmV0dXJuIGVsPy52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5wdXRFbCBpZCB1c2luZyB0aGUgdmlldyBpZCBhcyBhIHByZWZpeFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldElucHV0SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbktleURvd25FbnRlcigpIHtcbiAgICAgICAgdGhpcy5vblN1Ym1pdEJ1dHRvbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN1Ym1pdEJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250cm9sbGVyID0gbWUuZ2V0Q29udHJvbGxlcigpLFxuICAgICAgICAgICAgaXNTaWdudXAgICA9IG1lLm1vZGUgPT09ICdzaWdudXAnLFxuICAgICAgICAgICAgaWRzICAgICAgICA9IFttZS5nZXRJbnB1dElkKCdlbWFpbCcpLCBtZS5nZXRJbnB1dElkKCdwYXNzd29yZCcpXSxcbiAgICAgICAgICAgIHVzZXJEYXRhO1xuXG4gICAgICAgIGlmIChpc1NpZ251cCkge1xuICAgICAgICAgICAgaWRzLnB1c2gobWUuZ2V0SW5wdXRJZCgndXNlcm5hbWUnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWFkIHRoZSBpbnB1dCB2YWx1ZXMgZnJvbSB0aGUgbWFpbiB0aHJlYWRcbiAgICAgICAgLy8gd2UgY291bGQgcmVnaXN0ZXIgYW4gb25pbnB1dCBldmVudCB0byB0aGlzIHZpZXcgYXMgd2VsbCBhbmQgc3RvcmUgdGhlIGNoYW5nZXNcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEF0dHJpYnV0ZXMoe1xuICAgICAgICAgICAgaWQgICAgICAgIDogaWRzLFxuICAgICAgICAgICAgYXR0cmlidXRlczogJ3ZhbHVlJ1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdXNlckRhdGEgPSB7XG4gICAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgICAgICBlbWFpbCAgIDogZGF0YVswXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGRhdGFbMV0udmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaXNTaWdudXApIHtcbiAgICAgICAgICAgICAgICB1c2VyRGF0YS51c2VyLnVzZXJuYW1lID0gZGF0YVsyXS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udHJvbGxlci5zYXZlVXNlcih7XG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICAgICAgICAgICAgICAgIHNsdWc6IGlzU2lnbnVwID8gJycgOiAnL2xvZ2luJ1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBkYXRhLmpzb24uZXJyb3JzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICBtZS5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5sb2dpbihkYXRhLmpzb24udXNlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU2lnblVwQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
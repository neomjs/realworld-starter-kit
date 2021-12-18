"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_article_CommentComponent_mjs"],{

/***/ "./apps/realworld/view/article/CommentComponent.mjs":
/*!**********************************************************!*\
  !*** ./apps/realworld/view/article/CommentComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommentComponent)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class RealWorld.view.article.CommentComponent
 * @extends Neo.component.Base
 */
class CommentComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld.view.article.CommentComponent'
         * @protected
         */
        className: 'RealWorld.view.article.CommentComponent',
        /**
         * @member {Object|null} author_=null
         */
        author_: null,
        /**
         * @member {String|null} body_=null
         */
        body_: null,
        /**
         * @member {String[]} cls=['card']
         */
        cls: ['card'],
        /**
         * @member {Number|null} commentId=null
         */
        commentId: null,
        /**
         * @member {String|null} createdAt_=null
         */
        createdAt_: null,
        /**
         * Not in use
         * @member {String|null} updatedAt=null
         */
        updatedAt: null,
        /**
         * @member {Object} _vdom
         */
        _vdom:
        {cn: [
            {cls: ['card-block'], cn: [
                {tag: 'p', cls: ['card-text']}
            ]},
            {cls: ['card-footer'], cn: [
                {tag: 'a', cls : ['comment-author'], href: '', cn: [
                    {tag: 'img', cls: ['comment-author-img']}
                ]},
                {vtype: 'text', html: '&nbsp;'},
                {tag: 'a', cls: ['comment-author'], href: ''},
                {tag: 'span', cls : ['date-posted']},
                {tag: 'span', cls : ['mod-options'], flag: 'mod-options', cn: [
                    //{tag: 'i', cls: ['ion-edit']}, // not implemented in other apps => not sure what should happen
                    {tag: 'i', cls: ['ion-trash-a']}
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

        domListeners.push(
            {click: {fn: me.onDeleteButtonClick, delegate: '.ion-trash-a', scope: me}}
            /*{click: {fn: me.onEditButtonClick,   delegate: '.ion-edit',    scope: me}*/
        );

        me.domListeners = domListeners;

        me.getController().on({
            afterSetCurrentUser: me.onCurrentUserChange,
            scope              : me
        });
    }

    /**
     * Triggered after the author config got changed
     * @param {Object|null} value
     * @param {Object|null} oldValue
     * @protected
     */
    afterSetAuthor(value, oldValue) {
        if (value) {
            let me   = this,
                vdom = me.vdom;

            vdom.cn[1].cn[0].cn[0].src = value.image;
            vdom.cn[1].cn[2].html      = value.username;

            me.vdom = vdom;

            me.onCurrentUserChange();
        }
    }

    /**
     * Triggered after the body config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetBody(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            vdom.cn[0].cn[0].html = value;
            this.vdom = vdom;
        }
    }

    /**
     * Triggered after the createdAt config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetCreatedAt(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            vdom.cn[1].cn[3].html = new Intl.DateTimeFormat('en-US', {
                day  : 'numeric',
                month: 'long',
                year : 'numeric'
            }).format(new Date(value));

            this.vdom = vdom;
        }
    }

    /**
     *
     */
    onCurrentUserChange() {
        let me          = this,
            currentUser = me.getController().currentUser,
            vdom        = me.vdom;

        if (currentUser) {
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(vdom, 'mod-options').removeDom = me.author.username !== currentUser.username;

            me.vdom = vdom;
        }
    }

    /**
     * @param {Object} data
     */
    onDeleteButtonClick(data) {
        this.getController().deleteComment(this.commentId);
    }

    /**
     * Not supported yet
     * @param {Object} data
     */
    onEditButtonClick(data) {
        console.log('onEditButtonClick');
    }
}

Neo.applyClassConfig(CommentComponent);




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ29tbWVudENvbXBvbmVudF9tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ0w7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9GQUFTO0FBQ3hDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUI7QUFDakIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixpQkFBaUIsNEJBQTRCLEVBQUU7QUFDL0MsaUJBQWlCLDRDQUE0QztBQUM3RCxpQkFBaUIsbUNBQW1DO0FBQ3BELGlCQUFpQjtBQUNqQix1QkFBdUIsNEJBQTRCO0FBQ25ELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLFFBQVEsZ0VBQWdFO0FBQ3ZGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHlGQUFrQjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZW8ubWpzLXJlYWx3b3JsZC1leGFtcGxlLWFwcC8uL2FwcHMvcmVhbHdvcmxkL3ZpZXcvYXJ0aWNsZS9Db21tZW50Q29tcG9uZW50Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFJlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tbWVudENvbXBvbmVudFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIENvbW1lbnRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdSZWFsV29ybGQudmlldy5hcnRpY2xlLkNvbW1lbnRDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tbWVudENvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gYXV0aG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhdXRob3JfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGJvZHlfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGJvZHlfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ2NhcmQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ2NhcmQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBjb21tZW50SWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tbWVudElkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGNyZWF0ZWRBdF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlZEF0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vdCBpbiB1c2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVwZGF0ZWRBdD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVkQXQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbTpcbiAgICAgICAge2NuOiBbXG4gICAgICAgICAgICB7Y2xzOiBbJ2NhcmQtYmxvY2snXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAncCcsIGNsczogWydjYXJkLXRleHQnXX1cbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAge2NsczogWydjYXJkLWZvb3RlciddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzIDogWydjb21tZW50LWF1dGhvciddLCBocmVmOiAnJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2ltZycsIGNsczogWydjb21tZW50LWF1dGhvci1pbWcnXX1cbiAgICAgICAgICAgICAgICBdfSxcbiAgICAgICAgICAgICAgICB7dnR5cGU6ICd0ZXh0JywgaHRtbDogJyZuYnNwOyd9LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdhJywgY2xzOiBbJ2NvbW1lbnQtYXV0aG9yJ10sIGhyZWY6ICcnfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNscyA6IFsnZGF0ZS1wb3N0ZWQnXX0sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHMgOiBbJ21vZC1vcHRpb25zJ10sIGZsYWc6ICdtb2Qtb3B0aW9ucycsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIC8ve3RhZzogJ2knLCBjbHM6IFsnaW9uLWVkaXQnXX0sIC8vIG5vdCBpbXBsZW1lbnRlZCBpbiBvdGhlciBhcHBzID0+IG5vdCBzdXJlIHdoYXQgc2hvdWxkIGhhcHBlblxuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaScsIGNsczogWydpb24tdHJhc2gtYSddfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICBdfVxuICAgICAgICBdfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaChcbiAgICAgICAgICAgIHtjbGljazoge2ZuOiBtZS5vbkRlbGV0ZUJ1dHRvbkNsaWNrLCBkZWxlZ2F0ZTogJy5pb24tdHJhc2gtYScsIHNjb3BlOiBtZX19XG4gICAgICAgICAgICAvKntjbGljazoge2ZuOiBtZS5vbkVkaXRCdXR0b25DbGljaywgICBkZWxlZ2F0ZTogJy5pb24tZWRpdCcsICAgIHNjb3BlOiBtZX0qL1xuICAgICAgICApO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcblxuICAgICAgICBtZS5nZXRDb250cm9sbGVyKCkub24oe1xuICAgICAgICAgICAgYWZ0ZXJTZXRDdXJyZW50VXNlcjogbWUub25DdXJyZW50VXNlckNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYXV0aG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBdXRob3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuWzBdLmNuWzBdLnNyYyA9IHZhbHVlLmltYWdlO1xuICAgICAgICAgICAgdmRvbS5jblsxXS5jblsyXS5odG1sICAgICAgPSB2YWx1ZS51c2VybmFtZTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgIG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYm9keSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Qm9keSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblswXS5jblswXS5odG1sID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjcmVhdGVkQXQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENyZWF0ZWRBdCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS5jblszXS5odG1sID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICAgICAgICAgIGRheSAgOiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgICAgICAgICAgICB5ZWFyIDogJ251bWVyaWMnXG4gICAgICAgICAgICB9KS5mb3JtYXQobmV3IERhdGUodmFsdWUpKTtcblxuICAgICAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25DdXJyZW50VXNlckNoYW5nZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGN1cnJlbnRVc2VyID0gbWUuZ2V0Q29udHJvbGxlcigpLmN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgVkRvbVV0aWwuZ2V0QnlGbGFnKHZkb20sICdtb2Qtb3B0aW9ucycpLnJlbW92ZURvbSA9IG1lLmF1dGhvci51c2VybmFtZSAhPT0gY3VycmVudFVzZXIudXNlcm5hbWU7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRlbGV0ZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRDb250cm9sbGVyKCkuZGVsZXRlQ29tbWVudCh0aGlzLmNvbW1lbnRJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90IHN1cHBvcnRlZCB5ZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRWRpdEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uRWRpdEJ1dHRvbkNsaWNrJyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21tZW50Q29tcG9uZW50KTtcblxuZXhwb3J0IHtDb21tZW50Q29tcG9uZW50IGFzIGRlZmF1bHR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
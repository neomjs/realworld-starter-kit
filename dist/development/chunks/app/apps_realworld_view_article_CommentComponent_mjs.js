"use strict";
(self["webpackChunkneo_mjs_realworld_example_app"] = self["webpackChunkneo_mjs_realworld_example_app"] || []).push([["apps_realworld_view_article_CommentComponent_mjs"],{

/***/ "./apps/realworld/view/article/CommentComponent.mjs":
/*!**********************************************************!*\
  !*** ./apps/realworld/view/article/CommentComponent.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/neo.mjs/src/util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class RealWorld.view.article.CommentComponent
 * @extends Neo.component.Base
 */
class CommentComponent extends _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static config = {
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
         * @member {String[]} baseCls=['card']
         */
        baseCls: ['card'],
        /**
         * @member {String|null} body_=null
         */
        body_: null,
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
    }

    /**
     * @param {Object} config
     */
    construct(config) {
        super.construct(config);

        let me = this;

        me.addDomListeners([
            {click: {fn: me.onDeleteButtonClick, delegate: '.ion-trash-a', scope: me}}
            /*{click: {fn: me.onEditButtonClick,   delegate: '.ion-edit',    scope: me}*/
        ]);

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
            let me = this;

            me.vdom.cn[1].cn[0].cn[0].src = value.image;
            me.vdom.cn[1].cn[2].html      = value.username;

            me.update();
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
            this.vdom.cn[0].cn[0].html = value;
            this.update();
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
            this.vdom.cn[1].cn[3].html = new Intl.DateTimeFormat('en-US', {
                day  : 'numeric',
                month: 'long',
                year : 'numeric'
            }).format(new Date(value));

            this.update();
        }
    }

    /**
     *
     */
    onCurrentUserChange() {
        let me          = this,
            currentUser = me.getController().currentUser;

        if (currentUser) {
            _node_modules_neo_mjs_src_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getByFlag(me.vdom, 'mod-options').removeDom = me.author.username !== currentUser.username;
            me.update();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ29tbWVudENvbXBvbmVudF9tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ0w7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9GQUFTO0FBQ3hDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsaUJBQWlCLDRCQUE0QixFQUFFO0FBQy9DLGlCQUFpQiw0Q0FBNEM7QUFDN0QsaUJBQWlCLG1DQUFtQztBQUNwRCxpQkFBaUI7QUFDakIsdUJBQXVCLDRCQUE0QjtBQUNuRCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWUsUUFBUSxnRUFBZ0U7QUFDdkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHlGQUFrQjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvLm1qcy1yZWFsd29ybGQtZXhhbXBsZS1hcHAvLi9hcHBzL3JlYWx3b3JsZC92aWV3L2FydGljbGUvQ29tbWVudENvbXBvbmVudC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBSZWFsV29ybGQudmlldy5hcnRpY2xlLkNvbW1lbnRDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBDb21tZW50Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgY29uZmlnID0ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tbWVudENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21tZW50Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBhdXRob3JfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGF1dGhvcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYmFzZUNscz1bJ2NhcmQnXVxuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogWydjYXJkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYm9keV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYm9keV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gY29tbWVudElkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbW1lbnRJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjcmVhdGVkQXRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZWRBdF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOb3QgaW4gdXNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1cGRhdGVkQXQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXBkYXRlZEF0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206XG4gICAgICAgIHtjbjogW1xuICAgICAgICAgICAge2NsczogWydjYXJkLWJsb2NrJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ3AnLCBjbHM6IFsnY2FyZC10ZXh0J119XG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIHtjbHM6IFsnY2FyZC1mb290ZXInXSwgY246IFtcbiAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNscyA6IFsnY29tbWVudC1hdXRob3InXSwgaHJlZjogJycsIGNuOiBbXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpbWcnLCBjbHM6IFsnY29tbWVudC1hdXRob3ItaW1nJ119XG4gICAgICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICAgICAge3Z0eXBlOiAndGV4dCcsIGh0bWw6ICcmbmJzcDsnfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnYScsIGNsczogWydjb21tZW50LWF1dGhvciddLCBocmVmOiAnJ30sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHMgOiBbJ2RhdGUtcG9zdGVkJ119LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzIDogWydtb2Qtb3B0aW9ucyddLCBmbGFnOiAnbW9kLW9wdGlvbnMnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICAvL3t0YWc6ICdpJywgY2xzOiBbJ2lvbi1lZGl0J119LCAvLyBub3QgaW1wbGVtZW50ZWQgaW4gb3RoZXIgYXBwcyA9PiBub3Qgc3VyZSB3aGF0IHNob3VsZCBoYXBwZW5cbiAgICAgICAgICAgICAgICAgICAge3RhZzogJ2knLCBjbHM6IFsnaW9uLXRyYXNoLWEnXX1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgXX1cbiAgICAgICAgXX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0KGNvbmZpZykge1xuICAgICAgICBzdXBlci5jb25zdHJ1Y3QoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFkZERvbUxpc3RlbmVycyhbXG4gICAgICAgICAgICB7Y2xpY2s6IHtmbjogbWUub25EZWxldGVCdXR0b25DbGljaywgZGVsZWdhdGU6ICcuaW9uLXRyYXNoLWEnLCBzY29wZTogbWV9fVxuICAgICAgICAgICAgLyp7Y2xpY2s6IHtmbjogbWUub25FZGl0QnV0dG9uQ2xpY2ssICAgZGVsZWdhdGU6ICcuaW9uLWVkaXQnLCAgICBzY29wZTogbWV9Ki9cbiAgICAgICAgXSk7XG5cbiAgICAgICAgbWUuZ2V0Q29udHJvbGxlcigpLm9uKHtcbiAgICAgICAgICAgIGFmdGVyU2V0Q3VycmVudFVzZXI6IG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGF1dGhvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QXV0aG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIG1lLnZkb20uY25bMV0uY25bMF0uY25bMF0uc3JjID0gdmFsdWUuaW1hZ2U7XG4gICAgICAgICAgICBtZS52ZG9tLmNuWzFdLmNuWzJdLmh0bWwgICAgICA9IHZhbHVlLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICBtZS51cGRhdGUoKTtcbiAgICAgICAgICAgIG1lLm9uQ3VycmVudFVzZXJDaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYm9keSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Qm9keSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZkb20uY25bMF0uY25bMF0uaHRtbCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY3JlYXRlZEF0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDcmVhdGVkQXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52ZG9tLmNuWzFdLmNuWzNdLmh0bWwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgZGF5ICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZSh2YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkN1cnJlbnRVc2VyQ2hhbmdlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudFVzZXIgPSBtZS5nZXRDb250cm9sbGVyKCkuY3VycmVudFVzZXI7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcobWUudmRvbSwgJ21vZC1vcHRpb25zJykucmVtb3ZlRG9tID0gbWUuYXV0aG9yLnVzZXJuYW1lICE9PSBjdXJyZW50VXNlci51c2VybmFtZTtcbiAgICAgICAgICAgIG1lLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRlbGV0ZUJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5nZXRDb250cm9sbGVyKCkuZGVsZXRlQ29tbWVudCh0aGlzLmNvbW1lbnRJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTm90IHN1cHBvcnRlZCB5ZXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRWRpdEJ1dHRvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uRWRpdEJ1dHRvbkNsaWNrJyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21tZW50Q29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudENvbXBvbmVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
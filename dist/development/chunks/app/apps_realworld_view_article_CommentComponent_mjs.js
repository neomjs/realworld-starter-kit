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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentComponent);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FwcC9hcHBzX3JlYWx3b3JsZF92aWV3X2FydGljbGVfQ29tbWVudENvbXBvbmVudF9tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ0w7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9GQUFTO0FBQ3hDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsU0FBUztBQUNULGFBQWE7QUFDYixpQkFBaUI7QUFDakIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixpQkFBaUIsNEJBQTRCLEVBQUU7QUFDL0MsaUJBQWlCLDRDQUE0QztBQUM3RCxpQkFBaUIsbUNBQW1DO0FBQ3BELGlCQUFpQjtBQUNqQix1QkFBdUIsNEJBQTRCO0FBQ25ELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLFFBQVEsZ0VBQWdFO0FBQ3ZGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHlGQUFrQjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lby5tanMtcmVhbHdvcmxkLWV4YW1wbGUtYXBwLy4vYXBwcy9yZWFsd29ybGQvdmlldy9hcnRpY2xlL0NvbW1lbnRDb21wb25lbnQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgIGZyb20gJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21tZW50Q29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQ29tbWVudENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J1JlYWxXb3JsZC52aWV3LmFydGljbGUuQ29tbWVudENvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnUmVhbFdvcmxkLnZpZXcuYXJ0aWNsZS5Db21tZW50Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBhdXRob3JfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGF1dGhvcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYm9keV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYm9keV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnY2FyZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnY2FyZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGNvbW1lbnRJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb21tZW50SWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY3JlYXRlZEF0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVkQXRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogTm90IGluIHVzZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdXBkYXRlZEF0PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHVwZGF0ZWRBdDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOlxuICAgICAgICB7Y246IFtcbiAgICAgICAgICAgIHtjbHM6IFsnY2FyZC1ibG9jayddLCBjbjogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdwJywgY2xzOiBbJ2NhcmQtdGV4dCddfVxuICAgICAgICAgICAgXX0sXG4gICAgICAgICAgICB7Y2xzOiBbJ2NhcmQtZm9vdGVyJ10sIGNuOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHMgOiBbJ2NvbW1lbnQtYXV0aG9yJ10sIGhyZWY6ICcnLCBjbjogW1xuICAgICAgICAgICAgICAgICAgICB7dGFnOiAnaW1nJywgY2xzOiBbJ2NvbW1lbnQtYXV0aG9yLWltZyddfVxuICAgICAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgICAgIHt2dHlwZTogJ3RleHQnLCBodG1sOiAnJm5ic3A7J30sXG4gICAgICAgICAgICAgICAge3RhZzogJ2EnLCBjbHM6IFsnY29tbWVudC1hdXRob3InXSwgaHJlZjogJyd9LFxuICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzIDogWydkYXRlLXBvc3RlZCddfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNscyA6IFsnbW9kLW9wdGlvbnMnXSwgZmxhZzogJ21vZC1vcHRpb25zJywgY246IFtcbiAgICAgICAgICAgICAgICAgICAgLy97dGFnOiAnaScsIGNsczogWydpb24tZWRpdCddfSwgLy8gbm90IGltcGxlbWVudGVkIGluIG90aGVyIGFwcHMgPT4gbm90IHN1cmUgd2hhdCBzaG91bGQgaGFwcGVuXG4gICAgICAgICAgICAgICAgICAgIHt0YWc6ICdpJywgY2xzOiBbJ2lvbi10cmFzaC1hJ119XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIF19XG4gICAgICAgIF19XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyLmNvbnN0cnVjdChjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAge2NsaWNrOiB7Zm46IG1lLm9uRGVsZXRlQnV0dG9uQ2xpY2ssIGRlbGVnYXRlOiAnLmlvbi10cmFzaC1hJywgc2NvcGU6IG1lfX1cbiAgICAgICAgICAgIC8qe2NsaWNrOiB7Zm46IG1lLm9uRWRpdEJ1dHRvbkNsaWNrLCAgIGRlbGVnYXRlOiAnLmlvbi1lZGl0JywgICAgc2NvcGU6IG1lfSovXG4gICAgICAgICk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmdldENvbnRyb2xsZXIoKS5vbih7XG4gICAgICAgICAgICBhZnRlclNldEN1cnJlbnRVc2VyOiBtZS5vbkN1cnJlbnRVc2VyQ2hhbmdlLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhdXRob3IgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEF1dGhvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0uY25bMF0uY25bMF0uc3JjID0gdmFsdWUuaW1hZ2U7XG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuWzJdLmh0bWwgICAgICA9IHZhbHVlLnVzZXJuYW1lO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgbWUub25DdXJyZW50VXNlckNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBib2R5IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRCb2R5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzBdLmNuWzBdLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNyZWF0ZWRBdCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q3JlYXRlZEF0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLmNuWzNdLmh0bWwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgZGF5ICA6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgICAgICAgICAgIHllYXIgOiAnbnVtZXJpYydcbiAgICAgICAgICAgIH0pLmZvcm1hdChuZXcgRGF0ZSh2YWx1ZSkpO1xuXG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkN1cnJlbnRVc2VyQ2hhbmdlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudFVzZXIgPSBtZS5nZXRDb250cm9sbGVyKCkuY3VycmVudFVzZXIsXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5nZXRCeUZsYWcodmRvbSwgJ21vZC1vcHRpb25zJykucmVtb3ZlRG9tID0gbWUuYXV0aG9yLnVzZXJuYW1lICE9PSBjdXJyZW50VXNlci51c2VybmFtZTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRGVsZXRlQnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmdldENvbnRyb2xsZXIoKS5kZWxldGVDb21tZW50KHRoaXMuY29tbWVudElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3Qgc3VwcG9ydGVkIHlldFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25FZGl0QnV0dG9uQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25FZGl0QnV0dG9uQ2xpY2snKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbW1lbnRDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
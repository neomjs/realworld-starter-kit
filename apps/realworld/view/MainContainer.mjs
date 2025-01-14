import FooterComponent         from './FooterComponent.mjs';
import HeaderComponent         from './HeaderComponent.mjs';
import MainContainerController from './MainContainerController.mjs';
import Viewport                from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class RealWorld.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static config = {
        /**
         * @member {String} className='RealWorld.view.MainContainer'
         * @protected
         */
        className: 'RealWorld.view.MainContainer',
        /**
         * @member {String[]} baseCls=[]
         */
        baseCls: [],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object} layout={ntype: 'vbox'}
         */
        layout: {ntype: 'base'},

        items: [{
            module   : HeaderComponent,
            reference: 'header'
        }, {
            module: FooterComponent
        }]
    }
}

Neo.applyClassConfig(MainContainer);

export default MainContainer;

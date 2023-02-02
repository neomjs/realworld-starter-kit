import Neo         from '../node_modules/neo.mjs/src/Neo.mjs';
import * as core   from '../node_modules/neo.mjs/src/core/_export.mjs';
import ServiceBase from '../node_modules/neo.mjs/src/worker/ServiceBase.mjs';

/**
 * @class Neo.ServiceWorker
 * @extends Neo.worker.ServiceBase
 * @singleton
 */
class ServiceWorker extends ServiceBase {
    static config = {
        /**
         * @member {String} className='Neo.ServiceWorker'
         * @protected
         */
        className: 'Neo.ServiceWorker',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }

    /**
     * @member {String} workerId='service'
     * @protected
     */
    workerId = 'service'
}

let instance = Neo.applyClassConfig(ServiceWorker);

export default instance;

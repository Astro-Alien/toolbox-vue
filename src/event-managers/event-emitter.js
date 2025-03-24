class EventEmitter {
    #events = {
        "__proto__": () => {return null;}
    };
    constructor() {
        //registers the event-emitter to the global instance
        if (globalThis.eventEmitter == null) {
            globalThis.eventEmitter = this;
        }
    }

    dispose() {
        this.#events = null;
        globalThis.eventEmitter = null;
        delete globalThis.eventEmitter;
    }

    /**
     * @method emit - it is responsible for emitting events across the system
     * @param {*} event 
     * @param {*} args
     */
    async emit(event, ...args) {
        if (this.#events[event] != null) {
            for (const listener of this.#events[event]) {
                await listener(...args);
            }
        }
    }

    /**
     * @method on - it is responsible for listening for event that are emitted
     * @param {*} event 
     * @param {*} listener 
     */
    async on(event, listener) {
        if (this.#events[event] == null) {
            this.#events[event] = [];
        }

        this.#events[event].push(listener);
    }

    /**
     * @method remove - it removes event off the event manager global.
     * @param {*} event 
     * @param {*} listener 
     */
    async remove(event, listener) {
        if (this.#events[event] != null) {
            this.#events[event] = this.#events[event].filter(result => result !== listener);
        }

        if (this.#events[event].length === 0) {
            delete this.#events[event];    
        }
    }
}
new EventEmitter();
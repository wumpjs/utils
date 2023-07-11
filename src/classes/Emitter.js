import EventEmitter from "node:events";

export default class Emitter extends EventEmitter {
  /**
   * @param {boolean} captureRejections 
   * @constructor
   */
  constructor(options = {
    captureRejections: true,
    listenerLimit: EventEmitter.defaultMaxListeners
  }) {
    super({ captureRejections: options.captureRejections });
    if(options.listenerLimit) this.setMaxListeners(options.listenerLimit);
    /**
     * @protected
     */
    this.emittedEvents = [];
  };

  /**
   * @param {string | symbol} eventName 
   * @param {(...args: any[]) => unknown} listener 
   * @returns {boolean}
   */
  hasListener(eventName, listener) {
    if (!eventName) return;
    let check;
    if(listener){
      check = this.listeners(eventName).some((fn) => fn === listener)
    } else {
      check = this.eventNames().some((event) => event === eventName);
    }

    return check;
  };

  /**
   * Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments to each.
   * @param {string | symbol} eventName 
   * @param {any[]} args
   * @returns {boolean}
   */
  emit(eventName, ...args) {
    this.emittedEvents.push({ eventName, args });

    return super.emit(eventName, ...args);
  };

  /**
   * @param {string | symbol} eventName 
   * @returns {boolean}
   */
  emitted(eventName) {
    if (!eventName) return;

    const check = this.emittedEvents.some((event) => event.eventName === eventName);

    return check;
  };
  /**
   * 
   * @param {string | symbol} eventName
   * @param {boolean | undefined} once
   * @param {...Function[]} listeners 
   */
  addListeners(eventName, once, listeners){
    for(const listener of listeners){
        (once ? this.once(eventName, listener) : this.on(eventName, listener));
    }
    return void 0;
  };
};
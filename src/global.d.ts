declare module "@wumpjs/utils"{
    export class Emitter<Events extends EventSignature<Events> = EventMap>{
        constructor(options: {
            captureRejections?: boolean | undefined,
            listenerLimit?: number
        });
        protected emittedEvents: ({
            eventName: keyof Events;
            args: Parameters<keyof Events>[]
        })[]
        /**
         * Adds a Event Listener.
         */
        public addListener<K extends keyof Events>(eventName: K, listener: Events[K]): this;
        /**
         * Adds a few Event Listeners.
         */
        public addListeners<K extends keyof Events>(eventName: K, once: boolean | undefined, ...listeners: Events[K][]): this;
        /**
         * Removes a Event Listener.
         */
        public removeListener<K extends keyof Events>(eventName: K, listener: Events[K]): this;
        /**
         * Removes a few Event Listeners.
         */
        public removeAllListeners<K extends keyof Events>(event: K): this;
        /**
         * Alias of `addListener` Function
         */
        public on<K extends keyof Events>(eventName: K, listener: Events[K]): this;
        /**
         * Removes the event listener in a listen
         */
        public once<K extends keyof Events>(eventName: K, listener: Events[K]): this;
        /**
         * Alias of `removeListener` Function
         */
        public off<K extends keyof Events>(eventName: K, listener: Events[K]): this;
        public prependListener<K extends keyof Events>(eventName: K, listener: Events[K]): this;
        public prependOnceListener<K extends keyof Events>(eventName: K, listener: Events[K]): this;
        /**
         * Returns the listeners of specifined event name.
         */
        public listeners<K extends keyof Events>(eventName: K): Events[K][];
        /**
         * Returns the listener count of specified event name.
         */
        public listenerCount<K extends keyof Events>(eventName: K, listener?: Events[K] | undefined): number;
        /**
         * Emittes the event
         */
        public emit<K extends keyof Events>(eventName: K, ...args: Parameters<Events[K]>): this;
        /**
         * Checks if the listener exists.
         */
        public hasListener<K extends keyof Events>(eventName: K, listener?: Events[K] | undefined): boolean;
        /**
         * Checks if an event has been emitted.
         */
        public emitted<K extends keyof Events>(eventName: K): boolean;
        public eventNames<K extends keyof Events>(): K[]
        public rawListeners<K extends keyof Events>(eventName: K): Events[K][];
        /**
         * Returns The Maximum Listener Limit.
         */
        public getMaxListeners(): number;
        /**
         * Sets the Maximum Listener Limit.
         */
        public setMaxListeners(n: number): number;
    }
    export class Checker{
        constructor(data: any);
        get type(): CheckerTypes;
        get boolean(): boolean;
        get number(): boolean;
        get symbol(): boolean;
        get string(): boolean;
        get bigint(): boolean;
        get undefined(): boolean;
        get null(): boolean;
        get function(): boolean;
        get object(): boolean;
        get array(): boolean;
        get date(): boolean;
    }

    export type CheckerTypes = "boolean" | "number" | "symbol" | "string" | "bigint" | "undefined" | "null" | "function" | "object" | "array" | "data"
    export interface EventMap {
        [key: string]: (...args: any[]) => unknown;
    }
    export type EventSignature<E> = {
        [key in keyof E]: (...args: any[]) => unknown;
    }
}
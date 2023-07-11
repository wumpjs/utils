# @wumpjs/utils

Some Utils for Wump.JS


# Features

- ESM, CJS and TS support.
- Type-Safe
- EventEmitter
- Checker

# Usage

```js
import { Emitter, Checker } from "@wumpjs/utils";//on ESM(esmodule).

const { Emitter, Checker } = require("@wumpjs/utils");//on CJS(commonjs)


const checker = new Checker(Boolean(1));

checker.boolean//true
checker.number//false
checker.string//false


const emitter = new Emitter();

emitter.emit("test", "this is a test");
emitter.on("test", (str) => console.log(str));
//NOTE: this event emitter has extra functions.
```

- We are supported Event typing with [TypeScript](https://www.typescriptlang.org/).
```ts
import { Emitter, EventMap, EventSignature } from "@wumpjs/utils";

interface SomeEvents{
    test: (str: string) => unknown;
}

const emitter = new Emitter<SomeEvents>()


emitter.on("test", (str) => console.log(str));
emitter.emit("test", "this is a test");



//generic classes
class Test<Events extends EventSignature<Events> = EventMap> extends Emitter<Events>{}
```

## Authors
- [@erqeweew](https://github.com/erqeweew) (Developer)
- [@davutozgursukuti4531](https://github.com/davutozgursukuti4531) (Developer)
- [@Nicat-dcw](https://github.com/Nicat-dcw) (Developer, Contributor)
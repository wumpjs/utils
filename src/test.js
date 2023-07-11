import { Error } from './index.js'

function test() {
    try {
     const un = defined + "1"
    } catch (err) {
      new Error(err)
    }
}
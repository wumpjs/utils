export default class Error {
    constructor(data) {
      super();
      this.data = data;
    }
  
    throw() {
      if (this.data instanceof ReferenceError) {
        throw new Error(`[WUMPJS]: Reference Error: ${this.data}`);
      } else if (this.data instanceof TypeError) {
        throw new Error(`[WUMPJS]: Type Error: ${this.data}`);
      } else if(this.data instanceof RangeError) {
        throw new Error(`[WUMPJS]: Range Error: ${this.data}`)
      } else if(this.data instanceof SyntaxError) {
        throw new Error(`[WUMPJS]: Unexcepted Token: ${this.data}`)
      } else {
        throw new Error(`[WUMPJS]: Error: ${this.data}`)
      }
    }
  }
  
export default class Checker {
  constructor(data) {
    /**
     * @private
     */
    this.data = data;
  };
  get type(){
    if(this.string) return "string";
    if(this.number) return "number";
    if(this.boolean) return "boolean";
    if(this.function) return "function";
    if(this.array) return "array";
    if(this.object) return "object";
    if(this.bigint) return "bigint";
    if(this.symbol) return "symbol";
    if(this.date) return "date";
    if(this.null) return "null";
  }  
  get string() {
    return (typeof this.data === 'string');
  };

  get boolean() {
    return (typeof this.data === 'boolean');
  };

  get number() {
    return (typeof this.data === 'number');
  };
  
  get function() {
    return (typeof this.data === 'function');
  };

  get array() {
    return (Array.isArray(this.data));
  };
  
  get object() {
    return (typeof this.data === 'object');
  };

  get undefined() {
    return (typeof this.data === 'undefined');
  };

  get null() {
    return (this.data == 'null' ?? this.data == null);
  }
  
  get symbol() {
    return (typeof this.data === 'symbol');
  };

  get bigint(){
    return (typeof this.data === 'bigint');
  }

  get date() {
    return (this.data instanceof Date);
  }
};
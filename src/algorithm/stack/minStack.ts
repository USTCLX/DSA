var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x: number) {
  if (x == null) return;
  if (this.stack.length === 0) {
    this.stack.push(x);
  } else {
    const curMin = this.stack[this.stack.length - 2];
    if (x < curMin) {
      this.stack.push(x);
    } else {
      this.stack.push(curMin);
    }
  }
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const top = this.stack.pop(); // pop top
  this.stack.pop(); // pop min
  return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 2];
};

export default MinStack;

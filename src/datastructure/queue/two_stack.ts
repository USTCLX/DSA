export default class Queue<T> {
  stack1: Array<T> = [];
  stack2: Array<T> = [];

  appendTail(data: T): void {
    this.stack1.push(data);
  }

  deleteHead(): T {
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

class LazyMan {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    console.log(`Hi I am ${this.name}`);

    setTimeout(() => {
      this.schedule();
    }, 0);
  }

  sleep(seconds) {
    this.tasks.push(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`等待了${seconds}秒`);
          resolve();
        }, seconds * 1000);
      });
    });
    return this;
  }

  eat(food) {
    this.tasks.push(() => {
      console.log(`I am eating ${food}`);
      return Promise.resolve();
    });
    return this;
  }

  sleepFirst(seconds) {
    this.tasks.unshift(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(`等待了${seconds}秒`);
          resolve();
        }, seconds * 1000);
      });
    });
    return this;
  }

  schedule() {
    if (this.tasks.length) {
      const task = this.tasks.shift();
      task().then(this.schedule.bind(this));
    }
  }
}

const man = new LazyMan("Tony");
man
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(4)
  .eat("junk food");

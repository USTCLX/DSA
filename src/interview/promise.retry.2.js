Promise.retry = (cb, max = 10) => {
  let count = 0;
  return new Promise((resolve, reject) => {
    const handler = () => {
      return Promise.resolve(cb())
        .then(res => {
          console.log("resolve", res);
          resolve(res);
        })
        .catch(err => {
          console.log("retry time", count);
          if (count >= max) {
            reject(err);
          } else {
            count++;
            handler();
          }
        });
    };
    return handler();
  });
};

function getProm() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000);
  });
}

Promise.retry(getProm);

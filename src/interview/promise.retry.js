function retry(func, max = 3) {
  let count = 0;
  let handler = () => {
    return Promise.resolve(func())
      .then(res => res)
      .catch(err => {
        if (count < max) {
          count++;
          return handler();
        } else {
          return Promise.reject(err);
        }
      });
  };
  return handler();
}

function ajax() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.5 ? resolve(n) : reject(n)), 1000);
  });
}

function ajaxWithRetry(params) {
  return retry(ajax.bind(params));
}

ajaxWithRetry()
  .then(res => console.log("resolve", res))
  .catch(res => console.log("reject", res));

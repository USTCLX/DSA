// 实现一个函数，传入promiseA，若异步回调耗时超过1m，则reject，否则正常返回promiseA的结果

function func(p) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject();
    }, 1000);

    p.then(data => {
      resolve(data);
    });
  });
}

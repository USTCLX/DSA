function request(url) {
  return new Promise(resolve => {
    const random = ~~(Math.random() * 1000);
    setTimeout(() => {
      console.log(`${url} finished in ${random}`);
      resolve(`request success ${url}`);
    }, random);
  });
}

function multiRequest(urls, max = 3) {
  return new Promise((resolve, reject) => {
    const tasks = urls.map((url, index) => ({
      index,
      run: () => request(url)
    }));
    const length = tasks.length;
    const min = Math.min(length, max);
    const result = [];
    let count = 0;
    const next = () => {
      if (count === length) {
        return resolve(result);
      }
      if (!tasks.length) return;
      const { index, run } = tasks.shift();
      run()
        .then(data => {
          result[index] = data;
          count++;
        })
        .then(next)
        .catch(e => reject(e));
    };

    for (let i = 0; i < min; i++) {
      next();
    }
  });
}

multiRequest(["1", "2", "3", "4", "5", "6"]).then(data => {
  console.log("data", data);
});

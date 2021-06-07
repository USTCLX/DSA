const list = [1, 2, 3];
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
};

async function test(i = 0) {
  if (i >= list.length) return;
  square(list[i])
    .then(res => {
      console.log(res);
    })
    .then(() => test(i + 1));
}
test();

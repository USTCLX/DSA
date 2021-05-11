// Promise.resolve("1")
//   .then(Promise.resolve("2"))
//   .then(data => {
//     console.log("kekke", data);
//   });

const p = new Promise(resolve => resolve("1"));

Promise.resolve("1")
  .then("2")
  .then(data => console.log(data));

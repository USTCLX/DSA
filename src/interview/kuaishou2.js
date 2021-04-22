const { stat } = require("fs");
const path = require("path");

// const { promisify } = require("util");

stat("./src/interview/flat.ts", function(err, data) {
  console.log("err", err);
  console.log("file exists: " + data);
});

// const existPromise = promisify(exist);

// const isExist = await existPromise("/abc");

function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  };
}

async function main() {
  const fun = promisify(stat);

  const data = await fun("./src/interview/flat.ts");

  console.log("data", data);
}

main();

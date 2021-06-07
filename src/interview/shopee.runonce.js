/**
const onlyOnce = once(function() {
  console.log("run");
});
onlyOnce(); // 'run'
onlyOnce(); // no output
onlyOnce(); // no output
 */

function once(cb) {
  let flag = false;
  return () => {
    if (!flag) {
      flag = true;
      return cb && cb();
    }
  };
}

const onlyOnce = once(function() {
  console.log("run");
});
onlyOnce(); // 'run'
onlyOnce(); // no output
onlyOnce(); // no output

function throttle(fn, delay) {
  let timeStamp = Date.now();
  return (...args) => {
    const context = this;
    if (Date.now() - timeStamp >= delay) {
      return fn.call(context, ...args);
    }
  };
}

function debounce(fn, threshold) {
  let timeid = null;
  return (...args) => {
    const context = this;
    clearTimeout(timeid);
    timeid = setTimeout(() => {
      fn.call(context, ...args);
    });
  };
}

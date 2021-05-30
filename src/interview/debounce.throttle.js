// 防抖
export function debounce(func, delay = 50) {
  let timer = null;
  return function(...args) {
    let context = this;
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// 节流
// 固定的时间内，多次触发，只会执行一次
export function throttle(func, wait = 50) {
  let now = Date.now();
  return function(...args) {
    let context = this;
    if (Date.now() - now > wait) {
      func.apply(context, args);
      now = Date.now();
    }
  };
}

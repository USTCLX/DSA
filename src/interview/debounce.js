function debounce(fn, ms) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(fn, ms);
    }
  };
}

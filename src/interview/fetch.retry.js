function ajax() {}

const MAXRETRY = 3;

function fetch(url, params, retry = MAXRETRY) {
  return ajax(url, params).catch(err => {
    if (retry >= 0) {
      // 重试
      return fetch(url.params, --retry);
    } else {
      throw err;
    }
  });
}

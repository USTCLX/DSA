export var maxSlidingWindow = function(nums, k) {
  if (!nums || !nums.length) return [];
  const window = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    // 维护window的位置和大小
    if (i >= k && window[0] <= i - k) {
      // 随着窗口移动，删除window中靠前的元素
      window.shift();
    }

    // 维护window，依次将新元素与window的末尾元素比较，如果比末尾元素大，则将末尾元素剔除
    // 通过一个while，保证了window的头元素是最大的
    while (window.length && nums[window[window.length - 1]] <= x) {
      window.pop();
    }

    // 移动窗口的右边界
    window.push(i);

    // 记录窗口中的最大值
    if (i >= k - 1) {
      res.push(nums[window[0]]);
    }
  }
  return res;
};

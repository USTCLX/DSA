## 二分查找

### 模版

二分查找本身概念不难，但是需要铭记下面的模版，有三点注意事项。

- `lo <= hi` // 如果只是`<` 则会漏掉`hi`
- `mid = lo + (hi - lo) >> 1` // 如果使用 `hi + lo` 更容易超出最大数的限制
- `hi = mid -1` & `lo = mid + 1` // 如果使用 `hi = mid`，则可能出现死循环，比如`lo=3,hi=3,nums[3]<target`，那么 mid 为 3，接下来 hi 等于 mid 还是 3，进入死循环

```
function bSearch(nums,target){
  let lo = 0;
  let hi = nums.length-1;
  let mid
  while(lo <= hi){
    mid = lo + (hi - lo) >> 1;
    if(nums[mid]===target){
      return mid;
    }else if(nums[mid]>target){
      hi = mid - 1;
    }else{
      lo = mid + 1;
    }
  }
  return -1;
}

```

### 四种遍体

比起直接查找某个值，以下四种变体更有用，都是近似查找。并且代码也更有技巧性。

- 查找第一个值等于给定值的元素
- 查找最后一个值等于给定值的元素
- 查找第一个大于等于给定值的元素
- 查找最后一个小于等于给定值的元素

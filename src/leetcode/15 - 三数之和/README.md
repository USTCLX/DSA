## 三数之和

---

描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

### 思路

- 三层循环
- 双指针

#### 双指针

1. 特殊情况。如果 length<3 直接返回
2. 对数组进行递增排序
3. 对排序后的数组进行遍历，i
   1. 若 a[i]>0，则代表后面的数字都大于 0，结束遍历
   2. 若 a[i]==a[i-1]，是重复元素，continue
   3. 取 L 为 i+1，R 为 length-1，当 L < R 时执行循环
      1. 当 a[i]+a[L]+a[R]=0，则满足条件，继续如果 a[L+1]=a[L] 或 a[R]=a[R-1]则 L++，R--
      2. 若 a[i]+a[L]+a[R]>0，则代表结果偏大，R--
      3. 若 a[i]+a[L]+a[R]<0，则代表结果偏小，L++

### 启发

虽然这一题和之前的求两数之合的题目乍一看很类似，但是其实并不一样，不过仍然借鉴了遍历数字，然后再遍历的过程中，固定一个数字，然后以这个数字为参考，利用双指针来解决问题。

使用双指针，可以做到：

- 空间换时间
- 降低问题的复杂度

双指针（对撞指针）在应用于类似数组求和，比大小类等问题时，需要满足以下条件：

- 有序
- 数组

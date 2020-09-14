## 快速排序

| properity                | value    |
| :----------------------- | :------- |
| time complexity          | O(nlogn) |
| space complexity         | O(1)     |
| stable sorting           | no       |
| original address sorting | yes      |

### 思路

在数组中选中一个中心点 pvoit，通过比较和移动，将数组分为 ab 两部分，a 中的数据全部小于等于 n[pvoit],b 中的数据全部大于 n[pvoit]
然后利用递归，分别在对 a，b 区间进行同样的操作。如果区间只有一个数，则已经有序，可以直接返回。

### 于归并排序的区别

- 归并排序
  - 同样利用递归，但是需要递归到底层之后，再自底向上进行的合并操作。
- 快速排序
  - 同样利用递归，但是再自顶向下的递归过程中，数据逐步有序，当递归到最底层时，排序已经完成。

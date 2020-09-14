## 归并排序

| properity                | value    |
| :----------------------- | :------- |
| time complexity          | O(nlogn) |
| space complexity         | O(n)     |
| stable sorting           | yes      |
| original address sorting | no       |

### 思路

将原数组 a，对半切分为 bc 两个子数组，将两个子数组排序，然后合并 bc 重新得到 a，从而使得 a 变得有序。
在切分的过程中，需要递归的对 bc 两个子数组重复切分和合并的过程，直到只有一个元素时，默认就是有序的，然后自底向上的开始合并。

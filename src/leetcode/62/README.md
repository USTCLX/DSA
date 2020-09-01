## 找到一种有多少种路径

leetcode 62

一个二维方格（m 行，n 列），一人从左上角走到右下角，有一些格子不能走，一共有多少走法？

## 递归

这就像是二维的斐波那契数，有很多重复的计算

```
  int countPaths(book[][] grid,int row,int col){
    if(!isValidSquare(grid,row,col)) return 0;
    if(isAtEnd(grid,row,col)) return 1;
    return countPaths(grid,row+1,col) + countPaths(grid,row,col+1);
  }
```

### 状态转移方程

```
  // opt[i,j] = opt[i-1,j] + opt[i,j-1];

  if(a[i,j] == '空地'):
    opt[i,j] = opt[i-1,j] + opt[i,j-1];
  else:
    opt[i,j] = 0;
```

/*
很遗憾，这一题只能用cpp来写了。
因为js里面，没有有符号整型和无符号整型。
js里的二进制，不能很好的体现这一题想要考察的要点。
*/
int numberOfOne(int n){
  int count = 0;
  unsigned int flag = 1;
  while (flag)
  {
    if(n&flag)
      count++;
    
    flag = flag << 1;
  }
  return count;
}

/*
这是一个巧妙的解法
将n-1 与 n 进行与操作，则相当于把n右边的一位1变成了0
例如 1100-1 = 1011;1011&1100 = 1000
因此n中右多少个1就可以执行几次，从而得到1的个数
*/
int betterNumberOfOne(int n){
  int count = 0;
  while (n)
  {
    count++;
    n = (n-1)&n;
  }
  return count;
}

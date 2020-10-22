/**
 * 给定一个背包，限重tWeight
 * 有n个物品，每个物品的重量为[2,2,4,6,3]
 * 背包最多可以装多种的物品
 */

/**
 * 回溯解法（遍历所有的可能性，即一个物品可以装也可以不装）
 * @param tWeight 背包限重
 * @param weight 物品重量数组
 */
let maxWeight = 0;

function traceWeight(
  curWeight: number,
  count: number,
  tWeight: number,
  weight: number[]
) {
  if (curWeight === tWeight || count === weight.length) {
    if (curWeight > maxWeight) {
      maxWeight = curWeight;
    }
    return;
  }

  // 不装当前物品
  traceWeight(curWeight, count + 1, tWeight, weight);

  // 装当前物品
  if (curWeight + weight[count] <= tWeight) {
    // 只有没背满时才装
    traceWeight(curWeight + weight[count], count + 1, tWeight, weight);
  }
}

export function calcWeight(tWeight: number, weight: number[]): number {
  traceWeight(0, 0, tWeight, weight);
  return maxWeight;
}

/**
 * 动态规划解法
 * dp[i][s] 表示第i个物品时，加入或者不加入当前物品，此时可能的重量 s代表0～背包总重量
 * dp[i][s] = dp[i-1][s] + curWeight
 */
export function calcWeightDP(tWeight: number, weight: number[]): number {
  let dp = new Array(tWeight + 1).fill(false);

  dp[0] = true;
  if (weight[0] <= tWeight) {
    dp[weight[0]] = true;
  }

  for (let i = 1; i < weight.length; i++) {
    // i 放入背包
    for (let j = tWeight - weight[i]; j >= 0; j--) {
      if (dp[j] == true) {
        dp[j + weight[i]] = true;
      }
    }
  }

  for (let i = dp.length - 1; i >= 0; i--) {
    if (dp[i] === true) return i;
  }
  return 0;
}

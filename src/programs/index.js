const maxSubArraySum = nums => {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

const maxSubArraySumWithPartition = (nums, start, end) => {
  if (start > end) {
    return 0;
  }
  if (start === end) {
    return nums[start];
  }

  const mid = Math.floor((start + end) / 2);

  const sumLeft = maxSubArraySum(nums, start, mid - 1);
  const sumRight = maxSubArraySum(nums, mid, end);
  let sumMid = 0,
    sumMidLeft = 0,
    sumMidRight = 0,
    i = 0;
  for (i = start; i < mid; i++) {
    sumMidLeft += nums[i];
  }
  for (i = mid; i < end; i++) {
    sumMidRight += nums[i];
  }
  sumMid = sumMidLeft + sumMidRight;
  return Math.max(sumMid, sumLeft, sumRight);
};

const testArr = [
  {
    value: [1, -2, 3, 5, -3, 2],
    expect: 8
  },
  {
    value: [0, -2, 3, 5, -1, 2],
    expect: 9
  },
  {
    value: [-9, -2, -3, -5, -3],
    expect: -2
  },
  {
    value: [-3],
    expect: -3
  },
  {
    value: [5],
    expect: 5
  }
];
testArr.forEach(nums => {
  const result = maxSubArraySum(nums.value);
  console.log(result === nums.expect, result, nums.expect);
});

testArr.forEach(nums => {
  const result = maxSubArraySumWithPartition(nums.value, 0, nums.value.length);
  console.log(result === nums.expect, result, nums.expect);
});

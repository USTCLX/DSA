/*
 * @lc app=leetcode.cn id=621 lang=typescript
 *
 * [621] 任务调度器
 */

// @lc code=start

// type Task = { restCount: number; time: number; key: string };
// type TaskMap = Map<string, Task>;

// 挑选任务的原则
// 1. 当前任务不处在冷却周期
// 2. 当前任务剩余数量最多

// function selectTask(map: TaskMap, n: number): string {
//   let result: Task | null = null;
//   for (let task of map.values()) {
//     if (task.time === 0) {
//       result = result
//         ? result.restCount > task.restCount
//           ? result
//           : task
//         : task;
//     } else {
//       task.time--;
//     }
//   }

//   if (result) {
//     result.time = n;
//     result.restCount--;

//     if (result.restCount === 0) {
//       map.delete(result.key);
//     }

//     return result.key;
//   } else {
//     return "";
//   }
// }

// 原始的想法
// function leastInterval(tasks: string[], n: number): number {
//   const map: TaskMap = new Map();
//   for (let key of tasks) {
//     if (!map.has(key)) {
//       map.set(key, { restCount: 1, time: 0, key });
//     } else {
//       const curTask = map.get(key);
//       if (curTask) {
//         curTask.restCount++;
//         map.set(key, curTask);
//       }
//     }
//   }

//   let count = 0;
//   while (map.size && ++count) {
//     selectTask(map, n);
//   }
//   return count;
// }

// 一种巧妙的算法
// 可以解决这个问题，但是不如模拟CPU的调度算法来的直观
// 并且真的是只能求运行时间，不能给出任务执行的顺序这样
// 准备m个桶，m取值为数量最多的那个任务的数量值
// x为数量最多的任务的总类，比如 AABBC ,由于A的数量为2，B的数量也为2，因此x为2
// time1 = (m-1)*(n+1)+x
// function leastInterval(tasks: string[], n: number): number {
//   let maxTaskCount = 0;
//   let numOfMaxTaskCount = 0;
//   const map = Array(26).fill(0);
//   for (let task of tasks) {
//     maxTaskCount = Math.max(maxTaskCount, ++map[task.charCodeAt(0) - 65]);
//   }

//   map.forEach(item => {
//     if (item === maxTaskCount) {
//       numOfMaxTaskCount++;
//     }
//   });

//   return Math.max(
//     tasks.length,
//     (maxTaskCount - 1) * (n + 1) + numOfMaxTaskCount
//   );
// }

// 1. 这里使用map来存储任务和任务的数量，因为任务为26个字母，因此也可以使用数组
// 2. 并且task总记录的time，代表的是自己当前还需冷却多长时间。这样一来，每一个时钟周期，都需要去更新time
// 如果一个全局变量time记录当前的时刻，task中记录下一次task可以执行的时间点nextValidTime=time+n+1
// 那么每轮循环只需要挑选出nextValidTime<=time的任务，并更新它的count和nextValidTime就好了。
// 这种解法无疑更加巧妙

class Task {
  nextValid: number = 0;
  count: number = 0;
}
function leastInterval(tasks: string[], n: number): number {
  let time = 0;
  const map: Task[] = Array(26)
    .fill(0)
    .map(() => new Task());
  for (let task of tasks) {
    // 初始化map
    map[task.charCodeAt(0) - 65].count++;
  }

  // 遍历执行任务
  for (let i = 0; i < tasks.length; i++) {
    time++;
    // 先算出当前的time
    // time直接跳转到最小的nextValid
    let minTime = Infinity;
    map.forEach(task => {
      if (task.count) {
        minTime = Math.min(minTime, task.nextValid);
      }
    });
    time = Math.max(minTime, time);

    // 1. 首先筛选出冷却时间已经ok的
    // 2. 再次筛选出剩余数量最多的
    const validTasks = map.filter(task => task.count && task.nextValid <= time);
    if (validTasks.length) {
      // 有已经解冻并且需要执行的任务
      const nextTask = validTasks.reduce((taskA, taskB) =>
        taskA.count > taskB.count ? taskA : taskB
      );
      nextTask.count--;
      nextTask.nextValid = time + n + 1;
    }
  }

  return time;
}

// @lc code=end

export { leastInterval };

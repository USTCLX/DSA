/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
// type Course = {
//   name: number; // 课程名字
//   inDegree: number; // 记录入度
//   edges: Set<number>; // 记录被谁指向
// };
// function canFinish(numCourses: number, prerequisites: number[][]): boolean {
//   const map = new Map<number, Course>();
//   // 初始化map
//   for (let i = 0; i < numCourses; i++) {
//     map.set(i, { name: i, inDegree: 0, edges: new Set() });
//   }
//   // 更新map
//   for (const [courseName, edge] of prerequisites) {
//     const data = map.get(courseName);
//     data!.edges.add(edge);
//     data!.inDegree++;
//   }

//   const queue = [];
//   for (let course of map.values()) {
//     if (!course.inDegree) {
//       queue.push(course);
//     }
//   }

//   let count = 0; // 当前学习了几门课程
//   while (queue.length) {
//     const curCourse = queue.shift();
//     count++; // 增加一门
//     for (let course of map.values()) {
//       if (course!.edges.has(curCourse!.name)) {
//         course.inDegree--;
//         if (course.inDegree === 0) {
//           queue.push(course);
//         }
//       }
//     }
//   }

//   return count === numCourses;
// }

// dfs
// prerequisites: [[1,2]] ,2->1 学习课程1必须先学习课程2
// 1. 需要一个map记录每一们课程的后序课程
// 比如 2:[1,2,3]; 可以暂时使用一个二维数组
// 2. 还需要一个数据结构来记录，每个课程的状态
// 状态分为0-未搜索，1-搜索中，2-已完成搜索。
// 遍历所有等待搜索的课程，如果状态未0，就把它标记为1，并切dfs它的后序课程。
// 如果状态为1，说明这个课程已经在搜索中，又一次被搜索，形成了环。
// 如果状态为2，说明这个课程已经是ok的了，可以直接返回true
// 一轮dfs的过程中，如果所有的子节点也是ok的，那么就把这个课程状态变为2

function dfs(course: number, dict: number[][], visited: number[]): boolean {
  if (visited[course] === 1) {
    return false;
  } else if (visited[course] === 2) {
    return true;
  } else {
    // 改变状态未1
    visited[course] = 1;
    for (let nextCourse of dict[course]) {
      if (!dfs(nextCourse, dict, visited)) {
        return false;
      }
    }
    // 已经完成搜索，这个课程是ok的
    visited[course] = 2;
    return true;
  }
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 1. 构造map
  const dict = Array(numCourses);
  for (let i = 0; i < dict.length; i++) {
    dict[i] = [];
  }
  // 将课程的后序课程加入
  for (const [course, preCourse] of prerequisites) {
    dict[preCourse].push(course);
  }
  // 2. 构造visited, 初始状态都是未访问
  const visited = Array(numCourses).fill(0);

  // 开始遍历
  for (const [course] of prerequisites) {
    if (!dfs(course, dict, visited)) {
      return false;
    }
  }
  return true;
}
// @lc code=end
export { canFinish };

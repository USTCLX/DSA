/*
 * @lc app=leetcode.cn id=210 lang=typescript
 *
 * [210] 课程表 II
 */

// @lc code=start
type Course = {
  name: number; // 课程名字
  inDegree: number; // 记录入度
  edges: Set<number>; // 记录被谁指向
};
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const map = new Map<number, Course>();
  // 初始化map
  for (let i = 0; i < numCourses; i++) {
    map.set(i, { name: i, inDegree: 0, edges: new Set() });
  }
  // 更新map
  for (const [courseName, edge] of prerequisites) {
    const data = map.get(courseName);
    data!.edges.add(edge);
    data!.inDegree++;
  }

  const queue = [];
  for (let course of map.values()) {
    if (!course.inDegree) {
      queue.push(course);
    }
  }

  let count = 0; // 当前学习了几门课程
  let order = [];
  while (queue.length) {
    const curCourse = queue.shift();
    order.push(curCourse!.name);
    count++; // 增加一门
    for (let course of map.values()) {
      if (course!.edges.has(curCourse!.name)) {
        course.inDegree--;
        if (course.inDegree === 0) {
          queue.push(course);
        }
      }
    }
  }

  return count === numCourses ? order : [];
}
// @lc code=end

export { findOrder };

/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
type Course = {
  name: number; // 课程名字
  inDegree: number; // 记录入度
  edges: Set<number>; // 记录被谁指向
};
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
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
  while (queue.length) {
    const curCourse = queue.shift();
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

  return count === numCourses;
}
// @lc code=end
export { canFinish };

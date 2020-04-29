/*
 * @Author: your name
 * @Date: 2020-04-21 00:02:50
 * @LastEditTime: 2020-04-21 00:17:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tsproj/src/tools/partition.test.ts
 */

import { partition, partition2, partition3 } from "./partition";

describe("partition", () => {
  test("", () => {
    let data = [3, 2];
    expect(partition(data, 0, 1)).toBe(1);
    expect(data).toMatchObject([2, 3]);

    data = [3, 4, 2];
    expect(partition(data, 0, data.length - 1)).toBe(1);
    expect(data).toMatchObject([2, 3, 4]);

    data = [3, 5, 4, 2, 1];
    expect(partition(data, 0, data.length - 1)).toBe(2);
  });
});

describe("partition2", () => {
  test("should ", () => {
    let data = [2, 3, 1, 2, 4];
    expect(partition2(data, 0, data.length - 1)).toBe(2);
    expect(data).toMatchObject([1, 2, 2, 3, 4]);
  });
});

describe("partiton3", () => {
  test("should ", () => {
    let data = [2, 3, 1, 2, 4];
    expect(partition3(data, 0, data.length - 1)).toBe(1);
    expect(data).toEqual([1, 2, 3, 2, 4]);
  });
});

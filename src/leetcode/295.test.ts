import { MedianFinder } from "./295.数据流的中位数";

test("should ", () => {
  const m = new MedianFinder();
  m.addNum(-1);
  expect(m.findMedian()).toBe(-1);
  m.addNum(-2);
  expect(m.findMedian()).toBe(-1.5);
  m.addNum(-3);
  expect(m.findMedian()).toBe(-2);
  m.addNum(-4);
  expect(m.findMedian()).toBe(-2.5);
  m.addNum(-5);
  expect(m.findMedian()).toBe(-3);
});

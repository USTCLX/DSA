import MockDate from "mockdate";
import { Record } from "./index";

afterAll(() => {
  MockDate.reset();
});
describe("Record", () => {
  test("should ", () => {
    const record = new Record();
    expect(record.average()).toBe(0);
  });
  test("Record 1", () => {
    const record = new Record();
    const now = Date.now();

    MockDate.set(now);
    record.record(1);

    MockDate.set(now + 1 * 60 * 1000);
    record.record(2);
    expect(record.average()).toBe(1.5);

    MockDate.set(now + 2 * 60 * 1000);
    record.record(3);
    expect(record.average()).toBe(2);

    MockDate.set(now + 6.5 * 60 * 1000);
    record.record(3);
    expect(record.average()).toBe(3);

    MockDate.set(now + 15 * 60 * 1000);
    expect(record.average()).toBe(0);
  });
});

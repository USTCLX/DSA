import { LRUCache } from "./146.lru缓存机制";

describe("Name of the group", () => {
  test("should ", () => {
    const lru = new LRUCache(2);
    lru.put(2, 1);
    lru.put(1, 1);
    lru.get(2);
    lru.put(4, 1);
    lru.get(1);
    lru.get(2);
  });
});

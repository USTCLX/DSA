import { TrieTree } from "./index.2";

describe("TrieTree", () => {
  test("should equal", () => {
    const rawData = ["a.bb", "a.cc", "a.dd.eee", "h.ff.llll"];
    const treeData = [
      {
        title: "*",
        value: "*",
        children: [
          {
            title: "a",
            value: "a.*",
            children: [
              {
                title: "bb",
                value: "a.bb"
              },
              {
                title: "cc",
                value: "a.cc"
              },
              {
                title: "dd",
                value: "a.dd.*",
                children: [
                  {
                    title: "eee",
                    value: "a.dd.eee"
                  }
                ]
              }
            ]
          },
          {
            title: "h",
            value: "h.*",
            children: [
              {
                title: "ff",
                value: "h.ff.*",
                children: [
                  {
                    title: "llll",
                    value: "h.ff.llll"
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    expect(new TrieTree(rawData).getValue()).toEqual(treeData);
  });
});

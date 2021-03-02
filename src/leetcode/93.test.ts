import { restoreIpAddresses } from "./93.复原-ip-地址";

describe("Name of the group", () => {
  test("should ", () => {
    expect(restoreIpAddresses("25525511135")).toEqual([
      "255.255.11.135",
      "255.255.111.35"
    ]);
  });
});

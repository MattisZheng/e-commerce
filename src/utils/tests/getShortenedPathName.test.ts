import { describe, expect, it } from "vitest";
import getShortenedPathName from "../getShortPathName";

describe("getShortenedPathName", () => {
  it("should return a shortened path name", () => {
    expect(getShortenedPathName(3, "this is a ")).toBe("thi...");
    expect(getShortenedPathName(5, "1234567890")).toBe("12345...");
  });
});

import { describe, expect, it } from "vitest";
import getAuthentication from "../authentication";

describe("getAuthentication", () => {
  it("should return token", () => {
    expect(getAuthentication("mor_2314", "83r5^_")).toBe({
      token: "eyJhbGciOiJIUzI1NiIsInR",
    });
  });
});

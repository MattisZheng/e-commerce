import { describe, expect, it } from "vitest";
import getRandom from "../getRandom";

describe("getRandom", () => {
  it("should return a random number from given array", () => {
    const random = getRandom(1, [10, 20, 30]);
    expect(random).toHaveLength(1);
  });
});

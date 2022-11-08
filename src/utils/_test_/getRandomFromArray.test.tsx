import { describe, expect, it } from "vitest";
import getRandomFromArray from "../getRandomFromArray";

describe("getRandom", () => {
  it("should return a random number from given array", () => {
    const random = getRandomFromArray(1, [10, 20, 30]);
    expect(random).toHaveLength(1);
  });
});

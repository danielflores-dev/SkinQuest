import { applyDamage, calcDamage, calcMultiplier, maxHpForStage } from "../gameLogic";

describe("calcMultiplier", () => {
  it("is 0 with fewer than 3 coins", () => {
    expect(calcMultiplier(2)).toBe(0);
  });
  it("goes up 0.25 every 3 coins", () => {
    expect(calcMultiplier(3)).toBe(0.25);
    expect(calcMultiplier(7)).toBe(0.5);
  });
});

describe("calcDamage", () => {
  it("does 15 per product with no multiplier", () => {
    expect(calcDamage(3, 0)).toBe(45);
  });
  it("applies the coin multiplier", () => {
    expect(calcDamage(2, 6)).toBe(45); // 2 * 15 * 1.5
  });
});

describe("applyDamage", () => {
  it("subtracts damage from hp", () => {
    expect(applyDamage(100, 30)).toBe(70);
  });
  it("never goes below 0", () => {
    expect(applyDamage(20, 50)).toBe(0);
  });
});

describe("maxHpForStage", () => {
  it("starts at 100 and adds 50 per stage", () => {
    expect(maxHpForStage(1)).toBe(100);
    expect(maxHpForStage(3)).toBe(200);
  });
});
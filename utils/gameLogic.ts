export function calcMultiplier(coin: number): number {
  return Math.floor(coin / 3) * 0.25;
}

export function calcDamage(completed: number, coin: number): number {
  return completed * 15 * (1 + calcMultiplier(coin));
}

export function applyDamage(hp: number, damage: number): number {
  return Math.max(0, hp - damage);
}

export function maxHpForStage(stage: number): number {
  return 100 + (stage - 1) * 50;
}
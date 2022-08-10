import { roundToFive } from '../round-to-five';

describe('roundToFive', () => {
  test('roundging to five', () => {
    expect(roundToFive(1)).toBe(0);
    expect(roundToFive(3.5)).toBe(5);
    expect(roundToFive(282.3)).toBe(280);
    expect(roundToFive(164)).toBe(165);
  });
});
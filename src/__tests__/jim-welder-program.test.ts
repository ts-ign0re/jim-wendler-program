import { JimWendlerProgram } from '../jim-wendler-program';

describe('JimWendlerProgram', () => {
  test('should return calculated load', () => {
    // 315 pounds
    expect(JimWendlerProgram(315)[0][0].weight).toBe(185);

    // 100kg
    expect(JimWendlerProgram(100)[0][0].weight).toBe(60);
  });
});
import { JimWelderProgram } from '../jim-welder-program';

describe('JimWelderProgram', () => {
  test('should return calculated load', () => {
    // 315 pounds
    expect(JimWelderProgram(315)[0][0].weight).toBe(185);

    // 100kg
    expect(JimWelderProgram(100)[0][0].weight).toBe(60);
  });
});
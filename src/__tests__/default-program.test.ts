import { defaultProgram } from '../default-program';

describe('defaultProgram', () => {
  const week1 = { load: [0.65, 0.75, 0.85], reps: ['5', '5', '5+'] };
  const week2 = { load: [0.7, 0.8, 0.9], reps: ['3', '3', '3+'] };
  const week3 = { load: [0.75, 0.85, 0.95], reps: ['5', '3', '1+'] };
  const week4 = { load: [0.4, 0.5, 0.6], reps: ['5', '5', '5+'] };

  const jim_welder_program = [week1, week2, week3, week4];
  test('should return calculated load', () => {
    const [w1, w2, w3, w4] = defaultProgram(285, jim_welder_program);
    expect(w1[0].weight).toBe(185);
    expect(w1[0].reps).toBe('5');
    expect(w1[1].weight).toBe(215);
    expect(w1[1].reps).toBe('5');
    expect(w1[2].weight).toBe(240);

    expect(w2[0].weight).toBe(200);
    expect(w2[1].weight).toBe(230);
    expect(w2[2].weight).toBe(255);
    
    expect(w3[0].weight).toBe(215);
    expect(w3[1].weight).toBe(240);
    expect(w3[2].weight).toBe(270);
    
    expect(w4[0].weight).toBe(115);
    expect(w4[1].weight).toBe(145);
    expect(w4[2].weight).toBe(170);
  });
});

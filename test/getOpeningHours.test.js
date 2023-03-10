const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retorna um objeto se nenhum parâmetro for passado', () => {
    const result = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(result);
  });
  it('Passados um dia e um horário que o zoo está fechado, retorna a string "The zoo is closed"', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('Monday', '12:00-AM')).toBe(closed);
    expect(getOpeningHours('Sunday', '09:00-PM')).toBe(closed);
    expect(getOpeningHours('Monday', '12:00-PM')).toBe(closed);
    expect(getOpeningHours('Monday', '10:00-AM')).toBe(closed);
  });
  it('Passados um dia e um horário que o zoo está aberto, retorna a string "The zoo is open"', () => {
    const open = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '05:00-PM')).toBe(open);
    expect(getOpeningHours('Wednesday', '09:15-AM')).toBe(open);
    expect(getOpeningHours('Friday', '12:12-PM')).toBe(open);
  });
  it('Retorna um erro caso a string passada não seja um dia', () => {
    expect(() => getOpeningHours('Gilberto Barros')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('Retorna um erro caso algum parâmetro passado como hora esteja errado', () => {
    expect(() => getOpeningHours('Monday', '12:00-DM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
    expect(() => getOpeningHours('Monday', '1a:00-PM')).toThrow(new Error('The hour should represent a number'));
    expect(() => getOpeningHours('Monday', '15:00-PM')).toThrow(new Error('The hour must be between 0 and 12'));
    expect(() => getOpeningHours('Monday', '12:70-PM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});

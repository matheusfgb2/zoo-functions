const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined se nenhum parâmetro for passado', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Retorna a string "Parâmetro inválido, é necessário uma string" se o parâmetro passado não for uma string', () => {
    expect(handlerElephants([1, 2, 3])).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna o parâmetro solicitado', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Retorna null se o parâmetro passado for inválido', () => {
    expect(handlerElephants('Gilberto Barros')).toBe(null);
  });
});

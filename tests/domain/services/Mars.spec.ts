import Mars from '@/domain/services/Mars';

describe('Mars Planet Class', () => {
  const size = 5;
  const mars = new Mars(size);

  test('Should instance with a board (array bidimensional)', () => {
    expect(Array.isArray(mars.board)).toBeTruthy();
    expect(mars.board.length).toBe(size);
    expect(mars.board[0].length).toBe(size);
  })

  test('Should generate random obstacles', () => {
    let findStones = false;

    mars.board.map((row: number[]) => {
      if(row.some( x => x == 1)) findStones = true;
    })

    expect(findStones).toBeTruthy();
  })
})
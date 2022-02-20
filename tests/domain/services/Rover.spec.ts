import Rover from '@/domain/services/Rover';
import IFeedback from '@/domain/interfaces/IFeedback.interface'

describe('Mars Planet Class', () => {
  const rover = new Rover(1, 1);
  const mockBoard = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0],
  ]
  
  test('Should return "true" only when moving"F" (Obstacle detection)', () => {
    let move: IFeedback = rover.moveLFR('F', mockBoard);
    expect(move.status).toBeTruthy();

    move = rover.moveLFR('R', mockBoard);
    expect(move.status).toBeFalsy();

    move = rover.moveLFR('L', mockBoard);
    expect(move.status).toBeFalsy();
  })
})
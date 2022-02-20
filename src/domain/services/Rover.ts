import IOrientation from '../interfaces/IOrientation.interface';
import ICoords from '../interfaces/ICoords.interface';
import IFeedback from '../interfaces/IFeedback.interface';

export default class Rover {

  public posX: number;
  public posY: number;
  public direction: string;
  public coords: ICoords;

  private orientations: IOrientation = {
    'N': { x:  0, y: -1 },
    'E': { x:  1, y:  0 },
    'S': { x:  0, y:  1 }, 
    'W': { x: -1, y:  0 }
  }


  constructor(posX: number, posY: number) {
    this.posX = posX;
    this.posY = posY;
    this.direction = 'N';
    this.coords = this.orientations['N'];
  }
  

  public moveLFR(LFR: string, board: number[][]): IFeedback {
    // List of all directions availables (N,E,S,W)
    const rotation: string[] = Object.keys(this.orientations);
    // Current direction
    const current: number = rotation.indexOf(this.direction);

    if(LFR === 'R') {
      this.direction = current < rotation.length - 1 ? 
      rotation[current + 1] : 
      rotation[0];
    } 
    
    if(LFR === 'F') {
      this.coords = this.orientations[this.direction as keyof IOrientation];

      const feedback = this.obstacleDetector(board);

      if(feedback.status) {
        return feedback;
      }
      // Remove Rover from older position
      board[this.posY][this.posX] = 0;
      this.posX = this.posX + this.coords.x;
      this.posY = this.posY + this.coords.y;
      // Set Rover at new position
      board[this.posY][this.posX] = 9;
    } 

    if(LFR === 'L') {
      this.direction = current <= 0 ? 
        rotation[rotation.length - 1] :
        rotation[current - 1]; 
    } 

    return {
      status: false,
      message: 'Action: ' + LFR
    }
  } 

  private obstacleDetector(board: number[][]): IFeedback {
    const nextY = this.posY + this.coords.y;
    const nextX = this.posX + this.coords.x;

    const boardLimit = 
      nextY >= board.length || 
      nextX >= board[0].length ||
      nextY < 0 || 
      nextX < 0;

    if(boardLimit) {
      return {
        status: true,
        message: `Planet limit reached`
      }
    }

    const isObstacle = board[nextY][nextX] == 1;

    return {
      status: isObstacle,
      message: `Obstacle detected at: Y:${nextY}, X:${nextX}`
    }
  }

}
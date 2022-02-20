export default class Mars {
  
  public board: number[][];
  public size: number;

  constructor(size: number) {
    this.size = size;
    this.board = this.generateBoard();
    this.generateObstacles();
  }

  private generateBoard(): number[][] {
    // Generate an array bidimensional initialized to 0
    return [...Array(this.size)].map(() => Array(this.size).fill(0));
  }

  private generateObstacles(): void {
    const nObstacles = this.size;

    for(let n = 0; n < nObstacles; n++) {
      let randX = Math.round( Math.random() * (this.size - 1));
      let randY = Math.round( Math.random() * (this.size - 1));

      while(this.board[randX][randY] != 0) {
        randX = Math.round( Math.random() * (this.size - 1) );
        randY = Math.round( Math.random() * (this.size - 1) ); 
      }

      this.board[randX][randY] = 1;
    }
  }
  
}
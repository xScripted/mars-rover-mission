export default class CanvasBoard {

  public boxWidth: number;
  public boxHeight: number;
  public size: number;
  public padding: number;

  public ctx: CanvasRenderingContext2D;


  constructor(boxWidth: number, boxHeight: number, size:number, canvas: HTMLCanvasElement) {
    canvas.width = boxWidth;
    canvas.height = boxHeight;

    this.boxWidth = boxWidth;
    this.boxHeight = boxHeight;
    this.size = size;
    this.padding = this.size / 10;
    this.ctx = canvas.getContext('2d') as unknown as CanvasRenderingContext2D;
  }

  public drawBoard(): void {
    // Background Color
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.boxWidth, this.boxHeight);
    this.ctx.fillStyle = '#ffba85';
    this.ctx.fill();

    // Draw column lines
    for(let x = this.size; x < this.boxWidth; x += this.size) {
      this.ctx.moveTo(0.5 + x, 0);
      this.ctx.lineTo(0.5 + x, this.boxHeight);
    }

    // Draw row lines
    for(let x = this.size; x < this.boxHeight; x += this.size) {
      this.ctx.moveTo(0, 0.5 + x);
      this.ctx.lineTo(this.boxWidth, 0.5 + x);
    }

    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
  }

  public drawObstacles(board: number[][]): void {
    board.map((row: number[], y: number): void => {
      row.map((value: number, x: number): void => {
        if(value == 1) this.drawRock(x, y);
      })
    })
  }

  private drawRock(x: number, y: number): void {
    const base_image = new Image();
    base_image.src = require('@/infrastructure/vue/assets/stone.png');
    base_image.onload = () => {
      this.ctx.drawImage(
        base_image, // Image
        (x * this.size) + (this.padding/2), // X
        (y * this.size) + (this.padding/2), // Y
        this.size - this.padding, // Width 
        this.size - this.padding // Height
      );

    }
  }

  public drawImage(x: number, y: number, element: HTMLCanvasElement): void {
    this.ctx.drawImage(element, 0, 0);
  }

  public refresh(board: number[][], rover: HTMLCanvasElement): void {
    this.ctx.clearRect(0, 0, this.boxWidth, this.boxHeight);
    this.drawBoard();
    this.drawObstacles(board);

    board.map((row: number[], y: number) => {
      row.map((col: number, x: number) => {
        if(col == 9) {
          // Draw Rover
          this.ctx.drawImage(rover, x * this.size, y * this.size);
        }

        if(col == 1) {
          this.drawRock(x, y);
        }
      })
    })
  }

}


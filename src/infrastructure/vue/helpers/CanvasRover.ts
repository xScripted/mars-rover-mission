
export default class CanvasRover {
  public size: number;
  public canvas: HTMLCanvasElement;

  public ctx: CanvasRenderingContext2D;

  constructor(size: number) {
    this.size = size;

    // Create the canvas rover container
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = size + 'px';
    this.canvas.style.height = size + 'px';
    this.ctx = this.canvas.getContext('2d') as unknown as CanvasRenderingContext2D;
  }
  
  async getRover(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = require('@/infrastructure/vue/assets/mars-rover.png');
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0, this.size, this.size);
        return resolve(img);
      }
      img.onerror = () => {
        return reject();
      }
    })
  }
}
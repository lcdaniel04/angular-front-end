export class Producto {
  constructor(
    public productId?: number,
    public name?: String,
    public categoryId?: number,
    public price?: number,
    public cantidad: number = 0,
    public total: number = 0,
    public stock?:number

  ) {

  }
}

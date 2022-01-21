import { IShapeMethod } from '../product/IShapeMethod';

export class Circle implements IShapeMethod {
  draw(): void {
    console.log('dibujar circulo');
  }
}

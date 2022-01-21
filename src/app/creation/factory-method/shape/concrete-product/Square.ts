import { IShapeMethod } from '../product/IShapeMethod';

export class Square implements IShapeMethod {
  draw(): void {
    console.log('cuadrado');
  }
}

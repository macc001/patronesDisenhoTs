import { IShapeMethod } from '../product/IShapeMethod';

export class Rectangle implements IShapeMethod {
  draw(): void {
    console.log('dibujar rectangulo');
  }
}

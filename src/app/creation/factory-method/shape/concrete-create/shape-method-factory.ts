import { IShapeMethod } from '../product/IShapeMethod';
import { ShapeType } from './shapeType';

import { Square } from '../concrete-product/Square';
import { Rectangle } from '../concrete-product/Rectangle';
import { Circle } from '../concrete-product/Circle';

export class ShapeMethodFactory {
  public static createShapeType(type: ShapeType): IShapeMethod {
    if (type === ShapeType.Square) {
      return new Square();
    }

    if (type === ShapeType.Rectangle) {
      return new Rectangle();
    }

    if (type === ShapeType.Cicle) {
      return new Circle();
    }

    throw new Error('Invalid payment method type.');
  }
}

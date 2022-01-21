import { IShapeMethod } from '../product/IShapeMethod';
import { ShapeMethodFactory } from '../concrete-create/shape-method-factory';
import { ShapeType } from '../concrete-create/shapeType';

export class FactoryMethod {
  public paymentType?: IShapeMethod;
  public commission: number = 0;

  constructor(private type: ShapeType, public amount: number) {}

  create(): void {
    // set payment type
    this.paymentType = ShapeMethodFactory.createShapeType(this.type);
  }
}

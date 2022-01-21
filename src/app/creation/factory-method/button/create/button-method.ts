import { IButtonMethod } from '../product/IButtonMethod';
import { ButtonMethodFactory } from '../concrete-create/button-method-factory';
import { ButtonType } from '../concrete-create/buttonType';

export class FactoryMethod {
  public paymentType?: IButtonMethod;
  public commission: number = 0;

  constructor(private type: ButtonType, public amount: number) {}

  create(): void {
    // set payment type
    this.paymentType = ButtonMethodFactory.createPaymentType(this.type);

    // calculate commission
    // this.commission = this.paymentType.comision() * this.amount;

    // ...
  }
}

import { IPaymentMethod } from '../product/IPaymentMethod';
import { PaymentMethodFactory } from '../concrete-create/payment-method-factory';
import { PaymentType } from '../concrete-create/paymentType';

export class FactoryMethod {
  public paymentType?: IPaymentMethod;
  public commission: number = 0;

  constructor(private type: PaymentType, public amount: number) {}

  create(): void {
    // set payment type
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type);

    // calculate commission
    this.commission = this.paymentType.comision() * this.amount;

    // ...
  }
}

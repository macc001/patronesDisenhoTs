import { IConnectionMethod } from '../product/IConnectionMethod';

import { ConnectionType } from '../concrete-create/connectionType';
import { ConnectionMethodFactory } from '../concrete-create/connection-method-factory';

export class FactoryMethod {
  public paymentType?: IConnectionMethod;
  public commission: number = 0;

  constructor(private type: ConnectionType, public amount: number) {}

  create(): void {
    // set payment type
    this.paymentType = ConnectionMethodFactory.createPaymentType(this.type);

    // calculate commission
    // this.commission = this.paymentType.comision() * this.amount;

    // ...
  }
}

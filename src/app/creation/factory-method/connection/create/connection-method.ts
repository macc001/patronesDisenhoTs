import { IConnectionMethod } from '../product/IConnectionMethod';

import { ConnectionType } from '../concrete-create/connectionType';
import { ConnectionMethodFactory } from '../concrete-create/connection-method-factory';

export class ConnectionMethod {
  public paymentType?: IConnectionMethod;

  constructor(private type: ConnectionType) {}

  create(): void {
    this.paymentType = ConnectionMethodFactory.createPaymentType(this.type);
  }
}

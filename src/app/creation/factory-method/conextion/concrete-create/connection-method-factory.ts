import { IConnectionMethod } from '../product/IConnectionMethod';
import { ConnectionType } from './connectionType';
import { Oracle } from '../concrete-product/oracle';
import { Mysql } from '../concrete-product/mysql';

export class ConnectionMethodFactory {
  public static createPaymentType(type: ConnectionType): IConnectionMethod {
    if (type === ConnectionType.Oracle) {
      return new Oracle();
    }

    if (type === ConnectionType.Mysql) {
      return new Mysql();
    }

    throw new Error('Invalid payment method type.');
  }
}

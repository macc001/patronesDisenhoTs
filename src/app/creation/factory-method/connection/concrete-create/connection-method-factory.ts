import { IConnectionMethod } from '../product/IConnectionMethod';
import { ConnectionType } from './connectionType';
import { Oracle } from '../concrete-product/oracle';
import { Mysql } from '../concrete-product/mysql';
import { Postgresql } from '../concrete-product/postgresql';
import { Empty } from '../concrete-product/empty';

export class ConnectionMethodFactory {
  public static createPaymentType(type: ConnectionType): IConnectionMethod {
    if (type === ConnectionType.Oracle) {
      return new Oracle();
    }
    if (type === ConnectionType.Mysql) {
      return new Mysql();
    }
    if (type === ConnectionType.Postgresql) {
      return new Postgresql();
    }
    return new Empty();
  }
}

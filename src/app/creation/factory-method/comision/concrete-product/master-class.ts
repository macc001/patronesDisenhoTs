import { IPaymentMethod } from '../product/IPaymentMethod';

export class MasterCard implements IPaymentMethod {
  comision(): number {
    return 0.04;
  }
}

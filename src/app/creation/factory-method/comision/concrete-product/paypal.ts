import { IPaymentMethod } from '../product/IPaymentMethod';

export class PayPal implements IPaymentMethod {
  comision(): number {
    return 0.06;
  }
}

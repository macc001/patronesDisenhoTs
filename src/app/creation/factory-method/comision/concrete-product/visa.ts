import { IPaymentMethod } from '../product/IPaymentMethod';

export class Visa implements IPaymentMethod {
  comision(): number {
    return 0.05;
  }
}

import IPaymentMethod from '../product/IPaymentMethod';

export default class Visa implements IPaymentMethod {
  comision(): number {
    return 0.05;
  }
}

import IPaymentMethod from '../product/IPaymentMethod';

export default class MasterCard implements IPaymentMethod {
  comision(): number {
    return 0.04;
  }
}

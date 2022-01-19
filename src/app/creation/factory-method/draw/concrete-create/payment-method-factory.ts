import IPaymentMethod from '../product/IPaymentMethod';
import PaymentType from './paymentType';
import MasterCard from '../concrete-product/master-class';
import PayPal from '../concrete-product/paypal';
import Visa from '../concrete-product/visa';

export default class PaymentMethodFactory {
  public static createPaymentType(type: PaymentType): IPaymentMethod {
    if (type === PaymentType.Mastercard) {
      return new MasterCard();
    }

    if (type === PaymentType.PayPal) {
      return new PayPal();
    }

    if (type === PaymentType.Visa) {
      return new Visa();
    }

    throw new Error('Invalid payment method type.');
  }
}

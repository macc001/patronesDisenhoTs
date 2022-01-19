import IPaymentMethod from '../product/IPaymentMethod';

export default class PayPal implements IPaymentMethod {
    comision(): number {
        return 0.06;
    }
}
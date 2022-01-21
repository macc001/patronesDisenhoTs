import { IPizzaMethod } from '../product/IPizzaMethod';
import { PizzaType } from './pizzaType';
import { Napolitana } from '../concrete-product/napolitana-class';
import { Cancha } from '../concrete-product/visa';

export default class PizzaMethodFactory {
  public static createPaymentType(type: PizzaType): IPizzaMethod {
    if (type === PizzaType.Napolitana) {
      return new Napolitana();
    }

    if (type === PizzaType.Cancha) {
      return new Cancha();
    }

    throw new Error('Invalid payment method type.');
  }
}

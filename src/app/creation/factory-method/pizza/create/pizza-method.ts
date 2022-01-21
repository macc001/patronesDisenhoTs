import { IPizzaMethod } from '../product/IPizzaMethod';
import PaymentMethodFactory from '../concrete-create/pizza-method-factory';
import { PizzaType } from '../concrete-create/pizzaType';

export class PizzeriaMethod {
  public pizzaType?: IPizzaMethod;
  public commission: number = 0;

  constructor(
    private type: PizzaType,
    public amount: number,
    public country: string
  ) {}

  create(): void {
    // set payment type
    this.pizzaType = PaymentMethodFactory.createPaymentType(this.type);

    this.pizzaType.createPizza(this.country);
    // calculate commission
    // this.commission = this.paymentType.comision() * this.amount;

    // ...
  }
}

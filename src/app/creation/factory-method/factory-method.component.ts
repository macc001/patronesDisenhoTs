import { Component, OnInit } from '@angular/core';
import { FactoryMethod } from './comision/create/comision-method';
import { PaymentType } from './comision/concrete-create/paymentType';
import { PizzeriaMethod } from './pizza/create/pizza-method';
import { PizzaType } from './pizza/concrete-create/pizzaType';

@Component({
  selector: 'creation-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css'],
})
export class FactoryMethodComponent implements OnInit {
  orderOne = new FactoryMethod(PaymentType.Visa, 100);
  orderTwo = new FactoryMethod(PaymentType.PayPal, 300);
  orderThree = new FactoryMethod(PaymentType.Mastercard, 200);

  pizzaArgentina = new PizzeriaMethod(PizzaType.Napolitana, 150, 'Argentina');
  pizzaItaliana = new PizzeriaMethod(PizzaType.Napolitana, 200, 'Italiana');

  constructor() {
    this.orderOne.create();
    this.orderTwo.create();
    this.orderThree.create();

    this.pizzaArgentina.create();
    this.pizzaItaliana.create();
  }

  ngOnInit(): void {
    console.log(this.orderOne.commission);
    console.log(this.orderTwo.commission);
    console.log(this.orderThree.commission);
  }
}

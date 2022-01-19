import { Component, OnInit } from '@angular/core';
import { FactoryMethod } from './comision/create/factory-method';
import PaymentType from './comision/concrete-create/paymentType';

@Component({
  selector: 'creation-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css'],
})
export class FactoryMethodComponent implements OnInit {
  orderOne = new FactoryMethod(PaymentType.Visa, 100);
  orderTwo = new FactoryMethod(PaymentType.PayPal, 300);
  orderThree = new FactoryMethod(PaymentType.Mastercard, 200);
  
  constructor() {
    this.orderOne.create();
    this.orderTwo.create();
    this.orderThree.create();
  }

  ngOnInit(): void {
    console.log(this.orderOne.commission);
    console.log(this.orderTwo.commission);
    console.log(this.orderThree.commission);
  }
}

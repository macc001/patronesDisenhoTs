import { IPizzaMethod } from '../product/IPizzaMethod';

export class Cancha implements IPizzaMethod {
  createPizza(origin: string): void {
    console.log('crear pizza cancha ', origin);
  }
}

import { IPizzaMethod } from '../product/IPizzaMethod';

export class Napolitana implements IPizzaMethod {
  createPizza(origin: string): void {
    console.log('crear pizza napolitana ' + origin);
  }
}

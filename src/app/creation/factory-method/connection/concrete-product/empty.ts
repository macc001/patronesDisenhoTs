import { IConnectionMethod } from '../product/IConnectionMethod';

export class Empty implements IConnectionMethod {
  constructor() {}

  connect(): void {
    console.log('Connect No se especifico Proveedor');
  }
  disconnect(): void {
    console.log('Disconnect No se especifico Proveedor');
  }
}

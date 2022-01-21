import { IConnectionMethod } from '../product/IConnectionMethod';

export class Postgresql implements IConnectionMethod {
  private host: string;
  private port: number;
  private user: string;
  private password: string;

  constructor() {
    this.host = 'localhost';
    this.port = 5433;
    this.user = 'postgres';
    this.password = '123456';
  }

  connect(): void {
    console.log('Se conecto a POSTGRES');
  }
  disconnect(): void {
    console.log('Se desconecto de POSTGRES');
  }
}

import { IConnectionMethod } from '../product/IConnectionMethod';

export class Oracle implements IConnectionMethod {
  private host: string;
  private port: number;
  private user: string;
  private password: string;

  constructor() {
    this.host = 'localhost';
    this.port = 1521;
    this.user = 'admin';
    this.password = '123456';
  }

  connect(): void {
    console.log('Se conecto a ORACLE');
  }
  disconnect(): void {
    console.log('Se desconecto de ORACLE');
  }
}

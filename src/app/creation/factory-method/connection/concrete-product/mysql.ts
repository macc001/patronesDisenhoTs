import { IConnectionMethod } from '../product/IConnectionMethod';

export class Mysql implements IConnectionMethod {
  private host: string;
  private port: number;
  private user: string;
  private password: string;

  constructor() {
    this.host = 'localhost';
    this.port = 3306;
    this.user = 'root';
    this.password = '123456';
  }

  connect(): void {
    console.log('Se conecto a MYSQL');
  }
  disconnect(): void {
    console.log('Se desconecto de MYSQL');
  }
}

import { IConnectionMethod } from '../product/IConnectionMethod';

export class Mysql implements IConnectionMethod {
  connect(): void {
    console.log('Render HTML Button');
  }
  disconnect(): void {
    console.log('onClick HTML Button');
  }
}

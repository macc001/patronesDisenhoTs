import { IConnectionMethod } from '../product/IConnectionMethod';

export class Postgresql implements IConnectionMethod {
  connect(): void {
    console.log('Render Windows Button');
  }
  disconnect(): void {
    console.log('onClick Windows Button');
  }
}

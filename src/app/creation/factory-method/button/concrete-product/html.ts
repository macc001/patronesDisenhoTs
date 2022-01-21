import { IButtonMethod } from '../product/IButtonMethod';

export class HtmlButton implements IButtonMethod {
  render(): void {
    console.log('Render HTML Button');
  }
  onClick(): void {
    console.log('onClick HTML Button');
  }
}

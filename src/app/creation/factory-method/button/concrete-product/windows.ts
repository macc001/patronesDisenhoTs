import { IButtonMethod } from '../product/IButtonMethod';

export class WindowsButton implements IButtonMethod {
  render(): void {
    console.log('Render Windows Button');
  }
  onClick(): void {
    console.log('onClick Windows Button');
  }
}

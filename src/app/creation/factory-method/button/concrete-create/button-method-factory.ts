import { IButtonMethod } from '../product/IButtonMethod';
import { ButtonType } from './buttonType';
import { WindowsButton } from '../concrete-product/windows';
import { HtmlButton } from '../concrete-product/html';

export class ButtonMethodFactory {
  public static createPaymentType(type: ButtonType): IButtonMethod {
    if (type === ButtonType.Windows) {
      return new WindowsButton();
    }

    if (type === ButtonType.Html) {
      return new HtmlButton();
    }

    throw new Error('Invalid payment method type.');
  }
}

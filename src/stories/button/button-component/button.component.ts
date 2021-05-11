import {Component, Input} from '@angular/core';
import {ButtonTypeEnum} from '../button-type.enum';

@Component({
  selector: 'p-typography-styles',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent {
  @Input() label: string = 'Label';
  @Input() large: boolean = false;
  @Input() disabled: boolean = false;
  @Input() iconBefore: boolean = false;
  @Input() iconAfter: boolean = false;
  @Input() buttonType: ButtonTypeEnum = ButtonTypeEnum.Primary;

  public get classes(): string[] {
    const classParams = [];
    this.large ? classParams.push('p-btn-large') : classParams.push('p-btn-small');
    this.disabled ? classParams.push('p-btn-disabled') : null;
    this.iconBefore ? classParams.push('p-btn-icon-before') : null;
    this.iconAfter ? classParams.push('p-btn-icon-after') : null;
    classParams.push(this.buttonType);
    return classParams;
  }
}

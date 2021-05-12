import {Component, Input} from '@angular/core';
import IButton from '../button.interface';
import {ButtonTypeEnum} from '../button-type.enum';

@Component({
  selector: 'p-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent {
  @Input() label: string = 'Label';
  @Input() large: boolean = false;
  @Input() disabled: boolean = false;
  @Input() iconBefore: string = 'view';
  @Input() iconAfter: string = 'arrow';
  @Input() buttonType: ButtonTypeEnum = ButtonTypeEnum.Primary;

  public get classes(): string[] {
    console.log(this);
    const classParams = [];
    this.large ? classParams.push('p-btn-large') : classParams.push('p-btn-small');
    this.iconBefore ? classParams.push('p-btn-icon-before') : null;
    this.iconAfter ? classParams.push('p-btn-icon-after') : null;
    classParams.push(`p-btn-${this.buttonType}`);
    return classParams;
  }
}

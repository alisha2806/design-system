import {Component, Input} from '@angular/core';

@Component({
  selector: 'p-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() value: any;
  @Input() label: string;
  @Input() ariaLabel: string;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
}

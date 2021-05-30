import {ValidatorFn} from '@angular/forms';

export default interface IInputNumeric {
  type: string;
  label: string;
  ariaLabel: string;
  placeholder: number;
  errorMessage: string;
  disabled: boolean;
  readonly: boolean;
  value: number;
  validators: ValidatorFn[];
  labelLast: boolean;
}

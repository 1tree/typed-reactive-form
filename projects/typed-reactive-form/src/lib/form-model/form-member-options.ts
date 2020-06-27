import {ValidatorFn} from '@angular/forms';

export interface FormMemberOptions {
  defaultValue: any;
  context?: string[];
  validators: ValidatorFn[];
}

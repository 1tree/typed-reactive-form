import {FormMember} from 'typed-reactive-form';
import {Validators} from '@angular/forms';

export class Person {
  // this will be defaulted to 0
  @FormMember({defaultValue: 0})
  id: number;

  @FormMember({validators: [Validators.required]})
  firstName: string;

  @FormMember()
  middleName: string;

  @FormMember({validators: [Validators.required]})
  lastName: string;

  // this member will only appear if "all" is passed into the form creation.
  @FormMember({validators: [Validators.required], context: ['all']})
  birthDate: Date;
}

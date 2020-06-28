import {FormMember} from 'typed-reactive-form';
import {Validators} from '@angular/forms';

export class Address {
  @FormMember()
  id = 0;

  @FormMember({validators: [Validators.required]})
  street1: string;

  @FormMember()
  street2: string;

  @FormMember({validators: [Validators.required]})
  city: string;

  @FormMember({validators: [Validators.required]})
  state: string;

  @FormMember({validators: [Validators.required]})
  zip: string;
}

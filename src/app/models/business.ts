import {Address} from './address';
import {FormMember, FormGroup} from 'typed-reactive-form';
import {Validators} from '@angular/forms';

export class Business {
  id = 0;

  @FormMember({validators: [Validators.required]})
  name: string;

  @FormMember()
  slogan: string;

  @FormGroup(Address)
  address: Address;
}

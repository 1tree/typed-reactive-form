import { Component } from '@angular/core';
import {TypedReactiveForm} from 'typed-reactive-form';
import {Business} from '../models/business';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
})
export class BusinessComponent {
  form = new TypedReactiveForm(Business);
}

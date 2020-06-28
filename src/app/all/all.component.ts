import { Component } from '@angular/core';
import {TypedReactiveForm} from 'typed-reactive-form';
import {Person} from '../models/person';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
})
export class AllComponent {
  form = new TypedReactiveForm(Person, 'all');
}

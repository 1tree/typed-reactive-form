import {Component} from '@angular/core';
import {TypedReactiveForm} from 'typed-reactive-form';
import {Person} from '../models/person';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent{
  form = new TypedReactiveForm(Person);
}

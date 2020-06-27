import { Component } from '@angular/core';
import {TypedReactiveForm} from 'typed-reactive-form';
import {Person} from '../person';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  form = new TypedReactiveForm(Person);
}

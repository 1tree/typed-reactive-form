import { Component } from '@angular/core';
import {TypedReactiveForm} from 'typed-reactive-form';
import {Person} from '../person';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  form = new TypedReactiveForm(Person, 'all');
}

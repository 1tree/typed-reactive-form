import {Component, OnInit} from '@angular/core';
import {TypedReactiveForm} from 'typed-reactive-form';
import {Business} from './models/business';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(new TypedReactiveForm(Business));
  }
}

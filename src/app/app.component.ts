import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgStyle, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, FormsModule, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'hello-world';
  myButton: string = 'My Button';
  counter: number = 0;

  // attribute binding
  isDisabled: boolean = true;
  angularImage: string = '/img/Angular.png';

  // style binding
  bgColor: string = 'green';
  titleColor: string = 'white';
  descriptionStyle: string = 'font-size: 50px; color: red;';

  //class binding
  redText: string = 'abcd';

  //data binding
  incrementCounter(){
    this.counter++;
  }

  decrementCounter(){
    this.counter--
  }

  inputText: string = 'Initial Value';

  //ngClass
  message: string = 'This is a dangerous message'
  classes: string = 'danger text-size';

  //ngStyle
  selectedColor: string = 'red';
}


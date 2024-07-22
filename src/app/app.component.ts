import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
  NgClass,
  NgStyle,
  NgOptimizedImage,
  NgIf,
  NgForOf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, FormsModule, NgClass, NgStyle, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorldTutorial: string = 'hello-world';
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
  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--
  }

  inputText: string = 'Initial Value';

  //ngClass
  message: string = 'This is a dangerous message'
  classes: string = 'danger text-size';

  //ngStyle
  selectedColor: string = 'red';

  //Tutorial Structure Directives
  directivesTitle: string = 'Structure Directives'

  isLoggedIn: boolean = true;
  check: boolean = true;
  username: string = 'admin';

  names: string[] = ['admin', 'user', 'visitor'];
  grade: string = 'B';

  //Control flow
  controlFlowTitle: string = 'Control Flow';
  a: number = 1;
  b: number = 2;
  c: number = 3;

  items = [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'},
  ];
}


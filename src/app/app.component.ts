import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-crash-todolist';
  name:string = 'Sandro';

  constructor() {
    // runs on component load
    console.log('Hello 1,2,3')
    this.changeName('John');
  }

  changeName(name:string):void {
    this.name = name;
  }
}

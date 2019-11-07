import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli';

favNum: number = 7;
result: number;

  subtract() {
    // this.favNum -= 2;  or 
    this.result = this.favNum -2;
  }
}


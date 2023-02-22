import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-directive',
  template: `
    <h3>Activity to practice Built-in Directives</h3>

    <button class="btn btn-primary" (click)="toogleDisplay()">{{buttonLabel}}</button>
    <p *ngIf="isDisplaying">Please, i beg you, don't hide me!!!!!</p>
    <ul>
        <li 
            *ngFor="let log of logs; let position = index" 
            [ngStyle]="position >= 4 && {'background-color':'blue', 'color': 'white'}">
                I will remember of this day, promise you: {{log}}
        </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style:none;
    }
  `]
})
export class BuiltinDirectiveComponent {

  buttonLabel = 'Display Details';
  isDisplaying = false;
  logs: string[] = [];

  toogleDisplay() {
    this.logs.push((new Date()).toISOString());
    this.isDisplaying = !this.isDisplaying;
    if(this.isDisplaying) {
      this.buttonLabel = 'Hide Details';
      return false;
    }
    this.buttonLabel = 'Display Details';
  }

}

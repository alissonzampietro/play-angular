import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `
    <p>The number {{number}} is even!</p>
  `,
  styles: [`
    p {
      color: blue;
    }
  `]
})
export class EvenComponent {

  @Input() number: number;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `
    <p>The number {{number}} is odd!</p>
  `,
  styles: [`
    p{
      color: red;
    }
  `]
})
export class OddComponent {

  @Input() number: number;

}

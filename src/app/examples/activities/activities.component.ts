import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  template: `
    <app-game-control (intervalEmitter)="count($event)"></app-game-control>
    <app-odd *ngFor="let number of oddNumbers" [number]="number"></app-odd>
    <app-even *ngFor="let number of evenNumbers" [number]="number"></app-even>
  `
})
export class ActivitiesComponent {

  evenNumbers: Number[] = [];
  oddNumbers: Number[] = [];

  count(number: number) {
    number % 2 === 0 ? this.evenNumbers.push(number) : this.oddNumbers.push(number)
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html' 
})
export class ActivitiesComponent {

  evenNumbers: Number[] = [];
  oddNumbers: Number[] = [];

  count(number: number) {
    number % 2 === 0 ? this.evenNumbers.push(number) : this.oddNumbers.push(number)
  }

}

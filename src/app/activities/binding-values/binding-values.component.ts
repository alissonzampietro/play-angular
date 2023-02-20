import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-values',
  template: `
  <h3>Activity to practice Databinding</h3>

  <input 
      type="text" 
      class="form-control"
      [(ngModel)]="username"
  >

  <p>{{username}}</p>

  <button class="btn btn-primary" [disabled]="username == ''" (click)="onResetUser()">Clear</button>
  
  `
})
export class BindingValuesComponent {

  username = "";

  onResetUser() {
    this.username = '';
  }

}

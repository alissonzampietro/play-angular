import { Component } from '@angular/core';
import { Menus } from './enum/menus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public menus = Menus;
  public currentPage: Menus = Menus.recipes;

  public openPage(page: Menus) {
    console.log('OPEN', page)
    this.currentPage = page;
  }


}

import { Component, EventEmitter, Output } from '@angular/core';
import { Menus } from '../enum/menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public recipe = Menus.recipes;
  public shoppingList = Menus.shoppingList;

  @Output('openPage') currentPage = new EventEmitter<Menus>();
  collapsed = true;

  public openPage(page: Menus) {
    this.currentPage.emit(page);
  }


}

import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  public recipes: Recipe[] = [
    new Recipe('Chocolate Cake', 'Simple chocolate cake', 'https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-Thumbnail.jpg')
  ];

  constructor(){}

  ngOnInit() {

  }

}

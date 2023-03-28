import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeItem = new EventEmitter<Recipe>();
  
  public recipes: Recipe[] = [
    new Recipe('Chocolate Cake', 'Simple chocolate cake', 'https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-Thumbnail.jpg'),
    new Recipe('Strawberry Cake', 'Strawberry cake', 'https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-Thumbnail.jpg'),
  ];

  onRecipeSelected(recipe: Recipe):void {
    this.recipeItem.emit(recipe);
  }


}

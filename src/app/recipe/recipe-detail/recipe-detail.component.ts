import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RecipeInterface } from './../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnChanges {

  @Input() recipe: RecipeInterface;

  ngOnChanges({recipe}: SimpleChanges) {
    console.log(recipe)
  }

}

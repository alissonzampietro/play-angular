import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: []
})

export class RecipeComponent {
    public recipe: Recipe;
}
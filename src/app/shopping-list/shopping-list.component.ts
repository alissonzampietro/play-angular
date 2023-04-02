import {Component, Input, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent implements OnInit{

    public ingredients: Array<Ingredient> = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 4),
    ];

    constructor() {

    }

    ngOnInit() {

    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
    }
 }
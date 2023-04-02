import { Component, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static:false}) public nameInput: ElementRef;
  @ViewChild('amountInput', {static:false}) public amountInput: ElementRef;
  @Output('newIngredient') public ingredients: EventEmitter<Ingredient> = new EventEmitter<Ingredient>;
  public isError = false;


  public addIngredient(event):void {
      event.preventDefault();
      const name = this.nameInput.nativeElement.value;
      const amount = Number(this.amountInput.nativeElement.value);

      if(name.length !== 0 && amount > 0) {
        this.ingredients.emit(new Ingredient(name, amount));
        return;
      }
      
      this.isError = true;
      setTimeout(() => {
        this.isError = false;
      }, 5000);
  }

}

import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    console.log('addIngredient called: ', ingredient);
    console.log('this.ingredients BEFORE: ', this.ingredients);
    
    this.ingredients.push(ingredient);
    console.log('this.ingredients AFTER: ', this.ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    console.log('getIngredients called: ', this.ingredients);
    
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    console.log('addIngredient called: ', ingredient);
    console.log('this.ingredients BEFORE: ', this.ingredients);
    
    this.ingredients.push(ingredient);
    console.log('this.ingredients AFTER: ', this.ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    console.log('addIngredients called - ingredients: ', ingredients);
    
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    console.log('this.ingredients: ', this.ingredients);
    
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
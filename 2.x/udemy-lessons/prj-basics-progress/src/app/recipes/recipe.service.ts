import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ]
    ),
    new Recipe(
      'Columbian Coffee',
      '2: This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('coffee', 1),
        new Ingredient('cheese', 1),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  selectedRecipe(recipe) {
    console.log('selectedRecipe called')
    this.recipeSelected.emit(recipe);
  }

}
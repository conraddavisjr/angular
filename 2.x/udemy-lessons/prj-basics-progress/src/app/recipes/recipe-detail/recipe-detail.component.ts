import {
  Component,
  OnInit,
} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails: Recipe;
  recipes: Recipe[]

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    const recipeId = this.route.snapshot.params['id'];
    this.recipeDetails = this.recipes[recipeId];

    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeDetails = recipe
      }
    );

  }

  addIngredients() {
    this.shoppingListService.addIngredients(this.recipeDetails.ingredients);
  }

}

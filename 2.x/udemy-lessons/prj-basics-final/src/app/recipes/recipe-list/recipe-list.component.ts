import {
  Component,
  OnInit,
} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    
    // emit default data for the first recipe
    this.recipeService.selectedRecipe(this.recipes[0]);
  }

  onSelect(e, i) {
    this.recipeService.selectedRecipe(this.recipes[i]);
  }

}

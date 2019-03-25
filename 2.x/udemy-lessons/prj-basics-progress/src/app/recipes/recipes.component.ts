import {
  Component, OnInit
} from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeSelected = false;

  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (response) => this.recipeSelected = true
    )
  }



}

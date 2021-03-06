import {
  Component,
  OnInit,
} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  selectedItemId: number;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelect(e, i) {
    this.selectedItemId = i;
    this.recipeService.selectedRecipe(this.recipes[i]);
    this.router.navigate(
      [i],
      {
        relativeTo: this.route
      }
    )
  }

}

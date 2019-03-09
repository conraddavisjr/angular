import {
  Component,
  OnInit,
} from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    
    this.recipeDetails = this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeDetails = recipe
        console.log('this.recipeDetails: ', this.recipeDetails);
      }
    );
    
  }

}

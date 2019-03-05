import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() initialRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', '2: This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() {
    
  }

  ngOnInit() {
    // emit default data for the first recipe
    console.log('recipe-list emitted');
    this.initialRecipe.emit(this.recipes[0]);
  }

  onSelect(e, i) {
    console.log('e: ', e);
    console.log('recipes: ', this.recipes);
    console.log('$index: ', i);
    
    this.recipeSelected.emit(this.recipes[i]);
  }

}

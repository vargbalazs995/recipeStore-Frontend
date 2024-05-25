import { Component } from '@angular/core';
import { CompleteRecipe, Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  selectedRecipe?: number;
  selectedRecipeById?: CompleteRecipe;

  constructor(private recipeService: RecipeService) {}

  selectRecipeById(id: number) {
    this.recipeService.getRecipe(id).subscribe((recipe) => {
      this.selectedRecipeById = recipe;
    });
  }
}

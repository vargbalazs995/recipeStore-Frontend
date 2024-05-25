import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<number>();
  recipeList$ = new Observable<Recipe[]>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeList$ = this.recipeService.getRecipeList();
  }

  onSelectRecipe(id: number) {
    this.recipeWasSelected.emit(id);
  }
}

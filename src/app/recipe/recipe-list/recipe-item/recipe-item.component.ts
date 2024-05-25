import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  // recipe$ = new Observable<Recipe>();
  @Input() recipe?: Recipe;
  @Output() recipeSelected = new EventEmitter<number>();

  onSelect(id: number) {
    this.recipeSelected.emit(id);
  }
}

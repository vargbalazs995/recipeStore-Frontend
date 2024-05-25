import { Component, Input, OnInit } from '@angular/core';
import { CompleteRecipe, Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() id?: number;
  @Input() recipeById?: CompleteRecipe;

  ngOnInit(): void {}

  constructor(private recipeService: RecipeService) {}
}

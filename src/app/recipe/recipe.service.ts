import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompleteRecipe, PostRecipe, Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipeList(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://localhost:8080/api/recipe');
  }

  getRecipe(id: number) {
    return this.http.get<CompleteRecipe>(
      `http://localhost:8080/api/recipe/${id}`
    );
  }

  addRecipe(postRecipe: PostRecipe) {
    console.log(postRecipe);
    return this.http.post<PostRecipe>(
      'http://localhost:8080/api/recipe/up',
      postRecipe
    );
  }
}

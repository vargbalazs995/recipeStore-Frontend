import {IngredientForRecipe, PostIngredient} from "../shared/models/ingredient.model";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface CompleteRecipe {
  name: string;
  description: string;
  image: string;
  ingredients: IngredientForRecipe[];
}

export interface PostRecipe {
  name: string;
  description: string;
  image: string;
  ingredients: PostIngredient[];
}

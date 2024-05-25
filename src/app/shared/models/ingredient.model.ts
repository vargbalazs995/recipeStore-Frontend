import {UnitE} from "./unitTypeEnum";

export interface IngredientForRecipe {
  name: string;
  weight: number;
  unit: UnitE;
}

export interface PostIngredient {
  id: string;
  weight: string;
}

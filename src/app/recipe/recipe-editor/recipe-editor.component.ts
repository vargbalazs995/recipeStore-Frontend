import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Material } from 'src/app/material/material.model';
import { MaterialService } from 'src/app/material/material.service';
import { PostRecipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import {PostIngredient} from "../../shared/models/ingredient.model";

@Component({
  selector: 'recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css'],
})
export class RecipeEditorComponent implements OnInit {
  unit: string = '';
  materialList$ = new Observable<Material[]>();
  recipeFormGroup!: FormGroup;
  plusIngredient: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private materialService: MaterialService,
    private recipeService: RecipeService
  ) {
    this.recipeFormGroup = formBuilder.group({
      name: '',
      description: '',
      image: '',
      ingredients: formBuilder.array([]),
    });
  }
  ngOnInit(): void {
    this.materialList$ = this.materialService.getMaterialList();
  }

  ingredients(): FormArray {
    return this.recipeFormGroup.get('ingredients') as FormArray;
  }

  newIngredient(): FormGroup {
    return this.formBuilder.group({
      id: '',
      weight: '',
      unit: '',
    });
  }

  addIngredient() {
    this.ingredients().push(this.newIngredient());
  }

  removeIngredient(id: number) {
    this.ingredients().removeAt(id);
  }

  onSubmit() {
    console.log(this.recipeFormGroup.value);
  }

  addRecipe() {
    const newRecipe: PostRecipe = {
      name: this.recipeFormGroup.value.name,
      description: this.recipeFormGroup.value.description,
      image: this.recipeFormGroup.value.image,
      ingredients: [],
    };
    for (let i = 0; i < this.recipeFormGroup.value.ingredients.length; i++) {
      const newIngredient: PostIngredient = {
        id: this.recipeFormGroup.value.ingredients[i].id,
        weight: this.recipeFormGroup.value.ingredients[i].weight,
      };

      newRecipe.ingredients.push(newIngredient);
    }
    this.recipeService.addRecipe(newRecipe).subscribe();
  }
}

// addMaterial() {
//   const newMaterial: PostMaterial = {
//     name: this.materialDetails.value.matName,
//     weight: this.materialDetails.value.weight,
//     unit: this.materialDetails.value.unit,
//     price: this.materialDetails.value.price,
//   };
//   this.materialService.addMaterial(newMaterial).subscribe();
//   console.log(this.setFormControl());
// }

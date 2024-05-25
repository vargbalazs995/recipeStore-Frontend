import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditorComponent,
    DropdownDirective,
  ],
  imports: [CommonModule, RecipeRoutingModule, ReactiveFormsModule],
})
export class RecipeModule {}

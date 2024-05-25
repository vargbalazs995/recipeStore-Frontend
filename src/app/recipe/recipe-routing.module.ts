import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe.component';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';

const routes: Routes = [
  { path: '', component: RecipeComponent },
  {
    path: 'list',
    component: RecipeListComponent,
  },
  {
    path: 'edit',
    component: RecipeEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}

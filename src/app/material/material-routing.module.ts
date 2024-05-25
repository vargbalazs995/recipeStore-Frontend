import { Routes, RouterModule } from '@angular/router';
import { MaterialListComponent } from './material-list/material-list.component';
import { NgModule } from '@angular/core';
import { MaterialUploadComponent } from './material-upload/material-upload.component';

const routes: Routes = [
  {
    path: 'list',
    component: MaterialListComponent,
  },
  {
    path: 'upload',
    component: MaterialUploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}

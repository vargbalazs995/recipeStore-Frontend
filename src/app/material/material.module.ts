import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialCardComponent } from './material-card/material-card.component';
import { MaterialRoutingModule } from './material-routing.module';
import { MaterialUploadComponent } from './material-upload/material-upload.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MaterialListComponent,
    MaterialCardComponent,
    MaterialUploadComponent,
  ],
  imports: [MaterialRoutingModule, CommonModule, ReactiveFormsModule],
})
export class MaterialModule {}

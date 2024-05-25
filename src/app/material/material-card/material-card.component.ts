import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Material } from '../material.model';
import { MaterialService } from '../material.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.css'],
})
export class MaterialCardComponent implements OnInit {
  @Input() material?: Material;
  @Output() updateMaterialEvent = new EventEmitter<number>();

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {}

  // openRecipeDetails(id: number) {
  //   this.openRecipeDetailsEvent.emit(id);
  //   this.material$ = this.materialService.getMaterial(id);
  // }

  deleteMaterial(id: number) {
    this.materialService.deleteMaterial(id).subscribe();
  }

  updateMaterial(id: number) {
    this.updateMaterialEvent.emit(id);
  }
}


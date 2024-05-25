import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MaterialService } from '../material.service';
import { Material, PostMaterial } from '../material.model';
import { FormControl, FormGroup } from '@angular/forms';
import {Observable} from "rxjs";

@Component({
  selector: 'material-upload',
  templateUrl: './material-upload.component.html',
  styleUrls: ['./material-upload.component.css'],
})
export class MaterialUploadComponent implements OnInit {
  @Input() materialUpdate?: number;
  @Output() outputMaterial: EventEmitter<Observable<Material>> = new EventEmitter();
  updateableMaterial: Material = {} as Material;

  materialDetails = new FormGroup({
    matName: new FormControl(),
    weight: new FormControl(),
    unit: new FormControl(),
    price: new FormControl(),
  });
  ngOnInit(): void {}
  constructor(private materialService: MaterialService) {}

  setFormControl() {
    let newMaterial: Material = {} as Material;
    if (this.materialUpdate) {
      this.materialService
        .getMaterial(this.materialUpdate)
        .subscribe((material) => {});
    }
  }

  addMaterial() {
    const newMaterial: PostMaterial = {
      name: this.materialDetails.value.matName,
      weight: this.materialDetails.value.weight,
      unit: this.materialDetails.value.unit,
      price: this.materialDetails.value.price,
    };
    this.outputMaterial.emit(this.materialService.addMaterial(newMaterial))
  }
}

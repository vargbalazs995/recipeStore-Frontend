import {Component, OnInit} from '@angular/core';
import {MaterialService} from '../material.service';
import {Material} from '../material.model';
import {BehaviorSubject, combineLatestWith, map, Observable, of, startWith} from 'rxjs';
import {OperationEnum} from "../../shared/models/operationEnum";

@Component({
  selector: 'material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css'],
})
export class MaterialListComponent implements OnInit {
  materialList$ = new Observable<Material[]>();
  operatedList$ : Observable<Material[]> =  new Observable<Material[]>();
  operationMaterial$ : Observable<Material> =  new Observable<Material>();
  operation$ : BehaviorSubject<OperationEnum> = new BehaviorSubject<OperationEnum>(OperationEnum.READ)
  operationId$ = new BehaviorSubject<number>({} as number);

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    console.log(this.materialService.getMaterialList())
    //Nekem ezt kell triggerelni//
    this.operatedList$ = this.materialService.getMaterialList();
    console.log(this.operatedList$);
    this.operationMaterial$ = this.operationMaterial$.pipe(startWith({}as Material))
    console.log(this.operationMaterial$)
    // this.operatedList$ = this.materialList$.pipe(
    //   combineLatestWith( this.operationMaterial$, this.operation$), map(
    //     ([materialList, operationMaterialList ,operation,]) =>  materialList
    //   ) )
    this.operatedList$ = this.materialList$.pipe(
      combineLatestWith(this.operationMaterial$, this.operation$),
      map(([materialList,  operationMaterialList, operation]) => {
        console.log('Combined data', materialList);
        return materialList;
      }))
    console.log(this.operatedList$)
    console.log(this.materialList$)

  }

  create (material$: Observable<Material>) {
    this.operationMaterial$ = material$;
    this.operation$.next(OperationEnum.CREATE)
  }
}

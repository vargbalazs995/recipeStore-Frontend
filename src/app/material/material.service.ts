import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, concatMap, map, merge, Observable} from 'rxjs';
import {Material, PostMaterial} from './material.model';
import {OperationEnum} from "../shared/models/operationEnum";

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  operation$ = new BehaviorSubject<OperationEnum>(OperationEnum.READ);
  materialList$ =this.http.get<Material[]>('http://localhost:8080/api/material');
  materialsSubject = new BehaviorSubject<Material[]>({} as Material[]);
  materials$= this.materialsSubject.asObservable()

  constructor(private http: HttpClient) {}

  getMaterialList(): Observable<Material[]> {
    return merge(this.operation$).pipe(concatMap(()=>this.materialList$))
  }

  getMaterial(id: number) {
    return this.http.get<Material>(`http://localhost:8080/api/material/${id}`).pipe(map(material =>{this.operation$.next(OperationEnum.READ);
      return material}))
  }

  // addMaterial(postMaterial: PostMaterial) {
  //   return this.http.post<Material>(
  //     'http://localhost:8080/api/material/upload',
  //     postMaterial
  //   ).pipe(map(material =>{this.operation$.next(OperationEnum.CREATE); return material}))
  // }

  loadMaterials(){
    this.http.get<Material[]>('http://localhost:8080/api/material').subscribe(
      materials => this.materialsSubject.next(materials)
    );
  }

  addMaterial(postMaterial: PostMaterial) {
    return this.http.post<Material>(
      'http://localhost:8080/api/material/upload',
      postMaterial).pipe(
        map(material =>{this.loadMaterials();
        return material;})
    )
  }

  deleteMaterial(id: number) {
    return this.http.delete(`http://localhost:8080/api/material/${id}`).pipe(map(material =>{this.operation$.next(OperationEnum.DELETE)}))
  }
}

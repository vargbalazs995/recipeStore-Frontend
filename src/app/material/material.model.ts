import {UnitE} from "../shared/models/unitTypeEnum";

export interface Material {
  id: number;
  name: string;
  weight: number;
  unit: UnitE;
  price: number;
}

export interface PostMaterial {
  name: string;
  weight: number;
  unit: UnitE;
  price: number;
}

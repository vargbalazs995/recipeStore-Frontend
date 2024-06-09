import {Material, PostMaterial} from "../../material/material.model";

export function materialToPostMaterialMapper(material: Material):PostMaterial{
  return {name: material.name, unit: material.unit, price: material.price, weight: material.weight} as PostMaterial;
}

export function postmaterialToMaterialMapper(postMaterial: PostMaterial):Material{
  return {name: postMaterial.name, unit: postMaterial.unit, price: postMaterial.price, weight:postMaterial.weight} as Material;
}

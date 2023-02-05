import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase {
  id: number;
  sellRent: number;
  name: string;
  propertyType: string;
  bhk: number;
  furnishingType: string;
  price: string;
  builtArea: string;
  carpetArea?: number;
  address: string;
  address2?: string;
  city: string;
  floorNo?: string;
  totalFloors?: string;
  readyToMove: number;
  age?: string;
  mainEntrance?: string;
  security?: number;
  gated?: number;
  maintenance?: number;
  estPossessionOn?: string;
  image?: string;
  description?: string;
}

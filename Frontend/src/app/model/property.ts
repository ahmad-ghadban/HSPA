import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase {
  id: number;
  sellRent: number;
  name: string;
  propertyTypeId: number;
  propertyType: string;
  bhk: number;
  furnishingTypeId: number;
  furnishingType: string;
  price: string;
  builtArea: string;
  carpetArea?: string;
  address: string;
  address2?: string;
  cityId: number;
  city: string;
  floorNo?: string;
  totalFloors?: string;
  readyToMove: boolean;
  age?: string;
  mainEntrance?: string;
  security?: number;
  gated?: number;
  maintenance?: string;
  estPossessionOn?: string;
  image?: string;
  description?: string;
}

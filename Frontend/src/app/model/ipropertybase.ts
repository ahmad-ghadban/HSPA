export interface IPropertyBase {
  id: number;
  sellRent: number;
  name: string;
  propertyType: string;
  furnishingType: string;
  price: string;
  bhk: number;
  builtArea: string;
  city: string;
  readyToMove: boolean;
  image?: string;
  estPossessionOn?: string;
  carpetArea?: string;
  address: string;
  address2?: string;
  floorNo?: string;
  totalFloors?: string;
  mainEntrance?: string;
  description?: string;
}

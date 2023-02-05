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
  readyToMove: number;
  image?: string;
  estPossessionOn?: string;
}

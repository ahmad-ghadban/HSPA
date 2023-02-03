import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:5015/api/city");
  }

  getProperty(id: number) {
    return this.getAllProperties(1).pipe(
      map(propertiesArray => {
        // throw new Error('Some error');
        return propertiesArray.find(p => p.id === id);
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get<Property[]>("http://localhost:5015/api/property/list/" + SellRent.toString());
  }
  addProperty(property: Property) {
    let newProp = [property];

      // Add new property in array if newProp already exists in local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}

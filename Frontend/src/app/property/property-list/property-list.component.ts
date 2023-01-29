import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<IPropertyBase>;
  Today = new Date();
  City = '';
  SearchCity = '';
  SortbyParam = '';
  order = 'asc';

  constructor(private route: ActivatedRoute, private housingService: HousingService) {
   }
  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
        data=>{
          this.properties = data;



          console.log(data)

        }, error => {
          console.log('httperror:');
          console.log(error);
        }
    );
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }

  onOrder() {
    if (this.order === 'asc'){
      this.order = 'desc';
    } else if (this.order === 'desc'){
      this.order = 'asc';
    }
  }
}

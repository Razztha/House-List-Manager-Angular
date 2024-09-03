import { Component, inject } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  housingLocationList: HousingLocation[]=[];
  filteredHousingLocationList: HousingLocation[]=[];
  housingService: HousingService = inject (HousingService)
  
  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocation : HousingLocation[]) => {
      this.housingLocationList = housingLocation; 
      this.filteredHousingLocationList = this.housingLocationList;
    });
  }

  filterResults(text: string){
    if (!text) this.filteredHousingLocationList = this.housingLocationList;

    this.filteredHousingLocationList = this.housingLocationList
    .filter( c => c.city.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }
}

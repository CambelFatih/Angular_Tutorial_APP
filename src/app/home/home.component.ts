import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { ParkList } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    HousingLocationComponent,
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let ParkList of filteredLocationList"
        [ParkList]="ParkList">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  ParkListList: ParkList[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: ParkList[] = [];

  constructor() {
    this.housingService.getAllParkList().then((ParkListList: ParkList[]) => {
      this.ParkListList = ParkListList;
      this.filteredLocationList = ParkListList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.ParkListList;
    }

    this.filteredLocationList = this.ParkListList.filter(
      ParkList => ParkList?.district.toLowerCase().includes(text.toLowerCase())
    );
  }
}

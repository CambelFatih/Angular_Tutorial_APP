import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkList } from '../housinglocation';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <section class="listing">
    
    <h2 class="listing-heading">{{ ParkList.parkName }}</h2>
    <p class="listing-location">{{ ParkList.district}}</p>
    <a [routerLink]="['/details',ParkList.parkID]">Learn More</a>
  </section>
`,
  styleUrls: ['./housing-location.component.scss']
})
export class HousingLocationComponent {
  @Input() ParkList!: ParkList;
}


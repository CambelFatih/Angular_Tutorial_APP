import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { ParkingDetail } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
    <article>
      <section class="listing-description">
<!-- Listing Description -->
      <h2 class="listing-heading">{{ ParkingDetail?.parkName }}</h2>
      <p class="listing-location">{{ ParkingDetail?.district }}, {{ ParkingDetail?.address }}</p>
      <p class="normal">Kapasite:{{ ParkingDetail?.capacity }}, Boş Kapasite: {{ ParkingDetail?.emptyCapacity }}</p>
      <p class="normal">Çalışma saatleri:{{ ParkingDetail?.workHours }}, Park Tipi: {{ ParkingDetail?.parkType }}</p>
      <p class="normal">Ücretsiz Zaman:{{ ParkingDetail?.freeTime }}, Aylık Ücret: {{ ParkingDetail?.monthlyFee }}</p>
      <p class="normal">Fiyat:{{ ParkingDetail?.tariff }}</p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  ParkingDetail: ParkingDetail | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    console.log('Housing Location ID:', housingLocationId);
    this.housingService.getParkListById(housingLocationId).then(ParkingDetail => {
      console.log('Parking Detail1:', ParkingDetail);
      this.ParkingDetail = ParkingDetail;
      console.log('Parking Detail222:', ParkingDetail);
      
    });
  }
}

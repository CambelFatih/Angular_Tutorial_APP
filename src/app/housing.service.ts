import { Injectable } from '@angular/core';
import { ParkList, ParkingDetail } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'https://api.ibb.gov.tr/ispark/Park';
  urldetay = 'https://localhost:7233/api/Parking'

  async getAllParkList(): Promise<ParkList[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }


  async getParkListById(id: number): Promise<ParkingDetail | undefined> {
    const data = await fetch(`${this.urldetay}/${id}`);
    return await data.json() ?? {};
  }
  

}


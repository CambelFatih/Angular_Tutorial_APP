import { Injectable } from '@angular/core';
import { ParkList, ParkingDetail } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'https://api.ibb.gov.tr/ispark/Park';
  urldetay = 'https://api.ibb.gov.tr/ispark/ParkDetay?id='

  async getAllParkList(): Promise<ParkList[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }


  async getParkListById(id: number): Promise<ParkingDetail | undefined> {
    const data = await fetch(`${this.urldetay}${id}`);
    return await data.json() ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}

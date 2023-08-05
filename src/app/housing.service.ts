import { Injectable } from '@angular/core';
import { ParkList, ParkingDetail} from './housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'https://api.ibb.gov.tr/ispark/Park';
  urldetay = 'https://localhost:7233/api/Parking'
  UrlSearch = 'https://localhost:7233/api/Parking/search'

  async getAllParkList(): Promise<ParkList[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }


  async getParkListById(id: number): Promise<ParkingDetail | undefined> {
    const data = await fetch(`${this.urldetay}/${id}`);
    return await data.json() ?? {};
  }

}


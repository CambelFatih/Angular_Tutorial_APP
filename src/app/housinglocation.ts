
export interface ParkList {
  parkID:        number;
  parkName:      string;
  lat:           string;
  lng:           string;
  capacity:      number;
  emptyCapacity: number;
  workHours:     string;
  parkType:      string;
  freeTime:      number;
  district:      string;
  isOpen:        boolean;
}


export interface ParkingDetail {
  locationName:  string;
  parkID:        number;
  parkName:      string;
  lat:           string;
  lng:           string;
  capacity:      number;
  emptyCapacity: number;
  updateDate:    string;
  workHours:     string;
  parkType:      string;
  freeTime:      number;
  monthlyFee:    string;
  tariff:        string;
  district:      string;
  address:       string;
  areaPolygon:   string;
}

/* 
export interface ParkingDetailList{
  parkList: ParkingDetail[];
}

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
export interface ParkingList {
  parkList: ParkList[];
}
export interface ParkinkDetailList {
  parkingDetail: ParkingDetail[];
}

export enum ParkType {
  AçikOtopark = "AÇIK OTOPARK",
  KapaliOtopark = "KAPALI OTOPARK",
  YolÜstü = "YOL ÜSTÜ",
}
*/

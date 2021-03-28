import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInfo } from '../models/carInfo';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44340/api/';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarInfo>>{
    let newPath = this.apiUrl+ "cars/getcarsinfo"
    return this.httpClient.get<ListResponseModel<CarInfo>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarInfo>>{
    let newPath = this.apiUrl+ "cars/getcarsinfobybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarInfo>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarInfo>>{
    let newPath = this.apiUrl+ "cars/getcarsinfobycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarInfo>>(newPath);
  }
}

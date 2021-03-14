import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInfoResponseModel } from '../models/carInfoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44340/api/cars/getcarsinfo';

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarInfoResponseModel>{
    return this.httpClient.get<CarInfoResponseModel>(this.apiUrl);
  }
}

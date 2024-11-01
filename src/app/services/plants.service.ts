import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Plant} from '../model/plant.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  constructor(private httpClient: HttpClient) { }
  public getPlants(): Observable<Plant[]> {
    return this.httpClient.get<Plant[]>(environment.api);
  }
}

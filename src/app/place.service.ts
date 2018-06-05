import {Injectable} from '@angular/core';
import {Place} from './place';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {

  public placesUri = 'http://localhost:3000/matt';
  
  getPlaces() : Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUri);
  }

  constructor(private http: HttpClient) {
  }
}

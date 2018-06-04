import {Injectable} from '@angular/core';
import {Place} from './place';
import {Observable, of} from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  places: Place[] = [
    {id: 1, name: 'Pizza Place', city: 'Toronto'},
    {id: 2, name: 'Burger Place', city: 'Toronto'},
    {id: 3, name: 'Barber', city: 'Markham'},
    {id: 4, name: 'Museum', city: 'Markham'},
    {id: 5, name: 'Park', city: 'Etobicoke'}
  ];

  getPlaces(): Observable<Place[]> {
    return of(this.places);
  }

  public placesUri = 'localhost:3000/places';
  getRemotePlaces() : Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUri);
  }

  constructor(private http: HttpClient) {
  }
}

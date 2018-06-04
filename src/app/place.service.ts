import {Injectable} from '@angular/core';
import {Place} from './place';
import {Observable, of} from 'rxjs';

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

  constructor() {
  }
}

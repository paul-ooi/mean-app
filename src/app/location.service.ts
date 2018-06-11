import { Injectable } from '@angular/core';
import { Geolocation } from './geolocation';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  userGeoLoc : Geolocation = new Geolocation();

  constructor() { }

  getLocation() : Observable<Geolocation> {
    this.userGeoLoc.requestGeoLoc();
    return of (this.userGeoLoc);
  }
}

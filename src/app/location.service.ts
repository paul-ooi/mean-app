import {Injectable} from '@angular/core';
import {Geolocation} from './geolocation';
import {Observable, of, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  userGeoLoc: Observable<Geolocation>;

  constructor() {
  }

  /**
   * REQUEST GEOLOCATION POSITION FROM USER (ASYNCHRONOUS)
   * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
   */
  requestGeoLoc(): Geolocation {
    let location: Geolocation = new Geolocation();
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // this.userGeoLoc = new Geolocation();
          location.lat = position.coords.latitude;
          location.lng = position.coords.longitude;
          location.accuracy = position.coords.accuracy.valueOf();
          console.log(position);
        },
        (error) => {
          console.log(error.code);// CODE IS 1 WHEN USER DENIES PERMISSION
          console.log(error.message);
          console.log(error.PERMISSION_DENIED);
        });
    } else {
      alert('geolocation unavailable');
    }
    // this.userGeoLoc = of(location);
    return location;
  }

  /**
   * REQUEST GEOLOCATION POSITION FROM USER (ASYNCHRONOUS)
   * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
   */
  // trackPosition(): void {
  //   this.wpid = navigator.geolocation.watchPosition(this.requestGeoLoc, () => { alert("no position available") }, this.geo_options);
  // }

  // clearWpid(): void {
  //   navigator.geolocation.clearWatch(this.wpid);
  // }
}

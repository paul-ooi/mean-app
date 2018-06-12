import {Component, OnInit, NgZone, DoCheck} from '@angular/core';
import {CommsService} from '../comms.service';
import {LifecycleHooks} from '@angular/compiler/src/lifecycle_reflector';

import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, DoCheck {
  oldSearchFilter = '';
  searchFilter = '';
  newSearch = false;
  locationChosen = false;
  mapResults: object;

  lat = 43.6532;
  lng = -79.3832;
  zoom = 13;
  maxMarkers = 10;

  constructor(private comms: CommsService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.comms.searchFilter.subscribe(data => this.searchFilter = data);
    // set current position
    // this.setCurrentPosition();
  }

  ngDoCheck() {
    if (this.searchFilter !== this.oldSearchFilter) {
      // places search
      this.mapsAPILoader.load().then(() => {
        let search = new google.maps.places.PlacesService(document.createElement('div'));
        let toronto = new google.maps.LatLng(43.6532, -79.3832);
        let request: object = {
          location: toronto,
          radius: 500,
          type: ['point_of_interest'],
          keyword: this.searchFilter
        };
        search.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            this.mapResults = results;
          }
        });
      });

      this.oldSearchFilter = this.searchFilter;
    }
  }


  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onChooseLocation(event: any) {
    console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
  }

}

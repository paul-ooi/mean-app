import {Component, OnInit, NgZone, ViewChild, ElementRef} from '@angular/core';
import {CommsService} from '../comms.service';

import {} from 'googlemaps';
import {AgmMap} from '@agm/core';
import {MapsAPILoader} from '@agm/core';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  searchFilter = '';
  locationChoosen = false;
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

    // set current position
    //this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let search = new google.maps.places.PlacesService(document.createElement('div'));
      let toronto = new google.maps.LatLng(43.6532, -79.3832);
      let request: object = {
        location: toronto,
        radius: 500,
        type: ['restaurant'],
        keyword: 'pizza'
      };
      search.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          console.log(results);
          this.mapResults = results;
          // for (let r of results) {
          //   console.log(r.geometry.location.lat() + ' | ' + r.geometry.location.lng());
          // }
        }
      });
    });
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
    this.locationChoosen = true;
  }

}

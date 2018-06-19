import {Component, OnInit, NgZone, DoCheck} from '@angular/core';
import {CommsService} from '../comms.service';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';
import {Geolocation} from '../geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, DoCheck {
  searchFilter = '';
  searchLocation: Geolocation;
  loc: object;

  // Map
  lat = 43.6532;
  lng = -79.3832;
  zoom = 13;
  maxMarkers = 10;
  mapResults: object;

  newSearch: boolean;

  constructor(private commsService: CommsService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.commsService.searchFilter.subscribe(data => this.searchFilter = data);
    this.commsService.searchLocation.subscribe(data => this.searchLocation = data);
    this.commsService.newSearch.subscribe(data => this.newSearch = data);
  }

  ngDoCheck() {
    if (this.newSearch) {
      this.loc = new google.maps.LatLng(this.searchLocation.lat, this.searchLocation.lng);
      this.setPlaces();
      this.commsService.toggleSearch(false);
    }
  }

  getPlaces() {
    return new Promise(resolve => {
      this.mapsAPILoader.load().then(() => {
        // let search = new google.maps.places.PlacesService(document.createElement('div'));
        const search = new google.maps.places.PlacesService(document.createElement('div'));
        // const toronto = new google.maps.LatLng(43.6532, -79.3832);
        const request: object = {
          location: this.loc,
          radius: 1500,
          type: ['point_of_interest'],
          keyword: this.searchFilter
        };
        search.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            // console.log(results);
            resolve(results);
          }
        });
      });
    });
  }

  async setPlaces() {
    const response = <object>await this.getPlaces();
    console.log(response);
    this.mapResults = response;
    this.lat = this.searchLocation.lat;
    this.lng = this.searchLocation.lng;
  }

}

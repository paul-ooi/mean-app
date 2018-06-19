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
  oldSearchFilter = '';
  searchFilter = '';
  searchLocation: Geolocation;
  locationChosen = false;
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
    // this.ngZone.run(() => {
    //
    // });
    //console.log(this.newSearch);

    if (this.newSearch) {
      this.lat = this.searchLocation.lat;
      this.lng = this.searchLocation.lng;
      this.loc = new google.maps.LatLng(this.searchLocation.lat, this.searchLocation.lng);

      // places search
      this.mapsAPILoader.load().then(() => {
        // let search = new google.maps.places.PlacesService(document.createElement('div'));
        let search = new google.maps.places.PlacesService(document.createElement('div'));
        let toronto = new google.maps.LatLng(43.6532, -79.3832);
        let request: object = {
          location: this.loc,
          radius: 1500,
          type: ['point_of_interest'],
          keyword: this.searchFilter
        };
        search.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results);
            this.mapResults = results;
          }
        });
      });
      this.commsService.toggleSearch(false);

    }

  }

  // onChooseLocation(event: any) {
  //   // console.log(event);
  //   this.lat = event.coords.lat;
  //   this.lng = event.coords.lng;
  //   this.locationChosen = true;
  // }

  getLocation(position): void {
    console.log(position);
  }

}

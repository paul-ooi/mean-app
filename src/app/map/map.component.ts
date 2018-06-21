import {Component, OnInit, NgZone, DoCheck} from '@angular/core';
import {CommsService} from '../comms.service';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';
import {Geolocation} from '../geolocation';
import {Place} from '../place';
import {forEach} from '@angular/router/src/utils/collection';
import {PlaceService} from '../place.service';

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

  places: Place[] = [];

  constructor(private commsService: CommsService,
              private placeService: PlaceService,
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
    // this.assignPlace(response);

    this.placeService.setGooglePlaces(response);

    // console.log(response[0]);
    // let place = new Place();
    //
    // place.id = response[0].id;
    // place.place_id = response[0].place_id;
    // place.name = response[0].name;
    // place.rating = response[0].rating;
    // place.vicinity = response[0].vicinity;
    // place.types = response[0].types;
    //
    // console.log(place);

    this.mapResults = response;
    this.lat = this.searchLocation.lat;
    this.lng = this.searchLocation.lng;
  }

  // assignPlace(response: object) {
  //   response.forEach((element) => {
  //     // console.log(element);
  //     const place = new Place();
  //
  //     place.id = element.id;
  //     place.place_id = element.place_id;
  //     place.name = element.name;
  //     place.rating = element.rating;
  //     place.vicinity = element.vicinity;
  //     place.types = element.types;
  //
  //     this.places.push(place);
  //   });
  //   console.log(this.places);
  //   console.log(this.places[0]);
  //   console.log(this.places[0].name);
  // }

}

import {Component, OnInit} from '@angular/core';
import {Place} from '../place';
import {PlaceService} from '../place.service';
import {CommsService} from '../comms.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  searchFilter: string;
  maxPlaces = 10;
  places: Place[] = [];

  constructor(private placeService: PlaceService, private comms: CommsService) {
  }

  ngOnInit() {
    this.placeService.getGooglePlaces().subscribe(data => this.places = data);
    this.comms.searchFilter.subscribe(data => this.searchFilter = data);
  }

}

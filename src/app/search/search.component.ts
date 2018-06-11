import {Component, OnInit} from '@angular/core';
import {CommsService} from '../comms.service';
import { MapService } from './user-location/map.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFilter: string;
  userLoc:string;

  constructor(private comms: CommsService, public mapService: MapService) {
  }

  ngOnInit() {
  }

  // Accepts new search on button click
  onSearch() {
    // this.resultsFilter = this.searchFilter;
    this.updateSearch(this.searchFilter);
    // this.geocoding(this.userLoc);
  }

  // Clear search filter
  clearSearch() {
    this.updateSearch('');
  }

  // Function to update 'search' in CommsService
  updateSearch(search: string) {
    this.comms.changeSearch(search);  
  }

  // Accepts new search though Enter key press
  onKeyPress(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.updateSearch(this.searchFilter);
    }
  }

  // Take user input value (address, city, postal code... and turn to lat&long)
  public geocoding(userLoc:string) {
    // pass the current location to MapService.geocoding()
    this.mapService.geocoding(userLoc).then(
      rtn => {
        let location = rtn[0].geometry.location;
        // get lat and long and then assign to the props
        let latlng:string[] = [location.lat(), location.lng()];
        this.comms.changeLocation(latlng);
      }
    );
  }

}

import {Component, OnInit} from '@angular/core';
import {Place} from '../place';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFilter: string;
  resultsFilter: string;
  places: Place[];

  constructor(private placeService: PlaceService) {
  }

  ngOnInit() {
    this.placeService.getPlaces().subscribe(data => this.places = data);
  }

  onSearch() {
    this.resultsFilter = this.searchFilter;
  }

  clearSearch() {
    this.resultsFilter = '';
  }

  doesContain(filter: string, data: string) {
    filter = filter.toUpperCase();
    data = data.toUpperCase();
    if (data.includes(filter)) {
      return true;
    } else {
      return false;
    }
  }

}

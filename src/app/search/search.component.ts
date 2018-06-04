import {Component, OnInit} from '@angular/core';
import {Place} from '../place';
import {PlaceService} from '../place.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  
  private error(error: HttpErrorResponse) {
    console.log(error);
  }

  ngOnInit() {
    this.placeService.getRemotePlaces().subscribe(
      data => this.places = data,
      error => this.error(error));
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

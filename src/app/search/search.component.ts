import {Component, OnInit} from '@angular/core';
import {CommsService} from '../comms.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchFilter: string;

  constructor(private comms: CommsService) {
  }

  ngOnInit() {
  }

  // Accepts new search on button click
  onSearch() {
    // this.resultsFilter = this.searchFilter;
    this.updateSearch(this.searchFilter);
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

}

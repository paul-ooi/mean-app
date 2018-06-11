import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommsService {

  private search = new BehaviorSubject<string>('');
  searchFilter = this.search.asObservable();

  private location = new BehaviorSubject<string[]>([]);
  typedLocation = this.location.asObservable();

  constructor() {
  }

  changeSearch(selection: string) {
    this.search.next(selection);
  }

  // Get latitude and longitude from typed value
  changeLocation(location:string[]){
    console.log(location);
    this.location.next(location);
  }
}

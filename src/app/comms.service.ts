import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommsService {

  private search = new BehaviorSubject<string>('');
  searchFilter = this.search.asObservable();

  constructor() {
  }

  changeSearch(selection: string) {
    this.search.next(selection);
  }

}

import {Injectable} from '@angular/core';
import {Place} from './place';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {

  public placesUri = 'http://localhost:3000/matt';

  private placesBehavior = new BehaviorSubject<Place[]>([]);
  places = this.placesBehavior.asObservable();

  setGooglePlaces(response: object) {
    const placesHold: Place[] = [];
    response.forEach((element) => {
      const place = new Place();
      place.id = element.id;
      place.place_id = element.place_id;
      place.name = element.name;
      place.rating = element.rating;
      place.vicinity = element.vicinity;
      place.types = element.types;
      placesHold.push(place);
    });
    this.placesBehavior.next(placesHold);
  }

  getGooglePlaces(): Observable<Place[]> {
    return this.places;
  }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUri);
  }

  constructor(private http: HttpClient) {
  }
}

import {Component, OnInit} from '@angular/core';
import { CommsService }from '../comms.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 43.6532;
  lng = -79.3832;
  locationChoosen = false;

  

  constructor(private commsService : CommsService) {
  }

  ngOnInit() {
  }
  
  onChooseLocation(event: any) {
    // console.log(event);
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChoosen = true;
  }

  getLocation(position) :void {
    console.log(position);
  }

}

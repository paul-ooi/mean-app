import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { NgForm } from '@angular/forms';
import {CommsService} from '../../comms.service';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})

export class UserLocationComponent{

  // lat: number = 43.653908;
  // lng: number = -79.384293;
  // zoom: number = 15;

  // constructor(
  //   public mapService: MapService,
  //   private comms: CommsService,
  // ) { }

  // public geocoding(userLoc:string) {
  //   let self = this; // UserLocationComponent
    
  //   // to get the user input (current location in string)
  //   console.log(userLoc);
    
  //   // pass the current location to MapService.geocoding()
  //   this.mapService.geocoding(userLoc).then(
  //     rtn => {
  //       let location = rtn[0].geometry.location;
        
  //       // get lat and long and then assign to the props
  //       let latlng:string[] = [location.lat(), location.lng()];

  //       this.comms.changeLocation(latlng);
  //     }
  //   );
  // }
  ngOnInit() {
  }


}

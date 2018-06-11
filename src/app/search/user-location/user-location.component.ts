import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})

export class UserLocationComponent{

  lat: number = 43.653908;
  lng: number = -79.384293;
  zoom: number = 15;

  constructor(
    public mapService: MapService,
  ) { }

  public geocoding(form:NgForm) {
    let self = this; // UserLocationComponent
    
    // to get the user input (current location in string)
    console.log(form.value.current_location);
    
    // pass the current location to MapService.geocoding()
    this.mapService.geocoding(form.value.current_location).then(
      rtn => {
        let location = rtn[0].geometry.location;
        console.log(location);
        
        // get lat and long and then assign to the props
        self.lat = location.lat();
        self.lng = location.lng();
      }
    );
  }

  ngOnInit() {
  }


}

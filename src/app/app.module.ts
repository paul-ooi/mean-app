import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';


import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import { PlacesComponent } from './places/places.component';
import { PlaceComponent } from './places/place/place.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { MapService } from './user-location/map.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlacesComponent,
    PlaceComponent,
    MapComponent,
    HeaderComponent,
    UserLocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6a3O3sopA2_9-4MUQuKpivt9B6qiC8k0'
    }),
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

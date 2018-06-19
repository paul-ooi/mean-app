import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {PlacesComponent} from './places/places.component';
import {PlaceComponent} from './places/place/place.component';
import {MapComponent} from './map/map.component';
import {HeaderComponent} from './header/header.component';
import {GpsComponent} from './search/gps/gps.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlacesComponent,
    PlaceComponent,
    MapComponent,
    HeaderComponent,
    GpsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsk8bH9eVGT9OZL4Timg7matKrTftgEGE',
      libraries: ['places']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

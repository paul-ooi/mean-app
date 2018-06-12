import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';

import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {PlacesComponent} from './places/places.component';
import {PlaceComponent} from './places/place/place.component';
import {MapComponent} from './map/map.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlacesComponent,
    PlaceComponent,
    MapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJE93xbYm6o5ooJVHQbHWqs5-xEQMeOsw',
      libraries: ['places']
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

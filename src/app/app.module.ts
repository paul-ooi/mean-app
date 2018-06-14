import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpModule } from '@angular/http';
import { routing } from './app-routing';


import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {PlacesComponent} from './places/places.component';
import {PlaceComponent} from './places/place/place.component';
import {MapComponent} from './map/map.component';
import {HeaderComponent} from './header/header.component';
import { GpsComponent } from './search/gps/gps.component';
import { UserLocationComponent } from './search/user-location/user-location.component';
import { MapService } from './search/user-location/map.service';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MainComponent } from './main/main.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationService } from './authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlacesComponent,
    PlaceComponent,
    MapComponent,
    HeaderComponent,
    UserLocationComponent,
    GpsComponent,
    AuthenticationComponent,
    MainComponent,
    LogoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6a3O3sopA2_9-4MUQuKpivt9B6qiC8k0'
    }),
    routing,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [
    MapService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare let google: any;

@Injectable()
export class MapService {
    private geocoder: any = null;

    constructor(
        private mapsAPILoader: MapsAPILoader,
    ) { }

    public geocoding(current_location: string): Promise<any> {
        return this.mapsAPILoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();

            return new Promise((resolve, reject) => {
                this.geocoder.geocode({ 'address': current_location }, (result: any, status: any) => {
                    if (status === google.maps.GeocoderStatus.OK) {
                        resolve(result);
                        console.log(result);
                    } else {
                        reject(status);
                    }
                });
            });
        });
    } // end of geocoding function

}
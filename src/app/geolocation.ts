export class Geolocation {
    lat : number;
    lon : number;
    accuracy : number;
    heading : number;
    speed : number;
    wpid : number;
    geo_options : object = {
        enableHighAccuracy: true,
        maximumAge: 15000,
        timeout: 12000
    }

/**
 * REQUEST GEOLOCATION POSITION FROM USER (ASYNCHRONOUS)
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
 */
    requestGeoLoc(): void {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                // this.userGeoLoc = new Geolocation();
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
                this.accuracy = position.coords.accuracy.valueOf();
                console.log(position);
                }, 
                (error)=> {
                    console.log(error.code);// CODE IS 1 WHEN USER DENIES PERMISSION
                    console.log(error.message);
                    console.log(error.PERMISSION_DENIED);
            })
        } else {
            alert("geolocation unavailable");
        }
    }

/**
 * REQUEST GEOLOCATION POSITION FROM USER (ASYNCHRONOUS)
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
 */
    trackPosition() : void {
        this.wpid = navigator.geolocation.watchPosition(this.requestGeoLoc, ()=>{alert("no position available")}, this.geo_options);
    }

    clearWpid() : void {
        navigator.geolocation.clearWatch(this.wpid);
    }
}

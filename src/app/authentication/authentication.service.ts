import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from "./user.model";
import { HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class AuthenticationService{
    constructor(private http:Http){}

    private handleError(error:HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            console.error('An error occurred: ', error.error.message);
        } else {
            console.error(`Server returned code ${error.status}, body was : ${error.error} `);
        }
        return throwError ('Error Occured.');
      }

    // register a new user with POST method
    register(user:User){
        // user is the object passed from the authentication.component
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type':'application/json'});

        // TODO: change the url to send a post request
        return this.http
        .post('http://localhost/serverside_practice/mean_server.php', body, {headers: headers})
        .pipe(map((response:Response)=>response.json()), catchError(this.handleError));
    
    }
}
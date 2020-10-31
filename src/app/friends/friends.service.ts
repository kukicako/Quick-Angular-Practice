import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators'
import { IFriends } from './friends'

@Injectable({
    providedIn: 'root'
})
export class FriendsService {
    private friendUrl = 'https://covid-comprimise.herokuapp.com/company';

    constructor(private http: HttpClient) {}

    getFriends(): Observable<IFriends[]> {
        return this.http.get<IFriends[]>(this.friendUrl)
        .pipe(
            tap(data => console.log('all: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}
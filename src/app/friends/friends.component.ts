import { Component } from '@angular/core';
// import { FriendsService } from './friends.service'
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'p-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
    })

export class FriendsComponent{
    private friendUrl = 'https://covid-comprimise.herokuapp.com/company';
    friends = [];

    constructor(private http: HttpClient) {
        this.http.get(this.friendUrl).toPromise().then(data => {
            console.log(data)

            for (let id in data)
                if (data.hasOwnProperty(id))
                    this.friends.push(data[id])
        })
    }

}

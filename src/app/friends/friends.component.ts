import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service'

@Component({
    selector: 'p-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
    })

export class FriendsComponent implements OnInit{
    friends: FriendsService[] = []
    errorMessage: string
    
    constructor(private FriendsService: FriendsService){

    }

    ngOnInit(): void {
        this.FriendsService.getFriends().subscribe({
            next(friends) {this.friends = friends},
            error(err) {this.errorMessage = err}
        });
    }

}

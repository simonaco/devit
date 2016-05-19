import { Component, OnInit } from '@angular/core';
import { Tweet } from './tweet.model';
import { TweetComponent } from './tweet.component';
import { TweetService } from './tweet.service';
import * as io from 'socket.io-client';
import { ReversePipe } from './reverse.pipe';

@Component({
    moduleId: module.id,
    selector: 'tweets',
    templateUrl: 'tweets.component.html',
    directives: [TweetComponent],
    providers: [TweetService],
    pipes: [ReversePipe] 
})
export class TweetsComponent implements OnInit {
    tweets:Tweet[];
    constructor(public tweetService:TweetService) { 
        this.tweets = [];
    }
    
    findTweets() {
        this.tweetService.getTweet().subscribe(tweets => this.tweets = tweets);
        /*var socket = io("http://localhost:3000");
        socket.emit("tweet-io:start", true);
        socket.on("tweet-io:tweets", function(data:any){
            this.tweets = this.tweets.concat(data);
        }.bind(this));*/
    }

    ngOnInit() { 
        
    }

}
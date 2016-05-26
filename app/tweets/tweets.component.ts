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
    btnDisabled:boolean;
    constructor(public tweetService:TweetService) { 
        this.tweets = [];
        this.btnDisabled = false;
    }
    
    findTweets() {
        this.tweetService.getTweet().subscribe(tweets => this.tweets = tweets);
        this.btnDisabled = true;
    }

    ngOnInit() { 
        
    }

}
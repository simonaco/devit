import { Component, OnInit } from '@angular/core';
import { Tweet } from './tweet.model';
import { DevitTweetComponent } from './tweet.component';
import * as io from 'socket.io-client'
import { ReversePipe } from './reverse.pipe.component';

@Component({
    moduleId: module.id,
    selector:"devit-tweets",
    templateUrl : `tweets.component.html`,
    directives: [DevitTweetComponent],
    pipes: [ReversePipe]  
})
export class DevitTweetsComponent implements OnInit{ 
    tweets:Tweet[];
    constructor(){
        this.tweets = [];
    }
    
    ngOnInit() { 
        var socket = io('http://localhost:3000');
        socket.on('connect', function(){
            console.log('connect')
        });
        socket.emit('tweet-io:start', true);
        socket.on('tweet-io:tweets', function(data:any){
            this.tweets = this.tweets.concat(data);
        }.bind(this));    
    }
}
import { Component } from '@angular/core';
import { Tweet } from './tweet.model';
import { DevitTweetComponent } from './tweet.component';

@Component({
    moduleId: module.id,
    selector:"devit-tweets",
    templateUrl : `tweets.component.html`,
    directives: [DevitTweetComponent]  
})
export class DevitTweetsComponent{
    tweets:Tweet[];
    constructor(){
        this.tweets = [];
    }
}
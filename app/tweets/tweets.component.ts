import { Component } from '@angular/core';
import { Tweet } from './tweet.model';

@Component({
    moduleId: module.id,
    selector:"devit-tweets",
    templateUrl : `tweets.component.html` 
})
export class DevitTweetsComponent{
    tweets:Tweet[];
    constructor(){
        
    }
}
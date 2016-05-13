import { Component, Input } from '@angular/core';
import { Tweet } from './tweet.model';

@Component({
    moduleId: module.id,
    selector:'tweet',
    templateUrl : 'tweet.component.html',
    styleUrls: ['tweet.component.css'] 
})
export class DevitTweetComponent {
    @Input() tweet:Tweet;
}
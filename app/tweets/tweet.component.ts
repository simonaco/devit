import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from './tweet.model';

@Component({
    moduleId: module.id,
    selector: 'tweet',
    templateUrl: 'tweet.component.html',
    styleUrls: ['tweet.component.css']
})
export class TweetComponent implements OnInit {
    @Input() tweet:Tweet;
    constructor() { }

    ngOnInit() { }

}
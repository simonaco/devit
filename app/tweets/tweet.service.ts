import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {

    constructor(public httpService:Http) { }
    
    getTweet(){
        return this.httpService.get('/app/tweets.json').map(
            (res:Response) => res.json()
        )
    }
}
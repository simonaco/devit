import { Component } from '@angular/core';
import { TweetsComponent } from './tweets/tweets.component';

@Component({
    moduleId: module.id,
    selector:"my-app",
    template : `{{title}}
           <tweets></tweets>
    `,
    directives: [TweetsComponent]
})
export class AppComponent {
   title:string;
   constructor(){
       this.title = "Hello Devit conf!!!"
   }
}
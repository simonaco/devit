import { Component } from '@angular/core';
import { DevitTweetsComponent } from './tweets/tweets.component';
@Component({
    moduleId: module.id,
    selector:"my-app",
    template : `
        <h1>{{title}}</h1>
        <devit-tweets></devit-tweets>
    `,
    directives: [DevitTweetsComponent] 
})
export /**
 * AppComponent
 */
class AppComponent {
    title:string;
    constructor() {
        this.title = "Hello Devit!!"
    }
}
import { Component } from '@angular/core';

@Component({
    selector:"my-app",
    template : '{{title}}' 
})
export /**
 * AppComponent
 */
class AppComponent {
    title:string;
    constructor() {
        this.title = "Hello Thessaloniki!!"
    }
}
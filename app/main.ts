import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector:"my-app",
    template:"{{title}}"
})

export /**
 * AppComponent
 */
class AppComponent {
    title:string;
    constructor() {
        this.title = "Hello Thessaloniki!"
    }
}

bootstrap(AppComponent)


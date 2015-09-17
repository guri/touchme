/// <reference src="typings/tsd.d.ts">

import {Component, View, bootstrap} from "angular2/angular2";
import {FORM_DIRECTIVES} from 'angular2/forms'

@Component({
    selector: "male"
})
@View({
    directives: [FORM_DIRECTIVES],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template:`
        <div>Welcome to the <button (click)="onButtonClick(input.value)">{{name}}</button></div>
        <input #input [(ng-model)]="name">

        <img src="../tmp/malebody.jpg" />
        <svg width="100" height="100">
             <circle class="p1" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />
             <circle class="p2" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />
             <circle class="p3" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />
             <circle class="p4" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />
             <circle class="p5" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />
             <circle class="p6" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />
             <circle class="p7" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />
             <circle class="p1" cx="100" cy="100" r="10" stroke="green" stroke-width="4" fill="yellow" />

        </svg>



    `
})
export default class Male {
    name:string = "ng-hackathon";

    onButtonClick(value){
        alert(value);
    }
} 
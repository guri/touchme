/// <reference src="typings/tsd.d.ts">

import {Component, View, bootstrap} from "angular2/angular2";
import {FORM_DIRECTIVES} from 'angular2/forms'

@Component({
    selector: "female"
})
@View({
    directives: [FORM_DIRECTIVES],
    //I could've just onButtonClick(name), but wanted to show #input syntax
    template:`
        <div>Welcome to the <button (click)="onButtonClick(input.value)">{{name}}</button></div>
        <input #input [(ng-model)]="name">
    `
})
export default class Female {
    name:string = "ng-hackathon";

    onButtonClick(value){
        alert(value);
    }
}
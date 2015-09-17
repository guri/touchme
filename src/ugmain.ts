/// <reference src="typings/tsd.d.ts">

import {CORE_DIRECTIVES, Component, View, bootstrap} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet} from "angular2/router";
import {bind, Injectable} from "angular2/di";


import Male from "./ugmale";
import Female from "./ugfemale";

@RouteConfig([
    {path: '/', as: "male", component:Male},
    {path: '/male', as: "male", component:Male},
    {path: '/female', as: "female", component:Female},
])
@Component({
    selector: "app"
})
@View({
    directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink],
    template: `
        <nav>
            <a [router-link]="['/male']">Male</a>
            <a [router-link]="['/female']">Female</a>
        </nav>
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
class App {}

bootstrap(App, [
    HTTP_BINDINGS,
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log(`Bootstrap success`),
        error => console.log(error)
);

import { Component, Input } from '@angular/core';

@Component({
    selector:'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.css']
})


export class NavBarComponent{
    @Input()
    title:string;
    constructor(){}
}

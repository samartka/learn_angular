import { Component, Input } from '@angular/core';

@Component({
    selector:'app-categorymenu',
    templateUrl: './categorymenu.component.html',
    styleUrls:['./categorymenu.component.css']
})


export class CategoryMenuComponent{
    @Input()
    title:string;
    categoryName = ["เสื้อผ้า","Electroniics","Mobile","Computer"]
    constructor(){}
}

import { Component, Input } from '@angular/core';

@Component({
    selector:'app-counting',
    templateUrl: './counting.component.html',
    styleUrls:['./counting.component.css']
})


export class CountingComponent{
    @Input()
    count=0;
    isShow = true;
    items=[1,2,3,4,5,6];
    constructor(){}
    countNumber(){
        this.count = this.count + 1
    }
}

import { Component, Input } from '@angular/core';

@Component({
    selector:'app-topbanner',
    templateUrl: './topbanner.component.html',
    styleUrls:['./topbanner.component.css']
})


export class TopBannerComponent{
    @Input()
    title:string;
    topBanner = ["Apple","Samsung"]
    constructor(){}
}

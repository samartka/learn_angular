import { Component, OnInit , Input } from '@angular/core';
import {Task} from '../task'

@Component({
    selector:'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls:['./todolist.component.css']
})


export class ToDoListComponent implements OnInit{
    @Input()    tasks:Task[];

    addtask:string;
    adddescription:string;

    constructor(){
        this.tasks =[];
    }

    add2tasks(){
        if (this.addtask.length  != 0){
            this.tasks.push({name:this.addtask,description:this.adddescription})
            this.addtask = "";
            this.adddescription="";
        } else {
            alert("กรุณาระบุ task")
        }
    }
    removetask(i){
        this.tasks.splice(i,1)
    }
    ngOnInit() {}
}


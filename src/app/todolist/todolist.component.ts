import { Component, OnInit , Input ,ViewChild,ViewChildren,QueryList, Output} from '@angular/core';
import {Task} from '../task'
import{TaskComponent} from '../task/task.component'

@Component({
    selector:'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls:['./todolist.component.css']
})


export class ToDoListComponent implements OnInit{
    @Input()    tasks:Task[];
    @ViewChildren(TaskComponent) taskItems: QueryList<TaskComponent>;

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



    selectedTask(taskComponent:TaskComponent){


        this.taskItems.forEach(p=>{
            p.isSelected = false;
        });
        taskComponent.isSelected = true;


    }


}


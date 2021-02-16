import { Component, Input } from '@angular/core';

@Component({
    selector:'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls:['./todolist.component.css']
})


export class ToDoListComponent{
    @Input()
    task=""
    tasks=[]
    
    constructor(){}
    add2tasks(){
        if (this.task.length != 0){
            this.tasks.push(this.task)
            this.task=""
        } else {
            alert("กรุณาระบุ task")
        }
    }
    removetask(i){
        this.tasks.splice(i,1)
    }

}


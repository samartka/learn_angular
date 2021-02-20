import { Component, OnInit , Input,EventEmitter, Output } from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input()  task:Task;
  @Input()  taskindex:number;

  @Output() OnRemovetask: EventEmitter<number>=new EventEmitter();
  @Output() OnSelected: EventEmitter<TaskComponent>=new EventEmitter();

  isSelected:boolean;
  taskName:string;
  taskDesc:string;
  constructor() { }

  ngOnInit() {
    this.taskName = this.task.name;
    this.taskDesc = this.task.description;
  }
  
  removetask(){
    this.OnRemovetask.emit(this.taskindex);
    // this.tasks.splice(i,1)
  }

  select(){
    this.OnSelected.emit(this);
  }


}

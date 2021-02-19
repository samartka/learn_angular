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

  constructor() { }

  ngOnInit() {
  }
  
  removetask(){
    this.OnRemovetask.emit(this.taskindex);
    // this.tasks.splice(i,1)
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {ToDoListComponent} from './todolist/todolist.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('todoList', {static:true})
  todoList:ToDoListComponent;

  ngOnInit() :void {}
  
  constructor() {}  
}

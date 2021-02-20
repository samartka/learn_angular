import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../task'

@Component({
  selector: 'app-taskinfo',
  templateUrl: './taskinfo.component.html',
  styleUrls: ['./taskinfo.component.css']
})
export class TaskinfoComponent implements OnInit {
  @Input() showtaskname:string;
  @Input() showtaskdesc:string;

  constructor() {

   }

  ngOnInit(): void {


  }

}

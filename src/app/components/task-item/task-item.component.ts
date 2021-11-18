import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../Models/models";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  // Here we are taking the value of an individual task
  @Input() task!: Task;

  // this is an imported icon from the angular fontawesome library
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}

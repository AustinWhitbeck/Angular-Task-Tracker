import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Models/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // importing the tasks from the other file to store as an object
  tasks: Task[] = [];


  // in the constructor, you need to pass a service as an argument.
  // once passed (with type of the service (where it says export (like a component)).
  // then you can access it using this. notation.
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // the getTasks method is defined in the task services Service.
    // we are running it on this instance of taskService
    // we are making the value of tasks on this component equal to the return value of
    // this instance of taskService by using the mthod getTasks.
    // In this case, it is just the mock-tasks that we hard coded.
    this.tasks = this.taskService.getTasks();
  }

}

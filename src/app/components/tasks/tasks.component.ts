import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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

    // this.tasks = this.taskService.getTasks();

    //  Example of using it as an Observable instead (similar to a promise)
    this.taskService.getTasks().subscribe(( tasks ) => this.tasks = tasks)
  }

  addTask(task: Task){
    console.log(task);
    this.taskService.addTaskApi(task).subscribe((task) => (this.tasks.push(task)))
  }

  deleteTask(task: Task) {
    // this service we are using, which is the task api.
    // call the function deleteTask which is set up in the task.service.ts
    // subscribe to it ( set up a promise)
    // create a new set of tasks array that is only the one that matches the ID using a filter method
    // delete that task that matches


    /// TUTORIAL ATTEMPT: WORKING ///
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.updateTaskReminder(task).subscribe();
  }

  

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Models/models';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // getTasks(): Task[] {
  //   return TASKS
  // }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

}

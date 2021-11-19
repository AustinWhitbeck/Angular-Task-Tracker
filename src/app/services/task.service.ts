import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//  This is what is going to create the CRUD operations. In React we are using Axios, this is native to Angular.
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Models/models';
// import { TASKS } from '../mock-tasks';


const httpOptions = {
  headers: new HttpHeaders({
    'Content--Type': 'application/jason'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // declare the 
  private apiUrl = 'http://localhost:5000/tasks';


  // pas the HttpClient as an argument so it's useable (like a Prop)
  constructor(private http:HttpClient) { }

    // getTasks(): Task[] {
    //   return TASKS
    // }

    /// ** This is how to do so without an API and just getting it from another component ** //

    // getTasks(): Observable<Task[]> {
    //   const tasks = of(TASKS);
    //   return tasks;
    // }


    /// ** this is how to do it with an API ** ////
    getTasks(): Observable<Task[]> {
      return this.http.get<Task[]>(this.apiUrl)
    }

    // select the id 
    deleteTask(task: Task): Observable<Task> {
      const url = `${this.apiUrl}/${task.id}`;

      // this reads as follows
      // on this component, delete this thing which is of type Task using this url.
      // this url is the api + the task id which looks like this
      // http://localhost:5000/tasks/id
      return this.http.delete<Task>(url);
    }

    addTaskApi(task: Task): Observable<Task> {
      const url = `${this.apiUrl}/${task.id}`;
      return this.http.post<Task>(this.apiUrl, task, httpOptions);
    }

    updateTaskReminder(task: Task): Observable<Task> {
      const url = `${this.apiUrl}/${task.id}`;
      return this.http.put<Task>(url, task, httpOptions)
    } 

}

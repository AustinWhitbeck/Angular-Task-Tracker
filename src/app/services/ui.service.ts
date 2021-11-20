import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  // use this to show if it's been clicked or not. If false, then keep it close, if true the nshow the add form.
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    // console.log("123");
    this.showAddTask = !this.showAddTask;

    // the 'next' method, is used
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}

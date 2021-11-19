import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Models/models';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;

  //  these are the properties for the input values. 
  // this is functioning as the State for the values, changing as it changes.

  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert('Please add at Task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // @todo - emit event. This emits here, but then handled on the parent component
    this.onAddTask.emit(newTask);



    // Reset form to default values after submission to have it blank for new task

    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}

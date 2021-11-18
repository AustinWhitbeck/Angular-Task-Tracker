import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // Examples of Input. 
  // This shows value when interpolated on the component.
  @Input() text!: string;
  @Input() color!: string;

  // Examples of Output
  // how to get logic to pass in through an onClick as props (sort of)
  @Output() btnClick = new EventEmitter();


  constructor() {
    

   }

  ngOnInit(): void {
  }

  // this onClick function is just saying to run or 'emit'
  // it will be defined by what's passed in by 'props'
  // for example: the onClick will be determined by the logic in the
  // header.component.ts
  onClick() {
    this.btnClick.emit();
  }

}

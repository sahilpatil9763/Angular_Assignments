import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {
  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
 
  // Action listener for button
  public SendEvent()
  {
    // Send the event to parent
    this.MyEvent.emit('Message from child');
  }

  constructor() { }

  ngOnInit() {
  }
}

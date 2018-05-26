import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() event = new EventEmitter();

  emitUsername(userName) {
    this.event.emit(userName);
  }

  constructor() { }

}

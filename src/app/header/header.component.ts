import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerNewTitle = 'Welcome aboard to header!!!';
  changedHeader = 'This is clicked from header component!! :)';
  @Input() headerNav: string;
  @Output() clickedHead = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  changeTitles() {
    this.clickedHead.emit(this.changedHeader);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerNav: string;
  footerNewTitle = 'Welcome aboard to footer !!!';
  clickedFooter = 'This is footer component !:)';
  @Output() clicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendClickedComp() {
    this.clicked.emit(this.clickedFooter);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ChildToParentComponent } from '../child-to-parent/child-to-parent.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public headerTitle = `Challenge5 Header`;
  public footerTitle = `Challenge5 Footer`;
  public clickedCompo;
  isCheckedChild: boolean;
  @ViewChild(HeaderComponent, { static: false }) headerName;
  @ViewChild(FooterComponent, { static: false }) footerName;
  @ViewChild(ChildToParentComponent, { static: false }) isChildChecked;
  constructor() { }

  ngOnInit() {
  }
  changeTitles() {
    this.headerTitle = this.headerName.headerNewTitle;
    this.footerTitle = this.footerName.footerNewTitle;
  }
  toggleVisibility() {
    this.isChildChecked.isClickedStatus = ! this.isChildChecked.isClickedStatus;
    this.isCheckedChild = this.isChildChecked.isClickedStatus;
  }
  retrieveClickedCompo($element) {
    this.clickedCompo = $element;
  }

}

import { Component } from '@angular/core';
import { LocalStorageEnums } from './localEnums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  // isUserLogged = localStorage.setItem(LocalStorageEnums.LOGGEDUSER, {});
}

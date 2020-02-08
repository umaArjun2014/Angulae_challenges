import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableViewComponent } from './table-view/table-view.component';
import { DivideByPipePipe } from './divide-by-pipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableViewComponent,
    DivideByPipePipe,
    ParentComponent,
    HeaderComponent,
    FooterComponent,
    ChildToParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

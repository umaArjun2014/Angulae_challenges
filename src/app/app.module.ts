import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotPswComponent } from './forgot-psw/forgot-psw.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { HostPropDirective } from './host-prop.directive';
import { ProfileComponent } from './profile/profile.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpReqComponent } from './http-req/http-req.component';
import {MockHttpCalIInterceptor } from '../app/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPswComponent,
    RegistrationComponent,
    DashboardComponent,
    PageNotFoundComponent,
    UserInfoComponent,
    HostPropDirective,
    ProfileComponent,
    TopbarComponent,
    HttpReqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpCalIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

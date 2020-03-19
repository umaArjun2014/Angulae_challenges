import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MaterialModule } from './modules/material/material.module';
import { LoginModuleModule } from './modules/login-module/login-module.module';
import { PNFModule } from './modules/pnf/pnf.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';

import { ApiCallsModule } from './modules/api-calls/api-calls.module';
import {MockHttpCalIInterceptor } from '../app/http.interceptor';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PNFModule,
    LoginModuleModule,
    AppRoutingModule,
    MaterialModule,
    MatTableModule,
    FormsModule,
    MatPaginatorModule,
    ApiCallsModule


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

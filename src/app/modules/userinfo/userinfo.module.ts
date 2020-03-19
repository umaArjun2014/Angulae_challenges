import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from '../../components/user-info/user-info.component';


@NgModule({
  declarations: [
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    UserInfoRoutingModule
  ]
})
export class UserinfoModule { }

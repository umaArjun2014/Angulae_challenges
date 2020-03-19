import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    MaterialModule
  ]
})
export class PreDefineModulesModule { }

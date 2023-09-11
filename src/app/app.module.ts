import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterdepartementComponent } from './ajouterdepartement/ajouterdepartement.component';
import { EmployeeComponent } from './employee/employee.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDepartementComponent } from './list-departement/list-departement.component';



@NgModule({
  declarations: [
    AppComponent,
    AjouterdepartementComponent,
    EmployeeComponent,
    ListDepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

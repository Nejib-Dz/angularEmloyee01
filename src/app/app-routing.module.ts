import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjouterdepartementComponent } from './ajouterdepartement/ajouterdepartement.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';

const routes: Routes = [
  {path: '', component: ListDepartementComponent},
  {path: 'ajouterdepartement', component:AjouterdepartementComponent},
  {path: 'employee', component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

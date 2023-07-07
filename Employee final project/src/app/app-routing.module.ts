import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SalariesComponent } from './salaries/salaries.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { ManagersComponent } from './managers/managers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path:'',redirectTo:'employees', pathMatch:'full'},
  {path:"employees",component:EmployeesComponent},
  {path:"departments",component:DepartmentsComponent},
  {path:"salaries",component:SalariesComponent},
  {path:"tasks",component:TasksComponent},
  {path:"work in progress",component:WorkInProgressComponent},
  {path:"managers",component:ManagersComponent},
  {path:'Invoices',component:InvoicesComponent},
  {path:"pricing",component:PricingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

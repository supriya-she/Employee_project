import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SalariesComponent } from './salaries/salaries.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { ManagersComponent } from './managers/managers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { InvoicesComponent } from './invoices/invoices.component';
import { PricingComponent } from './pricing/pricing.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    EmployeesComponent,
    DepartmentsComponent,
    SalariesComponent,
    TasksComponent,
    WorkInProgressComponent,
    ManagersComponent,
    InvoicesComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
   // TableModule,
    HttpClientModule,
   ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

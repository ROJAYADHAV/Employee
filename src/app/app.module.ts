import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SharedServiceService } from './shared-service.service';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes, RouterModule } from '@angular/router';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService,MessageService} from 'primeng/api';
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes =[{path:"List",component:EmployeeListComponent},
{path:"create",component:CreateEmployeeComponent}]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ConfirmPopupModule,
    ToastModule,
    ButtonModule,
    BrowserAnimationsModule,MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot()
  ],
  providers: [SharedServiceService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

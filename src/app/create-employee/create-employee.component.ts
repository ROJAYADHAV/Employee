import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  showSpinner=false;
  firstName:any;
age:any;
sapID:any;
email:any;
location:any;
contact:any;

  constructor(public http: SharedServiceService,private router:Router) { }

  
  AddData(){
   
let additem={firstName:this.firstName,
  age:this.age,
  sapID:this.sapID,
email:this.email,
location:this.location,
contact:this.contact
};
    this.http.addNewEmployeeData(additem).subscribe((result:any)=>{
      this.clear();
      this.load();
    }
  )
}
clear(){
  this.firstName="";
this.age="";
this.sapID="";
this.email="";
this.location="";
this.contact="";
}

load(){
  this.showSpinner=true;
  setTimeout(()=>{
    this.showSpinner=false;
    this.router.navigate(['/List']);
  },2000)
}

}

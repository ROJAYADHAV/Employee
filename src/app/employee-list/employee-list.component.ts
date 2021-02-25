import { Component, OnInit,TemplateRef  } from '@angular/core';
import {SharedServiceService} from '../../app/shared-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmationService,MessageService, PrimeNGConfig } from 'primeng/api';
 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']

})
export class EmployeeListComponent implements OnInit {

  userArray:any=null;
  modalRef: BsModalRef;
  constructor(public http: SharedServiceService,private modalService: BsModalService, 
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig) {
  
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.getEmployeeData().subscribe((response:any)=>{
    this.userArray =response;
    console.log(response);
    })
  }

  deleteData(delitem:any){
    this.http.deleteEmployeeData(delitem).subscribe((response:any)=>{
      this.getData();
    }
  )
  }
  editData(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template);

  }

  UpdateData(userData){
    console.log(userData.id);
    this.http.updateNewEmployeeData(userData).subscribe((res:any)=>{
      this.getData();
  }
)
}


confirm(event: Event,id:any) {
  this.confirmationService.confirm({
    target: event.target,
    message: "Are you sure that you want to Delete?",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      this.messageService.add({
        severity: "success",
        summary: "Confirmed",
        detail: "You have deleted the row"
      });
      this.deleteData(id);
    },
    reject: () => {
      this.messageService.add({
        severity: "success",
        detail: "ok"
      });
    }
  });
  this.primengConfig.ripple = true;
}




}

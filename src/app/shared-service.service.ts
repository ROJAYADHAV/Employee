import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http:HttpClient) { 
 
  }

  getEmployeeData(){
    return this.http.get("http://localhost:3000/users");
  }

  deleteEmployeeData(delValue:any){
    return this.http.delete(`http://localhost:3000/users/${delValue}`);
  }
  
  addNewEmployeeData(addData:any){
    return this.http.post(`http://localhost:3000/users`,addData);
  }
  updateNewEmployeeData(userData:any){
    return this.http.put(`http://localhost:3000/users/${userData.id}`,userData);
  }
}

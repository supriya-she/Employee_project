import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly url = "https://localhost:3000/";
  constructor(private http:HttpClient) { }
AddUpdateEmployee(employee:any):Observable<any>{
  debugger;
  return this.http.post(this.url+"employees",employee)
}

//  addData(dt:any){
//    return this.http.post("http://localhost:3000/Employee",dt)

// getData(){
//   return this.http.get("http://localhost:3000/Employee");
//  }

}
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  public alldata:any=[];
  public showflag:boolean=false;

  public fn:any=['',[Validators.required]];
  public id:any="";
  public count:number=1;
  signup(sellerSignup:any){
    
    console.log(sellerSignup.value)
    sellerSignup.value.id=this.count;
    this.alldata.push(sellerSignup.value)
    if(this.alldata.length > 0){
      this.showflag=true;
     }
     this.count++;

      }

      ondelete(data:any){
        console.log(data.data)
        this.id=data.id;
        this.alldata.forEach((element:any)=>{
          if(element.id==data.id){
            this.alldata.splice(this.alldata.indexOf(element),1)
            
          }
        })
      }

      // onDelete(alldata:any){
      // this.id = alldata.id;
      // this.alldata.forEach((element:any)=>{
      //   if(element.id ==alldata.id){
      //     this.alldata.splice(this.alldata.indexOf(element),1)
      //   }
      // })
      }
      // onDelete(data:any){
      //   this.id = data.id;
      //   this.alldata.forEach((element:any)=>{
      //    if(element.id ==data.id){
      //      this.alldata.splice(this.alldata.indexOf(element),1)
      //    }
      //   })
      //    } 
      


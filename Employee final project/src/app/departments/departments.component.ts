import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  public cources: any = ["engineering", "MCA", "btech agri","MCS","MSC"];

  public alldata :any= [];
  public showFlag:boolean=false;
  
 public fn:any="";
 public ln:any="";
 public em:any="";
 public cor:any="";
 public gen:any="";
 public ps:any="";
 public cps:any="";
  
 public idd:any;
 public count:number = 1;

  onSubmitData(data:any){
  console.log("this is template driven form");
  console.log(data);
  
  data.value.id = this.count;
  this.alldata.push(data.value);
  if(this.alldata.length > 0){
    this.showFlag = true;
  }
  this.count++;
  

  console.log(this.alldata);
  }
  onDel(data:any){
    console.log("data");
    console.log(this.alldata);
    this.idd = data.id;
  }
  onUpdate(dt1:any){
    console.log(dt1);
    this.fn = dt1.fname;
    this.ln = dt1.lname;
    this.em = dt1.eml;
    this.cor = dt1.Cource;
    this.gen = dt1.gender;
    this.ps = dt1.Pass;
    this.cps = dt1.Cpass;
  }

  updateData(dt:any){
    console.log(dt);
  }
}

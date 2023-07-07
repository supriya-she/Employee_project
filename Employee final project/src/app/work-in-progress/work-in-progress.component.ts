import { Component } from '@angular/core';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent {
  public cources:any =["Engineering","MCA","BCA","MCS","MSC","Btech agri"];
  public allData:any=[];
  public showflag:boolean=false;

  public fn:any="";
  public ln:any="";
  public eml:any="";
  public cor:any="";
  public gen:any="";
  public ps:any="";
  public cps:any="";
  public idd:any;
  public count:number=1;
  


  onSubmitData(formData:any){

    //console.log(formData);
    //add the unique id to every record
    if(formData.value.id ==undefined){
      formData.value.id = this.count;
      this.allData.push(formData.value);
      if(this.allData.length > 0){
        this.showflag = true;
      }
      this.count++;
    }else{
      //this code is for to update the record
      console.log(formData.value);
    }

    console.log(this.allData)
    this.allData.forEach((element:any)=>{
    if(formData.value.id ==element.id){
      console.log(element);
      //element = formData.value;
      element.fname=formData.value.fname;
      element.lname=formData.value.lname;
      element.eml=formData.value.eml;
      element.Cource=formData.value.Cource;
      element.Pass=formData.value.Pass;
      element.CPass=formData.value.CPass;
    }
    });
    console.log(this.allData);
   
    }

    onDeleteData(dt:any){
      console.log(dt);
      console.log(this.allData);
      this.allData.forEach((element:any,index:any)=>{
        if(element.id ==dt.id){
          this.allData.splice(index,1);
        }
      })
        
      }
      onUpdateData(dt:any){
        console.log(dt);
        this.idd=dt.id;
        this.fn = dt.fname;
        this.ln = dt.lname;
        this.eml = dt.email;
        this.cor = dt.cource;
        this.gen = dt.gender;
        this.ps = dt.pass;
        this.cps = dt.cpass;
        //update the specific record from array of object based on unique id
      }
      onupdate(){

      }
      reset(){

      }
}

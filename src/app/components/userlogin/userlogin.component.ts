import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


  userobj ={
    name:null,
    job:null,
  }

  constructor(private submitapi:HttpClient,private userlgrouter:Router) { }

  ngOnInit(): void {
  }

  submit(){
    
    if(this.userobj != null&&this.userobj.job!=null&&this.userobj.name!=null){
      
      this.submitapi.post("https://reqres.in/api/users",this.userobj).subscribe((out:any)=>{
      console.log(out)})
      alert("filled form successfully, press OK to submit")
      this.userlgrouter.navigate(['/admin']);
      
      
    }
     else {
      alert("please fill the blank inputs");
      
     }
     
  }

}

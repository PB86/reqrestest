import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'first_name','last_name','avatar'];
  dataSource:any;
  constructor(private api:HttpClient) { }
  userdata:any  
  ngOnInit(): void {
    this.getusers();
  }

  getusers(){
    
    this.api.get("https://reqres.in/api/users").subscribe((out:any)=>{
      console.log(out);
      this.dataSource = out.data;
    })

  }
}

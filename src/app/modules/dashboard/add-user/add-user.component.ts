import { Component, OnInit } from '@angular/core';

import{RootserviceService}from './../../../rootservice.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private ootserviceService:RootserviceService) { }

  ngOnInit(): void {
  }
callingby(){

this.ootserviceService.calledservice().subscribe(ls=>{
console.log(ls);

})}
}

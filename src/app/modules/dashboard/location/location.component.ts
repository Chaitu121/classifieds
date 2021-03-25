import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {RootserviceService}from './../../../rootservice.service'
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  userForm: FormGroup;
datas:any=[];
  constructor(private fb: FormBuilder,private Router:Router,private authervice:RootserviceService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required ]],
      address: ['', [Validators.required ]],
      status: ['', [Validators.required ]],
      createdby: ['', [Validators.required ]],
      lat: ['', [Validators.required ]],
      lng: ['', [Validators.required ]],
      radius: ['', [Validators.required , Validators.pattern('[0-9]{1,3}')]]
     
    });
   this.initial();
   
   }
initial(){
  this.authervice.locationList().pipe(first()).subscribe((data)=>{
    this.datas=data;
      console.log(this.datas);
      
    });
}
  
 
  

    ngOnInit() {
    }
    get name() {
      return this.userForm.get('name');
    }
  
    get status() {
      return this.userForm.get('status');
    }

    get createdby() {
      return this.userForm.get('createdby');
    }
  
    get lat() {
      return this.userForm.get('lat');
    }

    get lng() {
      return this.userForm.get('lng');
    }


    get address() {
      return this.userForm.get('address');
    }
    get radius() {
      return this.userForm.get('radius');
    }
  
    // get confirmPassword() {
    //   return this.userForm.get('passwordGroup.confirmPassword');
    // }
  
    // get hobbies(): FormArray {
    //   return this.userForm.get('hobbies') as FormArray;
    // }
  
    onSubmit() {
      console.log(this.userForm.valid);
      console.log(this.userForm.value);
     if(this.userForm.valid){

      console.log(this.userForm.value);

      this.authervice.locationSave(this.userForm.value).pipe(first()).subscribe((datasy)=>{
        this.initial();
          console.log(datasy);
          
        });
      //this.userForm.reset();
    }}
   
}

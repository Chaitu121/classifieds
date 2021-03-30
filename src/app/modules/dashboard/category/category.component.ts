import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {RootserviceService}from './../../../rootservice.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  userForm: FormGroup;
datas:any=[];
  constructor(private fb: FormBuilder,private Router:Router,private authervice:RootserviceService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required ]],
      status: ['', [Validators.required ]]
     
    });
   this.initial();
   
   }
initial(){
  this.authervice.categoryList().pipe(first()).subscribe((data)=>{
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

      this.authervice.categorySave(this.userForm.value).pipe(first()).subscribe((datasy)=>{
        this.initial();
          console.log(datasy);
          
        });
      //this.userForm.reset();
    }}
   
}
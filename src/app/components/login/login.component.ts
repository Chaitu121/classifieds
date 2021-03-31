import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,FormControl,  Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {RootserviceService}from './../../rootservice.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

    bps=9;

  let ball=6;
constructor(private Router:Router,private authervice:RootserviceService){
  this.loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
}
ngOnInit(){}

showPassword = false;
onSubmit() {
  if(this.loginForm.valid) {
    
    
      this.authervice.login(this.loginForm.value).pipe(first()).subscribe((res)=>{
  
        console.log(res);
        this.Router.navigate(['/dashboard'])
      });
    
  }
}
_v() {
  return this.loginForm.value;
}

}

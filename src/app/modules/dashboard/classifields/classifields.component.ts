import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {Subject} from'rxjs';
import {RootserviceService}from './../../../rootservice.service'
@Component({
  selector: 'app-classifields',
  templateUrl: './classifields.component.html',
  styleUrls: ['./classifields.component.css']
})
export class ClassifieldsComponent implements OnInit {
  dtOptions: DataTables.Settings = {}; 
  dtTrigger: Subject<any> = new Subject<any>();
  userForm: FormGroup;
  userFile:any=File;
datas:any=[];
  constructor(private fb: FormBuilder,private Router:Router,private authervice:RootserviceService) {
    this.userForm = this.fb.group({
      banner: ['', [Validators.required ]],
      description: ['', [Validators.required ]],
      picByte: ['', [Validators.required ]],
      title: ['', [Validators.required ]],
      fromdate: ['', [Validators.required ]],
      todate: ['', [Validators.required ]]
     
    });
   this.initial();
   
   }
initial(){
 
}

 
  

    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
       
   };
   this.authervice.classifiedsList().pipe(first()).subscribe((data)=>{
    this.datas=data;
      console.log(this.datas);

      for(let c=0;c<this.datas.length;c++){
        let blob = new Blob([data[c]['picByte']], {type: 'image/png'});
        console.log(blob);
        this.datas[c].imageName= URL.createObjectURL(blob);
       // console.log(URL.createObjectURL(blob))
       
      }
      console.log(this.datas);
      this.dtTrigger.next();
    });
    }
    get name() {
      return this.userForm.get('name');
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

      var chs=this.userForm.value;
      delete chs.picByte;
      console.log(chs)
const formdata=new FormData();
formdata.append('picByte', this.userFile);
formdata.append('user', JSON.stringify(chs));

//formdata.append('banner', {"banner":this.userForm.value.banner});
// formdata.append('description', this.userForm.get('description')?.value);
// formdata.append('title', this.userForm.get('title')?.value);
// formdata.append('fromdate', this.userForm.get('fromdate')?.value);
// formdata.append('todate', this.userForm.get('todate')?.value);
      this.authervice.classifiedsSave(formdata).pipe(first()).subscribe((datasy)=>{
        this.initial();
          console.log(datasy);
          
        });
      //this.userForm.reset();
    }}

    onSelectFile(event:any){
      const file= event.target.files[0];
      console.log(file)
      this.userFile=file;
      console.log(this.userFile)
    }
   
}
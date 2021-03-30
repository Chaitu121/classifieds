import { Injectable } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { map } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import{environment}from'./../environments/environment'
import { Router } from '@angular/router';
import { User } from './models/user';
@Injectable({
  providedIn: 'root'
})
export class RootserviceService {


  private loggedInStatus=JSON.parse(localStorage.getItem('currentUser') || ('false'));
  private currentUserSubject:BehaviorSubject<User>;
  public currentUser:Observable<User>;
  constructor(private http:HttpClient,private Router:Router) {
  
    this.currentUserSubject= new BehaviorSubject<User>({'authenticate':'authenticate'});
this.currentUser=this.currentUserSubject.asObservable();
  }

    login(sendData:any){
      
   console.log(sendData);
     return  this.http.post<any>(`http://localhost:8080/api/auth/signin`,sendData)
     .pipe(map(userlist=>{
      //user.authdata= window.btoa(kls.userName+':'+kls.password);
      
      this.currentUserSubject.next({'authenticate':userlist.accessToken});
      console.log(this.currentUserSubject.value.authenticate)
      return userlist;
 
 
     }))
    
   }
   locationSave(sendData:any){
    console.log(sendData);
      return  this.http.post<any>(`http://localhost:8080/api/admin/location/create`,sendData)
      .pipe(map(userlist=>{
       //user.authdata= window.btoa(kls.userName+':'+kls.password);
      console.log(userlist);
      this.locationList();
       return userlist;
  
  
      }))
     
    }
   locationList(){
  
      return  this.http.get<any>(`http://localhost:8080/api/admin/location/list`)
      .pipe(map(userlist=>{
     
       return userlist;
  
  
      }))
     
    }
    categorySave(sendData:any){
      console.log(sendData);
        return  this.http.post<any>(`http://localhost:8080/api/admin/category/create`,sendData)
        .pipe(map(userlist=>{
         //user.authdata= window.btoa(kls.userName+':'+kls.password);
        console.log(userlist);
        this.locationList();
         return userlist;
    
    
        }))
       
      }
    categoryList(){
  
      return  this.http.get<any>(`http://localhost:8080/api/admin/category/list`)
      .pipe(map(userlist=>{
     
       return userlist;
  
  
      }))
     
    }
    classifiedsSave(sendData:any){
      console.log(sendData);
        return  this.http.post<any>(`http://localhost:8080/api/admin/classifieds/create`,sendData)
        .pipe(map(userlist=>{
         //user.authdata= window.btoa(kls.userName+':'+kls.password);
        console.log(userlist);
        this.locationList();
         return userlist;
    
    
        }))
       
      }
    classifiedsList(){
  
      return  this.http.get<any>(`http://localhost:8080/api/admin/classifieds/list`)
      .pipe(map(userlist=>{
     
       return userlist;
  
  
      }))
     
    }
 

   calledservice(){
    return  this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/1`)
    .pipe(map(userlist=>{
     //user.authdata= window.btoa(kls.userName+':'+kls.password);
     
     this.currentUserSubject.next(userlist);
     return userlist;


    }))

   }
   adduser(addUserData:any){
    if(this.currentUserSubject.value==null){
      this.Router.navigate(['/login'],{replaceUrl:true})
    }
    //let headers=new HttpHeaders;
    //var ch=
        //headers=headers.set('Access-control-Allow-Origin','*')
        return this.http.post<any>(`http://localhost:9000/api/authenticate`,addUserData)
        .pipe(map(user=>{
        console.log(user);
         return user;
    
    
        }))
    
       }
    
    
    getList(){
    
    
    
    }
    logout(){
    this.currentUserSubject.next({'authenticate':'false'});
    
    }
    public get currentUserValue():User{
    console.log(this.currentUserSubject.value)
      return this.currentUserSubject.value;
    }
}

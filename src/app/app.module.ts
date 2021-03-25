import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import {RootserviceService}from'./rootservice.service';
import {BasicAuthInterceptor} from './../app/services/intercepts/basic-auth.interceptor'
import {ErrorInterceptor} from './../app/services/intercepts/error.interceptor'
import{HttpClientModule,HTTP_INTERCEPTORS} from'@angular/common/http';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'
import{DashboardModule}from'./modules/dashboard/dashboard.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',loadChildren:'./modules/dashboard/dashboard.module#DashboardModule'},
  {path:'not',component:NotfoundComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes)
  ],exports:[RouterModule],
  providers: [RootserviceService,
    {provide:HTTP_INTERCEPTORS,useClass:BasicAuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

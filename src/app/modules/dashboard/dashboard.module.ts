import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import{AddUserComponent}from'./add-user/add-user.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import{RootserviceService}from './../../rootservice.service';
import{BasicAuthInterceptor} from './../../services/intercepts/basic-auth.interceptor';
import { DataTablesModule } from "angular-datatables";
import{HttpClientModule,HTTP_INTERCEPTORS} from'@angular/common/http';
import{ErrorInterceptor} from './../../services/intercepts/error.interceptor';
import { MerchantsComponent } from './merchants/merchants.component';
import { ClassifieldsComponent } from './classifields/classifields.component';
import { LocationComponent } from './location/location.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
  {path:'',component:MerchantsComponent},

  {path:'addUser',component:AddUserComponent},
  {path:'merchants',component:MerchantsComponent},
  {path:'classifieds',component:ClassifieldsComponent},
  {path:'location',component:LocationComponent},
  {path:'category',component:CategoryComponent}


]
}
  ];

@NgModule({
  declarations: [DashboardComponent,BodyComponent,AddUserComponent, MerchantsComponent, ClassifieldsComponent, LocationComponent, CategoryComponent, HomeComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),DataTablesModule,FormsModule, ReactiveFormsModule
  ], providers: [RootserviceService,
    {provide:HTTP_INTERCEPTORS,useClass:BasicAuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},

  ]
})
export class DashboardModule { }

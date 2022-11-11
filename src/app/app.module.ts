import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
